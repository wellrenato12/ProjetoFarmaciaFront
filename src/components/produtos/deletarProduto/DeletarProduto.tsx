import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import type Produto from '../../../model/Produto'
import { buscar, deletar } from '../../../services/Service'

export function DeletarProduto() {
  const [produto, setProduto] = useState<Produto>({} as Produto)

  const navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto, {
        headers: {}
      })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.toString().includes('403')) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function retornar() {
    navigate("/produtos")
  }

  async function deletarPostagem() {
    try {
      await deletar(`/produtos/${id}`, {
        headers: {}
      })
    } catch (error) {
      console.log(error)
    }

    retornar()
  }
  return (
    <div className='container w-1/3 mx-auto'>
      <h1 className='text-4xl text-center my-4'>Deletar postagem</h1>

      <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a postagem a seguir?</p>

      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
        <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>Postagem</header>
        <div className="p-4">
          <p className='text-xl h-full'>{produto.nome}</p>
          <p>{produto.descricao}</p>
        </div>
        <div className="flex">
          <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
          <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center' onClick={deletarPostagem}>
            Sim
          </button>
        </div>
      </div>
    </div>
  )
}
