import styled from "styled-components/native";

export const TodayConateiner = styled.View`
    background-color: #BDBFBF20;
    justify-content: center;
`
export const TodayContent = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;

`
export const RegisterConfig = styled.View`

`
export const Names = styled.Text`
    flex-direction: row;
`
export const Config = styled.TouchableOpacity`
    background-color: ${({theme})=> theme.colors.pink300};
    width: 93px;
    height: 91px;
    border-radius: 1568.94px;
    
`
export const Month = styled.View`
    padding:21px;
    align-items: center;
   
    
`
export const MonthTitle = styled.Text`
    
`
export const Header = styled.View`
    margin-top: 450px;
    align-items: center;
    justify-content: center;
    color: ${({theme}) => theme.colors.blue};
    font-size: 18px;
    border-radius: 8px;
    background-color: white;
    padding: 16px 0px 16px 20px ;
    -ms-grid-row-align: 44px;
`
export const Form = styled.View`
    justify-content: center;
    align-items: center;
` 
export const TipsToday = styled.View`
`
export const Tips = styled.View`
`
export const TitleTips = styled.Text`
`