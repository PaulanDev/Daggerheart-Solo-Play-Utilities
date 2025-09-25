export const VaultGuardianGaoler = {
  name: "VAULT GUARDIAN GAOLER",
  tier: 3,
  type: "Support",
  desc: "A boxy, dust-covered construct with thick metallic swinging doors on their torso.",
  motives: "Carry away, entrap, protect, pummel",
  difficulty: 16,
  thresholds: [19, 33],
  hp: 5,
  stress: 3,
  atk: "+2",
  weapon: {
    wpnName: "Body Bash",
    wpnRange: "Very Close",
    wpnDamage: "3d6+2 phy",
  },
  experiences: [],
  features: [
    {
      name: "Blocking Shield",
      type: "Passive",
      text: "Creatures within Melee range of the Gaoler have disadvantage on attack rolls against them. Creatures trapped inside the Gaoler are immune to this feature.",
    },
    {
      name: "Lock Up",
      type: "Action",
      text: "Mark a Stress to make an attack against a target within Very Close range. On a success, the target is Restrained within the Gaoler until freed with a successful Strength Roll (18). While Restrained, the target can only attack the Gaoler.",
    },
  ],
};
