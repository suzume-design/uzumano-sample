/* @ds-bundle: {"format":4,"namespace":"DesignSystem_91387c","components":[{"name":"CircleMotif","sourcePath":"components/brand/CircleMotif.jsx"},{"name":"LogoMark","sourcePath":"components/brand/LogoMark.jsx"},{"name":"Signature","sourcePath":"components/brand/Signature.jsx"},{"name":"VerticalLead","sourcePath":"components/brand/VerticalLead.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Note","sourcePath":"components/core/Note.jsx"},{"name":"FullBleedHero","sourcePath":"components/layout/FullBleedHero.jsx"},{"name":"NewsList","sourcePath":"components/layout/NewsList.jsx"},{"name":"PhotoCaption","sourcePath":"components/layout/PhotoCaption.jsx"},{"name":"PriceRow","sourcePath":"components/layout/PriceRow.jsx"},{"name":"SectionHeading","sourcePath":"components/layout/SectionHeading.jsx"},{"name":"TextImageSplit","sourcePath":"components/layout/TextImageSplit.jsx"}],"sourceHashes":{"components/brand/CircleMotif.jsx":"5b67cb7c737e","components/brand/LogoMark.jsx":"258f7d6cdc54","components/brand/Signature.jsx":"55509ce39696","components/brand/VerticalLead.jsx":"bbe1a3afe462","components/core/Button.jsx":"4c44e4014421","components/core/Note.jsx":"83ab1aa2ced3","components/layout/FullBleedHero.jsx":"ab730537fa4d","components/layout/NewsList.jsx":"1d1a17b5545d","components/layout/PhotoCaption.jsx":"a2afa61e78fa","components/layout/PriceRow.jsx":"94b291e93c5f","components/layout/SectionHeading.jsx":"ed62821eb525","components/layout/TextImageSplit.jsx":"3511295406ea","ui_kits/website/Chrome.jsx":"89c31ec6644d","ui_kits/website/HomeScreen.jsx":"62a456de45f1","ui_kits/website/ReserveScreen.jsx":"3270c4a5be55","ui_kits/website/StayScreen.jsx":"0c99e900a9ca"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_91387c = window.DesignSystem_91387c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/CircleMotif.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  s: 'var(--motif-s)',
  m: 'var(--motif-m)',
  l: 'var(--motif-l)'
};

/** A photograph cropped to a circle, its edge traced by the sprout curve of the mark. */
function CircleMotif({
  src,
  alt = '',
  size = 'm',
  caption,
  sprout = true,
  style,
  ...rest
}) {
  const dim = SIZES[size] || SIZES.m;
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-4)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: dim,
      height: dim,
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      overflow: 'hidden',
      background: 'var(--tint-warm)'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: '-7px',
      borderRadius: '50%',
      border: 'var(--hairline) solid var(--border-hairline)'
    }
  }), sprout && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 120 120",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: '-7px',
      width: 'calc(100% + 14px)',
      height: 'calc(100% + 14px)',
      overflow: 'visible'
    },
    fill: "none",
    stroke: "var(--muted-light)",
    strokeWidth: "1.1",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M60 116C60 84 68 58 92 40"
  }))), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontSize: 'var(--size-caption)',
      color: 'var(--text-caption)',
      letterSpacing: 'var(--ls-body)'
    }
  }, caption));
}
Object.assign(__ds_scope, { CircleMotif });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/CircleMotif.jsx", error: String((e && e.message) || e) }); }

// components/brand/LogoMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The うずまの mark: a hairline circle enclosing a single sprouting curve. */
function LogoMark({
  size = 72,
  withWordmark = false,
  color = 'currentColor',
  style,
  ...rest
}) {
  const wrap = {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '14px',
    color,
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: wrap
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 120 120",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.2",
    strokeLinecap: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "60",
    cy: "60",
    r: "45"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M60 92C60 72 56.5 56 48 44c13 2 21.5 13 21.5 27.5C69.5 82 65.5 88 60 92Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M60 92C60 62 66 42 82 30"
  })), withWordmark && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '7px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-jp)',
      fontSize: Math.max(13, size * 0.2) + 'px',
      letterSpacing: '0.3em',
      textIndent: '0.3em',
      lineHeight: 1
    }
  }, "\u3046\u305A\u307E\u306E"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-latin)',
      fontSize: Math.max(9, size * 0.11) + 'px',
      letterSpacing: '0.34em',
      textIndent: '0.34em',
      lineHeight: 1
    }
  }, "OYAMA NO RETREAT")));
}
Object.assign(__ds_scope, { LogoMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/LogoMark.jsx", error: String((e && e.message) || e) }); }

// components/brand/Signature.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The owner's handwritten signature, used exactly once per page. */
function Signature({
  src,
  name = '',
  role,
  width = 190,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      alignItems: 'flex-start',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name ? name + ' 署名' : '署名',
    style: {
      width: typeof width === 'number' ? width + 'px' : width,
      height: 'auto'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: typeof width === 'number' ? width + 'px' : width,
      height: '46px',
      borderBottom: 'var(--hairline) solid var(--border-hairline)',
      display: 'flex',
      alignItems: 'flex-end',
      fontFamily: 'var(--font-latin)',
      fontSize: '11px',
      letterSpacing: '0.16em',
      color: 'var(--muted-light)'
    }
  }, "SIGNATURE IMAGE"), role && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-jp)',
      fontSize: 'var(--size-caption)',
      letterSpacing: 'var(--ls-body)',
      color: 'var(--text-caption)'
    }
  }, role));
}
Object.assign(__ds_scope, { Signature });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Signature.jsx", error: String((e && e.message) || e) }); }

