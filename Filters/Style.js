import styled from 'styled-components';

export const FiltersWrapper = styled.div`
  padding: 10px;
  background: var(--lightgray);
  width: 250px;

  &:not(:last-child) {
    margin-right: 10px;
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

  input[type="checkbox"] {
    
    &:not(:last-child) {
      margin-right: 10px;
      margin-top: 1px;
    }
    
  }
  
  label {

    &:hover,
    &:focus {
      cursor: pointer;
    }
  }
`;