import { Image, Text, TouchableOpacity, View } from "react-native";
import {useNavigation, useRoute} from '@react-navigation/native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
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
import { StackRoutes } from "../../routes/index.routes";


export function Login ({navigation} :NativeStackScreenProps<StackRoutes>){ 
  
    function handleNavegateToRegistration(){
        navigation.navigate('Registration')
    }

    return (
        <LoginContainer>
            <Header>
                <Logo source={logoImage}/>
                <Title>
                    Registre os momentos
                    {'\n'}do seu filho
                </Title>
                <Text style={{fontSize: 30, color: 'blue'}}>
                   
                </Text>
            </Header>

            <Footer>
                <FooterWraper>
                    <NavegateButton activeOpacity={.7} onPress={handleNavegateToRegistration}>
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


