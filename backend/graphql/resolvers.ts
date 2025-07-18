import {
  getGenres,
  getTracks,
  createTrack,
  updateTrack,
  getTrackById,
  deleteTrack,
  deleteMultipleTracks,
  saveAudioFile,
  deleteAudioFile,
} from "../utils/db";
import {
  getAllTracks,
  getTrack,
  addTrack,
  updateTrackById,
  removeTrack,
  removeTracks,
} from "../controllers/tracks.controller";
import { createSlug } from "../utils/slug";
import { allowedMimeTypes, maxSize } from "./constants";

export const resolvers = {
  Query: {
    health: async () => "ok",
    genres: async () => {
      return getGenres();
    },
    tracks: async (_parent: any, args: any) => {
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
    },
    track: async (_parent: any, args: { slug: string }, context: any) => {
      return getTrack(
        { ...context.request, params: { slug: args.slug } },
        context.reply,
      );
    },
  },
  Mutation: {
    createTrack: async (_parent: any, args: any) => {
      const { title, artist, album, genres, coverImage } = args.input;
      if (!title || !artist || !genres) {
        throw new Error("Title, artist, and genres are required");
      }
      const slug = createSlug(title);
      const newTrack = await createTrack({
        title,
        artist,
        album,
        genres,
        coverImage,
        slug,
      });
      return newTrack;
    },
    updateTrack: async (_parent: any, args: any) => {
      const { id, input } = args;
      const existingTrack = await getTrackById(id);
      if (!existingTrack) {
        throw new Error("Track not found");
      }
      let updates = { ...input };
      if (input.title && input.title !== existingTrack.title) {
        const { createSlug } = await import("../utils/slug");
        updates.slug = createSlug(input.title);
      }
      const updated = await updateTrack(id, updates);
      if (!updated) {
        throw new Error("Failed to update track");
      }
      return updated;
    },
    deleteTrack: async (_parent: any, args: any) => {
      const { id } = args;
      const result = await deleteTrack(id);
      return result;
    },
    deleteTracks: async (_parent: any, args: any) => {
      const { ids } = args;
      const result = await deleteMultipleTracks(ids);
      return result;
    },
    uploadTrackFile: async (_parent: any, args: any) => {
      const { id, file } = args;

      try {
        // Await the file upload
        const upload = await file;
        const { filename, mimetype, createReadStream } = upload.file;

        if (!allowedMimeTypes.includes(mimetype)) {
          throw new Error(
            "Invalid file type. Only MP3 and WAV files are allowed.",
          );
        }

        // Read file stream
        const stream = createReadStream();
        const chunks: Buffer[] = [];

        for await (const chunk of stream) {
          chunks.push(chunk);
        }

        const buffer = Buffer.concat(chunks);

        if (buffer.length > maxSize) {
          throw new Error("File is too large. Maximum size is 10MB.");
        }

        // Check if track exists
        const existingTrack = await getTrackById(id);
        if (!existingTrack) {
          throw new Error("Track not found");
        }

        // Save the audio file
        const fileName = await saveAudioFile(id, filename, buffer);

        // Update track with audio file reference
        const updatedTrack = await updateTrack(id, { audioFile: fileName });

        if (!updatedTrack) {
          throw new Error("Failed to update track with audio file");
        }

        return updatedTrack;
      } catch (error) {
        console.error("Error uploading file:", error);
        throw error;
      }
    },
    deleteTrackFile: async (_parent: any, args: any) => {
      const { id } = args;
      const existingTrack = await getTrackById(id);
      if (!existingTrack) {
        throw new Error("Track not found");
      }
      if (!existingTrack.audioFile) {
        throw new Error("Track has no audio file");
      }
      const success = await deleteAudioFile(id);
      if (!success) {
        throw new Error("Failed to delete audio file");
      }
      const updatedTrack = await getTrackById(id);
      return updatedTrack;
    },
  },
};
