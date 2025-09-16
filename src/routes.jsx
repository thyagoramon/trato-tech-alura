import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "pages/Home";
import Categoria from "pages/Categoria";
import Carrinho from "pages/Carrinho";

import PaginaPadrao from "components/PaginaPadrao";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path="/categoria/:nomeCategoria" element={<Categoria />} />
          <Route path="carrinho" element={<Carrinho />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
