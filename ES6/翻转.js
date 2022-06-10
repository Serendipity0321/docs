
//2022-6-09
let list = function (head) {
    let first = null;
    while (head) {
        head = head.next
        head.next = first
        first = head
        head = next
    }
    return first
}