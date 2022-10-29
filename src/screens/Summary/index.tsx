import { Header } from "../../components/Header";
import { App, Growth, HeaderContainer, Temperature, TextGrowth, TextTemperature } from "./style";

export function Summary (){
    return (
        <App>
            <Header title="Resumo"/>
            <HeaderContainer>
                <Growth>
                    <TextGrowth>
                        Crescimento
                    </TextGrowth>
                </Growth>

                <Temperature>
                    <TextTemperature>
                        Temperatura
                    </TextTemperature>
                </Temperature>
            </HeaderContainer>
        </App>
    )
}