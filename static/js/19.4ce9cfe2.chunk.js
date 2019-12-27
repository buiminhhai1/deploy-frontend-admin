(this["webpackJsonpreact-frontend-admin"]=this["webpackJsonpreact-frontend-admin"]||[]).push([[19],{256:function(e,t,n){"use strict";var a=n(0),i=n(3),r=n.n(i),l=n(83);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n};t.a=function(e){return a.createElement(l.a,null,(function(t){var n,i=t.getPrefixCls,l=e.prefixCls,d=e.type,u=void 0===d?"horizontal":d,p=e.orientation,m=void 0===p?"center":p,f=e.className,h=e.children,k=e.dashed,v=c(e,["prefixCls","type","orientation","className","children","dashed"]),b=i("divider",l),y=m.length>0?"-".concat(m):m,g=r()(f,b,"".concat(b,"-").concat(u),(o(n={},"".concat(b,"-with-text").concat(y),h),o(n,"".concat(b,"-dashed"),!!k),n));return a.createElement("div",s({className:g},v,{role:"separator"}),h&&a.createElement("span",{className:"".concat(b,"-inner-text")},h))}))}},493:function(e,t,n){"use strict";n.r(t);var a=n(242),i=n.n(a),r=n(26),l=n(27),s=n(29),o=n(28),c=n(30),d=n(0),u=n.n(d),p=n(51),m=n(485),f=n(323),h=n(14),k=n(256),v=n(484),b=n(490),y=n(491),g=n(73),C=n(404),E=n(502),S=n(504),x=(n(68),n(81)),w=m.a.Search,O=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(o.a)(t).call(this,e))).handleDeleteForm=function(){var e;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.state._id,t.next=3,i.a.awrap(n.props.onDeleteSkill(e));case 3:n.setState({visibleConfirm:!1,confirmLoading:!1});case 4:case"end":return t.stop()}}))},n.handleSubmitUpdateForm=function(){var e,t,a;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(n.setState({confirmLoading:!0}),e=n.state,t=e._id,a=e.title,!t){r.next=8;break}return r.next=5,i.a.awrap(n.props.onUpdateSkill(t,a));case 5:n.setState({visible:!1,confirmLoading:!1}),r.next=11;break;case 8:return r.next=10,i.a.awrap(n.props.onCreateSkill(a));case 10:n.setState({visible:!1,confirmLoading:!1});case 11:case"end":return r.stop()}}))},n.handleCancel=function(){n.setState({visible:!1,visibleConfirm:!1})},n.onTitleChange=function(e){var t=e.target.value;n.setState({title:t})},n.addNewSkill=function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({visible:!0,_id:"",title:"",modalName:"Add skill"});case 1:case"end":return e.stop()}}))},n.state={_id:"",title:"",modalName:"",confirmName:"Delete skill",skillColumns:[{title:"Title",dataIndex:"title",key:"title",render:function(e){return u.a.createElement(f.a,{color:"geekblue",key:e},u.a.createElement("strong",null,e.toUpperCase()))}},{title:"Action",key:"action",render:function(e,t){return u.a.createElement("span",null,u.a.createElement(h.a,{type:"edit",title:"edit skill",onClick:function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.awrap(n.setState({visible:!0,_id:t._id,title:t.title,modalName:"Edit skill"}));case 2:case"end":return e.stop()}}))}}),u.a.createElement(k.a,{type:"vertical"}),u.a.createElement(h.a,{type:"delete",title:"delete skill",onClick:function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.awrap(n.setState({visibleConfirm:!0,_id:t._id,title:t.title}));case 2:case"end":return e.stop()}}))}}))}}],visible:!1,visibleConfirm:!1,confirmLoading:!1},n}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.onGetListSkill("")}},{key:"componentDidUpdate",value:function(){this.props.onRefreshMessage(),this.props.error?this.render.actionMessage=v.a.error(this.props.message):this.props.message&&(this.render.actionMessage=v.a.success(this.props.message))}},{key:"render",value:function(){var e=this,t=this.state,n=t.visible,a=t.confirmLoading,i=t.visibleConfirm;return u.a.createElement("div",null,u.a.createElement(b.a,{style:{margin:"10px 0 20px 0"}},u.a.createElement(y.a,{span:6,offset:0},u.a.createElement(w,{placeholder:"input search text",onSearch:function(t){e.props.onGetListSkill(t)},enterButton:!0})),u.a.createElement(y.a,{span:1,offset:16},u.a.createElement(g.a,{type:"primary",onClick:this.addNewSkill},"Add"))),u.a.createElement(C.a,{spinning:this.props.loading},u.a.createElement("div",{style:{background:"white"}},u.a.createElement(E.a,{columns:this.state.skillColumns,dataSource:this.props.skillData,size:"middle"}),null,this.props.skillData?u.a.createElement("div",null,u.a.createElement(S.a,{title:this.state.modalName,visible:n,onOk:this.handleSubmitUpdateForm,confirmLoading:a,onCancel:this.handleCancel,footer:[u.a.createElement(g.a,{key:"back",onClick:this.handleCancel},"Cancel"),u.a.createElement(g.a,{key:"Block",type:"primary",onClick:this.handleSubmitUpdateForm,disabled:!this.state.title},"Save")]},u.a.createElement("div",null,u.a.createElement("div",null,"Skill",u.a.createElement("span",{style:{color:"red",marginBottom:"5px"}},"*")),u.a.createElement(m.a,{placeholder:"Skill",value:this.state.title,onChange:this.onTitleChange}))),u.a.createElement(S.a,{title:this.state.confirmName,visible:i,onOk:this.handleDeleteForm,confirmLoading:a,onCancel:this.handleCancel,footer:[u.a.createElement(g.a,{key:"back",onClick:this.handleCancel},"Cancel"),u.a.createElement(g.a,{key:"Block",type:"danger",onClick:this.handleDeleteForm,disabled:!this.state._id},"Delete")]},u.a.createElement("span",null,"Do you want to delete"," "+this.state.title))):null)))}}]),t}(d.Component);t.default=Object(p.b)((function(e){return{skillData:e.skill.skillData,message:e.skill.message,error:e.skill.error,loading:e.skill.loading}}),(function(e){return{onCreateSkill:function(t){return e(x.e(t))},onUpdateSkill:function(t,n){return e(x.H(t,n))},onDeleteSkill:function(t){return e(x.i(t))},onGetListSkill:function(t){return e(x.q(t))},onRefreshMessage:function(){return e(x.w())}}}))(O)}}]);
//# sourceMappingURL=19.4ce9cfe2.chunk.js.map