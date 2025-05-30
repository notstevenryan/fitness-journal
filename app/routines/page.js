import Lift from "@/components/routine_Lift";
import Cardio from "@/components/routine_Cardio";

const mockLift = [ 
  {
  title: 'Squat - Barbell',
  type: '🏋️ Strength Training',
  notes: '',
  sets: '3 Sets',
  reps: '6-10 Reps',
  rest: 'Rest 2min 0s'
  },
];

const mockCardio = [
  { title: 'Intervals Run',
    type: '👟 Cardio Training',
    objective: 'Alternate weekly between:\n • Easier: 1 min run / 1 min walk x5–6\n • Harder: 2 min run / 1 min walk x 4\n Try to increase run reps or total running time weekly.',
    schedule: 'Monday',
    time: '6:00 PM'
  },
  { title: 'Easy Run',
    type: '👟 Cardio Training',
    objective: '30–60 mins. Just move. Keep it conversational and relaxed. Walk breaks OK.',
    schedule: 'Wednesday',
    time: '6:00 PM'
  }, 
  { title: 'Long Run',
    type: '👟 Cardio Training',
    objective: '60–90 mins, zone 2 effort. Walk as needed to control heart rate.',
    schedule: 'Friday',
    time: '6:00 PM'
  }, 
]

export default function WorkoutsPage() {
  return (
    <main>
      <section className='bg-zinc-900 shadow-md p-4 space-y-4 
      max-w-5xl mx-auto rounded-md'>
        <h2 className="text-3xl font-bold mb-4">💪 Routines</h2>

        <div className="bg-zinc-900 p-2 space-y-4 bort">
          <p className="text-lg font-semibold">Lifting Exercises</p>
          <div className="grid auto-cols-auto grid-flow-col gap-4 ">
            {mockLift.map((lift, index) => (
              <Lift key={index} {...lift}
              />
            ))}
          </div>

          <p className="text-lg font-semibold">Cardio Exercises</p>
          <div className="grid auto-cols-auto grid-flow-col gap-4">
            {mockCardio.map((cardio, index) => (
              <Cardio key={index} {...cardio}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
