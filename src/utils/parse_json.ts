export function parseJson(key: string, value: string): any {
  try {
    return JSON.parse(value);
  } catch (err) {
    throw new SyntaxError(`Failed to parse value of ${key}`);
  }
}
