const swapPairs = (head) => {
  const dummy = new ListNode(-Infinity, head); // (value,next value )
  let prev = dummy;
  let curr = head;

  // only run if we have a curr node AND cur.next exist
  while (curr && curr.next) {
    //savng pointers
    let nextPair = curr.next.next;
    let second = curr.next;
    // reversing
    second.next = curr;
    curr.next = nextPair;
    prev.next = second;

    // updating pointers

    prev = curr;
    curr = nextPair;
  }
  return dummy.next;
};
