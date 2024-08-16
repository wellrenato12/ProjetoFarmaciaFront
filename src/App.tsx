import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { ListarCategorias } from "./components/categorias/listarCategorias/ListarCategorias";
import { DeletarCategoria } from "./components/categorias/deletarCategoria/DeletarCategoria";
import { FormCategoria } from "./components/categorias/formCategoria/FormCategoria";
import { ListaProdutos } from "./components/produtos/listaProdutos/ListaProdutos";
import { FormProduto } from "./components/produtos/formProduto/FormProduto";
import { DeletarProduto } from "./components/produtos/deletarProduto/DeletarProduto";

export function App() {
  return (
    <BrowserRouter>
      <div className="relative h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categorias" element={<ListarCategorias />} />
          <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          <Route path="/cadastroCategoria" element={<FormCategoria />} />
          <Route path="/cadastroCategoria/:id" element={<FormCategoria />} />
          <Route path="/produtos" element={<ListaProdutos />} />
          <Route path="/cadastroProduto" element={<FormProduto />} />
          <Route path="/cadastroProduto/:id" element={<FormProduto />} />
          <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}