//need to build a class for the Player and a class for the Non-Player Characters
//Should I just have the NPC class extend from the initial Player class?
//Need to also then create the game object
//inside the game object, I'll need to have these properties:
// name, player, timer, interval, alive, equipment, Objective (win and loss)
//
// Need event listeners 
class Player {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.strength = 8;
        this.charisma = 8;
        this.speed = 8;
        this.accuracy = 0;
        this.weapon = [0];
        this.heal = [0];
    }
    displayName() {
        $('#name').text(` ${this.name}`);
    }
    displayHealth() {
        $('#health').text(`Health Max ${game.currentPlayer.health}`);
    }
    displayWeapon() {
        $('#weapon').text(`Weapon ${game.currentPlayer.weapon}`);
    }
    toHit() {
        this.accuracy = this.strength + this.speed + this.weapon[0];
    }
    charm() {
        this.charisma = this.charisma + Math.floor(Math.random() * (6 - 1) + 1);
    }
    run() {
        this.speed = this.speed + Math.floor(Math.random() * (4 - 1) + 1);
    }
    healing() {
        this.health = this.health + this.heal[0];
    }
    increaseStrength() {
        this.strength = this.strength + Math.floor(Math.random() * (6 - 1) + 1);
    }
    increaseSpeed() {
        this.speed = this.strength + Math.floor(Math.random() * (6 - 1) + 1);
    }
    increaseCharisma() {
        this.charisma = this.charisma + Math.floor(Math.random() * (10 - 1) + 1)
    }
    // attackWithSword() {
    //     let number = 0
    //     let attack = this.strength + (this.speed / 2) + Math.floor(Math.random() * (9 - 1) + 1);
    //     // attack = game.currentNonPlayer.health - attack;
    // }
    // attackWithDagger() {
    //     let number = 0
    //     let attack = (this.strength / 2) + this.speed + Math.floor(Math.random() * (4 - 1) + 1);
    //     console.log(attack);
    // }
    pickUpSword() {
        this.weapon.splice(0, 1, game.sword)
        console.log(this.weapon);
    }
    pickUpDagger() {
        this.weapon.splice(0, 1, game.dagger)
        console.log(this.weapon);
    }
    pickUpAx() {
        this.weapon.splice(0, 1, game.ax)
        console.log(this.weapon);
    }
    pickUpHealthPotion() {
        this.heal.splice(0, 1, game.healthPotion)
        console.log(this.heal);
    }

};



class NonPlayerCharacter extends Player {
    constructor(name) {
        super(name);
        this.health = Math.floor(Math.random() * (100 - 1) + 1);
        this.strength = Math.floor(Math.random() * (10 - 1) + 2);
        this.charisma = Math.floor(Math.random() * (8 - 1) + 1);
        this.speed = Math.floor(Math.random() * (10 - 1) + 1);
        this.accuracy = Math.floor(Math.random() * (10 - 1) + 1);

    }
    toHit() {
        this.accuracy = this.strength + this.speed + Math.floor(Math.random() * (10 - 1) + 2);
    }
    charm() {
        this.charisma = this.charisma + Math.floor(Math.random() * (6 - 1) + 1);
    }
    run() {
        this.speed = this.speed + Math.floor(Math.random() * (4 - 1) + 1);
    }
    // attackWithSword() {
    //     let number = 0
    //     let attack = this.strength + (this.speed / 2) + Math.floor(Math.random() * (9 - 1) + 1);
    //     console.log(attack);
    // }
}
class BossMonster extends Player {
    constructor(name) {
        super(name);
        this.health = Math.floor(Math.random() * (100 - 1) + 30);
        this.strength = Math.floor(Math.random() * (10 - 1) + 25);
        this.charisma = Math.floor(Math.random() * (8 - 1) + 1);
        this.speed = Math.floor(Math.random() * (10 - 1) + 7);
        this.accuracy = Math.floor(Math.random() * (10 - 1) + 5);

    }
    toHit() {
        this.accuracy = this.strength + this.speed + Math.floor(Math.random() * (10 - 1) + 15);
    }
};
// const w = new Player('bob')
// console.log(w);
// const n = new NonPlayerCharacter('tim')
// console.log(n);

