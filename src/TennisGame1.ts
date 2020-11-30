import { TennisGame } from './TennisGame';

const SCORE_WHEN_DRAW = {
  0: 'Love-All',
  1: 'Fifteen-All',
  2: 'Thirty-All',
}

const SCORE_BEFORE_DEUCE = {
  0: 'Love',
  1: 'Fifteen',
  2: 'Thirty',
  3: 'Forty'
}
const SCORE_AFTER_DEUCE = {
  equalOne: 'Advantage player1',
  equalMinusOne: 'Advantage player2',
  biggerOne: 'Win for player1',
  smallerMinusOne: 'Win for player2',
}

export class TennisGame1 implements TennisGame {
  private m_score1: number = 0;
  private m_score2: number = 0;
  private player1Name: string;
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.m_score1 += 1;
    else
      this.m_score2 += 1;
  }

  getScoreAfterDeuce(): string {
    const minusResult: number = this.m_score1 - this.m_score2;
    let score_title = '';
    if (minusResult === 1) score_title = 'equalOne';
    else if (minusResult === -1) score_title = 'equalMinusOne';
    else if (minusResult >= 2) score_title = 'biggerOne';
    else score_title = 'smallerMinusOne';
    return SCORE_AFTER_DEUCE[score_title];
  }

  getScoreBeforeDeuce(): string {
    let tempScore = 0;
    let score = '';
    for (let i = 1; i < 3; i++) {
      if (i === 1) tempScore = this.m_score1;
      else { score += '-'; tempScore = this.m_score2; }
      score += SCORE_BEFORE_DEUCE[tempScore];
    }
    return score;
  }

  getScoreWhenDraw(): string {
    return  SCORE_WHEN_DRAW[this.m_score1] || 'Deuce';
  }

  getScore(): string {
    if (this.m_score1 === this.m_score2) {
      return this.getScoreWhenDraw();
    }
    else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
      return this.getScoreAfterDeuce()
    }
    else {
      return this.getScoreBeforeDeuce();
    }
  }
}
