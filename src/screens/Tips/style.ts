import styled from "styled-components/native";

export const TipContainer = styled.View`
    flex: 1;
    background-color: ${({theme})=>theme.colors.white};
`
export const TipContent = styled.View`
    border-bottom-style: solid;
    border-left-width: 2px;
    border-left-color: ${({theme})=>theme.colors.black700};
    margin-top: 24.96px;
    padding: 0px 20px;
`
export const Content = styled.Text`
    font-family: ${({theme})=>theme.fonts.Poppins400};
    color: ${({theme})=>theme.colors.blue};
    font-size: 18px;
`
