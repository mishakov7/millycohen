!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=20)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.data}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.wp.compose}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){var r=n(15),s=n(16),i=n(17),o=n(19);e.exports=function(e,t){return r(e)||s(e,t)||i(e,t)||o()},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){!function(){e.exports=this.regeneratorRuntime}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.plugins}()},function(e,t){!function(){e.exports=this.wp.dataControls}()},function(e,t){!function(){e.exports=this.wp.a11y}()},function(e,t){!function(){e.exports=this.wp.hooks}()},function(e,t){!function(){e.exports=this.lodash}()},function(e,t){!function(){e.exports=this.wp.coreData}()},function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,s,i=[],o=!0,a=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(e){a=!0,s=e}finally{try{o||null==n.return||n.return()}finally{if(a)throw s}}return i}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){var r=n(18);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"getSettings",(function(){return O})),n.d(r,"getCustom",(function(){return h})),n.d(r,"getFormInfo",(function(){return j})),n.d(r,"getSections",(function(){return _})),n.d(r,"getModifiedSettings",(function(){return y}));var s={};n.r(s),n.d(s,"updateSetting",(function(){return E})),n.d(s,"updateCustom",(function(){return w})),n.d(s,"resetFormSaveState",(function(){return C})),n.d(s,"saveSettings",(function(){return P}));var i=n(0),o=n(4),a=n(3),c=n(2),l=n(1),u=n(9),f=n(10),g=n(5),p=n.n(g);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){p()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}
/**
 * Reducer for the Genesis Blocks data store.
 *
 * The reducer handles actions sent to the data store. Reducers must be pure so
 * they should have no side effects. Do not put API calls into the reducer.
 *
 * @since   1.0.0
 * @author  StudioPress
 * @license GPL-2.0-or-later
 */var m=b({form:{fail:!1,success:!1,is_saving:!1},custom:[],modifiedSettings:[]},genesisBlocksSettingsData),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;return"UPDATE_CUSTOM"===t.type?b(b({},e),{},{custom:b(b({},e.custom),{},p()({},t.setting.key,t.setting.value))}):"UPDATE_SETTING"===t.type?b(b({},e),{},{settings:b(b({},e.settings),{},p()({},t.setting.key,t.setting.value)),modifiedSettings:b(b({},e.modifiedSettings),{},p()({},t.setting.key,t.setting.value))}):"SAVING"===t.type?b(b({},e),{},{form:b(b({},e.form),{},{fail:!1,success:!1,is_saving:!0})}):"SAVED"===t.type?b(b({},e),{},{form:b(b({},e.form),{},{success:!0===t.success,fail:!0!==t.success,is_saving:!1}),modifiedSettings:t.success?[]:e.modifiedSettings}):"RESET"===t.type?b(b({},e),{},{form:b(b({},e.form),{},{fail:!1,success:!1,is_saving:!1})}):e},O=function(e){return e.settings||{}},h=function(e){return e.custom||{}},j=function(e){return e.form||{}};function _(e){return e.hasOwnProperty("sections")?e.sections:{}}var y=function(e){return e.modifiedSettings||[]},S=n(7),k=n.n(S),x=(n(14),k.a.mark(P));
/**
 * Actions let components change store state by sending a payload of data.
 *
 * This file exposes methods to send actions of a given type to the Genesis Blocks
 * data store. The reducer (reducer.js) then determines how to update store
 * state based on the type of action it receives.
 *
 * @since   1.0.0
 * @author  StudioPress
 * @license GPL-2.0-or-later
 */
