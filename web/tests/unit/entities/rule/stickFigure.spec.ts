import { describe, expect, it } from 'vitest'
import { STICK_SEQUENCES, STICK_SKELETONS, StickPose, poseOf, sequenceOf } from '@entities/rule'

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

describe('sequenceOf', () => {
  describe('正常系', () => {
    it('技名が「前方（かかえ込み・屈身）宙返り」の場合、踏み切りから着地までのコマ送りになること', () => {
      // #region Given
      const techniqueName = '前方（かかえ込み・屈身）宙返り'
      // #endregion

      // #region When
      const frames = sequenceOf(techniqueName)
      // #endregion

      // #region Then
      expect(frames).toEqual([
        StickPose.RUN_UP,
        StickPose.TAKEOFF,
        StickPose.FRONT_SALTO,
        StickPose.SALTO_OPEN,
        StickPose.LANDING,
        StickPose.STAND,
      ])
      // #endregion
    })

    it('技名が「後方倒立回転（両手）」の場合、反ってから倒立を通り着地するコマ送りになること', () => {
      // #region Given
      const techniqueName = '後方倒立回転（両手）'
      // #endregion

      // #region When
      const frames = sequenceOf(techniqueName)
      // #endregion

      // #region Then
      expect(frames).toEqual([
        StickPose.STAND,
        StickPose.ARCH_STAND,
        StickPose.HANDSTAND,
        StickPose.BACK_HANDSPRING,
        StickPose.LANDING,
      ])
      // #endregion
    })

    it('技名が「開脚跳び　135°～180°」の場合、助走から着地までのコマ送りになること', () => {
      // #region Given
      const techniqueName = '開脚跳び　135°～180°'
      // #endregion

      // #region When
      const frames = sequenceOf(techniqueName)
      // #endregion

      // #region Then
      expect(frames).toEqual([
        StickPose.RUN_UP,
        StickPose.TAKEOFF,
        StickPose.SPLIT_JUMP,
        StickPose.LANDING,
      ])
      // #endregion
    })

    it('技名が「正面水平立ち」の場合、止めて見せる技なので1コマだけになること', () => {
      // #region Given
      const techniqueName = '正面水平立ち'
      // #endregion

      // #region When
      const frames = sequenceOf(techniqueName)
      // #endregion

      // #region Then
      expect(frames).toEqual([StickPose.HORIZONTAL_BALANCE])
      // #endregion
    })

    it('技名が「長座になり体前屈（顔が足につく）」の場合、柔軟なので1コマだけになること', () => {
      // #region Given
      const techniqueName = '長座になり体前屈（顔が足につく）'
      // #endregion

      // #region When
      const frames = sequenceOf(techniqueName)
      // #endregion

      // #region Then
      expect(frames).toEqual([StickPose.FORWARD_BEND])
      // #endregion
    })

    it('技名が「片足軸ターン　360度」の場合、同じ姿勢が3コマ並ぶこと', () => {
      // #region Given
      const techniqueName = '片足軸ターン　360度'
      // #endregion

      // #region When
      const frames = sequenceOf(techniqueName)
      // #endregion

      // #region Then
      expect(frames).toEqual([StickPose.PIVOT, StickPose.PIVOT, StickPose.PIVOT])
      // #endregion
    })

    it('技名が「倒立ターン　1080度」の場合、回転の数だけ倒立が5コマ並ぶこと', () => {
      // #region Given
      const techniqueName = '倒立ターン　1080度'
      // #endregion

      // #region When
      const frames = sequenceOf(techniqueName)
      // #endregion

      // #region Then
      expect(frames).toEqual(Array.from({ length: 5 }, () => StickPose.HANDSTAND))
      // #endregion
    })

    it('技名が「後転倒立」の場合、倒立1コマではなく後へ転がって押し上げるコマ送りになること', () => {
      // #region Given
      const techniqueName = '後転倒立'
      // #endregion

      // #region When
      const frames = sequenceOf(techniqueName)
      // #endregion

      // #region Then
      expect(frames).toEqual([
        StickPose.STAND,
        StickPose.CROUCH,
        StickPose.BACKWARD_ROLL,
        StickPose.HANDSTAND,
      ])
      // #endregion
    })

    it('技名が「脚前挙支持～伸腕屈身力倒立」の場合、支持から押し上げて倒立になるコマ送りになること', () => {
      // #region Given
      const techniqueName = '脚前挙支持～伸腕屈身力倒立'
      // #endregion

      // #region When
      const frames = sequenceOf(techniqueName)
      // #endregion

      // #region Then
      expect(frames).toEqual([StickPose.L_SUPPORT, StickPose.PIKE_STAND, StickPose.HANDSTAND])
      // #endregion
    })

    it('技名が「後方ブリッヂから倒立」の場合、反ってブリッヂを通るコマ送りになること', () => {
      // #region Given
      const techniqueName = '後方ブリッヂから倒立'
      // #endregion

      // #region When
      const frames = sequenceOf(techniqueName)
      // #endregion

      // #region Then
      expect(frames).toEqual([
        StickPose.STAND,
        StickPose.ARCH_STAND,
        StickPose.BRIDGE,
        StickPose.HANDSTAND,
      ])
      // #endregion
    })

    it('技名が「後方倒立回転から正面水平立ち」の場合、終わりのコマが水平立ちになること', () => {
      // #region Given
      const techniqueName = '後方倒立回転から正面水平立ち'
      // #endregion

      // #region When
      const frames = sequenceOf(techniqueName)
      // #endregion

      // #region Then
      expect(frames.at(-1)).toBe(StickPose.HORIZONTAL_BALANCE)
      // #endregion
    })

    it('動きのある技を並べた場合、どれも2コマ以上で描かれること', () => {
      // #region Given
      const techniqueNames = [
        'かかえこみとび',
        'とびあがって1回以上のひねり（片足・両足）',
        'バタフライ',
        '側方倒立回転',
        'テンポ宙返り',
        '後方肩支持からローリング',
        '首はねおき、頭はねおき（直立・膝立ち）',
        '開脚旋回（トーマス旋回）',
      ]
      // #endregion

      // #region When
      const frameCounts = techniqueNames.map((name) => sequenceOf(name).length)
      // #endregion

      // #region Then
      expect(frameCounts.every((count) => count >= 2)).toBe(true)
      // #endregion
    })

    it('コマの並びを引いた場合、どのコマにも骨組みが用意されていること', () => {
      // #region Given
      const techniqueNames = [
        '前方（かかえ込み・屈身）宙返り',
        '後転とび',
        '前とび倒立',
        '後ろとび正面支持臥',
        '前方（かかえ込み・屈身）宙返り直接正面支持臥',
        '足を保持しない1',
      ]
      // #endregion

      // #region When
      const skeletons = techniqueNames.flatMap((name) =>
        sequenceOf(name).map((pose) => STICK_SKELETONS[pose]),
      )
      // #endregion

      // #region Then
      expect(skeletons.every((skeleton) => skeleton?.legs.length === 2)).toBe(true)
      // #endregion
    })
  })
})

