import styled from "styled-components/native";

export const ContainerTop = styled.View`
  display: flex;
  flex-direction: row;
  margin: 2px 20px 0px 20px;
`;
export const ContainerImg = styled.Image`
  margin: 0px 20px 0px 0px;
  width: 180px;
  height: 180px;
  background: #c4c4c4;
`;

export const ContainerInf = styled.View`
  justify-content: space-between;
  flex: 1;
`;
export const ContainerName = styled.View`
  height: 50px;
  background: #c4c4c4;
`;
export const ContainerPrice = styled.View`
  background: #c4c4c4;
  height: 50px;
`;
export const ContainerDesc = styled.View`
  height: 50px;
  background: #c4c4c4;
`;

export const ContainerBot = styled.View`
  display: flex;
  flex-direction: row;
  margin: 17px 20px 0px 20px;
`;
export const ContainerStock = styled.View`
  background: #c4c4c4;
  height: 50px;
  width: 180px;
  margin: 0px 20px 0px 0px;
`;
export const ContainerCategory = styled.View`
  background: #c4c4c4;
  height: 50px;
  flex: 1;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 20px;
  padding-left: 10px;
`;

export const InputDesc = styled.TextInput`
  flex: 1;
  font-size: 14px;
  padding-left: 5px;
`;

export const InputCat = styled.Picker`
  flex: 1;
  font-size: 14px;
  padding-left: 5px;
`;