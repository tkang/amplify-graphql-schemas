# Common GraphQL Schemas for Amplify application

본 워크샾에서는, [Amplify](https://docs.amplify.aws/) AWS 위에 GraphQL [GraphQL](https://graphql.org/) API 를 구성하다보면 필요한 여러가지 케이스들을 위한 GraphQL Schema 를 보여드리려 합니다.

커버될 시나리오들은 다음과 같습니다.

- Public Post : 모든 사용자 CRUD 가능
- Private Post : 로그인 사용자만 CRUD 가능
- Post with editors : Editor 로 지정된 사용자는 Read, Update 가능
- Post with reader group : Reader 그룹에 들어있는 사용자들은 Read 가능
- Message Forum with moderators : Topic, Comment 작성가능. Moderator 로 지정된 사용자는 다른 사람의 Topic 과 Comment 도 Read/Update/Delete 가능
- Chat with Admin : Admin 사용자들만 channel 생성 가능

### Overview

[Create Next App](https://nextjs.org/docs/api-reference/create-next-app) 을 이용하여 새로운 next.js 프로젝트를 생성합니다. 그리고 [Amplify CLI](https://github.com/aws-amplify/amplify-cli) 를 이용하여 AWS Cloud 환경을 설정하고 [Amplify JS Libraries](https://github.com/aws-amplify/amplify-js) 를 이용하여 우리가 만든 next.js 앱을 AWS Cloud 와 연결해보려 합니다.

본 워크샾은 2~5시간 정도 걸릴것으로 예상됩니다.

### 개발 환경 Environment

시작하기전에, 아래 패키지들을 설치해주세요.

- Node.js v10.x or later
- npm v5.x or later
- git v2.14.1 or later

터미널에서 [Bash shell](<https://en.wikipedia.org/wiki/Bash_(Unix_shell)>) 상에서 Amplify CLI 를 실행해서 infra를 생성하고, Next.js application 을 로컬에서 띄우고 브라우져 상에서 테스트 하려 합니다.

### Required Background / Level

본 워크샾은 full stack serverless 개발에 대해 알고 싶은 front-end 와 back-end 개발자들을 위해 만들어졌습니다.

React 와 GraphQL 에대한 지식이 있다면 도움이 되지만, 필수는 아닙니다.

### 본 가이드에서 다루어질 토픽들:

- Authentication (인증)
- GraphQL API with AWS AppSync
- GraphQL Schema 패턴들
- Deleting the resources (작업 후 리소스 삭제)

## 시작하기 - Next Application 생성

[Create Next App](https://nextjs.org/docs/api-reference/create-next-app) 을 이용하여 새로운 프로젝트를 생성해봅시다.

```sh
$ npx create-next-app amplify-graphql-schemas
```

생성된 디렉토리로 이동해서, aws-amplify 연관 패키지들을 설치해봅시다.

```sh
$ cd amplify-graphql-schemas
$ yarn add aws-amplify @aws-amplify/ui-react
```

### Styling with TailwindCSS

본 앱에서는 TailwindCSS 를 이용하여 스타일링을 해보려 합니다.

Tailwind CSS 관련 패키지를 설치합시다. devDependencies 에만 들어가도록 설치합니다.

```sh
$ yarn add --dev tailwindcss@latest postcss@latest autoprefixer@latest @tailwindcss/forms
```

Tailwind 관련 설정 파일들 (`tailwind.config.js` `postcss.config.js`) 생성을 위해 다음 명령어를 실행합니다.

```sh
$ npx tailwindcss init -p
```

`tailwind.config.js` 의 내용을 다음과 같이 변경합니다. (production builds 에서 사용되지 않는 스타일링을 tree-shake 하기 위해서입니다.)

```diff
// tailwind.config.js
module.exports = {
-  purge: [],
+  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

Tailwind 의 base, component, utilties 스타일이 사용되도록 next.js 에서 생성된 `./styles/globals.css` 파일을 다음과 같이 변경합니다.

```
/* ./styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

> TailwindCSS 설치에 대한 자세한 내용은, 다음 링크를 확인하세요. [here](https://tailwindcss.com/docs/guides/nextjs)

기본으로 생성된 **pages/index.js** 를 변경합니다.

```js
/* pages/index.js */
import Head from "next/head";

  return (
    <div>
      <Head>
        <title>Amplify GraphQL Schemas</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22></text></svg>"
        />
      </Head>

      <div className="container mx-auto">
        <main className="bg-white">
          <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Amplify GraphQL Schemas
              </p>
              <p className="max-w-xl mx-auto mt-5 text-xl text-gray-500">
                Welcome to Amplify GraphQL Schemas
              </p>
            </div>
          </div>
        </main>
      </div>

      <footer></footer>
    </div>
  );
}

export default Home;
```

문제없이 로딩이 되는지, `yarn dev` 명령어로 로컬에서 서버를 띄우고, 브라우져에서 확인해봅니다.

```sh
$ yarn dev
```

## git repostory 초기화

본 프로젝트를 위한 git repository를 하나 만들어주세요. (https://github.com/new)
repository 생성을 하였으면, 로컬에서 git 을 초기화 하고, 생성된 repository 의 url 을 추가해주세요.

```sh
$ git init
$ git remote add origin git@github.com:username/project-name.git
$ git add .
$ git commit -m 'initial commit'
$ git push origin main
```

## Amplify CLI 설치 & AWS Amplify Project 초기화

### Amplify CLI 설치

Amplify CLI 를 설치해봅시다.

```sh
$ npm install -g @aws-amplify/cli
```

다음은 CLI 에서 AWS credential 을 사용하도록 설정해봅시다.

> 이 과정에 대한 자세한 설명을 보고 싶으면, 비디오를 확인하세요. [here](https://www.youtube.com/watch?v=fWbM5DLh25U)

```sh
$ amplify configure

- Specify the AWS Region: ap-northeast-2
- Specify the username of the new IAM user: amplify-cli-user
> In the AWS Console, click Next: Permissions, Next: Tags, Next: Review, & Create User to create the new IAM user. Then return to the command line & press Enter.
- Enter the access key of the newly created user:
? accessKeyId: (<YOUR_ACCESS_KEY_ID>)
? secretAccessKey: (<YOUR_SECRET_ACCESS_KEY>)
- Profile Name: amplify-cli-user
```

### Amplify Project 초기화

amplify 프로젝트를 초기화 해봅시다.

```sh
$ amplify init

- Enter a name for the project: amplifygraphqlschemas
- Enter a name for the environment: dev
- Choose your default editor: Visual Studio Code (or your default editor)
- Please choose the type of app that youre building: javascript
- What javascript framework are you using: react
- Source Directory Path: src
- Distribution Directory Path: out
- Build Command: npm run-script build
- Start Command: npm run-script start
- Do you want to use an AWS profile? Y
- Please choose the profile you want to use: amplify-cli-user
```

> **Distribution Directory Path 는 꼭 `out` 으로 변경해주세요.** (next.js 에서 build 후 export 를 하면 out 디렉토리로 결과물이 들어갑니다.)

> `amplify init` 초기화가 끝나면, **amplify** 폴더가 생성되고 **src** 폴더아래 `aws-exports.js` 파일이 생성됩니다.

> **src/aws-exports.js** 는 amplify 의 설정값들이 들어있습니다.

> **amplify/team-provider-info.json** 파일에는 amplify 프로젝트의 back-end 환경(env) 관련 변수들이 들어가 있습니다. 다른 사람들과 동일한 백엔드 환경을 공유하고 싶다면, 이 파일을 공유하면 됩니다. 만약에 프로젝트를 공개하고 싶은 경우라면 이 파일은 빼주는게 좋습니다. (.gitignore 에 추가) [관련문서](https://docs.amplify.aws/cli/teams/shared)

amplify 프로젝트의 상태를 보고 싶다면 `amplify status` 명령어로 확인하실수 있습니다.

```sh
$ amplify status
```

amplify 프로젝트 상태를 Amplify console 로 확인하고 싶다면, `amplify console` 명령어로 확인할수 있습니다.

```sh
$ amplify console
```

## Configuring the Next applicaion with Amplify

Amplify 프로젝트가 초기화 되었으니 우리가 만들고 있는 app 에서 Amplify project 에 대해 인식하도록 설정해봅시다.
src 폴더 안에 자동생성된 `aws-exports.js` 파일을 참조하도록 추가해봅시다.

설정을 하기위해 **pages/\_app.js** 파일을 열고, 다음 코드를 추가합니다.

```diff
  import '../styles/globals.css'
+ import Amplify from "aws-amplify";
+ import config from "../src/aws-exports";
+ Amplify.configure(config);

  function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }

  export default MyApp
```

위 코드가 추가되면, app 에서 AWS service 를 이용할 준비가 됩니다.

## 인증 기능 추가 Adding Authentication

다음과정은, 인증기능을 (Authentication) 추가를 해보겠습니다.

Authentication 추가를 위해, 다음 명령어를 실행합니다.

```sh
$ amplify add auth

? Do you want to use default authentication and security configuration? Default configuration
? How do you want users to be able to sign in when using your Cognito User Pool? Username
? Do you want to configure advanced settings? No, I am done.
```

authentication 적용을 위해 `amplify push` 명령어를 실행합니다.

```sh
$ amplify push

? Are you sure you want to continue? Yes
```

### withAuthenticator 를 이용하여 로그인된 사용자만 접근 가능한 페이지 구현

인증/로그인된 사용자들만 접근할수 있는 페이지에 `withAuthenticator` HOC (Higher Order Component) 를 적용하면 됩니다.

예를들어, **/pages/index.js** 페이지에 withAuthenticator 를 적용하면, 사용자는 반드시 로그인을 해야합니다. 로그인이 되어있지 않다면, 로그인 페이지로 이동하게 됩니다.

테스트를 위해 **/pages/index.js** 를 변경해봅시다.

```diff
/* pages/index.js */
import Head from "next/head";
+ import { withAuthenticator } from "@aws-amplify/ui-react";

- export default Home;
+ export default withAuthenticator(Home);
```

> Authenticator UI Component 관련 문서 [here](https://docs.amplify.aws/ui/auth/authenticator/q/framework/react)

코드를 변경했으면 브라우져에서 테스트 해봅시다.

```sh
yarn start
```

로그인 프롬프트가 뜨는 것으로, Authentication 플로우가 app 에 추가된것을 확인할 수 있습니다.

일단, sign up 계정생성을 해봅시다.

계정 생성을 하면 입력한 이메일로 confirmation code 가 전송됩니다.

이메일로 받은 confirmation code 를 입력해서 계정 생성을 마무리 합니다.

auth console 로 들어가면 생성된 사용자를 확인할수 있습니다.

```sh
$ amplify console auth

> Choose User Pool
```

### Signout

Signout 기능을 Signout UI Compnonent 를 이용해 추가해봅시다.

```js
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

/* UI 어딘가에 넣어주세요. */
<AmplifySignOut />;
```

> Sign Out UI Component 문서 [here](https://docs.amplify.aws/ui/auth/sign-out/q/framework/react)

SignOut 버튼을 눌러서 로그아웃이 잘 되는지도 확인해보세요.

### Accessing User Data

로그인 상태에서 `Auth.currentAuthenticatedUser()` 로 사용자 정보를 가져올수 있습니다.

**pages/index.js** 파일을 변경해봅시다.

```diff
+ import { useEffect } from "react";
+ import { Auth } from "aws-amplify";


+ useEffect(() => {
+ checkUser(); // new function call
+ });

+async function checkUser() {
+  const user = await Auth.currentAuthenticatedUser();
+  console.log("user: ", user);
+  console.log("user attributes: ", user.attributes);
+}
```

브라우져 콘솔을 열고 / 페이지를 로딩하면, 콘솔에 로그인된 사용자 정보들과 attributes 들이 출력되는걸 확인할수 있습니다.

## Adding an AWS AppSync GraphQL API

GraphQL API 를 추가하기 위해선, 다음 명령어를 실행합니다.
일단 api key 를 가지고 있는 클라이언트들은 접근할수 있는 public api 로 만들겠습니다.

```sh
$ amplify add api

? Please select from one of the below mentioned services: GraphQL
? Provide API name: amplifygraphqlschema
? Choose the default authorization type for the API API key
? Enter a description for the API key:
? After how many days from now the API key should expire (1-365): 365
? Do you want to configure advanced settings for the GraphQL API Yes, I want to make some additional changes.
? Configure additional auth types? Yes
? Choose the additional authorization types you want to configure for the API Amazon Cognito User Pool
Cognito UserPool configuration
Use a Cognito user pool configured as a part of this project.
? Enable conflict detection? No
? Do you have an annotated GraphQL schema? No
? Choose a schema template: Single object with fields (e.g., “Todo” with ID, name, description)
? Do you want to edit the schema now? (Y/n) Y
```

실행된 CLI 는 GraphQL schema 를 텍스트 에디터로 수정할수 있게 로딩됩니다.

> 기본 인증 방식은 API Key 이며 optional 인증 방식은 Cognito UserPool (로그인 사용자) 입니다.

> 클라이언트에서 API 호출시 어떤 인증방식을 사용할 것인지 파리미터로 지정해줘야 합니다. 아래 부분에서 보여드리도록 하겠습니다.

## PublicPost : 모든 사용자가 CRUD 가능한 모델

일단 모든 사용자가 CRUD 액세스 할수 있는 모델로 만들어보겠습니다. PublicPost 라고 하겠습니다.

**amplify/backend/api/petstagram/schema.graphql** 파일을 열어 schema 내용을 다음과 같이 바꿔봅시다.

```graphql
type PublicPost @model {
  id: ID!
  title: String!
  content: String
}
```

변경 사항 적용을 위해 `amplify push` 명령어를 실행합니다.

```sh
$ amplify push

? Are you sure you want to continue? Yes
```

### Testing API : PublicPost

AppSync dashboard 내 GraphQL editor 로 들어가면, API 를 테스트 할수 있습니다. AppSync dashboard 를 오픈하려면, 다음 명령어를 실행합니다.

```sh
$ amplify console api

> Choose GraphQL
```

AppSync dashboard 에서 **Queries** 를 클릭해서 GraphQL editor 를 열고, 다음 mutation 으로 새로운 PublicPost을 생성합니다.

비인증 사용자가 생성할수 있는지를 테스트 해보는것이기 때문에 "Select the authorization provider to use for running queries on this page" 는 `API Key` 로 선택합니다.

```graphql
mutation MyMutation {
  createPublicPost(
    input: { title: "1st post", content: "content for 1st post" }
  ) {
    createdAt
    content
    id
    title
    updatedAt
  }
}
```

PublicPost 목록을 쿼리해봅니다.

```graphql
query MyQuery {
  listPublicPosts {
    items {
      createdAt
      content
      id
      title
      updatedAt
    }
  }
}
```

## Private Post : 로그인된 사용자 본인만 (owner) CRUD 가능한 모델

로그인된 사용자만 액세스 할수 있는 API 와 모델인 PrivatePost 을 만들어봅시다.

**amplify/backend/api/petstagram/schema.graphql** 파일을 열어 다음 내용을 추가해줍니다.

```graphql
type PrivatePost @model @auth(rules: [{ allow: owner }]) {
  id: ID!
  title: String!
  content: String
}

# 위 내용과 동일. @auth directive 를 아래와 같이 풀어서 작성할수 있음.
# type PrivatePost
#  @model
#  @auth(
#    rules: [
#      {
#        allow: owner
#        ownerField: "owner"
#        operations: [create, update, delete, read]
#      }
#   ]
#  ) {
#  id: ID!
#  title: String!
#  content: String
#}
```

- `@auth(rules: [{ allow: owner }])` directive 를 추가하면, 모델에 `owner` 필드가 자동으로 추가되며, 해당 필드에는 로그인된 사용자의 username 이 저장됩니다.
- `@auth(rules: [{ allow: owner }])` 의 경우 로그인된 사용자만 글을 작성할수 있으며, 로그인된 사용자 본인의 글들만 조회하고 업데이트하고 삭제할수 있습니다. [Owner authorization](https://docs.amplify.aws/cli/graphql-transformer/auth#owner-authorization)

변경 사항 적용을 위해 `amplify push --y` 명령어를 실행합니다. `--y` 옵션을 주게되면 cli 에서 나오는 질문들에 모두 자동으로 y 로 답하게 됩니다.

```sh
$ amplify push --y
```

### Testing API : PrivatePost

AppSync dashboard 에서 **Queries** 를 클릭해서 GraphQL editor 를 열고, 다음 mutation 으로 새로운 PrivatePost을 생성합니다.

"Select the authorization provider to use for running queries on this page" 는 `Amazon Cognito User Pools` 로 선택하고 이전 과정에서 생성한 계정으로 로그인해서 인증을 해주세요.

```graphql
mutation MyMutation {
  createPrivatePost(
    input: { title: "my 1st private post", content: "private content" }
  ) {
    createdAt
    content
    id
    owner
    title
    updatedAt
  }
}
```

> "Select the authorization provider to use for running queries on this page" 에서 `API Key` 로 선택하고 실행하면, **Unauthorized** 에러가 납니다. PrivatePost 는 로그인된 사용자만 생성(create) 가능하기 때문입니다.

PrivatePost 목록을 쿼리해봅니다.

```graphql
query MyQuery {
  listPrivatePosts {
    items {
      createdAt
      content
      id
      owner
      title
      updatedAt
    }
  }
}
```

> 인증방식을 `API Key` 로 선택하고 실행하면, **Unauthorized** 에러가 납니다. PrivatePost 는 로그인된 사용자만 조회(read) 가능하기 때문입니다.

## Post : 로그인된 사용자 본인은(owner) CRUD 가능 + 다른 사용자들 (인증/비인증) 은 Read 가능

로그인된 사용자는 생성/수정/삭제/읽기 가능하고, 다른 사용자들은 읽기만 가능한 Post 를 만들어봅시다.

**amplify/backend/api/petstagram/schema.graphql** 파일을 열어 다음 내용을 추가해줍니다.

```graphql
type Post
  @model
  @auth(rules: [{ allow: public, operations: [read] }, { allow: owner }]) {
  id: ID!
  title: String!
  content: String
}
```

- `allow: public, operations: [read]` ->`allow: private, operations: [read]` 으로 바꾸면 로그인된 사용자들만 글을 읽을수 있게 됩니다. (인증 안된 사용자는 unauthorized error)
- `allow: owner` 를 `allow: private` 으로 바꾸면, 로그인된 사용자들이 글을 수정/삭제 가능하게 됩니다.

변경 사항 적용을 위해 `amplify push --y` 명령어를 실행합니다.

```sh
$ amplify push --y
```

### Testing API : Post

AppSync dashboard 에서 **Queries** 를 클릭해서 GraphQL editor 를 열고, 다음 mutation 으로 새로운 Post 를 생성합니다.

"Select the authorization provider to use for running queries on this page" 는 `Amazon Cognito User Pools` 로 선택하고 이전 과정에서 생성한 계정으로 로그인해서 인증을 해주세요.

```graphql
mutation MyMutation {
  createPost(
    input: {
      title: "1st regular post readbale by public"
      content: "content readable by public"
    }
  ) {
    createdAt
    content
    id
    owner
    title
    updatedAt
  }
}
```

> 이번에도 역시 인증방식을 `API Key` 로 선택하고 실행하면, **Unauthorized** 에러가 나며 레코드 생성에 실패합니다. Post 는 로그인된 사용자만 생성(create) 가능하기 때문입니다.

Post 목록을 쿼리해봅니다. 인증방식을 `API Key` 로 변경하고 실행해도 잘 조회되어야 합니다.

```graphql
query MyQuery {
  listPosts {
    items {
      createdAt
      content
      id
      owner
      title
      updatedAt
    }
  }
}
```

## Post with Editor : 로그인된 사용자 본인은(owner) CRUD 가능 + editor 로 지정된 사용자들은 Update/Read 가능

로그인된 사용자는 생성/수정/삭제/읽기 가능하고, editor 로 지정된 사용자들은 update/read 가능한 PostWithEditor 를 만들어봅시다.

**amplify/backend/api/petstagram/schema.graphql** 파일을 열어 다음 내용을 추가해줍니다.

```graphql
type PostWithEditor
  @model
  @auth(
    rules: [
      { allow: owner }
      { allow: owner, ownerField: "editors", operations: [update, read] }
    ]
  ) {
  id: ID!
  title: String!
  content: String
  editors: [String]!
}
```

변경 사항 적용을 위해 `amplify push --y` 명령어를 실행합니다.

```sh
$ amplify push --y
```

### Editor 사용자 생성

이번 테스트에는 editor 로 지정할 사용자가 필요합니다.
브라우져로 돌아가 로그아웃한후, 새로운 사용자를 생성해주세요. `username_01` 로 생성하도록 해봅시다.

### Testing API : PostWithEditor

AppSync dashboard 에서 **Queries** 를 클릭해서 GraphQL editor 를 열고, 다음 mutation 으로 새로운 PostWithEditor 를 생성합니다.

인증방식을 `Amazon Cognito User Pools` 로 선택하고 이전 과정에서 생성한 계정으로 로그인해서 인증을 해주세요.

```graphql
mutation MyMutation {
  createPostWithEditor(
    input: {
      title: "1st Post with Editors"
      content: "Readable and Updatable by editors"
      editors: "username_01"
    }
  ) {
    owner
    editors
    id
    createdAt
    content
    title
    updatedAt
  }
}
```

다음과 같은 response 가 옵니다. editors 필드안에는 editor로 지정된 사용자의 username 이 들어있습니다.

```json
{
  "data": {
    "createPostWithEditor": {
      "owner": "taehokan",
      "editors": ["username_01"],
      "id": "be65c470-2ec6-4e3a-a415-79e61e65aeba",
      "createdAt": "2021-05-11T07:30:00.371Z",
      "content": "Readable and Updatable by editors",
      "title": "1st Post with Editors",
      "updatedAt": "2021-05-11T07:30:00.371Z"
    }
  }
}
```

editor 로 지정된 사용자인 "username_01" 이 방금 생성된 PostWithEditor 레코드를 Read 와 Update 가능한지 테스트해보겠습니다.
인증방식은 `Amazon Cognito User Pools` 로 선택하고 이번 섹션에서 새로 생성한 사용자 ("username_01") 로 로그인 인증 해주세요.

PostWithEditor 목록을 쿼리해봅니다.

```graphql
query MyQuery {
  listPostWithEditors {
    items {
      content
      createdAt
      editors
      id
      owner
      title
      updatedAt
    }
  }
}
```

조회된 PostWithEditor 를 수정해봅니다.

```graphql
mutation MyMutation {
  updatePostWithEditor(
    input: {
      id: "be65c470-2ec6-4e3a-a415-79e61e65aeba"
      content: "Content updated by editor user"
    }
  ) {
    content
    createdAt
    editors
    id
    owner
    title
    updatedAt
  }
}
```

content 의 내용이 변경된것을 확인할수 있습니다.

```json
{
  "data": {
    "updatePostWithEditor": {
      "content": "Content updated by editor user",
      "createdAt": "2021-05-11T07:30:00.371Z",
      "editors": ["username_01"],
      "id": "be65c470-2ec6-4e3a-a415-79e61e65aeba",
      "owner": "taehokan",
      "title": "1st Post with Editors",
      "updatedAt": "2021-05-11T07:41:08.396Z"
    }
  }
}
```

## Post with Reader Group : 로그인된 사용자 본인은(owner) CRUD 가능 + readers 로 지정된 group 은 Read 가능

로그인된 사용자(owner)는 생성/수정/삭제/읽기 가능하고
readers 로 지정된 group은 Read 가능한 PostWithReaderGroup 를 만들어봅시다.

**amplify/backend/api/petstagram/schema.graphql** 파일을 열어 다음 내용을 추가해줍니다.

```graphql
type PostWithReaderGroup
  @model
  @auth(
    rules: [
      { allow: owner }
      { allow: groups, groupsField: "readers", operations: [read] }
    ]
  ) {
  id: ID!
  title: String!
  content: String
  readers: [String]!
}
```

변경 사항 적용을 위해 `amplify push --y` 명령어를 실행합니다.

```sh
$ amplify push --y
```

### Group 에 사용자 추가

이번 테스트에는 사용자를 group 에 추가하는 작업이 필요합니다.

- Ampliy console 로 들어가, "Backend environments" => "Authentication" => "View in Cognito" => "General settings : Users and Groups" => "Groups" => "Create Group" 으로 group 을 생성해주세요. `readergroup` 으로 생성하겠습니다.
- "General settings : Users and Groups" => "Users" 에서 사용자를 선택후 "Add to group" 으로 사용자를 `readergroup` 그룹에 넣어주세요.

### Testing API : PostWithReaderGroup

AppSync dashboard 에서 **Queries** 를 클릭해서 GraphQL editor 를 열고, 다음 mutation 으로 새로운 PostWithReaderGroup 을 생성합니다.

인증방식을 `Amazon Cognito User Pools` 로 선택하고 이전 과정에서 생성한 계정으로 로그인해서 인증을 해주세요.

```graphql
mutation MyMutation {
  createPostWithReaderGroup(
    input: {
      title: "1st Post with Reader Group"
      content: "Readable by reader group"
      groups: "readergroup"
    }
  ) {
    owner
    groups
    id
    createdAt
    content
    title
    updatedAt
  }
}
```

다음과 같은 response 가 옵니다. editors 필드안에는 editor로 지정된 사용자의 username 이 들어있습니다.

```json
{
  "data": {
    "createPostWithReaderGroup": {
      "content": "Readable by reader group",
      "createdAt": "2021-05-11T08:34:35.091Z",
      "id": "34441463-58f2-48db-8265-af89e9f28b62",
      "owner": "taehokan",
      "readers": ["readergroup"],
      "title": "1st Post with Reader Group",
      "updatedAt": "2021-05-11T08:34:35.091Z"
    }
  }
}
```

readergroup 으로 들어가있는 사용자인 `username_01` 로 로그인해서 방금 생성된 레코드를 Read 가능한지 테스트 해봅시다.
인증방식은 `Amazon Cognito User Pools` 로 선택하고 `username_01` 로 로그인 인증 해주세요.

PostWithReaderGroup 목록을 쿼리해봅니다.

```graphql
query MyQuery {
  listPostWithReaderGroups {
    items {
      content
      createdAt
      id
      owner
      readers
      title
      updatedAt
    }
  }
}
```

## Message Forum

- 로그인된 사용자 (owner) 는 Topic 과 Comment CRUD 가능
- Moderator group 은 Topic 과 Comment Read/Update/Delete 가능
- 나머지 로그인 사용자들은 Topic 과 Comment Read 가능

**amplify/backend/api/petstagram/schema.graphql** 파일을 열어 다음 내용을 추가해줍니다.

```graphql
type Topic
  @model
  @auth(
    rules: [
      { allow: owner }
      {
        allow: groups
        groups: ["Moderator"]
        operations: [read, update, delete]
      }
      { allow: private, operations: [read] }
    ]
  ) {
  id: ID!
  title: String!
  comments: [Comment] @connection(keyName: "topicComments", fields: ["id"])
}

type Comment
  @model
  @key(name: "topicComments", fields: ["topicId", "content"])
  @auth(
    rules: [
      { allow: owner }
      {
        allow: groups
        groups: ["Moderator"]
        operations: [read, update, delete]
      }
      { allow: private, operations: [read] }
    ]
  ) {
  id: ID!
  topicId: ID!
  content: String!
  topic: Topic @connection(fields: ["topicId"])
}
```

변경 사항 적용을 위해 `amplify push --y` 명령어를 실행합니다.

```sh
$ amplify push --y
```

위 schema 를 이용해 구현한 Message Forum application 에 대한 hands-on lab 은 [Build a Reddit-like Forum with Next.js and Amplify](https://github.com/tkang/amplify-forum) 에서 확인 가능합니다.

## Chat

- Admin group 은 Channel CRUD 가능,
- 다른 로그인 사용자들은 (1) Channel Read 가능 (2) users 목록 조회 가능
- users 목록안에 들어있는 사용자들만 Message Create/Read 가능

**amplify/backend/api/petstagram/schema.graphql** 파일을 열어 다음 내용을 추가해줍니다.

```graphql
type Channel
  @model
  @auth(
    rules: [
      {
        allow: groups
        groups: ["Admin"]
        operations: [create, update, delete, read]
      }
      { allow: private, operations: [read] }
    ]
  ) {
  id: ID!
  name: String!
  users: [String] @auth(rules: [{ allow: private }])
  messages: [Message]
    @connection(
      name: "channelMessages"
      keyField: "channelId"
      sortField: "createdAt"
    )
    @auth(
      rules: [{ allow: owner, ownerField: "users", operations: [create, read] }]
    )
}

type Message
  @model(queries: null)
  @key(name: "channelMessages", fields: ["channelId", "text"]) {
  id: ID!
  text: String!
  createdAt: AWSDateTime!
  channelId: ID!
  channel: Channel @connection(name: "channelMessages", keyField: "channelId")
}
```

변경 사항 적용을 위해 `amplify push --y` 명령어를 실행합니다.

```sh
$ amplify push --y
```

## Removing Services

만약에 프로젝트와 어카운트에서 서비스를 삭제하고 싶으면 `amplify remove` 명령어로 수행할수 있습니다.

```sh
$ amplify remove auth

$ amplify push
```

어떤 서비스가 enabled 되어있는지 모르겠으면 `amplify status` 로 확인할수 있습니다.

```sh
$ amplify status
```

### Deleting the Amplify project and all services

프로젝트를 모두 지우고 싶다면 `amplify delete` 명령어로 할수 있습니다.

```sh
$ amplify delete
```
