import { useEffect, useState } from "react";
import Navbar from "../components/organism/Navbar";
import Searchbar from "../components/organism/Searchbar";
import AOS from "aos";
import { useRouter } from 'next/router'


export default function Home() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const onClickSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        q: query
      }
    })
  }

  useEffect(() => {
    AOS.init();
  }, [query]);
  return (
    <>
      <div className="container">
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-md-8">
            <h1 className="main-title">SUPRSOURCE</h1>
            <br />
            <Searchbar query={query} setQuery={setQuery} onClickSearch={onClickSearch} />
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
}
