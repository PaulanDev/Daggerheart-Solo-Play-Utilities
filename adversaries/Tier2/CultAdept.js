export const CultAdept = {
  name: "CULT ADEPT",
  tier: 2,
  type: "Support",
  desc: "An experienced mage wielding shadow and fear.",
  motives: "Curry favor, hinder foes, uncover knowledge",
  difficulty: 14,
  thresholds: [9, 18],
  hp: 4,
  stress: 6,
  atk: "+2",
  weapon: {
    wpnName: "Rune-Covered Rod",
    wpnRange: "Far",
    wpnDamage: "2d4+3 mag",
  },
  experiences: ["Fallen Lore +2", "Rituals +2"],
  features: [
    {
      name: "Enervating Blast",
      type: "Action",
      text: "Spend a Fear to make a standard attack against a target within range. On a success, the target must mark a Stress.",
    },
    {
      name: "Shroud of the Fallen",
      type: "Action",
      text: "Mark a Stress to wrap an ally within Close range in a shroud of Protection until the Adept marks their last HP. While Protected, the target has resistance to all damage.",
    },
    {
      name: "Shadow Shackles",
      type: "Action",
      text: "Spend a Fear and choose a point within Far range. All targets within Close range of that point are Restrained in smoky chains until they break free with a successful Strength or Instinct Roll. A target Restrained by this feature must spend a Hope to make an action roll.",
    },
    {
      name: "Fear Is Fuel",
      type: "Reaction",
      text: "Twice per scene, when a PC rolls a failure with Fear, clear a Stress.",
    },
  ],
};
