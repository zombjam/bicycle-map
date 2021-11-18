import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Spacer, Stack } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';
import Icon from '../Icon';

const Header = () => {
  const menus = [
    { name: '找單車', path: '/home', icon: 'bike', size: '6' },
    { name: '找路線', path: '/road', icon: 'road', size: '5' },
    { name: '找景點', path: '/travel', icon: 'travel', size: '5' },
  ];

  return (
    <Flex bg="primary.400" px="4.5rem" py={4}>
      <Icon name="logo" viewBox="0 0 214 32" width="56" minHeight="10" />
      <Spacer />
      <Stack align="center" direction="row" spacing={4}>
        {menus.map(menu => (
          <Link to={menu.path} key={menu.name}>
            <Button
              color="primary.400"
              bg="white"
              leftIcon={<Icon name={menu.icon} color="primary.400" width={menu.size} minHeight={menu.size} />}
              _hover={{ bg: 'primary.100', borderColor: 'primary.300' }}
              _active={{ bg: 'white', borderColor: 'primary.400' }}
              _focus={{ boxShadow: 'primary' }}
            >
              {menu.name}
            </Button>
          </Link>
        ))}
      </Stack>
    </Flex>
  );
};

export default Header;
