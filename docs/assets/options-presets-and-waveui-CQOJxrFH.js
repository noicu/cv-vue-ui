import{r as l,o as r,g as c,a as s,w as o,b as e,j as p,d as t,F as m,k as _,t as u,f as w,m as v,_ as U}from"./index-BW-0fVWL.js";const W=t("code",null,"$waveui",-1),x=t("p",null,"Wave UI accepts these configuration options:",-1),$={class:"mt4"},j={class:"title3"},V={key:0},P=["innerHTML"],R={class:"mt6"},F={class:"mx1",href:"https://github.com/antoniandre/wave-ui/blob/main/src/wave-ui/utils/config.js",target:"_blank"},M=t("div",{class:"title3"},"The purpose of the components presets is to spare you the repetitive markup.",-1),S=t("p",null,[e(`If you are always using the same props on the Wave UI components of your app, the presets will
allow you to define the usual props of each of the components you need.`),t("br")],-1),L=t("p",{class:"text-bold"},"The presets act like a default value, that can be overridden if the same prop is provided on the Wave UI component in template markup.",-1),A=t("p",{class:"mt6"},"Example of presets:",-1),O=t("strong",{class:"code"},"w-button",-1),H=t("p",null,[e("Let's apply this preset to the "),t("strong",{class:"code"},"w-button"),e(` component and see how this component
would render.`)],-1),N=t("br",null,null,-1),B=t("p",null,"Note that:",-1),D=t("ul",null,[t("li",null,"The 10 first buttons have no prop and yet they don't render like the Wave UI defaults."),t("li",null,"The two green buttons override the preset background color."),t("li",null,"The first green button does not override the other presets except the background color, so they are applied.")],-1),E=t("code",null,"$waveui",-1),J=t("p",null,[e("The "),t("code",null,"$waveui"),e(` object is a Swiss Army Knife at your disposal. It can help you in many
ways, it is completely reactive, and accessible from anywhere in your app via:`),t("br")],-1),G=t("code",{class:"py0 mr1"},"this.$waveui",-1),K=t("code",{class:"py0 mr1"},"$waveui",-1),Y=t("code",{class:"py0 mr1"},"inject('$waveui')",-1),q=t("p",{class:"mt6"},"Here is the list of what you can find in this object, along with the current values in this app as an illustration:",-1),z=["innerHTML"],Q=t("div",{class:"title4 text-bold mt6"},"Current value(s) in this app and context:",-1),X={class:"primary-light1"};function Z(a,i,te,oe,se,ne){const d=l("title-link"),y=l("router-link"),b=l("w-icon"),k=l("w-tag"),f=l("ssh-pre"),h=l("w-button"),I=l("example"),C=l("w-list"),g=l("w-accordion");return r(),c("main",null,[s(d,{class:"mt4",h1:"",slug:"options-presets-and-waveui"},{default:o(()=>[e("Options, presets & "),W]),_:1}),s(g,{class:"mt6",modelValue:a.openPanes,"onUpdate:modelValue":i[3]||(i[3]=n=>a.openPanes=n),items:3,"content-class":"pl11 pb6 mb12"},{"item-title.1":o(()=>[s(d,{class:"ml2 my3",h2:"",onClick:i[0]||(i[0]=p(()=>{},["prevent"]))},{default:o(()=>[e("Wave UI global options")]),_:1})]),"item-content.1":o(()=>[x,t("ul",$,[(r(!0),c(m,null,_(a.waveUiOptions,(n,T)=>(r(),c("li",{class:"mb4",key:T},[t("code",j,u(n.label),1),e(":"),n.route?(r(),c("div",V,[e("Read on in the"),s(y,{class:"mx1",to:n.route},{default:o(()=>[e(u(n.route.startsWith("w-")?n.route:n.label),1)]),_:2},1032,["to"]),e(u(n.route.startsWith("w-")?"component":"knowledge base page")+".",1)])):n.definition?(r(),c("div",{key:1,innerHTML:n.definition},null,8,P)):w("",!0)]))),128))]),t("div",R,[s(b,{class:"ml-1 mr1"},{default:o(()=>[e("wi-chevron-right")]),_:1}),e("View the"),t("a",F,[e("full list of options directly in the codebase"),s(b,{class:"ml2",md:""},{default:o(()=>[e("mdi mdi-open-in-new")]),_:1})]),e(".")])]),"item-title.2":o(()=>[s(d,{class:"ml2 my3",h2:"",onClick:i[1]||(i[1]=p(()=>{},["prevent"])),slug:"presets"},{default:o(()=>[e("Presets"),s(k,{class:"ml3","bg-color":"red-light1",lg:"",color:"white",round:""},{default:o(()=>[e("From version 3.0")]),_:1})]),_:1})]),"item-content.2":o(()=>[M,S,L,A,s(f,{class:"mt4",language:"js",label:"Javascript",dark:a.$store.state.darkMode},{default:o(()=>[e(`// In the global Wave UI config object.
presets: {
  'w-button': { color: 'light-blue-light4', bgColor: 'deep-purple-light2', tile: true, outline: true, lg: true },
  'w-accordion': { expandIconRotate90: true },
  'w-overlay': { bgColor: 'pink', opacity: 0.3 }
}
`)]),_:1},8,["dark"]),s(d,{h3:""},{default:o(()=>[e("Using "),O,e(" presets")]),_:1}),H,s(f,{class:"mt4",language:"js",label:"Javascript",dark:a.$store.state.darkMode},{default:o(()=>[e(`presets: {
  'w-button': {
    color: 'light-blue-light4',
    bgColor: 'deep-purple-light2',
    tile: true,
    outline: true,
    lg: true
  }
}
`)]),_:1},8,["dark"]),s(I,null,{pug:o(()=>[e('w-button.ma2(v-for="i in 10") button '+u("{{ i }}")+`
br
w-button.ma2(bg-color="success") green button
w-button.ma2(bg-color="success" :tile="false" :outline="false" :lg="false") another green button`)]),html:o(()=>[e('<w-button v-for="i in 10" class="ma2">button '+u("{{ i }}")+`</w-button>
<br>
<w-button bg-color="success" class="ma2">green button</w-button>
<w-button
  bg-color="success"
  :tile="false"
  :outline="false"
  :lg="false" class="ma2">
  another green button
</w-button>
`)]),js:o(()=>[e(`presets: {
  'w-button': {
    color: 'light-blue-light4',
    bgColor: 'deep-purple-light2',
    tile: true,
    outline: true
  }
}
`)]),default:o(()=>[(r(),c(m,null,_(10,n=>s(h,v({class:"ma2"},{color:"light-blue-light4",bgColor:"deep-purple-light2",tile:!0,outline:!0,lg:!0}),{default:o(()=>[e("button "+u(n),1)]),_:2},1040)),64)),N,s(h,v({class:"ma2","bg-color":"success"},{tile:!0,outline:!0,lg:!0}),{default:o(()=>[e("green button")]),_:1},16),s(h,{class:"ma2","bg-color":"success",tile:!1,outline:!1,lg:!1},{default:o(()=>[e("another green button")]),_:1})]),_:1}),B,D]),"item-title.3":o(()=>[s(d,{class:"ml2 my3",h2:"",onClick:i[2]||(i[2]=p(()=>{},["prevent"]))},{default:o(()=>[e("The "),E,e(" helper")]),_:1})]),"item-content.3":o(()=>[J,s(C,{items:3,icon:"wi-check"},{"item.1":o(()=>[G,e(" in a Vue component")]),"item.2":o(()=>[K,e(" in any Vue template")]),"item.3":o(()=>[Y,e(" when using the Vue composition API")]),_:1}),q,s(g,{items:a.waveuiObject,"title-class":"code","content-class":"ml5","expand-single":"","expand-icon-rotate90":""},{"item-content":o(({item:n})=>[t("p",{class:"text-bold",innerHTML:n.desc},null,8,z),n.title.includes("()")?w("",!0):(r(),c(m,{key:0},[Q,t("pre",X,u(a.$waveui[n.title]),1)],64))]),_:1},8,["items"])]),_:1},8,["modelValue"])])}const ee={data:()=>({openPanes:[!0,!0,!0],waveUiOptions:[{label:"on",definition:"From version 3.0. Sets the Wave UI root on a custom node (expects a valid CSS selector). Default: <code>#app</code>, if not found, <code>body</code>."},{label:"breakpoints",route:"breakpoints"},{label:"colors",route:"colors"},{label:"css",definition:"A set of CSS-related options."},{label:"icons",route:"w-icon"},{label:"iconsLigature",route:"w-icon"},{label:"notificationManager",route:"w-notification"},{label:"presets",route:"options-presets-and-waveui#presets"},{label:"theme",definition:"From version 3.0. Choose which theme to use: <code>light</code> or <code>dark</code>. You can also set <code>auto</code> to let Wave UI read the preferred theme from the user OS."}],waveuiObject:[{title:"breakpoint",desc:'Gives information about the current breakpoint and screen width.<br>Read more about it in the <a href="/breakpoints">breakpoints knowledge base</a> page.'},{title:"colors",desc:'Contains the full list of colors available in the app with their hex values. It includes the colors from the color palette, the four status colors (info, warning, error, success), the primary and secondary color, all your custom colors, and all the color shades (light1-6, dark 1-6).<br>Read more about colors in the <a href="/colors">colors knowledge base</a> page.'},{title:"config",desc:'Contains the computed list of configuration that Wave UI is using. This includes the global configuration you may have defined, as well as all the defaults.<br>Read more about it in the <a href="#wave-ui-global-options">Wave UI global options</a> above section.'},{title:"preferredTheme",desc:'From version 3.0. When the theme is set to <code>auto</code>, Wave UI will detect the user preferred theme and will store this value in this variable. If the user preferred theme changes, from the operating system, this value will be updated.<br>Read more about themes in the <a href="/themes">themes knowledge base</a> page.'},{title:"theme",desc:'From version 3.0. The current theme that Wave UI is using.<br>Read more about themes in the <a href="/themes">themes knowledge base</a> page.'},{title:"notify()",desc:'A function to notify.<br>Read more about the notification manager in the <a href="/w-notification">notification component</a>.'},{title:"switchTheme()",desc:'From version 3.0. A function to switch theme.<br>Read more about themes in the <a href="/themes">themes knowledge base</a> page.'}]}),mounted(){const a=document.location.hash||"";a.includes("presets")?this.openPanes=[!1,!0,!1]:a.includes("the-waveui-helper")&&(this.openPanes=[!1,!1,!0])}},le=U(ee,[["render",Z]]);export{le as default};
