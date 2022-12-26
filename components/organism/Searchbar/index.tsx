import { Dispatch, FC, SetStateAction } from 'react'
import { useRouter } from "next/router";

interface SearchProps {
  loading?: boolean;
  query: string,
  setQuery: Dispatch<SetStateAction<string>>,
  onClickSearch: () => void
}

export default function Searchbar(props: SearchProps) {
  const { loading, query, setQuery, onClickSearch } = props;
  const router = useRouter();

  return (
    <>
      <div className="search">
        <i className="fa fa-search"></i>
        <input
          className="form-control"
          type="text"
          placeholder="Search by name or category"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              onClickSearch();
            }
          }}
        />
        <button
          className="btn text-dark"
          onClick={onClickSearch}
          type="button"
          title="Search"
          aria-label="Search"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {" "}
          Search{" "}
        </button>
      </div>
    </>
  );
}
