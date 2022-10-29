import {TouchableOpacityProps} from "react-native"
import { ButtonContainer, Title } from "./style";

interface  ButtonProps extends TouchableOpacityProps  {
    title: string;
}

export function Button (props: ButtonProps){
    return (
        <ButtonContainer {...props}>
            <Title>{props.title}</Title>
        </ButtonContainer>    )

}