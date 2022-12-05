import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { defaultTheme } from './src/styles/defaultTheme/theme';
import { useFonts, Poppins_500Medium, Poppins_400Regular, Poppins_600SemiBold, Poppins_400Regular_Italic,} from '@expo-google-fonts/poppins';
import { UserContextProvider } from './src/Context/UserContext';
import { Router } from './src/routes/index.routes';
import { ProfileChild } from './src/screens/ProfileChild';
import { Summary } from './src/screens/Summary';
import { Login } from './src/screens/Login';
import { ConfirmationContent } from './src/screens/Confirmation/style';
import { Connect } from './src/screens/Connect';
import { Temperature } from './src/screens/Temperature';


export default function App() {
    const [fontLoader] = useFonts({
      Poppins_400Regular_Italic,
      Poppins_500Medium,
      Poppins_400Regular,
      Poppins_600SemiBold,
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
                <UserContextProvider>
                  <Temperature/>
                </UserContextProvider>
             ) 
             
                       
          } 
  
    </ThemeProvider>
    )
}