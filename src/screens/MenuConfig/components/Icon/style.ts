import styled from "styled-components/native";
import { Slot } from '@radix-ui/react-slot';

export const  IconContainer = styled.View`
  width: 30px;
`

export const IconContent = styled(Slot)`
   font-size:24px;
    color: ${({theme})=>theme.colors.blue200};
`