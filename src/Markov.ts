import { MarkovData } from "./MarkovData";

export interface MarkovOptions {
    data: MarkovData,
    maxLength?: number;
}
export class Markov {
    static generate(options: MarkovOptions) {
        const data = options.data
        const randomData = data.getStart();
        return this.choose(randomData, data, randomData, options.maxLength || 2000000000000);
    }
    static choose(current: string, markovData: MarkovData, sequence: string, maxLength: number) {
        if (sequence.endsWith(markovData.endDelimiter)) return sequence.replaceAll(markovData.endDelimiter, '');
        if (sequence.length >= maxLength) return sequence;
        const next = markovData.getNext(current);

        if (!next) return sequence;
        sequence += next;
        return this.choose(next, markovData, sequence, maxLength);
    }
}