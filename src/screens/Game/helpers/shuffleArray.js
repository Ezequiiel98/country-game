const shuffleArray = (array = [], shuffleTimes = 1) => {
  const list = [...array];

  if (Math.random() > 0.5) {
    list.sort();
  } else {
    list.reverse();
  }

  for (let i = 0; i < shuffleTimes; i++) {
    for (let j = 0; j < list.length; j++) {
      const indexRandom = Math.floor(Math.random() * list.length);
      const itemTemp = list[j];

      list[j] = list[indexRandom];
      list[indexRandom] = itemTemp;
    }
  }

  return list;
};

export default shuffleArray;
