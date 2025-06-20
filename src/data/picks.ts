export interface Picks {
  name: string;
  orderVotedOut: string[];
}

export interface Group {
  groupName: string;
  Picks: Picks[];
}

export const Groups = new Map<string, Picks[]>([
  [
    "ZakFriends",
    [
      { name: "Trevor", orderVotedOut: ["Kevin", "Stacey", "Will", "Fred", "Donna", "Ron"] },
      { name: "Kyle", orderVotedOut: ["Fred", "Will", "Donna", "Ron", "Kevin", "Stacey"] },
      { name: "Jared", orderVotedOut: ["Will", "Donna", "Ron", "Kevin", "Fred", "Stacey"] },
      { name: "Sydney", orderVotedOut: ["Ron", "Kevin", "Fred", "Stacey", "Will", "Donna"] },
    ],
  ],
]);
