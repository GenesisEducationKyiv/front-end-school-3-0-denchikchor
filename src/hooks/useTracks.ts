import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const useTracks = () => {
  const { items, status, page, limit, totalCount, totalPages, error } = useSelector(
    (state: RootState) => state.tracks
  );
  return { items, status, page, limit, totalCount, totalPages, error };
};
