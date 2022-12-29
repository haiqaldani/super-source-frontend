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
  const { currentPage, totalPage, query, setCurrentPage } = props;
  const router = useRouter();

  const classPrev = cx({
    "page-item": true,
    disabled: currentPage <= 0,
  });

  const classNext = cx({
    "page-item": true,
    disabled: currentPage >= totalPage-1,
  });

  const classMax = cx({
    "page-item": true,
    "visually-hidden": currentPage >= totalPage-6 ,
  });
  const classMin = cx({
    "page-item": true,
    "visually-hidden": currentPage <= 6 ,
  });

  let pages = [];

  if (totalPage <= 6) {
    // Jika jumlah halaman total kurang dari atau sama dengan 5, tampilkan semua pagination
    pages = Array.from({ length: totalPage }, (_, i) => i + 1);
  }  else if (currentPage + 6 >= totalPage) {
    // Jika currentPage berada dekat akhir dari endPage, tampilkan currentPage - 1 sampai currentPage + 3
    pages = Array.from({ length: 7 }, (_, i) => totalPage-6 + i);
  } else if (currentPage < 6){
    pages = Array.from({ length: 7 }, (_, i) =>  1 + i);
  }else {
    // Tampilkan pagination seperti biasa
    pages = Array.from({ length: 5 }, (_, i) => currentPage-1 + i);
  }

  const onClickPrev = () => {
    setCurrentPage(currentPage - 1);
    const url = {
      pathname: "/search",
      query: {
        q: query,
        page: currentPage-1,
      },
    };
    router.push(url, url, { shallow: true });
  };
  const onClickMin = () => {
    setCurrentPage(0);
    const url = {
      pathname: "/search",
      query: {
        q: query,
        page: 0
      },
    };
    router.push(url, url, { shallow: true });
  };
  const onClickMax = () => {
    setCurrentPage(totalPage - 1);
    const url = {
      pathname: "/search",
      query: {
        q: query,
        page: totalPage-1
      },
    };
    router.push(url, url, { shallow: true });
  };
  const onClickNext = () => {
    setCurrentPage(currentPage + 1);
    const url = {
      pathname: "/search",
      query: {
        q: query,
        page: currentPage + 1
      },
    };
    router.push(url, url, { shallow: true });
  };

  return (
    <>
      <nav aria-label="...">
        <ul className="pagination justify-content-end">
          <li className={classPrev}>
            <button className="page-link" onClick={onClickPrev}>
              Previous
            </button>
          </li>

          <li className={classMin}>
            <button className="page-link" onClick={onClickMin}>
              1
            </button>
          </li>
          <li className={classMin}>
            <button className="page-link disabled">
              ...
            </button>
          </li>
          {pages.map((page) => (
            <>
              <li
                className={cx({
                  "page-item": true,
                  disabled: page === currentPage+1,
                })}
              >
                <button
                  onClick={() => {
                    setCurrentPage(page-1);
                    router.push({
                      pathname: "/search",
                      query: {
                        q: query,
                        page: page-1,
                      },
                    });
                  }}
                  className="page-link"
                >
                  {page}
                </button>
              </li>
            </>
          ))}
          <li className={classMax}>
            <button className="page-link disabled">
              ...
            </button>
          </li>
          <li className={classMax}>
            <button className="page-link" onClick={onClickMax}>
              {totalPage}
            </button>
          </li>
          <li className={classNext}>
            <button className="page-link" onClick={onClickNext}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
