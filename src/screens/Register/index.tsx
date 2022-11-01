import { Text,View } from 'react-native';

import { MaterialCommunityIcons, Fontisto, FontAwesome5 } from '@expo/vector-icons';
import { RegisterContainer, CardsContainer, CardsWrraper} from "./styles";
import { Header } from '../../components/Header';
import { Card } from './components/Card';
import { defaultTheme } from '../../styles/defaultTheme/theme';
import { useRoute } from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { StackRegisterScreensProps } from '../../routes/auth/register.routes';


const {red} = defaultTheme.colors
export function Register ({navigation}:NativeStackScreenProps<StackRegisterScreensProps, 'Register'>){
  const Navegation = useRoute()
    return(
<RegisterContainer>
    <Header title='Registro'/>
    <CardsContainer>
      <CardsWrraper>
        <Card title='Crescimento'
          onPress={() => navigation.navigate('Grow')} 
          icon={<FontAwesome5 name="ruler" size={24} color={red}/>}
          activeOpacity={0}
        />
        <Card 
          title='Saúde'
          onPress={() => navigation.navigate('Health')} 
          icon={<FontAwesome5 name="heartbeat" size={24} color={red}/>}
        />
      </CardsWrraper>
      <CardsWrraper>
        <Card title='Diário' 
          icon={<MaterialCommunityIcons name="book-open-page-variant-outline" size={24} color={red}/>}
        />
        <Card title='Temperatura' 
          icon={<Fontisto name="thermometer-alt" size={24} color={red}/>}
        />
      </CardsWrraper>
    </CardsContainer>
    

</RegisterContainer>
  )
}