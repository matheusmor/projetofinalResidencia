import React from "react";

import { Container, Logo, ImageLogo, HeaderText } from "./style";

const Header = () => {
  return (
    <Container>
      <Logo>
        <ImageLogo resizeMode="contain" source={require("./Logo.png")} />
      </Logo>
        <HeaderText>Mercado Luigi</HeaderText>
    </Container>
  );
};

export default Header;
