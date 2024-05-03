import assert from 'node:assert/strict';
import { test } from 'node:test';
import { Markov, MarkovData } from '../src/index.js';

// TODO: add actual tests
test('it works', () => {
    const sentences = ['i love hamburgers', 'i love cats'];
    const data = new MarkovData(sentences);

    const generated = Markov.generate({ data, maxLength: 100 });

    assert.equal(typeof generated, 'string');
});
