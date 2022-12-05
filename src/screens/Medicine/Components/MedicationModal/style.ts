import styled from "styled-components/native";
import { AntDesign } from '@expo/vector-icons'; 

export const Overlay = styled.View`
    flex: 1;
    background-color: ${({theme})=> theme.colors.black300};
`
export const Icon = styled(AntDesign)`
    font-size: 76px;
`
export const AddVaccineModalContainer = styled.View`
    margin-top: 150px;
    flex: 1;
    align-items: center;
    padding: 17px 20px  30px 20px;

    background-color: ${({theme})=> theme.colors.white100};
`
export const Form = styled.View`
    margin-top: 16px;
    border-top-width: 1px;
    padding-right: 22px;
    border-top-color:  ${({theme})=> theme.colors.black900};
    width: 100%;
    
`
export const InputsArea = styled.ScrollView`
   width: 100%;

`
export const TextArea = styled.TextInput`
    height: 100px;
    border-radius: 8px;
    background-color: ${({theme})=> theme.colors.blue100};
    padding-left: 16px;
    font-size: 20px;
    font-family: ${({theme})=> theme.fonts.Poppins500};
    margin-top: 16px ;
    color: ${({theme})=> theme.colors.black700};
`
export const Footer = styled.View`
    margin-top: 20px;
    width: 100%;
    padding: 0px 50px
 
`