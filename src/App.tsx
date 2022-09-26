import { UserSearch } from './components/refs';
import Parent from './props/Parent';
import { GuestList } from './state';
import { PieChart } from './lib/components/charts/piechart';
import { DonutChart } from './lib/components/charts/donut';
export const App = () => {
    return (
        <div>
        <h1>Hi there</h1>
        <Parent/>
        <GuestList label="Add Guest"/>
        <UserSearch/>
        <PieChart/>
        <DonutChart/>
        </div>
    );
}
