(function(t){function e(e){for(var a,n,i=e[0],c=e[1],l=e[2],d=0,m=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&m.push(r[n][0]),r[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,i=1;i<s.length;i++){var c=s[i];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},r={app:0},o=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"04a4":function(t,e,s){"use strict";s("ee29")},"07fd":function(t,e,s){"use strict";s("d615")},"0e83":function(t,e,s){"use strict";s("8ba5")},2133:function(t,e,s){"use strict";s("60c5")},"27f1":function(t,e,s){},"38c8":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},o=[],n={},i=n,c=(s("2133"),s("2877")),l=Object(c["a"])(i,r,o,!1,null,null,null),u=l.exports,d=s("8c4f"),m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"loginPage"},[e("el-form",{ref:"formDataRef",staticClass:"demo-ruleForm",attrs:{"label-position":"left",model:t.formData,rules:t.rules,"label-width":"40px"}},[e("h2",{staticClass:"title"},[t._v("vue2演示项目")]),e("el-form-item",{attrs:{label:"账号",prop:"name"}},[e("el-input",{attrs:{type:"text"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),e("el-form-item",{attrs:{label:"密码",prop:"password"}},[e("el-input",{attrs:{type:"password","show-password":""},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}})],1),e("el-form-item",[e("el-button",{staticClass:"loginBtn",attrs:{type:"primary",disabled:t.disabled},on:{click:function(e){return t.submit()}}},[t._v("登录")]),e("el-button",{staticClass:"loginBtn",on:{click:t.reset}},[t._v("重置 ")])],1)],1)],1)},p=[],f=(s("14d9"),{data(){return{formData:{name:"",password:""},rules:{name:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:5,message:"用户名长度需要在3-5个字符之间",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:3,max:6,message:"密码长度需要在3-5个字符之间",trigger:"blur"}]}}},computed:{disabled(){return""===this.formData.name&&""===this.formData.password}},methods:{submit(){this.$refs["formDataRef"].validate(t=>{t&&this.$router.push("/home")})},reset(){this.formData.name="",this.formData.password=""}}}),h=f,g=(s("e31d"),Object(c["a"])(h,m,p,!1,null,"63507242",null)),b=g.exports,v=function(){var t=this,e=t._self._c;return e("div",{staticClass:"homePage"},[e("Title",{attrs:{msg:"商品选购",a:"123",showCart:!0}}),e("div",{staticClass:"goodsList"},t._l(t.goodsList,(function(s){return e("GoodsItem",{key:s.id,attrs:{item:s},on:{message:function(e){return t.clickGoods(s)}}})})),1),e("el-drawer",{attrs:{size:"100%",direction:"btt",title:t.checkGoods.name,"destroy-on-close":!0,visible:t.drawer},on:{"update:visible":function(e){t.drawer=e}}},[e("div",{staticStyle:{padding:"10px"}},[e("img",{staticStyle:{width:"100%"},attrs:{src:t.checkGoods.picture,alt:""}}),e("P",{staticClass:"desCss"},[t._v("商品编号："+t._s(t.checkGoods.id))]),e("P",{staticClass:"desCss"},[t._v("商品描述："+t._s(t.checkGoods.desc))]),e("P",{staticClass:"desCss price"},[t._v("单品价格：¥"+t._s(t.checkGoods.price))])],1),e("footer",{staticStyle:{padding:"10px"}},[e("InputNumber",{attrs:{price:t.checkGoods.price,num:t.checkGoods.num},on:{"change-num":t.changeNum}}),e("div",{staticClass:"btns"},[e("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:t.add}},[t._v("加入购物车")]),e("el-button",{staticClass:"btn",attrs:{type:"success"},on:{click:t.pay}},[t._v("立即支付")])],1)],1)])],1)},_=[],y=s("cee4");const x=y["a"].create({baseURL:"http://pcapi-xiaotuxian-front-devtest.itheima.net/",timeout:5e3});function w(){return x({url:"/home/goods",method:"get"})}x.interceptors.request.use(t=>t),x.interceptors.response.use(t=>(null===t||void 0===t?void 0:t.data)||{},t=>Promise.reject(t));var k=function(){var t=this,e=t._self._c;return e("div",{staticClass:"goods",on:{click:t.message}},[e("img",{attrs:{src:t.item.picture,alt:""}}),e("div",{staticClass:"info"},[e("div",{staticClass:"name"},[t._v(" "+t._s(t.item.name)+" ")]),e("p",{staticClass:"des"},[t._v(" "+t._s(t.item.desc))]),e("div",{staticClass:"price"},[t._v(" ￥"+t._s(t.item.price))])])])},C=[],S={props:{item:{type:Object}},methods:{message(){this.$emit("message")}}},O=S,N=(s("7bed"),Object(c["a"])(O,k,C,!1,null,"17498c76",null)),j=N.exports,G=function(){var t=this,e=t._self._c;return e("div",{staticClass:"topPrice"},[e("div",{staticClass:"text"},[t._v("总价："+t._s(t.allMoney))]),e("el-input-number",{attrs:{min:0},on:{change:t.handleChange},model:{value:t.iptNum,callback:function(e){t.iptNum=e},expression:"iptNum"}})],1)},P=[],I={data(){return{iptNum:1}},props:{num:{type:Number,default:1},price:{type:String,default:"0.00"}},computed:{allMoney(){return(Number(this.price)*this.iptNum).toFixed(2)}},created(){console.log("父组件传来的num",this.num),this.num&&(this.iptNum=this.num)},methods:{handleChange(t){console.log("数量",t),this.$emit("change-num",t)}}},$=I,D=(s("0e83"),Object(c["a"])($,G,P,!1,null,"5ab51d32",null)),B=D.exports,M={data(){return{goodsList:[],drawer:!1,checkGoods:"",num:0}},components:{GoodsItem:j,InputNumber:B},created(){this.getGoodsList()},methods:{getGoodsList(){w().then(t=>{console.log("res",t.result[1].goods),this.goodsList=t.result[1].goods.map(t=>Object.assign(t,{num:1}))})},clickGoods(t){this.drawer=!0,this.checkGoods=t,console.log("选中的商品",this.checkGoods)},pay(){this.$router.push({name:"Password",query:{num:1}})},add(){let t=localStorage.getItem("list");if(console.log("oldList",t),t){let e=Array.from(JSON.parse(t));e.push(this.checkGoods),alert("已加入购物车"),localStorage.setItem("list",JSON.stringify(e))}else localStorage.setItem("list",JSON.stringify([this.checkGoods])),alert("已加入购物车")},changeNum(t){this.checkGoods.num=t}}},L=M,T=(s("04a4"),s("07fd"),Object(c["a"])(L,v,_,!1,null,"229df07e",null)),J=T.exports,A=function(){var t=this,e=t._self._c;return e("div",{staticClass:"cartPage"},[e("Title",{attrs:{msg:"购物车"}}),t.list.length>0?e("div",[t._l(t.list,(function(s){return e("div",{key:s.id,staticClass:"buyGoodsList"},[e("GoodsItem",{attrs:{item:s}}),e("InputNumber",{attrs:{price:s.price,num:s.num},on:{"change-num":function(e){return t.changeNum(e,s)}}})],1)})),e("el-button",{staticClass:"btn",attrs:{type:"success"},on:{click:t.pay}},[t._v("立即支付")])],2):t._e(),0==t.list.length?e("div",[e("van-empty",{attrs:{description:"暂无更多"}}),e("el-button",{staticClass:"btn",attrs:{type:"success"},on:{click:t.goBuy}},[t._v("去加购")])],1):t._e()],1)},K=[],q={data(){return{list:[]}},components:{GoodsItem:j,InputNumber:B},created(){var t;this.list=Array.from(null!==(t=JSON.parse(localStorage.getItem("list")))&&void 0!==t?t:[])},methods:{pay(){localStorage.setItem("list",JSON.stringify(this.list)),this.$router.push("/password")},goBuy(){this.$router.push("/home")},changeNum(t,e){console.log(t,e),e.num=t}}},H=q,R=(s("c1c3"),Object(c["a"])(H,A,K,!1,null,"24fb6012",null)),U=R.exports,W=function(){var t=this,e=t._self._c;return e("div",[e("Title",{attrs:{msg:"订单结算"}}),e("van-password-input",{attrs:{value:t.value,mask:!1,focused:t.showKeyboard,info:"请输入密码","error-info":t.errorInfo},on:{focus:function(e){t.showKeyboard=!0}}}),e("van-number-keyboard",{attrs:{show:t.showKeyboard,maxlength:6},on:{blur:function(e){t.showKeyboard=!1}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)},F=[],V={data(){return{value:"",showKeyboard:!0,errorInfo:""}},watch:{value(t){6===t.length&&"123456"!==t?this.errorInfo="密码错误":"123456"===t?this.$router.push({path:"/result"}):this.errorInfo=""}},computed:{},created(){},mounted(){},methods:{}},z=V,E=(s("99b0"),Object(c["a"])(z,W,F,!1,null,"103b880b",null)),Q=E.exports,X=function(){var t=this,e=t._self._c;return e("div",{staticClass:"resultPage"},[e("Title",{attrs:{msg:"结果展示"}}),e("el-result",{attrs:{icon:"success",title:"温馨提示","sub-title":"支付成功"},scopedSlots:t._u([{key:"extra",fn:function(){return[e("el-button",{staticClass:"btn",on:{click:function(e){return t.$router.push("./home")}}},[t._v("返回")])]},proxy:!0}])})],1)},Y=[],Z={data(){return{}},methods:{}},tt=Z,et=(s("ec1c"),Object(c["a"])(tt,X,Y,!1,null,"f75cffb4",null)),st=et.exports,at=function(){var t=this,e=t._self._c;return e("div",[e("div",[t._v("你好")]),e("div",{ref:"NmxgraphBox",staticClass:"mxgraphCss",attrs:{id:"graphContainer"}})])},rt=[],ot=s("ccc1"),nt=s.n(ot);const it=nt()({mxImageBasePath:"./src/images",mxBasePath:"./src"});var ct=it,lt={name:"",data(){return{}},mounted(){const{mxGraph:t}=ct,e=this.$refs.NmxgraphBox;var s=new t(e),a=s.getDefaultParent();s.getModel().beginUpdate();try{var r=s.insertVertex(a,null,"Hello,",20,20,80,30),o=s.insertVertex(a,null,"World!",200,150,80,30),n=s.insertEdge(a,null,"",r,o);console.log(n)}finally{s.getModel().endUpdate()}},methods:{}},ut=lt,dt=(s("ca1c"),Object(c["a"])(ut,at,rt,!1,null,"4a0f2bd5",null)),mt=dt.exports,pt=function(){var t=this,e=t._self._c;return e("div",[e("h2",{on:{click:t.son}},[t._v("ajsdakdjha")]),e("CheckBox",{ref:"nihao"},[t._v("你好")]),e("CheckBox",[t._v("请阅读协议")])],1)},ft=[],ht=function(){var t=this,e=t._self._c;return e("div",{on:{click:t.hello}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.agreeStatus,expression:"agreeStatus"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.agreeStatus)?t._i(t.agreeStatus,null)>-1:t.agreeStatus},on:{change:function(e){var s=t.agreeStatus,a=e.target,r=!!a.checked;if(Array.isArray(s)){var o=null,n=t._i(s,o);a.checked?n<0&&(t.agreeStatus=s.concat([o])):n>-1&&(t.agreeStatus=s.slice(0,n).concat(s.slice(n+1)))}else t.agreeStatus=r}}}),e("label",[t._t("default")],2)])},gt=[],bt={name:"CheckBox",data(){return{agreeStatus:!1}},mounted(){},methods:{hello(){this.agreeStatus=!this.agreeStatus},agree(){console.log(this.agreeStatus)}}},vt=bt,_t=Object(c["a"])(vt,ht,gt,!1,null,null,null),yt=_t.exports,xt={components:{CheckBox:yt},name:"Demo",methods:{son(){this.$refs.nihao.agree()}}},wt=xt,kt=Object(c["a"])(wt,pt,ft,!1,null,null,null),Ct=kt.exports;a["default"].use(d["a"]);const St=[{path:"/helloworld",name:"Helloworld",component:b},{path:"/home",name:"Home",component:J},{path:"/cart",name:"Cart",component:U},{path:"/password",name:"Password",component:Q},{path:"/result",name:"Result",component:st},{path:"/mxgraph",name:"MxGraph",component:mt},{path:"/",name:"Data",component:Ct}],Ot=new d["a"]({routes:St});var Nt=Ot,jt=s("2f62");a["default"].use(jt["a"]);const Gt=new jt["a"].Store({state:{name:"张三",number:0,list:[{id:1,name:"111"},{id:2,name:"222"},{id:3,name:"333"}]},getters:{getMessage(t){return"Hello "+t.name}},mutations:{setNumber(t){t.number=5},setNumberIsWhat(t,e){t.number=e.number}},actions:{setNum(t,e){return new Promise(s=>{setTimeout(()=>{t.commit("setNumberIsWhat",{number:e.number}),s()},1e3)})}}});var Pt=Gt,It=s("5c96"),$t=s.n(It),Dt=(s("38c8"),s("0fae"),s("b970")),Bt=(s("157a"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"title"},[e("i",{staticClass:"el-icon-arrow-left",on:{click:t.back}}),t._v(" "+t._s(t.msg)+" "),t.showCart?e("i",{staticClass:"el-icon-shopping-cart-2",attrs:{color:"#000000"},on:{click:t.goCart}}):t._e(),e("GrandSon",t._b({},"GrandSon",t.$attrs,!1))],1)}),Mt=[],Lt=function(){var t=this,e=t._self._c;return e("div",[t._v("nihao")])},Tt=[],Jt={name:"",components:{},props:{a:{}},data(){return{}},computed:{},filter:{},activated:{},mounted(){console.log(this.a,"2131")},methods:{}},At=Jt,Kt=Object(c["a"])(At,Lt,Tt,!1,null,"3e260b29",null),qt=Kt.exports,Ht={data(){return{}},components:{GrandSon:qt},props:{msg:{type:String},showCart:{type:Boolean,default:!1},a:{}},methods:{back(){this.$router.back()},goCart(){this.$router.push("/cart")}},created(){console.log("nihao",this.$attrs)}},Rt=Ht,Ut=(s("ac1c"),Object(c["a"])(Rt,Bt,Mt,!1,null,"4f40ddf4",null)),Wt=Ut.exports;a["default"].use(Dt["a"]),a["default"].use($t.a),a["default"].config.productionTip=!1,a["default"].component("Title",Wt),new a["default"]({router:Nt,store:Pt,render:t=>t(u)}).$mount("#app")},"60c5":function(t,e,s){},"7bed":function(t,e,s){"use strict";s("8bdc")},"8ba5":function(t,e,s){},"8bdc":function(t,e,s){},"99b0":function(t,e,s){"use strict";s("b36f")},abeb:function(t,e,s){},ac1c:function(t,e,s){"use strict";s("f99f")},b36f:function(t,e,s){},c1c3:function(t,e,s){"use strict";s("e283")},ca1c:function(t,e,s){"use strict";s("f0bc")},d615:function(t,e,s){},e283:function(t,e,s){},e31d:function(t,e,s){"use strict";s("abeb")},ec1c:function(t,e,s){"use strict";s("27f1")},ee29:function(t,e,s){},f0bc:function(t,e,s){},f99f:function(t,e,s){}});
//# sourceMappingURL=app.bb56140e.js.map