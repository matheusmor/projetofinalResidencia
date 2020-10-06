import React from "react";
import {Text} from 'react-native';
import { Container, Button } from "./style";

const SubmitButton = () => {
  return (
    <>
      <Container>
        <Button>
          <Text style={{fontSize: 20, color: 'white'}}>Submit</Text>
        </Button>
      </Container>
    </>
  );
};

export default SubmitButton;
