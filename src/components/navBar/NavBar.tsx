import { Link } from "react-router-dom";
import './NavBar.css'

export function NavBar() {
  return (
    <div className="flex gap-4 mb-4">
      <ul className="flex gap-4 relative menu">
        <Link to="/home">
          <li className="text-lg font-medium cursor-pointer hover:text-zinc-500 hover:scale-110 transition-all">Home</li>
        </Link>
        <Link to="/produtos">
          <li className="text-lg font-medium cursor-pointer hover:text-zinc-500 hover:scale-110 transition-all">Produtos</li>
        </Link>
        <Link to="/categorias">
          <li className="text-lg font-medium cursor-pointer hover:text-zinc-500 hover:scale-110 transition-all">Categorias</li>
        </Link>
      </ul>
    </div>
  )
}