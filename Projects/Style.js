import styled from "styled-components"

export const ProjectsWrapper = styled.div`

  h1 {
    text-transform: uppercase;

    &:not(:last-child) {
      margin-bottom: 35px;
    }
  }

  ul {
    flex-grow: 1;
    list-style: none;
		margin: -20px;
  }
	
  li {
		padding: 20px;
  }
  
  .project {

    &__link {
      display: block;
      margin-bottom: 5px;
    }

    &__title {
      text-transform: uppercase;
    }

    img {
      width: 100%;
      display: block;
    }

    &__utilities {
      display: flex;
      margin: -5px;

      &:not(:last-child) {
        margin-bottom: 10px;
      }

      li {
        width: auto;
        padding: 5px;

        div {
          background: var(--darkgray);
          padding: 3px 5px;
          color: white;
          border-radius: 3px;
          font-size: 12px;
          text-transform: uppercase;
        }

      }

    }

    &__excerpt {
      display: inline-block;
      font-size: 14px;

      &:not(:last-child) {
        margin-bottom: 15px;
      }

    }

    &__content {
      padding: 20px;
      display: inline-block;
    }
    
    &__title {
      
      &:not(:last-child) {
        margin-bottom: 5px;
      }
      
    }
    
  }
`
