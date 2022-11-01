import { Entypo } from '@expo/vector-icons'; 
import { useState } from 'react';

import { TouchableOpacity, FlatList } from "react-native";
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
    function addNewConsultation(consultation: ConsultationProps){
        const consultationsWitMoreOneConsult = [consultation, ...consultatios]
        setConsultaions(consultationsWitMoreOneConsult)
    }

    console.log(consultatios)
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