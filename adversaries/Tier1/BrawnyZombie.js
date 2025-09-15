export const BrawnyZombie = {
  name: "BRAWNY ZOMBIE",
  tier: 1,
  type: "Bruiser",
  desc: "A large corpse, decay-bloated and angry.",
  motives: "Crush, destroy, hail debris, slam",
  difficulty: 10,
  thresholds: [8, 15],
  hp: 7,
  stress: 4,
  atk: "+2",
  weapon: { wpnName: "Slam", wpnRange: "Very Close", wpnDamage: "1d12+3 phy" },
  experiences: ["Collateral Damage +2", "Throw +4"],
  features: [
    {
      name: "Slow",
      type: "Passive",
      text: "When you spotlight the Zombie and they don’t have a token on their stat block, they can’t act yet. Place a token on their stat block and describe what they’re preparing to do. When you spotlight the Zombie and they have a token on their stat block, clear the token and they can act.",
    },
    {
      name: "Rend Asunder",
      type: "Action",
      text: "Make a standard attack with advantage against a target the Zombie has Restrained. On a success, the attack deals direct damage.",
    },
    {
      name: "Rip and Tear",
      type: "Reaction",
      text: "When the Zombies makes a successful standard attack, you can mark a Stress to temporarily Restrain the target and force them to mark 2 Stress.",
    },
  ],
};
