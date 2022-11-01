import styled from "styled-components/native"

export const Overlay = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.black300};
`

export const GrowModalContainer = styled.View`
    margin-top: 150px;
    background-color: ${({theme}) => theme.colors.white100 };
    flex: 1;
    border-radius: 8px;
    padding: 42px 20px ;
    
    
`

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.Poppins500};
    font-size: 18px;
    color: ${({theme}) => theme.colors.grey};
    
`

export const Historic = styled.View`

    margin-top: 12px;
    padding-top: 52px;
    border-top-width: 2px;
    border-top-color: ${({theme}) => theme.colors.grey};
    flex-direction: row;
    justify-content: space-between;
    
`

export const HistoricType = styled.View`
    
`

export const Label = styled.Text`
    font-family: ${({theme}) => theme.fonts.Poppins400};
    font-size: 15px;
    color: ${({theme}) => theme.colors.grey};
    margin-bottom:15px;
`
export const Data = styled.Text`
    font-family: ${({theme}) => theme.fonts.Poppins500};
    font-size: 16px;
    color: ${({theme}) => theme.colors.bluedark};
    margin-bottom: 12px;
    margin-right: 18px;
`
