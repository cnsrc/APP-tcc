import { NavigationContainer } from '@react-navigation/native';
import {useContext} from 'react'

import { Login } from '../screens/Login';
import { Connect } from '../screens/Connect';
import { Registration } from '../screens/Registration';
import { UnAuthRoutes } from './unAuht.routes';
import { AuthRoutes } from './auth/bottom.routes';
import { UserContext } from '../Context/UserContext';


export type StackRoutes = {
    Registration: undefined
    Connect: undefined,
    Login:  undefined
    
}



export function Router(){
    const {userIsLoged} = useContext (UserContext)
    return(
        <NavigationContainer >
            {userIsLoged === true ? <AuthRoutes/> : <UnAuthRoutes/>}           
        </NavigationContainer>

    )
}