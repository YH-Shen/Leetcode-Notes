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

// ======================= Recursive Solution: 


// 21 merge list
var mergeTwoLists = function(l1, l2) {
    // initiate output array as [], counter as 0;
    let output = [];
    
    let counterOne = 0; // counter for list one
    let counterTwo = 0; // counter for list two
    // while both lists non empty and sum counter of counter have not reach the end of both lists:
    while ( (l1 || l2) && counterOne + counterTwo < l1.length + l2.length - 2 ){
    // compare the first elements of l1 and l2:
    
    // try to refactor this: 
    //      if l1 empty:
    //          push the rest of the l2
    //          return output array
    //      if l2 empty:
    //          push the rest of the l1
    //          return output array
    // Refactored:
    //      if eitehr list is empty, push all the rest of the otehr list into the output array
            if (! l1 && l2){
                // maybe use arr.apply to push the rest of one array into the output
            }
    //      if l1's first < l2's first:
    //          pushBack l1's first element into the out arr     
    //          remove l1's first(Remove First)
    //      else:
    //          pushBack l2's first element into the out arr     
    //          remove l2's first(Remove First)
           }
    
    // return output arr
    return output;
};

