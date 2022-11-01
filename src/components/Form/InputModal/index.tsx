import React from 'react'
import { Control, Controller } from 'react-hook-form'
import { TextInputProps } from 'react-native'
import {  ErrorMenssage, Input } from './styles'

interface InputFormProps extends TextInputProps {
    name: string
    control: Control,
    error?: string | undefined | any
}

export const InputModal = ({control, name, error, ...rest}: InputFormProps) => {
    return(
        <>
            <Controller 
                control={control}
                name={name}
                render={({field:{onChange,value}}) => (
                    <Input
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