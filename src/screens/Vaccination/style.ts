import styled from "styled-components/native"

export const VaccinationContainer = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.white100};
`
export const VaccinationContent = styled.View`
    flex: 1;
    justify-content: space-between;
    margin-top: 68px;
    padding-bottom: 30px;
`

export const Vaccines = styled.ScrollView`
    padding: 0px 30px;
    
`

export const Vaccine = styled.View`
    flex-direction: row;
    justify-content: space-between;

    border-left-width: 3px;
    border-left-style: ${({theme})=> theme.colors.red200};
    border-left-color: ${({ theme }) => theme.colors.red200};

    border-radius:5px;
    margin-top: 8px;
    padding: 13px 13px 12px 19.31px;
    background-color: ${({ theme }) => theme.colors.white};
`

export const VaccineName = styled.Text`
    font-size: 15px;
    font-family: ${({ theme }) => theme.fonts.Poppins400};
    color: ${({ theme }) => theme.colors.blue600};
`

export const VaccineDate = styled.Text`
    font-size: 15px;
    font-family: ${({ theme }) => theme.fonts.Poppins500};
    color: ${({ theme }) => theme.colors.blue600};
`
export const ButtonWrapper = styled.View`
    margin-top: 30px;
    padding: 0px 72px ;
    align-items: center;
`
