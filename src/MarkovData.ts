import { Chance, Data } from "./Chance";

interface MarkovDataOptions {
    data: string[]
    sequenceLength: number;
}
export class MarkovData {
    data: string[];
    sequence: number;
    private _splitData: Record<string, any>;
    chance: Chance;
    finalData: Record<string, Data[]>;
    startData: Data[];
    constructor(data: MarkovDataOptions) {
        this.data = data.data;
        this.chance = new Chance();
        this.sequence = data.sequenceLength;
        this._splitData = {}
        this._split();
        this.finalData = this._createFinalData();
        this.startData = this._createStartData();
    }
    private _split() {
        this.data.forEach(e => {
            let split = []
            for (var i = 0, charsLength = e.length; i < charsLength; i += this.sequence) {
                split.push(e.substring(i, i + this.sequence));
            }
            split.forEach((e, i) => {
                if (!split[i + 1]) return;
                if (!this._splitData[e]) this._splitData[e] = [];
                this._splitData[e].push(split[i + 1])
            })
        })
    }
    private _createFinalData(): Record<string, Data[]> {
        const finalData = {};
        Object.keys(this._splitData).forEach(e => {
            finalData[e] = this.chance.createChanceArray(this._splitData[e])
        })
        return finalData;
    }
    private _createStartData(): Data[] {
        const data = this.chance.createChanceArray(this.data.map(e => e.substring(0, this.sequence)));
        return data;
    }
}