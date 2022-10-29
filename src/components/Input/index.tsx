import { TextInput, TextInputProps, View } from "react-native";
import { Header } from "../Header";
import { Input } from "./styles";

interface InputRegisterProps extends TextInputProps {
    title: string
}

export function InputRegister({title, ...rest}: InputRegisterProps){
    return(
        <View>
            <Input
                {...rest}
                placeholder={title}
            />
                
        </View>
    )
}