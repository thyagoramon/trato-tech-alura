import { useSelector, useDispatch } from "react-redux";

import { resetarCarrinho } from "store/reducers/carrinho";

import Header from "components/Header";
import Item from "components/Item";

import styles from "./Carrinho.module.scss";

export default function Carrinho() {
  const dispatch = useDispatch();

  const { carrinho, total } = useSelector((state) => {
    let total = 0;
    
    const regexp = new RegExp(state.busca, "i");

    const carrinhoReduce = state.carrinho.reduce((itens, itemNoCarrinho) => {
      const item = state.itens.find((item) => item.id === itemNoCarrinho.id);

      total += item.preco * itemNoCarrinho.quantidade;
      
      if (item.titulo.match(regexp)) {
        itens.push({
          ...item,
          quantidade: itemNoCarrinho.quantidade,
        });
      }
      
      return itens;
    }, []);
    return {
      carrinho: carrinhoReduce,
      total,
    };
  });

  return (
    <div>
      <Header
        titulo="Carrinho de compras"
        descricao="Confira produtos que você adicionou ao carrinho."
      />

      <div className={styles.carrinho}>
        {carrinho.length > 0 ? (
          carrinho.map((item) => <Item key={item.id} {...item} carrinho />)
        ) : (
          <h2>Carrinho vazio, adicione algum item!</h2>
        )}
        <div className={styles.total}>
          <strong>Resumo da compra</strong>
          <span>
            Subtotal: <strong> R$ {total.toFixed(2)} </strong>
          </span>
        </div>
        <button
          className={styles.finalizar}
          onClick={() => dispatch(resetarCarrinho())}
        >
          Finalizar compra
        </button>
      </div>
    </div>
  );
}
