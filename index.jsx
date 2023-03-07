import styled from "styled-components";
import { Routes } from "@config/routes";
import Burger from "./components/burger.jsx";
import Menu from "./components/side-menu.jsx";
import ContactCard from "./components/contact-card.jsx";
import React, { useState, useEffect, useRef } from 'react';

const Header = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  padding: 0 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  @media (max-width: 920px){
    display: none;
  }
`;

const ContactButton = styled.button`
  position: absolute;
  bottom: 2.5rem;
  right: 2.5rem;
  padding: 1rem;
  background: #7f56d9;
  border-radius: 64px;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: none;
  cursor: pointer;

  &:hover {
    background: #6941c6;
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

  &:hover {
    background: #6941c6;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

const HeaderLinks = styled.div`
  display: flex;
  gap: 24px;
  padding-left: 30%;
  
  a {
    color: grey;
    font-weight: 500;
    text-decoration: none;
  }
`;

function IssuesPage(props) {
  const [open, setOpen] = useState(false);
  const [showContactCard, setShowContactCard] = useState(false);
  const node = useRef();

  const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
      const listener = e => {
        if (!ref.current || ref.current.contains(e.target)){
          return;
        }
        handler(e);
      };
      document.addEventListener('mousedown', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
      };
    }, [ref, handler]);
  };

  useOnClickOutside(node, () => setOpen(false));

  const handleContactCard = () => {
    setShowContactCard(!showContactCard);
    console.log("I have been clicked.");
    console.log(showContactCard);
  };


  return (
    <div>
      <Header>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <a href={Routes.home}><img src="/icons/logo-large.svg" alt="Prolog logo" /></a>
        <Content>
          <HeaderLinks>
            <a href={Routes.products}>Products</a>
            <a href={Routes.documentation}>Documentation</a>
            <a href={Routes.pricing}>Pricing</a>
          </HeaderLinks>
          <DashboardButton><a href={Routes.products}>Open Dashboard</a></DashboardButton>
        </Content>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen}/>
          <Menu open={open} setOpen={setOpen}/>
        </div>
      </Header>
      <ContactCard showContactCard={showContactCard} setShowContactCard={setShowContactCard} />
      <ContactButton onClick={handleContactCard} >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </ContactButton>
    </div>
  );
};

export default IssuesPage;
