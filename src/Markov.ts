import { MarkovData } from "./MarkovData";

export interface MarkovOptions {
    data: MarkovData,
    filter?: (string) => boolean,
    maxLength?: number;
}
export class Markov {
    constructor() { }
    generate(options: MarkovOptions) {
        const data = options.data
        const randomData = data.chance.choose(data.startData);
        return this.choose(randomData, data, randomData, options.maxLength || 40);
    }
    choose(current: string, markovData: MarkovData, sequence: string, maxLength: number) {
        if (sequence.length >= maxLength) return sequence;
        const data = markovData.finalData[current];
        if (sequence.endsWith(markovData.endDelimiter)) return sequence.replaceAll(markovData.endDelimiter, '');
        if (!data) return sequence;
        const next = markovData.chance.choose(data);
        sequence += next;
        return this.choose(next, markovData, sequence, maxLength);
    }
}