(this["webpackJsonpreact-time-until-example"]=this["webpackJsonpreact-time-until-example"]||[]).push([[0],{111:function(e,t,a){e.exports=a(192)},112:function(e,t,a){},192:function(e,t,a){"use strict";a.r(t);a(112);var n=a(0),l=a.n(n),i=a(21),c=a.n(i),r=a(91),s=a(28),o=a(197),u=a(199),d=a(108),m=a(203),b=a(198),v=a(196),E=a(201),g=a(204),f=a(200),h=a(195),O=a(202),j=a(35),w=a.n(j),p=a(90),x=function(e){var t=e.date,a=e.delta,l=e.countdown,i=void 0!==l&&l,c=e.onFinish,r=void 0===c?function(){}:c,s=e.interval,o=void 0===s?50:s,u=Object(n.useState)(Date.now()),d=u[0],m=u[1],b=Object(n.useMemo)((function(){return t?t.getTime():new Date(Date.now()+a).getTime()}),[t,a]),v=Object(n.useMemo)((function(){return i?Math.max(0,b-d):b-d}),[b,d,i]),E=Object(n.useMemo)((function(){var e=v>0?Math.ceil:Math.floor;return new Date(1e3*e(Math.abs(v)/1e3))}),[v]),g=Object(n.useMemo)((function(){return v<=0}),[v]),f=Object(n.useMemo)((function(){return{delta:v,seconds:E.getUTCSeconds(),minutes:E.getUTCMinutes(),hours:E.getUTCHours(),finished:g}}),[E,v,g]);return Object(n.useEffect)((function(){var e=null!==o?window.setInterval((function(){m(Date.now())}),o):void 0;return function(){window.clearInterval(e)}}),[o]),Object(n.useEffect)((function(){i&&g&&r()}),[i,g]),f};var C=["format","ago","inText","agoText","finishText","value"],S=function(e){var t=e.format,a=void 0===t?"text":t,i=e.ago,c=void 0!==i&&i,r=e.inText,s=void 0===r?"in ":r,o=e.agoText,u=void 0===o?" ago":o,d=e.finishText,m=void 0===d?void 0:d,b=e.value,v=void 0===b?void 0:b,E=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,C),g=x(v?{delta:0,interval:null}:E),f=g.delta,h=g.seconds,O=g.minutes,j=g.hours,w=g.finished;v&&(f=v.delta,h=v.seconds,O=v.minutes,j=v.hours,w=v.finished);var p=1!==j?j+" hours":"1 hour",S=1!==O?O+" minutes":"1 minute",T=1!==h?h+" seconds":"1 second",y=1===j?j:j.toString().padStart(2,"0"),z=0===j&&1===O?O:O.toString().padStart(2,"0"),N=h.toString().padStart(2,"0");return E.countdown&&m&&w?l.a.createElement(n.Fragment,null,m):"text"===a?l.a.createElement(n.Fragment,null,c&&f>=0&&s,j>0?p+" and "+S:O>0?S+" and "+T:""+T,c&&f<0&&u):"time"===a?l.a.createElement(n.Fragment,null,j>0?y+":":"",z,":",N):null},T=(a(119),o.a.Title),y=o.a.Text,z=u.a.Content,N=u.a.Sider,M=function(){var e=Object(n.useState)(6e4),t=Object(s.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(w()()),o=Object(s.a)(c,2),j=o[0],C=o[1],M=Object(n.useState)("delta"),D=Object(s.a)(M,2),F=D[0],I=D[1],k=Object(n.useState)(50),U=Object(s.a)(k,2),G=U[0],J=U[1],H=Object(n.useState)("text"),A=Object(s.a)(H,2),B=A[0],R=A[1],q=Object(n.useState)(!0),K=Object(s.a)(q,2),L=K[0],P=K[1],Q=Object(n.useState)("in "),V=Object(s.a)(Q,2),W=V[0],X=V[1],Y=Object(n.useState)(" ago"),Z=Object(s.a)(Y,2),$=Z[0],_=Z[1],ee=Object(n.useState)(!1),te=Object(s.a)(ee,2),ae=te[0],ne=te[1],le=Object(n.useState)("Countdown complete"),ie=Object(s.a)(le,2),ce=ie[0],re=ie[1],se=Object(n.useMemo)((function(){return j?j.toDate():new Date}),[j]),oe=Object(p.a)(a,500),ue=Object(s.a)(oe,1)[0],de=Object(p.a)(G,500),me=Object(s.a)(de,1)[0],be={format:B,ago:L,inText:W,agoText:$,finishText:ce,countdown:ae,onFinish:function(){return d.a.info({message:"Countdown complete"})}},ve=Object(n.useMemo)((function(){return Object(r.a)(Object(r.a)({},"delta"===F?{delta:ue}:{date:se}),{},{countdown:ae,interval:me})}),[F,ue,se,ae,me]),Ee=x(ve),ge=Ee.delta,fe=Ee.hours,he=Ee.minutes,Oe=Ee.seconds,je=Ee.finished;return l.a.createElement(u.a,null,l.a.createElement(N,{width:300,style:{background:"#fff",padding:32,borderRight:"1px solid #ccc"}},l.a.createElement(m.b,{size:"large",direction:"vertical",style:{width:"100%"}},l.a.createElement(m.b,{size:"large",direction:"vertical",style:{width:"100%"}},l.a.createElement(T,{level:5},"General settings"),l.a.createElement(m.b,{size:"middle",direction:"vertical"},l.a.createElement(m.b,{size:"small",direction:"vertical"},"delta"===F?l.a.createElement(n.Fragment,null,"Delta:",l.a.createElement(b.a,{value:a,onChange:i,style:{width:"100%"}})):l.a.createElement(n.Fragment,null,"Date:",l.a.createElement(v.a,{value:j,onChange:C,showTime:!0}))),l.a.createElement(E.a.Group,{size:"small",options:[{label:"Delta",value:"delta"},{label:"Date",value:"date"}],value:F,onChange:function(e){var t=e.target.value;return I(t)},optionType:"button",style:{width:"100%",display:"flex"}})),l.a.createElement(m.b,{size:"small",direction:"vertical"},"Update interval:",l.a.createElement(b.a,{value:G,onChange:J,style:{width:"100%"}})),l.a.createElement(m.b,{size:"middle",direction:"vertical"},l.a.createElement(m.b,{size:"middle"},"In/ago:",l.a.createElement(g.a,{checked:L,onChange:P})),l.a.createElement(m.b,null,l.a.createElement(m.b,{size:"small",direction:"vertical"},l.a.createElement(y,{disabled:!L},'"In" text:'),l.a.createElement(f.a,{value:W,onChange:function(e){var t=e.target.value;return X(t)},disabled:!L})),l.a.createElement(m.b,{size:"small",direction:"vertical"},l.a.createElement(y,{disabled:!L},'"Ago" text:'),l.a.createElement(f.a,{value:$,onChange:function(e){var t=e.target.value;return _(t)},disabled:!L})))),l.a.createElement(m.b,{size:"small",direction:"vertical"},"Format:",l.a.createElement(E.a.Group,{options:[{label:"Text",value:"text"},{label:"Time string",value:"time"}],value:B,onChange:function(e){var t=e.target.value;return R(t)},optionType:"button",style:{width:"100%"}})),l.a.createElement(h.a,{style:{margin:4}}),l.a.createElement(T,{level:5},"Countdown settings"),l.a.createElement(m.b,{size:"middle"},"Countdown:",l.a.createElement(g.a,{checked:ae,onChange:ne})),l.a.createElement(m.b,{size:"small",direction:"vertical"},l.a.createElement(y,{disabled:!ae},"Finish text:"),l.a.createElement(f.a,{value:ce,onChange:function(e){var t=e.target.value;return re(t)},disabled:!ae}))))),l.a.createElement(z,{style:{padding:32}},l.a.createElement(m.b,{size:"large",direction:"vertical",style:{width:"100%"}},l.a.createElement(m.b,{size:"middle",direction:"vertical"},l.a.createElement("div",{className:"ant-statistic"},l.a.createElement("div",{className:"ant-statistic-title"},"Countdown (uncontrolled)"),l.a.createElement("div",{className:"ant-statistic-content"},l.a.createElement("span",{className:"ant-statistic-content-value"},l.a.createElement(S,Object.assign({},be,ve))))),l.a.createElement("div",{className:"ant-statistic"},l.a.createElement("div",{className:"ant-statistic-title"},"Countdown (controlled using hook)"),l.a.createElement("div",{className:"ant-statistic-content"},l.a.createElement("span",{className:"ant-statistic-content-value"},l.a.createElement(S,Object.assign({},be,ve,{value:Ee,onFinish:void 0}))))),l.a.createElement("div",{className:"ant-statistic"},l.a.createElement("div",{className:"ant-statistic-title"},"Current delta"),l.a.createElement("div",{className:"ant-statistic-content"},l.a.createElement("span",{className:"ant-statistic-content-value"},ge),l.a.createElement("span",{className:"ant-statistic-content-suffix"},"ms")))),l.a.createElement(O.b,{bordered:!0,style:{background:"#fff",width:"100%"}},l.a.createElement(O.b.Item,{label:"Hours"},fe),l.a.createElement(O.b.Item,{label:"Minutes"},he),l.a.createElement(O.b.Item,{label:"Seconds"},Oe),l.a.createElement(O.b.Item,{label:"Finished"},JSON.stringify(je))))))};c.a.render(l.a.createElement(M,null),document.getElementById("root"))}},[[111,1,2]]]);
//# sourceMappingURL=main.e1fd0af4.chunk.js.map