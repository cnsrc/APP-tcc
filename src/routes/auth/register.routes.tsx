import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Diary } from '../../screens/Diary'
import { Growth } from '../../screens/Growth'
import { Register } from '../../screens/Register'
import { Temperature } from '../../screens/Temperature'
import { Today } from '../../screens/Today'
import { HealthRoutes } from './topBottom.routes'

export type StackRegisterScreensProps =  {
    Register: undefined,
    Grow: undefined,
    Health: undefined
    Diary: undefined
    Temperature: undefined,
}


const {Navigator,Screen} = createNativeStackNavigator<StackRegisterScreensProps>()



export function RegisterStackRoutes(){
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="Register" component={Register}/>
            <Screen name="Grow" component={Growth}/>
            <Screen name="Health" component={HealthRoutes}/>
            <Screen name="Diary" component={Diary}/>
            <Screen name="Temperature" component={Temperature}/>
        </Navigator>
    )
    
}