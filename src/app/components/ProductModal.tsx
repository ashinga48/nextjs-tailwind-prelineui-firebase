'use client'

import { useContext } from "react";
import { ProductContext } from "./Product";

export const ProductModal = ({ pid = ''}) => {

    const { currentProduct } = useContext(ProductContext);
    const { img, title } = currentProduct || {} as any;

    return <>
    <button type="button" id="btn-product-modal" className="py-3 hidden px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" data-hs-overlay="#hs-basic-modal-ttt">
        Open modal rrrr
    </button>
    <div id="hs-basic-modal-ttt" className="hs-overlay hidden size-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto pointer-events-none">
            <div className="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-lg sm:w-full sm:mx-auto">
                <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
                  <div className="p-1 overflow-y-auto">
                    <img className="w-full h-auto rounded-md" src={`${img}`} alt={title || ''} />
                    
                  </div>
                  <p className=" mx-2 mb-2">
                      {title || ''}
                    </p>
                </div>
            </div>
        </div>
    </>
}