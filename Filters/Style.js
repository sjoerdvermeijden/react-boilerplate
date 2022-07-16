import styled from 'styled-components';

export const FiltersWrapper = styled.div`
  padding: 10px;
  background: var(--lightgray);
  width: 250px;

  &:not(:last-child) {
    margin-right: 15px;
  }

  ul {
    list-style: none;
  }

  li {
    display: flex;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
    
  }
  
  label {
    display: inline-block;
    margin-right: auto;
    flex-grow: 1;

    &:hover,
    &:focus {
      cursor: pointer;
    }
  }
`;