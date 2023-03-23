import React from 'react';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';

const HeroSection = ({
  imageUrl,
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
        // marginBottom="24"
      >
        <Box className="w-full h-[90vh]">
          <img src={imageUrl} alt="banner" className="w-full bg-cover" />
        </Box>
        <Box className="w-full bg-black opacity-50 h-full z-20 absolute" />

        <Box p="5" className="absolute text-white z-30 bottom-16 left-40">
          <Text color="gray.100" fontSize="md" fontWeight="medium">
            {purpose}
          </Text>
          <Text fontSize="5xl" fontWeight="semi-bold">
            {title1} <br /> {title2}
          </Text>
          <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.100">
            {desc1} <br /> {desc2}
          </Text>
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
