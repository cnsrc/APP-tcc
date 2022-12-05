import {ModalProps, Modal, TouchableWithoutFeedback, ScrollView} from 'react-native'
import { Overlay,
         GrowModalContainer,
         GrowModalContent,
         Title,
         Historic,
         HistoricType,
         Label,
         Data,
    } from './style'
    
interface growModalProps extends ModalProps {
    CloseGrowModal: () => void
}
 

export function GrowModal(props: growModalProps){

    function HandleOpenModalGrown (){
      
    }
    return(
        <Modal {...props} statusBarTranslucent transparent>
            <TouchableWithoutFeedback onPress={() => props.CloseGrowModal()}>
                <Overlay>
                    <GrowModalContainer>
                        <Title>Histórico completo</Title>
                        <GrowModalContent>

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
                        </GrowModalContent>
                    </GrowModalContainer>
                </Overlay>
            </TouchableWithoutFeedback>
        </Modal>
    )
}