import { Text } from "react-native";
import logoImage from "../../assets/Saudebaby.png";
import { Logo } from "../Login/styles";
import { InputRegister } from "./components/Input";
import { Button, Cashier,
        Cashierem,
        Child,
        Door,
        Fooder,
        Header,
        OpenButton,
        Passaword,
        Title
       } from "./styles";


export function Registration (){
    return (
        <Cashier>
            <Header>
                <Logo source ={logoImage}/>

            </Header>
            <Door>
                <InputRegister title="Nome completo"/>
                <InputRegister title="Email"/>
                <InputRegister title="Senha"/>
                <InputRegister title="Nome da criança"/>
            </Door>
            <Fooder>
                <Button>
                <OpenButton>
                     <Text>Entrar</Text>
                </OpenButton>
                </Button>
            </Fooder>
        </Cashier>
    )
}