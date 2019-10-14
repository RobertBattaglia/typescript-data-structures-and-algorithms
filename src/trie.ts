interface CharChild {
  [char: string]: Char;
}

class Char {
  public char: string;
  public children: CharChild = {};
  constructor(char: string) {
    this.char = char;
  }
  addWord(word: string): void {
    const char: string = word.charAt(0);
    const restOfWord: string = word.substring(1);

    // Create new Char Node if doesn't already exist as a child on current Char Node
    if (!this.hasWord(char)) {
      this.children[char] = new Char(char);
    }

    if (restOfWord.length) {
      this.children[char].addWord(restOfWord);
    }
  }

  hasWord(word: string): boolean {
    const char: string = word.charAt(0);
    const restOfWord: string = word.substring(1);

    if (this.children.hasOwnProperty(char)) {
      if (!restOfWord.length) {
        return true;
      } else {
        return this.children[char].hasWord(restOfWord);
      }
    } else {
      return false;
    }
  }
}

export class Trie {
  public root: Char = new Char('');

  addWord(word: string): void {
    this.root.addWord(word);
  }
  hasWord(word: string): boolean {
    return this.root.hasWord(word);
  }
}
