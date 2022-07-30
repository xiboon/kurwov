interface MarkovDataOptions {
    data: string[]
    sequenceLength: number
}
export class MarkovData {
    data: string[];
    sequence: number;
    finalData: Record<string, string[]> = {};
    startData: string[] = [];
    endDelimiter = '󿼏';
    constructor(data: MarkovDataOptions) {
        this.data = data.data;
        this.sequence = data.sequenceLength;
        this._createData();
    }
    private _createData() {
        for (let e of this.data) {
            e += this.endDelimiter;
            const words = e.split(' ');
            for (let i = 0; i < words.length; i++) {
                const word = words[i];
                if (!word.length) continue;
                if (i === 0) {
                    this.startData.push(word);
                }
                if (!this.finalData[word]) {
                    this.finalData[word] = [words[i + 1]]; continue;
                }
                this.finalData[word].push(words[i + 1]);
            }
        }
    }

    getStart() {
        const random = Math.floor(Math.random() * this.startData.length);
        return this.startData[random];
    }
    getNext(current: string) {
        if (!current) return;
        const data = this.finalData[current];
        const random = Math.floor(Math.random() * data.length);
        return data[random];
    }
    // async add(data: string) {
    // }
}
