// Add Two Numbers - LeetCode 2 - JavaScript

// Definition for singly-linked list
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Convert Array -> Linked List
function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;

    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }

    return dummy.next;
}

// Convert Linked List -> Array
function linkedListToArray(head) {
    let result = [];

    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }

    return result;
}

// Input
let l1 = createLinkedList([2, 4, 3]);
let l2 = createLinkedList([5, 6, 4]);

// Solution
var addTwoNumbers = function (l1, l2) {

    let list = new ListNode(0);
    let head = list;

    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {

        let sum = carry;

        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);

        head.next = new ListNode(sum % 10);
        head = head.next;
    }

    return list.next;
};

// Output
const result = addTwoNumbers(l1, l2);

console.log(linkedListToArray(result)); // [7, 0, 8]