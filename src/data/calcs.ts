import { Groups } from "./picks";
import { VotedOut } from "./season";

/**
 * determine if a group exists
 * @param groupName the name of a group
 * @returns true if the group exists
 */
export const isValidGroup = (groupName: string) => Groups.has(groupName);

export interface PlayerCurrentStandings {
  name: string;
  score: number;
}

export function getCurrentStandings(groupName: string): PlayerCurrentStandings[] {
  const groupData = Groups.get(groupName);
  if (!groupData) {
    return [];
  }

  const results: PlayerCurrentStandings[] = [];
  groupData.forEach((playerData) => {
    let score = 0;
    VotedOut.forEach((castaway: string, index: number) => {
      if (castaway === playerData.orderVotedOut[index]) {
        score += 1;
      }
    });

    results.push({
      name: playerData.name,
      score: score,
    });
  });

  return results;
}
