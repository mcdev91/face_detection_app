(this.webpackJsonpface_detection_app=this.webpackJsonpface_detection_app||[]).push([[0],{29:function(e,t,a){e.exports=a.p+"static/media/LogoPng.4fce0fc3.png"},33:function(e,t,a){e.exports=a(81)},38:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(10),s=a.n(r),l=(a(38),a(30)),c=a(25),o=a(26),m=a(31),u=a(32),p=a(27),h=a.n(p),d=a(11),g=a.n(d),b=(a(76),function(e){var t=e.imageUrl,a=e.box,n=e.showImage;return i.a.createElement("div",{className:"center ma"},i.a.createElement("div",{className:"image-container absolute mt2 white"},!0===n&&i.a.createElement("img",{id:"inputimage",alt:"I'm waiting for Url please Insert it!",src:t,width:"400px",height:"auto"}),!1===n&&i.a.createElement("p",{className:"f3"},"Give it a try!"),a.map((function(e,t){return i.a.createElement("div",{className:"bounding_box",style:{top:e.toprow,right:e.rightcol,bottom:e.bottomrow,left:e.leftcol},key:t})}))))}),w=function(e){var t=e.onRouteChange;return e.isSignedIn?i.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},i.a.createElement("p",{className:"f3 link dim white pa3 pointer",onClick:function(){return t("signout")}},"Sign Out")):i.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},i.a.createElement("p",{className:"f3 link dim white pa3 pointer",onClick:function(){return t("signin")}},"Sign In"),i.a.createElement("p",{className:"f3 link dim white pa3 pointer",onClick:function(){return t("register")}},"Register"))},f=function(e){var t=e.onRouteChange;return i.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},i.a.createElement("main",{className:"pa4 white-80"},i.a.createElement("div",{className:"measure"},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"}),i.a.createElement("legend",{className:"f1 fw6 ph0 mh0 center"},"Sign In"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),i.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),i.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})),i.a.createElement("div",{className:""},i.a.createElement("input",{onClick:function(){return t("home")},className:"white ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),i.a.createElement("div",{className:"lh-copy mt3"},i.a.createElement("p",{onClick:function(){return t("register")},className:"f6 link dim white db pointer"},"Register")))))},E=function(e){var t=e.onRouteChange;return i.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},i.a.createElement("main",{className:"pa4 white-80"},i.a.createElement("div",{className:"measure"},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"}),i.a.createElement("legend",{className:"f1 fw6 ph0 mh0 center"},"Register"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),i.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name"})),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),i.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),i.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})),i.a.createElement("div",{className:""},i.a.createElement("input",{onClick:function(){return t("home")},className:"white ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})))))},v=a(28),N=a.n(v),y=a(29),k=a.n(y),C=(a(77),function(){return i.a.createElement("div",{className:"ma4 mt0"},i.a.createElement(N.a,{className:"Tilt br2 shadow-2",options:{max:50},style:{height:150,width:150}},i.a.createElement("div",{className:"Tilt-inner"},i.a.createElement("img",{src:k.a,alt:"logo"}))))}),x=(a(78),function(e){var t=e.onInputChange,a=e.onButtonSubmit;return i.a.createElement("div",{className:"ma4 mt0"},i.a.createElement("p",{className:"discription-text bold f3 mw6 center white"},"This AI magic will detect faces"),i.a.createElement("p",{className:"discription-text f3 mw5 center white"},"Paste image Url"),i.a.createElement("div",{className:"center"},i.a.createElement("div",{className:"form center pa4 br3 shadow-5"},i.a.createElement("input",{className:"f4 pa2 w-70 center input-container b--white-025",type:"text",onChange:t,placeholder:"Paste image url"}),i.a.createElement("button",{className:"w-30 f4 link ph3 pv2 dib white bg-black b--white-025",onClick:a},"Detect"))))}),I=function(){return i.a.createElement("div",{className:""},i.a.createElement("div",{className:"white f3 "},"User, you rank is..."),i.a.createElement("div",{className:"white f1 "},"#1"))},S=(a(79),new g.a.App({apiKey:"12ad7e15d6e542b889f75d650c185154"})),_={particles:{number:{value:180,density:{enable:!0,value_area:700}}}},R=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).calculateFaceLocation=function(e,t){var a=e.outputs[0].data.regions[t].region_info.bounding_box,n=document.getElementById("inputimage"),i=Number(n.width),r=Number(n.height);return{leftcol:a.left_col*i-10,toprow:a.top_row*r-10,rightcol:i-(a.right_col*i+10),bottomrow:r-(a.bottom_row*r+10)}},e.displayFaceBox=function(t){console.log(t),e.setState({box:[].concat(Object(l.a)(e.state.box),[t])})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({box:[],imageUrl:e.state.input,showImage:!0}),S.models.predict(g.a.FACE_DETECT_MODEL,e.state.input).then((function(t){for(var a=0;a<t.outputs[0].data.regions.length;a++)e.displayFaceBox(e.calculateFaceLocation(t,a))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"signout"===t?e.setState({isSignedIn:!1}):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state={input:"",imageUrl:"",box:[],route:"signin",isSignedIn:!1,showImage:!1},e}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(h.a,{className:"particles",params:_}),i.a.createElement(w,{isSignedIn:this.state.isSignedIn,onRouteChange:this.onRouteChange}),"home"===this.state.route?i.a.createElement("div",null,i.a.createElement(C,null),i.a.createElement(I,null),i.a.createElement(x,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),i.a.createElement(b,{box:this.state.box,imageUrl:this.state.imageUrl,showImage:this.state.showImage})):"signin"===this.state.route?i.a.createElement(f,{onRouteChange:this.onRouteChange}):i.a.createElement(E,{onRouteChange:this.onRouteChange}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(80);s.a.render(i.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.1b469d11.chunk.js.map