import color from '../color'
import generator from "../util/generator";
import theme from "./fixtures/testConfigHandler"

test('custom_colors', () => {
    const result = generator.generate('text', 'color', generator.generateColors(theme.colors));

    expect(result).toEqual(require('./fixtures/outputs/adjustible/custom-color-output'));
});

test('custom_fonts', () => {
    const result = generator.generate('font', 'fontFamily', theme.fontFamily);

    expect(result).toEqual(require('./fixtures/outputs/adjustible/custom-font-output'));
});

test('custom_margin', () => {
    const result = generator.generate('m', 'margin', theme.margin, [
        ['x', 'marginHorizontal'],
        ['y', 'marginVertical'],
        ['t', 'marginTop'],
        ['r', 'marginRight'],
        ['b', 'marginBottom'],
        ['l', 'marginLeft'],
    ]);

    expect(result).toEqual(require('./fixtures/outputs/adjustible/custom-margin-output'));
});