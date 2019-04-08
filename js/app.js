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
    equipment: [],
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


    story(buttonId) {
        console.log(buttonId);
        // let path = 
        const wakeUp = $('#text-log').text(`Awaken...These words are spoken in your mind as you draw breath. You gasp, and breath enters you as if for the first time. As you take your first breath, you stare into the dark sky, lit by unfamiliar stars.`);
        $('#first').text(`Look Around`);
        $('#second').text(`Walk Forward`);
        $('#third').text(`Fall Back Asleep`);

        let lookAround;

        switch (buttonId) {
            case 'first':
                lookAround = $('#text-log').text(`As you look around you, your gaze catches upon a solid bundle back behind you.`);
                $('#first').text(`fdfasfds`);
                $('#second').text(`Walk Forward`);
                $('#third').text(`Fall Back Asleep`);
                break;
            case 'second': 
                lookAround = $('#text-log').text(`Your feet move of their own accord. Your cadence slows as you move along a trodden path.`);
                $('#first').text(`fdfasfds`);
                $('#second').text(`grevv`);
                $('#third').text(`fwfafewafds`);
                break;
            case 'third':
                lookAround = $('#text-log').text(`You close your eyes and allow yourself to drift back to sleep. The gentle noises of the forest slowing ebb in the background.`);
                $('#first').text(`fdfasfds`);
                $('#second').text(`Walk Forward`);
                $('#third').text(`Fall Back Asleep`);
                break;
        }




    },



    // story() {
    //     const wakeUp = $('#text-log').text(`Awaken...These words are spoken in your mind as you draw breath. You gasp, and breath enters you as if for the first time. As you take your first breath, you stare into the dark sky, lit by unfamiliar stars.`);
    //     $('#first').text(`Look Around`);
    //     $('#second').text(`Walk Forward`);
    //     $('#third').text(`Fall Back Asleep`);
        

    //         const lookAround = $('#text-log').text(`As you look around you, your gaze catches upon a solid bundle back behind you.`);
    //     //     $('#first').text(`fdfasfds`);
    //     //     $('#second').text(`Walk Forward`);
    //     //     $('#third').text(`Fall Back Asleep`);
    //     } 
    // },

    // turnOn() {
    //     if(!this.gameOn) {
    //          this.gameOn = true;
    //         console.log(game.gameOn);
    //     }
    // },


    start() {
        this.currentPlayer = new Player(this.name);
        this.currentNonPlayer = new NonPlayerCharacter("Gazorpa");
        console.log(game.currentNonPlayer);
        game.currentPlayer.displayName();
        // game.currentPlayer.pickUpSword();
        game.currentPlayer.pickUpDagger();
        console.log(game.currentPlayer);

        // game.currentPlayer.attackWithSword();
        // game.currentPlayer.attackWithDagger();
        game.battle();
        // console.log(game.currentPlayer.health);
    }
}


game.story();
game.start();
// game.story();

$('#buttons').on('click', (e) => {

    // console.log(e.target.id);
    game.story(e.target.id)

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