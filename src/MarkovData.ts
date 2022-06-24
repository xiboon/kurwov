
interface MarkovDataOptions {
    data: string[]
    sequenceLength: number;
}
export class MarkovData {
    data: string[];
    sequence: number;
    finalData: Record<string, string[]> = {};
    startData: string[] = [];
    endDelimiter: string;
    constructor(data: MarkovDataOptions) {
        this.data = data.data;
        this.sequence = data.sequenceLength;
        // the character to put at the end of data
        this.endDelimiter = '󿼏'
        this._createFinalData();
        }
    private _createFinalData() {
        this.data.forEach(e => {
            e += this.endDelimiter;
            let current;
            for (let i = 0, charsLength = e.length; i < charsLength; i += this.sequence) {
                const next = e.substring(i, i + this.sequence);
                if (!current) {
                    this.startData.push(next)
                    current = next;
                    continue;
                }
                this.finalData[current] ??= [];
                this.finalData[current].push(next);
                current = next;
            }
        })
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
        split.forEach((e, i) => {
            if (!split[i + 1]) return;
            this.finalData[e] ??= [];
            this.finalData[e].push(split[i + 1]);
        })
        this.startData.push(data.substring(0, this.sequence));
    }
}
