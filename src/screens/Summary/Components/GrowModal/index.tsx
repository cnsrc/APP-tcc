import {ModalProps, Modal, TouchableWithoutFeedback} from 'react-native'
import {
    Overlay,
    GrowModalContainer,
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

                        <Historic>
                            <HistoricType>
                                <Label>Data
                                {'\n '} 
                                </Label>
                                <Data>02/09/2022</Data>
                                <Data>02/09/2022</Data>
                            </HistoricType>

                            <HistoricType>
                                <Label>Peso
                                {'\n (kg) '}
                                </Label>
                                <Data>02/09/2022</Data>
                                <Data>02/09/2022</Data>
                            </HistoricType>

                            <HistoricType>
                                <Label>Altura
                                {'\n (cm) '}
                                </Label>
                                <Data>02/09/2022</Data>
                                <Data>02/09/2022</Data>
                            </HistoricType>

                        </Historic>
                    </GrowModalContainer>
                </Overlay>
            </TouchableWithoutFeedback>
        </Modal>
    )
}