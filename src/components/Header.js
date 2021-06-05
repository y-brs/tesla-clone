import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
  return (
    <Container>
      <a href="/">
        <svg viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg" width="120" height="30" >
          <path d="M0 .1a9.7 9.7 0 007 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 007-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 006-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 00-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 13.8h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 14.1h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zM308.5 7h26a9.6 9.6 0 007-7h-40a9.6 9.6 0 007 7z" fill="black"></path>
        </svg>
      </a>
      <Menu>
        <MenuItem>
          <a href="#1">Model S</a>
        </MenuItem>
        <MenuItem>
          <a href="#2">Model 3</a>
        </MenuItem>
        <MenuItem>
          <a href="#3">Model X</a>
        </MenuItem>
        <MenuItem>
          <a href="#4">Model Y</a>
        </MenuItem>
        <MenuItem>
          <a href="#5">Solar Roof</a>
        </MenuItem>
        <MenuItem>
          <a href="#6">Solar Panels</a>
        </MenuItem>
      </Menu>
      <RightMenu>
        <MenuItem>
          <a href="#7">Shop</a>
        </MenuItem>
        <MenuItem>
          <a href="#8">Account</a>
        </MenuItem>
      </RightMenu>
    </Container>
  )
}

export default Header;

const Container = styled.header`
  top: 0;
  left: 0;
  right: 0;
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
`

const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`

const MenuItem = styled.li`
  list-style: none;
  flex-wrap: nowrap;

  a {
    font-weight: 500;
    text-decoration: uppercase;
    padding: 10px 15px;
    color: #171a20;
  }

  a:hover {
    background-color:hsla(0, 0%, 50.2%, .125);
    border-radius: 100px;
  }
`

const RightMenu = styled.ul`
  display: flex;
`