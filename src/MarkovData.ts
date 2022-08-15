export class MarkovData {
    data: string[];
    finalData: Record<string, string[]> = {};
    startData: string[] = [];
    endDelimiter = '󿼏';
    constructor(data: string[]) {
        this.data = data;
        this._createData();
    }

    private _createData() {
        for (let e of this.data) {
            e += this.endDelimiter;
            const words = e.split(' ');
            this.startData.push(words[0]);
            for (let i = 0; i < words.length; i++) {
                const word = words[i];
                if (!word.length) continue;
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
    async add(data: string) {
        data += this.endDelimiter;
        const words = data.split(' ');
        this.startData.push(words[0]);
        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            if (!word.length) continue;
            if (!this.finalData[word]) {
                this.finalData[word] = [words[i + 1]]; continue;
            }
            this.finalData[word].push(words[i + 1]);
            }
    }
}
