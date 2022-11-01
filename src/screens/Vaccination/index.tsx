import { useState} from "react";
import { Button } from "../../components/Button";
import {FlatList} from 'react-native'

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

    function closeModal(){
        setModaIsVisible(false)
    }

    function handleOpenModal(){
        setModaIsVisible(true)
    }

    function addNewVaccine(newVaccine: vaccineProps){
        const vaccinesWithMoreOneVaccine = [newVaccine, ...vaccines]
        setVaccines(vaccinesWithMoreOneVaccine)
    }

    return(

            <VaccinationContainer>
                

                <VaccinationContent>
                    <Vaccines>
                        <FlatList
                            data={vaccines}
                            keyExtractor={item => item.id}
                            renderItem= {({item})=> (
                                <Vaccine>
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