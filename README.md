jsonEditor 0.4
==========

jQuery를 사용하는 javascript 에디터입니다.
처음에는 조금 더 쉽게 json데이터를 편집, 가공하여 데이터베이스에 등록하는 용도로 만들어졌습니다.

json 데이터 import로 데이터를 에디터로 가져올 수 있고, export로 json데이터로 내보낼 수 있습니다.

데모페이지 : https://projects.redgoose.me/2014/json-editor

[업데이트 내역](https://github.com/redgoose-dev/json-editor/releases) 페이지를 통하여 업데이트 내역을 확인할 수 있으니 참고해주세요.

##Installation
###Step 1. 파일링크
먼저 JSONEditor를 사용하기 위하여 jQuery라이브러리와 드래그 jQuery 플러그인, JSONEditor js와 css파일을 먼저 불러들여서 사용할 준비를 해야합니다.
```
<link rel="stylesheet" href="./dist/css/jsonEditor.css" />
<script src="./vendor/jquery/jquery.min.js"></script>
<script src="./vendor/jquery-sortable/jquery-sortable-min.js"></script>
<script src="./js/JSONEditor.class.js"></script>
```

###Step 2. 출력할 위치에 엘리먼트 삽입
에디터가 만들어지는 위치에서 아래와 같은 엘리먼트를 넣어줍니다.  
css의 class이름이 "JSONEditor"으로 되어있는데 이름을 수정하려면 css에 있는 class이름도 수정해야합니다.
```
<div class="JSONEditor" id="json_editor"></div>
```

###Step 3. JSONEditor 인스턴스 객체 만들기
이제 실질적으로 사용하기 위하여 인스턴스 객체를 만듭니다. 객체를 만들때 필요한 엘리먼트와 이벤트를 만들게 됩니다.
```
<script>
jQuery(function($){
	var jsonEditor = new JSONEditor($('#json_editor'));
});
</script>
```

좀 더 자세한 사항은 index.html파일 소스를 참고하세요~


##브라우저 지원
맥용 사파리에서 개발했으며, 크롬과 파이어폭스에서 정상작동하지만 IE에서 테스트해보지 않았습니다.  
구 브라우저를 지원하지 않는 속성들이 사용되어서 구버전의 브라우저에서 사용은 권장되지 않습니다.

###테스트 브라우저
* 사파리
* 크롬
* 파이어폭스


## Methods
JSONEditor를 통하여 많은것을 활용하기 위한 유용한 메서드들입니다.

### editor.replace(data)
에디터에 있는 내용을 교체합니다. 파라메터 데이터 타입은 `Object`나 `Array`로 사용합니다.
```
jsonEditor.replace({
	profile : {
		name : 'Mike',
		age : 24,
		sex : 'male'
	},
	checklist : [
		'Reading books',
		'Playing football',
		'Cooking dinner'
	]
});
```

### editor.import(data)
에디터에 내용을 추가합니다.
```
jsonEditor.import({
 	fruits : {
		name : 'Apple',
		color : 'red',
		comment : 'small'
	}
});
```

### editor.export(getSpace)
에디터에 있는 내용을 json 문자 데이터로 내보냅니다. `getSpace`값을 숫자로 넣으면 스페이스 수, true로 넣으면 탭, false로 넣으면 0 값으로 들어갑니다.
```
var export_json = jsonEditor.export(true);
```


## Development
이 프로그램을 수정하거나 기능을 더하기 위한 개발작업을 준비할 필요가 있습니다.

### Ready
먼저 npm을 사용하기 때문에 node.js가 설치되어 있어야 합니다.  
npm을 사용할 수 있다면 프로젝트를 이용하여 gulp와 그와 관련된 개발용 도구를 설치합니다.
```
cd ~/JSONEditor
npm install
```

### Compile scss, javascript
프로그램에서 주로 수정되는 부분은 `src/scss/JSONEditor.scss`와 `src/js/JSONEditor.class.js`인데 이 파일들을 수정하고 `/dist` 에 저장하는 명령어들은 다음과 같습니다.

__Compile scss__
```
gulp scss
```

__Watch compile scss__
```
gulp scss:watch
```

__Compile javascript__
```
gulp javascript
```

__Watch compile javascript__
```
gulp javascript:watch
```

> `:Watch`가 들어간 명령을 실행하면 계속 실행되어 있으며 소스가 저장되면 그것을 인식하여 컴파일을 실행합니다.
