function NPC()
{
 

this.HumanThief = function() 
{
	this.name = "Human Thief";
	this.status = "Alive";
	this.speed = 7;
	this.str = 5;
	this.mat = 4;
	this.rat = 4;
	this.def = 12;
	this.arm = 11;
	this.will = 8;
	this.init = 15;
	this.detect = 6;
	this.sneak = 7;
	this.ps = [9];
	this.text = " Weapons: Dagger \n Dodger: when this character is missed by an enemy attack, he can immediately advance up to 2.inch \n after the attack is resoled unless he was missed while advancing, no free strikes \n Get Away: instead of advancing 2 from dodger, this character car make a full advance" ;
	this.life = 5;
	this.maxlife = 5;
	this.base = "small";
	this.epoints = 1;
	
};

this.HumanThug = function() 
{
	this.name = "Human Thug";
	this.status = "alive";
	this.speed = 6;
	this.str = 5;
	this.mat = 5;
	this.rat = 5;
	this.def = 12;
	this.arm = 12;
	this.will = 9;
	this.init = 12;
	this.detect = 4;
	this.sneak = 5;
	this.ps = [8];
	this.pow = [10];
	this.text = "Weapons: Sword, Pistol \n Anatomical Precision";
	this.life = 7;
	this.maxlife = 7;
	this.base = "small";
	this.epoints = 3;
}	

this.HumanWatchman = function() 
{
	this.name = "Human Wathman";
	this.status = "Alive";
	this.speed = 5;
	this.str = 5;
	this.mat = 6;
	this.rat = 5;
	this.def = 12;
	this.arm = 14;
	this.will = 9;
	this.init = 12;
	this.detect = 6;
	this.sneak = 3;
	this.ps = [10];
	this.pow = [10];
	this.text = "Weapons: Halberd - Reach - Brutal Charge , Pistol \n Set Defence\n     Sound the Alarm: Once per encounter this watchman can add an extra watchman";
	this.life = 7;
	this.maxlife = 7;
	this.base = " small";
	this.epoints = 5;
}

this.HumanArcanist = function() 
{
	this.name = "Human Arcanist";
	this.status = "Alive";
	this.speed = 6;
	this.str = 3;
	this.mat = 4;
	this.rat = 4;
	this.def = 13;
	this.arm = 11;
	this.will = 10;
	this.init = 14;
	this.detect = 5;
	this.sneak = 4;
	this.ps = [6];
	this.text = "Weapons: Staff - Reach \nSpells\nArcane Bolt - cost:2 rng: 12 pow: 11 up: no off: no \nAura of Protection - cost: 2 rng: self up: yes off: no\n  +2 arm in this characters control area";
	this.arcane = 4;
	this.life = 5;
	this.maxlife = 5;
	this.base = "small";
	this.epoints = 2;
}    

this.HumanGrenader = function() 
{
	this.name = "Human Grenader";
	this.status = "Alive";
	this.speed = 6;
	this.str = 4;
	this.mat = 5;
	this.rat = 5;
	this.def = 14;
	this.arm = 12;
	this.will = 10;
	this.init = 14;
	this.detect = 4;
	this.sneak = 5;
	this.ps = [8];
	this.text = "Weapons: sword, 5x Grenades \n     Grenadier: add quick action pull pin on grens \n     Fire in the Hole: Bushwack for grenades \n     Grenaders Bandolier: quick action to draw grenade \n     Alchemist Leather: +3 arm blast, cold, corrosion and fire";
	this.life = 6;
	this.maxlife = 6;
	this.base = "small";
	this.epoints = 5;
}    

this.RisenThrall = function() 
{
	this.name = "Risen Thrall";
	this.status = "Alive";
	this.speed = 5;
	this.str = 5;
	this.mat = 4;
	this.rat = 0;
	this.def = 9;
	this.arm = 11;
	this.will = 1;
	this.init = 7;
	this.detect = 1;
	this.sneak = 5;
	this.ps = [7];
	this.text = "Undead, Gang, Though";
	this.life = 5;
	this.maxlife = 5;
	this.base = "small";
	this.epoints = 2;
}    

this.ThrallWarrior = function() 
{
	this.name = "Thrall Warrior";
	this.status = "alive";
	this.speed = 5;
	this.str = 6;
	this.mat = 6;
	this.rat = 0;
	this.def = 11;
	this.arm = 15;
	this.will = 1;
	this.init = 10;
	this.detect = 3;
	this.sneak = 3;
	this.ps = [13];
	this.text = "Weapons: Great Sword - reach \nUndead, Tough";
	this.life = 10;
	this.maxlife = 10;
	this.base = "small";
	this.epoints = 5;
}    

this.Thrullg = function() 
{
	this.name = "Thrullg";
	this.status = "alive";
	this.speed = 6;
	this.str = 9;
	this.mat = 7;
	this.rat = 0;
	this.def = 13;
	this.arm = 16;
	this.will = 10;
	this.init = 14;
	this.detect = 8;
	this.sneak = 6;
	this.ps = [13, 12, 12];
	this.text = "Weapons, Tentacles - reach, claws \n     Fearless\n     Arcane Consumption: spell cast in commant range damage caster for d3 and heal this char for d3\n     Arcane Interference: on hit upkeep, animi and focus away ; Jacks get disruption\n     Blackout Pulse: quick action to have all mechanica devices (exept jacks and armor) deactivate";
	this.life = 18;
	this.one = 3;
	this.two = 3;
	this.three = 3;
	this.four = 3;
	this.five = 3;
	this.six = 3;
	this.maxlife = 18;
	this.onemax = 3;
	this.twomax = 3;
	this.threemax = 3;
	this.fourmax = 3;
	this.fivemax = 3;
	this.sixmax = 3;
	this.base = "small";
	this.epoints = 11;
}    

this.DreadTombGuard = function()
{
	this.name = "Dread Tomb Guard";
	this.status = "alive";
	this.speed = 5;
	this.str = 7;
	this.mat = 6;
	this.rat = 0;
	this.def = 12;
	this.arm = 15;
	this.will = 12;
	this.init = 14;
	this.detect = 5;
	this.sneak = 7;
	this.ps = [12, 12];
	this.text = "Weapons: Handblade x2 - Blessed - Beatback: on hit push 1 and follow\nBoosted Willpower rolls, Terror[16], SpellWard, Tough, Undead\nLore: These undead creatures most often signify the presence of Orgoth ruins";
	this.life = 17;
	this.one = 5;
	this.two = 4;
	this.three = 3;
	this.four = 1;
	this.five = 3;
	this.six = 1;
	this.maxlife = 17;
	this.onemax = 5;
	this.twomax = 4;
	this.threemax = 3;
	this.fourmax = 1;
	this.fivemax = 3;
	this.sixmax = 1;
	this.base = "small";
	this.epoints = 9;
}

this.BurrowMawg = function() 
{
	this.name = "Burrow-Mawg";
	this.status = "alive";
	this.speed = 6;
	this.str = 4;
	this.mat = 4;
	this.rat = 0;
	this.def = 13;
	this.arm = 10;
	this.will = 5;
	this.init = 14;
	this.detect = 7;
	this.sneak = 3;
	this.ps = [8];
	this.text = "Weapons: Bite\nGang\nLore: Burromags have extremely sensitive noses and can smell prey over large distances. When they scent prey, they call the pack with a signal squeal.\nBurrow-mawg adrenal glands are used in the creation of some alchemical compounds";
	this.life = 4;
	this.maxlife = 
	this.maxlife = 4;
	this.base = "small";
	this.epoints = 2;
}    

this.BurrowMawgAlpha = function() 
{
	this.name = "Burrow-Mawg Alpha";
	this.status = "alive";
	this.speed = 6;
	this.str = 6;
	this.mat = 5;
	this.rat = 0;
	this.def = 13;
	this.arm = 12;
	this.will = 7;
	this.init = 14;
	this.detect = 7;
	this.sneak = 3;
	this.ps = [10];
	this.text = "Weapons: Bite\nGang\nLore: Burromags have extremely sensitive noses and can smell prey over large distances. When they scent prey, they call the pack with a signal squeal.\nBurrow-mawg adrenal glands are used in the creation of some alchemical compounds";
	this.life = 6;
	this.maxlife = 6;
	this.base = "small";
	this.epoints = 4;
} 

this.DreggScavenger = function() 
{
	this.name = "Dregg Scavenger";
	this.status = "alive";
	this.speed = 6;
	this.str = 6;
	this.mat = 5;
	this.rat = 5;
	this.def = 12;
	this.arm = 12;
	this.will = 6;
	this.init = 10;
	this.detect = 4;
	this.sneak = 6;
	this.ps = [9];
	this.text = "Weapons: Arm Blade\n     Light Sensitive: If the dregg ends its turn in bright light it suffers 1 point of damage\n     Night Vision: The dregg treats darkness as dim light and dim light as bright light\n     Pain Fueled: while the dregg has one or more marked vitality points, it gains +2 on its melee attack ald damage rolls\n     Scavenged Weapons: When planing encounter roll a d6 ; 1-2 no weapon; 3-5; choose a melee weapon; 6 choose a pistol or rifle\n     Tough: if disabled roll a d6, on a 5 or 6 gain one vitaility and knocked down\n\n     Lore: Dreggs have an aversion to light and hate everyone, allso pain makes them stronger";
	this.life = 6;
	this.maxlife = 6;
	this.base = "small";
	this.epoints = 4;
} 

this.DreggPainMonger = function() 
{
	this.name = "Dregg Pain Monger";
	this.status = "alive";
	this.speed = 6;
	this.str = 7;
	this.mat = 6;
	this.rat = 0;
	this.def = 11;
	this.arm = 15;
	this.will = 10;
	this.init = 14;
	this.detect = 4;
	this.sneak = 4;
	this.ps = [10,10];
	this.text = "Weapons: Arm Blade x2\n     Light Sensitive: If the dregg ends its turn in bright light it suffers 1 point of damage\n     Night Vision: The dregg treats darkness as dim light and dim light as bright light\n     Pain Fueled: while the dregg has one or more marked vitality points, it gains +2 on its melee attack ald damage rolls\n     Retaliatory Strike: When this dregg is hit by a melee attack by an enemy not on his own turn, after the attack is resolved he may immedately make a normal melee attack\n     Tough: if disabled roll a d6, on a 5 or 6 gain one vitaility and knocked down\n\n     Lore: Dreggs have an aversion to light and hate everyone, allso pain makes them stronger";
	this.life = 12;
	this.maxlife = 12;
	this.base = "small";
	this.epoints = 7;
} 

this.DreggRaidMaster = function() 
{
	this.name = "Dregg Raid Master";
	this.status = "alive";
	this.speed = 6;
	this.str = 7;
	this.mat = 7;
	this.rat = 6;
	this.def = 13;
	this.arm = 14;
	this.will = 8;
	this.init = 10;
	this.detect = 6;
	this.sneak = 8;
	this.ps = [10];
	this.text = "Weapons: Arm Blade\n     Light Sensitive: If the dregg ends its turn in bright light it suffers 1 point of damage\n     Night Vision: The dregg treats darkness as dim light and dim light as bright light\n     Pain Fueled: while the dregg has one or more marked vitality points, it gains +2 on its melee attack ald damage rolls\n     Master Scavenger: When planing encounter roll a d6 ; 1-2 no weapon; 3-4; choose a melee weapon; 5-6 choose a pistol or rifle\n     Tough: if disabled roll a d6, on a 5 or 6 gain one vitaility and knocked down\n     Lore: Dreggs have an aversion to light and hate everyone, allso pain makes them stronger";
	this.life = 17;
	this.one = 5;
	this.two = 3;
	this.three = 4;
	this.four = 2;
	this.five = 2;
	this.six = 1;
	this.maxlife = 17;
	this.onemax = 5;
	this.twomax = 3;
	this.threemax = 4;
	this.fourmax = 2;
	this.fivemax = 2;
	this.sixmax = 1;
	this.base = "small";
	this.epoints = 7;
}

this.FarrowBrigand = function() 
{
	this.name = "Farrow Brigand";
	this.status = "alive";
	this.speed = 5;
	this.str = 6;
	this.mat = 6;
	this.rat = 5;
	this.def = 12;
	this.arm = 14;
	this.will = 7;
	this.init = 10;
	this.detect = 3;
	this.sneak = 3;
	this.ps = [10];
	this.pow = [11];
	this.text = "Weapons: Banded Club, Military rifle - rng 10\n    Dig In: If this character has a spade he can use a quick action to dig an improvised fox hole. Until he moves, is placed, goes prone or is engeged the character gains cover, does not suffer blast damage and does not block line of sight\n\nLore: Farrow are pernivious scavengers and dislike allowing anything to go to waste. They can be distracted from patrols if presented with a quantity of raw or cooked mead(including fresh corpses) or broken machinery they can salvage for metal";
	this.life = 7;
	this.maxlife = 7;
	this.base = "small";
	this.epoints = 4;
} 

this.FarrowSlaughterhouser = function() 
{
	this.name = "Farrow Slaughterhouser";
	this.status = "alive";
	this.speed = 5;
	this.str = 7;
	this.mat = 6;
	this.rat = 4;
	this.def = 12;
	this.arm = 15;
	this.will = 9;
	this.init = 10;
	this.detect = 3;
	this.sneak = 2;
	this.ps = [10];
	this.text = "Weapons: Pole Cleaver - Powerful charge(+2 attack on charge), Reach ;\n    Finisher: This character gains an additional die on damage rolls agains damaged models\n     Tough: \n\n    Lore: Farrow are pernivious scavengers and dislike allowing anything to go to waste. They can be distracted from patrols if presented with a quantity of raw or cooked mead(including fresh corpses) or broken machinery they can salvage for metal";     
	this.life = 7;
	this.maxlife = 7;
	this.base = "small";
	this.epoints = 6;
} 

this.ThamariteGuard = function() 
{
	this.name = "Thamarite Guard";
	this.status = "alive";
	this.speed = 5;
	this.str = 5;
	this.mat = 6;
	this.rat = 5;
	this.def = 10;
	this.arm = 16;
	this.will = 9;
	this.init = 12;
	this.detect = 5;
	this.sneak = 3;
	this.ps = [9, 8];
	this.text = "Weapons: Mace - on crit knockout (str + 9) , combat shield (pow 3)\n     ";
	this.text += "Smash 'n bash: This model car forfeit movement to attack with both weapons at the same round, at a -1 to attack with both weapons\n";
	this.text += "Shield Guard; Steady";
	this.life = 8;
	this.maxlife = 8;
	this.base = "small";
	this.epoints = 5;
}

this.ThamariteAcolyte = function() 
{
	this.name = "Thamarite Acolyte";
	this.status = "alive";
	this.speed = 6;
	this.str = 4;
	this.mat = 5;
	this.rat = 4;
	this.def = 13;
	this.arm = 11;
	this.will = 10;
	this.init = 14;
	this.detect = 5;
	this.sneak = 4;
	this.arcane = 3;
	this.ps = [8];
	this.text = "Weapons: Battle staff - on crit knockout (str + 9) \n     ";
	this.text += "Combat Caster: this model gains an additional die to hit magic attacks, discard the lowest die\n";
	this.text += "Spells\n";
	this.text += "Ashen Cloud: cost - 2; Rng - Ctrl; AOE - 3; Up - Yes\n     ";
	this.text += "Plave a 3 inch cloud effect anywhere completely in the spellcastes control area. Characters without Immunity: Fire suffer -2 on attacks rolls while within the AOE\n";
	this.text += "Bleed: cost - 2; Rng - 8; pow 10\n     ";
	this.text += "When this spell damages a living character, the spellcaster regains d3 vitality points";
	this.life = 6;
	this.maxlife = 6;
	this.base = "small";
	this.epoints = 3;
}

this.FarrowWarlord = function() 
{
	this.name = "Farrow Warlord";
	this.status = "alive";
	this.speed = 5;
	this.str = 6;
	this.mat = 6;
	this.rat = 5;
	this.def = 12;
	this.arm = 14;
	this.will = 7;
	this.init = 10;
	this.detect = 3;
	this.sneak = 3;
	this.ps = [13];
	this.pow = [12];
	this.text = "Weapons: Great sword - Reach , Blunderbus - rng 12\n     Feat Points: This character starts with 1 feat point, he gets one feat point per turn\n     Battle Plan - Hog Wild: quick action - once a turn he can use this battle plan. All friendly characters in his command range can make one normal ranged attack during their next turn before moving, after the attack they can move and attack normaly but only melee attacks\nDig In: If this character has a spade he can use a quick action to dig an improvised fox hole. Until he moves, is placed, goes prone or is engeged the character gains cover, does not suffer blast damage and does not block line of sight\n\nLore: Farrow are pernivious scavengers and dislike allowing anything to go to waste. They can be distracted from patrols if presented with a quantity of raw or cooked mead(including fresh corpses) or broken machinery they can salvage for metal";
	this.life = 15;
	this.one = 4;
	this.two = 3;
	this.three = 3;
	this.four = 2;
	this.five = 2;
	this.six = 1;
	this.maxlife = 15;
	this.onemax = 4;
	this.twomax = 3;
	this.threemax = 3;
	this.fourmax = 2;
	this.fivemax = 2;
	this.sixmax = 1;
	this.base = "small";
	this.epoints = 8;
}

this.FarrowShaman = function() 
{
	this.name = "Farrow Shaman";
	this.status = "alive";
	this.speed = 5;
	this.str = 6;
	this.mat = 5;
	this.rat = 4;
	this.def = 13;
	this.arm = 14;
	this.will = 10;
	this.init = 12;
	this.detect = 5;
	this.sneak = 5;
	this.ps = [10];
	this.text = "Weapons: Battle staff - Reach\n    Spells - willweaver\nGuided blade: cost 1 rng 6 up no off no\n     target friendly character gains +1 attack and magical weapon for one round\nHex Blast: cost 3 rng 10 aoe 3 pow 13 up no off yes\n     Upkeep spells and inimi on the character directly hit immediately expire";
	this.life = 15;
	this.one = 4;
	this.two = 2;
	this.three = 3;
	this.four = 2;
	this.five = 3;
	this.six = 1;
	this.maxlife = 15;
	this.onemax = 4;
	this.twomax = 2;
	this.threemax = 3;
	this.fourmax = 2;
	this.fivemax = 3;
	this.sixmax = 1;
	this.base = "small";
	this.epoints = 7;
}

this.Argus = function() 
{
	this.name = "Argus";
	this.status = "alive";
	this.speed = 7;
	this.str = 8;
	this.mat = 5;
	this.rat = 4;
	this.def = 15;
	this.arm = 12;
	this.will = 10;
	this.init = 16;
	this.detect = 8;
	this.sneak = 6;
	this.ps = [12,12,16];
	this.text = "Weapons: Bite x2 - can make attack with both heads simultaneusly, in wich case the power is 16\n     ";
	this.text += "Doppler Bark: rng SP6 - Paralysis: base DEF of lifing characters hit becomes 7 and the character cannot run or charge\n     ";
	this.text += "Circlular Vision: 360° front arc";
	this.life = 12;
	this.one = 3;
	this.two = 1;
	this.three = 3;
	this.four = 1;
	this.five = 3;
	this.six = 1;
	this.maxlife = 12;
	this.onemax = 3;
	this.twomax = 1;
	this.threemax = 3;
	this.fourmax = 1;
	this.fivemax = 3;
	this.sixmax = 1;
	this.base = "medium";
	this.epoints = 10;
}

this.DefenderKnight = function() 
{
	this.name = "Defender Knight";
	this.status = "alive";
	this.speed = 6;
	this.str = 5;
	this.mat = 6;
	this.rat = 3;
	this.def = 11;
	this.arm = 14;
	this.will = 10;
	this.init = 13;
	this.detect = 4;
	this.sneak = 2;
	this.ps = [8, 5];
	this.pow = [12];
	this.text = "Weapons: Sword , Cannon Shield - +2 armor from the front arc \n";
	this.text += "Cannon sheild shot - rng 8 \n     ";
	this.text += "Defencive line: While this character is B2B with one or more friendly character he gains +1 Arm. While the character is in base to base with another character with this ability, the bonus increases to +2\n     ";
	this.text += "Parry: While armed with a hand weapon, the character cannot be targeted by free strikes\n     ";
	this.text += "Riposte : Once per round when this character is missed by an enemy's melee atack, immediately after the attack is resolved he can make one normal attack against the attacking enemy. To make a ranged attack, the character ranged weapon must be loaded.\n     ";
	this.text += "Shield guard: Onve per turn, when a friendly character is directly hit by an attack while within 2 inc of this character, this character can choose to be directly hit instead. This character cannot use Shield Guard if he is incorporeal, knocked down, prone or stationary\n      ";
	this.life = 12;
	this.maxlife = 12;
	this.base = "small";
	this.epoints = 8;
}


}
