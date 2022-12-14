import {  Modal, ModalProps, TouchableWithoutFeedback, TextInput, ScrollView } from "react-native";
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import { v4 as uuidv4 } from 'uuid';

const newConsultationSchema = yup.object().shape({
    consultation: yup.string().required("Esse campo é obrigatório"),
    day: 
        yup.number().typeError('apenas digite números').max(32,'digite apenas dias válídos')
        .min(1,'não existe dia negativo ou zero').required('Esse campo é obrigatório'),
    time: yup.string().required('esste campo é obrigatório')

})

import { AddVaccineModalContainer,
        InputsArea,
        Footer,
        Form,
        Overlay,
        Icon,
        
    } from "./style";
import { Button } from "../../../../components/Button";
import { defaultTheme } from "../../../../styles/defaultTheme/theme";
import { InputModal } from "../../../../components/Form/InputModal";
import { ConsultationProps } from "../..";


interface ConsultationModalProps extends ModalProps {
    closeConsultationModal: ()=> void,
    addNewConsultation: (consultation: ConsultationProps) => void,
}

interface consultationSchemaType {
    day: number,
    time: number,
    consultation: string
}

export function ConsultationModal ({closeConsultationModal ,addNewConsultation,...rest}:ConsultationModalProps){
    const {handleSubmit,control, formState:{errors}}  = useForm({
        resolver: yupResolver(newConsultationSchema)
    })

    const {bluedark} = defaultTheme.colors

    function handleRegisterNewConsultation(props: any){
        const datas = props as consultationSchemaType
        console.log(datas)

        const newConsultaion: ConsultationProps = {
            id: String(new Date().getTime()),
            created: new Date,
            ...datas
        }
        console.log(newConsultaion)
        addNewConsultation(newConsultaion)
        closeConsultationModal()
    }
   

    return(
        
            <Modal transparent statusBarTranslucent animationType="fade" {...rest}>
                <TouchableWithoutFeedback onPress={() => closeConsultationModal()}>
                    <Overlay>
                        <AddVaccineModalContainer>
                            <Icon name="calendar-check-o"/>
                                
                            <Form>

                                <InputsArea>
                                
                                
                                    <InputModal 
                                        error={errors.consultation && errors.consultation.message}
                                        control={control} 
                                        name='consultation' 
                                        placeholder='Espécialidade' 
                                        placeholderTextColor={bluedark}
                                     
                                    />
                                    
                                    <InputModal
                                        error={errors.day && errors.day.message}
                                        placeholder='Data' 
                                        keyboardType="numeric" 
                                        placeholderTextColor={bluedark}
                                        control={control}
                                        name='day'
                                    />

                                    <InputModal
                                        error={errors.time && errors.time.message}
                                        control={control}
                                        name='time'                                        
                                        placeholder='Horário' 
                                        placeholderTextColor={bluedark}
                                    />          

                                    <InputModal
                                        control={control}
                                        name='place'  
                                        placeholder='Local' 
                                        placeholderTextColor={bluedark}
                                    />                                


                                </InputsArea>
                            
                                
                                <Footer>
                                    <Button title="Salvar Consulta" onPress={handleSubmit(handleRegisterNewConsultation)}/>
                                </Footer>    
                            </Form>
                            
                        </AddVaccineModalContainer>
                    </Overlay>
        

                </TouchableWithoutFeedback>
                
            </Modal>
        
    )

}