function E(e){return{type:"UPDATE_SETTING",setting:e}}function w(e){return{type:"UPDATE_CUSTOM",setting:e}}function C(){return{type:"RESET"}}function P(e){var t;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,{type:"SAVING"};case 2:t=null;try{wp.data.dispatch("core").saveSite(e),t=!0}catch(e){t=!1}return n.abrupt("return",{type:"SAVED",success:t});case 5:case"end":return n.stop()}}),x)}
/**
 * Registers the 'genesis-blocks/global-settings' WordPress data store.
 *
 * @see docs/modules/settings.md
 * @since   1.0.0
 * @author  StudioPress
 * @license GPL-2.0-or-later
 */var M={selectors:r,actions:s,reducer:v,controls:f.controls},T=(Object(l.registerStore)("genesis-blocks/global-settings",M),n(11)),D=n(12);var U=Object(a.compose)([Object(l.withSelect)((function(e){return{form:e("genesis-blocks/global-settings").getFormInfo(),settings:e("genesis-blocks/global-settings").getModifiedSettings(),custom:e("genesis-blocks/global-settings").getCustom()}}))])((
/**
 * SaveButton component
 *
 * Shows an adjacent notice with the result of the save operation.
 *
 * @since   1.0.0
 * @author  StudioPress
 * @license GPL-2.0-or-later
 */
function(e){var t=e.form,n=e.settings,r=e.custom,s=e.children,o=e.successMessage,a=e.failMessage,u=e.messageDuration,f=Object(i.useRef)();return Object(i.createElement)(i.Fragment,null,Object(i.createElement)(c.Button,{isPrimary:!0,isBusy:t.is_saving,disabled:t.is_saving,onClick:function(){Object(D.doAction)("genesisBlocks.savingSettings",n,r),clearTimeout(f.current),Object(l.dispatch)("genesis-blocks/global-settings").saveSettings(n)},className:"genesis-blocks-settings-save has-notices"},s),t.success||t.fail?function(){f.current=setTimeout((function(){return Object(l.dispatch)("genesis-blocks/global-settings").resetFormSaveState()}),1e3*u);var e=t.success?o:a;Object(T.speak)(e,"polite");var n="genesis-blocks-save-notice"+"".concat(t.success?" success":"")+"".concat(t.fail?" fail":"");return Object(i.createElement)("span",{className:n},e)}():"")}));
/**
 * Checkbox field
 *
 * @since   1.0.0
 * @author  StudioPress
 * @license GPL-2.0-or-later
 */var A=Object(a.compose)([Object(l.withDispatch)((function(){return{onUpdate:function(e){Object(l.dispatch)("genesis-blocks/global-settings").updateSetting({key:e.key,value:e.value})}}}))])((function(e){var t=e.settings,n=e.field,r=e.onUpdate;return Object(i.createElement)(c.CheckboxControl,{heading:n.heading,label:n.label,help:n.help,checked:!!t[n.id]&&t[n.id],onChange:function(e){return r({key:n.id,value:e})}})}));var I=
/**
 * Html field
 *
 * @since   1.0.0
 * @author  StudioPress
 * @license GPL-2.0-or-later
 */
