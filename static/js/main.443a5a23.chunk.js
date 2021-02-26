(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{20:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){e.exports=a(34)},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(2),o=a(4),c=a(3),l=a(0),s=a.n(l),i=a(12),m=a.n(i),u=(a(28),a(6)),h=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"game"},s.a.createElement("div",{className:"top-nav-right"},s.a.createElement(u.b,{to:"/instructions"},s.a.createElement("div",{className:"right"}))),s.a.createElement("p",{id:"welcome"},"welcome to"),s.a.createElement("div",{class:"break"}),s.a.createElement("h1",{id:"intentional-inclusion"},s.a.createElement("b",{className:"red"},"Intentional")," ",s.a.createElement("b",{className:"green"},"Inclusion")),s.a.createElement("div",{class:"break"}),s.a.createElement("div",null,s.a.createElement("p",{id:"explore",style:{textAlign:"center"}},"Explore the experiences of people living with colorblindness in this interactive, color-matching puzzle game."),s.a.createElement("div",{class:"break"}),s.a.createElement("p",{className:"p-center"},"(but be wary, we have some challenges coming your way)")),s.a.createElement("div",{class:"break"}),s.a.createElement(u.b,{to:"/instructions"},s.a.createElement("button",{type:"button",className:"buttonn"},"Get Started")))}}]),a}(s.a.Component),p=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"game"},s.a.createElement("div",{className:"top-nav-left"},s.a.createElement(u.b,{to:"/scores"},s.a.createElement("div",{className:"left"}))),s.a.createElement("h1",null,"Thank You for Playing!"),s.a.createElement("p",{style:{margin:"10px 20%"}}," As you realized while playing this game, the second round was probably more difficult than the first. That's because it simulated what someone with deuteranopia, the most common type of color blindness, might see when they play this game. In the third round, you saw how accessibility features can be implemented to make it easier for those with color-blindness to play. This was only one of several ways accessibility can be implemented in web content and there is much more work to be done."),s.a.createElement("p",{style:{margin:"10px 20%"}},"Accessibility is how well an environment can be used by as many people as possible. Imagine only being able to visit a limited amount of sites because few people consider your needs when designing the page. And it wouldn't be just you; approximately 300 million people in the world live with some form of colorblindness. On top of that, color-blindness is only one of many factors that can hinder someone's ability to access web content."),s.a.createElement("p",{style:{margin:"10px 20%"}},"Accessibility needs to be at the forefront of the minds of designers because the digital world should be available for all to use. Maybe one day you can help advance this effort to bring the web to everyone. Below are some helpful links to learn more about accessibility:"),s.a.createElement("div",{className:"break"}),s.a.createElement("div",{id:"cta-links"},s.a.createElement("a",{href:"https://www.youtube.com/watch?v=hufMi9LZX2I",target:"blank"},s.a.createElement("button",{className:"buttonn"},"What is Accessibility?")),s.a.createElement("a",{href:"https://www.youtube.com/watch?v=3f31oufqFSM",target:"blank"},s.a.createElement("button",{className:"buttonn"},"Types of Accessibility")),s.a.createElement(u.b,{to:"/"},s.a.createElement("button",{type:"button",className:"buttonn"},"Play Again"))))}}]),a}(s.a.Component),d=[],b=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return d.splice(0,d.length),s.a.createElement("div",{className:"game"},s.a.createElement("div",{className:"top-nav-left"},s.a.createElement(u.b,{to:"/"},s.a.createElement("div",{className:"left"}))),s.a.createElement("h1",null,"Instructions"),s.a.createElement("div",{className:"break"}),s.a.createElement("p",{style:{margin:"10px 20% 18px"}},"There will be three rounds. Your objective for each round is to select the square that matches the color specified in the top left corner. You have unlimited attempts. Good luck!"),s.a.createElement(u.b,{to:"/round1"},s.a.createElement("button",{type:"button",className:"buttonn"},"Start")))}}]),a}(s.a.Component);function E(e){return s.a.createElement("tr",{className:"board-row"},s.a.createElement("td",null,e.round),s.a.createElement("td",null,e.attempts))}var f=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){return Object(n.a)(this,a),t.call(this,e)}return Object(r.a)(a,[{key:"render",value:function(){var e=d.map((function(e){return s.a.createElement(E,{round:e.round,attempts:e.attempts})}));return s.a.createElement("div",{className:"game"},s.a.createElement("div",{className:"top-nav-right"},s.a.createElement(u.b,{to:"/cta"},s.a.createElement("div",{className:"right"}))),s.a.createElement("h1",null,"Scores"),s.a.createElement("div",{className:"break"}),s.a.createElement("table",{className:"scoreboard"},s.a.createElement("tr",null,s.a.createElement("th",null,"Round"),s.a.createElement("th",null,"Attempts")),e),s.a.createElement("div",{className:"break"}),s.a.createElement(u.b,{to:"/cta"},s.a.createElement("button",{type:"button",className:"buttonn"},"Next")))}}]),a}(s.a.Component),v=a(13),y=a(5),C=(a(20),function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.props.colorValue;this.props.round;switch(t){case"NCB_red":case"CB_red":"Red";break;case"NCB_orange":case"CB_orange":"Orange";break;case"NCB_yellow":case"CB_yellow":"Yellow";break;case"NCB_green":case"CB_green":"Green";break;default:""}return s.a.createElement("div",{className:"color-square"},s.a.createElement("div",{className:t,onClick:function(){return e.props.colorMatch(t,e.props.refColor)}}))}}]),a}(s.a.Component)),N=(a(21),function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).shuffle=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*t),n=e[t];e[t]=e[a],e[a]=n}},r.checkColorMatch=function(e,t){"NCB_red"===e&&"Red"===t||"NCB_orange"===e&&"Orange"===t||"NCB_yellow"===e&&"Yellow"===t||"NCB_green"===e&&"Green"===t?(r.setState({status:"YAY"}),r.moveOn()):r.setState({status:"",attempts:r.state.attempts+1})},r.state={status:"",attempts:1},r.moveOn=r.moveOn.bind(Object(v.a)(r)),r}return Object(r.a)(a,[{key:"moveOn",value:function(){d.push({round:this.props.round,attempts:this.state.attempts}),this.props.history.push("/transition1")}},{key:"render",value:function(){var e=["Red","Orange","Green","Yellow"],t=["NCB_red","NCB_orange","NCB_yellow","NCB_green"],a=Math.floor(4*Math.random());return this.shuffle(t),s.a.createElement("div",{className:"activity"},s.a.createElement("div",{className:"stat"},s.a.createElement("div",null,s.a.createElement("p",{className:"color-p"},e[a])),s.a.createElement("div",{className:"round-attempts"},s.a.createElement("p",null,"Round ",this.props.round),s.a.createElement("div",{className:"break"}),s.a.createElement("p",null,"Attempts: ",this.state.attempts-1))),s.a.createElement("div",{className:"color-grid"},s.a.createElement("div",{className:"row"},s.a.createElement(C,{colorValue:t[0],refColor:e[a],colorMatch:this.checkColorMatch}),s.a.createElement(C,{colorValue:t[1],refColor:e[a],colorMatch:this.checkColorMatch}),s.a.createElement(C,{colorValue:t[2],refColor:e[a],colorMatch:this.checkColorMatch}),s.a.createElement(C,{colorValue:t[3],refColor:e[a],colorMatch:this.checkColorMatch}))))}}]),a}(s.a.Component)),g=Object(y.f)(N),O=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e,t=this,a=this.props.colorValue;this.props.round;switch(a){case"NCB_red":case"CB_red":e="Red";break;case"NCB_orange":case"CB_orange":e="Orange";break;case"NCB_yellow":case"CB_yellow":e="Yellow";break;case"NCB_green":case"CB_green":e="Green";break;default:e=""}return s.a.createElement("div",{className:"color-square",id:"hover-square"},s.a.createElement("div",{className:a,onClick:function(){return t.props.colorMatch(a,t.props.refColor)}}),s.a.createElement("div",{className:"colorText"},e))}}]),a}(s.a.Component),w=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).shuffle=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*t),n=e[t];e[t]=e[a],e[a]=n}},r.checkColorMatch=function(e,t){console.log(e),console.log(t),"CB_red"===e&&"Red"===t||"CB_orange"===e&&"Orange"===t||"CB_yellow"===e&&"Yellow"===t||"CB_green"===e&&"Green"===t?(r.setState({status:"YAY"}),r.moveOn()):r.setState({status:"",attempts:r.state.attempts+1})},r.state={status:"",attempts:1},r.moveOn=r.moveOn.bind(Object(v.a)(r)),r}return Object(r.a)(a,[{key:"moveOn",value:function(){d.push({round:this.props.round,attempts:this.state.attempts}),2==this.props.round?this.props.history.push("/transition2"):this.props.history.push("/scores")}},{key:"render",value:function(){var e=["Red","Orange","Green"],t=["CB_red","CB_orange","CB_yellow","CB_green"],a=Math.floor(3*Math.random());return this.shuffle(t),s.a.createElement("div",{className:"activity"},s.a.createElement("div",{className:"stat"},s.a.createElement("div",null,s.a.createElement("p",{className:"color-p"},e[a])),s.a.createElement("div",{className:"round-attempts"},s.a.createElement("p",null,"Round ",this.props.round),s.a.createElement("div",{className:"break"}),s.a.createElement("p",null,"Attempts: ",this.state.attempts-1))),s.a.createElement("div",{className:"color-grid"},2==this.props.round&&s.a.createElement("div",{className:"row"},s.a.createElement(C,{colorValue:t[0],refColor:e[a],colorMatch:this.checkColorMatch}),s.a.createElement(C,{colorValue:t[1],refColor:e[a],colorMatch:this.checkColorMatch}),s.a.createElement(C,{colorValue:t[2],refColor:e[a],colorMatch:this.checkColorMatch}),s.a.createElement(C,{colorValue:t[3],refColor:e[a],colorMatch:this.checkColorMatch})),3==this.props.round&&s.a.createElement("div",{className:"row"},s.a.createElement(O,{colorValue:t[0],refColor:e[a],colorMatch:this.checkColorMatch}),s.a.createElement(O,{colorValue:t[1],refColor:e[a],colorMatch:this.checkColorMatch}),s.a.createElement(O,{colorValue:t[2],refColor:e[a],colorMatch:this.checkColorMatch}),s.a.createElement(O,{colorValue:t[3],refColor:e[a],colorMatch:this.checkColorMatch}))))}}]),a}(s.a.Component),k=Object(y.f)(w),j=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"game transition"},s.a.createElement("p",null,"Nice job! Now let's do that again, but with a little bit of a challenge. How will you do this time around?"),s.a.createElement("div",{className:"break"}),s.a.createElement(u.b,{to:"/round2"},s.a.createElement("button",{className:"buttonn",type:"button"},"Let's Go!")))}}]),a}(s.a.Component),M=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"game transition"},s.a.createElement("p",null,"How did you do? Let's move onto the last round."),s.a.createElement("div",{className:"break"}),s.a.createElement(u.b,{to:"/round3"},s.a.createElement("button",{className:"buttonn",type:"button"},"Let's Go!")))}}]),a}(s.a.Component),B=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={my_state:1},r}return Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement(u.a,null,s.a.createElement("div",{className:"center-box"},s.a.createElement(y.c,null,s.a.createElement(y.a,{exact:!0,path:"/scores",component:f}),s.a.createElement(y.a,{exact:!0,path:"/transition1",component:j}),s.a.createElement(y.a,{exact:!0,path:"/transition2",component:M}),s.a.createElement(y.a,{exact:!0,path:"/cta",component:p}),s.a.createElement(y.a,{exact:!0,path:"/round3",render:function(e){return s.a.createElement(k,Object.assign({},e,{round:3}))}}),s.a.createElement(y.a,{exact:!0,path:"/round2",render:function(e){return s.a.createElement(k,Object.assign({},e,{round:2}))}}),s.a.createElement(y.a,{exact:!0,path:"/round1",render:function(e){return s.a.createElement(g,Object.assign({},e,{round:1}))}}),s.a.createElement(y.a,{exact:!0,path:"/instructions",component:b}),s.a.createElement(y.a,{exact:!0,path:"/",component:h}))))}}]),a}(s.a.Component);m.a.render(s.a.createElement(B,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.443a5a23.chunk.js.map