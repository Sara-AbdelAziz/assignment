(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(48)},27:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);a(18),a(19),a(20);var n=a(0),i=a.n(n),o=a(16),c=a.n(o),r=(a(27),a(3)),l=a(4),s=a(6),m=a(5),d=a(7),u=function(e){return i.a.createElement("div",null,e.items.map(function(t,a){return i.a.createElement("div",{key:a},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-3"},"Name:"),t.editing?i.a.createElement("div",{className:"col-lg-9"},i.a.createElement("input",{type:"text",className:"width-70",value:t.name,onChange:function(a){return e.onChangeItem(a,t,"name",e.categoryId)}}),i.a.createElement("button",{className:"sm-font float-end",onClick:function(){return e.onSaveItem(t,e.categoryId)}},"save")):i.a.createElement("div",{className:"col-lg-9"},t.name,i.a.createElement("button",{onClick:function(){return e.onEditItem(t,e.categoryId)},className:"sm-font float-end m-lr-5"},"edit"),i.a.createElement("button",{onClick:function(){return e.onDeleteItem(t,e.categoryId)},className:"sm-font float-end m-lr-5"},"delete"))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-3"},"Description:"),t.editing?i.a.createElement("div",{className:"col-lg-9"},i.a.createElement("input",{type:"text",className:"width-70",value:t.description,onChange:function(a){return e.onChangeItem(a,t,"description",e.categoryId)}}),i.a.createElement("button",{className:"sm-font none",onClick:function(){return e.onSaveItem(t,e.categoryId)}},"save")):i.a.createElement("div",{className:"col-lg-9"},t.description,i.a.createElement("button",{onClick:function(){return e.onEditItem(t,e.categoryId)},className:"sm-font none"},"edit"))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-3"},"Price:"),t.editing?i.a.createElement("div",{className:"col-lg-9"},i.a.createElement("input",{type:"text",className:"width-70",value:t.price,onChange:function(a){return e.onChangeItem(a,t,"price",e.categoryId)}}),i.a.createElement("button",{className:"sm-font none",onClick:function(){return e.onSaveItem(t,e.categoryId)}},"save")):i.a.createElement("div",{className:"col-lg-9"},t.price,i.a.createElement("button",{onClick:function(){return e.onEditItem(t,e.categoryId)},className:"sm-font none"},"edit"))),i.a.createElement("hr",null))}))},g=function(e){return i.a.createElement("div",null,e.categories.map(function(t,a){return i.a.createElement("div",{key:a,className:"card"},i.a.createElement("div",{className:"card-header",id:"heading"+a},t.editing?i.a.createElement("div",null,i.a.createElement("input",{type:"text",className:"width-70",value:t.name,onChange:function(a){return e.onChangeCategory(a,t)}}),i.a.createElement("button",{className:"sm-font float-end",onClick:function(){return e.onSave(t)}},"save")):i.a.createElement("h2",{className:"mb-0"},i.a.createElement("button",{className:"btn btn-link collapsed",type:"button","data-toggle":"collapse","data-target":"#collapse"+a,"aria-expanded":"false","aria-controls":"collapse"+a},t.name),i.a.createElement("button",{onClick:function(){return e.onEdit(t)},className:"sm-font float-end m-lr-5"},"edit"),i.a.createElement("button",{onClick:function(){return e.onDelete(t)},className:"sm-font float-end m-lr-5"},"delete"))),i.a.createElement("div",{id:"collapse"+a,className:"collapse","aria-labelledby":"{'heading'+i}","data-parent":"#accordionExample"},i.a.createElement("div",{className:"card-body"},i.a.createElement(u,{items:t.items,onEditItem:e.onEditItem,onSaveItem:e.onSaveItem,onDeleteItem:e.onDeleteItem,onChangeItem:e.onChangeItem,categoryId:t.id}))))}))},f=a(2),h=a.n(f),v=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){e.setState({currentCategory:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),t.target.parentNode.querySelector("input").value=null,e.state.currentCategory&&fetch("https://my-json-server.typicode.com/Sara-AbdelAziz/data/categories",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:(new Date).getTime(),name:e.state.currentCategory,items:[]})}).then(function(e){return e.json()}).then(function(t){console.log(t);var a=e.state.categories;e.setState({categories:a.concat(t),currentCategory:null})}).catch(function(e){console.log(e)})},e.handleEdit=function(t){var a=e.state.categories.filter(function(e){return e.id==t.id&&(e.editing=!0),e});e.setState({categories:a})},e.handleSave=function(t){var a=e.state.categories.filter(function(e){return e.id==t.id&&(e.editing=!1),e});e.setState({categories:a}),h.a.put("https://my-json-server.typicode.com/Sara-AbdelAziz/data/categories/".concat(t.id),t).then(function(e){})},e.handleChangeCategory=function(t,a){a.name=t.target.value;var n=e.state.categories.filter(function(e){return e.id==a.id&&(e.name=t.target.value),e});e.setState({categories:n})},e.handleDelete=function(t){console.log(t.id),h.a.delete("https://my-json-server.typicode.com/Sara-AbdelAziz/data/categories/".concat(t.id)).then(function(e){});var a=e.state.categories.filter(function(e){return e.id!=t.id});e.setState({categories:a})},e.handleEditItem=function(t,a){var n=e.state.categories.filter(function(e){return e.id==a&&e.items.filter(function(e){e.id==t.id&&(e.editing=!0)}),e});e.setState({categories:n})},e.handleSaveItem=function(t,a){var n=e.state.categories.filter(function(e){return e.id==a&&e.items.filter(function(e){e.id==t.id&&(e.editing=!1)}),e});e.setState({categories:n}),h.a.put("https://my-json-server.typicode.com/Sara-AbdelAziz/data/categories/".concat(a,"?item.").concat(t.id),t).then(function(e){})},e.handleChangeItem=function(t,a,n,i){console.log(n),"name"==n&&(a.name=t.target.value);var o=e.state.categories.filter(function(e){return e.id==i&&e.items.filter(function(e){e.id==a.id&&("name"==n?e.name=t.target.value:"description"==n?e.description=t.target.value:"price"==n&&(e.price=t.target.value))}),e});e.setState({categories:o})},e.handleDeleteItem=function(t,a){h.a.delete("https://my-json-server.typicode.com/Sara-AbdelAziz/data/categories/".concat(a,"?item.").concat(t.id)).then(function(e){});var n=e.state.categories.filter(function(e){if(e.id==a){var n=e.items.filter(function(e){return console.log(t.id+" "+e.id),e.id!=t.id});e.items=n}return e});e.setState({categories:n})},e.state={categories:[],currentCategory:null},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://my-json-server.typicode.com/Sara-AbdelAziz/data/categories").then(function(t){t.data.map(function(e){e.editing=!1,e.items.map(function(e){return e.editing=!1})}),e.setState({categories:t.data})})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("form",{name:"categoryForm",onSubmit:this.handleSubmit},i.a.createElement("label",null,i.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange})),i.a.createElement("button",{type:"submit"},"Add Category")),i.a.createElement("div",{className:"categories accordion",id:"accordionExample"},i.a.createElement(g,{editing:this.state.editing,categories:this.state.categories,onEdit:this.handleEdit,onSave:this.handleSave,onSaveItem:this.handleSaveItem,onEditItem:this.handleEditItem,onDeleteItem:this.handleDeleteItem,onChangeCategory:this.handleChangeCategory,onChangeItem:this.handleChangeItem,onDelete:this.handleDelete})))}}]),t}(n.Component),p=(a(47),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:" m-tb-20"},i.a.createElement(v,null)))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.6043c237.chunk.js.map