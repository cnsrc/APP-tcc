
import {TextInputProps,View} from 'react-native'
import { InputRegister } from '../../../components/Input'
import {Control, Controller} from 'react-hook-form'
import { CreateNewAcount } from '../../../screens/Registration'
import { ErrorMenssage } from './styles'

interface InputFormProps extends TextInputProps {
    name: string
    control: Control,
    error?: string | undefined | any
}

export const InputFormRegister = ({control, name, error, ...rest}: InputFormProps) => {
    return(
        <>
            <Controller 
                control={control}
                name={name}
                render={({field:{onChange,value}}) => (
                    <InputRegister
                            
        
                        {...rest}
                        value={value}           
                        onChangeText={onChange}
                />
                )}
            />
            {error && <ErrorMenssage>{error}</ErrorMenssage>}
            
        </>

    )
    
}
