
interface MarkovDataOptions {
    data: string[]
    sequenceLength: number;
}
export class MarkovData {
    data: string[];
    sequence: number;
    finalData: Record<string, string[]> = {};
    startData: string[];
    endDelimiter: string;
    constructor(data: MarkovDataOptions) {
        this.data = data.data;
        this.sequence = data.sequenceLength;
        // the character to put at the end of data
        this.endDelimiter = '󿼏'
        this._createFinalData();
        this.startData = this._createStartData();
    }
    private _createFinalData() {
        this.data.forEach(e => {
            e += this.endDelimiter;
            let split = []
            for (let i = 0, charsLength = e.length; i < charsLength; i += this.sequence) {
                split.push(e.substring(i, i + this.sequence));
            }
            split.forEach((e, i) => {
                if (!split[i + 1]) return;
                if (!this.finalData[e]) this.finalData[e] = [];
                this.finalData[e].push(split[i + 1])
            })
        })
    }
    private _createStartData(): string[] {
        return this.data.map(e => e.substring(0, this.sequence))
    }
    getStart() {
        const random = Math.floor(Math.random() * this.startData.length);
        return this.startData[random];
    }
    getNext(current: string) {
        const length = this.finalData[current]?.length;
        if (!length) return;
        return this.finalData[current][Math.floor(Math.random() * length)]
    }
    async add(data: string) {
        this.data.push(data)
        data += this.endDelimiter;
        let split = []
        // TODO: connect those two loops
        for (let i = 0, charsLength = data.length; i < charsLength; i += this.sequence) {
            split.push(data.substring(i, i + this.sequence));
        }
        const newData = {};
        split.forEach((e, i) => {
            if (!split[i + 1]) return;
            if (!newData[e]) newData[e] = [];
            newData[e].push(split[i + 1])
        })
        this.startData.push(data.substring(0, this.sequence))
        this.finalData = newData
    }
}