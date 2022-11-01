import { Alert, Keyboard, TouchableWithoutFeedback } from "react-native";
import { ConnectContainer, ConnectContent } from "../Connect/style";
import { Button, Footer, Form, Header, Logo, OpenButton } from "./style";
import LogoImage from "../../assets/Saudebaby.png"
import { InputRegister } from "../../components/Input";




export function Confirmation (){
    function handleShowEmailMenssage(){
        Alert.alert(
            'Um email foi enviado para o endereço da sua conta. Verifique seu email para continuar.'
        )
    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >

            <ConnectContainer>
                <Header>
                    <Logo source={LogoImage}/>
                </Header>

                <ConnectContent>
                    
                    <Form>
                      
                        <InputRegister />
                        

                    </Form>
                        

                    <Footer>
                        
                        <Button activeOpacity={.7} onPress={handleShowEmailMenssage} >
                                <OpenButton>
                                    Avançar
                                </OpenButton>
                        </Button>
                    </Footer>
                </ConnectContent>
            </ConnectContainer>

        </TouchableWithoutFeedback>
        


    )
}