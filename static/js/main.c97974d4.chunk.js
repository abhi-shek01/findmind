(this.webpackJsonpfindmind=this.webpackJsonpfindmind||[]).push([[0],{19:function(e,t,a){e.exports=a(44)},24:function(e,t,a){},26:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),l=a.n(o),c=(a(24),a(2)),i=a.n(c),s=a(3),u=a(15),m=a(16),d=a(18),f=a(17),h=(a(26),a(4)),p=a.n(h),g=function(e){var t=e.getInfo,a=e.getInf,o=e.getData,l=e.getInform;return Object(n.useEffect)((function(){var e=Math.floor(1e3*Math.random()),n=Math.floor(1e3*Math.random()),r=Math.floor(1e3*Math.random()),c=Math.floor(1e3*Math.random());console.log(e),console.log(n),console.log(r),console.log(c),t(e),a(n),l(r),o(c)}),[]),r.a.createElement("div",null)},E=function(e){var t=e.information,a=t.author,n=t.url,o=(t.width,t.height,t.download_url);return r.a.createElement("div",{classname:"card text-center"},r.a.createElement("h1",null,a),r.a.createElement("img",{src:o,alt:"",style:{width:"50%",height:"50%",display:"block",marginRight:"auto",marginLeft:"auto"}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{href:n,className:"btn",style:{width:"auto",backgroundColor:"DodgerBlue",color:"white",padding:"12px 30px",cursor:"pointer",fontSize:"20px"}},r.a.createElement("i",{className:"fa fa-download"}),"Download"))},v=function(e){var t=e.avatar_url,a=t.author,n=t.url,o=(t.width,t.height,t.download_url);return r.a.createElement("div",{classname:"card text-center"},r.a.createElement("h1",null,a),r.a.createElement("img",{src:o,alt:"",style:{width:"50%",height:"50%",display:"block",marginLeft:"auto",marginRight:"auto"}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{href:n,className:"btn",style:{width:"auto",backgroundColor:"DodgerBlue",color:"white",padding:"12px 30px",cursor:"pointer",fontSize:"20px"}},r.a.createElement("i",{className:"fa fa-download"}),"Download"))},w=function(e){var t=e.infodata,a=t.author,n=t.url,o=(t.width,t.height,t.download_url);return r.a.createElement("div",{classname:"card text-center"},r.a.createElement("h1",null,a),r.a.createElement("img",{src:o,alt:"",style:{width:"50%",height:"50%",display:"block",marginRight:"auto",marginLeft:"auto"}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{href:n,className:"btn",style:{width:"auto",backgroundColor:"DodgerBlue",color:"white",padding:"12px 30px",cursor:"pointer",fontSize:"20px"}},r.a.createElement("i",{className:"fa fa-download"}),"Download"))},b=function(e){var t=e.html_url,a=t.author,n=t.url,o=(t.width,t.height,t.download_url);return r.a.createElement("div",{classname:"card text-center"},r.a.createElement("h1",null,a),r.a.createElement("img",{src:o,alt:"",style:{width:"50%",height:"50%",display:"block",marginLeft:"auto",marginRight:"auto"}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{href:n,className:"btn",style:{width:"auto",backgroundColor:"DodgerBlue",color:"white",padding:"12px 30px",cursor:"pointer",fontSize:"20px"}},r.a.createElement("i",{className:"fa fa-download"}),"Download"))},x=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={information:{},infodata:{},html_url:{},avatar_url:{}},e.getInfo=function(){var t=Object(s.a)(i.a.mark((function t(a,n,r,o){var l;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://picsum.photos/id/".concat(a,"/info"));case 2:l=t.sent,e.setState({information:l.data});case 4:case"end":return t.stop()}}),t)})));return function(e,a,n,r){return t.apply(this,arguments)}}(),e.getInf=function(){var t=Object(s.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://picsum.photos/id/".concat(a,"/info"));case 2:n=t.sent,e.setState({infodata:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getInform=function(){var t=Object(s.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://picsum.photos/id/".concat(a,"/info"));case 2:n=t.sent,e.setState({html_url:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getData=function(){var t=Object(s.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://picsum.photos/id/".concat(a,"/info"));case 2:n=t.sent,e.setState({avatar_url:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state,t=e.avatar_url,a=e.information,n=e.infodata,o=e.html_url;return r.a.createElement("div",null,r.a.createElement(g,{getInfo:this.getInfo,getData:this.getData,getInf:this.getInf,getInform:this.getInform}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"card"},r.a.createElement(E,{information:a}))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"card"},r.a.createElement(w,{infodata:n}))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"card"},r.a.createElement(v,{avatar_url:t}))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"card"},r.a.createElement(b,{html_url:o})))))}}]),a}(n.Component);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.c97974d4.chunk.js.map