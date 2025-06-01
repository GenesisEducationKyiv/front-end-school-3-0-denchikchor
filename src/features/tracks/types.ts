export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  genres: string[];
  slug: string;
  coverImage: string;
  audioFile: string;
  createdAt: string;
  updatedAt: string;
}

export interface TracksQueryParams {
  page?: number;
  limit?: number;
  search?: string; 
  sort?: "" | "title" | "artist";
  order?: "asc" | "desc";
}

export interface TracksResponseRaw {
  data: Track[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface TracksResponse {
  data: Track[];
  page: number;
  limit: number;
  totalCount: number;
  totalPages: number;
}
