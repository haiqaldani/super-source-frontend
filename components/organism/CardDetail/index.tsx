import React from "react";
import { Dispatch, FC, SetStateAction } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { CategoryTypes } from "../../../services/data-types";

interface Detailprops {
  loading?: boolean;
  data: {
    name: string;
    address: string;
    city: string;
    phoneNumber: string;
    category: CategoryTypes[];
  };
}

export default function CardDetail(props: Detailprops) {
  const { loading, data } = props;
  const router = useRouter();




  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          {/* <div className="col-md-4">
            <img src="" className="img-fluid rounded-start" alt="..." />
          </div> */}
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
              <p className="card-text">{data.phoneNumber}</p>
              <p className="card-text">{data.address}</p>
              <p className="card-text">{data.city}</p>
              {/* {data.category.map((item: CategoryTypes) => (
                <>
                  <p className="card-text">{item.name}</p>
                  <p className="card-text">{item.mainCategory.name}</p>
                </>
              ))} */}

              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
