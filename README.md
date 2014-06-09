jsonEditor
==========

jQuery를 사용하는 javascript 에디터입니다.
처음에는 조금 더 쉽게 json데이터를 편집, 가공하여 데이터베이스에 등록하는 용도로 만들어졌습니다.

json 데이터 import로 데이터를 에디터로 가져올 수 있고, export로 json데이터로 내보낼 수 있습니다.

데모페이지 : (준비중입니다.)


##사용방법
다운받아서 index페이지를 열어보면 샘플 데이터가 불러와져있고, "export JSON"버튼을 누르면 그 아래에 json데이터 결과물을 확인할 수 있습니다.

먼저 `<head/>` 엘리먼트에서 아래와 같이 jsonEditor.css 파일을 로드합니다.
```
<link rel="stylesheet" href="./css/jsonEditor.css" />
```

그리고 중간에 `<div class="jsonEditor"> ... </div>` 엘리먼트 부분을 때내어 작업할 곳에다 붙여넣습니다.

그 다음은 아래 소스와 같이 제이쿼리와 관련 자바스크립트 소스를 로드합니다.
```
<script src="./js/jquery-2.1.1.min.js"></script>
<script src="./js/jquery-sortable.js"></script>
<script src="./js/jsonEditor.js"></script>
```

마지막으로 아래 소스와 같이 JSONEditor 클래스를 초기화합니다.
```
<script>
jQuery(function($){
	var jsonEditor = new JSONEditor($('div.jsonEditor'));
});
</script>
```

좀 더 자세한 사항은 index.html파일 소스를 참고하세요~
