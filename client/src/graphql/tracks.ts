import { gql } from "@apollo/client";

export const GET_TRACKS = gql`
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

export const CREATE_TRACK = gql`
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

export const UPDATE_TRACK = gql`
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

export const DELETE_TRACK = gql`
  mutation DeleteTrack($id: ID!) {
    deleteTrack(id: $id)
  }
`;

export const BATCH_DELETE_TRACKS = gql`
  mutation DeleteTracks($ids: [ID!]!) {
    deleteTracks(ids: $ids) {
      success
      failed
    }
  }
`;
