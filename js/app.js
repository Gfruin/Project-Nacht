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
        this.charisma = 5;
        this.speed = 8;
        this.accuracy = 0;
        this.weapon = [0];
        // this.hunger = Math.floor(Math.random() * (10 - 1) + 1);
        // this.exhaustion = Math.floor(Math.random() * (10 - 1) + 1);
        // this.rage = 6;
        // this.age = Math.floor(Math.random() * (100 - 1) + 1);
    }
    displayName() {
        $('#name').text(` ${this.name}`);
    }
    toHit() {
        this.accuracy = this.strength + this.speed + this.weapon[0];
    }
    charm() {
        this.charisma = this.charisma + Math.floor(Math.random() * (6 - 1) + 1);
    }
    run() {
        this.speed = this.speed + Math.floor(Math.random() * (6 - 1) + 1);
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
        this.speed = this.speed + Math.floor(Math.random() * (6 - 1) + 1);
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
        this.strength = Math.floor(Math.random() * (10 - 1) + 8);
        this.charisma = Math.floor(Math.random() * (8 - 1) + 1);
        this.speed = Math.floor(Math.random() * (10 - 1) + 6);
        this.accuracy = Math.floor(Math.random() * (10 - 1) + 5);

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

            // this.lifeCheck();
            // this.gameOver();
            // this.battleWon();
        }

        console.log(game.currentPlayer.accuracy);
        console.log(game.currentNonPlayer.accuracy);
    },
    story: function() {
        //beginning
        if (this.screenPath.length === 1 && this.screenPath[0] === 'first') {
            $('#text-log').text(`Awaken...These words are spoken in your mind as you draw breath. You gasp, and breath enters you as if for the first time. As you take your first breath, you stare into the dark sky, lit by unfamiliar stars. You don't know where you are. You try to conjure up an image of the last thing you remember...and it returns NOTHING. You do know your name...it is Aria. You look at your hands, your feet, scintillating bits of light flicker across them as you gaze upon both. The thought comes to your mind, "Were you always color-blind?" You look upon a world, in hues of black, white, and gray. The voice speaks to you again..."Find what was lost. Follow the PATH, and you shall be made WHOLE again. Stray and you will FAIL."`);

            $('#first').text(`Look Around`);
            $('#second').text(`Walk Forward`);
            $('#third').text(`Fall Back Asleep`);
        } //Should I look at bag?
        if (this.screenPath.length === 2 && this.screenPath[0] === 'first' && this.screenPath[1] === 'first') {
            $('#text-log').text(`As you look around you, your gaze catches upon the rumpled form of some kind of bundle or bag.`);
            $('#first').text(`Get up and Walk away`);
            $('#second').text(`Grab the bundle and look through it`);
            $('#third').text(`blank`);

        }
            //Get up and Walk away from bag
        if (this.screenPath.length === 3 && this.screenPath[0] === 'first' && this.screenPath[1] === 'first' && this.screenPath[2] === 'first') {
            $('#text-log').text(`That bag is suspicious. No way you're touching it! You get up, and wander off in a direction. Any direction will do! You pick a mossy path and start walking. The forest feels like a dark and lively place. You listen to the many different noises that echo throughout the forest. You hear bird calls, the rustling of animals through brush, and the small bits of light that dapple your hand through the forest canopy. Time moves quickly. Hours pass by as you cross the forest. The further you go, the darker it gets. Soon, there is almost no light at all. As you grow wearier and more frightened, the ambient noises around you take a dark turn. Suddenly, you hear a loud, high-pitched whine behind you! `);
            this.currentNonPlayer = new NonPlayerCharacter('Wolverine');
            console.log(this.currentNonPlayer);
            $('#first').text(`Turn around!`);
            $('#second').text(`Try talking`);
            $('#third').text(`RUN!!!!!`);
        }
            //uh-oh turn around and face monster
        if (this.screenPath.length === 4 && this.screenPath[0] === 'first' && this.screenPath[1] === 'first' && this.screenPath[2] === 'first' && this.screenPath[3] === 'first') {
            $('#text-log').text(`As you quickly turn to face your foe, your gaze turns to a snarling mass of wicked teeth, sizeable muscle, and matted fur of some kind of wolf-like creature. It howls at you, bloodlust intent in its eyes. It slowly circles you, moving in a horrifyingly mesmerising pattern. The tension is palpable. You know that you must make a decision soon...It lets out a howl that shakes you to your core. `)
            $('#first').text(`Attack it!!!`);
            $('#second').text(`Try talking`);
            $('#third').text(`RUN!!!!!`);
        }
            // fight monster
        if (this.screenPath.length === 5 && this.screenPath[0] === 'first' && this.screenPath[1] === 'first' && this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first') {
            //need to run the game.battle() function until either the player's health
            //or the NPC's health is at or below 0
            //need to log the current player and NPC health on the text log
            //need to then reset the this.screenPath array length to 4
            if (this.currentNonPlayer.health <= 0) {
                console.log('This logic was hit');
                $('#buttons').on('click', (e) => {
                    game.story(e.target.id)
                    game.screenPath.push(e.target.id)
                    game.story();
                    e.preventDefault();
                });
                $('#first').off('click');
                $('#first').text(`One last strike!`);
            }

            if (this.currentPlayer.health <= 0) {
                console.log('this logic was hit');
                $('#text-log').text(`You rise to fight the beast one last time. Covered in blood from the battle, the beast gets the best of you. You meet in a clash of fangs and fists. It RISES...YOU FALL... GAME OVER!!!`)

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
            $('#text-log').text(`The hairy beast leaps toward you, in one final attempt to claim your life. You find strength where you had none before and you leap into the air! As you wrap your arms around the beasts neck, you pull with all your STRENGTH! The beast falls to the ground, defeated. You stumble to your feet, shaken. You've never killed anything before...  In front of you, there is an entrance to a cave.`)
            $('#first').text(`Turn Back`);
            $('#second').text(`Walk in`);
            $('#third').text(`blank`);

        }
            //Do not enter the cave
        if (this.screenPath.length === 8 && this.screenPath[0] === 'first' && this.screenPath[1] === 'first' && this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' && this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first') {
            $('#text-log').text(`You turn back. The cave is far too eerie to enter. You wander the forest for what feels like hours, attempting to find your way back to where you started. Finally you spot something in the distance. A lonely stone tower. `)
            $('#first').text(`Keep Searching for where you started`);
            $('#second').text(`Head Towards the Tower`);
            $('#third').text(`blank`);
        }
            //Head towards the Tower
        if (this.screenPath.length === 10 && this.screenPath[0] === 'first' && this.screenPath[1] === 'first' &&
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' &&
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first' &&
            this.screenPath[8] === 'second' && this.screenPath[9] === 'second' || this.screenPath.length === 12 && this.screenPath.length === 10 && this.screenPath[0] === 'first' && this.screenPath[1] === 'first' &&
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' &&
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first' &&
            this.screenPath[8] === 'second' && this.screenPath[9] === 'second' && this.screenPath[10] === 'first' && this.screenPath[11] === 'first' && this.screenPath[12] === 'second') {
            $('#text-log').text(`You're determined to find out why you are here and who you are. No creepy-looking tower will keep you from following the PATH. As you approach, the tower looms over you. It's structure is dilapidated and broken. A high-rise of a structure, at least 200 feet tall. A large tall door stands at the front. You see a hedge path wind around the backend of the tower.`)
            $('#first').text(`Approach the Door`);
            $('#second').text(`Follow the Hedge path`);
            $('#third').text(`blank`);
        }
            //approach the door
        if (this.screenPath.length === 11 && this.screenPath[0] === 'first' && this.screenPath[1] === 'first' &&
            this.screenPath[2] === 'first' && this.screenPath[3] === 'first' && this.screenPath[4] === 'first' &&
            this.screenPath[5] === 'first' && this.screenPath[6] === 'first' && this.screenPath[7] === 'first' &&
            this.screenPath[8] === 'second' && this.screenPath[9] === 'second' && this.screenPath[10] === 'first') {
            $('#text-log').text(`You approach the massive wooden door. The door has two large ring door handles.`)
            $('#first').text(`Try pushing the doors open`);
            $('#second').text(`Turn back`);
            $('#third').text(`Maybe it would be polite to knock first...?`);
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
        // this.currentNonPlayer = new NonPlayerCharacter("Gazorpa");
        // game.currentPlayer.pickUpDagger();
        game.currentPlayer.displayName();
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


})
$('#third').on('click', (e) => {


})