import {  ScrollView, Text} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Config, Content, Date, Form, Header, TexttipsFive, TexttipsFour, TexttipsOn, TexttipsSix, TexttipsThree, TexttipsTwo, TipsFive, TipsFour, TipsOn, TipsSix, TipsThree, TipsTwo, TodayConateiner } from "./style";


export function Today (){
    return(
        <ScrollView style={{flexGrow: 1}}   showsVerticalScrollIndicator={false}>

        <TodayConateiner >
                <Date>
                     1
             {'\n'} Mês
                </Date>
            <Content>
                <Config>
                <AntDesign name="user" size={24} color="black" />
                </Config>

            <Header>
              <Form>
                    <TipsOn activeOpacity={0.4}>
                         <TexttipsOn>
                            Como esquentar a mamadeira
                         </TexttipsOn>
                    </TipsOn>
                    <TipsTwo activeOpacity={0.4}>
                         <TexttipsTwo>
                          Tirando a temperatura da criança
                         </TexttipsTwo>
                    </TipsTwo>

                    <TipsThree activeOpacity={0.4}>
                         <TexttipsThree>
                          Dicas para desmame noturno
                         </TexttipsThree>
                    </TipsThree>
      
                    <TipsFour activeOpacity={0.4}>
                         <TexttipsFour>
                          Dicas para o desenvolvimento do bebê
                         </TexttipsFour>
                    </TipsFour>

                    <TipsFive activeOpacity={0.4}>
                         <TexttipsFive>
                          Como aliviar o primeiro resfriado do bebê
                         </TexttipsFive>
                    </TipsFive>

                    <TipsSix activeOpacity={0.4} >
                        <TexttipsSix>
                          Estimulado o desenvolvimento cerebal
                        </TexttipsSix>
                    </TipsSix>

                    
              </Form>
            </Header>
            </Content>
                 
        </TodayConateiner>
        </ScrollView>
    )
}