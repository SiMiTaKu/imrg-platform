import {describe, expect, test} from '@jest/globals';
import {designOfPC, designOfSP, getResponsiveDesign} from "../src/ts/common/responsive-design";

describe('test getResponsiveDesign', () => {
  test.each([
    {
      text: 'widthの値が400以下の場合：SPのデザインが返る',
      width: 400,
      expect: designOfSP,
    },
    {
      text: 'widthの値が400より大きい場合：PCのデザインが返る',
      width: 401,
      expect: designOfPC,
    },
  ])('正常系テスト： %s', (props) => {
    const result = getResponsiveDesign(props.width);
    expect(result).toBe(props.expect);
  });
});