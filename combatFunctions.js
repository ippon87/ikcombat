function newNPC()
{
	var x = document.getElementById("elements");
	var method = x.options[x.selectedIndex].value;
	var npc = new NPC();
	npc[method]();
	forbattle.push(npc);
	document.myform.battlelist.options[increment]=new Option(npc.name, "nothing", false, false);
	increment ++;
	encounterpoints += npc.epoints;
	updateMyX();
}

function newPC()
{
	var x = document.getElementById("elements2");
	var method = x.options[x.selectedIndex].value;
	var pc = new PC();
	pc[method]();
	forbattle.push(pc);
	document.myform.battlelist.options[increment]=new Option(pc.name, "nothing", false, false);
	increment ++;
	encounterpoints += pc.epoints;
	updateMyX();
}

function startFunction()
{
	for(i = 0; i<forbattle.length; i++)
		forbattle[i].init += roll2d6()[0];
	for(p=0; p<forbattle.length; p++){ //selection sort
		var max = p;
		for(q=p+1;q<forbattle.length;q++)
		{
			if(forbattle[q].init > forbattle[max].init)
				max=q;
		}
		var t = forbattle[p];
		forbattle[p] = forbattle[max];
		forbattle[max] = t;
	}
	for(i=0; i<forbattle.length; i++){
	var button = document.getElementById("btn-char"+i);	
	button.innerText = forbattle[i].name;
	button = document.getElementById("btn-status"+i);
	button.innerText = "Status: " + forbattle[i].status + "  Life: " + forbattle[i].life;
	}
}

function rolld3()
{
	var die = Math.floor((Math.random() * 3) +1);
	return die;
}

function rolld6()
{
	var die = Math.floor((Math.random() * 6) +1);
	return die;
}

function roll2d6()
{
	var die1 = Math.floor((Math.random() * 6)+1);
	var die2 = Math.floor((Math.random() * 6)+1);
	var total = die1 + die2;
	if(die1==die2) return [total, true];
	else return [total, false];
}

function roll3d6()
{
	var die1 = Math.floor((Math.random() * 6)+1);
	var die2 = Math.floor((Math.random() * 6)+1);
	var die3 = Math.floor((Math.random() * 6)+1);
	var total = die1 + die2 + die3;
	if(die1==die2 || die1==die3 || die2==die3) return [total, true];
	else return [total, false];
}

function roll4d6()
{
	var die1 = Math.floor((Math.random() * 6)+1);
	var die2 = Math.floor((Math.random() * 6)+1);
	var die3 = Math.floor((Math.random() * 6)+1);
	var die4 = Math.floor((Math.random() * 6)+1);
	var total = die1 + die2 + die3 + die4;
	if(die1==die2 || die1==die3 || die2==die3|| die4==die1 || die4==die2 || die4==die3) return [total, true];
	else return [total, false];
}


function meleeAttack(number)
{
	var mat = forbattle[number].mat;
	var ps = forbattle[number].ps;
	if(document.getElementById("normal").checked) normalRoll(mat, ps);
	else if(document.getElementById("charge").checked) Charge(mat, ps);
	else if(document.getElementById("mighty").checked) Mighty(mat, ps);
	else if(document.getElementById("charge-mighty").checked) chargeMighty(mat, ps);
}

function rangedAttack(number)
{
	var rat = forbattle[number].rat;
	var pow = forbattle[number].pow;
	if(document.getElementById("normal").checked) normalRoll(rat, pow);
}

