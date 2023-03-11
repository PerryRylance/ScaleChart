export interface ITuning
{
	name: string;
	pitches: number[];
	instrument: string;
};

const library: ITuning[] = [
	{
		name: "Standard",
		pitches: [64, 59, 55, 50, 45, 40],
		instrument: "Guitar"
	},
	{
		name: "Standard",
		pitches: [76, 69, 62, 55],
		instrument: "Mandolin"
	},
	{
		name: "C6",
		pitches: [64, 60, 57, 55, 52, 48],
		instrument: "Dobro"
	},
	{
		name: "Open G",
		pitches: [62, 59, 55, 50, 47, 43],
		instrument: "Dobro"
	}
];

export { library };