// components/brand/VerticalLead.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A vertical-writing (縦書き) lead paragraph — one per page, used as a quiet opening voice. */
function VerticalLead({
  children,
  height = 320,
  align = 'right',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("p", {
    style: {
      writingMode: 'vertical-rl',
      textOrientation: 'upright',
      fontFamily: 'var(--font-jp)',
      fontSize: 'var(--size-body)',
      lineHeight: 2.4,
      letterSpacing: '0.12em',
      color: 'var(--text-body)',
      height: typeof height === 'number' ? height + 'px' : height,
      margin: 0
    }
  }, children));
}
Object.assign(__ds_scope, { VerticalLead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/VerticalLead.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Two buttons only: a filled accent capsule and a hairline outlined one. */
function Button({
  variant = 'fill',
  as = 'a',
  href,
  children,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-3)',
    fontFamily: 'var(--font-jp)',
    fontSize: 'var(--size-small)',
    letterSpacing: '0.16em',
    textIndent: '0.16em',
    lineHeight: 1,
    padding: '16px 30px',
    borderRadius: 'var(--radius-none)',
    cursor: disabled ? 'default' : 'pointer',
    textDecoration: 'none',
    color: 'var(--text-on-accent)',
    background: 'transparent',
    border: 'var(--hairline) solid transparent',
    transition: 'opacity var(--dur-fast) var(--ease-quiet), background var(--dur-fast) var(--ease-quiet)',
    opacity: disabled ? 0.38 : 1,
    minHeight: '44px',
    boxSizing: 'border-box',
    whiteSpace: 'nowrap',
    flexShrink: 0,
    alignSelf: 'flex-start',
    width: 'max-content'
  };
  const variants = {
    fill: {
      background: 'var(--cta-fill)',
      borderColor: 'var(--cta-fill)'
    },
    outline: {
      borderColor: 'var(--border-hairline)'
    }
  };
  const Tag = as;
  const props = Tag === 'a' ? {
    href: disabled ? undefined : href
  } : {
    disabled,
    type: 'button'
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, props, {
    onClick: disabled ? undefined : onClick,
    style: {
      ...base,
      ...(variants[variant] || variants.fill),
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.opacity = 'var(--hover-opacity)';
    },
    onMouseLeave: e => {
      if (!disabled) e.currentTarget.style.opacity = '1';
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, children), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: 'var(--font-latin)',
      opacity: 0.8
    }
  }, "\u2014>"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Note.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Requests and cautions. Set close to body size (15px) so it is genuinely read, not decorative small print. */
function Note({
  children,
  tint = 'none',
  rule = false,
  style,
  ...rest
}) {
  const bg = tint === 'warm' ? 'var(--bg-block-warm)' : tint === 'cool' ? 'var(--bg-block-cool)' : 'transparent';
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      fontFamily: 'var(--font-jp)',
      fontSize: 'var(--size-small)',
      lineHeight: 'var(--lh-body)',
      letterSpacing: 'var(--ls-body)',
      color: 'var(--muted)',
      background: bg,
      padding: tint === 'none' ? 0 : 'var(--space-5)',
      borderTop: rule ? 'var(--hairline) solid var(--border-hairline)' : 'none',
      paddingTop: rule && tint === 'none' ? 'var(--space-4)' : undefined,
      maxWidth: 'var(--measure-jp)',
      margin: 0,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Note });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Note.jsx", error: String((e && e.message) || e) }); }

// components/layout/FullBleedHero.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Full-screen photograph with a pale veil and the mark knocked out in white at centre. */
function FullBleedHero({
  src,
  alt = '',
  height = '100vh',
  caption,
  children,
  markSize = 96,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      position: 'relative',
      height,
      width: '100%',
      overflow: 'hidden',
      background: 'var(--tint-cool)',
      ...style
    }
  }, rest), src && /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-photo)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-6)',
      color: '#FFFFFF'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: markSize,
    height: markSize,
    viewBox: "0 0 120 120",
    fill: "none",
    stroke: "#FFFFFF",
    strokeWidth: "1.2",
    strokeLinecap: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "60",
    cy: "60",
    r: "45"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M60 92C60 72 56.5 56 48 44c13 2 21.5 13 21.5 27.5C69.5 82 65.5 88 60 92Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M60 92C60 62 66 42 82 30"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-jp)',
      fontSize: '19px',
      letterSpacing: '0.34em',
      textIndent: '0.34em',
      lineHeight: 1
    }
  }, "\u3046\u305A\u307E\u306E"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-latin)',
      fontSize: 'var(--size-label)',
      letterSpacing: 'var(--ls-label)',
      textIndent: 'var(--ls-label)',
      lineHeight: 1
    }
  }, "OYAMA NO RETREAT")), children), caption && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 'var(--gutter)',
      bottom: 'var(--space-5)',
      color: '#FFFFFF',
      fontFamily: 'var(--font-latin)',
      fontSize: 'var(--size-note)',
      letterSpacing: '0.14em'
    }
  }, caption));
}
Object.assign(__ds_scope, { FullBleedHero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/FullBleedHero.jsx", error: String((e && e.message) || e) }); }

// components/layout/NewsList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Date + title text rows, hairline-separated. No thumbnails, no cards. */
function NewsList({
  items = [],
  onSelect,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("ul", _extends({
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: it.id || i,
    style: {
      borderBottom: 'var(--hairline) solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: it.href || '#',
    onClick: e => {
      if (onSelect) {
        e.preventDefault();
        onSelect(it, i);
      }
    },
    style: {
      display: 'grid',
      gridTemplateColumns: '112px 1fr',
      gap: 'var(--space-5)',
      alignItems: 'baseline',
      padding: 'var(--space-5) 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-latin)',
      fontSize: 'var(--size-caption)',
      letterSpacing: '0.1em',
      color: 'var(--muted)'
    }
  }, it.date), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-jp)',
      fontSize: 'var(--size-body)',
      lineHeight: 1.8,
      letterSpacing: 'var(--ls-body)',
      color: 'var(--ink)'
    }
  }, it.title)))));
}
Object.assign(__ds_scope, { NewsList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/NewsList.jsx", error: String((e && e.message) || e) }); }

// components/layout/PhotoCaption.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A rectangular photograph with its one-line caption beneath. Photographs are never cropped round or square. */
function PhotoCaption({
  src,
  alt = '',
  caption,
  height = '420px',
  width = '100%',
  align = 'left',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      width,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height,
      background: 'var(--tint-warm)',
      overflow: 'hidden',
      position: 'relative'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '14px',
      bottom: '12px',
      fontFamily: 'var(--font-latin)',
      fontSize: '11px',
      letterSpacing: '0.16em',
      color: 'var(--muted-light)'
    }
  }, "PHOTOGRAPH")), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--space-3)',
      fontFamily: 'var(--font-jp)',
      fontSize: 'var(--size-caption)',
      lineHeight: 1.8,
      letterSpacing: 'var(--ls-body)',
      color: 'var(--text-caption)',
      textAlign: align
    }
  }, caption));
}
Object.assign(__ds_scope, { PhotoCaption });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/PhotoCaption.jsx", error: String((e && e.message) || e) }); }

