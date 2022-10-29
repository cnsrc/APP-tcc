import styled from "styled-components/native";

export const RegistrationContainer = styled.View`
    flex: 1 ;

    background-color: ${({theme}) => theme.colors.pink400};
 `   
export const Logo =styled.Image`
        margin-top: -40px;
`

export const RegistrationContent = styled.View`
        flex: 1;
       
        margin-top: auto;

`
export const Header = styled.View`
        margin-top: 135px;
        margin-bottom: 30px;
        align-items: center;
        justify-content: center;
 `
export const Door = styled.View`
        padding: 24px;
        width: 100%;
    
`
export const Button = styled.TouchableOpacity`
        margin-top: 65px;
        background-color: ${({theme}) => theme.colors.bluedark} ;
        width: 311px;
        height: 56px;
        margin-top: -15px;
        border-radius: 6px;
        align-items: center;
        
        
        
`

export const OpenButton = styled.Text`
        color: ${({theme}) => theme.colors.white} ;
        font-size: 18px;
        padding: 16px;
        
        
        
`
export const Footer = styled.View`  
        width: 100%;
        height: 100%;
        margin-top: 60px;
        background-color: ${props => props.theme.colors.blue300};
        align-items: center;
`