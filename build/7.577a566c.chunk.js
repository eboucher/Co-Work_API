(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{2461:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(4));function i(){var e=(0,r.default)(["\n  padding: 18px 30px 18px 30px;\n"]);return i=function(){return e},e}var o=a(n(3)).default.div(i());t.default=o},2476:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(4));function i(){var e=(0,r.default)(["\n  .btn-group button {\n    line-height: 28px;\n  }\n"]);return i=function(){return e},e}var o=a(n(3)).default.div(i());t.default=o},2492:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(1)),i=a(n(2)),o=n(8),l=n(14),u=n(9),d=n(12),s=function(e){var t=e.headerId,n=e.isOpen,a=e.onClosed,i=e.onSubmit,s=e.onToggle,f=e.renderForm,c=e.subHeaderContent,p=e.type;return r.default.createElement(o.Modal,{isOpen:n,onClosed:a,onToggle:s},r.default.createElement(o.HeaderModal,null,r.default.createElement("section",null,r.default.createElement(o.HeaderModalTitle,{style:{textTransform:"none"}},r.default.createElement(d.AttributeIcon,{type:"timestamp"===p?"date":["decimal","float","integer","biginter"].includes(p)?"number":p,style:{margin:"auto 20px auto 0"}}),r.default.createElement(l.FormattedMessage,{id:t}))),r.default.createElement("section",null,r.default.createElement(o.HeaderModalTitle,null,r.default.createElement("span",null,(0,u.upperFirst)(c)),r.default.createElement("hr",null)))),r.default.createElement("form",{onSubmit:i},r.default.createElement(o.ModalForm,null,r.default.createElement(o.ModalBody,null,f())),r.default.createElement(o.ModalFooter,null,r.default.createElement("section",null,r.default.createElement(d.Button,{onClick:s,color:"cancel"},r.default.createElement(l.FormattedMessage,{id:"components.popUpWarning.button.cancel"})),r.default.createElement(d.Button,{type:"submit",color:"success"},r.default.createElement(l.FormattedMessage,{id:"form.button.done"}))))))};s.defaultProps={isOpen:!1,onClosed:function(){},onSubmit:function(){},onToggle:function(){},renderForm:function(){},subHeaderContent:"",type:""},s.propTypes={headerId:i.default.string.isRequired,isOpen:i.default.bool,onClosed:i.default.func,onSubmit:i.default.func,onToggle:i.default.func,renderForm:i.default.func,subHeaderContent:i.default.string,type:i.default.string};var f=s;t.default=f},2493:function(e,t,n){"use strict";var a=n(6),r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(33)),o=r(n(35)),l=r(n(5)),u=r(n(28)),d=r(n(18)),s=a(n(1)),f=r(n(2)),c=n(9),p=n(26),m=n(14),g=n(47),b=n(8),v=r(n(111)),E=r(n(2494)),y=r(n(2461)),x=r(n(2496)),h=r(n(2498)),D=function(e){var t=e.children,n=e.history.goBack,a=e.getListDisplayedFields,r=e.inputs,f=e.initialData,p=e.isEditSettings,D=e.isLoading,S=e.modifiedData,_=e.onChange,I=e.onConfirmReset,C=e.onConfirmSubmit,M=e.name,T=(0,b.useGlobalContext)(),w=T.emitEvent,F=T.formatMessage,O=(0,s.useState)(!1),L=(0,d.default)(O,2),k=L[0],B=L[1],R=(0,s.useState)(!1),P=(0,d.default)(R,2),A=P[0],U=P[1],j=(0,s.useMemo)((function(){return(0,c.get)(S,["schema","attributes"],{})}),[S]),N=function(){return B((function(e){return!e}))},W=function(){return U((function(e){return!e}))},q={actions:[{color:"cancel",onClick:N,label:F({id:"".concat(v.default,".popUpWarning.button.cancel")}),type:"button",disabled:(0,c.isEqual)(S,f),style:{fontWeight:600,paddingLeft:15,paddingRight:15}},{color:"success",label:F({id:"".concat(v.default,".containers.Edit.submit")}),type:"submit",disabled:(0,c.isEqual)(S,f),style:{minWidth:150,fontWeight:600}}],title:{label:F({id:"".concat(v.default,".components.SettingsViewWrapper.pluginHeader.title")},{name:(0,c.upperFirst)(M)})},content:F({id:"".concat(v.default,".components.SettingsViewWrapper.pluginHeader.description.").concat(p?"edit":"list","-settings")})},H=function(e){if("settings.defaultSortBy"===e.name)return["id"].concat((0,u.default)(a().filter((function(e){return"media"!==(0,c.get)(j,[e,"type"],"")&&"id"!==e&&"richtext"!==(0,c.get)(j,[e,"type"],"")}))));if("settings.mainField"===e.name){var t=j;return Object.keys(t).filter((function(e){var n=(0,c.get)(t,[e,"type"],"");return!["json","text","relation","component","boolean","date","media","richtext"].includes(n)&&!!n}))}return e.options};return D?s.default.createElement(b.LoadingIndicatorPage,null):s.default.createElement(s.default.Fragment,null,s.default.createElement(b.BackHeader,{onClick:n}),s.default.createElement(y.default,{className:"container-fluid"},s.default.createElement("form",{onSubmit:function(e){e.preventDefault(),W(),w("willSaveContentTypeLayout")}},s.default.createElement(g.Header,q),s.default.createElement("div",{className:"row",style:{paddingTop:"3px"}},s.default.createElement(E.default,{style:{marginBottom:"13px",paddingBottom:"30px",paddingTop:"24px"}},s.default.createElement(x.default,{isSettings:!0}),s.default.createElement("div",{className:"row"},r.map((function(e){return s.default.createElement(m.FormattedMessage,{key:e.name,id:e.label.id},(function(t){return s.default.createElement("div",{className:e.customBootstrapClass},s.default.createElement(m.FormattedMessage,{id:(0,c.get)(e,"description.id","app.utils.defaultMessage")},(function(n){return s.default.createElement(g.Inputs,(0,l.default)({},e,{description:n,label:" "===t?null:t,onChange:_,options:H(e),value:(0,c.get)(S,e.name,"")}))})))}))})),s.default.createElement("div",{className:"col-12"},s.default.createElement(h.default,{style:{marginBottom:20}}))),s.default.createElement(x.default,null),t)),s.default.createElement(b.PopUpWarning,{isOpen:k,toggleModal:N,content:{title:"".concat(v.default,".popUpWarning.title"),message:"".concat(v.default,".popUpWarning.warning.cancelAllSettings"),cancel:"".concat(v.default,".popUpWarning.button.cancel"),confirm:"".concat(v.default,".popUpWarning.button.confirm")},popUpWarningType:"danger",onConfirm:function(){I(),N()}}),s.default.createElement(b.PopUpWarning,{isOpen:A,toggleModal:W,content:{title:"".concat(v.default,".popUpWarning.title"),message:"".concat(v.default,".popUpWarning.warning.updateAllSettings"),cancel:"".concat(v.default,".popUpWarning.button.cancel"),confirm:"".concat(v.default,".popUpWarning.button.confirm")},popUpWarningType:"danger",onConfirm:(0,o.default)(i.default.mark((function e(){return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:W();case 3:case"end":return e.stop()}}),e)})))}))))};D.defaultProps={getListDisplayedFields:function(){return[]},inputs:[],initialData:{},isEditSettings:!1,modifiedData:{},name:"",onConfirmReset:function(){},onConfirmSubmit:function(){var e=(0,o.default)(i.default.mark((function e(){return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),onSubmit:function(){},pluginHeaderProps:{actions:[],description:{id:"app.utils.defaultMessage"},title:{id:"app.utils.defaultMessage",values:{}}}},D.propTypes={children:f.default.node.isRequired,getListDisplayedFields:f.default.func,history:f.default.shape({goBack:f.default.func.isRequired}).isRequired,initialData:f.default.object,inputs:f.default.array,isEditSettings:f.default.bool,isLoading:f.default.bool.isRequired,modifiedData:f.default.object,name:f.default.string,onChange:f.default.func.isRequired,onConfirmReset:f.default.func,onConfirmSubmit:f.default.func,onSubmit:f.default.func,pluginHeaderProps:f.default.shape({actions:f.default.array,description:f.default.shape({id:f.default.string}),title:f.default.shape({id:f.default.string,values:f.default.object})})};var S=(0,p.withRouter)(D);t.default=S},2494:function(e,t,n){"use strict";var a=n(0),r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(1)),o=a(n(2)),l=n(14),u=n(2495),d=function(e){return i.default.createElement("p",null,e)},s=function(e){var t=e.children,n=e.description,a=e.style,r=e.title;return i.default.createElement("div",{className:"col-md-12"},i.default.createElement(u.Wrapper,{style:a},i.default.createElement(u.Sub,null,!!r&&i.default.createElement("p",null,i.default.createElement(l.FormattedMessage,{id:r})),!!n&&i.default.createElement(l.FormattedMessage,{id:n},d)),t))};s.defaultProps={children:null,description:null,style:{},title:null},s.propTypes={children:o.default.any,description:o.default.string,style:o.default.object,title:o.default.string};var f=(0,i.memo)(s);t.default=f},2495:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.Sub=t.Wrapper=void 0;var r=a(n(4)),i=a(n(3));function o(){var e=(0,r.default)(["\n  padding-top: 0px;\n  line-height: 18px;\n  > p:first-child {\n    margin-bottom: 1px;\n    font-weight: 700;\n    color: #333740;\n    font-size: 1.8rem;\n  }\n  > p {\n    color: #787e8f;\n    font-size: 13px;\n  }\n"]);return o=function(){return e},e}function l(){var e=(0,r.default)(["\n  margin-bottom: 35px;\n  background: #ffffff;\n  padding: 22px 28px 18px;\n  padding-bottom: 13px;\n  border-radius: 2px;\n  box-shadow: 0 2px 4px #e3e9f3;\n  -webkit-font-smoothing: antialiased;\n"]);return l=function(){return e},e}var u=i.default.div(l());t.Wrapper=u;var d=i.default.div(o());t.Sub=d},2496:function(e,t,n){"use strict";var a=n(0),r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(1)),o=a(n(2)),l=n(14),u=a(n(111)),d=a(n(2497)),s=function(e){var t=e.isSettings?"settings":"view",n="".concat(u.default,".containers.SettingPage.").concat(t);return i.default.createElement("div",{style:{marginBottom:"18px"}},i.default.createElement(l.FormattedMessage,{id:n},(function(e){return i.default.createElement(d.default,null,e)})))};s.propTypes={isSettings:o.default.bool},s.defaultProps={isSettings:!1};var f=(0,i.memo)(s);t.default=f},2497:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(4));function i(){var e=(0,r.default)(["\n  color: #787e8f;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.77px;\n  text-transform: uppercase;\n"]);return i=function(){return e},e}var o=a(n(3)).default.div(i());t.default=o},2498:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(4));function i(){var e=(0,r.default)(["\n  margin-top: 17px;\n  margin-bottom: 24px;\n  border-top: 1px solid #f6f6f6;\n"]);return i=function(){return e},e}var o=a(n(3)).default.div(i());t.default=o},3131:function(e,t,n){"use strict";var a=n(6),r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(33)),o=r(n(35)),l=r(n(18)),u=a(n(1)),d=r(n(2)),s=n(9),f=n(8),c=n(14),p=n(120),m=n(49),g=n(47),b=r(n(111)),v=r(n(768)),E=r(n(770)),y=r(n(2492)),x=r(n(2493)),h=r(n(2476)),D=r(n(771)),S=r(n(3132)),_=r(n(3133)),I=r(n(3134)),C=r(n(3135)),M=r(n(3136)),T=a(n(3137)),w=r(n(3138)),F=function(e){var t=e.deleteLayout,n=e.slug,a=(0,u.useReducer)(T.default,T.initialState),r=(0,l.default)(a,2),d=r[0],F=r[1],O=(0,u.useState)(!1),L=(0,l.default)(O,2),k=L[0],B=L[1],R=(0,u.useState)(!1),P=(0,l.default)(R,2),A=P[0],U=P[1],j=(0,u.useState)(!1),N=(0,l.default)(j,2),W=N[0],q=N[1],H=(0,f.useGlobalContext)().emitEvent,G=function(){return U((function(e){return!e}))},J=d.toJS(),z=J.labelForm,V=J.labelToEdit,K=J.initialData,Q=J.modifiedData,X=J.isLoading,Y=new AbortController,Z=Y.signal,$=(0,u.useMemo)((function(){return(0,s.get)(Q,["schema","attributes"],{})}),[Q]);(0,u.useEffect)((function(){return function(){var e=(0,o.default)(i.default.mark((function e(){var t,a;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.request)((0,E.default)("content-types/".concat(n)),{method:"GET",signal:Z});case 3:t=e.sent,a=t.data,F({type:"GET_DATA_SUCCEEDED",data:a.contentType}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),20!==e.t0.code&&strapi.notification.error("notification.error");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()(),function(){Y.abort()}}),[n]);var ee=(0,u.useMemo)((function(){return(0,s.get)(Q,["schema","info","name"],"")}),[Q]),te=function(){return(0,s.get)(Q,["layouts","list"],[])},ne=function(){var e=(0,s.get)(Q,["metadatas"],{}),t=$;return Object.keys(e).filter((function(e){var n=(0,s.get)(t,[e,"type"],"");return!["json","component","richtext","relation"].includes(n)&&!!n})).filter((function(e){return!te().includes(e)}))},ae=function(e){F({type:"SET_LABEL_TO_EDIT",labelToEdit:e}),G()},re=function(e){var t=e.target,n=t.name,a=t.value;F({type:"ON_CHANGE_LABEL_METAS",name:n,value:a})},ie=function(){var e=(0,o.default)(i.default.mark((function e(){var a;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,delete(a=(0,s.cloneDeep)(Q)).apiID,delete a.schema,delete a.uid,e.next=7,(0,f.request)((0,E.default)("content-types/".concat(n)),{method:"PUT",body:a,signal:Z});case 7:F({type:"SUBMIT_SUCCEEDED"}),t(n),H("didEditListSettings"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),strapi.notification.error("notification.error");case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),oe=function(e,t){F({type:"MOVE_FIELD",originalIndex:e,atIndex:t})},le=(0,p.useDrop)({accept:v.default.FIELD}),ue=(0,l.default)(le,2)[1];return u.default.createElement(D.default,{isDraggingSibling:W,setIsDraggingSibling:q},u.default.createElement(x.default,{getListDisplayedFields:te,inputs:w.default,isLoading:X,initialData:K,modifiedData:Q,onChange:function(e){var t=e.target,n=t.name,a=t.value;F({type:"ON_CHANGE",keys:n,value:"settings.pageSize"===n?parseInt(a,10):a})},onConfirmReset:function(){F({type:"ON_RESET"})},onConfirmSubmit:ie,name:ee},u.default.createElement(C.default,null,u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:"col-12"},u.default.createElement(h.default,{ref:ue,style:{display:"flex",width:"100%"}},te().map((function(e,t){var n=(0,s.get)(Q,["metadatas",e,"list","label"],"");return u.default.createElement(S.default,{count:te().length,key:e,index:t,isDraggingSibling:W,label:n,move:oe,name:e,onClick:ae,onRemove:function(e){e.stopPropagation(),1===te().length?strapi.notification.info("".concat(b.default,".notification.info.minimumFields")):F({type:"REMOVE_FIELD",index:t})},selectedItem:V,setIsDraggingSibling:q})}))))),u.default.createElement(I.default,{isOpen:k,toggle:function(){ne().length>0&&B((function(e){return!e}))},direction:"down",style:{position:"absolute",top:11,right:10}},u.default.createElement(M.default,{disabled:0===ne().length}),u.default.createElement(_.default,null,ne().map((function(e){return u.default.createElement(m.DropdownItem,{key:e,onClick:function(){F({type:"ADD_FIELD",item:e})}},e)})))))),u.default.createElement(y.default,{headerId:"".concat(b.default,".containers.ListSettingsView.modal-form.edit-label"),isOpen:A,onClosed:function(){F({type:"UNSET_LABEL_TO_EDIT"})},onSubmit:function(e){e.preventDefault(),G(),F({type:"SUBMIT_LABEL_FORM"})},onToggle:G,renderForm:function(){return u.default.createElement(u.default.Fragment,null,u.default.createElement("div",{className:"col-6",style:{marginBottom:4}},u.default.createElement(c.FormattedMessage,{id:"".concat(b.default,".form.Input.label")},(function(e){return u.default.createElement(c.FormattedMessage,{id:"".concat(b.default,".form.Input.label.inputDescription")},(function(t){return u.default.createElement(g.Inputs,{description:t,label:e,type:"text",name:"label",onBlur:function(){},value:(0,s.get)(z,"label",""),onChange:re})}))}))),"media"!==(0,s.get)($,[V,"type"],"text")&&u.default.createElement("div",{className:"col-6",style:{marginBottom:4}},u.default.createElement(c.FormattedMessage,{id:"".concat(b.default,".form.Input.sort.field")},(function(e){return u.default.createElement(g.Inputs,{label:e,type:"bool",name:"sortable",value:(0,s.get)(z,"sortable",!1),onChange:re})}))))},subHeaderContent:V,type:(0,s.get)($,[V,"type"],"text")}))};F.propTypes={deleteLayout:d.default.func.isRequired,location:d.default.shape({search:d.default.string.isRequired}).isRequired,slug:d.default.string.isRequired};var O=F;t.default=O},3132:function(e,t,n){"use strict";var a=n(6),r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(18)),o=a(n(1)),l=r(n(2)),u=n(120),d=n(278),s=r(n(768)),f=r(n(772)),c=r(n(769)),p=function(e){var t=e.count,n=e.index,a=e.label,r=e.move,l=e.name,p=e.onClick,m=e.onRemove,g=e.selectedItem,b=(0,o.useRef)(null),v=(0,c.default)().setIsDraggingSibling,E=(0,u.useDrop)({accept:s.default.FIELD,hover:function(e){if(b.current){var t=e.index,a=n;t!==a&&(r(t,a),e.index=a)}}}),y=(0,i.default)(E,2)[1],x=(0,u.useDrag)({begin:function(){v(!0)},end:function(){v(!1)},item:{type:s.default.FIELD,id:l,name:l,index:n},collect:function(e){return{isDragging:e.isDragging()}}}),h=(0,i.default)(x,3),D=h[0].isDragging,S=h[1],_=h[2];return(0,o.useEffect)((function(){_((0,d.getEmptyImage)(),{captureDraggingState:!1})}),[_]),S(y(b)),o.default.createElement(f.default,{count:t,ref:b,isDragging:D,label:a,name:l,onClick:p,onRemove:m,selectedItem:g})};p.defaultProps={index:0,label:"",selectedItem:""},p.propTypes={count:l.default.number.isRequired,index:l.default.number,label:l.default.string,move:l.default.func.isRequired,name:l.default.string.isRequired,onClick:l.default.func.isRequired,onRemove:l.default.func.isRequired,selectedItem:l.default.string};var m=p;t.default=m},3133:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(4)),i=a(n(3)),o=n(49);function l(){var e=(0,r.default)(["\n  max-height: 180px;\n  min-width: 230px;\n  margin-left: -1px;\n  margin-top: -1px;\n  padding: 0;\n  border-top-left-radius: 0 !important;\n  border-top-right-radius: 0;\n  border-color: #e3e9f3 !important;\n  border-top-color: #aed4fb !important;\n  box-shadow: 0 2px 3px rgba(227, 233, 245, 0.5);\n  transform: translate3d(-199px, 30px, 0px) !important;\n\n  overflow: scroll;\n\n  button {\n    height: 30px;\n    padding-left: 10px !important;\n    line-height: 26px;\n    cursor: pointer;\n    font-size: 13px !important;\n    &:focus,\n    &:active,\n    &:hover,\n    &:hover {\n      background-color: #fafafb !important;\n      color: #333740;\n      outline: 0;\n    }\n    div {\n      margin: 0;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n  }\n"]);return l=function(){return e},e}var u=(0,i.default)(o.DropdownMenu)(l());t.default=u},3134:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(4)),i=a(n(3)),o=n(49);function l(){var e=(0,r.default)(["\n  display: table-cell;\n"]);return l=function(){return e},e}var u=(0,i.default)(o.ButtonDropdown)(l());t.default=u},3135:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(4));function i(){var e=(0,r.default)(["\n  position: relative;\n  padding: 11px 40px 11px 11px;\n  margin-top: 19px;\n  margin-bottom: 10px;\n  border: 1px dashed #e3e9f3;\n  border-radius: 2px;\n  > div,\n  > div > div {\n    margin: 0;\n    padding: 0;\n  }\n  > div > div {\n    overflow-x: auto;\n    overflow-y: scroll;\n  }\n"]);return i=function(){return e},e}var o=a(n(3)).default.div(i());t.default=o},3136:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(4)),i=a(n(3)),o=n(49);function l(){var e=(0,r.default)(["\n  width: 30px;\n  height: 30px;\n  background: #fafafb;\n  border: 1px solid #e3e9f3;\n  border-radius: 2px;\n  border-top-right-radius: 2px !important;\n  border-bottom-right-radius: 2px !important;\n  color: #b3b5b9;\n\n  &:disabled {\n    cursor: not-allowed !important;\n\n    background: #fafafb;\n    border: 1px solid #e3e9f3;\n    border-radius: 2px;\n    color: #b3b5b9;\n  }\n\n  &:before {\n    ","\n  }\n\n  &:hover,\n  :active,\n  :focus {\n    ","\n\n    &:before {\n      ","\n    }\n  }\n"]);return l=function(){return e},e}var u="\n  content: '\f067';\n  font-family: FontAwesome;\n  font-size: 13px;\n  -webkit-font-smoothing: antialiased;\n",d=(0,i.default)(o.DropdownToggle)(l(),u,"\n  background-color: #e6f0fb !important;\n  border: 1px solid #aed4fb !important;\n  color: #007eff !important;\n",u);t.default=d},3137:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.initialState=t.default=void 0;var r=a(n(28)),i=n(44),o=(0,i.fromJS)({labelForm:{},labelToEdit:"",initialData:{},isLoading:!0,modifiedData:{}});t.initialState=o;var l=function(e,t){switch(t.type){case"ADD_FIELD":return e.updateIn(["modifiedData","layouts","list"],(function(e){return e.push(t.item)}));case"GET_DATA_SUCCEEDED":return e.update("initialData",(function(){return(0,i.fromJS)(t.data)})).update("isLoading",(function(){return!1})).update("modifiedData",(function(){return(0,i.fromJS)(t.data)}));case"MOVE_FIELD":return e.updateIn(["modifiedData","layouts","list"],(function(e){return e.delete(t.originalIndex).insert(t.atIndex,e.get(t.originalIndex))}));case"ON_CHANGE":return e.updateIn(["modifiedData"].concat((0,r.default)(t.keys.split("."))),(function(){return t.value}));case"ON_CHANGE_LABEL_METAS":return e.updateIn(["labelForm",t.name],(function(){return t.value}));case"ON_RESET":return e.update("modifiedData",(function(){return e.get("initialData")}));case"REMOVE_FIELD":var n=["modifiedData","settings","defaultSortBy"],a=e.getIn(n),o=["modifiedData","layouts","list",t.index],l=e.getIn(o),u=e.getIn(["modifiedData","layouts","list",1]),d=e.getIn(["modifiedData","schema","attributes",u,"type"]),s="media"!==d&&"richtext"!==d?u:"id";return e.removeIn(["modifiedData","layouts","list",t.index]).updateIn(n,(function(){return l===a?s:a}));case"SET_LABEL_TO_EDIT":return e.update("labelToEdit",(function(){return t.labelToEdit})).updateIn(["labelForm","label"],(function(){return e.getIn(["modifiedData","metadatas",t.labelToEdit,"list","label"])})).updateIn(["labelForm","sortable"],(function(){return e.getIn(["modifiedData","metadatas",t.labelToEdit,"list","sortable"])}));case"UNSET_LABEL_TO_EDIT":return e.update("labelToEdit",(function(){return""})).update("labelForm",(function(){return(0,i.fromJS)({})}));case"SUBMIT_LABEL_FORM":var f=["modifiedData","metadatas",e.get("labelToEdit"),"list"];return e.updateIn([].concat(f,["label"]),(function(){return e.getIn(["labelForm","label"])})).updateIn([].concat(f,["sortable"]),(function(){return e.getIn(["labelForm","sortable"])}));case"SUBMIT_SUCCEEDED":return e.update("initialData",(function(){return e.get("modifiedData")}));default:return e}};t.default=l},3138:function(e){e.exports=JSON.parse('[{"label":{"id":"content-manager.form.Input.search"},"customBootstrapClass":"col-md-4","didCheckErrors":false,"errors":[],"name":"settings.searchable","type":"bool","validations":{}},{"label":{"id":"content-manager.form.Input.filters"},"customBootstrapClass":"col-md-4","didCheckErrors":false,"errors":[],"name":"settings.filterable","type":"bool","validations":{}},{"label":{"id":"content-manager.form.Input.bulkActions"},"customBootstrapClass":"col-md-4","didCheckErrors":false,"errors":[],"name":"settings.bulkable","type":"bool","validations":{}},{"label":{"id":"content-manager.form.Input.pageEntries"},"customBootstrapClass":"col-md-4","didCheckErrors":false,"errors":[],"description":{"id":"content-manager.form.Input.pageEntries.inputDescription"},"name":"settings.pageSize","options":[10,20,50,100],"type":"select","validations":{}},{"label":{"id":"content-manager.form.Input.defaultSort"},"customBootstrapClass":"col-md-4 ml-md-auto","didCheckErrors":false,"errors":[],"style":{"marginRight":"-20px"},"name":"settings.defaultSortBy","options":["id"],"type":"select","validations":{}},{"label":{"id":"app.utils.defaultMessage"},"customBootstrapClass":"col-md-2","didCheckErrors":false,"errors":[],"name":"settings.defaultSortOrder","options":["ASC","DESC"],"type":"select","validations":{}}]')}}]);