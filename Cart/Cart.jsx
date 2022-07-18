import React, { useContext, useState } from "react";

import { CartContext } from "../../context/CartContext";
import { TotalContext } from "../../context/TotalContext";

import { CartWrapper } from "./Style";

function Filter() {
  const [cartState, setCartState] = useContext(CartContext);
  const [totalState, setTotalState] = useContext(TotalContext);

  const [price, setPrice] = useState();

  const addFunction = (e, id, setTotalState) => {
    const newArray = cartState.map((item) => {
      if (item.id === id) {
        item.count++;
        setTotalState((prevState) => Number(prevState) + Number(item.price));
        return item;
      } else {
        return item;
      }
    });

    setCartState(newArray);
  };

  const minusFunction = (e, id) => {
    cartState.map((item) => {
      if (item.id === id) {
        if (item.count <= 1) {
          const randomArray = cartState.map((item) => {
            item.count--;
            setTotalState((prevState) => Number(prevState) - Number(item.price));
            return item;
          });
          setCartState(randomArray);
        } else {
          const newArray = cartState.filter((item) => item.id !== id);
          setCartState(newArray);
        }
      }
    });
  };

  return (
    <>
      <CartWrapper>
        <div className="cart">
          <ul className="cart__list">
            {cartState.map((item) => {
              return (
                <li className="cart__item" key={Math.random()}>
                  <div className="cart__label">
                    <span className="cart__count">({item?.count})</span>
                    <span className="cart__name">{item?.title}</span>
                    <span className="cart__price">€{item?.price}</span>
                  </div>
                  <div className="cart__buttons">
                    <button
                      className="cart__minus"
                      onClick={(e) => minusFunction(e, item.id)}
                    >
                      -
                    </button>
                    <button
                      className="cart__add"
                      onClick={(e) => addFunction(e, item.id, setTotalState)}
                    >
                      +
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          <p className="cart__total">Total: €{Number(totalState).toFixed(2)}</p>
          <button className="cart__button">Afrekenen</button>
        </div>
      </CartWrapper>
    </>
  );
}

export default Filter;
