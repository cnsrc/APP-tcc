import styled from "styled-components/native";
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

interface IconProps {
    type: 'FontAwesome' | 'Entypo'
}

export const MenuConfigContainer = styled.View`
    flex:1;
`

export const MenuConfigContent = styled.View`
    flex: 1;
    margin-top: 20px;
`
export const Header = styled.View`
    width: 100%; 
    height: 100px;
    background-color: ${(props) => props.theme.colors.red};
    padding: 0px 40px 0px;
    justify-content: center;
`
export const TitleConfig = styled.Text`
    font-size: 20px;
    font-family: ${(props) => props.theme.fonts.Poppins400};
    color: ${(props) => props.theme.colors.white};
`
export const Profile = styled.View`
    margin-top: 20px;
    padding: 0px 14px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const TitleProfile = styled.Text`
    font-family: ${({theme})=>theme.fonts.Poppins500};
    color: ${({theme})=>theme.colors.black300};
    font-size: 30px;
`
export const ProfileIcon = styled(FontAwesome)`
  font-size: 60px;
  color: ${({theme})=>theme.colors.black300};
`
export const TitleTopics = styled.View`
    padding: 0px 17px;
    justify-content: center;
    margin-top: 19px;
`
export const Text = styled.Text`
    font-family: ${({theme})=>theme.fonts.Poppins500};
    color: ${({theme})=>theme.colors.black700};
    font-size: 22px;
`
export const InputsData = styled.View`
    justify-content: space-between;
    align-items: center;
    padding: 0px 28px ;
    flex-direction: row;
    margin-top: 20px;
`

export const InputDataWrapper = styled.View`
    flex-direction: row;
    align-items: center;

`
export const Input = styled.Text`
    font-family: ${({theme})=>theme.fonts.Poppins400};
    color: ${({theme})=>theme.colors.grey};
    font-size: 17px;
    margin-left: 30px;
`
export const InputChange = styled.TextInput`
    font-family: ${({theme})=>theme.fonts.Poppins};
    color: ${({theme})=>theme.colors.grey};
    font-size: 17px;
`
export const InputOn = styled.Text`
    font-family: ${({theme})=>theme.fonts.Poppins400};
    color: ${({theme})=>theme.colors.blue1001};
    font-size: 17px;
`
export const SizeIcon = styled(MaterialCommunityIcons)`
    font-size:24px;
    color: ${({theme})=>theme.colors.blue200};
`
export const ScaleIcon = styled(MaterialCommunityIcons)`
    font-size:24px;
    color: ${({theme})=>theme.colors.blue200};
`
export const TrashIcon = styled(Ionicons)`
    font-size:24px;
    color: ${({theme})=>theme.colors.blue200};
`
export const ThermometerIcon = styled(FontAwesome5)`
    font-size:24px;
    color: ${({theme})=>theme.colors.blue200};
`
export const DataoptionsSummary = styled.TouchableOpacity`
    justify-items: center;
`
export const InputList = styled.Text`
    font-family: ${({theme})=>theme.fonts.Poppins400};
    color: ${({theme})=>theme.colors.grey};
    font-size: 17px;
`
export const Line = styled.View`
    height: 2px;
    padding: 0 4px;
    background: ${({theme}) => theme.colors.black100};
    width: 90%;
    margin:0 auto;
    margin-top: 20px;
`
export const DeleteProfile = styled.View`
    margin-top: 10px;
    padding: 0px 40px;
`
export const ButtonEdit = styled.TouchableOpacity`
    background-color: ${({theme}) =>theme.colors.red300};
    width: 100%;
    height: 40px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin-top: 10px;
`
export const TitleButton = styled.Text`
    color: ${({theme}) => theme.colors.white};
    font-size: 17px;
    font-family: ${({theme}) => theme.fonts.Poppins500};
`
export const DiceExport = styled.TouchableOpacity`
    padding: 0px 28px ;
    margin-top: 20px;
   
`
export const ExportTitle = styled.Text`
    font-family: ${({theme})=>theme.fonts.Poppins400};
    color: ${({theme})=>theme.colors.blue1001};
    font-size: 17px;
`
export const Disconnect = styled.View`
    align-items: center;
    justify-content: center;
    padding: 10px 50px;

`
export const LogOutAccount = styled.TouchableOpacity`
    background-color: ${({theme}) =>theme.colors.aqua100};
    border-radius: 8px;
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: center;
`
export const ButtonGoOut = styled.Text`
    color: ${({theme}) =>theme.colors.white};
    font-size: 20px;
    font-family: ${({theme}) => theme.fonts.Poppins};
`
