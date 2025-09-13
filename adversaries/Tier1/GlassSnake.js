export const GlassSnake = {
  name: "GLASS SNAKE",
  tier: 1,
  type: "Standard",
  desc: "A clear serpent with a massive head that leaves behind a glass shard trail wherever they go.",
  motives: "Climb, feed, keep distance, scare",
  difficulty: 14,
  thresholds: [6, 10],
  hp: 5,
  stress: 3,
  atk: "+2",
  weapon: {
    wpnName: "Glass Fangs",
    wpnRange: "Very Close",
    wpnDamage: "1d8+2 phy",
  },
  experiences: [],
  features: [
    {
      name: "Armor-Shredding Shards",
      type: "Passive",
      text: "On a successful attack within Melee range against the Snake, the attacker must mark an Armor Slot without receiving its benefi ts (they can still use armor to reduce the damage). If they can’t mark an Armor Slot, they must mark an additional HP.",
    },
    {
      name: "Spinning Serpent",
      type: "Action",
      text: "Mark a Stress to make an attack against all targets within Very Close range. Targets the Snake succeeds against take 1d6+1 physical damage.",
    },
    {
      name: "Spitter",
      type: "Action",
      text: "Spend a Fear to introduce a d6 Spitter Die. When the Snake is in the spotlight, roll this die. On a result of 5 or higher, all targets in front of the Snake within Far range must succeed on an Agility Reaction Roll or take 1d4 physical damage. The Snake can take the spotlight a second time this GM turn.",
    },
  ],
};
