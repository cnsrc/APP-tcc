import styled from "styled-components/native";

export const GrowthContainer = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.white100};
`
export const GrowthContent = styled.View`
    padding: 0  14px;

    
`
export const Main= styled.View`
    margin-top: 66px;
    align-items: center;
  
`
export const GrowthTitle = styled.Text`
    font-size: 22px;
    font-family: ${({theme}) => theme.fonts.Poppins500};
    color: ${({theme}) => theme.colors.blue600};
`
export const WeightMark = styled.View`
    align-items: center;
    margin-top: 16px;
    padding: 16px;
    flex-direction: row;
    justify-content: space-between;
`
export const Weight = styled.Text`
    font-size: 15px;
    font-family: ${({theme}) => theme.fonts.Poppins400};
    color: ${({theme}) => theme.colors.grey};
`
export const HeaderContainer = styled.View`

`
export const Markings = styled.View`
    flex-direction: row;
    justify-content: space-between;
`
export const MarkingOfValues = styled.View`
    height: 96px;
    width: 100px;
    align-items: center;
    padding: 18px;
    background-color: ${({theme}) => theme.colors.grey400};
    border-radius: 8px;
`
export const ValueRegister = styled.Text`
    margin-top: 3px;
    font-size: 12.64px;
    font-family: ${({theme}) => theme.fonts.Poppins500};
    color: ${({theme}) => theme.colors.blue600};
`
export const Line = styled.View`
    height: 2px;
    padding: 0 4px;
    background: ${({theme}) => theme.colors.blue600};
    width: 90%;
    margin:0 auto;
    margin-top: 3px;
    
`
export const Separator = styled.View`
    height: 2px;
    padding: 0 4px;
    background: ${({theme}) => theme.colors.blue300};
    width: 90%;
    margin:0 auto;
    margin-top: 48px;
    
`