import { createContext, useState } from 'react';

/*
*Context API
*Uygulamada birden çok bilşenin ihtiyacı olan verileri bileşenlerden bağımsız şekilde konumlanan merkezlerde yönetmeye yarar
*Context yapısında verileri ve verileri değiştirmeye yarayan fonksiyonları tutarız
*Context tuttuğumuz bu değişkenleri herhangi bir bileşene doğrudan aktarabilir
*Merkezi state yönetim aracıdır
*/

//! Context yapısnın temeilini oluşturma
export const BasketContext = createContext();


//children burda app.jsx konumunda
//! Provider(Sağlayıcı) ve onun tuttuğu verileri tanımalam
export function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);

  // sepete ekleme fonksiyonu
  const addToBasket = (product) => {
    // sepette bu üründen daha önce eklenemiş mi kontrol et
      const found = basket.find((i) => i.id === product.id);

    if (found) {
      //varsa  olan ürünün miktarını arttır
      const updated = { ...found, amount: found.amount + 1 };

      // dizideki ürünü güncelle
      const newBasket = basket.map((i) =>
        i.id === updated.id ? updated : i
        // değilse i yani dizinin  eski hali
      );

      //En son  state'i güncelle
      setBasket(newBasket);
    } else {
      // sepete ürünü ekle
      setBasket(basket.concat({ ...product, amount: 1 }));
    }
  };

  // sepetten ürün kaldırır
  const removeFromBasket = (delete_id) => {
    // kaldılıacak ürünü bul
    const found = basket.find((i) => i.id === delete_id);

    if (found.amount > 1) {
      // miktarı 1 azalt
      // olan ürünün miktarını arttır
      const updated = { ...found, amount: found.amount - 1 };

      // dizideki ürünü güncelle
      const newBasket = basket.map((i) =>
        i.id === updated.id ? updated : i
      );

      // state'i günceller
      setBasket(newBasket);
    } else {
      // ürünü sepettten çıkar
      const filtred = basket.filter((i) => i.id !== delete_id);
      setBasket(filtred);
    }
  };

  return (
    // tuttuğumuz verileri uygulamayaya aktarır
    //bizden value ister value ise kapsadığı bileşenlere aktarmak istediğinmiz değerlerdir
    <BasketContext.Provider
      value={{
        basket,
        addToBasket,
        removeFromBasket,
      }}
    >
      {/* children şuan app(bütün uygulama) */}
      {children}
    </BasketContext.Provider>
  );
}
