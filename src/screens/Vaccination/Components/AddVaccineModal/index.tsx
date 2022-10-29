import { Keyboard, Modal, ModalProps, TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { defaultTheme } from "../../../../styles/defaultTheme/theme";
import { AddVaccineModalContainer,
        InputsArea,

        Footer,
        Form,
        InputModal,
        Overlay,
        TextArea
    } from "./style";
import { Button } from "../../../../components/Button";

interface AddVaccineModalProps extends ModalProps{
    closeModal: () => void
}

export function AddVaccineModal (props: AddVaccineModalProps){
    const {bluedark} = defaultTheme.colors
    
    function handleCloseModal(){
        
        props.closeModal();
    }

    return(
        
            <Modal {...props} transparent statusBarTranslucent animationType="fade">
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <Overlay>
                        <AddVaccineModalContainer>
                            <MaterialCommunityIcons name="needle" size={90} color="black" />
                            <Form>
                                <InputsArea>
                                    <InputModal placeholder='Nome da vacina' placeholderTextColor={bluedark}/>
                                    
                                    <InputModal placeholder='Data' placeholderTextColor={bluedark}/>

                                    <InputModal placeholder='Dose' placeholderTextColor={bluedark}/>
                                    
                                    <TextArea placeholder='Adicionar nota' placeholderTextColor={bluedark}/>
                                
                                </InputsArea>
                            

                                <Footer>
                                    <Button title="Salvar vacina" onPress={handleCloseModal}/>
                                </Footer>    

                            </Form>
                        
                        


                        </AddVaccineModalContainer>

                    </Overlay>
        

                </TouchableWithoutFeedback>
                
            </Modal>
        
    )

}