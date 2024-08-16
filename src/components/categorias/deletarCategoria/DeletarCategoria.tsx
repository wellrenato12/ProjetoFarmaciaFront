import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { buscar, deletar } from '../../../services/Service';
import type Categoria from '../../../model/Categoria';

export function DeletarCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria, {
        headers: {}
      });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      alert('Categoria não encontrada')
      console.log(error)
    }
  }

  function retornar() {
    navigate('/categorias');
  }

  async function deletarCategoria() {
    try {
      await deletar(`/categorias/${id}`, {
        headers: {}
      });

      alert('Categoria apagada com sucesso');
    } catch (error) {
      alert('Erro ao apagar a Categoria');
      console.log(error);
    }

    retornar();
  }

  return (
    <div className='container w-1/3 mx-auto'>
      <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>

      <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a categoria a seguir?</p>

      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
        <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>Categoria</header>
        <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.nome}</p>
        <div className='flex'>
          <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
          <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center' onClick={deletarCategoria}>
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}
