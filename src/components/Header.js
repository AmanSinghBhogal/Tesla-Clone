import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/Car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
    const [BurgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);
    return (
        <Container>
            <Logo>
                <a>
                    <img src="/images/logo.svg" alt="Not Found." />
                </a>
            </Logo>
            <Models>
                {cars && cars.map((car, index) => (
                    <a key={index} href="#">{car}</a>
                ))}
                {/* <a href="#">Model 3</a>
                <a href="#">Model Y</a>
                <a href="#">Model S</a>
                <a href="#">Model X</a> */}
            </Models>
            <Logins>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={()=> setBurgerStatus(true)} />
            </Logins>
            <BurgerNav show = { BurgerStatus }>
                <CloseWrapper>
                    <CustomClose onClick={()=> setBurgerStatus(false)} />
                </CloseWrapper>
                <MobileBurger>
                    {
                        cars && cars.map((car,index) => (
                            <li><a key={index} href="#">{car}</a></li>
                        ))
                    }
                    {/* <li><a href="#">Model 3</a></li>
                    <li><a href="#">Model Y</a></li>
                    <li><a href="#">Model S</a></li>
                    <li><a href="#">Model X</a></li> */}
                </MobileBurger>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cyber Truck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Semi</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">Powerwall</a></li>
                <li><a href="#">Commercial Energy</a></li>
                <li><a href="#">Utilities</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header;

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    height: 10vh;
    align-items: center;
    padding: 0px 20px;
    z-index: 1;
`;

const Logo = styled.div`
    cursor: pointer;
`;

const Models = styled.div`
    display: flex;
    align-items: center;
    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0px 10px;
    }
    @media(max-width: 786px)
    {
        display: none;
    }
`;

const Logins = styled.div`
    display: flex;
    align-items: center;
    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0px 10px;
    }
    margin-right: 10px;
`;

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`;

const BurgerNav = styled.div`
    z-index: 10;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    list-style: none;
    display: flex;
    flex-direction: column;
    text-align: start;
    padding: 20px;
    transform: ${props => props.show? 'translateX(0)':'translateX(100%)'};
    transition: transform 0.2s ease-in;
    li{
        padding: 15px 0px;
        border-bottom: 1px solid rgba(0,0,0,0.2);
        a{
            font-weight: 600;
        }
    }
`;

const MobileBurger = styled.div`
    @media(min-width: 786px)
    {
        display: none;
    }
`;

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`;