(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{"5A/O":function(module,e,t){"use strict";var n=t("F/us"),r=t.n(n),o=t("PStO"),s=t("jsrg"),a=t("VXRf"),i=t("PDuk"),c=t.n(i),u=t("sQ/U"),p=t("8z5R"),l=t("vn3c"),d=t("Pzz+"),m=t("bmRM"),f=r.a.compose(o.a.createContainer(function(e){var t=e.itemMetadata,n=t.getId(),r=t.get("course").get("id");return{prompt:p.a.get(Object(i.tupleToStringKey)([u.a.get().id,r,n]),{includes:p.a.DEFAULT_INCLUDES,fields:p.a.DEFAULT_FIELDS})}}),o.a.createContainer(function(e){var t=e.prompt;if(!t||!t.promptType)return{};var n=t.promptType.definition.courseItemForumQuestionId,r=[t.userId,n].join("~");return{discussionPromptQuestion:l.a.localGet(r,{fields:l.a.DEFAULT_FIELDS})}}),Object(s.a)(function(e){var t;return!!e.discussionPromptQuestion}),Object(a.a)(function(e){var t=e.discussionPromptQuestion,n=t&&t.id.split("~")[3],r;return{isLoaded:!0,questionId:n,question:{id:n,questionId:n,type:"question",forumType:d.j.rootForumType},promptContent:t&&t.content.details,learnerCount:t&&t.totalAnswerCount}}))(m.a);e.a=f},"8fII":function(module,exports,e){},"8z5R":function(module,e,t){"use strict";var n=t("VbXa"),r=t.n(n),o=t("HlCP"),s=t("vn3c"),a=function(e){function OnDemandDiscussionPrompts(){return e.apply(this,arguments)||this}return r()(OnDemandDiscussionPrompts,e),OnDemandDiscussionPrompts}(o.a);a.RESOURCE_NAME="onDemandDiscussionPrompts.v1",a.DEFAULT_INCLUDES=["question"],a.DEFAULT_FIELDS=["promptType","".concat(s.a.RESOURCE_NAME,"(").concat(s.a.DEFAULT_FIELDS.join(","),")")],e.a=a},BMks:function(module,e,t){"use strict";t.d(e,"b",function(){return N}),t.d(e,"d",function(){return A}),t.d(e,"a",function(){return R}),t.d(e,"c",function(){return L});var n=t("VbXa"),r=t.n(n),o=t("DXTi"),s=t.n(o),a=t("eJMc"),i=t.n(a),c=t("F/us"),u=t.n(c),p=t("17x9"),l=t.n(p),d=t("wiyT"),m=t.n(d),f=t("CWYE"),v=t("fw5G"),g=t.n(v),h=t("hN99"),b=t("q5zD"),E=t("rcV8"),I=t("8cuT"),y=t.n(I),C=t("ZEYT"),D=t("6R2g"),P=t("V4Vm"),S=t("Pzz+"),w=t("GP6s"),O=t.n(w),x=4,q=function(e){function RespondedLearnersImageBaseComponent(){return e.apply(this,arguments)||this}r()(RespondedLearnersImageBaseComponent,e);var t=RespondedLearnersImageBaseComponent.prototype;return t.renderMorePeopleImage=function renderMorePeopleImage(){if(this.props.responseCount>4){var e=Object(P.a)(this.props.responseCount-4,!0);return s.a.createElement("li",{className:"bgcolor-black-g3"},s.a.createElement("div",{className:"horizontal-box align-items-absolute-center num-responder-images caption-text"},"+",e))}return null},t.render=function render(){var e=this.props.answers,t=e&&e.filter(function(e,t){return t<4}).map(function(e){return{image:e.creator.photoUrl,name:e.creator.fullName}});if(!t||0===t.length)return null;return s.a.createElement("ul",{className:"nostyle horizontal-box align-items-absolute-center learner-image-list"},t.map(function(e){var t=e.name,n=e.image;return s.a.createElement("li",{key:t},s.a.createElement(D.a,{width:32,height:32,fullName:t,profileImageUrl:n}))}),this.renderMorePeopleImage())},RespondedLearnersImageBaseComponent}(s.a.Component);q.propTypes={responseCount:l.a.number.isRequired,answers:l.a.array};var N=function(e){function Input(){return e.apply(this,arguments)||this}var t;return r()(Input,e),Input.prototype.render=function render(){var e=this.props,t=e.question,n=e.savingState,r=e.placeholder;return s.a.createElement("div",{className:"horizontal-box align-items-left theme-light c-prompt-card"},s.a.createElement(C.a,{hideFollow:!0,question:t,parentPost:t,savingState:n,placeholder:O()(r)}))},Input}(s.a.Component);N.propTypes={placeholder:l.a.string.isRequired,question:l.a.object.isRequired,savingState:l.a.string.isRequired};var A=function(e){function Saving(){return e.apply(this,arguments)||this}var t;return r()(Saving,e),Saving.prototype.render=function render(){return s.a.createElement("div",{className:"horizontal-box align-items-absolute-center bgcolor-white c-prompt-card color-hint-text"},s.a.createElement(b.a,{name:"spinner",className:"cif-spin"}),s.a.createElement("span",{className:"caption-text"},O()("Submitting Your Response")))},Saving}(s.a.Component),j=function(e){function CompletedBaseComponent(){return e.apply(this,arguments)||this}var t;return r()(CompletedBaseComponent,e),CompletedBaseComponent.prototype.render=function render(){var e=this.props.url;return s.a.createElement("div",{className:"vertical-box align-items-absolute-center bgcolor-white c-prompt-card",role:"alert"},s.a.createElement("span",{className:"color-secondary-text"},O()("Your response has been submitted. Engage and discuss with other learners below!")),this.props.url&&s.a.createElement(i.a,{className:"link-button secondary",to:e},O()("View My Response")))},CompletedBaseComponent}(s.a.Component);j.propTypes={showLink:l.a.bool,questionId:l.a.string.isRequired,url:l.a.string};var T={Input:N,Saving:A,Completed:u.a.compose(Object(E.a)(function(e){if(e.showLink){var t=Object(f.a)("/api/onDemandCourseForumAnswers.v1/",{type:"rest"}),n=[e.userId,e.courseId,e.questionId].join("~"),r=(new g.a).addQueryParam("q","byForumQuestionId").addQueryParam("userCourseQuestionId",n).addQueryParam("sort","createdAtAsc").addQueryParam("creatorId",e.userId).toString();return m()(t.get(r)).then(function(e){if(!e.elements.length)return{url:void 0};var t;return{url:Object(h.b)(e.elements[0].forumAnswerId)}})}return m()({url:void 0})}))(j),RespondedLearnersImage:u.a.compose(y()(["ThreadDetailsStore"],function(e,t){var n=e.ThreadDetailsStore,r=t.questionId,o=t.page;return{answers:n.getReplies(r,o,S.c.newestSort)||[]}}))(q)},R=T.Completed,L=T.RespondedLearnersImage,F=T},GmVJ:function(module,e,t){"use strict";t.r(e);var n=t("VbXa"),r=t.n(n),o=t("Yt/I"),s=t.n(o),a=t("K2XA"),i=t("DXTi"),c=t.n(i),u=t("geBo"),p=t("WdIA"),l=t.n(p),d=function(e){function DiscussionPromptWrapper(){return e.apply(this,arguments)||this}var t;return r()(DiscussionPromptWrapper,e),DiscussionPromptWrapper.prototype.render=function render(){var e=this.props,t=e.computedItem,n=e.itemMetadata;return c.a.createElement(a.a,{className:"rc-DiscussionPromptWrapper",hideFeedback:!0},c.a.createElement("div",{className:"discussion-prompt-content"},c.a.createElement("div",{className:"vertical-box align-items-vertical-center"},c.a.createElement("div",null,c.a.createElement("span",{className:"cif-stack cif-2x","aria-label":s()("Discussion Prompt")},c.a.createElement("i",{className:"cif-circle cif-stack-2x c-prompt-icon"}),c.a.createElement("i",{className:"cif-comment cif-stack-1x cif-inverse comment-icon"}))),c.a.createElement("h2",{className:"c-prompt-title"},t.name)),c.a.createElement(u.a,{itemMetadata:n,previouslyCompleted:t.isCompleted})))},DiscussionPromptWrapper}(c.a.Component);e.default=d},JFCW:function(module,exports){exports.default={"ar":true,"de":true,"es":true,"fr":true,"ja":true,"ko":true,"pt":true,"ru":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}},PENF:function(module,e,t){"use strict";var n=t("F/us"),r=t.n(n),o=t("PStO"),s=t("jsrg"),a=t("VXRf"),i=t("kqb2"),c=t("Pzz+"),u=t("bmRM"),p,l=r.a.compose(o.a.createContainer(function(e){var t=e.itemMetadata,n=t.getId(),r=t.get("course").get("id");return{legacyDiscussionQuestionResults:i.a.finder("byPromptItem",{params:{courseId:r,itemId:n,sort:c.c.newestSort}})}}),Object(s.a)(function(e){var t;return!!e.legacyDiscussionQuestionResults}),Object(a.a)(function(e){var t=e.legacyDiscussionQuestionResults,n=r()(t).first(),o=n&&n.id,s;return{isLoaded:!0,questionId:o,question:{id:o,questionId:o,type:"question",forumType:c.j.rootForumType},promptContent:n&&n.content.details,learnerCount:n&&(n.answerCount||n.topLevelAnswerCount)}}))(u.a)},RX7l:function(module,exports,e){var t=e("Sovc"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},o=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},Sovc:function(module,exports,e){},WdIA:function(module,exports,e){var t=e("8fII"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},o=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},"Yt/I":function(module,exports,e){var t=e("JFCW"),n=t.default?t.default:{},r,o=(0,e("HdzH").default)(n);o.getLocale=function(){return"en"},module.exports=o},bmRM:function(module,e,t){"use strict";var n=t("VbXa"),r=t.n(n),o=t("17x9"),s=t.n(o),a=t("DXTi"),i=t.n(a),c=t("sQ/U"),u=t("kvW3"),p=t("wvdd"),l=t("BZ+2"),d=t("0jv7"),m=t("Pzz+"),f=t("q5zD"),v=t("7GkZ"),g=t("EWSN"),h=t("BMks"),b=t("GP6s"),E=t.n(b),I=t("RX7l"),y=t.n(I),C=function(e){function DiscussionPrompt(t,n){var r;return(r=e.call(this,t,n)||this).state={savingState:d.e.UNCHANGED,forumError:!1},r}r()(DiscussionPrompt,e);var t=DiscussionPrompt.prototype;return t.componentDidMount=function componentDidMount(){this.props.isLoaded&&(this.setState({questionId:this.props.questionId}),this.fetchAnswers(this.props.questionId,m.c.newestSort,this.props.page))},t.componentWillReceiveProps=function componentWillReceiveProps(e){var t=this.state.questionId;this.setState({savingState:e.savingStates[t]||d.e.UNCHANGED}),t&&this.props.savingStates[t]===d.e.SAVING&&e.savingStates[t]===d.e.SAVED&&this.fetchAnswers(t,m.c.newestSort,this.props.page)},t.componentDidUpdate=function componentDidUpdate(e,t){var n=this.props,r=n.questionId,o=n.page;e.page!==o&&this.fetchAnswers(r,m.c.newestSort,o)},t.fetchAnswers=function fetchAnswers(e,t,n){var r=this.props,o=r.courseId,s=r.courseSlug,a=r.currentForum,i;(0,this.context.executeAction)(p.b,{questionId:e,courseId:o,courseSlug:s,sort:t,page:n,contextId:o,userId:c.a.get().id,forumType:a.forumType.typeName})},t.renderLoading=function renderLoading(){return i.a.createElement("div",{className:"vertical-box align-items-vertical-center"},i.a.createElement(f.a,{name:"spinner",className:"cif-spin cif-3x"}))},t.renderInput=function renderInput(){var e=this.props,t=e.learnerCount,n=e.question,r=e.questionId,o=e.page,s=t>0;return i.a.createElement("div",null,i.a.createElement("div",{className:"color-hint-text participation-text"},E()("Participation is optional")),i.a.createElement(h.b,{savingState:this.state.savingState,question:n,placeholder:E()("Type your response here...")}),i.a.createElement(h.c,{responseCount:t,questionId:r,page:o}),i.a.createElement("div",{className:"horizontal-box align-items-absolute-center caption-text color-secondary-text"},s?i.a.createElement("div",null,i.a.createElement(u.c,{value:t})," ",i.a.createElement(u.b,{message:E()("{learnerCount, plural, =1 { learner has} other { learners have}} submitted a response."),learnerCount:t})):i.a.createElement("div",null,E()("Be the first to submit a response"))))},t.renderError=function renderError(){return i.a.createElement("div",{className:"horizontal-box align-items-absolute-center bgcolor-white c-prompt-card"},i.a.createElement("span",{className:"caption-text color-secondary-text"},E()("Sorry, we were unable to retrieve a forum.")))},t.renderCompleted=function renderCompleted(){var e=this.props,t=e.questionId,n=e.previouslyCompleted,r=e.page,o=e.currentForum,s=e.answerId,a=e.currentForumUrl,u=e.courseId;return i.a.createElement("div",null,i.a.createElement(h.a,{showLink:n,questionId:t,userId:c.a.get().id,courseId:u}),i.a.createElement("div",{className:"c-thread-container"},i.a.createElement(g.a,{sort:m.c.newestSort,page:r,forumId:o.id,questionId:t,answerId:s,forumLink:a})))},t.renderContent=function renderContent(){var e=this.state.savingState;if(e===d.e.SAVED||this.props.previouslyCompleted)return this.renderCompleted();if(e===d.e.UNCHANGED)return this.renderInput();if(e===d.e.SAVING)return i.a.createElement(h.d,null);return!1},t.renderBody=function renderBody(){var e=this.props.promptContent;return i.a.createElement("div",null,i.a.createElement("span",null,i.a.createElement(v.a,{cml:e})),this.renderContent())},t.render=function render(){var e=this.props.isLoaded,t=this.state.forumError;return i.a.createElement("div",{className:"rc-DiscussionPrompt"},!t&&(e?this.renderBody():this.renderLoading()),t&&this.renderError())},DiscussionPrompt}(i.a.Component);C.propTypes={savingStates:s.a.object.isRequired,previouslyCompleted:s.a.bool.isRequired,page:s.a.number,answerId:s.a.string,courseId:s.a.string,courseSlug:s.a.string,currentForum:s.a.instanceOf(l.a),currentForumUrl:s.a.string,questionId:s.a.string,question:s.a.object,promptContent:s.a.object,learnerCount:s.a.number,isLoaded:s.a.bool},C.contextTypes={executeAction:s.a.func.isRequired,router:s.a.object.isRequired},e.a=C},geBo:function(module,e,t){"use strict";t.d(e,"a",function(){return S});var n=t("VbXa"),r=t.n(n),o=t("lSNA"),s=t.n(o),a=t("17x9"),i=t.n(a),c=t("DXTi"),u=t.n(c),p=t("F/us"),l=t.n(p),d=t("ngyh"),m=t.n(d),f=t("+LJP"),v=t("8cuT"),g=t.n(v),h=t("pqXt"),b=t("5A/O"),E=t("PENF"),I=t("oQ9N"),y=t("KMW/"),C=t("UU2Q");function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){s()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var D=function discussionPromptContainer(){return b.a},P=Object(p.compose)(Object(I.a)({fields:["forumType","urlId"]}),Object(f.a)(function(e,t){return _objectSpread(_objectSpread({},Object(h.a)(e,t)),{},{page:e.location.query.page?parseInt(e.location.query.page,10):1,answerId:e.location.query.answerId?e.location.query.answerId:void 0})}),g()(["ThreadDetailsStore"],function(e,t){var n=e.ThreadDetailsStore,r=t.itemMetadata;return{savingStates:Object.assign({},n.savingStates)}}))(D()),S=function(e){function FluxibleConnectedDiscussionPrompt(){return e.apply(this,arguments)||this}r()(FluxibleConnectedDiscussionPrompt,e);var t=FluxibleConnectedDiscussionPrompt.prototype;return t.componentWillMount=function componentWillMount(){this.fluxibleContext=Object(C.a)(this.context.fluxibleContext)},t.render=function render(){return u.a.createElement(m.a,{context:this.fluxibleContext.getComponentContext()},u.a.createElement(P,this.props))},FluxibleConnectedDiscussionPrompt}(u.a.Component);S.contextTypes={fluxibleContext:i.a.object}},kqb2:function(module,e,t){"use strict";var n=t("VbXa"),r=t.n(n),o,s=function(e){function OnDemandDiscussionQuestions(){return e.apply(this,arguments)||this}return r()(OnDemandDiscussionQuestions,e),OnDemandDiscussionQuestions}(t("HlCP").a);s.RESOURCE_NAME="onDemandDiscussionQuestions.v1",e.a=s},vn3c:function(module,e,t){"use strict";var n=t("VbXa"),r=t.n(n),o,s=function(e){function OnDemandDiscussionPromptQuestions(){return e.apply(this,arguments)||this}return r()(OnDemandDiscussionPromptQuestions,e),OnDemandDiscussionPromptQuestions}(t("HlCP").a);s.RESOURCE_NAME="onDemandDiscussionPromptQuestions.v1",s.DEFAULT_FIELDS=["content","creatorId","createdAt","forumId","sessionId","lastAnsweredBy","lastAnsweredAt","totalAnswerCount","topLevelAnswerCount","viewCount"],e.a=s}}]);
//# sourceMappingURL=en.82.ae3619ed85ccf956e045.js.map