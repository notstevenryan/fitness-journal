{/* cardLift */} 

export default function dashboardCard({ 
  title, 
  type, 
  date, 
  duration, 
  notes 
  }) {

  return (
    <div className="bg-zinc-800 shadow-md p-4 space-y-2">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-100">{type} · {date}</p>
      <p className="text-gray-400">Duration: {duration}</p>
      {notes && <p className="text-sm text-gray-200 italic">{notes}</p>}
    </div>
  );
}
