import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text, Avatar, AspectRatio } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import DefaultImage from '../assets/images/bali.jpg';

const Property = ({
  property: {
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
}) => (
  <Link href={`/property/${externalID}`} passHref>
    <Flex
      flexWrap="wrap"
      w="420px"
      p="5"
      paddingTop="0"
      justifyContent="flex-start"
      cursor="pointer"
    >
      <AspectRatio w="full" h="300px">
        <Image
          width={400}
          height={300}
          src={coverPhoto ? coverPhoto.url : DefaultImage}
          alt="house"
          priority="true"
        />
      </AspectRatio>
      <Box w="full" mx="1">
        <Flex alignItems="center" paddingTop="2" justifyContent="space-between">
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
          justifyContent="space-between"
          w="250px"
          color="blue.400"
        >
          {rooms} <FaBath /> | {baths} <FaBath />| {millify(area)} sqft{' '}
          <BsGridFill />
        </Flex>
        <Text fontSize="lg">
          {title.length > 30 ? `${title.substring(0, 30)}...` : title}
        </Text>
      </Box>
    </Flex>
  </Link>
);

export default Property;