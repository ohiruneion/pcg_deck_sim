webpackJsonp([0],{"0XGu":function(t,e){},"0gtf":function(t,e){},"1kSO":function(t,e){},"5Qkr":function(t,e){},"8evD":function(t,e,a){t.exports=a.p+"static/img/frame1.2b19121.png"},F7b5:function(t,e,a){t.exports=a.p+"static/img/stamp.04a763f.png"},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=a("VU/8")({name:"App"},i,!1,function(t){a("0XGu")},null,null).exports,s=a("/ocq"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",[e("router-link",{attrs:{to:{name:"PokemonCardGame"}}},[this._v("\n      PCG\n    ")])],1),this._v(" "),e("div",[e("router-link",{attrs:{to:{name:"JiroAnalysis"}}},[this._v("\n      Jiro\n    ")])],1),this._v(" "),e("div",[e("router-link",{attrs:{to:{name:"Garupa"}}},[this._v("\n      Garupa\n    ")])],1)])},staticRenderFns:[]};var c=a("VU/8")({name:"MainScreen",data:function(){return{}},methods:{}},r,!1,function(t){a("OYyq")},"data-v-7380b8a5",null).exports,l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("table",{attrs:{border:"1",cellspacing:"0",cellpadding:"5"}},[t._m(0),t._v(" "),t._l(t.deck,function(e,n){return[a("tr",{key:n},[a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"card.name"}],attrs:{type:"text"},domProps:{value:e.name},on:{input:function(a){a.target.composing||t.$set(e,"name",a.target.value)}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.quantity,expression:"card.quantity",modifiers:{number:!0}}],attrs:{type:"number",min:"0",max:"4"},domProps:{value:e.quantity},on:{input:function(a){a.target.composing||t.$set(e,"quantity",t._n(a.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"card.type"}],attrs:{type:"radio",value:"pokemon"},domProps:{checked:t._q(e.type,"pokemon")},on:{change:function(a){t.$set(e,"type","pokemon")}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"card.type"}],attrs:{type:"radio",value:"goods"},domProps:{checked:t._q(e.type,"goods")},on:{change:function(a){t.$set(e,"type","goods")}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"card.type"}],attrs:{type:"radio",value:"support"},domProps:{checked:t._q(e.type,"support")},on:{change:function(a){t.$set(e,"type","support")}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"card.type"}],attrs:{type:"radio",value:"stadium"},domProps:{checked:t._q(e.type,"stadium")},on:{change:function(a){t.$set(e,"type","stadium")}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"card.type"}],attrs:{type:"radio",value:"energy"},domProps:{checked:t._q(e.type,"energy")},on:{change:function(a){t.$set(e,"type","energy")}}})]),t._v(" "),a("td",[a("button",{on:{click:function(e){t.deleteCard(n)}}},[t._v("\n            Delete\n          ")])])])]})],2),t._v(" "),a("button",{on:{click:function(e){t.addCard()}}},[t._v("\n    Add\n  ")]),t._v(" "),a("div",[t._v("\n    "+t._s("合計："+t.totalQuantity+"枚")+"\n  ")]),t._v(" "),a("div",[t._v("\n    "+t._s("ポケモン："+t.totalTypeQuantity("pokemon")+"枚")+"\n  ")]),t._v(" "),a("div",[t._v("\n    "+t._s("グッズ："+t.totalTypeQuantity("goods")+"枚")+"\n  ")]),t._v(" "),a("div",[t._v("\n    "+t._s("サポート："+t.totalTypeQuantity("support")+"枚")+"\n  ")]),t._v(" "),a("div",[t._v("\n    "+t._s("スタジアム："+t.totalTypeQuantity("stadium")+"枚")+"\n  ")]),t._v(" "),a("div",[t._v("\n    "+t._s("エネルギー："+t.totalTypeQuantity("energy")+"枚")+"\n  ")])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("名称")]),t._v(" "),a("th",[t._v("枚数")]),t._v(" "),a("th",[t._v("ポケモン")]),t._v(" "),a("th",[t._v("グッズ")]),t._v(" "),a("th",[t._v("サポート")]),t._v(" "),a("th",[t._v("スタジアム")]),t._v(" "),a("th",[t._v("エネルギー")]),t._v(" "),a("th",[t._v("削除")])])}]};var d=a("VU/8")({name:"PokemonCardGame",data:function(){return{deck:[{name:"",quantity:0}]}},computed:{totalQuantity:function(){var t=0;return this.deck.forEach(function(e){t+=e.quantity}),t}},methods:{addCard:function(){this.deck.push({name:"",quantity:0})},deleteCard:function(t){this.deck.splice(t,1)},totalTypeQuantity:function(t){var e=0;return this.deck.forEach(function(a){a.type===t&&(e+=a.quantity)}),e}}},l,!1,function(t){a("0gtf")},"data-v-2bcbd960",null).exports,v=a("vEJU"),p=a.n(v),f=a("mjAv"),m=a.n(f),u=a("F7b5"),h=a.n(u),_={name:"JiroAnalysis",data:function(){return{storeList:p.a.storeList,canvas:null,ctx:null,name:""}},mounted:function(){this.canvas=document.getElementById("canvas");this.canvas.width=400,this.canvas.height=200,this.ctx=this.canvas.getContext("2d");var t=this,e=new Image;e.src=m.a,e.onload=function(){t.ctx.drawImage(e,0,0,400,400)}},methods:{drawStamp:function(t,e){var a=this,n=new Image;n.src=h.a,n.onload=function(){a.ctx.drawImage(n,t,e,50,50)}},writeName:function(){this.ctx.lineWidth=2,this.ctx.fillStyle="#0ff",this.ctx.font="20px cursive",this.ctx.fillText(this.name,300,180)}}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section"},[a("div",{staticClass:"container"},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input",attrs:{type:"text",placeholder:"名前"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),a("button",{staticClass:"button",on:{click:function(e){t.writeName()}}},[t._v("Write")])]),t._v(" "),a("div",{staticClass:"columns is-multiline"},t._l(t.storeList,function(e){return a("div",{key:e.id,staticClass:"column is-3 has-text-left"},[a("label",{staticClass:"checkbox"},[a("input",{attrs:{type:"checkbox"},on:{click:function(a){t.drawStamp(e.x,e.y)}}}),t._v("\n          "+t._s(e.name)+"\n        ")])])}),0),t._v(" "),a("canvas",{staticClass:"canvas",attrs:{id:"canvas"}})])])},staticRenderFns:[]};var x=a("VU/8")(_,g,!1,function(t){a("1kSO")},"data-v-02ecd05a",null).exports,y=a("sRoY"),b=a.n(y),k=a("8evD"),C=a.n(k),w={components:{VueCropper:b.a},data:function(){return{imgSrc:"",cropImg:"",canvas:null,ctx:null,outputImg:"",info:{name:"",rank:"",sex:"",period:"",band:{po:{fav:!1,rank:""},af:{fav:!1,rank:""},pa:{fav:!1,rank:""},ro:{fav:!1,rank:""},he:{fav:!1,rank:""}},guess:"",style:"",speed:"",combo:{hard:"",expert:"",special:""},fav_song_1:"",fav_song_2:"",fav_song_3:"",cover_song:"",specialty_song:"",weak_song:"",fav_story_1:"",fav_story_2:"",fav_pico_1:"",fav_pico_2:"",comment_1:"",comment_2:""}}},mounted:function(){this.canvas=document.getElementById("canvas"),this.canvas.width=667,this.canvas.height=501,this.ctx=this.canvas.getContext("2d")},methods:{setImage:function(t){var e=this,a=t.target.files[0];if(a.type.includes("image/"))if("function"==typeof FileReader){var n=new FileReader;n.onload=function(t){e.imgSrc=t.target.result,e.$refs.cropper.replace(t.target.result)},n.readAsDataURL(a)}else alert("Sorry, FileReader API not supported");else alert("Please select an image file")},cropImage:function(){this.cropImg=this.$refs.cropper.getCroppedCanvas().toDataURL(),this.drawCanvas(),this.drawFrame()},rotate:function(){this.$refs.cropper.rotate(90)},drawCanvas:function(){var t=this,e=new Image;e.src=this.cropImg,e.onload=function(){t.ctx.drawImage(e,0,0,667,501)}},drawFrame:function(t){var e=this,a=new Image;a.src=C.a,a.onload=function(){e.ctx.drawImage(a,0,0,667,501)}},drawInfo:function(){switch(this.ctx.lineWidth=2,this.ctx.fillStyle="#ff0000",this.ctx.font="20px cursive",this.ctx.fillText(this.info.name,80,42,100),this.ctx.fillText(this.info.rank,80,80,100),this.info.sex){case"1":this.ctx.fillText("〇",82,115);break;case"2":this.ctx.fillText("〇",109,115);break;case"3":this.ctx.fillText("〇",140,115)}switch(this.ctx.fillText(this.info.period,80,151,100),this.info.band.po.fav&&this.ctx.fillText("〇",23,215),this.info.band.af.fav&&this.ctx.fillText("〇",58,215),this.info.band.pa.fav&&this.ctx.fillText("〇",94,215),this.info.band.ro.fav&&this.ctx.fillText("〇",123,215),this.info.band.he.fav&&this.ctx.fillText("〇",156,215),this.ctx.fillText(this.info.band.po.rank,22,235),this.ctx.fillText(this.info.band.af.rank,58,235),this.ctx.fillText(this.info.band.pa.rank,93,235),this.ctx.fillText(this.info.band.ro.rank,122,235),this.ctx.fillText(this.info.band.he.rank,155,235),this.ctx.fillText(this.info.guess,30,290,130),this.info.style){case"1":this.ctx.fillText("〇",83,350);break;case"2":this.ctx.fillText("〇",115,350);break;case"3":this.ctx.fillText("〇",150,350)}this.ctx.fillText(this.info.speed,80,385),this.ctx.fillText(this.info.combo.hard,20,475),this.ctx.fillText(this.info.combo.expert,80,475),this.ctx.fillText(this.info.combo.special,140,475),this.ctx.fillText(this.info.fav_song_1,490,75,150),this.ctx.fillText(this.info.fav_song_2,490,105,150),this.ctx.fillText(this.info.fav_song_3,490,135,150),this.ctx.fillText(this.info.cover_song,490,200,150),this.ctx.fillText(this.info.specialty_song,480,290,75),this.ctx.fillText(this.info.weak_song,570,290,75),this.ctx.fillText(this.info.fav_story_1,480,350,75),this.ctx.fillText(this.info.fav_story_2,480,380,75),this.ctx.fillText(this.info.fav_pico_1,570,350,75),this.ctx.fillText(this.info.fav_pico_2,570,380,75),this.ctx.fillText(this.info.comment_1,480,440,150),this.ctx.fillText(this.info.comment_2,480,470,150)},downloadResume:function(){var t=document.createElement("a");t.href=this.canvas.toDataURL("image/png"),t.download="garupa_resume.png",t.click(),this.outputImg=this.canvas.toDataURL("newImg")}}},$={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),t._v(" "),a("section",{staticClass:"section"},[a("div",{staticClass:"tile is-ancestor is-vertical"},[a("div",{staticClass:"tile is-parent"},[a("div",{staticClass:"tile is-child"},[a("input",{staticStyle:{"font-size":"1.2em",padding:"10px 0"},attrs:{type:"file",name:"image",accept:"image/*"},on:{change:t.setImage}}),t._v(" "),""!=t.imgSrc?a("button",{staticClass:"button is-primary",staticStyle:{"margin-right":"40px"},on:{click:t.cropImage}},[t._v("Crop")]):t._e(),t._v(" "),""!=t.imgSrc?a("button",{staticClass:"button is-primary",on:{click:t.rotate}},[t._v("Rotate")]):t._e()])]),t._v(" "),a("div",{staticClass:"tile is-parent"},[a("div",{staticClass:"tile is-child is-6",staticStyle:{height:"501px"}},[a("vue-cropper",{ref:"cropper",staticStyle:{width:"100%","max-width":"667px",height:"100%","max-height":"501px",border:"1px solid gray"},attrs:{guides:!0,"view-mode":2,"drag-mode":"crop","auto-crop-area":.5,"min-container-width":250,"min-container-height":180,background:!0,rotatable:!0,src:t.imgSrc,alt:"Source Image","img-style":{width:"100%",height:"100%"},aspectRatio:667/501}})],1),t._v(" "),t._m(1)]),t._v(" "),a("div",{staticClass:"tile is-parent is-vertical"},[a("div",{staticClass:"tile is-parent"},[a("div",{staticClass:"tile is-child is-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.name,expression:"info.name"}],staticClass:"input",attrs:{type:"text",placeholder:"プレイヤー名"},domProps:{value:t.info.name},on:{input:function(e){e.target.composing||t.$set(t.info,"name",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.rank,expression:"info.rank"}],staticClass:"input",attrs:{type:"text",placeholder:"ランク"},domProps:{value:t.info.rank},on:{input:function(e){e.target.composing||t.$set(t.info,"rank",e.target.value)}}}),t._v(" "),a("div",{staticClass:"control"},[a("label",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.sex,expression:"info.sex"}],attrs:{type:"radio",name:"sex",value:"1"},domProps:{checked:t._q(t.info.sex,"1")},on:{change:function(e){t.$set(t.info,"sex","1")}}}),t._v("\n                男性\n              ")]),t._v(" "),a("label",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.sex,expression:"info.sex"}],attrs:{type:"radio",name:"sex",value:"2"},domProps:{checked:t._q(t.info.sex,"2")},on:{change:function(e){t.$set(t.info,"sex","2")}}}),t._v("\n                女性\n              ")]),t._v(" "),a("label",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.sex,expression:"info.sex"}],attrs:{type:"radio",name:"sex",value:"3"},domProps:{checked:t._q(t.info.sex,"3")},on:{change:function(e){t.$set(t.info,"sex","3")}}}),t._v("\n                その他\n              ")])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.period,expression:"info.period"}],staticClass:"input",attrs:{type:"text",placeholder:"バンドリ歴"},domProps:{value:t.info.period},on:{input:function(e){e.target.composing||t.$set(t.info,"period",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"tile is-child is-2"},[a("label",{staticClass:"checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.band.po.fav,expression:"info.band.po.fav"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.info.band.po.fav)?t._i(t.info.band.po.fav,null)>-1:t.info.band.po.fav},on:{change:function(e){var a=t.info.band.po.fav,n=e.target,i=!!n.checked;if(Array.isArray(a)){var o=t._i(a,null);n.checked?o<0&&t.$set(t.info.band.po,"fav",a.concat([null])):o>-1&&t.$set(t.info.band.po,"fav",a.slice(0,o).concat(a.slice(o+1)))}else t.$set(t.info.band.po,"fav",i)}}}),t._v("\n              Poppin'Party\n            ")]),t._v(" "),a("label",{staticClass:"checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.band.af.fav,expression:"info.band.af.fav"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.info.band.af.fav)?t._i(t.info.band.af.fav,null)>-1:t.info.band.af.fav},on:{change:function(e){var a=t.info.band.af.fav,n=e.target,i=!!n.checked;if(Array.isArray(a)){var o=t._i(a,null);n.checked?o<0&&t.$set(t.info.band.af,"fav",a.concat([null])):o>-1&&t.$set(t.info.band.af,"fav",a.slice(0,o).concat(a.slice(o+1)))}else t.$set(t.info.band.af,"fav",i)}}}),t._v("\n              Afterglow\n            ")]),t._v(" "),a("label",{staticClass:"checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.band.pa.fav,expression:"info.band.pa.fav"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.info.band.pa.fav)?t._i(t.info.band.pa.fav,null)>-1:t.info.band.pa.fav},on:{change:function(e){var a=t.info.band.pa.fav,n=e.target,i=!!n.checked;if(Array.isArray(a)){var o=t._i(a,null);n.checked?o<0&&t.$set(t.info.band.pa,"fav",a.concat([null])):o>-1&&t.$set(t.info.band.pa,"fav",a.slice(0,o).concat(a.slice(o+1)))}else t.$set(t.info.band.pa,"fav",i)}}}),t._v("\n              Pastel*Parets\n            ")]),t._v(" "),a("label",{staticClass:"checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.band.ro.fav,expression:"info.band.ro.fav"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.info.band.ro.fav)?t._i(t.info.band.ro.fav,null)>-1:t.info.band.ro.fav},on:{change:function(e){var a=t.info.band.ro.fav,n=e.target,i=!!n.checked;if(Array.isArray(a)){var o=t._i(a,null);n.checked?o<0&&t.$set(t.info.band.ro,"fav",a.concat([null])):o>-1&&t.$set(t.info.band.ro,"fav",a.slice(0,o).concat(a.slice(o+1)))}else t.$set(t.info.band.ro,"fav",i)}}}),t._v("\n              Roselia\n            ")]),t._v(" "),a("label",{staticClass:"checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.band.he.fav,expression:"info.band.he.fav"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.info.band.he.fav)?t._i(t.info.band.he.fav,null)>-1:t.info.band.he.fav},on:{change:function(e){var a=t.info.band.he.fav,n=e.target,i=!!n.checked;if(Array.isArray(a)){var o=t._i(a,null);n.checked?o<0&&t.$set(t.info.band.he,"fav",a.concat([null])):o>-1&&t.$set(t.info.band.he,"fav",a.slice(0,o).concat(a.slice(o+1)))}else t.$set(t.info.band.he,"fav",i)}}}),t._v("\n              ハローハッピーワールド\n            ")])]),t._v(" "),a("div",{staticClass:"tile is-child is-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.band.po.rank,expression:"info.band.po.rank"}],staticClass:"input",attrs:{type:"text",placeholder:"Rank Poppin'Party"},domProps:{value:t.info.band.po.rank},on:{input:function(e){e.target.composing||t.$set(t.info.band.po,"rank",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.band.af.rank,expression:"info.band.af.rank"}],staticClass:"input",attrs:{type:"text",placeholder:"Rank Afterglow"},domProps:{value:t.info.band.af.rank},on:{input:function(e){e.target.composing||t.$set(t.info.band.af,"rank",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.band.pa.rank,expression:"info.band.pa.rank"}],staticClass:"input",attrs:{type:"text",placeholder:"Rank Pastel*Palets"},domProps:{value:t.info.band.pa.rank},on:{input:function(e){e.target.composing||t.$set(t.info.band.pa,"rank",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.band.ro.rank,expression:"info.band.ro.rank"}],staticClass:"input",attrs:{type:"text",placeholder:"Rank Roselia"},domProps:{value:t.info.band.ro.rank},on:{input:function(e){e.target.composing||t.$set(t.info.band.ro,"rank",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.band.he.rank,expression:"info.band.he.rank"}],staticClass:"input",attrs:{type:"text",placeholder:"Rank ハローハッピーワールド"},domProps:{value:t.info.band.he.rank},on:{input:function(e){e.target.composing||t.$set(t.info.band.he,"rank",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"tile is-child is-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.guess,expression:"info.guess"}],staticClass:"input",attrs:{type:"text",placeholder:"推しキャラ"},domProps:{value:t.info.guess},on:{input:function(e){e.target.composing||t.$set(t.info,"guess",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"tile is-child is-2"},[a("div",{staticClass:"control"},[a("label",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.style,expression:"info.style"}],attrs:{type:"radio",name:"style",value:"1"},domProps:{checked:t._q(t.info.style,"1")},on:{change:function(e){t.$set(t.info,"style","1")}}}),t._v("\n                親指\n              ")]),t._v(" "),a("label",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.style,expression:"info.style"}],attrs:{type:"radio",name:"style",value:"2"},domProps:{checked:t._q(t.info.style,"2")},on:{change:function(e){t.$set(t.info,"style","2")}}}),t._v("\n                人差指\n              ")]),t._v(" "),a("label",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.style,expression:"info.style"}],attrs:{type:"radio",name:"style",value:"3"},domProps:{checked:t._q(t.info.style,"3")},on:{change:function(e){t.$set(t.info,"style","3")}}}),t._v("\n                その他\n              ")])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.speed,expression:"info.speed"}],staticClass:"input",attrs:{type:"text",placeholder:"速度"},domProps:{value:t.info.speed},on:{input:function(e){e.target.composing||t.$set(t.info,"speed",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.combo.hard,expression:"info.combo.hard"}],staticClass:"input",attrs:{type:"text",placeholder:"フルコン数 HARD"},domProps:{value:t.info.combo.hard},on:{input:function(e){e.target.composing||t.$set(t.info.combo,"hard",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.combo.expert,expression:"info.combo.expert"}],staticClass:"input",attrs:{type:"text",placeholder:"フルコン数 EXPERT"},domProps:{value:t.info.combo.expert},on:{input:function(e){e.target.composing||t.$set(t.info.combo,"expert",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.combo.special,expression:"info.combo.special"}],staticClass:"input",attrs:{type:"text",placeholder:"フルコン数 SPECIAL"},domProps:{value:t.info.combo.special},on:{input:function(e){e.target.composing||t.$set(t.info.combo,"special",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"tile is-child is-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.fav_song_1,expression:"info.fav_song_1"}],staticClass:"input",attrs:{type:"text",placeholder:"好きな楽曲１"},domProps:{value:t.info.fav_song_1},on:{input:function(e){e.target.composing||t.$set(t.info,"fav_song_1",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.fav_song_2,expression:"info.fav_song_2"}],staticClass:"input",attrs:{type:"text",placeholder:"好きな楽曲２"},domProps:{value:t.info.fav_song_2},on:{input:function(e){e.target.composing||t.$set(t.info,"fav_song_2",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.fav_song_3,expression:"info.fav_song_3"}],staticClass:"input",attrs:{type:"text",placeholder:"好きな楽曲３"},domProps:{value:t.info.fav_song_3},on:{input:function(e){e.target.composing||t.$set(t.info,"fav_song_3",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.cover_song,expression:"info.cover_song"}],staticClass:"input",attrs:{type:"text",placeholder:"カバー曲"},domProps:{value:t.info.cover_song},on:{input:function(e){e.target.composing||t.$set(t.info,"cover_song",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"tile is-parent"},[a("div",{staticClass:"tile is-child is-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.specialty_song,expression:"info.specialty_song"}],staticClass:"input",attrs:{type:"text",placeholder:"得意譜面"},domProps:{value:t.info.specialty_song},on:{input:function(e){e.target.composing||t.$set(t.info,"specialty_song",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.weak_song,expression:"info.weak_song"}],staticClass:"input",attrs:{type:"text",placeholder:"苦手譜面"},domProps:{value:t.info.weak_song},on:{input:function(e){e.target.composing||t.$set(t.info,"weak_song",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"tile is-child is-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.fav_story_1,expression:"info.fav_story_1"}],staticClass:"input",attrs:{type:"text",placeholder:"好きなイベスト１"},domProps:{value:t.info.fav_story_1},on:{input:function(e){e.target.composing||t.$set(t.info,"fav_story_1",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.fav_story_2,expression:"info.fav_story_2"}],staticClass:"input",attrs:{type:"text",placeholder:"好きなイベスト２"},domProps:{value:t.info.fav_story_2},on:{input:function(e){e.target.composing||t.$set(t.info,"fav_story_2",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"tile is-child is-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.fav_pico_1,expression:"info.fav_pico_1"}],staticClass:"input",attrs:{type:"text",placeholder:"好きなピコ回１"},domProps:{value:t.info.fav_pico_1},on:{input:function(e){e.target.composing||t.$set(t.info,"fav_pico_1",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.fav_pico_2,expression:"info.fav_pico_2"}],staticClass:"input",attrs:{type:"text",placeholder:"好きなピコ回２"},domProps:{value:t.info.fav_pico_2},on:{input:function(e){e.target.composing||t.$set(t.info,"fav_pico_2",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"tile is-child is-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.comment_1,expression:"info.comment_1"}],staticClass:"input",attrs:{type:"text",placeholder:"コメント１"},domProps:{value:t.info.comment_1},on:{input:function(e){e.target.composing||t.$set(t.info,"comment_1",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.comment_2,expression:"info.comment_2"}],staticClass:"input",attrs:{type:"text",placeholder:"コメント２"},domProps:{value:t.info.comment_2},on:{input:function(e){e.target.composing||t.$set(t.info,"comment_2",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"tile is-child is-2"})]),t._v(" "),a("div",{staticClass:"tile is-parent"},[a("div",{staticClass:"tile is-child"},[a("button",{staticClass:"button is-primary",on:{click:function(e){t.drawInfo()}}},[t._v("Draw")])]),t._v(" "),a("div",{staticClass:"tile is-child"},[a("button",{staticClass:"button is-primary",on:{click:function(e){t.downloadResume()}}},[t._v("Download")])])])]),t._v(" "),a("div",{staticClass:"tile is-parent"},[a("img",{attrs:{src:t.outputImg}})])])]),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"hero is-dark"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[this._v("\n          ガルパ履歴書メーカー\n        ")]),this._v(" "),e("h2",{staticClass:"subtitle"},[this._v("\n          誰でも簡単にガルパの履歴書を作成できます。\n        ")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tile is-child is-6",staticStyle:{height:"501px"}},[e("canvas",{attrs:{id:"canvas"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"content has-text-centered"},[e("p",[this._v("\n        © 2019 ガルパ履歴書メーカー"),e("br"),this._v("\n        developed by "),e("a",{attrs:{href:"https://twitter.com/ion_ohirune",target:"_blank"}},[this._v("@ion_ohirune")])])])])}]};var P=a("VU/8")(w,$,!1,function(t){a("l0ru")},"data-v-077a8f04",null).exports;n.a.use(s.a);var N=new s.a({routes:[{path:"/",name:"MainScreen",component:c},{path:"/pcg",name:"PokemonCardGame",component:d},{path:"/jiro",name:"JiroAnalysis",component:x},{path:"/garupa",name:"Garupa",component:P}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:N,components:{App:o},template:"<App/>"})},OYyq:function(t,e){},l0ru:function(t,e){},mjAv:function(t,e,a){t.exports=a.p+"static/img/card.54e465c.png"},vEJU:function(t,e){t.exports={storeList:[{id:1,name:"三田本店",x:0,y:0},{id:2,name:"目黒店",x:50,y:0},{id:3,name:"仙川店",x:100,y:0},{id:4,name:"新宿歌舞伎町店"},{id:5,name:"品川店"},{id:6,name:"新宿小滝橋通り店"},{id:7,name:"環七新代田店"},{id:8,name:"八王子野猿街道店２"},{id:9,name:"池袋東口店"},{id:10,name:"亀戸店"},{id:11,name:"京急川崎店"},{id:12,name:"府中店"},{id:13,name:"松戸駅前店"},{id:14,name:"めじろ台店"},{id:15,name:"荻窪店"},{id:16,name:"上野毛店"},{id:17,name:"京成大久保店"},{id:18,name:"環七一之江店"},{id:19,name:"相模大野店"},{id:20,name:"横浜関内店"},{id:21,name:"神田神保町店"},{id:22,name:"小岩店"},{id:23,name:"ひばりヶ丘駅前店"},{id:24,name:"桜台駅前店"},{id:25,name:"栃木街道店"},{id:26,name:"立川店"},{id:27,name:"千住大橋駅前店"},{id:28,name:"茨木守谷店"},{id:29,name:"湘南藤沢店"},{id:30,name:"西台駅前店"},{id:31,name:"中山駅前店"},{id:32,name:"仙台店"},{id:33,name:"札幌店"},{id:34,name:"会津若松駅前店"},{id:35,name:"JR西口蒲田店"},{id:36,name:"新潟店"},{id:37,name:"川越店"},{id:38,name:"京都店"}]}}},["NHnr"]);
//# sourceMappingURL=app.f72e395fb76e27d2291a.js.map