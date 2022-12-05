import React, { useContext } from "react";

import * as yup from 'yup';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView ,TouchableOpacity,TouchableWithoutFeedback } from "react-native";
import logoImage from "../../assets/Saudebaby.png";

import { Button,
         RegistrationContainer,
         Logo,
         InputsArea,
         Footer,
         Header,
         OpenButton,
         RegistrationContent
} from "./styles";
import {  useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import { InputFormRegister } from "../../components/Form/InputForm";
import axios from "axios";
import { UserContext } from "../../Context/UserContext";

const newCreateNewAconutSchema = yup.object().shape({
    name: yup.string().required("Esse campo é obrigatório"),
    email: yup.string().email('Este email está incorreto').required("Esse campo é obrigatório"),
    password: yup.string().min(6,'O minimo de caracteres é 6') .required("Esse campo é obrigatório"),
    kinship: yup.string().required('Esse campo é obrigatório'),
    childName: yup.string().required("Esse campo é obrigatório"),


 
})

export interface CreateNewAcount{
    name: string,
    email: string,
    password: string,
    kinship: string,
    childName: string
}

export function Registration (){
    const { userIsLoged, createNewUser} = useContext(UserContext)
    const {
        handleSubmit,
        control,
        formState:{errors, isSubmitting}

    } = useForm({
        resolver: yupResolver(newCreateNewAconutSchema)
    })

    function handleCreateNewAcount(props: any){
        const userData = props as CreateNewAcount
        createNewUser({
            name: userData.name,
            email: userData.email,
            password: userData.password,
            kinship: userData.kinship,
            childName: userData.childName,
            id: String( new Date().getTime()),
            createdDate: new Date()
        })
        

    }
    
    const buttonIsDisabled = isSubmitting
    


    return (

        
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{flex: 1, justifyContent: 'flex-end'}}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <RegistrationContainer>
                    <Header>
                    
                        <Logo source ={logoImage}/>
                    

                    </Header>
                    
                    <RegistrationContent>
                        <ScrollView> 
                            <InputsArea>
                                <InputFormRegister 
                                    name="name" 
                                    placeholder="Nome completo" 
                                    control={control}
                                    error = {errors.name && errors.name.message}
                                />
                                <InputFormRegister 
                                    name="email" 
                                    placeholder="Email" 
                                    control={control}
                                    error = {errors.email && errors.email.message}
                                />
                                <InputFormRegister 
                                    name="password"
                                    autoComplete={'password'}
                                    secureTextEntry
                                    placeholder="Senha"  
                                    control={control}
                                    error = {errors.password && errors.password.message}
                                />
                                <InputFormRegister
                                    name="kinship"
                                    placeholder="Parentesco"
                                    control={control}
                                    error = {errors.kinship && errors.kinship.message}
                                />
                                
                                <InputFormRegister 
                                    name="childName" 
                                    placeholder="Nome da criança" 
                                    control={control}
                                    error = {errors.childName && errors.childName.message}
                                />

                            </InputsArea>

                            <Footer>
                            
                                <TouchableOpacity/>
                                <Button
                                    disabled={buttonIsDisabled}
                                    onPress={handleSubmit(handleCreateNewAcount)}
                                    activeOpacity={.9} 
                                    >
                                    <OpenButton>
                                    Entrar
                                    </OpenButton>
                                </Button> 
                                
                            </Footer>
                            </ScrollView>

                       


                    </RegistrationContent>

                    

                </RegistrationContainer>
                        
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>



            
    )
}