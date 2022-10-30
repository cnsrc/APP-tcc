import styled from "styled-components/native";

export const SumaryContainer = styled.View`
    flex: 1;
`
export const SumaryContaint = styled.View`
    margin-top: 85px;
    padding: 0 20px;
    justify-content: space-between;
    flex-direction: row;
`
export const Card = styled.TouchableOpacity`
    width: 46%;
    height: 117px;
    align-items:center;
    justify-content: center;
    border-radius:10px;
    background:  ${({theme}) => theme.colors.aqua};
`
export const CardTitle = styled.Text`
    color: #fff;
    font-size:20px; 
    font-family: ${({theme}) => theme.fonts.Poppins500};

`