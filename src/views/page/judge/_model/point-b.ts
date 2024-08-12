export type PointB = {
  droppedApparatus: {
    single: number; // 1つの手具を落とした回数
    double: number; // 2つの手具(リング、クラブ）を同時に落とした回数
  };
  miss: number;
};

export const PointB = {
  init(): PointB {
    return {
      droppedApparatus: {
        single: 0,
        double: 0,
      },
      miss: 0,
    }
  },
}
