(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(e,t,a){e.exports=a(38)},38:function(e,t,a){"use strict";a.r(t);for(var n=a(0),l=a.n(n),r=a(12),c=a.n(r),i=a(13),o=a(15),s=a(1),m=a(2),u=a(4),d=a(3),h=a(39),p=a(14),v=a.n(p),E=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"input-group"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search item name",value:this.props.valueSearch,onChange:function(t){return e.props.handleSearch(t.target.value)}}),l.a.createElement("span",{className:"input-group-btn"},l.a.createElement("button",{className:"btn btn-info",type:"button",onClick:function(){return e.props.handleSearch("")}},"Clear")))}}]),a}(n.Component),b=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleClick=function(e,t){n.props.handleSort(e,t),n.setState({active:!1})},n.handleActivateSort=function(){n.setState({active:!n.state.active})},n.renderSort=function(){var e=n.props,t=e.sortType,a=e.sortOrder;if(""!==t&&""!==a)return l.a.createElement("span",{className:"label label-success label-medium text-uppercase"},t," - ",a)},n.state={active:!1},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:this.state.active?"dropdown open":"dropdown"},l.a.createElement("button",{className:"btn btn-default dropdown-toggle marginR5",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"true",onClick:this.handleActivateSort},"Sort by ",l.a.createElement("span",{className:"caret"})),l.a.createElement("ul",{className:"dropdown-menu"},l.a.createElement("li",{onClick:function(){return e.handleClick("name","asc")}},l.a.createElement("span",{role:"button",className:"text-uppercase"},"Name ASC")),l.a.createElement("li",{onClick:function(){return e.handleClick("name","desc")}},l.a.createElement("span",{role:"button",className:"text-uppercase"},"Name DESC")),l.a.createElement("li",{role:"separator",className:"divider"}),l.a.createElement("li",{onClick:function(){return e.handleClick("level","asc")}},l.a.createElement("span",{role:"button",className:"text-uppercase"},"Level ASC")),l.a.createElement("li",{onClick:function(){return e.handleClick("level","desc")}},l.a.createElement("span",{role:"button",className:"text-uppercase"},"Level DESC"))),this.renderSort())}}]),a}(n.Component),f=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).renderLevel=function(){return e.props.arrayLevel.map((function(e,t){switch(e){case 0:return l.a.createElement("option",{key:t,value:e},"Small");case 1:return l.a.createElement("option",{key:t,value:e},"Medium");default:return l.a.createElement("option",{key:t,value:e},"High")}}))},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return!1===this.props.showForm?null:l.a.createElement("form",{className:"form-inline",onSubmit:function(){return e.props.handleFormClickSubmit()}},l.a.createElement("div",{className:"form-group marginR5"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Item Name",value:this.props.valueItem,onChange:function(t){return e.props.handleFormInputChange(t.target.value)}})),l.a.createElement("div",{className:"form-group marginR5"},l.a.createElement("select",{className:"form-control",value:this.props.levelItem,onChange:function(t){return e.props.handleFormSelectChange(t.target.value)}},this.renderLevel())),l.a.createElement("button",{type:"button",className:"btn btn-default marginR5",onClick:function(){return e.props.handleFormClickCancel()}},"Cancel"),l.a.createElement("button",{type:"button",className:"btn btn-primary marginR5",onClick:function(){return e.props.handleFormClickSubmit()}},"Submit"))}}]),a}(n.Component),g=[{id:Object(h.a)(),name:"T\xecm th\u1ea5y m\u1ea3nh v\u1ee1 m\xe1y bay r\u01a1i \u1edf Iran l\xe0m 66 ng\u01b0\u1eddi ch\u1ebft",level:2},{id:Object(h.a)(),name:"Kh\xf4ng c\xf2n tranh c\u01b0\u1edbp l\u1ed9c hoa tre \u1edf l\u1ec5 h\u1ed9i \u0111\u1ec1n Gi\xf3ng 2018",level:0},{id:Object(h.a)(),name:"H\u01a1n 37.000 ng\u01b0\u1eddi nh\u1eadp vi\u1ec7n v\xec tai n\u1ea1n giao th\xf4ng, \u0111\u1ed1t ph\xe1o",level:1},{id:Object(h.a)(),name:"G\u1ea7n 200 ng\u01b0\u1eddi ch\u1ebft v\xec tai n\u1ea1n giao th\xf4ng 7 ng\xe0y ngh\u1ec9 T\u1ebft",level:0},{id:Object(h.a)(),name:"VFF gi\u1ea3i ng\xe2n 15 t\u1ef7 \u0111\u1ed3ng, ti\u1ec1n th\u01b0\u1edfng t\u1edbi tay U23 VN tr\u01b0\u1edbc T\u1ebft",level:2},{id:Object(h.a)(),name:"F1 mu\u1ed1n t\u1ed5 ch\u1ee9c gi\u1ea3i \u0111ua xe t\u1ea1i Vi\u1ec7t Nam v\xe0o n\u0103m 2020",level:1}],S=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.item,n=t.index;if(!a)return l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"4",className:"text-center"},l.a.createElement("h4",null,"No Item")));var r="",c="";switch(a.level){case 1:r="label label-warning",c="Medium";break;case 2:r="label label-danger",c="High";break;default:r="label label-info",c="Low"}return l.a.createElement("tr",null,l.a.createElement("td",{className:"text-center"},n),l.a.createElement("td",null,a.name),l.a.createElement("td",{className:"text-center"},l.a.createElement("span",{className:r},c)),l.a.createElement("td",null,l.a.createElement("button",{type:"button",className:"btn btn-warning btn-sm marginR5",onClick:function(){return e.props.handleEditItem(n,a)}},"Edit"),l.a.createElement("button",{type:"button",className:"btn btn-danger btn-sm",onClick:function(){return e.props.handleShowAlert(a)}},"Delete")))}}]),a}(n.Component),C=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).renderLevel=function(){return e.props.arrayLevel.map((function(e,t){switch(e){case 0:return l.a.createElement("option",{key:t,value:e},"Low");case 1:return l.a.createElement("option",{key:t,value:e},"Medium");default:return l.a.createElement("option",{key:t,value:e},"High")}}))},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("tr",null,l.a.createElement("td",{className:"text-center"},this.props.indexEdit),l.a.createElement("td",null,l.a.createElement("input",{type:"text",className:"form-control",value:this.props.nameEdit,onChange:function(t){return e.props.handleEditInputChange(t.target.value)}})),l.a.createElement("td",{className:"text-center"},l.a.createElement("select",{className:"form-control",value:this.props.levelEdit,onChange:function(t){return e.props.handleEditSelectChange(t.target.value)}},this.renderLevel())),l.a.createElement("td",null,l.a.createElement("button",{type:"button",className:"btn btn-default btn-sm marginR5",onClick:function(){return e.props.handleEditClickCancel()}},"Cancel"),l.a.createElement("button",{type:"button",className:"btn btn-success btn-sm",onClick:function(){return e.props.handleEditClickSubmit()}},"Save")))}}]),a}(n.Component),y=(a(37),[]),k=0;k<g.length;k++)-1===y.indexOf(g[k].level)&&y.push(g[k].level);y.sort((function(e,t){return e-t}));var w=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleShowAlert=function(e){n.setState({showAlert:!0,titleAlert:e.name,idAlert:e.id})},n.handleDeleteItem=function(){var e=n.state,t=e.idAlert,a=e.items;if(a.length>0){for(var l=0;l<a.length;l++)if(a[l].id===t){a.splice(l,1);break}n.setState({items:a})}n.setState({showAlert:!1,isSearch:!1,valueSearch:""})},n.handleEditItem=function(e,t){n.setState({indexEdit:e,idEdit:t.id,nameEdit:t.name,levelEdit:t.level})},n.handleEditClickCancel=function(){n.setState({idEdit:""})},n.handleEditInputChange=function(e){n.setState({nameEdit:e})},n.handleEditSelectChange=function(e){n.setState({levelEdit:e})},n.handleEditClickSubmit=function(){var e=n.state,t=e.items,a=e.idEdit,l=e.nameEdit,r=e.levelEdit;if(t.length>0)for(var c=0;c<t.length;c++)if(t[c].id===a){t[c].name=l,t[c].level=+r;break}n.setState({idEdit:""})},n.handleShowForm=function(){n.setState({showForm:!n.state.showForm})},n.handleFormInputChange=function(e){n.setState({valueItem:e})},n.handleFormSelectChange=function(e){n.setState({levelItem:e})},n.handleFormClickCancel=function(){n.setState({valueItem:"",levelItem:0})},n.handleFormClickSubmit=function(){var e=n.state,t=e.valueItem,a=e.levelItem,l=e.items;if(0===t.trim())return!1;var r={id:Object(h.a)(),name:t,level:+a};l.push(r),n.setState({items:l,valueItem:"",levelItem:0,showForm:!1,isSearch:!1,valueSearch:""})},n.handleSort=function(e,t){var a=n.state.items;if(""!==t&&""!==e){switch("".concat(e,"-").concat(t)){default:break;case"name-asc":a.sort(n.compareValues("name","asc"));break;case"name-desc":a.sort(n.compareValues("name","desc"));break;case"level-desc":a.sort(n.compareValues("level","asc"));break;case"level-asc":a.sort(n.compareValues("level","desc"))}n.setState({items:a,sortType:e,sortOrder:t})}},n.compareValues=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return function(a,n){if(!a.hasOwnProperty(e)||!n.hasOwnProperty(e))return 0;var l="string"===typeof a[e]?a[e].toUpperCase():a[e],r="string"===typeof n[e]?n[e].toUpperCase():n[e],c=0;return l>r?c=1:l<r&&(c=-1),"desc"===t?-1*c:c}},n.handleSearch=function(e){var t=n.state.items,a=Object(o.a)(t),l=[];if(e.length<=0)n.setState({isSearch:!1});else{var r,c=Object(i.a)(a);try{for(c.s();!(r=c.n()).done;){var s=r.value;s.name.toLowerCase().indexOf(e.toLowerCase())>-1&&l.push(s)}}catch(m){c.e(m)}finally{c.f()}n.setState({isSearch:!0})}n.setState({itemsSearch:l,valueSearch:e})},n.renderItem=function(){var e=n.state,t=e.items,a=e.idEdit,r=e.indexEdit,c=e.nameEdit,i=e.levelEdit,o=e.arrayLevel,s=e.isSearch,m=e.itemsSearch;return s&&(t=m),0===t.length?l.a.createElement(S,{item:0}):t.map((function(e,t){return e.id===a?l.a.createElement(C,{key:t,indexEdit:r,nameEdit:c,levelEdit:i,arrayLevel:o,handleEditClickCancel:n.handleEditClickCancel,handleEditInputChange:n.handleEditInputChange,handleEditSelectChange:n.handleEditSelectChange,handleEditClickSubmit:n.handleEditClickSubmit}):l.a.createElement(S,{index:t+1,item:e,key:e.id,handleShowAlert:n.handleShowAlert,handleEditItem:n.handleEditItem})}))},n.state={items:g,showAlert:!1,titleAlert:"",idAlert:"",indexEdit:0,idEdit:"",nameEdit:"",levelEdit:0,arrayLevel:y,showForm:!1,valueItem:"",levelItem:0,sortType:"",sortOrder:"",valueSearch:"",isSearch:!1,itemsSearch:[]},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement(v.a,{show:this.state.showAlert,title:"Delete Item?",text:this.state.titleAlert,showCancelButton:!0,onOutsideClick:function(){return e.setState({showAlert:!1})},onEscapeKey:function(){return e.setState({showAlert:!1})},onCancel:function(){return e.setState({showAlert:!1})},onConfirm:function(){return e.handleDeleteItem()}}),l.a.createElement("div",{className:"page-header"},l.a.createElement("h1",null,"Project 01 - ToDo List ",l.a.createElement("small",null,"ReactJS"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-4 col-sm-4 col-md-4 col-lg-4"},l.a.createElement(E,{valueSearch:this.state.valueSearch,handleSearch:this.handleSearch})),l.a.createElement("div",{className:"col-xs-3 col-sm-3 col-md-3 col-lg-3"},l.a.createElement(b,{sortType:this.state.sortType,sortOrder:this.state.sortOrder,handleSort:this.handleSort})),l.a.createElement("div",{className:"col-xs-5 col-sm-5 col-md-5 col-lg-5"},l.a.createElement("button",{type:"button",className:"btn btn-info btn-block marginB10",onClick:this.handleShowForm},this.state.showForm?"Close Item":"Add Item"))),l.a.createElement("div",{className:"row marginB10"},l.a.createElement("div",{className:"col-md-offset-7 col-md-5"},l.a.createElement(f,{showForm:this.state.showForm,arrayLevel:this.state.arrayLevel,valueItem:this.state.valueItem,handleFormInputChange:this.handleFormInputChange,levelItem:this.state.levelItem,handleFormSelectChange:this.handleFormSelectChange,handleFormClickCancel:this.handleFormClickCancel,handleFormClickSubmit:this.handleFormClickSubmit}))),l.a.createElement("div",{className:"panel panel-success"},l.a.createElement("div",{className:"panel-heading"},"List Item"),l.a.createElement("table",{className:"table table-hover "},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{style:{width:"10%"},className:"text-center"},"#"),l.a.createElement("th",null,"Name"),l.a.createElement("th",{style:{width:"15%"},className:"text-center"},"Level"),l.a.createElement("th",{style:{width:"15%"}},"Action"))),l.a.createElement("tbody",null,this.renderItem()))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.fd957f1f.chunk.js.map