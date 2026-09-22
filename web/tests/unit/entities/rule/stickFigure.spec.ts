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

    it('技名が「もぐり回転」の場合、片手で体をくぐらせる側方倒立回転になること', () => {
      // #region Given
      const techniqueName = 'もぐり回転'
      // #endregion

      // #region When
      const pose = poseOf(techniqueName)
      // #endregion

      // #region Then
      expect(pose).toBe(StickPose.CARTWHEEL)
      // #endregion
    })

    it('技名に「前転とび」が入っている場合、前転ではなく前方倒立回転になること', () => {
      // #region Given
      const techniqueName = '前転とび、両足踏切前転とび'
      // #endregion

      // #region When
      const pose = poseOf(techniqueName)
      // #endregion

      // #region Then
      expect(pose).toBe(StickPose.FRONT_HANDSPRING)
      // #endregion
    })

    it('技名が「後転とび」の場合、後転ではなく後方倒立回転になること', () => {
      // #region Given
      const techniqueName = '後転とび'
      // #endregion

      // #region When
      const pose = poseOf(techniqueName)
      // #endregion

      // #region Then
      expect(pose).toBe(StickPose.BACK_HANDSPRING)
      // #endregion
    })

    it('技名が「後方倒立回転～倒立」の場合、終わりの姿勢である倒立になること', () => {
      // #region Given
      const techniqueName = '後方倒立回転～倒立'
      // #endregion

      // #region When
      const pose = poseOf(techniqueName)
      // #endregion

      // #region Then
      expect(pose).toBe(StickPose.HANDSTAND)
      // #endregion
    })

    it('技名が「後方倒立回転から前後開脚座位」の場合、終わりの姿勢である開脚座になること', () => {
      // #region Given
      const techniqueName = '後方倒立回転から前後開脚座位'
      // #endregion

      // #region When
      const pose = poseOf(techniqueName)
      // #endregion

      // #region Then
      expect(pose).toBe(StickPose.SPLIT_SIT)
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

    it('技名が「テンポ宙返り」の場合、丸めずに反る伸身宙返りになること', () => {
      // #region Given
      const techniqueName = 'テンポ宙返り'
      // #endregion

      // #region When
      const pose = poseOf(techniqueName)
      // #endregion

      // #region Then
      expect(pose).toBe(StickPose.LAYOUT_SALTO)
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

    it('技名に「足保持」が入っている場合、横バランスより足を持つバランスが優先されること', () => {
      // #region Given
      const techniqueName = '横バランス　足保持　180度以上'
      // #endregion

      // #region When
      const pose = poseOf(techniqueName)
      // #endregion

      // #region Then
      expect(pose).toBe(StickPose.SPLIT_BALANCE)
      // #endregion
    })

    it('技名に「足を保持しない」が入っている場合、足を持たない横バランスになること', () => {
      // #region Given
      const techniqueName = '横バランス\n足を保持しない　180度以上'
      // #endregion

      // #region When
      const pose = poseOf(techniqueName)
      // #endregion

      // #region Then
      expect(pose).toBe(StickPose.SIDE_BALANCE)
      // #endregion
    })

    it('技名に「背面」が入っている場合、背面水平立ちになること', () => {
      // #region Given
      const techniqueName = '背面水平立ち'
      // #endregion

      // #region When
      const pose = poseOf(techniqueName)
      // #endregion

      // #region Then
      expect(pose).toBe(StickPose.BACK_BALANCE)
      // #endregion
    })

    it('技名に「開脚」と「屈身」と「とび」が入っている場合、左右に開く開脚屈身とびになること', () => {
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

    it('技名に「開脚」と「跳び」が入っていて屈身が無い場合、前後に開く開脚跳びになること', () => {
      // #region Given
      const techniqueName = '開脚跳び　135°～180°'
      // #endregion

      // #region When
      const pose = poseOf(techniqueName)
      // #endregion

      // #region Then
      expect(pose).toBe(StickPose.SPLIT_JUMP)
      // #endregion
    })

    it('技名が「閉脚屈身とび」の場合、両脚をそろえて折る屈身とびになること', () => {
      // #region Given
      const techniqueName = '閉脚屈身とび'
      // #endregion

      // #region When
      const pose = poseOf(techniqueName)
      // #endregion

      // #region Then
      expect(pose).toBe(StickPose.PIKE_JUMP)
      // #endregion
    })

    it('技名に「頭一足」が入っている場合、反りジャンプではなく頭と足がつく反りになること', () => {
      // #region Given
      const techniqueName = '反りジャンプ　頭一足'
      // #endregion

      // #region When
      const pose = poseOf(techniqueName)
      // #endregion

      // #region Then
      expect(pose).toBe(StickPose.RING_JUMP)
      // #endregion
    })

    it('技名に「旋回」が入っている場合、倒立より開脚旋回が優先されること', () => {
      // #region Given
      const techniqueName = '開脚旋回倒立'
      // #endregion

      // #region When
      const pose = poseOf(techniqueName)
      // #endregion

      // #region Then
      expect(pose).toBe(StickPose.FLAIR)
      // #endregion
    })

    it('技名に「ターン」が入っている場合、片足軸ターンになること', () => {
      // #region Given
      const techniqueName = '片足軸ターン　720度'
      // #endregion

      // #region When
      const pose = poseOf(techniqueName)
      // #endregion

      // #region Then
      expect(pose).toBe(StickPose.PIVOT)
      // #endregion
    })

    it('技名が「鹿倒立」の場合、片脚を折る鹿倒立になること', () => {
      // #region Given
      const techniqueName = '鹿倒立'
      // #endregion

      // #region When
      const pose = poseOf(techniqueName)
      // #endregion

      // #region Then
      expect(pose).toBe(StickPose.DEER_HANDSTAND)
      // #endregion
    })

    it('技名に「前挙支持」が入っている場合、倒立より脚前挙支持が優先されること', () => {
      // #region Given
      const techniqueName = '脚前挙支持～伸腕屈身力倒立'
      // #endregion

      // #region When
      const pose = poseOf(techniqueName)
      // #endregion

      // #region Then
      expect(pose).toBe(StickPose.L_SUPPORT)
      // #endregion
    })

    it('技名に「はね起き」が入っている場合、首はねおきになること', () => {
      // #region Given
      const techniqueName = '頭はねおき直立\n首はね起き直立'
      // #endregion

      // #region When
      const pose = poseOf(techniqueName)
      // #endregion

      // #region Then
      expect(pose).toBe(StickPose.NECK_KIP)
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
      const techniqueNames = [
        'バタフライ',
        'テンポ宙返り',
        '後方肩支持からローリング',
        '前後開脚180度仰臥位',
        '首はねおき、頭はねおき（直立・膝立ち）',
        '開脚旋回（トーマス旋回）',
      ]
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

describe('STICK_SKELETONS', () => {
  describe('正常系', () => {
    it('姿勢を数えた場合、どの姿勢にも骨組みが1つずつ用意されていること', () => {
      // #region Given
      const poses = Object.values(StickPose)
      // #endregion

      // #region When
      const drawnPoses = poses.filter((pose) => STICK_SKELETONS[pose] !== undefined)
      // #endregion

      // #region Then
      expect(drawnPoses).toHaveLength(poses.length)
      // #endregion
    })

    it('骨組みを調べた場合、腕と脚が2本ずつ、それぞれ3つの関節で描かれていること', () => {
      // #region Given
      const skeletons = Object.values(STICK_SKELETONS)
      // #endregion

      // #region When
      const wellFormed = skeletons.every(
        (skeleton) =>
          skeleton.arms.length === 2 &&
          skeleton.legs.length === 2 &&
          [...skeleton.arms, ...skeleton.legs].every((limb) => limb.length === 3) &&
          skeleton.spine.length >= 2,
      )
      // #endregion

      // #region Then
      expect(wellFormed).toBe(true)
      // #endregion
    })

    it('関節の位置を調べた場合、どれも viewBox の 0〜100 に収まっていること', () => {
      // #region Given
      const skeletons = Object.values(STICK_SKELETONS)
      // #endregion

      // #region When
      const outOfFrame = skeletons.flatMap((skeleton) =>
        [skeleton.head, ...skeleton.spine, ...skeleton.arms.flat(), ...skeleton.legs.flat()].filter(
          (point) => point.x < 0 || point.x > 100 || point.y < 0 || point.y > 100,
        ),
      )
      // #endregion

      // #region Then
      expect(outOfFrame).toHaveLength(0)
      // #endregion
    })
  })
})
