import { Keyboard, Modal, ModalProps, ScrollView, TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { defaultTheme } from "../../../../styles/defaultTheme/theme";
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import { AddVaccineModalContainer,
        InputsArea,

        Footer,
        Form,
     
        Overlay,
        TextArea
    } from "./style";
import { Button } from "../../../../components/Button";
import { InputModal } from "../../../../components/Form/InputModal";
import { vaccineProps } from "../..";

interface AddVaccineModalProps extends ModalProps{
    closeModal: () => void,
    addNewVaccine: (newVaccine: vaccineProps) => void
}
 
const newVaccineSchema = yup.object().shape({
    name: yup.string().required('Este campo é obrigatório'),
    dose: yup.number().typeError('Apenas números').required('Dose é um campo é obrigatório'),
    observation: yup.string(),
    date: yup.string().required('este campo é obrigatório'),
})

interface newVaccineType {
    name: string,
    dose: number,
    observation: string,
    date: string,
}
export function AddVaccineModal ({addNewVaccine,closeModal,...rest}: AddVaccineModalProps){
    const {handleSubmit,control, reset,formState: {errors}} = useForm({
        resolver: yupResolver(newVaccineSchema)
    })
    const {bluedark} = defaultTheme.colors
    
 

    function handleAddNewVaccine(props: any){
        const datas = props as vaccineProps
       
        const  newVaccine: vaccineProps  = {
            id: String(new Date().getTime()),
            name: datas.name,
            dose: datas.dose,
            observation: datas.observation,
            date: datas.date
        }

        addNewVaccine(newVaccine)
        closeModal()
        reset()
    }

    return(
        
            <Modal {...rest} transparent statusBarTranslucent animationType="fade">
                <TouchableWithoutFeedback onPress={() => closeModal()}>
                    <Overlay>
                        <AddVaccineModalContainer>
                        <MaterialCommunityIcons name="needle" size={90} color="black" />
                            <Form>
                                <InputsArea >
                                    <InputModal 
                                        control={control}
                                        name="name"
                                        placeholder='Nome da vacina' 
                                        placeholderTextColor={bluedark}
                                        error={errors.name && errors.name.message}
                                    />
                                    
                                    <InputModal 
                                        control={control}
                                        name="date"
                                        placeholder='Data' 
                                        placeholderTextColor={bluedark}
                                        error={errors.date && errors.date.message}
                                    />

                                    <InputModal 
                                        control={control}
                                        name="dose"
                                        placeholder='Dose' 
                                        placeholderTextColor={bluedark}
                                        error={errors.dose && errors.dose.message}
                                        
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
                                    <Button title="Salvar vacina" onPress={handleSubmit(handleAddNewVaccine)}/>
                                </Footer>    

                            </Form>
                        </AddVaccineModalContainer>

                    </Overlay>
        

                </TouchableWithoutFeedback>
                
            </Modal>
        
    )

}