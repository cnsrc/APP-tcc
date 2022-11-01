import styled from "styled-components/native";
import { AntDesign } from '@expo/vector-icons';

export const TodayConateiner = styled.View`
    background-color: #BDBFBF20;
    justify-content: center;
`
export const ImageContainer = styled.ImageBackground`
    width: 100%;
    height: 348px;
    padding-top: 33px;
    padding-bottom: 13px;
    justify-content: space-between;

`
export const Heading = styled.View`
    margin-top: 9px;
    padding: 0 9px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const UserNames = styled.Text`
    font-size: 20px;
    font-family: ${({theme})=> theme.fonts.Poppins500};
    color: ${({theme})=> theme.colors.black700};
`

export const Config = styled.TouchableOpacity`
    background-color: ${({theme})=> theme.colors.pink300};
    width: 80px;
    height: 80px;
    border-radius: 46.5px;
    align-items: center;
    justify-content: center;
    
`

export const Icon = styled(AntDesign)`
    font-size: 30px;
    color: ${({theme})=> theme.colors.black700};
`

export const CreatedDateGap = styled.View`
    padding-left: 21px;
    width: 70px;
    align-items: center;
`

export const GapCounter = styled.Text`
    font-size: 20px;
    font-family: ${({theme})=> theme.fonts.Poppins500};
    color: ${({theme})=> theme.colors.white};
`
export const TipsToday = styled.View`
    margin-top: 33px;
    padding: 0 20px;
`
export const Tip = styled.View`
    border-radius: 8px;
    min-height: 107px;
    margin-top: 16px;
    background-color: white;
    padding: 16px 0px 16px 20px ;

`
export const TitleTip = styled.Text`
    font-size: 16px;
    font-family: ${({theme})=> theme.fonts.Poppins500};
    color: ${({theme})=> theme.colors.black900};
`