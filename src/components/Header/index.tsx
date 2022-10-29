import { HeaderContainer, Title } from "./styles"

interface HeaderProps {
    title: string
}

export function Header(props: HeaderProps) {
    return(
        <HeaderContainer>
            <Title>
                {props.title}
            </Title>
        </HeaderContainer>
    )
}