const reorderList = (head) => {
  let slow = head;
  let fast = head.next;
  // find middle
  // reverese 2nd half
  // manipulate pointers

  // 1 -> 2 (slow) -> 3 -> 4(fast)
  // slow.next gives is 3, which is the first node of the second half of the list

  while (fast && fast.next) {
    slow = slow.next; // up 1
    fast = fast.next.next; // up 2
  }

  let second = slow.next;
  slow.next = null; // break the list in half   // 1 -> 2 -> null (sets 2.next to null)

  // reversing the second half
  let prev = null;
  let next = null;

  while (second) {
    next = second.next; // set next
    second.next = prev; // set second.next to prev
    prev = second; // increment prev
    second = next; // increment second
  }
  // merging the two halfs
  // we should have 1 -> 2-> null     <- 3 <- 4
  second = prev;
  // since second was null, and prev was the new head of the second half, we can set second to prev
  let first = head;
  // first is the head of the first half
  while (second) {
    let temp1 = first.next;
    let temp2 = second.next;
    first.next = second;
    second.next = temp1;
    first = temp1;
    second = temp2;
  }
  // no need to return anything because we're just maniuplating the pointers. we are NOT making a new list
};