// components/layout/PriceRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** One hairline-separated price line: name (+ note) on the left, figure on the right. */
function PriceRow({
  name,
  note,
  price,
  unit = '円',
  latin,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 'var(--space-5)',
      padding: 'var(--space-5) 0',
      borderBottom: 'var(--hairline) solid var(--border-hairline)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-jp)',
      fontSize: 'var(--size-body)',
      letterSpacing: 'var(--ls-body)'
    }
  }, name), latin && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-latin)',
      fontSize: 'var(--size-label)',
      letterSpacing: 'var(--ls-label)',
      color: 'var(--text-label)',
      textTransform: 'uppercase'
    }
  }, latin), note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-caption)',
      color: 'var(--text-caption)',
      lineHeight: 'var(--lh-tight)'
    }
  }, note)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-latin)',
      fontSize: 'var(--size-h3)',
      letterSpacing: '0.06em',
      whiteSpace: 'nowrap'
    }
  }, price, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-jp)',
      fontSize: 'var(--size-small)',
      marginLeft: '0.35em'
    }
  }, unit)));
}
Object.assign(__ds_scope, { PriceRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/PriceRow.jsx", error: String((e && e.message) || e) }); }

// components/layout/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Japanese heading with a small tracked latin label beneath it. */
function SectionHeading({
  title,
  label,
  level = 2,
  align = 'left',
  style,
  ...rest
}) {
  const Tag = 'h' + level;
  const size = level === 1 ? 'var(--size-h1)' : level === 3 ? 'var(--size-h3)' : 'var(--size-h2)';
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(Tag, {
    style: {
      fontFamily: 'var(--font-jp)',
      fontWeight: 400,
      fontSize: size,
      lineHeight: 'var(--lh-heading)',
      letterSpacing: 'var(--ls-heading)',
      color: 'var(--text-heading)',
      margin: 0
    }
  }, title), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-latin)',
      fontSize: 'var(--size-label)',
      letterSpacing: 'var(--ls-label)',
      textIndent: 'var(--ls-label)',
      color: 'var(--text-label)',
      textTransform: 'uppercase',
      lineHeight: 1
    }
  }, label));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/layout/TextImageSplit.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Asymmetric block: a narrow text column on one side, a photograph bled to the page edge on the other. */