const game = {
    name: "Aria",
    // npcName: "Gazorpa"
    currentPlayer: null,
    // health: 100,
    // enemyHealth: null,
    currentNonPlayer: null,
    screenPath: [],
    sword: Math.floor(Math.random() * (10 - 1) + 4),
    ax: Math.floor(Math.random() * (10 - 1) + 6),
    dagger: Math.floor(Math.random() * (6 - 1) + 2),
    healthPotion: Math.floor(Math.random() * (30 - 1) + 1),
    gameOn: false,
    isAlive: true,
    wonBattle: false,
    // lifeCheck: function() {
    //     if (this.currentPlayer.health === 0) {
    //         this.isAlive = false
    //     }
    // },
    // gameOver: function() {
    //     if (!this.isAlive) {
    //         // const newImg = "Amiri"
    //         $('#text-log').text(`GAME OVER!!!!`);

    //     }
    // },
    // battleWon: function() {
    //     if(this.currentNonPlayer.health <= 0) {
    //         this.wonBattle = true
    //         $('text-log').text(`You defeated the enemy!`)
    //     }
    // },
    battle: function() {
        game.currentPlayer.toHit();
        game.currentNonPlayer.toHit();
        if (game.currentPlayer.accuracy > game.currentNonPlayer.accuracy) {
            game.currentNonPlayer.health = game.currentNonPlayer.health - (game.currentPlayer.weapon[0] + this.currentPlayer.strength)
            $('#text-log').text(`The enemy's health is ${this.currentNonPlayer.health}`);

        }
        if (game.currentPlayer.accuracy < game.currentNonPlayer.accuracy) {
            game.currentPlayer.health = game.currentPlayer.health - game.currentNonPlayer.strength
            $('#text-log').text(` Your health is ${this.currentPlayer.health}`);


        }

        console.log(game.currentPlayer.accuracy);
        console.log(game.currentNonPlayer.accuracy);
    },
    bossBattle: function() {
        game.currentPlayer.toHit();
        game.currentBossMonster.toHit();
        if (game.currentPlayer.accuracy > game.currentBossMonster.accuracy) {
            game.currentBossMonster.health = game.currentBossMonster.health - (game.currentPlayer.weapon[0] + this.currentPlayer.strength)
            $('#text-log').text(`The enemy's health is ${this.currentBossMonster.health}`);

        }
        if (game.currentPlayer.accuracy < game.currentBossMonster.accuracy) {
            game.currentPlayer.health = game.currentPlayer.health - game.currentBossMonster.strength
            $('#text-log').text(` Your health is ${this.currentPlayer.health}`);


        }

    },
    story: function() {
        //beginning
        if (this.screenPath.length === 1 && this.screenPath[0] === 'first') {
            $('#text-log').text(`"Awaken"...These words are spoken in your mind as you draw breath. You gasp, and breath enters you as if for the first time. As you take your first breath, you stare into the dark sky, lit by unfamiliar stars. You don't know where you are. You try to conjure up an image of the last thing you remember...and it returns NOTHING. You do know your name...it is Aria. You look at your hands, your feet, scintillating bits of light flicker across them as you gaze upon both. The thought comes to your mind, "Were you always color-blind?" You look upon a world, in hues of black, white, and gray. The voice speaks to you again..."Find what was lost. Follow the PATH, and you shall be made WHOLE again. Stray and you will FAIL."`);

            $('#first').text(`Look Around`);
            $('#second').text(`Walk Forward`);
            $('#third').text(`Fall Back Asleep`);
        } 
        //Fall Back Asleep
        if(this.screenPath.length === 2 && this.screenPath[0] === 'first' && this.screenPath[1] === 'third') {
            $('#text-log').text(`You decide that your future self can handle any problem. Right now, you just feel so absolutely EXHAUSTED. As you lie your head down on the ground, visions swim across your mind's eye. You see images that seem familiar, but are empty for you. You achieve a sense of serenity, if not fulfillment. Life ebbs from you. Your PATH has ended. GAME OVER!`)
            $('#first').text(`Game Over`);
            $('#second').text(`Game Over`);
            $('#third').text(`Game Over`);
        }
        //Walk Forward, wander the forest and find a sword embedded in a tree
        if (this.screenPath.length === 2 && this.screenPath[0] === 'first' && this.screenPath[1] === 'second') {
            $('#text-log').text(`You must find out how you got here. You're not sure what this "path" is, but the implication is clear. You must move forward. As you walk through the forest, you find a forester's path. It makes travel a bit easier. As you travel along this path, you come upon an old, single-edged sword. The sword is lodged in a tree.`)
            $('#first').text(`Take the sword`);
            $('#second').text(`blank`); //want to add option to leave the sword
            $('#third').text(`blank`);
            game.currentPlayer.pickUpSword();
            game.currentPlayer.displayWeapon();
        }
        //take the sword and proceed to the Tower
        if (this.screenPath.length === 3 && this.screenPath[0] === 'first' && this.screenPath[1] === 'second' && this.screenPath[2] === 'first') {
            $('#text-log').text(`"If nobody is using it..." You place both hands on the hilt of the sword, and you pull with all your might. The sword moves only slightly at first, but with renewed effort you manage to rip the blade out of the tree trunk. A bright light bursts from the scar in the tree. As you cover your eyes in pain, you manage to glimpse through the bright light and into a strange cacophony of visions. As you stare into their depths, you see scenes of violence, glory, and victory. As you blink again, you look at the blade as it has been restored to new. `)
            $('#first').text(`That was...unexpected`);
            $('#second').text(`blank`); //want to add option 
            $('#third').text(`blank`);
        }
        if (this.screenPath.length === 4 && this.screenPath[0] === 'first' && this.screenPath[1] === 'second' && this.screenPath[2] === 'first' && this.screenPath[3] === 'first') {
            $('#text-log').text(`You proceed along the forester's path. Hours pass by, and yet, the world remains dark. The night sky still light by brilliant and beautiful stars. As you proceed forward you notice there is a stone path that leads up to a Tower.`)
            $('#first').text(`You head to the Tower entrance`);
            $('#second').text(`blank`);
            $('#third').text(`blank`);
        }
        //Should I look at bag?
        if (this.screenPath.length === 2 && this.screenPath[0] === 'first' && this.screenPath[1] === 'first') {
            $('#text-log').text(`As you look around you, your gaze catches upon the rumpled form of some kind of bundle or bag.`);
            $('#first').text(`Get up and Walk away`);
            $('#second').text(`Grab the bundle and look through it`);
            $('#third').text(`blank`);

        }
        //Get up and Walk away from bag
        if (this.screenPath.length === 3 && this.screenPath[0] === 'first' && this.screenPath[1] === 'first' && this.screenPath[2] === 'first') {
            $('#text-log').text(`That bag is suspicious. No way you're touching it! You get up and wander off in a direction. Any direction will do! You pick a mossy path and start walking. The forest feels like a dark and lively place. You listen to the many different noises that echo throughout the forest. You hear bird calls, the rustling of animals through brush, and the small bits of light that dapple your hand through the forest canopy. Time moves quickly. Hours pass by as you cross the forest. The further you go, the darker it gets. Soon, there is almost no light at all. As you grow wearier and more frightened, the ambient noises around you take a dark turn. Suddenly, you hear a loud, high-pitched whine behind you! `);
            this.currentNonPlayer = new NonPlayerCharacter('Wolverine');
            console.log(this.currentNonPlayer);
            $('#first').text(`Turn around!`);
            $('#second').text(`blank`);
            $('#third').text(`RUN!!!!!`);
        }
        //uh-oh turn around and face monster
        if (this.screenPath.length === 4 && this.screenPath[0] === 'first' && this.screenPath[1] === 'first' && this.screenPath[2] === 'first' && this.screenPath[3] === 'first') {
            $('#text-log').text(`As you quickly turn to face your foe, your gaze turns to a snarling mass of wicked teeth, sizeable muscle, and matted fur of some kind of wolf-like creature. It howls at you, bloodlust intent in its eyes. It slowly circles you, moving in a horrifyingly mesmerising pattern. The tension is palpable. You know that you must make a decision soon...It lets out a howl that shakes you to your core. `)
            $('#first').text(`Attack it!!!`);
            $('#second').text(`blank`); //want to add talking...
            $('#third').text(`blank`); //want to add a RUNN!!!!! option
        }
        // fight monster
        if (this.screenPath.length === 5 && this.screenPath[0] === 'first' && this.screenPath[1] === 'first' && this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first') {
            //need to run the game.battle() function until either the player's health
            //or the NPC's health is at or below 0
            //need to log the current player and NPC health on the text log
            //need to then reset the this.screenPath array length to 4
            if (this.currentNonPlayer.health < 0) {
                console.log('This logic was hit');
                $('#first').text(`One last strike!`);
                $('#buttons').on('click', (e) => {
                    game.story(e.target.id)
                    game.screenPath.push(e.target.id)
                    game.story();
                    e.preventDefault();
                });
                $('#first').off('click');
            }

            if (this.currentPlayer.health <= 0) {
                console.log('this logic was hit');
                $('#text-log').text(`You rise to fight the beast one last time. Covered in blood from the battle, the beast gets the best of you. You meet in a clash of fangs and fists. It RISES...YOU FALL... GAME OVER!!!`)
                $('#first').text(`Game Over`);
                $('#second').text(`Game Over`);
                $('#third').text(`Game Over`);
            }

            if (this.currentPlayer.health >= 0 && this.currentNonPlayer.health >= 0) {
                $('#buttons').off('click');
                $('#first').on('click');
                // $('#text-log').text(` `)
                $('#text-log').text(`You pummel the enemy with your bare fists! The enemy's current health is ${this.currentNonPlayer.health}! The enemy strikes you! Your health is  ${this.currentPlayer.health}`)
                
            }
        }
        //defeat the wolverine
        if (this.screenPath.length === 6 && this.screenPath[0] === 'first' && this.screenPath[1] === 'first' && this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' && this.screenPath[5] === 'first') {
            $('#text-log').text(`The hairy beast leaps toward you, in one final attempt to claim your life. You find strength where you had none before and you leap into the air! As you wrap your arms around the beast's neck, you pull with all your STRENGTH! The beast falls to the ground, defeated. You stumble to your feet, shaken. You've never killed anything before...  In front of you, there is an entrance to a cave.`)
            $('#first').text(`Turn Back`);
            $('#second').text(`blank`); //want to add chance to get to cave
            $('#third').text(`blank`);

        }
        //Do not enter the cave
        if (this.screenPath.length === 8 && this.screenPath[0] === 'first' && this.screenPath[1] === 'first' && this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' && this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first') {
            $('#text-log').text(`You turn back. The cave is far too eerie to enter. You wander the forest for what feels like hours, attempting to find your way back to where you started. Finally you spot something in the distance. A lonely stone tower. `)
            $('#first').text(`Keep Searching for where you started`);
            $('#second').text(`Head Towards the Tower`);
            $('#third').text(`blank`);
        }
        //At Tower entrance
        if (this.screenPath.length === 10 && this.screenPath[0] === 'first' && this.screenPath[1] === 'first' &&
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' &&
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first' &&
            this.screenPath[8] === 'second' && this.screenPath[9] === 'second' || this.screenPath.length === 13 && 
            this.screenPath[0] === 'first' && this.screenPath[1] === 'first' &&
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' &&
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first' &&
            this.screenPath[8] === 'second' && this.screenPath[9] === 'second' && this.screenPath[10] === 'first' && 
            this.screenPath[11] === 'first' && this.screenPath[12] === 'second' 
            // || this.screenPath.length === 5 && this.screenPath[0] === 'first' && this.screenPath[1] === 'second' && 
            // this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first'
            )
             {
            $('#text-log').text(`You're determined to find out why you are here and who you are. No creepy-looking tower will keep you from following the PATH. As you approach, the tower looms over you. It's structure is dilapidated and broken. A high-rise of a structure, at least 200 feet tall. A large tall door stands at the front. You see a hedge path wind around the backend of the tower.`)
            $('#first').text(`Approach the Door`);
            $('#second').text(`Follow the Hedge path`);
            $('#third').text(`blank`);
        }
        //Follow the Hedge Path to the AX (I want to add a combat encounter here)
        if(this.screenPath.length === 12 && this.screenPath[0] === 'first' && this.screenPath[1] === 'first' &&
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' &&
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first' &&
            this.screenPath[8] === 'second' && this.screenPath[9] === 'second' && this.screenPath[10] === 'second' && this.screenPath[11] === 'second' 
             || this.screenPath.length === 15 && 
            this.screenPath[0] === 'first' && this.screenPath[1] === 'first' &&
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' &&
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first' &&
            this.screenPath[8] === 'second' && this.screenPath[9] === 'second' && this.screenPath[10] === 'first' &&
            this.screenPath[11] === 'first' && this.screenPath[12] === 'second' && this.screenPath[13] === 'second' && this.screenPath[14] === 'second') {
            $('#text-log').text(`You choose to head down the Hedge Path. As you walk down the path, your world slowly shrinks. The hedge on both sides and the path in front of you are all you can see. The stars in the night sky move, but day does not appear. "Is it always night here?" Time stretches onward as you move forward through the hedge path. After some time, you come upon a glowing red ax, embedded in a tree stump.`)
            $('#first').text(`Pick up the ax`);
            $('#second').text(`That's suspiciously glowing...better keep going`);
            $('#third').text(`blank`);
        }
        // Pick up the ax (a glowing talking ax? Cool) (I want to add a charisma check to this step)
        if(this.screenPath.length === 14 && this.screenPath[0] === 'first' && this.screenPath[1] === 'first' &&
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' &&
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first' &&
            this.screenPath[8] === 'second' && this.screenPath[9] === 'second' && this.screenPath[10] === 'second' && 
            this.screenPath[11] === 'second' && this.screenPath[12] === 'first' && this.screenPath[13] === 'first'  
            || this.screenPath.length === 17 && this.screenPath[0] === 'first' && this.screenPath[1] === 'first' &&
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' &&
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first' &&
            this.screenPath[8] === 'second' && this.screenPath[9] === 'second' && this.screenPath[10] === 'first' &&
            this.screenPath[11] === 'first' && this.screenPath[12] === 'second' && this.screenPath[13] === 'second' && 
            this.screenPath[14] === 'second' && this.screenPath[15] === 'first' && this.screenPath[16] === 'first') {
            $('#text-log').text(`You grab the glowing ax handle and pull with all your MIGHT! As you pull, a brilliant light erupts from the summit of the stump. The AX comes FREE!!! and a voice speaks in your head! "FRREEEDDOOMM!!!!!! Thank you for freeing me. Shall we go destroy evil?`)
            $('#first').text(`blank`); //want to add another option here
            $('#second').text(`A talking, glowing ax...COOL!`); 
            $('#third').text(`blank`);
            game.currentPlayer.pickUpAx();
            game.currentPlayer.displayWeapon();
        }
        // You take the ax 
          if(this.screenPath.length === 16 && this.screenPath[0] === 'first' && this.screenPath[1] === 'first' &&
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' &&
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first' &&
            this.screenPath[8] === 'second' && this.screenPath[9] === 'second' && this.screenPath[10] === 'second' && 
            this.screenPath[11] === 'second' && this.screenPath[12] === 'first' && this.screenPath[13] === 'first' && 
            this.screenPath[14] === 'second' && this.screenPath[15] === 'second' 
            || this.screenPath.length === 19 && this.screenPath[0] === 'first' && this.screenPath[1] === 'first' &&
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' &&
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first' &&
            this.screenPath[8] === 'second' && this.screenPath[9] === 'second' && this.screenPath[10] === 'first' &&
            this.screenPath[11] === 'first' && this.screenPath[12] === 'second' && this.screenPath[13] === 'second' && 
            this.screenPath[14] === 'second' && this.screenPath[15] === 'first' && this.screenPath[16] === 'first' && 
            this.screenPath[17] === 'second' && this.screenPath[18] === 'second') {
            $('#text-log').text(` You hear the cheerful voice of your ax speak to you again, "Hey I think we should head back to the tower! I think there is EVIL in there!" You take your new friend and head back to the tower entrance`)
            $('#first').text(`Better keep going!`); //head back to the tower entrance
            $('#second').text(`blank`);
            $('#third').text(`blank`);
        }
        //preliminary path for no ax situation Hedge Path
        if(this.screenPath.length === 14 && this.screenPath[0] === 'first' && this.screenPath[1] === 'first' &&
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' &&
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first' &&
            this.screenPath[8] === 'second' && this.screenPath[9] === 'second' && this.screenPath[10] === 'second' && this.screenPath[11] === 'second' 
            && this.screenPath[12] === 'second' && this.screenPath[13] === 'second'
            || this.screenPath.length === 17 && 
            this.screenPath[0] === 'first' && this.screenPath[1] === 'first' &&
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' &&
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first' &&
            this.screenPath[8] === 'second' && this.screenPath[9] === 'second' && this.screenPath[10] === 'first' &&
            this.screenPath[11] === 'first' && this.screenPath[12] === 'second' && this.screenPath[13] === 'second' && 
            this.screenPath[14] === 'second' && this.screenPath[15] === 'second' && this.screenPath[16] === 'second') {
            $('#text-log').text(`You move forward, following the Hedge path as it leads you forward. The Hedge path closes behind you with each further step...`) 
            $('#first').text(`Better keep going!`); 
            $('#second').text(`blank`);
            $('#third').text(`blank`);
            }
        //You keep following the Hedge Path with the ax or no ax and encounter a horrifying shadow monster
        if(this.screenPath.length === 18 && this.screenPath[0] === 'first' && this.screenPath[1] === 'first' &&
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' &&
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first' &&
            this.screenPath[8] === 'second' && this.screenPath[9] === 'second' && this.screenPath[10] === 'second' && 
            this.screenPath[11] === 'second' && this.screenPath[12] === 'first' && this.screenPath[13] === 'first' && 
            this.screenPath[14] === 'second' && this.screenPath[15] === 'second' && this.screenPath[16] === 'first' 
            && this.screenPath[17] === 'first'
            || this.screenPath.length === 21 && this.screenPath[0] === 'first' && this.screenPath[1] === 'first' &&
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' &&
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first' &&
            this.screenPath[8] === 'second' && this.screenPath[9] === 'second' && this.screenPath[10] === 'first' &&
            this.screenPath[11] === 'first' && this.screenPath[12] === 'second' && this.screenPath[13] === 'second' && 
            this.screenPath[14] === 'second' && this.screenPath[15] === 'first' && this.screenPath[16] === 'first' && 
            this.screenPath[17] === 'second' && this.screenPath[18] === 'second' && this.screenPath[19] === 'first' 
            && this.screenPath[20] === 'first'
            || this.screenPath.length === 16 && this.screenPath[0] === 'first' && this.screenPath[1] === 'first' &&
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' &&
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first' &&
            this.screenPath[8] === 'second' && this.screenPath[9] === 'second' && this.screenPath[10] === 'second' && 
            this.screenPath[11] === 'second' && this.screenPath[12] === 'second' && this.screenPath[13] === 'second' &&
            this.screenPath[14] === 'first' && this.screenPath[15] === 'first'
            || this.screenPath.length === 19 && 
            this.screenPath[0] === 'first' && this.screenPath[1] === 'first' &&
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' &&
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first' &&
            this.screenPath[8] === 'second' && this.screenPath[9] === 'second' && this.screenPath[10] === 'first' &&
            this.screenPath[11] === 'first' && this.screenPath[12] === 'second' && this.screenPath[13] === 'second' && 
            this.screenPath[14] === 'second' && this.screenPath[15] === 'second' && this.screenPath[16] === 'second' &&
            this.screenPath[17] === 'first' && this.screenPath[18] === 'first'
            ) {
            this.currentBossMonster = new BossMonster('The Shadow')
            $('#text-log').text(`You proceed forward along the Hedge path. As you do, you start becoming more and more lost. You begin to hear voices, images of times long past. As the voices of the night become louder and louder, a strange dark shadow coalesces its form near you. It starts to take form. A dark imitation of a human... `)
            $('#first').text(`blank`);
            $('#second').text(`blank`);
            $('#third').text(`ATTACK!!`);
        }
            //Combat encounter with shadow
            if(this.screenPath.length === 20 && this.screenPath[0] === 'first' && this.screenPath[1] === 'first' &&
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' &&
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first' &&
            this.screenPath[8] === 'second' && this.screenPath[9] === 'second' && this.screenPath[10] === 'second' && 
            this.screenPath[11] === 'second' && this.screenPath[12] === 'first' && this.screenPath[13] === 'first' && 
            this.screenPath[14] === 'second' && this.screenPath[15] === 'second' && this.screenPath[16] === 'first' 
            && this.screenPath[17] === 'first' && this.screenPath[18] === 'third' && this.screenPath[19] === 'third'
            || this.screenPath.length === 23 && this.screenPath[0] === 'first' && this.screenPath[1] === 'first' &&
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' &&
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first' &&
            this.screenPath[8] === 'second' && this.screenPath[9] === 'second' && this.screenPath[10] === 'first' &&
            this.screenPath[11] === 'first' && this.screenPath[12] === 'second' && this.screenPath[13] === 'second' && 
            this.screenPath[14] === 'second' && this.screenPath[15] === 'first' && this.screenPath[16] === 'first' && 
            this.screenPath[17] === 'second' && this.screenPath[18] === 'second' && this.screenPath[19] === 'first' 
            && this.screenPath[20] === 'first' && this.screenPath[21] === 'third' && this.screenPath[22] === 'third'
            || this.screenPath.length === 18 && this.screenPath[0] === 'first' && this.screenPath[1] === 'first' &&
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' &&
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first' &&
            this.screenPath[8] === 'second' && this.screenPath[9] === 'second' && this.screenPath[10] === 'second' && 
            this.screenPath[11] === 'second' && this.screenPath[12] === 'second' && this.screenPath[13] === 'second' &&
            this.screenPath[14] === 'first' && this.screenPath[15] === 'first' && this.screenPath[16] === 'third' && 
            this.screenPath[17] === 'third'
            || this.screenPath.length === 21 && 
            this.screenPath[0] === 'first' && this.screenPath[1] === 'first' &&
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' &&
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first' &&
            this.screenPath[8] === 'second' && this.screenPath[9] === 'second' && this.screenPath[10] === 'first' &&
            this.screenPath[11] === 'first' && this.screenPath[12] === 'second' && this.screenPath[13] === 'second' && 
            this.screenPath[14] === 'second' && this.screenPath[15] === 'second' && this.screenPath[16] === 'second' &&
            this.screenPath[17] === 'first' && this.screenPath[18] === 'first' && this.screenPath[19] === 'third' && 
            this.screenPath[20] === 'third'
            ) {

            if (this.currentBossMonster.health < 0) {
                console.log('This logic was hit');
                $('#third').text(`One last strike!`);
                $('#buttons').on('click', (e) => {
                    game.story(e.target.id)
                    game.screenPath.push(e.target.id)
                    game.story();
                    e.preventDefault();
                });
                $('#third').off('click');
            }

            if (this.currentPlayer.health < 0) {
                console.log('this logic was hit');
                $('#text-log').text(`You rise to fight the shadow one last time. Covered in blood from the battle, the shadow gets the best of you. It RISES...YOU FALL... GAME OVER!!!`)
                $('#first').text(`Game Over`);
                $('#second').text(`Game Over`);
                $('#third').text(`Game Over`);
            }

            if (this.currentPlayer.health >= 0 && this.currentBossMonster.health >= 0) {
                $('#buttons').off('click');
                $('#third').on('click');
                // $('#text-log').text(` `)
                $('#text-log').text(`You battle the Shadow with all your might! The enemy's current health is ${this.currentBossMonster.health}! The enemy strikes you! Your health is  ${this.currentPlayer.health}`)
                
            }
        
        }
        //approach the door
        if (this.screenPath.length === 12 && this.screenPath[0] === 'first' && this.screenPath[1] === 'first' &&
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' &&
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first' &&
            this.screenPath[8] === 'second' && this.screenPath[9] === 'second' && this.screenPath[10] === 'first' && this.screenPath[11] === 'first' 
            || this.screenPath.length === 5 && this.screenPath[0] === 'first' && this.screenPath[1] === 'second' && 
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first')
        {
            $('#text-log').text(`You approach the massive wooden door. The door has two large ring door handles.`)
            $('#first').text(`Try pushing the doors open`);
            $('#second').text(`Turn back`); //still need to add more for sword path it is on 6 length here
            $('#third').text(`Maybe it would be polite to knock first...?`);
        }
        //push through the door and meet the HAMMER!!!
        if (this.screenPath.length === 13 && this.screenPath[0] === 'first' && this.screenPath[1] === 'first' &&
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' &&
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first' &&
            this.screenPath[8] === 'second' && this.screenPath[9] === 'second' && this.screenPath[10] === 'first' && 
            this.screenPath[11] === 'first' && this.screenPath[12] === 'first' 
            || this.screenPath.length === 6 && this.screenPath[0] === 'first' && this.screenPath[1] === 'second' && 
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' && this.screenPath[5] === 'first')
        {
            $('#text-log').text(`You don't have time to be polite! You push open the doors! As you enter, you hear a 'CRACK' and a swift sound of a solid object moving through the air. You see it to be a large HAMMER as it moves closer to smash you!`)
            $('#first').text(`Try to dodge!`);
            $('#second').text(`Accept your fate!`);
            $('#third').text(`blank`);
        }
        //you try to dodge by using the run function: Includes both fam
        if (this.screenPath.length === 16 && this.screenPath[0] === 'first' && this.screenPath[1] === 'first' &&
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' &&
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first' &&
            this.screenPath[8] === 'second' && this.screenPath[9] === 'second' && this.screenPath[10] === 'first' &&
            this.screenPath[11] === 'first' && this.screenPath[12] === 'first' && this.screenPath[13] === 'first' &&
            this.screenPath[14] === 'first' && this.screenPath[15] === 'first'
            || this.screenPath.length === 7 && this.screenPath[0] === 'first' && this.screenPath[1] === 'second' && 
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' && 
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first'
            ) {
            $('#first').text(`blank`);
            $('#second').text(`Try to Dodge!`);
            $('#third').text(`blank`);
            $('#buttons').off('click');
            $('#second').on('click');

            if (game.currentPlayer.speed >= 11) {
                $('#buttons').on('click', (e) => {
                    game.story(e.target.id)
                    game.screenPath.push(e.target.id)
                    game.story();
                    e.preventDefault();
                });
                $('#second').off('click');
                $('#text-log').text(`The world seemingly slows around you as the HAMMER approaches. You deftly roll out of the way as the HAMMER slams into the door behind you. It blocks your exit.`)
                $('#first').text(`Stand up!`);
                $('#second').text(`blank`);
                $('#third').text(`blank`);
            }
            if (game.currentPlayer.speed <= 10) {
                $('#text-log').text(`You just weren't fast enough as you meet your fate at the end of an immense HAMMER! Guess you should have knocked first,ehh??? Your PATH has ENDED! GAME OVER!!!`)
                $('#first').text(`Game Over`);
                $('#second').text(`Game Over`);
                $('#third').text(`Game Over`);

            }
        }
        //accepted fate and was smashed by the hammer
        if (this.screenPath.length === 16 && this.screenPath[0] === 'first' && this.screenPath[1] === 'first' &&
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' &&
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first' &&
            this.screenPath[8] === 'second' && this.screenPath[9] === 'second' && this.screenPath[10] === 'first' &&
            this.screenPath[11] === 'first' && this.screenPath[12] === 'first' && this.screenPath[13] === 'first' &&
            this.screenPath[14] === 'second' && this.screenPath[15] === 'second'
            || this.screenPath.length === 8 && this.screenPath[0] === 'first' && this.screenPath[1] === 'second' && 
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' && 
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'second'

            ) {
            $('#text-log').text(`You meet your fate at the end of an immense HAMMER. Guess you should have knocked first,ehh??? Your PATH has ENDED! GAME OVER!!!`)
            $('#first').text(`Game Over`);
            $('#second').text(`Game Over`);
            $('#third').text(`Game Over`);
        }
        //knock on the door
        if (this.screenPath.length === 13 && this.screenPath[0] === 'first' && this.screenPath[1] === 'first' &&
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' &&
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first' &&
            this.screenPath[8] === 'second' && this.screenPath[9] === 'second' && this.screenPath[10] === 'first' && this.screenPath[11] === 'first' && this.screenPath[12] === 'third'
            || this.screenPath.length === 6 && this.screenPath[0] === 'first' && this.screenPath[1] === 'second' && 
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' && 
            this.screenPath[5] === 'third'
            ) {
            $('#text-log').text(`You try knocking on the door, and wait for a response. A minute passes by with no acknowledgment. Well...at least you tried to be polite. `)
            $('#first').text(`Push open the door`);
            $('#second').text(`blank`);
            $('#third').text(`blank`);
        }
        //push open the door and enter the entrance hall
        if (this.screenPath.length === 15 && this.screenPath[0] === 'first' && this.screenPath[1] === 'first' &&
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' &&
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first' &&
            this.screenPath[8] === 'second' && this.screenPath[9] === 'second' && this.screenPath[10] === 'first' &&
            this.screenPath[11] === 'first' && this.screenPath[12] === 'third' && this.screenPath[13] === 'third' && 
            this.screenPath[14] === 'first' || this.screenPath.length === 17 && this.screenPath[0] === 'first' && 
            this.screenPath[1] === 'first' &&
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' &&
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first' &&
            this.screenPath[8] === 'second' && this.screenPath[9] === 'second' && this.screenPath[10] === 'first' &&
            this.screenPath[11] === 'first' && this.screenPath[12] === 'first' && this.screenPath[13] === 'first' &&
            this.screenPath[14] === 'first' && this.screenPath[15] === 'first' && this.screenPath[16] === 'first'
            || this.screenPath.length === 8 && this.screenPath[0] === 'first' && this.screenPath[1] === 'second' && 
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' && 
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first'
            || this.screenPath.length === 7 && this.screenPath[0] === 'first' && this.screenPath[1] === 'second' && 
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' && 
            this.screenPath[5] === 'third' && this.screenPath[6] === 'first' 
            ) {
            $('#text-log').text(`You see a large, round entrance hall. As you gaze around your vicinity, you see the crumbling remains of the rich and powerful. Beautiful tapestries once adorned the walls, hang stretched, ripped, and torn. Large wooden banquet tables line the area to your immediate left and right. All in various stages of decay. As you gaze across the room, you see a large stone throne across the room.`)
            $('#first').text(`That throne looks interesting`);
            $('#second').text(`blank`); //want to add a search the room
            $('#third').text(`blank`);
        }
        // first memory vignette increase charisma
        if (this.screenPath.length === 18 && this.screenPath[0] === 'first' && this.screenPath[1] === 'first' &&
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' &&
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first' &&
            this.screenPath[8] === 'second' && this.screenPath[9] === 'second' && this.screenPath[10] === 'first' &&
            this.screenPath[11] === 'first' && this.screenPath[12] === 'third' && this.screenPath[13] === 'third' && 
            this.screenPath[14] === 'first' && this.screenPath[15] === 'first' && this.screenPath[16] === 'first' && 
            this.screenPath[17] === 'first'
            || this.screenPath.length === 18 && this.screenPath[0] === 'first' && 
            this.screenPath[1] === 'first' &&
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' &&
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first' &&
            this.screenPath[8] === 'second' && this.screenPath[9] === 'second' && this.screenPath[10] === 'first' &&
            this.screenPath[11] === 'first' && this.screenPath[12] === 'first' && this.screenPath[13] === 'first' &&
            this.screenPath[14] === 'first' && this.screenPath[15] === 'first' && this.screenPath[16] === 'first' &&
            this.screenPath[17] === 'first' 
            || this.screenPath.length === 8 && this.screenPath[0] === 'first' && this.screenPath[1] === 'second' && 
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' && 
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first'
            || this.screenPath.length === 8 && this.screenPath[0] === 'first' && this.screenPath[1] === 'second' && 
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' && 
            this.screenPath[5] === 'third' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first'
            ) {
            game.currentPlayer.increaseCharisma();
            $('#text-log').text(`As you cross the room and near the throne, you start to experience a vision. Your sight begins to fade, colors whirling about you. Even as you close your eyes, you cannot escape the COLORS. As you open your eyes again, you see a young woman staring back at you. She has pale skin, and large teardrop brown eyes. Her hair is the color of honey. "Why can I see color again?" You realize that while she is "looking" at you, she isn't seeing you. You turn to face what she sees. As you do, your met with the image of a window. Outside the window, is an older woman and a man. Both share features with the young woman. They walk off, and for some reason, you know they never return. Around the edges of the vision a darkness begins to coalesce `)
            $('#first').text(`Keep walking towards the throne`);
            $('#second').text(`blank`);
            $('#third').text(`blank`);
        }
        //second memory vignette increase speed
        if (this.screenPath.length === 19 && this.screenPath[0] === 'first' && this.screenPath[1] === 'first' &&
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' &&
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first' &&
            this.screenPath[8] === 'second' && this.screenPath[9] === 'second' && this.screenPath[10] === 'first' &&
            this.screenPath[11] === 'first' && this.screenPath[12] === 'third' && this.screenPath[13] === 'third' && 
            this.screenPath[14] === 'first' && this.screenPath[15] === 'first' && this.screenPath[16] === 'first' && 
            this.screenPath[17] === 'first' && this.screenPath[18] === 'first'
            || this.screenPath.length === 19 && this.screenPath[0] === 'first' && 
            this.screenPath[1] === 'first' &&
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' &&
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first' &&
            this.screenPath[8] === 'second' && this.screenPath[9] === 'second' && this.screenPath[10] === 'first' &&
            this.screenPath[11] === 'first' && this.screenPath[12] === 'first' && this.screenPath[13] === 'first' &&
            this.screenPath[14] === 'first' && this.screenPath[15] === 'first' && this.screenPath[16] === 'first' &&
            this.screenPath[17] === 'first' && this.screenPath[18] === 'first'
            || this.screenPath.length === 9 && this.screenPath[0] === 'first' && this.screenPath[1] === 'second' && 
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' && 
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first'
            && this.screenPath[8] === 'first'
            || this.screenPath.length === 9 && this.screenPath[0] === 'first' && this.screenPath[1] === 'second' && 
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' && 
            this.screenPath[5] === 'third' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first'
            && this.screenPath[8] === 'first'
            ) {
            $('#text-log').text(`Your sight blurs again. You feel a wetness on your cheeks. Your hand reaches to your cheek and comes away wet. You're crying... As you walk forward, you begin to experience `)


        }
        //turn back from the Tower
        if (this.screenPath.length === 10 && this.screenPath[0] === 'first' && this.screenPath[1] === 'first' &&
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' &&
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first' && this.screenPath[8] === 'first' && this.screenPath[9] === 'first') {
            $('#text-log').text(`You've had your fair share of adventure already. Who knows what could be in that tower! You turn back into the forest. As you head deeper and deeper in, you realize your mistake. You are TRULY LOST. You wander aimlessly....`)
            $('#first').text(`Give up`);
            $('#second').text(`blank`);
            $('#third').text(`blank`);
        }
        //Path Ended in Game over
        if (this.screenPath.length === 11 && this.screenPath[0] === 'first' && this.screenPath[1] === 'first' &&
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' &&
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first' && this.screenPath[8] === 'first' &&
            this.screenPath[9] === 'first' && this.screenPath[10] === 'first') {
            $('#text-log').text(`Your PATH has ended. GAME OVER!`)
            $('#first').text(`Game Over`);
            $('#second').text(`Game Over`);
            $('#third').text(`Game Over`);
        }

    },

    start: function() {
        this.currentPlayer = new Player(this.name);
        this.currentNonPlayer = new NonPlayerCharacter("Gazorpa");
        this.currentBossMonster = new BossMonster('Shadow');
        // game.currentPlayer.pickUpDagger();
        game.currentPlayer.displayName();
        game.currentPlayer.displayWeapon();
        game.currentPlayer.displayHealth();
        // game.gameOver();
        // game.lifeCheck();
        console.log(game.currentNonPlayer);
        // game.story();
        // game.currentPlayer.pickUpSword();
        console.log(game.currentPlayer);
        // game.currentPlayer.attackWithSword();
        // game.currentPlayer.attackWithDagger();
        // game.battle();
        // console.log(game.currentPlayer.health);
    },

}



game.start();
// game.story();

$('#buttons').on('click', (e) => {

    // console.log(e.target.id);
    game.story(e.target.id)
    game.screenPath.push(e.target.id)
    game.story();
    e.preventDefault();

})



$('#first').on('click', (e) => {
    // $('#first').data('clicked', true);
    // game.turnOn();
    // game.start();
    // console.log(game.gameOn)
    game.battle();
    game.story();
    e.preventDefault();

})

$('#second').on('click', (e) => {

    game.story();
    game.currentPlayer.run();
    // game.bossBattle();


})
$('#third').on('click', (e) => {
    game.bossBattle();
    game.story();

})