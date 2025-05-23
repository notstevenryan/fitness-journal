export default function Cardio ({
    title,
    type, 
    objective,
    schedule,
    time
    })  {

    return (
        <div className="bg-zinc-800 shadow-md rounded-lg p-4 space-y-2">
            <p className="text-lg text-gray-100 font-semibold">{title}</p>
            <p className="text-sm text-gray-400">{type}</p>
            <p className="text-sm text-gray-200 italic whitespace-pre-line"> {objective}</p>
            <p className="text-sm text-gray-400">📅 {schedule}</p>
            <p className="text-sm text-gray-400">⌚ {time}</p>
        </div>
    );
}