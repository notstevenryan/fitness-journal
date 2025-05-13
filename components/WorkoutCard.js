export default function WorkoutCard({ title, type, date, duration, notes }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 space-y-2">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{type} · {date}</p>
      <p className="text-gray-700">Duration: {duration}</p>
      {notes && <p className="text-sm text-gray-600 italic">{notes}</p>}
    </div>
  );
}
