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
        this.health = 15;
        this.strength = 10;
        this.charisma = 10;
        this.speed = 10;
        // this.hunger = Math.floor(Math.random() * (10 - 1) + 1);
        // this.exhaustion = Math.floor(Math.random() * (10 - 1) + 1);
        // this.rage = 6;
        // this.age = Math.floor(Math.random() * (100 - 1) + 1);
	}
	displayName() {
		$('#name').text(` ${this.name}`);
	}

}



class NonPlayerCharacter extends Player {
	constructor(name) {
		super(name);
		this.health = Math.floor(Math.random() * (20 - 1) + 1);
		this.strength = Math.floor(Math.random() * (10 - 1) + 1);
		this.charisma = Math.floor(Math.random() * (8 - 1) + 1);
		this.speed = Math.floor(Math.random() * (10 - 1) + 1);

	}
}
const w = new Player('bob')
console.log(w);
const n = new NonPlayerCharacter('tim')
console.log(n);


const game = {
	name: "Aria",
	currentPlayer: null,
	start() {
		this.currentPlayer = new Player(this.name)
		game.currentPlayer.displayName();

	}
}


game.start();



