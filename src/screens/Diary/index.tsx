import { FlatList, Alert,} from 'react-native';
import React, { useState, useEffect} from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';

import {format} from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { DiaryContainer,
         DiaryContent,
         Title,
         RegisterDiary,
         TextAnnotations,
         AddProhibited,

} from "./style";
import { DiaryModal } from './Components/DiaryModal';

export interface noteProps {
    text: string,
    id: string,
    createdDate: Date
}

export function Diary (){

     const [diaryModalIsVisible, setDiaryModalIsVisible] = useState (false)

     const [notes, setNotes] = useState<noteProps[]>([])
     

     function CloseModal(){
         setDiaryModalIsVisible (false)
     }
     function OpenModal(){
        setDiaryModalIsVisible(true)
     }

     async function addNewNote(note: noteProps){
        const notesWithMoreOneNote = [note, ...notes]

        const dataKey = '@saudebaby'
        const noteToStorange = JSON.stringify(notesWithMoreOneNote)
        await AsyncStorage.setItem(`${dataKey}/notes`, noteToStorange)

        setNotes(notesWithMoreOneNote)
        
     }

     async function getNotes (){
        const dataKey = '@saudebaby'
        const notesResponse = await AsyncStorage.getItem(`${dataKey}/notes`)
        if (notesResponse){
            const storage = JSON.parse(notesResponse)
            setNotes(storage)
        }
     }

     function formatDate(Date: Date){
        const dateForamted = format(Date , "iiii  d MMMM",{
            locale: ptBr,
    
        }
        )
        return dateForamted
     }

     function showMoreNoteDatas(menssage: string){
        Alert.alert('', menssage)
     }

     useEffect (()=>{
        getNotes()

     },[])


    return (


    <DiaryContainer>

        <Header title="Diário"/>
        <DiaryContent>
            <Title>
                    Diário
            </Title>
            <FlatList
                data={notes}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <RegisterDiary onPress={() => showMoreNoteDatas(item.text)}>
                        <TextAnnotations>
                            {formatDate(new Date (item.createdDate))}
                        </TextAnnotations>
                    </RegisterDiary>

                )}
            />

            <AddProhibited>
                <Button
                onPress={OpenModal}
                title="Adicionar entrada ao diário"
                />
            </AddProhibited>
        </DiaryContent>

        <DiaryModal 
            visible={diaryModalIsVisible} 
            CloseModal ={CloseModal} 
            addNewNote = {addNewNote}
        />
    </DiaryContainer>

    )
}