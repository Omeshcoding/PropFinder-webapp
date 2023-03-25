import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import { baseUrl, fetchApi } from '../../utils/fetchApi';
import Property from '@/Components/Property';
import bannerData from '../../utils/bannerData';
import Banner from '../Components/Banner';

export default function Home({ propertyForSale, propertyForRent }) {
  return (
    <Box>
      <Box className="w-[100%] bg-gray-200 ">
        {bannerData.map((data) => {
          const {
            id,
            imageUrl1,
            imageUrl2,
            title1,
            title2,
            buttonText,
            linkName,
            desc1,
            purpose,
            desc2,
          } = data;
          return (
            <Banner
              key={id}
              purpose={purpose}
              title1={title1}
              title2={title2}
              desc1={desc1}
              desc2={desc2}
              buttonText={buttonText}
              linkName={linkName}
              imageUrl1={imageUrl1}
              imageUrl2={imageUrl2}
            />
          );
        })}
      </Box>

      <Box marginTop="24" className="text-center lg:text-left mx-8">
        <Text
          fontSize="3xl"
          fontWeight="semibold"
          marginBottom="6"
          className="text-[#1b1a1a] lg:ml-32"
        >
          Properties for Rent
        </Text>
        <Flex flexWrap="wrap" justifyContent="center">
          {propertyForRent.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </Flex>
      </Box>
      <Box marginTop="14" className="text-center lg:text-left">
        <Text
          fontSize="3xl"
          fontWeight="semibold"
          marginBottom="6"
          className="text-[#1b1a1a] lg:ml-32"
        >
          Properties for Sale
        </Text>

        <Flex flexWrap="wrap" justifyContent="center">
          {propertyForSale.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=3`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=3`
  );
  return {
    props: {
      propertyForSale: propertyForSale?.hits,
      propertyForRent: propertyForRent?.hits,
    },
  };
}
