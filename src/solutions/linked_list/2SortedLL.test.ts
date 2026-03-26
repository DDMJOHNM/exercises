import { twoSortedLL, Node } from './2SortedLL';

function toList(arr: number[]): Node | null {
    if (arr.length === 0) return null;
    const head = new Node(arr[0]!, null);
    let cur = head;
    for (let i = 1; i < arr.length; i++) {
        const next = new Node(arr[i]!, null);
        cur.next = next;
        cur = next;
    }
    return head;
}

function toArray(head: Node | null): number[] {
    const out: number[] = [];
    let cur = head;
    while (cur !== null) {
        out.push(cur.val);
        cur = cur.next;
    }
    return out;
}

describe('twoSortedLL', () => {
    test('merges [1,2,4] and [1,3,5] into [1,1,2,3,4,5]', () => {
        expect(
            toArray(twoSortedLL(toList([1, 2, 4]), toList([1, 3, 5])))
        ).toEqual([1, 1, 2, 3, 4, 5]);
    });

    test('when list1 is empty, returns list2', () => {
        expect(toArray(twoSortedLL(null, toList([1, 2])))).toEqual([1, 2]);
    });

    test('when both lists are empty, returns empty', () => {
        expect(toArray(twoSortedLL(null, null))).toEqual([]);
    });
});
