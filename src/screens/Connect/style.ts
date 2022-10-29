import styled from "styled-components/native"

export const ConnectContainer = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.pink400};

`
export const Header = styled.View`
    margin-top: 123px;
    align-items: center;
    justify-content: center;

    
    
 `
export const Form = styled.View`
        width: 100%;
        padding: 24px;
        margin-top: 31px;
    
`
export const ConnectContent = styled.View`
    flex: 1;
        
`
export const Logo = styled.Image`
`
export const TextEx =styled.Text`
     color:  ${props => props.theme.colors.bluedark};

`

export const ToExchange = styled.TouchableOpacity`
    font-size: 16px;
    font-family:  ${props => props.theme.fonts.Poppins500};
    padding: 03%;

`
export const Button = styled.TouchableOpacity`
    color: ${props => props.theme.colors.blue300};
    background-color: ${props => props.theme.colors.bluedark} ;
    height: 56px;
    width: 311px;
    margin-top: -27px;
    justify-content: center;
    border-radius: 5px;
`
export const OpenButton = styled.Text`
    font-family: ${props => props.theme.fonts.Poppins500};
    font-size: 16px;
    text-align: center;
    color: white;



`
export const Footer = styled.View`  
    height: 100px;
    align-items: center;
    margin-top: 270px;
    flex: 1;
    background-color: ${props => props.theme.colors.blue300};  
`