'use client'

import axios from 'axios'
import { useEffect, useState } from 'react';

import { Header } from './header';
import { Sidebar } from './sidebar';
import { Banner } from './banner';
import { IProduct, Products } from './components/Product';
import { Modal } from './components/Modal';

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
      <Products data={data} />
    </>
  )
}

