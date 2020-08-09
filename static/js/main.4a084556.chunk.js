(this["webpackJsonpreact-movie-app-ms"]=this["webpackJsonpreact-movie-app-ms"]||[]).push([[0],{29:function(e,t,n){e.exports=n.p+"static/media/noPosterSmall.6a690710.png"},44:function(e,t,n){e.exports=n(73)},73:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(35),o=n.n(i),c=n(36),l=n.n(c),u=n(11),s=n(12),p=n(14),m=n(13),g=n(18),d=n(4),f=n(9),v=n.n(f),h=n(16),b=n(2),E=n(1),x=n(15);function y(){var e=Object(b.a)(["\n  margin-top: 25px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 25px;\n"]);return y=function(){return e},e}function _(){var e=Object(b.a)(["\n  font-size: 1rem;\n  font-weight: 700;\n"]);return _=function(){return e},e}function j(){var e=Object(b.a)(["\n  :not(:last-child) {\n    margin-bottom: 50px;\n  }\n"]);return j=function(){return e},e}var O=E.c.div(j()),w=E.c.span(_()),k=E.c.div(y()),S=function(e){var t=e.title,n=e.children;return a.a.createElement(O,null,a.a.createElement(w,null,t),a.a.createElement(k,null,n))};function T(){var e=Object(b.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  font-size: 3rem;\n  margin-top: 20px;\n"]);return T=function(){return e},e}var R=E.c.div(T()),U=function(){return a.a.createElement(R,null,a.a.createElement("span",{role:"img","aria-label":"Loading"},"\u23f0"))};function M(){var e=Object(b.a)(["\n  color: ",";\n  font-weight: 700;\n"]);return M=function(){return e},e}function z(){var e=Object(b.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n"]);return z=function(){return e},e}var C=E.c.div(z()),F=E.c.span(M(),(function(e){return e.color})),I=function(e){var t=e.text,n=e.color;return a.a.createElement(C,null,a.a.createElement(F,{color:n},t))};function P(){var e=Object(b.a)(["\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.5);\n"]);return P=function(){return e},e}function N(){var e=Object(b.a)(["\n  display: block;\n  margin-bottom: 5px;\n"]);return N=function(){return e},e}function Q(){var e=Object(b.a)(["\n  margin-bottom: 5px;\n  &:hover {\n    "," {\n      opacity: 0.3;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n  position: relative;\n"]);return Q=function(){return e},e}function V(){var e=Object(b.a)(["\n  background-image: url(",");\n  height: 180px;\n  background-size: cover;\n  border-radius: 4px;\n  background-position: center center;\n  transition: opacity 0.1s linear;\n"]);return V=function(){return e},e}function A(){var e=Object(b.a)(["\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  opacity: 0;\n  transition: opacity 0.1s linear;\n"]);return A=function(){return e},e}function B(){var e=Object(b.a)(["\n  font-size: 12px;\n"]);return B=function(){return e},e}var D=E.c.div(B()),L=E.c.span(A()),q=E.c.div(V(),(function(e){return e.bgUrl})),J=E.c.div(Q(),q,L),H=E.c.span(N()),G=E.c.span(P()),K=function(e){var t=e.id,r=e.imageUrl,i=e.title,o=e.rating,c=e.year,l=e.isMovie,u=void 0!==l&&l;return a.a.createElement(g.b,{to:u?"/movie/".concat(t):"/show/".concat(t)},a.a.createElement(D,null,a.a.createElement(J,null,a.a.createElement(q,{bgUrl:r?"".concat("https://image.tmdb.org/t/p/w300").concat(r):n(29)}),a.a.createElement(L,null,a.a.createElement("span",{role:"img","aria-label":"rating"},"\u2b50")," ",o,"/10")),a.a.createElement(H,null,i.length>18?"".concat(i.substring(0,18),"..."):i),a.a.createElement(G,null,c)))};function W(){var e=Object(b.a)(["\n  padding: 20px 20px;\n"]);return W=function(){return e},e}var X=E.c.div(W()),Y=function(e){var t=e.nowPlaying,n=e.upcoming,r=e.popular,i=e.error,o=e.loading;return a.a.createElement(a.a.Fragment,null,a.a.createElement(x.a,null,a.a.createElement("title",null,"Movies | QFlix")),o?a.a.createElement(U,null):a.a.createElement(X,null,t&&t.length>0&&a.a.createElement(S,{title:"Now Playing"},t.map((function(e){return a.a.createElement(K,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.title?e.title:e.original_title,rating:e.vote_average,isMovie:!0,year:e.release_date&&e.release_date.substring(0,4)})}))),n&&n.length>0&&a.a.createElement(S,{title:"Upcoming Movies"},n.map((function(e){return a.a.createElement(K,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.title?e.title:e.original_title,rating:e.vote_average,isMovie:!0,year:e.release_date&&e.release_date.substring(0,4)})}))),r&&r.length>0&&a.a.createElement(S,{title:"Popular Movies"},r.map((function(e){return a.a.createElement(K,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.title?e.title:e.original_title,rating:e.vote_average,isMovie:!0,year:e.release_date&&e.release_date.substring(0,4)})}))),i&&a.a.createElement(I,{color:"#e74c3c",text:i})))},Z=n(42),$=n.n(Z).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"3cc9bca758f329777e9b4b3e26409005",language:"en-US"}}),ee=function(){return $.get("movie/now_playing")},te=function(){return $.get("movie/upcoming")},ne=function(){return $.get("movie/popular")},re=function(e){return $.get("movie/".concat(e),{params:{append_to_response:"videos"}})},ae=function(e){return $.get("search/movie",{params:{query:encodeURIComponent(e)}})},ie=function(){return $.get("tv/top_rated")},oe=function(){return $.get("tv/popular")},ce=function(){return $.get("tv/airing_today")},le=function(e){return $.get("tv/".concat(e),{params:{append_to_response:"videos"}})},ue=function(e){return $.get("search/tv",{params:{query:encodeURIComponent(e)}})},se=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=Object(h.a)(v.a.mark((function e(){var t,n,r,a,i,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee();case 3:return t=e.sent,n=t.data.results,e.next=7,te();case 7:return r=e.sent,a=r.data.results,e.next=11,ne();case 11:i=e.sent,o=i.data.results,this.setState({nowPlaying:n,upcoming:a,popular:o}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't get movies information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,r=e.popular,i=e.error,o=e.loading;return a.a.createElement(Y,{nowPlaying:t,upcoming:n,popular:r,error:i,loading:o})}}]),n}(a.a.Component);function pe(){var e=Object(b.a)(["\n  padding: 20px;\n"]);return pe=function(){return e},e}var me=E.c.div(pe()),ge=function(e){var t=e.topRated,n=e.popular,r=e.airingToday,i=e.loading,o=e.error;return a.a.createElement(a.a.Fragment,null,a.a.createElement(x.a,null,a.a.createElement("title",null,"TV Shows | QFlix")),i?a.a.createElement(U,null):a.a.createElement(me,null,t&&t.length>0&&a.a.createElement(S,{title:"Top Rated Shows"},t.map((function(e){return a.a.createElement(K,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.name?e.name:e.original_name,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)})}))),n&&n.length>0&&a.a.createElement(S,{title:"Popular Shows"},n.map((function(e){return a.a.createElement(K,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.name?e.name:e.original_name,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)})}))),r&&r.length>0&&a.a.createElement(S,{title:"Shows Airing Today"},r.map((function(e){return a.a.createElement(K,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.name?e.name:e.original_name,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)})}))),o&&a.a.createElement(I,{color:"#e74c3c",text:o})))},de=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={topRated:null,popular:null,airingToday:null,loading:!0,error:null},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=Object(h.a)(v.a.mark((function e(){var t,n,r,a,i,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ie();case 3:return t=e.sent,n=t.data.results,e.next=7,oe();case 7:return r=e.sent,a=r.data.results,e.next=11,ce();case 11:i=e.sent,o=i.data.results,this.setState({topRated:n,popular:a,airingToday:o}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find TV information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,r=e.airingToday,i=e.loading,o=e.error;return a.a.createElement(ge,{topRated:t,popular:n,airingToday:r,loading:i,error:o})}}]),n}(a.a.Component);function fe(){var e=Object(b.a)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return fe=function(){return e},e}function ve(){var e=Object(b.a)(["\n  width: 80px;\n  height: 50px;\n  text-align: center;\n  border-bottom: 5px solid\n    ",";\n  transition: border-bottom 1s ease-in-out;\n"]);return ve=function(){return e},e}function he(){var e=Object(b.a)(["\n  display: flex;\n"]);return he=function(){return e},e}function be(){var e=Object(b.a)(["\n  color: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  background-color: rgba(20, 20, 20, 0.8);\n  z-index: 10;\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n"]);return be=function(){return e},e}var Ee=E.c.header(be()),xe=E.c.ul(he()),ye=E.c.li(ve(),(function(e){return e.current?"#3498db":"transparent"})),_e=Object(E.c)(g.b)(fe()),je=Object(d.g)((function(e){var t=e.location.pathname;return a.a.createElement(Ee,null,a.a.createElement(xe,null,a.a.createElement(ye,{current:"/"===t},a.a.createElement(_e,{to:"/"},"Movies")),a.a.createElement(ye,{current:"/tv"===t},a.a.createElement(_e,{to:"/tv"},"TV")),a.a.createElement(ye,{current:"/search"===t},a.a.createElement(_e,{to:"/search"},"Search"))))}));function Oe(){var e=Object(b.a)(["\n  all: unset;\n  font-size: 28px;\n  width: 100%;\n"]);return Oe=function(){return e},e}function we(){var e=Object(b.a)(["\n  margin-bottom: 50px;\n  width: 100%;\n"]);return we=function(){return e},e}function ke(){var e=Object(b.a)(["\n  padding: 0px 20px;\n"]);return ke=function(){return e},e}var Se=E.c.div(ke()),Te=E.c.form(we()),Re=E.c.input(Oe()),Ue=function(e){var t=e.movieResults,n=e.tvResults,r=e.loading,i=e.searchTerm,o=e.handleSubmit,c=e.error,l=e.updateTerm;return a.a.createElement(a.a.Fragment,null,a.a.createElement(x.a,null,a.a.createElement("title",null,"Search | QFlix")),a.a.createElement(Se,null,a.a.createElement(Te,{onSubmit:o},a.a.createElement(Re,{placeholder:"Search Movies or TV Shows...",value:i,onChange:l})),r?a.a.createElement(U,null):a.a.createElement(a.a.Fragment,null,t&&t.length>0&&a.a.createElement(S,{title:"Movie Results"},t.map((function(e){return a.a.createElement(K,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.title?e.title:e.original_title,rating:e.vote_average,isMovie:!0,year:e.release_date&&e.release_date.substring(0,4)})}))),n&&n.length>0&&a.a.createElement(S,{title:"TV Show Results"},n.map((function(e){return a.a.createElement(K,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.name?e.name:e.original_name,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)})}))),c&&a.a.createElement(I,{color:"#e74c3c",text:c}),n&&t&&0===n.length&&0===t.length&&a.a.createElement(I,{text:"Nothing found!",color:"#95a5a6"}))))},Me=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={movieResults:null,tvResults:null,searchTerm:"",loading:!1,error:null},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchTerm&&e.searchByTerm()},e.updateTerm=function(t){var n=t.target.value;e.setState({searchTerm:n})},e.searchByTerm=Object(h.a)(v.a.mark((function t(){var n,r,a,i,o;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.searchTerm,e.setState({loading:!0}),t.prev=2,t.next=5,ae(n);case 5:return r=t.sent,a=r.data.results,t.next=9,ue(n);case 9:i=t.sent,o=i.data.results,e.setState({movieResults:a,tvResults:o}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),e.setState({error:"Can't find results."});case 17:return t.prev=17,e.setState({loading:!1}),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[2,14,17,20]])}))),e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,r=e.searchTerm,i=e.loading,o=e.error;return a.a.createElement(Ue,{movieResults:t,tvResults:n,loading:i,error:o,searchTerm:r,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),n}(a.a.Component);function ze(){var e=Object(b.a)(["\n  margin-top: 15px;\n  width: 80%;\n  font-size: 12px;\n  opacity: 0.7;\n  line-height: 2;\n"]);return ze=function(){return e},e}function Ce(){var e=Object(b.a)(["\n  margin: 0px 10px;\n"]);return Ce=function(){return e},e}function Fe(){var e=Object(b.a)(["\n  font-size: 1.5rem;\n  margin-top: 5px;\n  padding-left: 5px;\n"]);return Fe=function(){return e},e}function Ie(){var e=Object(b.a)([""]);return Ie=function(){return e},e}function Pe(){var e=Object(b.a)(["\n  margin: 20px 0px;\n"]);return Pe=function(){return e},e}function Ne(){var e=Object(b.a)(["\n  font-size: 2rem;\n"]);return Ne=function(){return e},e}function Qe(){var e=Object(b.a)(["\n  width: 70%;\n  margin-left: 10px;\n"]);return Qe=function(){return e},e}function Ve(){var e=Object(b.a)(["\n  width: 30%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  border-radius: 3px;\n"]);return Ve=function(){return e},e}function Ae(){var e=Object(b.a)(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  position: relative;\n  z-index: 1;\n"]);return Ae=function(){return e},e}function Be(){var e=Object(b.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(1px);\n  opacity: 0.4;\n  z-index: 0;\n"]);return Be=function(){return e},e}function De(){var e=Object(b.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]);return De=function(){return e},e}var Le=E.c.div(De()),qe=E.c.div(Be(),(function(e){return e.bgImage})),Je=E.c.div(Ae()),He=E.c.div(Ve(),(function(e){return e.bgImage})),Ge=E.c.div(Qe()),Ke=E.c.h3(Ne()),We=E.c.div(Pe()),Xe=E.c.span(Ie()),Ye=E.c.h3(Fe()),Ze=E.c.span(Ce()),$e=E.c.p(ze()),et=function(e){var t=e.result,r=e.loading;e.error;return r?a.a.createElement(a.a.Fragment,null,a.a.createElement(x.a,null,a.a.createElement("title",null,"Loading... | QFlix")),a.a.createElement(U,null)):a.a.createElement(Le,null,a.a.createElement(x.a,null,a.a.createElement("title",null,t.original_title?t.original_title:t.original_name," ","| QFlix")),a.a.createElement(qe,{bgImage:"".concat("https://image.tmdb.org/t/p/original").concat(t.backdrop_path)}),a.a.createElement(Je,null,a.a.createElement(He,{bgImage:t.poster_path?"".concat("https://image.tmdb.org/t/p/original").concat(t.poster_path):n(29)}),a.a.createElement(Ge,null,a.a.createElement(Ke,null,t.original_title?t.original_title:t.original_name),a.a.createElement(Ye,null,"en"===t.original_language?null:t.title),a.a.createElement(Ye,null,"en"===t.original_language?null:t.name),a.a.createElement(We,null,a.a.createElement(Xe,null,t.release_date?t.release_date.substring(0,4):t.first_air_date.substring(0,4)),a.a.createElement(Ze,null,"\u25cf"),a.a.createElement(Xe,null,t.runtime?t.runtime:t.episode_run_time[0]," min"),a.a.createElement(Ze,null,"\u25cf"),a.a.createElement(Xe,null,t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")})))),a.a.createElement($e,null,t.overview&&t.overview))))},tt=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var r;Object(u.a)(this,n),r=t.call(this,e);var a=e.location.pathname;return r.state={result:null,error:null,loading:!0,isMovie:a.includes("/movie/")},r}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=Object(h.a)(v.a.mark((function e(){var t,n,r,a,i,o,c,l;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,r=t.history.push,a=this.state.isMovie,i=parseInt(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",r("/"));case 5:if(o=null,e.prev=6,!a){e.next=14;break}return e.next=10,re(i);case 10:c=e.sent,o=c.data,e.next=18;break;case 14:return e.next=16,le(i);case 16:l=e.sent,o=l.data;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),this.setState({error:"Can't find anything."});case 23:return e.prev=23,this.setState({loading:!1,result:o}),e.finish(23);case 26:case"end":return e.stop()}}),e,this,[[6,20,23,26]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,r=e.loading;return a.a.createElement(et,{result:t,error:n,loading:r})}}]),n}(a.a.Component),nt=function(){return a.a.createElement(g.a,null,a.a.createElement(a.a.Fragment,null,a.a.createElement(je,null),a.a.createElement(d.d,null,a.a.createElement(d.b,{path:"/",exact:!0,component:se}),a.a.createElement(d.b,{path:"/tv",component:de}),a.a.createElement(d.b,{path:"/search",component:Me}),a.a.createElement(d.b,{path:"/movie/:id",component:tt}),a.a.createElement(d.b,{path:"/show/:id",component:tt}),a.a.createElement(d.a,{from:"*",to:"/"}))))},rt=n(43);function at(){var e=Object(b.a)(["\n    ",";\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n        box-sizing:border-box;\n    }\n    body{\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size:12px;\n        background-color:rgba(20, 20, 20, 1);\n        color:white;\n        padding-top:50px;\n    }\n"]);return at=function(){return e},e}var it=Object(E.a)(at(),rt.a),ot=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(nt,null),a.a.createElement(it,null))}}]),n}(r.Component);l.a.config(),o.a.render(a.a.createElement(ot,null),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.4a084556.chunk.js.map