// given the head of a singly linked list, reverse the list and return the reversed list

const revLL = (head) => {
  let curr = head;
  let prev = null;
  let next = null;

  //  null <-1<-2<-3(prev)->null(curr,next)

  while (curr !== null) {
    // draw up on white board to see whats happening. very easy to follow
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};
