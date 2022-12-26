import { Dispatch, FC, SetStateAction } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import cx from "classnames";

interface PaginationProps {
  totalPage: number;
  currentPage: number;
  query: string;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export default function Searchbar(props: PaginationProps) {
  const { currentPage, setCurrentPage, totalPage, query } = props;
  const router = useRouter();

  const classPrev = cx({
    "nav-link": true,
    "nav-text": true,
    disabled: currentPage === 1,
  });

  const classNext = cx({
    "nav-link": true,
    "nav-text": true,
    disabled: currentPage === totalPage,
  });

  let startPage = currentPage - 2;
  let endPage = currentPage + 2;

  if (currentPage || 0 < 1) {
    startPage = 1;
    endPage = 5;
    setCurrentPage(1);
  } else if (startPage < 1) {
    startPage = 1;
    endPage = 5;
  }

  if (endPage > totalPage) {
    endPage = totalPage;
    startPage = totalPage - 4;
  }

  return (
    <>
      <nav aria-label="...">
        <ul className="pagination justify-content-end">
          <li className="page-link">
            <Link legacyBehavior
              href="/search"
              as={`/search?q=${query}&page=${currentPage - 1}`}
            >
              <a className={classPrev}>Previous</a>
            </Link>
          </li>

          {Array.from(
            { length: endPage - startPage + 1 },
            (_, i) => startPage + i
          )
            .slice(0, 5)
            .map((page) => (
              <li className="page-item">
                <Link legacyBehavior href="/search" as={`/search?q=${query}&page=${page}`}>
                  <a
                    key={page}
                    className={cx({
                      "page-link": true,
                      disabled: page === currentPage,
                    })}
                  >
                    {page}
                  </a>
                </Link>
              </li>
            ))}

          <li className="page-link">
            <Link legacyBehavior
              href="/search"
              as={`/search?q=${query}&page=${currentPage + 1}`}
            >
              <a className={classNext}>Next</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
