import styled from 'styled-components';
import { Routes } from "@config/routes";
import { bool } from 'prop-types';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #EFFFFA;
  height: 100vh;
  text-align: left;
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};

  @media (min-width: 920px){
    display: none;
  }

  @media (max-width: 920px) {
    width: 70%;
  }

  a {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: #343078;
    }
  }
`;

const DashboardButton = styled.button`
  right: 2.5rem;
  padding: 1rem;
  background: #7f56d9;
  border-radius: 64px;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: none;
  cursor: pointer;
  color: white;
  margin-top: 2em;

  &:hover {
    background: #6941c6;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 12px !important;
  }
`;

const Menu = ({ open }) => {
    return (
      <StyledMenu open={open}>
        <a href={Routes.products}>Products</a>
        <a href={Routes.documentation}>Documentation</a>
        <a href={Routes.pricing}>Pricing</a>
        <DashboardButton><a href={Routes.products}>Open Dashboard</a></DashboardButton>
      </StyledMenu>
    )
  }

  Menu.propTypes = {
    open: bool.isRequired,
  }
  export default Menu;
