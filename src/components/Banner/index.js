import React from 'react';
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';

import bgPicture from '../../assets/images/tropical-green-leaves-background-min.jpg'

export default function Banner() {
  return (
    <>
      <Box w="100%" bgImage={bgPicture} bgPosition="center" bgSize="cover">
        <Stack
          as={Box}
          textAlign={'center'}
          alignItems="center"
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            color="coral.500"
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Los mejores Jabones <br />
            <Text as={'span'} color={'green.400'}>
              Ecológicos
            </Text>
          </Heading>
          <Text color="coral.500" w="50%">
            Monetize your content by charging your most loyal readers and reward
            them loyalty points. Give back to your loyal readers by granting
            them access to your pre-releases and sneak-peaks.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
              }}>
              Get Started
            </Button>
            <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
              Ver nuestros productos
            </Button>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}