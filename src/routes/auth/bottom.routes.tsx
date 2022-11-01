import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { TabActions } from "@react-navigation/native"
import { Query } from "../../screens/Query"
import { Register } from "../../screens/Register"
import { Today } from "../../screens/Today"
import {AntDesign} from '@expo/vector-icons'
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { StackRoutes } from "./stack.routes"
import { RegisterStackRoutes } from "./register.routes"


type BottomRoutesProps = {
    TodayRoot: undefined,
    RegisterRoot: undefined,
    Consultation: undefined,

}
const {Navigator,Screen} = createBottomTabNavigator<BottomRoutesProps>()



export function AuthRoutes() {
    return(
        <Navigator
            screenOptions={{
                headerShown:false,
                tabBarActiveTintColor: '#F2A2D6',
                tabBarStyle: { height: 70, justifyContent: 'center' },
            }}
        

        >
            <Screen 
                name="TodayRoot" 
                component={StackRoutes}
                options={{
                    tabBarIcon: ({color,size}) => (
                        <AntDesign name="heart" size={size} color={color} />
                    ),
                    title: "Hoje"
                }}
            />
            <Screen 
                name="RegisterRoot" 
                component={RegisterStackRoutes}
                options={{
                    tabBarIcon: ({color,size}) => (
                        <SimpleLineIcons name="graph" size={size} color={color} />
                    ),
                    title: "Registro"
                }}
            />
            <Screen 
                name="Consultation" 
                component={Query}
                options={{
                    tabBarIcon: ({color,size}) => (
                        <FontAwesome name="calendar"size={size} color={color} />
                    ),
                    title:"Consulta"
                }}
            />
            
        </Navigator>
    )
}
