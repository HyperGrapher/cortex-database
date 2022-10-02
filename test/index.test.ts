import { CortexDatabase } from '../src/index';

describe('CortexDatabase Test Suite', () => {
  const db = new CortexDatabase();
  const obj = { my_key: 'my value' };
  db.set('my-key', 'my-value');
  db.set('obj', obj);

  it('set and get expected string value', () => {
    expect(db.get('my-key')).toBe('my-value');
  });

  it('set an object and get expected object back', () => {
    expect(db.get('obj')).toMatchObject(obj);
  });

  it('get undefined after clearing store', () => {
    db.clear()
    expect(db.get('obj')).toBe(undefined);
    expect(db.get('my-key')).toBe(undefined);
  });
});
