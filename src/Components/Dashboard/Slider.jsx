import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Box, Text } from '@chakra-ui/react';

const Example = () => {
    const images = [
        "/public/Static/Images/SliderImg1.jpeg",
        "/public/Static/Images/SliderImg2.jpeg",
        "/public/Static/Images/SliderImg3.jpeg",
        
    ];

    return (
        <Slide>
            {
            images.map((image, index) => (
                <Box
                    key={index}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    backgroundImage={`url(${image})`}
                    backgroundSize="cover"
                    height="350px"
                >
                    <Text padding="20px" fontSize="20px" background="#efefef" textAlign="center">
                        Slide {index + 1}
                    </Text>
                </Box>
            ))}
        </Slide>
    );
};

export default Example;
