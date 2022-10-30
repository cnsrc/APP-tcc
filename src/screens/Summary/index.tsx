import { Header } from "../../components/Header";
import {SumaryContainer,
        SumaryContaint,
        CardTitle,
        Card
    } from "./style";
import {useState} from 'react'
import { GrowModal } from "./Components/GrowModal";
export function Summary (){
    const [isVisebleGrownModal, setIsVisibleGrownModal] = useState(false)

        function OpenGrowModal (){
            setIsVisibleGrownModal(true)
        }
        function CloseGrowModal (){
            setIsVisibleGrownModal(false)
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

                <Card>

                    <CardTitle>
                        Temperatura
                    </CardTitle>
                </Card>
                
            </SumaryContaint>
            <GrowModal CloseGrowModal={CloseGrowModal} visible={isVisebleGrownModal}/>
        </SumaryContainer>
    )
}