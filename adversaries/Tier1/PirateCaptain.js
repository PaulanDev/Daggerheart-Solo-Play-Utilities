export const PirateCaptain = {
  name: "PIRATE CAPTAIN",
  tier: 1,
  type: "Leader",
  desc: "A charismatic sea dog with an impressive hat, eager to raid and plunder.",
  motives: "Command, make ’em walk the plank, plunder, raid",
  difficulty: 14,
  thresholds: [7, 14],
  hp: 7,
  stress: 5,
  atk: "+4",
  weapon: { wpnName: "Cutlass", wpnRange: "Melee", wpnDamage: "1d12+2 phy" },
  experiences: ["Commander +2", "Sailor +3"],
  features: [
    {
      name: "Swashbuckler",
      type: "Passive",
      text: "When the Captain marks 2 or fewer HP from an attack within Melee range, the attacker must mark a Stress.",
    },
    {
      name: "Reinforcements",
      type: "Action",
      text: "Once per scene, mark a Stress to summon a Pirate Raiders Horde, which appears at Far range.",
    },
    {
      name: "No Quarter",
      type: "Action",
      text: "Spend a Fear to choose a target who has three or more Pirates within Melee range of them. The Captain leads the Pirates in hurling threats and promises of a watery grave. The target must make a Presence Reaction Roll. On a failure, the target marks 1d4+1 Stress. On a success, they must mark a Stress.",
    },
    {
      name: "Momentum",
      type: "Reaction",
      text: "When the Captain makes a successful attack against a PC, you gain a Fear.",
    },
  ],
};
