import WorkoutCard from '../../components/WorkoutCard';
import WeeklyChart from '../../components/WeeklyChart';

const mockWorkouts = [
  {
    title: 'Morning Ride',
    type: 'Cycling',
    date: '2025-05-10',
    duration: '1h 45m',
    notes: 'Easy endurance pace, felt good.',
  },
  {
    title: 'Upper Body Strength',
    type: 'Strength',
    date: '2025-05-09',
    duration: '1h',
    notes: 'Heavy bench + shoulder presses.',
  },
  {
    title: 'Gravel Ride',
    type: 'Cycling',
    date: '2025-05-08',
    duration: '3h 20m',
    notes: 'Exploring new terrain.',
  },
];

export default function DashboardPage() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6">📊 Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockWorkouts.map((workout, index) => (
          <WorkoutCard key={index} {...workout}
           />
        ))}
      </div>
      <WeeklyChart />
      
    </section>
  );
}
