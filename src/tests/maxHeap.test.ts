import { MaxHeap } from '../maxHeap';

let heap: MaxHeap;
beforeEach(() => {
  heap = new MaxHeap();
});

test('should push 1 value and be able to extract it', () => {
  heap.push(100);
  expect(heap.extractMax()).toEqual(100);
});
test('should extract second value pushed if greater than first value pushed', () => {
  heap.push(100);
  heap.push(200);
  expect(heap.extractMax()).toEqual(200);
});
test('should extract undefined if no value pushed', () => {
  expect(heap.extractMax()).toEqual(undefined);
});
test('should extract undefined if extract more values than pushed', () => {
  heap.push(100);
  heap.extractMax();
  expect(heap.extractMax()).toEqual(undefined);
});
test('should always extract max values in order if large input', () => {
  for (let i = 0; i < 100; i++) {
    heap.push(i);
  }
  let halfMax;
  for (let i = 0; i < 50; i++) {
    halfMax = heap.extractMax();
  }
  expect(halfMax).toEqual(50);
});
