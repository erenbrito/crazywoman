webpackJsonp([0xd5d9d741ef0b],{221:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),i=r(u),s=n(4),f=r(s),c=n(23),p=r(c);n(479);var d=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark;return i.default.createElement("div",null,i.default.createElement(p.default,this.props),i.default.createElement("div",{className:"content"},i.default.createElement("div",{className:"content__inner"},i.default.createElement("div",{className:"page"},i.default.createElement("h1",{className:"page__title"},e.frontmatter.title),i.default.createElement("div",{className:"page__body",dangerouslySetInnerHTML:{__html:e.html}})))))},t}(i.default.Component);d.propTypes={data:f.default.shape({markdownRemark:f.default.object.isRequired})},t.default=d,e.exports=t.default},479:function(e,t){},230:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=n(1),i=r(u),s=n(4),f=r(s),c=n(30),p=r(c),d=n(221),m=r(d),h=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=e.title,n=e.subtitle,r=this.props.data.markdownRemark,a=void 0;return a=null!==r.frontmatter.description?r.frontmatter.description:n,i.default.createElement("div",null,i.default.createElement(p.default,null,i.default.createElement("title",null,r.frontmatter.title+" - "+t),i.default.createElement("meta",{name:"description",content:a})),i.default.createElement(m.default,this.props))},t}(i.default.Component);h.propTypes={data:f.default.shape({site:f.default.shape({siteMetadata:f.default.shape({title:f.default.string.isRequired,subtitle:f.default.string.isRequired})}),markdownRemark:f.default.object.isRequired})},t.default=h;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-page-template-js-a508b0aa5646ea486451.js.map