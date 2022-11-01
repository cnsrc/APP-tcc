import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons'; 

export const MedicationContainer = styled.View`
        flex: 1;
        background-color: ${({theme})=>theme.colors.white100};

`
export const MedicationContent = styled.View`
        margin-top: 62px;
        flex: 1;
        padding-bottom: 35px;
        justify-content: space-between;

`
export const Medicines = styled.View`
        
        padding: 0 28px;
`
export const Medicine = styled.View`
        height: 48px;
        align-items: center;
        padding: 0 9px 0 19.31px;

        border-left-width:3px;
        border-left-color: ${({theme})=>theme.colors.red200};
        border-left-style:solid ;
        border-radius: 5px;

        background-color: ${({theme})=>theme.colors.white};
        margin-top: 8px;
        flex-direction: row;
        justify-content: space-between;

        
`
export const MedicineActions = styled.View`
        flex-direction: row;
         
        align-items: center;
        
`
export const MedicineName = styled.Text`
        color: ${({theme})=>theme.colors.blue600};
        font-size:15px;
        font-family:${({theme})=>theme.fonts.Poppins400};
        
`
export const MedicinePeriod = styled.Text`
        color: ${({theme})=>theme.colors.blue600};
        font-size:15px;
        font-family:${({theme})=>theme.fonts.Poppins500};
        margin-right: 23px;
         
`
export const MedicieneIcon  = styled(Ionicons)`
  font-size: 24px;
  color: ${({theme})=>theme.colors.blue600};
`
export const WrapperButton = styled.TouchableOpacity`
        padding:0 65px;
        

`

