import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { useNavigation, useRoute } from '@react-navigation/native'
import {View,Text, ScrollView} from 'react-native'
import { Header } from '../../components/Header'
import { BottomRoutesProps } from '../../routes/auth/bottom.routes'
import { tips } from '../../utils/tips'
import { Content, TipContainer, TipContent } from './style'
export function Tips({route}:BottomTabScreenProps<BottomRoutesProps, 'Tips'>) {
    const {id} = route.params

    const tip = tips.find(tip => {
        return tip.id === id
    })

    if(tip === undefined){
        return  (<Text> dica Não encontrado</Text>)
    }
    

    return (
        <TipContainer>
            <Header title={tip.title} />
            <ScrollView>
                <TipContent>
                    <Content>
                        {tip.content}
                    </Content>
                </TipContent>
            </ScrollView>
        </TipContainer>
    )
}