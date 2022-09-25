import { Child} from './Child';
const Parent = () => {
    const label = "View Report Details";
    return (
        <Child color="red" label={label} size={label.length} onClick={() => { console.log('Parent Button Click')}}>
                <br/>aaaa
        </Child>
    )
};

export default Parent;