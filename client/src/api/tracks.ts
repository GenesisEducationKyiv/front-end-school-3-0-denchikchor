import { client } from "../apollo/client";
import { gql } from "@apollo/client";
import { fromPromise, ok, err, type Result } from "neverthrow";
import type { ApiError } from "./apiErrors";
import type {
  Track,
  TracksQueryParams,
  TracksResponse,
} from "../features/tracks/types";

// --- Queries & Mutations ---
const GET_TRACKS = gql`
  query GetTracks(
    $page: Int
    $limit: Int
    $sort: String
    $order: String
    $search: String
    $genre: String
    $artist: String
  ) {
    tracks(
      page: $page
      limit: $limit
      sort: $sort
      order: $order
      search: $search
      genre: $genre
      artist: $artist
    ) {
      data {
        id
        title
        artist
        album
        genres
        slug
        coverImage
        audioFile
        createdAt
        updatedAt
      }
      meta {
        total
        page
        limit
        totalPages
      }
    }
  }
`;

const CREATE_TRACK = gql`
  mutation CreateTrack($input: CreateTrackInput!) {
    createTrack(input: $input) {
      id
      title
      artist
      album
      genres
      slug
      coverImage
      audioFile
      createdAt
      updatedAt
    }
  }
`;

const UPDATE_TRACK = gql`
  mutation UpdateTrack($id: ID!, $input: UpdateTrackInput!) {
    updateTrack(id: $id, input: $input) {
      id
      title
      artist
      album
      genres
      slug
      coverImage
      audioFile
      createdAt
      updatedAt
    }
  }
`;

const DELETE_TRACK = gql`
  mutation DeleteTrack($id: ID!) {
    deleteTrack(id: $id)
  }
`;

const UPLOAD_TRACK_FILE = gql`
  mutation UploadTrackFile($id: ID!, $file: Upload!) {
    uploadTrackFile(id: $id, file: $file) {
      id
      title
      artist
      album
      genres
      slug
      coverImage
      audioFile
      createdAt
      updatedAt
    }
  }
`;

const DELETE_TRACK_FILE = gql`
  mutation DeleteTrackFile($id: ID!) {
    deleteTrackFile(id: $id) {
      id
      audioFile
    }
  }
`;

// --- Payload Interfaces ---
export interface CreateTrackPayload {
  title: string;
  artist: string;
  album: string;
  genres: string[];
  coverImage?: string;
}

export interface EditTrackPayload extends CreateTrackPayload {
  id: string;
}

// --- Helper for safe error messages ---
function getErrorMessage(e: unknown): string {
  return e instanceof Error ? e.message : String(e);
}

// --- API Functions ---
export const getTracks = async (
  params: TracksQueryParams = {},
): Promise<Result<TracksResponse, ApiError>> => {
  const variables = Object.fromEntries(
    Object.entries(params).filter(([, v]) => v != null && v !== ""),
  );

  const promise = client.query<{
    tracks: {
      data: Track[];
      meta: { total: number; page: number; limit: number; totalPages: number };
    };
  }>({
    query: GET_TRACKS,
    variables,
    fetchPolicy: "network-only",
  });

  const result = await fromPromise(promise, (e: unknown) => ({
    message: getErrorMessage(e),
  }));
  return result.map((res) => {
    const { data, meta } = res.data.tracks;
    return {
      data,
      page: meta.page,
      limit: meta.limit,
      totalCount: meta.total,
      totalPages: meta.totalPages,
    };
  });
};

export const createTrack = async (
  payload: CreateTrackPayload,
): Promise<Result<Track, ApiError>> => {
  const promise = client.mutate<{ createTrack: Track }>({
    mutation: CREATE_TRACK,
    variables: { input: payload },
  });

  const result = await fromPromise(promise, (e: unknown) => ({
    message: getErrorMessage(e),
  }));
  return result.map((res) => res.data!.createTrack);
};

export const editTrack = async (
  payload: EditTrackPayload,
): Promise<Result<Track, ApiError>> => {
  const { id, ...input } = payload;

  const promise = client.mutate<{ updateTrack: Track }>({
    mutation: UPDATE_TRACK,
    variables: { id, input },
  });

  const result = await fromPromise(promise, (e: unknown) => ({
    message: getErrorMessage(e),
  }));
  return result.map((res) => res.data!.updateTrack);
};

export const deleteTrack = async (
  id: string,
): Promise<Result<void, ApiError>> => {
  const promise = client.mutate<{ deleteTrack: boolean }>({
    mutation: DELETE_TRACK,
    variables: { id },
  });

  const result = await fromPromise(promise, (e: unknown) => ({
    message: getErrorMessage(e),
  }));
  return result.andThen((res) =>
    res.data!.deleteTrack ? ok(undefined) : err({ message: "Delete failed" }),
  );
};

export const uploadTrackFile = async (
  id: string,
  file: File,
): Promise<Result<Track, ApiError>> => {
  const promise = client.mutate<{ uploadTrackFile: Track }>({
    mutation: UPLOAD_TRACK_FILE,
    variables: { id, file },
  });

  const result = await fromPromise(promise, (e: unknown) => ({
    message: getErrorMessage(e),
  }));
  return result.map((res) => res.data!.uploadTrackFile);
};

export const removeTrackFile = async (
  id: string,
): Promise<Result<Track, ApiError>> => {
  const promise = client.mutate<{ deleteTrackFile: Track }>({
    mutation: DELETE_TRACK_FILE,
    variables: { id },
  });

  const result = await fromPromise(promise, (e: unknown) => ({
    message: getErrorMessage(e),
  }));
  return result.map((res) => res.data!.deleteTrackFile);
};
