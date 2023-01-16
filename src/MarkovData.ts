export class MarkovData {
    finalData: Map<string, string[]> = new Map();
    startData: string[] = [];
    endDelimiter = '󿼏';
    // forbidden: Set<string>;
    constructor(data: string[]) {
        // this.forbidden = new Set(Object.getOwnPropertyNames(Object.getPrototypeOf({})));
        this._createData(data);
    }

    private async _createData(data) {
        let wordCount = 0;
        for (let e of data) {
            e += this.endDelimiter;
            const words: string[] = e.split(' ');
            this.startData.push(words[0]);

            words.forEach((word, i) => {
                const next = words[i + 1];
                if (next === undefined) return;

                if (!this.finalData.has(word)) {
                    this.finalData.set(word, [next]);
                    return;
                }
                this.finalData.get(word).push(next);
                wordCount++;
            });
        }
        console.log(wordCount)
    }

    getStart() {
        const random = Math.floor(Math.random() * this.startData.length);
        return `${this.startData[random]} `;
    }
    getNext(current: string) {
        if (!current) return;
        const data = this.finalData[current.slice(0, -1)];
        if (!data) return;
        const random = Math.floor(Math.random() * data.length);
        return data[random].endsWith(' ') ? data[random] : `${data[random]} `;
    }
    async add(data: string) {
        data += this.endDelimiter;
        const words = data.split(' ');
        this.startData.push(words[0]);
        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            const next = words[i + 1];
            if (word === undefined || next === undefined) continue;

            if (!this.finalData[word]) {
                this.finalData[word] = [next];
                continue;
            }

            this.finalData[word].push(next);
        }
    }
}
