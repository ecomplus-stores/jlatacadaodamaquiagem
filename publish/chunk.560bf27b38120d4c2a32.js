(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{401:function(t,e,o){"use strict";o.r(e);var n=o(32),c=o(50);const a=n.$ecomConfig.get("currency")||"BRL",r=t=>{const e={currency:a,content_ids:[t.sku],content_name:t.name,value:Object(c.a)(t),content_type:"product"};return t.categories&&t.categories.length&&(e.content_category=t.category_tree||t.categories[0].name),e};var s=t=>{const e=window.storefront&&window.storefront.context;e&&"products"===e.resource&&t("ViewContent",r(e.body))},i=o(10),u=(t,e)=>{const o=window.storefrontApp&&window.storefrontApp.router;if(o){let n,c,r;const s=()=>{const{amount:t}=window.storefrontApp,e={value:t&&t.total||i.a.data&&i.a.data.subtotal||0,currency:a,contents:[],content_type:"product"};return i.a.data&&Array.isArray(i.a.data.items)&&i.a.data.items.forEach((t=>{let{sku:o,quantity:n}=t;e.contents.push({id:o,quantity:n})})),e},u=(e,o)=>{const a=s(),r={...a,checkout_step:e,checkout_option:o};e<=1||!n?(t("InitiateCheckout",a),t("Checkout",r,!0),n=!0):c||(t("CheckoutOption",r,!0),c=!0)},d=o=>{r||!0===e.disablePurchase||(t("Purchase",{...s(),order_id:o}),r=!0)},w=t=>{let{name:e,params:o}=t;switch(e){case"cart":u(1,"Review Cart");break;case"checkout":u(2,"Confirm Purchase");break;case"confirmation":d(o.id)}};o.currentRoute&&w(o.currentRoute),o.afterEach(w)}},d=t=>{i.a.on("addItem",(e=>{let{item:o}=e;t("AddToCart",r(o))}))};e.default=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("function"==typeof window.fbq){const e=function(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];t.debug&&console.log("fbq",e,o),window.fbq(n?"trackCustom":"track",e,o)};s(e),u(e,t),d(e)}}}}]);