import React, { useState } from "react";

function Catalog() {
  const [cart, setCart] = useState([]);

  const [Items] = useState([
    {
      id: 1,
      name: "Watch",
      price: 1222,
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRo5ekdAgvCTfOpQsgRPz1Yq2xv7pKAg_W7RxH6UxGSWHBxnUhYrlAVOGirVT9tNbAaCG5aQ6HoHw9ffimUJBZcyjH69i4Jc5vlcc1g14m8NGr6Vqd3j8FZ1g",
    },
    {
      id: 2,
      name: "Pen",
      price: 5,
      image: "https://m.media-amazon.com/images/I/41utRptbmvL.jpg",
    },
    {
      id: 3,
      name: "Foot ball",
      price: 550,
      image: "https://mycareersview.com/afile/mcv10920_Sporting%20Football%20Club.jpg",
    },
    {
      id: 4,
      name: "Cricket Bat",
      price: 152,
      image:
        "https://rukminim2.flixcart.com/image/850/1000/krce64w0/bat/r/9/g/1-1-2-virat-kohli-grand-edition-tennis-cricket-bat-short-handle-original-imag55zexgqmtznz.jpeg?q=20&crop=false",
    },
    {
      id: 5,
      name: "Laptop",
      price: 44222,
      image: "https://m.media-amazon.com/images/I/71DozMyPCBL.jpg",
    },
    {
      id: 6,
      name: "Moniter",
      price: 8000,
      image:
        "https://image.made-in-china.com/2f0j00fsAUznRPbpqC/PC-Monitor-Computer-Moniter-Desltop-Monitor.jpg",
    },
  ]);

  const AddToCart = (item) => {
    setCart([...cart, item]);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <>
      <div className="App">
        <h1>
          <center>Shopping Cart</center>
        </h1>

        <div className="Items">
          {" "}
          <p>Items</p>
          {Items.map((item) => (
            <div className="items" key={item.id}>
              <img src={item.image} alt={item.name} className=" h-40 w-40" />
              <h2>{item.name}</h2>
              <p>{item.price.toFixed(2)}</p>
              <button onClick={() => AddToCart(item)}>AddToCart</button>
            </div>
          ))}
        </div>

        <div className="Cart">
          <p>Cart</p>
          {cart.length === 0 ? (
            <div>Empty Cart</div>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  <img src={item.image} alt={item.name} className=" h-40 w-40" />
                  <h2>{item.name}</h2>
                  <p>{item.price.toFixed(2)}</p>
                </li>
              ))}
            </ul>
          )}

          <p>Total: ${getTotalPrice()}</p>
        </div>
      </div>
    </>
  );
}

export default Catalog;
