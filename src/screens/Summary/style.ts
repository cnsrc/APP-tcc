import styled from "styled-components/native";

export const App = styled.View`
`
export const HeaderContainer = styled.View`
    margin-top: 89px;
`
export const Growth = styled.TouchableOpacity`
    width: 153px;
    height: 117px;
    align-items:center;
    justify-content: center;
    border-radius:10px;
    background: aqua;
    flex-direction: row;
`
export const Temperature = styled.TouchableOpacity`
    width: 153px;
    height: 117px;
    align-items:center;
    justify-content: center;
    border-radius:10px;
    background: aqua;
`
export const TextGrowth = styled.Text`
    color: #fff;
    font-size:22px; 
    font-family: ${({theme}) => theme.fonts.Poppins500};

`
export const TextTemperature = styled.Text`
    color: #fff;
    font-size:22px;
    font-family: ${({theme}) => theme.fonts.Poppins500};
`