function(e){var t=e.field;return Object(i.createElement)("div",{dangerouslySetInnerHTML:{__html:t.content}})},N=n(13),F=n(8),R=["image"],B=Object(o.__)("Image"),z=Object(o.__)("Select an image"),G=Object(o.__)("Choose image"),V=Object(o.__)("Replace image"),L=Object(o.__)("Remove image");var H=Object(l.withSelect)((function(e,t){var n=e("core").getMedia,r=t.settings[t.field.id];return{media:r?n(r):null,imageId:r}})),W=Object(l.withDispatch)((function(e,t){var n=e("genesis-blocks/global-settings").updateSetting;return{onUpdateImage:function(e){n({key:t.field.id,value:e.id})},onRemoveImage:function(){n({key:t.field.id,value:null})}}})),$=Object(a.compose)(H,W)((function(e){var t,n,r,s=e.field,o=e.imageId,a=e.media,l=e.onUpdateImage,u=e.onRemoveImage;if(a){var f=s.image_size||"thumbnail";Object(N.has)(a,["media_details","sizes",f])?(t=a.media_details.sizes[f].width,n=a.media_details.sizes[f].height,r=a.media_details.sizes[f].source_url):(t=a.media_details.width,n=a.media_details.height,r=a.source_url)}return Object(i.createElement)(i.Fragment,null,Object(i.createElement)("div",{className:"genesis-blocks-settings-image"},Object(i.createElement)("p",{className:"components-base-control__label"},s.label||B),Object(i.createElement)(F.MediaUpload,{title:s.label_media_modal||z,onSelect:l,allowedTypes:R,render:function(e){var l=e.open;return Object(i.createElement)("div",{className:"genesis-blocks-settings-image__container"},Object(i.createElement)(c.Button,{className:o?"genesis-blocks-settings-image__preview":"genesis-blocks-settings-image__toggle",onClick:l,"aria-label":s.label_button_aria||null,isSecondary:!0},!!o&&a&&Object(i.createElement)(c.ResponsiveWrapper,{naturalWidth:t,naturalHeight:n,isInline:!0},Object(i.createElement)("img",{src:r,alt:""})),!!o&&!a&&Object(i.createElement)(c.Spinner,null),!o&&(s.label_button||G)))},value:o}),!!o&&a&&!a.isLoading&&Object(i.createElement)(F.MediaUpload,{title:s.label_media_modal||z,onSelect:l,allowedTypes:R,modalClass:"genesis-blocks-settings-image__media-modal",render:function(e){var t=e.open;return Object(i.createElement)(c.Button,{onClick:t,isSecondary:!0,"aria-label":s.label_replace_aria||null},s.label_replace||V)}}),!!o&&Object(i.createElement)(c.Button,{onClick:u,isLink:!0,isDestructive:!0,"aria-label":s.label_remove_aria||null},s.label_remove||L),!!s.help&&Object(i.createElement)("p",{id:s.id+"__help",className:"components-base-control__help"},s.help)))})),q=n(6),J=n.n(q);var K={checkbox:A,html:I,image:$,radio:Object(a.compose)([Object(l.withDispatch)((function(){return{onUpdate:function(e){Object(l.dispatch)("genesis-blocks/global-settings").updateSetting({key:e.key,value:e.value})}}}))])((
/**
 * Radio field
 *
 * @since   1.0.0
 * @author  StudioPress
 * @license GPL-2.0-or-later
 */
function(e){var t=e.settings,n=e.field,r=e.onUpdate;return Object(i.createElement)(c.RadioControl,{label:n.label,help:n.help,selected:!!t[n.id]&&t[n.id],options:function(e){for(var t=[],n=0,r=Object.entries(e);n<r.length;n++){var s=J()(r[n],2),i=s[0],o=s[1];t.push({value:i,label:o})}return t}(n.options),onChange:function(e){return r({key:n.id,value:e})}})})),select:Object(a.compose)([Object(l.withDispatch)((function(){return{onUpdate:function(e){Object(l.dispatch)("genesis-blocks/global-settings").updateSetting({key:e.key,value:e.value})}}}))])((
/**
 * Select field
 *
 * @since   1.0.0
 * @author  StudioPress
 * @license GPL-2.0-or-later
 */
function(e){var t=e.settings,n=e.field,r=e.onUpdate;return Object(i.createElement)(c.SelectControl,{label:n.label,value:!!t[n.id]&&t[n.id],options:function(e){for(var t=[],n=0,r=Object.entries(e);n<r.length;n++){var s=J()(r[n],2),i=s[0],o=s[1];t.push({value:i,label:o})}return t}(n.options),onChange:function(e){return r({key:n.id,value:e})}})})),text:Object(a.compose)([Object(l.withDispatch)((function(){return{onUpdate:function(e){Object(l.dispatch)("genesis-blocks/global-settings").updateSetting({key:e.key,value:e.value})}}}))])((
/**
 * Text field
 *
 * @since   1.0.0
 * @author  StudioPress
 * @license GPL-2.0-or-later
 */
function(e){var t=e.settings,n=e.field,r=e.onUpdate;return Object(i.createElement)(c.TextControl,{label:n.label?n.label:"",help:n.help?n.help:"",onChange:function(e){return r({key:n.id,value:e})},value:t[n.id]?t[n.id]:""})})),textarea:Object(a.compose)([Object(l.withDispatch)((function(){return{onUpdate:function(e){Object(l.dispatch)("genesis-blocks/global-settings").updateSetting({key:e.key,value:e.value})}}}))])((
/**
 * Textarea field
 *
 * @since   1.0.0
 * @author  StudioPress
 * @license GPL-2.0-or-later
 */
function(e){var t=e.settings,n=e.field,r=e.onUpdate;return Object(i.createElement)(c.TextareaControl,{label:n.label?n.label:"",help:n.help?n.help:"",onChange:function(e){return r({key:n.id,value:e})},value:t[n.id]?t[n.id]:""})}))};var Q=Object(a.compose)([Object(l.withSelect)((function(){return{settings:Object(l.select)("genesis-blocks/global-settings").getSettings(),sections:Object(l.select)("genesis-blocks/global-settings").getSections()}}))])((function(e){var t=e.settings,n=e.sections;return Object(i.createElement)(i.Fragment,null,Object(i.createElement)(c.TabPanel,{className:"genesis-blocks-settings-sections",activeClass:"is-active",onSelect:function(){Object(l.dispatch)("genesis-blocks/global-settings").resetFormSaveState()},tabs:Object.values(n)},(function(e){return Object(i.createElement)(i.Fragment,null,function(e){if(e.hasOwnProperty("fields")&&Array.isArray(e.fields)){var n=e.fields.map((function(e,n){if(!K.hasOwnProperty(e.type))return"";var r=K[e.type];return Object(i.createElement)(r,{key:n,settings:t,field:e})}));if(n.length>0)return Object(i.createElement)(i.Fragment,null,n)}return Object(i.createElement)("p",null,Object(o.__)("No fields found for this section."))}(e),Object(i.createElement)(c.SlotFillProvider,null,Object(i.createElement)(c.Slot,{name:"GenesisBlocksSettings_"+e.name.replace("genesis_blocks_settings_","")}),Object(i.createElement)(u.PluginArea,null)),Object(i.createElement)(U,{successMessage:Object(o.__)("Settings saved"),failMessage:Object(o.__)("Saving failed"),messageDuration:"2"},Object(o.__)("Save All")))})))}));
/**
 * The React application for the Genesis Blocks settings page.
 *
 * @since   1.0.0
 * @author  StudioPress
 * @license GPL-2.0-or-later
 */Object(i.render)(Object(i.createElement)(Q,null),document.getElementById("root"))}]);