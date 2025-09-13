export const BladedGuard = {
  name: "BLADED GUARD",
  tier: 1,
  type: "Standard",
  desc: "An armored guard bearing a sword and shield painted in the settlement’s colors.",
  motives: "Arrest, close gates, make it through the day, pin down",
  difficulty: 12,
  thresholds: [5, 9],
  hp: 5,
  stress: 2,
  atk: "+1",
  weapon: { wpnName: "Longsword", wpnRange: "Melee", wpnDamage: "1d6+1 phy" },
  experiences: ["Local Knowledge +3"],
  features: [
    {
      name: "Shield Wall",
      type: "Passive",
      text: "A creature who tries to move within Very Close range of the Guard must succeed on an Agility Roll. If additional Bladed Guards are standing in a line alongside the fi rst, and each is within Melee range of another guard in the line, the Difficulty increases by the total number of guards in that line.",
    },
    {
      name: "Detain",
      type: "Action",
      text: "Make an attack against a target within Very Close range. On a success, mark a Stress to Restrain the target until they break free with a successful attack, Finesse Roll, or Strength Roll.",
    },
  ],
};
