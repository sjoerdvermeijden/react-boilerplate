import React from "react";

import { RestaurantWrapper } from "./Style";

import { BsFillStarFill } from "react-icons/bs";

function Restaurant({ id, name, image, rating, description }) {
  return (
    <>
      <RestaurantWrapper>
        <div className="restaurant">
          <figure className="restaurant__image">
            <img src={image.img} alt={image.alt} />
          </figure>
          <div className="restaurant__container">
            <h3 className="restaurant__title">{name}</h3>
            <p className="restaurant__description">{description}</p>
            <p className="restaurant__rating">
              <div className="rating">
                <div className="rating__icon">
                  <BsFillStarFill color="orange" />
                </div>
                <div className="rating__rating">{rating}</div>
                <div className="rating__label">(10 reviews)</div>
              </div>
            </p>
          </div>
        </div>
      </RestaurantWrapper>
    </>
  );
}

export default Restaurant;
