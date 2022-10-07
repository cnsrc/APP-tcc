import { Image, Text, TouchableOpacity, View } from "react-native";

import logoImage from "../../assets/Saudebaby.png";
import styled from "styled-components/native";
import { 
    Logo, 
    Title,
    Footer, 
    Header, 
    FooterWraper,
    LoginContainer, 
    NavegateButton,
    NageteButtonTitle, 
    ButtonTest,
} from "./styles";



//01 função ok
// 02 retornar um html

export function Login (){
    return (
        <LoginContainer>
            <Header>
                <Logo source={logoImage}/>
                <Title>
                    Registre os momentos
                    {'\n'}do seu filho
                </Title>
            </Header>

            <Footer>
                <FooterWraper>
                    <NavegateButton activeOpacity={.7}>
                        <NageteButtonTitle>Criar Conta</NageteButtonTitle>
                    </NavegateButton>

                    <NavegateButton activeOpacity={.7}>
                        <NageteButtonTitle>Entrar</NageteButtonTitle>
                    </NavegateButton>

                </FooterWraper>
                
                

            </Footer>
           
        </LoginContainer>
    )
}


