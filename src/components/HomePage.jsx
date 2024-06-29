import React from "react";
import useProducts from "../custom hooks/useProducts";
import ProductList from "./ProductList";
import Navbar from "./Navbar";
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());
function HomePage() {
    const { data, error } = useSWR('https://fakestoreapi.com/products', fetcher);
    if (error) return <div>Failed to load products</div>;
    if (!data) return <div>Loading...</div>;
  return (
    <>
    <Navbar/>
      {data && (
        <ProductList
          data={data}
      
        />
      )}
    </>
  );
}

export default HomePage;
