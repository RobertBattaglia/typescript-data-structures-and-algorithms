import { Trie } from '../trie';

let trie: Trie;
beforeEach(() => {
  trie = new Trie();
});

test('should add a word and retrieve added word', () => {
  trie.addWord('apple');
  expect(trie.hasWord('apple')).toBeTruthy();
});

test('should add a word and be able to retrieve subset of word', () => {
  trie.addWord('apple');
  expect(trie.hasWord('app')).toBeTruthy();
});

test('should add 2 words and first should still be retrievable', () => {
  trie.addWord('apple');
  trie.addWord('banana');
  expect(trie.hasWord('apple')).toBeTruthy();
});

test('should not retrieve word not added', () => {
  trie.addWord('apple');
  expect(trie.hasWord('banana')).toBeFalsy();
});
