(function(e){function t(t){for(var r,u,d=t[0],s=t[1],i=t[2],o=0,f=[];o<d.length;o++)u=d[o],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&f.push(c[u][0]),c[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(f.length)f.shift()();return n.push.apply(n,i||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,d=1;d<a.length;d++){var s=a[d];0!==c[s]&&(r=!1)}r&&(n.splice(t--,1),e=u(u.s=a[0]))}return e}var r={},c={app:0},n=[];function u(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.m=e,u.c=r,u.d=function(e,t,a){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(a,r,function(t){return e[t]}.bind(null,r));return a},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=t,d=d.slice();for(var i=0;i<d.length;i++)t(d[i]);var l=s;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("7a23"),c={class:"container p-3"},n={class:"row row-cols-auto g-3 justify-content-around"};function u(e,t,a,u,d,s){var i=Object(r["k"])("Nav"),l=Object(r["k"])("AgCard"),o=Object(r["k"])("GrayscaleCard");return Object(r["h"])(),Object(r["d"])(r["a"],null,[Object(r["f"])(i),Object(r["f"])("section",null,[Object(r["f"])("div",c,[Object(r["f"])("div",n,["{}"!==JSON.stringify(u.agFund)?(Object(r["h"])(),Object(r["d"])(l,{key:0,data:u.agFund},null,8,["data"])):Object(r["e"])("",!0),(Object(r["h"])(!0),Object(r["d"])(r["a"],null,Object(r["j"])(u.grayscaleFunds,(function(e){return Object(r["h"])(),Object(r["d"])(o,{data:e,key:e.symbol},null,8,["data"])})),128))])])])],64)}var d={class:"navbar navbar-expand-lg navbar-dark bg-dark"},s=Object(r["f"])("div",{class:"container"},[Object(r["f"])("div",{class:"navbar-brand mb-0 h1"},"Bullbullgo ｜ 为套利而生")],-1);function i(e,t,a,c,n,u){return Object(r["h"])(),Object(r["d"])("nav",d,[s])}var l={name:"Nav"};l.render=i;var o=l,f=(a("b680"),{class:"card p-0",style:{width:"18rem"}}),b={class:"card-header"},j={class:"card-body"},O={class:"card-subtitle d-flex justify-content-between"},p={class:"card-text mb-1"},v={class:"card-text mb-1"},m={class:"card-text mb-1"},h={class:"card-text mb-1"},g={class:"card-footer text-muted text-end"};function x(e,t,a,c,n,u){return Object(r["h"])(),Object(r["d"])("div",f,[Object(r["f"])("div",b,Object(r["l"])(a.data.symbol)+"溢价 ",1),Object(r["f"])("div",j,[Object(r["f"])("h3",{class:["card-title",a.data.premium<0?"text-danger":"text-success"]},Object(r["l"])((100*a.data.premium).toFixed(2))+"%",3),Object(r["f"])("h6",O,[Object(r["f"])("div",null,"买："+Object(r["l"])(a.data.bidPrice),1),Object(r["f"])("div",null,"卖："+Object(r["l"])(a.data.askPrice),1)]),Object(r["f"])("p",p,"基金价格："+Object(r["l"])(a.data.lastPrice),1),Object(r["f"])("p",v,"基金净值："+Object(r["l"])(a.data.fundNetValue.toFixed(2)),1),Object(r["f"])("p",m,"基金含币量："+Object(r["l"])(a.data.perShareValue),1),Object(r["f"])("p",h,"合约价格："+Object(r["l"])(a.data.futurePrice),1)]),Object(r["f"])("div",g,Object(r["l"])(u.dayjs(a.data.tradeTimeInLong).format("DD/MM/YYYY H:mm:ss")),1)])}var y=a("5a0c"),w=a.n(y),P={name:"GrayscaleCard",props:{data:Object},methods:{dayjs:w.a}};P.render=x;var F=P,k=a("1da1"),M=(a("96cf"),a("d3b7"),function(){return new Promise((function(e,t){fetch("https://9vwn51xvwi.execute-api.ap-southeast-1.amazonaws.com/production/premium?symbol=GBTC,ETHE").then((function(e){return e.json()})).then((function(t){e(t)})).catch((function(e){console.error(e),t(e)}))}))});function S(){var e=Object(r["i"])([]),t=function(){var t=Object(k["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,M();case 2:e.value=t.sent;case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return setInterval(t,5e3),Object(r["g"])(t),{grayscaleFunds:e}}var V={class:"card p-0",style:{width:"18rem"}},A=Object(r["f"])("div",{class:"card-header"}," 白银基金溢价 ",-1),N={class:"card-body"},Y={class:["card-title","d-flex","justify-content-between"]},C=Object(r["f"])("div",{class:"text-muted fs-6"},"价格/估值",-1),_=Object(r["f"])("div",{class:"text-muted fs-6"},"映射价/价格",-1),T={class:"card-subtitle d-flex justify-content-between mb-1"},B={class:"card-subtitle d-flex justify-content-between mb-1"},D={class:"card-text mb-1"},E={class:"card-text mb-1"},G={class:"card-text mb-1"},R={class:"card-text mb-1"},H={class:"card-text mb-1"},I={class:"card-text mb-1"},J={class:"card-footer text-muted text-end"};function z(e,t,a,c,n,u){return Object(r["h"])(),Object(r["d"])("div",V,[A,Object(r["f"])("div",N,[Object(r["f"])("h3",Y,[Object(r["f"])("div",null,[C,Object(r["f"])("div",{class:[c.premium<0?"text-danger":"text-success"]},Object(r["l"])(c.premium.toFixed(2)+"%"),3)]),Object(r["f"])("div",null,[_,Object(r["f"])("div",{class:[c.futureMappingPremium<0?"text-danger":"text-success"]},Object(r["l"])(c.futureMappingPremium.toFixed(2)+"%"),3)])]),Object(r["f"])("h6",T,[Object(r["f"])("div",null,"买价："+Object(r["l"])(a.data.fundBid),1),Object(r["f"])("div",null,"卖价："+Object(r["l"])(a.data.fundAsk),1)]),Object(r["f"])("h6",B,[Object(r["f"])("div",null,"买量："+Object(r["l"])(a.data.fundBidVolume),1),Object(r["f"])("div",null,"卖量："+Object(r["l"])(a.data.fundAskVolume),1)]),Object(r["f"])("p",D,"基金价格："+Object(r["l"])(a.data.fundPrice),1),Object(r["f"])("p",E,"基金估值："+Object(r["l"])(c.fundEstimatedValue),1),Object(r["f"])("p",G,"基金净值："+Object(r["l"])(a.data.fundNetValue),1),Object(r["f"])("p",R,"期货价格："+Object(r["l"])(a.data.futurePrice),1),Object(r["f"])("p",H,"期货均价："+Object(r["l"])(a.data.futureAveragePrice.toFixed(0)),1),Object(r["f"])("p",I,"期货映射价："+Object(r["l"])(c.futureMappingPrice),1)]),Object(r["f"])("div",J,Object(r["l"])(u.dayjs(a.data.time).utc().format("DD/MM/YYYY H:mm:ss")),1)])}var L=a("0ecf"),q=a.n(L);w.a.extend(q.a);var K={name:"AgCard",props:{data:Object},setup:function(e){var t=Object(r["b"])((function(){return(e.data.futureAveragePrice/e.data.futurePreviousSettlementPrice*e.data.fundNetValue).toFixed(4)})),a=Object(r["b"])((function(){return 100*(e.data.fundPrice/t.value-1)})),c=Object(r["b"])((function(){return(e.data.futurePrice/e.data.futurePreviousSettlementPrice*e.data.fundNetValue).toFixed(4)})),n=Object(r["b"])((function(){return 100*(c.value/e.data.fundPrice-1)}));return{fundEstimatedValue:t,premium:a,futureMappingPrice:c,futureMappingPremium:n}},methods:{dayjs:w.a}};K.render=z;var Q=K,U=function(){return new Promise((function(e,t){fetch("https://service-g0r9o0x2-1256188994.gz.apigw.tencentcs.com/release/ag").then((function(e){return e.json()})).then((function(t){e(t)})).catch((function(e){console.error(e),t(e)}))}))};function W(){var e=Object(r["i"])({}),t=function(){var t=Object(k["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,U();case 2:e.value=t.sent;case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return setInterval(t,15e3),Object(r["g"])(t),{agFund:e}}var X={name:"App",components:{Nav:o,GrayscaleCard:F,AgCard:Q},setup:function(){var e=S(),t=e.grayscaleFunds,a=W(),r=a.agFund;return{grayscaleFunds:t,agFund:r}}};X.render=u;var Z=X;Object(r["c"])(Z).mount("#app")}});
//# sourceMappingURL=app.473eeef9.js.map