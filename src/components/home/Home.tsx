import farmacia from '../../assets/farmacia.jpg'

export function Home() {
  return (
    <main className="max-w-7xl mx-auto space-y-8 mt-10">
      <h1 className="text-[#E31D3C] text-6xl font-bold text-center">Farmácia Drogasil</h1>

      <div className="flex items-center gap-4">
        <img className='size-[550px] object-cover' src={farmacia} alt="farmácia" />
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-4'>
            <strong className='text-center text-xl'>Serviços</strong>
            <p className='text-xl px-12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem modi molestias, laboriosam, cumque debitis earum, ipsa temporibus totam eligendi nulla repellendus? Voluptatibus, doloribus quas corrupti possimus fuga corporis assumenda temporibus.</p>
          </div>
          <div className='flex flex-col gap-4'>
            <strong className='text-center text-xl'>Produtos</strong>
            <p className='text-xl px-12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem modi molestias, laboriosam, cumque debitis earum, ipsa temporibus totam eligendi nulla repellendus? Voluptatibus, doloribus quas corrupti possimus fuga corporis assumenda temporibus.</p>
          </div>
          <div className='flex flex-col gap-4'>
            <strong className='text-center text-xl'>Categorias</strong>
            <p className='text-xl px-12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem modi molestias, laboriosam, cumque debitis earum, ipsa temporibus totam eligendi nulla repellendus? Voluptatibus, doloribus quas corrupti possimus fuga corporis assumenda temporibus.</p>
          </div>
        </div>

      </div>
    </main >
  )
}