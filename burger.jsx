//reference code: https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/#top-of-site
import styled from 'styled-components';
import { bool, func } from 'prop-types';

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }

  @media (min-width: 920px){
    display: none;
  }
  
  div {
    background: black;
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
      }
  
      :nth-child(2) {
        opacity: ${({ open }) => open ? '0' : '1'};
        transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
      }
  
      :nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
      }
  }
`;

const Burger = ({ open, setOpen }) => {
    const handleOpen = () => {
        setOpen(!open);
    }

    return (
      <StyledBurger open={ open } onClick={handleOpen} >
        <div />
        <div />
        <div />
      </StyledBurger>
    )
  }

  //type checking 
Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  };
  
  export default Burger;
