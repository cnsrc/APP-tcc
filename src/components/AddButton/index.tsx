import {TouchableOpacity, TouchableOpacityProps} from "react-native"
import { AddButtonContainer } from "./style"
import {Feather} from "@expo/vector-icons"
import { defaultTheme } from "../../styles/defaultTheme/theme"

interface addButtonProps extends TouchableOpacityProps {
}

export function AddButton(props: addButtonProps) {
    const {white} = defaultTheme.colors
    return(
    <AddButtonContainer {...props}>
        <Feather name="plus" color={white} size={24}/>
    </AddButtonContainer>
    )
}