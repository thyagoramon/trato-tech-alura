import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { mudarBusca, resetarBusca } from 'store/reducers/busca';

import styles from './Busca.module.scss';

export default function Busca() {
  const busca = useSelector(state => state.busca);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(resetarBusca());
  }, [location.pathname, dispatch])

  return (
    <div className={styles.busca}>
      <input
        className={styles.input}
        type="search"
        placeholder='O que você procura?'
        value={busca}
        onChange={e => dispatch(mudarBusca(e.target.value))}
      />
    </div>
  )
}