describe('STICK_SEQUENCES', () => {
  describe('正常系', () => {
    it('姿勢を数えた場合、どの姿勢にもコマの並びが1つずつ用意されていること', () => {
      // #region Given
      const poses = Object.values(StickPose)
      // #endregion

      // #region When
      const sequenced = poses.filter((pose) => STICK_SEQUENCES[pose] !== undefined)
      // #endregion

      // #region Then
      expect(sequenced).toHaveLength(poses.length)
      // #endregion
    })

    it('コマの並びを調べた場合、どれも鍵にした姿勢を山場として含んでいること', () => {
      // #region Given
      const poses = Object.values(StickPose)
      // #endregion

      // #region When
      const missing = poses.filter((pose) => !STICK_SEQUENCES[pose].includes(pose))
      // #endregion

      // #region Then
      expect(missing).toHaveLength(0)
      // #endregion
    })

    it('コマの数を調べた場合、どれも1コマ以上で、冊子と同じ8コマまでに収まっていること', () => {
      // #region Given
      const sequences = Object.values(STICK_SEQUENCES)
      // #endregion

      // #region When
      const outOfRange = sequences.filter((sequence) => sequence.length < 1 || sequence.length > 8)
      // #endregion

      // #region Then
      expect(outOfRange).toHaveLength(0)
      // #endregion
    })
  })
})
