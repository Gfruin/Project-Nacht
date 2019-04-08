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
        this.charisma = 10;
        this.speed = 8;
        this.accuracy = 0;
        this.weapon = [];
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
        this.weapon.push(game.sword)
        console.log(this.weapon);
    }
    pickUpDagger() {
        this.weapon.push(game.dagger)
        console.log(this.weapon);
    }

}



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
}
const w = new Player('bob')
console.log(w);
const n = new NonPlayerCharacter('tim')
console.log(n);


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
    battle() {
        game.currentPlayer.toHit();
        game.currentNonPlayer.toHit();
        if (game.currentPlayer.accuracy > game.currentNonPlayer.accuracy) {
            game.currentNonPlayer.health = game.currentNonPlayer.health - game.currentPlayer.weapon[0]
            console.log(game.currentNonPlayer.health);
        }
        if (game.currentPlayer.accuracy < game.currentNonPlayer.accuracy) {
            game.currentPlayer.health = game.currentPlayer.health - game.currentNonPlayer.strength
            console.log(game.currentPlayer.health);

        }
        console.log(game.currentPlayer.accuracy);
        console.log(game.currentNonPlayer.accuracy);
    },


    // story(buttonId) {
    //     console.log(buttonId);
    //     // let path = 
    //     const wakeUp = $('#text-log').text(`Awaken...These words are spoken in your mind as you draw breath. You gasp, and breath enters you as if for the first time. As you take your first breath, you stare into the dark sky, lit by unfamiliar stars.`);
    //     $('#first').text(`Look Around`);
    //     $('#second').text(`Walk Forward`);
    //     $('#third').text(`Fall Back Asleep`);

        // let lookAround;

    //     switch (buttonId) {
    //         case 'first':
    //             lookAround = $('#text-log').text(`As you look around you, your gaze catches upon a solid bundle back behind you.`);
    //             $('#first').text(`Get up and Walk away`);
    //             $('#second').text(`Grab the bundle and look through it`);
    //             $('#third').text(`blank`);
    //             //above is what I want one of my screens to look like
    //             path1 = (buttonId) => {
    //                 switch (buttonId) {
    //                     case 'first':
    //                     $('#text-log').text(`That bag is suspicious. No way you're touching it! You get up, and wander off in a direction. Any direction will do! You pick a mossy path and start walking. The forest feels like a dark and lively place. You listen to the many different noises that echo throughout the forest. You hear bird calls, the rustling of animals through brush, and the small bits of light that dapple your hand through the forest canopy. Time moves quickly. Hours pass by as you cross the forest. The further you go, the darker it gets. Soon, there is almost no light at all. As you grow wearier and more frightened, the ambient noises around you take a dark turn. Suddenly, you hear a loud, high-pitched whine behind you! `);
    //                     $('#first').text(`Attack it!`);
    //                     $('#second').text(`Try talking.`);
    //                     $('#third').text(`RUN!!!!!`);
    //                 }
                    
    //             }
    //             break;
    //         case 'second': 
    //             lookAround = $('#text-log').text(`Your feet move of their own accord. Your cadence slows as you move along a trodden path.`);
    //             $('#first').text(`fdfasfds`);
    //             $('#second').text(`grevv`);
    //             $('#third').text(`fwfafewafds`);
    //             break;
    //         case 'third':
    //             lookAround = $('#text-log').text(`You close your eyes and allow yourself to drift back to sleep. The gentle noises of the forest slowing ebb in the background.`);
    //             $('#first').text(`fdfasfds`);
    //             $('#second').text(`Walk Forward`);
    //             $('#third').text(`Fall Back Asleep`);
    //             break;
    //     }
        // },

    // story() {
    //     const wakeUp = $('#text-log').text(`Awaken...These words are spoken in your mind as you draw breath. You gasp, and breath enters you as if for the first time. As you take your first breath, you stare into the dark sky, lit by unfamiliar stars.`);
    //     $('#first').text(`Look Around`);
    //     $('#second').text(`Walk Forward`);
    //     $('#third').text(`Fall Back Asleep`);
    //     if(this.screenPath[0] === 'first' && this.screenPath[1] === 'first') {
    //         $('#text-log').text(`As you look around you, your gaze catches upon the rumpled form of some kind of bundle or bag.`);
    //         $('#first').text(`Get up and Walk away`);
    //         $('#second').text(`Grab the bundle and look through it`);
    //         $('#third').text(`blank`);

    //     }
    //     if(this.screenPath[0] === 'first' && this.screenPath[1] === 'first' && this.screenPath[2] === 'first') {
    //         $('#text-log').text(`That bag is suspicious. No way you're touching it! You get up, and wander off in a direction. Any direction will do! You pick a mossy path and start walking. The forest feels like a dark and lively place. You listen to the many different noises that echo throughout the forest. You hear bird calls, the rustling of animals through brush, and the small bits of light that dapple your hand through the forest canopy. Time moves quickly. Hours pass by as you cross the forest. The further you go, the darker it gets. Soon, there is almost no light at all. As you grow wearier and more frightened, the ambient noises around you take a dark turn. Suddenly, you hear a loud, high-pitched whine behind you! `);
    //         $('#first').text(`Attack it!`);
    //         $('#second').text(`Try talking.`);
    //         $('#third').text(`RUN!!!!!`);

    //     }
    //     if(this.screenPath[0] === 'first' && this.screenPath[1] === 'first' && this.screenPath[2] === 'first' && this.screenPath[3] === 'first') {
    //         for(let i = 0; i < 100; i++) {
    //             this.battle(i);
    //             $('#text-log').text(` Your health is ${this.currentPlayer.health}`)
    //             $('#text-log').text(`The enemy's health is ${this.currentNonPlayer.health}`)
    //         }
    //     }


    // },

    start() {
        this.currentPlayer = new Player(this.name);
        this.currentNonPlayer = new NonPlayerCharacter("Gazorpa");
        console.log(game.currentNonPlayer);
        game.currentPlayer.displayName();
        // game.story();
        // game.currentPlayer.pickUpSword();
        game.currentPlayer.pickUpDagger();
        console.log(game.currentPlayer);

        // game.currentPlayer.attackWithSword();
        // game.currentPlayer.attackWithDagger();
        // game.battle();
        // console.log(game.currentPlayer.health);
     }
}


game.start();
// game.story();

$('#buttons').on('click', (e) => {

    // console.log(e.target.id);
    game.story(e.target.id)
    game.screenPath.push(e.target.id)
    game.story();


})



$('#first').on('click', (e) => {
    // $('#first').data('clicked', true);
    // game.turnOn();
    // game.start();
    // game.story();
    // console.log(game.gameOn)

})

$('#second').on('click', (e) => {


})
$('#third').on('click', (e) => {


})