import { Entypo } from '@expo/vector-icons'; 

import { TouchableOpacity, ScrollView } from "react-native";
import { Header } from '../../components/Header';
import { Add,
        App,
        Center,
        Conatiner,
        Consultation1,
        Consultation2,
        Consultation3,
        Consultation4,
        ConsultationHeader,
        Marking,
        Month,
        MonthLabel,
        QueryName,
        Scheduled_Appointments1,
        Scheduled_Appointments2,
        Scheduled_Appointments3,
        Scheduled_Appointments4,
        Space,
        TextAdd,
        TextScheduled,
        TextScheduled2,
        TextScheduled3,
        TextScheduled4,
        
    } from "./style";

export function Query (){
    return(
 
    <ScrollView>
<Conatiner>

    <App>
        <Header title='Consulta'/>


       
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
    </Marking>
        <Center>
            <Add>
                <TextAdd>
                    +
                </TextAdd>
            </Add>
        </Center>
    </App>
        <ConsultationHeader>
            <Scheduled_Appointments1 activeOpacity={.8}>
                <TextScheduled>
                    Pediatra                                Dia 04 Às 16h
                </TextScheduled>
            </Scheduled_Appointments1>
    

            <Scheduled_Appointments2 activeOpacity={.8}>
                <TextScheduled2>
                    Otorrino                                 Dia 11 Às 09h
                </TextScheduled2>

            </Scheduled_Appointments2>

            <Scheduled_Appointments3 activeOpacity={.8}>
                <TextScheduled3>
                    Dermatologista                   Dia 13 Às 07h
                </TextScheduled3>
            </Scheduled_Appointments3>
            <Scheduled_Appointments4 activeOpacity={.8}>
                <TextScheduled4>
                    Pediatra                                 Dia 30 Às 14h
                </TextScheduled4>

            </Scheduled_Appointments4>
            
            <Consultation1>
            </Consultation1>
            <Consultation2>
            </Consultation2>
            <Consultation3>
            </Consultation3>
            <Consultation4>
            </Consultation4>
        </ConsultationHeader>

        <Space>    
        </Space>
    
    
</Conatiner>
    </ScrollView>
 
)
}