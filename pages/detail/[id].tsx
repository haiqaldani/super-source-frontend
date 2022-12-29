import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import slugify from "slugify";
import CardDetail from "../../components/organism/CardDetail";
import Navbar from "../../components/organism/Navbar";
import { SupplierTypes } from "../../services/data-types";
import { getDetailSupplier } from "../../services/supplier/getDetailSupplier";
import { getSuppliers } from "../../services/supplier/getSuppliers";

interface DetailProps {
  data: SupplierTypes;
}
export default function Detail({ data }: DetailProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();
  // const [isRefreshing, setIsRefreshing] = useState(false);

  // const refreshData = () => {
  //   router.replace(router.asPath);
  //   setIsRefreshing(true);
  // };
  // useEffect(() => {
  //   setIsRefreshing(false);
  // }, []);

  const onClickSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        q: query,
      },
    });
  };
  return (
    <>
      <Navbar onClickSearch={onClickSearch} query={query} setQuery={setQuery} />
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          {/* <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">
              Top Up
            </h2>
            <p className="text-lg color-palette-1 mb-0">
              Perkuat akun dan jadilah pemenang
            </p>
          </div> */}
          <div className="row">
            <CardDetail data={data} />
          </div>
        </div>
      </section>
    </>
  );
}

// export async function getStaticPaths() {
//   console.log("mulai");
//   const response = await getSuppliers();
//   //creating an array of objects
//   console.log("berhenti");
//   const paths = response.map((item: SupplierTypes) => ({
//     params: { id: item.id },
//     // params: { name: slugify(item.name,{lower: true}) },
//   }));

//   console.log(paths);

//   return {
//     paths: paths,
//     fallback: false,
//   };
// }

interface GetServerSideProps {
  params: {
    id: string;
  };
}

export async function getServerSideProps({ params }: GetServerSideProps) {
  const { id } = params;
  const data = await getDetailSupplier(id);
  console.log(data);
  return {
    props: {
      data: data.data,
    },
  };
}
