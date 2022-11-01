import { Header } from "../../components/Header";
import { GrowthContainer,
         GrowthContent,
         Main,
         HeaderContainer,
         WeightMark,
         Weight,
         GrowthTitle,
         MarkingOfValues,
         ValueRegister,
         Separator,
         Markings,
         Line,
         
         
         
} from "./style";
import { AddButton } from "../../components/AddButton";

export function Growth (){
    return(
<GrowthContainer> 

        <Header title='Crescimento'/>
        <GrowthContent>
            <Main>
                <GrowthTitle>
                        Registre as medidas
                </GrowthTitle>
            </Main>

            <WeightMark>
                <Weight>
                    Peso
                </Weight>
                <AddButton/>
            </WeightMark>           
            <HeaderContainer>

                <Markings>

                        <MarkingOfValues>

                            <ValueRegister>
                                    Ao nascer
                            </ValueRegister>
                                        <Line/>
                            <ValueRegister>
                                    0,00kg
                            </ValueRegister>
                            
                        </MarkingOfValues>

                    <MarkingOfValues>
                            <ValueRegister>
                                    Atual
                            </ValueRegister>
                                        <Line/> 
                            <ValueRegister>
                                    0,00kg
                            </ValueRegister>
                    </MarkingOfValues>

                    <MarkingOfValues>
                    <ValueRegister>
                                    IMC
                            </ValueRegister>
                                        <Line/>
                            <ValueRegister>
                                    0,00kg
                            </ValueRegister>
                    </MarkingOfValues>
                </Markings>
                
            </HeaderContainer>

            
            <Separator/>
            

            <WeightMark>
                    <Weight>
                        Altura
                    </Weight>
                    <AddButton/>
                </WeightMark>           
            
            <HeaderContainer>

                <Markings>

                        <MarkingOfValues>

                            <ValueRegister>
                                    Ao nascer
                            </ValueRegister>
                                        <Line/>
                            <ValueRegister>
                                    0,00cm
                            </ValueRegister>
                            
                        </MarkingOfValues>

                    <MarkingOfValues>
                            <ValueRegister>
                                    Atual
                            </ValueRegister>
                                        <Line/>
                            <ValueRegister>
                                    0,00cm
                            </ValueRegister>
                    </MarkingOfValues>

                    <MarkingOfValues>
                    <ValueRegister>
                                    IMC
                            </ValueRegister>
                                        <Line/> 
                            <ValueRegister>
                                    0,00cm
                            </ValueRegister>
                    </MarkingOfValues>
                </Markings>
                </HeaderContainer>
        </GrowthContent>

</GrowthContainer>


    )
}