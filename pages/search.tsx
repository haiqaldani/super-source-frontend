import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import Navbar from "../components/organism/Navbar";
import Searchbar from "../components/organism/Searchbar";
import Link from "next/link";

import { toast } from "react-toastify";
import Pagination from "../components/organism/Pagination";
import { SupplierTypes, InfoTypes } from "../services/data-types";
import { searchSuppliers } from "../services/supplier/searchSuppliers";
import { toNamespacedPath } from "node:path/win32";

import slugify from "slugify";

export default function Search() {
  const router = useRouter();
  const [query, setQuery] = useState((router.query.q as string) || "");
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [totalResult, setResult] = useState("");
  // const getSearch = useCallback( async () => {
  //   const data = await searchSuppliers(query, page)
  //   setData(data);
  // }, [searchSuppliers])

  useEffect(() => {
    async function getSearch() {
      setQuery(router.query.q as string);
      if (router.query.page) {
        const response = await searchSuppliers(
          router.query.q as string,
          parseInt(router.query.page as string)
        );
        const data = response.data.hits;
        const totalPage = response.data.info.totalPage;
        const totalResult = response.data.info.totalResult;
        setResult(totalResult);
        setTotalPage(totalPage);
        setPage(parseInt(router.query.page as string));
        setData(data);
      } else if ((router.query.q as string) && !page) {
        const response = await searchSuppliers(router.query.q as string);
        const data = response.data.hits;
        const totalPage = response.data.info.totalPage;
        const totalResult = response.data.info.totalResult;
        setResult(totalResult);
        setTotalPage(totalPage);
        setData(data);
      }
    }
    getSearch();
  }, [router]);

  const onClickSearch = () => {
    const url = {
      pathname: "/search",
      query: {
        q: query,
      },
    };
    router.push(url, url, { shallow: true });
  };

  const onClickSupplier = (id: string, name: string) => {
    // const slug = slugify(name, { lower: true});
    // router.push({
    //   pathname: "/detail/[id]",
    //   query: {
    //     id: id,
    //     // name: slug
    //   },
    // });
    router.push(`/detail/${id}`);
  };

  return (
    <>
      <Navbar query={query} setQuery={setQuery} onClickSearch={onClickSearch} />
      <div className="container-fluid">
        <div className="d-flex pt-30">
          <div className="m-4">
            <ul className="list-group">
              <li className="list-group-item active" aria-current="true">
                Filter
              </li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
              <li className="list-group-item">A fourth item</li>
              <li className="list-group-item">And a fifth one</li>
            </ul>
          </div>
          {data ? (
            <div className="">
              <br />
              <p className="text-white text-small">
                Menampilkan 1 - 20 perusahaan dari total {totalResult} untuk{" "}
                 <b>"{query}"</b>
              </p>
              <>
                {data.map((item: SupplierTypes) => (
                  <div
                    className="card mb-3 card-list pointer"
                    onClick={() => onClickSupplier(item.id, item.name)}
                  >
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.city}</p>
                      <p className="card-text">{item.address}</p>
                      <p className="card-text">{item.phoneNumber}</p>
                    </div>
                  </div>
                ))}
              </>
              <Pagination
                currentPage={page}
                totalPage={totalPage}
                query={query}
                setCurrentPage={setPage}
              />
              <br />
            </div>
          ) : (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// interface GetStaticProps {
//   params: {
//     query: string;
//     page?: string;
//   };
// }

// export async function getStaticProps({ params }: GetStaticProps) {
//   const { query, page } = params;
//   const data = await searchSuppliers(query, page);
//   return {
//     props: {
//       dataSuppliers: data,
//     },
//   };
// }
