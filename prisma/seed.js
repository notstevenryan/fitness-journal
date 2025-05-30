const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.routines.create({
    data: {
      title: 'Squat - Barbell',
      notes: 'Experiment with the stance to see what feels most comfortable. Aim to get your thighs parallel to the floor and pause briefly at the bottom to limit the assistance from the stretch reflex. Front squats and leg presses are good alternatives.',
      equipment: 'Barbell',
      unoMuscleGroup: 'Quadriceps',
      dosMuscleGroup: 'Hamstrings, Glutes',
      sets: 4,
      repsMin: 6,
      repsMax: 10,
      restSeconds: 120,
    },
  });
}

main().finally(() => prisma.$disconnect());