function magickAttack(number)
{
	var arcane = forbattle[number].arcane;
	var result = "";
	if(typeof(arcane) != "number"){
		alert("This guy cant magic, durrr");
		return;
		}
	var boost = confirm("Do you wish to boost your hit");
	if(boost)
	{
		var die = roll3d6();
		var roll = die[0] + arcane;
		if(!die[1]) result += "To Hit  : "  + roll + "   ; ";
		else result += "To Hit  : "   + roll + " Crit    ; ";	
	}	
	else{
	var die = roll2d6();
		var roll = die[0] + arcane;
		if(!die[1]) result += "To Hit  : "  + roll + "   ; ";
		else result += "To Hit  : "   + roll + " Crit    ; ";
	}
	var power = prompt(result + "\n If you hit enter the power of you spell here\n Else press cancel");
	if(typeof(power) != "string") return;
	else power = parseInt(power);
	result = "";
	boost = confirm("Do you wish to boost your damage")
	if(boost){
	die = roll3d6();
	roll = die[0] + power;
	result += "Damage : " + roll + " ";
	die = rolld6();
	result += "to " + die;
	alert(result);
	}
	else{
	die = roll3d6();
	roll = die[0] + power;
	result += "Damage : " + roll + " ";
	die = rolld6();
	result += "to " + die;
	alert(result);
	}
}

function normalRoll(hit, dmg)
{
var result = "";
	for(i=0; i<dmg.length; i++)
	{
		var die = roll2d6();
		var roll = die[0] + hit;
		if(!die[1]) result += "To Hit "+ (i+1) +" :   " + roll + "   ; ";
		else result += "To Hit "+ (i+1) +" :   " + roll + " Crit    ; ";
		die = roll2d6();
		roll = die[0] + dmg[i];
		result += "Damage :   " + roll + "    ";
		die = rolld6();
		result += "To :       " + die + "\n\n";
	}
	document.getElementById("normal").checked=true;
	alert(result);
}

function Charge(hit, dmg)
{
	var result = "";
	for(i=0; i<dmg.length; i++)
	{	if(i == 0){
		var die = roll2d6();
		var roll = die[0] + hit;
		if(!die[1]) result += "To Hit "+ (i+1) +" :   " + roll + "   ; ";
		else result += "To Hit "+ (i+1) +" :   " + roll + " Crit    ; ";
		die = roll3d6();
		roll = die[0] + dmg[i];
		result += "Damage :   " + roll + "    ";
		die = rolld6();
		result += "To :       " + die + "\n\n";
		}
		else{
		var die = roll2d6();
		var roll = die[0] + hit;
		if(!die[1]) result += "To Hit "+ (i+1) +" :   " + roll + "   ; ";
		else result += "To Hit "+ (i+1) +" :   " + roll + " Crit    ; ";
		die = roll2d6();
		roll = die[0] + dmg[i];
		result += "Damage :   " + roll + "    ";
		die = rolld6();
		result += "To :       " + die + "\n\n";
		}
	}
	document.getElementById("normal").checked=true;
	alert(result);
}

function Mighty(hit, dmg)
{
var result = "";
	for(i=0; i<dmg.length; i++)
	{
		var die = roll2d6();
		var roll = die[0] + hit;
		if(!die[1]) result += "To Hit "+ (i+1) +" :   " + roll + "   ; ";
		else result += "To Hit "+ (i+1) +" :   " + roll + " Crit    ; ";
		die = roll3d6();
		roll = die[0] + dmg[i];
		result += "Damage :   " + roll + "    ";
		die = rolld6();
		result += "To :       " + die + "\n\n";
	}
	document.getElementById("normal").checked=true;
	alert(result);
}

function chargeMighty(hit, dmg)
{
	var result = "";
	for(i=0; i<dmg.length; i++)
	{	if(i == 0){
		var die = roll2d6();
		var roll = die[0] + hit;
		if(!die[1]) result += "To Hit "+ (i+1) +" :   " + roll + "   ; ";
		else result += "To Hit "+ (i+1) +" :   " + roll + " Crit    ; ";
		die = roll4d6();
		roll = die[0] + dmg[i];
		result += "Damage :   " + roll + "    ";
		die = rolld6();
		result += "To :       " + die + "\n\n";
		}
		else{
		var die = roll2d6();
		var roll = die[0] + hit;
		if(!die[1]) result += "To Hit "+ (i+1) +" :   " + roll + "   ; ";
		else result += "To Hit "+ (i+1) +" :   " + roll + " Crit    ; ";
		die = roll3d6();
		roll = die[0] + dmg[i];
		result += "Damage :   " + roll + "    ";
		die = rolld6();
		result += "To :       " + die + "\n\n";
		}
	}
	document.getElementById("normal").checked=true;
	alert(result);
	}

