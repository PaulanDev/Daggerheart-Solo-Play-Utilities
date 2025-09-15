export const PirateTough = {
  name: "PIRATE TOUGH",
  tier: 1,
  type: "Bruiser",
  desc: "A thickly muscled and tattooed pirate with melon-sized fists.",
  motives: "Plunder, raid, smash, terrorize",
  difficulty: 13,
  thresholds: [8, 15],
  hp: 5,
  stress: 3,
  atk: "+1",
  weapon: { wpnName: "Massive Fists", wpnRange: "Melee", wpnDamage: "2d6 phy" },
  experiences: ["Sailor +2"],
  features: [
    {
      name: "Swashbuckler",
      type: "Passive",
      text: "When the Tough marks 2 or fewer HP from an attack within Melee range, the attacker must mark a Stress.",
    },
    {
      name: "Clear the Decks",
      type: "Action",
      text: "Make an attack against a target within Very Close range. On a success, mark a Stress to move into Melee range of the target, dealing 3d4 physical damage and knocking the target back to Close range.",
    },
  ],
};
