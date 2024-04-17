var ke = Object.defineProperty;
var ve = (e, t, i) => t in e ? ke(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var F = (e, t, i) => (ve(e, typeof t != "symbol" ? t + "" : t, i), i), ne = (e, t, i) => {
  if (!t.has(e))
    throw TypeError("Cannot " + i);
};
var Y = (e, t, i) => (ne(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Z = (e, t, i) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, i);
}, ee = (e, t, i, o) => (ne(e, t, "write to private field"), o ? o.call(e, i) : t.set(e, i), i);
import { reactive as J, resolveComponent as $, openBlock as s, createBlock as b, Teleport as Ce, createVNode as V, TransitionGroup as oe, normalizeClass as f, withCtx as m, createElementBlock as u, Fragment as w, renderList as L, mergeProps as S, createElementVNode as y, createCommentVNode as p, createApp as Se, defineComponent as Be, inject as _e, withKeys as W, withModifiers as z, renderSlot as c, toHandlers as M, createTextVNode as B, toDisplayString as C, Transition as O, normalizeStyle as R, resolveDynamicComponent as I, normalizeProps as ie, resolveDirective as ge, withDirectives as A, createSlots as Q, vShow as ae, vModelText as be, vModelDynamic as $e, KeepAlive as Ve } from "vue";
const Ie = J({
  on: "#app",
  // Sets the Wave UI root node. If not found, will default to `body`.
  breakpoints: {
    xs: 600,
    sm: 900,
    md: 1200,
    lg: 1700,
    xl: 9999
    // Xl only needs a greater value than lg but starts from lg and goes to infinity.
  },
  css: {
    // Generate shades for custom colors and status colors.
    // Note: the color palette shades are always generated separately from SCSS.
    colorShades: !0,
    // Generate palette colors and palette color shades.
    // Can't have this option: color palette is generated via SCSS in colors.scss.
    // colorPalette: true,
    breakpointSpaces: !1,
    // Generate margin & padding classes for each breakpoint. E.g. `sm-ma2`.
    // Generate helper classes for each breakpoint.
    // E.g. `sm-text-left`, `xs-hide`.
    breakpointLayoutClasses: !0,
    grid: 12
  },
  colors: {
    // Default colors of Wave UI. Can be overridden from the Wave UI user config on init.
    light: {
      primary: "#234781",
      secondary: "#d3ebff",
      info: "#3d9ff5",
      warning: "#f80",
      success: "#54b946",
      error: "#f65555"
    },
    dark: {
      primary: "#89b6d2",
      secondary: "#375b6a",
      info: "#3d9ff5",
      warning: "#f80",
      success: "#54b946",
      error: "#f65555"
    }
  },
  // The initial theme to use.
  // To switch theme while running, call the $waveui.switchTheme('light'|'dark') method.
  theme: "light",
  // One of 'light', 'dark', 'auto'.
  icons: [],
  iconsLigature: !1,
  notificationManager: {
    align: "right",
    transition: "default"
    // Sliding from the side by default.
  },
  presets: {}
  // User presets for each component.
}), ye = (e, t = Ie) => {
  if (!Object.keys(t).length)
    t = Object.assign(t, e);
  else
    for (const i in e) {
      const o = e[i];
      typeof o == "object" ? ye(e[i], t[i]) : t[i] = o;
    }
  return t;
}, j = (e) => console.warn(`Wave UI: ${e}`), te = (e) => console.error(`Wave UI: ${e}`), re = (e, t) => "#" + e.slice(1).match(/../g).map((i) => (i = +`0x${i}` + t, (i < 0 ? 0 : i > 255 ? 255 : i).toString(16).padStart(2, 0))).join(""), Te = (e) => {
  ["light", "dark"].forEach((t) => {
    const i = e.colors[t];
    i.shades = {};
    for (let o in i) {
      if (o === "shades")
        continue;
      o = { label: o, color: i[o].replace("#", "") };
      const a = o.color;
      a.length === 3 && (o.color = a[0] + "" + a[0] + a[1] + a[1] + a[2] + a[2]);
      for (let l = 1; l <= 3; l++) {
        const n = re(`#${o.color}`, l * 40), r = re(`#${o.color}`, -l * 40);
        i.shades[`${o.label}-light${l}`] = n, i.shades[`${o.label}-dark${l}`] = r;
      }
    }
  });
}, de = (e, t) => {
  const i = {
    ...t.reduce((o, a) => {
      o[a.label] = a.color;
      const l = (a.shades || []).reduce((n, r) => (n[r.label] = r.color, n), {});
      return { ...o, ...l };
    }, { ...e, ...e.shades })
  };
  return delete i.shades, i;
}, ue = [
  {
    label: "pink",
    color: "#e91e63",
    shades: [
      { label: "pink-light6", color: "#fdebf1" },
      { label: "pink-light5", color: "#faccdc" },
      { label: "pink-light4", color: "#f7adc6" },
      { label: "pink-light3", color: "#f48eb1" },
      { label: "pink-light2", color: "#f16f9b" },
      { label: "pink-light1", color: "#ee5085" },
      { label: "pink-dark1", color: "#d31555" },
      { label: "pink-dark2", color: "#b6124a" },
      { label: "pink-dark3", color: "#990f3e" },
      { label: "pink-dark4", color: "#7c0c32" },
      { label: "pink-dark5", color: "#600927" },
      { label: "pink-dark6", color: "#43071b" }
    ]
  },
  {
    label: "purple",
    color: "#a741b9",
    shades: [
      { label: "purple-light6", color: "#f9f2fa" },
      { label: "purple-light5", color: "#eed9f2" },
      { label: "purple-light4", color: "#e3c1e9" },
      { label: "purple-light3", color: "#d8a8e1" },
      { label: "purple-light2", color: "#cd90d8" },
      { label: "purple-light1", color: "#c277cf" },
      { label: "purple-dark1", color: "#9239a2" },
      { label: "purple-dark2", color: "#7d318a" },
      { label: "purple-dark3", color: "#682873" },
      { label: "purple-dark4", color: "#53205b" },
      { label: "purple-dark5", color: "#3d1844" },
      { label: "purple-dark6", color: "#28102d" }
    ]
  },
  {
    label: "deep-purple",
    color: "#673ab7",
    shades: [
      { label: "deep-purple-light6", color: "#f1edf9" },
      { label: "deep-purple-light5", color: "#daceef" },
      { label: "deep-purple-light4", color: "#c2afe6" },
      { label: "deep-purple-light3", color: "#ab90dc" },
      { label: "deep-purple-light2", color: "#9471d2" },
      { label: "deep-purple-light1", color: "#7c52c8" },
      { label: "deep-purple-dark1", color: "#5b33a1" },
      { label: "deep-purple-dark2", color: "#4e2c8b" },
      { label: "deep-purple-dark3", color: "#422575" },
      { label: "deep-purple-dark4", color: "#351e5f" },
      { label: "deep-purple-dark5", color: "#291749" },
      { label: "deep-purple-dark6", color: "#1c1033" }
    ]
  },
  {
    label: "indigo",
    color: "#3f51b5",
    shades: [
      { label: "indigo-light6", color: "#eff1fa" },
      { label: "indigo-light5", color: "#d1d6ef" },
      { label: "indigo-light4", color: "#b3bae4" },
      { label: "indigo-light3", color: "#949fda" },
      { label: "indigo-light2", color: "#7684cf" },
      { label: "indigo-light1", color: "#5869c5" },
      { label: "indigo-dark1", color: "#37479f" },
      { label: "indigo-dark2", color: "#303e8a" },
      { label: "indigo-dark3", color: "#283474" },
      { label: "indigo-dark4", color: "#212a5f" },
      { label: "indigo-dark5", color: "#192149" },
      { label: "indigo-dark6", color: "#121734" }
    ]
  },
  {
    label: "blue",
    color: "#2196f3",
    shades: [
      { label: "blue-light6", color: "#e6f3fe" },
      { label: "blue-light5", color: "#c6e4fc" },
      { label: "blue-light4", color: "#a5d4fa" },
      { label: "blue-light3", color: "#84c5f8" },
      { label: "blue-light2", color: "#63b5f7" },
      { label: "blue-light1", color: "#42a6f5" },
      { label: "blue-dark1", color: "#0c85e5" },
      { label: "blue-dark2", color: "#0b72c4" },
      { label: "blue-dark3", color: "#095fa3" },
      { label: "blue-dark4", color: "#074c82" },
      { label: "blue-dark5", color: "#053961" },
      { label: "blue-dark6", color: "#032540" }
    ]
  },
  {
    label: "light-blue",
    color: "#03a9f4",
    shades: [
      { label: "light-blue-light6", color: "#e7f7ff" },
      { label: "light-blue-light5", color: "#c0ebfe" },
      { label: "light-blue-light4", color: "#98defe" },
      { label: "light-blue-light3", color: "#71d2fd" },
      { label: "light-blue-light2", color: "#4ac5fd" },
      { label: "light-blue-light1", color: "#22b9fc" },
      { label: "light-blue-dark1", color: "#0393d5" },
      { label: "light-blue-dark2", color: "#027eb6" },
      { label: "light-blue-dark3", color: "#026896" },
      { label: "light-blue-dark4", color: "#015277" },
      { label: "light-blue-dark5", color: "#013d58" },
      { label: "light-blue-dark6", color: "#012739" }
    ]
  },
  {
    label: "cyan",
    color: "#04cbe5",
    shades: [
      { label: "cyan-light6", color: "#e9fcff" },
      { label: "cyan-light5", color: "#baf6fe" },
      { label: "cyan-light4", color: "#8bf0fd" },
      { label: "cyan-light3", color: "#5ceafc" },
      { label: "cyan-light2", color: "#2ce3fb" },
      { label: "cyan-light1", color: "#04d8f4" },
      { label: "cyan-dark1", color: "#04b2c8" },
      { label: "cyan-dark2", color: "#0398ac" },
      { label: "cyan-dark3", color: "#037f8f" },
      { label: "cyan-dark4", color: "#026673" },
      { label: "cyan-dark5", color: "#024c56" },
      { label: "cyan-dark6", color: "#01333a" }
    ]
  },
  {
    label: "teal",
    color: "#1db3a8",
    shades: [
      { label: "teal-light6", color: "#e2faf9" },
      { label: "teal-light5", color: "#b8f3ef" },
      { label: "teal-light4", color: "#8eede6" },
      { label: "teal-light3", color: "#64e6dc" },
      { label: "teal-light2", color: "#39dfd3" },
      { label: "teal-light1", color: "#20c7bb" },
      { label: "teal-dark1", color: "#199b92" },
      { label: "teal-dark2", color: "#15847c" },
      { label: "teal-dark3", color: "#116c65" },
      { label: "teal-dark4", color: "#0e544f" },
      { label: "teal-dark5", color: "#0a3c39" },
      { label: "teal-dark6", color: "#062523" }
    ]
  },
  {
    label: "green",
    color: "#4caf50",
    shades: [
      { label: "green-light6", color: "#edf7ed" },
      { label: "green-light5", color: "#d2ebd3" },
      { label: "green-light4", color: "#b7e0b8" },
      { label: "green-light3", color: "#9bd49e" },
      { label: "green-light2", color: "#80c883" },
      { label: "green-light1", color: "#65bc69" },
      { label: "green-dark1", color: "#439b47" },
      { label: "green-dark2", color: "#3a863d" },
      { label: "green-dark3", color: "#327234" },
      { label: "green-dark4", color: "#295e2b" },
      { label: "green-dark5", color: "#204a22" },
      { label: "green-dark6", color: "#173518" }
    ]
  },
  {
    label: "light-green",
    color: "#90d73f",
    shades: [
      { label: "light-green-light6", color: "#f4fbec" },
      { label: "light-green-light5", color: "#e5f6d3" },
      { label: "light-green-light4", color: "#d7f1b9" },
      { label: "light-green-light3", color: "#c8eba0" },
      { label: "light-green-light2", color: "#b9e687" },
      { label: "light-green-light1", color: "#abe16d" },
      { label: "light-green-dark1", color: "#80cc2a" },
      { label: "light-green-dark2", color: "#70b225" },
      { label: "light-green-dark3", color: "#609820" },
      { label: "light-green-dark4", color: "#4f7d1a" },
      { label: "light-green-dark5", color: "#3f6315" },
      { label: "light-green-dark6", color: "#2e490f" }
    ]
  },
  {
    label: "lime",
    color: "#cee029",
    shades: [
      { label: "lime-light6", color: "#fafce9" },
      { label: "lime-light5", color: "#f4f8ce" },
      { label: "lime-light4", color: "#edf4b2" },
      { label: "lime-light3", color: "#e7f097" },
      { label: "lime-light2", color: "#e1ec7b" },
      { label: "lime-light1", color: "#dae85f" },
      { label: "lime-dark1", color: "#bbcc1e" },
      { label: "lime-dark2", color: "#a1b01a" },
      { label: "lime-dark3", color: "#889516" },
      { label: "lime-dark4", color: "#6f7912" },
      { label: "lime-dark5", color: "#565d0e" },
      { label: "lime-dark6", color: "#3c420a" }
    ]
  },
  {
    label: "yellow",
    color: "#ffe70f",
    shades: [
      { label: "yellow-light6", color: "#fffce0" },
      { label: "yellow-light5", color: "#fff9c4" },
      { label: "yellow-light4", color: "#fff6a8" },
      { label: "yellow-light3", color: "#fff38c" },
      { label: "yellow-light2", color: "#fff170" },
      { label: "yellow-light1", color: "#ffee54" },
      { label: "yellow-dark1", color: "#eed700" },
      { label: "yellow-dark2", color: "#cfba00" },
      { label: "yellow-dark3", color: "#af9e00" },
      { label: "yellow-dark4", color: "#908100" },
      { label: "yellow-dark5", color: "#706500" },
      { label: "yellow-dark6", color: "#504800" }
    ]
  },
  {
    label: "amber",
    color: "#ffc107",
    shades: [
      { label: "amber-light6", color: "#fffaed" },
      { label: "amber-light5", color: "#fff1c6" },
      { label: "amber-light4", color: "#ffe7a0" },
      { label: "amber-light3", color: "#ffde7a" },
      { label: "amber-light2", color: "#ffd454" },
      { label: "amber-light1", color: "#ffcb2d" },
      { label: "amber-dark1", color: "#e6ad00" },
      { label: "amber-dark2", color: "#c79500" },
      { label: "amber-dark3", color: "#a77d00" },
      { label: "amber-dark4", color: "#886600" },
      { label: "amber-dark5", color: "#684e00" },
      { label: "amber-dark6", color: "#483600" }
    ]
  },
  {
    label: "orange",
    color: "#ff9800",
    shades: [
      { label: "orange-light6", color: "#fff5e6" },
      { label: "orange-light5", color: "#ffe5bf" },
      { label: "orange-light4", color: "#ffd699" },
      { label: "orange-light3", color: "#ffc673" },
      { label: "orange-light2", color: "#ffb74d" },
      { label: "orange-light1", color: "#ffa726" },
      { label: "orange-dark1", color: "#df8500" },
      { label: "orange-dark2", color: "#c07200" },
      { label: "orange-dark3", color: "#a05f00" },
      { label: "orange-dark4", color: "#814d00" },
      { label: "orange-dark5", color: "#613a00" },
      { label: "orange-dark6", color: "#412700" }
    ]
  },
  {
    label: "deep-orange",
    color: "#ff6825",
    shades: [
      { label: "deep-orange-light6", color: "#fff0e9" },
      { label: "deep-orange-light5", color: "#ffd9c8" },
      { label: "deep-orange-light4", color: "#ffc2a8" },
      { label: "deep-orange-light3", color: "#ffac87" },
      { label: "deep-orange-light2", color: "#ff9566" },
      { label: "deep-orange-light1", color: "#ff7f46" },
      { label: "deep-orange-dark1", color: "#ff5205" },
      { label: "deep-orange-dark2", color: "#e54600" },
      { label: "deep-orange-dark3", color: "#c53d00" },
      { label: "deep-orange-dark4", color: "#a63300" },
      { label: "deep-orange-dark5", color: "#862900" },
      { label: "deep-orange-dark6", color: "#661f00" }
    ]
  },
  {
    label: "red",
    color: "#fa3317",
    shades: [
      { label: "red-light6", color: "#fee3df" },
      { label: "red-light5", color: "#fec6be" },
      { label: "red-light4", color: "#fdaa9e" },
      { label: "red-light3", color: "#fc8d7d" },
      { label: "red-light2", color: "#fc705d" },
      { label: "red-light1", color: "#fb543c" },
      { label: "red-dark1", color: "#ec2205" },
      { label: "red-dark2", color: "#cd1d04" },
      { label: "red-dark3", color: "#ae1904" },
      { label: "red-dark4", color: "#8f1403" },
      { label: "red-dark5", color: "#701002" },
      { label: "red-dark6", color: "#520c02" }
    ]
  },
  {
    label: "brown",
    color: "#845848",
    shades: [
      { label: "brown-light6", color: "#f2eae7" },
      { label: "brown-light5", color: "#e2d1ca" },
      { label: "brown-light4", color: "#d2b7ad" },
      { label: "brown-light3", color: "#c39e90" },
      { label: "brown-light2", color: "#b38473" },
      { label: "brown-light1", color: "#a16b58" },
      { label: "brown-dark1", color: "#744d3f" },
      { label: "brown-dark2", color: "#634236" },
      { label: "brown-dark3", color: "#53372d" },
      { label: "brown-dark4", color: "#422c24" },
      { label: "brown-dark5", color: "#32211b" },
      { label: "brown-dark6", color: "#211612" }
    ]
  },
  {
    label: "blue-grey",
    color: "#6c8693",
    shades: [
      { label: "blue-grey-light6", color: "#f0f3f4" },
      { label: "blue-grey-light5", color: "#dae1e4" },
      { label: "blue-grey-light4", color: "#c4cfd4" },
      { label: "blue-grey-light3", color: "#aebcc4" },
      { label: "blue-grey-light2", color: "#98aab3" },
      { label: "blue-grey-light1", color: "#8298a3" },
      { label: "blue-grey-dark1", color: "#5f7581" },
      { label: "blue-grey-dark2", color: "#51656f" },
      { label: "blue-grey-dark3", color: "#44545c" },
      { label: "blue-grey-dark4", color: "#36444a" },
      { label: "blue-grey-dark5", color: "#293338" },
      { label: "blue-grey-dark6", color: "#1c2226" }
    ]
  },
  {
    label: "grey",
    color: "#848484",
    shades: [
      { label: "grey-light6", color: "#f7f7f7" },
      { label: "grey-light5", color: "#e4e4e4" },
      { label: "grey-light4", color: "#d1d1d1" },
      { label: "grey-light3", color: "#bdbdbd" },
      { label: "grey-light2", color: "#aaaaaa" },
      { label: "grey-light1", color: "#979797" },
      { label: "grey-dark1", color: "#747474" },
      { label: "grey-dark2", color: "#646464" },
      { label: "grey-dark3", color: "#555555" },
      { label: "grey-dark4", color: "#454545" },
      { label: "grey-dark5", color: "#353535" },
      { label: "grey-dark6", color: "#252525" }
    ]
  },
  { label: "black", color: "#000" },
  { label: "white", color: "#fff" },
  { label: "transparent", color: "transparent" },
  { label: "inherit", color: "inherit" }
], U = {
  cssScope: ".w-app",
  baseIncrement: 4
};
let le = { keys: [], values: [] }, he = null;
const Le = (e) => {
  let t = "";
  const i = {}, { info: o, warning: a, success: l, error: n, shades: r, ...d } = e, { cssScope: h } = U;
  for (const g in d)
    t += `${h} .${g}--bg{background-color:var(--w-${g}-color)}${h} .${g}{color:var(--w-${g}-color)}`;
  for (const g in r)
    t += `${h} .${g}--bg{background-color:${r[g]}}${h} .${g}{color:${r[g]}}`;
  const k = { ...d, info: o, warning: a, success: l, error: n };
  for (const g in k)
    i[g] = k[g];
  let _ = "";
  return Object.entries(i).forEach(([g, T]) => {
    _ += `--w-${g}-color: ${T};`;
  }), `:root{${_}}${t}`;
}, Re = (e, t) => {
  let i = "";
  const { cssScope: o } = U;
  return e.forEach(({ min: a, label: l }) => {
    if (l === "xs")
      for (let n = 0; n < t; n++)
        i += `${o} .${l}${t - n}{width:${parseFloat(((t - n) * 100 / t).toFixed(4))}%;}`;
    else {
      i += `@media(min-width:${a}px){`;
      for (let n = 0; n < t; n++)
        i += `${o} .${l}${t - n}{width:${parseFloat(((t - n) * 100 / t).toFixed(4))}%;}`;
      i += "}";
    }
  }), i;
}, Pe = (e) => {
  let t = "";
  const { cssScope: i, baseIncrement: o } = U, a = [
    "show{display:block}",
    "hide{display:none}",
    "d-flex{display:flex}",
    "d-iflex{display:inline-flex}",
    "d-block{display:block}",
    "d-iblock{display:inline-block}",
    "text-left{text-align:left}",
    "text-center{text-align:center}",
    "text-right{text-align:right}",
    "text-nowrap{white-space:nowrap}",
    "row{flex-direction:row}",
    "column{flex-direction:column}",
    "column-reverse{flex-direction:column-reverse}",
    "grow{flex-grow:1;flex-basis:auto}",
    "no-grow{flex-grow:0}",
    "shrink{flex-shrink:1;margin-left:auto;margin-right:auto}",
    "no-shrink{flex-shrink:0}",
    "fill-width{width:100%}",
    "fill-height{height:100%}",
    "basis-zero{flex-basis:0}",
    "align-start{align-items:flex-start}",
    "align-center{align-items:center}",
    "align-end{align-items:flex-end}",
    "align-self-start{align-self:flex-start}",
    "align-self-center{align-self:center}",
    "align-self-end{align-self:flex-end}",
    "align-self-stretch{align-self:stretch}",
    "justify-start{justify-content:flex-start}",
    "justify-center{justify-content:center}",
    "justify-end{justify-content:flex-end}",
    "justify-space-between{justify-content:space-between}",
    "justify-space-around{justify-content:space-around}",
    "justify-space-evenly{justify-content:space-evenly}"
  ], l = Array(12).fill();
  return e.forEach(({ label: n, min: r }) => {
    n !== "xs" && (t += `@media(min-width:${r}px){` + a.map((d) => `${i} .${n}u-${d}`).join("") + // w-grid columns and gap.
    l.map((d, h) => `.w-grid.${n}u-columns${h + 1}{grid-template-columns:repeat(${h + 1},1fr);}`).join("") + l.map((d, h) => `.w-flex.${n}u-gap${h + 1},.w-grid.${n}u-gap${h + 1}{gap:${(h + 1) * o}px;}`).join("") + `.w-flex.${n}u-gap0,.w-flex.${n}u-gap0{gap:0}}`);
  }), e.forEach(({ label: n, min: r, max: d }) => {
    t += `@media (min-width:${r}px) and (max-width:${d}px){` + a.map((h) => `${i} .${n}-${h}`).join("") + // w-grid columns and gap.
    l.map((h, k) => `.w-grid.${n}-columns${k + 1}{grid-template-columns:repeat(${k + 1},1fr);}`).join("") + l.map((h, k) => `.w-flex.${n}-gap${k + 1},.w-grid.${n}-gap${k + 1}{gap:${(k + 1) * o}px;}`).join("") + `.w-flex.${n}-gap0,.w-flex.${n}-gap0{gap:0}}`;
  }), e.forEach(({ label: n, max: r }) => {
    n !== "xl" && (t += `@media (max-width:${r}px){` + a.map((d) => `${i} .${n}d-${d}`).join("") + // w-grid columns and gap.
    l.map((d, h) => `.w-grid.${n}d-columns${h + 1}{grid-template-columns:repeat(${h + 1},1fr);}`).join("") + l.map((d, h) => `.w-flex.${n}d-gap${h + 1},.w-grid.${n}d-gap${h + 1}{gap:${(h + 1) * o}px;}`).join("") + `.w-flex.${n}d-gap0,.w-flex.${n}d-gap0{gap:0}}`);
  }), t;
}, ce = (e) => {
  const t = window.innerWidth, i = le.values.slice(0);
  i.push(t), i.sort((a, l) => a - l);
  const o = le.keys[i.indexOf(t)] || "xl";
  o !== he && (he = o, e.breakpoint = {
    name: o,
    xs: o === "xs",
    sm: o === "sm",
    md: o === "md",
    lg: o === "lg",
    xl: o === "xl",
    width: t
  }), e.breakpoint.width = window.innerWidth;
}, Oe = (e) => {
  const { config: t } = e;
  if (le = { keys: Object.keys(t.breakpoints), values: Object.values(t.breakpoints) }, !document.getElementById("wave-ui-styles")) {
    const i = document.createElement("style");
    i.id = "wave-ui-styles", i.innerHTML = ze(t);
    const o = document.head.querySelectorAll('style,link[rel="stylesheet"]')[0];
    o ? o.before(i) : document.head.appendChild(i);
  }
  ce(e), window.addEventListener("resize", () => ce(e));
}, xe = (e) => {
  if (!document.getElementById("wave-ui-colors")) {
    const t = document.createElement("style");
    t.id = "wave-ui-colors", t.innerHTML = Le(e);
    const i = document.head.querySelectorAll('style,link[rel="stylesheet"]')[0];
    i ? i.before(t) : document.head.appendChild(t);
  }
}, ze = (e) => {
  const t = Object.entries(e.breakpoints), i = t.map(([l, n], r) => {
    const [, d = 0] = t[r - 1] || [];
    return { label: l, min: d ? d + 1 : 0, max: n };
  }), o = getComputedStyle(document.documentElement);
  U.cssScope = o.getPropertyValue("--w-css-scope"), U.baseIncrement = parseInt(o.getPropertyValue("--w-base-increment"));
  let a = "";
  return a += Re(i, e.css.grid), e.css.breakpointLayoutClasses && (a += Pe(i)), a;
}, Me = ["innerHTML"];
function Ee(e, t, i, o, a, l) {
  const n = $("w-alert");
  return s(), b(Ce, { to: ".w-app" }, [
    V(oe, {
      class: f(["w-notification-manager", { "w-notification-manager--left": l.conf.align === "left" }]),
      tag: "div",
      name: l.transition,
      appear: ""
    }, {
      default: m(() => [
        (s(!0), u(w, null, L(l.notifications, (r) => (s(), u(w, null, [
          r._value ? (s(), b(n, S({
            class: "white--bg",
            key: r._uid,
            modelValue: r._value,
            "onUpdate:modelValue": (d) => r._value = d,
            onClose: r.dismiss
          }, l.notifProps(r)), {
            default: m(() => [
              y("div", {
                innerHTML: r.message
              }, null, 8, Me)
            ]),
            _: 2
          }, 1040, ["modelValue", "onUpdate:modelValue", "onClose"])) : p("", !0)
        ], 64))), 256))
      ]),
      _: 1
    }, 8, ["class", "name"])
  ]);
}
const v = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [o, a] of t)
    i[o] = a;
  return i;
}, We = {
  name: "w-notification-manager",
  computed: {
    conf() {
      return this.$waveui.config.notificationManager;
    },
    notifications() {
      var e;
      return (e = this.$waveui._notificationManager) == null ? void 0 : e.notifications;
    },
    // Possible transitions: slide-fade-down, slide-fade-left, slide-fade-right,
    // slide-left, slide-right, bounce, twist, fade, scale, scale-fade.
    transition() {
      return this.conf.transition ? this.conf.transition.replace("default", `slide-${this.conf.align === "left" ? "right" : "left"}`) : "";
    }
  },
  methods: {
    notifProps(e) {
      const { _value: t, _uid: i, message: o, timeout: a, ...l } = e;
      return l.dismiss && (l.dismiss = !0), l;
    }
  }
}, Ke = /* @__PURE__ */ v(We, [["render", Ee]]);
var H;
const N = class N {
  constructor() {
    F(this, "notifications");
    // Private fields.
    F(this, "_uid");
    // A unique ID for each notification.
    F(this, "_notificationDefaults");
    if (Y(N, H))
      return Y(N, H);
    this.notifications = [], this._uid = 0, this._notificationDefaults = {
      _uid: 0,
      _value: !0,
      message: "",
      timeout: 4e3,
      dismiss: !0
    }, ee(N, H, this);
  }
  notify(...t) {
    let i = {
      ...this._notificationDefaults,
      _uid: this._uid++
    };
    if (typeof t[0] == "object")
      i = { ...i, ...t[0] };
    else {
      const [o, a, l] = t;
      i = {
        ...i,
        message: o || "",
        [a === void 0 ? "info" : a]: !0,
        timeout: l || l === 0 ? parseFloat(l) : 4e3
      };
    }
    i.dismiss && (i.dismiss = () => this.dismiss(i._uid)), this.notifications.push(i), ~~i.timeout && setTimeout(() => this.dismiss(i._uid), i.timeout);
  }
  dismiss(t) {
    this.notifications = this.notifications.filter((i) => i._uid !== t);
  }
};
H = new WeakMap(), Z(N, H, void 0);
let se = N;
const Ae = (e, t, i) => {
  const o = document.createElement("div");
  e.appendChild(o);
  const a = Se(Be({
    ...Ke,
    inject: ["$waveui"]
  })).provide("$waveui", i);
  for (const l in t) {
    const n = t[l];
    a.component(n.name, { ...n, inject: ["$waveui"] });
  }
  a.mount(o), o.remove();
};
let pe = !1;
const Ne = (e) => {
  const t = window.matchMedia("(prefers-color-scheme: dark)");
  e.preferredTheme = t.matches ? "dark" : "light", e.switchTheme(e.preferredTheme), t.addEventListener("change", (i) => {
    e.preferredTheme = i.matches ? "dark" : "light", e.switchTheme(e.preferredTheme);
  });
}, De = (e, t) => {
  var i, o;
  for (const a in t)
    if ((i = e.props) != null && i[a])
      e.props[a].default = t[a];
    else {
      let l = !1;
      if (Array.isArray(e.mixins) && e.mixins.length) {
        for (const n of e.mixins)
          if ((o = n == null ? void 0 : n.props) != null && o[a]) {
            n.props[a].default = t[a], l = !0;
            break;
          }
        l || j(`Attempting to set a preset on a prop that doesn't exist: \`${e.name}.${a}\`.`);
        continue;
      }
    }
};
var X;
const D = class D {
  constructor(t, i = {}) {
    // Exposed as a global object and also `app.provide`d.
    // Accessible from this.$waveui, or inject('$waveui').
    F(this, "$waveui", {
      breakpoint: {
        name: "",
        xs: !1,
        sm: !1,
        md: !1,
        lg: !1,
        xl: !1,
        width: null
      },
      config: {},
      colors: {},
      // Object of pairs of color-name => color hex.
      preferredTheme: null,
      // The user OS preferred theme (light or dark).
      theme: null,
      // The current theme (light or dark).
      _notificationManager: null,
      // Callable from this.$waveui.
      notify(...t) {
        this._notificationManager.notify(...t);
      },
      // Callable from this.$waveui.
      switchTheme(t, i = !1) {
        var a, l;
        this.theme = t, document.documentElement.setAttribute("data-theme", t), (l = (a = document.head.querySelector("#wave-ui-colors")) == null ? void 0 : a.remove) == null || l.call(a);
        const o = this.config.colors[this.theme];
        xe(o), this.colors = de(o, ue);
      }
    });
    if (Y(D, X)) {
      console.warn("Wave UI is already instantiated.");
      return;
    }
    if (this.$waveui._notificationManager = new se(), i.theme || (i.theme = "light"), i.colors) {
      const n = { ...i.colors };
      i.colors.light || (i.colors.light = n), i.colors.dark || (i.colors.dark = n), i.colors = { light: i.colors.light, dark: i.colors.dark };
    }
    let { components: o, ...a } = i;
    a = this.$waveui.config = ye(a), a.css.colorShades && Te(a);
    const l = J(this.$waveui);
    t.config.globalProperties.$waveui = l, t.provide("$waveui", l), a.theme !== "auto" && (this.$waveui.colors = de(a.colors[a.theme], ue));
  }
  static install(t, i = {}) {
    var a;
    t.directive("focus", {
      // Wait for the next tick to focus the newly mounted element.
      mounted: (l) => setTimeout(() => l.focus(), 0)
    }), t.directive("scroll", {
      mounted: (l, n) => {
        const r = (d) => {
          n.value(d, l) && window.removeEventListener("scroll", r);
        };
        window.addEventListener("scroll", r);
      }
    });
    const { components: o = {} } = i || {};
    for (const l in o) {
      const n = o[l];
      (a = i.presets) != null && a[n.name] && De(n, i.presets[n.name]), t.component(n.name, n);
    }
    t.mixin({
      // Add a mixin to capture the first mounted hook, trigger the Wave UI init then unregister the mixin straight away.
      beforeMount() {
        if (!pe) {
          pe = !0;
          const l = _e("$waveui"), { config: n } = l, r = document.querySelector(n.on) || document.body;
          r.classList.add("w-app"), n.theme === "auto" ? Ne(l) : l.switchTheme(n.theme, !0), Oe(l), Ae(r, o, l), t._context.mixins.find((d) => d.mounted && delete d.mounted);
        }
      }
    }), new D(t, i), ee(D, X, !0);
  }
};
X = new WeakMap(), Z(D, X, !1);
let q = D;
const He = ["aria-expanded"], Fe = ["onClick", "onFocus", "onKeypress", "tabindex"], je = ["innerHTML"], Ue = ["innerHTML"];
function qe(e, t, i, o, a, l) {
  const n = $("w-button"), r = $("w-transition-expand");
  return s(), u("div", {
    class: f(["w-accordion", l.accordionClasses])
  }, [
    (s(!0), u(w, null, L(e.accordionItems, (d, h) => (s(), u("div", {
      class: f(["w-accordion__item", l.itemClasses(d)]),
      key: h,
      "aria-expanded": d._expanded ? "true" : "false"
    }, [
      y("div", {
        class: f(["w-accordion__item-title", i.titleClass]),
        onClick: (k) => !d._disabled && l.toggleItem(d, k),
        onFocus: (k) => e.$emit("focus", l.getOriginalItem(d)),
        onKeypress: W((k) => !d._disabled && l.toggleItem(d, k), ["enter"]),
        tabindex: !d._disabled && 0
      }, [
        i.expandIcon && !i.expandIconRight ? (s(), b(n, {
          key: 0,
          class: f(["w-accordion__expand-icon", { "w-accordion__expand-icon--expanded": d._expanded, "w-accordion__expand-icon--rotate90": i.expandIconRotate90 }]),
          icon: d._expanded && i.collapseIcon || i.expandIcon,
          "icon-props": i.expandIconProps,
          disabled: d._disabled || null,
          tabindex: -1,
          text: "",
          onKeypress: t[0] || (t[0] = z(() => {
          }, ["stop"])),
          onClick: z((k) => !d._disabled && l.toggleItem(d, k), ["stop"])
        }, null, 8, ["icon", "icon-props", "disabled", "onClick", "class"])) : p("", !0),
        e.$slots[`item-title.${d.id || h + 1}`] ? c(e.$slots, `item-title.${d.id || h + 1}`, {
          key: 1,
          item: l.getOriginalItem(d),
          expanded: d._expanded,
          index: h + 1
        }) : c(e.$slots, "item-title", {
          key: 2,
          item: l.getOriginalItem(d),
          expanded: d._expanded,
          index: h + 1
        }, () => [
          y("div", {
            class: "grow",
            innerHTML: d[i.itemTitleKey]
          }, null, 8, je)
        ]),
        i.expandIcon && i.expandIconRight ? (s(), b(n, {
          key: 3,
          class: f(["w-accordion__expand-icon", { "w-accordion__expand-icon--expanded": d._expanded, "w-accordion__expand-icon--rotate90": i.expandIconRotate90 }]),
          icon: d._expanded && i.collapseIcon || i.expandIcon,
          text: "",
          onKeypress: t[1] || (t[1] = z(() => {
          }, ["stop"])),
          onClick: z((k) => !d._disabled && l.toggleItem(d, k), ["stop"])
        }, null, 8, ["icon", "onClick", "class"])) : p("", !0)
      ], 42, Fe),
      V(r, {
        y: "",
        onAfterLeave: (k) => l.onEndOfCollapse(d),
        duration: i.duration
      }, {
        default: m(() => [
          d._expanded ? (s(), u("div", {
            key: 0,
            class: f(["w-accordion__item-content", i.contentClass])
          }, [
            e.$slots[`item-content.${d.id || h + 1}`] ? c(e.$slots, `item-content.${d.id || h + 1}`, {
              key: 0,
              item: l.getOriginalItem(d),
              expanded: d._expanded,
              index: h + 1
            }) : c(e.$slots, "item-content", {
              key: 1,
              item: l.getOriginalItem(d),
              expanded: d._expanded,
              index: h + 1
            }, () => [
              y("div", {
                innerHTML: d[i.itemContentKey]
              }, null, 8, Ue)
            ])
          ], 2)) : p("", !0)
        ]),
        _: 2
      }, 1032, ["onAfterLeave", "duration"])
    ], 10, He))), 128))
  ], 2);
}
const Xe = {
  name: "w-accordion",
  props: {
    modelValue: { type: Array },
    color: { type: String },
    bgColor: { type: String },
    items: { type: [Array, Number], required: !0 },
    itemColorKey: { type: String, default: "color" },
    // Support a different color per item.
    itemTitleKey: { type: String, default: "title" },
    itemContentKey: { type: String, default: "content" },
    itemClass: { type: String },
    titleClass: { type: String },
    contentClass: { type: String },
    expandIcon: { type: [String, Boolean], default: "wi-triangle-down" },
    expandIconRight: { type: Boolean },
    expandIconRotate90: { type: Boolean },
    expandIconProps: { type: Object, default: () => ({}) },
    expandSingle: { type: Boolean },
    collapseIcon: { type: String },
    shadow: { type: Boolean },
    duration: { type: Number, default: 250 },
    dark: { type: Boolean },
    light: { type: Boolean }
  },
  emits: ["input", "update:modelValue", "focus", "item-expand", "item-collapsed"],
  data: () => ({
    accordionItems: []
  }),
  computed: {
    accordionClasses() {
      return {
        [this.color]: this.color,
        [`${this.bgColor}--bg`]: this.bgColor,
        "w-accordion--dark": this.dark,
        "w-accordion--light": this.light,
        "w-accordion--shadow": this.shadow,
        "w-accordion--no-icon": !this.expandIcon && !this.collapseIcon,
        "w-accordion--icon-right": this.expandIcon && this.expandIconRight,
        "w-accordion--rotate-icon": this.expandIcon && !this.collapseIcon
      };
    }
  },
  methods: {
    toggleItem(e, t) {
      e._expanded = !e._expanded, this.expandSingle && this.accordionItems.forEach((o) => o._index !== e._index && (o._expanded = !1));
      const i = this.accordionItems.map((o) => o._expanded || !1);
      this.$emit("update:modelValue", i), this.$emit("input", i), this.$emit("item-expand", { item: e, expanded: e._expanded }), t.target.blur(), setTimeout(() => t.target.focus(), 300);
    },
    onEndOfCollapse(e) {
      this.$emit("item-collapsed", { item: e, expanded: e._expanded });
    },
    // Return the original accordion item (so there is no `_index`, etc.).
    getOriginalItem(e) {
      return this.items[e._index];
    },
    itemClasses(e) {
      return {
        [this.itemClass]: this.itemClass || null,
        "w-accordion__item--expanded": e._expanded,
        "w-accordion__item--disabled": e._disabled,
        [e[this.itemColorKey]]: e[this.itemColorKey]
      };
    },
    updateItems() {
      const e = typeof this.items == "number" ? Array(this.items).fill({}) : this.items || [];
      this.accordionItems = e.map((t, i) => ({
        ...t,
        _index: i,
        _expanded: this.modelValue && this.modelValue[i],
        _disabled: !!t.disabled
      }));
    }
  },
  created() {
    this.updateItems();
  },
  watch: {
    modelValue() {
      this.updateItems();
    },
    items: {
      handler() {
        this.updateItems();
      },
      deep: !0
    }
  }
}, Ye = /* @__PURE__ */ v(Xe, [["render", qe]]), Ge = { class: "w-alert__content" };
function Je(e, t, i, o, a, l) {
  const n = $("w-icon"), r = $("w-button");
  return a.show ? (s(), u("div", S({
    key: 0,
    class: "w-alert"
  }, M(e.$attrs, !0), { class: l.classes }), [
    l.type || i.icon || i.dismiss ? (s(), u(w, { key: 0 }, [
      l.type || i.icon ? (s(), b(n, {
        key: 0,
        class: "w-alert__icon mr2"
      }, {
        default: m(() => [
          B(C(l.type ? l.typeIcon : i.icon), 1)
        ]),
        _: 1
      })) : p("", !0),
      y("div", Ge, [
        c(e.$slots, "default")
      ]),
      i.dismiss ? (s(), b(r, {
        key: 1,
        class: "w-alert__dismiss",
        onClick: t[0] || (t[0] = (d) => {
          e.$emit("update:modelValue", a.show = !1), e.$emit("input", !1), e.$emit("close", !1);
        }),
        icon: "wi-cross",
        color: "inherit",
        sm: "",
        text: ""
      })) : p("", !0)
    ], 64)) : c(e.$slots, "default", { key: 1 })
  ], 16)) : p("", !0);
}
const Qe = {
  name: "w-alert",
  props: {
    modelValue: { default: !0 },
    // Show or hide.
    color: { type: String },
    bgColor: { type: String },
    shadow: { type: Boolean },
    tile: { type: Boolean },
    round: { type: Boolean },
    icon: { type: String },
    iconOutside: { type: Boolean },
    plain: { type: Boolean },
    dismiss: { type: Boolean },
    // Types (with icon).
    success: { type: Boolean },
    info: { type: Boolean },
    warning: { type: Boolean },
    error: { type: Boolean },
    // Sizes.
    xs: { type: Boolean },
    sm: { type: Boolean },
    md: { type: Boolean },
    lg: { type: Boolean },
    xl: { type: Boolean },
    // Borders.
    noBorder: { type: Boolean },
    borderLeft: { type: Boolean },
    borderRight: { type: Boolean },
    borderTop: { type: Boolean },
    borderBottom: { type: Boolean },
    outline: { type: Boolean },
    dark: { type: Boolean },
    light: { type: Boolean }
  },
  emits: ["input", "update:modelValue", "close"],
  data() {
    return {
      show: this.modelValue
    };
  },
  computed: {
    typeIcon() {
      return this.type === "success" && "wi-check-circle" || this.type === "warning" && "wi-warning-circle" || this.type === "error" && "wi-cross-circle" || this.type === "info" && "wi-info-circle";
    },
    type() {
      return this.success && "success" || this.info && "info" || this.warning && "warning" || this.error && "error" || null;
    },
    presetSize() {
      return this.xs && "xs" || this.sm && "sm" || this.md && "md" || this.lg && "lg" || this.xl && "xl" || null;
    },
    hasSingleBorder() {
      return this.borderLeft || this.borderRight || this.borderTop || this.borderBottom;
    },
    classes() {
      return {
        [`${this.bgColor || this.plain && this.type}--bg w-alert--bg`]: this.bgColor || this.plain && this.type,
        [this.color || !this.plain && this.type]: this.color || !this.plain && this.type,
        [`size--${this.presetSize}`]: this.presetSize,
        [`w-alert--${this.type}`]: this.type,
        "w-alert--has-icon": this.type || this.icon || this.dismiss,
        "w-alert--icon-outside": this.iconOutside,
        "w-alert--plain": this.type && this.plain,
        "w-alert--outline": this.outline,
        "w-alert--tile": this.tile,
        "w-alert--round": this.round,
        "w-alert--no-border": this.noBorder || this.plain && this.type,
        "w-alert--one-border": this.hasSingleBorder || this.iconOutside,
        "w-alert--border-left": !this.noBorder && this.borderLeft || this.iconOutside,
        "w-alert--border-right": !this.noBorder && this.borderRight,
        "w-alert--border-top": !this.noBorder && this.borderTop,
        "w-alert--border-bottom": !this.noBorder && this.borderBottom,
        "w-alert--shadow": this.shadow,
        "w-alert--dark": this.dark,
        "w-alert--light": this.light
      };
    }
  },
  watch: {
    modelValue(e) {
      this.show = e;
    }
  }
}, Ze = /* @__PURE__ */ v(Qe, [["render", Je]]), et = { class: "w-autocomplete__selection" }, tt = ["innerHTML"], it = ["innerHTML"], lt = ["value"], st = ["onClick"], ot = ["innerHTML"], at = ["innerHTML"];
function nt(e, t, i, o, a, l) {
  const n = $("w-button"), r = $("w-transition-slide-fade");
  return s(), u("div", {
    class: f(["w-autocomplete", l.classes]),
    onClick: t[5] || (t[5] = (...d) => l.onClick && l.onClick(...d))
  }, [
    e.selection.length ? (s(!0), u(w, { key: 0 }, L(e.selection, (d, h) => (s(), u("div", et, [
      c(e.$slots, "selection", {
        item: d,
        unselect: (k) => l.unselectItem(k)
      }, () => [
        y("span", {
          innerHTML: d[i.itemLabelKey]
        }, null, 8, tt),
        V(n, {
          onClick: z((k) => l.unselectItem(h), ["stop"]),
          icon: "wi-cross",
          xs: "",
          text: "",
          color: "currentColor"
        }, null, 8, ["onClick"])
      ])
    ]))), 256)) : p("", !0),
    !e.selection.length && !e.keywords && i.placeholder ? (s(), u("div", {
      key: 1,
      class: "w-autocomplete__placeholder",
      innerHTML: i.placeholder
    }, null, 8, it)) : p("", !0),
    y("input", S({
      class: "w-autocomplete__input",
      ref: "input",
      value: e.keywords
    }, M(l.inputEventListeners, !0)), null, 16, lt),
    V(r, null, {
      default: m(() => [
        e.menuOpen ? (s(), u("ul", {
          key: 0,
          class: "w-autocomplete__menu",
          ref: "menu",
          onMousedown: t[1] || (t[1] = (d) => e.menuIsBeingClicked = !0),
          onMouseup: t[2] || (t[2] = (...d) => l.setEndOfMenuClick && l.setEndOfMenuClick(...d)),
          onTouchstart: t[3] || (t[3] = (d) => e.menuIsBeingClicked = !0),
          onTouchend: t[4] || (t[4] = (...d) => l.setEndOfMenuClick && l.setEndOfMenuClick(...d))
        }, [
          (s(!0), u(w, null, L(l.filteredItems, (d, h) => (s(), u("li", {
            key: h,
            onClick: z((k) => (l.selectItem(d), e.$emit("item-click", d)), ["stop"]),
            class: f({ highlighted: e.highlightedItem === d.uid })
          }, [
            c(e.$slots, "item", {
              item: d,
              highlighted: e.highlightedItem === d.uid
            }, () => [
              y("span", {
                innerHTML: d[i.itemLabelKey]
              }, null, 8, ot)
            ])
          ], 10, st))), 128)),
          l.filteredItems.length ? p("", !0) : (s(), u("li", {
            key: 0,
            class: f(["w-autocomplete__no-match", { "w-autocomplete__no-match--default": !e.$slots.noMatch }])
          }, [
            c(e.$slots, "no-match", {}, () => [
              y("div", {
                class: "caption",
                innerHTML: i.noMatch ?? "No match."
              }, null, 8, at)
            ])
          ], 2)),
          e.$slots["extra-item"] ? (s(), u("li", {
            key: 1,
            class: f(["w-autocomplete__extra-item", { highlighted: e.highlightedItem === "extra-item" }]),
            onClick: t[0] || (t[0] = (...d) => l.selectExtraItem && l.selectExtraItem(...d))
          }, [
            c(e.$slots, "extra-item")
          ], 2)) : p("", !0)
        ], 544)) : p("", !0)
      ]),
      _: 3
    })
  ], 2);
}
const rt = {
  name: "w-autocomplete",
  props: {
    items: { type: Array, required: !0 },
    modelValue: { type: [String, Number, Array] },
    // String or Number if single selections, Array if multiple.
    placeholder: { type: String },
    openOnKeydown: { type: Boolean },
    // By default the menu is always open for selection.
    multiple: { type: Boolean },
    // When multiple is on, prevents duplicate items selections by default, unless this is set to true.
    allowDuplicates: { type: Boolean },
    noMatch: { type: String },
    // Contains the unique selection value for each item.
    // Can be a numeric ID, a slug, etc. (outside of Wave UI)
    itemValueKey: { type: String, default: "value" },
    // Contains the string to display for each item.
    itemLabelKey: { type: String, default: "label" },
    // Contains the string to search keywords into for each item.
    // This can for instance be an aggregation of multiple fields (outside of Wave UI).
    itemSearchableKey: { type: String, default: "searchable" }
  },
  // item-select is also from keyboard, 'item-click' may be useful for mouseenter mouseleave events.
  emits: ["update:modelValue", "input", "focus", "blur", "keydown", "item-click", "item-select", "extra-item-select"],
  data: () => ({
    keywords: "",
    selection: [],
    menuOpen: !1,
    highlightedItem: null,
    // The focus-blur events occur more times than it should emit to the outside due to the menu
    // item clicking. So keep the focus on as long as the user is interacting with the autocomplete.
    menuIsBeingClicked: !1
  }),
  computed: {
    // Keep the autocomplete matching as fast as possible by caching optimized search strings.
    normalizedKeywords() {
      return this.normalize(this.keywords);
    },
    // Keep the autocomplete matching as fast as possible by caching optimized search strings.
    optimizedItemsForSearch() {
      return this.items.map((e, t) => ({
        ...e,
        uid: t,
        searchable: this.normalize(e[this.itemSearchableKey] || "")
      }));
    },
    filteredItems() {
      let e = this.optimizedItemsForSearch;
      const t = (i) => !this.selection.find((o) => o.uid === i.uid);
      return this.keywords ? e = e.filter((i) => i.searchable.includes(this.normalizedKeywords) ? this.multiple && !this.allowDuplicates ? t(i) : !0 : !1) : this.multiple && !this.allowDuplicates && (e = e.filter(t)), e;
    },
    highlightedItemIndex() {
      return this.highlightedItem === null ? -1 : this.highlightedItem === "extra-item" ? this.filteredItems.length : this.filteredItems.findIndex((e) => e.uid === this.highlightedItem);
    },
    inputEventListeners() {
      return {
        ...this.$attrs,
        input: (e) => {
          this.keywords = e.target.value;
        },
        focus: (e) => {
          this.menuIsBeingClicked || (this.onFocus(e), this.$emit("focus", e));
        },
        blur: (e) => {
          this.menuIsBeingClicked || this.$emit("blur", e);
        },
        keydown: (e) => {
          this.onKeydown(e), this.$emit("keydown", e);
        },
        drop: this.onDrop,
        compositionstart: this.onCompositionStart,
        compositionupdate: this.onCompositionUpdate
      };
    },
    classes() {
      return {
        "w-autocomplete--open": this.menuOpen,
        "w-autocomplete--filled": this.selection.length,
        "w-autocomplete--has-keywords": this.keywords,
        "w-autocomplete--empty": !this.selection.length && !this.keywords
      };
    }
  },
  methods: {
    // Replace all the accents and non-latin characters with equivalent letters. E.g. é -> e.
    normalize(e) {
      return e.toLowerCase().normalize("NFKD").replace(new RegExp("\\p{Diacritic}", "gu"), "").replace(/œ/g, "oe");
    },
    // Selection can be made from click or enter key.
    selectItem(e) {
      this.multiple || (this.selection = []), this.selection.push(e), this.highlightedItem = e.uid, this.keywords = "";
      const t = this.multiple ? this.selection.map((i) => i[this.itemValueKey]) : e[this.itemValueKey];
      this.$emit("item-select", e), this.$emit("update:modelValue", t), this.$emit("input", t), this.$refs.input.focus(), this.multiple || this.closeMenu();
    },
    unselectItem(e) {
      this.selection.splice(e ?? this.selection.length - 1, 1), this.highlightedItem = null, this.$emit("update:modelValue", null), this.$emit("input", null), this.$refs.input.focus();
    },
    selectExtraItem() {
      this.keywords = "", this.$emit("extra-item-select"), this.closeMenu();
    },
    setEndOfMenuClick() {
      setTimeout(() => this.menuIsBeingClicked = !1, 100);
    },
    onClick() {
      this.openOnKeydown || this.openMenu(), this.$refs.input.focus();
    },
    onFocus() {
      this.openOnKeydown || this.openMenu();
    },
    // Can be triggered by a click outside the autocomplete, or by a tab key.
    // It should not be simply triggered by input blur, because when we click a menu item it will
    // blur the input for a few ms before we refocus it.
    // onBlur () {
    //   this.closeMenu()
    // },
    onKeydown(e) {
      var i;
      const t = this.filteredItems.length + (this.$slots["extra-item"] ? 1 : 0);
      if ((!this.openOnKeydown || (this.keywords || e.key.length === 1) && !this.menuOpen) && this.openMenu(), e.keyCode === 9)
        this.closeMenu();
      else if (e.keyCode === 8 && (!this.keywords || !e.target.selectionStart && !e.target.selectionEnd))
        this.unselectItem();
      else if (e.keyCode === 13)
        e.preventDefault(), this.highlightedItem === "extra-item" ? this.selectExtraItem() : this.highlightedItemIndex >= 0 && this.selectItem(this.filteredItems[this.highlightedItemIndex]);
      else if ([38, 40].includes(e.keyCode)) {
        e.preventDefault();
        let o = this.highlightedItemIndex;
        o === -1 ? o = e.keyCode === 38 ? t - 1 : 0 : o = (o + (e.keyCode === 38 ? -1 : 1) + t) % t, this.$slots["extra-item"] && o === t - 1 ? this.highlightedItem = "extra-item" : this.highlightedItem = ((i = this.filteredItems[o]) == null ? void 0 : i.uid) || 0;
        const a = this.$refs.menu;
        if (a)
          if (this.$slots["extra-item"] && o === t - 1)
            a.scrollTop = a.scrollHeight;
          else {
            const { offsetHeight: l, offsetTop: n } = a.childNodes[o] || {};
            a.scrollTop + a.offsetHeight - l < n ? a.scrollTop = n - a.offsetHeight + l : a.scrollTop > n && (a.scrollTop = n);
          }
      } else
        !this.multiple && this.selection.length && e.key.length === 1 && e.preventDefault();
    },
    // On drag & drop of a text in the input field, don't paste if single selection and already selected.
    onDrop(e) {
      !this.multiple && this.selection.length && e.preventDefault();
    },
    // When starting a sequence of keys that produces a character.
    onCompositionStart(e) {
      !this.multiple && this.selection.length && e.target.setAttribute("readonly", !0);
    },
    onCompositionUpdate(e) {
      !this.multiple && this.selection.length && setTimeout(() => e.target.removeAttribute("readonly"), 200);
    },
    openMenu() {
      this.menuOpen || (this.menuOpen = !0, document.addEventListener("click", this.onDocumentClick));
    },
    closeMenu() {
      this.menuOpen = !1, document.removeEventListener("click", this.onDocumentClick);
    },
    onDocumentClick(e) {
      !this.$el.contains(e.target) && !this.$el.isSameNode(e.target) && this.closeMenu();
    }
  },
  created() {
    this.modelValue && (Array.isArray(this.modelValue) ? this.modelValue : [this.modelValue]).forEach((t) => {
      this.selection.push(this.optimizedItemsForSearch.find((i) => i[this.itemValueKey] === +t));
    });
  },
  beforeUnmount() {
    document.removeEventListener("click", this.onDocumentClick);
  },
  watch: {
    modelValue(e) {
      this.selection = [], e && (Array.isArray(e) ? e : [e]).forEach((i) => {
        this.selection.push(this.optimizedItemsForSearch.find((o) => o[this.itemValueKey] === +i));
      });
    }
  }
}, dt = /* @__PURE__ */ v(rt, [["render", nt]]), ut = { class: "w-app" };
function ht(e, t, i, o, a, l) {
  return s(), u("div", ut, [
    c(e.$slots, "default")
  ]);
}
const ct = {
  name: "w-app",
  // Keep the props for the API documentation.
  props: {
    block: { type: Boolean },
    row: { type: Boolean },
    alignCenter: { type: Boolean },
    alignEnd: { type: Boolean },
    justifyCenter: { type: Boolean },
    justifyEnd: { type: Boolean },
    justifySpaceBetween: { type: Boolean },
    justifySpaceAround: { type: Boolean },
    justifySpaceEvenly: { type: Boolean },
    textCenter: { type: Boolean },
    textRight: { type: Boolean }
  }
}, pt = /* @__PURE__ */ v(ct, [["render", ht]]);
function ft(e, t, i, o, a, l) {
  return s(), u("div", S({ class: "w-badge-wrap" }, M(e.$attrs, !0)), [
    c(e.$slots, "default"),
    V(O, {
      name: `${i.transition}`
    }, {
      default: m(() => [
        i.modelValue ? (s(), u("div", {
          key: 0,
          class: f(["w-badge", l.classes]),
          style: R(l.styles),
          "aria-atomic": "true",
          "aria-label": "Badge",
          "aria-live": "polite",
          role: "status"
        }, [
          i.dot ? p("", !0) : c(e.$slots, "badge", { key: 0 }, () => [
            B(C(i.modelValue === !0 ? "" : i.modelValue || ""), 1)
          ])
        ], 6)) : p("", !0)
      ]),
      _: 3
    }, 8, ["name"])
  ], 16);
}
const mt = {
  name: "w-badge",
  props: {
    modelValue: { default: !0 },
    xs: { type: Boolean },
    sm: { type: Boolean },
    md: { type: Boolean },
    lg: { type: Boolean },
    xl: { type: Boolean },
    top: { type: Boolean },
    left: { type: Boolean },
    right: { type: Boolean },
    bottom: { type: Boolean },
    overlap: { type: Boolean },
    inline: { type: Boolean },
    color: { type: String },
    size: { type: [Number, String] },
    bgColor: { type: String, default: "primary" },
    badgeClass: { type: String },
    outline: { type: Boolean },
    shadow: { type: Boolean },
    dot: { type: Boolean },
    round: { type: Boolean },
    transition: { type: String, default: "fade" },
    dark: { type: Boolean },
    light: { type: Boolean }
  },
  emits: [],
  computed: {
    forcedSize() {
      return this.size && (isNaN(this.size) ? this.size : `${this.size}px`);
    },
    presetSize() {
      return this.xs && "xs" || this.sm && "sm" || this.md && "md" || this.lg && "lg" || this.xl && "xl" || "md";
    },
    position() {
      return [
        this.top && "top" || this.bottom && "bottom" || "top",
        this.left && "left" || this.right && "right" || "right"
      ];
    },
    classes() {
      const e = this.$slots.badge && this.$slots.badge().map((t) => t.children).join("");
      return {
        [this.color]: this.color,
        [`${this.bgColor}--bg`]: this.bgColor,
        [this.badgeClass]: this.badgeClass || null,
        "w-badge--round": this.round || (e || this.modelValue + "" || "").length < 2,
        "w-badge--dark": this.dark,
        "w-badge--light": this.light,
        "w-badge--outline": this.outline,
        "w-badge--inline": this.inline,
        "w-badge--shadow": this.shadow,
        "w-badge--overlap": this.overlap,
        "w-badge--dot": this.dot,
        [`size--${this.presetSize}`]: this.presetSize && !this.forcedSize,
        [`w-badge--${this.position.join(" w-badge--")}`]: !0
      };
    },
    styles() {
      return this.forcedSize && `font-size: ${this.forcedSize}`;
    }
  }
}, gt = /* @__PURE__ */ v(mt, [["render", ft]]), bt = ["innerHTML"];
function yt(e, t, i, o, a, l) {
  const n = $("w-icon");
  return s(), u("div", {
    class: f(["w-breadcrumbs", l.classes])
  }, [
    (s(!0), u(w, null, L(i.items, (r, d) => (s(), u(w, null, [
      d && e.$slots.separator ? (s(), u("span", {
        class: f(["w-breadcrumbs__separator", i.separatorColor]),
        key: `${d}a`
      }, [
        c(e.$slots, "separator", { index: d })
      ], 2)) : d ? (s(), b(n, {
        class: f(["w-breadcrumbs__separator", i.separatorColor]),
        key: `${d}b`
      }, {
        default: m(() => [
          B(C(i.icon), 1)
        ]),
        _: 2
      }, 1032, ["class"])) : p("", !0),
      r[i.itemRouteKey] && (d < i.items.length - 1 || i.linkLastItem) ? (s(), u(w, { key: 2 }, [
        e.$slots.item ? (s(), b(I(l.hasRouter ? "router-link" : "a"), {
          class: f(["w-breadcrumbs__item", i.color || null]),
          key: `${d}c`,
          to: l.hasRouter && r[i.itemRouteKey],
          href: r[i.itemRouteKey]
        }, {
          default: m(() => [
            c(e.$slots, "item", {
              item: r,
              index: d + 1,
              isLast: d === i.items.length - 1
            })
          ]),
          _: 2
        }, 1032, ["to", "href", "class"])) : (s(), b(I(l.hasRouter ? "router-link" : "a"), {
          class: f(["w-breadcrumbs__item", i.color || null]),
          key: `${d}d`,
          to: l.hasRouter && r[i.itemRouteKey],
          href: r[i.itemRouteKey],
          innerHTML: r[i.itemLabelKey]
        }, null, 8, ["to", "href", "innerHTML", "class"]))
      ], 64)) : e.$slots.item ? c(e.$slots, "item", {
        key: `${d}e`,
        item: r,
        index: d + 1,
        isLast: d === i.items.length - 1
      }) : (s(), u("span", {
        key: `${d}f`,
        innerHTML: r[i.itemLabelKey]
      }, null, 8, bt))
    ], 64))), 256))
  ], 2);
}
const wt = {
  name: "w-breadcrumbs",
  props: {
    items: { type: Array, required: !0 },
    linkLastItem: { type: Boolean },
    color: { type: String },
    // Applies on links.
    separatorColor: { type: String, default: "grey-light1" },
    icon: { type: String, default: "wi-chevron-right" },
    itemRouteKey: { type: String, default: "route" },
    itemLabelKey: { type: String, default: "label" },
    xs: { type: Boolean },
    sm: { type: Boolean },
    md: { type: Boolean },
    lg: { type: Boolean },
    xl: { type: Boolean }
  },
  emits: [],
  computed: {
    hasRouter() {
      return "$router" in this;
    },
    size() {
      return this.xs && "xs" || this.sm && "sm" || this.lg && "lg" || this.xl && "xl" || "md";
    },
    classes() {
      return {
        [`size--${this.size}`]: !0
      };
    }
  }
}, kt = /* @__PURE__ */ v(wt, [["render", yt]]), vt = {
  key: 0,
  class: "w-button__loader"
}, Ct = /* @__PURE__ */ y("svg", { viewBox: "0 0 40 40" }, [
  /* @__PURE__ */ y("circle", {
    cx: "20",
    cy: "20",
    r: "18",
    fill: "transparent",
    stroke: "currentColor",
    "stroke-width": "4",
    "stroke-linecap": "round"
  })
], -1);
function St(e, t, i, o, a, l) {
  const n = $("w-icon");
  return s(), b(I(i.route ? "a" : "button"), S({
    class: ["w-button", l.classes],
    type: !i.route && i.type,
    href: i.route && (l.externalLink ? i.route : l.resolvedRoute) || null,
    disabled: !!i.disabled || null
  }, M(l.listeners), { style: l.styles }), {
    default: m(() => [
      i.icon ? (s(), b(n, ie(S({ key: 0 }, i.iconProps || {})), {
        default: m(() => [
          B(C(i.icon), 1)
        ]),
        _: 1
      }, 16)) : c(e.$slots, "default", { key: 1 }),
      V(O, { name: "scale-fade" }, {
        default: m(() => [
          i.loading ? (s(), u("div", vt, [
            c(e.$slots, "loading", {}, () => [
              Ct
            ])
          ])) : p("", !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  }, 16, ["type", "href", "class", "disabled", "style"]);
}
const Bt = {
  props: {
    color: { type: String },
    bgColor: { type: String },
    dark: { type: Boolean },
    light: { type: Boolean },
    outline: { type: Boolean },
    text: { type: Boolean },
    round: { type: Boolean },
    shadow: { type: Boolean },
    tile: { type: Boolean },
    route: { type: [String, Object] },
    // Creates a link.
    // Force use of `a` instead of router-link.
    // Router link does not go to a url starting with `#` with history mode.
    forceLink: { type: Boolean },
    type: { type: String, default: "button" },
    disabled: { type: Boolean },
    loading: { type: Boolean },
    // If an icon is passed, no text will display.
    icon: { type: String, default: null },
    iconProps: { type: Object, default: () => ({}) },
    // Positions.
    absolute: { type: Boolean },
    fixed: { type: Boolean },
    top: { type: Boolean },
    bottom: { type: Boolean },
    left: { type: Boolean },
    right: { type: Boolean },
    zIndex: { type: [Number, String] },
    // Sizes.
    width: { type: [Number, String] },
    height: { type: [Number, String] },
    xs: { type: Boolean },
    sm: { type: Boolean },
    md: { type: Boolean },
    lg: { type: Boolean },
    xl: { type: Boolean }
  },
  emits: [],
  computed: {
    hasRouter() {
      return "$router" in this;
    },
    resolvedRoute() {
      return this.hasRouter ? this.$router.resolve(this.route).href : this.route;
    },
    listeners() {
      return this.route && this.hasRouter && !this.forceLink && !this.externalLink ? {
        ...this.$attrs,
        click: (e) => {
          this.$attrs.click && this.$attrs.click(e), this.$router.push(this.route), e.stopPropagation(), e.preventDefault();
        }
      } : this.$attrs;
    },
    size() {
      return this.xs && "xs" || this.sm && "sm" || this.lg && "lg" || this.xl && "xl" || "md";
    },
    position() {
      return [
        this.top && "top" || this.bottom && "bottom" || "top",
        this.left && "left" || this.right && "right" || "right"
      ];
    },
    externalLink() {
      return /^(https?:)?\/\/|mailto:|tel:/.test(this.route);
    },
    classes() {
      return {
        // If no color / bg color is set, set a primary color by default.
        "primary--bg": !this.bgColor && !this.color && !(this.outline || this.text),
        primary: !this.bgColor && !this.color && !this.dark && (this.outline || this.text),
        [this.color]: this.color,
        [`${this.bgColor}--bg`]: this.bgColor,
        "w-button--dark": this.dark,
        "w-button--light": this.light,
        "w-button--outline": this.outline,
        "w-button--text": this.text,
        "w-button--round": this.round,
        "w-button--tile": this.tile,
        "w-button--shadow": this.shadow,
        "w-button--loading": this.loading,
        "w-button--icon": this.icon,
        [`size--${this.size}`]: !0,
        "w-button--absolute": this.absolute,
        "w-button--fixed": this.fixed,
        [`w-button--${this.position.join(" w-button--")}`]: this.absolute || this.fixed
      };
    },
    styles() {
      return {
        width: (isNaN(this.width) ? this.width : `${this.width}px`) || null,
        height: (isNaN(this.height) ? this.height : `${this.height}px`) || null,
        zIndex: this.zIndex || this.zIndex === 0 || null
      };
    }
  }
}, _t = /* @__PURE__ */ v(Bt, [["render", St]]), $t = ["innerHTML"];
function Vt(e, t, i, o, a, l) {
  const n = $("button-partial");
  return i.tooltip ? (s(), b(I("w-tooltip"), ie(S({ key: 0 }, i.tooltipProps || {})), {
    activator: m(({ on: r }) => [
      V(n, S(l.buttonProps, M(r)), {
        default: m(() => [
          c(e.$slots, "default")
        ]),
        _: 2
      }, 1040)
    ]),
    default: m(() => [
      y("div", { innerHTML: i.tooltip }, null, 8, $t)
    ]),
    _: 3
  }, 16)) : (s(), b(n, ie(S({ key: 1 }, l.buttonProps)), {
    loading: m(() => [
      c(e.$slots, "loading")
    ]),
    default: m(() => [
      c(e.$slots, "default")
    ]),
    _: 3
  }, 16));
}
const It = {
  name: "w-button",
  inheritAttrs: !1,
  // The attrs are only bound to the button-partial, not the root.
  props: {
    color: { type: String },
    bgColor: { type: String },
    dark: { type: Boolean },
    outline: { type: Boolean },
    text: { type: Boolean },
    round: { type: Boolean },
    shadow: { type: Boolean },
    tile: { type: Boolean },
    tooltip: { type: String },
    tooltipProps: { type: Object, default: () => ({}) },
    route: { type: [String, Object] },
    // Creates a link.
    // Force use of `a` instead of router-link.
    // Router link does not go to a url starting with `#` with history mode.
    forceLink: { type: Boolean },
    type: { type: String, default: "button" },
    disabled: { type: Boolean },
    loading: { type: Boolean },
    // If an icon is passed, no text will display.
    icon: { type: String, default: null },
    iconProps: { type: Object, default: () => ({}) },
    // Positions.
    absolute: { type: Boolean },
    fixed: { type: Boolean },
    top: { type: Boolean },
    bottom: { type: Boolean },
    left: { type: Boolean },
    right: { type: Boolean },
    zIndex: { type: [Number, String] },
    // Sizes.
    width: { type: [Number, String] },
    height: { type: [Number, String] },
    xs: { type: Boolean },
    sm: { type: Boolean },
    md: { type: Boolean },
    lg: { type: Boolean },
    xl: { type: Boolean }
  },
  components: { ButtonPartial: _t },
  emits: [],
  computed: {
    buttonProps() {
      const { tooltip: e, tooltipProps: t, ...i } = this.$props;
      return { ...i, ...this.$attrs };
    }
  }
}, Tt = /* @__PURE__ */ v(It, [["render", Vt]]), K = (e = {}) => (typeof e == "string" ? e = { [e]: !0 } : Array.isArray(e) && (e = { [e.join(" ")]: !0 }), e), Lt = ["innerHTML"];
function Rt(e, t, i, o, a, l) {
  const n = $("w-image");
  return s(), u("div", {
    class: f(["w-card", l.classes])
  }, [
    e.$slots.title ? (s(), u("div", {
      key: 0,
      class: f(["w-card__title", { "w-card__title--has-toolbar": e.$slots.title && l.titleHasToolbar, ...l.titleClasses }])
    }, [
      c(e.$slots, "title")
    ], 2)) : i.title ? (s(), u("div", {
      key: 1,
      class: f(["w-card__title", { "w-card__title--has-toolbar": e.$slots.title && l.titleHasToolbar, ...l.titleClasses }]),
      innerHTML: i.title
    }, null, 10, Lt)) : p("", !0),
    i.image ? (s(), b(n, S({
      key: 2,
      class: "w-card__image",
      src: i.image
    }, l.imgProps), {
      default: m(() => [
        c(e.$slots, "image-content")
      ]),
      _: 3
    }, 16, ["src"])) : p("", !0),
    y("div", {
      class: f(["w-card__content", l.contentClasses])
    }, [
      c(e.$slots, "default")
    ], 2),
    e.$slots.actions ? (s(), u("div", {
      key: 3,
      class: f(["w-card__actions", { "w-card__actions--has-toolbar": l.actionsHasToolbar }])
    }, [
      c(e.$slots, "actions")
    ], 2)) : p("", !0)
  ], 2);
}
const Pt = {
  name: "w-card",
  props: {
    color: { type: String },
    bgColor: { type: String },
    shadow: { type: Boolean },
    noBorder: { type: Boolean },
    tile: { type: Boolean },
    title: { type: String },
    image: { type: String },
    imageProps: { type: Object },
    titleClass: { type: [String, Object, Array] },
    contentClass: { type: [String, Object, Array] },
    dark: { type: Boolean },
    light: { type: Boolean }
  },
  emits: [],
  computed: {
    titleClasses() {
      return K(this.titleClass);
    },
    contentClasses() {
      return K(this.contentClass);
    },
    titleHasToolbar() {
      const { title: e } = this.$slots;
      return e && e().map((t) => t.type.name).join("").includes("w-toolbar");
    },
    actionsHasToolbar() {
      const { actions: e } = this.$slots;
      return e && e().map((t) => t.type.name).join("").includes("w-toolbar");
    },
    imgProps() {
      return {
        tag: "div",
        ratio: 1 / 2,
        ...this.imageProps
      };
    },
    classes() {
      return {
        [this.color]: this.color,
        [`${this.bgColor}--bg`]: this.bgColor,
        "w-card--no-border": this.noBorder,
        "w-card--tile": this.tile,
        "w-card--shadow": this.shadow,
        "w-card--dark": this.dark,
        "w-card--light": this.light
      };
    }
  }
}, Ot = /* @__PURE__ */ v(Pt, [["render", Rt]]), E = {
  inject: {
    // Used in each form component to determine whether to use the w-form-element wrap or not.
    // So, if a form component is in a form, use the w-form-element wrap.
    formRegister: { default: null },
    // If the form is disabled or readonly, apply to all the form components.
    formProps: { default: () => ({ disabled: !1, readonly: !1 }) }
  },
  props: {
    name: { type: String },
    // When sending data through form.
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    required: { type: Boolean },
    tabindex: { type: String },
    validators: { type: Array }
  },
  data: () => ({
    valid: null
    // Null is pristine (unknown), can also be true or false.
  }),
  computed: {
    inputName() {
      return this.name || `${this.$options.name}--${this._.uid}`;
    },
    isDisabled() {
      return this.disabled || this.formProps.disabled;
    },
    isReadonly() {
      return this.readonly || this.formProps.readonly;
    },
    validationColor() {
      return this.formProps.validationColor;
    },
    labelClasses() {
      return {
        [this.labelColor]: this.labelColor && this.valid !== !1,
        [this.validationColor]: this.valid === !1
      };
    }
  },
  methods: {
    // Allow triggering a particular field validation manually via `$refs.myField.validate()`.
    validate() {
      this.$refs.formEl.validate(this);
    }
  }
}, xt = ["id", "name", "checked", "disabled", "required", "tabindex", "aria-checked"], zt = ["for"], Mt = ["for", "innerHTML"], Et = /* @__PURE__ */ y("svg", { viewBox: "-0.5 0 12 10" }, [
  /* @__PURE__ */ y("polyline", { points: "1 5 4 8 10 2" })
], -1), Wt = [
  Et
], Kt = ["for"], At = ["for", "innerHTML"];
function Nt(e, t, i, o, a, l) {
  return s(), b(I(e.formRegister && !l.wCheckboxes ? "w-form-element" : "div"), S({ ref: "formEl" }, e.formRegister && { validators: e.validators, inputValue: a.isChecked, disabled: e.isDisabled, readonly: e.isReadonly }, {
    valid: e.valid,
    "onUpdate:valid": t[5] || (t[5] = (n) => e.valid = n),
    onReset: t[6] || (t[6] = (n) => {
      e.$emit("update:modelValue", a.isChecked = null), e.$emit("input", null);
    }),
    class: l.classes
  }), {
    default: m(() => [
      y("input", {
        ref: "input",
        id: `w-checkbox--${e._.uid}`,
        type: "checkbox",
        name: e.inputName,
        checked: a.isChecked || null,
        disabled: e.isDisabled || e.isReadonly || null,
        required: e.required || null,
        tabindex: e.tabindex || null,
        onFocus: t[0] || (t[0] = (n) => e.$emit("focus", n)),
        onBlur: t[1] || (t[1] = (n) => e.$emit("blur", n)),
        onChange: t[2] || (t[2] = (n) => l.onInput()),
        onKeypress: t[3] || (t[3] = W((...n) => l.onInput && l.onInput(...n), ["enter"])),
        "aria-checked": a.isChecked || "false",
        role: "checkbox"
      }, null, 40, xt),
      l.hasLabel && i.labelOnLeft ? (s(), u(w, { key: 0 }, [
        e.$slots.default ? (s(), u("label", {
          key: 0,
          class: f(["w-checkbox__label w-form-el-shakable pr2", e.labelClasses]),
          for: `w-checkbox--${e._.uid}`
        }, [
          c(e.$slots, "default", {}, () => [
            B(C(i.label), 1)
          ])
        ], 10, zt)) : i.label ? (s(), u("label", {
          key: 1,
          class: f(["w-checkbox__label w-form-el-shakable pr2", e.labelClasses]),
          for: `w-checkbox--${e._.uid}`,
          innerHTML: i.label
        }, null, 10, Mt)) : p("", !0)
      ], 64)) : p("", !0),
      y("div", {
        class: f(["w-checkbox__input", this.color]),
        onClick: t[4] || (t[4] = (n) => {
          e.$refs.input.focus(), e.$refs.input.click();
        })
      }, Wt, 2),
      l.hasLabel && !i.labelOnLeft ? (s(), u(w, { key: 1 }, [
        e.$slots.default ? (s(), u("label", {
          key: 0,
          class: f(["w-checkbox__label w-form-el-shakable pl2", e.labelClasses]),
          for: `w-checkbox--${e._.uid}`
        }, [
          c(e.$slots, "default", {}, () => [
            B(C(i.label), 1)
          ])
        ], 10, Kt)) : i.label ? (s(), u("label", {
          key: 1,
          class: f(["w-checkbox__label w-form-el-shakable pl2", e.labelClasses]),
          for: `w-checkbox--${e._.uid}`,
          innerHTML: i.label
        }, null, 10, At)) : p("", !0)
      ], 64)) : p("", !0)
    ]),
    _: 3
  }, 16, ["valid", "class"]);
}
const Dt = {
  name: "w-checkbox",
  mixins: [E],
  inject: {
    wCheckboxes: { default: null }
  },
  props: {
    modelValue: { default: !1 },
    // v-model to check or uncheck.
    // When `value` is taken by a v-model and multiple w-checkbox are plugged on
    // the same v-model, this allow returning to the v-model a custom value.
    returnValue: {},
    label: { type: String },
    labelOnLeft: { type: Boolean },
    color: { type: String, default: "primary" },
    labelColor: { type: String, default: "primary" },
    noRipple: { type: Boolean },
    indeterminate: { type: Boolean },
    round: { type: Boolean },
    dark: { type: Boolean },
    light: { type: Boolean }
    // Props from mixin: name, disabled, readonly, required, tabindex, validators.
    // Computed from mixin: inputName, isDisabled & isReadonly.
  },
  emits: ["input", "update:modelValue", "focus", "blur"],
  data() {
    return {
      isChecked: this.modelValue,
      ripple: {
        start: !1,
        end: !1,
        timeout: null
      }
    };
  },
  computed: {
    hasLabel() {
      return this.label || this.$slots.default;
    },
    classes() {
      return {
        [`w-checkbox w-checkbox--${this.isChecked ? "checked" : "unchecked"}`]: !0,
        "w-checkbox--disabled": this.isDisabled,
        "w-checkbox--readonly": this.isReadonly,
        "w-checkbox--indeterminate": this.indeterminate,
        "w-checkbox--ripple": this.ripple.start,
        "w-checkbox--rippled": this.ripple.end,
        "w-checkbox--round": this.round,
        "w-checkbox--dark": this.dark,
        "w-checkbox--light": this.light
      };
    }
  },
  methods: {
    onInput() {
      this.isChecked = !this.isChecked;
      const e = this.isChecked && this.returnValue !== void 0 ? this.returnValue : this.isChecked;
      this.$emit("update:modelValue", e), this.$emit("input", e), this.noRipple || (this.isChecked ? (this.ripple.start = !0, this.ripple.timeout = setTimeout(() => {
        this.ripple.start = !1, this.ripple.end = !0, setTimeout(() => this.ripple.end = !1, 100);
      }, 700)) : (this.ripple.start = !1, clearTimeout(this.ripple.timeout)));
    }
  },
  watch: {
    modelValue(e) {
      this.isChecked = e;
    }
  }
}, Ht = /* @__PURE__ */ v(Dt, [["render", Nt]]), Ft = ["innerHTML"];
function jt(e, t, i, o, a, l) {
  const n = $("w-checkbox");
  return s(), b(I(e.formRegister ? "w-form-element" : "div"), S({ ref: "formEl" }, e.formRegister && { validators: e.validators, inputValue: l.checkboxItems.some((r) => r._isChecked), disabled: e.isDisabled }, {
    valid: e.valid,
    "onUpdate:valid": t[1] || (t[1] = (r) => e.valid = r),
    onReset: l.reset,
    column: !i.inline,
    wrap: i.inline,
    class: l.classes
  }), {
    default: m(() => [
      (s(!0), u(w, null, L(l.checkboxItems, (r, d) => (s(), b(n, S({
        key: d,
        "model-value": r._isChecked,
        "onUpdate:modelValue": (h) => l.toggleCheck(r, h),
        onFocus: t[0] || (t[0] = (h) => e.$emit("focus", h)),
        name: `${e.inputName}[]`
      }, { label: r.label, color: r.color, labelOnLeft: i.labelOnLeft, labelColor: i.labelColor, round: i.round }, {
        disabled: e.isDisabled || null,
        readonly: e.isReadonly || null,
        class: { mt1: !i.inline && d }
      }), {
        default: m(() => [
          e.$slots[`item.${d + 1}`] || e.$slots.item ? c(e.$slots, e.$slots[`item.${d + 1}`] ? `item.${d + 1}` : "item", {
            key: 0,
            item: l.getOriginalItem(r),
            checked: !!r._isChecked,
            index: d + 1,
            innerHTML: r.label
          }) : r.label ? (s(), u("div", {
            key: 1,
            innerHTML: r.label
          }, null, 8, Ft)) : p("", !0)
        ]),
        _: 2
      }, 1040, ["model-value", "onUpdate:modelValue", "name", "disabled", "readonly", "class"]))), 128))
    ]),
    _: 3
  }, 16, ["valid", "onReset", "column", "wrap", "class"]);
}
const Ut = {
  name: "w-checkboxes",
  mixins: [E],
  props: {
    items: { type: Array, required: !0 },
    // All the possible options.
    modelValue: { type: Array },
    // v-model on selected option.
    // If true, the returnValue set on each w-checkboxes item will be returned once the checkbox is
    // checked. If false & by default, the return value of the w-checkboxes is an array of booleans.
    returnValues: { type: Boolean },
    labelOnLeft: { type: Boolean },
    itemLabelKey: { type: String, default: "label" },
    itemValueKey: { type: String, default: "value" },
    itemColorKey: { type: String, default: "color" },
    // Support a different color per item.
    inline: { type: Boolean },
    round: { type: Boolean },
    color: { type: String, default: "primary" },
    labelColor: { type: String, default: "primary" }
    // Props from mixin: name, disabled, readonly, required, validators.
    // Computed from mixin: inputName, isDisabled & isReadonly.
  },
  emits: ["input", "update:modelValue", "focus"],
  provide() {
    return { wCheckboxes: !0 };
  },
  computed: {
    checkboxItems() {
      return (this.items || []).map((e, t) => {
        const i = e[this.itemValueKey] === void 0 ? e[this.itemLabelKey] || t : e[this.itemValueKey];
        return J({
          ...e,
          label: e[this.itemLabelKey],
          _index: t,
          value: i,
          // If no value is set then add one to prevent error.
          color: e[this.itemColorKey] || this.color,
          _isChecked: this.modelValue && this.modelValue.includes(i)
        });
      });
    },
    classes() {
      return [
        "w-checkboxes",
        `w-checkboxes--${this.inline ? "inline" : "column"}`
      ];
    }
  },
  methods: {
    reset() {
      this.checkboxItems.forEach((e) => e._isChecked = null), this.$emit("update:modelValue", []), this.$emit("input", []);
    },
    toggleCheck(e, t) {
      e._isChecked = t;
      const i = this.checkboxItems.filter((o) => o._isChecked).map((o) => this.returnValues ? o.returnValue : o.value);
      this.$emit("update:modelValue", i), this.$emit("input", i);
    },
    // Return the original item (so there is no `_index`, etc.).
    getOriginalItem(e) {
      return this.items[e._index];
    }
  }
}, qt = /* @__PURE__ */ v(Ut, [["render", jt]]);
function Xt(e, t, i, o, a, l) {
  const n = $("w-button"), r = $("w-flex"), d = $("w-menu"), h = ge("focus");
  return s(), b(d, S({
    modelValue: e.showPopup,
    "onUpdate:modelValue": t[2] || (t[2] = (k) => e.showPopup = k)
  }, l.wMenuProps), {
    activator: m(({ on: k }) => [
      V(n, S({ class: "w-confirm" }, { ...e.$attrs, ...l.buttonProps, ...i.disablePrompt ? {} : k }), {
        default: m(() => [
          c(e.$slots, "default")
        ]),
        _: 2
      }, 1040)
    ]),
    default: m(() => [
      V(r, {
        column: !i.inline,
        "align-center": ""
      }, {
        default: m(() => [
          y("div", null, [
            c(e.$slots, "question", {}, () => [
              B(C(i.question), 1)
            ])
          ]),
          y("div", {
            class: f(["w-flex justify-end", i.inline ? "ml2" : "mt2"])
          }, [
            i.cancel !== !1 ? (s(), b(n, S({
              key: 0,
              class: "mr2"
            }, l.cancelButtonProps, {
              "bg-color": (l.cancelButton || {}).bgColor || "error",
              onKeyup: t[0] || (t[0] = W((k) => !i.persistent && l.onCancel(), ["escape"])),
              onClick: l.onCancel
            }), {
              default: m(() => [
                c(e.$slots, "cancel", {}, () => [
                  B(C(l.cancelButton.label), 1)
                ])
              ]),
              _: 3
            }, 16, ["bg-color", "onClick"])) : p("", !0),
            A((s(), b(n, S(l.confirmButtonProps, {
              "bg-color": (l.confirmButton || {}).bgColor || "success",
              onKeyup: t[1] || (t[1] = W((k) => !i.persistent && l.onCancel(), ["escape"])),
              onClick: l.onConfirm
            }), {
              default: m(() => [
                c(e.$slots, "confirm", {}, () => [
                  B(C(l.confirmButton.label), 1)
                ])
              ]),
              _: 3
            }, 16, ["bg-color", "onClick"])), [
              [h]
            ])
          ], 2)
        ]),
        _: 3
      }, 8, ["column"])
    ]),
    _: 3
  }, 16, ["modelValue"]);
}
const Yt = {
  name: "w-confirm",
  inheritAttrs: !1,
  // The attrs are only bound to the button, not the w-menu.
  props: {
    // Main button props.
    bgColor: { type: String },
    color: { type: String },
    icon: { type: String },
    disablePrompt: { type: Boolean },
    // If true, the confirm button acts like a simple w-button.
    mainButton: { type: Object },
    // Allow passing down an object of props to the w-button component.
    question: { type: String, default: "Are you sure?" },
    // Cancel & confirm buttons props.
    // Allow passing down an object of props to the w-button component.
    // If a string is given, that will be the label of the button.
    // If false, no cancel button.
    cancel: { type: [Boolean, Object, String], default: void 0 },
    // Allow passing down an object of props to the w-button component.
    // If a string is given, that will be the label of the button.
    confirm: { type: [Object, String] },
    // global menu props.
    inline: { type: Boolean },
    // The layout inside the menu.
    // W-menu props.
    // Allow passing down an object of props to the w-menu component.
    menu: { type: Object, default: () => ({}) },
    // Allow passing down an object of props to the w-tooltip component.
    // If a string is given, that will be the label of the tooltip.
    tooltip: { type: [Boolean, Object, String] },
    // All the menu props shorthands, as long as they don't conflict with the button props.
    noArrow: { type: Boolean },
    // Adds a directional triangle to the edge of the menu, like a tooltip.
    top: { type: Boolean },
    bottom: { type: Boolean },
    left: { type: Boolean },
    right: { type: Boolean },
    alignTop: { type: Boolean },
    alignBottom: { type: Boolean },
    alignLeft: { type: Boolean },
    alignRight: { type: Boolean },
    persistent: { type: Boolean },
    transition: { type: String },
    dark: { type: Boolean },
    light: { type: Boolean }
  },
  emits: ["cancel", "confirm"],
  data: () => ({
    showPopup: !1,
    props: []
  }),
  computed: {
    cancelButton() {
      let e = { label: typeof this.cancel == "string" ? this.cancel : "Cancel" };
      return typeof this.cancel == "object" && (e = Object.assign({}, e, this.cancel)), e;
    },
    // Props to pass down to the w-button component.
    cancelButtonProps() {
      const { label: e, ...t } = this.cancelButton;
      return t;
    },
    confirmButton() {
      let e = { label: typeof this.confirm == "string" ? this.confirm : "Confirm" };
      return typeof this.confirm == "object" && (e = Object.assign({}, e, this.confirm)), e;
    },
    // Props to pass down to the w-button component.
    confirmButtonProps() {
      const { label: e, ...t } = this.confirmButton;
      return t;
    },
    wMenuProps() {
      return {
        top: this.top,
        bottom: this.bottom,
        left: this.left,
        right: this.right,
        arrow: !this.noArrow,
        alignTop: this.alignTop,
        alignBottom: this.alignBottom,
        alignLeft: this.alignLeft,
        alignRight: this.alignRight,
        persistent: this.persistent,
        transition: this.transition,
        ...this.menu
      };
    },
    tooltipObject() {
      let e = { label: typeof this.tooltip == "string" ? this.tooltip : "" };
      return typeof this.tooltip == "object" && (e = Object.assign({}, e, this.tooltip)), e;
    },
    buttonProps() {
      const { label: e, ...t } = this.tooltipObject;
      return {
        bgColor: this.bgColor,
        color: this.color,
        icon: this.icon,
        dark: this.dark,
        light: this.light,
        tooltip: e,
        tooltipProps: t,
        ...this.mainButton
      };
    }
  },
  methods: {
    onCancel() {
      this.$emit("cancel"), this.showPopup = !1;
    },
    onConfirm() {
      this.$emit("confirm"), this.showPopup = !1;
    }
  }
}, Gt = /* @__PURE__ */ v(Yt, [["render", Xt]]);
function Jt(e, t, i, o, a, l) {
  return s(), u("div", {
    class: f(["w-date-picker", l.classes]),
    style: R(l.styles)
  }, [
    c(e.$slots, "default")
  ], 6);
}
const Qt = {
  name: "w-date-picker",
  props: {
    dark: { type: Boolean },
    light: { type: Boolean }
  },
  emits: [],
  computed: {
    classes() {
      return {
        "w-date-picker--dark": this.dark,
        "w-date-picker--light": this.light
      };
    },
    styles() {
      return !1;
    }
  }
}, Zt = /* @__PURE__ */ v(Qt, [["render", Jt]]);
function ei(e, t, i, o, a, l) {
  const n = $("w-card"), r = $("w-overlay");
  return s(), b(r, {
    class: f(["w-dialog", l.classes]),
    "model-value": a.showWrapper,
    persistent: i.persistent,
    "persistent-no-animation": i.persistentNoAnimation,
    onClick: l.onOutsideClick,
    onClose: l.onClose,
    "bg-color": i.overlayColor,
    opacity: i.overlayOpacity
  }, {
    default: m(() => [
      V(O, {
        name: i.transition,
        appear: "",
        onAfterLeave: l.onBeforeClose
      }, {
        default: m(() => [
          A(V(n, {
            class: f(["w-dialog__content", i.dialogClass]),
            ref: "dialog",
            "no-border": "",
            color: i.color,
            "bg-color": i.bgColor,
            "title-class": i.titleClass,
            "content-class": i.contentClass,
            title: i.title || void 0,
            style: R(l.contentStyles)
          }, Q({
            default: m(() => [
              c(e.$slots, "default")
            ]),
            _: 2
          }, [
            e.$slots.title ? {
              name: "title",
              fn: m(() => [
                c(e.$slots, "title")
              ]),
              key: "0"
            } : void 0,
            e.$slots.actions ? {
              name: "actions",
              fn: m(() => [
                c(e.$slots, "actions")
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["color", "bg-color", "class", "title-class", "content-class", "title", "style"]), [
            [ae, a.showContent]
          ])
        ]),
        _: 3
      }, 8, ["name", "onAfterLeave"])
    ]),
    _: 3
  }, 8, ["model-value", "persistent", "persistent-no-animation", "onClick", "onClose", "bg-color", "opacity", "class"]);
}
const ti = {
  name: "w-dialog",
  props: {
    modelValue: { default: !0 },
    width: { type: [Number, String], default: 0 },
    fullscreen: { type: Boolean },
    persistent: { type: Boolean },
    persistentNoAnimation: { type: Boolean },
    tile: { type: Boolean },
    title: { type: String },
    transition: { type: String, default: "fade" },
    // @todo: validator.
    titleClass: { type: String },
    contentClass: { type: String },
    dialogClass: { type: String },
    overlayColor: { type: String },
    color: { type: String },
    bgColor: { type: String },
    overlayOpacity: { type: [Number, String, Boolean] },
    dark: { type: Boolean },
    light: { type: Boolean }
  },
  provide() {
    return {
      // If a detachable is used inside a w-drawer without an appendTo, default to the drawer element
      // instead of the w-app.
      detachableDefaultRoot: () => this.$refs.dialog.$el || null
    };
  },
  emits: ["input", "update:modelValue", "before-close", "close"],
  data() {
    return {
      showWrapper: this.modelValue,
      showContent: this.modelValue
    };
  },
  computed: {
    maxWidth() {
      let e = this.width;
      return e && parseInt(e) == e && (e += "px"), e;
    },
    classes() {
      return {
        "w-dialog--fullscreen": this.fullscreen,
        "w-dialog--dark": this.dark,
        "w-dialog--light": this.light
      };
    },
    contentStyles() {
      return {
        maxWidth: !this.fullscreen && this.maxWidth ? this.maxWidth : null
      };
    }
  },
  methods: {
    onOutsideClick() {
      this.persistent || (this.showContent = !1, this.transition === "fade" && this.onBeforeClose());
    },
    onBeforeClose() {
      this.showWrapper = !1, this.$emit("before-close");
    },
    onClose() {
      this.$emit("update:modelValue", !1), this.$emit("input", !1), this.$emit("close");
    }
  },
  watch: {
    modelValue(e) {
      this.showWrapper = e, this.showContent = e;
    }
  }
}, ii = /* @__PURE__ */ v(ti, [["render", ei]]), li = ["role", "aria-orientation"];
function si(e, t, i, o, a, l) {
  return s(), u("div", {
    class: f(["w-divider", l.classes]),
    role: e.$slots.default ? null : "presentation",
    "aria-orientation": i.vertical ? "vertical" : "horizontal"
  }, [
    c(e.$slots, "default")
  ], 10, li);
}
const oi = {
  name: "w-divider",
  props: {
    vertical: { type: Boolean },
    color: { type: String },
    dark: { type: Boolean },
    light: { type: Boolean }
  },
  emits: [],
  computed: {
    classes() {
      return {
        [`w-divider--has-color ${this.color}`]: this.color,
        [`w-divider--${this.vertical ? "vertical" : "horizontal"}`]: !0,
        "w-divider--has-content": this.$slots.default,
        "w-divider--dark": this.dark,
        "w-divider--light": this.light
      };
    }
  }
}, ai = /* @__PURE__ */ v(oi, [["render", si]]), ni = { class: "w-drawer-wrap__pushable" };
function ri(e, t, i, o, a, l) {
  const n = $("w-overlay");
  return a.showWrapper || i.pushContent ? (s(), u("div", {
    key: 0,
    class: f(["w-drawer-wrap", l.wrapperClasses])
  }, [
    i.pushContent ? (s(), u("div", {
      key: 0,
      class: "w-drawer-wrap__track",
      style: R(l.trackStyles)
    }, [
      y("div", ni, [
        i.noOverlay ? p("", !0) : (s(), b(n, {
          key: 0,
          modelValue: a.showDrawer,
          "onUpdate:modelValue": t[0] || (t[0] = (r) => a.showDrawer = r),
          onClick: l.onOutsideClick,
          persistent: i.persistent,
          "persistent-no-animation": "",
          "bg-color": i.overlayColor || "transparent",
          opacity: i.overlayOpacity
        }, null, 8, ["modelValue", "onClick", "persistent", "bg-color", "opacity"])),
        c(e.$slots, "pushable")
      ]),
      V(O, {
        name: "fade",
        onBeforeLeave: l.onBeforeClose,
        onAfterLeave: l.onClose
      }, {
        default: m(() => [
          a.showDrawer ? (s(), b(I(i.tag || "aside"), {
            key: 0,
            class: f(["w-drawer", l.drawerClasses]),
            ref: "drawer",
            style: R(l.styles)
          }, {
            default: m(() => [
              c(e.$slots, "default")
            ]),
            _: 3
          }, 8, ["class", "style"])) : p("", !0)
        ]),
        _: 3
      }, 8, ["onBeforeLeave", "onAfterLeave"])
    ], 4)) : (s(), u(w, { key: 1 }, [
      i.noOverlay ? p("", !0) : (s(), b(n, {
        key: 0,
        modelValue: a.showDrawer,
        "onUpdate:modelValue": t[1] || (t[1] = (r) => a.showDrawer = r),
        onClick: l.onOutsideClick,
        persistent: i.persistent,
        "persistent-no-animation": "",
        "bg-color": i.overlayColor,
        opacity: i.overlayOpacity
      }, null, 8, ["modelValue", "onClick", "persistent", "bg-color", "opacity"])),
      V(O, {
        name: l.transitionName,
        appear: "",
        onBeforeLeave: l.onBeforeClose,
        onAfterLeave: l.onClose
      }, {
        default: m(() => [
          a.showDrawer ? (s(), b(I(i.tag || "aside"), {
            key: 0,
            class: f(["w-drawer", l.drawerClasses]),
            ref: "drawer",
            style: R(l.styles)
          }, {
            default: m(() => [
              c(e.$slots, "default")
            ]),
            _: 3
          }, 8, ["class", "style"])) : p("", !0)
        ]),
        _: 3
      }, 8, ["name", "onBeforeLeave", "onAfterLeave"])
    ], 64))
  ], 2)) : p("", !0);
}
const di = { left: "right", right: "left", top: "down", bottom: "up" }, ui = {
  name: "w-drawer",
  props: {
    modelValue: { default: !0 },
    left: { type: Boolean },
    right: { type: Boolean },
    top: { type: Boolean },
    bottom: { type: Boolean },
    persistent: { type: Boolean },
    persistentNoAnimation: { type: Boolean },
    fitContent: { type: Boolean },
    width: { type: [Number, String, Boolean] },
    height: { type: [Number, String, Boolean] },
    zIndex: { type: [Number, String, Boolean] },
    color: { type: String },
    bgColor: { type: String },
    noOverlay: { type: Boolean },
    pushContent: { type: Boolean },
    absolute: { type: Boolean },
    overlayColor: { type: String },
    overlayOpacity: { type: [Number, String, Boolean] },
    drawerClass: { type: String },
    tag: { type: String, default: "aside" },
    dark: { type: Boolean },
    light: { type: Boolean }
  },
  provide() {
    return {
      // If a detachable is used inside a w-drawer without an appendTo, default to the drawer element
      // instead of the w-app.
      detachableDefaultRoot: () => this.$refs.drawer || null
    };
  },
  emits: ["input", "update:modelValue", "before-close", "close"],
  data() {
    return {
      showWrapper: this.modelValue,
      showDrawer: this.modelValue,
      persistentAnimate: !1
    };
  },
  computed: {
    // Return the width or height value if defined, or false otherwise.
    size() {
      let e = this.width || this.height;
      return e && parseInt(e) == e && (e += "px"), e || !1;
    },
    // Return `width` or `height`, `width` by default (position right by default).
    sizeProperty() {
      return ["left", "right"].includes(this.position) && "width" || "height";
    },
    position() {
      return this.left && "left" || this.right && "right" || this.top && "top" || this.bottom && "bottom" || "right";
    },
    wrapperClasses() {
      return {
        "w-drawer-wrap--fixed": !this.absolute && !this.pushContent,
        "w-drawer-wrap--absolute": this.absolute,
        "w-drawer-wrap--push-content": this.pushContent
      };
    },
    drawerClasses() {
      return {
        [this.drawerClass]: !0,
        [this.color]: this.color,
        [`${this.bgColor}--bg`]: this.bgColor,
        "w-drawer--open": !!this.showDrawer,
        [`w-drawer--${this.position}`]: !0,
        "w-drawer--fit-content": this.fitContent,
        "w-drawer--persistent": this.persistent,
        "w-drawer--persistent-animate": this.persistent && this.persistentAnimate,
        "w-drawer--dark": this.dark,
        "w-drawer--light": this.light
      };
    },
    // The track is a wrapper around the pushable content and drawer.
    // It moves inside the overflow hidden outer wrap.
    trackStyles() {
      return this.pushContent && this.showDrawer && {
        transform: `translateX(${this.position === "left" ? "" : "-"}${this.size || "200px"})`
      };
    },
    styles() {
      return {
        [`max-${this.sizeProperty}`]: this.size || null,
        zIndex: this.zIndex || this.zIndex === 0 || null
      };
    },
    // In case of pushing content, the showWrapper variable doesn't reflect the behavior:
    // unmount the drawer (remove from DOM) is what it does when showWrapper is false.
    unmountDrawer() {
      return !this.showWrapper;
    },
    transitionName() {
      return `slide-${di[this.position]}`;
    }
  },
  methods: {
    onBeforeClose() {
      this.$emit("before-close");
    },
    onClose() {
      this.showWrapper = !1, this.$emit("update:modelValue", !1), this.$emit("input", !1), this.$emit("close");
    },
    onOutsideClick() {
      this.persistent ? this.persistentNoAnimation || (this.persistentAnimate = !0, setTimeout(() => this.persistentAnimate = !1, 200)) : this.showDrawer = !1;
    }
  },
  watch: {
    modelValue(e) {
      e && (this.showWrapper = !0), this.showDrawer = e;
    }
  }
}, hi = /* @__PURE__ */ v(ui, [["render", ri]]);
function ci(e, t, i, o, a, l) {
  return s(), b(I(i.tag), {
    class: f(["w-flex", l.classes])
  }, {
    default: m(() => [
      c(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const pi = {
  name: "w-flex",
  props: {
    tag: { type: String, default: "div" },
    column: { type: Boolean },
    grow: { type: Boolean },
    noGrow: { type: Boolean },
    shrink: { type: Boolean },
    noShrink: { type: Boolean },
    fillHeight: { type: Boolean },
    wrap: { type: Boolean },
    alignStart: { type: Boolean },
    alignCenter: { type: Boolean },
    alignEnd: { type: Boolean },
    justifyStart: { type: Boolean },
    justifyCenter: { type: Boolean },
    justifyEnd: { type: Boolean },
    justifySpaceBetween: { type: Boolean },
    justifySpaceAround: { type: Boolean },
    justifySpaceEvenly: { type: Boolean },
    basisZero: { type: Boolean },
    gap: { type: [Number, String], default: 0 }
  },
  computed: {
    classes() {
      return {
        column: this.column,
        grow: this.grow,
        "no-grow": this.noGrow,
        shrink: this.shrink,
        "no-shrink": this.noShrink,
        "fill-height": this.fillHeight,
        wrap: this.wrap,
        "align-start": this.alignStart,
        "align-center": this.alignCenter,
        "align-end": this.alignEnd,
        "justify-start": this.justifyStart,
        "justify-center": this.justifyCenter,
        "justify-end": this.justifyEnd,
        "justify-space-between": this.justifySpaceBetween,
        "justify-space-around": this.justifySpaceAround,
        "justify-space-evenly": this.justifySpaceEvenly,
        "basis-zero": this.basisZero,
        [`gap${this.gap}`]: ~~this.gap
      };
    }
  }
}, fi = /* @__PURE__ */ v(pi, [["render", ci]]);
function mi(e, t, i, o, a, l) {
  return s(), u("form", {
    class: f(["w-form", l.classes]),
    onSubmit: t[0] || (t[0] = (...n) => l.onSubmit && l.onSubmit(...n)),
    onReset: t[1] || (t[1] = (...n) => l.reset && l.reset(...n)),
    novalidate: ""
  }, [
    c(e.$slots, "default")
  ], 34);
}
const gi = async (e, t) => {
  for (const i of e)
    if (await t(i))
      return !0;
  return !1;
}, bi = {
  name: "w-form",
  props: {
    modelValue: {},
    allowSubmit: { type: Boolean },
    noKeyupValidation: { type: Boolean },
    noBlurValidation: { type: Boolean },
    errorPlaceholders: { type: Boolean },
    validationColor: { type: String, default: "error" },
    disabled: { type: Boolean },
    readonly: { type: Boolean }
  },
  provide() {
    return {
      formRegister: this.register,
      formUnregister: this.unregister,
      validateElement: this.validateElement,
      // Give access to the form params (like disabled) to all the form components.
      // To keep it reactive, we need an object not a list of props (by design in Vue).
      formProps: this.$props
    };
  },
  emits: [
    "submit",
    "before-validate",
    "validate",
    "success",
    "error",
    "reset",
    "input",
    "update:modelValue",
    "update:errorsCount"
  ],
  data: () => ({
    formElements: [],
    status: null,
    // null = pristine, false = error, true = success.
    errorsCount: 0
  }),
  computed: {
    classes() {
      return {
        "w-form--pristine": this.status === null,
        "w-form--error": this.status === !1,
        "w-form--success": this.status === !0,
        "w-form--error-placeholders": this.errorPlaceholders
      };
    }
  },
  methods: {
    register(e) {
      this.formElements.push(e);
    },
    unregister(e) {
      this.formElements = this.formElements.filter((t) => t._.uid !== e._.uid);
    },
    /**
     * On form submit or programmatic call, go through each validation rule of each form element,
     * and count the number of errors.
     * Display the element error inside the element if any error, and $emit the result.
     *
     * @param {Object} e the submit event
     * @return {Boolean} true if the form is valid
     */
    async validate(e) {
      this.$emit("before-validate", { e, errorsCount: this.errorsCount });
      let t = 0;
      return await (async () => {
        var i;
        for (const o of this.formElements)
          !((i = o.validators) != null && i.length) || o.disabled || o.readonly || (await this.checkElementValidators(o), t += ~~!o.Validation.isValid, o.$emit("update:valid", o.Validation.isValid));
      })(), this.updateErrorsCount(t), this.status = !t, this.$emit("validate", { e, errorsCount: t }), this.$emit(this.status ? "success" : "error", { e, errorsCount: t }), this.status;
    },
    async validateElement(e) {
      return await this.checkElementValidators(e), this.updateErrorsCount(), e.Validation.isValid;
    },
    // Execute the validators 1 by 1 until a failure is found. If it happens, raise the error
    // message in the form element.
    async checkElementValidators(e) {
      let t = !1, i = "";
      await gi(e.validators, async (o) => {
        const a = await (typeof o == "function" && o(e.inputValue));
        return t = typeof a != "string", i = t ? "" : a, !t;
      }), e.hasJustReset = !1, e.Validation.isValid = t, e.Validation.message = i;
    },
    // Reset is called from:
    // - the form `reset` event listener
    // - the modelValue watcher when set to `null`.
    reset(e) {
      this.status = null, this.formElements.forEach((t) => t.reset()), this.updateErrorsCount(0, !0), this.$emit("reset", e);
    },
    updateErrorsCount(e = null, t = !1) {
      this.errorsCount = e !== null ? e : this.formElements.reduce((i, o) => i + ~~(o.Validation.isValid === !1), 0), this.status = t ? null : !this.errorsCount, this.$emit("update:modelValue", this.status), this.$emit("input", this.status), this.$emit("update:errorsCount", this.errorsCount);
    },
    onSubmit(e) {
      this.validate(e), this.$emit("submit", e), (!this.allowSubmit || !this.status) && e.preventDefault();
    }
  },
  created() {
    this.status = this.modelValue || null;
  },
  watch: {
    modelValue(e) {
      (this.status === !1 && e || e === null && this.status !== null) && this.reset(), this.status = e;
    }
  }
}, yi = /* @__PURE__ */ v(bi, [["render", mi]]);
function wi(e, t, i, o, a, l) {
  const n = $("w-transition-expand");
  return s(), u("div", {
    class: f(l.classes)
  }, [
    y("div", {
      class: f(["w-flex grow", [i.column ? "column" : "align-center", i.wrap ? "wrap" : ""]])
    }, [
      c(e.$slots, "default")
    ], 2),
    V(n, { y: "" }, {
      default: m(() => [
        e.Validation.message ? (s(), u("div", {
          key: 0,
          class: f(["w-form-el__error", l.formProps.validationColor])
        }, [
          c(e.$slots, "error-message", {
            message: e.Validation.message
          }, () => [
            B(C(e.Validation.message), 1)
          ])
        ], 2)) : p("", !0)
      ]),
      _: 3
    })
  ], 2);
}
const ki = {
  name: "w-form-element",
  props: {
    valid: { required: !0 },
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    inputValue: { required: !0 },
    // The form element's input value.
    validators: { type: Array },
    isFocused: { default: !1 },
    // Watched.
    column: { default: !1 },
    // Flex direction of the embedded component: column or row by default.
    wrap: { default: !1 }
    // Flex-wrap if needed.
  },
  inject: {
    formRegister: { default: null },
    formUnregister: { default: null },
    validateElement: { default: null },
    formProps: {
      default: () => ({
        noKeyupValidation: !1,
        noBlurValidation: !1,
        validationColor: "error",
        disabled: !1,
        readonly: !1
      })
    }
  },
  emits: ["reset", "update:valid"],
  data: () => ({
    Validation: {
      isValid: null,
      // Null is pristine (unknown), can also be true or false.
      message: ""
      // Updated on w-form validation.
    },
    hasJustReset: !1
  }),
  computed: {
    classes() {
      return [
        "w-form-el",
        ["w-form-el--error error", "w-form-el--success", "w-form-el--pristine"][this.Validation.isValid === null ? 2 : ~~this.Validation.isValid]
      ];
    }
  },
  methods: {
    // Called from w-form reset.
    reset() {
      this.$emit("reset"), this.$emit("update:valid", null), this.Validation.message = "", this.Validation.isValid = null, this.hasJustReset = !0;
    },
    // Allow triggering a particular field validation manually via `$refs.myField.validate()`.
    async validate() {
      this.$emit("update:valid", await this.validateElement(this));
    }
  },
  watch: {
    async inputValue() {
      if (this.hasJustReset)
        return this.hasJustReset = !1;
      !this.formProps.noKeyupValidation && this.validators && this.$emit("update:valid", await this.validateElement(this));
    },
    async isFocused(e) {
      e ? this.hasJustReset = !1 : !this.formProps.noBlurValidation && this.validators && !this.readonly && this.$emit("update:valid", await this.validateElement(this));
    }
  },
  created() {
    this.formRegister && this.formRegister(this);
  },
  beforeUnmount() {
    this.formUnregister && this.formUnregister(this);
  }
}, vi = /* @__PURE__ */ v(ki, [["render", wi]]);
function Ci(e, t, i, o, a, l) {
  return s(), b(I(i.tag), {
    class: f(["w-grid", l.classes])
  }, {
    default: m(() => [
      c(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const Si = {
  name: "w-grid",
  props: {
    tag: { type: String, default: "div" },
    columns: { type: [Number, Object, String] },
    gap: { type: [Number, Object, String], default: 0 }
  },
  computed: {
    breakpointsColumns() {
      let e = { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 };
      switch (typeof this.columns) {
        case "object":
          e = Object.assign(e, this.columns);
          break;
        case "number":
        case "string":
          e = Object.keys(e).reduce((t, i) => t[i] = ~~this.columns, {});
          break;
      }
      return e;
    },
    breakpointsGap() {
      let e = { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 };
      switch (typeof this.gap) {
        case "object":
          e = Object.assign(e, this.gap);
          break;
        case "number":
        case "string":
          e = Object.keys(e).reduce((t, i) => t[i] = ~~this.gap, {});
          break;
      }
      return e;
    },
    classes() {
      let e = null;
      typeof this.columns == "object" && (e = Object.entries(this.breakpointsColumns).reduce((i, [o, a]) => (i[`${o}-columns${a}`] = !0, i), {}));
      let t = null;
      return typeof this.gap == "object" && (t = Object.entries(this.breakpointsGap).reduce((i, [o, a]) => (i[`${o}-gap${a}`] = !0, i), {})), {
        ...e || { [`columns${this.columns}`]: this.columns },
        ...t || { [`gap${this.gap}`]: this.gap }
      };
    }
  }
}, Bi = /* @__PURE__ */ v(Si, [["render", Ci]]);
function _i(e, t, i, o, a, l) {
  return s(), b(I(i.tag || "i"), S({ class: "w-icon" }, M(e.$attrs), {
    class: l.classes,
    role: "icon",
    "aria-hidden": "true",
    style: l.readIcon() && l.styles
  }), {
    default: m(() => [
      l.hasLigature ? (s(), u(w, { key: 0 }, [
        B(C(e.icon), 1)
      ], 64)) : p("", !0)
    ]),
    _: 1
  }, 16, ["class", "style"]);
}
const $i = {
  name: "w-icon",
  props: {
    tag: { type: String, default: "i" },
    color: { type: String },
    bgColor: { type: String },
    xs: { type: Boolean },
    sm: { type: Boolean },
    md: { type: Boolean },
    lg: { type: Boolean },
    xl: { type: Boolean },
    spin: { type: Boolean },
    spinA: { type: Boolean },
    rotate135a: { type: Boolean },
    rotate90a: { type: Boolean },
    rotate45a: { type: Boolean },
    rotate45: { type: Boolean },
    rotate90: { type: Boolean },
    rotate135: { type: Boolean },
    rotate180: { type: Boolean },
    flipX: { type: Boolean },
    flipY: { type: Boolean },
    size: { type: [Number, String] }
  },
  emits: [],
  data: () => ({
    icon: "",
    fontName: ""
  }),
  computed: {
    hasLigature() {
      return this.$waveui.config.iconsLigature === this.fontName;
    },
    forcedSize() {
      return this.size && (isNaN(this.size) ? this.size : `${this.size}px`);
    },
    presetSize() {
      return this.xs && "xs" || this.sm && "sm" || this.md && "md" || this.lg && "lg" || this.xl && "xl" || null;
    },
    classes() {
      return {
        [this.fontName]: !0,
        [!this.hasLigature && this.icon]: !this.hasLigature && this.icon,
        [this.color]: this.color,
        [`${this.bgColor}--bg`]: this.bgColor,
        [`size--${this.presetSize}`]: this.presetSize && !this.forcedSize,
        "w-icon--spin": this.spin,
        "w-icon--spin-a": this.spinA,
        "w-icon--rotate45": this.rotate45,
        "w-icon--rotate90": this.rotate90,
        "w-icon--rotate135": this.rotate135,
        "w-icon--rotate180": this.rotate180,
        "w-icon--rotate-45": this.rotate45a,
        "w-icon--rotate-90": this.rotate90a,
        "w-icon--rotate-135": this.rotate135a,
        "w-icon--flip-x": this.flipX,
        "w-icon--flip-y": this.flipY
      };
    },
    styles() {
      return this.forcedSize && `font-size: ${this.forcedSize}`;
    }
  },
  methods: {
    readIcon() {
      const { default: e } = this.$slots, [t = "", i = ""] = typeof e == "function" && e()[0].children.trim().split(" ") || [];
      return this.fontName = t, this.icon = i, !0;
    }
  }
}, Vi = /* @__PURE__ */ v($i, [["render", _i]]), Ii = {
  key: 0,
  class: "w-image__loader"
};
function Ti(e, t, i, o, a, l) {
  const n = $("w-progress");
  return s(), b(I(l.wrapperTag), {
    class: f(["w-image-wrap", l.wrapperClasses]),
    style: R(l.wrapperStyles)
  }, {
    default: m(() => [
      V(O, {
        name: i.transition,
        appear: ""
      }, {
        default: m(() => [
          a.loaded ? (s(), b(I(i.tag), {
            key: 0,
            class: f(["w-image", l.imageClasses]),
            style: R(l.imageStyles),
            src: i.tag === "img" ? a.imgSrc : null
          }, null, 8, ["class", "style", "src"])) : p("", !0)
        ]),
        _: 1
      }, 8, ["name"]),
      !i.noSpinner && a.loading ? (s(), u("div", Ii, [
        e.$slots.loading ? c(e.$slots, "loading", { key: 0 }) : (s(), b(n, S({
          key: 1,
          circle: "",
          indeterminate: ""
        }, i.spinnerColor ? { color: i.spinnerColor } : {}), null, 16))
      ])) : p("", !0),
      e.$slots.default ? (s(), b(I(l.wrapperTag), {
        key: 1,
        class: f(["w-image__content", i.contentClass])
      }, {
        default: m(() => [
          c(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"])) : p("", !0)
    ]),
    _: 3
  }, 8, ["class", "style"]);
}
const Li = {
  name: "w-image",
  props: {
    tag: { type: String, default: "span" },
    src: { type: String },
    width: { type: [Number, String] },
    height: { type: [Number, String] },
    ratio: { type: [Number, String] },
    lazy: { type: Boolean },
    absolute: { type: Boolean },
    fixed: { type: Boolean },
    contain: { type: Boolean },
    noSpinner: { type: Boolean },
    spinnerColor: { type: String },
    fallback: { type: String },
    transition: { type: String, default: "fade" },
    contentClass: { type: [String, Array, Object] }
  },
  emits: ["loading", "loaded", "error"],
  data() {
    return {
      loading: !1,
      loaded: !1,
      imgSrc: "",
      imgWidth: this.width || 0,
      imgHeight: this.height || 0,
      imgComputedRatio: 0
    };
  },
  computed: {
    imgGivenRatio() {
      return parseFloat(this.ratio);
    },
    wrapperTag() {
      return ["span", "div"].includes(this.tag) ? this.tag : "span";
    },
    wrapperClasses() {
      return {
        "w-image-wrap--absolute": this.absolute,
        "w-image-wrap--fixed": this.fixed,
        "w-image-wrap--has-ratio": this.imgGivenRatio
      };
    },
    wrapperStyles() {
      return {
        width: this.imgGivenRatio ? null : (isNaN(this.imgWidth) ? this.imgWidth : `${this.imgWidth}px`) || null,
        height: this.imgGivenRatio || this.tag === "img" ? null : (isNaN(this.imgHeight) ? this.imgHeight : `${this.imgHeight}px`) || null,
        "padding-bottom": this.imgGivenRatio && `${this.imgGivenRatio * 100}%`
      };
    },
    imageClasses() {
      return {
        "w-image--loading": this.loading,
        "w-image--loaded": this.loaded,
        "w-image--contain": this.contain
      };
    },
    imageStyles() {
      return {
        "background-image": this.tag !== "img" && this.loaded ? `url('${this.imgSrc}')` : null
      };
    }
  },
  methods: {
    loadImage(e = !1) {
      if (!this.loading)
        return this.loading = !0, this.loaded = !1, this.$emit("loading", e ? this.fallback : this.src), new Promise((t) => {
          const i = new Image();
          i.onload = (o) => (!this.width && !this.height && !this.imgGivenRatio && (this.imgWidth = o.target.width, this.imgHeight = o.target.height), this.imgComputedRatio = o.target.height / o.target.width, this.loading = !1, this.loaded = !0, this.imgSrc = e ? this.fallback : this.src, this.$emit("loaded", this.imgSrc), t(i)), i.onerror = (o) => {
            this.$emit("error", o), this.fallback && !e ? (this.loading = !1, this.loadImage(!0)) : (this.loading = !1, this.loaded = !1);
          }, i.src = e ? this.fallback : this.src;
        });
    }
  },
  mounted() {
    if (!this.src)
      return j("The w-image component was used without src.");
    if (this.lazy) {
      const e = new IntersectionObserver((t) => {
        t[0] && t[0].isIntersecting && (this.loadImage(), e.disconnect());
      }, this.intersectionConfig);
      e.observe(this.$el);
    } else
      this.loadImage();
  },
  watch: {
    src() {
      this.loadImage();
    },
    width(e) {
      this.imgWidth = e;
    },
    height(e) {
      this.imgHeight = e;
    }
  }
}, Ri = /* @__PURE__ */ v(Li, [["render", Ti]]), Pi = ["name"], Oi = ["for"], xi = ["id", "type", "name", "placeholder", "step", "min", "max", "minlength", "maxlength", "readonly", "aria-readonly", "disabled", "required", "tabindex"], zi = ["id", "name", "multiple", "disabled", "data-progress"], Mi = {
  class: "w-input__no-file",
  key: "no-file"
}, Ei = ["for"], Wi = ["src"], Ki = ["for"];
function Ai(e, t, i, o, a, l) {
  const n = $("w-icon"), r = $("w-progress");
  return s(), b(I(e.formRegister ? "w-form-element" : "div"), S({ ref: "formEl" }, e.formRegister && { validators: e.validators, inputValue: a.inputValue, disabled: e.isDisabled, readonly: e.isReadonly, isFocused: a.isFocused }, {
    valid: e.valid,
    "onUpdate:valid": t[10] || (t[10] = (d) => e.valid = d),
    onReset: t[11] || (t[11] = (d) => {
      e.$emit("update:modelValue", a.inputValue = ""), e.$emit("input", "");
    }),
    wrap: l.hasLabel && i.labelPosition !== "inside",
    class: l.classes
  }), {
    default: m(() => [
      i.type === "hidden" ? A((s(), u("input", {
        key: 0,
        type: "hidden",
        name: e.name || null,
        "onUpdate:modelValue": t[0] || (t[0] = (d) => a.inputValue = d)
      }, null, 8, Pi)), [
        [be, a.inputValue]
      ]) : (s(), u(w, { key: 1 }, [
        i.labelPosition === "left" ? (s(), u(w, { key: 0 }, [
          e.$slots.default || i.label ? (s(), u("label", {
            key: 0,
            class: f(["w-input__label w-input__label--left w-form-el-shakable", e.labelClasses]),
            for: `w-input--${e._.uid}`
          }, [
            c(e.$slots, "default", {}, () => [
              B(C(i.label), 1)
            ])
          ], 10, Oi)) : p("", !0)
        ], 64)) : p("", !0),
        y("div", {
          class: f(["w-input__input-wrap", l.inputWrapClasses])
        }, [
          c(e.$slots, "icon-left", {
            inputId: `w-input--${e._.uid}`
          }, () => [
            i.innerIconLeft ? (s(), b(n, {
              key: 0,
              class: "w-input__icon w-input__icon--inner-left",
              tag: "label",
              for: `w-input--${e._.uid}`,
              onClick: t[1] || (t[1] = (d) => e.$emit("click:inner-icon-left", d))
            }, {
              default: m(() => [
                B(C(i.innerIconLeft), 1)
              ]),
              _: 1
            }, 8, ["for"])) : p("", !0)
          ]),
          i.type !== "file" ? A((s(), u("input", S({
            key: 0,
            class: "w-input__input",
            ref: "input",
            "onUpdate:modelValue": t[2] || (t[2] = (d) => a.inputValue = d)
          }, M(l.listeners, !0), {
            onInput: t[3] || (t[3] = (...d) => l.onInput && l.onInput(...d)),
            onFocus: t[4] || (t[4] = (...d) => l.onFocus && l.onFocus(...d)),
            onBlur: t[5] || (t[5] = (...d) => l.onBlur && l.onBlur(...d)),
            id: `w-input--${e._.uid}`,
            type: i.type,
            name: e.inputName,
            placeholder: i.placeholder || null,
            step: i.step || null,
            min: i.min || null,
            max: i.max || null,
            minlength: i.minlength || null,
            maxlength: i.maxlength || null,
            readonly: e.isReadonly || null,
            "aria-readonly": e.isReadonly ? "true" : "false",
            disabled: e.isDisabled || null,
            required: e.required || null,
            tabindex: e.tabindex || null
          }, l.attrs), null, 16, xi)), [
            [$e, a.inputValue]
          ]) : (s(), u(w, { key: 1 }, [
            y("input", S({
              ref: "input",
              id: `w-input--${e._.uid}`,
              type: "file",
              name: e.name || null,
              onFocus: t[6] || (t[6] = (...d) => l.onFocus && l.onFocus(...d)),
              onBlur: t[7] || (t[7] = (...d) => l.onBlur && l.onBlur(...d)),
              onChange: t[8] || (t[8] = (...d) => l.onFileChange && l.onFileChange(...d)),
              multiple: i.multiple || null
            }, l.attrs, {
              disabled: e.isDisabled || null,
              "data-progress": l.overallFilesProgress
              /* Needed to emit the overallProgress. */
            }), null, 16, zi),
            V(oe, {
              class: "w-input__input w-input__input--file",
              tag: "label",
              name: "fade",
              for: `w-input--${e._.uid}`
            }, {
              default: m(() => [
                !a.inputFiles.length && a.isFocused ? (s(), u("span", Mi, [
                  c(e.$slots, "no-file", {}, () => [
                    e.$slots["no-file"] === void 0 ? (s(), u(w, { key: 0 }, [
                      B("No file")
                    ], 64)) : p("", !0)
                  ])
                ])) : p("", !0),
                (s(!0), u(w, null, L(a.inputFiles, (d, h) => (s(), u("span", {
                  key: d.lastModified
                }, [
                  B(C(h ? ", " : ""), 1),
                  (s(), u("span", {
                    class: "filename",
                    key: `${h}b`
                  }, C(d.base), 1)),
                  B(C(d.extension ? `.${d.extension}` : ""), 1)
                ]))), 128))
              ]),
              _: 3
            }, 8, ["for"])
          ], 64)),
          i.labelPosition === "inside" && l.showLabelInside ? (s(), u(w, { key: 2 }, [
            e.$slots.default || i.label ? (s(), u("label", {
              key: 0,
              class: f(["w-input__label w-input__label--inside w-form-el-shakable", e.labelClasses])
            }, [
              c(e.$slots, "default", {}, () => [
                B(C(i.label), 1)
              ])
            ], 2)) : p("", !0)
          ], 64)) : p("", !0),
          c(e.$slots, "icon-right", {
            inputId: `w-input--${e._.uid}`
          }, () => [
            i.innerIconRight ? (s(), b(n, {
              key: 0,
              class: "w-input__icon w-input__icon--inner-right",
              tag: "label",
              for: `w-input--${e._.uid}`,
              onClick: t[9] || (t[9] = (d) => e.$emit("click:inner-icon-right", d))
            }, {
              default: m(() => [
                B(C(i.innerIconRight), 1)
              ]),
              _: 1
            }, 8, ["for"])) : p("", !0)
          ]),
          l.hasLoading || i.showProgress && (l.uploadInProgress || l.uploadComplete) ? (s(), b(r, {
            key: 3,
            class: "fill-width",
            size: "2",
            color: i.progressColor || i.color,
            "model-value": i.showProgress ? (l.uploadInProgress || l.uploadComplete) && l.overallFilesProgress : l.loadingValue
          }, null, 8, ["color", "model-value"])) : p("", !0)
        ], 2),
        i.type === "file" && i.preview && a.inputFiles.length ? (s(), u("label", {
          key: 1,
          class: "d-flex",
          for: `w-input--${e._.uid}`
        }, [
          (s(!0), u(w, null, L(a.inputFiles, (d, h) => (s(), u(w, null, [
            d.progress < 100 ? (s(), u("i", {
              class: "w-icon wi-spinner w-icon--spin size--sm w-input__file-preview primary",
              key: `${h}a`
            })) : d.preview ? (s(), u("img", {
              class: "w-input__file-preview",
              key: `${h}b`,
              src: d.preview,
              alt: ""
            }, null, 8, Wi)) : (s(), u("i", {
              class: f(["w-icon w-input__file-preview primary size--md", i.preview && typeof i.preview == "string" ? i.preview : "wi-file"]),
              key: `${h}c`
            }, null, 2))
          ], 64))), 256))
        ], 8, Ei)) : p("", !0),
        i.labelPosition === "right" ? (s(), u(w, { key: 2 }, [
          e.$slots.default || i.label ? (s(), u("label", {
            key: 0,
            class: f(["w-input__label w-input__label--right w-form-el-shakable", e.labelClasses]),
            for: `w-input--${e._.uid}`
          }, [
            c(e.$slots, "default", {}, () => [
              B(C(i.label), 1)
            ])
          ], 10, Ki)) : p("", !0)
        ], 64)) : p("", !0)
      ], 64))
    ]),
    _: 3
  }, 16, ["valid", "wrap", "class"]);
}
const Ni = {
  name: "w-input",
  mixins: [E],
  props: {
    modelValue: { default: "" },
    type: { type: String, default: "text" },
    label: { type: String },
    labelPosition: { type: String, default: "inside" },
    innerIconLeft: { type: String },
    innerIconRight: { type: String },
    staticLabel: { type: Boolean },
    // When label is inside, fix the label above.
    placeholder: { type: String },
    color: { type: String, default: "primary" },
    bgColor: { type: String },
    labelColor: { type: String, default: "primary" },
    progressColor: { type: String },
    minlength: { type: [Number, String] },
    maxlength: { type: [Number, String] },
    step: { type: [Number, String] },
    min: { type: [Number, String] },
    max: { type: [Number, String] },
    outline: { type: Boolean },
    round: { type: Boolean },
    shadow: { type: Boolean },
    tile: { type: Boolean },
    multiple: { type: Boolean },
    // Only for file uploads.
    preview: { type: [Boolean, String], default: !0 },
    // Only for file uploads.
    loading: { type: [Boolean, Number], default: !1 },
    // If a number is given, it will be the value of the progress.
    showProgress: { type: [Boolean] },
    // Only for file uploads.
    // Allow syncing the files 1 way: prefilling a file is not possible.
    // https://stackoverflow.com/questions/16365668/pre-populate-html-form-file-input
    files: { type: Array },
    dark: { type: Boolean },
    light: { type: Boolean }
    // Props from mixin: name, disabled, readonly, required, tabindex, validators.
    // Computed from mixin: inputName, isDisabled & isReadonly.
  },
  emits: ["input", "update:modelValue", "focus", "blur", "click:inner-icon-left", "click:inner-icon-right", "update:overallProgress"],
  data() {
    return {
      inputValue: this.modelValue,
      // In case of incorrect input type="number", the inputValue gets emptied,
      // and the label would come back on top of the input text.
      inputNumberError: !1,
      isFocused: !1,
      inputFiles: [],
      // For input type file.
      fileReader: null,
      // For input type file.
      isAutofilled: !1
    };
  },
  computed: {
    attrs() {
      const { class: e, ...t } = this.$attrs;
      return this.type === "file" && !this.inputFiles.length && (t.value = null), t;
    },
    listeners() {
      const { input: e, focus: t, blur: i, ...o } = this.$attrs;
      return o;
    },
    hasValue() {
      switch (this.type) {
        case "file":
          return !!this.inputFiles.length;
        case "number":
          return this.inputValue || this.inputValue === 0 || this.inputNumberError;
        case "date":
        case "time":
          return !0;
        default:
          return this.inputValue || this.inputValue === 0;
      }
    },
    hasLabel() {
      return this.label || this.$slots.default;
    },
    hasLoading() {
      return ![void 0, !1].includes(this.loading);
    },
    loadingValue() {
      let e;
      return typeof this.loading == "number" ? e = this.loading : this.loading && (e = this.type === "file" && this.overallFilesProgress ? this.overallFilesProgress : void 0), e;
    },
    showLabelInside() {
      return !this.staticLabel || !this.hasValue && !this.placeholder;
    },
    overallFilesProgress() {
      const t = +this.inputFiles.reduce((i, o) => i + o.progress, 0) / this.inputFiles.length;
      return this.$emit("update:overallProgress", this.inputFiles.length ? t : 0), t;
    },
    uploadInProgress() {
      return this.overallFilesProgress > 0 && this.overallFilesProgress < 100;
    },
    uploadComplete() {
      return this.overallFilesProgress === 100;
    },
    classes() {
      return {
        "w-input": !0,
        "w-input--file": this.type === "file",
        "w-input--disabled": this.isDisabled,
        "w-input--readonly": this.isReadonly,
        [`w-input--${this.hasValue || this.isAutofilled ? "filled" : "empty"}`]: !0,
        "w-input--focused": this.isFocused && !this.isReadonly,
        "w-input--dark": this.dark,
        "w-input--light": this.light,
        "w-input--floating-label": this.hasLabel && this.labelPosition === "inside" && !this.staticLabel,
        "w-input--no-padding": !this.outline && !this.bgColor && !this.shadow && !this.round,
        "w-input--has-placeholder": this.placeholder,
        "w-input--inner-icon-left": this.innerIconLeft,
        "w-input--inner-icon-right": this.innerIconRight
      };
    },
    inputWrapClasses() {
      return {
        [this.valid === !1 ? this.validationColor : this.color]: this.color || this.valid === !1,
        [`${this.bgColor}--bg`]: this.bgColor,
        "w-input__input-wrap--file": this.type === "file",
        "w-input__input-wrap--round": this.round,
        "w-input__input-wrap--tile": this.tile,
        // Box adds a padding on input. If there is a bgColor or shadow, a padding is needed.
        "w-input__input-wrap--box": this.outline || this.bgColor || this.shadow,
        "w-input__input-wrap--underline": !this.outline,
        "w-input__input-wrap--shadow": this.shadow,
        "w-input__input-wrap--no-padding": !this.outline && !this.bgColor && !this.shadow && !this.round,
        "w-input__input-wrap--loading": this.loading || this.showProgress && this.uploadInProgress,
        "w-input__input-wrap--upload-complete": this.uploadComplete
      };
    }
  },
  methods: {
    onInput(e) {
      this.inputNumberError = e.target.validity.badInput, this.$emit("update:modelValue", this.inputValue), this.$emit("input", this.inputValue);
    },
    onFocus(e) {
      this.isFocused = !0, this.$emit("focus", e);
    },
    onBlur(e) {
      this.isFocused = !1, this.$emit("blur", e);
    },
    // For file input.
    onFileChange(e) {
      this.inputFiles = [...e.target.files].map((i) => {
        const [, o = "", a = "", l = ""] = i.name.match(/^(.*?)\.([^.]*)$|(.*)/), n = J({
          name: i.name,
          base: o || l,
          extension: a,
          type: i.type,
          size: i.size,
          lastModified: i.lastModified,
          preview: null,
          progress: 0,
          file: i
        });
        return this.readFile(i, n), n;
      });
      const t = this.multiple ? this.inputFiles : this.inputFiles[0];
      this.$emit("update:modelValue", t), this.$emit("input", t);
    },
    // For file input.
    readFile(e, t) {
      const i = new FileReader(), o = typeof this.preview == "string", a = e.type && e.type.startsWith("image/");
      this.preview && !o && a ? i.addEventListener("load", (l) => {
        t.preview = l.target.result;
      }) : delete t.preview, i.addEventListener("progress", (l) => {
        l.loaded && l.total && (t.progress = l.loaded * 100 / l.total);
      }), i.readAsDataURL(e);
    }
  },
  mounted() {
    setTimeout(() => {
      this.$refs.input && this.$refs.input.matches(":-webkit-autofill") && (this.isAutofilled = !0);
    }, 400);
  },
  watch: {
    modelValue(e) {
      this.inputValue = e, !e && e !== 0 && (this.isAutofilled = !1, this.inputFiles = []);
    }
  }
}, Di = /* @__PURE__ */ v(Ni, [["render", Ai]]);
function Hi(e, t, i, o, a, l) {
  const n = $("w-icon"), r = $("w-list", !0);
  return s(), u("ul", {
    class: f(["w-list", l.classes])
  }, [
    (s(!0), u(w, null, L(e.listItems, (d, h) => (s(), u("li", {
      class: f(["w-list__item", { "w-list__item--parent": (d.children || []).length }]),
      key: h
    }, [
      i.icon ? (s(), b(n, {
        key: 0,
        class: "w-list__item-bullet"
      }, {
        default: m(() => [
          B(C(i.icon), 1)
        ]),
        _: 1
      })) : p("", !0),
      e.$slots[`item.${h + 1}`] || e.$slots.item || e.$slots.default ? (s(), b(I(i.checklist ? "w-checkbox" : i.nav && !d.disabled && d.route ? l.hasRouter ? "router-link" : "a" : "div"), S({
        key: 1,
        class: "w-list__item-label"
      }, l.liLabelProps(d, h, d._selected)), {
        default: m(() => [
          e.$slots[`item.${h + 1}`] ? c(e.$slots, `item.${h + 1}`, {
            key: 0,
            item: l.cleanLi(d),
            index: h + 1,
            selected: d._selected
          }) : e.$slots.item ? c(e.$slots, "item", {
            key: 1,
            item: l.cleanLi(d),
            index: h + 1,
            selected: d._selected
          }) : c(e.$slots, "default", {
            key: 2,
            item: l.cleanLi(d),
            index: h + 1,
            selected: d._selected
          }, () => [
            B(C(d._label), 1)
          ])
        ]),
        _: 2
      }, 1040)) : (s(), b(I(i.checklist ? "w-checkbox" : i.nav && !d.disabled && d.route ? l.hasRouter ? "router-link" : "a" : "div"), S({
        key: 2,
        class: "w-list__item-label"
      }, l.liLabelProps(d, h, d._selected)), null, 16)),
      (d.children || []).length ? (s(), b(r, S({ key: 3 }, e.$props, {
        items: d.children,
        depth: i.depth + 1,
        "onUpdate:modelValue": t[0] || (t[0] = (k) => e.$emit("update:modelValue", k)),
        onInput: t[1] || (t[1] = (k) => e.$emit("input", k)),
        onItemClick: t[2] || (t[2] = (k) => e.$emit("item-click", k)),
        onItemSelect: t[3] || (t[3] = (k) => e.$emit("item-select", k))
      }), Q({ _: 2 }, [
        e.$slots.item ? {
          name: "item",
          fn: m(({ item: k, index: _, selected: g }) => [
            c(e.$slots, "item", {
              item: l.cleanLi(k),
              index: _,
              selected: g
            })
          ]),
          key: "0"
        } : {
          name: "default",
          fn: m(({ item: k, index: _, selected: g }) => [
            c(e.$slots, "default", {
              item: l.cleanLi(k),
              index: _,
              selected: g
            }, () => [
              B(C(k[i.itemLabelKey]), 1)
            ])
          ]),
          key: "1"
        }
      ]), 1040, ["items", "depth"])) : p("", !0)
    ], 2))), 128))
  ], 2);
}
const Fi = {
  name: "w-list",
  props: {
    items: { type: [Array, Number], required: !0 },
    // All the possible options.
    modelValue: {},
    // v-model on selected item if any.
    checklist: { type: Boolean },
    roundCheckboxes: { type: Boolean },
    // Checklist option.
    // If selectable (if value !== false), this allows multiple selections.
    multiple: { type: Boolean },
    // When true, will add an id on the list and on all the list items.
    // Useful for a11y aria fields (e.g. use with w-select).
    addIds: { type: [Boolean, String] },
    hover: { type: Boolean },
    color: { type: String },
    // Applies to all the items.
    selectionColor: { type: String },
    // Applies to the selected items only.
    bgColor: { type: String },
    // Applies to all the items.
    // Navigation type adds a router-link on items with `route`.
    nav: { type: Boolean },
    icon: { type: String, default: "" },
    itemLabelKey: { type: String, default: "label" },
    // Name of the label field.
    itemValueKey: { type: String, default: "value" },
    // Name of the value field.
    itemClassKey: { type: String, default: "class" },
    // Name of the class field.
    itemColorKey: { type: String, default: "color" },
    // Support a different color per item.
    itemRouteKey: { type: String, default: "route" },
    // Name of the route field for `nav` lists.
    itemClass: { type: String },
    depth: { type: Number, default: 0 },
    // For recursive call.
    returnObject: { type: Boolean },
    // By default you can unselect a list item by re-selecting it.
    // Allow preventing that on single selection lists only.
    noUnselect: { type: Boolean },
    arrowsNavigation: { type: Boolean }
  },
  emits: ["input", "update:modelValue", "item-click", "item-select", "keydown:escape", "keydown:enter"],
  data: () => ({
    listItems: []
  }),
  computed: {
    hasRouter() {
      return "$router" in this;
    },
    listId() {
      return this.addIds ? typeof this.addIds == "string" ? this.addIds : `w-list--${this._.uid}` : null;
    },
    selectedItems() {
      return this.listItems.filter((e) => e._selected);
    },
    // Faster cached enabled items lookup.
    enabledItemsIndexes() {
      return this.listItems.filter((e) => !e.disabled).map((e) => e.index);
    },
    isMultipleSelect() {
      return this.multiple || this.checklist;
    },
    isSelectable() {
      return this.modelValue !== void 0 || this.checklist || this.nav;
    },
    SelectionColor() {
      const e = this.selectionColor === void 0 ? !this.color && "primary" : this.selectionColor;
      return this.isSelectable && e;
    },
    classes() {
      return {
        [this.color]: this.color || null,
        [`${this.bgColor}--bg`]: this.bgColor || null,
        "w-list--checklist": this.checklist,
        "w-list--navigation": this.nav,
        "w-list--icon": this.icon,
        [`w-list--child w-list--depth-${this.depth}`]: this.depth
      };
    }
  },
  methods: {
    // If object, get the item value, if none, get the item label, if none get the id.
    // If simple value, return as is.
    getItemValue(e) {
      return e && typeof e == "object" ? e[this.itemValueKey] !== void 0 ? e[this.itemValueKey] : e[this.itemLabelKey] !== void 0 ? e[this.itemLabelKey] : e.index : e;
    },
    // Action of selecting 1 item.
    selectItem(e, t) {
      e._selected && !this.multiple && this.noUnselect || (e._selected = t !== void 0 ? t : !e._selected, e._selected && !this.isMultipleSelect && this.listItems.forEach((i) => i._index !== e._index && (i._selected = !1)), this.emitSelection());
    },
    liLabelClasses(e) {
      return {
        "w-list__item-label--disabled": e.disabled || this.nav && !e[this.itemRouteKey] && !e.children,
        "w-list__item-label--active": this.isSelectable && e._selected || null,
        "w-list__item-label--focused": e._focused,
        "w-list__item-label--hoverable": this.hover,
        "w-list__item-label--selectable": this.isSelectable,
        [e[this.itemColorKey]]: !!e[this.itemColorKey],
        [this.SelectionColor]: e._selected && !e[this.itemColorKey] && this.SelectionColor,
        [e[this.itemClassKey] || this.itemClass]: e[this.itemClassKey] || this.itemClass
      };
    },
    liLabelProps(e, t, i) {
      const o = this.$slots[`item.${t + 1}`] || this.$slots.item, a = () => {
        if (!e.disabled) {
          const d = this.cleanLi(e);
          this.$emit("item-click", d), this.$emit("item-select", d);
        }
      }, l = this.isSelectable && ((d) => {
        d.stopPropagation(), !e.disabled && this.selectItem(e);
      }), n = this.isSelectable && ((d) => {
        !e.disabled && d.keyCode === 13 ? (this.selectItem(e), this.$emit("keydown:enter"), this.$emit("item-select", this.cleanLi(e))) : d.keyCode === 27 ? this.$emit("keydown:escape") : this.arrowsNavigation && [38, 40].includes(d.keyCode) && (d.preventDefault(), d.keyCode === 38 && this.focusPrevNextItem(e._index, !1), d.keyCode === 40 && this.focusPrevNextItem(e._index, !0));
      }), r = {
        class: this.liLabelClasses(e),
        tabindex: e.disabled || this.checklist ? null : "0",
        "aria-selected": i ? "true" : "false",
        id: this.listId ? `${this.listId}_item-${t + 1}` : null,
        role: "option"
      };
      return this.checklist ? (r.modelValue = e._selected, r.color = e[this.itemColorKey] || this.color, r.round = this.roundCheckboxes, r.disabled = e.disabled, o || (r.label = e._label || null), r.onFocus = () => e._focused = !0, r.onBlur = () => e._focused = !1, r.onInput = (d) => this.selectItem(e, d), r.onClick = (d) => {
        const h = d.target.querySelector('input[type="checkbox"]');
        h && (h.focus(), h.click()), a();
      }) : this.nav ? (!e.disabled && e[this.itemRouteKey] && (r.onKeydown = n, r.onMousedown = l, this.$router ? (r.to = e[this.itemRouteKey], r.onClick = (d) => {
        d.preventDefault(), this.$router.push(e[this.itemRouteKey]), a();
      }) : (r.href = e[this.itemRouteKey], r.onClick = a)), o || (r.innerHTML = e._label)) : (this.isSelectable && (e.disabled || (r.tabindex = 0), r.onClick = a, r.onKeydown = n, r.onMousedown = l), o || (r.innerHTML = e._label)), r;
    },
    // Convert the received items selection to array if it is a unique value.
    // Also accept objects if returnObject is true and convert to the object's value.
    // In any case, always end up with an array of values.
    // The values given can be (in this order) a value, a label or the index of the item.
    checkSelection(e) {
      return e = Array.isArray(e) ? e : e ? [e] : [], this.returnObject && (e = e.map(this.getItemValue)), e;
    },
    // Emit the cleaned-up selection to the v-model.
    emitSelection() {
      const e = this.selectedItems.map((i) => {
        if (!this.returnObject)
          return i._value;
        const { _value: o, _selected: a, ...l } = i;
        return l;
      }), t = this.isMultipleSelect ? e : e[0] !== void 0 ? e[0] : null;
      this.$emit("update:modelValue", t), this.$emit("input", t);
    },
    focusPrevNextItem(e, t = !0) {
      e = this.enabledItemsIndexes[this.enabledItemsIndexes.indexOf(e) + (t ? 1 : -1)];
      const i = t ? 0 : this.enabledItemsIndexes.length - 1;
      e === void 0 && (e = this.enabledItemsIndexes[i]), this.$el.querySelector(`#${this.listId}_item-${e + 1}`).focus();
    },
    cleanLi(e) {
      const { _index: t, _value: i, _label: o, _selected: a, _focused: l, ...n } = e;
      return n;
    },
    refreshListItems() {
      const e = typeof this.items == "number" ? Array(this.items).fill({}) : this.items || [];
      this.listItems = e.map((t, i) => ({
        ...t,
        _index: i,
        // If no value is set on the item, add one from its label, or from its index.
        // The result is store in a _value attribute.
        _value: t[this.itemValueKey] === void 0 ? t[this.itemLabelKey] || i : t[this.itemValueKey],
        _selected: t._selected || !1,
        _label: t[this.itemLabelKey] || "",
        _focused: !1
      }));
    },
    applySelectionOnItems(e) {
      this.isMultipleSelect || this.listItems.forEach((i) => i._selected = !1);
      const t = this.checkSelection(e);
      this.listItems.forEach((i) => {
        i._selected = t.find((o) => i._value === o) !== void 0;
      });
    }
  },
  created() {
    this.refreshListItems(), this.applySelectionOnItems(this.modelValue);
  },
  watch: {
    items() {
      this.refreshListItems(), this.applySelectionOnItems(this.modelValue);
    },
    modelValue(e) {
      this.applySelectionOnItems(e);
    },
    multiple(e) {
      if (!e) {
        let t = null;
        this.listItems.forEach((i) => {
          i._selected && !t ? t = i : i._selected && (i._selected = !1);
        }), this.emitSelection();
      }
    }
  }
}, ji = /* @__PURE__ */ v(Fi, [["render", Hi]]), we = {
  props: {
    // Position.
    appendTo: { type: [String, Boolean, Object] },
    fixed: { type: Boolean },
    top: { type: Boolean },
    bottom: { type: Boolean },
    left: { type: Boolean },
    right: { type: Boolean },
    alignTop: { type: Boolean },
    alignBottom: { type: Boolean },
    alignLeft: { type: Boolean },
    alignRight: { type: Boolean },
    noPosition: { type: Boolean },
    zIndex: { type: [Number, String, Boolean] },
    // Optionally designate an external activator.
    // The activator can be a DOM string selector, a ref or a DOM node.
    activator: { type: [String, Object] }
  },
  inject: {
    detachableDefaultRoot: { default: null }
  },
  data: () => ({
    // The event listeners handlers have to be removed the exact same way they have been attached.
    // Since the handler functions have variables that change after hot-reload, keep them exactly
    // as is in an array so we can delete them on destroy.
    // This only applies to the activatorEventHandlers, the other events listeners can be removed
    // normally.
    docEventListenersHandlers: [],
    // The user may open and close the detachable so fast (like when toggling on hover) that it
    // should not show up at all. Keep the ability to cancel the opening timer (if there is a set
    // delay prop).
    openTimeout: null
  }),
  computed: {
    // DOM element to attach tooltip/menu to.
    // ! \ This computed uses the DOM - NO SSR (only trigger from beforeMount and later).
    appendToTarget() {
      let e = ".w-app";
      typeof this.detachableDefaultRoot == "function" && (e = this.detachableDefaultRoot() || e);
      let t = this.appendTo || e;
      return t === !0 ? t = e : this.appendTo === "activator" ? t = this.$el.previousElementSibling : t && !["object", "string"].includes(typeof t) ? t = e : typeof t == "object" && !t.nodeType && (t = e, j(`Invalid node provided in ${this.$options.name} \`append-to\`. Falling back to .w-app.`)), typeof t == "string" && (t = document.querySelector(t)), t || (j(`Unable to locate ${this.appendTo ? `target ${this.appendTo}` : e}`), t = document.querySelector(e)), t;
    },
    // DOM element that will receive the tooltip/menu.
    // ! \ This computed uses the DOM - NO SSR (only trigger from beforeMount and later).
    detachableParentEl() {
      return this.appendToTarget;
    },
    hasSeparateActivator() {
      var i;
      if (this.$slots.activator)
        return !1;
      const e = typeof this.activator == "string", t = (((i = this.activator) == null ? void 0 : i.$el) || this.activator) instanceof HTMLElement;
      return e || t;
    },
    activatorEl: {
      get() {
        var e;
        if (this.hasSeparateActivator) {
          const t = ((e = this.activator) == null ? void 0 : e.$el) || this.activator;
          return t instanceof HTMLElement ? t : document.querySelector(this.activator);
        }
        return this.$el.nextElementSibling;
      },
      set() {
      }
    },
    position() {
      return this.top && "top" || this.bottom && "bottom" || this.left && "left" || this.right && "right" || "bottom";
    },
    alignment() {
      return ["top", "bottom"].includes(this.position) && this.alignLeft && "left" || ["top", "bottom"].includes(this.position) && this.alignRight && "right" || ["left", "right"].includes(this.position) && this.alignTop && "top" || ["left", "right"].includes(this.position) && this.alignBottom && "bottom" || "";
    },
    shouldShowOnClick() {
      return this.$options.props.showOnHover && !this.showOnHover || this.$options.props.showOnClick && this.showOnClick;
    }
  },
  methods: {
    // ! \ This function uses the DOM - NO SSR (only trigger from beforeMount and later).
    async open(e) {
      this.delay && await new Promise((t) => this.openTimeout = setTimeout(t, this.delay)), !(this.delay && !this.openTimeout) && (this.detachableVisible = !0, this.activator && (this.activatorEl = e.target), await this.insertInDOM(), this.minWidth === "activator" && (this.activatorWidth = this.activatorEl.offsetWidth), this.noPosition || this.computeDetachableCoords(), this.timeoutId = setTimeout(() => {
        this.$emit("update:modelValue", !0), this.$emit("input", !0), this.$emit("open");
      }, 0), this.persistent || document.addEventListener("mousedown", this.onOutsideMousedown), this.noPosition || window.addEventListener("resize", this.onResize));
    },
    // ! \ This function uses the DOM - NO SSR (only trigger from beforeMount and later).
    getActivatorCoordinates() {
      const { top: e, left: t, width: i, height: o } = this.activatorEl.getBoundingClientRect();
      let a = { top: e, left: t, width: i, height: o };
      if (!this.fixed) {
        const { top: l, left: n } = this.detachableParentEl.getBoundingClientRect(), r = window.getComputedStyle(this.detachableParentEl, null);
        a = {
          ...a,
          top: e - l + this.detachableParentEl.scrollTop - parseInt(r.getPropertyValue("border-top-width")),
          left: t - n + this.detachableParentEl.scrollLeft - parseInt(r.getPropertyValue("border-left-width"))
        };
      }
      return a;
    },
    // ! \ This function uses the DOM - NO SSR (only trigger from beforeMount and later).
    computeDetachableCoords() {
      let { top: e, left: t, width: i, height: o } = this.getActivatorCoordinates();
      if (!this.detachableEl)
        return;
      this.detachableEl.style.visibility = "hidden", this.detachableEl.style.display = "flex";
      const a = window.getComputedStyle(this.detachableEl, null);
      switch (this.position) {
        case "top": {
          e -= this.detachableEl.offsetHeight, this.alignRight ? t += i - this.detachableEl.offsetWidth + parseInt(a.getPropertyValue("border-right-width")) : this.alignLeft || (t += (i - this.detachableEl.offsetWidth) / 2);
          break;
        }
        case "bottom": {
          e += o, this.alignRight ? t += i - this.detachableEl.offsetWidth + parseInt(a.getPropertyValue("border-right-width")) : this.alignLeft || (t += (i - this.detachableEl.offsetWidth) / 2);
          break;
        }
        case "left": {
          t -= this.detachableEl.offsetWidth, this.alignBottom ? e += o - this.detachableEl.offsetHeight : this.alignTop || (e += (o - this.detachableEl.offsetHeight) / 2);
          break;
        }
        case "right": {
          t += i, this.alignBottom ? e += o - this.detachableEl.offsetHeight + parseInt(a.getPropertyValue("margin-top")) : this.alignTop || (e += (o - this.detachableEl.offsetHeight) / 2 + // top: 50% of activator - half menu height.
          parseInt(a.getPropertyValue("margin-top")));
          break;
        }
      }
      this.detachableEl.style.visibility = null, this.detachableVisible || (this.detachableEl.style.display = "none"), this.detachableCoords = { top: e, left: t };
    },
    onResize() {
      this.minWidth === "activator" && (this.activatorWidth = this.activatorEl.offsetWidth), this.computeDetachableCoords();
    },
    // ! \ This function uses the DOM - NO SSR (only trigger from beforeMount and later).
    onOutsideMousedown(e) {
      !this.detachableEl.contains(e.target) && !this.activatorEl.contains(e.target) && (this.$emit("update:modelValue", this.detachableVisible = !1), this.$emit("input", !1), this.$emit("close"), document.removeEventListener("mousedown", this.onOutsideMousedown), window.removeEventListener("resize", this.onResize));
    },
    insertInDOM() {
      return new Promise((e) => {
        this.$nextTick(() => {
          var t;
          this.detachableEl = ((t = this.$refs.detachable) == null ? void 0 : t.$el) || this.$refs.detachable, this.detachableEl && this.appendToTarget.appendChild(this.detachableEl), e();
        });
      });
    },
    removeFromDOM() {
      document.removeEventListener("mousedown", this.onOutsideMousedown), window.removeEventListener("resize", this.onResize), this.detachableEl && this.detachableEl.parentNode && (this.detachableVisible = !1, this.detachableEl.remove(), this.detachableEl = null);
    },
    // If the activator is external, add event listeners to the document and check the target is
    // the activator when toggling.
    // This way, the activator can be a future DOM element, that is not yet in the DOM.
    bindActivatorEvents() {
      const e = typeof this.activator == "string";
      Object.entries(this.activatorEventHandlers).forEach(([t, i]) => {
        t = t.replace("mouseenter", "mouseover").replace("mouseleave", "mouseout");
        const o = (a) => {
          var l;
          (e && ((l = a.target) != null && l.matches) && a.target.matches(this.activator) || a.target === this.activatorEl || this.activatorEl.contains(a.target)) && i(a);
        };
        document.addEventListener(t, o), this.docEventListenersHandlers.push({ eventName: t, handler: o });
      });
    }
  },
  mounted() {
    var e;
    this.activator ? this.bindActivatorEvents() : this.$nextTick(() => {
      this.activator && this.bindActivatorEvents(), this.modelValue && this.open({ target: this.activatorEl });
    }), this.overlay && (this.overlayEl = (e = this.$refs.overlay) == null ? void 0 : e.$el), this.modelValue && this.activator ? this.toggle({ type: this.shouldShowOnClick ? "click" : "mouseenter", target: this.activatorEl }) : this.modelValue && this.open({ target: this.activatorEl });
  },
  unmounted() {
    this.close(), this.removeFromDOM(), this.docEventListenersHandlers.length && this.docEventListenersHandlers.forEach(({ eventName: e, handler: t }) => {
      document.removeEventListener(e, t);
    });
  },
  watch: {
    modelValue(e) {
      !!e !== this.detachableVisible && (e ? this.open({ target: this.activatorEl }) : this.close());
    },
    appendTo() {
      this.removeFromDOM(), this.insertInDOM();
    }
  }
};
function Ui(e, t, i, o, a, l) {
  const n = $("w-card"), r = $("w-overlay");
  return s(), u(w, null, [
    c(e.$slots, "activator", { on: l.activatorEventHandlers }),
    V(O, {
      name: l.transitionName,
      appear: ""
    }, {
      default: m(() => [
        i.custom && e.detachableVisible ? (s(), u("div", S({
          key: 0,
          class: "w-menu",
          ref: "detachable"
        }, e.$attrs, {
          onClick: t[0] || (t[0] = (d) => i.hideOnMenuClick && l.close(!0)),
          onMouseenter: t[1] || (t[1] = (d) => i.showOnHover && (e.hoveringMenu = !0)),
          onMouseleave: t[2] || (t[2] = (d) => i.showOnHover && (e.hoveringMenu = !1, l.close())),
          class: l.classes,
          style: l.styles
        }), [
          c(e.$slots, "default")
        ], 16)) : e.detachableVisible ? (s(), b(n, S({
          key: 1,
          class: "w-menu",
          ref: "detachable"
        }, e.$attrs, {
          onClick: t[3] || (t[3] = (d) => i.hideOnMenuClick && l.close(!0)),
          onMouseenter: t[4] || (t[4] = (d) => i.showOnHover && (e.hoveringMenu = !0)),
          onMouseleave: t[5] || (t[5] = (d) => i.showOnHover && (e.hoveringMenu = !1, l.close())),
          tile: i.tile,
          "title-class": l.titleClasses,
          "content-class": l.contentClasses,
          shadow: i.shadow,
          "no-border": i.noBorder,
          class: l.classes,
          style: l.styles
        }), Q({
          default: m(() => [
            c(e.$slots, "default")
          ]),
          _: 2
        }, [
          e.$slots.title ? {
            name: "title",
            fn: m(() => [
              c(e.$slots, "title")
            ]),
            key: "0"
          } : void 0,
          e.$slots.actions ? {
            name: "actions",
            fn: m(() => [
              c(e.$slots, "actions")
            ]),
            key: "1"
          } : void 0
        ]), 1040, ["tile", "title-class", "content-class", "shadow", "no-border", "class", "style"])) : p("", !0)
      ]),
      _: 3
    }, 8, ["name"]),
    i.overlay ? (s(), b(r, S({
      key: 0,
      ref: "overlay",
      "model-value": e.detachableVisible,
      persistent: i.persistent,
      class: l.overlayClasses
    }, i.overlayProps, {
      "z-index": (e.zIndex || 200) - 1,
      "onUpdate:modelValue": t[6] || (t[6] = (d) => e.detachableVisible = !1)
    }), null, 16, ["model-value", "persistent", "class", "z-index"])) : p("", !0)
  ], 64);
}
const qi = {
  name: "w-menu",
  mixins: [we],
  inheritAttrs: !1,
  // The attrs are only bound to the button-partial, not the root.
  props: {
    modelValue: {},
    // Show or hide.
    showOnHover: { type: Boolean },
    hideOnMenuClick: { type: Boolean },
    color: { type: String },
    bgColor: { type: String },
    shadow: { type: Boolean },
    custom: { type: Boolean },
    // Include a w-card or not. It does by default.
    tile: { type: Boolean },
    round: { type: Boolean },
    noBorder: { type: Boolean },
    transition: { type: String },
    menuClass: { type: [String, Object, Array] },
    titleClass: { type: [String, Object, Array] },
    contentClass: { type: [String, Object, Array] },
    arrow: { type: Boolean },
    // The small triangle pointing toward the activator.
    minWidth: { type: [Number, String] },
    // can be like: `40`, `5em`, `activator`.
    maxWidth: { type: [Number, String] },
    // can be like: `40`, `5em`, `activator`.
    overlay: { type: Boolean },
    overlayClass: { type: [String, Object, Array] },
    overlayProps: { type: Object },
    // Allow passing down an object of props to the w-overlay component.
    persistent: { type: Boolean },
    delay: { type: Number },
    dark: { type: Boolean },
    light: { type: Boolean }
    // Other props in the detachable mixin:
    // detachTo, appendTo, fixed, top, bottom, left, right, alignTop, alignBottom, alignLeft,
    // alignRight, noPosition, zIndex, activator.
  },
  provide() {
    return {
      // If a detachable is used inside a w-menu without an appendTo, default to the menu element
      // instead of the w-app.
      detachableDefaultRoot: () => {
        var e;
        return ((e = this.$refs.detachable) == null ? void 0 : e.$el) || this.$refs.detachable || null;
      }
    };
  },
  emits: ["input", "update:modelValue", "open", "close"],
  data: () => ({
    detachableVisible: !1,
    hoveringActivator: !1,
    hoveringMenu: !1,
    // The menu computed top & left coordinates.
    detachableCoords: {
      top: 0,
      left: 0
    },
    activatorWidth: 0,
    detachableEl: null,
    timeoutId: null
  }),
  computed: {
    /**
     * Other computed in the detachable mixin:
     * - `appendToTarget`
     * - `detachableParentEl`
     * - `activatorEl`
     * - `position`
     * - `alignment`
     **/
    transitionName() {
      return this.transition || "scale-fade";
    },
    menuMinWidth() {
      return this.minWidth === "activator" ? this.activatorWidth ? `${this.activatorWidth}px` : 0 : isNaN(this.minWidth) ? this.minWidth : this.minWidth ? `${this.minWidth}px` : 0;
    },
    menuMaxWidth() {
      return this.maxWidth === "activator" ? this.activatorWidth ? `${this.activatorWidth}px` : 0 : isNaN(this.maxWidth) ? this.maxWidth : this.maxWidth ? `${this.maxWidth}px` : 0;
    },
    menuClasses() {
      return K(this.menuClass);
    },
    titleClasses() {
      return K(this.titleClass);
    },
    contentClasses() {
      return K(this.contentClass);
    },
    overlayClasses() {
      return {
        ...K(this.overlayClass),
        "w-overlay--no-pointer-event": this.showOnHover
      };
    },
    classes() {
      return {
        [this.color]: this.color,
        [`${this.bgColor}--bg`]: this.bgColor,
        ...this.menuClasses,
        [`w-menu--${this.position}`]: !this.noPosition,
        [`w-menu--align-${this.alignment}`]: !this.noPosition && this.alignment,
        "w-menu--tile": this.tile,
        "w-menu--card": !this.custom,
        "w-menu--round": this.round,
        "w-menu--arrow": this.arrow,
        "w-menu--shadow": this.shadow,
        "w-menu--fixed": this.fixed,
        "w-menu--dark": this.dark,
        "w-menu--light": this.light
      };
    },
    // The floating menu styles.
    styles() {
      return {
        zIndex: this.zIndex || this.zIndex === 0 || this.overlay && !this.zIndex && 200 || null,
        top: this.detachableCoords.top && `${~~this.detachableCoords.top}px` || null,
        left: this.detachableCoords.left && `${~~this.detachableCoords.left}px` || null,
        minWidth: this.minWidth && this.menuMinWidth || null,
        maxWidth: this.maxWidth && this.menuMaxWidth || null,
        "--w-menu-bg-color": this.arrow && (this.$waveui.colors[this.bgColor] || "rgb(var(--w-base-bg-color-rgb))")
      };
    },
    activatorEventHandlers() {
      let e = {};
      return this.showOnHover ? (e = {
        focus: this.toggle,
        blur: this.toggle,
        mouseenter: (t) => {
          this.hoveringActivator = !0, this.open(t);
        },
        mouseleave: (t) => {
          this.hoveringActivator = !1, setTimeout(() => {
            this.hoveringMenu || this.close();
          }, 10);
        }
      }, typeof window < "u" && "ontouchstart" in window && (e.click = this.toggle)) : e = { click: this.toggle }, e;
    }
  },
  methods: {
    /**
     * Other methods in the `detachable` mixin:
     * - `open`
     * - `getActivatorCoordinates`
     * - `computeDetachableCoords`
     * - `onResize`
     * - `onOutsideMousedown`
     * - `insertInDOM`
     * - `removeFromDOM`
     **/
    // ! \ This function uses the DOM - NO SSR (only trigger from beforeMount and later).
    toggle(e) {
      let t = this.detachableVisible;
      typeof window < "u" && "ontouchstart" in window && this.showOnHover && e.type === "click" || e.type === "click" && !this.showOnHover ? t = !t : e.type === "mouseenter" && this.showOnHover ? (this.hoveringActivator = !0, t = !0) : e.type === "mouseleave" && this.showOnHover && (this.hoveringActivator = !1, t = !1), this.timeoutId = clearTimeout(this.timeoutId), t ? this.open(e) : this.close();
    },
    /**
     * Closes the menu. Can happen on:
     * - click of activator
     * - hover outside if showOnHover
     * - click inside menu if hideOnMenuClick.
     * / ! \ This function uses the DOM - NO SSR (only trigger from beforeMount and later).
     *
     * @param {Boolean} force when showOnHover is set to true, hovering menu should keep it open.
     *                        But if hideOnMenuClick is also set to true, this should force close
     *                        even while hovering the menu.
     */
    async close(e = !1) {
      this.openTimeout = clearTimeout(this.openTimeout), this.detachableVisible && (this.showOnHover && !e && (await new Promise((t) => setTimeout(t, 10)), this.showOnHover && (this.hoveringMenu || this.hoveringActivator)) || (this.$emit("update:modelValue", this.detachableVisible = !1), this.$emit("input", !1), this.$emit("close"), document.removeEventListener("mousedown", this.onOutsideMousedown), window.removeEventListener("resize", this.onResize)));
    }
  }
  // watch, mounted & beforeDestroy hooks are set in the detachable.js mixin.
}, Xi = /* @__PURE__ */ v(qi, [["render", Ui]]);
function Yi(e, t, i, o, a, l) {
  const n = $("w-alert");
  return s(), b(O, {
    name: l.transitionName,
    appear: ""
  }, {
    default: m(() => [
      a.show ? (s(), u("div", {
        key: 0,
        class: f(["w-notification", l.classes]),
        style: R(l.styles)
      }, [
        V(n, S(l.alertProps, {
          class: l.alertClasses,
          "onUpdate:modelValue": t[0] || (t[0] = (r) => {
            e.$emit("update:modelValue", !1), e.$emit("input", !1);
          })
        }), {
          default: m(() => [
            c(e.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ], 6)) : p("", !0)
    ]),
    _: 3
  }, 8, ["name"]);
}
const Gi = {
  name: "w-notification",
  props: {
    // Notification props.
    modelValue: { default: !0 },
    // Show or hide.
    transition: { type: [String, Boolean], default: "" },
    timeout: { type: [Number, String], default: 0 },
    absolute: { type: Boolean },
    top: { type: Boolean },
    bottom: { type: Boolean },
    left: { type: Boolean },
    right: { type: Boolean },
    zIndex: { type: [Number, String, Boolean] },
    // Alert props.
    success: { type: Boolean },
    info: { type: Boolean },
    warning: { type: Boolean },
    error: { type: Boolean },
    color: { type: String },
    bgColor: { type: String },
    shadow: { type: Boolean },
    tile: { type: Boolean },
    round: { type: Boolean },
    plain: { type: Boolean },
    noBorder: { type: Boolean },
    borderLeft: { type: Boolean },
    borderRight: { type: Boolean },
    borderTop: { type: Boolean },
    borderBottom: { type: Boolean },
    outline: { type: Boolean },
    dismiss: { type: Boolean },
    xs: { type: Boolean },
    sm: { type: Boolean },
    md: { type: Boolean },
    lg: { type: Boolean },
    xl: { type: Boolean },
    dark: { type: Boolean },
    light: { type: Boolean }
  },
  emits: ["input", "update:modelValue", "close"],
  data() {
    return {
      show: this.modelValue,
      timeoutId: null
    };
  },
  computed: {
    transitionName() {
      return this.transition === !1 ? "" : this.transition ? this.transition : `slide-${{ top: "down", bottom: "up", left: "right", right: "left" }[this.position[this.position[1] === "center" ? 0 : 1]]}`;
    },
    position() {
      let e = [];
      return !this.top && !this.bottom && !this.left && !this.right ? e = ["top", "right"] : e = [
        this.top && "top" || this.bottom && "bottom" || "top",
        this.left && "left" || this.right && "right" || "center"
      ], e;
    },
    hasType() {
      return !!(this.success || this.info || this.warning || this.error);
    },
    alertProps() {
      return {
        modelValue: this.show,
        success: this.success,
        info: this.info,
        warning: this.warning,
        error: this.error,
        color: this.color,
        bgColor: this.bgColor || !this.hasType && "white" || "",
        shadow: this.shadow,
        tile: this.tile,
        round: this.round,
        plain: this.plain,
        noBorder: this.noBorder,
        borderLeft: this.borderLeft,
        borderRight: this.borderRight,
        borderTop: this.borderTop,
        borderBottom: this.borderBottom,
        outline: this.outline,
        dismiss: this.dismiss,
        xs: this.xs,
        sm: this.sm,
        md: this.md,
        lg: this.lg,
        xl: this.xl
      };
    },
    classes() {
      return {
        "w-notification--dark": this.dark,
        "w-notification--light": this.light,
        "w-notification--absolute": this.absolute,
        [`w-notification--${this.position.join(" w-notification--")}`]: !0
      };
    },
    alertClasses() {
      return this.bgColor || (this.success || this.info || this.warning || this.error) && this.plain ? null : "white--bg";
    },
    styles() {
      return {
        zIndex: this.zIndex || this.zIndex === 0 || null
      };
    },
    timeoutVal() {
      return parseInt(this.timeout);
    }
  },
  methods: {
    countdown() {
      this.timeoutId = setTimeout(() => {
        this.$emit("update:modelValue", this.show = !1), this.$emit("input", !1), this.$emit("close");
      }, this.timeoutVal);
    }
  },
  created() {
    this.modelValue && this.timeoutVal && this.countdown();
  },
  watch: {
    modelValue(e) {
      clearTimeout(this.timeoutId), this.show = e, e && this.timeoutVal && this.countdown();
    }
  }
}, Ji = /* @__PURE__ */ v(Gi, [["render", Yi]]);
function Qi(e, t, i, o, a, l) {
  const n = ge("focus");
  return s(), b(O, {
    name: "fade",
    appear: "",
    onAfterLeave: l.onClose
  }, {
    default: m(() => [
      i.modelValue ? A((s(), u("div", {
        key: 0,
        class: f(["w-overlay", l.classes]),
        ref: "overlay",
        style: R(i.modelValue && l.styles || null),
        onKeydown: t[0] || (t[0] = W(z((...r) => l.onClick && l.onClick(...r), ["stop"]), ["escape"])),
        onClick: t[1] || (t[1] = (...r) => l.onClick && l.onClick(...r)),
        tabindex: "0"
      }, [
        c(e.$slots, "default")
      ], 38)), [
        [ae, e.showOverlay],
        [n]
      ]) : p("", !0)
    ]),
    _: 3
  }, 8, ["onAfterLeave"]);
}
const Zi = {
  name: "w-overlay",
  props: {
    modelValue: {},
    opacity: { type: [Number, String, Boolean] },
    bgColor: { type: String },
    absolute: { type: Boolean },
    zIndex: { type: [Number, String, Boolean] },
    persistent: { type: Boolean },
    persistentNoAnimation: { type: Boolean }
  },
  provide() {
    return {
      // If a detachable is used inside a w-overlay without an appendTo, default to the overlay element
      // instead of the w-app.
      detachableDefaultRoot: () => this.$refs.overlay || null
    };
  },
  emits: ["input", "update:modelValue", "click", "before-close", "close"],
  data: () => ({
    persistentAnimate: !1,
    showOverlay: !1
  }),
  computed: {
    backgroundColor() {
      return this.bgColor || this.opacity && `rgba(0, 0, 0, ${this.opacity})` || !1;
    },
    classes() {
      return {
        "w-overlay--persistent-animate": this.persistentAnimate,
        "w-overlay--absolute": this.absolute
      };
    },
    styles() {
      return {
        backgroundColor: this.backgroundColor,
        zIndex: this.zIndex || this.zIndex === 0 ? this.zIndex : !1
      };
    }
  },
  methods: {
    onClick(e) {
      e.target.classList.contains("w-overlay") && (this.persistent && !this.persistentNoAnimation ? (this.persistentAnimate = !0, setTimeout(() => this.persistentAnimate = !1, 150)) : this.persistent || (this.showOverlay = !1, this.$emit("before-close")), this.$emit("click", e));
    },
    // Wait until the end of the closing transition (v-show) to completely unmount (v-if).
    // The onClose method is called twice from the transition: once for the v-show, and once for the v-if.
    onClose() {
      this.$emit("update:modelValue", !1), this.$emit("input", !1), this.modelValue || this.$emit("close");
    }
  },
  created() {
    this.showOverlay = this.modelValue;
  },
  watch: {
    modelValue(e) {
      e && (this.showOverlay = !0);
    }
  }
}, el = /* @__PURE__ */ v(Zi, [["render", Qi]]), tl = { class: "w-parallax" };
function il(e, t, i, o, a, l) {
  return s(), u("div", tl);
}
const ll = {
  name: "w-parallax",
  props: {},
  emits: [],
  data: () => ({})
}, sl = /* @__PURE__ */ v(ll, [["render", il]]), ol = ["viewBox"], al = ["cx", "cy", "r", "stroke-dasharray", "stroke-width"], nl = ["cx", "cy", "r", "stroke-width", "stroke-linecap", "stroke-dasharray"];
function rl(e, t, i, o, a, l) {
  return s(), u("div", {
    class: f(["w-progress", l.classes]),
    style: R(l.styles)
  }, [
    i.circle ? (s(), u("svg", {
      key: 1,
      viewBox: `${l.circleCenter / 2} ${l.circleCenter / 2} ${l.circleCenter} ${l.circleCenter}`
    }, [
      i.bgColor || this.progressValue > -1 ? (s(), u("circle", {
        key: 0,
        class: f(["bg", i.bgColor || null]),
        cx: l.circleCenter,
        cy: l.circleCenter,
        r: e.circleRadius,
        fill: "transparent",
        "stroke-dasharray": e.circleCircumference,
        "stroke-width": i.stroke
      }, null, 10, al)) : p("", !0),
      y("circle", {
        class: "w-progress__progress",
        cx: l.circleCenter,
        cy: l.circleCenter,
        r: e.circleRadius,
        fill: "transparent",
        "stroke-width": i.stroke,
        "stroke-linecap": i.roundCap && "round",
        "stroke-dasharray": e.circleCircumference,
        style: R(`stroke-dashoffset: ${(1 - l.progressValue / 100) * e.circleCircumference}`)
      }, null, 12, nl)
    ], 8, ol)) : (s(), u("div", {
      key: 0,
      class: f(["w-progress__progress", { full: l.progressValue === 100 }]),
      style: R(`width: ${l.progressValue}%`)
    }, null, 6)),
    i.label || e.$slots.default ? (s(), u("div", {
      key: 2,
      class: f(["w-progress__label", i.labelColor || !1])
    }, [
      c(e.$slots, "default", {}, () => [
        B(C(Math.round(l.progressValue)) + C(i.circle ? "" : "%"), 1)
      ])
    ], 2)) : p("", !0)
  ], 6);
}
const G = 40, dl = G / 2, ul = Math.round(G * 3.14 * 100) / 100, hl = {
  name: "w-progress",
  props: {
    modelValue: { type: [Number, String, Boolean], default: -1 },
    label: { type: Boolean },
    roundCap: { type: Boolean },
    color: { type: String, default: "primary" },
    bgColor: { type: String },
    labelColor: { type: String },
    size: { type: [Number, String] },
    // Circular progress thickness.
    circle: { type: Boolean },
    stroke: { type: [Number, String], default: 4 },
    // For linear progress.
    shadow: { type: Boolean },
    tile: { type: Boolean },
    round: { type: Boolean },
    outline: { type: Boolean },
    stripes: { type: Boolean },
    absolute: { type: Boolean },
    fixed: { type: Boolean },
    top: { type: Boolean },
    bottom: { type: Boolean },
    zIndex: { type: [Number, String, Boolean] }
  },
  emits: [],
  data: () => ({
    circleSize: G,
    circleRadius: dl,
    circleCircumference: ul
  }),
  computed: {
    progressValue() {
      return parseFloat(this.modelValue);
    },
    circleCenter() {
      return G + this.stroke;
    },
    forcedSize() {
      return this.size && (isNaN(this.size) ? this.size : `${this.size}px`);
    },
    // If linear, with position fixed or absolute.
    position() {
      return this.top && "top" || this.bottom && "bottom" || "top";
    },
    classes() {
      return {
        [`w-progress--${this.circle ? "circular" : "linear"}`]: !0,
        [this.color]: this.color,
        [`${this.bgColor}--bg`]: this.bgColor && !this.circle,
        [`w-progress--${this.position}`]: !this.circle && (this.absolute || this.fixed),
        "w-progress--default-bg": !this.bgColor,
        "w-progress--indeterminate": this.modelValue === -1,
        "w-progress--outline": !this.circle && this.outline,
        "w-progress--tile": !this.circle && this.tile,
        "w-progress--stripes": !this.circle && this.stripes,
        "w-progress--round": !this.circle && this.round,
        "w-progress--shadow": this.shadow,
        "w-progress--absolute": !this.circle && this.absolute,
        "w-progress--fixed": !this.circle && !this.absolute && this.fixed,
        [`w-progress--${this.roundCap ? "round" : "flat"}-cap`]: !0
      };
    },
    styles() {
      return {
        [this.circle ? "width" : "height"]: this.forcedSize || null
      };
    }
  }
}, cl = /* @__PURE__ */ v(hl, [["render", rl]]), pl = ["id", "name", "checked", "disabled", "required", "tabindex", "aria-checked"], fl = ["for"], ml = ["for", "innerHTML"], gl = ["for"], bl = ["for", "innerHTML"];
function yl(e, t, i, o, a, l) {
  return s(), b(I(e.formRegister && !l.wRadios ? "w-form-element" : "div"), S({ ref: "formEl" }, e.formRegister && { validators: e.validators, inputValue: e.inputValue, disabled: e.isDisabled, readonly: e.isReadonly }, {
    valid: e.valid,
    "onUpdate:valid": t[3] || (t[3] = (n) => e.valid = n),
    onReset: t[4] || (t[4] = (n) => {
      e.$emit("update:modelValue", e.inputValue = null), e.$emit("input", null);
    }),
    class: l.classes
  }), {
    default: m(() => [
      y("input", {
        ref: "input",
        id: `w-radio--${e._.uid}`,
        type: "radio",
        name: e.inputName,
        checked: e.inputValue || null,
        disabled: e.isDisabled || e.isReadonly || null,
        required: e.required || null,
        tabindex: e.tabindex || null,
        onFocus: t[0] || (t[0] = (n) => e.$emit("focus", n)),
        onChange: t[1] || (t[1] = (n) => l.onInput(n)),
        "aria-checked": e.inputValue || "false",
        role: "radio"
      }, null, 40, pl),
      l.hasLabel && i.labelOnLeft ? (s(), u(w, { key: 0 }, [
        e.$slots.default ? (s(), u("label", {
          key: 0,
          class: f(["w-radio__label w-form-el-shakable pr2", e.labelClasses]),
          for: `w-radio--${e._.uid}`
        }, [
          c(e.$slots, "default", {}, () => [
            B(C(i.label), 1)
          ])
        ], 10, fl)) : i.label ? (s(), u("label", {
          key: 1,
          class: f(["w-radio__label w-form-el-shakable pr2", e.labelClasses]),
          for: `w-radio--${e._.uid}`,
          innerHTML: i.label
        }, null, 10, ml)) : p("", !0)
      ], 64)) : p("", !0),
      y("div", {
        class: f(["w-radio__input", this.color]),
        onClick: t[2] || (t[2] = (n) => {
          e.$refs.input.focus(), e.$refs.input.click();
        })
      }, null, 2),
      l.hasLabel && !i.labelOnLeft ? (s(), u(w, { key: 1 }, [
        e.$slots.default ? (s(), u("label", {
          key: 0,
          class: f(["w-radio__label w-form-el-shakable pl2", e.labelClasses]),
          for: `w-radio--${e._.uid}`
        }, [
          c(e.$slots, "default", {}, () => [
            B(C(i.label), 1)
          ])
        ], 10, gl)) : i.label ? (s(), u("label", {
          key: 1,
          class: f(["w-radio__label w-form-el-shakable pl2", e.labelClasses]),
          for: `w-radio--${e._.uid}`,
          innerHTML: i.label
        }, null, 10, bl)) : p("", !0)
      ], 64)) : p("", !0)
    ]),
    _: 3
  }, 16, ["valid", "class"]);
}
const wl = {
  name: "w-radio",
  mixins: [E],
  inject: { wRadios: { default: null } },
  props: {
    modelValue: { default: !1 },
    // v-model to check or uncheck.
    // When `value` is taken by a v-model and multiple w-radio are plugged on
    // the same v-model, this allows returning a custom value to the v-model.
    returnValue: {},
    label: { type: String },
    labelOnLeft: { type: Boolean },
    color: { type: String, default: "primary" },
    labelColor: { type: String, default: "primary" },
    noRipple: { type: Boolean },
    dark: { type: Boolean },
    light: { type: Boolean }
    // Props from mixin: name, disabled, readonly, required, tabindex, validators.
    // Computed from mixin: inputName, isDisabled & isReadonly.
  },
  emits: ["input", "update:modelValue", "focus"],
  data: () => ({
    inputValue: !1,
    ripple: {
      start: !1,
      end: !1,
      timeout: null
    }
  }),
  computed: {
    hasLabel() {
      return this.label || this.$slots.default;
    },
    classes() {
      return {
        [`w-radio w-radio--${this.inputValue ? "checked" : "unchecked"}`]: !0,
        "w-radio--disabled": this.isDisabled,
        "w-radio--readonly": this.isReadonly,
        "w-radio--ripple": this.ripple.start,
        "w-radio--rippled": this.ripple.end,
        "w-radio--dark": this.ripple.dark,
        "w-radio--light": this.ripple.light
      };
    }
  },
  methods: {
    toggleFromOutside() {
      this.inputValue = this.returnValue !== void 0 ? this.returnValue === this.modelValue : this.modelValue;
    },
    onInput(e) {
      this.inputValue = e.target.checked;
      const t = this.inputValue && this.returnValue !== void 0 ? this.returnValue : this.inputValue;
      this.$emit("update:modelValue", t), this.$emit("input", t), this.noRipple || (this.inputValue ? (this.ripple.start = !0, this.ripple.timeout = setTimeout(() => {
        this.ripple.start = !1, this.ripple.end = !0, setTimeout(() => this.ripple.end = !1, 100);
      }, 700)) : (this.ripple.start = !1, clearTimeout(this.ripple.timeout)));
    }
  },
  created() {
    this.modelValue !== void 0 && this.toggleFromOutside();
  },
  watch: {
    modelValue() {
      this.toggleFromOutside();
    }
  }
}, kl = /* @__PURE__ */ v(wl, [["render", yl]]), vl = ["innerHTML"];
function Cl(e, t, i, o, a, l) {
  const n = $("w-radio");
  return s(), b(I(e.formRegister ? "w-form-element" : "div"), S({ ref: "formEl" }, e.formRegister && { validators: e.validators, inputValue: e.inputValue, disabled: e.isDisabled }, {
    valid: e.valid,
    "onUpdate:valid": t[1] || (t[1] = (r) => e.valid = r),
    onReset: t[2] || (t[2] = (r) => {
      e.$emit("update:modelValue", e.inputValue = null), e.$emit("input", null);
    }),
    column: !i.inline,
    wrap: i.inline,
    class: l.classes
  }), {
    default: m(() => [
      (s(!0), u(w, null, L(l.radioItems, (r, d) => (s(), b(n, S({
        key: d,
        "model-value": r.value === i.modelValue,
        "onUpdate:modelValue": (h) => l.onInput(r),
        onFocus: t[0] || (t[0] = (h) => e.$emit("focus", h)),
        name: e.inputName
      }, { label: r.label, color: r.color, labelOnLeft: i.labelOnLeft, labelColor: i.labelColor }, {
        disabled: e.isDisabled || null,
        readonly: e.isReadonly || null,
        class: { mt1: !i.inline && d }
      }), {
        default: m(() => [
          e.$slots[`item.${d + 1}`] || e.$slots.item ? c(e.$slots, e.$slots[`item.${d + 1}`] ? `item.${d + 1}` : "item", {
            key: 0,
            item: l.getOriginalItem(r),
            index: d + 1,
            checked: r.value === i.modelValue,
            innerHTML: r.label
          }) : r.label ? (s(), u("div", {
            key: 1,
            innerHTML: r.label
          }, null, 8, vl)) : p("", !0)
        ]),
        _: 2
      }, 1040, ["model-value", "onUpdate:modelValue", "name", "disabled", "readonly", "class"]))), 128))
    ]),
    _: 3
  }, 16, ["valid", "column", "wrap", "class"]);
}
const Sl = {
  name: "w-radios",
  mixins: [E],
  props: {
    items: { type: Array, required: !0 },
    // All the possible options.
    modelValue: { type: [String, Number, Boolean] },
    // v-model on selected option.
    labelOnLeft: { type: Boolean },
    itemLabelKey: { type: String, default: "label" },
    itemValueKey: { type: String, default: "value" },
    itemColorKey: { type: String, default: "color" },
    // Support a different color per item.
    inline: { type: Boolean },
    color: { type: String, default: "primary" },
    labelColor: { type: String, default: "primary" }
    // Props from mixin: name, disabled, readonly, required, validators.
    // Computed from mixin: inputName, isDisabled & isReadonly.
  },
  emits: ["input", "update:modelValue", "focus"],
  provide() {
    return { wRadios: !0 };
  },
  data: () => ({
    inputValue: null
  }),
  computed: {
    radioItems() {
      return (this.items || []).map((e, t) => ({
        ...e,
        _index: t,
        label: e[this.itemLabelKey],
        // If no value is set then add one to prevent error.
        value: e[this.itemValueKey] === void 0 ? e[this.itemLabelKey] || t : e[this.itemValueKey],
        color: e[this.itemColorKey] || this.color
      }));
    },
    classes() {
      return [
        "w-radios",
        `w-radios--${this.inline ? "inline" : "column"}`
      ];
    }
  },
  methods: {
    onInput(e) {
      this.inputValue = !0, this.$emit("update:modelValue", e.value), this.$emit("input", e.value);
    },
    // Return the original item (so there is no `_index`).
    getOriginalItem(e) {
      return this.items[e._index];
    }
  }
}, Bl = /* @__PURE__ */ v(Sl, [["render", Cl]]), _l = ["id", "name", "value"], $l = ["disabled", "onMouseenter", "onClick", "tabindex"];
function Vl(e, t, i, o, a, l) {
  return s(), b(I(e.formRegister ? "w-form-element" : "div"), S({ ref: "formEl" }, e.formRegister && { validators: e.validators, inputValue: a.rating, disabled: e.isDisabled, readonly: e.isReadonly }, {
    valid: e.valid,
    "onUpdate:valid": t[4] || (t[4] = (n) => e.valid = n),
    onReset: t[5] || (t[5] = (n) => {
      e.$emit("update:modelValue", a.rating = null), e.$emit("input", null);
    }),
    class: l.classes
  }), {
    default: m(() => [
      y("input", {
        id: e.inputName,
        name: e.inputName,
        type: "hidden",
        value: a.rating
      }, null, 8, _l),
      (s(!0), u(w, null, L(i.max, (n) => (s(), u(w, { key: n }, [
        e.$slots.item ? c(e.$slots, "item", {
          key: 0,
          index: n + 1
        }) : p("", !0),
        y("button", {
          class: f(["w-rating__button", l.buttonClasses(n)]),
          disabled: e.isDisabled || e.isReadonly,
          onMouseenter: (r) => a.hover = n,
          onMouseleave: t[0] || (t[0] = (r) => a.hover = 0),
          onClick: (r) => l.onButtonClick(n),
          onFocus: t[1] || (t[1] = (...r) => l.onFocus && l.onFocus(...r)),
          onBlur: t[2] || (t[2] = (...r) => l.onBlur && l.onBlur(...r)),
          onKeydown: t[3] || (t[3] = (...r) => l.onKeydown && l.onKeydown(...r)),
          type: "button",
          tabindex: n === 1 ? 0 : -1
        }, [
          n - 1 === ~~a.rating && a.rating - ~~a.rating ? (s(), u("i", {
            key: 0,
            class: f(["w-icon", `${i.icon} ${i.color}`]),
            role: "icon",
            "aria-hidden": "true",
            style: R(l.halfStarStyle)
          }, null, 6)) : p("", !0)
        ], 42, $l)
      ], 64))), 128))
    ]),
    _: 3
  }, 16, ["valid", "class"]);
}
const Il = {
  name: "w-rating",
  mixins: [E],
  props: {
    modelValue: {},
    max: { type: [Number, String], default: 5 },
    color: { type: String, default: "primary" },
    bgColor: { type: String },
    icon: { type: String, default: "wi-star" },
    xs: { type: Boolean },
    sm: { type: Boolean },
    md: { type: Boolean },
    lg: { type: Boolean },
    xl: { type: Boolean },
    noRipple: { type: Boolean },
    dark: { type: Boolean },
    light: { type: Boolean }
    // Props from mixin: name, disabled, readonly, required, validators.
    // Computed from mixin: inputName, isDisabled & isReadonly.
  },
  emits: ["input", "update:modelValue", "focus", "blur"],
  data() {
    return {
      rating: parseFloat(this.modelValue || 0),
      hover: 0,
      // The index (starts at 1) of the currently hovered button.
      hasFocus: 0,
      // The index (starts at 1) of the currently focused button.
      ripple: {
        start: !1,
        end: !1,
        timeout: null
      }
    };
  },
  computed: {
    size() {
      return this.xs && "xs" || this.sm && "sm" || this.lg && "lg" || this.xl && "xl" || "md";
    },
    classes() {
      return {
        "w-rating": !0,
        "w-rating--dark": this.dark,
        "w-rating--light": this.light,
        "w-rating--focus": this.hasFocus,
        "w-rating--hover": this.hover,
        "w-rating--disabled": this.isDisabled,
        "w-rating--readonly": this.isReadonly,
        "w-rating--ripple": this.ripple.start,
        "w-rating--rippled": this.ripple.end
      };
    },
    halfStarStyle() {
      return {
        width: this.hover <= ~~this.rating && `${(this.rating - ~~this.rating) * 100}%`
      };
    }
  },
  methods: {
    onButtonClick(e) {
      this.rating = e, this.$emit("update:modelValue", this.rating), this.$emit("input", this.rating), this.noRipple || (this.ripple.start = !0, this.ripple.timeout = setTimeout(() => {
        this.ripple.start = !1, this.ripple.end = !0, setTimeout(() => this.ripple.end = !1, 100);
      }, 700));
    },
    onFocus(e) {
      this.hasFocus = !0, this.$emit("focus", e);
    },
    onBlur(e) {
      this.hasFocus = !1, this.$emit("blur", e);
    },
    onKeydown(e) {
      if ([37, 38, 39, 40].includes(e.keyCode)) {
        [39, 40].includes(e.keyCode) ? this.rating <= this.max - 1 && this.rating++ : this.rating > 1 && this.rating--;
        const t = this.$el.querySelectorAll("button")[this.rating - 1];
        t && (t.focus(), t.click()), e.preventDefault();
      }
    },
    buttonClasses(e) {
      const t = e - 1 === ~~this.rating && this.rating - ~~this.rating, i = this.hover >= e || !t && this.hover === 0 && this.rating >= e;
      return {
        "w-rating__button--on": i,
        "w-rating__button--half": t,
        [this.icon]: !0,
        [`size--${this.size}`]: !0,
        [this.color]: i,
        [this.bgColor]: this.bgColor && !i
      };
    }
  },
  watch: {
    value(e) {
      this.rating = parseFloat(e);
    }
  }
}, Tl = /* @__PURE__ */ v(Il, [["render", Vl]]);
function Ll(e, t, i, o, a, l) {
  return s(), u(w, null, [
    y("div", S({
      class: ["w-scrollable", l.scrollableClasses],
      ref: "scrollable",
      onMouseenter: t[0] || (t[0] = (...n) => l.onMouseEnter && l.onMouseEnter(...n)),
      onMouseleave: t[1] || (t[1] = (...n) => l.onMouseLeave && l.onMouseLeave(...n)),
      onMousewheel: t[2] || (t[2] = (...n) => l.onMouseWheel && l.onMouseWheel(...n))
    }, e.$attrs, { style: l.scrollableStyles }), [
      c(e.$slots, "default")
    ], 16),
    y("div", {
      class: f(["w-scrollbar", l.scrollbarClasses]),
      ref: "track",
      onMousedown: t[3] || (t[3] = (...n) => l.onTrackMouseDown && l.onTrackMouseDown(...n))
    }, [
      y("div", {
        class: "w-scrollbar__thumb",
        ref: "thumb",
        style: R(l.thumbStyles)
      }, null, 4)
    ], 34)
  ], 64);
}
const Rl = {
  h: {
    direction: "horizontal",
    topOrLeft: "left",
    size: "width",
    offsetSize: "offsetWidth",
    maxSize: "max-width",
    scrollSize: "scrollWidth",
    clientXorY: "clientX",
    deltaXorY: "deltaX",
    scrollTopOrLeft: "scrollLeft"
  },
  v: {
    direction: "vertical",
    topOrLeft: "top",
    size: "height",
    offsetSize: "offsetHeight",
    maxSize: "max-height",
    scrollSize: "scrollHeight",
    clientXorY: "clientY",
    deltaXorY: "deltaY",
    scrollTopOrLeft: "scrollTop"
  }
}, Pl = {
  name: "w-scrollable",
  props: {
    color: { type: String, default: "primary" },
    bgColor: { type: String },
    width: { type: [Number, String] },
    height: { type: [Number, String] }
  },
  emits: [],
  data: () => ({
    mounted: !1,
    scrollable: {
      top: null,
      left: null,
      hovered: !1
    },
    scrollValuePercent: 0
  }),
  computed: {
    isHorizontal() {
      var e, t, i, o;
      return this.mounted ? (console.log("💂‍♂️", (e = this.$refs.scrollable) == null ? void 0 : e.scrollWidth, (t = this.$refs.scrollable) == null ? void 0 : t.offsetWidth), this.width && !this.height || ((i = this.$refs.scrollable) == null ? void 0 : i.scrollWidth) > ((o = this.$refs.scrollable) == null ? void 0 : o.offsetWidth)) : !1;
    },
    m() {
      return Rl[this.isHorizontal ? "h" : "v"];
    },
    scrollableClasses() {
      return {
        [`w-scrollable--${this.m.direction}`]: !0
      };
    },
    scrollbarClasses() {
      return {
        [`w-scrollbar--${this.m.direction}`]: !0
      };
    },
    thumbSizePercent() {
      var t;
      return this.mounted && (this[this.m.size] ?? this.$refs.scrollable[[this.m.offsetSize]]) * 100 / ((t = this.$refs.scrollable) == null ? void 0 : t[this.m.scrollSize]) || 0;
    },
    scrollableStyles() {
      return {
        [this.m.maxSize]: `${this[this.m.size]}px`
      };
    },
    thumbStyles() {
      let e = this.scrollValuePercent;
      return e = Math.max(0, Math.min(e, 100 - this.thumbSizePercent)), {
        [this.m.size]: `${this.thumbSizePercent}%`,
        [this.m.topOrLeft]: `${e}%`
      };
    }
  },
  methods: {
    onTrackMouseDown(e) {
      if (this.isDisabled || this.isReadonly || "ontouchstart" in window && e.type === "mousedown")
        return;
      const { top: t, left: i, width: o, height: a } = this.$refs.track.getBoundingClientRect();
      this.isHorizontal ? (this.$refs.track.width = o, this.$refs.track.left = i) : (this.$refs.track.height = a, this.$refs.track.top = t), this.dragging = !0, this.computeScroll(e.type === "touchstart" ? e.touches[0][this.m.clientXorY] : e[this.m.clientXorY]), this.scroll(), document.addEventListener(e.type === "touchstart" ? "touchmove" : "mousemove", this.onDrag), document.addEventListener(e.type === "touchstart" ? "touchend" : "mouseup", this.onMouseUp, { once: !0 });
    },
    onDrag(e) {
      this.computeScroll(e.type === "touchmove" ? e.touches[0][this.m.clientXorY] : e[this.m.clientXorY]), this.scroll();
    },
    onMouseUp(e) {
      this.dragging = !1, document.removeEventListener(e.type === "touchend" ? "touchmove" : "mousemove", this.onDrag), this.$refs.thumb && this.$refs.thumb.focus();
    },
    onMouseEnter() {
      this.scrollable.hovered = !0;
    },
    onMouseLeave() {
      this.scrollable.hovered = !1;
    },
    onResize(e) {
    },
    onMouseWheel(e) {
      this.scrollable.hovered && (this.scrollValuePercent <= 0 && e[this.m.deltaXorY] < 0 || this.scrollValuePercent >= 100 - this.thumbSizePercent && e[this.m.deltaXorY] > 0 || (e.preventDefault(), this.scrollValuePercent += e[this.m.deltaXorY] * 0.05, this.scrollValuePercent = Math.max(0, Math.min(this.scrollValuePercent, 100)), this.scroll()));
    },
    computeScroll(e) {
      const { top: t, left: i, width: o, height: a } = this.$refs.scrollable.getBoundingClientRect(), l = this.isHorizontal ? i : t, n = this.isHorizontal ? o : a;
      this.scrollValuePercent = Math.max(0, Math.min((e - l) / n * 100, 100));
    },
    scroll() {
      var e;
      this.$refs.scrollable[this.m.scrollTopOrLeft] = this.scrollValuePercent * ((e = this.$refs.scrollable) == null ? void 0 : e[this.m.scrollSize]) / 100, this.updateThumbPosition();
    },
    updateThumbPosition() {
      this.$refs.thumb.style[this.m.topOrLeft] = this.scrollValuePercent;
    }
  },
  mounted() {
    this.mounted = !0;
    const { top: e, left: t } = this.$refs.scrollable.getBoundingClientRect();
    this.scrollable.top = e, this.scrollable.left = t, this.$el.parentNode.style.position = "relative", this.$el.parentNode.style.padding = 0, window.addEventListener("resize", this.onResize);
  }
}, Ol = /* @__PURE__ */ v(Pl, [["render", Ll]]), xl = ["aria-expanded", "aria-owns", "aria-activedescendant"], zl = {
  key: 0,
  class: "w-select__selection-slot"
}, Ml = ["innerHTML"], El = ["value", "name"];
function Wl(e, t, i, o, a, l) {
  const n = $("w-icon"), r = $("w-list"), d = $("w-menu");
  return s(), b(I(e.formRegister ? "w-form-element" : "div"), S({ ref: "formEl" }, e.formRegister && { validators: e.validators, inputValue: l.selectionString, disabled: e.isDisabled, readonly: e.isReadonly, isFocused: e.isFocused }, {
    valid: e.valid,
    "onUpdate:valid": t[12] || (t[12] = (h) => e.valid = h),
    onReset: l.onReset,
    wrap: l.hasLabel && i.labelPosition !== "inside",
    class: l.classes
  }), {
    default: m(() => [
      i.labelPosition === "left" ? (s(), u(w, { key: 0 }, [
        e.$slots.default || i.label ? (s(), u("label", {
          key: 0,
          class: f(["w-select__label w-select__label--left w-form-el-shakable", e.labelClasses]),
          onClick: t[0] || (t[0] = (h) => e.$refs["selection-input"].click())
        }, [
          c(e.$slots, "default", {}, () => [
            B(C(i.label), 1)
          ])
        ], 2)) : p("", !0)
      ], 64)) : p("", !0),
      V(d, S({
        modelValue: e.showMenu,
        "onUpdate:modelValue": t[10] || (t[10] = (h) => e.showMenu = h),
        onClose: l.closeMenu,
        "menu-class": `w-select__menu ${i.menuClass || ""}`,
        transition: "slide-fade-down",
        "append-to": (i.menuProps || {}).appendTo !== void 0 ? (i.menuProps || {}).appendTo : void 0,
        "align-left": "",
        custom: "",
        "min-width": "activator"
      }, i.menuProps || {}), {
        activator: m(() => [
          y("div", {
            class: f(["w-select__selection-wrap", l.inputWrapClasses]),
            onClick: t[6] || (t[6] = (h) => !e.isDisabled && !e.isReadonly && l.onInputFieldClick()),
            role: "button",
            "aria-haspopup": "listbox",
            "aria-expanded": e.showMenu ? "true" : "false",
            "aria-owns": `w-select-menu--${e._.uid}`,
            "aria-activedescendant": `w-select-menu--${e._.uid}_item-1`
          }, [
            c(e.$slots, "icon-left", {}, () => [
              i.innerIconLeft ? (s(), b(n, {
                key: 0,
                class: "w-select__icon w-select__icon--inner-left",
                tag: "label",
                onClick: t[1] || (t[1] = (h) => e.$emit("click:inner-icon-left", h))
              }, {
                default: m(() => [
                  B(C(i.innerIconLeft), 1)
                ]),
                _: 1
              })) : p("", !0)
            ]),
            e.$slots.selection ? (s(), u("div", zl, [
              c(e.$slots, "selection", {
                item: i.multiple ? e.inputValue : e.inputValue[0]
              })
            ])) : p("", !0),
            y("div", S({
              class: "w-select__selection",
              ref: "selection-input",
              onFocus: t[2] || (t[2] = (h) => !e.isDisabled && !e.isReadonly && l.onFocus(h)),
              onBlur: t[3] || (t[3] = (...h) => l.onBlur && l.onBlur(...h)),
              onKeydown: t[4] || (t[4] = (h) => !e.isDisabled && !e.isReadonly && l.onKeydown(h))
            }, l.selectionAttributes, { innerHTML: l.selectionHtml }), null, 16, Ml),
            (s(!0), u(w, null, L(e.inputValue.length ? e.inputValue : [{}], (h, k) => (s(), u("input", {
              key: k,
              type: "hidden",
              value: h.value === void 0 ? "" : h.value.toString(),
              name: e.inputName + (i.multiple ? "[]" : "")
            }, null, 8, El))), 128)),
            i.labelPosition === "inside" && l.showLabelInside ? (s(), u(w, { key: 1 }, [
              e.$slots.default || i.label ? (s(), u("label", {
                key: 0,
                class: f(["w-select__label w-select__label--inside w-form-el-shakable", e.labelClasses])
              }, [
                c(e.$slots, "default", {}, () => [
                  B(C(i.label), 1)
                ])
              ], 2)) : p("", !0)
            ], 64)) : p("", !0),
            c(e.$slots, "icon-right", {}, () => [
              i.innerIconRight ? (s(), b(n, {
                key: 0,
                class: "w-select__icon w-select__icon--inner-right",
                tag: "label",
                onClick: t[5] || (t[5] = (h) => e.$emit("click:inner-icon-right", h))
              }, {
                default: m(() => [
                  B(C(i.innerIconRight), 1)
                ]),
                _: 1
              })) : p("", !0)
            ])
          ], 10, xl)
        ]),
        default: m(() => [
          V(r, {
            ref: "w-list",
            "model-value": e.inputValue,
            "onUpdate:modelValue": l.onInput,
            onItemClick: t[7] || (t[7] = (h) => e.$emit("item-click", h)),
            onItemSelect: l.onListItemSelect,
            onKeydown: l.onWListKeydown,
            "onKeydown:enter": t[8] || (t[8] = (h) => i.noUnselect && !i.multiple && l.closeMenu()),
            "onKeydown:escape": t[9] || (t[9] = (h) => e.showMenu && (e.showMenu = !1)),
            items: l.selectItems,
            multiple: i.multiple,
            checklist: i.checklist,
            "arrows-navigation": "",
            "return-object": "",
            "add-ids": `w-select-menu--${e._.uid}`,
            "no-unselect": i.noUnselect,
            "selection-color": i.selectionColor,
            "item-color-key": i.itemColorKey,
            role: "listbox",
            tabindex: "-1"
          }, Q({ _: 2 }, [
            L(i.items.length, (h) => ({
              name: `item.${h}`,
              fn: m(({ item: k, selected: _, index: g }) => [
                e.$slots[`item.${h}`] && e.$slots[`item.${h}`](k, _, g) ? c(e.$slots, `item.${h}`, {
                  key: 0,
                  item: k,
                  selected: _,
                  index: g
                }, () => [
                  B(C(k[i.itemLabelKey]), 1)
                ]) : c(e.$slots, "item", {
                  key: 1,
                  item: k,
                  selected: _,
                  index: g
                }, () => [
                  B(C(k[i.itemLabelKey]), 1)
                ])
              ])
            }))
          ]), 1032, ["model-value", "onUpdate:modelValue", "onItemSelect", "onKeydown", "items", "multiple", "checklist", "add-ids", "no-unselect", "selection-color", "item-color-key"])
        ]),
        _: 3
      }, 16, ["modelValue", "onClose", "menu-class", "append-to"]),
      i.labelPosition === "right" ? (s(), u(w, { key: 1 }, [
        e.$slots.default || i.label ? (s(), u("label", {
          key: 0,
          class: f(["w-select__label w-select__label--right w-form-el-shakable", e.labelClasses]),
          onClick: t[11] || (t[11] = (h) => e.$refs["selection-input"].click())
        }, [
          c(e.$slots, "default", {}, () => [
            B(C(i.label), 1)
          ])
        ], 2)) : p("", !0)
      ], 64)) : p("", !0)
    ]),
    _: 3
  }, 16, ["valid", "onReset", "wrap", "class"]);
}
const Kl = {
  name: "w-select",
  mixins: [E],
  props: {
    items: { type: Array, required: !0 },
    modelValue: {},
    // v-model on selected item if any.
    multiple: { type: Boolean },
    checklist: { type: Boolean },
    // the prop from w-list for checkboxes
    placeholder: { type: String },
    label: { type: String },
    labelPosition: { type: String, default: "inside" },
    innerIconLeft: { type: String },
    innerIconRight: { type: String, default: "wi-triangle-down" },
    // When label is inside, allows to move the label above on focus or when filled.
    staticLabel: { type: Boolean },
    itemLabelKey: { type: String, default: "label" },
    // Name of the label field.
    itemColorKey: { type: String, default: "color" },
    // Name of the color field.
    itemValueKey: { type: String, default: "value" },
    // Name of the value field.
    itemClass: { type: String },
    menuClass: { type: String },
    color: { type: String, default: "primary" },
    // Applies to all the items.
    bgColor: { type: String },
    // Applies to all the items.
    labelColor: { type: String, default: "primary" },
    selectionColor: { type: String, default: "primary" },
    // Applies to the selected items only.
    outline: { type: Boolean },
    round: { type: Boolean },
    shadow: { type: Boolean },
    tile: { type: Boolean },
    returnObject: { type: Boolean },
    // By default you can unselect a list item by re-selecting it.
    // Allow preventing that on single selection lists only.
    noUnselect: { type: Boolean },
    menuProps: { type: Object },
    // Allow passing down an object of props to the w-menu component.
    dark: { type: Boolean },
    light: { type: Boolean },
    fitToContent: { type: Boolean }
    // Props from mixin: name, disabled, readonly, required, tabindex, validators.
    // Computed from mixin: inputName, isDisabled & isReadonly.
  },
  emits: ["input", "update:modelValue", "focus", "blur", "item-click", "item-select", "click:inner-icon-left", "click:inner-icon-right"],
  data: () => ({
    // Selection is always an array (internally), but emits a single value if not multiple.
    // inputValue is always an array of objects that have a `value`.
    inputValue: [],
    showMenu: !1,
    menuMinWidth: 0,
    isFocused: !1,
    selectionWrapRef: void 0,
    // Lookup a select list item from typing the first characters.
    // If typing is too slow (> 1s), the lookup string is cleared.
    quickLookup: { string: "", timeout: null }
  }),
  computed: {
    // Check all the items and add a `value` if missing, containing either: value, label or index
    // in this order.
    selectItems() {
      return this.items.map((e, t) => {
        const i = { ...e };
        return i.value = i[this.itemValueKey] === void 0 ? i[this.itemLabelKey] || t : i[this.itemValueKey], i.index = t, i;
      });
    },
    hasLabel() {
      return this.label || this.$slots.default;
    },
    showLabelInside() {
      return !this.staticLabel || !this.inputValue.length && !this.placeholder;
    },
    selectionAttributes() {
      return {
        class: { "w-select__selection--placeholder": !this.$slots.selection && !this.selectionString && this.placeholder },
        disabled: this.isDisabled || null,
        readonly: !0,
        ariareadonly: "true",
        tabindex: this.tabindex ?? null,
        contenteditable: this.isDisabled || this.isReadonly ? "false" : "true"
      };
    },
    selectionString() {
      return this.inputValue.map(
        (e) => e[this.itemValueKey] !== void 0 ? e[this.itemLabelKey] : e[this.itemLabelKey] ?? e
      ).join(", ");
    },
    selectionHtml() {
      return this.inputValue.length ? this.$slots.selection ? "" : this.selectionString : this.placeholder || "";
    },
    classes() {
      return {
        "w-select": !0,
        "w-select--dark": this.dark,
        "w-select--light": this.light,
        "w-select--disabled": this.isDisabled,
        "w-select--fit-to-content": this.fitToContent,
        "w-select--readonly": this.isReadonly,
        [`w-select--${this.inputValue.length ? "filled" : "empty"}`]: !0,
        "w-select--focused": (this.isFocused || this.showMenu) && !this.isReadonly,
        "w-select--floating-label": this.hasLabel && this.labelPosition === "inside" && !this.staticLabel,
        "w-select--no-padding": !this.outline && !this.bgColor && !this.shadow && !this.round,
        "w-select--has-placeholder": this.placeholder,
        "w-select--inner-icon-left": this.innerIconLeft,
        "w-select--inner-icon-right": this.innerIconRight,
        "w-select--open": this.showMenu
      };
    },
    inputWrapClasses() {
      return {
        [this.valid === !1 ? "error" : this.color]: this.color || this.valid === !1,
        [`${this.bgColor}--bg`]: this.bgColor,
        "w-select__selection-wrap--round": this.round,
        "w-select__selection-wrap--tile": this.tile,
        // Box adds a padding on input. If there is a bgColor or shadow, a padding is needed.
        "w-select__selection-wrap--box": this.outline || this.bgColor || this.shadow,
        "w-select__selection-wrap--underline": !this.outline,
        "w-select__selection-wrap--shadow": this.shadow,
        "w-select__selection-wrap--no-padding": !this.outline && !this.bgColor && !this.shadow && !this.round
      };
    }
  },
  methods: {
    onFocus(e) {
      if (!this.isFocused)
        return this.isFocused = !0, this.$emit("focus", e), !1;
    },
    onBlur(e) {
      this.showMenu || (this.isFocused = !1, this.$emit("blur", e));
    },
    onKeydown(e) {
      if (!e.metaKey && !e.ctrlKey && e.keyCode !== 9 && e.preventDefault(), e.keyCode === 27 && this.showMenu)
        this.closeMenu();
      else if ([13, 32].includes(e.keyCode))
        this.openMenu();
      else if ([38, 40].includes(e.keyCode))
        if (this.multiple)
          this.openMenu();
        else {
          let { index: t } = this.inputValue[0] || {};
          const i = this.selectItems;
          if (t === void 0)
            t = e.keyCode === 38 ? i.length - 1 : 0;
          else {
            const a = e.keyCode === 38 ? -1 : 1;
            t = (t + i.length + a) % i.length;
          }
          let o = !1;
          if (i[t].disabled) {
            const a = e.keyCode === 38 ? -1 : 1;
            let l = (t + a + i.length) % i.length;
            const n = i.length;
            let r = 0;
            for (; r < n && i[l].disabled; )
              l = (l + i.length + a) % i.length, r++;
            r >= n && (o = !0), t = l;
          }
          o || this.onInput(i[t]);
        }
      else
        e.key.length === 1 && this.focusItemOnQuickLookup(e);
    },
    onWListKeydown(e) {
      e.key.length === 1 && this.focusItemOnQuickLookup(e);
    },
    focusItemOnQuickLookup(e) {
      var o, a, l;
      this.quickLookup.timeout && clearTimeout(this.quickLookup.timeout), this.quickLookup.timeout = setTimeout(() => this.quickLookup.string = "", 1e3), this.quickLookup.string += e.key;
      const t = new RegExp(`^${this.quickLookup.string}`, "i"), i = this.selectItems.findIndex(
        (n) => !n.disabled && n[this.itemLabelKey].match(t)
      ) + 1;
      if (i) {
        const n = `.w-list__item:nth-child(${i}) .w-list__item-label`;
        (l = (a = (o = this.$refs["w-list"]) == null ? void 0 : o.$el) == null ? void 0 : a.querySelector(n)) == null || l.focus();
      }
    },
    // The items are given by the w-list component.
    onInput(e) {
      this.inputValue = e === null ? [] : this.multiple ? e : [e], e = this.inputValue.map((i) => this.returnObject ? this.items[i.index] : i.value);
      const t = this.multiple ? e : e[0];
      this.$emit("update:modelValue", t), this.$emit("input", t);
    },
    onInputFieldClick() {
      this.showMenu ? this.showMenu = !1 : this.openMenu();
    },
    // Called on item selection: on click & `enter` keydown.
    onListItemSelect(e) {
      this.$emit("item-select", e), this.multiple || (this.showMenu = !1);
    },
    onReset() {
      this.inputValue = [];
      const e = this.multiple ? [] : null;
      this.$emit("update:modelValue", e), this.$emit("input", e);
    },
    // Convert the received items selection to array if it is a unique value.
    // Also accept objects if returnObject is true.
    // In any case, always end up with an array.
    checkSelection(e) {
      e = Array.isArray(e) ? e : e !== void 0 ? [e] : [];
      const t = this.selectItems.map((i) => i.value);
      return e.map((i) => {
        let o = i;
        return i && typeof i == "object" && (o = i[this.itemValueKey] ?? i[this.itemLabelKey] ?? i), this.selectItems[t.indexOf(o)];
      }).filter((i) => i !== void 0);
    },
    // Open the dropdown selection list.
    openMenu() {
      this.showMenu = !0, setTimeout(() => {
        var t;
        const e = this.inputValue.length ? this.inputValue[0].index : 0;
        (t = this.$refs["w-list"].$el.querySelector(`#w-select-menu--${this._.uid}_item-${e + 1}`)) == null || t.focus();
      }, 100);
    },
    // Close the dropdown selection list.
    closeMenu() {
      var e;
      ((e = this.menuProps) == null ? void 0 : e.hideOnMenuClick) !== !1 && (this.showMenu = !1, setTimeout(() => {
        var t;
        return (t = this.$refs["selection-input"]) == null ? void 0 : t.focus();
      }, 50));
    }
  },
  created() {
    this.inputValue = this.checkSelection(this.modelValue);
  },
  watch: {
    modelValue(e) {
      e !== this.inputValue && (this.inputValue = this.checkSelection(e));
    },
    items() {
      this.inputValue = this.checkSelection(this.modelValue);
    }
  }
}, Al = /* @__PURE__ */ v(Kl, [["render", Wl]]), Nl = ["for"], Dl = ["for", "innerHTML"], Hl = { class: "w-slider__track-wrap" }, Fl = ["aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-readonly"], jl = ["id", "name", "model-value", "disabled", "readonly", "aria-readonly", "tabindex"], Ul = ["for"], ql = { key: 0 }, Xl = {
  key: 0,
  class: "w-slider__step-labels"
}, Yl = ["onClick"], Gl = ["for"], Jl = ["for", "innerHTML"];
function Ql(e, t, i, o, a, l) {
  return s(), b(I(e.formRegister ? "w-form-element" : "div"), S({ ref: "formEl" }, e.formRegister && { validators: e.validators, inputValue: e.rangeValueScaled, disabled: e.isDisabled, readonly: e.isReadonly }, {
    valid: e.valid,
    "onUpdate:valid": t[8] || (t[8] = (n) => e.valid = n),
    onReset: t[9] || (t[9] = (n) => {
      e.rangeValuePercent = 0, l.updateRangeValueScaled();
    }),
    wrap: e.formRegister || null,
    class: l.wrapperClasses
  }), {
    default: m(() => [
      e.$slots["label-left"] ? (s(), u("label", {
        key: 0,
        class: f(["w-slider__label w-slider__label--left w-form-el-shakable", e.labelClasses]),
        for: `button--${e._.uid}`
      }, [
        c(e.$slots, "label-left")
      ], 10, Nl)) : i.labelLeft ? (s(), u("label", {
        key: 1,
        class: f(["w-slider__label w-slider__label--left w-form-el-shakable", e.labelClasses]),
        for: `button--${e._.uid}`,
        innerHTML: i.labelLeft
      }, null, 10, Dl)) : p("", !0),
      y("div", Hl, [
        y("div", {
          class: f(["w-slider__track", l.trackClasses]),
          ref: "track",
          onMousedown: t[4] || (t[4] = (...n) => l.onTrackMouseDown && l.onTrackMouseDown(...n)),
          onTouchstart: t[5] || (t[5] = (...n) => l.onTrackMouseDown && l.onTrackMouseDown(...n)),
          role: "slider",
          "aria-label": "Slider",
          "aria-valuemin": l.minVal,
          "aria-valuemax": l.maxVal,
          "aria-valuenow": e.rangeValueScaled,
          "aria-readonly": e.isReadonly ? "true" : "false",
          "aria-orientation": "horizontal"
        }, [
          y("div", {
            class: f(["w-slider__range", l.rangeClasses]),
            style: R(l.rangeStyles)
          }, null, 6),
          y("div", {
            class: "w-slider__thumb",
            style: R(l.thumbStyles)
          }, [
            y("button", {
              class: f(["w-slider__thumb-button", [i.color]]),
              ref: "thumb",
              id: `button--${e._.uid}`,
              name: e.inputName,
              "model-value": e.rangeValueScaled,
              disabled: e.isDisabled || null,
              readonly: e.isReadonly || null,
              "aria-readonly": e.isReadonly ? "true" : "false",
              tabindex: e.isDisabled || e.isReadonly ? -1 : null,
              onKeydown: [
                t[0] || (t[0] = W((n) => l.onKeyDown(n, -1), ["left"])),
                t[1] || (t[1] = W((n) => l.onKeyDown(n, 1), ["right"]))
              ],
              onFocus: t[2] || (t[2] = (n) => e.$emit("focus", n)),
              onClick: t[3] || (t[3] = z(() => {
              }, ["prevent"]))
            }, null, 42, jl),
            i.thumbLabel ? (s(), u("label", {
              key: 0,
              class: f(["w-slider__thumb-label", l.thumbClasses]),
              for: `button--${e._.uid}`
            }, [
              i.thumbLabel === "droplet" ? (s(), u("div", ql, [
                c(e.$slots, "label", { value: e.rangeValueScaled }, () => [
                  B(C(~~e.rangeValueScaled), 1)
                ])
              ])) : c(e.$slots, "label", {
                key: 1,
                value: e.rangeValueScaled
              }, () => [
                B(C(~~e.rangeValueScaled), 1)
              ])
            ], 10, Ul)) : p("", !0)
          ], 4)
        ], 42, Fl),
        i.stepLabels && i.step ? (s(), u("div", Xl, [
          y("div", {
            class: "w-slider__step-label",
            onClick: t[6] || (t[6] = (n) => l.onStepLabelClick(0))
          }, C(this.minVal), 1),
          (s(!0), u(w, null, L(~~l.numberOfSteps, (n) => (s(), u("div", {
            class: "w-slider__step-label",
            key: n,
            onClick: (r) => l.onStepLabelClick(n * (100 / l.numberOfSteps)),
            style: R(`left: ${n * (100 / l.numberOfSteps)}%`)
          }, C(l.percentToScaled(n * (100 / l.numberOfSteps))), 13, Yl))), 128)),
          ~~l.numberOfSteps !== l.numberOfSteps ? (s(), u("div", {
            key: 0,
            class: "w-slider__step-label",
            onClick: t[7] || (t[7] = (n) => l.onStepLabelClick(100)),
            style: { left: "100%" }
          }, C(this.maxVal), 1)) : p("", !0)
        ])) : p("", !0)
      ]),
      e.$slots["label-right"] ? (s(), u("label", {
        key: 2,
        class: f(["w-slider__label w-slider__label--right w-form-el-shakable", e.labelClasses]),
        for: `button--${e._.uid}`
      }, [
        c(e.$slots, "label-right")
      ], 10, Gl)) : i.labelRight ? (s(), u("label", {
        key: 3,
        class: f(["w-slider__label w-slider__label--right w-form-el-shakable", e.labelClasses]),
        for: `button--${e._.uid}`,
        innerHTML: i.labelRight
      }, null, 10, Jl)) : p("", !0)
    ]),
    _: 3
  }, 16, ["valid", "wrap", "class"]);
}
const Zl = {
  name: "w-slider",
  mixins: [E],
  props: {
    modelValue: { type: Number, default: 0 },
    color: { type: String, default: "primary" },
    bgColor: { type: String },
    labelColor: { type: String, default: "primary" },
    stepLabels: { type: [Boolean, Array] },
    thumbLabel: { type: [Boolean, String] },
    // One of true, false, 'droplet'.
    thumbLabelClass: { type: String },
    trackClass: { type: String },
    rangeClass: { type: String },
    min: { type: [Number, String], default: 0 },
    max: { type: [Number, String], default: 100 },
    step: { type: [Number, String] },
    labelLeft: { type: String },
    labelRight: { type: String },
    dark: { type: Boolean },
    light: { type: Boolean }
    // Props from mixin: name, disabled, readonly, required, validators.
    // Computed from mixin: inputName, isDisabled & isReadonly.
  },
  emits: ["input", "update:modelValue", "focus"],
  data: () => ({
    track: {
      el: null,
      left: 0,
      width: 0
    },
    dragging: !1,
    rangeValuePercent: 0,
    rangeValueScaled: 0
  }),
  computed: {
    minVal() {
      return parseFloat(this.min);
    },
    maxVal() {
      return parseFloat(this.max);
    },
    stepValPercent() {
      return Math.min(parseFloat(this.step), this.scaledRange) / this.scaledRange * 100;
    },
    // Lighten the maths while dragging by caching some of the maths - it's already that!
    scaledRange() {
      return this.maxVal - this.minVal;
    },
    numberOfSteps() {
      return 100 / this.stepValPercent;
    },
    rangeStyles() {
      return {
        width: `${this.rangeValuePercent}%`
      };
    },
    thumbStyles() {
      return {
        left: `${this.rangeValuePercent}%`
      };
    },
    rangeClasses() {
      return {
        [`${this.color}--bg`]: this.color,
        [this.rangeClass]: this.rangeClass || null
      };
    },
    trackClasses() {
      return {
        [`${this.bgColor}--bg`]: this.bgColor,
        [this.trackClass]: this.trackClass || null
      };
    },
    thumbClasses() {
      return {
        [this.thumbLabelClass]: this.thumbLabelClass || null,
        "w-slider__thumb-label--droplet": this.thumbLabel === "droplet"
      };
    },
    wrapperClasses() {
      return {
        "w-slider": !0,
        "w-slider--dark": this.dark,
        "w-slider--light": this.light,
        "w-slider--dragging": this.dragging,
        "w-slider--disabled": this.isDisabled,
        "w-slider--readonly": this.isReadonly,
        "w-slider--has-step-labels": this.step && this.stepLabels
      };
    }
  },
  methods: {
    scaledToPercent(e) {
      return Math.max(0, Math.min((e - this.minVal) / this.scaledRange * 100, 100));
    },
    percentToScaled(e) {
      return Math.round((e / 100 * this.scaledRange + this.minVal) * 100) / 100;
    },
    onTrackMouseDown(e) {
      if (this.isDisabled || this.isReadonly || "ontouchstart" in window && e.type === "mousedown")
        return;
      const { left: t, width: i } = this.track.el.getBoundingClientRect();
      this.track.width = i, this.track.left = t, this.dragging = !0, this.updateRange(e.type === "touchstart" ? e.touches[0].clientX : e.clientX), document.addEventListener(e.type === "touchstart" ? "touchmove" : "mousemove", this.onDrag), document.addEventListener(e.type === "touchstart" ? "touchend" : "mouseup", this.onMouseUp, { once: !0 });
    },
    onDrag(e) {
      this.updateRange(e.type === "touchmove" ? e.touches[0].clientX : e.clientX);
    },
    onMouseUp(e) {
      this.dragging = !1, document.removeEventListener(e.type === "touchend" ? "touchmove" : "mousemove", this.onDrag), this.$refs.thumb && this.$refs.thumb.focus();
    },
    onStepLabelClick(e) {
      this.rangeValuePercent = e, this.updateRangeValueScaled();
    },
    onKeyDown(e, t) {
      this.isDisabled || this.isReadonly || (this.rangeValuePercent += t * (e.shiftKey ? 5 : 1) * (this.stepValPercent || 1), this.rangeValuePercent = Math.max(0, Math.min(this.rangeValuePercent, 100)), this.updateRangeValueScaled());
    },
    updateRange(e) {
      if (this.rangeValuePercent = Math.max(0, Math.min((e - this.track.left) / this.track.width * 100, 100)), this.step) {
        const t = this.rangeValuePercent + this.stepValPercent / 2;
        this.rangeValuePercent = t - t % this.stepValPercent;
      }
      this.updateRangeValueScaled();
    },
    updateRangeValueScaled() {
      this.rangeValueScaled = this.percentToScaled(this.rangeValuePercent), this.$emit("update:modelValue", this.rangeValueScaled), this.$emit("input", this.rangeValueScaled);
    }
  },
  beforeMount() {
    this.$nextTick(() => {
      this.track.el = this.$refs.track, this.rangeValueScaled = this.modelValue, this.rangeValuePercent = this.scaledToPercent(this.modelValue);
    });
  },
  watch: {
    modelValue(e) {
      this.rangeValueScaled !== e && (this.rangeValueScaled = e, this.rangeValuePercent = this.scaledToPercent(e));
    }
  }
}, es = /* @__PURE__ */ v(Zl, [["render", Ql]]), ts = { key: 0 };
function is(e, t, i, o, a, l) {
  return i.modelValue || i.modelValue === void 0 ? (s(), u("div", {
    key: 0,
    class: f(["w-spinner", l.classes]),
    style: R(l.styles)
  }, [
    l.isThreeDots ? (s(), u("span", ts)) : p("", !0)
  ], 6)) : p("", !0);
}
const ls = {
  name: "w-spinner",
  props: {
    modelValue: {},
    color: { type: String, default: "primary" },
    xs: { type: Boolean },
    sm: { type: Boolean },
    md: { type: Boolean },
    lg: { type: Boolean },
    xl: { type: Boolean },
    size: { type: [Number, String] },
    bounce: { type: Boolean },
    fade: { type: Boolean }
  },
  emits: [],
  computed: {
    isThreeDots() {
      return !this.bounce && !this.fade;
    },
    forcedSize() {
      return this.size && (isNaN(this.size) ? this.size : `${this.size}px`);
    },
    presetSize() {
      return this.xs && "xs" || this.sm && "sm" || this.md && "md" || this.lg && "lg" || this.xl && "xl" || null;
    },
    styles() {
      return this.forcedSize && `font-size: ${this.forcedSize}` || null;
    },
    classes() {
      return {
        [this.color]: this.color,
        [`size--${this.presetSize}`]: this.presetSize && !this.forcedSize,
        "w-spinner--bounce": this.bounce,
        "w-spinner--fade": this.fade,
        "w-spinner--three-dots": this.isThreeDots
      };
    }
  }
}, ss = /* @__PURE__ */ v(ls, [["render", is]]);
function os(e, t, i, o, a, l) {
  return s(), u("div", {
    class: f(["w-steps", l.classes])
  }, null, 2);
}
const as = {
  name: "w-steps",
  props: {
    dark: { type: Boolean },
    light: { type: Boolean }
  },
  emits: [],
  data: () => ({}),
  computed: {
    classes() {
      return {
        "w-steps--dark": this.dark,
        "w-steps--light": this.light
      };
    }
  }
}, ns = /* @__PURE__ */ v(as, [["render", os]]), rs = ["id", "name", "checked", "disabled", "readonly", "aria-readonly", "required", "tabindex", "aria-checked"], ds = ["for"], us = {
  key: 0,
  class: "w-switch__track"
}, hs = {
  key: 1,
  class: "w-switch__thumb"
}, cs = ["for"];
function ps(e, t, i, o, a, l) {
  const n = $("w-progress");
  return s(), b(I(e.formRegister ? "w-form-element" : "div"), S({ ref: "formEl" }, e.formRegister && { validators: e.validators, inputValue: a.isOn, disabled: e.isDisabled, readonly: e.isReadonly }, {
    valid: e.valid,
    "onUpdate:valid": t[3] || (t[3] = (r) => e.valid = r),
    onReset: t[4] || (t[4] = (r) => {
      e.$emit("update:modelValue", a.isOn = null), e.$emit("input", null);
    }),
    class: l.classes
  }), {
    default: m(() => [
      y("input", {
        ref: "input",
        id: `w-switch--${e._.uid}`,
        type: "checkbox",
        name: e.inputName,
        checked: a.isOn,
        disabled: e.isDisabled || e.isReadonly || null,
        readonly: e.isReadonly || null,
        "aria-readonly": e.isReadonly ? "true" : "false",
        required: e.required || null,
        tabindex: e.tabindex || null,
        onChange: t[0] || (t[0] = (r) => l.onInput()),
        onFocus: t[1] || (t[1] = (r) => e.$emit("focus", r)),
        "aria-checked": a.isOn || "false",
        role: "switch"
      }, null, 40, rs),
      l.hasLabel && i.labelOnLeft ? (s(), u(w, { key: 0 }, [
        e.$slots.default || i.label ? (s(), u("label", {
          key: 0,
          class: f(["w-switch__label w-switch__label--left w-form-el-shakable", e.labelClasses]),
          for: `w-switch--${e._.uid}`
        }, [
          c(e.$slots, "default", {}, () => [
            B(C(i.label), 1)
          ])
        ], 10, ds)) : p("", !0)
      ], 64)) : p("", !0),
      y("div", S({
        class: "w-switch__input",
        onClick: t[2] || (t[2] = (r) => {
          e.$refs.input.focus(), e.$refs.input.click();
        })
      }, M(e.$attrs, !0), { class: l.inputClasses }), [
        e.$slots.track ? (s(), u("div", us, [
          c(e.$slots, "track")
        ])) : p("", !0),
        e.$slots.thumb || i.loading ? (s(), u("div", hs, [
          i.loading ? (s(), b(n, S({
            key: 0,
            circle: "",
            color: "inherit"
          }, typeof i.loading == "number" && { "model-value": i.loading }), null, 16)) : c(e.$slots, "thumb", { key: 1 })
        ])) : p("", !0)
      ], 16),
      l.hasLabel && !i.labelOnLeft ? (s(), u(w, { key: 1 }, [
        e.$slots.default || i.label ? (s(), u("label", {
          key: 0,
          class: f(["w-switch__label w-switch__label--right w-form-el-shakable", e.labelClasses]),
          for: `w-switch--${e._.uid}`
        }, [
          c(e.$slots, "default", {}, () => [
            B(C(i.label), 1)
          ])
        ], 10, cs)) : p("", !0)
      ], 64)) : p("", !0)
    ]),
    _: 3
  }, 16, ["valid", "class"]);
}
const fs = {
  name: "w-switch",
  mixins: [E],
  props: {
    modelValue: { default: !1 },
    // v-model.
    label: { type: String, default: "" },
    labelOnLeft: { type: Boolean },
    color: { type: String, default: "primary" },
    labelColor: { type: String, default: "primary" },
    thin: { type: Boolean },
    noRipple: { type: Boolean },
    loading: { type: [Boolean, Number], default: !1 },
    dark: { type: Boolean },
    light: { type: Boolean }
    // Props from mixin: name, disabled, readonly, required, tabindex, validators.
    // Computed from mixin: inputName, isDisabled & isReadonly.
  },
  emits: ["input", "update:modelValue", "focus"],
  data() {
    return {
      isOn: this.modelValue,
      ripple: {
        start: !1,
        end: !1,
        timeout: null
      }
    };
  },
  computed: {
    hasLabel() {
      return this.label || this.$slots.default;
    },
    classes() {
      return {
        [`w-switch w-switch--${this.isOn ? "on" : "off"}`]: !0,
        "w-switch--thin": this.thin,
        "w-switch--disabled": this.isDisabled,
        "w-switch--readonly": this.isReadonly,
        "w-switch--ripple": this.ripple.start,
        "w-switch--custom-thumb": this.$slots.thumb,
        "w-switch--custom-track": this.$slots.track,
        "w-switch--loading": this.loading,
        "w-switch--rippled": this.ripple.end,
        "w-switch--dark": this.dark,
        "w-switch--light": this.light
      };
    },
    inputClasses() {
      const e = this.hasLabel && this.labelOnLeft ? "l" : "r";
      return [
        this.color,
        this.hasLabel ? this.thin ? `m${e}3` : `m${e}2` : ""
      ];
    }
  },
  methods: {
    onInput() {
      this.isOn = !this.isOn, this.$emit("update:modelValue", this.isOn), this.$emit("input", this.isOn), this.noRipple || (this.isOn ? (this.ripple.start = !0, this.ripple.timeout = setTimeout(() => {
        this.ripple.start = !1, this.ripple.end = !0, setTimeout(() => this.ripple.end = !1, 100);
      }, 700)) : (this.ripple.start = !1, clearTimeout(this.ripple.timeout)));
    }
  },
  watch: {
    modelValue(e) {
      this.isOn = e;
    }
  }
}, ms = /* @__PURE__ */ v(fs, [["render", ps]]), gs = { class: "w-tabs__content" };
function bs(e, t, i, o, a, l) {
  return s(), u("div", gs, [
    c(e.$slots, "default", { item: i.item })
  ]);
}
const ys = {
  name: "tab-content",
  // Keep-alive include/exclude mechanism is component-name-based.
  props: { item: Object }
}, ws = /* @__PURE__ */ v(ys, [["render", bs]]), ks = ["onClick", "onFocus", "tabindex", "onKeypress", "aria-selected"], vs = ["innerHTML"], Cs = {
  key: 0,
  class: "w-tabs__bar-extra"
}, Ss = {
  key: 0,
  class: "w-tabs__content-wrap"
}, Bs = ["innerHTML"], _s = ["innerHTML"];
function $s(e, t, i, o, a, l) {
  const n = $("tab-content");
  return s(), u("div", {
    class: f(["w-tabs", l.tabsClasses])
  }, [
    y("div", {
      class: f(["w-tabs__bar", l.tabsBarClasses]),
      ref: "tabs-bar"
    }, [
      (s(!0), u(w, null, L(e.tabs, (r, d) => (s(), u("div", {
        class: f(["w-tabs__bar-item", l.barItemClasses(r)]),
        key: d,
        onClick: (h) => !r._disabled && r._uid !== e.activeTabUid && l.openTab(r._uid),
        onFocus: (h) => e.$emit("focus", l.getOriginalItem(r)),
        tabindex: !r._disabled && 0,
        onKeypress: W((h) => !r._disabled && l.openTab(r._uid), ["enter"]),
        "aria-selected": r._uid === e.activeTabUid ? "true" : "false",
        role: "tab"
      }, [
        e.$slots[`item-title.${r.id || d + 1}`] ? c(e.$slots, `item-title.${r.id || d + 1}`, {
          key: 0,
          item: l.getOriginalItem(r),
          index: d + 1,
          active: r._uid === e.activeTabUid
        }) : c(e.$slots, "item-title", {
          key: 1,
          item: l.getOriginalItem(r),
          index: d + 1,
          active: r._uid === e.activeTabUid
        }, () => [
          y("div", {
            innerHTML: r[i.itemTitleKey]
          }, null, 8, vs)
        ])
      ], 42, ks))), 128)),
      e.$slots["tabs-bar-extra"] ? (s(), u("div", Cs, [
        c(e.$slots, "tabs-bar-extra")
      ])) : p("", !0),
      !i.noSlider && !i.card ? (s(), u("div", {
        key: 1,
        class: f(["w-tabs__slider", i.sliderColor]),
        style: R(l.sliderStyles)
      }, null, 6)) : p("", !0)
    ], 2),
    e.tabs.length ? (s(), u("div", Ss, [
      i.keepInDom ? (s(), b(oe, {
        key: 0,
        name: l.transitionName
      }, {
        default: m(() => [
          (s(!0), u(w, null, L(e.tabs, (r, d) => A((s(), b(n, {
            key: r._uid,
            item: r,
            class: f(i.contentClass)
          }, {
            default: m(() => [
              e.$slots[`item-content.${r._index + 1}`] ? c(e.$slots, `item-content.${r._index + 1}`, {
                key: 0,
                item: l.getOriginalItem(r),
                index: r._index + 1,
                active: r._index === l.activeTab._index
              }) : c(e.$slots, "item-content", {
                key: 1,
                item: l.getOriginalItem(r),
                index: r._index + 1,
                active: r._index === l.activeTab._index
              }, () => [
                r[i.itemContentKey] ? (s(), u("div", {
                  key: 0,
                  innerHTML: r[i.itemContentKey]
                }, null, 8, Bs)) : p("", !0)
              ])
            ]),
            _: 2
          }, 1032, ["item", "class"])), [
            [ae, r._uid === l.activeTab._uid]
          ])), 128))
        ]),
        _: 3
      }, 8, ["name"])) : (s(), b(O, {
        key: 1,
        name: l.transitionName,
        mode: l.transitionMode
      }, {
        default: m(() => [
          (s(), b(Ve, {
            exclude: i.keepAlive ? "" : "tab-content"
          }, [
            (s(), b(n, {
              key: e.activeTabUid,
              item: l.activeTab,
              class: f(i.contentClass)
            }, {
              default: m(({ item: r }) => [
                r ? (s(), u(w, { key: 0 }, [
                  e.$slots[`item-content.${r._index + 1}`] ? c(e.$slots, `item-content.${r._index + 1}`, {
                    key: 0,
                    item: l.getOriginalItem(r),
                    index: r._index + 1,
                    active: r._uid === e.activeTabUid
                  }) : c(e.$slots, "item-content", {
                    key: 1,
                    item: l.getOriginalItem(r),
                    index: r._index + 1,
                    active: r._uid === e.activeTabUid
                  }, () => [
                    r[i.itemContentKey] ? (s(), u("div", {
                      key: 0,
                      innerHTML: r[i.itemContentKey]
                    }, null, 8, _s)) : p("", !0)
                  ])
                ], 64)) : p("", !0)
              ]),
              _: 3
            }, 8, ["item", "class"]))
          ], 1032, ["exclude"]))
        ]),
        _: 3
      }, 8, ["name", "mode"]))
    ])) : p("", !0)
  ], 2);
}
let fe = 0;
const Vs = {
  name: "w-tabs",
  props: {
    modelValue: { type: [Number, String] },
    color: { type: String },
    bgColor: { type: String },
    items: { type: [Array, Number] },
    itemIdKey: { type: String, default: "id" },
    itemTitleKey: { type: String, default: "title" },
    itemContentKey: { type: String, default: "content" },
    titleClass: { type: String },
    activeClass: { type: String, default: "primary" },
    noSlider: { type: Boolean },
    pillSlider: { type: Boolean },
    sliderColor: { type: String, default: "primary" },
    contentClass: { type: String },
    transition: { type: [String, Boolean], default: "" },
    fillBar: { type: Boolean },
    center: { type: Boolean },
    right: { type: Boolean },
    card: { type: Boolean },
    dark: { type: Boolean },
    light: { type: Boolean },
    keepAlive: { type: Boolean, default: !0 },
    keepInDom: { type: Boolean, default: !1 }
  },
  components: { TabContent: ws },
  emits: ["input", "update:modelValue", "focus"],
  data: () => ({
    tabs: [],
    activeTabEl: null,
    activeTabUid: null,
    activeTabIndex: 0,
    prevTabIndex: -1,
    // To detect transition direction.
    slider: {
      left: 0,
      width: 0
    },
    init: !0
  }),
  computed: {
    transitionName() {
      return this.transition === !1 ? "" : this.transition || `w-tabs-slide-${this.direction}`;
    },
    transitionMode() {
      return ["w-tabs-slide-left", "w-tabs-slide-right"].includes(this.transitionName) ? "" : "out-in";
    },
    direction() {
      return this.activeTab._index < this.prevTabIndex ? "right" : "left";
    },
    activeTab() {
      return this.tabsByUid[this.activeTabUid] || this.tabs[0] || {};
    },
    // An object indexing the tabs by their uid.
    tabsByUid() {
      return this.tabs.reduce((e, t) => (e[t._uid] = t) && e, {});
    },
    tabsClasses() {
      return {
        "w-tabs--card": this.card,
        "w-tabs--no-slider": this.noSlider,
        "w-tabs--pill-slider": this.pillSlider,
        "w-tabs--fill-bar": this.fillBar,
        "w-tabs--init": this.init,
        "w-tabs--dark": this.dark,
        "w-tabs--light": this.light
      };
    },
    tabsBarClasses() {
      return {
        "w-tabs__bar--right": this.right,
        "w-tabs__bar--center": this.center
      };
    },
    sliderStyles() {
      return {
        left: this.slider.left,
        width: this.slider.width
      };
    }
  },
  methods: {
    // Adding a tab in the list.
    addTab(e) {
      (e[this.itemIdKey] ?? e._uid ?? !1) || (e._uid = +`${this._.uid}${++fe}`), this.tabs.push({
        _uid: e[this.itemIdKey] ?? e._uid,
        _index: this.tabs.length,
        ...e,
        _disabled: !!e.disabled
      });
    },
    refreshTabs() {
      let e = this.items;
      typeof e == "number" && (e = Array(e).fill().map((t, i) => this.tabs[i] || {})), this.tabs = e.map((t, i) => ((t[this.itemIdKey] ?? t._uid ?? !1) || (t._uid = +`${this._.uid}${++fe}`), {
        ...t,
        _uid: t[this.itemIdKey] ?? t._uid,
        _index: i,
        _disabled: !!t.disabled
      }));
    },
    reopenTheActiveTab() {
      var t, i, o;
      if (this.tabs.length === 1)
        return this.openTab(this.tabs[0]._uid);
      let e = (t = this.tabsByUid[this.activeTabUid]) == null ? void 0 : t._uid;
      e || (e = (i = this.tabs[this.activeTabIndex]) == null ? void 0 : i._uid), e || (e = (o = this.tabs[Math.max(this.activeTabIndex - 1, this.tabs.length - 1)]) == null ? void 0 : o._uid), e && this.openTab(e);
    },
    onResize() {
      this.updateSlider(!1);
    },
    barItemClasses(e) {
      const t = e._index === this.activeTabIndex;
      return {
        [`${this.bgColor}--bg`]: this.bgColor,
        [this.color]: this.color && !e._disabled && !(this.activeClass && t),
        [`w-tabs__bar-item--active ${this.activeClass}`]: t,
        "w-tabs__bar-item--disabled": e._disabled,
        [this.titleClass]: this.titleClass
      };
    },
    // Switching tabs.
    openTab(e) {
      this.prevTabIndex = this.activeTabIndex;
      const t = this.tabsByUid[e];
      this.activeTabIndex = t._index, this.activeTabUid = t._uid, this.$emit("update:modelValue", t._index), this.$emit("input", t._index), this.noSlider || this.$nextTick(this.updateSlider);
    },
    // Updates the slider position.
    updateSlider(e = !0) {
      if (e) {
        const t = this.$refs["tabs-bar"];
        this.activeTabEl = t && t.querySelector(".w-tabs__bar-item--active");
      }
      if (!this.fillBar && this.activeTabEl) {
        const { left: t, width: i } = this.activeTabEl.getBoundingClientRect(), o = this.activeTabEl.parentNode, { left: a } = o.getBoundingClientRect(), { borderLeftWidth: l } = getComputedStyle(o);
        this.slider.left = `${t - a - parseInt(l) + o.scrollLeft}px`, this.slider.width = `${i}px`;
      } else
        this.slider.left = `${this.activeTab._index * 100 / this.tabs.length}%`, this.slider.width = `${100 / this.tabs.length}%`;
    },
    updateActiveTab(e) {
      var t, i;
      typeof e == "string" ? e = ~~e : (isNaN(e) || e < 0) && (e = 0), (t = this.tabs[e]) != null && t._uid && (this.openTab((i = this.tabs[e]) == null ? void 0 : i._uid), this.$nextTick(() => {
        const o = this.$refs["tabs-bar"];
        this.activeTabEl = o && o.querySelector(`.w-tabs__bar-item:nth-child(${e + 1})`), this.activeTabEl && this.activeTabEl.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
      }));
    },
    // Return the original item (so there is no `_index`, etc.).
    getOriginalItem(e) {
      return this.items[e._index] || {};
    }
  },
  beforeMount() {
    this.tabs = [], (typeof this.items == "number" ? Array(this.items).fill().map(Object) : this.items).forEach(this.addTab), (this.modelValue ?? !1) && this.updateActiveTab(this.modelValue), this.$nextTick(() => {
      this.updateSlider(), setTimeout(() => this.init = !1, 0);
    }), this.noSlider || window.addEventListener("resize", this.onResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },
  watch: {
    modelValue(e) {
      e !== this.activeTabIndex && this.updateActiveTab(e);
    },
    items: {
      handler() {
        this.refreshTabs(), this.tabs.length && this.reopenTheActiveTab(), this.noSlider || this.$nextTick(this.updateSlider);
      },
      deep: !0
    },
    fillBar() {
      this.noSlider || this.$nextTick(this.updateSlider);
    },
    noSlider(e) {
      e ? window.removeEventListener("resize", this.onResize) : (this.updateSlider(), window.addEventListener("resize", this.onResize));
    }
  }
}, Is = /* @__PURE__ */ v(Vs, [["render", $s]]), Ts = { class: "w-table__scroll-wrap" }, Ls = { ref: "colgroup" }, Rs = ["width"], Ps = { key: 0 }, Os = ["onClick"], xs = ["innerHTML"], zs = {
  key: 0,
  class: "w-table__progress-bar"
}, Ms = ["colspan"], Es = {
  key: 0,
  class: "w-table__progress-bar"
}, Ws = ["colspan"], Ks = { class: "w-table__loading-text" }, As = {
  key: 1,
  class: "no-data"
}, Ns = ["colspan"], Ds = ["onClick"], Hs = ["data-label"], Fs = ["data-label"], js = ["innerHTML"], Us = {
  key: 2,
  class: "w-table__row w-table__row--expansion"
}, qs = ["colspan"], Xs = { key: 0 }, Ys = {
  key: 3,
  class: "w-table__extra-row"
}, Gs = {
  key: 1,
  class: "w-table__footer"
}, Js = {
  key: 1,
  class: "w-table__row"
}, Qs = ["colspan"], Zs = {
  key: 0,
  class: "w-table__pagination w-pagination"
}, eo = { class: "pages-wrap" }, to = { class: "w-pagination__results" };
function io(e, t, i, o, a, l) {
  const n = $("w-icon"), r = $("w-progress"), d = $("w-transition-fade"), h = $("w-transition-expand"), k = $("w-select"), _ = $("w-button");
  return s(), u("div", {
    class: f(["w-table w-table--wrap", l.classes])
  }, [
    y("div", Ts, [
      y("table", {
        class: "w-table__table",
        onMousedown: t[1] || (t[1] = (...g) => l.onMouseDown && l.onMouseDown(...g)),
        onMouseover: t[2] || (t[2] = (...g) => l.onMouseOver && l.onMouseOver(...g)),
        onMouseout: t[3] || (t[3] = (...g) => l.onMouseOut && l.onMouseOut(...g))
      }, [
        y("colgroup", Ls, [
          (s(!0), u(w, null, L(i.headers, (g, T) => (s(), u("col", {
            class: f(["w-table__col", l.colClasses[T]]),
            key: T,
            width: g.width || null
          }, null, 10, Rs))), 128))
        ], 512),
        i.noHeaders ? p("", !0) : (s(), u("thead", Ps, [
          y("tr", null, [
            (s(!0), u(w, null, L(i.headers, (g, T) => (s(), u("th", {
              class: f(["w-table__header", l.headerClasses(g)]),
              key: T,
              onClick: (P) => !e.colResizing.dragging && g.sortable !== !1 && l.sortTable(g)
            }, [
              g.sortable !== !1 && g.align === "right" ? (s(), b(n, {
                key: 0,
                class: f(["w-table__header-sort", l.headerSortClasses(g)])
              }, {
                default: m(() => [
                  B("wi-arrow-down")
                ]),
                _: 2
              }, 1032, ["class"])) : p("", !0),
              g.label ? (s(), u(w, { key: 1 }, [
                e.$slots["header-label"] ? c(e.$slots, "header-label", {
                  key: 0,
                  header: g,
                  label: g.label,
                  index: T + 1
                }, () => [
                  B(C(g.label || ""), 1)
                ]) : (s(), u("span", {
                  key: 1,
                  innerHTML: g.label || ""
                }, null, 8, xs))
              ], 64)) : p("", !0),
              g.sortable !== !1 && g.align !== "right" ? (s(), b(n, {
                key: 2,
                class: f(["w-table__header-sort", l.headerSortClasses(g)])
              }, {
                default: m(() => [
                  B("wi-arrow-down")
                ]),
                _: 2
              }, 1032, ["class"])) : p("", !0),
              T < i.headers.length - 1 && i.resizableColumns ? (s(), u("span", {
                key: 3,
                class: f(["w-table__col-resizer", { "w-table__col-resizer--hover": e.colResizing.hover === T, "w-table__col-resizer--active": e.colResizing.columnIndex === T }]),
                onClick: t[0] || (t[0] = z(() => {
                }, ["stop"]))
              }, null, 2)) : p("", !0)
            ], 10, Os))), 128))
          ]),
          V(d, null, {
            default: m(() => [
              i.loading === "header" ? (s(), u("tr", zs, [
                y("td", {
                  colspan: i.headers.length
                }, [
                  V(r, { tile: "" })
                ], 8, Ms)
              ])) : p("", !0)
            ]),
            _: 1
          })
        ])),
        y("tbody", null, [
          i.loading === !0 ? (s(), u("tr", Es, [
            y("td", {
              colspan: i.headers.length
            }, [
              V(r, { tile: "" }),
              y("div", Ks, [
                c(e.$slots, "loading", {}, () => [
                  B("Loading...")
                ])
              ])
            ], 8, Ws)
          ])) : l.tableItems.length ? p("", !0) : (s(), u("tr", As, [
            y("td", {
              class: "w-table__cell text-center",
              colspan: i.headers.length
            }, [
              c(e.$slots, "no-data", {}, () => [
                B("No data to show.")
              ])
            ], 8, Ns)
          ])),
          l.tableItems.length && i.loading !== !0 ? (s(!0), u(w, { key: 2 }, L(l.paginatedItems, (g, T) => (s(), u(w, { key: T }, [
            e.$slots.item ? c(e.$slots, "item", {
              key: 0,
              item: g,
              index: T + 1,
              select: () => l.doSelectRow(g, T),
              classes: { "w-table__row": !0, "w-table__row--selected": l.selectedRowsByUid[g._uid] !== void 0, "w-table__row--expanded": l.expandedRowsByUid[g._uid] !== void 0 }
            }) : (s(), u("tr", {
              key: 1,
              class: f(["w-table__row", { "w-table__row--selected": l.selectedRowsByUid[g._uid] !== void 0, "w-table__row--expanded": l.expandedRowsByUid[g._uid] !== void 0 }]),
              onClick: (P) => l.doSelectRow(g, T)
            }, [
              (s(!0), u(w, null, L(i.headers, (P, x) => (s(), u(w, null, [
                e.$slots[`item-cell.${P.key}`] || e.$slots[`item-cell.${x + 1}`] || e.$slots["item-cell"] ? (s(), u("td", {
                  class: f(["w-table__cell", { [`text-${P.align || "left"}`]: !0, "w-table__cell--sticky": P.sticky }]),
                  key: `${x}-a`,
                  "data-label": P.label
                }, [
                  e.$slots[`item-cell.${P.key}`] ? c(e.$slots, `item-cell.${P.key}`, {
                    key: 0,
                    header: P,
                    item: g,
                    label: g[P.key] || "",
                    index: T + 1
                  }) : e.$slots[`item-cell.${x + 1}`] ? c(e.$slots, `item-cell.${x + 1}`, {
                    key: 1,
                    header: P,
                    item: g,
                    label: g[P.key] || "",
                    index: T + 1
                  }) : e.$slots["item-cell"] ? c(e.$slots, "item-cell", {
                    key: 2,
                    header: P,
                    item: g,
                    label: g[P.key] || "",
                    index: T + 1
                  }) : p("", !0),
                  x < i.headers.length - 1 && i.resizableColumns ? (s(), u("span", {
                    key: 3,
                    class: f(["w-table__col-resizer", { "w-table__col-resizer--hover": e.colResizing.hover === x, "w-table__col-resizer--active": e.colResizing.columnIndex === x }])
                  }, null, 2)) : p("", !0)
                ], 10, Hs)) : (s(), u("td", {
                  class: f(["w-table__cell", { [`text-${P.align || "left"}`]: !0, "w-table__cell--sticky": P.sticky }]),
                  key: `${x}-b`,
                  "data-label": P.label
                }, [
                  y("div", {
                    innerHTML: g[P.key] || ""
                  }, null, 8, js),
                  x < i.headers.length - 1 && i.resizableColumns ? (s(), u("span", {
                    key: 0,
                    class: f(["w-table__col-resizer", { "w-table__col-resizer--hover": e.colResizing.hover === x, "w-table__col-resizer--active": e.colResizing.columnIndex === x }])
                  }, null, 2)) : p("", !0)
                ], 10, Fs))
              ], 64))), 256))
            ], 10, Ds)),
            l.expandedRowsByUid[g._uid] ? (s(), u("tr", Us, [
              y("td", {
                class: "w-table__cell",
                colspan: i.headers.length
              }, [
                V(h, { y: "" }, {
                  default: m(() => [
                    l.expandedRowsByUid[g._uid] ? (s(), u("div", Xs, [
                      c(e.$slots, "row-expansion", {
                        item: g,
                        index: T + 1
                      })
                    ])) : p("", !0),
                    T < i.headers.length - 1 && i.resizableColumns ? (s(), u("span", {
                      key: 1,
                      class: f(["w-table__col-resizer", { "w-table__col-resizer--hover": e.colResizing.hover === T, "w-table__col-resizer--active": e.colResizing.columnIndex === e.j }])
                    }, null, 2)) : p("", !0)
                  ]),
                  _: 2
                }, 1024)
              ], 8, qs)
            ])) : p("", !0)
          ], 64))), 128)) : p("", !0),
          e.$slots["extra-row"] ? (s(), u("div", Ys, [
            c(e.$slots, "extra-row")
          ])) : p("", !0)
        ]),
        e.$slots.footer || e.$slots["footer-row"] ? (s(), u("tfoot", Gs, [
          e.$slots["footer-row"] ? c(e.$slots, "footer-row", { key: 0 }) : e.$slots.footer ? (s(), u("tr", Js, [
            y("td", {
              class: "w-table__cell",
              colspan: i.headers.length
            }, [
              c(e.$slots, "footer")
            ], 8, Qs)
          ])) : p("", !0)
        ])) : p("", !0)
      ], 32)
    ]),
    i.pagination && e.paginationConfig ? (s(), u("div", Zs, [
      c(e.$slots, "pagination", {
        range: `${e.paginationConfig.start}-${e.paginationConfig.end}`,
        total: e.paginationConfig.total,
        pagesCount: e.paginationConfig.pagesCount,
        page: e.paginationConfig.page,
        goToPage: l.goToPage
      }, () => [
        e.paginationConfig.itemsPerPageOptions ? (s(), b(k, {
          key: 0,
          class: "w-pagination__items-per-page",
          modelValue: e.paginationConfig.itemsPerPage,
          "onUpdate:modelValue": t[4] || (t[4] = (g) => e.paginationConfig.itemsPerPage = g),
          onInput: t[5] || (t[5] = (g) => l.updatePaginationConfig({ itemsPerPage: e.paginationConfig.itemsPerPage })),
          items: e.paginationConfig.itemsPerPageOptions,
          "label-position": "left",
          label: "Items per page",
          "label-color": "inherit"
        }, null, 8, ["modelValue", "items"])) : p("", !0),
        y("div", eo, [
          V(_, {
            class: "w-pagination__arrow w-pagination__arrow--prev",
            onClick: t[6] || (t[6] = (g) => l.goToPage("-1")),
            disabled: e.paginationConfig.page <= 1,
            icon: "wi-chevron-left",
            text: "",
            lg: ""
          }, null, 8, ["disabled"]),
          e.paginationConfig.pagesCount > 7 ? (s(!0), u(w, { key: 0 }, L(e.paginationConfig.pagesCount, (g) => (s(), u(w, { key: g }, [
            [1, e.paginationConfig.pagesCount, e.paginationConfig.page - 1, e.paginationConfig.page, e.paginationConfig.page + 1].includes(g) ? (s(), b(_, {
              key: 0,
              class: f(["w-pagination__page", { "w-pagination__page--active": g === e.paginationConfig.page }]),
              onClick: (T) => g !== e.paginationConfig.page && l.goToPage(g),
              round: "",
              lg: ""
            }, {
              default: m(() => [
                B(C(g), 1)
              ]),
              _: 2
            }, 1032, ["onClick", "class"])) : [1, e.paginationConfig.pagesCount, e.paginationConfig.page - 1, e.paginationConfig.page, e.paginationConfig.page + 1].includes(g - 1) ? (s(), b(_, {
              key: 1,
              class: f(["w-pagination__page", { "w-pagination__page--active": g === e.paginationConfig.page }]),
              onClick: (T) => g !== e.paginationConfig.page && l.goToPage(g),
              round: "",
              lg: ""
            }, {
              default: m(() => [
                B("...")
              ]),
              _: 2
            }, 1032, ["onClick", "class"])) : p("", !0)
          ], 64))), 128)) : (s(!0), u(w, { key: 1 }, L(e.paginationConfig.pagesCount, (g) => (s(), b(_, {
            class: f(["w-pagination__page", { "w-pagination__page--active": g === e.paginationConfig.page }]),
            key: g,
            onClick: (T) => g !== e.paginationConfig.page && l.goToPage(g),
            round: "",
            lg: ""
          }, {
            default: m(() => [
              B(C(g), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "class"]))), 128)),
          V(_, {
            class: "w-pagination__arrow w-pagination__arrow--next",
            onClick: t[7] || (t[7] = (g) => l.goToPage("+1")),
            disabled: e.paginationConfig.page >= e.paginationConfig.pagesCount,
            icon: "wi-chevron-right",
            text: "",
            lg: ""
          }, null, 8, ["disabled"])
        ]),
        y("span", to, C(e.paginationConfig.start) + "-" + C(e.paginationConfig.end || e.paginationConfig.total) + " of " + C(e.paginationConfig.total), 1)
      ])
    ])) : p("", !0)
  ], 2);
}
const me = 15, lo = {
  name: "w-table",
  props: {
    items: { type: Array, required: !0 },
    headers: { type: Array, required: !0 },
    noHeaders: { type: Boolean },
    fixedLayout: { type: Boolean },
    fixedHeaders: { type: Boolean },
    fixedFooter: { type: Boolean },
    loading: { type: [Boolean, String] },
    // Bool or 'header' to only display the bar in the header.
    // Allow single sort: `+id`, or multiple in an array like: ['+id', '-firstName'].
    sort: { type: [String, Array] },
    sortFunction: { type: Function },
    filter: { type: Function },
    fetch: { type: Function },
    expandableRows: {
      validator: (e) => ([void 0, !0, !1, 1, "1", ""].includes(e) || te(
        `Wrong value for the w-table's \`expandableRows\` prop. Given: "${e}", expected one of: [undefined, true, false, 1, '1', ''].`
      ), !0)
    },
    // Allow providing the expanded rows and keeping it in sync via .sync in Vue 2 or v-model:expandedRows in Vue 3.
    expandedRows: { type: Array },
    selectableRows: {
      validator: (e) => ([void 0, !0, !1, 1, "1", ""].includes(e) || te(
        `Wrong value for the w-table's \`selectableRows\` prop. Given: "${e}", expected one of: [undefined, true, false, 1, '1', ''].`
      ), !0)
    },
    // Allow providing the selected rows and keeping it in sync via .sync in Vue 2 or v-model:selectedRows in Vue 3.
    selectedRows: { type: Array },
    forceSelection: { type: Boolean },
    // Useful to select or expand a row, and even after a filter, the same row will stay selected or expanded.
    uidKey: { type: String, default: "id" },
    mobileBreakpoint: { type: Number, default: 0 },
    resizableColumns: { type: Boolean },
    // An object containing:
    // - itemsPerPage
    // - itemsPerPageOptions
    // - start
    // - end
    // - page
    // - total
    pagination: {
      type: [Boolean, Object, String],
      validator: (e) => {
        if (e) {
          if (typeof e == "object" && (!e.itemsPerPage || e.page && isNaN(e.page)))
            return te(
              "Wrong pagination config received in the w-table's `pagination` prop (received: `" + JSON.stringify(e) + "`). \nExpected object: { itemsPerPage: Integer, page: Integer } or { itemsPerPage: Integer, start: Integer }."
            ), !1;
        } else
          return !0;
        return !0;
      }
    },
    dark: { type: Boolean },
    light: { type: Boolean }
  },
  emits: [
    "row-select",
    "row-expand",
    "row-click",
    "update:sort",
    "update:selected-rows",
    "update:expanded-rows",
    "column-resize"
  ],
  data: () => ({
    activeSorting: [],
    selectedRowsInternal: [],
    // Array of uids.
    expandedRowsInternal: [],
    // Array of uids.
    // Column resizing feature.
    colResizing: {
      dragging: !1,
      hover: !1,
      // False or a column number starting from 0.
      columnIndex: null,
      // Column number starting from 0.
      startCursorX: null,
      colWidth: null,
      nextColWidth: null,
      columnEl: null,
      nextColumnEl: null
    },
    paginationConfig: {
      itemsPerPage: 0,
      itemsPerPageOptions: {},
      start: void 0,
      end: void 0,
      page: 1,
      total: 0
    }
  }),
  computed: {
    tableItems() {
      return this.items.map((e, t) => (e._uid = e[this.uidKey] ?? t, e));
    },
    filteredItems() {
      return typeof this.filter == "function" ? this.tableItems.filter(this.filter) : this.tableItems;
    },
    sortedItems() {
      if (!this.activeSorting.length || this.sortFunction || this.fetch)
        return this.filteredItems;
      const e = this.activeSorting[0].replace(/^[+-]/, ""), t = this.activeSorting[0][0] === "-";
      return [...this.filteredItems].sort((i, o) => (i = i[e], o = o[e], !isNaN(i) && !isNaN(o) && (i = parseFloat(i), o = parseFloat(o)), (i > o ? 1 : -1) * (t ? -1 : 1)));
    },
    paginatedItems() {
      return typeof this.fetch == "function" ? this.sortedItems : this.sortedItems.slice(this.paginationConfig.start - 1, this.paginationConfig.end);
    },
    // Returns an object containing { key1: '+', key2: '-' }. With + or - for ASC/DESC.
    activeSortingKeys() {
      return this.activeSorting.reduce((e, t) => (e[t.replace(/^[+-]/, "")] = t[0], e), {});
    },
    classes() {
      return {
        "w-table--loading": this.loading,
        "w-table--loading-in-header": this.loading === "header",
        "w-table--fixed-layout": this.fixedLayout || this.resizableColumns || this.hasStickyColumn,
        "w-table--mobile": this.isMobile || null,
        "w-table--resizable-cols": this.resizableColumns || null,
        "w-table--resizing": this.colResizing.dragging,
        "w-table--fixed-header": this.fixedHeaders,
        "w-table--fixed-footer": this.fixedFooter,
        "w-table--sticky-column": this.hasStickyColumn,
        "w-table--dark": this.dark,
        "w-table--light": this.light
      };
    },
    colClasses() {
      return this.headers.map((e) => ({ "w-table__col--highlighted": this.activeSortingKeys[e.key] })) || [];
    },
    isMobile() {
      return ~~this.mobileBreakpoint && this.$waveui.breakpoint.width <= ~~this.mobileBreakpoint;
    },
    hasStickyColumn() {
      return this.headers.find((e) => e.sticky);
    },
    // Faster lookup than array.includes(uid) and also cached.
    selectedRowsByUid() {
      return this.selectedRowsInternal.reduce((e, t) => (e[t] = !0) && e, {});
    },
    // Faster lookup than array.includes(uid) and also cached.
    expandedRowsByUid() {
      return this.expandedRowsInternal.reduce((e, t) => (e[t] = !0) && e, {});
    }
  },
  methods: {
    headerClasses(e) {
      return {
        "w-table__header--sortable": e.sortable !== !1,
        // Can also be falsy with `0`.
        "w-table__header--sticky": e.sticky,
        "w-table__header--resizable": !!this.resizableColumns,
        [`text-${e.align || "left"}`]: !0
      };
    },
    headerSortClasses(e) {
      const t = this.activeSortingKeys[e.key];
      return [
        `w-table__header-sort--${t ? "active" : "inactive"}`,
        `w-table__header-sort--${t === "-" ? "desc" : "asc"}`,
        `m${e.align === "right" ? "r" : "l"}1`
      ];
    },
    async sortTable(e) {
      const t = this.activeSortingKeys[e.key];
      t && this.activeSortingKeys[e.key] === "-" ? this.activeSorting = [] : this.activeSorting[0] = (t ? "-" : "+") + e.key, this.$emit("update:sort", this.activeSorting), typeof this.sortFunction == "function" ? await this.sortFunction(this.activeSorting) : typeof this.fetch == "function" && await this.callApiFetch();
    },
    doSelectRow(e, t) {
      const i = this.expandableRows === "" ? !0 : this.expandableRows, o = this.selectableRows === "" ? !0 : this.selectableRows;
      if (i) {
        const a = this.expandedRowsByUid[e._uid] === void 0;
        a ? this.expandableRows.toString() === "1" ? this.expandedRowsInternal = [e._uid] : this.expandedRowsInternal.push(e._uid) : this.expandedRowsInternal = this.expandedRowsInternal.filter((l) => l !== e._uid), this.$emit(
          "row-expand",
          {
            item: e,
            index: t,
            expanded: a,
            expandedRows: this.expandedRowsInternal.map((l) => this.filteredItems[l])
          }
        ), this.$emit("update:expanded-rows", this.expandedRowsInternal);
      } else if (o) {
        let a = !1;
        const l = this.selectedRowsByUid[e._uid] === void 0;
        l ? (this.selectableRows.toString() === "1" ? this.selectedRowsInternal = [e._uid] : this.selectedRowsInternal.push(e._uid), a = !0) : (!this.forceSelection || this.selectedRowsInternal.length > 1) && (this.selectedRowsInternal = this.selectedRowsInternal.filter((n) => n !== e._uid), a = !0), a && (this.$emit(
          "row-select",
          {
            item: e,
            index: t,
            selected: l,
            selectedRows: this.selectedRowsInternal.map((n) => this.filteredItems[n])
          }
        ), this.$emit("update:selected-rows", this.selectedRowsInternal));
      }
      this.$emit("row-click", { item: e, index: t });
    },
    // Attach 1 single event listener on the table rather than 1 on each resizer.
    onMouseDown(e) {
      e.target.classList.contains("w-table__col-resizer") && (this.colResizing.columnIndex = +e.target.parentNode.cellIndex, this.colResizing.startCursorX = e.pageX, this.colResizing.columnEl = this.$el.querySelector(`col:nth-child(${this.colResizing.columnIndex + 1})`), this.colResizing.nextColumnEl = this.colResizing.columnEl.nextSibling, this.colResizing.colWidth = this.colResizing.columnEl.offsetWidth, this.colResizing.nextColWidth = this.colResizing.nextColumnEl.offsetWidth, document.addEventListener("mousemove", this.onResizerMouseMove), document.addEventListener("mouseup", this.onResizerMouseUp));
    },
    // Attach 1 single event listener on the table rather than 1 on each resizer.
    onMouseOver({ target: e }) {
      e.classList.contains("w-table__col-resizer") && (this.colResizing.hover = +e.parentNode.cellIndex);
    },
    // Attach 1 single event listener on the table rather than 1 on each resizer.
    onMouseOut({ target: e }) {
      e.classList.contains("w-table__col-resizer") && (this.colResizing.hover = !1);
    },
    /**
         * Notes:
         * Make sure there is no change of variable that would cause a DOM refresh,
         * and glitch while dragging.
         * this.$set(this.headers[columnIndex], 'width', colWidth + deltaX)
    
         * If using the width attribute with variable (so data-driven) and not `style.width`,
         * any later change of variable would cause a DOM refresh, and lose the current DOM state
         * (losing the 2 columns width). So do a direct DOM manipulation using `.style.width`.
         */
    onResizerMouseMove(e) {
      const { startCursorX: t, columnEl: i, nextColumnEl: o, colWidth: a, nextColWidth: l } = this.colResizing;
      this.colResizing.dragging = !0;
      const n = e.pageX - t, r = a + l, d = a + n, h = l - n;
      i.style.width = a + n + "px", o.style.width = l - n + "px";
      const k = n < 0 && i.offsetWidth > d || i.offsetWidth <= me, _ = n > 0 && o.offsetWidth > h;
      if (k) {
        const g = Math.max(i.offsetWidth, me);
        i.style.width = g + "px", o.style.width = r - g + "px";
      } else
        _ && (i.style.width = r - o.offsetWidth + "px", o.style.width = o.offsetWidth + "px");
    },
    onResizerMouseUp() {
      document.removeEventListener("mousemove", this.onResizerMouseMove), document.removeEventListener("mouseup", this.onResizerMouseUp), setTimeout(() => {
        const e = [...this.$refs.colgroup.children].map((t) => {
          var i;
          return ((i = t.style) == null ? void 0 : i.width) || t.offsetWidth;
        });
        this.$emit("column-resize", { index: this.colResizing.columnIndex, widths: e }), this.colResizing.dragging = !1, this.colResizing.columnIndex = null, this.colResizing.startCursorX = null, this.colResizing.columnEl = null, this.colResizing.nextColumnEl = null, this.colResizing.colWidth = null, this.colResizing.nextColWidth = null;
      }, 0);
    },
    initPagination() {
      var o, a;
      const e = ((o = this.pagination) == null ? void 0 : o.itemsPerPage) ?? 20, t = ((a = this.pagination) == null ? void 0 : a.itemsPerPageOptions) || [20, 100, { label: "All", value: 0 }];
      t.find((l) => ((l == null ? void 0 : l.value) ?? l) === +e) || t.push(e), this.paginationConfig.itemsPerPageOptions = t.map((l) => ({
        label: ["string", "number"].includes(typeof l) ? l.toString() : l.label || l.value,
        value: ["string", "number"].includes(typeof l) ? ~~l : l.value ?? l.label
      })), this.paginationConfig.itemsPerPageOptions.sort((l, n) => l.value < n.value ? -1 : 1);
      const i = this.paginationConfig.itemsPerPageOptions.shift();
      this.paginationConfig.itemsPerPageOptions.push(i), this.updatePaginationConfig({
        itemsPerPage: e,
        page: this.pagination.page || 1,
        total: this.pagination.total || this.items.length
      });
    },
    updatePaginationConfig({ itemsPerPage: e, page: t, total: i }) {
      if (i && (this.paginationConfig.total = i), e !== void 0) {
        this.paginationConfig.itemsPerPage = e, e = e || this.paginationConfig.total, this.paginationConfig.page = t || this.paginationConfig.page || 1;
        let o = this.paginationConfig.page, a = this.paginationConfig.total;
        this.paginationConfig.start = 1, this.paginationConfig.end = a >= e * o ? e * o : a % (e * o), this.paginationConfig.pagesCount = Math.ceil(a / e);
      }
      t && this.goToPage(t);
    },
    /**
     * Goes to a given page or to the next or previous page.
     *
     * @param {Number|String} page a number to go to a specific page or `-1`, `+1` for prev & next page.
     */
    async goToPage(e) {
      ["-1", "+1"].includes(e) ? this.paginationConfig.page += +e : this.paginationConfig.page = e;
      const { itemsPerPage: t, total: i } = this.paginationConfig;
      this.paginationConfig.page = Math.max(1, this.paginationConfig.page), this.paginationConfig.start = t * (this.paginationConfig.page - 1) + 1, this.paginationConfig.end = this.paginationConfig.start - 1 + (t || i), typeof this.fetch == "function" && await this.callApiFetch();
    },
    /**
     * Call a user provided fetch function in order to fetch table items from an API.
     * While waiting for the call to resolve, nothing in the table will change.
     */
    async callApiFetch() {
      const { page: e, start: t, end: i, total: o, itemsPerPage: a } = this.paginationConfig;
      return await this.fetch({
        page: e,
        start: t,
        end: i || o,
        total: o,
        itemsPerPage: a || o,
        sorting: this.activeSorting
      });
    }
  },
  created() {
    this.sort ? this.activeSorting = Array.isArray(this.sort) ? this.sort : [this.sort] : this.activeSorting = [], (this.expandedRows || []).length && (this.expandedRowsInternal = this.expandedRows), (this.selectedRows || []).length && (this.selectedRowsInternal = this.selectedRows), this.pagination && this.initPagination();
  },
  watch: {
    sort(e) {
      e ? this.activeSorting = Array.isArray(e) ? e : [e] : this.activeSorting = [];
    },
    expandableRows(e) {
      e ? e.toString() === "1" && (this.expandedRowsInternal = this.expandedRowsInternal.slice(0, 1)) : this.expandedRowsInternal = [];
    },
    expandedRows(e) {
      this.expandedRowsInternal = Array.isArray(e) && e.length ? this.expandedRows : [];
    },
    selectableRows(e) {
      e ? e.toString() === "1" && (this.selectedRowsInternal = this.selectedRowsInternal.slice(0, 1)) : this.selectedRowsInternal = [];
    },
    selectedRows(e) {
      this.selectedRowsInternal = Array.isArray(e) && e.length ? this.selectedRows : [];
    },
    "pagination.page"(e) {
      this.updatePaginationConfig({ page: e });
    },
    "pagination.itemsPerPage"(e) {
      this.updatePaginationConfig({ itemsPerPage: e });
    },
    "pagination.total"(e) {
      this.updatePaginationConfig({ total: e });
    }
  }
}, so = /* @__PURE__ */ v(lo, [["render", io]]), oo = ["role", "aria-pressed", "tabindex"];
function ao(e, t, i, o, a, l) {
  return s(), u("span", S({ class: "w-tag" }, M(e.$attrs, !0), {
    onClick: t[1] || (t[1] = (n) => {
      e.$emit("update:modelValue", !i.modelValue), e.$emit("input", !i.modelValue);
    }),
    onKeypress: t[2] || (t[2] = W((n) => {
      e.$emit("update:modelValue", !i.modelValue), e.$emit("input", !i.modelValue);
    }, ["enter"])),
    class: l.classes,
    role: i.modelValue !== -1 && "button",
    "aria-pressed": i.modelValue !== -1 && (i.modelValue ? "true" : "false"),
    tabindex: i.modelValue !== -1 && 0,
    style: l.styles
  }), [
    c(e.$slots, "default"),
    i.closable && i.modelValue ? (s(), u("i", {
      key: 0,
      class: "w-icon w-tag__closable wi-cross",
      onClick: t[0] || (t[0] = z((n) => {
        e.$emit("update:modelValue", !1), e.$emit("input", !1);
      }, ["stop"])),
      role: "icon",
      "aria-hidden": "true"
    })) : p("", !0)
  ], 16, oo);
}
const no = {
  name: "w-tag",
  props: {
    modelValue: { type: [Boolean, Number], default: -1 },
    color: { type: String },
    bgColor: { type: String },
    shadow: { type: Boolean },
    tile: { type: Boolean },
    round: { type: Boolean },
    closable: { type: Boolean },
    outline: { type: Boolean },
    noBorder: { type: Boolean },
    xs: { type: Boolean },
    sm: { type: Boolean },
    md: { type: Boolean },
    lg: { type: Boolean },
    xl: { type: Boolean },
    width: { type: [Number, String] },
    height: { type: [Number, String] },
    dark: { type: Boolean },
    light: { type: Boolean }
  },
  emits: ["input", "update:modelValue"],
  computed: {
    presetSize() {
      return this.xs && "xs" || this.sm && "sm" || this.lg && "lg" || this.xl && "xl" || "md";
    },
    classes() {
      return {
        [this.color]: this.color,
        [`${this.bgColor}--bg`]: this.bgColor,
        [`size--${this.presetSize}`]: !0,
        "w-tag--dark": this.dark,
        "w-tag--light": this.light,
        "w-tag--clickable": this.modelValue !== -1,
        "w-tag--outline": this.outline,
        "w-tag--no-border": this.noBorder || this.shadow,
        "w-tag--tile": this.tile,
        "w-tag--round": this.round,
        "w-tag--shadow": this.shadow
      };
    },
    styles() {
      return {
        width: (isNaN(this.width) ? this.width : `${this.width}px`) || null,
        height: (isNaN(this.height) ? this.height : `${this.height}px`) || null
      };
    }
  }
}, ro = /* @__PURE__ */ v(no, [["render", ao]]), uo = ["for"], ho = ["id", "name", "placeholder", "rows", "cols", "readonly", "aria-readonly", "disabled", "required", "tabindex"], co = ["for"];
function po(e, t, i, o, a, l) {
  const n = $("w-icon");
  return s(), b(I(e.formRegister ? "w-form-element" : "div"), S({ ref: "formEl" }, e.formRegister && { validators: e.validators, inputValue: a.inputValue, disabled: e.isDisabled, readonly: e.isReadonly, isFocused: a.isFocused }, {
    valid: e.valid,
    "onUpdate:valid": t[6] || (t[6] = (r) => e.valid = r),
    wrap: l.hasLabel && i.labelPosition !== "inside",
    onReset: t[7] || (t[7] = (r) => {
      e.$emit("update:modelValue", a.inputValue = ""), e.$emit("input", "");
    }),
    class: l.classes
  }), {
    default: m(() => [
      i.labelPosition === "left" ? (s(), u(w, { key: 0 }, [
        e.$slots.default || i.label ? (s(), u("label", {
          key: 0,
          class: f(["w-textarea__label w-textarea__label--left w-form-el-shakable", e.labelClasses]),
          for: `w-textarea--${e._.uid}`
        }, [
          c(e.$slots, "default", {}, () => [
            B(C(i.label), 1)
          ])
        ], 10, uo)) : p("", !0)
      ], 64)) : p("", !0),
      y("div", {
        class: f(["w-textarea__textarea-wrap", l.inputWrapClasses])
      }, [
        c(e.$slots, "icon-left", {
          inputId: `w-textarea--${e._.uid}`
        }, () => [
          i.innerIconLeft ? (s(), b(n, {
            key: 0,
            class: "w-textarea__icon w-textarea__icon--inner-left",
            tag: "label",
            for: `w-textarea--${e._.uid}`,
            onClick: t[0] || (t[0] = (r) => e.$emit("click:inner-icon-left", r))
          }, {
            default: m(() => [
              B(C(i.innerIconLeft), 1)
            ]),
            _: 1
          }, 8, ["for"])) : p("", !0)
        ]),
        A(y("textarea", S({
          class: "w-textarea__textarea",
          ref: "textarea",
          "onUpdate:modelValue": t[1] || (t[1] = (r) => a.inputValue = r)
        }, M(l.listeners, !0), {
          onInput: t[2] || (t[2] = (...r) => l.onInput && l.onInput(...r)),
          onFocus: t[3] || (t[3] = (...r) => l.onFocus && l.onFocus(...r)),
          onBlur: t[4] || (t[4] = (...r) => l.onBlur && l.onBlur(...r)),
          id: `w-textarea--${e._.uid}`,
          name: e.inputName,
          placeholder: i.placeholder || null,
          rows: i.rows || null,
          cols: i.cols || null,
          readonly: e.isReadonly || null,
          "aria-readonly": e.isReadonly ? "true" : "false",
          disabled: e.isDisabled || null,
          required: e.required || null,
          tabindex: e.tabindex || null
        }), null, 16, ho), [
          [be, a.inputValue]
        ]),
        i.labelPosition === "inside" && l.showLabelInside ? (s(), u(w, { key: 0 }, [
          e.$slots.default || i.label ? (s(), u("label", {
            key: 0,
            class: f(["w-textarea__label w-textarea__label--inside w-form-el-shakable", e.labelClasses])
          }, [
            c(e.$slots, "default", {}, () => [
              B(C(i.label), 1)
            ])
          ], 2)) : p("", !0)
        ], 64)) : p("", !0),
        c(e.$slots, "icon-right", {
          inputId: `w-textarea--${e._.uid}`
        }, () => [
          i.innerIconRight ? (s(), b(n, {
            key: 0,
            class: "w-textarea__icon w-textarea__icon--inner-right",
            tag: "label",
            for: `w-textarea--${e._.uid}`,
            onClick: t[5] || (t[5] = (r) => e.$emit("click:inner-icon-right", r))
          }, {
            default: m(() => [
              B(C(i.innerIconRight), 1)
            ]),
            _: 1
          }, 8, ["for"])) : p("", !0)
        ])
      ], 2),
      i.labelPosition === "right" ? (s(), u(w, { key: 1 }, [
        e.$slots.default || i.label ? (s(), u("label", {
          key: 0,
          class: f(["w-textarea__label w-textarea__label--right w-form-el-shakable", e.labelClasses]),
          for: `w-textarea--${e._.uid}`
        }, [
          c(e.$slots, "default", {}, () => [
            B(C(i.label), 1)
          ])
        ], 10, co)) : p("", !0)
      ], 64)) : p("", !0)
    ]),
    _: 3
  }, 16, ["valid", "wrap", "class"]);
}
const fo = {
  name: "w-textarea",
  mixins: [E],
  props: {
    modelValue: { default: "" },
    label: { type: String },
    labelPosition: { type: String, default: "inside" },
    innerIconLeft: { type: String },
    innerIconRight: { type: String },
    // When label is inside, allows to move the label above on focus or when filled.
    staticLabel: { type: Boolean },
    placeholder: { type: String },
    color: { type: String, default: "primary" },
    bgColor: { type: String },
    labelColor: { type: String, default: "primary" },
    outline: { type: Boolean },
    shadow: { type: Boolean },
    noAutogrow: { type: Boolean },
    resizable: { type: Boolean },
    // Toggle the HTML built-in bottom right corner resize handle.
    tile: { type: Boolean },
    rows: { type: [Number, String], default: 3 },
    cols: { type: [Number, String] },
    dark: { type: Boolean },
    light: { type: Boolean }
    // Props from mixin: name, disabled, readonly, required, tabindex, validators.
    // Computed from mixin: inputName, isDisabled & isReadonly.
  },
  emits: ["input", "update:modelValue", "focus", "blur", "click:inner-icon-left", "click:inner-icon-right"],
  data() {
    return {
      inputValue: this.modelValue,
      isFocused: !1,
      // When autogrow, calculate the height from the number of carriage return & font size.
      height: null,
      lineHeight: null,
      paddingY: null
    };
  },
  computed: {
    listeners() {
      const { input: e, focus: t, blur: i, ...o } = this.$attrs;
      return o;
    },
    hasValue() {
      return this.inputValue || this.inputValue === 0;
    },
    hasLabel() {
      return this.label || this.$slots.default;
    },
    showLabelInside() {
      return !this.staticLabel || !this.hasValue && !this.placeholder;
    },
    classes() {
      return {
        "w-textarea": !0,
        "w-textarea--disabled": this.isDisabled,
        "w-textarea--readonly": this.isReadonly,
        [`w-textarea--${this.hasValue ? "filled" : "empty"}`]: !0,
        "w-textarea--focused": this.isFocused && !this.isReadonly,
        "w-textarea--dark": this.dark,
        "w-textarea--light": this.light,
        "w-textarea--resizable": this.resizable,
        "w-textarea--floating-label": this.hasLabel && this.labelPosition === "inside" && !this.staticLabel,
        "w-textarea--no-padding": !this.outline && !this.bgColor && !this.shadow,
        "w-textarea--has-placeholder": this.placeholder,
        "w-textarea--inner-icon-left": this.innerIconLeft,
        "w-textarea--inner-icon-right": this.innerIconRight
      };
    },
    inputWrapClasses() {
      return {
        [this.valid === !1 ? this.validationColor : this.color]: this.color || this.valid === !1,
        [`${this.bgColor}--bg`]: this.bgColor,
        "w-textarea__textarea-wrap--tile": this.tile,
        // Box adds a padding on input. If there is a bgColor or shadow, a padding is needed.
        "w-textarea__textarea-wrap--box": this.outline || this.bgColor || this.shadow,
        "w-textarea__textarea-wrap--underline": !this.outline,
        "w-textarea__textarea-wrap--shadow": this.shadow,
        "w-textarea__textarea-wrap--no-padding": !this.outline && !this.bgColor && !this.shadow
      };
    },
    textareaStyles() {
      return this.noAutogrow || this.resizable ? {} : {
        height: this.height ? `${this.height}px` : null
      };
    }
  },
  methods: {
    onInput() {
      !this.noAutogrow && !this.resizable && this.computeHeight(), this.$emit("update:modelValue", this.inputValue), this.$emit("input", this.inputValue);
    },
    onFocus(e) {
      this.isFocused = !0, this.$emit("focus", e);
    },
    onBlur(e) {
      this.isFocused = !1, this.$emit("blur", e);
    },
    computeHeight() {
      this.$refs.textarea.style.height = "";
      const e = (this.$refs.textarea.scrollHeight - this.paddingY) / this.lineHeight, t = Math.max(e, this.rows) * this.lineHeight + this.paddingY;
      this.$refs.textarea.style.height = t + "px";
    },
    getLineHeight() {
      const e = window.getComputedStyle(this.$refs.textarea, null);
      this.lineHeight = parseFloat(e.getPropertyValue("line-height")), this.paddingY = parseFloat(e.getPropertyValue("padding-top")), this.paddingY += parseFloat(e.getPropertyValue("padding-bottom"));
    }
  },
  mounted() {
    !this.noAutogrow && !this.resizable && (this.getLineHeight(), this.computeHeight());
  },
  watch: {
    modelValue(e) {
      this.inputValue = e, this.$nextTick(this.computeHeight);
    },
    resizable(e) {
      e ? this.height = null : this.noAutogrow || this.getLineHeight();
    },
    noAutogrow(e) {
      e ? this.getLineHeight() : this.height = null;
    }
  }
}, mo = /* @__PURE__ */ v(fo, [["render", po]]), go = ["innerHTML"], bo = ["innerHTML"];
function yo(e, t, i, o, a, l) {
  return s(), u("ul", {
    class: f(["w-timeline", l.classes])
  }, [
    (s(!0), u(w, null, L(i.items, (n, r) => (s(), u("li", {
      class: "w-timeline-item",
      key: r
    }, [
      (s(), b(I(n[i.itemIconKey] || i.icon ? "w-icon" : "div"), {
        class: f(["w-timeline-item__bullet", { [n[i.itemColorKey] || i.color]: n[i.itemColorKey] || i.color }])
      }, {
        default: m(() => [
          B(C(n[i.itemIconKey] || i.icon), 1)
        ]),
        _: 2
      }, 1032, ["class"])),
      e.$slots[`item.${r + 1}`] ? c(e.$slots, `item.${r + 1}`, {
        key: 1,
        item: n,
        index: r + 1
      }) : c(e.$slots, "item", {
        key: 0,
        item: n,
        index: r + 1
      }, () => [
        y("div", {
          class: f(["w-timeline-item__title", { [n[i.itemColorKey] || i.color]: n[i.itemColorKey] || i.color }]),
          innerHTML: n[i.itemTitleKey]
        }, null, 10, go),
        y("div", {
          class: "w-timeline-item__content",
          innerHTML: n[i.itemContentKey]
        }, null, 8, bo)
      ])
    ]))), 128))
  ], 2);
}
const wo = {
  name: "w-timeline",
  props: {
    items: { type: [Array, Number], required: !0 },
    color: { type: String },
    icon: { type: String },
    itemTitleKey: { type: String, default: "title" },
    itemContentKey: { type: String, default: "content" },
    itemIconKey: { type: String, default: "icon" },
    itemColorKey: { type: String, default: "color" },
    dark: { type: Boolean },
    light: { type: Boolean }
  },
  emits: [],
  computed: {
    classes() {
      return {
        "w-timeline--dark": this.dark,
        "w-timeline--light": this.light
      };
    }
  }
}, ko = /* @__PURE__ */ v(wo, [["render", yo]]);
function vo(e, t, i, o, a, l) {
  return s(), u("div", {
    class: f(["w-toolbar", l.classes]),
    style: R(l.styles)
  }, [
    c(e.$slots, "default")
  ], 6);
}
const Co = {
  name: "w-toolbar",
  props: {
    color: { type: String },
    bgColor: { type: String },
    absolute: { type: Boolean },
    fixed: { type: Boolean },
    bottom: { type: Boolean },
    vertical: { type: Boolean },
    left: { type: Boolean },
    right: { type: Boolean },
    width: { type: [Number, String], default: null },
    height: { type: [Number, String], default: null },
    noBorder: { type: Boolean },
    shadow: { type: Boolean },
    dark: { type: Boolean },
    light: { type: Boolean }
  },
  emits: [],
  computed: {
    // Return the height value if defined, or false otherwise.
    toolbarHeight() {
      const e = this.height;
      return e && parseInt(e) == e ? e + "px" : e;
    },
    // Return the width value if defined, or false otherwise.
    toolbarWidth() {
      const e = this.width;
      return e && parseInt(e) == e ? e + "px" : e;
    },
    classes() {
      return {
        [this.color]: !!this.color,
        [`${this.bgColor}--bg`]: !!this.bgColor,
        "w-toolbar--dark": this.dark,
        "w-toolbar--light": this.light,
        "w-toolbar--absolute": !!this.absolute,
        "w-toolbar--fixed": !!this.fixed,
        [`w-toolbar--${this.bottom ? "bottom" : "top"}`]: !this.vertical,
        [`w-toolbar--vertical w-toolbar--${this.right ? "right" : "left"}`]: this.vertical,
        "w-toolbar--no-border": this.noBorder,
        "w-toolbar--shadow": !!this.shadow
      };
    },
    styles() {
      return {
        height: this.height && !this.vertical ? this.toolbarHeight : null,
        width: this.width && this.vertical ? this.toolbarWidth : null
      };
    }
  }
}, So = /* @__PURE__ */ v(Co, [["render", vo]]);
function Bo(e, t, i, o, a, l) {
  return s(), u(w, null, [
    c(e.$slots, "activator", { on: l.activatorEventHandlers }),
    V(O, {
      name: l.transitionName,
      appear: ""
    }, {
      default: m(() => [
        e.detachableVisible ? (s(), u("div", {
          class: f(["w-tooltip", l.classes]),
          ref: "detachable",
          key: e._.uid,
          style: R(l.styles)
        }, [
          c(e.$slots, "default")
        ], 6)) : p("", !0)
      ]),
      _: 3
    }, 8, ["name"])
  ], 64);
}
const _o = {
  name: "w-tooltip",
  mixins: [we],
  props: {
    modelValue: {},
    showOnClick: { type: Boolean },
    color: { type: String },
    bgColor: { type: String },
    noBorder: { type: Boolean },
    shadow: { type: Boolean },
    tile: { type: Boolean },
    round: { type: Boolean },
    transition: { type: String },
    tooltipClass: { type: [String, Object, Array] },
    persistent: { type: Boolean },
    delay: { type: Number },
    dark: { type: Boolean },
    light: { type: Boolean },
    caption: { type: Boolean },
    // Apply the caption class and style (grey, italic, small).
    xs: { type: Boolean },
    sm: { type: Boolean },
    md: { type: Boolean },
    lg: { type: Boolean },
    xl: { type: Boolean },
    enableTouch: { type: Boolean }
    // Other props in the detachable mixin:
    // detachTo, appendTo, fixed, top, bottom, left, right, alignTop, alignBottom, alignLeft,
    // alignRight, noPosition, zIndex, activator.
  },
  emits: ["input", "update:modelValue", "open", "close"],
  data: () => ({
    detachableVisible: !1,
    hoveringActivator: !1,
    // The tooltip computed top & left coordinates.
    detachableCoords: {
      top: 0,
      left: 0
    },
    detachableEl: null,
    timeoutId: null
  }),
  computed: {
    /**
     * Other computed in the detachable mixin:
     * - `appendToTarget`
     * - `detachableParentEl`
     * - `activatorEl`
     * - `position`
     * - `alignment`
     **/
    tooltipClasses() {
      return K(this.tooltipClass);
    },
    transitionName() {
      const e = this.position.replace(/top|bottom/, (t) => ({ top: "up", bottom: "down" })[t]);
      return this.transition || `w-tooltip-slide-fade-${e}`;
    },
    size() {
      return this.xs && "xs" || this.sm && "sm" || this.sm && "md" || this.lg && "lg" || this.xl && "xl" || (this.caption ? "sm" : "md");
    },
    classes() {
      return {
        [this.color]: this.color,
        [`${this.bgColor}--bg`]: this.bgColor,
        ...this.tooltipClasses,
        [`w-tooltip--${this.position}`]: !this.noPosition,
        [`w-tooltip--align-${this.alignment}`]: !this.noPosition && this.alignment,
        "w-tooltip--dark": this.dark,
        "w-tooltip--light": this.light,
        "w-tooltip--tile": this.tile,
        "w-tooltip--round": this.round,
        caption: this.caption,
        [`size--${this.size}`]: !0,
        "w-tooltip--shadow": this.shadow,
        "w-tooltip--fixed": this.fixed,
        "w-tooltip--no-border": this.noBorder || this.bgColor,
        "w-tooltip--custom-transition": this.transition
      };
    },
    // The tooltip styles.
    styles() {
      return {
        zIndex: this.zIndex || this.zIndex === 0 || null,
        top: this.detachableCoords.top && `${~~this.detachableCoords.top}px` || null,
        left: this.detachableCoords.left && `${~~this.detachableCoords.left}px` || null,
        "--w-tooltip-bg-color": this.$waveui.colors[this.bgColor] || "rgb(var(--w-base-bg-color-rgb))"
      };
    },
    activatorEventHandlers() {
      let e = {};
      const t = typeof window < "u" && "ontouchstart" in window;
      return !this.showOnClick && !t ? e = {
        focus: this.open,
        blur: this.close,
        mouseenter: (i) => {
          this.hoveringActivator = !0, this.open(i);
        },
        mouseleave: (i) => {
          this.hoveringActivator = !1, this.close();
        }
      } : (this.enableTouch || this.showOnClick) && (e = { click: this.toggle }), e;
    }
  },
  methods: {
    /**
     * Other methods in the `detachable` mixin:
     * - `open`
     * - `getActivatorCoordinates`
     * - `computeDetachableCoords`
     * - `onResize`
     * - `onOutsideMousedown`
     * - `insertInDOM`
     * - `removeFromDOM`
     **/
    // ! \ This function uses the DOM - NO SSR (only trigger from beforeMount and later).
    toggle(e) {
      let t = this.detachableVisible;
      typeof window < "u" && "ontouchstart" in window ? !this.enableTouch && !this.showOnClick ? t = !1 : t = !t : e.type === "click" && this.showOnClick ? t = !t : ["mouseenter", "focus"].includes(e.type) && !this.showOnClick ? t = !0 : ["mouseleave", "blur"].includes(e.type) && !this.showOnClick && (t = !1), this.timeoutId = clearTimeout(this.timeoutId), t ? this.open(e) : this.close();
    },
    /**
     * Closes the tooltip. Can happen on:
     * - click of activator
     * - hover outside if showOnHover
     * - click inside tooltip if hideOnTooltipClick.
     * / ! \ This function uses the DOM - NO SSR (only trigger from beforeMount and later).
     *
     * @param {Boolean} force when showOnHover is set to true, hovering tooltip should keep it open.
     *                        But if hideOnTooltipClick is also set to true, this should force close
     *                        even while hovering the tooltip.
     */
    async close(e = !1) {
      this.detachableVisible && (this.showOnHover && !e && (await new Promise((t) => setTimeout(t, 10)), this.showOnHover && this.hoveringActivator) || (this.$emit("update:modelValue", this.detachableVisible = !1), this.$emit("input", !1), this.$emit("close"), document.removeEventListener("mousedown", this.onOutsideMousedown), window.removeEventListener("resize", this.onResize)));
    }
  }
  // watch, mounted & beforeDestroy hooks are set in the detachable.js mixin.
}, $o = /* @__PURE__ */ v(_o, [["render", Bo]]);
function Vo(e, t, i, o, a, l) {
  return s(), b(O, S({ name: "bounce" }, e.$props), {
    default: m(() => [
      c(e.$slots, "default")
    ]),
    _: 3
  }, 16);
}
const Io = {
  name: "w-transition-bounce",
  props: {
    appear: { type: Boolean },
    duration: { type: [Number, String] }
  }
}, To = /* @__PURE__ */ v(Io, [["render", Vo]]);
function Lo(e, t, i, o, a, l) {
  return s(), b(O, {
    name: "expand",
    mode: "out-in",
    css: !1,
    onBeforeAppear: l.beforeAppear,
    onAppear: l.appear,
    onAfterAppear: l.afterAppear,
    onBeforeEnter: l.beforeEnter,
    onEnter: l.enter,
    onAfterEnter: l.afterEnter,
    onBeforeLeave: l.beforeLeave,
    onLeave: l.leave,
    onAfterLeave: l.afterLeave
  }, {
    default: m(() => [
      c(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["onBeforeAppear", "onAppear", "onAfterAppear", "onBeforeEnter", "onEnter", "onAfterEnter", "onBeforeLeave", "onLeave", "onAfterLeave"]);
}
const Ro = {
  name: "w-transition-expand",
  props: {
    x: { type: Boolean },
    y: { type: Boolean },
    duration: { type: Number, default: 250 }
  },
  data: () => ({
    el: {
      savedState: !1,
      originalStyles: "",
      width: 0,
      height: 0,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      marginBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderTopWidth: 0,
      borderBottomWidth: 0
    },
    cleanTransitionCycle: !0
  }),
  computed: {
    animX() {
      return this.x || !this.y;
    },
    animY() {
      return this.y || !this.x;
    }
  },
  methods: {
    beforeAppear(e) {
      this.cleanTransitionCycle && this.saveOriginalInlineStyles(e), this.cleanTransitionCycle = !1;
    },
    appear(e, t) {
      this.show(e), setTimeout(t, this.duration), this.cleanTransitionCycle = !1;
    },
    afterAppear(e) {
      this.applyOriginalStyles(e), e.style.cssText = e.style.cssText.replace("display: none;", ""), this.cleanTransitionCycle = !1;
    },
    beforeEnter(e) {
      this.cleanTransitionCycle && this.saveOriginalInlineStyles(e), this.cleanTransitionCycle = !1;
    },
    enter(e, t) {
      this.show(e), setTimeout(t, this.duration), this.cleanTransitionCycle = !1;
    },
    afterEnter(e) {
      this.applyOriginalStyles(e), e.style.cssText = e.style.cssText.replace("display: none;", ""), this.cleanTransitionCycle = !1;
    },
    beforeLeave(e) {
      this.el.savedState || this.saveComputedStyles(e), this.beforeHide(e), this.cleanTransitionCycle = !1;
    },
    leave(e, t) {
      this.hide(e), setTimeout(t, this.duration), this.cleanTransitionCycle = !1;
    },
    afterLeave(e) {
      this.applyOriginalStyles(e), this.cleanTransitionCycle = !0, this.el.savedState = !1;
    },
    applyHideStyles(e) {
      this.animX && (e.style.width = 0, e.style.marginLeft = 0, e.style.marginRight = 0, e.style.paddingLeft = 0, e.style.paddingRight = 0, e.style.borderLeftWidth = 0, e.style.borderRightWidth = 0), this.animY && (e.style.height = 0, e.style.marginTop = 0, e.style.marginBottom = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0, e.style.borderTopWidth = 0, e.style.borderBottomWidth = 0), e.style.overflow = "hidden";
    },
    applyShowStyles(e) {
      this.animX && (e.style.width = this.el.width + "px", e.style.marginLeft = this.el.marginLeft, e.style.marginRight = this.el.marginRight, e.style.paddingLeft = this.el.paddingLeft, e.style.paddingRight = this.el.paddingRight, e.style.borderLeftWidth = this.el.borderLeftWidth, e.style.borderRightWidth = this.el.borderRightWidth), this.animY && (e.style.height = this.el.height + "px", e.style.marginTop = this.el.marginTop, e.style.marginBottom = this.el.marginBottom, e.style.paddingTop = this.el.paddingTop, e.style.paddingBottom = this.el.paddingBottom, e.style.borderTopWidth = this.el.borderTopWidth, e.style.borderBottomWidth = this.el.borderBottomWidth), e.style.transition = this.duration + "ms ease-in-out";
    },
    applyOriginalStyles(e) {
      e.style.cssText = this.el.originalStyles;
    },
    saveOriginalInlineStyles(e) {
      this.el.originalStyles = e.style.cssText;
    },
    show(e) {
      this.saveComputedStyles(e), this.applyHideStyles(e), setTimeout(() => this.applyShowStyles(e), 20);
    },
    beforeHide(e) {
      this.applyShowStyles(e);
    },
    hide(e) {
      setTimeout(() => this.applyHideStyles(e), 20);
    },
    saveComputedStyles(e) {
      const t = window.getComputedStyle(e, null);
      this.animX && (this.el.width = e.offsetWidth, this.el.marginLeft = t.getPropertyValue("marginLeft"), this.el.marginRight = t.getPropertyValue("marginRight"), this.el.paddingLeft = t.getPropertyValue("paddingLeft"), this.el.paddingRight = t.getPropertyValue("paddingRight"), this.el.borderLeftWidth = t.getPropertyValue("borderLeftWidth"), this.el.borderRightWidth = t.getPropertyValue("borderRightWidth")), this.animY && (this.el.height = e.offsetHeight, this.el.marginTop = t.getPropertyValue("marginTop"), this.el.marginBottom = t.getPropertyValue("marginBottom"), this.el.paddingTop = t.getPropertyValue("paddingTop"), this.el.paddingBottom = t.getPropertyValue("paddingBottom"), this.el.borderTopWidth = t.getPropertyValue("borderTopWidth"), this.el.borderBottomWidth = t.getPropertyValue("borderBottomWidth")), this.el.savedState = !0;
    }
  }
}, Po = /* @__PURE__ */ v(Ro, [["render", Lo]]);
function Oo(e, t, i, o, a, l) {
  return s(), b(O, S({ name: "fade" }, e.$props), {
    default: m(() => [
      c(e.$slots, "default")
    ]),
    _: 3
  }, 16);
}
const xo = {
  name: "w-transition-fade",
  props: {
    appear: { type: Boolean },
    duration: { type: [Number, String] }
  }
}, zo = /* @__PURE__ */ v(xo, [["render", Oo]]);
function Mo(e, t, i, o, a, l) {
  return s(), b(O, S({ name: "scale" }, e.$props), {
    default: m(() => [
      c(e.$slots, "default")
    ]),
    _: 3
  }, 16);
}
const Eo = {
  name: "w-transition-scale",
  props: {
    appear: { type: Boolean },
    duration: { type: [Number, String] }
  }
}, Wo = /* @__PURE__ */ v(Eo, [["render", Mo]]);
function Ko(e, t, i, o, a, l) {
  return s(), b(O, S({ name: "scale-fade" }, e.$props), {
    default: m(() => [
      c(e.$slots, "default")
    ]),
    _: 3
  }, 16);
}
const Ao = {
  name: "w-transition-scale-fade",
  props: {
    appear: { type: Boolean },
    duration: { type: [Number, String] }
  }
}, No = /* @__PURE__ */ v(Ao, [["render", Ko]]);
function Do(e, t, i, o, a, l) {
  return s(), b(O, S({ name: l.transitionName }, e.$props), {
    default: m(() => [
      c(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["name"]);
}
const Ho = {
  name: "w-transition-slide",
  props: {
    appear: { type: Boolean },
    left: { type: Boolean },
    right: { type: Boolean },
    up: { type: Boolean },
    down: { type: Boolean },
    duration: { type: [Number, String] }
  },
  computed: {
    direction() {
      return this.up && "up" || this.down && "down" || this.left && "left" || this.right && "right" || "down";
    },
    transitionName() {
      return `slide-${this.direction}`;
    }
  }
}, Fo = /* @__PURE__ */ v(Ho, [["render", Do]]);
function jo(e, t, i, o, a, l) {
  return s(), b(O, S({ name: l.transitionName }, e.$props), {
    default: m(() => [
      c(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["name"]);
}
const Uo = {
  name: "w-transition-slide-fade",
  props: {
    appear: { type: Boolean },
    left: { type: Boolean },
    right: { type: Boolean },
    up: { type: Boolean },
    down: { type: Boolean },
    duration: { type: [Number, String] }
  },
  computed: {
    direction() {
      return this.up && "up" || this.down && "down" || this.left && "left" || this.right && "right" || "down";
    },
    transitionName() {
      return `slide-fade-${this.direction}`;
    }
  }
}, qo = /* @__PURE__ */ v(Uo, [["render", jo]]);
function Xo(e, t, i, o, a, l) {
  return s(), b(O, S({ name: "twist" }, e.$props), {
    default: m(() => [
      c(e.$slots, "default")
    ]),
    _: 3
  }, 16);
}
const Yo = {
  name: "w-transition-twist",
  props: {
    appear: { type: Boolean },
    duration: { type: [Number, String] }
  }
}, Go = /* @__PURE__ */ v(Yo, [["render", Xo]]), Jo = ["innerHTML"], Qo = {
  key: 1,
  class: "ml1"
};
function Zo(e, t, i, o, a, l) {
  const n = $("w-button"), r = $("w-icon"), d = $("w-tree", !0);
  return s(), u("ul", {
    class: f(["w-tree", l.classes])
  }, [
    (s(!0), u(w, null, L(e.currentDepthItems, (h, k) => (s(), u("li", {
      class: f(["w-tree__item", l.itemClasses(h)]),
      key: k
    }, [
      (s(), b(I(l.getTreeItemComponent(h)), S({ class: "w-tree__item-label" }, h.route && { [!e.$router || l.hasExternalLink(h) ? "href" : "to"]: h.route }, {
        onClick: (_) => !i.disabled && !h.disabled && l.onLabelClick(h, _),
        onKeydown: (_) => !i.disabled && !h.disabled && l.onLabelKeydown(h, _),
        tabindex: l.getTreeItemTabindex(h)
      }), {
        default: m(() => [
          (h.children || h.branch) && (i.expandOpenIcon && h.open || i.expandIcon) && !(i.unexpandableEmpty && !h.children) ? (s(), b(n, {
            key: 0,
            class: "w-tree__item-expand",
            onClick: z((_) => !i.disabled && !h.disabled && l.onLabelClick(h, _), ["stop"]),
            color: "inherit",
            icon: h.open && i.expandOpenIcon || i.expandIcon,
            "icon-props": { rotate90a: !h.open },
            tabindex: -1,
            disabled: i.disabled || h.disabled,
            text: "",
            sm: ""
          }, null, 8, ["onClick", "icon", "icon-props", "disabled"])) : p("", !0),
          c(e.$slots, "item", {
            item: h.originalItem,
            depth: i.depth,
            path: h.path,
            open: h.open
          }, () => {
            var _;
            return [
              l.itemIcon(h) ? (s(), b(r, {
                key: 0,
                class: "w-tree__item-icon",
                color: h.originalItem[i.itemIconColorKey] || i.iconColor
              }, {
                default: m(() => [
                  B(C(l.itemIcon(h)), 1)
                ]),
                _: 2
              }, 1032, ["color"])) : p("", !0),
              y("span", {
                innerHTML: h.label
              }, null, 8, Jo),
              i.counts && (h.children || h.branch) ? (s(), u("span", Qo, "(" + C(((_ = h.originalItem.children) == null ? void 0 : _.length) || 0) + ")", 1)) : p("", !0)
            ];
          })
        ]),
        _: 2
      }, 1040, ["onClick", "onKeydown", "tabindex"])),
      (s(), b(I(i.noTransition ? "div" : "w-transition-expand"), {
        y: !i.noTransition || null,
        onAfterEnter: (_) => e.$emit("open", l.emitPayload(h)),
        onAfterLeave: (_) => e.$emit("close", l.emitPayload(h))
      }, {
        default: m(() => [
          h.children && h.open ? (s(), b(d, S({ key: 0 }, e.$props, {
            depth: i.depth + 1,
            data: h.originalItem.children,
            parent: h,
            onBeforeOpen: t[0] || (t[0] = (_) => e.$emit("before-open", _)),
            onOpen: t[1] || (t[1] = (_) => e.$emit("open", _)),
            onBeforeClose: t[2] || (t[2] = (_) => e.$emit("before-close", _)),
            onClose: t[3] || (t[3] = (_) => e.$emit("close", _)),
            onClick: t[4] || (t[4] = (_) => e.$emit("click", _)),
            onSelect: t[5] || (t[5] = (_) => e.$emit("select", _)),
            "onUpdate:modelValue": t[6] || (t[6] = (_) => e.$emit("update:model-value", _))
          }), {
            item: m(({ item: _, depth: g, path: T, open: P }) => [
              c(e.$slots, "item", {
                item: _,
                depth: g,
                path: T,
                open: P
              })
            ]),
            _: 2
          }, 1040, ["depth", "data", "parent"])) : p("", !0)
        ]),
        _: 2
      }, 1064, ["y", "onAfterEnter", "onAfterLeave"]))
    ], 2))), 128))
  ], 2);
}
const ea = {
  name: "w-tree",
  props: {
    modelValue: { type: [Object, Array] },
    data: { type: [Object, Array], required: !0 },
    depth: { type: Number, default: 0 },
    // To get the context from nested items.
    parent: { type: Object, default: null },
    // To get the context from nested items.
    branchClass: { type: String },
    leafClass: { type: String },
    branchIcon: { type: String },
    branchOpenIcon: { type: String },
    leafIcon: { type: String },
    expandIcon: { type: [Boolean, String], default: "wi-triangle-down" },
    expandOpenIcon: { type: [Boolean, String] },
    expandAll: { type: Boolean },
    unexpandableEmpty: { type: Boolean },
    disabled: { type: Boolean },
    noTransition: { type: Boolean },
    selectable: { type: Boolean },
    // By default it only reacts to items count change (added or deleted items) not property of items change.
    deepReactivity: { type: Boolean },
    counts: { type: Boolean },
    itemIconKey: { type: String, default: "icon" },
    // Support a different icon per item.
    iconColor: { type: String },
    // Applies a color on all the label item icons.
    itemLabelKey: { type: String, default: "label" },
    // Specify a different key for the item label.
    itemIconColorKey: { type: String, default: "iconColor" },
    // Applies a specific color on each label item icons.
    itemRouteKey: { type: String, default: "route" },
    // Uses a router link if the item has the `route` key.
    itemDisabledKey: { type: String, default: "disabled" },
    // Disables the item click and selection.
    itemOpenKey: { type: String, default: "open" }
    // Open the item by default.
  },
  emits: ["update:model-value", "before-open", "open", "before-close", "close", "click", "select"],
  data: () => ({
    currentDepthItems: [],
    // A clone of the data prop with additional info per item.
    dataPropUnwatch: null
    // Holds the unwatch handler of the data prop.
  }),
  computed: {
    classes() {
      return {
        [`w-tree--depth${this.depth}`]: !0,
        "w-tree--expand-icon": this.expandIcon && !this.depth,
        "w-tree--selectable": this.selectable,
        "w-tree--disabled": this.disabled && !this.depth,
        "w-tree--no-expand-button": !this.expandIcon
      };
    }
  },
  methods: {
    //  From data watcher, retain the oldItems open state.
    updateCurrentDepthTree(e, t = []) {
      if (this.currentDepthItems = [], !Array.isArray(e) && typeof e != "object")
        return j(`[w-tree] the tree items must be of type array or object, ${typeof e} received.`);
      Array.isArray(e) || (e = [e]), e.forEach((i, o) => {
        var l, n;
        const a = {
          originalItem: i,
          // Store the original item to return it on event emits.
          _uid: this.depth.toString() + (o + 1),
          label: i[this.itemLabelKey],
          children: !!i.children,
          // The children tree remains available in originalItem.
          branch: i.branch,
          route: i[this.itemRouteKey],
          disabled: i[this.itemDisabledKey],
          selected: ((l = t[o]) == null ? void 0 : l.selected) || !1,
          depth: this.depth,
          open: !!((n = t[o]) != null && n.open || this.expandAll || i[this.itemOpenKey]),
          parent: this.parent || null,
          path: []
          // Ancestors path from root to leaf including self.
        };
        a.path = this.getTreeItemPath(a), this.currentDepthItems.push(a);
      });
    },
    getTreeItemComponent(e) {
      return !this.disabled && !e.disabled && e.route ? !this.$router || this.hasExternalLink(e) ? "a" : "router-link" : "div";
    },
    getTreeItemTabindex(e) {
      return !this.disabled && !e.disabled && (e.children || e.branch || this.selectable) && !(this.unexpandableEmpty && !e.children) ? 0 : null;
    },
    /**
     * Get the tree path of the given item.
     * The full ancestors items are stored in the array and not only their `originalItem`s in case
     * it is mutated before we return it to the user through slots and emitted events.
     * Before it is returned to the user, this array is mapped to only give the `originalItem`s.
     *
     * @param {Object} item the tree item to get the ancestors path for.
     * @return an array of item objects from the root to the leaf (including the item itself).
     */
    getTreeItemPath(e) {
      const t = [e];
      let i = e.parent;
      for (; i; )
        t.push(i), i = i.parent;
      return t.reverse(), t;
    },
    getTreeItemPathForOutput(e) {
      return e.path.map((t) => t.originalItem);
    },
    /**
     * Expand/collapse the given tree item when possible (not disabled, has children).
     *
     * @param {Object} item the item to expand.
     * @param {Boolean|Undefined} open when a boolean is received, force a state (open or close).
     */
    expandDepth(e, t) {
      typeof t == "boolean" ? e.open = t : e.open = !e.open;
      const i = this.emitPayload(e);
      return this.$emit(e.open ? "before-open" : "before-close", i), !this.unexpandableEmpty && !e.children && this.$emit(e.open ? "open" : "close", i), !0;
    },
    onLabelClick(e, t) {
      e[this.itemRouteKey] && this.$router && !this.hasExternalLink(e) && t.preventDefault(), (e.children || e.branch && !this.unexpandableEmpty) && this.expandDepth(e), this.selectable && (e.selected = !e.selected);
      const o = this.emitPayload(e, t);
      this.$emit("click", o), this.emitItemSelection(e, t);
    },
    onLabelKeydown(e, t) {
      if (!(t.metaKey || t.ctrlKey || t.altKey || t.shiftKey) && [13, 32, 37, 38, 39, 40].includes(t.keyCode) && ((e.children || e.branch) && ([13, 32].includes(t.keyCode) ? this.expandDepth(e) && t.preventDefault() : t.keyCode === 37 ? this.expandDepth(e, !1) && t.preventDefault() : t.keyCode === 39 && this.expandDepth(e, !0) && t.preventDefault()), [38, 40].includes(t.keyCode))) {
        const o = this.$el.closest(".w-tree--depth0").querySelectorAll('.w-tree__item-label[tabindex="0"]'), a = t.target.closest(".w-tree__item-label"), l = t.keyCode === 38 ? -1 : 1;
        [...o].some((n, r) => n.isSameNode(a) ? (o[r + l] && o[r + l].focus(), !0) : !1);
      }
      t.keyCode === 13 && (this.selectable && (e.selected = !e.selected), this.emitItemSelection(e, t));
    },
    emitItemSelection(e, t) {
      const i = this.emitPayload(e, t);
      this.$emit("update:model-value", i), this.selectable && this.$emit("select", i);
    },
    emitPayload(e, t) {
      const i = {
        item: e.originalItem,
        depth: this.depth,
        path: this.getTreeItemPathForOutput(e)
      };
      return t && (i.e = t), (e.children || e.branch && !this.unexpandableEmpty) && (i.open = e.open), this.selectable && (i.selected = e.selected), i;
    },
    /**
     * Returns the previous sibling matching the given selector, or false if not found.
     *
     * @param {Object} node the DOM node to find sibling for.
     * @param {String} selector any valid DOM selector to match the siblings.
     */
    getPreviousSibling(e, t) {
      for (; t && (e = e.previousElementSibling); )
        if (e.matches(t))
          return e;
      return !1;
    },
    /**
     * Returns the next sibling matching the given selector, or false if not found.
     *
     * @param {Object} node the DOM node to find sibling for.
     * @param {String} selector any valid DOM selector to match the siblings.
     */
    getNextSibling(e, t) {
      for (; t && (e = e.nextElementSibling); )
        if (e.matches(t))
          return e;
      return !1;
    },
    focusTreeItem(e) {
      e && e.querySelector(".w-tree__item-label").focus();
    },
    itemIcon(e) {
      return e.originalItem[this.itemIconKey] || !e.children && !e.branch && this.leafIcon || (e.children || e.branch) && (e.open && this.branchOpenIcon || this.branchIcon);
    },
    hasExternalLink(e) {
      return /^(https?:)?\/\/|mailto:|tel:/.test(e[this.itemRouteKey]);
    },
    itemClasses(e) {
      return {
        [e.children || e.branch ? "w-tree__item--branch" : "w-tree__item--leaf"]: !0,
        "w-tree__item--disabled": e[this.itemDisabledKey],
        "w-tree__item--selected": e.selected,
        "w-tree__item--empty": e.branch && !e.children,
        "w-tree__item--unexpandable": e.branch && !e.children && this.unexpandableEmpty
      };
    }
  },
  created() {
    this.updateCurrentDepthTree(this.data), this.dataPropUnwatch = this.$watch(
      "data",
      // The open property of each item has to be retained from this.currentDepthItems in order to stay
      // in the same state after DOM repaint.
      (e) => this.updateCurrentDepthTree(e, this.currentDepthItems),
      { deep: !!this.deepReactivity }
      // Deep watching is more resource consuming. Only enable on user demand.
    );
  },
  unmounted() {
    this.dataPropUnwatch();
  }
}, ta = /* @__PURE__ */ v(ea, [["render", Zo]]), ia = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WAccordion: Ye,
  WAlert: Ze,
  WApp: pt,
  WAutocomplete: dt,
  WBadge: gt,
  WBreadcrumbs: kt,
  WButton: Tt,
  WCard: Ot,
  WCheckbox: Ht,
  WCheckboxes: qt,
  WConfirm: Gt,
  WDatePicker: Zt,
  WDialog: ii,
  WDivider: ai,
  WDrawer: hi,
  WFlex: fi,
  WForm: yi,
  WFormElement: vi,
  WGrid: Bi,
  WIcon: Vi,
  WImage: Ri,
  WInput: Di,
  WList: ji,
  WMenu: Xi,
  WNotification: Ji,
  WOverlay: el,
  WParallax: sl,
  WProgress: cl,
  WRadio: kl,
  WRadios: Bl,
  WRating: Tl,
  WScrollable: Ol,
  WSelect: Al,
  WSlider: es,
  WSpinner: ss,
  WSteps: ns,
  WSwitch: ms,
  WTable: so,
  WTabs: Is,
  WTag: ro,
  WTextarea: mo,
  WTimeline: ko,
  WToolbar: So,
  WTooltip: $o,
  WTransitionBounce: To,
  WTransitionExpand: Po,
  WTransitionFade: zo,
  WTransitionScale: Wo,
  WTransitionScaleFade: No,
  WTransitionSlide: Fo,
  WTransitionSlideFade: qo,
  WTransitionTwist: Go,
  WTree: ta
}, Symbol.toStringTag, { value: "Module" })), la = q.install;
q.install = (e, t = {}) => la.call(q, e, { components: ia, ...t });
export {
  q as default
};
