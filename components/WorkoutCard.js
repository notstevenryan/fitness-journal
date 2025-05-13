export default function WorkoutCard({ type, duration, date }) {
  return (
    <div className="border rounded p-4 mb-4 shadow">
      <div className="font-bold">{type}</div>
      <div>{duration}</div>
      <div className="text-sm text-gray-500">{date}</div>
    </div>
  );
}
