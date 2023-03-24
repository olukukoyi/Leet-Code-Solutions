const cycle = (head) => {
  // declaring pointers
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    // if fast or fast.next is null, there cannot be a cycle .
    // we dont want to call fast.next on a null value
    fast = fast.next.next; // goes up 2
    slow = slow.next; // goes up 1

    if (fast === slow) return true; // if points to the same value
  }

  return false;
};
