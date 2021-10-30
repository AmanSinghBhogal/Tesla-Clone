import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
function Header() {
    return (
        <Container>
            <Logo>
                <a>
                    <img src="/images/logo.svg" alt="Not Found." />
                </a>
            </Logo>
            <Models>
                <a href="#">Model 3</a>
                <a href="#">Model Y</a>
                <a href="#">Model S</a>
                <a href="#">Model X</a>
            </Models>
            <Logins>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu />
            </Logins>
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