import React from "react";

import styled from 'styled-components';

import { restaurants } from "../../data";

import { RestaurantsWrapper } from "./style";

import Restaurant from '../Restaurant/Restaurant'

export const StyledLink = styled.a`
  text-decoration: none;
  color: var(--darkgray);
`;

function Restaurants() {
  return (
    <>
      <RestaurantsWrapper>
        <ul className="restaurants">
          {restaurants.map((restaurant) => {
            return (
              <li key={restaurant.id} className="restaurants__item">
                <StyledLink href={`/restaurants/${restaurant.id}`}>
                  <Restaurant {...restaurant} />
                </StyledLink>
              </li>
            );
          })}
        </ul>
      </RestaurantsWrapper>
    </>
  );
}

export default Restaurants;
