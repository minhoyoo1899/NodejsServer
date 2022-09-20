import http from 'http';
import fs from 'fs';

// root directory에
// DI세팅, command : npm init
// 진헹 후
// 생성된 package.json에
// "type" : "module" 이라는 내용을 기입하면,
// module js 방식, 즏 mjs 방식을 사용 할 수 있다. 

http.createServer(function (request, response) { 
  //http 객체에 어떤 키와 메서드가 있는지 확인 할 것
  const data = fs.readFileSync('index.html');
  // 접미사로 Sync가 작성되어 있다면 '동기작(synchronously)'으로 처리하는 메서드가 된다.
  // fs객체에 어떤 키와 메서드가 있는지 확인 할 것 
  response.writeHead(200, { "content-type": "text/html; charset-utf-8" });
  // writeHead 메서드는 '일련의 통신 규약'과 같은 약속으로, 200이면 정상적으로 작동 할 때를 이야기 한다.
  // 404에러 같은 것이 대표적인 에러형 비정상 응답 내용중 하나
  response.write(data);
  // 읽어낸 파일을 data로 "write(작성)" 한다. 
  response.end();
  // 작성이 완료되면 말 그대로 end, 종료한다.
}).listen(9876, function () { 
  //포트(컴퓨터가 인터넷에 연결하는 세부적인 연결통로)는 임의로 9876으로 정하였다. 
  console.log('서버가 작동되고 있습니다!');
});


// 이 과정을 카페로 상상하면 기타 다양한 '요청'이 없으므로
// 손님이 오면 바로 기본커피(index.html)만 바로 만들어 준 것과 같은 이치가 된다.

// 1. 일련의 http 관련 기능을 제공하는 모듈과, file system(파일접근) 모듈을 import 구문으로 불러와 연결지었습니다.

// ※ 다른 언어에서는 http와 같은 기능에 대해 관련한 모듈과 라이브러리로 개발환경셋팅하는 것이 꽤 복잡한 편입니다. 그런점에서 자바스크립트는 상당히 간편하다고 할 수 있습니다. '표준 모듈'이기 떄문입니다.

// 2. http 모듈에서 지원하는 메서드 createServer() 콜백함수를 통해 원하는 일련의 기능이 동작합니다.

// 3. readFileSync()라는 함수이름으로 무언가 파일을 읽어내는 기능을 확인할 수 있습니다. 기반지식없이 읽어보아도 상수 data는 index.html파일을 '읽어낸' 파일을 가리키고 있습니다.

// 4. response 매개변수가 지원하는 writeHead(), write(), end() 세개가 연달아 작성되어 '무언가 서버 관련 기능을 동작케 한다는 것'을 짐자하게 합니다.

// 5. listen() 이라는 메서드로 "어디서" 문서를 응답할 것인지 포트(입구 번호)를 설정해 준것을 확인할 수 있습니다.

// 6. localhost:9876 이라는 주소를 라이브서버가 아닌 직접 파일 실행을 통해 '응답하는 상태' 에 읽어낸 데이터를 송출합니다.

// 7. 자기자신이 연 가게를 주인장이 들어가는 셈이긴 하지만, 서버가 구동되는것을 확인 할 수 있습니다.
// ※ node example.js
// ※ live server 확장플러그인이 아닌, 직접 서버를 구도확인을 하려면 localhost:9876 주소로 접속해낼 수 있다.
