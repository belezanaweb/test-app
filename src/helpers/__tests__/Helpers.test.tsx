import { formatPrice, stripSpecialChars, stripHTMLTags } from '../Helpers';

describe('Helpers', () => {
  test('should format price', async () => {
    const brl = formatPrice('BRL', 19.90);
    const usd = formatPrice('USD', 19.90);
    const emptyCurrency = formatPrice('', 19.90);

    expect(brl).toBe('R$ 19,90');
    expect(usd).toBe('$ 19.90');
    expect(emptyCurrency).toBe('$ 19.90');
  });

  test('should strip special chars', async () => {
    const str = stripSpecialChars("#string#");

    expect(str).toBe('string');
  });

  test('should strip html tags', async () => {
    const str = stripHTMLTags("<b>test</b>");

    expect(str).toBe('test');
  });
});
