export const orders = JSON.parse(localStorage.getItem('orders')) || []; // orders 정보만 저장하는 가상 localStorage 구축 (localStorage에 기존 저장된 내용을 가져옴으로써 변수가 생성된다.)

export function addOrder(order) {
  orders.unshift(order); // this will add order to the front of the array. 가져온 변수에 추가 cart 정보를 집어 넣는다.
  saveToStorage(); // 변경된 변수내용을 localStorage에 다시 저장해준다.
}

function saveToStorage() {
  localStorage.setItem('orders', JSON.stringify(orders));
} // parameter1: key 2: 새로 저장할 내용