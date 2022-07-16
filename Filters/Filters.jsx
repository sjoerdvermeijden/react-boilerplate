import React, { useEffect, useState } from "react";

import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
`;

export const ListItems = styled.div`
  flex-grow: 1;

  ul {
    list-style: none;
    margin: -15px;
  }

  li {
    padding: 15px;

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  div {
    padding: 10px;
    background: var(--lightgray);
  }

  @media (min-width: 480px) {
    ul {
      display: flex;
      flex-wrap: wrap;
    }

    li {
      width: 33%;
    }
  }
`;

import { FiltersWrapper } from "./Style";

const data = [
  {
    id: 0,
    poging: "Stoep",
  },
  {
    id: 1,
    poging: "Bon",
  },
  {
    id: 2,
    poging: "Bal",
  },
];

function Filters() {
  const [items, setItems] = useState(data);
  const [filters, setFilters] = useState([]);

  const clickFunction = (e) => {
    const listItem = e.target.parentNode;
    const list = listItem.parentNode;

    // Loop through filter items
    const filterList = Array.from(list.querySelectorAll("li"));

    // Create new array based on the checked filters and change filter state
    const newArray = filterList
      .filter((item) => item.querySelector("input:checked"))
      .map((item) => item.querySelector("label").textContent.toLowerCase());

    setFilters(newArray);
  };

  return (
    <>
      <LayoutWrapper>
        <FiltersWrapper>
          <ul onChange={(e) => clickFunction(e)}>
            <li>
              <input type="checkbox" name="" id="stoep" />
              <label htmlFor="stoep">Stoep</label>
            </li>
            <li>
              <input type="checkbox" name="" id="bon" />
              <label htmlFor="bon">Bon</label>
            </li>
            <li>
              <input type="checkbox" name="" id="bal" />
              <label htmlFor="bal">Bal</label>
            </li>
          </ul>
        </FiltersWrapper>
        <ListItems>
          <ul>
            {items
              .filter((item) => filters.length === 0 || filters.includes(item.poging.toLowerCase()))
              .map((item) => {
                return (
                  <li key={item.id}>
                    <div>{item.poging}</div>
                  </li>
                );
              })}
          </ul>
        </ListItems>
      </LayoutWrapper>
    </>
  );
}

export default Filters;
