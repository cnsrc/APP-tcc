import { TouchableOpacity } from "react-native";
import {FlatList} from 'react-native'
import { Button } from "../../components/Button";
import React, { useState } from "react";
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
     

    function OpenModal (){
        setModalIsVisible(true)    
        
    }
    
    function CloseModal () {
      setModalIsVisible(false)
    }

    function addNewMedication(newMedication: medicationProps){
        const  medicationsWithMoreOneMedication = [...medications, newMedication]
        setMedications(medicationsWithMoreOneMedication)
    }

    function removeOneMedication(medicationId: string){
        const medicationsWithoutOneMedication = medications.filter(medication => medication.id !== medicationId)
        setMedications(medicationsWithoutOneMedication)
    }
    

    return(
        <MedicationContainer>
            
            <MedicationContent>
                <Medicines>
                    <FlatList
                        data={medications}
                        keyExtractor= {item => item.id}
                        renderItem= {({item}) => (
                            <Medicine>
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