const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => { // response가 load된 후 실행하고픈 함수를 입력
  console.log(xhr.response);
});

xhr.open('GET', 'https://supersimplebackend.dev'); // get some info from the backend
// second parameter - where to send this HTTP message
xhr.send();  
