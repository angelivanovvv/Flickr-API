(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){e.exports=a(49)},47:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(25),o=a.n(c),s=a(9),i=a(10),l=a(13),u=a(11),p=a(14),d=a(17),h=a(28),m=a(5),f=a(7),b="INIT_PHOTOS",O="INIT_LAZY_PHOTOS",v="INIT_SEARCH_PHOTOS",g="INIT_LAZY_SEARCH_PHOTOS",E="INIT_CLEAR_PHOTOS",y={photos:[],searchedPhotos:[],searched:!1,error:!1,errorMessage:"",pageNumber:1,loading:!1,lazyLoading:!1,cleared:!1},N=Object(m.c)({photos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_PAGE_NUMBER":return Object(f.a)({},e,{pageNumber:e.pageNumber+t.payload.pageNumber});case E:return Object(f.a)({},e,{photos:[],searchedPhotos:[],searched:!1,error:!1,errorMessage:"",pageNumber:1,loading:!1,lazyLoading:!1,cleared:!0});case"FETCH_PHOTOS_LOADING":return Object(f.a)({},e,{loading:!0,cleared:!1});case"FETCH_PHOTOS_LAZY_LOADING":return Object(f.a)({},e,{lazyLoading:!0,cleared:!1});case"FETCH_PHOTOS_SUCCESS":return Object(f.a)({},e,{photos:e.photos.concat(t.payload.data),searched:!1,error:!1,errorMessage:"",loading:!1,lazyLoading:!1,cleared:!1});case"FETCH_PHOTOS_SEARCH_SUCCESS":return Object(f.a)({},e,{photos:[],searchedPhotos:e.searchedPhotos.concat(t.payload.data),searched:!0,error:!1,errorMessage:"",loading:!1,lazyLoading:!1,cleared:!1});case"FETCH_PHOTOS_FAILD":return Object(f.a)({},e,{error:!0,errorMessage:t.payload.error,loading:!1,lazyLoading:!1,cleared:!1});default:return e}}}),_=a(27),j="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):m.d,w=a(6),S=a.n(w),P=a(4),I=a(51),C=function(){return{type:"FETCH_PHOTOS_LOADING"}},H=function(){return{type:"FETCH_PHOTOS_LAZY_LOADING"}},T=function(e){return{type:"FETCH_PHOTOS_SUCCESS",payload:{data:e}}},x=function(e){return{type:"FETCH_PHOTOS_SEARCH_SUCCESS",payload:{data:e}}},k=function(e){return{type:"FETCH_PHOTOS_FAILD",payload:{error:e}}},L=a(20),V=a.n(L),A=function(e){return new Promise(function(t,a){V.a.get(e).then(function(e){return t(e)}).catch(function(e){return a(e)})})},M="https://api.flickr.com/services/rest/",D="api_key=14995cbf3511e5aec79db6ed0e3832ba",F="format=json",U="nojsoncallback=1",z="extras=description%2Cowner_name%2Ctags%2Curl_m+",R="per_page=15",B="page=",G="tags=",W={get:"method=flickr.photos.getRecent",search:"method=flickr.photos.search"},Y=function(e){return"undefined"!==typeof e?"".concat(M,"?").concat(W.get,"&").concat(D,"&").concat(z,"&").concat(R,"&").concat(B).concat(e,"&").concat(F,"&").concat(U):"".concat(M,"?").concat(W.get,"&").concat(D,"&").concat(z,"&").concat(R,"&").concat(F,"&").concat(U)},X=function(e,t){return"undefined"!==typeof t?"".concat(M,"?").concat(W.get,"&").concat(D,"&").concat(z,"&").concat(G).concat(t,"&").concat(R,"&").concat(F,"&").concat(U):"".concat(M,"?").concat(W.get,"&").concat(D,"&").concat(z,"&").concat(R,"&").concat(F,"&").concat(U)},Z=Object.freeze({collectPhotos:function(e){return A(Y(e))},searchPhotos:function(e,t){return A(X(e,t))}}),q=S.a.mark($),J=S.a.mark(ee),K=S.a.mark(te),Q=S.a.mark(ae);function $(e){var t,a,n,r;return S.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(P.b)(C());case 3:return c.next=5,Object(P.a)(Z.collectPhotos,e.payload.page,e.payload.searchValue);case 5:return t=c.sent,a=t.body.photos.photo,n=["secret","server","farm","ispublic","isfriend","isfamily"],r=a.map(function(e){return I.a(n,e)}),c.next=11,Object(P.b)(T(r));case 11:c.next=17;break;case 13:return c.prev=13,c.t0=c.catch(0),c.next=17,Object(P.a)(k(c.t0.message));case 17:case"end":return c.stop()}},q,this,[[0,13]])}function ee(e){var t,a,n,r;return S.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(P.b)(H());case 3:return c.next=5,Object(P.a)(Z.collectPhotos,e.payload.page,e.payload.searchValue);case 5:return t=c.sent,a=t.body.photos.photo,n=["secret","server","farm","ispublic","isfriend","isfamily"],r=a.map(function(e){return I.a(n,e)}),c.next=11,Object(P.b)(T(r));case 11:c.next=17;break;case 13:return c.prev=13,c.t0=c.catch(0),c.next=17,Object(P.a)(k(c.t0.message));case 17:case"end":return c.stop()}},J,this,[[0,13]])}function te(e){var t,a,n,r;return S.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(P.b)(C());case 3:return c.next=5,Object(P.a)(Z.searchPhotos,e.payload.page,e.payload.searchValue);case 5:return t=c.sent,a=t.body.photos.photo,n=["secret","server","farm","ispublic","isfriend","isfamily"],r=a.map(function(e){return I.a(n,e)}),c.next=11,Object(P.b)(x(r));case 11:c.next=17;break;case 13:return c.prev=13,c.t0=c.catch(0),c.next=17,Object(P.a)(k(c.t0.message));case 17:case"end":return c.stop()}},K,this,[[0,13]])}function ae(e){var t,a,n,r;return S.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(P.b)(H());case 3:return c.next=5,Object(P.a)(Z.collectPhotos,e.payload.page,e.payload.searchValue);case 5:return t=c.sent,a=t.body.photos.photo,n=["secret","server","farm","ispublic","isfriend","isfamily"],r=a.map(function(e){return I.a(n,e)}),c.next=11,Object(P.b)(x(r));case 11:c.next=17;break;case 13:return c.prev=13,c.t0=c.catch(0),c.next=17,Object(P.a)(k(c.t0.message));case 17:case"end":return c.stop()}},Q,this,[[0,13]])}var ne=S.a.mark(re);function re(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.c)(b,$);case 2:return e.next=4,Object(P.c)(E,$);case 4:return e.next=6,Object(P.c)(O,ee);case 6:return e.next=8,Object(P.c)(v,te);case 8:return e.next=10,Object(P.c)(g,ae);case 10:case"end":return e.stop()}},ne,this)}var ce,oe=function(e){return r.a.createElement("div",{className:e.className},e.children)},se=function(e){var t=null;return e.invalid&&e.touched&&(t=r.a.createElement("div",{className:"errorMessage"},r.a.createElement("p",null,"Please enter a valid value."))),t},ie=function(e){return r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"searchBarContainer"},r.a.createElement("form",{action:"#",className:"form"},r.a.createElement("div",{className:"searchWrapper"},r.a.createElement("i",{className:"fa fa-search searchIcon"}),r.a.createElement("input",{onChange:e.getValue,type:"text",className:"searchInput"})),r.a.createElement("div",{className:"buttonWrapper"},r.a.createElement("button",{disabled:e.invalid,className:"searchBtn",onClick:e.searchEvent},"Search"),r.a.createElement("button",{className:"clearBtn",onClick:e.clearEvent},"Clear")),r.a.createElement(se,{touched:e.touched,invalid:e.invalid}))))},le=function(e){return r.a.createElement("div",{className:"cardPhotoContainer"},r.a.createElement("div",{className:"imageWrapper"},r.a.createElement("img",{src:e.imageUrl,alt:"image"})),r.a.createElement("div",{className:"contentWrapper"},r.a.createElement("div",{className:"header"},r.a.createElement("span",{className:"title"},r.a.createElement("a",{href:"https://www.flickr.com/photos/"+e.ownerId+"/"+e.photoId},e.title)),r.a.createElement("span",{className:"author"},r.a.createElement("a",{href:"https://www.flickr.com/photos/"+e.ownerId},e.ownerName))),r.a.createElement("div",{className:"body"},r.a.createElement("p",{className:"description"},e.description)),r.a.createElement("div",{className:"footer"},r.a.createElement("p",{className:"tags"},"Tags: ",e.tags))))},ue=function(){return r.a.createElement("div",{className:"lds-ring"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},pe=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t=function(e,t){return Math.random()*(t-e)+e};return 0===this.props.photos.length?e=r.a.createElement(ue,null):this.props.photos.searched?(e=this.props.photos.searchedPhotos.map(function(e){return r.a.createElement("div",{key:t(1,1e3),className:"col-md-4 col-sm-6 col-xs-12"},r.a.createElement(le,{key:e.id,photoId:e.id,ownerId:e.owner,ownerName:e.ownername,title:e.title,description:e.description._content,tags:e.tags,imageUrl:e.url_m}))}),r.a.createElement("div",{className:"row"},e)):(e=this.props.photos.photos.map(function(e){return r.a.createElement("div",{key:t(1,1e3),className:"col-md-4 col-sm-6 col-xs-12"},r.a.createElement(le,{key:e.id,photoId:e.id,ownerId:e.owner,ownerName:e.ownername,title:e.title,description:e.description._content,tags:e.tags,imageUrl:e.url_m}))}),this.props.photos.loading?e=r.a.createElement(ue,null):r.a.createElement("div",{className:"row"},e))}}]),t}(r.a.Component),de=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).checkValidity=function(e,t){var a=!0;return t.required&&(a=""!==e.trim()&&a),t.minLength&&(a=e.length>=t.minLength&&a),a},a.getValueHandler=function(e){a.setState(Object(f.a)({},a.state,{value:e.target.value,valid:a.checkValidity(e.target.value,a.state.validation),touched:!0}))},a.searchHandler=function(e){e.preventDefault(),a.props.onInitSearchPhotos(a.props.photos.pageNumber,a.state.searchValue)},a.clearHandler=function(e){e.preventDefault();var t,n;a.props.onInitClearPhotos((t=1,n=100,Math.ceil(Math.random()*(n-t)+t)))},a.onScroll=function(){window.innerHeight+window.scrollY>=document.body.offsetHeight&&(a.props.onPageNumber(),a.props.photos.searched&&a.props.onInitLazySearchPhotos(a.props.photos.pageNumber,a.state.searchValue),a.props.photos.searched||a.props.onInitLazyPhotos(a.props.photos.pageNumber,a.state.searchValue))},a.state={value:"",validation:{required:!0,minLength:3},valid:!1,touched:!1},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.onInitPhotos(this.props.photos.pageNumber),window.addEventListener("scroll",this.onScroll,!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.onScroll,!1)}},{key:"render",value:function(){return console.log(this.props.photos),r.a.createElement(oe,{className:"Wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(ie,{getValue:this.getValueHandler,invalid:!this.state.valid,touched:this.state.touched,shouldValidate:this.state.validation,searchEvent:this.searchHandler,clearEvent:this.clearHandler})),r.a.createElement(pe,this.props)))}}]),t}(r.a.Component),he=Object(d.b)(function(e){return{photos:e.photos}},function(e){return Object(m.b)({onInitPhotos:function(e){return function(e){return{type:b,payload:{page:e}}}(e)},onInitSearchPhotos:function(e,t){return function(e,t){return{type:v,payload:{page:e,searchValue:t}}}(e,t)},onInitLazyPhotos:function(e,t){return function(e,t){return{type:O,payload:{page:e,searchValue:t}}}(e,t)},onInitLazySearchPhotos:function(e,t){return function(e,t){return{type:g,payload:{page:e,searchValue:t}}}(e,t)},onInitClearPhotos:function(e){return function(e){return{type:E,payload:{page:e}}}(e)},onPageNumber:function(){return{type:"INIT_PAGE_NUMBER",payload:{pageNumber:1}}}},e)})(de),me=(a(45),a(47),Object(h.a)()),fe=(ce=me,Object(m.e)(N,function(e){return j(Object(m.a)(_.a,e))}(ce)));me.run(re);var be=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{store:fe},r.a.createElement(he,null))}}]),t}(n.Component);o.a.render(r.a.createElement(be,null),document.getElementById("root"))}},[[29,2,1]]]);
//# sourceMappingURL=main.44a89ef8.chunk.js.map