(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,n){e.exports=n(294)},251:function(e,t,n){},294:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(19),c=n.n(o),s=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function i(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var l=n(296),u=n(106),m=n(64),d=n(32),h=n.n(d),p=n(45),v=n(20),f=n(21),b=n(23),E=n(22),w=n(24),y=n(16),g=n(31),k=n(97),j=n.n(k),O=n(98),C=n.n(O),x=n(99),T=n.n(x),I=n(100),S=n(101),M=function(e){var t=e.youTubeId;return r.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},r.a.createElement("iframe",{title:t,className:"embed-responsive-item",src:"https://www.youtube.com/embed/".concat(t),allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))},L=function(e){function t(e){var n;return Object(v.a)(this,t),(n=Object(b.a)(this,Object(E.a)(t).call(this,e))).state={visible:!1},n.handleToggle=n.handleToggle.bind(Object(y.a)(Object(y.a)(n))),n}return Object(w.a)(t,e),Object(f.a)(t,[{key:"handleToggle",value:function(){this.setState(function(e){return{visible:!e.visible}})}},{key:"render",value:function(){if(this.props.youTubeId)return r.a.createElement("div",null,r.a.createElement(I.a,{icon:S.a,size:"2x",onClick:this.handleToggle}),this.state.visible?r.a.createElement(M,{youTubeId:this.props.youTubeId}):"")}}]),t}(r.a.Component),N=function(e){function t(e){var n;return Object(v.a)(this,t),(n=Object(b.a)(this,Object(E.a)(t).call(this,e))).md=(new C.a).use(T.a),n}return Object(w.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){this.md.setTranspose(this.props.transpose),this.md.setMaxWidth(this.props.width);var e=this.md.render(this.props.source);return r.a.createElement("div",null,r.a.createElement(L,{youTubeId:this.md.meta.youTubeId}),r.a.createElement("span",{dangerouslySetInnerHTML:{__html:e}}))}}]),t}(r.a.Component),D=function(e){var t=e.source,n=e.transpose;return r.a.createElement(j.a,null,r.a.createElement(N,{source:t,transpose:n}))},K=n(63),A=n.n(K),U="".concat("music-markdown",":repositories");function F(e,t,n){return P.apply(this,arguments)}function P(){return(P=Object(p.a)(h.a.mark(function e(t,n,a){var r,o;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.github.com/repos/".concat(t,"/").concat(n,"/contents/").concat(a),e.next=3,fetch(r);case 3:return o=e.sent,e.abrupt("return",o.json());case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function q(){var e=localStorage.getItem(U);return e?JSON.parse(e):[]}var G=Object(g.a)(),R=function(e){function t(e){var n;return Object(v.a)(this,t),(n=Object(b.a)(this,Object(E.a)(t).call(this,e))).arrowUpKeyCode=38,n.arrowDownKeyCode=40,n.queryParams=A.a.parse(n.props.location.search),n.state={isLoaded:!1,markdown:null,transpose:parseInt(n.queryParams.transpose,10)||0,repos:n.queryParams.repos,path:n.queryParams.path},n.handleKeyUpEvent=n.handleKeyUpEvent.bind(Object(y.a)(Object(y.a)(n))),n}return Object(w.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(h.a.mark(function e(){var t,n,a,r;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.owner,n=this.props.match.params.repo,a=this.props.match.params.path,e.next=5,F(t,n,a);case 5:r=e.sent,this.setState({isLoaded:!0,markdown:atob(r.content)});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleKeyUpEvent",value:function(e){e.keyCode===this.arrowUpKeyCode?this.setState({transpose:this.state.transpose+1}):e.keyCode===this.arrowDownKeyCode&&this.setState({transpose:this.state.transpose-1}),this.queryParams.transpose=this.state.transpose+1,G.push("#".concat(this.props.location.pathname,"?").concat(A.a.stringify(this.queryParams)))}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,n=e.markdown,a=e.transpose;return t?r.a.createElement("div",{className:"Markdown",tabIndex:"0",onKeyUp:this.handleKeyUpEvent},r.a.createElement(D,{source:n,transpose:a})):r.a.createElement("div",{className:"Markdown"},"Loading...")}}]),t}(r.a.Component),W=n(102),_=n.n(W),H="app-container";var J=function(e){return r.a.createElement(_.a,{key:H},e.children)},B=n(46),z=n(47),Q=function(e){function t(e){var n;Object(v.a)(this,t);return(n=Object(b.a)(this,Object(E.a)(t).call(this,e))).state={value:"```chords\nc1:                    Am     G  F          G      Esus4  E\nv1: All the leaves are brown        and the sky is gray\n\nc1: F               C     E  Am       F        Esus4  E\nv1: I've been for a walk         on a winter's day\n\nc1:                 Am    G  F       G      Esus4  E\nv1: I'd be safe and warm        if I was in L.A.\n\nc1:            Am        G  F     G               Esus4  E\nv1: California dreamin'        on such a winter's day\n```"},n.handleChange=n.handleChange.bind(Object(y.a)(Object(y.a)(n))),n}return Object(w.a)(t,e),Object(f.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){var e={minHeight:"500px",width:"50%",marginRight:"20px",fontFamily:"monospace",whiteSpace:"pre"};return r.a.createElement("div",{style:{display:"flex",width:"100%"}},r.a.createElement("textarea",{value:this.state.value,onChange:this.handleChange,style:e}),r.a.createElement("div",{style:e},r.a.createElement(D,{source:this.state.value})))}}]),t}(r.a.Component),$=function(){return Array.from(z.guitarChordLibrary.keys()).map(function(e,t){return r.a.createElement("div",{key:t,align:"center",style:{display:"inline-block"}},z.guitarChordLibrary.get(e).map(function(e,t){return r.a.createElement("span",{key:t,dangerouslySetInnerHTML:{__html:Object(B.renderChordDiagram)(e)}})}),r.a.createElement("h5",null,e))})},V=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Music Markdown Sandbox"),r.a.createElement("p",null,"This page exercises various subcomponents of music-markdown and markdown-it-music."),r.a.createElement("h2",null,"Markdown Editor"),r.a.createElement(Q,null),r.a.createElement("h2",null,"Chord Diagram Renderer"),r.a.createElement("p",null,"This section exercises the Chord Diagram Renderer."),r.a.createElement("h3",null,"Esus4 (200x200)"),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:Object(B.renderChordDiagram)("o2 m1 m2 n3,2 n4,4 b5,6,5",200,200)}}),r.a.createElement("h2",null,"Entire Chord Library"),r.a.createElement($,null))},X=(n(251),n(252),n(40)),Y=n.n(X),Z=n(48),ee=n.n(Z),te=n(103),ne=n.n(te),ae=n(295),re=function(){var e=[],t=q();return t.length>0&&t.forEach(function(t){var n="".concat(t.owner,"/").concat(t.repo).concat(t.path),a="/repos/".concat(t.owner,"/").concat(t.repo,"/contents").concat(t.path);e.push(r.a.createElement(ae.a,{to:a,key:"dropdown-item-".concat(n),className:"dropdown-item"},n))}),r.a.createElement(ee.a,{title:"Music Repositories"},r.a.createElement(ee.a.Item,null,r.a.createElement("b",null,"Edit Repositories")),r.a.createElement(ee.a.Divider,null),e)},oe=function(){return localStorage.getItem(U)||function(e,t,n){var a={owner:e,repo:t,path:n},r=q(),o=r.length>0?r:[];o.push(a),localStorage.setItem(U,JSON.stringify(o))}("music-markdown","almost-in-time","/"),r.a.createElement(Y.a,{bg:"dark",expand:"lg",variant:"dark",key:"top-navbar"},r.a.createElement(Y.a.Brand,{href:"/"},"Music Markdown"),r.a.createElement(Y.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(Y.a.Collapse,null,r.a.createElement(ne.a,{className:"mr-auto"},r.a.createElement(re,null),r.a.createElement(ae.a,{to:"/sandbox",className:"nav-link",activeClassName:"active"},"Sandbox"))))},ce=function(){return r.a.createElement(l.a,{key:"home-router"},r.a.createElement("div",null,r.a.createElement(u.a,{component:oe}),r.a.createElement(u.a,{exact:!0,path:"/",component:se}),r.a.createElement(u.a,{path:"/sandbox",component:V}),r.a.createElement(u.a,{path:"/repos/:owner/:repo/contents/:path",component:R})))},se=function(){return r.a.createElement("div",null,r.a.createElement(m.a,{to:"/repos/music-markdown/almost-in-time/contents/California Dreamin' - The Mamas and the Papas.md"},"California Dreamin"))},ie=function(){return r.a.createElement(J,{children:[ce()]})};c.a.render(r.a.createElement(ie,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");s?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):i(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):i(e)})}}()}},[[108,1,2]]]);
//# sourceMappingURL=main.0c1421b5.chunk.js.map