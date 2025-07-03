import {
  getGenres,
  getTracks,
  createTrack as dbCreateTrack,
  updateTrack as dbUpdateTrack,
  getTrackById,
  deleteTrack as dbDeleteTrack,
  deleteMultipleTracks as dbDeleteMultipleTracks,
  saveAudioFile,
  deleteAudioFile,
  getTrackBySlug,
} from '../utils/db';
import { createSlug } from '../utils/slug';

export const resolvers = {
  Query: {
    health: async () => 'ok',
    genres: async () => {
      try {
        return await getGenres();
      } catch (error) {
        console.error('Error in genres resolver:', error);
        throw new Error('Failed to fetch genres');
      }
    },
    tracks: async (_parent: unknown, args: any) => {
      try {
        const params = {
          page: args.page,
          limit: args.limit,
          sort: args.sort,
          order: args.order,
          search: args.search,
          genre: args.genre,
          artist: args.artist,
        };
        const { tracks, total } = await getTracks(params);
        const page = params.page || 1;
        const limit = params.limit || 10;
        return {
          data: tracks,
          meta: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
          },
        };
      } catch (error) {
        console.error('Error in tracks resolver:', error);
        throw new Error('Failed to fetch tracks');
      }
    },
    track: async (_parent: unknown, args: { slug: string }) => {
      try {
        return await getTrackBySlug(args.slug);
      } catch (error) {
        console.error('Error in track resolver:', error);
        throw new Error('Failed to fetch track');
      }
    },
  },

  Mutation: {
    createTrack: async (
      _parent: unknown,
      { input }: { input: { title: string; artist: string; album?: string; genres: string[]; coverImage?: string } }
    ) => {
      try {
        const { title, artist, album, genres, coverImage } = input;
        if (!title || !artist || !genres.length) {
          throw new Error('Title, artist, and genres are required');
        }
        const slug = createSlug(title);
        const newTrack = await dbCreateTrack({
          title,
          artist,
          album,
          genres,
          coverImage,
          slug,
        });
        return newTrack;
      } catch (error) {
        console.error('Error in createTrack resolver:', error);
        throw new Error('Failed to create track');
      }
    },

    updateTrack: async (
      _parent: unknown,
      { id, input }: { id: string; input: Partial<{ title: string; artist: string; album?: string; genres: string[]; coverImage?: string }> }
    ) => {
      try {
        const existingTrack = await getTrackById(id);
        if (!existingTrack) {
          throw new Error('Track not found');
        }
        const updates: any = { ...input };
        if (input.title && input.title !== existingTrack.title) {
          updates.slug = createSlug(input.title);
        }
        const updated = await dbUpdateTrack(id, updates);
        if (!updated) {
          throw new Error('Failed to update track');
        }
        return updated;
      } catch (error) {
        console.error('Error in updateTrack resolver:', error);
        throw new Error('Failed to update track');
      }
    },

    deleteTrack: async (_parent: unknown, { id }: { id: string }) => {
      try {
        return await dbDeleteTrack(id);
      } catch (error) {
        console.error('Error in deleteTrack resolver:', error);
        throw new Error('Failed to delete track');
      }
    },

    deleteTracks: async (_parent: unknown, { ids }: { ids: string[] }) => {
      try {
        return await dbDeleteMultipleTracks(ids);
      } catch (error) {
        console.error('Error in deleteTracks resolver:', error);
        throw new Error('Failed to delete tracks');
      }
    },

    uploadTrackFile: async (_parent: unknown, args: any) => {
      try {
        const { id, file } = args;
        const upload = await file;
        const { filename, mimetype, createReadStream } = upload;

        const allowed = ['audio/mpeg', 'audio/wav', 'audio/mp3', 'audio/x-wav'];
        if (!allowed.includes(mimetype)) {
          throw new Error('Invalid file type. Only MP3 and WAV allowed.');
        }

        const stream = createReadStream();
        const chunks: Buffer[] = [];
        for await (const chunk of stream) chunks.push(chunk);
        const buffer = Buffer.concat(chunks);
        if (buffer.length > 10 * 1024 * 1024) {
          throw new Error('File too large. Max 10MB.');
        }

        const existing = await getTrackById(id);
        if (!existing) {
          throw new Error('Track not found');
        }

        const fileName = await saveAudioFile(id, filename, buffer);
        const updatedTrack = await dbUpdateTrack(id, { audioFile: fileName });
        if (!updatedTrack) {
          throw new Error('Failed to save audio file');
        }
        return updatedTrack;
      } catch (error) {
        console.error('Error in uploadTrackFile resolver:', error);
        throw error;
      }
    },

    deleteTrackFile: async (_parent: unknown, { id }: { id: string }) => {
      try {
        const existing = await getTrackById(id);
        if (!existing) {
          throw new Error('Track not found');
        }
        if (!existing.audioFile) {
          throw new Error('No audio file to delete');
        }
        const success = await deleteAudioFile(id);
        if (!success) {
          throw new Error('Failed to delete audio file');
        }
        return await getTrackById(id);
      } catch (error) {
        console.error('Error in deleteTrackFile resolver:', error);
        throw new Error('Failed to delete track file');
      }
    },
  },
};
