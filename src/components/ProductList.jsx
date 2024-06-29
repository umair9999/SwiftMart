import React from "react";
import { Link } from "react-router-dom";
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

function ProductList() {
  const { data, error } = useSWR('https://fakestoreapi.com/products', fetcher);
  if (error) return <div>Failed to load products</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <>
    <section className="text-gray-600 body-font m-auto">
    <h1 className="text-center py-8 text-[40px] font-semibold font-sans text-gray-800 ">Our Products</h1>
      <div className="container px-5 py-4 mx-auto">
        <div className="flex flex-wrap ">
          
          {data &&
            data.map((products) => {
              return (
                <div
                  class="w-[350px] border-2 border-gray rounded-lg m-3 p-2"
                  key={products.id}
                >
                  <Link to={`/products/${products.id}`}>
                  <section class="text-gray-600 body-font">
                      <div class="container  mx-auto">
                        <div class="flex flex-wrap">


                          <div class="p-4 md:w-1/3">
                            <div class=" w-[300px] center overflow-hidden">
                              <img class="block w-52 h-48 rounded object-center ml-12 object-contain overflow-hidden" src={products.image} alt="blog" />
                              <div class="p-6">
                                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{products.category}</h2>
                                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{products.title}</h1>
                                <p class="title-font text-lg font-medium text-gray-800 mb-3">${products.price}</p>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>

      </section>
    </>
  );
}

export default ProductList;
