import { describe, expect, test } from '@jest/globals'
import { designOfPC, designOfSP, getResponsiveDesign } from '$lib/common/responsive-design'

describe('test getResponsiveDesign', () => {
  test.each([
    [
      'widthの値が500以下の場合：SPのデザインが返る',
      {
        width: 500,
        expect: designOfSP,
      },
    ],
    [
      'widthの値が500より大きい場合：PCのデザインが返る',
      {
        width: 501,
        expect: designOfPC,
      },
    ],
  ])(
    '正常系テスト：%s',
    (
      _,
      // UnResolveになるため型を宣言している。
      // expectが、testフレームワークの関係でsymbol型として判定されてしまうため、anyにしている
      params: { width: number; expect: any }, // eslint-disable-line @typescript-eslint/no-explicit-any
    ) => {
      const result = getResponsiveDesign(params.width)
      expect(result).toBe(params.expect)
    },
  )
})
