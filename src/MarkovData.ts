export class MarkovData {
    finalData: Record<string, string[]> = {};
    startData: string[] = [];
    endDelimiter = '󿼏';
    forbidden: string[];
    constructor(data: string[]) {
        this.forbidden = Object.getOwnPropertyNames(Object.getPrototypeOf({}));
        this._createData(data);
    }

    private async _createData(data) {
        for (let e of data) {
            e += this.endDelimiter;
            const words: string[] = e.split(' ');
            this.startData.push(words[0]);

            words.forEach((word, i) => {
                if (this.forbidden.includes(word)) word = `${word} `;
                const next = words[i + 1];
                if (word === undefined || next === undefined) return;

                if (this.finalData[word] === undefined) {
                    this.finalData[word] = [next];
                    return;
                }
                // if (!this.finalData[word].push) {
                //     console.log(word, this.finalData[word]);
                // }
                this.finalData[word].push(next);
            });
        }
    }

    getStart() {
        const random = Math.floor(Math.random() * this.startData.length);
        return `${this.startData[random]} `;
    }
    getNext(current: string) {
        if (!current) return;
        const data = this.finalData[this.forbidden.includes(current.slice(0, -1)) ? current : current.slice(0, -1)];
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
