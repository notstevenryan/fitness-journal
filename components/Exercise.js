export default function exercise ({
    title, 
    type,
    notes, 
    sets, 
    reps, 
    rest
    })  {

    return (
        <div className="bg-zinc-800 shadow-md rounded-lg p-4 space-y-2">
            <p className="text-lg text-gray-100 font-semibold">{title}</p>
            <p className="text-sm text-gray-400">{type}</p>
            <p className="text-sm text-gray-200 italic">{notes}</p>
            <p className="text-sm text-gray-400">
                📈 {sets} 🔁 {reps} ⌚ {rest}</p>
        </div>
    );
}