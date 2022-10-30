import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { defaultTheme } from './src/styles/defaultTheme/theme';
import { useFonts, Poppins_500Medium, Poppins_400Regular} from '@expo-google-fonts/poppins';
import { Medication } from './src/screens/Medicine';
import { Summary } from './src/screens/Summary';


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
                  <Summary/>
                </>
             ) 
             
                       
          } 
  
    </ThemeProvider>
    )
}