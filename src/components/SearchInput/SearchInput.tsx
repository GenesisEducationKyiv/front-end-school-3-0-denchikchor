import React, { useRef, useState, useEffect } from "react";
import { useTrackQueryParams } from "../../hooks/useTrackQueryParams";
import { useDebounce } from "../../hooks/useDebounce";
import SearchField from "../UI/SearchField/SearchField";

const SearchInput: React.FC = () => {
  const { query: params, setParams } = useTrackQueryParams();
  const [local, setLocal] = useState(params.search ?? "");
  const debouncedLocal = useDebounce(local, 500);
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    setParams({ search: debouncedLocal || undefined, page: 1 });
  }, [debouncedLocal, setParams]);

  return <SearchField value={local} onChange={setLocal} />;
};

export default SearchInput;
