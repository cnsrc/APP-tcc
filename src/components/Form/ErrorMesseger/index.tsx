import { ErrorContainer, TitleError } from "./style";

interface ErrorProps { 
    title?: string;
}
export function ErrorMesseger (props: ErrorProps) {
    return(
        <ErrorContainer>
            <TitleError>
            {props.title}
            </TitleError>
        </ErrorContainer>
    )
}