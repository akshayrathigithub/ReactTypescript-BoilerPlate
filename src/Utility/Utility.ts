export class Utility {
  static deepClone(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
  }
}
