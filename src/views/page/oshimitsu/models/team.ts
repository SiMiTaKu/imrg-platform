/** チームを表すオブジェクト */
export class TeamResource {
  /** ID */
  id: number
  /** 名前 */
  name: string
  /** 名前(かな） */
  nameKana: string

  constructor(id: number, name: string, nameKana: string) {
    this.id = id
    this.name = name
    this.nameKana = nameKana
  }
}
