import{r,o as h,g as p,a as l,w as t,b as e,t as c,d as n,F as T,k as D,c as S,_ as v,a4 as j,D as M}from"./index-BW-0fVWL.js";const A=n("span",{class:"code"},"w-select",-1),P=n("br",null,null,-1),O=n("span",{class:"code"},".w-app",-1),V=n("p",null,[e("This is the most basic use of the "),n("span",{class:"code"},"w-select"),e(" component. No label, no v-model, only items.")],-1),E=n("p",null,[e("The select list can have a label or not and a placeholder or not."),n("br")],-1),R=n("code",null,"label",-1),x=n("br",null,null,-1),U=n("code",null,"item-label-key",-1),$=n("p",{class:"mb4"},[e("Like in most components, you can set a "),n("code",null,"color"),e(" for the text and a "),n("code",null,"bg-color"),e(` for the
background.`),n("br"),e(`
By default, the text has the "`),n("span",{class:"code"},"primary"),e('" color.')],-1),C=n("p",null,[e("If an item object contains the key "),n("code",null,"color"),e(`, it will naturally be used by the
`),n("strong",{class:"code"},"w-select"),e(" component to display this list item in this color."),n("br"),e(`
To disable this you can set the `),n("code",null,"item-color-key"),e(" prop to an empty string.")],-1),F=n("div",{class:"title4"},"Default style (Underline)",-1),B=n("div",{class:"title4 mt6"},"Outline style",-1),W=n("div",{class:"title4"},"Default style (Underline)",-1),N=n("div",{class:"title4 mt6"},"Outline style",-1),q=n("span",{class:"code"},"w-select",-1),H=n("code",null,"model-value",-1),K=n("br",null,null,-1),Y=n("code",null,"item-value-key",-1),z=n("span",null,"v-model:",-1),G={class:"ml2"},J=n("p",null,"If no values are provided in the items objects, the labels will be used to identify the selected items.",-1),Q=n("span",null,"v-model:",-1),X={class:"ml2"},Z=n("p",null,[e("If it's more convenient for you, you can ask the "),n("span",{class:"code"},"w-select"),e(` component to return the
full items objects in the selection.`),n("br"),e(`
You then have the choice to provide an array of either values or full objects in the v-model,
if you want to prefill the select list.`)],-1),ee=n("p",null,null,-1),te=n("span",null,"v-model:",-1),le={class:"ml2"},ne=n("p",null,`By default the label is positioned inside, you can also place it on the left or right outside of
the select list.`,-1),se=n("p",null,[e("It is convenient to have the label inside the "),n("span",{class:"code"},"w-select"),e(` component to let it handle
the field focus event on label click.`),n("br"),e(`
The `),n("span",{class:"code"},"label"),e(` prop accepts any HTML, but because passing complex html via a prop is not fun,
there is also a prop for setting the label wish will grant more freedom.
`)],-1),ie=n("span",{class:"purple mx1"},"Inside",-1),oe=n("span",{class:"green mr1"},"Left",-1),ae=n("span",{class:"red ml1"},"Right",-1),ce=n("p",null,[e("The selection string is customizable through the "),n("code",null,"selection"),e(" slot."),n("br"),e(`
For consistency, the name of the provided parameter containing the selected item(s) is `),n("code",null,"item"),e(`,
whether you use a multiple or single select list.`)],-1),me={key:1,class:"px2"},de={class:"ml1"},re=n("div",{class:"title4 mb2"},"Label outside",-1),ue=n("div",{class:"title4 mt6 mb2"},"Label inside",-1),he=n("strong",{class:"mr1"},"Note:",-1),be=n("code",null,"disabled: true",-1);function pe(s,m,_,y,I,f){const u=r("alert"),o=r("title-link"),i=r("w-select"),a=r("example"),w=r("w-flex"),b=r("w-icon"),k=r("w-tag");return h(),p("div",null,[l(u,{info:""},{default:t(()=>[e("The "),A,e(` component can be placed in a hidden overflow container and the dropdown
menu will still be fully visible when open.`),P,e(`
This is because the select dropdown menu is placed at the `),O,e(` level in the DOM,
just so you don't have to worry about this annoying case.
`)]),_:1}),l(o,{h2:""},{default:t(()=>[e("Basic")]),_:1}),V,l(a,null,{pug:t(()=>[e('w-select(:items="items")')]),html:t(()=>[e('<w-select :items="items"></w-select>')]),js:t(()=>[e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`)]),default:t(()=>[l(i,{items:s.items1},null,8,["items"])]),_:1}),l(o,{h2:""},{default:t(()=>[e("Label and / or placeholder")]),_:1}),E,l(a,null,{pug:t(()=>[e(`w-select(:items="items" label="Label")
w-select.mt4(:items="items" placeholder="Placeholder")
w-select.mt4(:items="items" label="Label" placeholder="Placeholder")`)]),html:t(()=>[e(`<w-select
  :items="items"
  label="Label">
</w-select>

<w-select
  class="mt4"
  :items="items"
  placeholder="Placeholder">
</w-select>

<w-select
  class="mt4"
  :items="items"
  label="Label"
  placeholder="Placeholder">
</w-select>
`)]),js:t(()=>[e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`)]),default:t(()=>[l(i,{items:s.items1,label:"Label"},null,8,["items"]),l(i,{class:"mt4",items:s.items1,placeholder:"Placeholder"},null,8,["items"]),l(i,{class:"mt4",items:s.items1,label:"Label",placeholder:"Placeholder"},null,8,["items"])]),_:1}),l(u,{tip:""},{default:t(()=>[e(`The items of the select list should have a label, which is by default expected in each item
object under the `),R,e(" name."),x,e(`
If this is a constraint, you can use the option `),U,e(` to specify the name of another
attribute to be used instead.
`)]),_:1}),l(o,{h2:""},{default:t(()=>[e("Outline")]),_:1}),l(a,null,{pug:t(()=>[e('w-select(:items="items" outline) Label')]),html:t(()=>[e('<w-select :items="items" outline>Label</w-select>')]),js:t(()=>[e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`)]),default:t(()=>[l(i,{items:s.items1,outline:""},{default:t(()=>[e("Label")]),_:1},8,["items"])]),_:1}),l(o,{h2:""},{default:t(()=>[e("Colors")]),_:1}),$,l(o,{h3:"",slug:"default-style"},{default:t(()=>[e("Default style (Underline)")]),_:1}),l(a,null,{pug:t(()=>[e(`w-select(:items="items" color="blue") Label
w-select.mt4(:items="items" bg-color="blue-light5" color="blue-dark3") Label`)]),html:t(()=>[e(`<w-select
  :items="items"
  color="blue">
  Label
</w-select>

<w-select
  class="mt4"
  :items="items"
  bg-color="blue-light5"
  color="blue-dark3">
  Label
</w-select>`)]),js:t(()=>[e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`)]),default:t(()=>[l(i,{items:s.items1,color:"blue"},{default:t(()=>[e("Label")]),_:1},8,["items"]),l(i,{class:"mt4",items:s.items1,"bg-color":"blue-light5",color:"blue-dark3"},{default:t(()=>[e("Label")]),_:1},8,["items"])]),_:1}),l(o,{h3:""},{default:t(()=>[e("Outline style")]),_:1}),l(a,null,{pug:t(()=>[e(`w-select(:items="items" outline color="blue") Label
w-select.mt4(:items="items" outline bg-color="blue-light5" color="blue-dark3") Label`)]),html:t(()=>[e(`<w-select
  :items="items"
  outline
  color="blue">
  Label
</w-select>

<w-select
  class="mt4"
  :items="items"
  outline
  bg-color="blue-light5"
  color="blue-dark3">
  Label
</w-select>`)]),js:t(()=>[e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`)]),default:t(()=>[l(i,{items:s.items1,outline:"",color:"blue"},{default:t(()=>[e("Label")]),_:1},8,["items"]),l(i,{class:"mt4",items:s.items1,outline:"","bg-color":"blue-light5",color:"blue-dark3"},{default:t(()=>[e("Label")]),_:1},8,["items"])]),_:1}),l(o,{h3:""},{default:t(()=>[e("List items colors")]),_:1}),C,l(a,null,{pug:t(()=>[e('w-select(:items="items") Pick a color')]),html:t(()=>[e(`<w-select :items="items">
  Pick a color
</w-select>`)]),js:t(()=>[e(`data: () => ({
  items: [
    { label: 'Amber', color: 'amber' },
    { label: 'Warning', color: 'warning' },
    { label: 'Error', color: 'error' },
    { label: 'Pink', color: 'pink' }
  ]
})
`)]),default:t(()=>[l(i,{items:s.items4},{default:t(()=>[e("Pick a color")]),_:1},8,["items"])]),_:1}),l(o,{h2:""},{default:t(()=>[e("Shadow")]),_:1}),l(a,null,{pug:t(()=>[e(`.title4.mb2 Default style (Underline)
w-select(:items="items" shadow) Label

.title4.mt6.mb2 Outline style
w-select(:items="items" outline shadow) Label`)]),html:t(()=>[e(`<div class="title4 mb2">
  Default style (Underline)
</div>

<w-select :items="items" shadow>
  Label
</w-select>

<div class="title4 mt6 mb2">
  Outline style
</div>

<w-select :items="items" outline shadow>
  Label
</w-select>`)]),js:t(()=>[e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`)]),default:t(()=>[F,l(i,{items:s.items1,shadow:""},{default:t(()=>[e("Label")]),_:1},8,["items"]),B,l(i,{items:s.items1,outline:"",shadow:""},{default:t(()=>[e("Label")]),_:1},8,["items"])]),_:1}),l(o,{h2:""},{default:t(()=>[e("Tile & round")]),_:1}),l(a,null,{pug:t(()=>[e(`.title4 Default style (Underline)
w-select.mt3(:items="items" bg-color="purple-light5" tile) Tile
w-select.mt4(:items="items" bg-color="purple-light5" round) Round

.title4.mt6 Outline style
w-select.mt3(:items="items" outline tile) Tile
w-select.mt4(:items="items" outline round) Round`)]),html:t(()=>[e(`<div class="title4">
  Default style (Underline)
</div>

<w-select
  class="mt3"
  :items="items"
  bg-color="purple-light5"
  tile>
  Tile
</w-select>

<w-select
  class="mt4"
  :items="items"
  bg-color="purple-light5"
  round>
  Round
</w-select>

<div class="title4 mt6">
  Outline style
</div>

<w-select
  class="mt3"
  :items="items"
  outline
  tile>
  Tile
</w-select>

<w-select
  class="mt4"
  :items="items"
  outline
  round>
  Round
</w-select>
`)]),js:t(()=>[e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`)]),default:t(()=>[W,l(i,{items:s.items1,"bg-color":"purple-light5",tile:""},{default:t(()=>[e("Tile")]),_:1},8,["items"]),l(i,{class:"mt4",items:s.items1,"bg-color":"purple-light5",round:""},{default:t(()=>[e("Round")]),_:1},8,["items"]),N,l(i,{items:s.items1,outline:"",tile:""},{default:t(()=>[e("Tile")]),_:1},8,["items"]),l(i,{class:"mt4",items:s.items1,outline:"",round:""},{default:t(()=>[e("Round")]),_:1},8,["items"])]),_:1}),l(o,{h2:""},{default:t(()=>[e("Fit to content")]),_:1}),l(a,null,{pug:t(()=>[e(`w-select(
  :items="items"
  placeholder="Select an item"
  fit-to-content) Fit to content`)]),html:t(()=>[e(`<w-select
  :items="items"
  placeholder="Select an item"
  fit-to-content>
  Fit to content
</w-select>
`)]),js:t(()=>[e(`data: () => ({
  items: [
    { label: '1st item' },
    { label: 'Second item' },
    { label: 'Third & longest item' }
  ]
})
`)]),default:t(()=>[l(i,{items:s.items5,placeholder:"Select an item","fit-to-content":""},{default:t(()=>[e("Fit to content")]),_:1},8,["items"])]),_:1}),l(o,{h2:""},{default:t(()=>[e("Multiple selection")]),_:1}),l(a,null,{pug:t(()=>[e('w-select(:items="items" multiple)')]),html:t(()=>[e('<w-select :items="items" multiple></w-select>')]),js:t(()=>[e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`)]),default:t(()=>[l(i,{items:s.items1,multiple:""},null,8,["items"])]),_:1}),l(o,{h2:""},{default:t(()=>[e("V-model")]),_:1}),l(u,{tip:""},{default:t(()=>[e("By default, the "),q,e(" component expects the items to have a "),H,e(" attribute."),K,e(`
If this is a constraint, you can use the option `),Y,e(` to specify the name of another
attribute to be used instead (must have a unique value), like an id for instance.`)]),_:1}),l(a,null,{pug:t(()=>[e(`w-select(v-model="selection" :items="items" multiple)
w-flex.align-center.mt4
  span v-model:
  code.ml2 `+c("{{ selection }}"))]),html:t(()=>[e(`<w-select
  v-model="selection"
  :items="items"
  multiple>
</w-select>

<w-flex class="align-center mt4">
  <span>v-model:</span>
  <code class="ml2">`+c("{{ selection }}")+`</code>
</w-flex>`)]),js:t(()=>[e(`data: () => ({
  items: [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: 3 }
  ],
  selection: [1, 3]
})
`)]),default:t(()=>[l(i,{modelValue:s.vModelSelect1,"onUpdate:modelValue":m[0]||(m[0]=d=>s.vModelSelect1=d),items:s.items3,multiple:""},null,8,["modelValue","items"]),l(w,{class:"align-center mt4"},{default:t(()=>[z,n("code",G,c(s.vModelSelect1),1)]),_:1})]),_:1}),l(o,{h3:""},{default:t(()=>[e("Without values (using labels)")]),_:1}),J,l(a,null,{pug:t(()=>[e(`w-select(v-model="selection" :items="items" multiple)
w-flex.align-center.mt4
  span v-model:
  code.ml2 `+c("{{ selection }}"))]),html:t(()=>[e(`<w-select
  v-model="selection"
  :items="items"
  multiple>
</w-select>

<w-flex class="align-center mt4">
  <span>v-model:</span>
  <code class="ml2">`+c("{{ selection }}")+`</code>
</w-flex>`)]),js:t(()=>[e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ],
  selection: ['Item 1', 'Item 3']
})
`)]),default:t(()=>[l(i,{modelValue:s.vModelSelect2,"onUpdate:modelValue":m[1]||(m[1]=d=>s.vModelSelect2=d),items:s.items1,multiple:""},null,8,["modelValue","items"]),l(w,{class:"align-center mt4"},{default:t(()=>[Q,n("code",X,c(s.vModelSelect2),1)]),_:1})]),_:1}),l(o,{h3:""},{default:t(()=>[e("Using full objects in v-model")]),_:1}),Z,ee,l(a,null,{pug:t(()=>[e(`w-select(v-model="selection" :items="items" multiple return-object)
w-flex.align-center.mt4
  span v-model:
  code.ml2 `+c("{{ selection }}"))]),html:t(()=>[e(`<w-select
  v-model="selection"
  :items="items"
  multiple
  return-object>
</w-select>

<w-flex class="align-center mt4">
  <span>v-model:</span>
  <code class="ml2">`+c("{{ selection }}")+`</code>
</w-flex>`)]),js:t(()=>[e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ],
  selection: [{ label: 'Item 3' }]
})
`)]),default:t(()=>[l(i,{modelValue:s.vModelSelect3,"onUpdate:modelValue":m[2]||(m[2]=d=>s.vModelSelect3=d),items:s.items1,multiple:"","return-object":""},null,8,["modelValue","items"]),l(w,{class:"align-center mt4"},{default:t(()=>[te,n("code",le,c(s.vModelSelect3),1)]),_:1})]),_:1}),l(o,{h2:""},{default:t(()=>[e("Label position")]),_:1}),ne,l(a,null,{pug:t(()=>[e(`w-select(:items="items" label="Select an item")
w-select.mt4(:items="items" label="Select an item" label-position="left")
w-select.mt4(:items="items" label="Select an item" label-position="right")`)]),html:t(()=>[e(`<w-select
  :items="items"
  label="Select an item">
</w-select>

<w-select
  class="mt4"
  :items="items"
  label="Select an item"
  label-position="left">
</w-select>

<w-select
  class="mt4"
  :items="items"
  label="Select an item"
  label-position="right">
</w-select>`)]),js:t(()=>[e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`)]),default:t(()=>[l(i,{items:s.items1,label:"Select an item"},null,8,["items"]),l(i,{class:"mt4",items:s.items1,label:"Select an item","label-position":"left"},null,8,["items"]),l(i,{class:"mt4",items:s.items1,label:"Select an item","label-position":"right"},null,8,["items"])]),_:1}),l(o,{h2:""},{default:t(()=>[e("Custom label")]),_:1}),se,l(a,null,{pug:t(()=>[e(`w-select(:items="items" label-position="inside" outline)
  w-icon.orange mdi mdi-arrow-right
  span.purple.mx1 Inside
  w-icon.orange mdi mdi-arrow-left
w-select.mt4(:items="items" label-position="left" outline)
  span.green.mr1 Left
  w-icon.orange mdi mdi-arrow-right
w-select.mt4(:items="items" label-position="right" outline)
  w-icon.orange mdi mdi-arrow-left
  span.red.ml1 Right`)]),html:t(()=>[e(`<w-select
  :items="items"
  label-position="inside"
  outline>
  <w-icon class="orange">mdi mdi-arrow-right</w-icon>
  <span class="purple mx1">Inside</span>
  <w-icon class="orange">mdi mdi-arrow-left</w-icon>
</w-select>

<w-select
  class="mt4"
  :items="items"
  label-position="left"
  outline>
  <span class="green mr1">Left</span>
  <w-icon class="orange">mdi mdi-arrow-right</w-icon>
</w-select>

<w-select
  class="mt4"
  :items="items"
  label-position="right"
  outline>
  <w-icon class="orange">mdi mdi-arrow-left</w-icon>
  <span class="red ml1">Right</span>
</w-select>
`)]),js:t(()=>[e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`)]),default:t(()=>[l(i,{items:s.items1,"label-position":"inside",outline:""},{default:t(()=>[l(b,{class:"orange"},{default:t(()=>[e("mdi mdi-arrow-right")]),_:1}),ie,l(b,{class:"orange"},{default:t(()=>[e("mdi mdi-arrow-left")]),_:1})]),_:1},8,["items"]),l(i,{class:"mt4",items:s.items1,"label-position":"left",outline:""},{default:t(()=>[oe,l(b,{class:"orange"},{default:t(()=>[e("mdi mdi-arrow-right")]),_:1})]),_:1},8,["items"]),l(i,{class:"mt4",items:s.items1,"label-position":"right",outline:""},{default:t(()=>[l(b,{class:"orange"},{default:t(()=>[e("mdi mdi-arrow-left")]),_:1}),ae]),_:1},8,["items"])]),_:1}),l(o,{h2:""},{default:t(()=>[e("Custom selection string")]),_:1}),ce,l(a,null,{pug:t(()=>[e(`w-select(:items="items" v-model="selection" multiple)
  template(#selection="{ item }")
    w-tag.mr2(v-for="(item, i) in item" :key="i" bg-color="grey-light4")
      | `+c("{{ item.label }}"),1)]),html:t(()=>[e(`<w-select :items="items" v-model="selection" multiple>
  <template #selection="{ item }">
    <w-tag
      class="mr2"
      v-for="(item, i) in item"
      :key="i"
      bg-color="grey-light4">
      `+c("{{ item.label }}")+`
    </w-tag>
  </template>
</w-select>`,1)]),js:t(()=>[e(`data: () => ({
  items: [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: 3 }
  ],
  selection: [1, 3]
})
`)]),default:t(()=>[l(i,{items:s.items3,modelValue:s.customSelection,"onUpdate:modelValue":m[3]||(m[3]=d=>s.customSelection=d),multiple:""},{selection:t(({item:d})=>[(h(!0),p(T,null,D(d,(g,L)=>(h(),S(k,{class:"mr2",key:L,"bg-color":"grey-light4"},{default:t(()=>[e(c(g.label),1)]),_:2},1024))),128))]),_:1},8,["items","modelValue"])]),_:1}),l(o,{h2:""},{default:t(()=>[e("Custom list items")]),_:1}),l(a,null,{pug:t(()=>[e(`w-select(:items="items")
  template(#item="{ item, selected }")
    w-icon.primary(v-if="selected") wi-check
    span.px2(v-else)
    span.ml1 `+c("{{ item.label }}")+`
    w-tag.ml2(bg-color="grey-light4" xs) `+c("{{ item.value }}"),1)]),html:t(()=>[e(`<w-select :items="items">
  <template #item="{ item, selected }">
    <w-icon v-if="selected" class="primary">wi-check</w-icon>
    <span v-else class="px2"></span>

    <span class="ml1">`+c("{{ item.label }}")+`</span>

    <w-tag class="ml2" bg-color="grey-light4" xs>
      `+c("{{ item.value }}")+`
    </w-tag>
  </template>
</w-select>`,1)]),js:t(()=>[e(`data: () => ({
  items: [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: 3 }
  ]
})
`)]),default:t(()=>[l(i,{items:s.items3},{item:t(({item:d,selected:g})=>[g?(h(),S(b,{key:0,class:"primary"},{default:t(()=>[e("wi-check")]),_:1})):(h(),p("span",me)),n("span",de,c(d.label),1),l(k,{class:"ml2","bg-color":"grey-light4",xs:""},{default:t(()=>[e(c(d.value),1)]),_:2},1024)]),_:1},8,["items"])]),_:1}),l(o,{h2:""},{default:t(()=>[e("Inner icons")]),_:1}),l(a,null,{pug:t(()=>[e(`.title4.mb2 Label outside
w-select(:items="items" label="Select" label-position="left" outline inner-icon-left="mdi mdi-star")
w-select.mt4(:items="items" label="Select" label-position="right" outline inner-icon-right="mdi mdi-arrow-down")

.title4.mt6.mb2 Label inside
w-select(:items="items" label="Select" label-position="inside" outline inner-icon-left="mdi mdi-star")
w-select.mt4(:items="items" label="Select" label-position="inside" outline inner-icon-right="mdi mdi-arrow-down")`)]),html:t(()=>[e(`<div class="title4 mb2">
  Label outside
</div>

<w-select
  :items="items"
  label="Select"
  label-position="left"
  outline
  inner-icon-left="mdi mdi-star">
</w-select>

<w-select
  class="mt4"
  :items="items"
  label="Select"
  label-position="right"
  outline
  inner-icon-right="mdi mdi-arrow-down">
</w-select>

<div class="title4 mt6 mb2">
  Label inside
</div>

<w-select
  :items="items"
  label="Select"
  label-position="inside"
  outline
  inner-icon-left="mdi mdi-star">
</w-select>

<w-select
  class="mt4"
  :items="items"
  label="Select"
  label-position="inside"
  outline
  inner-icon-right="mdi mdi-arrow-down">
</w-select>`)]),js:t(()=>[e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`)]),default:t(()=>[re,l(i,{items:s.items1,label:"Select","label-position":"left",outline:"","inner-icon-left":"mdi mdi-star"},null,8,["items"]),l(i,{class:"mt4",items:s.items1,label:"Select","label-position":"right",outline:"","inner-icon-right":"mdi mdi-arrow-down"},null,8,["items"]),ue,l(i,{items:s.items1,label:"Select","label-position":"inside",outline:"","inner-icon-left":"mdi mdi-star"},null,8,["items"]),l(i,{class:"mt4",items:s.items1,label:"Select","label-position":"inside",outline:"","inner-icon-right":"mdi mdi-arrow-down"},null,8,["items"])]),_:1}),l(o,{h2:""},{default:t(()=>[e("Disabled & readonly")]),_:1}),l(a,null,{pug:t(()=>[e(`w-select.mb4(
  :items="items"
  label="Disabled & empty"
  outline
  disabled)
w-select.mb4(
  :items="items"
  model-value="Item 1"
  label="Disabled & filled"
  outline
  disabled)
w-select.mb4(
  :items="items"
  label="Readonly & empty"
  outline
  readonly)
w-select(
  :items="items"
  model-value="Item 1"
  label="Readonly & filled"
  outline
  readonly)`)]),html:t(()=>[e(`<w-select
  class="mb4"
  :items="items"
  label="Disabled & empty"
  outline
  disabled>
</w-select>

<w-select
  class="mb4"
  :items="items"
  value="Item 1"
  label="Disabled & filled"
  outline
  disabled>
</w-select>

<w-select
  class="mb4"
  :items="items"
  label="Readonly & empty"
  outline
  readonly>
</w-select>

<w-select
  :items="items"
  value="Item 1"
  label="Readonly & filled"
  outline
  readonly>
</w-select>
`)]),js:t(()=>[e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})`)]),default:t(()=>[l(i,{class:"mb4",items:s.items1,label:"Disabled & empty",outline:"",disabled:""},null,8,["items"]),l(i,{class:"mb4",items:s.items1,label:"Disabled & filled","model-value":"Item 1",outline:"",disabled:""},null,8,["items"]),l(i,{class:"mb4",items:s.items1,label:"Readonly & empty",outline:"",readonly:""},null,8,["items"]),l(i,{items:s.items1,"model-value":"Item 1",label:"Readonly & filled",outline:"",readonly:""},null,8,["items"])]),_:1}),n("p",null,[he,e("You can also disable any specific list item by adding a "),be,e(" property in it:"),l(i,{class:"ml2",placeholder:"select an item","fit-to-content":"",items:[{label:"Item 1"},{label:"Disabled item 2",disabled:!0},{label:"Item 3"}]})])])}const fe={data:()=>({items1:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"}],items2:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"},{label:"Item 5",disabled:!0}],items3:[{label:"Item 1",value:1},{label:"Item 2",value:2},{label:"Item 3",value:3}],items4:[{label:"Amber",color:"amber"},{label:"Warning",color:"warning"},{label:"Error",color:"error"},{label:"Pink",color:"pink"}],items5:[{label:"1st item"},{label:"Second item"},{label:"Third & longest item"}],vModelSelect1:[1,3],customSelection:[1,3],vModelSelect2:["Item 1","Item 3"],vModelSelect3:[{label:"Item 3"}]})},we=v(fe,[["render",pe]]),ge=n("div",{class:"w-divider my12"},null,-1);function ve(s,m,_,y,I,f){const u=r("title-link"),o=r("component-api");return h(),p("div",null,[ge,l(u,{class:"title1",h2:""},{default:t(()=>[e("API")]),_:1}),l(o,{class:"mt0",items:f.props,descriptions:s.propsDescs,title:"Props"},null,8,["items","descriptions"]),l(o,{items:s.slots,title:"Slots"},null,8,["items"]),l(o,{items:f.events,title:"Events"},null,8,["items"])])}const _e={items:"Expecting an array of objects. Each object being a select list item, it should include at least a <code>label</code> attribute.",modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>The current selection of the select field.<br>Gets updated on selection change.',multiple:"Allows multiple selections. When set to <code>true</code>, the list of choices will stay open after selecting an item.",checklist:'Exposes the <code>w-list</code> property <code>checklist</code>. See the <a href="w-list#checklist-prop">w-list checklist property</a> for more information.<br>When enabled a checkbox will display next to each list item, this can be particularly useful when the <code>multiple</code> property is set to <code>true</code>',placeholder:"Provide a placeholder for the select field. If a label is positioned inside, it will be moved above the field so it doesn't overlap.",label:"Sets a visible label for the select field.",labelPosition:"Sets the position of the label to one of the following positions: 'left', 'right', 'inside'.",innerIconLeft:"Adds an icon on the left inside the select field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",innerIconRight:"Adds an icon on the right inside the select field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",staticLabel:"Prevents moving the label above the select field when the <code>labelPosition</code> is equal to <code>inside</code>. If a placeholder is present, it will be hidden and the label will be displayed instead.<br>When a value is set the static label is replaced by the textual value.",itemLabelKey:'The property name (aka "key") in each item object where to find the label of the item.',itemColorKey:'The property name (aka "key") in each item object where to find the color of the item.<br>By default, the <code>color</code> key of the current item will be used to render this item in this color.<br>You can also provide an empty string to disable this feature.',itemValueKey:'The property name (aka "key") in each item object where to find the value of the item.',itemClass:"Applies a custom CSS class to each select list item.",menuClass:"Applies a custom CSS class to the select list's floating menu element.",menuProps:`Internally, the <strong class="code">w-select</strong> component uses the <strong class="code">w-menu</strong> component.<br>This option allows you to pass down to the menu all the props that the <strong class="code">w-menu</strong> component can accept.<br>For instance, you could set <code>:menu-props="{ appendTo: '.my-scrolling-container' }"</code>, in order to move the select list floating menu to a particular DOM node, and allowing it to scroll with its container.`,noUnselect:"When set to <code>true</code>, forces the select list to always have at least one selected item.<br>For single select lists, it prevents unselecting the selected item but still allows switching selection.<br>For multiple select lists, it will only prevent unselecting the item when it's the only remaining selection. ",color:`Applies a color to the select's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,labelColor:`Applies a specific color to the select's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the select's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,outline:"The outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the text and border and no background color is set.",round:"Sets a maximum border-radius on the corners of the select field, giving it a round look.",shadow:"Applies a drop shadow to the select field.",tile:"Removes the default border-radius and sets sharp edges on the select field.",fitToContent:"Fits the select list width to its selected content.",dark:!1,returnObject:"The current selection is returned via the <code>value</code> prop or <code>v-model</code> as an array of full objects or a single full object (returning the original as given) when <code>multiple</code> is set to false.",name:"Provide a native HTML <code>name</code> attribute to the select field. If not provided, a unique name will be computed.",disabled:"Disables the select field making it unreactive to user interactions.",readonly:"The select field will still look like an interactive select field except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the select field.",validators:'<span class="deep-orange">Only for validation, when the select field is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the select field. Each function will be executed on select field validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the select field.'},ye={default:{description:"The label content, if the <code>label</code> prop is not flexible enough."},selection:{description:"Provide a custom template for the selection string.",params:{item:"The selected item(s) object(s). May be an array if <code>multiple</code> is <code>true</code>, or a single object otherwise."}},item:{description:"Provide a common custom template for all the select list items.",params:{item:"The current item object.",selected:"A Boolean representing the selected state of the list item.",index:"The index of the list item."}},"item.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single select list item: the item at the index <em class="code">x</em>.',params:{item:"The current item object.",selected:"A Boolean representing the selected state of the list item.",index:"The index of the list item."}},"icon-left":{description:"The left icon, if the <code>innerIconLeft</code> prop is not flexible enough.<br/>"},"icon-right":{description:"The right icon, if the <code>innerIconRight</code> prop is not flexible enough."}},Ie={input:{description:"Emitted each time the selected item(s) changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Array, Object, Mixed value]":"The new selected value(s). Array if <code>multiple</code> is set to <code>true</code>, single value otherwise."}},"update:modelValue":{description:"Emitted each time the selected item(s) changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Array, Object, Mixed value]":"The new selected value(s). Array if <code>multiple</code> is set to <code>true</code>, single value otherwise."}},focus:{description:"Emitted on select focus.",params:{"[DOM event object]":"The associated focus DOM event."}},blur:{description:"Emitted on select blur.",params:{"[DOM event object]":"The associated blur DOM event."}},"item-click":{description:"Emitted on select list item click.",params:{"[Object]":"The clicked item object."}},"item-select":{description:"Emitted on list item select (click or <kbd>enter</kbd> keydown).",params:{"[Object]":"The selected item object."}},"click:inner-icon-left":{description:"Emitted on click of the left inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}},"click:inner-icon-right":{description:"Emitted on click of the right inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}}},ke={data:()=>({propsDescs:_e,slots:ye}),computed:{props(){return{...j.props,...M.props}},events(){return j.emits.reduce((s,m)=>(s[m]=Ie[m]||{})&&s,{})}}},Se=v(ke,[["render",ve]]);function je(s,m,_,y,I,f){const u=r("ui-component-title"),o=r("examples"),i=r("api");return h(),p("main",null,[l(u,null,{default:t(()=>[e("w-select")]),_:1}),l(o),l(i)])}const Le={components:{Examples:we,Api:Se}},De=v(Le,[["render",je]]);export{De as default};
