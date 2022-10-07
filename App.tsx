import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeContext, ThemeProvider } from 'styled-components/native';
import { Login } from './src/screens/Login';
import { defaultTheme } from './src/styles/defaultTheme/theme';
import { useFonts, Poppins_500Medium ,} from '@expo-google-fonts/poppins';
import { Registration } from './src/screens/Registration';

export default function App() {
    const [fontLoader] = useFonts({
      Poppins_500Medium
    })
  
    return (
    
    <ThemeProvider theme={defaultTheme}>
      
      <StatusBar
          background-Color='transparent'
          style='light'
          translucent ={true} 
    
        />
        {
              
              fontLoader === true
              && (
                <Registration/>
             )
                       
          } 
    </ThemeProvider>
  )
}