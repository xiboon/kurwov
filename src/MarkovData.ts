export class MarkovData {
    finalData: Record<string, string[]> = {};
    startData: string[] = [];
    endDelimiter = '󿼏';
    constructor(data: string[]) {
        this._createData(data);
    }

    private _createData(data) {
        for (let e of data) {
            e += this.endDelimiter;
            const words = e.split(' ');
            this.startData.push(`${words[0]} `);
            for (let i = 0; i < words.length; i++) {
                const word = `${words[i]} `;
                const next = `${words[i + 1]} `;
                if (word === 'undefined ' || next === 'undefined ') continue;

                if (!this.finalData[word]) {
                    this.finalData[word] = [next]; continue;
                }

                this.finalData[word].push(next);
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
        if (!data) return;
        const random = Math.floor(Math.random() * data.length);
        return data[random];
    }
    async add(data: string) {
        data += this.endDelimiter;
        const words = data.split(' ');
        this.startData.push(`${words[0]} `);
        for (let i = 0; i < words.length; i++) {
            const word = `${words[i]} `;
            const next = `${words[i + 1]} `;
            if (word === 'undefined ' || next === 'undefined ') return;
            if (!this.finalData[word]) {
                this.finalData[word] = [next]; continue;
            }
            this.finalData[word].push(next);
            }
    }
}
