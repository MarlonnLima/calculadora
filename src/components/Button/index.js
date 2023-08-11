import { ButtonContainer } from "./styles";

export default function Button({ label, onClick }) {
    return (
        <ButtonContainer onClick={onClick}>
            {label}
        </ButtonContainer>
    )
}