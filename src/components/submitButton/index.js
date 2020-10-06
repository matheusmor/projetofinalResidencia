import { forModalPresentationIOS } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators";
import React from "react";

import { Container, Button } from "./style";

const SubmitButton = () => {
  return (
    <>
      <Container>
        <Button>Submit</Button>
      </Container>
    </>
  );
};

export default SubmitButton;
