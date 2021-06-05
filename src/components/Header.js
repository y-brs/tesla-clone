import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';

function Header() {
  const [burgerStatus, setburgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);

  return (
    <Container>
      <a href="/">
        <svg viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg" width="120" height="30" >
          <path d="M0 .1a9.7 9.7 0 007 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 007-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 006-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 00-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 13.8h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 14.1h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zM308.5 7h26a9.6 9.6 0 007-7h-40a9.6 9.6 0 007 7z" fill="black"></path>
        </svg>
      </a>

      <Menu>
        {cars && cars.map((car, index) => (
          <MenuItem>
            <a href="/" key={index}>{car}</a>
          </MenuItem>
        ))}
      </Menu>

      <RightMenu>
        <MenuItem>
          <a href="/">Shop</a>
        </MenuItem>
        <MenuItem>
          <a href="/">Account</a>
        </MenuItem>
        <CustomMenu onClick={() => setburgerStatus(true)} />
      </RightMenu>

      <BurgerNavWrapper show={ burgerStatus }>
        <CloseWrapper>
          <CustomClose onClick={() => setburgerStatus(false)}  />
        </CloseWrapper>

        <BurgerNavMenu>
          {cars && cars.map((car, index) => (
            <BurgerNavItem>
              <a href="/" key={index}>{car}</a>
            </BurgerNavItem>
          ))}
          <BurgerNavItem>
            <a href="/">Existing Inventory</a>
          </BurgerNavItem>
          <BurgerNavItem>
            <a href="/">Used Inventory</a>
          </BurgerNavItem>
          <BurgerNavItem>
            <a href="/">Trade-In</a>
          </BurgerNavItem>
          <BurgerNavItem>
            <a href="/">Cybertruck</a>
          </BurgerNavItem>
          <BurgerNavItem>
            <a href="/">Roadster</a>
          </BurgerNavItem>
          <BurgerNavItem>
            <a href="/">Semi</a>
          </BurgerNavItem>
          <BurgerNavItem>
            <a href="/">Charging</a>
          </BurgerNavItem>
          <BurgerNavItem>
            <a href="/">Powerwall</a>
          </BurgerNavItem>
          <BurgerNavItem>
            <a href="/">Commercial Energy</a>
          </BurgerNavItem>
        </BurgerNavMenu>
      </BurgerNavWrapper>
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
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1;
`

const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media (max-width: 950px) {
    display: none;
  }
`

const MenuItem = styled.li`
  list-style: none;
  flex-wrap: nowrap;

  a {
    font-weight: 500;
    text-decoration: uppercase;
    padding: 10px 15px;
    color: #171a20;
    border-radius: var(--border-radius);
  }

  a:hover {
    background-color: hsla(0, 0%, 50.2%, .125);
  }
`

const RightMenu = styled.ul`
  display: flex;
  align-items: center;
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  margin-left: 10px;
`

const BurgerNavWrapper = styled.ul`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  width: 400px;
  z-index: 100;
  box-shadow: 0 4px 32px 0 rgba(0, 0, 0, .5);

  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s ease-in;
`

const BurgerNavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 24px;
`

const BurgerNavItem = styled.li`
  list-style: none;
  font-family: var(--font-bold);

  a {
    transition: color 0.5s ease, background-color 0.5s cubic-bezier(0.5, 0.25, 0.5, 0.25);
    font-size: 14px;
    padding: 10px 15px;
    display: block;
    border-radius: 10px;
  }

  a:hover {
    background: #f4f4f4;
    color: #171a20;
  }
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 80px;
  padding: 18px 20px;
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
  background: #ccc;
`