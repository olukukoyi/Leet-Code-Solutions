const merge = (l1, l2) => {
  const dummy = new ListNode(-Infinity); // new node
  let prev = dummy; // prev is the dummy node, allows us to refrence dummy node

  while (l1 && l2) {
    // pointer manipulation
    if (l1.val <= l2.val) {
      prev.next = l1;
      prev = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      prev = l2;
      l2 = l2.next;
    }
  }

  // this line will only run if one of the lists is null

  if (!l1) prev.next = l2; // if l1 is null, make prev point to the rest of l2
  if (!l2) prev.next = l1; // if l2 is null, make prev point to the rest of l1;
  // --

  return dummy.next; // must return dummy.next because dummy is a dummy node
};
