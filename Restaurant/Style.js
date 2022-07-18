import styled from 'styled-components';

export const RestaurantWrapper = styled.div`
  background: var(--lightgray);

  .restaurant {
    display: flex;

    &__container {
      padding: 15px;
    }

    &__description,
    &__title {

      &:not(:last-child) {
        margin-bottom: 10px;
      }
      
    }

    &__image {

      img {
        width: 150px;
        height: 100%;
        object-fit: cover;
        aspect-ratio: 2 / 1;
      }

    }

  }

  .rating {
    display: flex;
    align-items: center;

    &__icon{
      margin-top: 2px;
      
      &:not(:last-child) {
        margin-right: 3px;
      }

    }

    &__rating {
      color: orange;
      font-weight: bold;

      &:not(:last-child) {
        margin-right: 5px;
      }

    }

    &__label {
      font-size: 12px;
    }
  }
`;