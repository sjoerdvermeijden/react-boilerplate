import styled from 'styled-components';

export const RestaurantsWrapper = styled.div`
  flex-grow: 1;
  margin-right: 20px;
  
  .restaurants {
    list-style: none;

    margin: -10px;

    &__item {
        padding: 10px;
    }
    
    @media (min-width: 768px) {

        &__item {
            
        }

    }

  }
`;