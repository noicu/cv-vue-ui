import{f as _}from"./index-xJp9Kd2E.js";import{r as s,o as p,g as d,a as t,w as o,b as n,d as r,h as w,_ as u,x as y}from"./index-BW-0fVWL.js";const g=r("div",{class:"title3"},"Caveat:",-1),k=r("p",null,[n("The "),r("strong",{class:"code"},"w-autocomplete"),n(` component is mounted in place in the DOM. At the moment
there is no option to teleport it elsewhere, so if the parent has hidden overflow, the
autocomplete selection menu may be cut. If you need this feature, please open an issue.
`)],-1),$=w(`<p>In this example we can look for a chemical element in the list and select it.</p><p>One obvious advantage of the Wave UI autocomplete is the fact that you can provide a different
searchable string than the final label to display.</p><p>For instance, in this example you can look for elements by their name, like literally &quot;Sodium&quot;,
but you can also type the atomic number or symbol to find it.</p><p>you can try these interesting matches (for their symbol is not found in their name string):</p><div class="w-flex gap3"><div class="text-center"><div class="element"><div class="title1 mt7 symbol code">Na</div><div class="number code">11</div></div><div class="primary mt1">Sodium</div></div><div class="text-center"><div class="element"><div class="title1 mt7 symbol code">Mg</div><div class="number code">12</div></div><div class="primary mt1">Magnesium</div></div><div class="text-center"><div class="element"><div class="title1 mt7 symbol code">Cr</div><div class="number code">24</div></div><div class="primary mt1">Chromium</div></div></div>`,5);function E(e,l,h,f,v,m){const c=s("alert"),i=s("title-link"),a=s("w-autocomplete"),b=s("example");return p(),d("div",null,[t(c,{info:""},{default:o(()=>[g,k]),_:1}),t(i,{h2:""},{default:o(()=>[n("Default")]),_:1}),$,t(b,{"content-class":"py12","blank-codepen":["js"]},{pug:o(()=>[n('w-autocomplete.mb12(:items="chemicalElement")')]),html:o(()=>[n(`<w-autocomplete :items="chemicalElement" class="mb12">
</w-autocomplete>`)]),js:o(()=>[n(`import { faker } from '@faker-js/faker'

const app = Vue.createApp({
  data: () => ({
    chemicalElement: faker.definitions.science.chemicalElement.map(element => {
      return {
        value: element.symbol,
        label: element.name,
        searchable: \`\${element.symbol}, \${element.name}, \${element.atomicNumber}\`
      }
    })
  })
})

app.use(WaveUI)
app.mount('#app')
`)]),default:o(()=>[t(a,{class:"mb12",items:e.chemicalElement},null,8,["items"])]),_:1}),t(i,{h2:""},{default:o(()=>[n("Placeholder")]),_:1}),t(b,{"content-class":"py12","blank-codepen":["js"]},{pug:o(()=>[n('w-autocomplete.mb12(:items="chemicalElement" placeholder="select an element")')]),html:o(()=>[n(`<w-autocomplete
  :items="chemicalElement"
  placeholder="select an element"
  class="mb12">
</w-autocomplete>`)]),js:o(()=>[n(`import { faker } from '@faker-js/faker'

const app = Vue.createApp({
  data: () => ({
    chemicalElement: faker.definitions.science.chemicalElement.map(element => {
      return {
        value: element.symbol,
        label: element.name,
        searchable: \`\${element.symbol}, \${element.name}, \${element.atomicNumber}\`
      }
    })
  })
})

app.use(WaveUI)
app.mount('#app')`)]),default:o(()=>[t(a,{class:"mb12",items:e.chemicalElement,placeholder:"select an element"},null,8,["items"])]),_:1})])}const x={data:()=>({chemicalElement:_.definitions.science.chemicalElement.map(e=>({value:e.symbol,label:e.name,searchable:`${e.symbol}, ${e.name}, ${e.atomicNumber}`}))})},j=u(x,[["render",E]]),T=r("div",{class:"w-divider my12"},null,-1);function A(e,l,h,f,v,m){const c=s("title-link"),i=s("alert"),a=s("component-api");return p(),d("div",null,[T,t(c,{class:"title1",h2:""},{default:o(()=>[n("API")]),_:1}),t(i,{class:"mb6",info:""},{default:o(()=>[n("The missing props descriptions will be added shortly (all the props are already listed).")]),_:1}),t(a,{class:"mt0",items:m.props,descriptions:e.propsDescs,title:"Props"},null,8,["items","descriptions"]),t(a,{items:e.slots,title:"Slots"},null,8,["items"]),t(a,{items:m.events,title:"Events"},null,8,["items"])])}const V={allowDuplicates:"Allow duplicates",itemLabelKey:"Specifies the name of the property in each item object where to find the item's label string to display.",itemSearchableKey:"Specifies the name of the property in each item object where to find the item's searchable string. This may be an aggregation of multiple item properties that may be invisible but still useful in the search.",itemValueKey:"Specifies the property name in each item object where to find the value of the item.",items:"Expecting an array of objects. Each object being a select list item, it should include at least a <code>label</code> attribute.",modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>The current selection of the autocomplete.<br>Gets updated on item selection/unselection.',multiple:"Allows multiple selections. When set to <code>true</code>, the list of choices will stay open after selecting an item.",noMatch:"A string to display as a menu message when there is no match for the current keyword in the list of options.",openOnKeydown:"Open the dropdown menu on keydown (when the autocomplete has the focus).",placeholder:"Provide a placeholder for the autocomplete, to display when no keyword is entered and there is no selection."},M={"no-match":{description:'Provide a custom "No match" HTML message to display in the selection menu when there is no match.<br>Default message is <code>No match.</code>.'},selection:{description:"Provide a custom selection content/layout to display in each selection pill when one or multiple items are selected."},item:{description:"Provide a custom content/layout for each item of the dropdown menu."},"extra-item":{description:"Provide a custom content to display as an extra item of the dropdown menu, after the other options."}},D={input:{description:"Emitted each time the selected item(s) changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Array, Mixed value]":"The new selected value(s). Array of values if <code>multiple</code> is set to <code>true</code>, or single value otherwise. The value refers to the value key of the selected item."}},"update:modelValue":{description:"Emitted each time the selected item(s) changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Array, Mixed value]":"The new selected value(s). Array of values if <code>multiple</code> is set to <code>true</code>, or single value otherwise. The value refers to the value key of the selected item."}},focus:{description:"Emitted on autocomplete focus.",params:{"[DOM event object]":"The associated focus DOM event."}},blur:{description:"Emitted on autocomplete blur.",params:{"[DOM event object]":"The associated blur DOM event."}},"item-click":{description:"Emitted on autocomplete list item click.",params:{"[Object]":"The clicked item object."}},"item-select":{description:"Emitted on list item select (click or <kbd>enter</kbd> keydown).",params:{"[Object]":"The selected item object."}}},N={data:()=>({propsDescs:V,slots:M}),computed:{props(){return y.props},events(){return y.emits.reduce((e,l)=>(e[l]=D[l]||{})&&e,{})}}},O=u(N,[["render",A]]);function P(e,l,h,f,v,m){const c=s("ui-component-title"),i=s("examples"),a=s("api");return p(),d("main",null,[t(c,{slug:"w-autocomplete","in-progress":""},{default:o(()=>[n("w-autocomplete")]),_:1}),t(i),t(a)])}const S={components:{Examples:j,Api:O}},U=u(S,[["render",P]]);export{U as default};
