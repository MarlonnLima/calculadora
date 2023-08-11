import { Container, Content, Row } from "./styles";

import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

export default function App() {
  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('')
  const [dot, setDot] = useState(true)

  const handleAddNumber = (number) => {
    if(currentNumber.indexOf('.') == -1){
    setCurrentNumber(prev => `${prev == '0' ? '' : prev}${!dot == false ? '.' : ''}${number}`)
    setDot(false)
    return;
    }
    setCurrentNumber(prev => `${prev == '0' ? '' : prev}${number}`)
    setDot(false)
  }



  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
    setDot('')
  }

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('+')
      return;
    }

    const sum = Number(firstNumber) + Number(currentNumber)

    setCurrentNumber(String(sum));
    setFirstNumber('0')
  }

  const handleMinusNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('-')
      return;
    }

    const minus = Number(firstNumber) - Number(currentNumber)

    setCurrentNumber(String(minus));
    setFirstNumber('0')
  }

  const handleMultiNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('*')
      return;
    }

    const multi = Number(firstNumber)  * Number(currentNumber)

    setCurrentNumber(String(multi));
    setFirstNumber('0')
  }

  const handleDivNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('/')
      return;
    }

    const div = Number(firstNumber) / Number(currentNumber)

    setCurrentNumber(String(div));
    setFirstNumber('0')
  }

  

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;

        case '-':
          handleMinusNumbers();
          break;

          case '*':
            handleMultiNumbers();
            break;

            case '/':
            handleDivNumbers();
            break;
        default:
          break;
      }
    }
  }


  return (
    <Container>
      <Content>
        <Input value={currentNumber} />



        <Row>
          <Button label="." onClick={() => setDot(true)}/>
          <Button label="/" onClick={() => handleDivNumbers()}/>
          <Button label="C" onClick={() => handleOnClear()} />
          <Button label="*" onClick={() => handleMultiNumbers()} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="-" onClick={() => handleMinusNumbers()} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={() => handleSumNumbers()} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="=" onClick={() => handleEquals()} />
        </Row>

      </Content>
    </Container >
  );
}


