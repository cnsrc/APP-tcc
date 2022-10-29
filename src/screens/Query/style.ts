import { View } from "react-native";
import styled from "styled-components/native";

export const Conatiner = styled.View`
    
    
`
export const App = styled.View`

`
export const Footer = styled.View`
    width: 100%;
    height: 110px;
    background-color: ${props => props.theme.colors.pink500};
    margin-top:32px; 
    align-items: center;
    justify-content: center;

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
export const TextQuery = styled.Text`
    color: ${({theme}) =>theme.colors.white};
    font-size:22px;
    font-family:${({theme}) => theme.fonts.Poppins500};
`
export const Center = styled.View`
    flex-direction:row-reverse;
    margin-top: -69px;
    padding: 10px;
    
`
export const Add = styled.TouchableOpacity`
    width:50px;
    height:50px;
    background-color: aqua;
    align-items: center;
    justify-content: center;
    border-radius:8px;


`
export const TextAdd = styled.Text`
    font-size: 30px;
    color: ${({theme}) => theme.colors.white};
`
export const Marking = styled.View`

`
export const QueryName= styled.Text`
    padding: 19px;
    margin-top: 20px;
    color: ${({theme})=> theme.colors.grey};
    font-size: 20px;
    font-family: ${({theme})=> theme.fonts.Poppins500};
`
export const ConsultationHeader = styled.View`
    padding: 20px;
    
    
`
export const Consultation1 = styled.TouchableOpacity`
    width: 3.86px;
    height: 48.34px;
    border-radius: 6px;
    background-color: #E75480;
    
`
export const Consultation2 = styled.TouchableOpacity`
    width: 3.86px;
    height: 48.34px;
    border-radius: 6px;
    background-color:#E75480;
`
export const Consultation3 = styled.TouchableOpacity`
    width: 3.86px;
    height: 48.34px;
    border-radius: 6px;
    background-color:#E75480;
    `
export const Consultation4 = styled.TouchableOpacity`
    width: 3.86px;
    height: 48.34px;
    border-radius: 6px;
    background-color:#E75480;
`
export const Space = styled.View`
        
`
export const Scheduled_Appointments1 = styled.TouchableOpacity`
    width: 316px;
    height: 48px;
    background-color: #fff;
    

`
export const Scheduled_Appointments2 = styled.TouchableOpacity`
    width: 316px;
    height: 48px;
    background-color: #fff;
    

`
export const Scheduled_Appointments3 = styled.TouchableOpacity`
    width: 316px;
    height: 48px;
    background-color: #fff;
    

`
export const Scheduled_Appointments4 = styled.TouchableOpacity`
    width: 316px;
    height: 48px;
    background-color: #fff;
    
`
export const TextScheduled = styled.Text`
    align-items: center;
    justify-content: center;
    color: ${({theme})=> theme.colors.blue600};
    font-size: 15px;
    font-family:${({theme})=> theme.fonts.Poppins500};
`
export const TextScheduled2 = styled.Text`
    align-items: center;
    justify-content: center;
    color: ${({theme})=> theme.colors.blue600};
    font-size: 15px;
    font-family:${({theme})=> theme.fonts.Poppins500};
`
export const TextScheduled3 = styled.Text`
    align-items: center;
    justify-content: center;
    color: ${({theme})=> theme.colors.blue600};
    font-size: 15px;
    font-family:${({theme})=> theme.fonts.Poppins500};
`
export const TextScheduled4 = styled.Text`
    align-items: center;
    justify-content: center;
    color: ${({theme})=> theme.colors.blue600};
    font-size: 15px;
    font-family:${({theme})=> theme.fonts.Poppins500};
`