function TextImageSplit({
  src,
  alt = '',
  caption,
  imageSide = 'right',
  ratio = '1fr 1.25fr',
  gap = 'var(--space-9)',
  imageHeight = '58vh',
  children,
  style,
  ...rest
}) {
  const text = /*#__PURE__*/React.createElement("div", {
    key: "t",
    style: {
      maxWidth: 'var(--measure-jp)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      paddingInline: 'var(--gutter)'
    }
  }, children);
  const photo = /*#__PURE__*/React.createElement("figure", {
    key: "p",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--tint-warm)',
      height: imageHeight,
      overflow: 'hidden',
      position: 'relative'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '14px',
      bottom: '12px',
      fontFamily: 'var(--font-latin)',
      fontSize: '11px',
      letterSpacing: '0.16em',
      color: 'var(--muted-light)'
    }
  }, "PHOTOGRAPH")), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--space-3)',
      paddingInline: imageSide === 'left' ? 'var(--gutter)' : 0,
      fontSize: 'var(--size-caption)',
      color: 'var(--text-caption)',
      letterSpacing: 'var(--ls-body)'
    }
  }, caption));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: imageSide === 'right' ? ratio : ratio.split(' ').reverse().join(' '),
      gap,
      alignItems: 'center',
      ...style
    }
  }, rest), imageSide === 'right' ? [text, photo] : [photo, text]);
}
Object.assign(__ds_scope, { TextImageSplit });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/TextImageSplit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DS = window.DesignSystem_91387c;
const {
  SectionHeading,
  CircleMotif,
  FullBleedHero,
  TextImageSplit,
  PhotoCaption,
  NewsList,
  PriceRow,
  Button,
  Note,
  VerticalLead,
  LogoMark,
  Signature
} = DS;
const NAV = [{
  id: 'home',
  jp: 'はじめに',
  en: 'Home'
}, {
  id: 'about',
  jp: '私たちのこと',
  en: 'About'
}, {
  id: 'stay',
  jp: '滞在のこと',
  en: 'Stay'
}, {
  id: 'price',
  jp: '料金',
  en: 'Price'
}, {
  id: 'reserve',
  jp: 'ご予約',
  en: 'Reserve'
}];
function Header({
  current,
  onNav
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 9,
      background: 'var(--ground)',
      borderBottom: 'var(--hairline) solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--gutter)',
      height: '66px'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-7)'
    }
  }, NAV.slice(0, 4).map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(n.id);
    },
    style: {
      fontSize: 'var(--size-small)',
      letterSpacing: '0.08em',
      color: current === n.id ? 'var(--ink)' : 'var(--muted)'
    }
  }, n.jp))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('reserve');
    },
    style: {
      fontSize: 'var(--size-small)',
      letterSpacing: '0.08em',
      color: 'var(--muted)',
      border: 'var(--hairline) solid var(--border-hairline)',
      padding: '12px 24px'
    }
  }, "\u3054\u4E88\u7D04")));
}
function Footer({
  onNav
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface)',
      borderTop: 'var(--hairline) solid var(--border-hairline)',
      padding: 'var(--space-9) var(--gutter) var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr 0.8fr',
      gap: 'var(--space-9)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(LogoMark, {
    size: 58,
    withWordmark: true,
    style: {
      alignItems: 'flex-start'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-caption)',
      color: 'var(--muted)',
      lineHeight: 2.1
    }
  }, "\u3012402-0209 \u5C71\u68A8\u770C\u5357\u90FD\u7559\u90E1\u9053\u5FD7\u6751", /*#__PURE__*/React.createElement("br", null), "\u4E00\u65E5\u3072\u3068\u7D44\u30FB\u5973\u6027\u306E\u305F\u3081\u306E\u5BBF", /*#__PURE__*/React.createElement("br", null), "TEL 0554-00-0000\uFF089:00 \u2014 18:00\uFF09"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(n.id);
    },
    style: {
      fontSize: 'var(--size-caption)',
      color: 'var(--muted)',
      letterSpacing: '0.06em'
    }
  }, n.jp)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)',
      paddingTop: 'var(--space-4)',
      borderTop: 'var(--hairline) solid var(--border-hairline)',
      fontFamily: 'var(--font-latin)',
      fontSize: '11px',
      letterSpacing: '0.16em',
      color: 'var(--muted-light)'
    }
  }, "\xA9 OYAMA NO RETREAT UZUMANO"));
}
function Section({
  alt = false,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: alt ? 'var(--surface)' : 'var(--ground)',
      paddingBlock: 'var(--section-pad-y)',
      ...style
    }
  }, children);
}

