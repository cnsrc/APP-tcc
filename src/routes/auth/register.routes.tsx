import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Growth } from '../../screens/Growth'
import { Register } from '../../screens/Register'
import { Temperature } from '../../screens/Temperature'
import { Today } from '../../screens/Today'
import { HealthRoutes } from './topBottom.routes'

export type StackRegisterScreensProps =  {
    Register: undefined,
    Grow: undefined,
    Temperature: undefined,
    Health: undefined
}


const {Navigator,Screen} = createNativeStackNavigator<StackRegisterScreensProps>()



export function RegisterStackRoutes(){
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="Register" component={Register}/>
            <Screen name="Grow" component={Growth}/>
            <Screen name="Temperature" component={Temperature}/>
            <Screen name="Health" component={HealthRoutes}/>
        </Navigator>
    )
    
}