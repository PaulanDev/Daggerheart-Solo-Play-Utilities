export const FallenWarlordRealmBreaker = {
  name: "FALLEN WARLORD: REALM-BREAKER",
  tier: 4,
  type: "Solo",
  desc: "A Fallen God, wreathed in rage and resentment, bearing millennia of experience in breaking heroes’ spirits.",
  motives: "Corrupt, dominate, punish, break the weak",
  difficulty: 20,
  thresholds: [36, 66],
  hp: 8,
  stress: 5,
  atk: "+7",
  weapon: { wpnName: "Barbed Whip", wpnRange: "Close", wpnDamage: "4d8+7 phy" },
  experiences: ["Conquest +3", "History +2", "Intimidation +3"],
  features: [
    {
      name: "Relentless (2)",
      type: "Passive",
      text: "The Realm-Breaker can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them.",
    },
    {
      name: "Firespite Plate Armor",
      type: "Passive",
      text: "When the Realm-Breaker takes damage, reduce it by 2d10.",
    },
    {
      name: "Tormenting Lash",
      type: "Action",
      text: "Mark a Stress to make a standard attack against all targets within Very Close range. When a target uses armor to reduce damage from this attack, they must mark 2 Armor Slots.",
    },
    {
      name: "All-Consuming Rage",
      type: "Reaction",
      text: "Countdown (Decreasing 8). When the Realm-Breaker is in the spotlight for the first time, activate the countdown. When it triggers, create a torrent of incarnate rage that rends flesh from bone. All targets within Far range must make a Presence Reaction Roll. Targets who fail take 2d6+10 direct magic damage. Targets who succeed take half damage. For each HP marked from this damage, summon a Fallen Shock Troop within Very Close range of the target who marked that HP. If the countdown ever decreases its maximum value to 0, the Realm-Breaker marks their remaining HP and all targets within Far range must mark all remaining HP and make a death move.",
    },
    {
      name: "Doombringer",
      type: "Reaction",
      text: "When a target marks HP from an attack by the Realm-Breaker, all PCs within Far range of the target must lose a Hope.",
    },
    {
      name: "I Have Never Known Defeat (Phase Change)",
      type: "Reaction",
      text: "When the Realm-Breaker marks their last HP, replace them with the Undefeated Champion and immediately spotlight them.",
    },
  ],
};
