# kurwov
A fast, dependency-free library for creating [Markov Chains](https://en.wikipedia.org/wiki/Markov_chain)

## API
Generating a dataset.
```ts
import { MarkovData } from 'kurwov';
const sentences = ['your sentence', 'another sentence'];
const data = new MarkovData({ data: sentences });
```

Using your dataset to generate a sentence.
```ts
import { Markov } from 'kurwov';
Markov.generate({data, length: 100})
```

## Speed
Test | Sentences | Time
--- | --- | ---
Generating a dataset | 10000 | 26.416 milliseconds
Generating a dataset | 100000 | 0.216 seconds
Generating a sentence | 10000 | 0.175 milliseconds
Generating a sentence | 100000 | 0.266 milliseconds
Adding to a dataset | 10000 | 0.036 milliseconds
Adding to a dataset | 100000 | 1.012 milliseconds

## My other packages
[Tiscord](https://npmjs.com/package/tiscord)

[Tisbench](https://npmjs.com/package/tisbench)

[Tisflake](https://npmjs.com/package/tisflake)
