import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState,
  reducers: {
    mudarCarrinho: (state, action) => {
      //state = estado do slice no store (carrinho)
      //action = contém as propriedade da ação, como o payload
      //action pode ser substituido por { payload }

      //verifica se o item já está no carrinho
      const temItem = state.some((item) => item.id === action.payload);

      //se não está, adiciona
      if (!temItem)
        return [
          ...state,
          {
            id: action.payload,
            quantidade: 1,
          },
        ];

      //se já está, remove
      return state.filter((item) => item.id !== action.payload);
    },
    mudarQuantidade: (state, { payload }) => {
      state = state.map((itemNoCarrinho) => {
        if (itemNoCarrinho.id === payload.id) {
          itemNoCarrinho.quantidade += payload.quantidade;
        }
        return itemNoCarrinho;
      });
    },
    resetarCarrinho: () => initialState,
  },
});

export const { mudarCarrinho, mudarQuantidade, resetarCarrinho } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;
