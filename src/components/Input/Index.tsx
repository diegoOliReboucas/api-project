import { ChangeEvent } from "react"
import * as C from './Styles'

type inputProps = {
  type: string,
  placeholder: string,
  value: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  button: string
}

export const Input = ({type, placeholder, value, onChange, onClick, button}: inputProps) =>{
  return ( 
  <div>
     <C.inputMain
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <C.buttonInput
        onClick={onClick}>
        {button}
      </C.buttonInput>
  </div>
  )
}