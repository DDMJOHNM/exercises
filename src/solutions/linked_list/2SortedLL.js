"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.Node = void 0;
exports.twoSortedLL = twoSortedLL;
var Node = /** @class */ (function () {
    function Node(val, next) {
        this.val = val;
        this.next = next;
    }
    return Node;
}());
exports.Node = Node;
function twoSortedLL(list1, list2) {
    if (list1 === null)
        return list2;
    if (list2 === null)
        return list1;
    var dummy = new Node(0, null);
    var tail = dummy;
    var a = list1;
    var b = list2;
    while (a !== null && b !== null) {
        if (a.val <= b.val) {
            tail.next = a;
            a = a.next;
        }
        else {
            tail.next = b;
            b = b.next;
        }
        tail = tail.next;
    }
    tail.next = a !== null && a !== void 0 ? a : b;
    return dummy.next;
}
var LinkedList = /** @class */ (function () {
    function LinkedList(head, tail, length) {
        this.head = head;
        this.tail = tail;
    }
    LinkedList.prototype.mergeTwoSortedLL = function (list1, list2) {
        return twoSortedLL(list1, list2);
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
// Pseudo code — merge two sorted singly linked lists (list1, list2)
//
// NODE: val, next (NODE | NULL)
//
// MERGE_TWO_SORTED(list1, list2):
//     DUMMY = NODE(0)           // sentinel; result starts at DUMMY.NEXT
//     TAIL = DUMMY
//     A = list1
//     B = list2
//
//     WHILE A != NULL AND B != NULL
//         IF A.val <= B.val
//             TAIL.next = A
//             A = A.next
//         ELSE
//             TAIL.next = B
//             B = B.next
//         END IF
//         TAIL = TAIL.next
//     END WHILE
//
//     // at most one list has nodes left; link the rest in one step
//     IF A != NULL THEN TAIL.next = A ELSE TAIL.next = B
//
//     RETURN DUMMY.next
// END
//Merging: When merging two sorted linked lists, the process involves iterating through both lists. 
// When one list runs out of nodes, you simply append the remaining nodes of the longer list to the end of the merged list.
// A linked list is a linear data structure in JavaScript where elements, called nodes, are not stored in contiguous memory locations. 
// Instead, each node contains a value (data) and a reference (or pointer) to the next node in the sequence, forming a chain of nodes.
// The first node is called the head, and the last node is called the tail.
// The tail node's next property is null, indicating the end of the list.
// Linked lists are dynamic, meaning they can grow or shrink as needed, unlike arrays which have a fixed size.
// Linked lists are often used to implement stacks, queues, and other data structures.
// Linked lists are also used to implement graphs and trees.
// Linked lists are also used to implement hash tables.
// Linked lists are also used to implement heaps.
// Linked lists are also used to implement priority queues.
// Linked lists are also used to implement binary search trees.
// Linked lists are also used to implement red-black trees.
// Key Concepts
// Node: The fundamental building block of a linked list. In a singly linked list, each node has two properties: data (or value) and next (a pointer to the next node, or null if it is the last node).
// Head: A reference to the first node in the linked list.
// Tail: A reference to the last node in the linked list.
// Dynamic Size: Unlike arrays with fixed sizes, linked lists can grow or shrink dynamically as needed during program execution. 
