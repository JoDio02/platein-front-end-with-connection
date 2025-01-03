import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

interface LineChartComponentProps {
  data: Array<{ name: string; value: number; goalvalue: number;}>;
}

const LineChartComponent: React.FC<LineChartComponentProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis/>
        <Tooltip/>
        <Legend/>
        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="goalvalue" stroke="#7b587e"/>
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
