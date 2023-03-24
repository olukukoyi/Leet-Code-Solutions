const removeNth = (head, n) => {
  let dummyhead = new ListNode(-Infinity); // 1
  dummyhead.next = head;
  let res = dummyhead; // to return the head of the list so we can return it

  let tail = head; // 2
  let removing = head; // 3
  let prev = dummyhead; // 4
  let count = 0;

  while (count < n) {
    tail = tail.next;
    count++;
  }

  while (tail) {
    // incrementing until tail is null
    // this puts nodes in the correct position
    tail = tail.next;
    removing = removing.next;
    prev = prev.next;
  }
  prev.next = removing.next;

  return res.next;
};
