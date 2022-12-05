import styled from "styled-components/native";

export const HeaderContainer = styled.View`
    width: 100%;
    height: 122px;
    background-color: ${(props) => props.theme.colors.pink500};
    align-items: center;
    justify-content: center;
`
export const Title = styled.Text`
    font-size: 24px;
    font-family: ${(props) => props.theme.fonts.Poppins500};
    color: ${(props) => props.theme.colors.white};
`