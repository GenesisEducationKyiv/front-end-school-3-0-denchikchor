export const typeDefs = `
  type Track {
    id: ID!
    title: String!
    artist: String!
    album: String
    genres: [String!]!
    slug: String!
    coverImage: String
    audioFile: String
    createdAt: String!
    updatedAt: String!
  }

  type PaginatedTracks {
    data: [Track!]!
    meta: PaginationMeta!
  }

  type PaginationMeta {
    total: Int!
    page: Int!
    limit: Int!
    totalPages: Int!
  }

  type BatchDeleteResponse {
    success: [ID!]!
    failed: [ID!]!
  }

  type Query {
    health: String!
    genres: [String!]!
    tracks(
      page: Int, limit: Int, sort: String, order: String, search: String, genre: String, artist: String
    ): PaginatedTracks!
    track(slug: String!): Track
  }

  input CreateTrackInput {
    title: String!
    artist: String!
    album: String
    genres: [String!]!
    coverImage: String
  }

  input UpdateTrackInput {
    title: String
    artist: String
    album: String
    genres: [String!]
    coverImage: String
    audioFile: String
  }

  type Mutation {
    createTrack(input: CreateTrackInput!): Track!
    updateTrack(id: ID!, input: UpdateTrackInput!): Track!
    deleteTrack(id: ID!): Boolean!
    deleteTracks(ids: [ID!]!): BatchDeleteResponse!
  }
`; 