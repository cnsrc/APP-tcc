import { useState, useEffect} from "react";
import { Button } from "../../components/Button";
import {Alert, FlatList} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AddVaccineModal } from "./Components/AddVaccineModal";
import { VaccinationContainer,
         VaccinationContent,
         Vaccines,
         Vaccine,
         VaccineName,
         VaccineDate,
         ButtonWrapper,

} from "./style";

export interface vaccineProps {
    id: string,
    name: string,
    date: string,
    dose: string,
    observation: string | undefined,
}

export function Vaccination (){
    const [modalIsVisible, setModaIsVisible] = useState(false)
    const [vaccines, setVaccines] = useState<vaccineProps[]>([])

    function showMoreVaccinationData(title: string, observation: string| undefined){
        Alert.alert(title, observation)
    }

    function closeModal(){
        setModaIsVisible(false)
    }

    function handleOpenModal(){
        setModaIsVisible(true)
    }

    async function   getVaccines(){
        const dataKey = '@saudebaby'
        const vaccinesResponse = await AsyncStorage.getItem(`${dataKey}/vaccines`)

        if(vaccinesResponse) {
            const storage = JSON.parse(vaccinesResponse)
            setVaccines(storage)
        }
        
    }

    async function addNewVaccine(newVaccine: vaccineProps){
        const vaccinesWithMoreOneVaccine = [newVaccine, ...vaccines]
    
        const dataKey = '@saudebaby'
        const vaccinesToLocalSorage = JSON.stringify(vaccinesWithMoreOneVaccine)
        await AsyncStorage.setItem(`${dataKey}/vaccines`,vaccinesToLocalSorage)
        
        setVaccines(vaccinesWithMoreOneVaccine)
    }

    useEffect(()=>{

        getVaccines()
    }, [])


    return(

            <VaccinationContainer>
                

                <VaccinationContent>
                    <Vaccines>
                        <FlatList
                            data={vaccines}
                            keyExtractor={item => item.id}
                            renderItem= {({item})=> (
                                <Vaccine onPress={() => showMoreVaccinationData(item.name, item.observation)}>
                                    <VaccineName>
                                        {item.name}            
                                    </VaccineName>
                                    <VaccineDate>
                                        {item.date}
                                    </VaccineDate>
                                </Vaccine>
                            )}
                        />
                        
                    
                    </Vaccines>
                    
                    <ButtonWrapper>
                        <Button  
                            title="Adicionar vacina" 
                            activeOpacity={0.7} 
                            onPress={handleOpenModal}
                        />
                    </ButtonWrapper>

                </VaccinationContent>

            <AddVaccineModal 
                visible={modalIsVisible}
                closeModal={closeModal}
                addNewVaccine={addNewVaccine}
            />

        </VaccinationContainer>

    )
}