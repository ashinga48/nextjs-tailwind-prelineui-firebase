'use client'

import axios from 'axios'
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'

import { Header } from './header';
import { Sidebar } from './sidebar';
import { Banner } from './banner';
import { IProduct, Products } from './components/Product';


const DynamicProductsList = dynamic(() => import('./components/Product') as any, {
  ssr: false,
}) as any

const PRODUCTS_API = `https://products-piet2rlhea-uc.a.run.app/`;

export default function Home({}) {

  const [data, setData] = useState<IProduct[]>([]);

  useEffect(() => {
    axios.get(PRODUCTS_API, {})?.then((res) => {
      setData(res.data);
    });
  }, [])

  return (
    <>
      <Header />
      <Sidebar />
      <Banner />
      <DynamicProductsList data={data} />
    </>
  )
}

