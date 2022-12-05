import styled from "styled-components/native";
import { FontAwesome } from '@expo/vector-icons'; 

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
export const Profile = styled.TouchableOpacity`
`
export const UserNames = styled.Text`
    font-size: 20px;
    font-family: ${({theme})=> theme.fonts.Poppins500};
    color: ${({theme})=> theme.colors.black700};
`

export const ProfileIcon = styled(FontAwesome)`
  font-size: 60px;
  color: ${({theme})=>theme.colors.black300};
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
export const Tip = styled.TouchableOpacity`
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
export const SummaryTip = styled.Text`
    font-size: 14px;
    font-family: ${({theme})=> theme.fonts.Poppins400};
    color: ${({theme})=> theme.colors.blue}; 
`