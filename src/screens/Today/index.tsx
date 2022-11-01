import {  ScrollView, Text} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Config,
         TodayContent, 
         Month,
         MonthTitle,
         TipsToday, 
         Header,
         Tips,
         TitleTips,
         TodayConateiner,
         RegisterConfig,
         Names
     } from "./style";
import { UserContext } from "../../Context/UserContext";
import {useContext} from 'react'


export function Today (){
     const {user} = useContext(UserContext)
    return(
<ScrollView style={{flexGrow: 1}}   showsVerticalScrollIndicator={false}>

     <TodayConateiner >
                <Month>
                    <MonthTitle>
                           1
                    </MonthTitle>
                    <MonthTitle>
                         mês 
                    </MonthTitle>
                </Month>
          <TodayContent>

               <RegisterConfig>
                    <Config>
                         <Names>
                              {`${user?.name} ${user?.childName}`}

                         </Names>
                    <AntDesign name="user" size={24} color="black" />
                    </Config>
               </RegisterConfig>

               <Header>
                    <TipsToday>
                         <Tips activeOpacity={0.4}>
                              <TitleTips>
                              Como esquentar a mamadeira
                              </TitleTips>
                         </Tips>
                    
                         <Tips activeOpacity={0.4}>
                              <TitleTips>
                              Tirando a temperatura da criança
                              </TitleTips>
                         </Tips>
                              
                         <Tips activeOpacity={0.4}>
                              <TitleTips>
                              Dicas para desmame noturno
                              </TitleTips>
                         </Tips>
                              
                         <Tips activeOpacity={0.4}>
                              <TitleTips>
                              Dicas para o desenvolvimento do bebê prematuro
                              </TitleTips>
                         </Tips>
                         
                         <Tips activeOpacity={0.4}>
                              <TitleTips>
                              Como aliviar o primeiro resfriado do bebê
                              </TitleTips>
                         </Tips>
                              
                         <Tips activeOpacity={0.4}>
                              <TitleTips>
                              Estimulando o desenvolvimento cerebal 
                              </TitleTips>
                         </Tips>
                         
                    
                    </TipsToday>
               </Header>
          </TodayContent>
                 
     </TodayConateiner>
</ScrollView>
    )
}