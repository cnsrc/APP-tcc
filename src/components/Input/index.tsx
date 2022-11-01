import { TextInput, TextInputProps, View } from "react-native";
import { Header } from "../Header";
import { Input } from "./styles";

interface InputRegisterProps extends TextInputProps {
   
}

export function InputRegister({...rest}: InputRegisterProps){
    return(
        <View>
            <Input
                {...rest}
                
            />
                
        </View>
    )
}