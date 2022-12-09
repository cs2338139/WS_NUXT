import{v,o as r,c as g,w as s,f as t,e as h,j as _,r as c,l as $,i as e,y as w,z as y,a as x,b as k,h as a,t as n}from"./entry.83016bdd.js";import{_ as u}from"./PartTitle.b1e6cb97.js";import{_ as f}from"./HrefBottom.ba8cdc2f.js";const I=""+new URL("3D_Cover.e5683903.png",import.meta.url).href,N={class:"relative h-430px w-80 border border-black rounded-3xl"},S={key:0,class:"absolute parallel right-6 -z-10 -top-8 border border-black bg-custom-0"},j={key:1,class:"absolute parallel right-6 -z-10 -top-8 border border-black bg-custom-1"},A={key:2,class:"absolute parallel right-6 -z-10 -top-8 border border-black bg-custom-2"},C={class:"h-3/4 w-full rounded-t-3xl"},E=["src"],B={class:"h-1/4 border-t border-black"},z={class:"h-full flex-col justify-between flex p-3.5"},L={class:"text-xl"},V={class:"text-sm"},D={class:"text-sm text-right"},P={__name:"ProjectItem",props:{color:String,href:String,img:String},setup(l){return(i,b)=>{const d=$;return r(),g(d,{to:l.href},{default:s(()=>[t("div",N,[t("div",null,[l.color==="yellow"?(r(),h("div",S)):_("",!0),l.color==="red"?(r(),h("div",j)):_("",!0),l.color==="blue"?(r(),h("div",A)):_("",!0)]),t("div",C,[t("img",{src:l.img,class:"h-full"},null,8,E)]),t("div",B,[t("div",z,[t("div",L,[c(i.$slots,"name",{},void 0,!0)]),t("div",V,[c(i.$slots,"info",{},void 0,!0)]),t("div",D,[c(i.$slots,"year",{},void 0,!0)])])])])]),_:3},8,["to"])}}},p=v(P,[["__scopeId","data-v-1587b558"]]),O=l=>(w("data-v-1747eeee"),l=l(),y(),l),R={class:"relative"},W={key:0,class:"parallel right-14 -top-4 bg-custom-0 absolute z-10 p-1 text-lg text-center border border-black"},H={class:"rounded-3xl flex w-full h-32 border border-black"},M=O(()=>t("div",{class:"rounded-l-3xl w-2/5 h-full bg-gray-300"},null,-1)),T={class:"flex items-center justify-center w-3/5 h-full border-l border-black"},U={class:"flex flex-col w-4/5"},q={class:"text-xl"},F={class:""},G={class:"text-sm"},J={class:"text-sm"},K={data(){return{}}},Q=Object.assign(K,{__name:"EventItem",props:{isNew:Boolean,href:String,img:String},setup(l){return(i,b)=>{const d=$;return r(),g(d,{to:l.href,class:"pb-8"},{default:s(()=>[t("div",R,[l.isNew?(r(),h("div",W," NEW!")):_("",!0),t("div",H,[M,t("div",T,[t("div",U,[t("div",q,[c(i.$slots,"name",{},void 0,!0)]),t("div",F,[t("span",G,[c(i.$slots,"place",{},void 0,!0)]),e(" / "),t("span",J,[c(i.$slots,"year",{},void 0,!0)])])])])])])]),_:3},8,["to"])}}}),m=v(Q,[["__scopeId","data-v-1747eeee"]]),X=t("img",{src:I,class:"aspect-video wrap-8 w-full mb-10"},null,-1),Y={class:"wrap-6 mb-10"},Z={class:"relative max-w-4xl mx-auto my-0"},ee={class:"mb-10 text-3xl text-blue-400"},te={class:"mb-3"},se=t("br",null,null,-1),oe=t("br",null,null,-1),ne=t("br",null,null,-1),ae=t("br",null,null,-1),le=t("br",null,null,-1),ie=t("br",null,null,-1),re=t("br",null,null,-1),ce=t("br",null,null,-1),de={class:"text-right"},me={class:"wrap-6 mb-32"},he={class:"inline-flex justify-between w-full mb-28"},_e={class:"text-right max-w-4xl mx-auto"},ue={class:"wrap-6"},fe={class:"flex flex-col justify-between max-w-4xl mx-auto mb-8"},pe={class:"text-center"},we={__name:"index",setup(l){const{locale:i,setLocale:b,t:d}=x();return k({title:d("pages.home.title")}),(o,be)=>(r(),h("div",null,[X,t("div",Y,[a(u,{class:"mt-0 mb-10 ml-0"},{en:s(()=>[e("About the project")]),title:s(()=>[e(n(o.$t("pages.home.info.title")),1)]),_:1}),t("div",Z,[t("div",ee,n(o.$t("pages.home.info.title2")),1),t("div",te,[e(n(o.$t("pages.home.info.content.0")),1),se,e(" "+n(o.$t("pages.home.info.content.1")),1),oe,e(" "+n(o.$t("pages.home.info.content.2")),1),ne,e(" "+n(o.$t("pages.home.info.content.3")),1),ae,e(" "+n(o.$t("pages.home.info.content.4")),1),le,e(" "+n(o.$t("pages.home.info.content.5")),1),ie,e(" "+n(o.$t("pages.home.info.content.4")),1),re,e(" "+n(o.$t("pages.home.info.content.6")),1),ce]),t("div",de,[a(f,{href:"/about"},{default:s(()=>[e(n(o.$t("pages.home.info.button")),1)]),_:1})])])]),t("div",me,[a(u,{class:"mt-0 mb-5 ml-0"},{en:s(()=>[e("Achievement")]),title:s(()=>[e(n(o.$t("pages.home.achievement.title")),1)]),_:1}),t("div",he,[a(p,{class:"transform translate-y-32",href:"/achievement/modelView",color:"yellow",img:"/assets/Image/Page_3D/Cover/3D_Cover.png"},{name:s(()=>[e(n(o.$t("pages.home.achievement.content.0.title")),1)]),year:s(()=>[e(n(o.$t("pages.home.achievement.content.0.year")),1)]),_:1}),a(p,{class:"transform translate-y-16",href:"/achievement/hideWordsMan",color:"blue"},{name:s(()=>[e(n(o.$t("pages.home.achievement.content.4.title")),1)]),info:s(()=>[e(n(o.$t("pages.home.achievement.content.4.info")),1)]),year:s(()=>[e(n(o.$t("pages.home.achievement.content.4.year")),1)]),_:1}),a(p,{href:"/achievement/birdsOfLife",color:"red",img:"/assets/Image/Page_bird/Cover/Bird_Cover.png"},{name:s(()=>[e(n(o.$t("pages.home.achievement.content.3.title")),1)]),info:s(()=>[e(n(o.$t("pages.home.achievement.content.3.info")),1)]),year:s(()=>[e(n(o.$t("pages.home.achievement.content.3.year")),1)]),_:1})]),t("div",_e,[a(f,{href:"/achievement/"},{default:s(()=>[e(n(o.$t("pages.home.achievement.button")),1)]),_:1})])]),t("div",ue,[a(u,{class:"mt-0 mb-5 ml-0"},{en:s(()=>[e("Events")]),title:s(()=>[e(n(o.$t("pages.home.Event.title")),1)]),_:1}),t("div",fe,[a(m,{href:"",img:"",isNew:!0},{name:s(()=>[e("\u8C61\u5076\u5947\u9047\u8A18A")]),place:s(()=>[e("\u570B\u7ACB\u81FA\u7063\u6587\u5B78\u9928 \u5152\u7AE5\u6A02\u5712")]),year:s(()=>[e("2022.07.21")]),_:1}),a(m,{href:"",img:"",isNew:!0},{name:s(()=>[e("\u8C61\u5076\u5947\u9047\u8A18A")]),place:s(()=>[e("\u570B\u7ACB\u81FA\u7063\u6587\u5B78\u9928 \u5152\u7AE5\u6A02\u5712")]),year:s(()=>[e("2022.07.21")]),_:1}),a(m,{href:"",img:""},{name:s(()=>[e("\u8C61\u5076\u5947\u9047\u8A18A")]),place:s(()=>[e("\u570B\u7ACB\u81FA\u7063\u6587\u5B78\u9928 \u5152\u7AE5\u6A02\u5712")]),year:s(()=>[e("2022.07.21")]),_:1}),a(m,{href:"",img:""},{name:s(()=>[e("\u8C61\u5076\u5947\u9047\u8A18A")]),place:s(()=>[e("\u570B\u7ACB\u81FA\u7063\u6587\u5B78\u9928 \u5152\u7AE5\u6A02\u5712")]),year:s(()=>[e("2022.07.21")]),_:1}),a(m,{href:"",img:""},{name:s(()=>[e("\u8C61\u5076\u5947\u9047\u8A18A")]),place:s(()=>[e("\u570B\u7ACB\u81FA\u7063\u6587\u5B78\u9928 \u5152\u7AE5\u6A02\u5712")]),year:s(()=>[e("2022.07.21")]),_:1})]),t("div",pe,[a(f,{href:"/eventRecord/"},{default:s(()=>[e(n(o.$t("pages.home.Event.button")),1)]),_:1})])])]))}};export{we as default};
