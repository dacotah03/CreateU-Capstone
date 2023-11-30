
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';

const BarGraph = ({chartData}) => {
    return ( 
        <>
        <Bar data = {chartData}/>
        </>
     );
}
 
export default BarGraph;