import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import { baseUrl, fetchApi } from '../../utils/fetchApi';
import Property from '@/Components/Property';
import bannerData from '../../utils/bannerData';
import Banner from '../Components/Banner';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';

export default function Home({ propertyForSale, propertyForRent }) {
  // console.log(propertyForRent, propertyForSale);

  return (
    <Box>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="w-[100%] bg-gray-200 "
      >
        {bannerData.map((data) => {
          const {
            imageUrl,
            title1,
            title2,
            buttonText,
            linkName,
            desc1,
            purpose,
            desc2,
          } = data;
          return (
            <SwiperSlide>
              <Banner
                purpose={purpose}
                title1={title1}
                title2={title2}
                desc1={desc1}
                desc2={desc2}
                buttonText={buttonText}
                linkName={linkName}
                imageUrl={imageUrl}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* <Banner data={data} key={data.id} /> */}
      <Flex flexWrap="wrap" justifyContent="center" marginTop="24">
        {propertyForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>

      <Flex flexWrap="wrap" justifyContent="center">
        {propertyForSale.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
    </Box>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );
  return {
    props: {
      propertyForSale: propertyForSale?.hits,
      propertyForRent: propertyForRent?.hits,
    },
  };
}
