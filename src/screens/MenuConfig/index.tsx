import { ScrollView, Alert, Button, View} from "react-native"
import styled from "styled-components/native";
import {Icon} from "./components/Icon"
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

import { MenuConfigContainer,
         MenuConfigContent,
         Header,
         TitleConfig,
         TitleTopics,
         Text,
         InputsData,
         Input,
         InputChange,
         InputList,
         DataoptionsSummary,
         Line,
         DeleteProfile,
         DiceExport,
         Disconnect,
         ExportTitle,
         LogOutAccount,
         Profile,
         TitleProfile,
         TitleButton,
         ButtonEdit,
         ProfileIcon,
         InputOn,
         ScaleIcon,
         TrashIcon,
         ButtonGoOut,
         InputDataWrapper,
    } from "./style"
import { ProfileChild } from "../ProfileChild";
import { BottomRoutesProps } from "../../routes/auth/bottom.routes";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export interface deleteProfileProps {
        name: string,
        observation: string | undefined,
}

export function MenuConfig ({navigation}:BottomTabScreenProps<BottomRoutesProps, 'MenuConfig'>){

    function haldleOpenSummary(){
        navigation.navigate('Summary')
    }

    function haldleDeleteDataChild(){
        Alert.alert(
            'Saúde Baby', 
            'O perfil desta criança será excluido de TODOS os seus aparelhos e/ou da base de dados na nuvem. TEM CERTEZA?',
            [
                {
                    text: 'NÃO',
                    style: 'cancel',
                },
                {
                    text: 'SIM',
                    style: 'destructive',
                } 
            ]
        
        )
    }

    return (
        <MenuConfigContainer>

            <Header>
                <TitleConfig>
                    Perfil 
                </TitleConfig>
            </Header>
            <ScrollView>
                <MenuConfigContent>
                    <Profile>
                        <TitleProfile>
                            Carolina
                        </TitleProfile>
                        <ProfileIcon name="user-circle-o"/>
                    </Profile>

                    <TitleTopics>
                        <Text>
                            Menu
                        </Text>
                    </TitleTopics> 
                    <InputsData>
                        <InputDataWrapper>
                            <Icon>
                                <Entypo name='list'/>
                            </Icon>
                            
                            <DataoptionsSummary activeOpacity={.9} onPress={haldleOpenSummary}>
                                <Input>
                                    Resumo
                                </Input>
                            </DataoptionsSummary>
                        
                        </InputDataWrapper>
                    </InputsData>

                    <InputsData>
                        <InputDataWrapper>
                            <Icon>
                                <FontAwesome5 name="ruler"/>
                            </Icon>
                            <Input>
                                Unidades de
                                {'\n'}comprimento
                            </Input>

                        </InputDataWrapper>
                        <DataoptionsSummary>
                            <InputList>
                                cm
                            </InputList>
                        </DataoptionsSummary>
                    </InputsData>

                    <InputsData>
                        <InputDataWrapper>
                            <Icon>
                                <ScaleIcon name="scale-bathroom"/>
                            </Icon>
                            <Input>
                                Unidade de peso
                            </Input>
                        
                        </InputDataWrapper>

                        <DataoptionsSummary>
                            <InputList>
                                kg
                            </InputList>
                        </DataoptionsSummary>
                    </InputsData>

                    <InputsData>
                        <InputDataWrapper>
                            <Icon>
                                <FontAwesome5 name="thermometer-half"/>
                            </Icon>
                            
                            <Input>
                                  Unidade de
                        {'\n'}temperatura
                            </Input>
                        
                        </InputDataWrapper>
                        <DataoptionsSummary>
                            <InputList>
                                °C
                            </InputList>
                        </DataoptionsSummary>
                    </InputsData>

                    <InputsData>
                        <InputDataWrapper>
                        <Icon>
                            <TrashIcon name="md-trash-sharp"/>
                        </Icon>
                            <DataoptionsSummary activeOpacity={0.9}>
                                <Input>
                                    Limpar cache do app
                                </Input>
                            </DataoptionsSummary>
                        
                        </InputDataWrapper>

                    </InputsData>
                    <Line/>
                    <TitleTopics>
                        <Text>
                            Criança
                        </Text> 
                    </TitleTopics>
                    <InputsData>
                        <InputOn>
                            Milena - Ativo
                        </InputOn>
                    </InputsData>

                    <InputsData>
                            <Input>
                                Nome:
                            </Input>
                            <InputChange placeholder="Digite aqui......"/>
                    </InputsData>

                    <InputsData>
                        <Input>
                            Gênero:
                        </Input>
                        <Input>
                            Menina
                        </Input>
                    </InputsData>

                    <InputsData>
                        <Input>
                            Data de nascimento:
                        </Input>
                        <InputChange placeholder="Digite aqui......"/>     
                    </InputsData>

                    <DeleteProfile>
                        <ButtonEdit onPress={haldleDeleteDataChild}>
                            <TitleButton>
                                Apagar perfil da criança
                            </TitleButton>
                        </ButtonEdit>
                    </DeleteProfile>
                    
                    <Line/>
                        <TitleTopics>
                            <Text>
                                Conta
                            </Text>
                        </TitleTopics>

                        <InputsData>
                            <Input>
                                Nome:
                            </Input>
                            <InputChange placeholder="Digite aqui......"/>
                        </InputsData>
                        <InputsData>
                            <Input>
                                Sobrenome:
                            </Input>
                            <InputChange placeholder="Digite aqui......"/>
                                 
                        </InputsData>
                        <InputsData>
                            <Input>
                                Parentesco
                            </Input>
                            <Input>
                                Mãe
                            </Input>
                    </InputsData>
                    <Line/>
                    <TitleTopics>
                        <Text>
                            Dados
                        </Text>
                    </TitleTopics>
                    <DiceExport>
                        <ExportTitle>
                            Exportar dados
                        </ExportTitle>
                    </DiceExport>

                    <Disconnect>
                        <LogOutAccount>
                            <ButtonGoOut>
                                Sair do login
                            </ButtonGoOut>
                        </LogOutAccount>
                    </Disconnect>

                </MenuConfigContent>
            </ScrollView>

        </MenuConfigContainer>
    )
}