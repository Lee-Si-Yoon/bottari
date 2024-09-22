# CRUD하기 입문

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [HTTP API편](#http-api%ED%8E%B8)
  - [DynamoDB](#dynamodb)
  - [Lambda functions](#lambda-functions)
  - [API gateway - HTTP](#api-gateway---http)
  - [CORS 대응](#cors-%EB%8C%80%EC%9D%91)
  - [정리](#%EC%A0%95%EB%A6%AC)
- [REST API편](#rest-api%ED%8E%B8)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## HTTP API편

[안내서](https://docs.aws.amazon.com/ko_kr/apigateway/latest/developerguide/http-api-dynamo-db.html)

### DynamoDB

DynamoDB Console > create table

provisioned read/write capacity
5 RCU / 5 WCU -> 이 RCU / WCU가 뭔지..?

요금제에 관한 이야기

### Lambda functions

Lambda Console > create function

change default execution role > create a new role from AWS policy templates

role name:
http-crud-tutorial-role

role template:
simple microservice permissions
보통은 필요한 최소 권한을 부여하는 자체 IAM 정책을 생성해서 쓰는 것을 추천

[함수내용](https://docs.aws.amazon.com/ko_kr/apigateway/latest/developerguide/http-api-dynamo-db.html)에서 index.mjs 업데이트 이후 deploy

### API gateway - HTTP

[REQBIN](https://reqbin.com/)에서 테스트 쉽게 할 수 있다.
CURL로 테스트하려면 [curlbuilder](https://curlbuilder.com/)같은 사이트도 이용 가능

### CORS 대응

[안내서](https://docs.aws.amazon.com/ko_kr/apigateway/latest/developerguide/http-api-cors.html)

### 정리

필요없는 권한 및 리소스 삭제 방법, 8단계: 정리 참조

---

## REST API편

[안내서](https://docs.aws.amazon.com/ko_kr/apigateway/latest/developerguide/http-api-dynamo-db.html)의 lambda 함수 생성까지 동일

다만 lambda 함수 생성할 때, HTTP는 1,2 버전 사용가능하고 REST는 1버전만 사용 가능해서 함수를 조금 고쳐줘야함

[차이점](https://docs.aws.amazon.com/ko_kr/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html)을 보면 2에선 routeKey, 1에선 resource를 사용하는 점이나 함수응답이 다르기에

```js
...

export const handler = async (event, context) => {
  let body;
  let statusCode = 200;
  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    switch (event.routeKey) {
      case 'DELETE /items/{id}':
        ...
    }
  } catch (err) {
    statusCode = 400;
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }

  return {
    statusCode,
    body,
    headers,
  };
};
```

Lambda 및 DynamoDB를 사용한 CRUD API 안내서에 나온 위 코드를 아래와 같이 바꿔줘야 함

```js
...

export const handler = async (event, context) => {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    switch (`${event.httpMethod} ${event.resource}`) {
        ...
  }
  catch (err) {
    statusCode = 400;
    body = err.message;
  }
  finally {
    body = JSON.stringify(body);
  }

  return {
    "statusCode": statusCode,
    "headers": headers,
    "isBase64Encoded": false,
    "body": body
  };
};
```

REST API는 다양한 방법으로 구현 가능하고, aws 자습서에서는 CRUD까지 하는 내용은 없음
그래서 해당 강의는 HTTP API를 사용하는 방법으로 진행
