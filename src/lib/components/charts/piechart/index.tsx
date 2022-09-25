import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import '../../../../scss/chart/chart.scss';
export const PieChart =  () => {
    const options = {
        colors: ['#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#FFF263'],
        chart: {
            type: 'pie'
        },
        title: {
            text: ''
        },
        credits: {
            enabled: false
        },
      
        poltOptions: {

        },
        series: [{
            name: 'Delivery',
            colorByPoint: true,
            data: [
                {
                    name: 'Pending',
                    y: 61.05
                },
                {
                    name: 'Completed',
                    y: 30.05
                },
                {
                    name: 'Approved',
                    y: 20.05
                },
                {
                    name: 'Approved',
                    y: 20.05
                },
                {
                    name: 'Approved',
                    y: 20.05
                }
            ]
        
        }]
    }
    return (
        <div className="chart">Pie
            <HighchartsReact 
                highcharts={Highcharts}
                options={options}
            >
                </HighchartsReact>
        </div>
    )
}
