import { App, HeaderContainer, Ruler, RulerContainer, TextTop, Top } from "./style";

export function ModalTemperatura (){
    return (
        <App>
            <Top>
                <TextTop> Temperatura </TextTop>
            </Top>
            <HeaderContainer>
                <RulerContainer>
                    <Ruler>  </Ruler>
                </RulerContainer>
            </HeaderContainer>
        </App>
    )
}