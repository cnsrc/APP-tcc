import { View } from "react-native";
import styled from "styled-components/native";

export const QueryContainer = styled.View`
    flex:1;
`
export const ConsultationContent = styled.View`
    flex: 1;

`
export const Month = styled.View`
    padding: 0 24px;
    flex-direction: row;
    margin-top: 30px;
    align-items: center;
    justify-content: space-between;

`
export const MonthLabel = styled.Text`
    color: black;
    font-size:25px;
    
`
export const Marking = styled.View`
   padding: 0 24px;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   margin-top: 32px;

`
export const QueryName = styled.Text`
`
export const TextQuery = styled.Text`
    color: ${({theme}) =>theme.colors.white};
    font-size:22px;
    font-family:${({theme}) => theme.fonts.Poppins500};
`

export const Consultations = styled.View`
        margin-top: 24px;
        padding: 0 24px;
`
export const Consultation = styled.View`
        height: 48px;
        align-items: center;
        padding: 0 9px 0 19.31px;
        margin-top: 14px;

        border-left-width:3px;
        border-left-color: ${({theme})=>theme.colors.red200};
        border-left-style:solid ;
        border-radius: 5px;

        background-color: ${({theme})=>theme.colors.white};
        flex-direction: row;
        justify-content: space-between;

        
`
export const ConsultationName = styled.Text`
    color: ${({theme})=>theme.colors.blue600};
    font-size:15px;
    font-family:${({theme})=>theme.fonts.Poppins400};
`

export const ConsultationDate = styled.Text`
     color: ${({theme})=>theme.colors.blue600};
        font-size:15px;
        font-family:${({theme})=>theme.fonts.Poppins500};
        margin-right: 23px;
         
`
