import React, { useState, useEffect } from 'react';
import {
  Flex,
  Select,
  Box,
  Text,
  Input,
  Spinner,
  Icon,
  Button,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';
import { filterData, getFilterValues } from '../../utils/filterData';
import { fetchApi, baseUrl } from 'utils/fetchApi';

const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData);
  const [locationData, setLocationData] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  const [showLocation, setShowLocation] = useState(false);
  const [loading, setLoading] = useState(true);

  console.log(searchTerm);
  const router = useRouter();

  const searchProperties = (filterValues) => {
    // console.log(router.pathname);
    const path = router.pathname;
    const { query } = router;
    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });
    router.push({ pathname: path, query });
  };

  useEffect(() => {
    if (searchTerm !== '') {
      const fetchData = async () => {
        setLoading(true);
        const data = await fetchApi(
          `${baseUrl}/auto-complete?query=${searchTerm}`
        );
        setLoading(false);
        setLocationData(data?.hits);
      };
      fetchData();
    }
  }, [searchTerm]);

  return (
    <Flex
      bg="gray.100"
      p="4"
      justifyContent="center"
      flexWrap="wrap"
      className=""
    >
      {filters.map((filter) => (
        <Box key={filter.queryName} className="mr-4 mt-2">
          <Select
            placeholder={filter.placeholder}
            w="fit-content"
            className="outline-green-400 bg-[#718079]"
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
          >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
      <Flex>
        <Button onClick={() => setShowLocation(!showLocation)}>
          Search Location
        </Button>
        {showLocation && (
          <Flex flexDir="column" position="relative">
            <Input
              placeholder="Type Here"
              value={searchTerm}
              w="300px"
              focusBorderColor="gray.300"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm !== '' && (
              <Icon
                as={MdCancel}
                position="absolute"
                cursor="pointer"
                right="3"
                top="3"
                zIndex="30"
                onClick={() => setSearchTerm('')}
              />
            )}
            {loading && <Spinner margin="auto" marginTop="3" />}
            {showLocation && (
              <Box height="300px" overflow="auto">
                {locationData?.map((location) => (
                  <Box
                    key={location.id}
                    onClick={() => {
                      searchProperties({
                        locationExternalIDs: location.externalID,
                      });
                      setShowLocation(false);
                      setSearchTerm(location.name);
                    }}
                  >
                    <Text
                      cursor="pointer"
                      bg="gray.200"
                      p="2"
                      borderBottom="1px"
                      borderColor="gray.200"
                    >
                      {location.name}
                    </Text>
                  </Box>
                ))}
              </Box>
            )}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default SearchFilters;
