import styled from "styled-components/native";

import { MaterialCommunityIcons } from '@expo/vector-icons';

export const ProfileChildContainer = styled.View`
    flex: 1;
    background-color: ${({theme}) =>theme.colors.white};
    margin-top: 50px;
    padding: 0px 20px;
`
export const HeaderContainer = styled.View`
`
export const ProfileChildContent = styled.View`
    flex: 1;
    margin-top: 30px;
`
export const AboutBaby = styled.Text`
    font-size: 20px;
    color: ${({theme}) => theme.colors.grey};

`
export const Line = styled.View`
    height: 2px;
    padding: 0 4px;
    background: ${({theme}) => theme.colors.black100};
    width: 100%;
    margin:0 auto;
    margin-top: 25px;
`
export const FormArea = styled.View`
    margin-top: 20px;
    padding: 10px;
    background-color: ${({theme}) => theme.colors.white100};
    border-radius: 8px;
    
`
export const FormAreaZone = styled.View`
    margin-top: 5px;
`
export const Fields = styled.TextInput`
    width: 100%;
    height: 50px;
    font-size: 16px;
    color: ${({theme}) => theme.colors.blue500};
`
export const FieldsSelect = styled.Text`
    width: 100%;
    height: 50px;
    font-size: 16px;
    color: ${({theme}) => theme.colors.black700};

`
export const Baby = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`
export const IconBaby = styled(MaterialCommunityIcons)`
    font-size: 64px;
    color: ${({theme}) => theme.colors.white100};
`
export const SaveForm = styled.View`
    margin-top: 80px;
`
export const ButtonFinalize = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    background-color: ${({theme})=>theme.colors.aqua};
    align-items: center;
    justify-content: center;
    border-radius: 8px;
`
export const Title = styled.Text`
    color: ${({theme})=>theme.colors.white};
    font-size: 19px;
    font-family: ${({theme})=>theme.fonts.Poppins};
`