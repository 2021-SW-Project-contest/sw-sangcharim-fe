## 0. 개발 준비

### git 적용 🆕

- 깃 커밋을 적용하기 위해서, 아래 명령어를 실행합니다.
- git add .
- git commit -m "커밋메세지"
- git pull origin [branch] ([]안의 브랜치는 적절하게 변경해주세요)
- git push origin [branch] ([]안의 브랜치는 적절하게 변경해주세요)

## 1. 작업방식 ✨

기본적인 작업방식을 공유합니다
main 브랜치엔 오류가 없는 완성단계의 코드만 merge합니다. 각 작업의 코드는 각각의 feature 브랜치에 push한 후 한 작업이 끝나면 dev branch에 pull request 하도록합니다 pull request시엔 @blair06 을 할당해주세요 확인 후 merge 하겠습니다 (push 아니고 pull request 입니다 주의해주세요)

feature -> dev -> main

### 1.1. Issue 생성

- 온라인 협업이기 때문에 서로가 어떤 작업을 하고있는지 어디까지 작업했는지 공유하는게 중요합니다
- github의 issue탭에서 새로운 issue를 등록해주세요
- issue의 제목은 현재 작업하고 있는 내용입니다 ex) 메인페이지 컴포넌트 작업, 도표페이지 데이터 바인딩 작업 ...

### 1.2. 브랜치 생성

- issue 생성시 등록된 issue번호가 곧 브랜치 번호 입니다 issue와 브랜치를 1:1관계로 생성해주세요
- 브랜치명은 feature/#이슈번호로 생성합니다 ex) issue번호 1의 브랜치 feature/#1

## 2. 공통컨벤션 🛠

### 2.1. 공통컨벤션 요약

- 파일, 폴더, 변수의 이름은 카멜케이스를 따르도록 합니다.
- 모든 화면은 반복적으로 사용되는 `component`와 각 페이지를 의미하는 `scene`으로 나뉩니다.
- prettier를 사용합니다. 저장시 자동으로 정렬되도록 설정해둡니다. (vs code의 "editor.formatOnSave" 항목을 true로 설정)
- main 브랜치에는 업로드하지 않고, 기능 개발시 브랜치를 만들어 pull request를 작성하도록 합니다
- 커밋 메시지는 되도록 첫줄은 이슈 넘버와 간단하게 작성 후 줄 바꿈하여 상세한 내용을 작성하도록 합니다. ex) feat: #10 검색컴포넌트 구현
