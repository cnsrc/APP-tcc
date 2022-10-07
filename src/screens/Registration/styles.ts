import styled from "styled-components/native";

export const Cashier = styled.View`
    flex: 1 ;
    background-color: ${({theme}) => theme.colors.pink400};
    align-items: center;
 `   
    export const Logo =styled.Image`
        
`
export const Header = styled.View`
    margin-top: 135px;
    align-items: center;
    justify-content: center;
 `
export const Door = styled.View`
        padding: 50px;
        


`
export const Cashierem = styled.Text`

`
export const Passaword = styled.Text`
        
`
export const Child = styled.Text`
        
`
export const Title = styled.Text`
        
`
export const Button = styled.TouchableOpacity`
        margin-top: 65px;
        background-color: ${({theme}) => theme.colors.bluedark} ;
        align-content: center;
        width: 311px;
        height: 56px;
        margin-top: -15px;
        border-radius: 6px;
        
        
        
        `

export const OpenButton = styled.Text`
        color: ${({theme}) => theme.colors.white} ;
        font-size: 18px;
        padding: 16px;
        
        
        
`
        export const Fooder = styled.View`
                 width: 100%;  
                 height: 20%;
                 background-color: ${props => props.theme.colors.blue300};
                 padding: 0 32px;
                 margin-top: auto;
                 
`