import {useState} from 'react'
import { Header } from "../../components/Header";

import {SumaryContainer,
        SumaryContaint,
        CardTitle,
        Card
    } from "./style";
import { GrowModal } from "./Components/GrowModal";
import {TemperatureModal} from "./Components/TemperatureModal";

export function Summary (){
    const [isVisebleGrownModal, setIsVisibleGrownModal] = useState(false)

        function OpenGrowModal (){
            setIsVisibleGrownModal(true)
        }
        function CloseGrowModal (){
            setIsVisibleGrownModal(false)
        }
        

    const [isVisebleTemperatureModal,setIsVisibleTemperatureModal] = useState (false)

        function OpenTemperatureModal (){
            setIsVisibleTemperatureModal(true)
        }
        function CloseTemperatureModal (){
            setIsVisibleTemperatureModal(false)
        }
    return (
        <SumaryContainer>
            <Header title="Resumo"/>

            <SumaryContaint>
                <Card onPress={OpenGrowModal}>
                    <CardTitle>
                        Crescimento
                    </CardTitle>
                </Card>

                <Card onPress={OpenTemperatureModal}>
                    <CardTitle >
                        Temperatura
                    </CardTitle>
                </Card>
                
            </SumaryContaint>

            <TemperatureModal CloseModal={CloseTemperatureModal} visible={isVisebleTemperatureModal}/>

            <GrowModal CloseGrowModal={CloseGrowModal} visible={isVisebleGrownModal}/>
           
            
        </SumaryContainer>
    )
}