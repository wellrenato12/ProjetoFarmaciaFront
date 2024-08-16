import { Link } from 'react-router-dom'
import type Produto from '../../../model/Produto'

interface CardProdutoProps {
  produto: Produto
}

export function CardProduto({ produto }: CardProdutoProps) {
  return (
    <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
      <div className='p-4 '>
        <h4 className='text-lg font-semibold uppercase'>{produto.nome}</h4>
        <p>{produto.descricao}</p>
        <p>Tema: {produto.categoria?.nome}</p>
        <p>Data: {new Intl.DateTimeFormat(undefined, {
          dateStyle: 'full',
          timeStyle: 'medium',
        }).format(new Date(produto.data))}</p>
      </div>
      <div className="flex">
        <Link to={`/editarprodutoagem/${produto.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarprodutoagem/${produto.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}
