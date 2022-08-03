import { MarkovData } from "./MarkovData";

export interface MarkovOptions {
    data: MarkovData,
    maxLength?: number;
}

export class Markov {
    static generate(options: MarkovOptions) {
        const randomData = options.data.getStart();
        return this.choose(randomData, options.data, randomData, options.maxLength || 1000);
    }

    static choose(current: string, markovData: MarkovData, sequence: string, maxLength: number): string {
        if (sequence.endsWith(markovData.endDelimiter)) return sequence.replaceAll(markovData.endDelimiter, '');
        if (sequence.length >= maxLength) return sequence;
        const next = markovData.getNext(current);

        if (!next) return sequence;
        sequence += next;
        return this.choose(next, markovData, sequence, maxLength);
    }
}
