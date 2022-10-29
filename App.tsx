import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { defaultTheme } from './src/styles/defaultTheme/theme';
import { useFonts, Poppins_500Medium, Poppins_400Regular} from '@expo-google-fonts/poppins';

import { Login } from './src/screens/Login';
import { Registration } from './src/screens/Registration';
import { Router } from './src/routes/index.routes';
import { Confirmation } from './src/screens/Confirmation';
import { Today } from './src/screens/Today';
import { Connect } from './src/screens/Connect';
import { Register } from './src/screens/Register';
import { Query } from './src/screens/Query';
import { Growth } from './src/screens/Growth';
import { Vaccination } from './src/screens/Vaccination';
import { Summary } from './src/screens/Summary';
import { Temperature } from './src/screens/Temperature';
import { ModalAltura } from './src/screens/Growth/Modal';
import { ModalPeso } from './src/screens/Growth/Modal Peso';
import { ModalTemperatura } from './src/screens/Temperature/Modal';
import { ModalVaccine } from './src/screens/Vaccination/Modal';
export default function App() {
    const [fontLoader] = useFonts({
      Poppins_400Regular,
      Poppins_500Medium,
    })
  
    return (
    
    <ThemeProvider theme={defaultTheme}> 
      
      <StatusBar
          background-Color='transparent'
          style='dark'
          translucent ={true} 
    
        />
        
        {
              
              fontLoader === true
              && (
                <>
                  <Vaccination/>
                </>
             ) 
             
                       
          } 
  
    </ThemeProvider>
    )
}