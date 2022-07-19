import React, { useContext } from "react";

import { CartContext } from "../../context/CartContext";
import { TotalContext } from "../../context/TotalContext";

import { ItemWrapper } from "./Style";
import styled from 'styled-components';

import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "0px"
  },
};

export const ModalWrapper = styled.div`
  .buttons {
    display: flex;
  }

  button {
    padding: 5px;
  }

  .count {
    display: inline-block;
    padding: 5px;
  }

`;

Modal.setAppElement("#__next");

function MenuItem({ id, title, image, description, price, count }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [cartState, setCartState] = useContext(CartContext);
  const [totalState, setTotalState] = useContext(TotalContext);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const AddFunction = (e, id) => {

    if (cartState.find((item) => item.id === id)) {
    } else {
      setCartState(prevState => [{id, title, price, count: 1}, ...prevState])
      setTotalState(prevState => Number(prevState) + Number(price))
    }
  }

  return (
    <>
      <ItemWrapper>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <ModalWrapper>
            <div className="buttons">
              <button className="minus">-</button>
              <span className="count">0</span>
              <button className="add">+</button>
            </div>
          </ModalWrapper>
        </Modal>
        <div className="menu-item">
          <figure className="menu-item__image">
            <img src={image.img} alt={image.alt} />
          </figure>
          <button className="menu-item__add" onClick={(e) => AddFunction(e, id)}>
            +
          </button>
          <div className="menu-item__container">
            <h3 className="menu-item__title">{title}</h3>
            <p className="menu-item__description">{description}</p>
            <span className="menu-item__price">€{price}</span>
          </div>
        </div>
      </ItemWrapper>
    </>
  );
}

export default MenuItem;
