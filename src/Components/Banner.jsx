import React from 'react';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';

const HeroSection = ({
  imageUrl1,
  imageUrl2,
  title1,
  title2,
  buttonText,
  linkName,
  desc1,
  purpose,
  desc2,
}) => {
  // console.log(data);

  return (
    <>
      <Flex
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        className="relative"
        // marginBottom="24"
      >
        <Box className="relative w-full h-[100vh]">
          <Box className="w-full bg-black  h-full z-60 absolute opacity-30 " />
          <img
            src={imageUrl1}
            alt="banner"
            className=" w-full h-full lg:h-full bg-cover bg-center hidden lg:block"
          />
          <img
            src={imageUrl2}
            alt="banner"
            className=" w-full h-full lg:h-full bg-cover bg-center block lg:hidden"
          />
        </Box>
        <Box
          p="5"
          className="absolute   lg:bottom-46 lg:left-40 text-center lg:text-left"
        >
          <Box className="z-50  text-white ">
            <Text color="gray.100" fontSize="md" fontWeight="medium">
              {purpose}
            </Text>
            <Text fontSize="5xl" fontWeight="bold">
              {title1} <br /> {title2}
            </Text>
            <Text
              fontSize="lg"
              paddingTop="3"
              paddingBottom="3"
              color="gray.100"
            >
              {desc1} <br /> {desc2}
            </Text>
          </Box>
          <Button
            fontSize="xl"
            bg="green.400"
            color="white"
            className="hover:text-green-500"
          >
            <Link href={linkName}>{buttonText} </Link>
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default HeroSection;
