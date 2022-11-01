import { Header } from "../../components/Header";
import {View} from 'react-native'
import Ruler from 'react-native-animated-ruler';
import { } from "./style";
import {TemperatureContainer,RulerContent} from './style'
import { Button } from "../../components/Button";
 export function Temperature (){
    function getValue(value : number){
        console.log(value)
        
    }
    return(
        <TemperatureContainer>
            <Header title="temperatura" />

            
            <Ruler
            style={{ borderRadius: 10, marginLeft: 'auto',marginRight: 'auto', marginTop: 90}}
            width={350}
            height={190}
            vertical
            onChangeValue={getValue}
            minimum={0}
            maximum={80}
            segmentWidth={2}
            segmentSpacing={20}
            indicatorColor='#FF0000'
            indicatorWidth={100}
            indicatorHeight={80}
            indicatorBottom={20}
            step={10}
            stepColor='#333333'
            stepHeight={40}
            normalColor='#999999'
            normalHeight={20}
            backgroundColor='#FFFFFF'
            numberFontFamily='System'
            numberSize={40}
            numberColor='#000000'
            unit='cm'
            unitBottom={20}
            unitFontFamily='System'
            unitColor='#888888'
            unitSize={16}
        
        />
        <Button title="hi"/>
        </TemperatureContainer>
    )
 }