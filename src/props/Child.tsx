import { ChildProps } from './ChildProps';
import '../scss/button/button.scss';
import { ButtonComponent } from '../lib/components/button';

export const Child = ({ color, label, size, onClick, children }: ChildProps) => {
    return (
        <div>
            Child Component: {color}
            <ButtonComponent label="View Report Details" onClick={onClick}/>
            {children}
        </div>
    )
}

export const ChildAsFC: React.FC<ChildProps> = ({ color, label, size, children,  onClick}) => {
    return <div>
        {color}
        {children}
        <button onClick={onClick}>{label}</button>
    </div>
}