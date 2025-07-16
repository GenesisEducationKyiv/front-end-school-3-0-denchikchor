import { gql } from "@apollo/client";

export const GET_GENRES = gql`
  query GetGenres {
    genres
  }
`;

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

export const GET_TRACK = gql`
  query GetTrack($slug: String!) {
    track(slug: $slug) {
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