function statLine(number)
{
	var statline = "";
	var npc = forbattle[number];
	statline += "Name : " + npc.name + "\n\n";
	statline += "SPD : " + npc.speed + "  Str :  " + npc.str + "  Mat : " + npc.mat + "  Rat : " + npc.rat + "  Def : " + npc.def + "  Arm : " + npc.arm + "\n\n";
	statline += "Will : " + npc.will + "  Initiative : " + npc.init + "  Dedect : " + npc.detect + "  Sneak : " + npc.sneak + "\n\n";
	if(typeof npc.arcane != "undefined") statline += "Arcane stat : " + npc.arcane + "\n";
	statline += "P+S : " + npc.ps + "  R.pow : " + npc.pow + "\n\n";
	statline += npc.text + "\n\n";
	if(typeof npc.one == "undefined")
	statline += "Life : " + npc.life + "  Base : " + npc.base + "  Encounter Points : "  + npc.epoints;
	else
	{
	statline += "Branches : \n\n";
	var branch = 1;
	for(i = 0; i<6; i++)
	{
		var currbranch = setBranch(npc, branch);
		statline += currbranch + " : ";
		for(j=0; j< npc[currbranch]; j++)
			statline += "* ";
		branch++;	
		statline += "\n";	
	}
	statline += "\n\nLife : " + npc.life + "  Base : " + npc.base + "  Encounter Points : "  + npc.epoints;
	}
	alert(statline);
}

function statusChange(number)
{
	var npc = forbattle[number];
	var statusbutton = document.getElementById("btn-status"+number);
	var newstatus = prompt("What is the status change ? ");
	if(newstatus[0] == "+")
	{
		newstatus = newstatus.replace("+", "");
		newstatus = parseInt(newstatus);
		if(typeof npc.one != "undefined") 
		{
			heavyHeal(npc, newstatus, statusbutton);
			return;
		}
		else
		{
			heal(npc, newstatus, statusbutton);
			return;
		}
	}
	if(newstatus == "1" || newstatus == "2" || newstatus == "3" || newstatus == "4" || newstatus == "5" || newstatus == "6" || newstatus == "7" || newstatus == "8" || newstatus == "9" || newstatus == "10" || newstatus == "11" || newstatus == "12" || newstatus == "13" || newstatus == "14" || newstatus == "15" || newstatus == "16" || newstatus == "17" || newstatus == "18" || newstatus == "19" || newstatus == "20" ) newstatus = parseInt(newstatus);
	if(typeof newstatus == "number") 
	{
			if(typeof npc.one != "undefined")
			{
				if((npc.life - newstatus) <= 0)
				{	
					npc.status = "dead";
					statusbutton.innerText = "DEAD";
					return;
				}	
				var branch = parseInt(prompt("What branch ?"));
				heavyDamage(npc, newstatus, statusbutton, branch);
			}
			else Damage(npc, newstatus, statusbutton);
	}       
	else statusUpdate(npc, newstatus, statusbutton);
}

function statusUpdate(npc, newstatus, button)
{
	button.innerText = "Status: " + npc.status + ", " + newstatus + "\n" + "  Life: " + npc.life;
}

function heal(npc, heal, statusbutton)
{
	var i = 0;
	while(i<heal)
	{
		if(npc.life == npc.maxlife) break;
		npc.life += 1;
		i++;
	}
	statusbutton.innerText = "Status: " + npc.status + "  Life: " + npc.life;
}

function Damage(npc, damage, button)
{
	npc.life -= damage;
	if(npc.life <= 0)
	{
	npc.status = "dead";
	button.innerText = "DEAD";
	}
	else
	button.innerText = "Status: " + npc.status + "  Life: " + npc.life;
}

