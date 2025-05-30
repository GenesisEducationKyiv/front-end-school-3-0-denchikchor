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

/** Параметри запиту до API треків */
export interface TracksQueryParams {
  page?:  number;
  limit?: number;
  search?: string;   // тепер може бути undefined
  genre?:  string;
  sort?: '' | 'title' | 'artist'; 
  order?:  'asc' | 'desc';
}

/** Відповідь API треків з метаданими */
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