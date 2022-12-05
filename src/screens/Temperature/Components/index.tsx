import React from "react";
import { Header } from "../../../components/Header";
import { TemperatureContainer,
         TemperatureContent,
         SavedTemperatures,
         AreaTemperature,
         TextExhibition,

    } from "./style";

export function SaveTemperature (){
    return (
        <TemperatureContainer>
            <Header title="Temperatura"/>
            <TemperatureContent>

                <SavedTemperatures>
                    <AreaTemperature>
                        <TextExhibition>
                                Temperatura
                             {'/n'}   37°C
                        </TextExhibition>
                    </AreaTemperature>
                    <AreaTemperature>
                        <TextExhibition>

                        </TextExhibition>
                    </AreaTemperature>
                </SavedTemperatures>

            </TemperatureContent>
        </TemperatureContainer>
    )
}