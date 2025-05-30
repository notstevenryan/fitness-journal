export default function routineCardio ({
    title,
    objective,
    schedule,
    time
    })  {

    return (
        <div className="bg-zinc-800 shadow-md p-4 space-y-2 rounded-md">
            <p className="text-lg text-gray-100 font-semibold">{title}</p>
            <p className="text-sm text-gray-200 italic whitespace-pre-line"> {objective}</p>
            <p className="text-sm text-gray-400">📅 {schedule}</p>
            <p className="text-sm text-gray-400">⌚ {time}</p>
        </div>
    );
}