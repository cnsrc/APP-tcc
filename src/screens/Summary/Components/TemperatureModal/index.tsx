import React from "react"
import { Modal, ModalProps, TouchableWithoutFeedback, ScrollView } from "react-native"

import { Data, Historic, HistoricType, Label, Overlay, TemperatureModalContainer, TemperatureModalContent, Title } from "./style"

interface TemperatureModalProps extends ModalProps {
    CloseModal : () => void
}

export function TemperatureModal ({CloseModal, ...rest}:TemperatureModalProps){

    function handleCloseModal(){
        CloseModal()
    }
    return(
        <Modal {...rest} statusBarTranslucent transparent>
            <TouchableWithoutFeedback onPress={() => handleCloseModal()}  >
                <Overlay>
                    <TemperatureModalContainer>
                        <Title>Histórico completo</Title>
                        <TemperatureModalContent>

                            <Historic>
                                <HistoricType>
                                    <Label>Data
                                        {'\n '} 
                                    </Label>
                                    <Data>02/09/2022</Data>
                                    <Data>18/07/2022</Data>  
                                </HistoricType>

                                <HistoricType>
                                    <Label>Peso
                                    {'\n (kg) '}
                                    </Label>
                                    <Data>2,250kg</Data>
                                    <Data>2,100kg </Data>
                                </HistoricType>

                                <HistoricType>
                                    <Label>Altura
                                    {'\n (cm) '}
                                    </Label>
                                    <Data>1,48 cm</Data>
                                    <Data>1,42 cm</Data>
                                </HistoricType>

                            </Historic>
                        </TemperatureModalContent>
                    </TemperatureModalContainer>
                </Overlay>
            </TouchableWithoutFeedback>
        </Modal>
    )
}