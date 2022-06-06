export interface Data {
    chance: number;
    data: any;
}
export class Chance {
    constructor() { }
    choose(data: Data[]) {
        const array = [];
        const a = performance.now()
        data.forEach(async data => {
            for (let i = 0; i < data.chance; i++) {
                array.push(data.data)
            }
        })
        const b = performance.now()
        const random = Math.floor(Math.random() * array.length);
        return array[random]
    }
    createChanceArray(data: string[]): Data[] {
        const occurences = [];
        const setData = new Set(data)
        setData.forEach(e => {
            occurences.push({
                chance: Math.round((data.filter(f => f == e).length / data.length) * 100 ),
                data: e
            })
        })
        return Object.values(occurences)
    }
}