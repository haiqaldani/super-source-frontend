import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import Navbar from "../components/organism/Navbar";
import Searchbar from "../components/organism/Searchbar";
import Pagination from "../components/organism/Pagination";
import { SupplierTypes, InfoTypes } from "../services/data-types";
import { searchSuppliers } from "../services/supplier/searchSuppliers";
import { info } from "console";

export default function Search() {
  const router = useRouter();
  const [query, setQuery] = useState((router.query.q as string) || "");
  const [page, setPage] = useState((router.query.page as string) || "0");
  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState("");

  // const getSearch = useCallback( async () => {
  //   const data = await searchSuppliers(query, page)
  //   setData(data);
  // }, [searchSuppliers])

  useEffect(() => {
    async function getSearch() {
      const response = await searchSuppliers(query, page);
      const data = response.data.hits;
      const totalPage = response.data.info.totalPage;
      setTotalPage(totalPage);
      setData(data);
    }
    getSearch();
  }, [query]);

  const onClickSearch = () => {
    const url = {
      pathname: "/search",
      query: {
        q: query,
      },
    };
  };

  //   router.push(url, url, { shallow: true });
  // };
  const onClickPage = () => {
    const url = {
      pathname: "/search",
      query: {
        q: query,
        page: page,
      },
    };
    router.push(url, url, { shallow: true });
  };
  const onClickNext = () => {
    const url = {
      pathname: "/search",
      query: {
        q: query,
        page: page,
      },
    };
    router.push(url, url, { shallow: true });
  };
  const onClickPrev = () => {
    const url = {
      pathname: "/search",
      query: {
        q: query,
        page: page,
      },
    };
    router.push(url, url, { shallow: true });
  };

  const onClickSupplier = (id: string) => {
    router.push(`/supplier/${id}`);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row pt-30 pb-50 d-flex justify-content-center align-items-center">
          <div className="col-md-8">
            <Searchbar
              query={query}
              setQuery={setQuery}
              onClickSearch={onClickSearch}
            />
            <>
              {data.map((item: SupplierTypes) => (
                <div className="mt-30">
                  <div
                    className="card mb-3"
                    onClick={() => onClickSupplier(item.id)}
                  >
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.city}</p>
                      <p className="card-text">{item.address}</p>
                      <p className="card-text">{item.phoneNumber}</p>
                    </div>
                  </div>
                </div>
              ))}
            </>
            <Pagination
              query={query}
              setCurrentPage={setPage}
              currentPage={parseInt(page)}
              totalPage={parseInt(totalPage)}
            />
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

// interface GetStaticProps {
//   params: {
//     query: string;
//     page?: number;
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
