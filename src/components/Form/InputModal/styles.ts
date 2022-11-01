import styled from "styled-components/native";

export const Input = styled.TextInput`
    height: 70px;
    border-radius: 8px;
    background-color: ${({theme})=> theme.colors.blue100};
    padding-left: 16px;
    font-size: 20px;
    font-family: ${({theme})=> theme.fonts.Poppins500};
    margin-top: 16px ;
    
    
    color: ${({theme})=> theme.colors.black700};
`

export const ErrorMenssage = styled.Text`
  color: ${({theme}) => theme.colors.red300};
  margin-top: 8px;
  font-size: 16px;
  font-family: ${({theme}) => theme.fonts.Poppins400};
`