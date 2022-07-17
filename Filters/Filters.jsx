import React, { useState, useContext } from "react";

import { FiltersWrapper } from "./Style";

import { FilterContext } from "../../context/FilterContext";

function Filters() {
  const [filters, setFilters] = useContext(FilterContext);

  const listFunction = (e) => {
    const listItem = e.target.parentNode;
    const list = listItem.parentNode;

    const filterList = Array.from(list.querySelectorAll("li.filter__item"));

    const newArray = filterList
      .filter((item) => item.querySelector("input:checked"))
      .map((item) => item.querySelector("input").id);

    console.log(newArray);

    setFilters(newArray);
  };

  return (
    <>
      <FiltersWrapper>
        <ul className="filter-list" onChange={(e) => listFunction(e)}>
          <li className="filter-list__item">
            <div className="filter">
              <h3 className="filter__title">Type</h3>
              <ul className="filter__list">
                <li className="filter__item">
                  <input
                    type="checkbox"
                    className="filter__checkbox"
                    name=""
                    id="hotel"
                  />
                  <label className="filter__label" htmlFor="hotel">
                    Hotel
                  </label>
                </li>
                <li className="filter__item">
                  <input
                    type="checkbox"
                    className="filter__checkbox"
                    name=""
                    id="bb"
                  />
                  <label className="filter__label" htmlFor="bb">
                    Bed & Breakfast
                  </label>
                </li>
                <li className="filter__item">
                  <input
                    type="checkbox"
                    className="filter__checkbox"
                    name=""
                    id="motel"
                  />
                  <label className="filter__label" htmlFor="motel">
                    Motel
                  </label>
                </li>
              </ul>
            </div>
          </li>
          <li className="filter-list__item">
            <div className="filter">
              <h3 className="filter__title">Facilities</h3>
              <ul className="filter__list" onChange={(e) => listFunction(e)}>
                <li className="filter__item">
                  <input
                    type="checkbox"
                    className="filter__checkbox"
                    name=""
                    id="wifi"
                  />
                  <label className="filter__label" htmlFor="wifi">
                    Wifi
                  </label>
                </li>
                <li className="filter__item">
                  <input
                    type="checkbox"
                    className="filter__checkbox"
                    name=""
                    id="spa"
                  />
                  <label className="filter__label" htmlFor="spa">
                    Spa
                  </label>
                </li>
                <li className="filter__item">
                  <input
                    type="checkbox"
                    className="filter__checkbox"
                    name=""
                    id="parking"
                  />
                  <label className="filter__label" htmlFor="parking">
                    Parking
                  </label>
                </li>
                <li className="filter__item">
                  <input
                    type="checkbox"
                    className="filter__checkbox"
                    name=""
                    id="gym"
                  />
                  <label className="filter__label" htmlFor="gym">
                    Gym
                  </label>
                </li>
                <li className="filter__item">
                  <input
                    type="checkbox"
                    className="filter__checkbox"
                    name=""
                    id="pool"
                  />
                  <label className="filter__label" htmlFor="pool">
                    Pool
                  </label>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </FiltersWrapper>
    </>
  );
}

export default Filters;
