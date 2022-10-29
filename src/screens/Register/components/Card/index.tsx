import {ReactNode} from 'react'
import {TouchableOpacityProps} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import {CardContainer,
        Label
} from './styles'

interface CardProps extends TouchableOpacityProps {
    title: string,
    icon: ReactNode
}

export function Card({title,icon:Icon,...rest}: CardProps){
    return(
        <CardContainer activeOpacity={.7} {...rest} >
            {Icon}
            <Label>
                {title}
            </Label>
        </CardContainer>
    )
    
}