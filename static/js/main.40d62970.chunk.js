(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{180:function(e,t,n){e.exports=n(342)},209:function(e,t,n){},342:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(27),r=n.n(i),l=(n(185),n(155)),c=n(156),s=n(170),u=n(157),d=n(61),f=n(171),h=n(158),p=(n(208),n(209),n(349)),v=n(347),g=n(348),w=function(e){function t(e){var n;Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={test:"hello",playerSource:"a1.mp4"};return n.full=n.full.bind(Object(d.a)(n)),n}return Object(f.a)(t,e),Object(c.a)(t,[{key:"full",value:function(){this.refs.player.toggleFullscreen()}},{key:"componentDidMount",value:function(){this.refs.player.subscribeToStateChange(this.handleStateChange.bind(this))}},{key:"handleStateChange",value:function(e,t){this.setState({player:e}),e.ended!=t.ended&&e.ended&&(console.log("ENDED: "+e.ended),this.playNext())}},{key:"playNext",value:function(){"a1.mp4"==this.state.playerSource?this.setState({playerSource:"a2.mp4"}):this.setState({playerSource:"a1.mp4"}),this.refs.player.load()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(h.Player,{playsInline:!0,autoPlay:!0,ref:"player"},o.a.createElement("source",{src:this.state.playerSource})),o.a.createElement(p.a,{fixed:"bottom",inverted:!0},o.a.createElement(v.a,null,o.a.createElement("a",{class:"item"},o.a.createElement("i",{class:"video play icon"}),"Videos"),o.a.createElement("a",{class:"item"},o.a.createElement("i",{class:"cogs icon"}),"Settings 2"),o.a.createElement(g.a,{onClick:this.full}))))}}]),t}(a.Component),m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(w,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/serveClipViewer",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/serveClipViewer","/service-worker.js");m?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):y(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):y(t,e)})}}()}},[[180,1,2]]]);
//# sourceMappingURL=main.40d62970.chunk.js.map