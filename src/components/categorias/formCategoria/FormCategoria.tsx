import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { atualizar, buscar, cadastrar } from '../../../services/Service';
import type Categoria from '../../../model/Categoria';

export function FormCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria, {
      headers: {
        
      },
    });
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })

    console.log(JSON.stringify(categoria))
  }

  async function gerarNovocategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria, {
          headers: {
            
          }
        })

        retornar()

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        if (error.toString().includes('403')) {
          console.log(error)
        }

      }

    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria, {
          headers: {
            
          }
        })

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        if (error.toString().includes('403')) {
          console.log(error)
        }
      }
    }

    retornar()
  }

  function retornar() {
    navigate("/categorias")
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? 'Cadastre um novo categoria' : 'Editar categoria'}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovocategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição do categoria</label>
          <input
            type="text"
            placeholder="Descrição"
            name='descricao'
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
          type="submit"
        >
          {id === undefined ? 'Cadastrar' : 'Editar'}
        </button>
      </form>
    </div>
  );
}

