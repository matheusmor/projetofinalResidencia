import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Container, SearchBar, SearchButton } from "./style";

const Header = () => {
  return (
    <Container>
      <SearchBar placeholder='Search' />
      <SearchButton>
        <MaterialCommunityIcons name="magnify" size={40} color="#000" />
      </SearchButton>
    </Container>
  );
};

export default Header;
