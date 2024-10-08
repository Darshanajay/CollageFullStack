import { useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [items] = useState([
    {
      id: 1,
      name: "laptop",
      price: 122990,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81gi6BOdpGL._SS400_.jpg",
    },
    {
      id: 2,
      name: "headphone",
      price: 59000,
      image:
        "https://tienda.bananacomputer.com/cms/uploads/webp/687E3FEB-9BC9-4770-9DD5-F02CB0C29415-750-ql2qwf.webp",
    },
    {
      id: 3,
      name: "washing machine",
      price: 30000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSfB3PQlvCaK1ziskUOxZ4jAjcd0gAUeDG_Q&s",
    },
    {
      id: 4,
      name: "Mobile",
      price: 151000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW8tcAybpeAvPgU4wpEoEaxvyz6nK6ZHHblA&s",
    },
    {
      id: 5,
      name: "Watch",
      price: 79000,
      image:
        "https://target.scene7.com/is/image/Target/GUEST_96194caa-c8c9-4d0a-91b4-5a9fb7c9f457?wid=488&hei=488&fmt=pjpeg",
    },
    {
      id: 6,
      name: "Earpods",
      price: 24000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Hm-5_j8S9MCJSn7u_TtTDDTiGj0q1WlxKQ&s",
    },
    {
      id: 7,
      name: "TV",
      price: 50000,
      image:
        "https://www.lg.com/content/dam/channel/wcms/ca_en/images/tvs/65uq7570puj_accq_enci_ca_en_c/Basic-450.jpg",
    },
    {
      id: 8,
      name: "iMac",
      price: 152990,
      image:
        "https://productimages.hepsiburada.net/s/500/300-443/110000554256178.jpg",
    },
    {
      id: 9,
      name: "Refrigerator",
      price: 168000,
      image:
        "https://www.lg.com/content/dam/channel/wcms/in/images/refrigerators/gr-x31fmqhl_amcqebn_eail_in_c/GR-X31FMQHL-Refrigerators-Food-Front-Light-On-450.jpg",
    },
    {
      id: 10,
      name: "ipad",
      price: 59900,
      image: "https://www.adorama.com/images/Large/ACMY3K2LLA.jpg",
    },
  ]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFormCart = (item) => {
    setCart(cart.filter((remove) => remove.id !== item.id));
  };
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="App">
      <h1> Simple Shopping Cart</h1>
      <hr />

      <div className="items">
        <h2> Items </h2>
        <hr />

        {items.map((item) => (
          <div key={item.id} className="item">
            <h3> {item.name}</h3>
            <img
              src={item.image}
              alt={item.name}
              className="item-image"
              height="200px"
              width="200px"
            />

            <p> ${item.price.toFixed(2)}</p>

            <button id="add" onClick={() => addToCart(item)}>
              {" "}
              addToCart
            </button>
            <hr />
          </div>
        ))}
      </div>
      <div className="cart">
        <hr />
        <h2> Cart</h2>
        <hr />
        {cart.length === 0 ? (
          <p> your cart is empty </p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                  height="200px"
                  width="200px"
                />
                <br />
                {item.name} - ${item.price.toFixed(2)}
                <button id="remove" onClick={() => removeFormCart(item)}>
                  {" "}
                  removeFormCart{" "}
                </button>
              </li>
            ))}
          </ul>
        )}
        <hr />
        <p> Total: ${getTotalPrice()}</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
