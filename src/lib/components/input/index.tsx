import { InputProps } from "./InputProps";
import '../../../scss/input/input.scss';
export const InputComponent = ({text, onChange}: InputProps) => {
    return (
        <input value={text} className="input" onChange={onChange}/>        
    )
}