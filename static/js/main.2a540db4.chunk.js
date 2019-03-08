(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{186:function(e,n,t){},231:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(16),s=t.n(o),c=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function i(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var l=t(234),u=t(235),h=t(233),m=t(28),p=t.n(m),d=t(38),f=t(21),v=t(22),w=t(26),E=t(24),g=t(23),y=t(27),b=t(25),k=t(85),C=t.n(k),j=t(86),O=t.n(j),x=function(e){function n(e){var t;Object(f.a)(this,n);var a={transpose:(t=Object(w.a)(this,Object(E.a)(n).call(this,e))).props.transpose};return t.md=(new C.a).use(O.a,a),t}return Object(y.a)(n,e),Object(v.a)(n,[{key:"render",value:function(){return this.md.setTranspose(this.props.transpose),r.a.createElement("span",{dangerouslySetInnerHTML:{__html:this.md.render(this.props.source)}})}}]),n}(r.a.Component),S=t(55),I=t.n(S),L="".concat("music-markdown",":repositories");function M(e,n,t){return D.apply(this,arguments)}function D(){return(D=Object(d.a)(p.a.mark(function e(n,t,a){var r,o;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.github.com/repos/".concat(n,"/").concat(t,"/contents/").concat(a),e.next=3,fetch(r);case 3:return o=e.sent,e.abrupt("return",o.json());case 5:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function T(){var e=localStorage.getItem(L);return e?JSON.parse(e):[]}var K=Object(b.a)(),A=function(e){function n(e){var t;return Object(f.a)(this,n),(t=Object(w.a)(this,Object(E.a)(n).call(this,e))).arrowUpKeyCode=38,t.arrowDownKeyCode=40,t.queryParams=I.a.parse(t.props.location.search),t.state={isLoaded:!1,markdown:null,transpose:parseInt(t.queryParams.transpose,10)||0,repos:t.queryParams.repos,path:t.queryParams.path},t.handleKeyUpEvent=t.handleKeyUpEvent.bind(Object(g.a)(t)),t}return Object(y.a)(n,e),Object(v.a)(n,[{key:"componentDidMount",value:function(){var e=Object(d.a)(p.a.mark(function e(){var n,t,a,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props.match.params.owner,t=this.props.match.params.repo,a=this.props.match.params.path,e.next=5,M(n,t,a);case 5:r=e.sent,this.setState({isLoaded:!0,markdown:atob(r.content)});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleKeyUpEvent",value:function(e){e.keyCode===this.arrowUpKeyCode?this.setState({transpose:this.state.transpose+1}):e.keyCode===this.arrowDownKeyCode&&this.setState({transpose:this.state.transpose-1}),this.queryParams.transpose=this.state.transpose+1,K.push("#".concat(this.props.location.pathname,"?").concat(I.a.stringify(this.queryParams)))}},{key:"render",value:function(){var e=this.state,n=e.isLoaded,t=e.markdown,a=e.transpose;return n?r.a.createElement("div",{className:"Markdown",tabIndex:"0",onKeyUp:this.handleKeyUpEvent},r.a.createElement(x,{source:t,transpose:a})):r.a.createElement("div",{className:"Markdown"},"Loading...")}}]),n}(r.a.Component),U=t(87),N=t.n(U),P="app-container";var q=function(e){return r.a.createElement(N.a,{key:P},e.children)},F=t(39),G=t(40),R=function(e){function n(e){var t;Object(f.a)(this,n);return(t=Object(w.a)(this,Object(E.a)(n).call(this,e))).state={value:"```chords\nc1:                    Am     G  F          G      Esus4  E\nv1: All the leaves are brown        and the sky is gray\n\nc1: F               C     E  Am       F        Esus4  E\nv1: I've been for a walk         on a winter's day\n\nc1:                 Am    G  F       G      Esus4  E\nv1: I'd be safe and warm        if I was in L.A.\n\nc1:            Am        G  F     G               Esus4  E\nv1: California dreamin'        on such a winter's day\n```"},t.handleChange=t.handleChange.bind(Object(g.a)(t)),t}return Object(y.a)(n,e),Object(v.a)(n,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){var e={minHeight:"500px",width:"50%",marginRight:"20px",fontFamily:"monospace",whiteSpace:"pre"};return r.a.createElement("div",{style:{display:"flex",width:"100%"}},r.a.createElement("textarea",{value:this.state.value,onChange:this.handleChange,style:e}),r.a.createElement("div",{style:e},r.a.createElement(x,{source:this.state.value})))}}]),n}(r.a.Component),_=function(){return Array.from(G.guitarChordLibrary.keys()).map(function(e,n){return r.a.createElement("div",{key:n,align:"center",style:{display:"inline-block"}},G.guitarChordLibrary.get(e).map(function(e,n){return r.a.createElement("span",{key:n,dangerouslySetInnerHTML:{__html:Object(F.renderChordDiagram)(e)}})}),r.a.createElement("h5",null,e))})},W=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Music Markdown Sandbox"),r.a.createElement("p",null,"This page exercises various subcomponents of music-markdown and markdown-it-music."),r.a.createElement("h2",null,"Markdown Editor"),r.a.createElement(R,null),r.a.createElement("h2",null,"Chord Diagram Renderer"),r.a.createElement("p",null,"This section exercises the Chord Diagram Renderer."),r.a.createElement("h3",null,"Esus4 (200x200)"),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:Object(F.renderChordDiagram)("o2 m1 m2 n3,2 n4,4 b5,6,5",200,200)}}),r.a.createElement("h2",null,"Entire Chord Library"),r.a.createElement(_,null))},B=(t(186),t(187),t(32)),H=t.n(B),J=t(33),Q=t.n(J),$=t(56),z=t.n($),V=function(){var e=[],n=T();return n.length>0&&n.forEach(function(n){var t="".concat(n.owner,"/").concat(n.repo).concat(n.path),a="#/repos/".concat(n.owner,"/").concat(n.repo,"/contents").concat(n.path);e.push(r.a.createElement(Q.a.Item,{href:a,key:"dropdown-item-".concat(t)},t))}),r.a.createElement(Q.a,{title:"Music Repositories"},r.a.createElement(Q.a.Item,null,r.a.createElement("b",null,"Edit Repositories")),r.a.createElement(Q.a.Divider,null),e)},X=function(){return localStorage.getItem(L)||function(e,n,t){var a={owner:e,repo:n,path:t},r=T(),o=r.length>0?r:[];o.push(a),localStorage.setItem(L,JSON.stringify(o))}("music-markdown","almost-in-time","/"),r.a.createElement(H.a,{bg:"dark",expand:"lg",variant:"dark",key:"top-navbar"},r.a.createElement(H.a.Brand,{href:"/"},"Music Markdown"),r.a.createElement(H.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(H.a.Collapse,null,r.a.createElement(z.a,{className:"mr-auto"},r.a.createElement(V,null),r.a.createElement(z.a.Link,{href:"#/sandbox"},"Sandbox (Beta)"))))},Y=function(){return r.a.createElement(l.a,{key:"home-router"},r.a.createElement("div",null,r.a.createElement(u.a,{exact:!0,path:"/",component:Z}),r.a.createElement(u.a,{path:"/sandbox",component:W}),r.a.createElement(u.a,{path:"/repos/:owner/:repo/contents/:path",component:A})))},Z=function(){return r.a.createElement("div",null,r.a.createElement(h.a,{to:"/repos/music-markdown/almost-in-time/contents/California Dreamin' - The Mamas and the Papas.md"},"California Dreamin"))},ee=function(){return r.a.createElement(q,{children:[X(),Y()]})};s.a.render(r.a.createElement(ee,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");c?(function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):i(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):i(e)})}}()},90:function(e,n,t){e.exports=t(231)}},[[90,1,2]]]);
//# sourceMappingURL=main.2a540db4.chunk.js.map