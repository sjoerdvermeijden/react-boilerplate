import styled from 'styled-components';

export const ItemWrapper = styled.div`
  background: var(--lightgray);

  .menu-item {
    display: flex;
    position: relative;

    &__image {

      img {
        width: 150px;
        height: 100%;
        object-fit: cover;
        aspect-ratio: 2 / 1;
      }
      
    }

    &__add {
      padding: 8px 10px;
      position: absolute;
      right: 0px;
      top: 0px;
      border: 1px solid var(--darkgray);

      &:hover,
      &:focus {
        cursor: pointer;
      }
      
    }

    &__container {
      padding: 15px;
    }

    &__price {
      display: inline-block;
    }

    &__description,
    &__price,
    &__title {

      &:not(:last-child) {
        margin-bottom: 10px;
      }
      
    }

  }
`;