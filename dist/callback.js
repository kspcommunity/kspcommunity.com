;new EventSource(new URL("/esbuild",location.href).toString()).addEventListener('message', () => location?.reload?.());
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// polyfill.ts
var init_polyfill = __esm({
  "polyfill.ts"() {
    ReadableStream.prototype[Symbol.asyncIterator] = async function* () {
      const reader = this.getReader();
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done)
            return;
          yield value;
        }
      } finally {
        reader.releaseLock();
      }
    };
  }
});

// esbuild_serve:http-import:https://unpkg.com/urlpattern-polyfill
var init_urlpattern_polyfill = __esm({
  "esbuild_serve:http-import:https://unpkg.com/urlpattern-polyfill"() {
  }
});

// esbuild_serve:http-import:https://raw.githubusercontent.com/ungap/with-resolvers/main/index.js
var init_main = __esm({
  "esbuild_serve:http-import:https://raw.githubusercontent.com/ungap/with-resolvers/main/index.js"() {
    Promise.withResolvers || (Promise.withResolvers = function withResolvers() {
      var a, b2, c2 = new this(function(resolve, reject2) {
        a = resolve;
        b2 = reject2;
      });
      return { resolve: a, reject: b2, promise: c2 };
    });
  }
});

// esbuild_serve:http-import:https://unpkg.com/@oddbird/popover-polyfill
function P(e, t, o) {
  N.set(e, setTimeout(() => {
    N.has(e) && e.dispatchEvent(new c("toggle", { cancelable: false, oldState: t, newState: o }));
  }, 0));
}
function y(e) {
  return h.get(e) || "hidden";
}
function O(e) {
  let t = e.popoverTargetElement;
  if (!(t instanceof HTMLElement))
    return;
  let o = y(t);
  e.popoverTargetAction === "show" && o === "showing" || e.popoverTargetAction === "hide" && o === "hidden" || (o === "showing" ? v(t, true, true) : d(t, false) && (L.set(t, e), H(t)));
}
function d(e, t) {
  return !(e.popover !== "auto" && e.popover !== "manual" || !e.isConnected || t && y(e) !== "showing" || !t && y(e) !== "hidden" || e instanceof V && e.hasAttribute("open") || document.fullscreenElement === e);
}
function F(e) {
  return e ? Array.from(p.get(e.ownerDocument) || []).indexOf(e) + 1 : 0;
}
function $(e) {
  let t = W(e), o = U(e);
  return F(t) > F(o) ? t : o;
}
function M(e) {
  let t = p.get(e);
  for (let o of t || [])
    if (!o.isConnected)
      t.delete(o);
    else
      return o;
  return null;
}
function g(e) {
  return typeof e.getRootNode == "function" ? e.getRootNode() : e.parentNode ? g(e.parentNode) : e;
}
function W(e) {
  for (; e; ) {
    if (e instanceof HTMLElement && e.popover === "auto" && h.get(e) === "showing")
      return e;
    if (e = e.parentElement || g(e), e instanceof x && (e = e.host), e instanceof Document)
      return;
  }
}
function U(e) {
  for (; e; ) {
    let t = e.popoverTargetElement;
    if (t instanceof HTMLElement)
      return t;
    if (e = e.parentElement || g(e), e instanceof x && (e = e.host), e instanceof Document)
      return;
  }
}
function G(e) {
  let t = /* @__PURE__ */ new Map(), o = 0;
  for (let l of p.get(e.ownerDocument) || [])
    t.set(l, o), o += 1;
  t.set(e, o), o += 1;
  let r = null;
  function i(l) {
    let a = W(l);
    if (a === null)
      return null;
    let w = t.get(a);
    (r === null || t.get(r) < w) && (r = a);
  }
  return i(e.parentElement || g(e)), r;
}
function Q(e) {
  return e.hidden || e instanceof x || (e instanceof HTMLButtonElement || e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement || e instanceof HTMLOptGroupElement || e instanceof HTMLOptionElement || e instanceof HTMLFieldSetElement) && e.disabled || e instanceof HTMLInputElement && e.type === "hidden" || e instanceof HTMLAnchorElement && e.href === "" ? false : typeof e.tabIndex == "number" && e.tabIndex !== -1;
}
function _(e) {
  if (e.shadowRoot && e.shadowRoot.delegatesFocus !== true)
    return null;
  let t = e;
  t.shadowRoot && (t = t.shadowRoot);
  let o = t.querySelector("[autofocus]");
  if (o)
    return o;
  {
    let l = t.querySelectorAll("slot");
    for (let a of l) {
      let w = a.assignedElements({ flatten: true });
      for (let n of w) {
        if (n.hasAttribute("autofocus"))
          return n;
        if (o = n.querySelector("[autofocus]"), o)
          return o;
      }
    }
  }
  let r = e.ownerDocument.createTreeWalker(t, NodeFilter.SHOW_ELEMENT), i = r.currentNode;
  for (; i; ) {
    if (Q(i))
      return i;
    i = r.nextNode();
  }
}
function J(e) {
  _(e)?.focus();
}
function H(e) {
  if (!d(e, false))
    return;
  let t = e.ownerDocument;
  if (!e.dispatchEvent(new c("beforetoggle", { cancelable: true, oldState: "closed", newState: "open" })) || !d(e, false))
    return;
  let o = false;
  if (e.popover === "auto") {
    let i = e.getAttribute("popover"), l = G(e) || t;
    if (T(l, false, true), i !== e.getAttribute("popover") || !d(e, false))
      return;
  }
  M(t) || (o = true), S.delete(e);
  let r = t.activeElement;
  e.classList.add(":popover-open"), h.set(e, "showing"), b.has(t) || b.set(t, /* @__PURE__ */ new Set()), b.get(t).add(e), J(e), e.popover === "auto" && (p.has(t) || p.set(t, /* @__PURE__ */ new Set()), p.get(t).add(e), q(L.get(e), true)), o && r && e.popover === "auto" && S.set(e, r), P(e, "closed", "open");
}
function v(e, t = false, o = false) {
  if (!d(e, true))
    return;
  let r = e.ownerDocument;
  if (e.popover === "auto" && (T(e, t, o), !d(e, true)) || (q(L.get(e), false), L.delete(e), o && (e.dispatchEvent(new c("beforetoggle", { oldState: "open", newState: "closed" })), !d(e, true))))
    return;
  b.get(r)?.delete(e), p.get(r)?.delete(e), e.classList.remove(":popover-open"), h.set(e, "hidden"), o && P(e, "open", "closed");
  let i = S.get(e);
  i && (S.delete(e), t && i.focus());
}
function B(e, t = false, o = false) {
  let r = M(e);
  for (; r; )
    v(r, t, o), r = M(e);
}
function T(e, t, o) {
  let r = e.ownerDocument || e;
  if (e instanceof Document)
    return B(r, t, o);
  let i = null, l = false;
  for (let a of p.get(r) || [])
    if (a === e)
      l = true;
    else if (l) {
      i = a;
      break;
    }
  if (!l)
    return B(r, t, o);
  for (; i && y(i) === "showing" && p.get(r)?.size; )
    v(i, t, o);
}
function D(e) {
  if (!e.isTrusted)
    return;
  let t = e.composedPath()[0];
  if (!t)
    return;
  let o = t.ownerDocument;
  if (!M(o))
    return;
  let i = $(t);
  if (i && e.type === "pointerdown")
    A.set(o, i);
  else if (e.type === "pointerup") {
    let l = A.get(o) === i;
    A.delete(o), l && T(i || o, false, true);
  }
}
function q(e, t = false) {
  if (!e)
    return;
  k.has(e) || k.set(e, e.getAttribute("aria-expanded"));
  let o = e.popoverTargetElement;
  if (o instanceof HTMLElement && o.popover === "auto")
    e.setAttribute("aria-expanded", String(t));
  else {
    let r = k.get(e);
    r ? e.setAttribute("aria-expanded", r) : e.removeAttribute("aria-expanded");
  }
}
function j() {
  return typeof HTMLElement < "u" && typeof HTMLElement.prototype == "object" && "popover" in HTMLElement.prototype;
}
function f(e, t, o) {
  let r = e[t];
  Object.defineProperty(e, t, { value(i) {
    return r.call(this, o(i));
  } });
}
function Y() {
  return typeof globalThis.CSSLayerBlockRule == "function";
}
function Z() {
  let e = Y();
  return `
${e ? "@layer popover-polyfill {" : ""}
  :where([popover]) {
    position: fixed;
    z-index: 2147483647;
    inset: 0;
    padding: 0.25em;
    width: fit-content;
    height: fit-content;
    border-width: initial;
    border-color: initial;
    border-image: initial;
    border-style: solid;
    background-color: canvas;
    color: canvastext;
    overflow: auto;
    margin: auto;
  }

  :where(dialog[popover][open]) {
    display: revert;
  }

  :where([anchor].\\:popover-open) {
    inset: auto;
  }

  :where([anchor]:popover-open) {
    inset: auto;
  }

  @supports not (background-color: canvas) {
    :where([popover]) {
      background-color: white;
      color: black;
    }
  }

  @supports (width: -moz-fit-content) {
    :where([popover]) {
      width: -moz-fit-content;
      height: -moz-fit-content;
    }
  }

  @supports not (inset: 0) {
    :where([popover]) {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }

  :where([popover]:not(.\\:popover-open)) {
    display: none;
  }
${e ? "}" : ""}
`;
}
function I(e) {
  let t = Z();
  if (m === null)
    try {
      m = new CSSStyleSheet(), m.replaceSync(t);
    } catch {
      m = false;
    }
  if (m === false) {
    let o = document.createElement("style");
    o.textContent = t, e instanceof Document ? e.head.prepend(o) : e.prepend(o);
  } else
    e.adoptedStyleSheets = [m, ...e.adoptedStyleSheets];
}
function K() {
  globalThis.ToggleEvent = globalThis.ToggleEvent || c;
  function e(n) {
    return n?.includes(":popover-open") && (n = n.replace(X, "$1.\\:popover-open")), n;
  }
  f(Document.prototype, "querySelector", e), f(Document.prototype, "querySelectorAll", e), f(Element.prototype, "querySelector", e), f(Element.prototype, "querySelectorAll", e), f(Element.prototype, "matches", e), f(Element.prototype, "closest", e), f(DocumentFragment.prototype, "querySelectorAll", e), f(DocumentFragment.prototype, "querySelectorAll", e), Object.defineProperties(HTMLElement.prototype, { popover: { enumerable: true, configurable: true, get() {
    if (!this.hasAttribute("popover"))
      return null;
    let n = (this.getAttribute("popover") || "").toLowerCase();
    return n === "" || n == "auto" ? "auto" : "manual";
  }, set(n) {
    this.setAttribute("popover", n);
  } }, showPopover: { enumerable: true, configurable: true, value() {
    H(this);
  } }, hidePopover: { enumerable: true, configurable: true, value() {
    v(this, true, true);
  } }, togglePopover: { enumerable: true, configurable: true, value(n) {
    h.get(this) === "showing" && n === void 0 || n === false ? v(this, true, true) : (n === void 0 || n === true) && H(this);
  } } });
  let t = Element.prototype.attachShadow;
  t && Object.defineProperties(Element.prototype, { attachShadow: { enumerable: true, configurable: true, writable: true, value(n) {
    let s = t.call(this, n);
    return I(s), s;
  } } });
  let o = HTMLElement.prototype.attachInternals;
  o && Object.defineProperties(HTMLElement.prototype, { attachInternals: { enumerable: true, configurable: true, writable: true, value() {
    let n = o.call(this);
    return n.shadowRoot && I(n.shadowRoot), n;
  } } });
  let r = /* @__PURE__ */ new WeakMap();
  function i(n) {
    Object.defineProperties(n.prototype, { popoverTargetElement: { enumerable: true, configurable: true, set(s) {
      if (s === null)
        this.removeAttribute("popovertarget"), r.delete(this);
      else if (s instanceof Element)
        this.setAttribute("popovertarget", ""), r.set(this, s);
      else
        throw new TypeError("popoverTargetElement must be an element or null");
    }, get() {
      if (this.localName !== "button" && this.localName !== "input" || this.localName === "input" && this.type !== "reset" && this.type !== "image" && this.type !== "button" || this.disabled || this.form && this.type === "submit")
        return null;
      let s = r.get(this);
      if (s && s.isConnected)
        return s;
      if (s && !s.isConnected)
        return r.delete(this), null;
      let u = g(this), E = this.getAttribute("popovertarget");
      return (u instanceof Document || u instanceof C) && E && u.getElementById(E) || null;
    } }, popoverTargetAction: { enumerable: true, configurable: true, get() {
      let s = (this.getAttribute("popovertargetaction") || "").toLowerCase();
      return s === "show" || s === "hide" ? s : "toggle";
    }, set(s) {
      this.setAttribute("popovertargetaction", s);
    } } });
  }
  i(HTMLButtonElement), i(HTMLInputElement);
  let l = (n) => {
    let s = n.composedPath(), u = s[0];
    if (!(u instanceof Element) || u?.shadowRoot)
      return;
    let E = g(u);
    if (!(E instanceof C || E instanceof Document))
      return;
    let R = s.find((z) => z.matches?.("[popovertargetaction],[popovertarget]"));
    if (R) {
      O(R), n.preventDefault();
      return;
    }
  }, a = (n) => {
    let s = n.key, u = n.target;
    !n.defaultPrevented && u && (s === "Escape" || s === "Esc") && T(u.ownerDocument, true, true);
  };
  ((n) => {
    n.addEventListener("click", l), n.addEventListener("keydown", a), n.addEventListener("pointerdown", D), n.addEventListener("pointerup", D);
  })(document), I(document);
}
var c, N, x, V, b, p, h, L, S, A, k, C, X, m;
var init_popover_polyfill = __esm({
  "esbuild_serve:http-import:https://unpkg.com/@oddbird/popover-polyfill"() {
    c = class extends Event {
      oldState;
      newState;
      constructor(t, { oldState: o = "", newState: r = "", ...i } = {}) {
        super(t, i), this.oldState = String(o || ""), this.newState = String(r || "");
      }
    };
    N = /* @__PURE__ */ new WeakMap();
    x = globalThis.ShadowRoot || function() {
    };
    V = globalThis.HTMLDialogElement || function() {
    };
    b = /* @__PURE__ */ new WeakMap();
    p = /* @__PURE__ */ new WeakMap();
    h = /* @__PURE__ */ new WeakMap();
    L = /* @__PURE__ */ new WeakMap();
    S = /* @__PURE__ */ new WeakMap();
    A = /* @__PURE__ */ new WeakMap();
    k = /* @__PURE__ */ new WeakMap();
    C = globalThis.ShadowRoot || function() {
    };
    X = /(^|[^\\]):popover-open\b/g;
    m = null;
    j() || K();
  }
});

