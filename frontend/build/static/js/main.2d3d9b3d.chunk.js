(this.webpackJsonpgt_iphone=this.webpackJsonpgt_iphone||[]).push([[0],{26:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),r=a(17),n=a.n(r),l=(a(26),a(8)),i=a(2),o=a(18),j=a(19),d=new(function(){function e(t){var a=t.baseUrl,s=t.headers;Object(o.a)(this,e),this.baseUrl=a,this.headers=s}return Object(j.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"sendMessageTg",value:function(){return fetch("".concat(this.baseUrl,"/telegram/sendmessage"),{method:"POST",headers:this.headers,body:JSON.stringify({text:"\u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0438\u0437 \u043d\u043e\u0434\u0430"})}).then(this._getResponseData)}},{key:"sendFotoTg",value:function(e){return fetch("".concat(this.baseUrl,"/telegram/sendfoto"),{method:"POST",body:e}).then(this._getResponseData)}}]),e}())({baseUrl:"https://api.goldentree.su",headers:{"Content-Type":"multipart/form-data"}}),b=a.p+"static/media/logo.b897ae3c.svg",m=a.p+"static/media/burger.b1b171b3.svg",h=a.p+"static/media/cart.4703dabf.svg",_=(a.p,a(5)),x=a(0);var f=function(e){return Object(x.jsxs)("header",{className:"header",children:[Object(x.jsx)("div",{className:"header__container",children:Object(x.jsxs)("div",{className:"header__top",children:[Object(x.jsxs)("div",{className:"header__top-left",children:[Object(x.jsx)("p",{className:"header__telephone",children:"8 (800) 500-57-96"}),Object(x.jsx)("p",{className:"header__text",children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043a\u043e\u0440\u0435\u0439\u0441\u043a\u043e\u0439 \u043a\u043e\u0441\u043c\u0435\u0442\u0438\u043a\u0438"})]}),Object(x.jsx)(_.b,{to:"/promo",children:Object(x.jsx)("img",{className:"header__logo",src:b,alt:""})}),Object(x.jsxs)("ul",{className:"header__top-right-links",children:[Object(x.jsx)("li",{children:Object(x.jsx)(_.b,{to:"/promo",activeClassName:"",className:"header__top-right-link",children:"\u0420\u043e\u0437\u044b\u0433\u0440\u044b\u0448"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"https://www.wildberries.ru/seller/8936",target:"_blank",rel:"noreferrer",activeClassName:"",className:"header__top-right-link",children:"\u041c\u044b \u043d\u0430 WB"})}),Object(x.jsx)("li",{children:Object(x.jsx)(_.b,{to:"/cards",activeClassName:"",className:"header__top-right-link",children:"\u041b\u0443\u0447\u0448\u0438\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043d\u0430 WB"})})]})]})}),Object(x.jsxs)("div",{className:"header__mobile-container",children:[Object(x.jsx)("img",{className:"header__mobile-burger",src:m,alt:"",onClick:e.burger}),Object(x.jsx)("img",{className:"header__mobile-logo",src:b,alt:""}),Object(x.jsx)("img",{className:"header__mobile-cart",src:h,alt:""})]})]})},O=a(10),u=a(9);var p=a.p+"static/media/arrow2.780d3280.svg";var g=function(e){var t=c.a.useState("\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u043e\u0442\u043e/\u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442 \u0441 \u043e\u0442\u0437\u044b\u0432\u043e\u043c \u043d\u0430 \u043a\u0443\u043f\u043b\u0435\u043d\u043d\u044b\u0439 \u0442\u043e\u0432\u0430\u0440"),a=Object(l.a)(t,2),r=a[0],n=a[1],i=c.a.useState(!1),o=Object(l.a)(i,2),j=o[0],d=o[1],b=c.a.useRef(null),m=function(){var e=c.a.useState({surname:"",name:"",patronymic:"",instagram:"",telephone:"",code:"",feedbackWb:""}),t=Object(l.a)(e,2),a=t[0],r=t[1],n=c.a.useState({}),i=Object(l.a)(n,2),o=i[0],j=i[1],d=c.a.useState(!1),b=Object(l.a)(d,2),m=b[0],h=b[1],_=Object(s.useCallback)((function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];r(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),j(e),h(t)}),[r,j,h]);return{values:a,handleChange:function(e){var t=e.target,s=t.name,c=t.value;"instagram"===s&&c.startsWith("@@")&&(c=c.replace("@","")),r(Object(u.a)(Object(u.a)({},a),{},Object(O.a)({},s,c))),h(t.closest("form").checkValidity()),j(Object(u.a)(Object(u.a)({},o),{},Object(O.a)({},s,t.validationMessage)))},errors:o,isValid:m,resetForm:_,handleInstagram:function(e){var t=e.target.name;""!==a.instagram&&a.instagram.startsWith("@")||r(Object(u.a)(Object(u.a)({},a),{},Object(O.a)({},t,"@")))},handleChangeFile:function(e){var t,s=e.target,c=s.name;void 0===c&&(c="feedbackWb"),t=void 0===t?"none":s.files[0].name,r(Object(u.a)(Object(u.a)({},a),{},Object(O.a)({},c,t))),j(Object(u.a)(Object(u.a)({},o),{},Object(O.a)({},c,s.validationMessage))),h(s.closest("form").checkValidity())}}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"info-form",children:[Object(x.jsxs)("h2",{className:"info-form__title",onClick:function(){d(!j)},children:["\u0423\u0441\u043b\u043e\u0432\u0438\u044f \u043a\u043e\u043d\u043a\u0443\u0440\u0441\u0430",Object(x.jsx)("img",{className:"info-form__arrow ".concat(!0===j?"info-form__arrow_transform":""),src:p,alt:"\u0441\u0442\u0440\u0435\u043b\u043a\u0430"})]}),Object(x.jsxs)("div",{className:"info-form__text-block ".concat(!0===j?"info-form__text-block_active":""),children:[Object(x.jsxs)("p",{className:"info-form__text",children:[Object(x.jsx)("b",{children:"\u0412 \u0441\u0432\u044f\u0437\u0438 \u0441 \u043d\u0435\u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u043e\u0439 \u044d\u043a\u043e\u043d\u043e\u043c\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0435\u0439 \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0440\u043e\u0437\u044b\u0433\u0440\u044b\u0448\u0430 \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0438\u0442\u0441\u044f \u043d\u0430 \u043d\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0439 \u0441\u0440\u043e\u043a (\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u043e\u0447\u043d\u043e \u043d\u0430 01.06.2022). \u041c\u044b \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0435\u043c \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u0432\u0430\u0448\u0438  \u0437\u0430\u044f\u0432\u043a\u0438 \u043d\u0430 \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u043a\u043e\u043d\u043a\u0443\u0440\u0441\u0435. \u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u0438\u043c \u0437\u0430 \u0434\u043e\u0432\u0435\u0440\u0438\u0435, \u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u0438 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u0432 \u043d\u0430\u0448\u0438\u0445 \u0441\u043e\u0446 \u0441\u0435\u0442\u044f\u0445."}),"."]}),Object(x.jsxs)("p",{className:"info-form__text",children:["\u041f\u0420\u0418\u0412\u0415\u0422, \u0411\u041b\u0410\u0413\u041e\u0414\u0410\u0420\u0418\u041c \u0422\u0415\u0411\u042f \u0417\u0410 \u041f\u041e\u041a\u0423\u041f\u041a\u0423 \u0418 \u0425\u041e\u0422\u0418\u041c \u041d\u0415\u041c\u041d\u041e\u0413\u041e \u0420\u0410\u0421\u0421\u041a\u0410\u0417\u0410\u0422\u042c \u041e\u0411 \u0423\u0421\u041b\u041e\u0412\u0418\u042f\u0425 \u041a\u041e\u041d\u041a\u0423\u0420\u0421\u0410 \u041e\u0422 \u041e\u041e\u041e \xab\u0413\u041e\u041b\u0414\u0415\u041d \u0422\u0420\u0418\xbb. \u041f\u0420\u041e\u0421\u0418\u041c \u0422\u0415\u0411\u042f \u0412\u041d\u0418\u041c\u0410\u0422\u0415\u041b\u042c\u041d\u041e \u041e\u0417\u041d\u0410\u041a\u041e\u041c\u0418\u0422\u042c\u0421\u042f \u0421 \u0423\u0421\u041b\u041e\u0412\u0418\u042f\u041c\u0418 \u041a\u041e\u041d\u041a\u0423\u0420\u0421\u0410 \u0418 \u0412\u042b\u041f\u041e\u041b\u041d\u0418\u0422\u042c \u0412\u0421\u0415-\u0412\u0421\u0415 \u0428\u0410\u0413\u0418, \u0427\u0422\u041e\u0411\u042b \u041f\u041e\u041b\u0423\u0427\u0418\u0422\u042c \u0412\u041e\u0417\u041c\u041e\u0416\u041d\u041e\u0421\u0422\u042c \u0412\u042b\u0418\u0413\u0420\u0410\u0422\u042c ",Object(x.jsx)("b",{children:"IPHONE 13"}),"."]}),Object(x.jsxs)("p",{className:"info-form__text",children:[Object(x.jsx)("b",{children:"\u0428\u0410\u0413 1. "}),Object(x.jsx)("br",{}),'\u0412 \u0422\u041e\u0412\u0410\u0420\u0410\u0425 \u041e\u0422 \u041f\u041e\u0421\u0422\u0410\u0412\u0429\u0418\u041a\u0410 \u041e\u041e\u041e "\u0413\u041e\u041b\u0414\u0415\u041d \u0422\u0420\u0418" \u041d\u0410\u0419\u0414\u0418 \u0412\u041b\u041e\u0416\u0415\u041d\u0418\u0415 \u0421 \u0423\u041d\u0418\u041a\u0410\u041b\u042c\u041d\u042b\u041c \u041a\u041e\u0414\u041e\u041c *\u041d\u0410 \u0414\u0410\u041d\u041d\u042b\u0419 \u041c\u041e\u041c\u0415\u041d\u0422 \u041d\u0415 \u0412\u0421\u0415 \u0422\u041e\u0412\u0410\u0420\u042b \u041e\u0422 \u041f\u041e\u0421\u0422\u0410\u0412\u0429\u0418\u041a\u0410 \u041e\u041e\u041e \xab\u0413\u041e\u041b\u0414\u0415\u041d \u0422\u0420\u0418\xbb \u0421\u041e\u0414\u0415\u0420\u0416\u0410\u0422 \u0412\u041b\u041e\u0416\u0415\u041d\u0418\u0415 \u0421 \u0423\u041d\u0418\u041a\u0410\u041b\u042c\u041d\u042b\u041c \u041a\u041e\u0414\u041e\u041c.']}),Object(x.jsxs)("p",{className:"info-form__text",children:[Object(x.jsx)("b",{children:"\u0428\u0410\u04132. "}),Object(x.jsx)("br",{}),"\u041e\u0421\u0422\u0410\u0412\u042c \u041e\u0422\u0417\u042b\u0412 \u041d\u0410 \u041f\u0420\u0418\u041e\u0411\u0420\u0415\u0422\u0415\u041d\u041d\u042b\u0419 \u0422\u041e\u0412\u0410\u0420 \u041d\u0410 \u0421\u0410\u0419\u0422\u0415 WILDBERRIES \u0418 \u0421\u0414\u0415\u041b\u0410\u0419 \u0421\u041a\u0420\u0418\u041d\u0428\u041e\u0422 \u041e\u0422\u0417\u042b\u0412\u0410 *\u0415\u0421\u041b\u0418 \u0412\u042b \u041a\u0423\u041f\u0418\u041b\u0418 \u0422\u041e\u0412\u0410\u0420 \u041f\u041e\u0412\u0422\u041e\u0420\u041d\u041e \u0418 \u0423\u0416\u0415 \u041e\u0421\u0422\u0410\u0412\u041b\u042f\u041b\u0418 \u041e\u0422\u0417\u042b\u0412, \u0422\u041e \u041d\u0415\u041e\u0411\u0425\u041e\u0414\u0418\u041c\u041e \u041f\u0420\u0415\u0414\u041e\u0421\u0422\u0410\u0412\u0418\u0422\u042c \u0421\u041a\u0420\u0418\u041d\u0428\u041e\u0422 \u041f\u0420\u041e\u0428\u041b\u041e\u0413\u041e \u041e\u0422\u0417\u042b\u0412\u0410. \u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415: \u041d\u0410\u0428 \u041c\u0415\u041d\u0415\u0414\u0416\u0415\u0420 \u041c\u041e\u0416\u0415\u0422 \u0417\u0410\u041f\u0420\u041e\u0421\u0418\u0422\u042c \u041f\u041e\u0414\u0422\u0412\u0415\u0420\u0416\u0414\u0415\u041d\u0418\u0415 \u0412\u0410\u0428\u0415\u0419 \u041b\u0418\u0427\u041d\u041e\u0421\u0422\u0418 \u0412 \u041f\u0420\u041e\u0424\u0418\u041b\u0415 \u0412\u0411."]}),Object(x.jsxs)("p",{className:"info-form__text",children:[Object(x.jsx)("b",{children:"\u0428\u0410\u0413 3. "}),Object(x.jsx)("br",{}),"\u041f\u041e\u0414\u041f\u0418\u0428\u0418\u0421\u042c \u041d\u0410 \u041d\u0410\u0428 \u0410\u041a\u041a\u0410\u0423\u041d\u0422 \u0412 \u0418\u041d\u0421\u0422\u0410\u0413\u0420\u0410\u041c: ",Object(x.jsx)("a",{className:"info-form__link",href:"https://www.instagram.com/goldentree_ru/",target:"_blank",rel:"noreferrer",children:"@GOLDENTREE_RU"})]}),Object(x.jsxs)("p",{className:"info-form__text",children:[Object(x.jsx)("b",{children:"\u0428\u0410\u0413 4. "}),Object(x.jsx)("br",{}),"\u041e\u0422\u0421\u041a\u0410\u041d\u0418\u0420\u0423\u0419 QR-\u041a\u041e\u0414 \u0412\u041d\u0423\u0422\u0420\u0418 \u0411\u0420\u041e\u0428\u042e\u0420\u042b \u0418 \u0417\u0410\u041f\u041e\u041b\u041d\u0418 \u0412\u0421\u0415 \u041d\u0415\u041e\u0411\u0425\u041e\u0414\u0418\u041c\u042b\u0415 \u0414\u0410\u041d\u041d\u042b\u0415 \u0414\u041b\u042f \u0423\u0427\u0410\u0421\u0422\u0418\u042f \u0412 \u041a\u041e\u041d\u041a\u0423\u0420\u0421\u0415: \u0424\u0410\u041c\u0418\u041b\u0418\u042f, \u0418\u041c\u042f, \u041e\u0422\u0427\u0415\u0421\u0422\u0412\u041e, \u0410\u041a\u041a\u0410\u0423\u041d\u0422 \u0412 \u0418\u041d\u0421\u0422\u0410\u0413\u0420\u0410\u041c\u0415, \u0422\u0415\u041b\u0415\u0424\u041e\u041d, \u0423\u041d\u0418\u041a\u0410\u041b\u042c\u041d\u042b\u0419 \u041a\u041e\u0414, \u0421\u041a\u0420\u0418\u041d\u0428\u041e\u0422 \u041e\u0422\u0417\u042b\u0412\u0410 \u041d\u0410 \u0422\u041e\u0412\u0410\u0420."]}),Object(x.jsxs)("p",{className:"info-form__text",children:[Object(x.jsx)("b",{children:"\u0428\u0410\u0413 5. "}),Object(x.jsx)("br",{}),"\u0420\u041e\u0417\u042b\u0413\u0420\u042b\u0428 \u041f\u0420\u041e\u0419\u0414\u0415\u0422 \u041e\u0420\u0418\u0415\u041d\u0422\u0418\u0420\u041e\u0412\u041e\u0427\u041d\u041e ",Object(x.jsx)("b",{children:"01.06.2022"})," \u0412 \u041f\u0420\u042f\u041c\u041e\u041c \u042d\u0424\u0418\u0420\u0415 \u0412 \u0418\u041d\u0421\u0422\u0410\u0413\u0420\u0410\u041c-\u0410\u041a\u041a\u0410\u0423\u041d\u0422\u0415 ",Object(x.jsx)("a",{className:"info-form__link",href:"https://www.instagram.com/goldentree_ru/",target:"_blank",rel:"noreferrer",children:"@GOLDENTREE_RU"}),". ",Object(x.jsx)("br",{}),"\u2022 \u041a\u0410\u0416\u0414\u042b\u0419 \u041f\u041e\u041a\u0423\u041f\u0410\u0422\u0415\u041b\u042c \u041c\u041e\u0416\u0415\u0422 \u0417\u0410\u0420\u0415\u0413\u0418\u0421\u0422\u0420\u0418\u0420\u041e\u0412\u0410\u0422\u042c \u041d\u0415\u041e\u0413\u0420\u0410\u041d\u0418\u0427\u0415\u041d\u041d\u041e\u0415 \u041a\u041e\u041b\u0418\u0427\u0415\u0421\u0422\u0412\u041e \u0423\u041d\u0418\u041a\u0410\u041b\u042c\u041d\u042b\u0425 \u041a\u041e\u0414\u041e\u0412, \u041f\u041e\u042d\u0422\u041e\u041c\u0423 \u0427\u0415\u041c \u0411\u041e\u041b\u042c\u0428\u0415 \u041f\u041e\u041a\u0423\u041f\u041e\u041a \u0412\u042b \u0421\u041e\u0412\u0415\u0420\u0428\u0410\u0415\u0422\u0415, \u0422\u0415\u041c \u0411\u041e\u041b\u042c\u0428\u0415 \u0412\u0415\u0420\u041e\u042f\u0422\u041d\u041e\u0421\u0422\u042c \u0412\u042b\u0418\u0413\u0420\u0410\u0422\u042c IPHONE 13. ",Object(x.jsx)("br",{}),"\u2022 \u041a\u0410\u0416\u0414\u042b\u0419 \u0417\u0410\u0420\u0415\u0413\u0418\u0421\u0422\u0420\u0418\u0420\u041e\u0412\u0410\u041d\u041d\u042b\u0419 \u0423\u041d\u0418\u041a\u0410\u041b\u042c\u041d\u042b\u0419 \u041a\u041e\u0414 \u041d\u0415 \u0422\u0415\u0420\u042f\u0415\u0422 \u0421\u0412\u041e\u042e \u0410\u041a\u0422\u0423\u0410\u041b\u042c\u041d\u041e\u0421\u0422\u042c \u0412 \u0414\u0410\u041b\u042c\u041d\u0415\u0419\u0428\u0418\u0425 \u0420\u041e\u0417\u042b\u0413\u0420\u042b\u0428\u0410\u0425 \u041e\u0422 \u041f\u041e\u0421\u0422\u0410\u0412\u0429\u0418\u041a\u0410 \u041e\u041e\u041e \xab\u0413\u041e\u041b\u0414\u0415\u041d \u0422\u0420\u0418\xbb. \u0418\u0417 \u0423\u0427\u0410\u0421\u0422\u0418\u042f \u0412 \u0414\u0420\u0423\u0413\u0418\u0425 \u0420\u041e\u0417\u042b\u0413\u0420\u042b\u0428\u0410\u0425 \u041e\u0422 \u041f\u041e\u0421\u0422\u0410\u0412\u0429\u0418\u041a\u0410 \u041e\u041e\u041e \xab\u0413\u041e\u041b\u0414\u0415\u041d \u0422\u0420\u0418\xbb \u0412\u042b\u0411\u042b\u0412\u0410\u0415\u0422 \u0422\u041e\u041b\u042c\u041a\u041e \u0423\u041d\u0418\u041a\u0410\u041b\u042c\u041d\u042b\u0419 \u041a\u041e\u0414 \u0412\u042b\u0418\u0413\u0420\u0410\u0412\u0428\u0415\u0413\u041e \u0423\u0427\u0410\u0421\u0422\u041d\u0418\u041a\u0410. ",Object(x.jsx)("br",{}),"\u2022 \u041e\u041e\u041e \xab\u0413\u041e\u041b\u0414\u0415\u041d \u0422\u0420\u0418\xbb \u0418\u041c\u0415\u0415\u0422 \u041f\u0420\u0410\u0412\u041e \u0417\u0410\u041f\u0420\u0410\u0428\u0418\u0412\u0410\u0422\u042c \u0414\u041e\u041f\u041e\u041b\u041d\u0418\u0422\u0415\u041b\u042c\u041d\u042b\u0415 \u0414\u0410\u041d\u041d\u042b\u0415 \u0414\u041b\u042f \u041f\u041e\u0414\u0422\u0412\u0415\u0420\u0416\u0414\u0415\u041d\u0418\u042f \u041b\u0418\u0427\u041d\u041e\u0421\u0422\u0418 \u0412\u042b\u0418\u0413\u0420\u0410\u0412\u0428\u0418\u0425 \u0423\u0427\u0410\u0421\u0422\u041d\u0418\u041a\u041e\u0412."]})]})]}),Object(x.jsxs)("form",{className:"form",ref:b,onSubmit:function(t){t.preventDefault();var a=new FormData(b.current);e.form(a)},noValidate:!0,children:[Object(x.jsx)("h1",{className:"form__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u0432 \u0440\u043e\u0437\u044b\u0433\u0440\u044b\u0448\u0435"}),Object(x.jsx)("p",{className:"form__info",children:"\u0412\u043d\u0435\u0441\u0438 \u0441\u0432\u043e\u044e \u0424\u0430\u043c\u0438\u043b\u0438\u044e (\u0410-\u044f)"}),Object(x.jsx)("input",{className:"form__text",type:"text",name:"surname",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f*",value:m.values.surname,onChange:m.handleChange,required:!0}),Object(x.jsx)("span",{className:"form-error",children:m.errors.surname}),Object(x.jsx)("p",{className:"form__info",children:"\u0412\u043d\u0435\u0441\u0438 \u0441\u0432\u043e\u0451 \u0418\u043c\u044f (\u0410-\u044f)"}),Object(x.jsx)("input",{className:"form__text",type:"text",name:"name",placeholder:"\u0418\u043c\u044f*",value:m.values.name,onChange:m.handleChange,required:!0}),Object(x.jsx)("span",{className:"form-error",children:m.errors.name}),Object(x.jsx)("p",{className:"form__info",children:"\u0412\u043d\u0435\u0441\u0438 \u0441\u0432\u043e\u0451 \u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e (\u0410-\u044f)"}),Object(x.jsx)("input",{className:"form__text",type:"text",name:"patronymic",placeholder:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e*",value:m.values.patronymic,onChange:m.handleChange,required:!0}),Object(x.jsx)("span",{className:"form-error",children:m.errors.patronymic}),Object(x.jsxs)("p",{className:"form__info",children:["\u041f\u043e\u0434\u043f\u0438\u0448\u0438\u0441\u044c \u043d\u0430 \u043d\u0430\u0448 ",Object(x.jsx)("a",{className:"info-form__link",href:"https://www.instagram.com/goldentree_ru/",target:"_blank",rel:"noreferrer",children:"\u0438\u043d\u0441\u0442\u0430\u0433\u0440\u0430\u043c"})," \u0438 \u0432\u043d\u0435\u0441\u0438 \u0441\u0432\u043e\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 (@xxx)"]}),Object(x.jsx)("input",{className:"form__text",type:"text",name:"instagram",placeholder:"Instagram*",pattern:"@[a-zA-Z0-9._]{1,}",value:m.values.instagram,onClick:m.handleInstagram,onFocus:m.handleClickInsta,onChange:m.handleChange,required:!0}),Object(x.jsx)("span",{className:"form-error",children:m.errors.instagram}),Object(x.jsx)("p",{className:"form__info",children:"\u0412\u043d\u0435\u0441\u0438 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 (0-9) \u043f\u0440\u0438\u043c\u0435\u0440: 89xxxxxxxxx"}),Object(x.jsx)("input",{className:"form__text",type:"tel",name:"telephone",placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d*",pattern:"[0-9]{5,}",value:m.values.telephone,onChange:m.handleChange,required:!0}),Object(x.jsx)("span",{className:"form-error",children:m.errors.telephone}),Object(x.jsx)("p",{className:"form__info",children:"\u0412\u043d\u0435\u0441\u0438 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u0434 \u0441 \u0431\u0440\u043e\u0448\u044e\u0440\u044b (0-9)"}),Object(x.jsx)("input",{className:"form__text",type:"number",name:"code",placeholder:"\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u0434*",value:m.values.code,onChange:m.handleChange,required:!0}),Object(x.jsx)("span",{className:"form-error",children:m.errors.code}),Object(x.jsxs)("label",{className:"form__label",children:[Object(x.jsx)("input",{className:"form__input-file",name:"feedbackWb",type:"file",onChange:function(e){m.handleChangeFile(e),e.target.files.length>0?n(e.target.files[0].name):n("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u043e\u0442\u043e c \u043e\u0442\u0437\u044b\u0432\u043e\u043c")},required:!0}),Object(x.jsx)("span",{className:"form__input-file-visible"}),Object(x.jsx)("span",{className:"form__text-file",children:r})]}),Object(x.jsx)("button",{className:"form__button",type:"submit",disabled:!m.isValid,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(x.jsx)("p",{className:"form-err ".concat(e.err?"form-err_active":""),children:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u043e\u0437\u0436\u0435"})]})};var N=function(e){return Object(x.jsxs)("div",{class:"card",children:[Object(x.jsx)("img",{class:"card__image",src:e.card.image}),Object(x.jsx)("p",{class:"card__title",children:e.card.cardTitle}),Object(x.jsx)("a",{class:"card__bottom",href:e.card.wbLink,children:Object(x.jsx)("button",{class:"card__link-btn",children:"\u041f\u043e\u0441\u043c\u043e\u0441\u0442\u0440\u0435\u0442\u044c \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 WB"})})]})};var v=function(e){return Object(x.jsx)("div",{class:"cards",children:e.cards.map((function(e,t){return Object(x.jsx)(N,{card:e},e._id)}))})},k=a.p+"static/media/vk-social-logotype.b65afadd.svg",w=a.p+"static/media/instagram_social.3f277de4.svg";var C=function(){return Object(x.jsx)("footer",{className:"footer",children:Object(x.jsxs)("div",{className:"footer__container",children:[Object(x.jsxs)("div",{className:"footer__top",children:[Object(x.jsxs)("div",{className:"footer__soc",children:[Object(x.jsx)(_.b,{to:"/promo",children:Object(x.jsx)("img",{className:"footer__logo",src:b,alt:"\u041b\u043e\u0433\u043e"})}),Object(x.jsx)("p",{className:"footer__text",children:"\u041c\u044b \u0432 \u0441\u043e\u0446\u0441\u0435\u0442\u044f\u0445"}),Object(x.jsxs)("ul",{className:"footer__soc-links",children:[Object(x.jsx)("ul",{className:"footer__ul",children:Object(x.jsx)("a",{className:"footer__soc-link",href:"https://vk.com/goldentreeru",target:"_blank",rel:"noreferrer",children:Object(x.jsx)("img",{className:"footer__soc-img",src:k,alt:"vk"})})}),Object(x.jsx)("ul",{className:"footer__ul",children:Object(x.jsx)("a",{className:"footer__soc-link",href:"https://www.instagram.com/goldentree_ru/",target:"_blank",rel:"noreferrer",children:Object(x.jsx)("img",{className:"footer__soc-img",src:w,alt:"instagram"})})})]})]}),Object(x.jsxs)("ul",{className:"footer__menu-links",children:[Object(x.jsx)("h3",{className:"footer__title",children:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f"}),Object(x.jsx)("li",{className:"footer__menu-link",children:"\u041e \u043d\u0430\u0441"}),Object(x.jsx)("li",{className:"footer__menu-link",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})]}),Object(x.jsxs)("div",{className:"footer__contact",children:[Object(x.jsx)("h3",{className:"footer__title",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),Object(x.jsx)("p",{className:"footer__text-contact",children:"\u0420\u043e\u0441\u0441\u0438\u044f, \u0433. \u041c\u043e\u0441\u043a\u0432\u0430, \u0443\u043b. \u041a\u0430\u043d\u0442\u0435\u043c\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f, \u0434.58, 115477"}),Object(x.jsx)("p",{className:"footer__text-contact",children:"\u0420\u0435\u0436\u0438\u043c \u0440\u0430\u0431\u043e\u0442\u044b: 9:00-20:00"}),Object(x.jsx)("a",{className:"footer__text-contact footer__text-contact_bold",href:"#",children:"info@goldentree.ru"}),Object(x.jsx)("p",{className:"footer__text-contact footer__text-contact_bold",children:"8 (800) 500-57-96"})]})]}),Object(x.jsxs)("div",{className:"footer__bottom",children:[Object(x.jsx)("p",{className:"footer__copyright",children:"\xa9 \u041e\u041e\u041e \xab\u0413\u043e\u043b\u0434\u0435\u043d \u0422\u0440\u0438\xbb"}),Object(x.jsx)("a",{className:"footer__link",href:"#",children:"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438"})]})]})})};var y=function(e){return Object(x.jsxs)("div",{className:"success ".concat(e.success?"success_active":""),children:[Object(x.jsx)("h1",{className:"success__title",children:"\u0421\u043f\u0430\u0441\u0438\u0431\u043e!"}),Object(x.jsx)("p",{className:"success__subtitle",children:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"}),Object(x.jsx)("p",{className:"success__text",children:"\u041d\u0438\u0436\u0435 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u043c\u0438 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u043c\u0438"}),Object(x.jsx)("a",{href:"https://www.wildberries.ru/seller/8936",target:"_blank",rel:"noreferrer",activeClassName:"",className:"header__top-right-link",children:Object(x.jsx)("button",{className:"success__button",children:"\u041c\u044b \u043d\u0430 \u0412\u0411"})})]})},E=(a(33),function(e){return Object(x.jsx)("div",{className:"preloader ".concat(e.loading?"preloader_active":""),children:Object(x.jsx)("div",{className:"preloader__container",children:Object(x.jsx)("span",{className:"preloader__round"})})})});var S=function(e){return Object(x.jsx)("div",{className:"curtain ".concat(e.burger?"curtain__active":""),children:Object(x.jsxs)("div",{className:"curtain__container",children:[Object(x.jsx)("div",{className:"curtain__close",onClick:e.curtainClose}),Object(x.jsxs)("div",{className:"curtain__links",children:[Object(x.jsx)(_.b,{to:"/promo",activeClassName:"",className:"curtain__link",onClick:e.curtainClose,children:"\u0420\u043e\u0437\u044b\u0433\u0440\u044b\u0448"}),Object(x.jsx)("a",{href:"https://www.wildberries.ru/seller/8936",target:"_blank",rel:"noreferrer",activeClassName:"",className:"curtain__link",children:"\u041c\u044b \u043d\u0430 WB"}),Object(x.jsx)(_.b,{to:"/cards",activeClassName:"",className:"curtain__link",onClick:e.curtainClose,children:"\u041b\u0443\u0447\u0448\u0435\u043d\u0438\u0435 \u0446\u0435\u043d\u044b \u043d\u0430 WB"})]})]})})},T=a.p+"static/media/23664397.beb6560b.jpg",I=a.p+"static/media/26988420.e2f8d875.jpg",F=a.p+"static/media/26984839.bc7d8b61.jpg";var L=function(){var e=c.a.useState(!1),t=Object(l.a)(e,2),a=t[0],s=t[1],r=c.a.useState(!1),n=Object(l.a)(r,2),o=n[0],j=n[1],b=c.a.useState(!1),m=Object(l.a)(b,2),h=m[0],_=m[1],O=c.a.useState(!1),u=Object(l.a)(O,2),p=u[0],N=u[1],k=Object(i.f)(),w=[{_id:1,image:T,wbLink:"https://www.wildberries.ru/catalog/23664397/detail.aspx",cardTitle:"ELIZAVECCA \u041a\u0440\u0435\u043c \u0434\u043b\u044f \u043b\u0438\u0446\u0430 AQUA HYALURONIC, 50\u043c\u043b"},{_id:2,image:I,wbLink:"https://www.wildberries.ru/catalog/26988420/detail.aspx",cardTitle:"ELIZAVECCA \u0421\u044b\u0432\u043e\u0440\u043e\u0442\u043a\u0430 \u0441 \u0433\u0438\u0430\u043b\u0443\u0440\u043e\u043d\u043e\u0432\u043e\u0439 \u043a\u0438\u0441\u043b\u043e\u0442\u043e\u0439 97%, 50\u043c\u043b"},{_id:3,image:F,wbLink:"https://www.wildberries.ru/catalog/26984839/detail.aspx",cardTitle:"ELIZAVECCA \u0422\u043e\u043d\u0438\u043a-\u043f\u0438\u043b\u0438\u043d\u0433 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0444\u0440\u0443\u043a\u0442\u043e\u0432\u044b\u0445 \u043a\u0438\u0441\u043b\u043e\u0442, 200\u043c\u043b"}];function L(){j(!o),console.log("bur")}return c.a.useEffect((function(){document.title="Golden Tree - \u0420\u043e\u0437\u044b\u0433\u0440\u044b\u0448 \u0441\u0440\u0435\u0434\u0438 \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u0435\u0439 WB"}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(S,{burger:o,curtainClose:L}),Object(x.jsxs)("div",{className:"page",children:[Object(x.jsx)(E,{loading:a}),Object(x.jsx)(f,{burger:L}),Object(x.jsx)("main",{className:"main",children:Object(x.jsxs)(i.c,{children:[Object(x.jsx)(i.a,{path:"/promo",children:Object(x.jsx)(g,{err:p,form:function(e){N(!1),s(!0),d.sendFotoTg(e).then((function(){s(!1),k.push("/cards"),_(!0),N(!1)})).catch((function(e){s(!1),console.log(e),N(!0)}))}})}),Object(x.jsxs)(i.a,{path:"/cards",children:[Object(x.jsx)(y,{success:h}),Object(x.jsx)(v,{cards:w})]})]})}),Object(x.jsx)(C,{})]})]})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,35)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),s(e),c(e),r(e),n(e)}))};n.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(_.a,{children:Object(x.jsx)(L,{})})}),document.getElementById("root")),R()}},[[34,1,2]]]);
//# sourceMappingURL=main.2d3d9b3d.chunk.js.map