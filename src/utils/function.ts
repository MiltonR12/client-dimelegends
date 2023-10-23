import { Battle } from "@/types/interfaces";

interface BattleTime extends Battle {
  battleID: string;
}

export const compareTo = (palabra: string, buscardor: string) => {
  const palabraB = palabra.toLowerCase().trim();
  const buscardorB = buscardor.toLowerCase().trim();
  return palabraB.includes(buscardorB);
};

export const orderByPhase = (data: BattleTime[]) => {
  let max = 0;
  data.forEach((elem) => {
    if (elem.battlephase > max) {
      max = elem.battlephase;
    }
  });
  const arrayPhase = [];
  for (let i = 1; i < max + 1; i++) {
    const newArray = data.filter((item) => item.battlephase === i);
    arrayPhase.push(newArray);
  }
  return arrayPhase;
};
