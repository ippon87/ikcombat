function PC()
{
	this.SamsonTrygan = function() 
{
	this.name = "Samson Trygan";
	this.status = "alive";
	this.speed = 6;
	this.str = 4;
	this.mat = 4;
	this.rat = 7;
	this.def = 12;
	this.arm = 10;
	this.will = 10;
	this.init = 14;
	this.detect = 6;
	this.sneak = 4;
	this.ps = [8];
	this.pow = [10]
	this.text = "Intelectual - Hr�lfur";
	this.life = 14;
	this.one = 4;
	this.two = 1;
	this.three = 3;
	this.four = 0;
	this.five = 4;
	this.six = 1;
	this.base = "small";
	this.epoints = 0;
}

this.OokamiiIppiki = function() 
{
	this.name = "Ookamii Ippiki";
	this.status = "alive";
	this.speed = 7;
	this.str = 5;
	this.mat = 7;
	this.rat = 6;
	this.def = 13;
	this.arm = 11;
	this.will = 9;
	this.init = 15;
	this.detect = 5;
	this.sneak = 6;
	this.ps = [7, 9];
	this.pow = [10]
	this.text = "Skilled (Bounty Hunter / Cutthroad) - S�san";
	this.life = 13;
	this.one = 4;
	this.two = 1;
	this.three = 3;
	this.four = 1;
	this.five = 3;
	this.six = 1;
	this.base = "small";
	this.epoints = 0;
}

this.Rhuec = function() 
{
	this.name = "Rhuec";
	this.status = "alive";
	this.speed = 4;
	this.str = 5;
	this.mat = 6;
	this.rat = 4;
	this.def = 10;
	this.arm = 14;
	this.will = 11;
	this.init = 12;
	this.detect = 4;
	this.sneak = 3;
	this.ps = [11];
	this.pow = [0]
	this.text = "Warcaster/Arcane Mechanic - Bergur";
	this.life = 14;
	this.one = 5;
	this.two = 2;
	this.three = 2;
	this.four = 1;
	this.five = 3;
	this.six = 1;
	this.base = "small";
	this.epoints = 0;
}

this.MightyOgrePugilist = function() 
{
	this.name = "Mighty Ogre Pugilist";
	this.status = "alive";
	this.speed = 5;
	this.str = 8;
	this.mat = 7;
	this.rat = 4;
	this.def = 11;
	this.arm = 14;
	this.will = 10;
	this.init = 11;
	this.detect = 4;
	this.sneak = 4;
	this.ps = [9,9,9];
	this.pow = 0
	this.text = "Weapons: Knuckleduster x2 - +2 difficulty to resist knockout attacks\n     ";
	this.text += "Brawler: can use unarmed skill with improvised weapons\n     ";
	this.text += "Hulking Presence: Additional die when using intimidate with PHY stat\n     ";
	this.text += "Feat - Invulnerable: This character can use a feat point to gain +3 arm\n     ";
	this.text += "Feat Points: This character starts with one feat point, he gains one feat point each turn\n     ";
	this.text += "Flying fists: when this character is using 2 fists or only one hand weapon he gains one aditional attack with a fist\n     ";
	this.text += "Mighty: this character gains an additional die on melee damage\n     ";
	this.life = 14;
	this.one = 5;
	this.two = 2;
	this.three = 3;
	this.four = 1;
	this.five = 3;
	this.six = 0;
	this.maxlife = 14;
	this.onemax = 5;
	this.twomax = 2;
	this.threemax = 3;
	this.fourmax = 1;
	this.fivemax = 3;
	this.sixmax = 0;
	this.base = "small";
	this.epoints = 14;
}

this.SkilledHumanRifleman = function() 
{
	this.name = "Skilled Human Rifleman";
	this.status = "alive";
	this.speed = 7;
	this.str = 5;
	this.mat = 6;
	this.rat = 7;
	this.def = 14;
	this.arm = 11;
	this.will = 10;
	this.init = 16;
	this.detect = 6;
	this.sneak = 4;
	this.ps = [8];
	this.pow = [10]
	this.text = "Weapons: Sword - Scoped repeating rifle rng 17\n     ";
	this.text += "Crackshot: When making a ranged attack against a target with concealment, cover or elevation, this model gains +2 to the attack roll\n     ";
	this.text += "Dual shot: This model can forfeit movement during its turn to make one additional ranged attack with a pistol or rifle\n     ";
	this.text += "Feat Points: this model starts the encounter with 1 feat point, he gains one feat point at the start of his activation\n     ";
	this.text += "Marksman: This model can use a quik action and aim in the same round, but still has to forfeit movement to get the aiming bonus\n     ";
	this.text += "Skilled: This model gains an additional attack during his activation phase if he chooses to attack that turn\n     \n\n";
	this.text += "equipment: ammo bandolier, armored great coat, 20 light shots, 35gc";
	this.life = 14;
	this.one = 4;
	this.two = 2;
	this.three = 3;
	this.four = 1;
	this.five = 3;
	this.six = 1;
	this.maxlife = 14;
	this.onemax = 4;
	this.twomax = 2;
	this.threemax = 3;
	this.fourmax = 1;
	this.fivemax = 3;
	this.sixmax = 1;
	this.base = "small";
	this.epoints = 16;
}

this.ScrapperLightJack = function() 
{
	this.name = "Scrapper Light Jack";
	this.status = "alive";
	this.speed = 5;
	this.str = 7;
	this.mat = 3;
	this.rat = 2;
	this.def = 9;
	this.arm = 16;
	this.will = 10;
	this.init = 9;
	this.detect = 1;
	this.sneak = 0;
	this.ps = [11,8];
	this.pow = [0]
	this.jack = true;
	this.text = "Weapons: Scrap Saw - On a crit this jack can make another attack targeting the character hit\n     ";
	this.life = 26;
	this.one = 3;
	this.two = 5;
	this.three = 5;
	this.four = 5;
	this.five = 5;
	this.six = 3;
	this.maxlife = 26;
	this.onemax = 3;
	this.twomax = 5;
	this.threemax = 5;
	this.fourmax = 5;
	this.fivemax = 5;
	this.sixmax = 3;
	this.base = "Medium";
	this.epoints = 8;
}

this.MightyTrollkinSoldier = function()
{
	this.name = "Mighty Trollkin Soldier";
	this.status = "alive";
	this.speed = 5;
	this.str = 7;
	this.mat = 7;
	this.rat = 5;
	this.def = 11;
	this.arm = 14;
	this.will = 10;
	this.init = 14;
	this.detect = 6;
	this.sneak = 4;
	this.ps = [11];
	this.pow = [12]
	this.text = "Weapons: Heavy pry bar - on hit knochdown , Scattergun - SP 8\n     "
	this.text += " Feat points - this character starts with 1 feat point, he is allocated one feat point per round\n     ";
	this.text += "Feat: revitalize, this character can spend a feat point to immediately regain 7 vitality\n     ";
	this.text += "Find cover: at the start of combat, before initative, this character can advance 2 inches and take cover or go prone\n     ";
	this.text += "Mighty: this character gains an additional die on melee attacks\n     ";
	this.text += "Sentry: Once per round if an enemy character enters or is pushed into this characters line of sight, this character can make one regular ranged attack against that enemy";
	this.text += "Tough";
	this.life = 14;
	this.one = 5;
	this.two = 2;
	this.three = 3;
	this.four = 1;
	this.five = 3;
	this.six = 0;
	this.maxlife = 14;
	this.onemax = 5;
	this.twomax = 2;
	this.threemax = 3;
	this.fourmax = 1;
	this.fivemax = 3;
	this.sixmax = 0;
	this.base = "medium";
	this.epoints = 14;
	}
	
this.GiftedHumanFireSorc = function()
{
	this.name = "Gifted Human Fire Sorc";
	this.status = "alive";
	this.speed = 6;
	this.str = 4; 
	this.mat = 5;
	this.rat = 4;
	this.def = 10;
	this.arm = 10;
	this.will = 10;
	this.init = 14;
	this.detect = 6;
	this.sneak = 4;
	this.arcane = 4;
	this.ps = [5];
	this.pow = [12]
	this.text = "Weapons: Dagger , Crossbow rng; 10\n     "
	this.text += "Feat points: This character starts with 1 feat point, he is alocated 1 feat point per round\n     ";
	this.text += "Combat caster: when this character casts to hit with an offensive spell he gains an adittional die and then discards the lowest die\n     ";
	this.text += " Immunity Fire\n";
	this.text += "Spells: \n     ";
	this.text += "Fire starter: cost - 1; up - no; off -  yes \n";
	this.text += "The spellcaster starts a small fire within the range of the spell and in line of sight. This spell can be used to target an enemy, in which case it requies an attack roll. If the enemy is hit, he suffers the Fire continuous effect.\n";
	this.text += "Howling flames: cost - 1; rng - SP 8; off - yes\n     ";
	this.text += "Howling flames causes fire damage. On a critical hit, the character hit suffers the Fire continuous effect.\n";
	this.text += "Wall of fire: cost - 2; rng - Ctrl; Aoe - Wall; Up - yes\n     ";
	this.text += "Place the wall template anywhere completely in the spellcasters control area where it does not touch a characters base, an obstruction, or an obstacle. When a character enters or ends his turn in the wall area, he suffers an unboostable POW 12 fire damage roll and the Fire continuous effect. Characters within the wall template gain concealment";
	this.life = 13;
	this.one = 4;
	this.two = 1;
	this.three = 3;
	this.four = 1;
	this.five = 3;
	this.six = 1;
	this.maxlife = 13;
	this.onemax = 4;
	this.twomax = 1;
	this.threemax = 3;
	this.fourmax = 1;
	this.fivemax = 3;
	this.sixmax = 1;
	this.base = "small";
	this.epoints = 12;
	}	
}