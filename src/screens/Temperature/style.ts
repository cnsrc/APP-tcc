import styled from "styled-components/native";
import Ruler from 'react-native-animated-ruler';

export const App = styled.View`

`
export const Container = styled.View`
    background-color: ${({theme})=> theme.colors.pink100};
    align-items: center;
    justify-content: end;
`
export const TemperatureContainer = styled.View``
   
export const RulerContent = styled(Ruler)
