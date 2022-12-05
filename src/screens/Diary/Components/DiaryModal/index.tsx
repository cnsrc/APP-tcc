import {ModalProps, Modal, TouchableWithoutFeedback} from 'react-native'
import { Button } from "../../../../components/Button"
import { Header } from "../../../../components/Header"
import { v4 as uuidv4 } from 'uuid';
import { DiaryModalContainer,
         ModalContent,
         ContentOfDiary,
         AddNewProhibited,
         Overlay,

} from "./style"
import {useState} from 'react'
import { noteProps } from '../..'

interface DiaryModalProps extends ModalProps {
    CloseModal: () => void,
    addNewNote: (note: noteProps) => void,
}

export function DiaryModal ({CloseModal,addNewNote, ...rest}: DiaryModalProps ){
    const [noteText, setNoteText] = useState('')

    function handleAddNewNote(){
        if(noteText.length < 1){
            return
        }
        const newNote: noteProps = {
            id: String(new Date().getTime()),
            text: noteText,
            createdDate: new Date()
        }

        addNewNote(newNote)
        setNoteText('')
        CloseModal()
    }

    return (
    <Modal {...rest}  transparent={true} statusBarTranslucent>
        <TouchableWithoutFeedback onPress={() => {CloseModal()}}>
            <DiaryModalContainer> 
            <Overlay>
                <ModalContent>
                    <ContentOfDiary
                        value={noteText}
                        onChangeText={setNoteText}
                        placeholder='Adicionar nota'
                    />

                <AddNewProhibited >
                        <Button onPress={handleAddNewNote}
                        title="Salvar"/>
                </AddNewProhibited>
                
                </ModalContent>
            </Overlay>
            
            </DiaryModalContainer>
        </TouchableWithoutFeedback>
        
    </Modal>

   
    )

}