// esbuild_serve:http-import:https://cdn.jsdelivr.net/npm/native-file-system-adapter@3.0.1/src/es6.js
var init_es6 = __esm({
  "esbuild_serve:http-import:https://cdn.jsdelivr.net/npm/native-file-system-adapter@3.0.1/src/es6.js"() {
    init_polyfill();
    init_bug_reporter();
    init_mod();
    init_urlpattern_polyfill();
    init_main();
    init_popover_polyfill();
  }
});

// esbuild_serve:http-import:https://cdn.jsdelivr.net/npm/native-file-system-adapter@3.0.1/mod.js
var init_mod = __esm({
  "esbuild_serve:http-import:https://cdn.jsdelivr.net/npm/native-file-system-adapter@3.0.1/mod.js"() {
    init_es6();
  }
});

// pages/shared/restSpec.ts
async function asExternal(promise) {
  try {
    return {
      status: "fulfilled",
      value: await promise
    };
  } catch (e) {
    return {
      status: "rejected",
      reason: e
    };
  }
}
function json() {
  return async (rsp) => {
    if (!rsp.ok) {
      return await asExternal(Promise.reject(await rsp.text()));
    }
    return await asExternal(rsp.json());
  };
}
function none() {
  return async (rsp) => {
    if (!rsp.ok) {
      return await asExternal(Promise.reject(await rsp.text()));
    }
    return await asExternal(Promise.resolve(true));
  };
}
function blob() {
  return async (rsp) => {
    if (!rsp.ok) {
      return await asExternal(Promise.reject(await rsp.text()));
    }
    return await asExternal(rsp.blob());
  };
}
function reject(rsp) {
  return asExternal(Promise.reject(rsp));
}
function headers(token) {
  return {
    "Authorization": `JWT ${token}`
  };
}
var API;
var init_restSpec = __esm({
  "pages/shared/restSpec.ts"() {
    init_polyfill();
    init_bug_reporter();
    init_mod();
    init_urlpattern_polyfill();
    init_main();
    init_popover_polyfill();
    API = {
      getToken: () => localStorage["access-token"],
      BASE_URL: localStorage.OVERRIDE_BASE_URL || (location.hostname == "bbn.one" ? "https://bbn.one/api/@bbn/" : "http://localhost:8443/api/@bbn/"),
      WS_URL: localStorage.OVERRIDE_WS_URL || (location.hostname == "bbn.one" ? "wss://bbn.one/ws" : "ws://localhost:8443/ws"),
      bugReport: (bugReport) => fetch(`${API.BASE_URL}bug-track/`, {
        method: "POST",
        body: JSON.stringify(bugReport)
      }),
      isPermited: (requiredPermissions, userPermission) => requiredPermissions.every((required) => userPermission.find((user) => required.startsWith(user))),
      user: {
        mail: {
          validate: {
            post: (token) => fetch(`${API.BASE_URL}user/mail/validate/${token}`, {
              method: "POST",
              headers: headers(API.getToken())
            }).then(none())
          },
          resendVerifyEmail: {
            post: () => fetch(`${API.BASE_URL}user/mail/resend-verify-email`, {
              method: "POST",
              headers: headers(API.getToken())
            }).then(none())
          }
        },
        setMe: {
          post: (para) => fetch(`${API.BASE_URL}user/set-me`, {
            method: "POST",
            headers: headers(API.getToken()),
            body: JSON.stringify(para)
          }).then(none()).catch(reject)
        },
        picture: (id) => fetch(`${API.BASE_URL}user/${id}/picture`, {
          headers: headers(API.getToken())
        }).then(blob()).catch(reject)
      },
      auth: {
        oauthRedirect: (type) => `${API.BASE_URL}auth/redirect/${type}?goal=${localStorage.getItem("goal") ?? "/music"}`,
        refreshAccessToken: {
          post: (refreshToken) => fetch(`${API.BASE_URL}auth/refresh-access-token`, {
            method: "POST",
            headers: headers(refreshToken)
          }).then(json()).catch(reject)
        },
        oauth: {
          post: (provider, code) => {
            const param = new URLSearchParams({ code });
            return fetch(`${API.BASE_URL}auth/oauth/${provider}?${param.toString()}`, {
              method: "POST"
            }).then(json()).catch(reject);
          }
        },
        fromUserInteraction: {
          get: (id) => fetch(`${API.BASE_URL}auth/from-user-interaction/${id}`).then(json()).catch(reject)
        },
        forgotPassword: {
          post: (email) => fetch(`${API.BASE_URL}auth/reset-password`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              email
            })
          }).then(none())
        },
        register: {
          post: (data) => fetch(`${API.BASE_URL}auth/register`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          }).then(json()).catch(reject)
        },
        email: {
          post: (data) => fetch(`${API.BASE_URL}auth/email`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          }).then(json()).catch(reject)
        }
      },
      wallet: {
        get: () => fetch(`${API.BASE_URL}wallet/`, {
          headers: headers(API.getToken())
        }).then(json()).catch(reject),
        requestPayout: (amount) => fetch(`${API.BASE_URL}wallet/`, {
          method: "PUT",
          headers: headers(API.getToken()),
          body: JSON.stringify({ amount })
        }).then(json()).catch(reject)
      },
      oauth: {
        validate: (id, scope, redirect_uri) => fetch(`${API.BASE_URL}oauth/validate`, {
          method: "POST",
          headers: headers(API.getToken()),
          body: JSON.stringify({ id, scope, redirect_uri })
        }).then(json()).catch(reject),
        authorize: (id, scope, redirect_uri) => fetch(`${API.BASE_URL}oauth/authorize`, {
          method: "POST",
          headers: headers(API.getToken()),
          body: JSON.stringify({ id, scope, redirect_uri })
        }).then(json()).catch(reject),
        list: () => fetch(`${API.BASE_URL}oauth/applications`, {
          headers: headers(API.getToken())
        }).then(json()).catch(reject),
        post: (name, redirect, icon) => fetch(`${API.BASE_URL}oauth/applications`, {
          method: "POST",
          headers: headers(API.getToken()),
          body: JSON.stringify({ name, redirect, icon })
        }).then(json()).catch(reject),
        icon: (clientid) => fetch(`${API.BASE_URL}oauth/applications/${clientid}/download`, {
          headers: headers(API.getToken())
        }).then(blob()),
        delete: (clientid) => fetch(`${API.BASE_URL}oauth/applications/${clientid}`, {
          method: "DELETE",
          headers: headers(API.getToken())
        }).then(none())
      },
      admin: {
        search: (query) => fetch(`${API.BASE_URL}admin/search?query=${query}`, {
          headers: headers(API.getToken())
        }).then(json()).catch(reject),
        files: {
          list: (offset = void 0) => {
            const paging = new URLSearchParams();
            if (offset) {
              paging.append("_offset", offset.toString());
            }
            paging.append("_limit", "31");
            return fetch(`${API.BASE_URL}admin/files?${paging}`, {
              headers: headers(API.getToken())
            }).then(json()).catch(reject);
          },
          download: (id) => fetch(`${API.BASE_URL}admin/files/${id}/download`, {
            headers: headers(API.getToken())
          }).then(blob()).catch(reject),
          delete: (id) => fetch(`${API.BASE_URL}admin/files/${id}`, {
            method: "DELETE",
            headers: headers(API.getToken())
          }).then(none()).catch(reject)
        },
        drops: {
          list: (type, offset = 0, limit = 31) => {
            const paging = new URLSearchParams();
            if (type) {
              paging.append("type", type);
            }
            paging.append("_offset", offset.toString());
            paging.append("_limit", limit.toString());
            return fetch(`${API.BASE_URL}admin/drops?${paging}`, {
              headers: headers(API.getToken())
            }).then(json()).catch(reject);
          },
          user: (id) => fetch(`${API.BASE_URL}admin/drops?user=${id}`, {
            headers: headers(API.getToken())
          }).then(json()).catch(reject),
          id: (id) => fetch(`${API.BASE_URL}admin/drops/${id}`, {
            headers: headers(API.getToken())
          }).then(json()).catch(reject),
          sync: () => fetch(`${API.BASE_URL}admin/sync_mapping`, {
            method: "POST",
            headers: headers(API.getToken())
          }).then(none()).catch(reject)
        },
        payouts: {
          list: () => fetch(`${API.BASE_URL}admin/payouts`, {
            headers: headers(API.getToken())
          }).then(json()).catch(reject)
        },
        groups: {
          list: (offset = 0, limit = 31) => {
            const paging = new URLSearchParams();
            paging.append("_offset", offset.toString());
            paging.append("_limit", limit.toString());
            return fetch(`${API.BASE_URL}admin/groups?${paging}`, {
              headers: headers(API.getToken())
            }).then(json()).catch(reject);
          }
        },
        wallets: {
          list: (offset = 0, limit = 31) => {
            const paging = new URLSearchParams();
            paging.append("_offset", offset.toString());
            paging.append("_limit", limit.toString());
            return fetch(`${API.BASE_URL}admin/wallets?${paging}`, {
              headers: headers(API.getToken())
            }).then(json()).catch(reject);
          }
        }
      },
      payment: {
        payouts: {
          get: () => fetch(`${API.BASE_URL}payment/payouts`, {
            headers: headers(API.getToken())
          }).then(json()).catch(reject),
          id: (id) => ({
            get: () => fetch(`${API.BASE_URL}payment/payouts/${id}`, {
              headers: headers(API.getToken())
            }).then(json()).catch(reject)
          })
        }
      },
      hosting: {
        versions: (type) => fetch(`${API.BASE_URL}hosting/versions`, {
          method: "PUT",
          body: JSON.stringify({ type }),
          headers: headers(API.getToken())
        }).then(json()).catch(reject),
        servers: () => fetch(`${API.BASE_URL}hosting/servers`, {
          headers: headers(API.getToken())
        }).then((x2) => x2.json()),
        create: (data) => fetch(`${API.BASE_URL}hosting/servers`, {
          method: "POST",
          body: JSON.stringify(data),
          headers: headers(API.getToken())
        }).then(none()).catch(reject),
        meta: () => fetch(`${API.BASE_URL}hosting/meta`, {
          headers: headers(API.getToken())
        }).then((x2) => x2.json()),
        serverId: (id) => ({
          get: () => fetch(`${API.BASE_URL}hosting/servers/${id}`, {
            headers: headers(API.getToken())
          }).then(json()).catch(reject),
          edit: (data) => fetch(`${API.BASE_URL}hosting/servers/${id}`, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: headers(API.getToken())
          }).then(none()).catch(reject),
          delete: () => fetch(`${API.BASE_URL}hosting/servers/${id}`, {
            method: "DELETE",
            headers: headers(API.getToken())
          }).then(none()).catch(reject),
          audit: () => fetch(`${API.BASE_URL}hosting/servers/${id}/audit`, {
            headers: headers(API.getToken())
          }).then(json()).catch(reject),
          forcerestart: () => fetch(`${API.BASE_URL}hosting/servers`, {
            method: "PUT",
            body: JSON.stringify({ id }),
            headers: headers(API.getToken())
          }).then(none()).catch(reject),
          start: () => fetch(`${API.BASE_URL}hosting/servers/${id}/start`, {
            headers: headers(API.getToken())
          }).then(none()).catch(reject)
        }),
        store: {
          create: (type) => fetch(`${API.BASE_URL}hosting/store`, {
            method: "POST",
            body: JSON.stringify(type),
            headers: headers(API.getToken())
          }).then(none()).catch(reject)
        }
      },
      music: {
        drops: {
          list: () => fetch(`${API.BASE_URL}music/drops`, {
            headers: headers(API.getToken())
          }).then(json()).catch(reject),
          create: () => fetch(`${API.BASE_URL}music/`, {
            method: "POST",
            headers: headers(API.getToken())
          }).then(json()).catch(reject)
        },
        id: (id) => ({
          get: () => fetch(`${API.BASE_URL}music/drops/${id}`, {
            headers: headers(API.getToken())
          }).then(json()).catch(reject),
          update: (data) => fetch(`${API.BASE_URL}music/drops/${id}`, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: headers(API.getToken())
          }).then(none()).catch(reject),
          review: {
            post: (data) => fetch(`${API.BASE_URL}music/${id}/review`, {
              method: "POST",
              headers: headers(API.getToken()),
              body: JSON.stringify(data)
            }).then(none()).catch(reject)
          },
          type: {
            post: (type) => fetch(`${API.BASE_URL}music/${id}/type/${type}`, {
              method: "POST",
              headers: headers(API.getToken())
            }).then(none()).catch(reject)
          },
          download: () => fetch(`${API.BASE_URL}music/drops/${id}/download`, {
            headers: headers(API.getToken())
          }).then(blob()).catch(reject),
          artwork: () => fetch(`${API.BASE_URL}music/${id}/artwork`, {
            headers: headers(API.getToken())
          }).then(blob()).catch(reject)
        })
      }
    };
  }
});

