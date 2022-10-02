import { parseJson } from '../src/utils/parse_json';

describe('parse string', () => {
  it('assert given string is correctly parsed', () => {
    const str = '{"test": "me"}';
    const expected = { test: 'me' };
    expect(parseJson('my-key', str)).toMatchObject(expected);
  });
});
