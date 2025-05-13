'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Mon', duration: 45 },
  { name: 'Tue', duration: 60 },
  { name: 'Wed', duration: 30 },
  { name: 'Thu', duration: 90 },
  { name: 'Fri', duration: 75 },
  { name: 'Sat', duration: 120 },
  { name: 'Sun', duration: 0 },
];

export default function WeeklyChart() {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-8">
      <h3 className="text-lg font-semibold mb-2">Weekly Duration (minutes)</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="duration" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
