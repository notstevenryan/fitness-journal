import WorkoutCard from '../../components/dashboard_Card';
import WeeklyChart from '../../components/dashboard_WeeklyChart';

//sample workouts
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

//calendar function

export default function DashboardPage() {
  return (
    <section className='max-w-5xl mx-auto'>
      <div className='bg-zinc-900 shadow-md p-4 space-y-4 '>
        <h2 className="text-3xl font-semibold mb-4">📊 Dashboard</h2>
        <h3 className='text-2xl font-semibold b-4'>Calendar</h3>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          Choose from the ff:
          fullcalendar.io
          react-calendar
          <WeeklyChart />
        </div>
      </div>

      <br></br>

      <div className='bg-zinc-900 shadow-md p-4 space-y-4'>
        <p className='text-2xl font-semibold mb-4 '> Recent Workouts</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockWorkouts.map((workout, index) => (
            <WorkoutCard key={index} {...workout}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
