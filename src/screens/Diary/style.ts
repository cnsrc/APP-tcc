import styled from "styled-components/native";
export const DiaryContainer = styled.View`
  flex: 1;
`

export const DiaryContent = styled.View`
    flex: 1;
    background-color:${({theme})=>theme.colors.white};
    padding: 39px 18px ;
    align-items: center;
`
export const Title = styled.Text`
    font-size: 26px;
    color: ${({theme})=>theme.colors.grey};
    font-family: ${({theme})=>theme.fonts.Poppins400};
    
`
export const RegisterDiary = styled.TouchableOpacity`
    width: 100%;
    height: 81px;
    padding: 24px;
    align-items: center;
    justify-content: center;
    margin-top: 39px;
    border-radius: 10px;
    background-color: ${({theme})=>theme.colors.pink100};
`
export const TextAnnotations = styled.Text`
    font-size: 20px;
    color: ${({theme})=>theme.colors.grey};
    font-family: ${({theme})=>theme.fonts.Poppins400};
`
export const AddProhibited = styled.View`
    margin-top: 5px;
`