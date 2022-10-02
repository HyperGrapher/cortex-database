import { ICortextDB } from './interfaces/cortex.interface';
import { parseJson } from './utils/parse_json';

export class CortexDatabase {
  private store: ICortextDB;

  constructor() {
    this.store = {} as ICortextDB;
  }

  set(key: string, value: any): void {
    const strValue = JSON.stringify(value);
    const index = key as keyof ICortextDB;
    this.store[index] = strValue;
  }

  get(key: string): any {
    const index = key as keyof ICortextDB;
    if (!this.store[index]) {
      return undefined;
    }
    return parseJson(key, this.store[index] as string);
  }

  clear(): void {
    this.store = {};
  }
}
