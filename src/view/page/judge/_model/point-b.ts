export type PointB = {
  droppedApparatus: {
    singleApparatus: { value: number }; // 1つの手具を落とした回数
    doubleApparatus: { value: number }; // 2つの手具(リング、クラブ）を同時に落とした回数
  };
  miss: {
    title: string;
    value: number | undefined;
  };
};

export const PointB = {
  init(): PointB {
    return {
      droppedApparatus: {
        singleApparatus: { value: 0 },
        doubleApparatus: { value: 0 },
      },
      miss: { title: "その他ミスによる減点", value: undefined },
    };
  },
};
