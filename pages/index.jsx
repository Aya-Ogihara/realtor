import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import { Banner } from './Banner';

import { baseUrl, fetchApi } from '../utils/fetchApi';

export const getStaticProps = async () => {
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
};

const Home = ({ propertyForSale, propertyForRent }) => {
  console.log(propertyForSale);
  console.log(propertyForRent);
  return (
    <Box>
      <Banner
        purpose='RENT A HOME'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
        title1='Rental Homes for'
        title2='Everyone'
        desc1='Explore Apartments, Villas, Homes'
        desc2='and More'
        linkName='/search?purpose=for-rent'
        buttonText='Explore Renting'
      />
      <Flex flexWrap='wrap'>
        {/* Fetch the properties and map over them... */}
      </Flex>
      <Banner
        purpose='BUY A HOME'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
        title1='Find, Buy & Own Your'
        title2='Dream Home'
        desc1='Explore Apartments, Villas, Homes'
        desc2='and More'
        linkName='/search?purpose=for-sale'
        buttonText='Explore Buying'
      />
      <Flex flexWrap='wrap'>
        {/* Fetch the properties and map over them... */}
      </Flex>
    </Box>
  );
};

export default Home;
