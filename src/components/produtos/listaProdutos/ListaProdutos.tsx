import { useEffect, useState } from 'react';
import { buscar } from '../../../services/Service';
import type Produto from '../../../model/Produto';
import { CardProduto } from '../cardProdutos/CardProdutos';

export function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  async function buscarPostagens() {
    try {
      await buscar('/postagens', setProdutos, {
        headers: {},
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error)
    }
  }

  useEffect(() => {
    buscarPostagens();
  }, [produtos.length]);

  return (
    <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {produtos.map((produto) => (
        <CardProduto key={produto.id} produto={produto} />
      ))}
    </div>
  );
}
