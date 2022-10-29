import styled from "styled-components/native";

export const App = styled.View`

`
export const Container = styled.View`
    background-color: ${({theme})=> theme.colors.pink100};
    align-items: center;
    justify-content: end;
`
export const ContainerHeader = styled.View`
   
   
   `
export const Footer = styled.View`
    align-items: center;
    margin-top: 231px;

`
export const Button = styled.TouchableOpacity`
    width: 283px;
    height: 70px;
    align-items:center;
    justify-content: center;
    border-radius:10px;
    background: aqua;

`
export const ButtonText = styled.Text`
    width: 232px;
    height: 30px;
    color: #fff;
    font-size: 20px;
    font-family:${({theme})=> theme.fonts.Poppins500};
`