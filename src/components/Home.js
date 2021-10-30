import react from "react";
import styled from "styled-components";
import Section from "./Section";

function Home()
{
    return (
        
        <Container>
            <Section 
                title="Model 3"
                description="Order Online for Touchless Delivery."
                LeftBtnText="Custom Order"
                RightBtnText="Existing Inventory"
                BackImg="/images/model-3.jpg"
            />
            <Section 
                title="Model Y"
                description="Order Online for Touchless Delivery."
                LeftBtnText="Custom Order"
                RightBtnText="Existing Inventory"
                BackImg="/images/model-y.jpg"
            />
            <Section 
                title="Model S"
                description="Order Online for Touchless Delivery."
                LeftBtnText="Custom Order"
                RightBtnText="Existing Inventory"
                BackImg="/images/model-s.jpg"
            />
            <Section 
                title="Model X"
                description="Order Online for Touchless Delivery."
                LeftBtnText="Custom Order"
                RightBtnText="Existing Inventory"
                BackImg="/images/model-x.jpg"
            />
            <Section 
                title="Solar Panels"
                description="Lowest Cost Solar Panels in America"
                LeftBtnText="Order Now"
                RightBtnText="Learn More"
                BackImg="/images/solar-panel.jpg"
            />
            <Section 
                title="Solar Roof"
                description="Produce Clean Energy From Your Roof"
                LeftBtnText="Order Now"
                RightBtnText="Learn More"
                BackImg="/images/solar-roof.jpg"
            />
            <Section 
                title="Accessories"
                LeftBtnText="Shop Now"
                BackImg="/images/accessories.jpg"
            />
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
`;
export default Home;