import styled from 'styled-components';

export const CartWrapper = styled.div`
  padding: 15px;
  background: var(--lightgray);
  width: 300px;

  .cart {

    &__list {
      list-style: none;
      
      &:not(:empty) {
        margin-bottom: 15px;
      }

    }

    &__item {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding: 15px 0;
      border-bottom: 1px solid var(--gray);
      
      &:first-child {
        border-top: 1px solid var(--gray);
        margin-bottom: 8px;
      }

    }

    &__count {

      &:not(:last-child) {
        margin-right: 5px;
      }

    }

    &__name {
      display: inline-block;
      color: var(--darkgray);
      margin-right: auto;      
    }

    &__buttons {
      display: flex;
      width: 100%;
      justify-content: flex-end;
    }

    &__add,
    &__delete,
    &__minus {
      padding: 5px;
      
      &:not(:last-child) {
        margin-right: 10px;
      }

    }

    &__label {
      display: flex;
      margin-right: auto;
      width: 100%;

      &:not(:last-child) {
        margin-bottom: 15px;
      }

    }

    &__total {

      &:not(:last-child) {
        margin-bottom: 15px;
      }
      
    }

    &__button {
      padding: 10px;
      background: red;
      border-width: 0;
      color: white;
      border-radius: 3px;
      font-weight: bold;
      width: 100%;
    }

  }
`;