function heavyDamage(npc, damage, button, branch)
{
	var currentbranch = branch; //number of branch
	var branchmethod = setBranch(npc, currentbranch); // string for method
	for(i=0; i < damage; i++)
	{
		
		if(npc[branchmethod] == 0)
		{
			
			while(npc[branchmethod] == 0)
			{
			if(branchmethod == "six") 
			{
				branchmethod = "one"
				currentbranch = 1;
				continue;
			}	
			currentbranch++;
			branchmethod = setBranch(npc, currentbranch);
			}
		}
		npc.life -= 1;
		npc[branchmethod] -=1;
		if(npc.life <= 0)
		{	
			npc.status = "dead";
			button.innerText = "DEAD";
			break;
		}
	}
	if(npc.life > 0)
		button.innerText = "Status: " + npc.status + "  Life: " + npc.life;
	if(npc.one == 0 && npc.two == 0 && !npc.status.match("-2 damage"))
		npc.status += ", -2 damage";
	if(npc.three == 0 && npc.four == 0 && !npc.status.match("-2 hit"))
		npc.status += ", -2 hit";
	if(npc.five == 0 && npc.six == 0 && !npc.status.match("no spell/upkeep"))
		npc.status += ", no spell/upkeep";
	button.innerText = "Status: " + npc.status + "  Life: " + npc.life;	
}

function heavyHeal(npc, heal, statusbutton)
{
	if(npc.life + heal >= npc.maxlife)
	{
		npc.life = npc.maxlife;
		npc.one = npc.onemax;
		npc.two = npc.twomax;
		npc.three = npc.threemax;
		npc.four = npc.fourmax;
		npc.five = npc.fivemax;
		npc.six = npc.sixmax;
		if((npc.one > 0 || npc.two > 0) && npc.status.match(", -2 damage"))
		{
		var n = npc.status.replace(", -2 damage", "");
		npc.status = n;
		}
	if((npc.three > 0 || npc.four > 0) && npc.status.match("-2 hit"))
		{
		var n = npc.status.replace(", -2 hit", "");
		npc.status = n;
		}
	if((npc.five > 0 || npc.six > 0) && npc.status.match("no spell/upkeep"))
		{
		var n = npc.status.replace(", no spell/upkeep", "");
		npc.status = n;
		}
	statusbutton.innerText = "Status: " + npc.status + "  Life: " + npc.life;
		statusbutton.innerText = "Status: " + npc.status + "  Life: " + npc.life;
		return;
	}
	for(i=0; i<heal; i++)
	{
		var branch = prompt("Current Health:      Max Health: \none: "+npc.one+"           one: "+ npc.onemax + "\ntwo: "+npc.two+"           two: "+npc.twomax+"\nthree: "+npc.three+"           three: "+npc.threemax+"\nfour: "+npc.four+"           four: "+npc.fourmax+"\nfive: "+npc.five+"           five: "+npc.fivemax+"\nsix: "+npc.six+"           six: "+npc.sixmax + "\nwhere do you want to heal");
		branch = parseInt(branch);
		var branchstring = setBranch(npc, branch);
		if(npc[branchstring] == npc[branchstring + "max"])
		{
			heal++;
			alert("that branch is full");
		}
		else{
			npc[branchstring] += 1;
			npc.life += 1;
			statusbutton.innerText = "Status: " + npc.status + "  Life: " + npc.life;
		}		
	}
	if((npc.one > 0 || npc.two > 0) && npc.status.match(", -2 damage"))
		{
		var n = npc.status.replace(", -2 damage", "");
		npc.status = n;
		}
	if((npc.three > 0 || npc.four > 0) && npc.status.match("-2 hit"))
		{
		var n = npc.status.replace(", -2 hit", "");
		npc.status = n;
		}
	if((npc.five > 0 || npc.six > 0) && npc.status.match("no spell/upkeep"))
		{
		var n = npc.status.replace(", no spell/upkeep", "");
		npc.status = n;
		}
	statusbutton.innerText = "Status: " + npc.status + "  Life: " + npc.life;	
}

function setBranch(npc, branch)
{	
	if(branch == 1) return "one";
	if(branch == 2) return "two";
	if(branch == 3) return "three";
	if(branch == 4) return "four";
	if(branch == 5) return "five";
	if(branch == 6) return "six";
}