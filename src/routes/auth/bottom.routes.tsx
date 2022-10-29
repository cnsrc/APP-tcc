import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { TabActions } from "@react-navigation/native"
import { Query } from "../../screens/Query"
import { Register } from "../../screens/Register"
import { Today } from "../../screens/Today"
import {AntDesign} from '@expo/vector-icons'
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 


type BottomRoutesProps = {
    Today: undefined,
    Register: undefined,
    Consultation: undefined,

}
const {Navigator,Screen} = createBottomTabNavigator<BottomRoutesProps>()



export function AuthRoutes() {
    return(
        <Navigator 
            screenOptions={{
                headerShown:false,
                tabBarActiveTintColor: '#ff00ff'
                
            }}
        >
            <Screen 
                name="Today" 
                component={Today}
                options={{
                    tabBarIcon: ({color,size}) => (
                        <AntDesign name="heart" size={size} color={color} />
                    )
                }}
            />
            <Screen 
                name="Register" 
                component={Register}
                options={{
                    tabBarIcon: ({color,size}) => (
                        <SimpleLineIcons name="graph" size={size} color={color} />
                    )
                }}
            />
            <Screen 
                name="Consultation" 
                component={Query}
                options={{
                    tabBarIcon: ({color,size}) => (
                        <FontAwesome name="calendar"size={size} color={color} />
                    )
                }}
            />
            
        </Navigator>
    )
}
