(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{"1b+M":function(module,exports,e){},"3xCm":function(module,e,a){"use strict";var t=a("VbXa"),n=a.n(t),r=a("DXTi"),s=a.n(r),i=a("BVC1"),o=a("c6na"),c=a.n(o),u=a("Fmrb"),l=a.n(u),m=a("IMaL"),d=a.n(m),p=i.a.join(c.a.url.assets,"images/course-inbox/no_messages.svg"),g=function(e){function EmptyInboxMessage(){return e.apply(this,arguments)||this}var a;return n()(EmptyInboxMessage,e),EmptyInboxMessage.prototype.render=function render(){return s.a.createElement("div",{className:"rc-EmptyInboxMessage"},s.a.createElement("div",{className:"imageContainer"},s.a.createElement("img",{src:p,alt:"","aria-hidden":"true"})),l()("There are no messages yet."))},EmptyInboxMessage}(s.a.Component);e.a=g},"6nnt":function(module,exports,e){},IMaL:function(module,exports,e){var a=e("1b+M"),t;"string"==typeof a&&(a=[[module.i,a,""]]);var n={transform:void 0},r=e("aET+")(a,n);a.locals&&(module.exports=a.locals)},IYof:function(module,exports,e){var a=e("6nnt"),t;"string"==typeof a&&(a=[[module.i,a,""]]);var n={transform:void 0},r=e("aET+")(a,n);a.locals&&(module.exports=a.locals)},Mdf9:function(module,e,a){"use strict";var t=a("W8MJ"),n=a.n(t),r=a("VbXa"),s=a.n(r),i=a("U+yc"),o=a.n(i),c=a("aGUn"),u=a("iSxe"),l,m,d,p,g=(l=Object(c.b)("data"),p=d=function(e){function SiteMessage(){return e.apply(this,arguments)||this}return s()(SiteMessage,e),n()(SiteMessage,[{key:"parsedData",get:function get(){try{return JSON.parse(this.data)}catch(e){return null}}}]),SiteMessage}(u.a),d.RESOURCE_NAME="siteMessages.v1",m=p,o()(m.prototype,"parsedData",[l],Object.getOwnPropertyDescriptor(m.prototype,"parsedData"),m.prototype),m);e.a=g},SXW1:function(module,e,a){"use strict";var t=a("VbXa"),n=a.n(t),r=a("w/1P"),s=a.n(r),i=a("17x9"),o=a.n(i),c=a("DXTi"),u=a.n(c),l=a("b+bd"),m=a("Q8V+"),d=a("kvW3"),p=a("Fmrb"),g=a.n(p),f=a("W022"),b=a.n(f),v=function(e){function CourseNameHeader(){return e.apply(this,arguments)||this}var a;return n()(CourseNameHeader,e),CourseNameHeader.prototype.render=function render(){var e=s()("course-name","color-primary-text",{"display-3-text":!Object(m.b)(),"display-2-text":Object(m.b)()});return u.a.createElement("div",{className:"rc-CourseNameHeader vertical-box align-items-absolute-center styleguide"},u.a.createElement("h2",{className:e},this.props.courseName),u.a.createElement("div",{className:"headline-1-text partner-names"},u.a.createElement("span",{className:"body-1-text"},u.a.createElement(d.b,{message:g()("by {partnerNames}"),partnerNames:this.props.partnerNames}))))},CourseNameHeader}(u.a.Component);v.propTypes={courseName:o.a.string.isRequired,partnerNames:o.a.string.isRequired},e.a=Object(l.a)(v,["CourseStore"],function(e,a){var t,n=e.CourseStore.getMetadata();return{courseName:n.get("name"),partnerNames:n.get("universities").getNamesString()}})},W022:function(module,exports,e){var a=e("gS/i"),t;"string"==typeof a&&(a=[[module.i,a,""]]);var n={transform:void 0},r=e("aET+")(a,n);a.locals&&(module.exports=a.locals)},"gS/i":function(module,exports,e){},iSxe:function(module,e,a){"use strict";a.d(e,"a",function(){return s});var t=a("VbXa"),n=a.n(t),r,s=function(e){function SiteMessagesV1NaptimeResource(a){return e.call(this,a)||this}return n()(SiteMessagesV1NaptimeResource,e),SiteMessagesV1NaptimeResource}(a("HlCP").a);s.RESOURCE_NAME="siteMessages.v1"},iTn7:function(module,e,a){"use strict";a.r(e);var t=a("VbXa"),n=a.n(t),r=a("DXTi"),s=a.n(r),i=a("SXW1"),o=a("pRJk"),c=a("QsJ7"),u=a("Fmrb"),l=a.n(u),m=a("kz1I"),d=a.n(m),p=20,g=function(e){function CourseInboxPage(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).state={maxNumberOfMessages:p},a.getMoreMessages=function(){var e=a.state.maxNumberOfMessages;a.setState({maxNumberOfMessages:e+p})},a}var a;return n()(CourseInboxPage,e),CourseInboxPage.prototype.render=function render(){var e=this.state.maxNumberOfMessages;return s.a.createElement("div",{className:"rc-CourseInboxPage"},s.a.createElement(c.a,{pageTitle:l()("Course Inbox")}),s.a.createElement(i.a,null),s.a.createElement(o.a,{maxNumberOfMessages:e,getMoreMessages:this.getMoreMessages}))},CourseInboxPage}(s.a.Component);e.default=g},kz1I:function(module,exports,e){var a=e("xv4y"),t;"string"==typeof a&&(a=[[module.i,a,""]]);var n={transform:void 0},r=e("aET+")(a,n);a.locals&&(module.exports=a.locals)},pRJk:function(module,e,a){"use strict";var t=a("VbXa"),n=a.n(t),r=a("PStO"),s=a("DXTi"),i=a.n(s),o=a("F/us"),c=a.n(o),u=a("wWy3"),l=a("3xCm"),m=a("IDuc"),d=a("sOkY"),p=a("Mdf9"),g=a("q3BH"),f=a("8cuT"),b=a.n(f),v=a("Fmrb"),N=a.n(v),y=function(e){function InboxNotificationsList(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).isValidMessage=function(e){return!!e.parsedData},a.renderMessage=function(e,a){return i.a.createElement(u.a,{key:e.id,id:e.id,createdAt:e.createdAt,data:e.parsedData,truncate:a,isRead:e.isRead,campaignId:e.campaignId})},a.renderFull=function(e){return a.renderMessage(e,!1)},a.renderTruncated=function(e){return a.renderMessage(e,!0)},a}var a;return n()(InboxNotificationsList,e),InboxNotificationsList.prototype.render=function render(){var e=this.props,a=e.naptime,t=e.messages,n=e.getMoreMessages,r=a.getPagingFor("messages"),s=c()(t).filter(this.isValidMessage),o=s.length,u=t.length-o,p=o<r.total-u,g=s.splice(0,1);return i.a.createElement(d.a,{trackingName:"render_page",className:"rc-NotificationsList",trackClicks:!1,requireFullyVisible:!1,withVisibilityTracking:!0},!o&&i.a.createElement(l.a,null),o>0&&this.renderFull(g[0]),o>1&&s.map(this.renderTruncated),p&&i.a.createElement(m.a,{trackingName:"show_more_messages",className:"secondary fullbleed",onClick:n},N()("Show more messages")))},InboxNotificationsList}(i.a.Component),x=g.a.createTrackedContainer(function(){return{namespace:{page:"course_inbox"}}})(y);e.a=c.a.compose(b()(["CourseStore"],function(e){var a;return{courseId:e.CourseStore.getCourseId()}}),r.a.createContainer(function(e){var a=e.courseId,t=e.maxNumberOfMessages;return{messages:p.a.getAll({fields:["layoutType","data","createdAt","isRead"],params:{q:"latest",courseId:a,setTime:!0,start:0,limit:t}})}}))(x)},wWy3:function(module,e,a){"use strict";var t=a("VbXa"),n=a.n(t),r=a("wiyT"),s=a.n(r),i=a("wd/R"),o=a.n(i),c=a("DXTi"),u=a.n(c),l=a("DnuM"),m=a("c6na"),d=a.n(m),p=a("BVC1"),g=a("0WYP"),f=a("9A5E"),b=a("c8Vh"),v=a("IYof"),N=a.n(v),y=Object(l.a)("",{type:"rest"}),x=p.a.join(d.a.url.assets,"bundles/page/assets/white-logo-on-blue-bg.png"),M={width:100,auto:"format,compress"},h=function(e){function InboxNotification(){return e.apply(this,arguments)||this}n()(InboxNotification,e);var a=InboxNotification.prototype;return a.componentDidMount=function componentDidMount(){var e=this.props,a=e.id,t;e.isRead||s()(y.post("/api/siteMessages.v1?action=markAsRead&id="+a))},a.render=function render(){var e,a=this.props,t=a.createdAt,n=a.data,r=a.truncate,s=a.campaignId,i=(null==n?void 0:n.imageUrl)?g.a.processImage(n.imageUrl,M):x,c={backgroundImage:"url(".concat(i,")")},l=280;return u.a.createElement(b.a,{className:"rc-InboxNotification",isInitiallyCollapsed:r,gradientColor:"grey",showToggle:((null==n?void 0:null===(e=n.message)||void 0===e?void 0:e.length)||0)>280},u.a.createElement("div",{className:"headline-container"},u.a.createElement("div",{className:"notif-img-container"},u.a.createElement("div",{style:c,className:"notif-img"})),u.a.createElement("div",{className:"subject"},null==n?void 0:n.subject),u.a.createElement("div",{className:"date color-secondary-text"},o()(t).fromNow())),u.a.createElement("div",{className:"message-text"},null==n?void 0:n.message),(null==n?void 0:n.actionUrl)&&(null==n?void 0:n.actionText)&&u.a.createElement(f.a,{href:null==n?void 0:n.actionUrl,trackingName:"course_inbox_".concat(s)},null==n?void 0:n.actionText))},InboxNotification}(u.a.Component);e.a=h},xv4y:function(module,exports,e){}}]);
//# sourceMappingURL=85.f896a06554da37646f0d.js.map