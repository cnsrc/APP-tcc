import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { TabActions } from "@react-navigation/native"
import { Query } from "../../screens/Query"
import { Register } from "../../screens/Register"
import { Today } from "../../screens/Today"
import {AntDesign} from '@expo/vector-icons'
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { RegisterStackRoutes } from "./register.routes"
import { Tips } from "../../screens/Tips"
import { MenuConfig } from "../../screens/MenuConfig"
import { ProfileChild } from "../../screens/ProfileChild"
import { Summary } from "../../screens/Summary"
import { View } from "react-native"


export type BottomRoutesProps = {
    Today: undefined,
    RegisterRoot: undefined,
    Consultation: undefined,
    MenuConfig: undefined, 
    ProfileChild: undefined,
    Summary: undefined,
    Tips: {
        id: string,
    }

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
                name="Today" 
                component={Today}
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
            <Screen
                name="Tips"
                component={Tips}
                options= {{
                    tabBarButton: () => null
                }}
            />
            
            <Screen
                name="MenuConfig"
                component={MenuConfig}
                options={{
                    tabBarButton: () => null
                }}
            />

            <Screen
                name="ProfileChild"
                component={ProfileChild}
                options={{
                    tabBarButton: () => null
                }}
            />

            <Screen
                name="Summary"
                component={Summary}
                options={{
                    tabBarButton: () => null
                }}
            />        
        </Navigator>
    )
}
