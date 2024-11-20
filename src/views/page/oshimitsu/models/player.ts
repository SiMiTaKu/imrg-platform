/** 選手を表すオブジェクト */
export interface Player {
  /** ID */
  id: number;
  /** 名前 */
  name: string;
  /** 名前(かな） */
  nameKana: string;
  /** 所属したチーム */
  belongTeam: number[];
}
