import { TouchableOpacity, FlatList, Alert} from "react-native";
import { Button } from "../../components/Button";
import React, { useState, useEffect} from "react";

import { MedicationContainer,
         MedicationContent,
         Medicines,
         Medicine,
         MedicineName,
         MedicinePeriod,
         WrapperButton,
         MedicineActions,
         MedicieneIcon,

} from "./style";

import AsyncStorage from '@react-native-async-storage/async-storage';

export interface medicationProps {
    id: string,
    name: string,
    dose: number,
    gap: number,
    observation: string | undefined,

}
import { MedicationModal } from "./Components/MedicationModal";

export function Medication (){
     const [modalIsVisible,setModalIsVisible] = useState(false)
     const [medications, setMedications] = useState<medicationProps[]>([])
     
     function showMoreMedicineData(title: string, observation: string| undefined){
        Alert.alert(title, observation)
    }

    function OpenModal (){
        setModalIsVisible(true)    
        
    }
    
    function CloseModal () {
      setModalIsVisible(false)
    }
    async function getMedications(){
        const dataKey = '@saudebaby'
        const medicationsResponse = await AsyncStorage.getItem(`${dataKey}/medications`)
        if(medicationsResponse){
            const storage = JSON.parse(medicationsResponse)
            setMedications(storage)
        }
    }
    async function addNewMedication(newMedication: medicationProps){
        const  medicationsWithMoreOneMedication = [...medications, newMedication]
        try {
            const dataKey = '@saudebaby'
            const medicationsToLocalSorage = JSON.stringify(medicationsWithMoreOneMedication)
            await AsyncStorage.setItem(`${dataKey}/medications`, medicationsToLocalSorage)
            
        } catch (error) {
            console.warn(error)
        }
        
        setMedications(medicationsWithMoreOneMedication)


    }

    async function removeOneMedication(medicationId: string){
        const medicationsWithoutOneMedication = medications.filter(medication => medication.id !== medicationId)
        try {
            const dataKey = '@saudebaby'
            const medicationsToLocalSorage = JSON.stringify(medicationsWithoutOneMedication)
            await AsyncStorage.setItem(`${dataKey}/medications`, medicationsToLocalSorage)
            
        } catch (error) {
            console.warn(error)
        }
        setMedications(medicationsWithoutOneMedication)
    }

    useEffect(() => {
        getMedications()
    }, [])
    
    function moreInformationAboutMedication(title: string, observation: string| undefined){
        Alert.alert(title, observation)
    }
    return(
        <MedicationContainer>
            
            <MedicationContent>
                <Medicines>
                    <FlatList
                        data={medications}
                        keyExtractor= {item => item.id}
                        renderItem= {({item}) => (
                            <Medicine onPress={() => showMoreMedicineData(item.name, item.observation)}>
                                
                                <MedicineName>
                                    {item.name}
                                </MedicineName>

                                <MedicineActions>
                                    <MedicinePeriod>
                                        {item.gap}-{item.gap} hs
                                    </MedicinePeriod>
                                    <TouchableOpacity onPress={() => removeOneMedication(item.id)}>
                                        <MedicieneIcon  name="md-trash-outline" />
                                    </TouchableOpacity>
                                </MedicineActions>
                            
                            </Medicine>

                            
                        )}
                    />
                    

                </Medicines>
                <WrapperButton>
                < Button title="Adicionar rémedio" onPress={OpenModal} activeOpacity={0.7}/>
                </WrapperButton>
            </MedicationContent>


            <MedicationModal 
                visible={modalIsVisible} 
                CloseModal={CloseModal}
                addNewMedication={addNewMedication}
            />

        </MedicationContainer>
    )

}