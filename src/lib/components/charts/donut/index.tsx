import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import './donut.scss';
export const DonutChart =  () => {
    const options = {
        colors: ['#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#FFF263'],
        chart: {
            type: 'pie',
            plotShadow: false,
        },
        title: {
            text: ''
        },
        credits: {
            enabled: false
        },
      
        poltOptions: {
            pie: {
                innerSize: '99%',
                borderWidth: 40,
                borderColor: null,
                slicedOffset: 20,
                dataLabels: {
                    connectionWidth: 0
                }
            }
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
        <div className="container">Donut
            <HighchartsReact 
                highcharts={Highcharts}
                options={options}
            >
                </HighchartsReact>
        </div>
    )
}
