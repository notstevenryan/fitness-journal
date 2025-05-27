import Exercise from "@/components/Exercise";
import Cardio from "@/components/Cardio";

const mockExercises = [ 
  {
  title: 'Squat - Barbell',
  type: '🏋️ Strength Training',
  notes: 'Experiment with the stance to see what feels most comfortable. Aim to get your thighs parallel to the floor and pause briefly at the bottom to limit the assistance from the stretch reflex. Front squats and leg presses are good alternatives.',
  sets: '3 Sets',
  reps: '6-10 Reps',
  rest: 'Rest 2min 0s'
  },
];

const mockCardio = [
  { title: 'Intervals',
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
        <section>
        <h2 className="text-3xl font-bold mb-4">Workouts</h2>
        <p className="text-gray-400">
          Detailed list of strength and cardio workouts.</p>

        <div className="bg-zinc-900 rounded-lg p-4 space-y-4">
          <p>Lifting Exercises</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockExercises.map((exercise, index) => (
              <Exercise key={index} {...exercise}
              />
            ))}
          </div>

          <p>Cardio Exercises</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
