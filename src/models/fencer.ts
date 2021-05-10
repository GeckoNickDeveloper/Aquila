export class Fencer {
	name: string;
	score: number;
	yCards: number;
	rCards: number;

	constructor(
		name?: string,
		score: number = 0,
		yCards: number = 0,
		rCards: number = 0
	) {
		this.name = name;
		this.score = score;
		this.yCards = yCards;
		this.rCards = rCards;
	}
}