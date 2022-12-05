import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
    background-color: ${({theme}) =>theme.colors.aqua};
    width: 100%;
    height: 70px;
   align-items: center;
   justify-content: center;
    border-radius: 8px;
`
export const Title = styled.Text`
    color: ${({theme}) => theme.colors.white};
    font-size: 20px;
    font-family: ${({theme}) => theme.fonts.Poppins400};
`