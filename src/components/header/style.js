import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #fff159;
  flex-direction: row;
  padding: 15px 15px 15px 15px;
  height: 80px;
`;

export const SearchBar = styled.TextInput`
  border-radius: 25px;
  flex: 10;
  background-color: #fff;
  padding-left: 10px;
  font-size: 25px;
`;

export const SearchButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
