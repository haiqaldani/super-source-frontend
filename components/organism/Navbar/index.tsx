import React from "react";
import { Dispatch, FC, SetStateAction } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface Navbarprops {
  loading?: boolean;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  onClickSearch: () => void;
}

export default function Navbar(props: Navbarprops) {
  const { loading, query, setQuery, onClickSearch } = props;
  const router = useRouter();
  return (
    <nav className="navbar navbar-main navbar-expand-lg">
      <div className="container-fluid grid gap-4">
        <Link href="/" legacyBehavior>
          <a className="navbar-brand m-3 logo">SUPRSOURCE</a>
        </Link>
        <div className="collapse navbar-collapse searchbar">
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
      </div>
    </nav>
  );
}
