import { Box, Flex, Spacer, Text, Avatar } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import Image from 'next/image';
import millify from 'millify';
import { fetchApi, baseUrl } from '../../../utils/fetchApi';

import ScrollComponent from '@/Components/ScrollComponent';

const PropertyDetails = ({
  propertyDetails: {
    price,
    rooms,
    rentFrequency,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) => {
  // console.log(amenities.length);
  return (
    <Box maxWidth="1000px" margin="auto" p="4" className="drop-shadow-m">
      {photos && <ScrollComponent data={photos} />}
      <Box w="full" p="6" className="bg-zinc-300">
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
          justifyContent="space-around"
          w="250px"
          color="orange.500"
        >
          {rooms} <FaBed /> | {baths} <FaBath />| {millify(area)} sqft{' '}
          <BsGridFill />
        </Flex>
        <Box marginTop="2">
          <Text fontSize="lg" marginBottom="2" fontWeight="bold">
            {title}
          </Text>
          <Text lineHeight="2" color="gray.600">
            {description}
          </Text>
        </Box>
        <Flex
          w="full"
          flexWrap="wrap"
          textTransform="uppercase"
          justifyContent="space-between"
          borderBottom="1px"
          borderColor="gray.100"
          p="3"
          bg="blackAlpha.900"
          color="gray.200"
          className="my-10"
        >
          <Flex
            w="400px"
            flexWrap="wrap"
            textTransform="uppercase"
            justifyContent="space-between"
            borderBottom="1px"
            borderColor="gray.100"
            p="3"
          >
            <Text> Type </Text>
            <Text fontWeight="bold">{type}</Text>
          </Flex>
          <Flex
            w="400px"
            flexWrap="wrap"
            textTransform="uppercase"
            justifyContent="space-between"
            borderBottom="1px"
            borderColor="gray.100"
            p="3"
          >
            <Text> Purpose </Text>
            <Text fontWeight="bold">{purpose}</Text>
          </Flex>
          {furnishingStatus && (
            <Flex
              w="400px"
              flexWrap="wrap"
              textTransform="uppercase"
              justifyContent="space-between"
              borderBottom="1px"
              borderColor="gray.100"
              p="3"
            >
              <Text> Furnishing Status </Text>
              <Text fontWeight="bold">{furnishingStatus}</Text>
            </Flex>
          )}
        </Flex>
        <Box>
          {amenities.length && (
            <Text fontSize="2xl" fontWeight="black">
              Amenities
            </Text>
          )}
          <Flex
            flexWrap="wrap"
            className={amenities.length === 0 ? 'hidden' : 'block'}
          >
            {amenities.map((aminity) => (
              <Text
                key={aminity.text}
                fontSize="l"
                fontWeight="bold"
                p="2"
                bg="gray.200"
                borderRadius="5"
                m="1"
                color="orange.500"
              >
                {aminity.text}
              </Text>
            ))}
          </Flex>
        </Box>
      </Box>
      {/* <ScrollComponent /> */}
    </Box>
  );
};

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}
