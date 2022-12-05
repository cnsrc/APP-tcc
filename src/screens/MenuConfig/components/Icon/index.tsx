import { ReactNode } from 'react';

import {IconContainer, IconContent} from './style'

interface IconProps {
    children: ReactNode
}

export function Icon({children}: IconProps){
    
    return (
        <IconContainer >
            <IconContent>
                {children}
            </IconContent>

        </IconContainer>
    )

}