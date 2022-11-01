import styled from "styled-components/native";

export const ErrorMenssage = styled.Text`
  color: ${({theme}) => theme.colors.red300};
  margin-top: 8px;
  font-size: 16px;
  font-family: ${({theme}) => theme.fonts.Poppins400};
`