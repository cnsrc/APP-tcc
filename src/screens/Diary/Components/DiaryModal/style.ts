import styled from "styled-components/native";

export const DiaryModalContainer = styled.View`
    flex: 1;
`
export const Overlay = styled.View`
     flex: 1;
    background-color: ${({theme})=> theme.colors.black300};

`
export const ModalContent = styled.View`
    flex: 1;
    background-color: #fff;
    padding: 20px;
    margin-top: 100px;
`
export const ContentOfDiary = styled.TextInput`
    width: 100%;
    padding-top: 24px;
    padding-bottom: 84px;
    padding-left: 16px;
    font-size: 18px;
    align-items: flex-start;
    border-radius:8px;
    margin-top: 76px;
    color: ${({theme})=>theme.colors.grey};
    background-color: ${({theme})=>theme.colors.pink100};
`
export const AddNewProhibited = styled.View`
    margin-top: 260px;
`