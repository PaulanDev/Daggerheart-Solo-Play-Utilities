export const GiantBeastmaster = {
  name: "GIANT BEASTMASTER",
  tier: 2,
  type: "Leader",
  desc: "A leather-clad warrior bearing a whip and massive bow.",
  motives:
    "Command, make a living, maneuver, pin down, protect companion animals",
  difficulty: 16,
  thresholds: [12, 24],
  hp: 6,
  stress: 5,
  atk: "+2",
  weapon: { wpnName: "Longbow", wpnRange: "Far", wpnDamage: "2d8+4 phy" },
  experiences: ["Animal Handling +3"],
  features: [
    {
      name: "Two as One",
      type: "Passive",
      text: "When the Beastmaster is spotlighted, you can also spotlight a Tier 1 animal adversary currently under their control.",
    },
    {
      name: "Pinning Strike",
      type: "Action",
      text: "Make a standard attack against a target. On a success, you can mark a Stress to pin them to a nearby surface. The pinned target is Restrained until they break free with a successful Finesse or Strength Roll.",
    },
    {
      name: "Deadly Companion",
      type: "Action",
      text: "Twice per scene, summon a Bear, Dire Wolf, or similar Tier 1 animal adversary under the Beastmaster’s control. The adversary appears at Close range and is immediately spotlighted.",
    },
  ],
};
