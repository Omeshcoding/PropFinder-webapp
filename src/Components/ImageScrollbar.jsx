import { useContext } from 'react';
import Image from 'next/image';
import { Box, Icon, Flex } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { ImCircleLeft, ImCircleRight } from 'react-icons/Im';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon
        as={ImCircleLeft}
        onClick={() => scrollPrev()}
        fontSize="5xl"
        cursor="pointer"
      />
    </Flex>
  );
};
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon
        as={ImCircleRight}
        onClick={() => scrollNext()}
        fontSize="5xl"
        cursor="pointer"
      />
    </Flex>
  );
};

const ImageScrollbar = ({ data }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((image) => (
      <Box
        key={image.id}
        width="910px"
        itemID={image.id}
        overflow="hidden"
        className="snap-x"
      >
        <Image
          placeholder="blur"
          blurDataURL={image.url}
          src={image.url}
          width={1000}
          height={500}
          alt="property"
          sizes="(max-width:500px) 100px,(max-width:1023px) 400px, 1000px"
        />
      </Box>
    ))}
  </ScrollMenu>
);
export default ImageScrollbar;
