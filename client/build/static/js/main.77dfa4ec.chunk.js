(this["webpackJsonpinvoice-app"]=this["webpackJsonpinvoice-app"]||[]).push([[0],{26:function(e,t,n){},28:function(e,t,n){e.exports={"form-select":"header_form-select__1uBAM"}},29:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),c=n(19),s=n.n(c),r=(n(26),n(20)),o=n(2),l=n(8),d=n(0);var m=function(){return Object(d.jsxs)("div",{className:"sidebar d-flex flex-column flex-shrink-0 bg-light",style:{maxWidth:"4.5rem"},children:[Object(d.jsx)("ul",{className:"nav nav-pills nav-flush flex-column mb-auto text-center",children:Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{href:"http://www.google.com",className:"nav-link active py-3 border-bottom","aria-current":"page",title:"Home","data-bs-toggle":"tooltip","data-bs-placement":"right"})})}),Object(d.jsxs)("div",{className:"dropdown border-top",children:[Object(d.jsx)("a",{href:"#",className:"d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle",id:"dropdownUser","data-bs-toggle":"dropdown","aria-expanded":"false",children:Object(d.jsx)("img",{src:"https://github.com/mdo.png",alt:"mdo",width:"24",height:"24",className:"rounded-circle"})}),Object(d.jsxs)("ul",{className:"dropdown-menu text-small shadow","aria-labelledby":"dropdownUser",children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"dropdown-item",href:"http://www.google.com",children:"New project..."})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"dropdown-item",href:"http://www.google.com",children:"Sign out"})})]})]})]})};n(28);function u(e){var t=Object(i.useContext)(f),n=(t.toggle,t.setToggle);return Object(d.jsxs)("header",{children:[Object(d.jsx)("h1",{children:" Invoices "}),Object(d.jsxs)("select",{className:"header--select form-select form-select-sm mb-3","aria-label":".form-select-sm example",children:[Object(d.jsx)("option",{defaultValue:!0,children:"Filter"}),Object(d.jsx)("option",{value:"1",children:"One"}),Object(d.jsx)("option",{value:"2",children:"Two"}),Object(d.jsx)("option",{value:"3",children:"Three"})]}),Object(d.jsx)("button",{type:"button",className:"btn btn-lg btn-primary",onClick:function(){return n((function(e){return!e}))},children:"New Invoice"})]})}var j=[{id:"RT3080",createdAt:"2021-08-18",paymentDue:"2021-08-19",description:"Re-branding",paymentTerms:1,clientName:"Jensen Huang",clientEmail:"jensenh@mail.com",status:"paid",senderAddress:{street:"19 Union Terrace",city:"London",postCode:"E1 3EZ",country:"United Kingdom"},clientAddress:{street:"106 Kendell Street",city:"Sharrington",postCode:"NR24 5WQ",country:"United Kingdom"},items:[{name:"Brand Guidelines",quantity:1,price:1800.9,total:1800.9}],total:1800.9},{id:"XM9141",createdAt:"2021-08-21",paymentDue:"2021-09-20",description:"Graphic Design",paymentTerms:30,clientName:"Alex Grim",clientEmail:"alexgrim@mail.com",status:"pending",senderAddress:{street:"19 Union Terrace",city:"London",postCode:"E1 3EZ",country:"United Kingdom"},clientAddress:{street:"84 Church Way",city:"Bradford",postCode:"BD1 9PB",country:"United Kingdom"},items:[{name:"Banner Design",quantity:1,price:156,total:156},{name:"Email Design",quantity:2,price:200,total:400}],total:556},{id:"RG0314",createdAt:"2021-09-24",paymentDue:"2021-10-01",description:"Website Redesign",paymentTerms:7,clientName:"John Morrison",clientEmail:"jm@myco.com",status:"paid",senderAddress:{street:"19 Union Terrace",city:"London",postCode:"E1 3EZ",country:"United Kingdom"},clientAddress:{street:"79 Dover Road",city:"Westhall",postCode:"IP19 3PF",country:"United Kingdom"},items:[{name:"Website Redesign",quantity:1,price:14002.33,total:14002.33}],total:14002.33},{id:"RT2080",createdAt:"2021-10-11",paymentDue:"2021-10-12",description:"Logo Concept",paymentTerms:1,clientName:"Alysa Werner",clientEmail:"alysa@email.co.uk",status:"pending",senderAddress:{street:"19 Union Terrace",city:"London",postCode:"E1 3EZ",country:"United Kingdom"},clientAddress:{street:"63 Warwick Road",city:"Carlisle",postCode:"CA20 2TG",country:"United Kingdom"},items:[{name:"Logo Sketches",quantity:1,price:102.04,total:102.04}],total:102.04},{id:"AA1449",createdAt:"2021-10-7",paymentDue:"2021-10-14",description:"Re-branding",paymentTerms:7,clientName:"Mellisa Clarke",clientEmail:"mellisa.clarke@example.com",status:"pending",senderAddress:{street:"19 Union Terrace",city:"London",postCode:"E1 3EZ",country:"United Kingdom"},clientAddress:{street:"46 Abbey Row",city:"Cambridge",postCode:"CB5 6EG",country:"United Kingdom"},items:[{name:"New Logo",quantity:1,price:1532.33,total:1532.33},{name:"Brand Guidelines",quantity:1,price:2500,total:2500}],total:4032.33},{id:"TY9141",createdAt:"2021-10-01",paymentDue:"2021-10-31",description:"Landing Page Design",paymentTerms:30,clientName:"Thomas Wayne",clientEmail:"thomas@dc.com",status:"pending",senderAddress:{street:"19 Union Terrace",city:"London",postCode:"E1 3EZ",country:"United Kingdom"},clientAddress:{street:"3964  Queens Lane",city:"Gotham",postCode:"60457",country:"United States of America"},items:[{name:"Web Design",quantity:1,price:6155.91,total:6155.91}],total:6155.91},{id:"FV2353",createdAt:"2021-11-05",paymentDue:"2021-11-12",description:"Logo Re-design",paymentTerms:7,clientName:"Anita Wainwright",clientEmail:"",status:"draft",senderAddress:{street:"19 Union Terrace",city:"London",postCode:"E1 3EZ",country:"United Kingdom"},clientAddress:{street:"",city:"",postCode:"",country:""},items:[{name:"Logo Re-design",quantity:1,price:3102.04,total:3102.04}],total:3102.04}];function p(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(i.useEffect)((function(){a(j)}),[]),Object(d.jsx)("ul",{className:"invoice-container",children:n.map((function(e){return Object(d.jsx)("li",{children:e.id},e.id.toString())}))})}n(29);function b(e){var t=Object(i.useContext)(f),n=t.toggle;t.setToggle;return n?Object(d.jsx)("div",{className:"background",children:Object(d.jsxs)("form",{className:"invoice-form",children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(d.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),Object(d.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(d.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword1"})]}),Object(d.jsxs)("div",{className:"mb-3 form-check",children:[Object(d.jsx)("input",{type:"checkbox",className:"form-check-input",id:"exampleCheck1"}),Object(d.jsx)("label",{className:"form-check-label",htmlFor:"exampleCheck1",children:"Check me out"})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})}):Object(d.jsx)("h3",{children:" Not found "})}var h=n(15),g="LOADING",x="SUCCESS",y="ERROR",O=function(){var e=function(e){var t=a.a.useState({state:g,error:"",data:[]}),n=Object(l.a)(t,2),i=n[0],c=n[1],s=function(e){return c(Object(h.a)(Object(h.a)({},i),e))};return a.a.useEffect((function(){s({state:g}),fetch(e).then((function(e){return e.json()})).then((function(e){s({state:x,data:e})})).catch((function(){s({state:y,error:"fetch failed"})}))}),[]),i}("http://localhost:3001/api/courses"),t=e.state,n=e.error,i=e.data;switch(t){case y:return Object(d.jsxs)("p",{children:["ERROR: ",n||"General error"]});case x:return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{children:"Data:"}),Object(d.jsx)("ul",{children:i.map((function(e){return Object(d.jsx)("li",{children:e.course})}))})]});default:return Object(d.jsx)("p",{children:"loading.."})}},f=a.a.createContext();var v=function(){var e=Object(i.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)(f.Provider,{value:{toggle:n,setToggle:a},children:[Object(d.jsx)(u,{}),Object(d.jsxs)("main",{style:{display:"flex",background:"beige"},children:[Object(d.jsx)(m,{}),Object(d.jsx)(p,{}),Object(d.jsx)(b,{}),Object(d.jsx)(O,{})]})]})};function N(){return Object(d.jsx)(r.a,{children:Object(d.jsxs)(o.a,{exact:!0,path:"/",children:[" ",Object(d.jsx)(v,{})," "]})})}var w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),i(e),a(e),c(e),s(e)}))};n(35),n(36);s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),w()}},[[58,1,2]]]);
//# sourceMappingURL=main.77dfa4ec.chunk.js.map