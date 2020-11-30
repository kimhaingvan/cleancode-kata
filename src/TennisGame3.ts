import { TennisGame } from './TennisGame';

const SCORE = ['Love', 'Fifteen', 'Thirty', 'Forty'];
export class TennisGame3 implements TennisGame {
  private p2: number = 0;
  private p1: number = 0;
  private p1N: string;
  private p2N: string;

  constructor(p1N: string, p2N: string) {
    this.p1N = p1N;
    this.p2N = p2N;
  }

  isEqual() {
    return this.p1 === this.p2;
  }

  isAdvantage() {
    return ((this.p1 - this.p2) * (this.p1 - this.p2)) === 1;
  }
  getScore(): string {
    let s: string;
    if (this.p1 < 4 && this.p2 < 4 && !(this.p1 + this.p2 === 6)) {
      s = SCORE[this.p1];
      return this.isEqual() ? s + '-All' : s + '-' + SCORE[this.p2];
    }
    else {
      if (this.isEqual()) return 'Deuce';
      s = this.p1 > this.p2 ? this.p1N : this.p2N;
      return this.isAdvantage() ? 'Advantage ' + s : 'Win for ' + s;
    }
  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.p1 += 1;
    else
      this.p2 += 1;
  }
}
