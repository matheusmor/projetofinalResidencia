import React from "react";
import {Text} from 'react-native';
import { Container, Button } from "./style";

const DeleteButton = () => {
  return (
    <>
      <Container>
        <Button>
          <Text style={{fontSize: 20, color: 'white'}}>Delete</Text>
        </Button>
      </Container>
    </>
  );
};

export default DeleteButton;
