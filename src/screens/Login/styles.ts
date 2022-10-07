import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

export const LoginContainer = styled.View`
    flex: 1;
    align-items: center;

    background-color: ${props => props.theme.colors.pink400};
`

export const Header = styled.View`
    margin-top: 135px;
    align-items: center;
`


export const Logo = styled.Image`
`

export const Title = styled.Text`
    font-size: 30px;
    color:  ${({theme}) => theme.colors.blue500};
    font-family: ${props => props.theme.fonts.Poppins500};
    
    text-align: center;
    margin-top: 67px;
`

export const Footer = styled.View` 
    width: 100%;  
    height: 30%;

    background-color: ${props => props.theme.colors.pink500};
    margin-top: auto;
    padding: 0 32px;
`

export const FooterWraper = styled.View`
    margin-top: -44px;
`

export const  NavegateButton = styled.TouchableOpacity<TouchableOpacityProps>`
    background-color: ${props => props.theme.colors.white};
    border-radius: 5px;
    padding: 16px;
    margin-top: 16px;
   
`

export const  NageteButtonTitle = styled.Text`
    font-family: ${props => props.theme.fonts.Poppins500};
    font-size: 16px;
    text-align: center;
    color: ${props => props.theme.colors.blue600};


`

export const ButtonTest = styled.TouchableOpacity``



