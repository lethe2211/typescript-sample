export default class Calc {
  constructor(
    private origin: number,
  ) {
    this.origin = origin;
  }

  plus(a: number): number {
    return this.origin + a;
  }
}
