import { Entypo } from '@expo/vector-icons'; 

import { TouchableOpacity, ScrollView } from "react-native";
import { AddButton } from '../../components/AddButton';
import { Header } from '../../components/Header';
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

export function Query (){
    return(
 
        <QueryContainer>

            <Header title='Consulta'/>
            <ConsultationContent ScrollView>

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
                    <AddButton/>
                </Marking>

                <Consultations>
                    <Consultation>
                        <ConsultationName>Pediatra</ConsultationName>
                        <ConsultationDate>Dia 04 Às 16h</ConsultationDate>
                    </Consultation>
                </Consultations>
            </ConsultationContent>

</QueryContainer>
)
}