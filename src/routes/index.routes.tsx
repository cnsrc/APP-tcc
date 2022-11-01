import { NavigationContainer } from '@react-navigation/native';
import {useContext} from 'react'

import { UnAuthRoutes } from './unAuht.routes';
import { AuthRoutes } from './auth/bottom.routes';
import { UserContext } from '../Context/UserContext';
import { Loader } from '../components/Loader';


export type StackRoutes = {
    Registration: undefined
    Connect: undefined,
    Login:  undefined
    
}

export function Router(){
    const {userIsLoged,appIsLoading} = useContext (UserContext)
    return(
        <>
        {
            appIsLoading ? 
            <Loader/> : 
            (
                <NavigationContainer >
                     {userIsLoged === true ? <AuthRoutes/> : <UnAuthRoutes/>}           
                </NavigationContainer>
            )
        }
        
        
        </>
        

    )
}