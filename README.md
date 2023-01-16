<h1 align=center> kurwov </h1>
A fast, dependency-free library for creating Markov Chains.

## API
Generating a dataset.
```ts
import { MarkovData } from 'kurwov';
const sentences = ['i love hamburgers', 'i love cats'];
const data = new MarkovData(sentences);
```

Using your dataset to generate a sentence.
```ts
import { Markov } from 'kurwov';
Markov.generate({ data, length: 100 }); // i love hamburgers or i love cats
```

Adding an sentence to the dataset.
```ts
data.add('i love dogs');
```

Completing a sentence.
```ts
Markov.complete({ data, start: 'i love' }); // i love dogs, i love hamburgers, or i love cats
```
## Features
Feature | kurwov | markov-typescript | markov-generator | markov-strings | markov-chains
--- | --- | --- | --- | --- | ---
Dependency-free | ✔️ | ❌ | ✔️ | ❌ | ❌
Typings | ✔️ | ❌ | ❌ | ✔️ | ❌
Generating sentences | ✔️ | ✔️ | ✔️ | ✔️ | ✔️
Completing sentences | ✔️ | ❌ | ❌ | ❌ | ❌
Adding stuff other than strings | ❌ | ✔️ | ❌ | ❌ | ✔️

## Speed
### kurwov speed over versions
Benchmark | v1 | v2 | v3
--- | --- | --- | ---
Generating a dataset with 10000 sentences. | 649.55ms | 89.26ms | 50.53ms
Generating a dataset with 100000 sentences. | 25509.70ms | 873.43ms | 572.49ms

### kurwov speed compared to other markov packages
Benchmark | kurwov | markov-typescript | markov-generator | markov-strings | markov-chains  
--- | --- | --- | --- | --- | ---
Generating a dataset with 10000 sentences. | 50.53ms | 419.66ms | 346.16ms | 1834.32ms | N/A (errored)
Generating a dataset with 100000 sentences. | 572.49ms | 6221.28ms | 28329.17ms | N/A (couldn't finish in over 10 minutes) | N/A (errored)

## My other packages
[Tiscord](https://npmjs.com/package/tiscord)

[Tisbench](https://npmjs.com/package/tisbench)

[Tisflake](https://npmjs.com/package/tisflake)
