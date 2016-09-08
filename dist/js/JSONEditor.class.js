Object.size=function(t){var e,n=0;for(e in t)t.hasOwnProperty(e)&&n++;return n};var JSONEditor=function(t,e){function n(){this.removeBR=function(t){t.find("br").replaceWith(" ")},this.stringLimiter=function(t,e){var n=t.text();n.length>e&&t.text(n.substring(0,e))},this.removeSpace=function(t){t.text(t.text().replace(/\s+/g,""))}}function r(t,e){var n=this,r=t;n.$el=null,n.active=null;var o=function(t){function e(t){var n="<ul>";for(var r in t)n+='<li role="'+t[r].role+'">',t[r].roles&&(n+="<div>",n+=e(t[r].roles),n+="</div>"),n+='<button type="button">'+t[r].role+"</button>",n+="</li>";return n+="</ul>"}var n='<nav class="context">';return n+=e(t),n+="</nav>",$(n)},i=function(){n.$el=o(e),r.$wrap.append(n.$el)},a=function(t){t.find("li").on("click",function(t){t.stopPropagation()}),t.find("li[role=Type] li").on("click",function(){r.typeItem(n.active,$(this).attr("role")),l.off()}),t.find("li[role=Insert] li").on("click",function(){r.insertItem(n.active,$(this).attr("role"),null),l.off()}),t.find("li[role=Duplicate]").on("click",function(){r.duplicateItem(n.active),l.off()}),t.find("li[role=Remove]").on("click",function(){r.removeItem(n.active),l.off()})};this.on=function(t,e){n.active=t,n.$el.attr("type",t.attr("type")).css({left:e.position().left+e.outerWidth(),top:e.position().top-3}),"root"==t.attr("loc")?n.$el.attr("loc",t.attr("loc")):n.$el.removeAttr("loc"),$("html").on("click",function(){n.off()})},this.off=function(){n.active=null,n.$el.removeAttr("type"),$("html").off("click")},i(),a(n.$el)}var o=this;o.$wrap=t,o.$index=null,o.$preview=null;var i=new n,l=new r(this,this.contextTree),a=function(){o.$index=$('<div class="index" />'),o.$index.append(v()),o.$wrap.prepend(o.$index),o.$preview=$('<pre class="preview" />'),o.$wrap.append(o.$preview),o.$wrap.addClass("preview"),y()},c=function(t){var e='<li type="'+t+'" class="on">\n';return e+="<dl>",e+="<dt>",e+='<button type="button" role="move">move</button>',e+='<button type="button" role="control">control</button>',e+='<em class="no">0</em>',e+='<button type="button" role="toggle">toggle</button>',e+='<strong contenteditable="true" spellcheck="false" data-ph="'+t+'"></strong>',e+='<span class="type"></span>',e+='<em class="count">0</em>',e+="</dt>",e+="<dd>",e+='<span contenteditable="true" spellcheck="false"></span>',e+="</dd>",e+="</dl>",e+="<ul></ul>",e+="</li>",$(e)},u=function(t){return t.children("dl").children("dt").children("button")},s=function(t){var e=t.find("> ul > li").length;t.find("> dl em.count").text(e)},f=function(t){t.each(function(t){$(this).find("> dl > dt > em.no").text(t)})},p=function(t){var e=t.find("> dl > dt > strong"),n=t.find("> dl > dt > strong, > dl > dd > span");e.on("blur",function(){i.removeBR($(this)),i.removeSpace($(this)),i.stringLimiter($(this),20)}),n.on("blur",function(){y()})},d=function(t){var e=t.closest("li");t.filter("[role=control]").on("click",function(t){t.stopPropagation(),l.off(e),l.on(e,$(this))}),t.filter("[role=toggle]").on("click",function(t){e.toggleClass("on")})},h=function(t){var e,n;t.children("ul").sortable({itemSelector:"li",handle:"button[role=move]",group:"index",pullPlaceholder:!0,onDrop:function(t,r,o){s(n.parent()),s(r.el.parent()),f(n.children()),f(r.el.children()),y(),n=e=null,o(t,r)},onDragStart:function(t,r,o){var i=t.offset(),l=r.rootGroup.pointer;e={left:l.left-i.left,top:l.top-i.top},n=r.el,o(t,r)},onDrag:function(t,n){t.css({left:n.left-e.left,top:n.top-e.top})},isValidTarget:function(t,e){return"String"!=e.el.parent().attr("type")}})},v=function(){var t=$("<ul/>"),e=c("Object");return e.attr("loc","root"),e.find("[contenteditable]").attr("contenteditable","false"),e.find("[role=move]").remove(),t.append(e),d(u(e)),h(e),t},y=function(){o.$preview.text(o["export"](5))};this.insertItem=function(t,e,n,r){var o=t.children("ul"),i=c(e);i.find("em.no").text(o.children("li").length),n&&(i.find("dt strong").text(n.key),i.find("dd span").text(n.value)),d(u(i)),p(i),t.addClass("on").children("ul").append(i),s(t),r&&r(i)},this.typeItem=function(t,e){var n=t.find("> dl > dt > strong"),r=t.find("> dl > dd > span");switch(t.attr("type",e),n.attr("data-ph",e),e){case"Number":var o=parseInt(r.text());o=o?o:0,r.text(o);break;case"Boolean":r.text(!!r.text())}y()},this.duplicateItem=function(t){var e=t.clone().insertAfter(t).find("li").andSelf();e.each(function(){d(u($(this))),p($(this))}),s(t.parent().parent()),f(t.parent().children()),y()},this.removeItem=function(t){var e=t.parent().parent();t.remove(),s(e),y()},this["import"]=function(t){function e(t,n){$.each(t,function(t,r){var i={key:t,value:r},l=null;"string"==typeof r?l="String":"object"==typeof r?l=Array.isArray(r)?"Array":"Object":"number"==typeof r?l="Number":"boolean"==typeof r&&(l="Boolean"),o.insertItem(n,l,i,function(t){"String"!==l&&Object.size(r)>0&&e(r,t)})})}e(t,o.$index.find("[loc=root]")),y()},this.replace=function(t){var e=this.$index.find("[loc=root]"),n=e.find("> ul > li");this.removeItem(n),Array.isArray(t)&&this.typeItem(e,"Array"),this["import"](t)},this["export"]=function(t){function e(t,n){var r=t.children("ul").children("li");return r.length&&r.each(function(){var r=$(this),o=r.find("> dl > dt > strong").text(),i=r.find("> dl > dd > span").text(),l=r.parent().parent();if("Array"!==l.attr("type")&&!o)return!0;switch(r.attr("type")){case"String":"Array"==t.attr("type")?n.push(i):n[o]=i;break;case"Array":"Array"==t.attr("type")?n.push(e(r,[])):n[o]=e(r,[]);break;case"Object":"Array"==t.attr("type")?n.push(e(r,{})):n[o]=e(r,{});break;case"Number":i=parseInt(i),"Array"==t.attr("type")?n.push(i):n[o]=i;break;case"Boolean":i=!("true"!=i&&1!=i),"Array"==t.attr("type")?n.push(i):n[o]=!("true"!=i&&1!=i)}}),n}var n=o.$index.find("[loc=root]"),r=e(n,"Array"==n.attr("type")?[]:{}),i="boolean"==typeof t&&1==t?"\t":0;return i="number"==typeof t?t:i,JSON.stringify(r,null,i)},a()};JSONEditor.prototype.contextTree=[{role:"Type",roles:[{role:"Object"},{role:"Array"},{role:"String"},{role:"Number"},{role:"Boolean"}]},{role:"Insert",roles:[{role:"Object"},{role:"Array"},{role:"String"},{role:"Number"},{role:"Boolean"}]},{role:"Duplicate"},{role:"Remove"}];
//# sourceMappingURL=../maps/JSONEditor.class.js.map
