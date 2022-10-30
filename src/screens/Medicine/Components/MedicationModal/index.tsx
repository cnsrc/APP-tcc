import { Keyboard, Modal, ModalProps, ScrollView, TouchableWithoutFeedback, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 


import { defaultTheme } from "../../../../styles/defaultTheme/theme";
import { AddVaccineModalContainer,
        InputsArea,
        Footer,
        Form,
        InputModal,
        Overlay,
        TextArea,
        Icon
    } from "./style";
import { Button } from "../../../../components/Button";

interface MedicationModalProps extends ModalProps {
    CloseModal: ()=> void
}



export function MedicationModal (props:MedicationModalProps){

    
    const {bluedark} = defaultTheme.colors

    function  HandleCloseModal(){
        props.CloseModal()
    }
   

    return(
        
            <Modal transparent statusBarTranslucent animationType="fade" {...props}>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <Overlay>
                        <AddVaccineModalContainer>
                        <Icon name="medicinebox"/>

                        
                            <Form>
                                <InputsArea >
                                    <InputModal placeholder='Nome do rémedio' placeholderTextColor={bluedark}/>
                                    
                                    <InputModal placeholder='Dose' placeholderTextColor={bluedark}/>

                                    <InputModal placeholder='Data & hora' placeholderTextColor={bluedark}/>
                                    
                                    <TextArea placeholder='Adicionar nota' placeholderTextColor={bluedark}/>
                                
                                </InputsArea>
                            

                                <Footer>
                                    <Button title="Salvar rémedio" onPress={HandleCloseModal}/>
                                </Footer>    

                            </Form>
                        </AddVaccineModalContainer>

                    </Overlay>
        

                </TouchableWithoutFeedback>
                
            </Modal>
        
    )

}