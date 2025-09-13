export const JaggedKnifeKneebreaker = {
  name: "JAGGED KNIFE KNEEBREAKER",
  tier: 1,
  type: "Bruiser",
  desc: "An imposing brawler carrying a large club.",
  motives: "Grapple, intimidate, profit, steal",
  difficulty: 12,
  thresholds: [7, 14],
  hp: 7,
  stress: 4,
  atk: "−3",
  weapon: { wpnName: "Club", wpnRange: "Melee", wpnDamage: "1d4+6 phy" },
  experiences: ["Thief +2", "Unveiled Threats +3"],
  features: [
    {
      name: "I’ve Got ’Em",
      type: "Passive",
      text: "Creatures Restrained by the Kneebreaker take double damage from attacks by other adversaries.",
    },
    {
      name: "Hold Them Down",
      type: "Action",
      text: "Make an attack against a target within Melee range. On a success, the target takes no damage but is Restrained and Vulnerable. The target can break free, clearing both conditions, with a successful Strength Roll or is freed automatically if the Kneebreaker takes Major or greater damage.",
    },
  ],
};
