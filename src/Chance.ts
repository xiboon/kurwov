export interface Data {
    chance: number;
    data: any;
}
export class Chance {
    constructor() { }
    choose(data: Data[]) {
        const array = [];
        data.forEach(data => {
            for (let i = 0; i < data.chance; i++) {
                array.push(data.data)
            }
        })
        const random = Math.floor(Math.random() * array.length);
        return array[random]
    }
    createChanceArray(data: string[]): Data[] {
        const occurences = {};
        data.forEach(e => {
            if (occurences[e]) return;
            occurences[e] = {
                chance: this.roundHundredth(data.filter(f => f === e).length / data.length) * 100,
                data: e
            }
        })
        return Object.values(occurences)
    }
    roundHundredth(number: number) {
        const rounded = Math.round(number * 100) / 100
        if (rounded === 0.33) return .34;
        if (rounded === 0.66) return .67;
        return rounded;
    }
}