import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BasketContext } from '../context/basketContext';

const Header = () => {
  const { basket } = useContext(BasketContext);
  // üst taraftaki alışveriş sepeti toplam ürün miktarını hespalama
  const total =  basket.reduce((total, i) => total + i.amount, 0);
  const tprice=basket.reduce((tprice,i)=>tprice+i.price*i.amount,0)
  console.log(tprice);
 


  return (
    <header className="d-flex justify-content-between align-items-center p-4 sticky-top bg-dark">
      <Link to={'/'}>
        <h2>My Store</h2>
      </Link>

      <Link>
      <span className='badge bg-success mx-2 fs-6'>Toplam Tutar: ${tprice.toFixed(2)}</span>
      </Link>

      <Link to={'/sepet'}>
        <i className="bi bi-cart2 fs-2 text-light"></i>
        <span className="badge bg-danger mx-2 fs-6">{total}</span>
      </Link>

     
    </header>
  );
};

export default Header;
