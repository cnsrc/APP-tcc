import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Medication } from '../../screens/Medicine';
import { Vaccination } from '../../screens/Vaccination';

type ToptabesRoutesProps = {
  vaccination: undefined,
  medicine: undefined,
}
const {Navigator, Screen} = createMaterialTopTabNavigator<ToptabesRoutesProps>();


export function HealthRoutes() {
  return (
    <Navigator screenOptions={{
      tabBarStyle: {height: 80, justifyContent: "flex-end"}
    }}>
      <Screen name="medicine" component={Medication} options={{title:"Rémedio"}} />
      <Screen name="vaccination" component={Vaccination} options={{title:"Vacina"}} />
    </Navigator>
  );
}