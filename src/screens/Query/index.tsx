import { Entypo } from '@expo/vector-icons'; 
import { useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { TouchableOpacity, FlatList, Alert, Platform} from "react-native";


/*
    mysqlLite
    prisma,
    zod,
    typescript,
    nodejs,
    express/ fastfy,
    cours,
    muita sourte,

*/
import { AddButton } from '../../components/AddButton';
import { Header } from '../../components/Header';
import { ConsultationModal } from './components/ConsultationModal';
import {Marking,
        Month,
        MonthLabel,
        QueryName,
        QueryContainer,
        ConsultationContent,
        ConsultationName,
        ConsultationDate,
        Consultations,
        Consultation
    } from "./style";

export interface ConsultationProps {
    id: string
    consultation: string,
    day: number,
    time: number,
    created: Date,
}

export function Query (){
    const [consultationModalIsVisible, setConsultationModalIsVisible] = useState(false)
    const [consultatios, setConsultaions] = useState<ConsultationProps[]>([])

    function handleOpenConsultationModal(){
        setConsultationModalIsVisible(true)
    }
    function closeConsultationModal(){
        setConsultationModalIsVisible(false)
    }

   

    async function getConsultation(){
        try {
            const dataKey = '@saudebaby'
            const consultationsResponse = await AsyncStorage.getItem(`${dataKey}/consultations`)
            if(consultationsResponse){
                const storage = JSON.parse(consultationsResponse)
                setConsultaions(storage)
            }
        } catch (error) {
            console.warn(error)
        }
    }
    async function addNewConsultation(consultation: ConsultationProps){

        const dataKey = '@saudebaby'
        const consultationsWitMoreOneConsult = [consultation, ...consultatios]
        const consulltationsToLocalSorage = JSON.stringify(consultationsWitMoreOneConsult)
        await AsyncStorage.setItem(`${dataKey}/consultations`,consulltationsToLocalSorage)

        setConsultaions(consultationsWitMoreOneConsult)
    }

    console.log(consultatios)
    useEffect(() => {
        getConsultation()
    }, [])
    return(
 
        <QueryContainer>

            <Header title='Consulta'/>
            <ConsultationContent>

                <Month>

                    <TouchableOpacity>
                        < Entypo name="chevron-left" size={24} color="black" />
                    </TouchableOpacity>
                    <MonthLabel>
                        Novembro, 2022
                    </MonthLabel>

                    <TouchableOpacity>
                        < Entypo name="chevron-right" size={24} color="black" />
                    </TouchableOpacity>
                </Month>
                        
                <Marking>
                    <QueryName>
                        Consultas
                    </QueryName>
                    <AddButton onPress={handleOpenConsultationModal}/>
                </Marking>

                <Consultations>
                        <FlatList
                            data={consultatios}
                            keyExtractor= {item => item.id}
                            renderItem= {({item}) => (
                                    <Consultation>
                                            <ConsultationName>{item.consultation}</ConsultationName>
                                            <ConsultationDate>Dia {item.day} Às {item.time} hs </ConsultationDate>
                                    </Consultation>
                                
                                )}
                            
                        />
                </Consultations>
            </ConsultationContent>

            <ConsultationModal 
                visible={consultationModalIsVisible} 
                closeConsultationModal={closeConsultationModal}
                addNewConsultation={addNewConsultation}
            />

</QueryContainer>
)
}