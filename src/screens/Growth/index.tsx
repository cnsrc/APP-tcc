import { Header } from "../../components/Header";
import { AntDesign } from '@expo/vector-icons';
import { App,
    Component,
    GrowthName,
    HeaderContainer,
    HeightMarking,
    Marking,
    Measure,
    NameWeight,
    Register,
    RegisterCurrent,
    Registercurret,
    RegisterHeight,
    RegisterImc,
    RegisterIMC,
    Size,
    TextRegister,
    TextRegisterCurrent,
    TextRegistercurrent,
    TextRegisterHeight,
    TextRegisterImc,
    TextRegisterIMC,
    TextWidth,
    Weight,
    Width
} from "./style";
import { AddButton } from "../../components/AddButton";

export function Growth (){
    return(
<App>
    <HeaderContainer>
        <Header title='Crescimento'/>
            <GrowthName>
                Registre as medidas
            </GrowthName>
         
    </HeaderContainer>
    <Weight>
        <NameWeight>
            Peso
        </NameWeight>
    </Weight>
    <Component>
        <AddButton/>
    </Component>
    <Marking>
        <Register>
            <TextRegister>
                Ao nascer
        <Size>
        {'\n'} <AntDesign name="minus" size={24} color="black" />
        </Size>
        {'\n'} 0,00kg
            </TextRegister>
        </Register>
        <RegisterCurrent>
            <TextRegisterCurrent>
                 Atual
        <Size>
        {'\n'} <AntDesign name="minus" size={24} color="black" />
        </Size>
        {'\n'} 0,00kg
            </TextRegisterCurrent>
        </RegisterCurrent>
        <RegisterImc>
            <TextRegisterImc>
                IMC
        <Size>
        {'\n'} <AntDesign name="minus" size={24} color="black" />
        </Size>
        {'\n'} 0,00kg
            </TextRegisterImc>
        </RegisterImc>
    </Marking>
    <Measure>
    <AntDesign name="minus" size={24} color="black" />
    </Measure>
    <HeightMarking>
        <Width>
            <TextWidth>
                Altura
            </TextWidth>
            <AddButton/>
        </Width>
        <RegisterHeight>
            <TextRegisterHeight>
                Ao nascer
        <Size>
        {'\n'} <AntDesign name="minus" size={24} color="black" />
        </Size>
        {'\n'} 0,00cm
            </TextRegisterHeight>
        </RegisterHeight>

        <Registercurret>
            <TextRegistercurrent>
                Atual
        <Size>
        {'\n'} <AntDesign name="minus" size={24} color="black" />
        </Size>
        {'\n'} 0,00cm
            </TextRegistercurrent>
        </Registercurret>

        <RegisterIMC>
            <TextRegisterIMC>
                IMC
        <Size>
        {'\n'} <AntDesign name="minus" size={24} color="black" />
        </Size>
        {'\n'} 0,00cm
            </TextRegisterIMC>
        </RegisterIMC>
    </HeightMarking>
    <AntDesign name="minus" size={24} color="black" />
</App>


    ) 
}