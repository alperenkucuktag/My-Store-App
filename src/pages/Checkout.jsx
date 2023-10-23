import { useContext } from 'react';
import { BasketContext } from '../context/basketContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Checkout = () => {
  const context = useContext(BasketContext);
  const notify = () => toast("Ürün başarıyla eklenmiştir",{autoClose:800});
  const nontify = () => toast("Sepetten ürün çıkardınız",{autoClose:800});
  
  
  return (
    <div>
      
      {/* sepette ürün yoksa */}
      {context.basket.length === 0 && (
        <h3 className="text-center my-5">
          Öncelikle sepete bir kaç ürün ekleyiniz
        </h3>
      )}

      {/* sepette ürün varsa */}
      {context.basket.length > 0 && <h3></h3>}

      {context.basket?.map((i) => (
        <div key={i.id} className="d-flex justify-content-between align-items-center p-3 gap-3">
          <img
            className="object-fit-contain rounded"
            src={i.image}
            height={100}
          />
          <h4>{i.title.slice(0, 15) + '...'}</h4>
          
          <h3>${(i.price * i.amount).toFixed(2)}</h3>
          <p>miktar: {i.amount}</p>

          <div className="d-flex gap-2">
            {/* Arttırma azaltam butonları  */}
            <button onClick={() => { notify(); context.addToBasket(i); }}>+</button>
            <button onClick={() =>{nontify(); context.removeFromBasket(i.id);}}>-
            <ToastContainer />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Checkout;
