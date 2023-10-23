import { useContext } from 'react';
import { BasketContext } from '../context/basketContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Card = ({ item }) => {
  // context yapısına abone olma
  // context tarfından sağlanan verileri erişimi açar
  const context = useContext(BasketContext);
  const notify = () => toast(" Ürün Sepete Başarıyla Eklenmiştir",{autoClose:800});

  

  return (
    <div className="card py-2" style={{ width: '250px' }}>
      <div className="d-flex justify-content-center">
        <img
          src={item.image}
          height={120}
          className="object-fit-contain"
        />
      </div>

      <div className="card-body d-flex flex-column justify-content-between">
        <h4>{item.title.slice(0, 30) + '...'}</h4>
        <p className="text-success">${item.price}</p>
        <p>{item.category}</p>
        <button
          className="w-100"
          onClick={() =>{notify(), context.addToBasket(item)}}
        >
          Sepete Ekle
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Card;
