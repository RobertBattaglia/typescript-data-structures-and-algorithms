export class MaxHeap {
  private _storage: any[] = [];

  getParentIdx(idx: number): number {
    return Math.floor((idx - 1) / 2);
  }

  push(val: number): void {
    this._storage.push(val);
    let idx: number = this._storage.length - 1;
    let parentIdx: number = this.getParentIdx(idx);
    while (idx !== 0 && this._storage[idx] > this._storage[parentIdx]) {
      const temp: number | undefined = this._storage[idx];
      this._storage[idx] = this._storage[parentIdx];
      this._storage[parentIdx] = temp;

      idx = parentIdx;
      parentIdx = this.getParentIdx(idx);
    }
  }

  getChildrenIdx(idx: number): [number, number] {
    return [idx * 2 + 1, idx * 2 + 2];
  }

  extractMax(): number | undefined {
    let idx: number = 0;
    const max = this._storage[idx];

    let [lIdx, rIdx] = this.getChildrenIdx(idx);
    if (
      this._storage[lIdx] === undefined &&
      this._storage[rIdx] === undefined
    ) {
      this._storage = [];
    }

    while (
      this._storage[lIdx] !== undefined ||
      this._storage[rIdx] !== undefined
    ) {
      if (
        this._storage[lIdx] !== undefined &&
        this._storage[rIdx] !== undefined
      ) {
        if (this._storage[lIdx] >= this._storage[rIdx]) {
          this._storage[idx] = this._storage[lIdx];
          idx = lIdx;
        } else {
          this._storage[idx] = this._storage[rIdx];
          idx = rIdx;
        }
      } else if (this._storage[lIdx] !== undefined) {
        this._storage[idx] = this._storage[lIdx];
        idx = lIdx;
      } else {
        this._storage[idx] = this._storage[rIdx];
        idx = rIdx;
      }
      [lIdx, rIdx] = this.getChildrenIdx(idx);
      this._storage[idx] = undefined;
    }

    return max;
  }
}
