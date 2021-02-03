// Reference: https://www.geeksforgeeks.org/reverse-a-linked-list/


// ======================= Iterative Solution: Time: O(n), Space: O(1)
// Loop until curr points at NULL
// 1. 3 pointers: current(which is head), next, prev. 
//      *prev maintains already reversed linked list
//      *next points at the next list node to reverse
// 2. initialize prev = null, current = head, next = null; 
//                            (or change function input name for faster performance)
// 3. increment next
// 4. reverse current link by appending prev to curr
// 5. increment prev
// 6. increment curr


var reverseList = function(current) {
    // initiallize
    let next = null;
    let prev = null;
    // let current = head;
    
    while (current){
        // The next node to reverse is current.next
        next = current.next;
        // The current.next should be reversed to current's previous
        current.next = prev;
        // move to the new node by moving current and previous one step forward
        prev = current;
        current = next;
    }
    return prev;
};