import { describe, expect, it } from 'vitest'
import { STICK_SKELETONS, StickPose, poseOf } from '@entities/rule'

describe('poseOf', () => {
  describe('正常系', () => {
    it('技名に「倒立」が入っている場合、倒立の姿勢になること', () => {
      // #region Given
      const techniqueName = '閉脚（開脚）倒立'
      // #endregion

      // #region When
      const pose = poseOf(techniqueName)
      // #endregion

      // #region Then
      expect(pose).toBe(StickPose.HANDSTAND)
      // #endregion
    })

    it('技名に「側方倒立回転」が入っている場合、倒立ではなく側方倒立回転になること', () => {
      // #region Given
      const techniqueName = '側方倒立回転1／4ひねり（ロンダード）'
      // #endregion

      // #region When
      const pose = poseOf(techniqueName)
      // #endregion

      // #region Then
      expect(pose).toBe(StickPose.CARTWHEEL)
      // #endregion
    })

    it('技名に「後方」と「宙返り」が入っている場合、後方宙返りになること', () => {
      // #region Given
      const techniqueName = '後転とびから後方伸身宙返り'
      // #endregion

      // #region When
      const pose = poseOf(techniqueName)
      // #endregion

      // #region Then
      expect(pose).toBe(StickPose.BACK_SALTO)
      // #endregion
    })

    it('技名に「前方」と「宙返り」が入っている場合、跳び方の言葉より宙返りが優先されること', () => {
      // #region Given
      const techniqueName = '後ろとびひねり前方宙返り（かかえ込み・屈身・伸身）'
      // #endregion

      // #region When
      const pose = poseOf(techniqueName)
      // #endregion

      // #region Then
      expect(pose).toBe(StickPose.FRONT_SALTO)
      // #endregion
    })

    it('技名に「平均立ち」が入っている場合、バランスの姿勢になること', () => {
      // #region Given
      const techniqueName = '足を保持した180°開脚片足平均立ち'
      // #endregion

      // #region When
      const pose = poseOf(techniqueName)
      // #endregion

      // #region Then
      expect(pose).toBe(StickPose.SPLIT_BALANCE)
      // #endregion
    })

    it('技名に「開脚」と「とび」が入っている場合、開脚跳びになること', () => {
      // #region Given
      const techniqueName = '開脚屈身とび'
      // #endregion

      // #region When
      const pose = poseOf(techniqueName)
      // #endregion

      // #region Then
      expect(pose).toBe(StickPose.STRADDLE_JUMP)
      // #endregion
    })

    it('技名に「開脚座」と「前屈」が両方入っている場合、前屈になること', () => {
      // #region Given
      const techniqueName = '左右開脚座で体前屈（胸が床面につく）'
      // #endregion

      // #region When
      const pose = poseOf(techniqueName)
      // #endregion

      // #region Then
      expect(pose).toBe(StickPose.FORWARD_BEND)
      // #endregion
    })

    it('どの言葉にも当てはまらない場合、直立になること', () => {
      // #region Given
      const techniqueName = '足を保持しない1'
      // #endregion

      // #region When
      const pose = poseOf(techniqueName)
      // #endregion

      // #region Then
      expect(pose).toBe(StickPose.STAND)
      // #endregion
    })

    it('姿勢を選んだ場合、その姿勢の骨組みが必ず用意されていること', () => {
      // #region Given
      const techniqueNames = ['バタフライ', 'テンポ宙返り', 'ローリング', '仰臥位', '首はねおき']
      // #endregion

      // #region When
      const skeletons = techniqueNames.map((name) => STICK_SKELETONS[poseOf(name)])
      // #endregion

      // #region Then
      expect(skeletons.every((skeleton) => skeleton.legs.length === 2)).toBe(true)
      // #endregion
    })
  })
})
