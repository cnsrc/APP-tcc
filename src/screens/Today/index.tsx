import {  FlatList, ScrollView } from "react-native";

import { ImageContainer,        
         Tip,
         TitleTip,
         SummaryTip,
         TodayConateiner,
         Heading,
         UserNames,
         ProfileIcon,
         CreatedDateGap,
         GapCounter,
         Profile,
     } from "./style";
import { UserContext } from "../../Context/UserContext";
import {useContext} from 'react'
import { tips } from "../../utils/tips";
import {BottomRoutesProps} from '../../routes/auth/bottom.routes'
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs'
import { MenuConfig } from "../MenuConfig";
import { useNavigation } from "@react-navigation/native";


export function Today ({navigation}:BottomTabScreenProps<BottomRoutesProps, 'Today'>){
     const {user} = useContext(UserContext)
     
     
     const [parentFirstName] = user!?.name.split(' ')
     const [childFirstName] = user!?.childName.split(' ')
     
     function handleNavigateToTipScreen(tipId: string){
          navigation.navigate('Tips', {id: tipId})
     }

     function handleShowContentPreview(content: string){
          const contentFormated = content.slice(0,70)
          return contentFormated
     }
     function handleNavigateToMenuConfigScreen(){
          navigation.navigate('MenuConfig')

     }
    return(

     <TodayConateiner >
          

          <ImageContainer 
               source={{uri: 'https://images.unsplash.com/photo-1604917621956-10dfa7cce2e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=362&q=70'}}
          >
               <Heading>
                    <UserNames>
                         {`${parentFirstName} & ${childFirstName}`}
                    </UserNames>
                    
                    <Profile onPress={handleNavigateToMenuConfigScreen}>
                         <ProfileIcon name="user-circle-o"/>
                    </Profile>
                    
               </Heading>
               
               <CreatedDateGap>
                    <GapCounter>1</GapCounter>
                    <GapCounter>Mês</GapCounter>
               </CreatedDateGap>

          </ImageContainer>
          
          <FlatList
               data={tips}
               keyExtractor={item => item.id}
               
               renderItem= {({item}) =>(
                    
                    <Tip onPress={() => handleNavigateToTipScreen(item.id)} activeOpacity={0.4}>
                         <TitleTip>
                              {item.title}
                         </TitleTip>
                         <SummaryTip>
                              {handleShowContentPreview(item.content)}
                         </SummaryTip>
                    </Tip>
               )}
               contentContainerStyle = {{
                    paddingHorizontal: 24,
                    
               }}
               showsVerticalScrollIndicator={false}
          />
               
          
                 
     </TodayConateiner>
    )
}