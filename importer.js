//Tier 1 Imports
import { AcidBurrower } from "./adversaries/Tier1/AcidBurrower.js";
import { ArcherGuard } from "./adversaries/Tier1/ArcherGuard.js";
import { Bear } from "./adversaries/Tier1/Bear.js";
import { BladedGuard } from "./adversaries/Tier1/BladedGuard.js";
import { BrawnyZombie } from "./adversaries/Tier1/BrawnyZombie.js";
import { CaveOgre } from "./adversaries/Tier1/CaveOgre.js";
import { Construct } from "./adversaries/Tier1/Construct.js";
import { Courtier } from "./adversaries/Tier1/Courtier.js";
import { DeeprootDefender } from "./adversaries/Tier1/DeeprootDefender.js";
import { DireWolf } from "./adversaries/Tier1/DireWolf.js";
import { GiantMosquitoes } from "./adversaries/Tier1/GiantMosquitoes.js";
import { GiantRat } from "./adversaries/Tier1/GiantRat.js";
import { GiantScorpion } from "./adversaries/Tier1/GiantScorpion.js";
import { GlassSnake } from "./adversaries/Tier1/GlassSnake.js";
import { GreenOoze } from "./adversaries/Tier1/GreenOoze.js";
import { Harrier } from "./adversaries/Tier1/Harrier.js";
import { HeadGuard } from "./adversaries/Tier1/HeadGuard.js";
import { JaggedKnifeBandit } from "./adversaries/Tier1/JaggedKnifeBandit.js";
import { JaggedKnifeHexer } from "./adversaries/Tier1/JaggedKnifeHexer.js";
import { JaggedKnifeKneebreaker } from "./adversaries/Tier1/JaggedKnifeKneebreaker.js";
import { JaggedKnifeLackey } from "./adversaries/Tier1/JaggedKnifeLackey.js";
import { JaggedKnifeLieutenant } from "./adversaries/Tier1/JaggedKnifeLieutenant.js";
import { JaggedKnifeShadow } from "./adversaries/Tier1/JaggedKnifeShadow.js";
import { JaggedKnifeSniper } from "./adversaries/Tier1/JaggedKnifeSniper.js";
import { Merchant } from "./adversaries/Tier1/Merchant.js";
import { MinorChaosElemental } from "./adversaries/Tier1/MinorChaosElemental.js";
import { MinorDemon } from "./adversaries/Tier1/MinorDemon.js";
import { MinorFireElemental } from "./adversaries/Tier1/MinorFireElemental.js";
import { MinorTreant } from "./adversaries/Tier1/MinorTreant.js";
import { PatchworkZombieHulk } from "./adversaries/Tier1/PatchworkZombieHulk.js";
import { PettyNoble } from "./adversaries/Tier1/PettyNoble.js";
import { PirateCaptain } from "./adversaries/Tier1/PirateCaptain.js";
import { PirateRaiders } from "./adversaries/Tier1/PirateRaiders.js";
import { PirateTough } from "./adversaries/Tier1/PirateTough.js";
import { RedOoze } from "./adversaries/Tier1/RedOoze.js";
import { RottedZombie } from "./adversaries/Tier1/RottedZombie.js";
import { Sellsword } from "./adversaries/Tier1/Sellsword.js";
import { ShamblingZombie } from "./adversaries/Tier1/ShamblingZombie.js";
import { SkeletonArcher } from "./adversaries/Tier1/SkeletonArcher.js";
import { SkeletonDredge } from "./adversaries/Tier1/SkeletonDredge.js";
import { SkeletonKnight } from "./adversaries/Tier1/SkeletonKnight.js";
import { SkeletonWarrior } from "./adversaries/Tier1/SkeletonWarrior.js";
import { Spellblade } from "./adversaries/Tier1/Spellblade.js";
import { SwarmOfRats } from "./adversaries/Tier1/SwarmOfRats.js";
import { SylvanSoldier } from "./adversaries/Tier1/SylvanSoldier.js";
import { TangleBramble } from "./adversaries/Tier1/TangleBramble.js";
import { TangleBrambleSwarm } from "./adversaries/Tier1/TangleBrambleSwarm.js";
import { TinyGreenOoze } from "./adversaries/Tier1/TinyGreenOoze.js";
import { TinyRedOoze } from "./adversaries/Tier1/TinyRedOoze.js";
import { YoungDryad } from "./adversaries/Tier1/YoungDryad.js";
import { ZombiePack } from "./adversaries/Tier1/ZombiePack.js";
import { ArcherSquadron } from "./adversaries/Tier2/ArcherSquardron.js";
import { ApprenticeAssassin } from "./adversaries/Tier2/ApprenticeAssassin.js";
import { AssassinPoisoner } from "./adversaries/Tier2/AssassinPoisoner.js";
import { MasterAssassin } from "./adversaries/Tier2/MasterAssassin.js";
import { BattleBox } from "./adversaries/Tier2/BattleBox.js";
import { ChaosSkull } from "./adversaries/Tier2/ChaosSkull.js";
import { Conscript } from "./adversaries/Tier2/Conscript.js";
import { Courtesan } from "./adversaries/Tier2/Courtesan.js";

//Adversary Exporter
export const adversaryArr = [
  AcidBurrower,
  ArcherGuard,
  Bear,
  BladedGuard,
  BrawnyZombie,
  CaveOgre,
  Construct,
  Courtier,
  DeeprootDefender,
  DireWolf,
  GiantMosquitoes,
  GiantRat,
  GiantScorpion,
  GlassSnake,
  GreenOoze,
  Harrier,
  HeadGuard,
  JaggedKnifeBandit,
  JaggedKnifeHexer,
  JaggedKnifeKneebreaker,
  JaggedKnifeLackey,
  JaggedKnifeLieutenant,
  JaggedKnifeShadow,
  JaggedKnifeSniper,
  Merchant,
  MinorChaosElemental,
  MinorDemon,
  MinorFireElemental,
  MinorTreant,
  PatchworkZombieHulk,
  PettyNoble,
  PirateCaptain,
  PirateRaiders,
  PirateTough,
  RedOoze,
  RottedZombie,
  Sellsword,
  ShamblingZombie,
  SkeletonArcher,
  SkeletonDredge,
  SkeletonKnight,
  SkeletonWarrior,
  Spellblade,
  SwarmOfRats,
  SylvanSoldier,
  TangleBramble,
  TangleBrambleSwarm,
  TinyGreenOoze,
  TinyRedOoze,
  YoungDryad,
  ZombiePack,
  ArcherSquadron,
  ApprenticeAssassin,
  AssassinPoisoner,
  MasterAssassin,
  BattleBox,
  ChaosSkull,
  Conscript,
  Courtesan,
];
