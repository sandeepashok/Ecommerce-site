(this["webpackJsonpecommerce-site"]=this["webpackJsonpecommerce-site"]||[]).push([[0],{40:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},76:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(24),n=a.n(s),r=a(4),i=(a(53),a(16)),l=(a(54),a(0));function d(){return Object(l.jsxs)("nav",{className:"nav-bar",children:[Object(l.jsx)("div",{className:"brand",children:Object(l.jsxs)(r.c,{to:"/",end:!0,className:"brand-name",children:[Object(l.jsx)("span",{className:"brand-name",children:"FitMerch"}),Object(l.jsx)(i.b,{className:"brand-logo"})]})}),Object(l.jsxs)("div",{className:"nav-links",children:[Object(l.jsx)(r.c,{to:"/shop",activeClassName:"active-nav-link",className:"nav-link",children:"Shop"}),Object(l.jsx)(r.c,{to:"/wishlist",activeClassName:"active-nav-link",className:"nav-link",children:"Wishlist"}),Object(l.jsx)(r.c,{to:"/cart",activeClassName:"active-nav-link",className:"nav-link",children:"Cart"})]})]})}var o=a(8),j=a(5),b=a(7),m=a(41),u=a.n(m),h=Object(c.createContext)();function O(e){var t=e.children,a=Object(c.useState)([]),s=Object(b.a)(a,2),n=s[0],r=s[1],i=Object(c.useState)([]),d=Object(b.a)(i,2),m=d[0],O=d[1],p=Object(c.useState)({sort:"",department:[],categories:[],brands:[],rating:0,include:!1}),x=Object(b.a)(p,2),g=x[0],v=x[1];Object(c.useEffect)((function(){u()("https://learningexpress.sandeepashok.repl.co/products").then((function(e){r(e.data),O(e.data)}))}),[]);Object(c.useEffect)((function(){!function(){var e=Object(j.a)(m).filter((function(e){return g.department.includes(e.gender)})),t=[],a=(t=Array.isArray(e)&&e.length?Object(j.a)(e):Object(j.a)(m)).filter((function(e){return g.categories.includes(e.category)})),c=[],s=(c=Array.isArray(a)&&a.length?Object(j.a)(a):Object(j.a)(t)).filter((function(e){return g.brands.includes(e.brand)})),n=[],i=(n=Array.isArray(s)&&s.length?Object(j.a)(s):Object(j.a)(c)).filter((function(e){return e.rating>=g.rating})),l=[],d=[],o=(l=Array.isArray(i)&&i.length?Object(j.a)(i):Object(j.a)(n)).filter((function(e){return e.inStock}));d=g.include?Object(j.a)(o):Object(j.a)(l),"asc"===g.sort?r(Object(j.a)(d.sort((function(e,t){return e.price>t.price?1:-1})))):"dec"===g.sort?r(Object(j.a)(d.sort((function(e,t){return e.price<t.price?1:-1})))):r(Object(j.a)(d))}()}),[g]);return Object(l.jsx)(h.Provider,{value:{products:n,productList:m,filterState:g,clearAll:function(){v({sort:"",department:[],categories:[],brands:[],rating:0,include:!1})},sortProductCards:function(e){var t=Object(o.a)({},g);t.sort=e,v(t)},departmentSelectionHandler:function(e){var t=Object(o.a)({},g);if(g.department.includes(e)||(t.department=[].concat(Object(j.a)(g.department),[e])),g.department.includes(e)){var a=t.department.filter((function(t){return t!==e}));t.department=Object(j.a)(a)}v(t)},categorySelectionHandler:function(e){var t=Object(o.a)({},g);if(g.categories.includes(e)||(t.categories=[].concat(Object(j.a)(g.categories),[e])),g.categories.includes(e)){var a=t.categories.filter((function(t){return t!==e}));t.categories=Object(j.a)(a)}v(t)},brandSelectionHandler:function(e){var t=Object(o.a)({},g);if(g.brands.includes(e)||(t.brands=[].concat(Object(j.a)(g.brands),[e])),g.brands.includes(e)){var a=t.brands.filter((function(t){return t!==e}));t.brands=Object(j.a)(a)}v(t)},showAccordingToRatingsHandler:function(e){var t=Object(o.a)({},g);t.rating=e,v(t)},includeOutOfStockDisplayHandler:function(e){var t=Object(o.a)({},g);t.include=e,v(t)}},children:t})}a(76);var p=Object(c.createContext)();function x(e){var t=e.children,a=Object(c.useContext)(h).products,s=Object(c.useState)([]),n=Object(b.a)(s,2),r=n[0],i=n[1];return Object(l.jsx)(p.Provider,{value:{wishlist:r,addItemToWishlist:function(e){if(!r.find((function(t){return t.itemId===e}))){var t=a.find((function(t){return t.itemId===e})),c=Object(j.a)(r),s=Object(o.a)({},t);c.push(s),i(c)}},removeItemFromWishlist:function(e){var t=r.filter((function(t){return t.itemId!==e}));i(t)}},children:t})}var g=Object(c.createContext)();function v(e){var t=e.children,a=Object(c.useContext)(h).products,s=Object(c.useState)([]),n=Object(b.a)(s,2),r=n[0],i=n[1];return Object(l.jsx)(g.Provider,{value:{cart:r,setCart:i,addItemToCart:function(e,t){var c=r.find((function(t){return t.itemId===e}));if(c){var s=r.map((function(e){if(e===c){var a=Object(o.a)({},e);return 1===a.quantity&&1!==t||(a.quantity=a.quantity+t),a}return e}));i(s)}else{var n=a.find((function(t){return t.itemId===e})),l=Object(o.a)({},n);l.quantity=t,i([].concat(Object(j.a)(r),[l]))}},removeItemFromCart:function(e){var t=r.filter((function(t){return t.itemId!==e}));i(t)}},children:t})}var f=a(101),N=a(100);function k(e){var t=e.product,a=Object(c.useContext)(g),s=a.cart,n=a.addItemToCart,d=Object(c.useContext)(p),o=d.removeItemFromWishlist,j=d.addItemToWishlist,b=d.wishlist.find((function(e){return e.itemId===t.itemId})),m=s&&s.find((function(e){return e.itemId===t.itemId}));return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("img",{alt:"product",src:t.imageURL,className:"card-image"}),Object(l.jsx)("p",{className:"product-brand",children:t.brand}),Object(l.jsx)("p",{className:"product-title",children:t.title}),Object(l.jsx)(N.a,{component:"fieldset",mb:3,borderColor:"transparent",className:"product-rating",children:Object(l.jsx)(f.a,{name:"read-only",className:"product-rating-stars",value:t.rating,readOnly:!0})}),Object(l.jsxs)("div",{className:"product-pricing",children:[Object(l.jsxs)("p",{className:"product-price",children:["\u20b9",t.price]}),Object(l.jsxs)("p",{className:"product-mrp",children:["\u20b9",t.mrp]}),Object(l.jsxs)("p",{className:"product-discount",children:[t.discount,"% off"]})]}),Object(l.jsxs)("div",{className:"cart-wishlist-but",children:[m?Object(l.jsx)(r.b,{to:"/cart",disabled:!t.inStock,className:t.inStock?"addOrDel-link-btn":"out-of-stock",children:t.inStock?"Go to Cart":"Out of Stock"}):Object(l.jsx)("button",{disabled:!t.inStock,onClick:function(){n(t.itemId,1)},className:t.inStock?"addOrDel-link-btn":"out-of-stock",children:t.inStock?"Add to Cart":"Out of Stock"}),b?Object(l.jsx)(i.a,{className:"wishlist-btn-filled",onClick:function(){o(t.itemId)}}):Object(l.jsx)(i.a,{className:"wishlist-btn-empty",onClick:function(){j(t.itemId)}})]})]})}var y=a(10);a(79);function C(){var e=Object(c.useContext)(h),t=e.productList,a=e.clearAll,s=e.sortProductCards,n=e.departmentSelectionHandler,r=e.categorySelectionHandler,i=e.brandSelectionHandler,d=e.showAccordingToRatingsHandler,o=e.includeOutOfStockDisplayHandler,m=e.filterState,u=[],O=[];Object(j.a)(t).forEach((function(e){-1===u.indexOf(e.category)&&u.push(e.category),-1===O.indexOf(e.brand)&&O.push(e.brand)}));var p=Object(c.useState)(!0),x=Object(b.a)(p,2),g=x[0],v=x[1];return Object(l.jsxs)("div",{className:"sidebar-container",children:[Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("h2",{className:"heading",children:"Filters"}),Object(l.jsx)("p",{className:"clear-all",onClick:function(){return a()},children:"Clear All"})]}),Object(l.jsxs)("ul",{className:"filters-container",children:[Object(l.jsx)("li",{className:"sub-heading",children:"Sort By"}),Object(l.jsx)("li",{className:"list-items",children:Object(l.jsxs)("label",{className:"form-label",children:[Object(l.jsx)("input",{className:"form-checkbox-field",type:"radio",name:"sort",value:"low-to-high",checked:m.sort.includes("asc"),onChange:function(){return s("asc")}}),"Price low to high"]})}),Object(l.jsx)("li",{className:"list-items",children:Object(l.jsxs)("label",{className:"form-label",children:[Object(l.jsx)("input",{className:"form-checkbox-field",type:"radio",name:"sort",value:"high-to-low",checked:m.sort.includes("dec"),onChange:function(){return s("dec")}}),"Price high to low"]})}),Object(l.jsx)("hr",{className:"filter-divider-line"}),Object(l.jsx)("li",{className:"sub-heading",children:"Department"}),Object(l.jsx)("li",{className:"list-items",children:Object(l.jsxs)("label",{className:"form-label",children:[Object(l.jsx)("input",{className:"form-checkbox-field",type:"checkbox",name:"Department",value:"women",checked:m.department.includes("women"),onChange:function(){return n("women")}}),"Women's"]})}),Object(l.jsx)("li",{className:"list-items",children:Object(l.jsxs)("label",{className:"form-label",children:[Object(l.jsx)("input",{className:"form-checkbox-field",type:"checkbox",name:"men",value:"Department",checked:m.department.includes("men"),onChange:function(){return n("men")}}),"Men's"]})}),Object(l.jsx)("hr",{className:"filter-divider-line"}),Object(l.jsx)("li",{className:"sub-heading",children:"Categories"}),u.map((function(e){return Object(l.jsx)("li",{className:"list-items",children:Object(l.jsxs)("label",{className:"form-label",children:[Object(l.jsx)("input",{className:"form-checkbox-field",type:"checkbox",name:"category",value:e,checked:m.categories.includes(e),onChange:function(){return r(e)}}),e]})},e)})),Object(l.jsx)("hr",{className:"filter-divider-line"}),Object(l.jsx)("li",{className:"sub-heading",children:"Brands"}),O.map((function(e){var t;return Object(l.jsx)("li",{className:"list-items",children:Object(l.jsxs)("label",{className:"form-label",children:[Object(l.jsx)("input",(t={className:"form-checkbox-field",type:"checkbox",value:"brand"},Object(y.a)(t,"value",e),Object(y.a)(t,"checked",m.brands.includes(e)),Object(y.a)(t,"onChange",(function(){return i(e)})),t)),e]})},e)})),Object(l.jsx)("hr",{className:"filter-divider-line"}),Object(l.jsx)("li",{className:"sub-heading",children:"Customer Ratings"}),Object(l.jsx)("li",{className:"list-items",children:Object(l.jsxs)("label",{className:"form-label",children:[Object(l.jsx)("input",{className:"form-checkbox-field",type:"checkbox",name:"rating",value:"1 stars & above",checked:1===m.rating,onChange:function(){return d(1)}}),"1 stars & above"]})}),Object(l.jsx)("li",{className:"list-items",children:Object(l.jsxs)("label",{className:"form-label",children:[Object(l.jsx)("input",{className:"form-checkbox-field",type:"checkbox",name:"rating",value:"2 stars & above",checked:2===m.rating,onChange:function(){return d(2)}}),"2 stars & above"]})}),Object(l.jsx)("li",{className:"list-items",children:Object(l.jsxs)("label",{className:"form-label",children:[Object(l.jsx)("input",{className:"form-checkbox-field",type:"checkbox",name:"rating",value:"3 stars & above",checked:3===m.rating,onChange:function(){return d(3)}}),"3 stars & above"]})}),Object(l.jsx)("li",{className:"list-items",children:Object(l.jsxs)("label",{className:"form-label",children:[Object(l.jsx)("input",{className:"form-checkbox-field",type:"checkbox",name:"rating",value:"4 stars & above",checked:4===m.rating,onChange:function(){return d(4)}}),"4 stars & above"]})}),Object(l.jsx)("li",{className:"list-items",children:Object(l.jsxs)("label",{className:"form-label",children:[Object(l.jsx)("input",{className:"form-checkbox-field",type:"checkbox",name:"rating",value:"3 stars & above",checked:5===m.rating,onChange:function(){return d(5)}}),"5 stars"]})}),Object(l.jsx)("hr",{className:"filter-divider-line"}),Object(l.jsx)("li",{className:"list-items",children:Object(l.jsxs)("label",{className:"form-label",children:[Object(l.jsx)("input",{className:"form-checkbox-field",type:"checkbox",name:"out-of-stock",value:"Include out of stock",checked:g,onClick:function(){v(!g),o(g)}}),"Include out of stock"]})})]})]})}a(80);function S(){var e=Object(c.useContext)(h).products;return Object(l.jsxs)("div",{className:"product-page-container",children:[Object(l.jsx)(C,{}),Object(l.jsx)("div",{className:"card-container",children:e.map((function(e){return Object(l.jsx)(k,{product:e},e.itemId)}))})]})}a(40);function I(){return Object(l.jsxs)("div",{className:"empty-page-img-container",children:[Object(l.jsx)("img",{alt:"empty-cart",src:"https://res.cloudinary.com/dkavbodkk/image/upload/v1622102865/empty%20cart%20and%20wishlist/empty_wishlist.svg",className:"empty-img"}),Object(l.jsx)("h2",{className:"empty-message",children:"Wishlist is Empty \u2639\ufe0f"}),Object(l.jsx)(r.b,{to:"/shop",className:"goto-shop",children:"Shop Now"})]})}a(81);function A(e){var t=e.wishlistItem,a=Object(c.useContext)(g),s=a.cart,n=a.addItemToCart,d=Object(c.useContext)(p).removeItemFromWishlist,o=s&&s.find((function(e){return e.itemId===t.itemId}));return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("img",{alt:"product",className:"card-image",src:t.imageURL}),Object(l.jsx)("p",{className:"product-title",children:t.title}),Object(l.jsx)(N.a,{component:"fieldset",mb:3,borderColor:"transparent",className:"product-rating",children:Object(l.jsx)(f.a,{name:"read-only",className:"product-rating-stars",value:t.rating,readOnly:!0})}),Object(l.jsxs)("div",{className:"product-pricing",children:[Object(l.jsxs)("p",{className:"product-price",children:["\u20b9",t.price]}),Object(l.jsxs)("p",{className:"product-mrp",children:["\u20b9",t.mrp]}),Object(l.jsxs)("p",{className:"product-discount",children:[t.discount,"% off"]})]}),Object(l.jsxs)("div",{className:"cart-wishlist-but",children:[Object(l.jsx)(i.a,{className:"wishlist-btn-filled",onClick:function(){d(t.itemId)}}),o?Object(l.jsx)(r.b,{to:"/cart",disabled:!t.inStock,className:t.inStock?"addOrDel-link-btn":"out-of-stock",children:"Go to Cart"}):Object(l.jsx)("button",{onClick:function(){n(t.itemId,1)},disabled:!t.inStock,className:t.inStock?"addOrDel-link-btn":"out-of-stock",children:t.inStock?"Add to Cart":"Out of Stock"})]})]},t.itemId)}a(82);function w(){var e=Object(c.useContext)(p).wishlist;return Array.isArray(e)&&e.length?Object(l.jsx)("div",{className:"card-container",children:e.map((function(e){return Object(l.jsx)(A,{wishlistItem:e},e.itemId)}))}):Object(l.jsx)(I,{})}a(83);function P(){var e=Object(c.useContext)(h),t=e.categorySelectionHandler,a=e.brandSelectionHandler;return Object(l.jsxs)("div",{className:"homepage-container",children:[Object(l.jsx)("div",{className:"sale-offers",children:Object(l.jsxs)("p",{children:["Discounts on various products upto 60% Off ",Object(l.jsx)(r.b,{to:"/shop",className:"sales-link",children:Object(l.jsx)("span",{children:"Shop Now"})})]})}),Object(l.jsx)(r.b,{to:"/shop",children:Object(l.jsx)("img",{alt:"banner",src:"https://res.cloudinary.com/dkavbodkk/image/upload/v1622017930/landing-page-images/hero-img.jpg",className:"hero-image"})}),Object(l.jsx)("h2",{className:"headings",children:"Featured Categories"}),Object(l.jsxs)("div",{className:"categories-container",children:[Object(l.jsx)(r.b,{to:"/shop",className:"card-link",onClick:function(){return t("Sweatshirts")},children:Object(l.jsxs)("div",{className:"category-card",children:[Object(l.jsx)("img",{alt:"category-img",src:"https://res.cloudinary.com/dkavbodkk/image/upload/v1622022289/landing-page-images/sweatshirt.svg",className:"category-img"}),Object(l.jsx)("h3",{className:"category-label",children:"Sweatshirts"})]})}),Object(l.jsx)(r.b,{to:"/shop",className:"card-link",onClick:function(){return t("Track Pants")},children:Object(l.jsxs)("div",{className:"category-card",children:[Object(l.jsx)("img",{alt:"category-img",src:"https://res.cloudinary.com/dkavbodkk/image/upload/v1622022289/landing-page-images/trackpants.svg",className:"category-img"}),Object(l.jsx)("h3",{className:"category-label",children:"Trackpants"})]})}),Object(l.jsx)(r.b,{to:"/shop",className:"card-link",onClick:function(){return t("T-shirts")},children:Object(l.jsxs)("div",{className:"category-card",children:[Object(l.jsx)("img",{alt:"category-img",src:"https://res.cloudinary.com/dkavbodkk/image/upload/v1622022290/landing-page-images/tshirt.svg",className:"category-img"}),Object(l.jsx)("h3",{className:"category-label",children:"Shirts"})]})}),Object(l.jsx)(r.b,{to:"/shop",className:"card-link",onClick:function(){return t("Shoes")},children:Object(l.jsxs)("div",{className:"category-card",children:[Object(l.jsx)("img",{alt:"category-img",src:"https://res.cloudinary.com/dkavbodkk/image/upload/v1622022289/landing-page-images/shoe.svg",className:"category-img"}),Object(l.jsx)("h3",{className:"category-label",children:"Shoes"})]})})]}),Object(l.jsx)("h2",{className:"headings",children:"Best of Brands"}),Object(l.jsxs)("div",{className:"brands-container",children:[Object(l.jsx)(r.b,{to:"/shop",className:"card-link",children:Object(l.jsxs)("div",{className:"brand-card",onClick:function(){return a("NIKE")},children:[Object(l.jsx)("img",{alt:"brand-img",src:"https://res.cloudinary.com/dkavbodkk/image/upload/v1622014025/landing-page-images/nike.jpg",className:"brand-img"}),Object(l.jsx)("h3",{className:"brand-label",children:"NIKE"})]})}),Object(l.jsx)(r.b,{to:"/shop",className:"card-link",children:Object(l.jsxs)("div",{className:"brand-card",onClick:function(){return a("PUMA")},children:[Object(l.jsx)("img",{alt:"brand-img",src:"https://res.cloudinary.com/dkavbodkk/image/upload/v1622014025/landing-page-images/puma.jpg",className:"brand-img"}),Object(l.jsx)("h3",{className:"brand-label",children:"PUMA"})]})}),Object(l.jsx)(r.b,{to:"/shop",className:"card-link",children:Object(l.jsxs)("div",{className:"brand-card",onClick:function(){return a("ADIDAS")},children:[Object(l.jsx)("img",{alt:"brand-img",src:"https://res.cloudinary.com/dkavbodkk/image/upload/v1622014025/landing-page-images/adidas.jpg",className:"brand-img"}),Object(l.jsx)("h3",{className:"brand-label",children:"ADIDAS"})]})}),Object(l.jsx)(r.b,{to:"/shop",className:"card-link",children:Object(l.jsxs)("div",{className:"brand-card",onClick:function(){return a("UNDERARMOUR")},children:[Object(l.jsx)("img",{alt:"brand-img",src:"https://res.cloudinary.com/dkavbodkk/image/upload/v1622014026/landing-page-images/underarmour.jpg",className:"brand-img"}),Object(l.jsx)("h3",{className:"brand-label",children:"UA"})]})}),Object(l.jsx)(r.b,{to:"/shop",className:"card-link",children:Object(l.jsxs)("div",{className:"brand-card",onClick:function(){return a("HRX")},children:[Object(l.jsx)("img",{alt:"brand-img",src:"https://res.cloudinary.com/dkavbodkk/image/upload/v1622028258/landing-page-images/hrx.png",className:"brand-img"}),Object(l.jsx)("h3",{className:"brand-label",children:"HRX"})]})})]})]})}a(84);function D(e){var t=e.cartItem,a=Object(c.useContext)(g),s=a.addItemToCart,n=a.removeItemFromCart,r=Object(c.useContext)(p).addItemToWishlist;return Object(l.jsxs)("div",{className:"cart-card",children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{alt:"product",className:"cart-card-image",src:t.imageURL})}),Object(l.jsxs)("div",{className:"cart-product-info",children:[Object(l.jsx)("p",{className:"cart-card-title",children:t.title}),Object(l.jsx)("p",{className:"cart-card-description",children:t.description}),Object(l.jsxs)("div",{className:"cart-product-pricing",children:[Object(l.jsxs)("p",{className:"cart-card-price",children:["\u20b9",t.price*t.quantity]}),Object(l.jsxs)("p",{className:"cart-card-mrp",children:["\u20b9",t.mrp*t.quantity]}),Object(l.jsxs)("p",{className:"cart-card-discount",children:[t.discount,"% off"]})]}),Object(l.jsxs)("div",{className:"counter",children:[Object(l.jsx)("button",{onClick:function(){return e=t.itemId,void s(e,-1);var e},disabled:1===t.quantity,className:"counter-btn",children:"\u2212"}),Object(l.jsx)("p",{className:"count",children:t.quantity}),Object(l.jsx)("button",{onClick:function(){return e=t.itemId,void s(e,1);var e},className:"counter-btn",children:"+"})]}),Object(l.jsxs)("div",{className:"cart-wishlist-btn",children:[Object(l.jsx)("p",{onClick:function(){return n(t.itemId)},className:"cart-btn",children:"Remove"}),Object(l.jsx)("p",{onClick:function(){r(t.itemId),n(t.itemId)},className:"cart-btn",children:"Move to Wishlist"})]})]})]},t.itemId)}a(85),a(86);function T(){var e=Object(c.useContext)(g).cart,t=[0],a=[0];e&&e.forEach((function(e){t.push(e.mrp*e.quantity),a.push(e.price*e.quantity)}));var s=t.reduce((function(e,t){return e+t})),n=a.reduce((function(e,t){return e+t}));return Object(l.jsx)("div",{className:"cart-summary-section",children:Object(l.jsxs)("div",{className:"cart-summary",children:[Object(l.jsx)("h2",{className:"cart-summary-heading",children:"PRICE DETAILS"}),Object(l.jsxs)("div",{className:"cart-summary-pricing",children:[Object(l.jsxs)("div",{className:"summary-price",children:[Object(l.jsx)("p",{children:"Price"}),Object(l.jsxs)("p",{className:"mrp",children:["\u20b9",s]})]}),Object(l.jsxs)("div",{className:"summary-price",children:[Object(l.jsx)("p",{children:"Discount"}),Object(l.jsxs)("p",{className:"discount-price",children:["-\u20b9",s-n]})]}),Object(l.jsxs)("div",{className:"summary-total",children:[Object(l.jsx)("p",{children:"Total Amount"}),Object(l.jsxs)("p",{children:["\u20b9",n]})]})]})]})})}function H(){return Object(l.jsxs)("div",{className:"empty-page-img-container",children:[Object(l.jsx)("img",{alt:"empty-cart",src:"https://res.cloudinary.com/dkavbodkk/image/upload/v1622102865/empty%20cart%20and%20wishlist/empty_cart.svg",className:"empty-img"}),Object(l.jsx)("h2",{className:"empty-message",children:"Cart is Empty \u2639\ufe0f"}),Object(l.jsx)(r.b,{to:"/shop",className:"goto-shop",children:"Shop Now"})]})}function M(){var e=Object(c.useContext)(g).cart;return Array.isArray(e)&&e.length?Object(l.jsxs)("div",{className:"cart-card-container",children:[Object(l.jsx)("hr",{className:"section-divider"}),Object(l.jsx)("div",{className:"cart-map-section",children:e&&e.map((function(e){return Object(l.jsx)(D,{cartItem:e},e.itemId)}))}),Object(l.jsxs)("div",{className:"cartsummary-proceed-section",children:[Object(l.jsx)(T,{}),Object(l.jsx)(r.b,{to:"/checkout",children:Object(l.jsx)("button",{className:"proceed-to-buy",children:"Proceed to Buy"})}),Object(l.jsx)("hr",{className:"section-divider"})]})]}):Object(l.jsx)(H,{})}var R=a(3);a(87);function E(){var e,t,a=Object(c.useContext)(g),s=a.cart,n=a.setCart,i=[0];s&&s.forEach((function(e){i.push(e.price*e.quantity)}));var d=i.reduce((function(e,t){return e+t})),j=Object(c.useState)({name:" ",phone:" ",pin:" ",locality:" ",address:"",city:" ",state:" "}),m=Object(b.a)(j,2),u=m[0],h=m[1],O=Object(c.useState)(""),p=Object(b.a)(O,2),x=p[0],v=p[1],f=Object(c.useState)(""),N=Object(b.a)(f,2),k=N[0],C=N[1],S=Object(c.useState)(""),I=Object(b.a)(S,2),A=I[0],w=I[1],P=Object(c.useState)(!1),D=Object(b.a)(P,2),H=D[0],M=D[1],R=Object(o.a)({},u),E="hide-modal";E=H?"modal":"hide-modal";var U="disabled";U=""===u.name||""===u.phone||""===u.pin||""===u.locality||""===u.address||""===u.city||""===u.state?"disabled":"add-address-btn";var W="disabled";return W=""===k||""===x||""===A?"disabled":"pay",Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"checkout-page-heading",children:"place order"}),Object(l.jsxs)("div",{className:"checkout-page-container",children:[Object(l.jsx)("div",{className:E,children:Object(l.jsxs)("div",{className:"modal-container",children:[Object(l.jsx)("img",{alt:"payment successful",src:"https://image.flaticon.com/icons/png/512/190/190411.png",className:"modal-img"}),Object(l.jsx)("p",{className:"payment-success",children:"Payment Successful !"}),Object(l.jsx)(r.b,{to:"/",children:Object(l.jsx)("button",{className:"pay",onClick:function(){n([])},children:"Okay"})})]})}),Object(l.jsxs)("div",{className:"checkout-details-payment",children:[Object(l.jsxs)("div",{className:"checkout-customer-details",children:[Object(l.jsx)("h3",{className:"add-address",children:"Add Address"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"text",placeholder:"Name",className:"customer-details-input",onChange:function(e){R.name=e.target.value}}),Object(l.jsx)("input",{type:"number",placeholder:"Phone Number",className:"customer-details-input",onChange:function(e){R.phone=e.target.value}})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"number",placeholder:"Pincode",className:"customer-details-input",onChange:function(e){R.pin=e.target.value}}),Object(l.jsx)("input",{type:"text",placeholder:"Locality",className:"customer-details-input",onChange:function(e){R.locality=e.target.value+" "}})]}),Object(l.jsx)("div",{className:"textarea-input",children:Object(l.jsx)("textarea",{type:"text",placeholder:"Address(Area and Street)",className:"customer-details-textarea",onChange:function(e){R.address=" "+e.target.value+" "}})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"text",placeholder:"City/District/Town",className:"customer-details-input",onChange:function(e){R.city=e.target.value+" "}}),Object(l.jsxs)("select",(e={name:"state",id:"state",defaultValue:"State",className:"form-control"},Object(y.a)(e,"className","customer-details-input-dropdown"),Object(y.a)(e,"onChange",(function(e){R.state=e.target.value+" "})),Object(y.a)(e,"children",[Object(l.jsx)("option",{value:"State",disabled:!0,children:"State"}),Object(l.jsx)("option",{value:"Andhra Pradesh",children:"Andhra Pradesh"}),Object(l.jsx)("option",{value:"Andaman and Nicobar Islands",children:"Andaman and Nicobar Islands"}),Object(l.jsx)("option",{value:"Arunachal Pradesh",children:"Arunachal Pradesh"}),Object(l.jsx)("option",{value:"Assam",children:"Assam"}),Object(l.jsx)("option",{value:"Bihar",children:"Bihar"}),Object(l.jsx)("option",{value:"Chandigarh",children:"Chandigarh"}),Object(l.jsx)("option",{value:"Chhattisgarh",children:"Chhattisgarh"}),Object(l.jsx)("option",{value:"Dadar and Nagar Haveli",children:"Dadar and Nagar Haveli"}),Object(l.jsx)("option",{value:"Daman and Diu",children:"Daman and Diu"}),Object(l.jsx)("option",{value:"Delhi",children:"Delhi"}),Object(l.jsx)("option",{value:"Lakshadweep",children:"Lakshadweep"}),Object(l.jsx)("option",{value:"Puducherry",children:"Puducherry"}),Object(l.jsx)("option",{value:"Goa",children:"Goa"}),Object(l.jsx)("option",{value:"Gujarat",children:"Gujarat"}),Object(l.jsx)("option",{value:"Haryana",children:"Haryana"}),Object(l.jsx)("option",{value:"Himachal Pradesh",children:"Himachal Pradesh"}),Object(l.jsx)("option",{value:"Jammu and Kashmir",children:"Jammu and Kashmir"}),Object(l.jsx)("option",{value:"Jharkhand",children:"Jharkhand"}),Object(l.jsx)("option",{value:"Karnataka",children:"Karnataka"}),Object(l.jsx)("option",{value:"Kerala",children:"Kerala"}),Object(l.jsx)("option",{value:"Madhya Pradesh",children:"Madhya Pradesh"}),Object(l.jsx)("option",{value:"Maharashtra",children:"Maharashtra"}),Object(l.jsx)("option",{value:"Manipur",children:"Manipur"}),Object(l.jsx)("option",{value:"Meghalaya",children:"Meghalaya"}),Object(l.jsx)("option",{value:"Mizoram",children:"Mizoram"}),Object(l.jsx)("option",{value:"Nagaland",children:"Nagaland"}),Object(l.jsx)("option",{value:"Odisha",children:"Odisha"}),Object(l.jsx)("option",{value:"Punjab",children:"Punjab"}),Object(l.jsx)("option",{value:"Rajasthan",children:"Rajasthan"}),Object(l.jsx)("option",{value:"Sikkim",children:"Sikkim"}),Object(l.jsx)("option",{value:"Tamil Nadu",children:"Tamil Nadu"}),Object(l.jsx)("option",{value:"Telangana",children:"Telangana"}),Object(l.jsx)("option",{value:"Tripura",children:"Tripura"}),Object(l.jsx)("option",{value:"Uttar Pradesh",children:"Uttar Pradesh"}),Object(l.jsx)("option",{value:"Uttarakhand",children:"Uttarakhand"}),Object(l.jsx)("option",{value:"West Bengal",children:"West Bengal"})]),e))]}),Object(l.jsx)("button",(t={className:"customer-details-submit",type:"submit"},Object(y.a)(t,"className",U),Object(y.a)(t,"onClick",(function(){h(R)})),Object(y.a)(t,"children","Add Address"),t))]}),Object(l.jsx)("div",{className:"checkout-address-summary",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{className:"add-address",children:"Address to deliver"}),Object(l.jsxs)("p",{className:"checkout-address-name",children:["Name: ",Object(l.jsx)("span",{children:u.name})]}),Object(l.jsxs)("p",{className:"checkout-address-phone",children:["Phone Number: ",Object(l.jsx)("span",{children:u.phone})]}),Object(l.jsxs)("p",{className:"checkout-address",children:["Address: ",Object(l.jsx)("span",{children:u.address+u.locality+u.city+u.state+u.pin})]})]})}),Object(l.jsxs)("div",{className:"checkout-customer-payment",children:[Object(l.jsx)("h3",{className:"add-address",children:"Payment"}),Object(l.jsx)("input",{type:"number",placeholder:"Enter card number",className:"customer-details-input",value:x,onChange:function(e){e.target.value<=1e16&&v(e.target.value)}}),Object(l.jsx)("input",{type:"month",className:"customer-details-expdate",onChange:function(e){w(e.target.value)}}),Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"flex-start"},children:[Object(l.jsx)("input",{type:"number",placeholder:"CVV",className:"customer-details-cvv",value:k,onChange:function(e){e.target.value<=999&&C(e.target.value)}}),Object(l.jsxs)("button",{className:W,disabled:""===x&&""===k,onClick:function(){M(!0)},children:["PAY \u20b9",d]})]})]})]}),Object(l.jsx)("div",{className:"cart-summary-sec",children:Object(l.jsx)(T,{})})]})]})}function U(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(d,{}),Object(l.jsx)(O,{children:Object(l.jsx)(v,{children:Object(l.jsx)(x,{children:Object(l.jsxs)(R.c,{children:[Object(l.jsx)(R.a,{path:"/",element:Object(l.jsx)(P,{})}),Object(l.jsx)(R.a,{path:"/shop",element:Object(l.jsx)(S,{})}),Object(l.jsx)(R.a,{path:"/cart",element:Object(l.jsx)(M,{})}),Object(l.jsx)(R.a,{path:"/wishlist",element:Object(l.jsx)(w,{})}),Object(l.jsx)(R.a,{path:"/checkout",element:Object(l.jsx)(E,{})})]})})})})]})}var W=document.getElementById("root");n.a.render(Object(l.jsx)(c.StrictMode,{children:Object(l.jsx)(r.a,{children:Object(l.jsx)(U,{})})}),W)}},[[88,1,2]]]);
//# sourceMappingURL=main.3e3e9204.chunk.js.map