import { NavigationContainer } from '@react-navigation/native';

import { Login } from '../screens/Login';
import { Connect } from '../screens/Connect';
import { Registration } from '../screens/Registration';
import { UnAuthRoutes } from './unAuht.routes';
import { AuthRoutes } from './auth/bottom.routes';


export type StackRoutes = {
    Registration: undefined
    Connect: undefined,
    Login:  undefined
    
}



export function Router(){
    return(
        <NavigationContainer >
            <UnAuthRoutes/>
        </NavigationContainer>

    )
}