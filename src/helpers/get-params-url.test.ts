import { getParamsUrl } from './get-params-url';

describe('Test helper getParamsUrl', () => {
  test('get param id', () => {
    const params = getParamsUrl('id', 'https://www.test.com?id=hola');

    expect(params).toBe('hola');
  });

  test('Should return null if null value', () => {
    const params = getParamsUrl(null);

    expect(params).toBe(null);
  });

  test('Should error', () => {
    const params = getParamsUrl('esto no es una url');

    expect(params).toBe(null);
  });
});
