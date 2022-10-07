import { TextInput } from "react-native";
import { Input } from "./styles";

interface InputRegisterProps {
    title: string
}

export function InputRegister({title}: InputRegisterProps){
    return(
        <Input
            placeholder={title}
        />
    )
}