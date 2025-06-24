import { useLocation, useNavigate } from "react-router-dom";
import { pipe, O } from "@mobily/ts-belt";
import { useCallback, useMemo } from "react";
import type { TracksQueryParams } from "../features/tracks/types";

export function useTrackQueryParams() {
  // read raw query string from current URL
  const { search } = useLocation();
  const navigate = useNavigate();

  // memoize URLSearchParams so it changes only when `search` updates
  const params = useMemo(() => new URLSearchParams(search), [search]);

  // parse "page" param or default to 1
  const page: number = pipe(
    params.get("page"),
    O.fromNullable,
    O.map((s) => parseInt(s, 10)),
    O.filter<number>(Number.isFinite),
    O.getWithDefault<number>(1),
  );

  // parse "limit" param or default to 10
  const limit: number = pipe(
    params.get("limit"),
    O.fromNullable,
    O.map((s) => parseInt(s, 10)),
    O.filter<number>(Number.isFinite),
    O.getWithDefault<number>(10),
  );

  // parse "sort" param
  const sort: TracksQueryParams["sort"] = pipe(
    params.get("sort") as TracksQueryParams["sort"] | null,
    O.fromNullable,
    O.getWithDefault<TracksQueryParams["sort"]>(""),
  );

  // parse "order" param
  const order: TracksQueryParams["order"] = pipe(
    params.get("order") as TracksQueryParams["order"] | null,
    O.fromNullable,
    O.getWithDefault<TracksQueryParams["order"]>("asc"),
  );

  // parse "search" param
  const searchText: string = pipe(
    params.get("search"),
    O.fromNullable,
    O.getWithDefault<string>(""),
  );

  // parse "genre" param
  const genre: string = pipe(
    params.get("genre"),
    O.fromNullable,
    O.getWithDefault<string>(""),
  );

  // combine parsed values into a single query object, memoized on changes
  const query = useMemo<TracksQueryParams>(
    () => ({
      page,
      limit,
      sort,
      order,
      search: searchText || undefined,
      genre: genre || undefined,
    }),
    [page, limit, sort, order, searchText, genre],
  );

  //Bulk‐update URL query parameters in one navigation action.
  const setParams = useCallback(
    (updates: Partial<TracksQueryParams>) => {
      const p = new URLSearchParams(window.location.search);

      (
        Object.entries(updates) as [
          keyof TracksQueryParams,
          TracksQueryParams[keyof TracksQueryParams],
        ][]
      ).forEach(([key, value]) => {
        if (value == null || value === "") {
          p.delete(key as string);
        } else {
          p.set(key as string, String(value));
        }
      });

      // Replace the current history entry with the updated search string
      void navigate({ search: p.toString() }, { replace: true });
    },
    [navigate],
  );

  // expose the current query and setter
  return { query, setParams };
}