/** Two photographs of deliberately different size — never a matched pair. */
function UnevenPhotos({
  big = {},
  small = {},
  reverse = false
}) {
  const b = /*#__PURE__*/React.createElement(PhotoCaption, _extends({
    key: "b",
    height: "460px"
  }, big));
  const s = /*#__PURE__*/React.createElement("div", {
    key: "s",
    style: {
      paddingTop: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(PhotoCaption, _extends({
    height: "260px"
  }, small)));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: reverse ? '0.62fr 1fr' : '1fr 0.62fr',
      gap: 'var(--space-6)',
      alignItems: 'start',
      paddingInline: 'var(--gutter)'
    }
  }, reverse ? [s, b] : [b, s]);
}
Object.assign(window, {
  NAV,
  Header,
  Footer,
  Section,
  UnevenPhotos,
  SectionHeading,
  CircleMotif,
  FullBleedHero,
  TextImageSplit,
  PhotoCaption,
  NewsList,
  PriceRow,
  Button,
  Note,
  VerticalLead,
  LogoMark,
  Signature
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
function HomeScreen({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FullBleedHero, {
    height: "620px"
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.8fr 1.35fr',
      gap: 'var(--space-9)',
      alignItems: 'start',
      paddingInline: 'var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(VerticalLead, {
    height: 320,
    align: "left"
  }, "\u5C71\u306E\u3075\u3082\u3068\u3067\u3001\u4E09\u65E5\u3076\u3093\u306E\u9759\u3051\u3055\u3092\u3002", /*#__PURE__*/React.createElement("br", null), "\u98DF\u3092\u624B\u3070\u306A\u3059\u3068\u3001\u304D\u3053\u3048\u3066\u304F\u308B\u58F0\u304C\u3042\u308A\u307E\u3059\u3002"), /*#__PURE__*/React.createElement(PhotoCaption, {
    height: "400px",
    caption: "\u5BB6\u306E\u524D\u3092\u6D41\u308C\u308B\u6CA2\u3002\u96E8\u306E\u7FCC\u65E5\u306F\u3059\u3053\u3057\u6FC1\u308A\u307E\u3059\u3002"
  }))), /*#__PURE__*/React.createElement(Section, {
    alt: true
  }, /*#__PURE__*/React.createElement(TextImageSplit, {
    imageSide: "right",
    imageHeight: "440px",
    caption: "\u571F\u9593\u304B\u3089\u5BA2\u9593\u3092\u898B\u305F\u3068\u3053\u308D\u3002"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "\u79C1\u305F\u3061\u306E\u3053\u3068",
    label: "About"
  }), /*#__PURE__*/React.createElement("p", null, "\u9053\u5FD7\u6751\u306E\u5C71\u306E\u306A\u304B\u306B\u3001\u4E00\u65E5\u3072\u3068\u7D44\u3060\u3051\u306E\u5C0F\u3055\u306A\u5BBF\u304C\u3042\u308A\u307E\u3059\u3002\u3082\u3068\u306F\u5C71\u4ED5\u4E8B\u306E\u5BB6\u3067\u3057\u305F\u3002\u308F\u305F\u3057\u304C\u3072\u3068\u308A\u3067\u3001\u6599\u7406\u3082\u6383\u9664\u3082\u3057\u3066\u3044\u307E\u3059\u3002"), /*#__PURE__*/React.createElement("p", null, "\u624B\u304C\u8DB3\u308A\u306A\u3044\u306E\u3067\u3001\u884C\u304D\u5C4A\u304B\u306A\u3044\u3053\u3068\u3082\u3042\u308A\u307E\u3059\u3002\u305D\u306E\u3076\u3093\u3001\u53F0\u6240\u306B\u3082\u6CA2\u306B\u3082\u3001\u3069\u3046\u305E\u6C17\u8EFD\u306B\u5165\u3063\u3066\u304D\u3066\u304F\u3060\u3055\u3044\u3002"), /*#__PURE__*/React.createElement(Signature, {
    role: "\u3046\u305A\u307E\u306E\u3000\u5E97\u4E3B"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('about');
    }
  }, "\u3088\u307F\u3082\u306E"))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingInline: 'var(--gutter)',
      marginBottom: 'var(--space-8)',
      maxWidth: 'var(--measure-jp)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "\u6EDE\u5728\u306E\u3053\u3068"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, "\u5BA2\u9593\u306F\u3075\u305F\u9593\u3002\u969C\u5B50\u306E\u3080\u3053\u3046\u306F\u3001\u305F\u3060\u5C71\u3067\u3059\u3002\u591C\u306F\u706F\u308A\u3092\u843D\u3068\u3057\u3066\u3001\u6CA2\u306E\u97F3\u3060\u3051\u3092\u6B8B\u3057\u307E\u3059\u3002")), /*#__PURE__*/React.createElement(UnevenPhotos, {
    big: {
      caption: '朝の客間。布団は自分で上げていただきます。'
    },
    small: {
      caption: '湯あがりに、縁側で。'
    }
  })), /*#__PURE__*/React.createElement(Section, {
    alt: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingInline: 'var(--gutter)',
      display: 'grid',
      gridTemplateColumns: '0.8fr 1.5fr',
      gap: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "\u6599\u91D1"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PriceRow, {
    name: "\u4E8C\u6CCA\u4E09\u65E5 \u30D5\u30A1\u30B9\u30C6\u30A3\u30F3\u30B0",
    note: "\u4E00\u540D\u4E00\u5BA4\uFF0F\u6E96\u5099\u98DF\u30FB\u56DE\u5FA9\u98DF\u3064\u304D",
    price: "68,000"
  }), /*#__PURE__*/React.createElement(PriceRow, {
    name: "\u4E09\u6CCA\u56DB\u65E5 \u30D5\u30A1\u30B9\u30C6\u30A3\u30F3\u30B0",
    note: "\u4E00\u540D\u4E00\u5BA4\uFF0F\u9175\u7D20\u30C9\u30EA\u30F3\u30AF\u30FB\u6E29\u6D74\u3064\u304D",
    price: "92,000"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'flex',
      gap: 'var(--space-6)',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "fill",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('reserve');
    }
  }, "\u3054\u4E88\u7D04"), /*#__PURE__*/React.createElement(Note, {
    style: {
      maxWidth: '22em'
    }
  }, "\u7A0E\u8FBC\u3002\u4E8C\u540D\u4E00\u5BA4\u306E\u5834\u5408\u306F\u3001\u304A\u3072\u3068\u308A 6,000\u5186\u5F15\u304D\u306B\u306A\u308A\u307E\u3059\u3002"))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingInline: 'var(--gutter)',
      display: 'grid',
      gridTemplateColumns: '0.8fr 1.5fr',
      gap: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "\u304A\u3057\u3089\u305B"
  }), /*#__PURE__*/React.createElement(NewsList, {
    items: [{
      date: '2026.10.14',
      title: '十一月のご予約を開きました'
    }, {
      date: '2026.09.28',
      title: '秋の回復食に、栗のおかゆを添えています'
    }, {
      date: '2026.08.02',
      title: '道志みちの工事による迂回のおしらせ'
    }, {
      date: '2026.06.19',
      title: '沢の水位が上がっています。足もとにお気をつけください'
    }]
  }))));
}
function AboutScreen() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingInline: 'var(--gutter)',
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 'var(--space-9)',
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "\u79C1\u305F\u3061\u306E\u3053\u3068",
    level: 1
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 'var(--measure-jp)'
    }
  }, "\u3082\u3068\u306F\u5C71\u4ED5\u4E8B\u306E\u5BB6\u3067\u3057\u305F\u3002\u624B\u3092\u5165\u308C\u3059\u304E\u305A\u3001\u5E8A\u3068\u969C\u5B50\u3060\u3051\u3092\u76F4\u3057\u3066\u3001\u3072\u3068\u7D44\u3060\u3051\u3092\u304A\u8FCE\u3048\u3057\u3066\u3044\u307E\u3059\u3002"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 'var(--measure-jp)'
    }
  }, "\u307E\u3060\u6163\u308C\u306A\u3044\u3053\u3068\u3082\u591A\u304F\u3001\u671D\u306F\u53F0\u6240\u304B\u3089\u97F3\u304C\u3059\u308B\u3068\u601D\u3044\u307E\u3059\u3002\u3069\u3046\u305E\u3001\u4EBA\u306E\u5BB6\u306B\u6765\u305F\u3064\u3082\u308A\u3067\u304A\u904E\u3054\u3057\u304F\u3060\u3055\u3044\u3002"), /*#__PURE__*/React.createElement(Signature, {
    role: "\u3046\u305A\u307E\u306E\u3000\u5E97\u4E3B"
  })), /*#__PURE__*/React.createElement(CircleMotif, {
    size: "m",
    caption: "\u6CA2\u306E\u307B\u3068\u308A"
  }))), /*#__PURE__*/React.createElement(Section, {
    alt: true
  }, /*#__PURE__*/React.createElement(TextImageSplit, {
    imageSide: "right",
    imageHeight: "460px",
    caption: "\u300C\u3046\u305A\u307E\u300D\u3068\u547C\u3070\u308C\u3066\u304D\u305F\u6DF5\u3002"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "\u3046\u305A\u307E\u306E\u3001\u3068\u3044\u3046\u540D\u524D"
  }), /*#__PURE__*/React.createElement("p", null, "\u6CA2\u304C\u6E26\u3092\u307E\u304F\u6DF5\u3092\u3001\u3053\u306E\u3042\u305F\u308A\u3067\u306F\u300C\u3046\u305A\u307E\u300D\u3068\u547C\u3073\u307E\u3057\u305F\u3002\u6D41\u308C\u304C\u4E00\u5EA6\u3068\u3069\u307E\u308B\u5834\u6240\u3067\u3059\u3002"), /*#__PURE__*/React.createElement(Note, {
    tint: "warm"
  }, "\u5C71\u68A8\u770C\u5357\u90FD\u7559\u90E1\u9053\u5FD7\u6751\uFF0F\u65B0\u5BBF\u304B\u3089\u8ECA\u3067\u304A\u3088\u305D100\u5206\u3002\u9001\u8FCE\u306F\u90FD\u7559\u5E02\u99C5\u307E\u3067\u627F\u308A\u307E\u3059\u3002"))));
}
Object.assign(window, {
  HomeScreen,
  AboutScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ReserveScreen.jsx
try { (() => {
function Field({
  label,
  latin,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      paddingBlock: 'var(--space-5)',
      borderBottom: 'var(--hairline) solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-small)'
    }
  }, label), latin && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-latin)',
      fontSize: 'var(--size-caption)',
      letterSpacing: '0.08em',
      color: 'var(--muted)'
    }
  }, latin)), children);
}
const inputStyle = {
  border: 'none',
  background: 'transparent',
  fontFamily: 'var(--font-jp)',
  fontSize: 'var(--size-body)',
  letterSpacing: 'var(--ls-body)',
  color: 'var(--ink)',
  outline: 'none',
  padding: 0,
  minHeight: '28px'
};
function ReserveScreen() {
  const [sent, setSent] = React.useState(false);
  const [plan, setPlan] = React.useState('二泊三日');
  if (sent) {
    return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
      style: {
        paddingInline: 'var(--gutter)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-6)',
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement(PhotoCaption, {
      height: "300px",
      width: "420px",
      caption: "\u6CA2\u306B\u304A\u308A\u308B\u9053\u3002"
    }), /*#__PURE__*/React.createElement(SectionHeading, {
      title: "\u304A\u7533\u3057\u8FBC\u307F\u3092\u627F\u308A\u307E\u3057\u305F",
      label: "Thank you",
      level: 1
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        maxWidth: 'var(--measure-jp)'
      }
    }, "\u4E8C\u65E5\u4EE5\u5185\u306B\u3001\u304A\u8FD4\u4E8B\u3092\u3055\u3057\u3042\u3052\u307E\u3059\u3002\u5C71\u306E\u306A\u304B\u306E\u305F\u3081\u3001\u96FB\u8A71\u304C\u3064\u306A\u304C\u308A\u306B\u304F\u3044\u65E5\u304C\u3042\u308A\u307E\u3059\u3002"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      as: "button",
      onClick: () => setSent(false)
    }, "\u3082\u3069\u308B")));
  }
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingInline: 'var(--gutter)',
      display: 'grid',
      gridTemplateColumns: '1fr 1.4fr',
      gap: 'var(--space-9)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "\u3054\u4E88\u7D04",
    level: 1
  }), /*#__PURE__*/React.createElement(Note, null, "\u4E00\u65E5\u3072\u3068\u7D44\u30FB\u5973\u6027\u306E\u305F\u3081\u306E\u5BBF\u3067\u3059\u3002\u3054\u5E0C\u671B\u65E5\u3092\u4E8C\u3064\u307E\u3067\u304A\u66F8\u304D\u304F\u3060\u3055\u3044\u3002\u304A\u8FD4\u4E8B\u306F\u3001\u308F\u305F\u3057\u304C\u4E00\u4EF6\u305A\u3064\u66F8\u3044\u3066\u3044\u307E\u3059\u3002"), /*#__PURE__*/React.createElement(Signature, {
    role: "\u3046\u305A\u307E\u306E\u3000\u5E97\u4E3B"
  })), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "\u304A\u540D\u524D"
  }, /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    defaultValue: "",
    placeholder: "\u5C71\u672C \u5948\u7DD2"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9"
  }, /*#__PURE__*/React.createElement("input", {
    style: {
      ...inputStyle,
      fontFamily: 'var(--font-latin)'
    },
    type: "email",
    placeholder: "nao@example.jp"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\u3054\u5E0C\u671B\u306E\u30D7\u30E9\u30F3"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      paddingTop: 'var(--space-2)'
    }
  }, ['二泊三日', '三泊四日'].map(p => /*#__PURE__*/React.createElement("span", {
    key: p,
    onClick: () => setPlan(p),
    style: {
      cursor: 'pointer',
      fontSize: 'var(--size-small)',
      paddingBottom: '6px',
      borderBottom: plan === p ? 'var(--hairline) solid var(--ink)' : 'var(--hairline) solid transparent',
      color: plan === p ? 'var(--ink)' : 'var(--muted)'
    }
  }, p)))), /*#__PURE__*/React.createElement(Field, {
    label: "\u3054\u5E0C\u671B\u65E5"
  }, /*#__PURE__*/React.createElement("input", {
    style: {
      ...inputStyle,
      fontFamily: 'var(--font-latin)'
    },
    placeholder: "2026.11.14 \u2014 11.16"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\u3054\u76F8\u8AC7\u3054\u3068"
  }, /*#__PURE__*/React.createElement("textarea", {
    rows: "3",
    style: {
      ...inputStyle,
      resize: 'none',
      lineHeight: 'var(--lh-body)'
    },
    placeholder: "\u901A\u9662\u4E2D\u306E\u304A\u85AC\u304C\u3042\u308A\u307E\u3059"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "fill",
    as: "button",
    onClick: () => setSent(true)
  }, "\u3053\u306E\u5185\u5BB9\u3067\u9001\u308B"), /*#__PURE__*/React.createElement(Note, {
    style: {
      maxWidth: '20em'
    }
  }, "\u81EA\u52D5\u8FD4\u4FE1\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u4E8C\u65E5\u5F85\u3063\u3066\u3082\u5C4A\u304B\u306A\u3044\u3068\u304D\u306F\u3001\u304A\u96FB\u8A71\u304F\u3060\u3055\u3044\u3002")))));
}
Object.assign(window, {
  ReserveScreen,
  Field
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ReserveScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/StayScreen.jsx
try { (() => {
function StayScreen() {
  const days = [{
    d: '一日目',
    t: '15:00',
    jp: 'チェックイン、準備食',
    note: '山を歩いて、湯に入ります。'
  }, {
    d: '二日目',
    t: '07:00',
    jp: '断食／沢沿いの散歩',
    note: '酵素ドリンクと白湯のみ。'
  }, {
    d: '三日目',
    t: '11:00',
    jp: '回復食、チェックアウト',
    note: 'おかゆと味噌汁から戻します。'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(TextImageSplit, {
    imageSide: "right",
    imageHeight: "470px",
    caption: "\u5BA2\u9593\u3002\u671D\u306F\u969C\u5B50\u3054\u3057\u306B\u5C71\u304C\u898B\u3048\u307E\u3059\u3002"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "\u6EDE\u5728\u306E\u3053\u3068",
    label: "Stay",
    level: 1
  }), /*#__PURE__*/React.createElement("p", null, "\u5BA2\u9593\u306F\u3075\u305F\u9593\u3002\u969C\u5B50\u306E\u3080\u3053\u3046\u306F\u3001\u305F\u3060\u5C71\u3067\u3059\u3002\u591C\u306F\u706F\u308A\u3092\u843D\u3068\u3057\u3066\u3001\u6CA2\u306E\u97F3\u3060\u3051\u3092\u6B8B\u3057\u307E\u3059\u3002"), /*#__PURE__*/React.createElement(Note, null, "\u6E6F\u306F\u5C0F\u3055\u306A\u6A9C\u98A8\u5442\u304C\u3072\u3068\u3064\u304D\u308A\u3002\u6642\u9593\u3092\u6C7A\u3081\u305A\u3001\u597D\u304D\u306A\u3068\u304D\u306B\u5165\u3063\u3066\u304F\u3060\u3055\u3044\u3002"))), /*#__PURE__*/React.createElement(Section, {
    alt: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingInline: 'var(--gutter)',
      display: 'grid',
      gridTemplateColumns: '0.8fr 1.5fr',
      gap: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "\u4E09\u65E5\u306E\u306A\u304C\u308C"
  }), /*#__PURE__*/React.createElement("div", null, days.map(x => /*#__PURE__*/React.createElement("div", {
    key: x.d,
    style: {
      display: 'grid',
      gridTemplateColumns: '92px 72px 1fr',
      gap: 'var(--space-5)',
      alignItems: 'baseline',
      padding: 'var(--space-5) 0',
      borderBottom: 'var(--hairline) solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-small)',
      color: 'var(--muted)'
    }
  }, x.d), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-latin)',
      fontSize: 'var(--size-small)',
      letterSpacing: '0.08em',
      color: 'var(--muted)'
    }
  }, x.t), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--size-body)'
    }
  }, x.jp), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--size-caption)',
      color: 'var(--text-caption)',
      marginTop: 'var(--space-2)'
    }
  }, x.note))))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(UnevenPhotos, {
    reverse: true,
    big: {
      caption: '檜の湯。沢の水を沸かしています。'
    },
    small: {
      caption: '台所。器はほとんど村のもの。'
    }
  })));
}
function PriceScreen({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingInline: 'var(--gutter)',
      display: 'grid',
      gridTemplateColumns: '0.8fr 1.5fr',
      gap: 'var(--space-9)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "\u6599\u91D1",
    label: "Price",
    level: 1
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PriceRow, {
    name: "\u4E8C\u6CCA\u4E09\u65E5 \u30D5\u30A1\u30B9\u30C6\u30A3\u30F3\u30B0",
    note: "\u4E00\u540D\u4E00\u5BA4\uFF0F\u6E96\u5099\u98DF\u30FB\u56DE\u5FA9\u98DF\u3064\u304D",
    price: "68,000"
  }), /*#__PURE__*/React.createElement(PriceRow, {
    name: "\u4E09\u6CCA\u56DB\u65E5 \u30D5\u30A1\u30B9\u30C6\u30A3\u30F3\u30B0",
    note: "\u4E00\u540D\u4E00\u5BA4\uFF0F\u9175\u7D20\u30C9\u30EA\u30F3\u30AF\u30FB\u6E29\u6D74\u3064\u304D",
    price: "92,000"
  }), /*#__PURE__*/React.createElement(PriceRow, {
    name: "\u5EF6\u6CCA",
    note: "\u4E00\u6CCA\u3042\u305F\u308A",
    price: "24,000"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)',
      display: 'grid',
      gridTemplateColumns: '1fr 0.9fr',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Note, {
    tint: "warm"
  }, "\u30C1\u30A7\u30C3\u30AF\u30A4\u30F3 15:00 \uFF0F \u30C1\u30A7\u30C3\u30AF\u30A2\u30A6\u30C8 11:00\u3002\u5230\u7740\u304C\u9045\u304F\u306A\u308B\u3068\u304D\u306F\u3001\u304A\u96FB\u8A71\u3092\u3044\u305F\u3060\u3051\u308B\u3068\u52A9\u304B\u308A\u307E\u3059\u3002"), /*#__PURE__*/React.createElement(Note, {
    tint: "cool"
  }, "\u30AD\u30E3\u30F3\u30BB\u30EB\u306F7\u65E5\u524D\u3088\u308A50%\u3001\u524D\u65E5\u30FB\u5F53\u65E5\u306F100%\u3092\u7533\u3057\u53D7\u3051\u307E\u3059\u3002")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "fill",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('reserve');
    }
  }, "\u3054\u4E88\u7D04"))))), /*#__PURE__*/React.createElement(Section, {
    alt: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingInline: 'var(--gutter)',
      display: 'grid',
      gridTemplateColumns: '1.3fr 0.7fr',
      gap: 'var(--space-9)',
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement(PhotoCaption, {
    height: "360px",
    caption: "\u56DE\u5FA9\u98DF\u306E\u671D\u3002\u304A\u304B\u3086\u3068\u3001\u5473\u564C\u6C41\u3068\u3001\u6885\u3002"
  }), /*#__PURE__*/React.createElement(CircleMotif, {
    size: "s",
    caption: "\u6885\u306F\u6751\u306E\u7551\u306E\u3082\u306E"
  }))));
}
Object.assign(window, {
  StayScreen,
  PriceScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/StayScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CircleMotif = __ds_scope.CircleMotif;

__ds_ns.LogoMark = __ds_scope.LogoMark;

__ds_ns.Signature = __ds_scope.Signature;

__ds_ns.VerticalLead = __ds_scope.VerticalLead;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Note = __ds_scope.Note;

__ds_ns.FullBleedHero = __ds_scope.FullBleedHero;

__ds_ns.NewsList = __ds_scope.NewsList;

__ds_ns.PhotoCaption = __ds_scope.PhotoCaption;

__ds_ns.PriceRow = __ds_scope.PriceRow;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.TextImageSplit = __ds_scope.TextImageSplit;

})();
