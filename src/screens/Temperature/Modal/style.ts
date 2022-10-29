import styled from "styled-components/native";

export const App = styled.View`
`
export const Top = styled.View`
    width: 100%;
    height: 89px;
    background-color: ${({theme})=> theme.colors.pink500};
`
export const TextTop = styled.Text`
    align-items: center;
    justify-items: center;
    font-size: 24px;
    font-family: ${({theme})=> theme.fonts.Poppins500};

`
export const Base = styled.View`
    background-color: #00000030;
`
export const HeaderContainer = styled.View`
`
export const RulerContainer = styled.View`

`
export const Ruler = styled.Modal`

`