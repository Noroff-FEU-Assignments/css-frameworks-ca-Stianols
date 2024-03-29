import React from 'react'
import CarouselHome from './CarouselHome';
import TabsHome from './TabsHome';
import Container from 'react-bootstrap/Container';

function Home() {
    return (
        <>
            <CarouselHome />

            <Container>
                <h2>We do YAY things</h2>
                <p>Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.</p>

                <TabsHome />

            </Container>
        </>
    );
}

export default Home
