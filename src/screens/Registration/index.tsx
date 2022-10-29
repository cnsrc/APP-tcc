import React, { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text,TouchableOpacity,TouchableWithoutFeedback } from "react-native";
import {NativeStackScreenProps} from '@react-navigation/native-stack'

import logoImage from "../../assets/Saudebaby.png";
import { StackRoutes } from "../../routes/index.routes";
import { InputRegister } from "../../components/Input";
import { Button, RegistrationContainer,
    Logo,
    Door,
    Footer,
    Header,
    OpenButton,
    
    RegistrationContent
} from "./styles";

interface RegistrationParmsProps {
    id: string
}


{/*
clicar no botão e mostar o texto do input
pegar o valor do input
chamar a função que atualiza o estado

*/}



export function Registration (){
    const [text,setText] = useState('')
    const [isViseble, setIsVisible] = useState(false)
    function handleText (value: string){
    console.log(value)
    
      setText(value)
    }    


    function show(){
        setIsVisible(true)
    }


    return (

        
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{flex: 1, justifyContent: 'flex-end'}}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <RegistrationContainer>
                    
                        <RegistrationContent>
                            <Header>
                                <Logo source ={logoImage}/>
                            

                            </Header>

                            <Door>
                                <InputRegister title="Nome completo" onChangeText={handleText} />
                                <InputRegister title="Email"/>
                                <InputRegister title="Senha"/>
                                <InputRegister title="Nome da criança"/>
                            </Door>

                            <Text style={{fontSize: 30, color: 'blue'}}>
                                {
                                    isViseble === true ? text :   ''
                                }
                            </Text>

                            <Footer>
                                <TouchableOpacity/>
                                <Button onPress={show} activeOpacity={.9} >
                                    <OpenButton Onpress >
                                    Entrar
                                    </OpenButton>
                                </Button> 
                            </Footer>

                        </RegistrationContent>

                    

                </RegistrationContainer>
                        
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>



            
    )
}