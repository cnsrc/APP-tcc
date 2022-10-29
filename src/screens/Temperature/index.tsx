import { Header } from "../../components/Header";
import { Fontisto } from '@expo/vector-icons'; 
import { App, Button, ButtonText, Container, ContainerHeader, Footer } from "./style";
 export function Temperature (){
    return (
<App>
    <Container>
        <Header title="Temperatura"/>
        <ContainerHeader>
        <Footer>
             <Fontisto name="thermometer-alt" size={28.5} color="black" />
        </Footer>
        <Button>
            <ButtonText>
                Adicionar temperatura
            </ButtonText>
        </Button>
        </ContainerHeader>
    </Container>
</App> 
    )
 }