// esbuild_serve:http-import:https://unpkg.com/platform@1.3.6/platform.js
var require_platform = __commonJS({
  "esbuild_serve:http-import:https://unpkg.com/platform@1.3.6/platform.js"(exports, module) {
    init_polyfill();
    init_bug_reporter();
    init_mod();
    init_urlpattern_polyfill();
    init_main();
    init_popover_polyfill();
    (function() {
      "use strict";
      var objectTypes = {
        "function": true,
        "object": true
      };
      var root = objectTypes[typeof window] && window || this;
      var oldRoot = root;
      var freeExports = objectTypes[typeof exports] && exports;
      var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;
      var freeGlobal = freeExports && freeModule && typeof global == "object" && global;
      if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal)) {
        root = freeGlobal;
      }
      var maxSafeInteger = Math.pow(2, 53) - 1;
      var reOpera = /\bOpera/;
      var thisBinding = this;
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var toString = objectProto.toString;
      function capitalize(string) {
        string = String(string);
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      function cleanupOS(os, pattern, label) {
        var data = {
          "10.0": "10",
          "6.4": "10 Technical Preview",
          "6.3": "8.1",
          "6.2": "8",
          "6.1": "Server 2008 R2 / 7",
          "6.0": "Server 2008 / Vista",
          "5.2": "Server 2003 / XP 64-bit",
          "5.1": "XP",
          "5.01": "2000 SP1",
          "5.0": "2000",
          "4.0": "NT",
          "4.90": "ME"
        };
        if (pattern && label && /^Win/i.test(os) && !/^Windows Phone /i.test(os) && (data = data[/[\d.]+$/.exec(os)])) {
          os = "Windows " + data;
        }
        os = String(os);
        if (pattern && label) {
          os = os.replace(RegExp(pattern, "i"), label);
        }
        os = format(
          os.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0]
        );
        return os;
      }
      function each(object, callback) {
        var index = -1, length = object ? object.length : 0;
        if (typeof length == "number" && length > -1 && length <= maxSafeInteger) {
          while (++index < length) {
            callback(object[index], index, object);
          }
        } else {
          forOwn(object, callback);
        }
      }
      function format(string) {
        string = trim(string);
        return /^(?:webOS|i(?:OS|P))/.test(string) ? string : capitalize(string);
      }
      function forOwn(object, callback) {
        for (var key in object) {
          if (hasOwnProperty.call(object, key)) {
            callback(object[key], key, object);
          }
        }
      }
      function getClassOf(value) {
        return value == null ? capitalize(value) : toString.call(value).slice(8, -1);
      }
      function isHostType(object, property) {
        var type = object != null ? typeof object[property] : "number";
        return !/^(?:boolean|number|string|undefined)$/.test(type) && (type == "object" ? !!object[property] : true);
      }
      function qualify(string) {
        return String(string).replace(/([ -])(?!$)/g, "$1?");
      }
      function reduce(array, callback) {
        var accumulator = null;
        each(array, function(value, index) {
          accumulator = callback(accumulator, value, index, array);
        });
        return accumulator;
      }
      function trim(string) {
        return String(string).replace(/^ +| +$/g, "");
      }
      function parse(ua) {
        var context = root;
        var isCustomContext = ua && typeof ua == "object" && getClassOf(ua) != "String";
        if (isCustomContext) {
          context = ua;
          ua = null;
        }
        var nav = context.navigator || {};
        var userAgent = nav.userAgent || "";
        ua || (ua = userAgent);
        var isModuleScope = isCustomContext || thisBinding == oldRoot;
        var likeChrome = isCustomContext ? !!nav.likeChrome : /\bChrome\b/.test(ua) && !/internal|\n/i.test(toString.toString());
        var objectClass = "Object", airRuntimeClass = isCustomContext ? objectClass : "ScriptBridgingProxyObject", enviroClass = isCustomContext ? objectClass : "Environment", javaClass = isCustomContext && context.java ? "JavaPackage" : getClassOf(context.java), phantomClass = isCustomContext ? objectClass : "RuntimeObject";
        var java = /\bJava/.test(javaClass) && context.java;
        var rhino = java && getClassOf(context.environment) == enviroClass;
        var alpha = java ? "a" : "\u03B1";
        var beta = java ? "b" : "\u03B2";
        var doc = context.document || {};
        var opera = context.operamini || context.opera;
        var operaClass = reOpera.test(operaClass = isCustomContext && opera ? opera["[[Class]]"] : getClassOf(opera)) ? operaClass : opera = null;
        var data;
        var arch = ua;
        var description = [];
        var prerelease = null;
        var useFeatures = ua == userAgent;
        var version = useFeatures && opera && typeof opera.version == "function" && opera.version();
        var isSpecialCasedOS;
        var layout = getLayout([
          { "label": "EdgeHTML", "pattern": "Edge" },
          "Trident",
          { "label": "WebKit", "pattern": "AppleWebKit" },
          "iCab",
          "Presto",
          "NetFront",
          "Tasman",
          "KHTML",
          "Gecko"
        ]);
        var name = getName([
          "Adobe AIR",
          "Arora",
          "Avant Browser",
          "Breach",
          "Camino",
          "Electron",
          "Epiphany",
          "Fennec",
          "Flock",
          "Galeon",
          "GreenBrowser",
          "iCab",
          "Iceweasel",
          "K-Meleon",
          "Konqueror",
          "Lunascape",
          "Maxthon",
          { "label": "Microsoft Edge", "pattern": "(?:Edge|Edg|EdgA|EdgiOS)" },
          "Midori",
          "Nook Browser",
          "PaleMoon",
          "PhantomJS",
          "Raven",
          "Rekonq",
          "RockMelt",
          { "label": "Samsung Internet", "pattern": "SamsungBrowser" },
          "SeaMonkey",
          { "label": "Silk", "pattern": "(?:Cloud9|Silk-Accelerated)" },
          "Sleipnir",
          "SlimBrowser",
          { "label": "SRWare Iron", "pattern": "Iron" },
          "Sunrise",
          "Swiftfox",
          "Vivaldi",
          "Waterfox",
          "WebPositive",
          { "label": "Yandex Browser", "pattern": "YaBrowser" },
          { "label": "UC Browser", "pattern": "UCBrowser" },
          "Opera Mini",
          { "label": "Opera Mini", "pattern": "OPiOS" },
          "Opera",
          { "label": "Opera", "pattern": "OPR" },
          "Chromium",
          "Chrome",
          { "label": "Chrome", "pattern": "(?:HeadlessChrome)" },
          { "label": "Chrome Mobile", "pattern": "(?:CriOS|CrMo)" },
          { "label": "Firefox", "pattern": "(?:Firefox|Minefield)" },
          { "label": "Firefox for iOS", "pattern": "FxiOS" },
          { "label": "IE", "pattern": "IEMobile" },
          { "label": "IE", "pattern": "MSIE" },
          "Safari"
        ]);
        var product = getProduct([
          { "label": "BlackBerry", "pattern": "BB10" },
          "BlackBerry",
          { "label": "Galaxy S", "pattern": "GT-I9000" },
          { "label": "Galaxy S2", "pattern": "GT-I9100" },
          { "label": "Galaxy S3", "pattern": "GT-I9300" },
          { "label": "Galaxy S4", "pattern": "GT-I9500" },
          { "label": "Galaxy S5", "pattern": "SM-G900" },
          { "label": "Galaxy S6", "pattern": "SM-G920" },
          { "label": "Galaxy S6 Edge", "pattern": "SM-G925" },
          { "label": "Galaxy S7", "pattern": "SM-G930" },
          { "label": "Galaxy S7 Edge", "pattern": "SM-G935" },
          "Google TV",
          "Lumia",
          "iPad",
          "iPod",
          "iPhone",
          "Kindle",
          { "label": "Kindle Fire", "pattern": "(?:Cloud9|Silk-Accelerated)" },
          "Nexus",
          "Nook",
          "PlayBook",
          "PlayStation Vita",
          "PlayStation",
          "TouchPad",
          "Transformer",
          { "label": "Wii U", "pattern": "WiiU" },
          "Wii",
          "Xbox One",
          { "label": "Xbox 360", "pattern": "Xbox" },
          "Xoom"
        ]);
        var manufacturer = getManufacturer({
          "Apple": { "iPad": 1, "iPhone": 1, "iPod": 1 },
          "Alcatel": {},
          "Archos": {},
          "Amazon": { "Kindle": 1, "Kindle Fire": 1 },
          "Asus": { "Transformer": 1 },
          "Barnes & Noble": { "Nook": 1 },
          "BlackBerry": { "PlayBook": 1 },
          "Google": { "Google TV": 1, "Nexus": 1 },
          "HP": { "TouchPad": 1 },
          "HTC": {},
          "Huawei": {},
          "Lenovo": {},
          "LG": {},
          "Microsoft": { "Xbox": 1, "Xbox One": 1 },
          "Motorola": { "Xoom": 1 },
          "Nintendo": { "Wii U": 1, "Wii": 1 },
          "Nokia": { "Lumia": 1 },
          "Oppo": {},
          "Samsung": { "Galaxy S": 1, "Galaxy S2": 1, "Galaxy S3": 1, "Galaxy S4": 1 },
          "Sony": { "PlayStation": 1, "PlayStation Vita": 1 },
          "Xiaomi": { "Mi": 1, "Redmi": 1 }
        });
        var os = getOS([
          "Windows Phone",
          "KaiOS",
          "Android",
          "CentOS",
          { "label": "Chrome OS", "pattern": "CrOS" },
          "Debian",
          { "label": "DragonFly BSD", "pattern": "DragonFly" },
          "Fedora",
          "FreeBSD",
          "Gentoo",
          "Haiku",
          "Kubuntu",
          "Linux Mint",
          "OpenBSD",
          "Red Hat",
          "SuSE",
          "Ubuntu",
          "Xubuntu",
          "Cygwin",
          "Symbian OS",
          "hpwOS",
          "webOS ",
          "webOS",
          "Tablet OS",
          "Tizen",
          "Linux",
          "Mac OS X",
          "Macintosh",
          "Mac",
          "Windows 98;",
          "Windows "
        ]);
        function getLayout(guesses) {
          return reduce(guesses, function(result, guess) {
            return result || RegExp("\\b" + (guess.pattern || qualify(guess)) + "\\b", "i").exec(ua) && (guess.label || guess);
          });
        }
        function getManufacturer(guesses) {
          return reduce(guesses, function(result, value, key) {
            return result || (value[product] || value[/^[a-z]+(?: +[a-z]+\b)*/i.exec(product)] || RegExp("\\b" + qualify(key) + "(?:\\b|\\w*\\d)", "i").exec(ua)) && key;
          });
        }
        function getName(guesses) {
          return reduce(guesses, function(result, guess) {
            return result || RegExp("\\b" + (guess.pattern || qualify(guess)) + "\\b", "i").exec(ua) && (guess.label || guess);
          });
        }
        function getOS(guesses) {
          return reduce(guesses, function(result, guess) {
            var pattern = guess.pattern || qualify(guess);
            if (!result && (result = RegExp("\\b" + pattern + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(ua))) {
              result = cleanupOS(result, pattern, guess.label || guess);
            }
            return result;
          });
        }
        function getProduct(guesses) {
          return reduce(guesses, function(result, guess) {
            var pattern = guess.pattern || qualify(guess);
            if (!result && (result = RegExp("\\b" + pattern + " *\\d+[.\\w_]*", "i").exec(ua) || RegExp("\\b" + pattern + " *\\w+-[\\w]*", "i").exec(ua) || RegExp("\\b" + pattern + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(ua))) {
              if ((result = String(guess.label && !RegExp(pattern, "i").test(guess.label) ? guess.label : result).split("/"))[1] && !/[\d.]+/.test(result[0])) {
                result[0] += " " + result[1];
              }
              guess = guess.label || guess;
              result = format(result[0].replace(RegExp(pattern, "i"), guess).replace(RegExp("; *(?:" + guess + "[_-])?", "i"), " ").replace(RegExp("(" + guess + ")[-_.]?(\\w)", "i"), "$1 $2"));
            }
            return result;
          });
        }
        function getVersion(patterns) {
          return reduce(patterns, function(result, pattern) {
            return result || (RegExp(pattern + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(ua) || 0)[1] || null;
          });
        }
        function toStringPlatform() {
          return this.description || "";
        }
        layout && (layout = [layout]);
        if (/\bAndroid\b/.test(os) && !product && (data = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(ua))) {
          product = trim(data[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, "") || null;
        }
        if (manufacturer && !product) {
          product = getProduct([manufacturer]);
        } else if (manufacturer && product) {
          product = product.replace(RegExp("^(" + qualify(manufacturer) + ")[-_.\\s]", "i"), manufacturer + " ").replace(RegExp("^(" + qualify(manufacturer) + ")[-_.]?(\\w)", "i"), manufacturer + " $2");
        }
        if (data = /\bGoogle TV\b/.exec(product)) {
          product = data[0];
        }
        if (/\bSimulator\b/i.test(ua)) {
          product = (product ? product + " " : "") + "Simulator";
        }
        if (name == "Opera Mini" && /\bOPiOS\b/.test(ua)) {
          description.push("running in Turbo/Uncompressed mode");
        }
        if (name == "IE" && /\blike iPhone OS\b/.test(ua)) {
          data = parse(ua.replace(/like iPhone OS/, ""));
          manufacturer = data.manufacturer;
          product = data.product;
        } else if (/^iP/.test(product)) {
          name || (name = "Safari");
          os = "iOS" + ((data = / OS ([\d_]+)/i.exec(ua)) ? " " + data[1].replace(/_/g, ".") : "");
        } else if (name == "Konqueror" && /^Linux\b/i.test(os)) {
          os = "Kubuntu";
        } else if (manufacturer && manufacturer != "Google" && (/Chrome/.test(name) && !/\bMobile Safari\b/i.test(ua) || /\bVita\b/.test(product)) || /\bAndroid\b/.test(os) && /^Chrome/.test(name) && /\bVersion\//i.test(ua)) {
          name = "Android Browser";
          os = /\bAndroid\b/.test(os) ? os : "Android";
        } else if (name == "Silk") {
          if (!/\bMobi/i.test(ua)) {
            os = "Android";
            description.unshift("desktop mode");
          }
          if (/Accelerated *= *true/i.test(ua)) {
            description.unshift("accelerated");
          }
        } else if (name == "UC Browser" && /\bUCWEB\b/.test(ua)) {
          description.push("speed mode");
        } else if (name == "PaleMoon" && (data = /\bFirefox\/([\d.]+)\b/.exec(ua))) {
          description.push("identifying as Firefox " + data[1]);
        } else if (name == "Firefox" && (data = /\b(Mobile|Tablet|TV)\b/i.exec(ua))) {
          os || (os = "Firefox OS");
          product || (product = data[1]);
        } else if (!name || (data = !/\bMinefield\b/i.test(ua) && /\b(?:Firefox|Safari)\b/.exec(name))) {
          if (name && !product && /[\/,]|^[^(]+?\)/.test(ua.slice(ua.indexOf(data + "/") + 8))) {
            name = null;
          }
          if ((data = product || manufacturer || os) && (product || manufacturer || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(os))) {
            name = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(os) ? os : data) + " Browser";
          }
        } else if (name == "Electron" && (data = (/\bChrome\/([\d.]+)\b/.exec(ua) || 0)[1])) {
          description.push("Chromium " + data);
        }
        if (!version) {
          version = getVersion([
            "(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)",
            "Version",
            qualify(name),
            "(?:Firefox|Minefield|NetFront)"
          ]);
        }
        if (data = layout == "iCab" && parseFloat(version) > 3 && "WebKit" || /\bOpera\b/.test(name) && (/\bOPR\b/.test(ua) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(ua) && !/^(?:Trident|EdgeHTML)$/.test(layout) && "WebKit" || !layout && /\bMSIE\b/i.test(ua) && (os == "Mac OS" ? "Tasman" : "Trident") || layout == "WebKit" && /\bPlayStation\b(?! Vita\b)/i.test(name) && "NetFront") {
          layout = [data];
        }
        if (name == "IE" && (data = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(ua) || 0)[1])) {
          name += " Mobile";
          os = "Windows Phone " + (/\+$/.test(data) ? data : data + ".x");
          description.unshift("desktop mode");
        } else if (/\bWPDesktop\b/i.test(ua)) {
          name = "IE Mobile";
          os = "Windows Phone 8.x";
          description.unshift("desktop mode");
          version || (version = (/\brv:([\d.]+)/.exec(ua) || 0)[1]);
        } else if (name != "IE" && layout == "Trident" && (data = /\brv:([\d.]+)/.exec(ua))) {
          if (name) {
            description.push("identifying as " + name + (version ? " " + version : ""));
          }
          name = "IE";
          version = data[1];
        }
        if (useFeatures) {
          if (isHostType(context, "global")) {
            if (java) {
              data = java.lang.System;
              arch = data.getProperty("os.arch");
              os = os || data.getProperty("os.name") + " " + data.getProperty("os.version");
            }
            if (rhino) {
              try {
                version = context.require("ringo/engine").version.join(".");
                name = "RingoJS";
              } catch (e) {
                if ((data = context.system) && data.global.system == context.system) {
                  name = "Narwhal";
                  os || (os = data[0].os || null);
                }
              }
              if (!name) {
                name = "Rhino";
              }
            } else if (typeof context.process == "object" && !context.process.browser && (data = context.process)) {
              if (typeof data.versions == "object") {
                if (typeof data.versions.electron == "string") {
                  description.push("Node " + data.versions.node);
                  name = "Electron";
                  version = data.versions.electron;
                } else if (typeof data.versions.nw == "string") {
                  description.push("Chromium " + version, "Node " + data.versions.node);
                  name = "NW.js";
                  version = data.versions.nw;
                }
              }
              if (!name) {
                name = "Node.js";
                arch = data.arch;
                os = data.platform;
                version = /[\d.]+/.exec(data.version);
                version = version ? version[0] : null;
              }
            }
          } else if (getClassOf(data = context.runtime) == airRuntimeClass) {
            name = "Adobe AIR";
            os = data.flash.system.Capabilities.os;
          } else if (getClassOf(data = context.phantom) == phantomClass) {
            name = "PhantomJS";
            version = (data = data.version || null) && data.major + "." + data.minor + "." + data.patch;
          } else if (typeof doc.documentMode == "number" && (data = /\bTrident\/(\d+)/i.exec(ua))) {
            version = [version, doc.documentMode];
            if ((data = +data[1] + 4) != version[1]) {
              description.push("IE " + version[1] + " mode");
              layout && (layout[1] = "");
              version[1] = data;
            }
            version = name == "IE" ? String(version[1].toFixed(1)) : version[0];
          } else if (typeof doc.documentMode == "number" && /^(?:Chrome|Firefox)\b/.test(name)) {
            description.push("masking as " + name + " " + version);
            name = "IE";
            version = "11.0";
            layout = ["Trident"];
            os = "Windows";
          }
          os = os && format(os);
        }
        if (version && (data = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(version) || /(?:alpha|beta)(?: ?\d)?/i.exec(ua + ";" + (useFeatures && nav.appMinorVersion)) || /\bMinefield\b/i.test(ua) && "a")) {
          prerelease = /b/i.test(data) ? "beta" : "alpha";
          version = version.replace(RegExp(data + "\\+?$"), "") + (prerelease == "beta" ? beta : alpha) + (/\d+\+?/.exec(data) || "");
        }
        if (name == "Fennec" || name == "Firefox" && /\b(?:Android|Firefox OS|KaiOS)\b/.test(os)) {
          name = "Firefox Mobile";
        } else if (name == "Maxthon" && version) {
          version = version.replace(/\.[\d.]+/, ".x");
        } else if (/\bXbox\b/i.test(product)) {
          if (product == "Xbox 360") {
            os = null;
          }
          if (product == "Xbox 360" && /\bIEMobile\b/.test(ua)) {
            description.unshift("mobile mode");
          }
        } else if ((/^(?:Chrome|IE|Opera)$/.test(name) || name && !product && !/Browser|Mobi/.test(name)) && (os == "Windows CE" || /Mobi/i.test(ua))) {
          name += " Mobile";
        } else if (name == "IE" && useFeatures) {
          try {
            if (context.external === null) {
              description.unshift("platform preview");
            }
          } catch (e) {
            description.unshift("embedded");
          }
        } else if ((/\bBlackBerry\b/.test(product) || /\bBB10\b/.test(ua)) && (data = (RegExp(product.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(ua) || 0)[1] || version)) {
          data = [data, /BB10/.test(ua)];
          os = (data[1] ? (product = null, manufacturer = "BlackBerry") : "Device Software") + " " + data[0];
          version = null;
        } else if (this != forOwn && product != "Wii" && (useFeatures && opera || /Opera/.test(name) && /\b(?:MSIE|Firefox)\b/i.test(ua) || name == "Firefox" && /\bOS X (?:\d+\.){2,}/.test(os) || name == "IE" && (os && !/^Win/.test(os) && version > 5.5 || /\bWindows XP\b/.test(os) && version > 8 || version == 8 && !/\bTrident\b/.test(ua))) && !reOpera.test(data = parse.call(forOwn, ua.replace(reOpera, "") + ";")) && data.name) {
          data = "ing as " + data.name + ((data = data.version) ? " " + data : "");
          if (reOpera.test(name)) {
            if (/\bIE\b/.test(data) && os == "Mac OS") {
              os = null;
            }
            data = "identify" + data;
          } else {
            data = "mask" + data;
            if (operaClass) {
              name = format(operaClass.replace(/([a-z])([A-Z])/g, "$1 $2"));
            } else {
              name = "Opera";
            }
            if (/\bIE\b/.test(data)) {
              os = null;
            }
            if (!useFeatures) {
              version = null;
            }
          }
          layout = ["Presto"];
          description.push(data);
        }
        if (data = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(ua) || 0)[1]) {
          data = [parseFloat(data.replace(/\.(\d)$/, ".0$1")), data];
          if (name == "Safari" && data[1].slice(-1) == "+") {
            name = "WebKit Nightly";
            prerelease = "alpha";
            version = data[1].slice(0, -1);
          } else if (version == data[1] || version == (data[2] = (/\bSafari\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
            version = null;
          }
          data[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(ua) || 0)[1];
          if (data[0] == 537.36 && data[2] == 537.36 && parseFloat(data[1]) >= 28 && layout == "WebKit") {
            layout = ["Blink"];
          }
          if (!useFeatures || !likeChrome && !data[1]) {
            layout && (layout[1] = "like Safari");
            data = (data = data[0], data < 400 ? 1 : data < 500 ? 2 : data < 526 ? 3 : data < 533 ? 4 : data < 534 ? "4+" : data < 535 ? 5 : data < 537 ? 6 : data < 538 ? 7 : data < 601 ? 8 : data < 602 ? 9 : data < 604 ? 10 : data < 606 ? 11 : data < 608 ? 12 : "12");
          } else {
            layout && (layout[1] = "like Chrome");
            data = data[1] || (data = data[0], data < 530 ? 1 : data < 532 ? 2 : data < 532.05 ? 3 : data < 533 ? 4 : data < 534.03 ? 5 : data < 534.07 ? 6 : data < 534.1 ? 7 : data < 534.13 ? 8 : data < 534.16 ? 9 : data < 534.24 ? 10 : data < 534.3 ? 11 : data < 535.01 ? 12 : data < 535.02 ? "13+" : data < 535.07 ? 15 : data < 535.11 ? 16 : data < 535.19 ? 17 : data < 536.05 ? 18 : data < 536.1 ? 19 : data < 537.01 ? 20 : data < 537.11 ? "21+" : data < 537.13 ? 23 : data < 537.18 ? 24 : data < 537.24 ? 25 : data < 537.36 ? 26 : layout != "Blink" ? "27" : "28");
          }
          layout && (layout[1] += " " + (data += typeof data == "number" ? ".x" : /[.+]/.test(data) ? "" : "+"));
          if (name == "Safari" && (!version || parseInt(version) > 45)) {
            version = data;
          } else if (name == "Chrome" && /\bHeadlessChrome/i.test(ua)) {
            description.unshift("headless");
          }
        }
        if (name == "Opera" && (data = /\bzbov|zvav$/.exec(os))) {
          name += " ";
          description.unshift("desktop mode");
          if (data == "zvav") {
            name += "Mini";
            version = null;
          } else {
            name += "Mobile";
          }
          os = os.replace(RegExp(" *" + data + "$"), "");
        } else if (name == "Safari" && /\bChrome\b/.exec(layout && layout[1])) {
          description.unshift("desktop mode");
          name = "Chrome Mobile";
          version = null;
          if (/\bOS X\b/.test(os)) {
            manufacturer = "Apple";
            os = "iOS 4.3+";
          } else {
            os = null;
          }
        } else if (/\bSRWare Iron\b/.test(name) && !version) {
          version = getVersion("Chrome");
        }
        if (version && version.indexOf(data = /[\d.]+$/.exec(os)) == 0 && ua.indexOf("/" + data + "-") > -1) {
          os = trim(os.replace(data, ""));
        }
        if (os && os.indexOf(name) != -1 && !RegExp(name + " OS").test(os)) {
          os = os.replace(RegExp(" *" + qualify(name) + " *"), "");
        }
        if (layout && !/\b(?:Avant|Nook)\b/.test(name) && (/Browser|Lunascape|Maxthon/.test(name) || name != "Safari" && /^iOS/.test(os) && /\bSafari\b/.test(layout[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(name) && layout[1])) {
          (data = layout[layout.length - 1]) && description.push(data);
        }
        if (description.length) {
          description = ["(" + description.join("; ") + ")"];
        }
        if (manufacturer && product && product.indexOf(manufacturer) < 0) {
          description.push("on " + manufacturer);
        }
        if (product) {
          description.push((/^on /.test(description[description.length - 1]) ? "" : "on ") + product);
        }
        if (os) {
          data = / ([\d.+]+)$/.exec(os);
          isSpecialCasedOS = data && os.charAt(os.length - data[0].length - 1) == "/";
          os = {
            "architecture": 32,
            "family": data && !isSpecialCasedOS ? os.replace(data[0], "") : os,
            "version": data ? data[1] : null,
            "toString": function() {
              var version2 = this.version;
              return this.family + (version2 && !isSpecialCasedOS ? " " + version2 : "") + (this.architecture == 64 ? " 64-bit" : "");
            }
          };
        }
        if ((data = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(arch)) && !/\bi686\b/i.test(arch)) {
          if (os) {
            os.architecture = 64;
            os.family = os.family.replace(RegExp(" *" + data), "");
          }
          if (name && (/\bWOW64\b/i.test(ua) || useFeatures && /\w(?:86|32)$/.test(nav.cpuClass || nav.platform) && !/\bWin64; x64\b/i.test(ua))) {
            description.unshift("32-bit");
          }
        } else if (os && /^OS X/.test(os.family) && name == "Chrome" && parseFloat(version) >= 39) {
          os.architecture = 64;
        }
        ua || (ua = null);
        var platform2 = {};
        platform2.description = ua;
        platform2.layout = layout && layout[0];
        platform2.manufacturer = manufacturer;
        platform2.name = name;
        platform2.prerelease = prerelease;
        platform2.product = product;
        platform2.ua = ua;
        platform2.version = name && version;
        platform2.os = os || {
          /**
           * The CPU architecture the OS is built for.
           *
           * @memberOf platform.os
           * @type number|null
           */
          "architecture": null,
          /**
           * The family of the OS.
           *
           * Common values include:
           * "Windows", "Windows Server 2008 R2 / 7", "Windows Server 2008 / Vista",
           * "Windows XP", "OS X", "Linux", "Ubuntu", "Debian", "Fedora", "Red Hat",
           * "SuSE", "Android", "iOS" and "Windows Phone"
           *
           * @memberOf platform.os
           * @type string|null
           */
          "family": null,
          /**
           * The version of the OS.
           *
           * @memberOf platform.os
           * @type string|null
           */
          "version": null,
          /**
           * Returns the OS string.
           *
           * @memberOf platform.os
           * @returns {string} The OS string.
           */
          "toString": function() {
            return "null";
          }
        };
        platform2.parse = parse;
        platform2.toString = toStringPlatform;
        if (platform2.version) {
          description.unshift(version);
        }
        if (platform2.name) {
          description.unshift(name);
        }
        if (os && name && !(os == String(os).split(" ")[0] && (os == name.split(" ")[0] || product))) {
          description.push(product ? "(" + os + ")" : "on " + os);
        }
        if (description.length) {
          platform2.description = description.join(" ");
        }
        return platform2;
      }
      var platform = parse();
      if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
        root.platform = platform;
        define(function() {
          return platform;
        });
      } else if (freeExports && freeModule) {
        forOwn(platform, function(value, key) {
          freeExports[key] = value;
        });
      } else {
        root.platform = platform;
      }
    }).call(exports);
  }
});

// bug-reporter.ts
function report(msg) {
  if (["ResizeObserver loop completed with undelivered notifications.", "ResizeObserver loop limit exceeded", "Uncaught aborting javascript here"].includes(msg))
    return;
  API.bugReport({
    type: "web-frontend",
    platform: import_platform.default.os?.family,
    platformVersion: import_platform.default.os?.version,
    error: msg instanceof Error ? msg.message : msg,
    errorStack: msg instanceof Error ? msg.stack : msg,
    browser: import_platform.default.name,
    // null safe version of getting the error
    userId: localStorage["access-token"]?.split(".").filter((_2, i) => i <= 1).map((x2) => JSON.parse(atob(x2))).filter((_2, i) => i == 1).map((it) => it.userId).join(),
    browserVersion: import_platform.default.version,
    location: location.toString()
  }).catch(() => {
  });
}
var import_platform;
var init_bug_reporter = __esm({
  "bug-reporter.ts"() {
    init_restSpec();
    import_platform = __toESM(require_platform());
    globalThis.onunhandledrejection = (e) => {
      report(e.reason);
    };
    globalThis.onerror = (e) => {
      report(typeof e == "string" ? e : e.error);
    };
  }
});

// pages/_legacy/misc/callback.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
var params = new URLSearchParams(location.search);
var state = JSON.parse(atob(params.get("state") ?? ""));
params.set("type", state.type);
localStorage.setItem("goal", state.redirect || "/c/music");
location.href = `/signin?${params.toString()}`;
/*!
 * Platform.js v1.3.6
 * Copyright 2014-2020 Benjamin Tan
 * Copyright 2011-2013 John-David Dalton
 * Available under MIT license
 */
