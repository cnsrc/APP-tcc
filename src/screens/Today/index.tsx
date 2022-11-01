import {  ScrollView} from "react-native";

import { Config,
         ImageContainer,
         TipsToday,         
         Tip,
         TitleTip,
         TodayConateiner,
         Heading,
         UserNames,
         Icon,
         CreatedDateGap,
         GapCounter,
     } from "./style";
import { UserContext } from "../../Context/UserContext";
import {useContext} from 'react'
import  ChildPhoto  from '../../assets/childPhoto.svg'


export function Today (){
     const {user} = useContext(UserContext)
    return(
<ScrollView style={{flexGrow: 1}}   showsVerticalScrollIndicator={false}>

     <TodayConateiner >
          <ImageContainer 
               source={{uri: 'https://images.unsplash.com/photo-1604917621956-10dfa7cce2e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=362&q=70'}}
          >
               <Heading>
                    <UserNames>
                         {`${user?.name} & ${user?.childName}`}
                    </UserNames>
                    <Config>
                         <Icon name="user"/>
                    </Config>
               </Heading>
               <CreatedDateGap>
                    <GapCounter>1</GapCounter>
                    <GapCounter>Mês</GapCounter>
               </CreatedDateGap>
          </ImageContainer>
          
               <TipsToday>
                    <Tip activeOpacity={0.4}>
                         <TitleTip>
                         Como esquentar a mamadeira
                         </TitleTip>
                    </Tip>
               
                    <Tip activeOpacity={0.4}>
                         <TitleTip>
                         Tirando a temperatura da criança
                         </TitleTip>
                    </Tip>
                         
                    <Tip activeOpacity={0.4}>
                         <TitleTip>
                         Dicas para desmame noturno
                         </TitleTip>
                    </Tip>
                         
                    <Tip activeOpacity={0.4}>
                         <TitleTip>
                         Dicas para o desenvolvimento do bebê prematuro
                         </TitleTip>
                    </Tip>
                    
                    <Tip activeOpacity={0.4}>
                         <TitleTip>
                         Como aliviar o primeiro resfriado do bebê
                         </TitleTip>
                    </Tip>
                         
                    <Tip activeOpacity={0.4}>
                         <TitleTip>
                         Estimulando o desenvolvimento cerebal 
                         </TitleTip>
                    </Tip>
                    
               
               </TipsToday>
               
          
                 
     </TodayConateiner>
</ScrollView>
    )
}