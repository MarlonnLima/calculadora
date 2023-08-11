import { InputContainer } from './styles'

export default function Input({value}) {
    return (
        <div>
            <InputContainer>
                <input disabled value={value}/>
            </InputContainer>
        </div>
    )
}