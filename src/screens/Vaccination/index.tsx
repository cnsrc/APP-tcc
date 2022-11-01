import { useState } from "react";
import { Text, ScrollView, TouchableWithoutFeedback } from "react-native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { AddVaccineModal } from "./Components/AddVaccineModal";
import {
        VaccinationContainer,
        VaccinationContent,
        Vaccines,
         Vaccine,
         VaccineName,
         VaccineDate,
         ButtonWrapper,

    } from "./style";

export function Vaccination (){
    const [modalIsVisible, setModaIsVisible] = useState(false)

    function closeModal(){
        setModaIsVisible(false)
    }

    function handleOpenModal(){
        setModaIsVisible(true)
    }

    return(

            <VaccinationContainer>
                

                <VaccinationContent>
                    <Vaccines>
                        <Vaccine>
                            <VaccineName>
                                Polimelite             
                            </VaccineName>
                            <VaccineDate>
                                12/10/2022
                            </VaccineDate>
                        </Vaccine>
                    
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
            />

        </VaccinationContainer>

    )
}