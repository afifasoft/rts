import { ButtonProps } from "./ButtonProps";
import '../../../scss/button/button.scss';
export const ButtonComponent = ({label, onClick}: ButtonProps) => {
    return (
        <button className="button" onClick={onClick}>{label}</button>
    )
}