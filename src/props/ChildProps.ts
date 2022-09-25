export interface ChildProps {
    color: string;
    label: string;
    size: number;
    onClick: () => void;
    children?: React.ReactNode;
}
