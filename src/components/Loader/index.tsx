import {ActivityIndicator} from 'react-native'
import { defaultTheme } from '../../styles/defaultTheme/theme'
import { LoaderContainer } from './styles'

export function Loader(){
    const {bluedark} = defaultTheme.colors

    return (
        <LoaderContainer>
            <ActivityIndicator color={bluedark} size='large'/> 
        </LoaderContainer>

    )
}