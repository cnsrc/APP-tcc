import { Keyboard, TouchableWithoutFeedback} from "react-native";
import LogoImagem from "../../assets/Saudebaby.png";

import { Button,
         ConnectContainer,
         Footer,
         Form,
         FieldForm,
         InputsArea,
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
                        <FieldForm>
                            <InputsArea placeholder="Email"/>
                        </FieldForm>
                        <FieldForm>
                            <InputsArea placeholder="Senha"/>
                        </FieldForm>
                        
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