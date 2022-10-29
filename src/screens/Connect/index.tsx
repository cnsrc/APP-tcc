import { Image, Keyboard, Text, TouchableOpacity, TouchableWithoutFeedback, TextInput} from "react-native";

import styled from "styled-components/native";
import LogoImagem from "../../assets/Saudebaby.png";
import { InputRegister } from "../../components/Input";
import { Input } from "../../components/Input/styles";
import { Button,
    ConnectContainer,
    Footer,
    Form,
    Header,
    Logo,
    OpenButton,
    ConnectContent,
    TextEx,
    ToExchange,
} from "./style";
import { StackRoutes } from "../../routes/index.routes";


export function Connect (){
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >

            <ConnectContainer>
                <Header>
                    <Logo source={LogoImagem}/>
                </Header>

                <ConnectContent>
                    
                    <Form>
                      
                        <InputRegister  title="Email" />
                        <InputRegister title="Senha" autoComplete="password" secureTextEntry/>
                        <ToExchange activeOpacity={.8}>
                            <TextEx>Esqueceu sua senha?</TextEx>
                            
                        </ToExchange>

                    </Form>
                        

                    <Footer>
                        
                        <Button activeOpacity={.7} >
                                <OpenButton>
                                    Entrar
                                </OpenButton>
                        </Button>
                    </Footer>
                </ConnectContent>
            </ConnectContainer>

        </TouchableWithoutFeedback>
        


    )
}