
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Connect } from '../screens/Connect';
import { Login } from '../screens/Login';
import { Registration } from '../screens/Registration';




export type StackRoutes = {
    Registration: undefined
    Connect: undefined,
    Login:  undefined
    
}

const {Navigator,Screen}  = createNativeStackNavigator<StackRoutes>()

export function UnAuthRoutes(){
    return(
    <Navigator 
        screenOptions={{headerShown:false}}
    >
        <Screen name='Login' component={Login}/>
        <Screen name="Registration" component={Registration}/>
        <Screen name="Connect" component={Connect}/>
        
    </Navigator>
    )
}