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
  trie.addWord('apps');
  trie.addWord('band');
  //   ''
  //  /  \
  // a    b
  // |    |
  // p    a
  // |    |
  // p    n
  // |    |
  // s    d
  expect(trie.hasWord('apps')).toBeTruthy();
});

test('should not retrieve word not added', () => {
  trie.addWord('apple');
  expect(trie.hasWord('banana')).toBeFalsy();
});

test('should not overwrite branch when adding new word', () => {
  trie.addWord('apps');
  // a
  // |
  // p
  // |
  // p
  // |
  // s
  trie.addWord('apple');
  //   a
  //   |
  //   p
  //   |
  //   p
  //  / \
  // s   l
  //      \
  //       e
  expect(trie.hasWord('apps')).toBeTruthy();
});
