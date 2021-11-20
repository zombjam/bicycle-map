import React from 'react';

import {
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuDivider,
  Box,
  MenuOptionGroup,
  MenuItemOption,
} from '@chakra-ui/react';
import { Icon } from 'components';

const SearchBar = () => {
  return (
    <Box display="flex" alignItems="center" px={3.5} py={7} w="full">
      <InputGroup mr={2}>
        <Input
          rounded="lg"
          bg="gray.200"
          placeholder="搜尋路線或鄰近地點"
          size="md"
          focusBorderColor="primary.300"
          _hover={{ borderColor: 'primary.200' }}
        />
        <InputRightElement mr={1.5} children={<Icon name="search" size={5} color="gray.500" />} />
      </InputGroup>
      <Menu>
        <MenuButton
          as={Button}
          variant="outline"
          color="primary.400"
          borderColor="primary.400"
          bg="white"
          fontWeight="bold"
          w={28}
          leftIcon={<Icon name="sort-down" size={5} color="primary.400" />}
          _hover={{ bg: 'primary.100' }}
          _active={{ bg: 'primary.100' }}
          _focus={{ boxShadow: 'primary' }}
        >
          排序
        </MenuButton>
        <MenuList minW="auto" borderColor="primary.300" px={4}>
          <MenuOptionGroup defaultValue="nearby" type="radio">
            <MenuItemOption color="primary.400" px="0" py={1} fontWeight="500" value="nearby" _active={{}}>
              距離較近
            </MenuItemOption>
            <MenuDivider my={1} borderColor="gray.300" />
            <MenuItemOption color="primary.400" px="0" py={1} fontWeight="500" value="borrow" _active={{}}>
              可借車數
            </MenuItemOption>
            <MenuDivider my={1} borderColor="gray.300" />
            <MenuItemOption color="primary.400" px="0" py={1} fontWeight="500" value="return" _active={{}}>
              可還車數
            </MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default SearchBar;
