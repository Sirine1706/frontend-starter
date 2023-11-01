import React from "react";
import { useLocation, useSearchParams, useNavigate } from "react-router-dom";

import useDebounce from "../../../hooks/useDebounce";
import SearchIcon from "../../../components/icons/SearchIcon";
import { useAppDispatch } from "../../../hooks/redux";
import videoThunks from "../../../store/slices/video/thunk";

type Props = {};

function index({}: Props) {
  const location = useLocation();
  const dispatch: Function = useAppDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = React.useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch((e.target as HTMLInputElement).value);
    e.preventDefault();
  };

  useDebounce(
    () => {
      navigate(`?search=${search}`);
    },
    500,
    [search]
  );

  React.useEffect(() => {
    if (location.pathname.includes("plan/listing")) {
      dispatch(videoThunks.getVideoList({ search: searchQuery }));
    }
  }, [searchQuery]);

  return (
    <form>
      <div className="relative">
        <button className="absolute top-1/2 right-0 -translate-y-1/2">
          <SearchIcon />
        </button>

        <input
          type="text"
          name="search"
          value={search}
          onChange={(e: React.FormEvent<HTMLInputElement>) => handleSearch(e)}
          placeholder="Type to search..."
          className="w-full bg-transparent pr-4 pl-2 focus:outline-none"
        />
      </div>
    </form>
  );
}

export default index;
