import react from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade"
function Section({ title, description, LeftBtnText, RightBtnText, BackImg }) {
    return(
        <Wrap BgImg={BackImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{ title }</h1>
                    { 
                        description 
                        &&
                        <p>{ description }</p>
                    }
                </ItemText>
            </Fade>
            <ButtonGroup>
                <Fade bottom>
                    <Buttons>
                        <LeftButton>
                            { LeftBtnText }
                        </LeftButton>
                        { 
                            RightBtnText 
                            && 
                            <RightButton>
                                { RightBtnText }
                            </RightButton>
                        }
                    </Buttons>
                </Fade>
                <DownArrow src="/images/down-arrow.svg" />
            </ButtonGroup>
        </Wrap>
    )
}
export default Section;

const Wrap = styled.div `
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props =>`url("${props.BgImg}")`};
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    align-items: center;
`;
const ItemText = styled.div `
    padding-top: 15vh;
    text-align: center;
`;

const ButtonGroup = styled.div `

`;

const Buttons = styled.div `
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 786px)
    {
        flex-direction: column;
    }
`;

const LeftButton = styled.div `
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    border-radius: 100px;
    opacity: 0.85;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`;

const RightButton = styled(LeftButton) `
    background-color: white;
    opacity: 0.65;
    color: black;
`;

const DownArrow = styled.img `
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s; 
`;