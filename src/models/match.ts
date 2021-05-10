import { Fencer } from "./fencer";

export class Match {
	blue: Fencer;
	yellow: Fencer;
	doubles: number;

	constructor(
		blueName?: string,
		blueScore: number = 0,
		blueYCards: number = 0,
		blueRCards: number = 0,

		doubles: number = 0,

		yellowName?: string,
		yellowScore: number = 0,
		yellowYCards: number = 0,
		yellowRCards: number = 0
	) {
		this.blue = new Fencer(blueName, blueScore, blueYCards, blueRCards);
		this.doubles = doubles;
		this.yellow = new Fencer(yellowName, yellowScore, yellowYCards, yellowRCards);
	}
}