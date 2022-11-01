import { Modal, ModalProps, TouchableWithoutFeedback } from "react-native"
import { useState} from "react"
import { Header } from "../../../../components/Header"
import { TemperatureContainer,
         Overlay,
         TemperatureContent,
         Title,
         Historic,
         Date,
         Degees,

    } from "./style"

interface TemperatureModalProps extends ModalProps {
    CloseModal : () => void
}

export function TemperatureModal (props:TemperatureModalProps){
    const [isVisebleTemperatureModal,setIsVisibleTemperatureModal] = useState (false)

    function OpenTemperatureModal (){

    function CloseTemperatureModal (){
        setIsVisibleTemperatureModal(true)
    }

    }

    return(
        <Modal {...props} statusBarTranslucent transparent>
            <TouchableWithoutFeedback onPress={() => props.CloseModal()}/>

            <TemperatureContainer>
                <Overlay>
                    <TemperatureContent>
                        <Title>Histórico Completo</Title>
                        <Historic>
                            <Date>
                                30/06/2022
                            </Date>
                            <Degees>
                                32° C 
                            </Degees>
                        </Historic>
                    </TemperatureContent>
                </Overlay>
            </TemperatureContainer>
        </Modal>
    )
}