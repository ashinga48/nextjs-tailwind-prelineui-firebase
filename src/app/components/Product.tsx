// 'use client'
import { createContext, use, useContext, useMemo, useState } from "react";
import { ProductModal } from "./ProductModal";
// import { HSOverlay } from "preline/preline";
// import { Modal } from "./Modal";
import { HSOverlay } from "preline/preline";

export interface IProduct {
    img: string;
    title: string;
}

export const ProductContext = createContext({
  currentProduct: '',
  setCurrentProduct: (product: any) => {},
});

export const Product = ({
    pid,
    img,
    title
  }: any) => {

    const { currentProduct, setCurrentProduct } = useContext(ProductContext);
    
    return <div className="flex flex-col bg-white border shadow-md rounded-md transition cursor-pointer" 
    onClick={() => {
      // const modal = new HSOverlay(document.querySelector('#hs-basic-modal') as any);
      // modal.open();

      setCurrentProduct({
        img,
        title
      } as any)

      const { element } = HSOverlay.getInstance('#hs-basic-modal-ttt' as any, true) as any;
      if(element?.open)
        element.open()
    }}>
    <img className="w-full h-auto rounded-md" src={`${img}`} alt={title || ''} />
    {/* <Modal /> */}
    {/* <ProductModal pid={pid}/> */}
    
    {/* {title && <div className="p-4 md:p-5">
      <h3 className="text-lg font-bold text-gray-800 dark:text-white">
        {`${title}`}
      </h3>
    </div>} */}
  </div>
}
  
export const renderProduct = (each: IProduct, eachIndx: number) => {
    return <Product key={`product-${eachIndx}`} pid={eachIndx} {...each} />
};

export const Products = ({data}: { data: IProduct[] }) => {
  const [currentProduct, setCurrentProduct] = useState<IProduct>();
  const value = useMemo(
    () => ({ currentProduct, setCurrentProduct }), 
    [currentProduct]
  );

  return <ProductContext.Provider value={value as any}>
    <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
      <ProductModal />

      <div className="max-w-[85rem] lg:w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 pt-1">
      {data?.map(renderProduct)}
      </div>
    </div>
  </ProductContext.Provider>
}