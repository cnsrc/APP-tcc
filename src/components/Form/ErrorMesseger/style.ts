import styled from "styled-components/native";

export const ErrorContainer = styled.View`
  margin-top: 5px;

`
export const TitleError = styled.Text`
  color: ${({theme}) => theme.colors.red300};
  font-size: 16px;
  font-family: ${({theme}) => theme.fonts.Poppins400};
  
`