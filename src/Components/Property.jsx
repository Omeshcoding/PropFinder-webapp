import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text, Avatar, AspectRatio } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import DefaultImage from '../assets/images/Bali.jpg';

const Property = ({
  property: {
    purpose,
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => {
  const [hover, setHover] = useState(false);

  const handleMouseover = () => setHover(true);

  const handleMouseleave = () => setHover(false);
  return (
    <Link
      href={`/property/${externalID}`}
      passHref
      onMouseOver={handleMouseover}
      onMouseLeave={handleMouseleave}
      className="drop-shadow-lg"
    >
      <Flex
        flexWrap="wrap"
        w="420px"
        p="5"
        paddingTop="0"
        justifyContent="flex-center"
        cursor="pointer"
        position="relative"
        overflow="hidden"
      >
        {hover && (
          <Box>
            <Text
              backgroundColor="orange.400"
              w="20"
              p="2"
              textAlign="center"
              position="absolute"
              zIndex="10"
              color="white"
              fontSize="xl"
              className="drop-shadow-lg"
            >
              {purpose === 'for-sale' ? 'Sale' : 'Rent'}
            </Text>
          </Box>
        )}
        <AspectRatio w="full" h="300px">
          <Image
            width={400}
            height={300}
            src={coverPhoto ? coverPhoto.url : DefaultImage}
            alt="house"
            priority="true"
          />
        </AspectRatio>
        <Box w="full" className="bg-zinc-100 p-4">
          <Flex
            alignItems="center"
            paddingTop="2"
            justifyContent="space-between"
          >
            <Flex alignItems="center">
              <Box paddingRight="3" color="green.400">
                {isVerified && <GoVerified />}
              </Box>
              <Text fontWeight="bold" fontSize="lg">
                AED {millify(price)}
                {rentFrequency && `/${rentFrequency}`}
              </Text>
            </Flex>
            <Box>
              <Image
                height={40}
                width={40}
                src={agency?.logo?.url}
                alt={agency}
              />
            </Box>
          </Flex>
          <Flex
            alignItems="center"
            p="1"
            justifyContent="space-around"
            w="250px"
            color="red.400"
          >
            {rooms} <FaBed /> | {baths} <FaBath />| {millify(area)} sqft{' '}
            <BsGridFill />
          </Flex>
          <Text fontSize="md" className="text-gray-600 pl-3">
            {title.length > 35 ? `${title.substring(0, 35)}...` : title}
          </Text>
        </Box>
      </Flex>
    </Link>
  );
};

export default Property;
