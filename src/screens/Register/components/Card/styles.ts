import styled from "styled-components/native"

export const CardContainer = styled.TouchableOpacity`
    height: 140px;
    background-color: ${props => props.theme.colors.white};
    width: 48%;
    border-radius: 8px;
    align-items: center;
    justify-content: center;

`

export const Label = styled.Text`
    color: ${({theme})=> theme.colors.black900};
    font-size: 16px;
    font-family: ${({theme})=> theme.fonts.Poppins500};
    margin-top: 14px;
`


