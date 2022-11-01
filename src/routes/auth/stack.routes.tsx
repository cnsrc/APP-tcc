import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Today } from '../../screens/Today'


const {Group,Navigator,Screen} = createNativeStackNavigator()

export type StackScreensProps =  {
    Today: undefined,

}

export function StackRoutes(){
    return(
        <Navigator screenOptions={{headerShown:false}}>
            <Screen name="Today" component={Today}/>
        </Navigator>
    )
}