import { InputAccessoryView, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 

import { Header } from "../../components/Header";
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
import { MedicationModal } from "./Components/MedicationModal";

export function Medication (){
     const [modalIsVisible,setModalIsVisible] = useState(false)
     

    function OpenModal (){
        setModalIsVisible(true)    
        
    }
    
    function CloseModal () {
      setModalIsVisible(false)
    }
    

    return(
        <MedicationContainer>
            <Header title="Rémedio"></Header>
            <MedicationContent>
                <Medicines>
                    <Medicine>
                        <MedicineName>
                            Ibuprofeno
                        </MedicineName>

                        <MedicineActions>
                            <MedicinePeriod>
                                8-8h
                            </MedicinePeriod>
                            <TouchableOpacity>
                                <MedicieneIcon  name="md-trash-outline" />
                            </TouchableOpacity>
                        </MedicineActions>
                    

                    </Medicine>

                </Medicines>
                <WrapperButton>
                < Button title="Adicionar rémedio" onPress={OpenModal} activeOpacity={0.7}/>
                </WrapperButton>
            </MedicationContent>


            <MedicationModal visible={modalIsVisible} CloseModal={CloseModal}/>

        </MedicationContainer>
    )

}