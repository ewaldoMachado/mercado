
import React from 'react';
import ListaProdutos from '@/components/produto/ListaProdutos';


export default function Home() {
  return (
    <div className = " flex-1 flex flex-col py-10 gap-5 container">
      <ListaProdutos/>
    </div>
  )
}
