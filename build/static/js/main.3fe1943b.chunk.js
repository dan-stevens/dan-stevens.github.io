(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(8),i=n.n(c),r=(n(16),n(1)),l=n(2),s=n(4),u=n(3),m=n(5),h=n(9),d=n(6),p=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(d.a)(n)),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(){console.log("handleClick Called");this.props.onClick("Daniel")}},{key:"render",value:function(){return o.a.createElement("button",{onClick:this.handleClick},"Click Me")}}]),t}(o.a.Component),b={transition:"all 1s ease-out"},f=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={opacity:0,scale:1,name:"dan"},n.changeName=n.changeName.bind(Object(d.a)(n)),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"onHide",value:function(){this.setState({opacity:1})}},{key:"onScale",value:function(){this.setState({scale:this.state.scale>1?1:1.5})}},{key:"changeName",value:function(e){this.setState({name:e})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{name:this.state.name,style:Object(h.a)({},b,{opacity:this.state.opacity,transform:"scale("+this.state.scale+")"}),onClick:this.onScale.bind(this)}),o.a.createElement(p,{onClick:this.changeName}))}}]),t}(o.a.Component),g=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("button",{onClick:this.props.onClick},"Click Me Damnit")}}]),t}(o.a.Component),v=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={clicks:0},n.updateBoxTwo=n.updateBoxTwo.bind(Object(d.a)(n)),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){}},{key:"updateBoxTwo",value:function(){var e=this.state.clicks;this.setState({clicks:e+1})}},{key:"render",value:function(){return o.a.createElement(g,{onClick:this.updateBoxTwo})}}]),t}(o.a.Component),j=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"header"},o.a.createElement(f,null)),o.a.createElement("div",{className:"better--header"},o.a.createElement(v,null)))}}]),t}(o.a.Component),k=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"gizmo-controls"},o.a.createElement("input",{type:"range",min:"100",max:"100000",val:"1000",step:"1000"}),o.a.createElement("button",{onClick:this.props.onChangeWidth},"Toggle width"),o.a.createElement("button",{onClick:this.props.onChangeCorners},"Toggle Corners"),o.a.createElement("button",{onClick:this.props.onBuildMonster},"Convert me!"))}}]),t}(o.a.Component),O=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).myRef=o.a.createRef(),n.state={backgroundColor:n.blockPaint(),width:"200px",height:"100px",borderRadius:"0px",preMountEvents:""},n.toggleWidth=n.toggleWidth.bind(Object(d.a)(n)),n.toggleCorners=n.toggleCorners.bind(Object(d.a)(n)),n.componentLifeCycleEvent=n.componentLifeCycleEvent.bind(Object(d.a)(n)),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"blockPaint",value:function(){var e=["red","orange","yellow","green","blue","indigo","violet"];return e[Math.floor(Math.random()*e.length)]}},{key:"blockHeight",value:function(){this.setState({height:"100px"===this.state.height?"200px":"100px"})}},{key:"toggleWidth",value:function(){this.setState({width:"200px"===this.state.width?"300px":"200px"})}},{key:"toggleCorners",value:function(){this.setState({borderRadius:"0px"===this.state.borderRadius?"50px":"0px"})}},{key:"buildMonster",value:function(){}},{key:"componentLifeCycleEvent",value:function(e,t,n){var a=document.createElement("li"),o=document.createTextNode(e);t&&console.log("prevProps: "+t),n&&console.log("prevState: "+n.backgroundColor),a.appendChild(o),this.myRef.current.innerHTML+=a.outerHTML}},{key:"componentWillMount",value:function(){this.setState({preMountEvents:"componentWillMount called"})}},{key:"componentDidMount",value:function(){this.componentLifeCycleEvent("componentDidMount called")}},{key:"componentDidUpdate",value:function(e,t){console.log("the Gizmo component did update"),t!==this.state&&this.componentLifeCycleEvent("componentDidUpdate called",e.number,t),e.number!==this.props.number&&(console.log("theres a difference here"),console.log("prevProps:"),console.log(e),console.log("this.props"),console.log(this.props))}},{key:"componentWillUnmount",value:function(){alert("siyanara sucker")}},{key:"render",value:function(){return o.a.createElement("div",{className:"gizmo",id:this.props.number,ref:this.props.number},o.a.createElement("div",{style:{backgroundColor:this.state.backgroundColor,width:this.state.width,borderRadius:this.state.borderRadius}},o.a.createElement("span",null,"My ref prop: ",this.props.number)),o.a.createElement("ul",{ref:this.myRef,className:"gizmo-details"},o.a.createElement("li",null,this.state.preMountEvents)),o.a.createElement(k,{onChangeColor:this.toggleColor,onChangeHeight:this.toggleHeight,onChangeWidth:this.toggleWidth,onChangeCorners:this.toggleCorners,onBuildMonster:this.buildMonster}))}}]),t}(o.a.Component),C=(n(17),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={gizmoCount:0,gizmoButtonFunction:""},n.createGizmo=function(){n.setState({gizmoCount:n.state.gizmoCount+1,gizmoButtonFunction:"createGizmo"}),console.log(n.gizmoRef.current)},n.gizmoRef=o.a.createRef(),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"convertGizmo",value:function(){this.setState({gizmoButtonFunction:"convertGizmo"})}},{key:"render",value:function(){for(var e=[],t=0;t<this.state.gizmoCount;t++)e.push(o.a.createElement(O,{key:t,number:t,ref:this.gizmoRef}));return o.a.createElement("div",{className:"gizmos-container"},o.a.createElement("section",{className:"gizmo-button-container"},o.a.createElement(y,{onClick:this.createGizmo})),o.a.createElement(E,null,e),o.a.createElement("section",{className:"gizmo-converter"},o.a.createElement("p",null,"need to design a converter")),o.a.createElement("section",{className:"gizmo-result"},o.a.createElement("p",null,"need to design a gizmo result")))}}]),t}(o.a.Component)),E=function(e){return o.a.createElement("div",{className:"gizmo-creater"},o.a.createElement("div",{className:"GizmosGoHere"},e.children))},y=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("button",{onClick:this.props.onClick},"Make a Gizmo")}}]),t}(o.a.Component),z=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,"External API")}}]),t}(o.a.Component),N=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,"Basement Builder")}}]),t}(o.a.Component),w=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,"Footer")}}]),t}(o.a.Component);n(18);var x=function(){return o.a.createElement("div",{className:"app"},o.a.createElement("div",{className:"header-container"},o.a.createElement(j,{className:"header"})),o.a.createElement("div",{className:"gizmos-background"},o.a.createElement(C,null)),o.a.createElement("div",{className:"external-api-container"},o.a.createElement(z,null)),o.a.createElement("div",{className:"basement-builder-container"},o.a.createElement(N,null)),o.a.createElement("div",{className:"footer-container"},o.a.createElement(w,{className:"footer"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.3fe1943b.chunk.js.map