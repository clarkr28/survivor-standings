import { Groups } from "./picks";
import { AllCastaways, VotedOut } from "./season";

/**
 * determine if a group exists
 * @param groupName the name of a group
 * @returns true if the group exists
 */
export const isValidGroup = (groupName: string) => Groups.has(groupName);

export interface PlayerResults {
  name: string;
  weeklyScore: number[];
}

export function getStandings(groupName: string): PlayerResults[] {
  const groupData = Groups.get(groupName);
  if (!groupData) {
    return [];
  }

  const results = groupData.map((playerData) => {
    const actualCastawaysLeft = new Set<string>(AllCastaways);
    const guessedCastawaysLeft = new Set<string>(AllCastaways);

    let weeklyScore: number[] = [];
    VotedOut.forEach((castaway: string, index: number) => {
      let score = 0;

      // bonus for correctly guessing who gets voted out
      if (castaway === playerData.orderVotedOut[index]) {
        score += 5;
      }

      actualCastawaysLeft.delete(castaway);
      guessedCastawaysLeft.delete(playerData.orderVotedOut[index]);
      // points for how many castaways the player correctly has still in the game
      guessedCastawaysLeft.forEach((key) => {
        if (actualCastawaysLeft.has(key)) {
          score += 1 * index;
        }
      });

      const previousScore = weeklyScore.length ? weeklyScore[weeklyScore.length - 1] : 0;
      weeklyScore.push(previousScore + score);
    });

    const result: PlayerResults = {
      name: playerData.name,
      weeklyScore: weeklyScore,
    };
    return result;
  });

  // sort highest score to lowest score
  results.sort((a, b) => b.weeklyScore[b.weeklyScore.length - 1] - a.weeklyScore[a.weeklyScore.length - 1]);

  return results;
}
