import { Keyboard, Modal, ModalProps, ScrollView, TouchableWithoutFeedback, View } from "react-native";
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import { defaultTheme } from "../../../../styles/defaultTheme/theme";
import { AddVaccineModalContainer,
        InputsArea,
        Footer,
        Form,
   
        Overlay,
        TextArea,
        Icon
    } from "./style";
import { Button } from "../../../../components/Button";
import { InputModal } from "../../../../components/Form/InputModal";
import { medicationProps } from "../..";

interface MedicationModalProps extends ModalProps {
    CloseModal: ()=> void
    addNewMedication: (newMedication: medicationProps) => void
}

const newMedicationSchema = yup.object().shape({
    name: yup.string().required('Este campo é obrigatório').required('Nome é um campo obrigatório'),
    dose: yup.number().typeError('Apenas números').required('Dose é um campo é obrigatório'),
    observation: yup.string(),
    gap: 
        yup.number().typeError('digite um número válido')
        .max(24,'o dia tem apenas 24 horas').required('este campo é obrigatório')
})

interface newMedicationType {
    name: string,
    dose: number,
    observation: string,
    gap: number
}


export function MedicationModal ({CloseModal,addNewMedication,...rest}:MedicationModalProps){
    const {control,handleSubmit,reset,formState:{errors}}  = useForm({
        resolver: yupResolver(newMedicationSchema)
    })
    


    function handleAddNewMedication(props: any){
        const datas = props as medicationProps
        const newMedication: medicationProps  = {
            id: String(new Date().getTime()),
            name: datas.name,
            dose: datas.dose,
            gap: datas.gap,
            observation: datas.observation,
        }
        addNewMedication(newMedication)
        CloseModal()
        reset()
        

    }

    
    const {bluedark} = defaultTheme.colors
    return(
        
            <Modal transparent statusBarTranslucent animationType="fade" {...rest}>
                <TouchableWithoutFeedback onPress={() => CloseModal()}>
                    <Overlay>
                        <AddVaccineModalContainer>
                      
                        <Icon name="medicinebox"/>

                        
                            <Form>
                                <InputsArea >
                                    <InputModal 
                                        control={control}
                                        name="name"
                                        placeholder='Nome do rémedio' 
                                        placeholderTextColor={bluedark}
                                        error={errors.name && errors.name.message}
                                    />

                                    <InputModal 
                                        control={control}
                                        name="dose"
                                        placeholder='Dose'
                                        keyboardType="numeric"  
                                        placeholderTextColor={bluedark}
                                        error={errors.dose && errors.dose.message}
                                    />

                                    <InputModal 
                                        control={control}
                                        name="gap"
                                        placeholder='tomar a cada' 
                                        placeholderTextColor={bluedark}
                                        keyboardType="numeric"  
                                        error={errors.gap && errors.gap.message}
                                    />

                                    <InputModal
                                        style={{height: 100}}
                                        control={control}
                                        name="observation"
                                        placeholder='Adicionar nota' 
                                        placeholderTextColor={bluedark}
                                        error={errors.observation && errors.observation.message}
                                    />

                                </InputsArea>
                            

                                <Footer>
                                    <Button title="Salvar rémedio" onPress={handleSubmit(handleAddNewMedication)}/>
                                </Footer>    

                            </Form>
                        </AddVaccineModalContainer>

                    </Overlay>
        

                </TouchableWithoutFeedback>
                
            </Modal>
        
    )

}