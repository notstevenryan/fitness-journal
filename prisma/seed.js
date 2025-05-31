const { PrismaClient } = require("../app/generated/prisma");
const prisma = new PrismaClient();

async function main() {
  await prisma.routine_Lift.createMany({
    data: [

      { /* Full Body 1 */
        title: "Squat - Barbell",
        notes: "Experiment with the stance to see what feels most comfortable. Aim to get your thighs parallel to the floor and pause briefly at the bottom to limit the assistance from the stretch reflex. Front squats and leg presses are good alternatives.",
        equipment: "Barbell",
        unoMuscleGroup: "Quadriceps",
        dosMuscleGroup: ["Hamstrings", "Glutes"],
        sets: 4,
        repsMin: 6,
        repsMax: 10,
        restSeconds: 120,
    }, 
    {
        title: "Incline Bench Press - Dumbbell",
        notes: "Slowly lower the dumbbells as much as you can to your sides. The goal is to feel a good stretch in your upper chest. You can also do chest presses on a machine where the handles move forward and up.",
        equipment: "Dumbbell",
        unoMuscleGroup: "Chest",
        dosMuscleGroup: ["Triceps", "Shoulders"],
        sets: 4,
        repsMin: 10,
        repsMax: 12,
        restSeconds: 120,
    }, 
    {
        title: "Lying Leg Curl - Machine",
        notes: "Extend your knees on each rep to feel a deep stretch in your hamstrings. Romanian deadlifts (barbell and dumbbell) are good alternatives.",
        equipment: "Machine",
        unoMuscleGroup: "Hamstrings",
        dosMuscleGroup: [],
        sets: 3,
        repsMin: 8,
        repsMax: 12,
        restSeconds: 120,
    },
    {
        title: "Triceps Pushdown",
        notes: "Extend your arms fully on each rep and slowly bend them during the negative portion to keep tension on the triceps. You can also perform overhead dumbbell tricep extensions.",
        equipment: "Machine",
        unoMuscleGroup: "Triceps",
        dosMuscleGroup: [],
        sets: 3,
        repsMin: 10,
        repsMax: 12,
        restSeconds: 120,
    },
    {
        title: "Ab Wheel",
        notes: "",
        equipment: "Other",
        unoMuscleGroup: "Abdominals",
        dosMuscleGroup: [],
        sets: 3,
        repsMin: 15,
        repsMax: 15,
        restSeconds: 120,
    },

    { /* Full Body 2 */
        title: "Bent Over Row - Barbell",
        notes: "Slowly lower the weight until you feel a stretch in your upper back, and pull in one fluid motion.",
        equipment: "Barbell",
        unoMuscleGroup: "UpperBack",
        dosMuscleGroup: [],
        sets: 4,
        repsMin: 6,
        repsMax: 10,
        restSeconds: 120,
    },
    {
        title: "Leg Press - Machine",
        notes: "Placing your feet close together and lower on the platform forces a greater knee range of motion, which leads to better quadriceps (front thigh muscle) activation. Bulgarian split squats are a good alternative.",
        equipment: "Machine",
        unoMuscleGroup: "Quadriceps",
        dosMuscleGroup: [],
        sets: 4,
        repsMin: 10,
        repsMax: 12,
        restSeconds: 120,
    },
    {
        title: "Chest Press - Machine",
        notes: "Set the bench height at the correct position for your elbows to remain close to your sides instead of flaring up.",
        equipment: "Machine",
        unoMuscleGroup: "Chest",
        dosMuscleGroup: [],
        sets: 4,
        repsMin: 10,
        repsMax: 12,
        restSeconds: 120,
    },
    {
        title: "EZ Bar Biceps Curl",
        notes: "Set the bench height at the correct position for your elbows to remain close to your sides instead of flaring up.",
        equipment: "Barbell",
        unoMuscleGroup: "Biceps",
        dosMuscleGroup: [],
        sets: 3,
        repsMin: 8,
        repsMax: 12,
        restSeconds: 120,
    },
    {
        title: "Standing Calf Raise - Machine",
        notes: "Slowly lower your heels to the floor for an intense calf stretch at the bottom and pause briefly instead of ‘bouncing.’",
        equipment: "Machine",
        unoMuscleGroup: "Calves",
        dosMuscleGroup: [],
        sets: 3,
        repsMin: 15,
        repsMax: 20,
        restSeconds: 90,
    },
    {
        title: "Plank",
        notes: "Keep your abs engaged, and draw your belly button toward your spine. Your lower back must not arch.",
        equipment: "None",
        unoMuscleGroup: "Abdominals",
        dosMuscleGroup: [],
        sets: 3,
        repsMin: 15,
        repsMax: 15,
        restSeconds: 120,
    },
    { /* Full Body 3 */
        title: "Shoulder Press - Dumbbell",
        notes: "Keep your abs engaged for stability, and press the dumbbells up and in. Lower the weights until your elbows are slightly below shoulder level.",
        equipment: "Dumbbell",
        unoMuscleGroup: "Shoulders",
        dosMuscleGroup: [],
        sets: 4,
        repsMin: 8,
        repsMax: 12,
        restSeconds: 120,
    },
    {
        title: "Hip Thrust - Barbell",
        notes: "Doing hip thrusts on a machine reduces the need to balance all the time. However, you can also do these with a barbell if your gym doesn’t have this machine.",
        equipment: "Barbell",
        unoMuscleGroup: "Glutes",
        dosMuscleGroup: [],
        sets: 4,
        repsMin: 12,
        repsMax: 15,
        restSeconds: 120,
    },
    {
        title: "Shrug - Dumbbell",
        notes: "Shrug your shoulders high in one fluid motion and pause briefly at the top position.",
        equipment: "Dumbbell",
        unoMuscleGroup: "Traps",
        dosMuscleGroup: ["Neck"],
        sets: 4,
        repsMin: 10,
        repsMax: 12,
        restSeconds: 120,
    },
    {
        title: "Leg Extension - Machine",
        notes: "Do reps slowly and with good control, especially as you bend your knees.",
        equipment: "Machine",
        unoMuscleGroup: "Quadriceps",
        dosMuscleGroup: [],
        sets: 3,
        repsMin: 12,
        repsMax: 15,
        restSeconds: 120,
    },
    {
        title: "Cable Fly Crossovers",
        notes: "Do reps slowly and bring your arms to the sides enough to feel a stretch in your chest muscles on each rep.",
        equipment: "Machine",
        unoMuscleGroup: "Chest",
        dosMuscleGroup: [],
        sets: 3,
        repsMin: 15,
        repsMax: 20,
        restSeconds: 120,
    },
    {
        title: "Face Pull",
        notes: "Pull the rope in one fluid motion and spread it in front of your face, engaging your UpperBack muscles by holding the position for a moment.",
        equipment: "Machine",
        unoMuscleGroup: "Shoulders",
        dosMuscleGroup: [],
        sets: 3,
        repsMin: 15,
        repsMax: 20,
        restSeconds: 90,
    },
    {
        title: "Crunch",
        notes: "",
        equipment: "None",
        unoMuscleGroup: "Abdominals",
        dosMuscleGroup: [],
        sets: 4,
        repsMin: 6,
        repsMax: 10,
        restSeconds: 120,
    }]
  });

  // --- CARDIO ROUTINES ---
  await prisma.routine_Cardio.createMany({
    data: [
      {
        title: "Easy Run",
        objective: "Maintain a light, conversational pace to build aerobic capacity.",
        schedule: "Monday",
        time: "6:00 AM",
        durationMin: 45,
        intensity: "Zone2",
      },
      {
        title: "Interval Run",
        objective: "Alternate 2-min hard runs with 1-min walking recovery. 6–8 rounds.",
        schedule: "Wednesday",
        time: "6:00 AM",
        durationMin: 30,
        intensity: "Intervals",
      },
      {
        title: "Endurance Run",
        objective: "Sustain a steady pace for endurance building. Stay in Zone 2.",
        schedule: "Friday",
        time: "6:00 AM",
        durationMin: 75,
        intensity: "Zone2",
      }
    ]
  });

  // --- STRETCHING ROUTINES (with nested stretch_Item) ---
  // POST-LIFT ROUTINE
  await prisma.routine_Stretch.create({
    data: {
      title: "Post-Lift Routine",
      context: "Use after Full Body 1, 2, or 3 workouts.",
      durationMin: 10,
      category: "PostLift",
      side: "Each",
      items: {
        create: [
          {
            section: "Lower Body",
            name: "Standing Quad Stretch",
            duration: "60 sec per leg",
            notes: "Targets quadriceps"
          },
          {
            section: "Lower Body",
            name: "Hamstring Stretch",
            duration: "60 sec per leg",
            notes: "Targets hamstrings"
          },
          {
            section: "Lower Body",
            name: "Hip Flexor Stretch",
            duration: "60 sec per leg",
            notes: "Opens up the hips"
          },
          {
            section: "Upper Body",
            name: "Chest Stretch",
            duration: "60 sec per side",
            notes: "Opens chest muscles"
          },
          {
            section: "Upper Body",
            name: "Shoulder Stretch",
            duration: "45 sec per side",
            notes: "Relieves shoulder tension"
          },
          {
            section: "Upper Body",
            name: "Triceps Stretch",
            duration: "45 sec per side",
            notes: "Stretches triceps and lats"
          },
          {
            section: "Spine & Hips",
            name: "Cat-Cow / Child’s Pose",
            duration: "2 minutes",
            notes: "Promotes spinal mobility and relaxation"
          }
        ]
      }
    }
  });

  // POST-RUN ROUTINE
  await prisma.routine_Stretch.create({
    data: {
      title: "Post-Run Routine",
      context: "Use after any running workout.",
      durationMin: 10,
      category: "PostRun",
      side: "Each",
      items: {
        create: [
          {
            section: "Lower Body",
            name: "Calf Stretch",
            duration: "60 sec per leg",
            notes: "Relieves tight calves"
          },
          {
            section: "Lower Body",
            name: "Hamstring Stretch",
            duration: "60 sec per leg",
            notes: "Loosens hamstrings"
          },
          {
            section: "Lower Body",
            name: "Standing Quad Stretch",
            duration: "60 sec per leg",
            notes: "Relaxes quads after running"
          },
          {
            section: "Lower Body",
            name: "Hip Flexor Stretch",
            duration: "60 sec per leg",
            notes: "Releases hips post-run"
          },
          {
            section: "Glutes & Hips",
            name: "Glute Stretch",
            duration: "60 sec per leg",
            notes: "Stretches gluteal muscles"
          },
          {
            section: "Spine & Core",
            name: "Lying Spinal Twist",
            duration: "60 sec per side",
            notes: "Improves spinal rotation"
          },
          {
            section: "Mind & Body",
            name: "Child’s Pose / Deep Breathing",
            duration: "2 minutes",
            notes: "Promotes recovery and calm"
          }
        ]
      }
    }
  });
}

main()
  .then(() => {
    console.log("Seeding complete");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
