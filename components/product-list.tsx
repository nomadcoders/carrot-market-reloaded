"use client";

import { InitialProducts } from "@/app/(tabs)/home/page";
import ListProduct from "./list-product";
import { useEffect, useRef, useState } from "react";
import { getMoreProducts } from "@/app/(tabs)/home/actions";

interface ProductListProps {
  initialProducts: InitialProducts;
}

export default function ProductList({ initialProducts }: ProductListProps) {
  const [products, setProducts] = useState(initialProducts);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);
  const trigger = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    // const observer = new IntersectionObserver(
    //   async (
    //     entries: IntersectionObserverEntry[],
    //     observer: IntersectionObserver
    //   ) => {
    //     const element = entries[0];
    //     if (element.isIntersecting && trigger.current) {
    //       observer.unobserve(trigger.current);
    //       setIsLoading(true);
    //       const newProducts = await getMoreProducts(page + 1);
    //       if (newProducts.length !== 0) {
    //         setProducts((prev) => [...prev, ...newProducts]);
    //         setPage((prev) => prev + 1);
    //       } else {
    //         setIsLastPage(true);
    //       }
    //       setIsLoading(false);
    //     }
    //   },
    //   {
    //     threshold: 1.0,
    //   }
    // );
    // if (trigger.current) {
    //   observer.observe(trigger.current);
    // }
    // return () => {
    //   observer.disconnect();
    // };
  }, [page]);
  return (
    <div className="p-5 flex flex-col gap-5">
      {products.map((product) => (
        <ListProduct key={product.id} {...product} />
      ))}
      {/* {!isLastPage ? (
        <span
          ref={trigger}
          className="text-sm font-semibold bg-orange-500 w-fit mx-auto px-3 py-2 rounded-md hover:opacity-90 active:scale-95"
        >
          {isLoading ? "로딩 중" : "Load more"}
        </span>
      ) : null} */}
    </div>
  );
}
