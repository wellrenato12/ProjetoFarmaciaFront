import { useEffect, useState } from 'react';
import { CardCategoria } from '../cardCategoria/CardCategoria';
import { buscar } from '../../../services/Service';
import type Categoria from '../../../model/Categoria';

export function ListarCategorias() {
  const [temas, setTemas] = useState<Categoria[]>([]);

  async function buscarTemas() {
    try {
      await buscar('/temas', setTemas, {});
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.toString().includes('403')) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    buscarTemas();
  }, [temas.length]);

  return (
    <div className="flex justify-center w-full my-4">
      <div className="container flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {temas.map((categoria) => (
            <>
              <CardCategoria key={categoria.id} categoria={categoria} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

