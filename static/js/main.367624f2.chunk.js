(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,n,t){e.exports=t(18)},16:function(e,n,t){},17:function(e,n,t){},18:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(1),i=t.n(o),l=(t(16),t(6)),s=t(7),c=t(9),d=t(8),h=t(2),u=t(10),m=function(e){return r.a.createElement("div",{className:"editorContainer"},r.a.createElement("label",{htmlFor:"editor"},"Editor"),r.a.createElement("textarea",{id:"editor",placeholder:e.placeholder,onChange:e.onChange}))},f=t(3),w=t.n(f);(new w.a.Renderer).link=function(e,n,t){return'<a target="_blank" href="'.concat(e,'">').concat(t)+"</a>"};var g=function(e){return r.a.createElement("div",{className:"previewContainer"},r.a.createElement("label",{htmlFor:"preview"},"Preview"),r.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:{__html:w()(e.text)}}))},v=(t(17),"# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n"),b=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(c.a)(this,Object(d.a)(n).call(this,e))).state={textareaInput:v,markedInput:v},t.handleChange=t.handleChange.bind(Object(h.a)(t)),t}return Object(u.a)(n,e),Object(s.a)(n,[{key:"handleChange",value:function(e){this.setState({textareaInput:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"Markdown Previewer"),r.a.createElement(m,{placeholder:this.state.textareaInput,onChange:this.handleChange}),r.a.createElement(g,{text:this.state.textareaInput}))}}]),n}(a.Component),p=b,k=document.getElementById("root");i.a.render(r.a.createElement(b,null),k);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.367624f2.chunk.js.map