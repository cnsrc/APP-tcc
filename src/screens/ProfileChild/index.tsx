import { ScrollView } from "react-native";
import { ProfileChildContainer,
         ProfileChildContent,
         HeaderContainer,
         AboutBaby,
         FormArea,
         FormAreaZone,
         Fields,
         FieldsSelect,
         SaveForm,
         ButtonFinalize,
         Title,
         Line,
         IconBaby,
         Baby,
    } from "./style";

export function ProfileChild (){
    
    return(
        <ProfileChildContainer>

                <HeaderContainer>
                    <AboutBaby>
                        Sobre o bebê
                    </AboutBaby>
                </HeaderContainer>

                <Line/>

            <ProfileChildContent>

                <ScrollView>

                    <FormArea>
                        <FormAreaZone>
                            <Fields placeholder="Nome do bebê"/>
                        </FormAreaZone>
                    </FormArea>
                    <FormArea>
                        <FormAreaZone>
                            <Fields placeholder="Data de nascimento"/>
                        </FormAreaZone>
                    </FormArea>
                    <FormArea>
                        <FormAreaZone>
                            <FieldsSelect>
                                Gênero do bebê
                            </FieldsSelect>
                        </FormAreaZone>
                    </FormArea>

                    <Baby>
                        <IconBaby name="baby"/>
                    </Baby>

                    <SaveForm>
                        <ButtonFinalize activeOpacity={0.6}>
                            <Title>
                                Pronto
                            </Title>
                        </ButtonFinalize>
                    </SaveForm>

                </ScrollView>

            </ProfileChildContent>
        </ProfileChildContainer>
    )
}