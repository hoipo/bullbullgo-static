(function(e){function t(t){for(var r,u,i=t[0],s=t[1],d=t[2],o=0,b=[];o<i.length;o++)u=i[o],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&b.push(a[u][0]),a[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(b.length)b.shift()();return c.push.apply(c,d||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==a[s]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"358b5dd2"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var d=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(o);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,n[1](d)}a[e]=void 0}};var o=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var o=0;o<s.length;o++)t(s[o]);var l=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,c,u){var i=Object(r["x"])("Nav"),s=Object(r["x"])("router-view");return Object(r["r"])(),Object(r["e"])(r["a"],null,[Object(r["h"])(i),Object(r["h"])(s)],64)}var c={class:"navbar navbar-expand-lg navbar-dark bg-dark"},u=Object(r["h"])("div",{class:"container"},[Object(r["h"])("div",{class:"navbar-brand mb-0 h1"},"Bullbullgo ｜ 为套利而生")],-1);function i(e,t,n,a,i,s){return Object(r["r"])(),Object(r["e"])("nav",c,[u])}var s={name:"Nav"};s.render=i;var d=s,o={name:"App",components:{Nav:d}};o.render=a;var l=o,b=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),j={class:"container p-3"},f={class:"row row-cols-auto g-3 justify-content-around"};function O(e,t,n,a,c,u){var i=Object(r["x"])("AgCard"),s=Object(r["x"])("ZmCard"),d=Object(r["x"])("GrayscaleCard"),o=Object(r["x"])("BinancePremiumCard");return Object(r["r"])(),Object(r["e"])("section",null,[Object(r["h"])("div",j,[Object(r["h"])("div",f,["{}"!==JSON.stringify(a.agFund)?(Object(r["r"])(),Object(r["e"])(i,{key:0,data:a.agFund},null,8,["data"])):Object(r["f"])("",!0),"{}"!==JSON.stringify(a.zmFund)?(Object(r["r"])(),Object(r["e"])(s,{key:1,data:a.zmFund},null,8,["data"])):Object(r["f"])("",!0),(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(a.grayscaleFunds,(function(e){return Object(r["r"])(),Object(r["e"])(d,{data:e,key:e.symbol},null,8,["data"])})),128)),a.binancePremium.length>0?(Object(r["r"])(),Object(r["e"])(o,{key:2,data:a.binancePremium},null,8,["data"])):Object(r["f"])("",!0)])])])}n("b680");var m={class:"card p-0",style:{width:"18rem"}},p={class:"card-header d-flex justify-content-between"},h=Object(r["h"])("i",{class:"bi bi-alarm"},null,-1),v={class:"card-body"},x={class:"card-subtitle d-flex justify-content-between"},g={class:"card-text mb-1"},y={class:"card-text mb-1"},w={class:"card-text mb-1"},P={class:"card-text mb-1"},z={class:"card-footer text-muted text-end"};function F(e,t,n,a,c,u){var i=Object(r["x"])("router-link");return Object(r["r"])(),Object(r["e"])("div",m,[Object(r["h"])("div",p,[Object(r["h"])("span",null,Object(r["z"])(n.data.symbol)+"溢价",1),Object(r["h"])(i,{to:{path:"/grayscale-reminder",query:{symbol:n.data.symbol}}},{default:Object(r["F"])((function(){return[h]})),_:1},8,["to"])]),Object(r["h"])("div",v,[Object(r["h"])("h3",{class:["card-title",n.data.premium<0?"text-danger":"text-success"]},Object(r["z"])((100*n.data.premium).toFixed(2))+"%",3),Object(r["h"])("h6",x,[Object(r["h"])("div",null,"买："+Object(r["z"])(n.data.bidPrice),1),Object(r["h"])("div",null,"卖："+Object(r["z"])(n.data.askPrice),1)]),Object(r["h"])("p",g,"基金价格："+Object(r["z"])(n.data.lastPrice),1),Object(r["h"])("p",y,"基金净值："+Object(r["z"])(n.data.fundNetValue.toFixed(2)),1),Object(r["h"])("p",w,"基金含币量："+Object(r["z"])(n.data.perShareValue),1),Object(r["h"])("p",P,"合约价格："+Object(r["z"])(n.data.futurePrice),1)]),Object(r["h"])("div",z,Object(r["z"])(u.dayjs(n.data.tradeTimeInLong).format("DD/MM/YYYY H:mm:ss")),1)])}var k=n("5a0c"),M=n.n(k),V={name:"GrayscaleCard",props:{data:Object},methods:{dayjs:M.a}};V.render=F;var Y=V,C=n("1da1"),A=(n("96cf"),function(){return new Promise((function(e,t){fetch("https://9vwn51xvwi.execute-api.ap-southeast-1.amazonaws.com/production/premium?symbol=GBTC,ETHE").then((function(e){return e.json()})).then((function(t){e(t)})).catch((function(e){console.error(e),t(e)}))}))});function R(){var e,t=Object(r["u"])([]),n=function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:t.value=e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r["p"])((function(){n(),e=setInterval(n,5e3)})),Object(r["q"])((function(){clearInterval(e)})),{grayscaleFunds:t}}var N={class:"card p-0",style:{width:"18rem"}},S=Object(r["h"])("div",{class:"card-header"}," 白银基金溢价 ",-1),D={class:"card-body"},I={class:["card-title","d-flex","justify-content-between"]},E=Object(r["h"])("div",{class:"text-muted fs-6"},"价格/估值",-1),B=Object(r["h"])("div",{class:"text-muted fs-6"},"映射价/价格",-1),H={class:"card-subtitle d-flex justify-content-between mb-1"},T={class:"card-subtitle d-flex justify-content-between mb-1"},_={class:"card-text mb-1"},q={class:"card-text mb-1"},G={class:"card-text mb-1"},J={class:"card-text mb-1"},L={class:"card-text mb-1"},Z={class:"card-text mb-1"},U={class:"card-footer text-muted text-end"};function X(e,t,n,a,c,u){return Object(r["r"])(),Object(r["e"])("div",N,[S,Object(r["h"])("div",D,[Object(r["h"])("h3",I,[Object(r["h"])("div",null,[E,Object(r["h"])("div",{class:[a.premium<0?"text-danger":"text-success"]},Object(r["z"])(a.premium.toFixed(2)+"%"),3)]),Object(r["h"])("div",null,[B,Object(r["h"])("div",{class:[a.futureMappingPremium<0?"text-danger":"text-success"]},Object(r["z"])(a.futureMappingPremium.toFixed(2)+"%"),3)])]),Object(r["h"])("h6",H,[Object(r["h"])("div",null,"买价："+Object(r["z"])(n.data.fundBid),1),Object(r["h"])("div",null,"卖价："+Object(r["z"])(n.data.fundAsk),1)]),Object(r["h"])("h6",T,[Object(r["h"])("div",null,"买量："+Object(r["z"])(n.data.fundBidVolume),1),Object(r["h"])("div",null,"卖量："+Object(r["z"])(n.data.fundAskVolume),1)]),Object(r["h"])("p",_,"基金价格："+Object(r["z"])(n.data.fundPrice),1),Object(r["h"])("p",q,"基金估值："+Object(r["z"])(a.fundEstimatedValue),1),Object(r["h"])("p",G,"基金净值："+Object(r["z"])(n.data.fundNetValue),1),Object(r["h"])("p",J,"期货价格："+Object(r["z"])(n.data.futurePrice),1),Object(r["h"])("p",L,"期货均价："+Object(r["z"])(n.data.futureAveragePrice.toFixed(0)),1),Object(r["h"])("p",Z,"期货映射价："+Object(r["z"])(a.futureMappingPrice),1)]),Object(r["h"])("div",U,Object(r["z"])(u.dayjs(n.data.time).utc().format("DD/MM/YYYY H:mm:ss")),1)])}var K=n("0ecf"),Q=n.n(K);M.a.extend(Q.a);var W={name:"AgCard",props:{data:Object},setup:function(e){var t=Object(r["c"])((function(){return(e.data.futureAveragePrice/e.data.futurePreviousSettlementPrice*e.data.fundNetValue).toFixed(4)})),n=Object(r["c"])((function(){return 100*(e.data.fundPrice/t.value-1)})),a=Object(r["c"])((function(){return(e.data.futurePrice/e.data.futurePreviousSettlementPrice*e.data.fundNetValue).toFixed(4)})),c=Object(r["c"])((function(){return 100*(a.value/e.data.fundPrice-1)}));return{fundEstimatedValue:t,premium:n,futureMappingPrice:a,futureMappingPremium:c}},methods:{dayjs:M.a}};W.render=X;var $=W,ee=function(){return new Promise((function(e,t){fetch("https://service-g0r9o0x2-1256188994.gz.apigw.tencentcs.com/release/ag?t=".concat(Date.now())).then((function(e){return e.json()})).then((function(t){e(t)})).catch((function(e){console.error(e),t(e)}))}))};function te(){var e,t=Object(r["u"])({}),n=function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ee();case 2:t.value=e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r["p"])((function(){n(),e=setInterval(n,15e3)})),Object(r["q"])((function(){clearInterval(e)})),{agFund:t}}var ne={class:"card p-0",style:{width:"18rem"}},re=Object(r["h"])("div",{class:"card-header"}," 豆粕基金溢价 ",-1),ae={class:"card-body"},ce={class:["card-title","d-flex","justify-content-between"]},ue=Object(r["h"])("div",{class:"text-muted fs-6"},"价格/估值",-1),ie=Object(r["h"])("div",{class:"text-muted fs-6"},"映射价/价格",-1),se={class:"card-subtitle d-flex justify-content-between mb-1"},de={class:"card-subtitle d-flex justify-content-between mb-1"},oe={class:"card-text mb-1"},le={class:"card-text mb-1"},be={class:"card-text mb-1"},je={class:"card-text mb-1"},fe={class:"card-text mb-1"},Oe={class:"card-text mb-1"},me={class:"card-footer text-muted text-end"};function pe(e,t,n,a,c,u){return Object(r["r"])(),Object(r["e"])("div",ne,[re,Object(r["h"])("div",ae,[Object(r["h"])("h3",ce,[Object(r["h"])("div",null,[ue,Object(r["h"])("div",{class:[a.premium<0?"text-danger":"text-success"]},Object(r["z"])(a.premium.toFixed(2)+"%"),3)]),Object(r["h"])("div",null,[ie,Object(r["h"])("div",{class:[a.futureMappingPremium<0?"text-danger":"text-success"]},Object(r["z"])(a.futureMappingPremium.toFixed(2)+"%"),3)])]),Object(r["h"])("h6",se,[Object(r["h"])("div",null,"买价："+Object(r["z"])(n.data.fundBid),1),Object(r["h"])("div",null,"卖价："+Object(r["z"])(n.data.fundAsk),1)]),Object(r["h"])("h6",de,[Object(r["h"])("div",null,"买量："+Object(r["z"])(n.data.fundBidVolume),1),Object(r["h"])("div",null,"卖量："+Object(r["z"])(n.data.fundAskVolume),1)]),Object(r["h"])("p",oe,"基金价格："+Object(r["z"])(n.data.fundPrice),1),Object(r["h"])("p",le,"基金估值："+Object(r["z"])(a.fundEstimatedValue),1),Object(r["h"])("p",be,"基金净值："+Object(r["z"])(n.data.fundNetValue),1),Object(r["h"])("p",je,"期货价格："+Object(r["z"])(n.data.futurePrice),1),Object(r["h"])("p",fe,"期货均价："+Object(r["z"])(n.data.futureAveragePrice.toFixed(0)),1),Object(r["h"])("p",Oe,"期货映射价："+Object(r["z"])(a.futureMappingPrice),1)]),Object(r["h"])("div",me,Object(r["z"])(u.dayjs(n.data.time).utc().format("DD/MM/YYYY H:mm:ss")),1)])}M.a.extend(Q.a);var he={name:"ZmCard",props:{data:Object},setup:function(e){var t=Object(r["c"])((function(){return(e.data.futureAveragePrice/e.data.futurePreviousSettlementPrice*e.data.fundNetValue).toFixed(4)})),n=Object(r["c"])((function(){return 100*(e.data.fundPrice/t.value-1)})),a=Object(r["c"])((function(){return(e.data.futurePrice/e.data.futurePreviousSettlementPrice*e.data.fundNetValue).toFixed(4)})),c=Object(r["c"])((function(){return 100*(a.value/e.data.fundPrice-1)}));return{fundEstimatedValue:t,premium:n,futureMappingPrice:a,futureMappingPremium:c}},methods:{dayjs:M.a}};he.render=pe;var ve=he,xe=function(){return new Promise((function(e,t){fetch("https://service-g0r9o0x2-1256188994.gz.apigw.tencentcs.com/release/zm?t=".concat(Date.now())).then((function(e){return e.json()})).then((function(t){e(t)})).catch((function(e){console.error(e),t(e)}))}))};function ge(){var e,t=Object(r["u"])({}),n=function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,xe();case 2:t.value=e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r["p"])((function(){n(),e=setInterval(n,15e3)})),Object(r["q"])((function(){clearInterval(e)})),{zmFund:t}}n("fb6a");var ye={class:"card p-0",style:{width:"18rem"}},we=Object(r["h"])("div",{class:"card-header"}," 币安合约资金费排行 ",-1),Pe={class:"card-body"},ze={class:"list-group mb-3"},Fe={class:"list-group"},ke={class:"card-footer text-muted text-end"};function Me(e,t,n,a,c,u){return Object(r["r"])(),Object(r["e"])("div",ye,[we,Object(r["h"])("div",Pe,[Object(r["h"])("ul",ze,[(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(n.data.slice(0,3),(function(e,t){return Object(r["r"])(),Object(r["e"])("li",{class:["list-group-item","d-flex","justify-content-between",0===t&&"list-group-item-success"],key:e.symbol},[Object(r["h"])("div",null,Object(r["z"])(e.symbol),1),Object(r["h"])("div",null,Object(r["z"])((100*e.lastFundingRate).toFixed(2)+"%"),1)],2)})),128))]),Object(r["h"])("ul",Fe,[(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(n.data.slice(-3),(function(e,t){return Object(r["r"])(),Object(r["e"])("li",{class:["list-group-item","d-flex","justify-content-between",2===t&&"list-group-item-danger"],key:e.symbol},[Object(r["h"])("div",null,Object(r["z"])(e.symbol),1),Object(r["h"])("div",null,Object(r["z"])((100*e.lastFundingRate).toFixed(2)+"%"),1)],2)})),128))])]),Object(r["h"])("div",ke,Object(r["z"])(u.dayjs(n.data.time).format("DD/MM/YYYY H:mm:ss")),1)])}var Ve={name:"binancePremiumCard",props:{data:Array},setup:function(){return{}},methods:{dayjs:M.a}};Ve.render=Me;var Ye=Ve,Ce=(n("4e82"),function(){return new Promise((function(e,t){fetch("https://9vwn51xvwi.execute-api.ap-southeast-1.amazonaws.com/production/gateway/fapi/v1/premiumIndex?t=".concat(Date.now()),{headers:{"X-Proxy-Uri":"fapi.binance.com"}}).then((function(e){return e.json()})).then((function(t){e(t.sort((function(e,t){return t.lastFundingRate-e.lastFundingRate})))})).catch((function(e){console.error(e),t(e)}))}))});function Ae(){var e,t=Object(r["u"])([]),n=function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Ce();case 2:t.value=e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r["p"])((function(){n(),e=setInterval(n,15e3)})),Object(r["q"])((function(){clearInterval(e)})),{binancePremium:t}}var Re={name:"Home",components:{GrayscaleCard:Y,AgCard:$,ZmCard:ve,BinancePremiumCard:Ye},setup:function(){var e=R(),t=e.grayscaleFunds,n=te(),r=n.agFund,a=ge(),c=a.zmFund,u=Ae(),i=u.binancePremium;return{grayscaleFunds:t,agFund:r,zmFund:c,binancePremium:i}}};Re.render=O;var Ne=Re,Se=[{path:"/",name:"Home",component:Ne},{path:"/grayscale-reminder",name:"GrayscaleReminder",component:function(){return n.e("about").then(n.bind(null,"b563"))}}],De=Object(b["a"])({history:Object(b["b"])("/"),routes:Se}),Ie=De,Ee=n("af56");Object(r["d"])(l).use(Ee["a"]).use(Ie).mount("#app")}});
//# sourceMappingURL=app.4f9027c5.js.map