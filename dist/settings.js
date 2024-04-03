;new EventSource(new URL("/esbuild",location.href).toString()).addEventListener('message', () => location?.reload?.());
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn2, res) => function __init() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
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
      var a2, b3, c2 = new this(function(resolve, reject2) {
        a2 = resolve;
        b3 = reject2;
      });
      return { resolve: a2, reject: b3, promise: c2 };
    });
  }
});

// esbuild_serve:http-import:https://unpkg.com/@oddbird/popover-polyfill
function P(e, t, o2) {
  N.set(e, setTimeout(() => {
    N.has(e) && e.dispatchEvent(new c("toggle", { cancelable: false, oldState: t, newState: o2 }));
  }, 0));
}
function y(e) {
  return h.get(e) || "hidden";
}
function O(e) {
  let t = e.popoverTargetElement;
  if (!(t instanceof HTMLElement))
    return;
  let o2 = y(t);
  e.popoverTargetAction === "show" && o2 === "showing" || e.popoverTargetAction === "hide" && o2 === "hidden" || (o2 === "showing" ? v(t, true, true) : d(t, false) && (L.set(t, e), H(t)));
}
function d(e, t) {
  return !(e.popover !== "auto" && e.popover !== "manual" || !e.isConnected || t && y(e) !== "showing" || !t && y(e) !== "hidden" || e instanceof V && e.hasAttribute("open") || document.fullscreenElement === e);
}
function F(e) {
  return e ? Array.from(p.get(e.ownerDocument) || []).indexOf(e) + 1 : 0;
}
function $(e) {
  let t = W(e), o2 = U(e);
  return F(t) > F(o2) ? t : o2;
}
function M(e) {
  let t = p.get(e);
  for (let o2 of t || [])
    if (!o2.isConnected)
      t.delete(o2);
    else
      return o2;
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
  let t = /* @__PURE__ */ new Map(), o2 = 0;
  for (let l2 of p.get(e.ownerDocument) || [])
    t.set(l2, o2), o2 += 1;
  t.set(e, o2), o2 += 1;
  let r = null;
  function i4(l2) {
    let a2 = W(l2);
    if (a2 === null)
      return null;
    let w2 = t.get(a2);
    (r === null || t.get(r) < w2) && (r = a2);
  }
  return i4(e.parentElement || g(e)), r;
}
function Q(e) {
  return e.hidden || e instanceof x || (e instanceof HTMLButtonElement || e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement || e instanceof HTMLOptGroupElement || e instanceof HTMLOptionElement || e instanceof HTMLFieldSetElement) && e.disabled || e instanceof HTMLInputElement && e.type === "hidden" || e instanceof HTMLAnchorElement && e.href === "" ? false : typeof e.tabIndex == "number" && e.tabIndex !== -1;
}
function _(e) {
  if (e.shadowRoot && e.shadowRoot.delegatesFocus !== true)
    return null;
  let t = e;
  t.shadowRoot && (t = t.shadowRoot);
  let o2 = t.querySelector("[autofocus]");
  if (o2)
    return o2;
  {
    let l2 = t.querySelectorAll("slot");
    for (let a2 of l2) {
      let w2 = a2.assignedElements({ flatten: true });
      for (let n2 of w2) {
        if (n2.hasAttribute("autofocus"))
          return n2;
        if (o2 = n2.querySelector("[autofocus]"), o2)
          return o2;
      }
    }
  }
  let r = e.ownerDocument.createTreeWalker(t, NodeFilter.SHOW_ELEMENT), i4 = r.currentNode;
  for (; i4; ) {
    if (Q(i4))
      return i4;
    i4 = r.nextNode();
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
  let o2 = false;
  if (e.popover === "auto") {
    let i4 = e.getAttribute("popover"), l2 = G(e) || t;
    if (T(l2, false, true), i4 !== e.getAttribute("popover") || !d(e, false))
      return;
  }
  M(t) || (o2 = true), S.delete(e);
  let r = t.activeElement;
  e.classList.add(":popover-open"), h.set(e, "showing"), b.has(t) || b.set(t, /* @__PURE__ */ new Set()), b.get(t).add(e), J(e), e.popover === "auto" && (p.has(t) || p.set(t, /* @__PURE__ */ new Set()), p.get(t).add(e), q(L.get(e), true)), o2 && r && e.popover === "auto" && S.set(e, r), P(e, "closed", "open");
}
function v(e, t = false, o2 = false) {
  if (!d(e, true))
    return;
  let r = e.ownerDocument;
  if (e.popover === "auto" && (T(e, t, o2), !d(e, true)) || (q(L.get(e), false), L.delete(e), o2 && (e.dispatchEvent(new c("beforetoggle", { oldState: "open", newState: "closed" })), !d(e, true))))
    return;
  b.get(r)?.delete(e), p.get(r)?.delete(e), e.classList.remove(":popover-open"), h.set(e, "hidden"), o2 && P(e, "open", "closed");
  let i4 = S.get(e);
  i4 && (S.delete(e), t && i4.focus());
}
function B(e, t = false, o2 = false) {
  let r = M(e);
  for (; r; )
    v(r, t, o2), r = M(e);
}
function T(e, t, o2) {
  let r = e.ownerDocument || e;
  if (e instanceof Document)
    return B(r, t, o2);
  let i4 = null, l2 = false;
  for (let a2 of p.get(r) || [])
    if (a2 === e)
      l2 = true;
    else if (l2) {
      i4 = a2;
      break;
    }
  if (!l2)
    return B(r, t, o2);
  for (; i4 && y(i4) === "showing" && p.get(r)?.size; )
    v(i4, t, o2);
}
function D(e) {
  if (!e.isTrusted)
    return;
  let t = e.composedPath()[0];
  if (!t)
    return;
  let o2 = t.ownerDocument;
  if (!M(o2))
    return;
  let i4 = $(t);
  if (i4 && e.type === "pointerdown")
    A.set(o2, i4);
  else if (e.type === "pointerup") {
    let l2 = A.get(o2) === i4;
    A.delete(o2), l2 && T(i4 || o2, false, true);
  }
}
function q(e, t = false) {
  if (!e)
    return;
  k.has(e) || k.set(e, e.getAttribute("aria-expanded"));
  let o2 = e.popoverTargetElement;
  if (o2 instanceof HTMLElement && o2.popover === "auto")
    e.setAttribute("aria-expanded", String(t));
  else {
    let r = k.get(e);
    r ? e.setAttribute("aria-expanded", r) : e.removeAttribute("aria-expanded");
  }
}
function j() {
  return typeof HTMLElement < "u" && typeof HTMLElement.prototype == "object" && "popover" in HTMLElement.prototype;
}
function f(e, t, o2) {
  let r = e[t];
  Object.defineProperty(e, t, { value(i4) {
    return r.call(this, o2(i4));
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
    let o2 = document.createElement("style");
    o2.textContent = t, e instanceof Document ? e.head.prepend(o2) : e.prepend(o2);
  } else
    e.adoptedStyleSheets = [m, ...e.adoptedStyleSheets];
}
function K() {
  globalThis.ToggleEvent = globalThis.ToggleEvent || c;
  function e(n2) {
    return n2?.includes(":popover-open") && (n2 = n2.replace(X, "$1.\\:popover-open")), n2;
  }
  f(Document.prototype, "querySelector", e), f(Document.prototype, "querySelectorAll", e), f(Element.prototype, "querySelector", e), f(Element.prototype, "querySelectorAll", e), f(Element.prototype, "matches", e), f(Element.prototype, "closest", e), f(DocumentFragment.prototype, "querySelectorAll", e), f(DocumentFragment.prototype, "querySelectorAll", e), Object.defineProperties(HTMLElement.prototype, { popover: { enumerable: true, configurable: true, get() {
    if (!this.hasAttribute("popover"))
      return null;
    let n2 = (this.getAttribute("popover") || "").toLowerCase();
    return n2 === "" || n2 == "auto" ? "auto" : "manual";
  }, set(n2) {
    this.setAttribute("popover", n2);
  } }, showPopover: { enumerable: true, configurable: true, value() {
    H(this);
  } }, hidePopover: { enumerable: true, configurable: true, value() {
    v(this, true, true);
  } }, togglePopover: { enumerable: true, configurable: true, value(n2) {
    h.get(this) === "showing" && n2 === void 0 || n2 === false ? v(this, true, true) : (n2 === void 0 || n2 === true) && H(this);
  } } });
  let t = Element.prototype.attachShadow;
  t && Object.defineProperties(Element.prototype, { attachShadow: { enumerable: true, configurable: true, writable: true, value(n2) {
    let s = t.call(this, n2);
    return I(s), s;
  } } });
  let o2 = HTMLElement.prototype.attachInternals;
  o2 && Object.defineProperties(HTMLElement.prototype, { attachInternals: { enumerable: true, configurable: true, writable: true, value() {
    let n2 = o2.call(this);
    return n2.shadowRoot && I(n2.shadowRoot), n2;
  } } });
  let r = /* @__PURE__ */ new WeakMap();
  function i4(n2) {
    Object.defineProperties(n2.prototype, { popoverTargetElement: { enumerable: true, configurable: true, set(s) {
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
      let u = g(this), E3 = this.getAttribute("popovertarget");
      return (u instanceof Document || u instanceof C) && E3 && u.getElementById(E3) || null;
    } }, popoverTargetAction: { enumerable: true, configurable: true, get() {
      let s = (this.getAttribute("popovertargetaction") || "").toLowerCase();
      return s === "show" || s === "hide" ? s : "toggle";
    }, set(s) {
      this.setAttribute("popovertargetaction", s);
    } } });
  }
  i4(HTMLButtonElement), i4(HTMLInputElement);
  let l2 = (n2) => {
    let s = n2.composedPath(), u = s[0];
    if (!(u instanceof Element) || u?.shadowRoot)
      return;
    let E3 = g(u);
    if (!(E3 instanceof C || E3 instanceof Document))
      return;
    let R2 = s.find((z3) => z3.matches?.("[popovertargetaction],[popovertarget]"));
    if (R2) {
      O(R2), n2.preventDefault();
      return;
    }
  }, a2 = (n2) => {
    let s = n2.key, u = n2.target;
    !n2.defaultPrevented && u && (s === "Escape" || s === "Esc") && T(u.ownerDocument, true, true);
  };
  ((n2) => {
    n2.addEventListener("click", l2), n2.addEventListener("keydown", a2), n2.addEventListener("pointerdown", D), n2.addEventListener("pointerup", D);
  })(document), I(document);
}
var c, N, x, V, b, p, h, L, S, A, k, C, X, m;
var init_popover_polyfill = __esm({
  "esbuild_serve:http-import:https://unpkg.com/@oddbird/popover-polyfill"() {
    c = class extends Event {
      oldState;
      newState;
      constructor(t, { oldState: o2 = "", newState: r = "", ...i4 } = {}) {
        super(t, i4), this.oldState = String(o2 || ""), this.newState = String(r || "");
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
function stupidErrorAlert(data) {
  if (data.status === "fulfilled") {
    return data.value;
  }
  alert(displayError(data.reason));
  throw data.reason;
}
function reject(rsp) {
  return asExternal(Promise.reject(rsp));
}
function displayError(data) {
  console.error("displayError", data);
  if (data instanceof Error) {
    if (data.message === "Failed to fetch") {
      return "Error: Can't load. Please try again later.";
    }
    if (data.message) {
      return `Error: ${data.message}`;
    }
  }
  if (typeof data === "string") {
    try {
      const jdata = JSON.parse(data);
      if (jdata && typeof jdata === "object" && "type" in jdata && "message" in jdata && jdata.type === "assert" && jdata.message)
        return `Error: ${jdata.message}`;
    } catch (_e2) {
    }
  }
  return `Error: ${defaultError}`;
}
function headers(token) {
  return {
    "Authorization": `JWT ${token}`
  };
}
var defaultError, API;
var init_restSpec = __esm({
  "pages/shared/restSpec.ts"() {
    init_polyfill();
    init_bug_reporter();
    init_mod();
    init_urlpattern_polyfill();
    init_main();
    init_popover_polyfill();
    defaultError = "Something happend unexpectedly. Please try again later.";
    API = {
      getToken: () => localStorage["access-token"],
      BASE_URL: localStorage.OVERRIDE_BASE_URL || (location.hostname == "bbn.one" ? "https://bbn.one/api/@bbn/" : "http://localhost:8443/api/@bbn/"),
      WS_URL: localStorage.OVERRIDE_WS_URL || (location.hostname == "bbn.one" ? "wss://bbn.one/ws" : "ws://localhost:8443/ws"),
      bugReport: (bugReport2) => fetch(`${API.BASE_URL}bug-track/`, {
        method: "POST",
        body: JSON.stringify(bugReport2)
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
      function cleanupOS(os2, pattern, label) {
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
        if (pattern && label && /^Win/i.test(os2) && !/^Windows Phone /i.test(os2) && (data = data[/[\d.]+$/.exec(os2)])) {
          os2 = "Windows " + data;
        }
        os2 = String(os2);
        if (pattern && label) {
          os2 = os2.replace(RegExp(pattern, "i"), label);
        }
        os2 = format(
          os2.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0]
        );
        return os2;
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
      function parse(ua2) {
        var context = root;
        var isCustomContext = ua2 && typeof ua2 == "object" && getClassOf(ua2) != "String";
        if (isCustomContext) {
          context = ua2;
          ua2 = null;
        }
        var nav = context.navigator || {};
        var userAgent = nav.userAgent || "";
        ua2 || (ua2 = userAgent);
        var isModuleScope = isCustomContext || thisBinding == oldRoot;
        var likeChrome = isCustomContext ? !!nav.likeChrome : /\bChrome\b/.test(ua2) && !/internal|\n/i.test(toString.toString());
        var objectClass = "Object", airRuntimeClass = isCustomContext ? objectClass : "ScriptBridgingProxyObject", enviroClass = isCustomContext ? objectClass : "Environment", javaClass = isCustomContext && context.java ? "JavaPackage" : getClassOf(context.java), phantomClass = isCustomContext ? objectClass : "RuntimeObject";
        var java = /\bJava/.test(javaClass) && context.java;
        var rhino = java && getClassOf(context.environment) == enviroClass;
        var alpha = java ? "a" : "\u03B1";
        var beta = java ? "b" : "\u03B2";
        var doc = context.document || {};
        var opera = context.operamini || context.opera;
        var operaClass = reOpera.test(operaClass = isCustomContext && opera ? opera["[[Class]]"] : getClassOf(opera)) ? operaClass : opera = null;
        var data;
        var arch = ua2;
        var description = [];
        var prerelease = null;
        var useFeatures = ua2 == userAgent;
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
        var os2 = getOS([
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
            return result || RegExp("\\b" + (guess.pattern || qualify(guess)) + "\\b", "i").exec(ua2) && (guess.label || guess);
          });
        }
        function getManufacturer(guesses) {
          return reduce(guesses, function(result, value, key) {
            return result || (value[product] || value[/^[a-z]+(?: +[a-z]+\b)*/i.exec(product)] || RegExp("\\b" + qualify(key) + "(?:\\b|\\w*\\d)", "i").exec(ua2)) && key;
          });
        }
        function getName(guesses) {
          return reduce(guesses, function(result, guess) {
            return result || RegExp("\\b" + (guess.pattern || qualify(guess)) + "\\b", "i").exec(ua2) && (guess.label || guess);
          });
        }
        function getOS(guesses) {
          return reduce(guesses, function(result, guess) {
            var pattern = guess.pattern || qualify(guess);
            if (!result && (result = RegExp("\\b" + pattern + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(ua2))) {
              result = cleanupOS(result, pattern, guess.label || guess);
            }
            return result;
          });
        }
        function getProduct(guesses) {
          return reduce(guesses, function(result, guess) {
            var pattern = guess.pattern || qualify(guess);
            if (!result && (result = RegExp("\\b" + pattern + " *\\d+[.\\w_]*", "i").exec(ua2) || RegExp("\\b" + pattern + " *\\w+-[\\w]*", "i").exec(ua2) || RegExp("\\b" + pattern + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(ua2))) {
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
            return result || (RegExp(pattern + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(ua2) || 0)[1] || null;
          });
        }
        function toStringPlatform() {
          return this.description || "";
        }
        layout && (layout = [layout]);
        if (/\bAndroid\b/.test(os2) && !product && (data = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(ua2))) {
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
        if (/\bSimulator\b/i.test(ua2)) {
          product = (product ? product + " " : "") + "Simulator";
        }
        if (name == "Opera Mini" && /\bOPiOS\b/.test(ua2)) {
          description.push("running in Turbo/Uncompressed mode");
        }
        if (name == "IE" && /\blike iPhone OS\b/.test(ua2)) {
          data = parse(ua2.replace(/like iPhone OS/, ""));
          manufacturer = data.manufacturer;
          product = data.product;
        } else if (/^iP/.test(product)) {
          name || (name = "Safari");
          os2 = "iOS" + ((data = / OS ([\d_]+)/i.exec(ua2)) ? " " + data[1].replace(/_/g, ".") : "");
        } else if (name == "Konqueror" && /^Linux\b/i.test(os2)) {
          os2 = "Kubuntu";
        } else if (manufacturer && manufacturer != "Google" && (/Chrome/.test(name) && !/\bMobile Safari\b/i.test(ua2) || /\bVita\b/.test(product)) || /\bAndroid\b/.test(os2) && /^Chrome/.test(name) && /\bVersion\//i.test(ua2)) {
          name = "Android Browser";
          os2 = /\bAndroid\b/.test(os2) ? os2 : "Android";
        } else if (name == "Silk") {
          if (!/\bMobi/i.test(ua2)) {
            os2 = "Android";
            description.unshift("desktop mode");
          }
          if (/Accelerated *= *true/i.test(ua2)) {
            description.unshift("accelerated");
          }
        } else if (name == "UC Browser" && /\bUCWEB\b/.test(ua2)) {
          description.push("speed mode");
        } else if (name == "PaleMoon" && (data = /\bFirefox\/([\d.]+)\b/.exec(ua2))) {
          description.push("identifying as Firefox " + data[1]);
        } else if (name == "Firefox" && (data = /\b(Mobile|Tablet|TV)\b/i.exec(ua2))) {
          os2 || (os2 = "Firefox OS");
          product || (product = data[1]);
        } else if (!name || (data = !/\bMinefield\b/i.test(ua2) && /\b(?:Firefox|Safari)\b/.exec(name))) {
          if (name && !product && /[\/,]|^[^(]+?\)/.test(ua2.slice(ua2.indexOf(data + "/") + 8))) {
            name = null;
          }
          if ((data = product || manufacturer || os2) && (product || manufacturer || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(os2))) {
            name = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(os2) ? os2 : data) + " Browser";
          }
        } else if (name == "Electron" && (data = (/\bChrome\/([\d.]+)\b/.exec(ua2) || 0)[1])) {
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
        if (data = layout == "iCab" && parseFloat(version) > 3 && "WebKit" || /\bOpera\b/.test(name) && (/\bOPR\b/.test(ua2) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(ua2) && !/^(?:Trident|EdgeHTML)$/.test(layout) && "WebKit" || !layout && /\bMSIE\b/i.test(ua2) && (os2 == "Mac OS" ? "Tasman" : "Trident") || layout == "WebKit" && /\bPlayStation\b(?! Vita\b)/i.test(name) && "NetFront") {
          layout = [data];
        }
        if (name == "IE" && (data = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(ua2) || 0)[1])) {
          name += " Mobile";
          os2 = "Windows Phone " + (/\+$/.test(data) ? data : data + ".x");
          description.unshift("desktop mode");
        } else if (/\bWPDesktop\b/i.test(ua2)) {
          name = "IE Mobile";
          os2 = "Windows Phone 8.x";
          description.unshift("desktop mode");
          version || (version = (/\brv:([\d.]+)/.exec(ua2) || 0)[1]);
        } else if (name != "IE" && layout == "Trident" && (data = /\brv:([\d.]+)/.exec(ua2))) {
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
              os2 = os2 || data.getProperty("os.name") + " " + data.getProperty("os.version");
            }
            if (rhino) {
              try {
                version = context.require("ringo/engine").version.join(".");
                name = "RingoJS";
              } catch (e) {
                if ((data = context.system) && data.global.system == context.system) {
                  name = "Narwhal";
                  os2 || (os2 = data[0].os || null);
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
                os2 = data.platform;
                version = /[\d.]+/.exec(data.version);
                version = version ? version[0] : null;
              }
            }
          } else if (getClassOf(data = context.runtime) == airRuntimeClass) {
            name = "Adobe AIR";
            os2 = data.flash.system.Capabilities.os;
          } else if (getClassOf(data = context.phantom) == phantomClass) {
            name = "PhantomJS";
            version = (data = data.version || null) && data.major + "." + data.minor + "." + data.patch;
          } else if (typeof doc.documentMode == "number" && (data = /\bTrident\/(\d+)/i.exec(ua2))) {
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
            os2 = "Windows";
          }
          os2 = os2 && format(os2);
        }
        if (version && (data = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(version) || /(?:alpha|beta)(?: ?\d)?/i.exec(ua2 + ";" + (useFeatures && nav.appMinorVersion)) || /\bMinefield\b/i.test(ua2) && "a")) {
          prerelease = /b/i.test(data) ? "beta" : "alpha";
          version = version.replace(RegExp(data + "\\+?$"), "") + (prerelease == "beta" ? beta : alpha) + (/\d+\+?/.exec(data) || "");
        }
        if (name == "Fennec" || name == "Firefox" && /\b(?:Android|Firefox OS|KaiOS)\b/.test(os2)) {
          name = "Firefox Mobile";
        } else if (name == "Maxthon" && version) {
          version = version.replace(/\.[\d.]+/, ".x");
        } else if (/\bXbox\b/i.test(product)) {
          if (product == "Xbox 360") {
            os2 = null;
          }
          if (product == "Xbox 360" && /\bIEMobile\b/.test(ua2)) {
            description.unshift("mobile mode");
          }
        } else if ((/^(?:Chrome|IE|Opera)$/.test(name) || name && !product && !/Browser|Mobi/.test(name)) && (os2 == "Windows CE" || /Mobi/i.test(ua2))) {
          name += " Mobile";
        } else if (name == "IE" && useFeatures) {
          try {
            if (context.external === null) {
              description.unshift("platform preview");
            }
          } catch (e) {
            description.unshift("embedded");
          }
        } else if ((/\bBlackBerry\b/.test(product) || /\bBB10\b/.test(ua2)) && (data = (RegExp(product.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(ua2) || 0)[1] || version)) {
          data = [data, /BB10/.test(ua2)];
          os2 = (data[1] ? (product = null, manufacturer = "BlackBerry") : "Device Software") + " " + data[0];
          version = null;
        } else if (this != forOwn && product != "Wii" && (useFeatures && opera || /Opera/.test(name) && /\b(?:MSIE|Firefox)\b/i.test(ua2) || name == "Firefox" && /\bOS X (?:\d+\.){2,}/.test(os2) || name == "IE" && (os2 && !/^Win/.test(os2) && version > 5.5 || /\bWindows XP\b/.test(os2) && version > 8 || version == 8 && !/\bTrident\b/.test(ua2))) && !reOpera.test(data = parse.call(forOwn, ua2.replace(reOpera, "") + ";")) && data.name) {
          data = "ing as " + data.name + ((data = data.version) ? " " + data : "");
          if (reOpera.test(name)) {
            if (/\bIE\b/.test(data) && os2 == "Mac OS") {
              os2 = null;
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
              os2 = null;
            }
            if (!useFeatures) {
              version = null;
            }
          }
          layout = ["Presto"];
          description.push(data);
        }
        if (data = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(ua2) || 0)[1]) {
          data = [parseFloat(data.replace(/\.(\d)$/, ".0$1")), data];
          if (name == "Safari" && data[1].slice(-1) == "+") {
            name = "WebKit Nightly";
            prerelease = "alpha";
            version = data[1].slice(0, -1);
          } else if (version == data[1] || version == (data[2] = (/\bSafari\/([\d.]+\+?)/i.exec(ua2) || 0)[1])) {
            version = null;
          }
          data[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(ua2) || 0)[1];
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
          } else if (name == "Chrome" && /\bHeadlessChrome/i.test(ua2)) {
            description.unshift("headless");
          }
        }
        if (name == "Opera" && (data = /\bzbov|zvav$/.exec(os2))) {
          name += " ";
          description.unshift("desktop mode");
          if (data == "zvav") {
            name += "Mini";
            version = null;
          } else {
            name += "Mobile";
          }
          os2 = os2.replace(RegExp(" *" + data + "$"), "");
        } else if (name == "Safari" && /\bChrome\b/.exec(layout && layout[1])) {
          description.unshift("desktop mode");
          name = "Chrome Mobile";
          version = null;
          if (/\bOS X\b/.test(os2)) {
            manufacturer = "Apple";
            os2 = "iOS 4.3+";
          } else {
            os2 = null;
          }
        } else if (/\bSRWare Iron\b/.test(name) && !version) {
          version = getVersion("Chrome");
        }
        if (version && version.indexOf(data = /[\d.]+$/.exec(os2)) == 0 && ua2.indexOf("/" + data + "-") > -1) {
          os2 = trim(os2.replace(data, ""));
        }
        if (os2 && os2.indexOf(name) != -1 && !RegExp(name + " OS").test(os2)) {
          os2 = os2.replace(RegExp(" *" + qualify(name) + " *"), "");
        }
        if (layout && !/\b(?:Avant|Nook)\b/.test(name) && (/Browser|Lunascape|Maxthon/.test(name) || name != "Safari" && /^iOS/.test(os2) && /\bSafari\b/.test(layout[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(name) && layout[1])) {
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
        if (os2) {
          data = / ([\d.+]+)$/.exec(os2);
          isSpecialCasedOS = data && os2.charAt(os2.length - data[0].length - 1) == "/";
          os2 = {
            "architecture": 32,
            "family": data && !isSpecialCasedOS ? os2.replace(data[0], "") : os2,
            "version": data ? data[1] : null,
            "toString": function() {
              var version2 = this.version;
              return this.family + (version2 && !isSpecialCasedOS ? " " + version2 : "") + (this.architecture == 64 ? " 64-bit" : "");
            }
          };
        }
        if ((data = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(arch)) && !/\bi686\b/i.test(arch)) {
          if (os2) {
            os2.architecture = 64;
            os2.family = os2.family.replace(RegExp(" *" + data), "");
          }
          if (name && (/\bWOW64\b/i.test(ua2) || useFeatures && /\w(?:86|32)$/.test(nav.cpuClass || nav.platform) && !/\bWin64; x64\b/i.test(ua2))) {
            description.unshift("32-bit");
          }
        } else if (os2 && /^OS X/.test(os2.family) && name == "Chrome" && parseFloat(version) >= 39) {
          os2.architecture = 64;
        }
        ua2 || (ua2 = null);
        var platform2 = {};
        platform2.description = ua2;
        platform2.layout = layout && layout[0];
        platform2.manufacturer = manufacturer;
        platform2.name = name;
        platform2.prerelease = prerelease;
        platform2.product = product;
        platform2.ua = ua2;
        platform2.version = name && version;
        platform2.os = os2 || {
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
        if (os2 && name && !(os2 == String(os2).split(" ")[0] && (os2 == name.split(" ")[0] || product))) {
          description.push(product ? "(" + os2 + ")" : "on " + os2);
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
    userId: localStorage["access-token"]?.split(".").filter((_3, i4) => i4 <= 1).map((x2) => JSON.parse(atob(x2))).filter((_3, i4) => i4 == 1).map((it) => it.userId).join(),
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

// esbuild_serve:http-import:https://cdn.jsdelivr.net/npm/material-icons@1.13.12/iconfont/outlined.css
var require_outlined = __commonJS({
  "esbuild_serve:http-import:https://cdn.jsdelivr.net/npm/material-icons@1.13.12/iconfont/outlined.css"(exports, module) {
    module.exports = {};
  }
});

// esbuild_serve:http-import:https://cdn.jsdelivr.net/npm/material-icons@1.13.12/iconfont/filled.css
var require_filled = __commonJS({
  "esbuild_serve:http-import:https://cdn.jsdelivr.net/npm/material-icons@1.13.12/iconfont/filled.css"(exports, module) {
    module.exports = {};
  }
});

// esbuild_serve:http-import:https://cdn.jsdelivr.net/npm/material-icons@1.13.12/iconfont/round.css
var require_round = __commonJS({
  "esbuild_serve:http-import:https://cdn.jsdelivr.net/npm/material-icons@1.13.12/iconfont/round.css"(exports, module) {
    module.exports = {};
  }
});

// esbuild_serve:http-import:https://cdn.jsdelivr.net/npm/material-icons@1.13.12/iconfont/sharp.css
var require_sharp = __commonJS({
  "esbuild_serve:http-import:https://cdn.jsdelivr.net/npm/material-icons@1.13.12/iconfont/sharp.css"(exports, module) {
    module.exports = {};
  }
});

// esbuild_serve:http-import:https://cdn.jsdelivr.net/npm/material-icons@1.13.12/iconfont/two-tone.css
var require_two_tone = __commonJS({
  "esbuild_serve:http-import:https://cdn.jsdelivr.net/npm/material-icons@1.13.12/iconfont/two-tone.css"(exports, module) {
    module.exports = {};
  }
});

// esbuild_serve:http-import:https://esm.sh/v135/@kurkle/color@0.3.2/denonext/color.mjs
function l(n2) {
  return n2 + 0.5 | 0;
}
function m2(n2) {
  return b2(l(n2 * 2.55), 0, 255);
}
function d2(n2) {
  return b2(l(n2 * 255), 0, 255);
}
function o(n2) {
  return b2(l(n2 / 2.55) / 100, 0, 1);
}
function X2(n2) {
  return b2(l(n2 * 100), 0, 100);
}
function V2(n2) {
  var e = n2.length, f2;
  return n2[0] === "#" && (e === 4 || e === 5 ? f2 = { r: 255 & i[n2[1]] * 17, g: 255 & i[n2[2]] * 17, b: 255 & i[n2[3]] * 17, a: e === 5 ? i[n2[4]] * 17 : 255 } : (e === 7 || e === 9) && (f2 = { r: i[n2[1]] << 4 | i[n2[2]], g: i[n2[3]] << 4 | i[n2[4]], b: i[n2[5]] << 4 | i[n2[6]], a: e === 9 ? i[n2[7]] << 4 | i[n2[8]] : 255 })), f2;
}
function W2(n2) {
  var e = U2(n2) ? Z2 : A2;
  return n2 ? "#" + e(n2.r) + e(n2.g) + e(n2.b) + H2(n2.a, e) : void 0;
}
function $2(n2, e, f2) {
  let t = e * Math.min(f2, 1 - f2), r = (a2, s = (a2 + n2 / 30) % 12) => f2 - t * Math.max(Math.min(s - 3, 9 - s, 1), -1);
  return [r(0), r(8), r(4)];
}
function L2(n2, e, f2) {
  let t = (r, a2 = (r + n2 / 60) % 6) => f2 - f2 * e * Math.max(Math.min(a2, 4 - a2, 1), 0);
  return [t(5), t(3), t(1)];
}
function j2(n2, e, f2) {
  let t = $2(n2, 1, 0.5), r;
  for (e + f2 > 1 && (r = 1 / (e + f2), e *= r, f2 *= r), r = 0; r < 3; r++)
    t[r] *= 1 - e - f2, t[r] += e;
  return t;
}
function N2(n2, e, f2, t, r) {
  return n2 === r ? (e - f2) / t + (e < f2 ? 6 : 0) : e === r ? (f2 - n2) / t + 2 : (n2 - e) / t + 4;
}
function _2(n2) {
  let f2 = n2.r / 255, t = n2.g / 255, r = n2.b / 255, a2 = Math.max(f2, t, r), s = Math.min(f2, t, r), c2 = (a2 + s) / 2, g2, u, x2;
  return a2 !== s && (x2 = a2 - s, u = c2 > 0.5 ? x2 / (2 - a2 - s) : x2 / (a2 + s), g2 = N2(f2, t, r, x2, a2), g2 = g2 * 60 + 0.5), [g2 | 0, u || 0, c2];
}
function M2(n2, e, f2, t) {
  return (Array.isArray(e) ? n2(e[0], e[1], e[2]) : n2(e, f2, t)).map(d2);
}
function S2(n2, e, f2) {
  return M2($2, n2, e, f2);
}
function K2(n2, e, f2) {
  return M2(j2, n2, e, f2);
}
function B2(n2, e, f2) {
  return M2(L2, n2, e, f2);
}
function P2(n2) {
  return (n2 % 360 + 360) % 360;
}
function Q2(n2) {
  let e = q2.exec(n2), f2 = 255, t;
  if (!e)
    return;
  e[5] !== t && (f2 = e[6] ? m2(+e[5]) : d2(+e[5]));
  let r = P2(+e[2]), a2 = +e[3] / 100, s = +e[4] / 100;
  return e[1] === "hwb" ? t = K2(r, a2, s) : e[1] === "hsv" ? t = B2(r, a2, s) : t = S2(r, a2, s), { r: t[0], g: t[1], b: t[2], a: f2 };
}
function C2(n2, e) {
  var f2 = _2(n2);
  f2[0] = P2(f2[0] + e), f2 = S2(f2), n2.r = f2[0], n2.g = f2[1], n2.b = f2[2];
}
function D2(n2) {
  if (!n2)
    return;
  let e = _2(n2), f2 = e[0], t = X2(e[1]), r = X2(e[2]);
  return n2.a < 255 ? `hsla(${f2}, ${t}%, ${r}%, ${o(n2.a)})` : `hsl(${f2}, ${t}%, ${r}%)`;
}
function v2() {
  let n2 = {}, e = Object.keys(E), f2 = Object.keys(O2), t, r, a2, s, c2;
  for (t = 0; t < e.length; t++) {
    for (s = c2 = e[t], r = 0; r < f2.length; r++)
      a2 = f2[r], c2 = c2.replace(a2, O2[a2]);
    a2 = parseInt(E[s], 16), n2[c2] = [a2 >> 16 & 255, a2 >> 8 & 255, a2 & 255];
  }
  return n2;
}
function G2(n2) {
  F2 || (F2 = v2(), F2.transparent = [0, 0, 0, 0]);
  let e = F2[n2.toLowerCase()];
  return e && { r: e[0], g: e[1], b: e[2], a: e.length === 4 ? e[3] : 255 };
}
function J2(n2) {
  let e = I2.exec(n2), f2 = 255, t, r, a2;
  if (e) {
    if (e[7] !== t) {
      let s = +e[7];
      f2 = e[8] ? m2(s) : b2(s * 255, 0, 255);
    }
    return t = +e[1], r = +e[3], a2 = +e[5], t = 255 & (e[2] ? m2(t) : b2(t, 0, 255)), r = 255 & (e[4] ? m2(r) : b2(r, 0, 255)), a2 = 255 & (e[6] ? m2(a2) : b2(a2, 0, 255)), { r: t, g: r, b: a2, a: f2 };
  }
}
function z(n2) {
  return n2 && (n2.a < 255 ? `rgba(${n2.r}, ${n2.g}, ${n2.b}, ${o(n2.a)})` : `rgb(${n2.r}, ${n2.g}, ${n2.b})`);
}
function ee(n2, e, f2) {
  let t = h2(o(n2.r)), r = h2(o(n2.g)), a2 = h2(o(n2.b));
  return { r: d2(Y2(t + f2 * (h2(o(e.r)) - t))), g: d2(Y2(r + f2 * (h2(o(e.g)) - r))), b: d2(Y2(a2 + f2 * (h2(o(e.b)) - a2))), a: n2.a + f2 * (e.a - n2.a) };
}
function p2(n2, e, f2) {
  if (n2) {
    let t = _2(n2);
    t[e] = Math.max(0, Math.min(t[e] + t[e] * f2, e === 0 ? 360 : 1)), t = S2(t), n2.r = t[0], n2.g = t[1], n2.b = t[2];
  }
}
function T2(n2, e) {
  return n2 && Object.assign(e || {}, n2);
}
function R(n2) {
  var e = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(n2) ? n2.length >= 3 && (e = { r: n2[0], g: n2[1], b: n2[2], a: 255 }, n2.length > 3 && (e.a = d2(n2[3]))) : (e = T2(n2, { r: 0, g: 0, b: 0, a: 1 }), e.a = d2(e.a)), e;
}
function ne(n2) {
  return n2.charAt(0) === "r" ? J2(n2) : Q2(n2);
}
var b2, i, w, Z2, A2, y2, U2, H2, q2, O2, E, F2, I2, Y2, h2, k2;
var init_color = __esm({
  "esbuild_serve:http-import:https://esm.sh/v135/@kurkle/color@0.3.2/denonext/color.mjs"() {
    init_polyfill();
    init_bug_reporter();
    init_mod();
    init_urlpattern_polyfill();
    init_main();
    init_popover_polyfill();
    b2 = (n2, e, f2) => Math.max(Math.min(n2, f2), e);
    i = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 };
    w = [..."0123456789ABCDEF"];
    Z2 = (n2) => w[n2 & 15];
    A2 = (n2) => w[(n2 & 240) >> 4] + w[n2 & 15];
    y2 = (n2) => (n2 & 240) >> 4 === (n2 & 15);
    U2 = (n2) => y2(n2.r) && y2(n2.g) && y2(n2.b) && y2(n2.a);
    H2 = (n2, e) => n2 < 255 ? e(n2) : "";
    q2 = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
    O2 = { x: "dark", Z: "light", Y: "re", X: "blu", W: "gr", V: "medium", U: "slate", A: "ee", T: "ol", S: "or", B: "ra", C: "lateg", D: "ights", R: "in", Q: "turquois", E: "hi", P: "ro", O: "al", N: "le", M: "de", L: "yello", F: "en", K: "ch", G: "arks", H: "ea", I: "ightg", J: "wh" };
    E = { OiceXe: "f0f8ff", antiquewEte: "faebd7", aqua: "ffff", aquamarRe: "7fffd4", azuY: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "0", blanKedOmond: "ffebcd", Xe: "ff", XeviTet: "8a2be2", bPwn: "a52a2a", burlywood: "deb887", caMtXe: "5f9ea0", KartYuse: "7fff00", KocTate: "d2691e", cSO: "ff7f50", cSnflowerXe: "6495ed", cSnsilk: "fff8dc", crimson: "dc143c", cyan: "ffff", xXe: "8b", xcyan: "8b8b", xgTMnPd: "b8860b", xWay: "a9a9a9", xgYF: "6400", xgYy: "a9a9a9", xkhaki: "bdb76b", xmagFta: "8b008b", xTivegYF: "556b2f", xSange: "ff8c00", xScEd: "9932cc", xYd: "8b0000", xsOmon: "e9967a", xsHgYF: "8fbc8f", xUXe: "483d8b", xUWay: "2f4f4f", xUgYy: "2f4f4f", xQe: "ced1", xviTet: "9400d3", dAppRk: "ff1493", dApskyXe: "bfff", dimWay: "696969", dimgYy: "696969", dodgerXe: "1e90ff", fiYbrick: "b22222", flSOwEte: "fffaf0", foYstWAn: "228b22", fuKsia: "ff00ff", gaRsbSo: "dcdcdc", ghostwEte: "f8f8ff", gTd: "ffd700", gTMnPd: "daa520", Way: "808080", gYF: "8000", gYFLw: "adff2f", gYy: "808080", honeyMw: "f0fff0", hotpRk: "ff69b4", RdianYd: "cd5c5c", Rdigo: "4b0082", ivSy: "fffff0", khaki: "f0e68c", lavFMr: "e6e6fa", lavFMrXsh: "fff0f5", lawngYF: "7cfc00", NmoncEffon: "fffacd", ZXe: "add8e6", ZcSO: "f08080", Zcyan: "e0ffff", ZgTMnPdLw: "fafad2", ZWay: "d3d3d3", ZgYF: "90ee90", ZgYy: "d3d3d3", ZpRk: "ffb6c1", ZsOmon: "ffa07a", ZsHgYF: "20b2aa", ZskyXe: "87cefa", ZUWay: "778899", ZUgYy: "778899", ZstAlXe: "b0c4de", ZLw: "ffffe0", lime: "ff00", limegYF: "32cd32", lRF: "faf0e6", magFta: "ff00ff", maPon: "800000", VaquamarRe: "66cdaa", VXe: "cd", VScEd: "ba55d3", VpurpN: "9370db", VsHgYF: "3cb371", VUXe: "7b68ee", VsprRggYF: "fa9a", VQe: "48d1cc", VviTetYd: "c71585", midnightXe: "191970", mRtcYam: "f5fffa", mistyPse: "ffe4e1", moccasR: "ffe4b5", navajowEte: "ffdead", navy: "80", Tdlace: "fdf5e6", Tive: "808000", TivedBb: "6b8e23", Sange: "ffa500", SangeYd: "ff4500", ScEd: "da70d6", pOegTMnPd: "eee8aa", pOegYF: "98fb98", pOeQe: "afeeee", pOeviTetYd: "db7093", papayawEp: "ffefd5", pHKpuff: "ffdab9", peru: "cd853f", pRk: "ffc0cb", plum: "dda0dd", powMrXe: "b0e0e6", purpN: "800080", YbeccapurpN: "663399", Yd: "ff0000", Psybrown: "bc8f8f", PyOXe: "4169e1", saddNbPwn: "8b4513", sOmon: "fa8072", sandybPwn: "f4a460", sHgYF: "2e8b57", sHshell: "fff5ee", siFna: "a0522d", silver: "c0c0c0", skyXe: "87ceeb", UXe: "6a5acd", UWay: "708090", UgYy: "708090", snow: "fffafa", sprRggYF: "ff7f", stAlXe: "4682b4", tan: "d2b48c", teO: "8080", tEstN: "d8bfd8", tomato: "ff6347", Qe: "40e0d0", viTet: "ee82ee", JHt: "f5deb3", wEte: "ffffff", wEtesmoke: "f5f5f5", Lw: "ffff00", LwgYF: "9acd32" };
    I2 = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
    Y2 = (n2) => n2 <= 31308e-7 ? n2 * 12.92 : Math.pow(n2, 1 / 2.4) * 1.055 - 0.055;
    h2 = (n2) => n2 <= 0.04045 ? n2 / 12.92 : Math.pow((n2 + 0.055) / 1.055, 2.4);
    k2 = class n {
      constructor(e) {
        if (e instanceof n)
          return e;
        let f2 = typeof e, t;
        f2 === "object" ? t = R(e) : f2 === "string" && (t = V2(e) || G2(e) || ne(e)), this._rgb = t, this._valid = !!t;
      }
      get valid() {
        return this._valid;
      }
      get rgb() {
        var e = T2(this._rgb);
        return e && (e.a = o(e.a)), e;
      }
      set rgb(e) {
        this._rgb = R(e);
      }
      rgbString() {
        return this._valid ? z(this._rgb) : void 0;
      }
      hexString() {
        return this._valid ? W2(this._rgb) : void 0;
      }
      hslString() {
        return this._valid ? D2(this._rgb) : void 0;
      }
      mix(e, f2) {
        if (e) {
          let t = this.rgb, r = e.rgb, a2, s = f2 === a2 ? 0.5 : f2, c2 = 2 * s - 1, g2 = t.a - r.a, u = ((c2 * g2 === -1 ? c2 : (c2 + g2) / (1 + c2 * g2)) + 1) / 2;
          a2 = 1 - u, t.r = 255 & u * t.r + a2 * r.r + 0.5, t.g = 255 & u * t.g + a2 * r.g + 0.5, t.b = 255 & u * t.b + a2 * r.b + 0.5, t.a = s * t.a + (1 - s) * r.a, this.rgb = t;
        }
        return this;
      }
      interpolate(e, f2) {
        return e && (this._rgb = ee(this._rgb, e._rgb, f2)), this;
      }
      clone() {
        return new n(this.rgb);
      }
      alpha(e) {
        return this._rgb.a = d2(e), this;
      }
      clearer(e) {
        let f2 = this._rgb;
        return f2.a *= 1 - e, this;
      }
      greyscale() {
        let e = this._rgb, f2 = l(e.r * 0.3 + e.g * 0.59 + e.b * 0.11);
        return e.r = e.g = e.b = f2, this;
      }
      opaquer(e) {
        let f2 = this._rgb;
        return f2.a *= 1 + e, this;
      }
      negate() {
        let e = this._rgb;
        return e.r = 255 - e.r, e.g = 255 - e.g, e.b = 255 - e.b, this;
      }
      lighten(e) {
        return p2(this._rgb, 2, e), this;
      }
      darken(e) {
        return p2(this._rgb, 2, -e), this;
      }
      saturate(e) {
        return p2(this._rgb, 1, e), this;
      }
      desaturate(e) {
        return p2(this._rgb, 1, -e), this;
      }
      rotate(e) {
        return C2(this._rgb, e), this;
      }
    };
  }
});

// esbuild_serve:http-import:https://esm.sh/v135/chart.js@4.4.2/denonext/auto.js
function rt() {
}
function L3(i4) {
  return i4 === null || typeof i4 > "u";
}
function I3(i4) {
  if (Array.isArray && Array.isArray(i4))
    return true;
  let t = Object.prototype.toString.call(i4);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function O3(i4) {
  return i4 !== null && Object.prototype.toString.call(i4) === "[object Object]";
}
function V3(i4) {
  return (typeof i4 == "number" || i4 instanceof Number) && isFinite(+i4);
}
function J3(i4, t) {
  return V3(i4) ? i4 : t;
}
function P3(i4, t) {
  return typeof i4 > "u" ? t : i4;
}
function E2(i4, t, e) {
  if (i4 && typeof i4.call == "function")
    return i4.apply(e, t);
}
function T3(i4, t, e, s) {
  let n2, o2, a2;
  if (I3(i4))
    if (o2 = i4.length, s)
      for (n2 = o2 - 1; n2 >= 0; n2--)
        t.call(e, i4[n2], n2);
    else
      for (n2 = 0; n2 < o2; n2++)
        t.call(e, i4[n2], n2);
  else if (O3(i4))
    for (a2 = Object.keys(i4), o2 = a2.length, n2 = 0; n2 < o2; n2++)
      t.call(e, i4[a2[n2]], a2[n2]);
}
function ie(i4, t) {
  let e, s, n2, o2;
  if (!i4 || !t || i4.length !== t.length)
    return false;
  for (e = 0, s = i4.length; e < s; ++e)
    if (n2 = i4[e], o2 = t[e], n2.datasetIndex !== o2.datasetIndex || n2.index !== o2.index)
      return false;
  return true;
}
function ke(i4) {
  if (I3(i4))
    return i4.map(ke);
  if (O3(i4)) {
    let t = /* @__PURE__ */ Object.create(null), e = Object.keys(i4), s = e.length, n2 = 0;
    for (; n2 < s; ++n2)
      t[e[n2]] = ke(i4[e[n2]]);
    return t;
  }
  return i4;
}
function Os(i4) {
  return ["__proto__", "prototype", "constructor"].indexOf(i4) === -1;
}
function wo(i4, t, e, s) {
  if (!Os(i4))
    return;
  let n2 = t[i4], o2 = e[i4];
  O3(n2) && O3(o2) ? Bt(n2, o2, s) : t[i4] = ke(o2);
}
function Bt(i4, t, e) {
  let s = I3(t) ? t : [t], n2 = s.length;
  if (!O3(i4))
    return i4;
  e = e || {};
  let o2 = e.merger || wo, a2;
  for (let r = 0; r < n2; ++r) {
    if (a2 = s[r], !O3(a2))
      continue;
    let l2 = Object.keys(a2);
    for (let c2 = 0, h3 = l2.length; c2 < h3; ++c2)
      o2(l2[c2], i4, a2, e);
  }
  return i4;
}
function Wt(i4, t) {
  return Bt(i4, t, { merger: Po });
}
function Po(i4, t, e) {
  if (!Os(i4))
    return;
  let s = t[i4], n2 = e[i4];
  O3(s) && O3(n2) ? Wt(s, n2) : Object.prototype.hasOwnProperty.call(t, i4) || (t[i4] = ke(n2));
}
function Do(i4) {
  let t = i4.split("."), e = [], s = "";
  for (let n2 of t)
    s += n2, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (e.push(s), s = "");
  return e;
}
function Co(i4) {
  let t = Do(i4);
  return (e) => {
    for (let s of t) {
      if (s === "")
        break;
      e = e && e[s];
    }
    return e;
  };
}
function gt(i4, t) {
  return (ms[t] || (ms[t] = Co(t)))(i4);
}
function De(i4) {
  return i4.charAt(0).toUpperCase() + i4.slice(1);
}
function As(i4) {
  return i4.type === "mouseup" || i4.type === "click" || i4.type === "contextmenu";
}
function Ht(i4, t, e) {
  return Math.abs(i4 - t) < e;
}
function ri(i4) {
  let t = Math.round(i4);
  i4 = Ht(i4, t, i4 / 1e3) ? t : i4;
  let e = Math.pow(10, Math.floor(ft(i4))), s = i4 / e;
  return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * e;
}
function Ls(i4) {
  let t = [], e = Math.sqrt(i4), s;
  for (s = 1; s < e; s++)
    i4 % s === 0 && (t.push(s), t.push(i4 / s));
  return e === (e | 0) && t.push(e), t.sort((n2, o2) => n2 - o2).pop(), t;
}
function At(i4) {
  return !isNaN(parseFloat(i4)) && isFinite(i4);
}
function Ts(i4, t) {
  let e = Math.round(i4);
  return e - t <= i4 && e + t >= i4;
}
function li(i4, t, e) {
  let s, n2, o2;
  for (s = 0, n2 = i4.length; s < n2; s++)
    o2 = i4[s][e], isNaN(o2) || (t.min = Math.min(t.min, o2), t.max = Math.max(t.max, o2));
}
function et(i4) {
  return i4 * (z2 / 180);
}
function Ce(i4) {
  return i4 * (180 / z2);
}
function ci(i4) {
  if (!V3(i4))
    return;
  let t = 1, e = 0;
  for (; Math.round(i4 * t) / t !== i4; )
    t *= 10, e++;
  return e;
}
function hi(i4, t) {
  let e = t.x - i4.x, s = t.y - i4.y, n2 = Math.sqrt(e * e + s * s), o2 = Math.atan2(s, e);
  return o2 < -0.5 * z2 && (o2 += F3), { angle: o2, distance: n2 };
}
function we(i4, t) {
  return Math.sqrt(Math.pow(t.x - i4.x, 2) + Math.pow(t.y - i4.y, 2));
}
function Lo(i4, t) {
  return (i4 - t + Oo) % F3 - z2;
}
function G3(i4) {
  return (i4 % F3 + F3) % F3;
}
function jt(i4, t, e, s) {
  let n2 = G3(i4), o2 = G3(t), a2 = G3(e), r = G3(o2 - n2), l2 = G3(a2 - n2), c2 = G3(n2 - o2), h3 = G3(n2 - a2);
  return n2 === o2 || n2 === a2 || s && o2 === a2 || r > l2 && c2 < h3;
}
function $3(i4, t, e) {
  return Math.max(t, Math.min(e, i4));
}
function Rs(i4) {
  return $3(i4, -32768, 32767);
}
function lt(i4, t, e, s = 1e-6) {
  return i4 >= Math.min(t, e) - s && i4 <= Math.max(t, e) + s;
}
function Oe(i4, t, e) {
  e = e || ((a2) => i4[a2] < t);
  let s = i4.length - 1, n2 = 0, o2;
  for (; s - n2 > 1; )
    o2 = n2 + s >> 1, e(o2) ? n2 = o2 : s = o2;
  return { lo: n2, hi: s };
}
function Is(i4, t, e) {
  let s = 0, n2 = i4.length;
  for (; s < n2 && i4[s] < t; )
    s++;
  for (; n2 > s && i4[n2 - 1] > e; )
    n2--;
  return s > 0 || n2 < i4.length ? i4.slice(s, n2) : i4;
}
function Fs(i4, t) {
  if (i4._chartjs) {
    i4._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(i4, "_chartjs", { configurable: true, enumerable: false, value: { listeners: [t] } }), zs.forEach((e) => {
    let s = "_onData" + De(e), n2 = i4[e];
    Object.defineProperty(i4, e, { configurable: true, enumerable: false, value(...o2) {
      let a2 = n2.apply(this, o2);
      return i4._chartjs.listeners.forEach((r) => {
        typeof r[s] == "function" && r[s](...o2);
      }), a2;
    } });
  });
}
function di(i4, t) {
  let e = i4._chartjs;
  if (!e)
    return;
  let s = e.listeners, n2 = s.indexOf(t);
  n2 !== -1 && s.splice(n2, 1), !(s.length > 0) && (zs.forEach((o2) => {
    delete i4[o2];
  }), delete i4._chartjs);
}
function ui(i4) {
  let t = new Set(i4);
  return t.size === i4.length ? i4 : Array.from(t);
}
function gi(i4, t) {
  let e = [], s = false;
  return function(...n2) {
    e = n2, s || (s = true, fi.call(window, () => {
      s = false, i4.apply(t, e);
    }));
  };
}
function Bs(i4, t) {
  let e;
  return function(...s) {
    return t ? (clearTimeout(e), e = setTimeout(i4, t, s)) : i4.apply(this, s), t;
  };
}
function pi(i4, t, e) {
  let s = t.length, n2 = 0, o2 = s;
  if (i4._sorted) {
    let { iScale: a2, _parsed: r } = i4, l2 = a2.axis, { min: c2, max: h3, minDefined: d3, maxDefined: u } = a2.getUserBounds();
    d3 && (n2 = $3(Math.min(ot(r, l2, c2).lo, e ? s : ot(t, l2, a2.getPixelForValue(c2)).lo), 0, s - 1)), u ? o2 = $3(Math.max(ot(r, a2.axis, h3, true).hi + 1, e ? 0 : ot(t, l2, a2.getPixelForValue(h3), true).hi + 1), n2, s) - n2 : o2 = s - n2;
  }
  return { start: n2, count: o2 };
}
function mi(i4) {
  let { xScale: t, yScale: e, _scaleRanges: s } = i4, n2 = { xmin: t.min, xmax: t.max, ymin: e.min, ymax: e.max };
  if (!s)
    return i4._scaleRanges = n2, true;
  let o2 = s.xmin !== t.min || s.xmax !== t.max || s.ymin !== e.min || s.ymax !== e.max;
  return Object.assign(s, n2), o2;
}
function bi(i4) {
  if (i4 && typeof i4 == "object") {
    let t = i4.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return false;
}
function _i(i4) {
  return bi(i4) ? i4 : new k2(i4);
}
function ii(i4) {
  return bi(i4) ? i4 : new k2(i4).saturate(0.5).darken(0.1).hexString();
}
function Eo(i4) {
  i4.set("animation", { delay: void 0, duration: 1e3, easing: "easeOutQuart", fn: void 0, from: void 0, loop: void 0, to: void 0, type: void 0 }), i4.describe("animation", { _fallback: false, _indexable: false, _scriptable: (t) => t !== "onProgress" && t !== "onComplete" && t !== "fn" }), i4.set("animations", { colors: { type: "color", properties: Ro }, numbers: { type: "number", properties: To } }), i4.describe("animations", { _fallback: "animation" }), i4.set("transitions", { active: { animation: { duration: 400 } }, resize: { animation: { duration: 0 } }, show: { animations: { colors: { from: "transparent" }, visible: { type: "boolean", duration: 0 } } }, hide: { animations: { colors: { to: "transparent" }, visible: { type: "boolean", easing: "linear", fn: (t) => t | 0 } } } });
}
function Io(i4) {
  i4.set("layout", { autoPadding: true, padding: { top: 0, right: 0, bottom: 0, left: 0 } });
}
function zo(i4, t) {
  t = t || {};
  let e = i4 + JSON.stringify(t), s = ys.get(e);
  return s || (s = new Intl.NumberFormat(i4, t), ys.set(e, s)), s;
}
function $t(i4, t, e) {
  return zo(t, e).format(i4);
}
function Fo(i4, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(e) >= 1 && i4 !== Math.floor(i4) && (e = i4 - Math.floor(i4)), e;
}
function Bo(i4) {
  i4.set("scale", { display: true, offset: false, reverse: false, beginAtZero: false, bounds: "ticks", clip: true, grace: 0, grid: { display: true, lineWidth: 1, drawOnChartArea: true, drawTicks: true, tickLength: 8, tickWidth: (t, e) => e.lineWidth, tickColor: (t, e) => e.color, offset: false }, border: { display: true, dash: [], dashOffset: 0, width: 1 }, title: { display: false, text: "", padding: { top: 4, bottom: 4 } }, ticks: { minRotation: 0, maxRotation: 50, mirror: false, textStrokeWidth: 0, textStrokeColor: "", padding: 3, display: true, autoSkip: true, autoSkipPadding: 3, labelOffset: 0, callback: se.formatters.values, minor: {}, major: {}, align: "center", crossAlign: "near", showLabelBackdrop: false, backdropColor: "rgba(255, 255, 255, 0.75)", backdropPadding: 2 } }), i4.route("scale.ticks", "color", "", "color"), i4.route("scale.grid", "color", "", "borderColor"), i4.route("scale.border", "color", "", "borderColor"), i4.route("scale.title", "color", "", "color"), i4.describe("scale", { _fallback: false, _scriptable: (t) => !t.startsWith("before") && !t.startsWith("after") && t !== "callback" && t !== "parser", _indexable: (t) => t !== "borderDash" && t !== "tickBorderDash" && t !== "dash" }), i4.describe("scales", { _fallback: "scale" }), i4.describe("scale.ticks", { _scriptable: (t) => t !== "backdropPadding" && t !== "callback", _indexable: (t) => t !== "backdropPadding" });
}
function te(i4, t) {
  if (!t)
    return i4;
  let e = t.split(".");
  for (let s = 0, n2 = e.length; s < n2; ++s) {
    let o2 = e[s];
    i4 = i4[o2] || (i4[o2] = /* @__PURE__ */ Object.create(null));
  }
  return i4;
}
function si(i4, t, e) {
  return typeof t == "string" ? Bt(te(i4, t), e) : Bt(te(i4, ""), t);
}
function Vo(i4) {
  return !i4 || L3(i4.size) || L3(i4.family) ? null : (i4.style ? i4.style + " " : "") + (i4.weight ? i4.weight + " " : "") + i4.size + "px " + i4.family;
}
function ee2(i4, t, e, s, n2) {
  let o2 = t[n2];
  return o2 || (o2 = t[n2] = i4.measureText(n2).width, e.push(n2)), o2 > s && (s = o2), s;
}
function Ns(i4, t, e, s) {
  s = s || {};
  let n2 = s.data = s.data || {}, o2 = s.garbageCollect = s.garbageCollect || [];
  s.font !== t && (n2 = s.data = {}, o2 = s.garbageCollect = [], s.font = t), i4.save(), i4.font = t;
  let a2 = 0, r = e.length, l2, c2, h3, d3, u;
  for (l2 = 0; l2 < r; l2++)
    if (d3 = e[l2], d3 != null && !I3(d3))
      a2 = ee2(i4, n2, o2, a2, d3);
    else if (I3(d3))
      for (c2 = 0, h3 = d3.length; c2 < h3; c2++)
        u = d3[c2], u != null && !I3(u) && (a2 = ee2(i4, n2, o2, a2, u));
  i4.restore();
  let f2 = o2.length / 2;
  if (f2 > e.length) {
    for (l2 = 0; l2 < f2; l2++)
      delete n2[o2[l2]];
    o2.splice(0, f2);
  }
  return a2;
}
function yt(i4, t, e) {
  let s = i4.currentDevicePixelRatio, n2 = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - n2) * s) / s + n2;
}
function xi(i4, t) {
  t = t || i4.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, i4.width, i4.height), t.restore();
}
function Te(i4, t, e, s) {
  yi(i4, t, e, s, null);
}
function yi(i4, t, e, s, n2) {
  let o2, a2, r, l2, c2, h3, d3, u, f2 = t.pointStyle, g2 = t.rotation, p3 = t.radius, m3 = (g2 || 0) * Ao;
  if (f2 && typeof f2 == "object" && (o2 = f2.toString(), o2 === "[object HTMLImageElement]" || o2 === "[object HTMLCanvasElement]")) {
    i4.save(), i4.translate(e, s), i4.rotate(m3), i4.drawImage(f2, -f2.width / 2, -f2.height / 2, f2.width, f2.height), i4.restore();
    return;
  }
  if (!(isNaN(p3) || p3 <= 0)) {
    switch (i4.beginPath(), f2) {
      default:
        n2 ? i4.ellipse(e, s, n2 / 2, p3, 0, 0, F3) : i4.arc(e, s, p3, 0, F3), i4.closePath();
        break;
      case "triangle":
        h3 = n2 ? n2 / 2 : p3, i4.moveTo(e + Math.sin(m3) * h3, s - Math.cos(m3) * p3), m3 += bs, i4.lineTo(e + Math.sin(m3) * h3, s - Math.cos(m3) * p3), m3 += bs, i4.lineTo(e + Math.sin(m3) * h3, s - Math.cos(m3) * p3), i4.closePath();
        break;
      case "rectRounded":
        c2 = p3 * 0.516, l2 = p3 - c2, a2 = Math.cos(m3 + Dt) * l2, d3 = Math.cos(m3 + Dt) * (n2 ? n2 / 2 - c2 : l2), r = Math.sin(m3 + Dt) * l2, u = Math.sin(m3 + Dt) * (n2 ? n2 / 2 - c2 : l2), i4.arc(e - d3, s - r, c2, m3 - z2, m3 - N3), i4.arc(e + u, s - a2, c2, m3 - N3, m3), i4.arc(e + d3, s + r, c2, m3, m3 + N3), i4.arc(e - u, s + a2, c2, m3 + N3, m3 + z2), i4.closePath();
        break;
      case "rect":
        if (!g2) {
          l2 = Math.SQRT1_2 * p3, h3 = n2 ? n2 / 2 : l2, i4.rect(e - h3, s - l2, 2 * h3, 2 * l2);
          break;
        }
        m3 += Dt;
      case "rectRot":
        d3 = Math.cos(m3) * (n2 ? n2 / 2 : p3), a2 = Math.cos(m3) * p3, r = Math.sin(m3) * p3, u = Math.sin(m3) * (n2 ? n2 / 2 : p3), i4.moveTo(e - d3, s - r), i4.lineTo(e + u, s - a2), i4.lineTo(e + d3, s + r), i4.lineTo(e - u, s + a2), i4.closePath();
        break;
      case "crossRot":
        m3 += Dt;
      case "cross":
        d3 = Math.cos(m3) * (n2 ? n2 / 2 : p3), a2 = Math.cos(m3) * p3, r = Math.sin(m3) * p3, u = Math.sin(m3) * (n2 ? n2 / 2 : p3), i4.moveTo(e - d3, s - r), i4.lineTo(e + d3, s + r), i4.moveTo(e + u, s - a2), i4.lineTo(e - u, s + a2);
        break;
      case "star":
        d3 = Math.cos(m3) * (n2 ? n2 / 2 : p3), a2 = Math.cos(m3) * p3, r = Math.sin(m3) * p3, u = Math.sin(m3) * (n2 ? n2 / 2 : p3), i4.moveTo(e - d3, s - r), i4.lineTo(e + d3, s + r), i4.moveTo(e + u, s - a2), i4.lineTo(e - u, s + a2), m3 += Dt, d3 = Math.cos(m3) * (n2 ? n2 / 2 : p3), a2 = Math.cos(m3) * p3, r = Math.sin(m3) * p3, u = Math.sin(m3) * (n2 ? n2 / 2 : p3), i4.moveTo(e - d3, s - r), i4.lineTo(e + d3, s + r), i4.moveTo(e + u, s - a2), i4.lineTo(e - u, s + a2);
        break;
      case "line":
        a2 = n2 ? n2 / 2 : Math.cos(m3) * p3, r = Math.sin(m3) * p3, i4.moveTo(e - a2, s - r), i4.lineTo(e + a2, s + r);
        break;
      case "dash":
        i4.moveTo(e, s), i4.lineTo(e + Math.cos(m3) * (n2 ? n2 / 2 : p3), s + Math.sin(m3) * p3);
        break;
      case false:
        i4.closePath();
        break;
    }
    i4.fill(), t.borderWidth > 0 && i4.stroke();
  }
}
function at(i4, t, e) {
  return e = e || 0.5, !t || i4 && i4.x > t.left - e && i4.x < t.right + e && i4.y > t.top - e && i4.y < t.bottom + e;
}
function ne2(i4, t) {
  i4.save(), i4.beginPath(), i4.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), i4.clip();
}
function oe(i4) {
  i4.restore();
}
function Hs(i4, t, e, s, n2) {
  if (!t)
    return i4.lineTo(e.x, e.y);
  if (n2 === "middle") {
    let o2 = (t.x + e.x) / 2;
    i4.lineTo(o2, t.y), i4.lineTo(o2, e.y);
  } else
    n2 === "after" != !!s ? i4.lineTo(t.x, e.y) : i4.lineTo(e.x, t.y);
  i4.lineTo(e.x, e.y);
}
function js(i4, t, e, s) {
  if (!t)
    return i4.lineTo(e.x, e.y);
  i4.bezierCurveTo(s ? t.cp1x : t.cp2x, s ? t.cp1y : t.cp2y, s ? e.cp2x : e.cp1x, s ? e.cp2y : e.cp1y, e.x, e.y);
}
function Wo(i4, t) {
  t.translation && i4.translate(t.translation[0], t.translation[1]), L3(t.rotation) || i4.rotate(t.rotation), t.color && (i4.fillStyle = t.color), t.textAlign && (i4.textAlign = t.textAlign), t.textBaseline && (i4.textBaseline = t.textBaseline);
}
function No(i4, t, e, s, n2) {
  if (n2.strikethrough || n2.underline) {
    let o2 = i4.measureText(s), a2 = t - o2.actualBoundingBoxLeft, r = t + o2.actualBoundingBoxRight, l2 = e - o2.actualBoundingBoxAscent, c2 = e + o2.actualBoundingBoxDescent, h3 = n2.strikethrough ? (l2 + c2) / 2 : c2;
    i4.strokeStyle = i4.fillStyle, i4.beginPath(), i4.lineWidth = n2.decorationWidth || 2, i4.moveTo(a2, h3), i4.lineTo(r, h3), i4.stroke();
  }
}
function Ho(i4, t) {
  let e = i4.fillStyle;
  i4.fillStyle = t.color, i4.fillRect(t.left, t.top, t.width, t.height), i4.fillStyle = e;
}
function vt(i4, t, e, s, n2, o2 = {}) {
  let a2 = I3(t) ? t : [t], r = o2.strokeWidth > 0 && o2.strokeColor !== "", l2, c2;
  for (i4.save(), i4.font = n2.string, Wo(i4, o2), l2 = 0; l2 < a2.length; ++l2)
    c2 = a2[l2], o2.backdrop && Ho(i4, o2.backdrop), r && (o2.strokeColor && (i4.strokeStyle = o2.strokeColor), L3(o2.strokeWidth) || (i4.lineWidth = o2.strokeWidth), i4.strokeText(c2, e, s, o2.maxWidth)), i4.fillText(c2, e, s, o2.maxWidth), No(i4, e, s, c2, o2), s += Number(n2.lineHeight);
  i4.restore();
}
function Ut(i4, t) {
  let { x: e, y: s, w: n2, h: o2, radius: a2 } = t;
  i4.arc(e + a2.topLeft, s + a2.topLeft, a2.topLeft, 1.5 * z2, z2, true), i4.lineTo(e, s + o2 - a2.bottomLeft), i4.arc(e + a2.bottomLeft, s + o2 - a2.bottomLeft, a2.bottomLeft, z2, N3, true), i4.lineTo(e + n2 - a2.bottomRight, s + o2), i4.arc(e + n2 - a2.bottomRight, s + o2 - a2.bottomRight, a2.bottomRight, N3, 0, true), i4.lineTo(e + n2, s + a2.topRight), i4.arc(e + n2 - a2.topRight, s + a2.topRight, a2.topRight, 0, -N3, true), i4.lineTo(e + a2.topLeft, s);
}
function Uo(i4, t) {
  let e = ("" + i4).match(jo);
  if (!e || e[1] === "normal")
    return t * 1.2;
  switch (i4 = +e[2], e[3]) {
    case "px":
      return i4;
    case "%":
      i4 /= 100;
      break;
  }
  return t * i4;
}
function Re(i4, t) {
  let e = {}, s = O3(t), n2 = s ? Object.keys(t) : t, o2 = O3(i4) ? s ? (a2) => P3(i4[a2], i4[t[a2]]) : (a2) => i4[a2] : () => i4;
  for (let a2 of n2)
    e[a2] = Yo(o2(a2));
  return e;
}
function vi(i4) {
  return Re(i4, { top: "y", right: "x", bottom: "y", left: "x" });
}
function Mt(i4) {
  return Re(i4, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
}
function X3(i4) {
  let t = vi(i4);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function j3(i4, t) {
  i4 = i4 || {}, t = t || W3.font;
  let e = P3(i4.size, t.size);
  typeof e == "string" && (e = parseInt(e, 10));
  let s = P3(i4.style, t.style);
  s && !("" + s).match($o) && (console.warn('Invalid font style specified: "' + s + '"'), s = void 0);
  let n2 = { family: P3(i4.family, t.family), lineHeight: Uo(P3(i4.lineHeight, t.lineHeight), e), size: e, style: s, weight: P3(i4.weight, t.weight), string: "" };
  return n2.string = Vo(n2), n2;
}
function Yt(i4, t, e, s) {
  let n2 = true, o2, a2, r;
  for (o2 = 0, a2 = i4.length; o2 < a2; ++o2)
    if (r = i4[o2], r !== void 0 && (t !== void 0 && typeof r == "function" && (r = r(t), n2 = false), e !== void 0 && I3(r) && (r = r[e % r.length], n2 = false), r !== void 0))
      return s && !n2 && (s.cacheable = false), r;
}
function $s(i4, t, e) {
  let { min: s, max: n2 } = i4, o2 = oi(t, (n2 - s) / 2), a2 = (r, l2) => e && r === 0 ? 0 : r + l2;
  return { min: a2(s, -Math.abs(o2)), max: a2(n2, o2) };
}
function pt(i4, t) {
  return Object.assign(Object.create(i4), t);
}
function Ee(i4, t = [""], e, s, n2 = () => i4[0]) {
  let o2 = e || i4;
  typeof s > "u" && (s = Xs("_fallback", i4));
  let a2 = { [Symbol.toStringTag]: "Object", _cacheable: true, _scopes: i4, _rootScopes: o2, _fallback: s, _getTarget: n2, override: (r) => Ee([r, ...i4], t, o2, s) };
  return new Proxy(a2, { deleteProperty(r, l2) {
    return delete r[l2], delete r._keys, delete i4[0][l2], true;
  }, get(r, l2) {
    return Us(r, l2, () => ta(l2, t, i4, r));
  }, getOwnPropertyDescriptor(r, l2) {
    return Reflect.getOwnPropertyDescriptor(r._scopes[0], l2);
  }, getPrototypeOf() {
    return Reflect.getPrototypeOf(i4[0]);
  }, has(r, l2) {
    return Ms(r).includes(l2);
  }, ownKeys(r) {
    return Ms(r);
  }, set(r, l2, c2) {
    let h3 = r._storage || (r._storage = n2());
    return r[l2] = h3[l2] = c2, delete r._keys, true;
  } });
}
function Ot(i4, t, e, s) {
  let n2 = { _cacheable: false, _proxy: i4, _context: t, _subProxy: e, _stack: /* @__PURE__ */ new Set(), _descriptors: Mi(i4, s), setContext: (o2) => Ot(i4, o2, e, s), override: (o2) => Ot(i4.override(o2), t, e, s) };
  return new Proxy(n2, { deleteProperty(o2, a2) {
    return delete o2[a2], delete i4[a2], true;
  }, get(o2, a2, r) {
    return Us(o2, a2, () => Ko(o2, a2, r));
  }, getOwnPropertyDescriptor(o2, a2) {
    return o2._descriptors.allKeys ? Reflect.has(i4, a2) ? { enumerable: true, configurable: true } : void 0 : Reflect.getOwnPropertyDescriptor(i4, a2);
  }, getPrototypeOf() {
    return Reflect.getPrototypeOf(i4);
  }, has(o2, a2) {
    return Reflect.has(i4, a2);
  }, ownKeys() {
    return Reflect.ownKeys(i4);
  }, set(o2, a2, r) {
    return i4[a2] = r, delete o2[a2], true;
  } });
}
function Mi(i4, t = { scriptable: true, indexable: true }) {
  let { _scriptable: e = t.scriptable, _indexable: s = t.indexable, _allKeys: n2 = t.allKeys } = i4;
  return { allKeys: n2, scriptable: e, indexable: s, isScriptable: ut(e) ? e : () => e, isIndexable: ut(s) ? s : () => s };
}
function Us(i4, t, e) {
  if (Object.prototype.hasOwnProperty.call(i4, t))
    return i4[t];
  let s = e();
  return i4[t] = s, s;
}
function Ko(i4, t, e) {
  let { _proxy: s, _context: n2, _subProxy: o2, _descriptors: a2 } = i4, r = s[t];
  return ut(r) && a2.isScriptable(t) && (r = qo(t, r, i4, e)), I3(r) && r.length && (r = Go(t, r, i4, a2.isIndexable)), ki(t, r) && (r = Ot(r, n2, o2 && o2[t], a2)), r;
}
function qo(i4, t, e, s) {
  let { _proxy: n2, _context: o2, _subProxy: a2, _stack: r } = e;
  if (r.has(i4))
    throw new Error("Recursion detected: " + Array.from(r).join("->") + "->" + i4);
  r.add(i4);
  let l2 = t(o2, a2 || s);
  return r.delete(i4), ki(i4, l2) && (l2 = Si(n2._scopes, n2, i4, l2)), l2;
}
function Go(i4, t, e, s) {
  let { _proxy: n2, _context: o2, _subProxy: a2, _descriptors: r } = e;
  if (typeof o2.index < "u" && s(i4))
    return t[o2.index % t.length];
  if (O3(t[0])) {
    let l2 = t, c2 = n2._scopes.filter((h3) => h3 !== l2);
    t = [];
    for (let h3 of l2) {
      let d3 = Si(c2, n2, i4, h3);
      t.push(Ot(d3, o2, a2 && a2[i4], r));
    }
  }
  return t;
}
function Ys(i4, t, e) {
  return ut(i4) ? i4(t, e) : i4;
}
function Qo(i4, t, e, s, n2) {
  for (let o2 of t) {
    let a2 = Jo(e, o2);
    if (a2) {
      i4.add(a2);
      let r = Ys(a2._fallback, e, n2);
      if (typeof r < "u" && r !== e && r !== s)
        return r;
    } else if (a2 === false && typeof s < "u" && e !== s)
      return null;
  }
  return false;
}
function Si(i4, t, e, s) {
  let n2 = t._rootScopes, o2 = Ys(t._fallback, e, s), a2 = [...i4, ...n2], r = /* @__PURE__ */ new Set();
  r.add(s);
  let l2 = vs(r, a2, e, o2 || e, s);
  return l2 === null || typeof o2 < "u" && o2 !== e && (l2 = vs(r, a2, o2, l2, s), l2 === null) ? false : Ee(Array.from(r), [""], n2, o2, () => Zo(t, e, s));
}
function vs(i4, t, e, s, n2) {
  for (; e; )
    e = Qo(i4, t, e, s, n2);
  return e;
}
function Zo(i4, t, e) {
  let s = i4._getTarget();
  t in s || (s[t] = {});
  let n2 = s[t];
  return I3(n2) && O3(e) ? e : n2 || {};
}
function ta(i4, t, e, s) {
  let n2;
  for (let o2 of t)
    if (n2 = Xs(Xo(o2, i4), e), typeof n2 < "u")
      return ki(i4, n2) ? Si(e, s, i4, n2) : n2;
}
function Xs(i4, t) {
  for (let e of t) {
    if (!e)
      continue;
    let s = e[i4];
    if (typeof s < "u")
      return s;
  }
}
function Ms(i4) {
  let t = i4._keys;
  return t || (t = i4._keys = ea(i4._scopes)), t;
}
function ea(i4) {
  let t = /* @__PURE__ */ new Set();
  for (let e of i4)
    for (let s of Object.keys(e).filter((n2) => !n2.startsWith("_")))
      t.add(s);
  return Array.from(t);
}
function wi(i4, t, e, s) {
  let { iScale: n2 } = i4, { key: o2 = "r" } = this._parsing, a2 = new Array(s), r, l2, c2, h3;
  for (r = 0, l2 = s; r < l2; ++r)
    c2 = r + e, h3 = t[c2], a2[r] = { r: n2.parse(gt(h3, o2), c2) };
  return a2;
}
function sa(i4, t, e, s) {
  let n2 = i4.skip ? t : i4, o2 = t, a2 = e.skip ? t : e, r = we(o2, n2), l2 = we(a2, o2), c2 = r / (r + l2), h3 = l2 / (r + l2);
  c2 = isNaN(c2) ? 0 : c2, h3 = isNaN(h3) ? 0 : h3;
  let d3 = s * c2, u = s * h3;
  return { previous: { x: o2.x - d3 * (a2.x - n2.x), y: o2.y - d3 * (a2.y - n2.y) }, next: { x: o2.x + u * (a2.x - n2.x), y: o2.y + u * (a2.y - n2.y) } };
}
function na(i4, t, e) {
  let s = i4.length, n2, o2, a2, r, l2, c2 = Vt(i4, 0);
  for (let h3 = 0; h3 < s - 1; ++h3)
    if (l2 = c2, c2 = Vt(i4, h3 + 1), !(!l2 || !c2)) {
      if (Ht(t[h3], 0, ia)) {
        e[h3] = e[h3 + 1] = 0;
        continue;
      }
      n2 = e[h3] / t[h3], o2 = e[h3 + 1] / t[h3], r = Math.pow(n2, 2) + Math.pow(o2, 2), !(r <= 9) && (a2 = 3 / Math.sqrt(r), e[h3] = n2 * a2 * t[h3], e[h3 + 1] = o2 * a2 * t[h3]);
    }
}
function oa(i4, t, e = "x") {
  let s = Ks(e), n2 = i4.length, o2, a2, r, l2 = Vt(i4, 0);
  for (let c2 = 0; c2 < n2; ++c2) {
    if (a2 = r, r = l2, l2 = Vt(i4, c2 + 1), !r)
      continue;
    let h3 = r[e], d3 = r[s];
    a2 && (o2 = (h3 - a2[e]) / 3, r[`cp1${e}`] = h3 - o2, r[`cp1${s}`] = d3 - o2 * t[c2]), l2 && (o2 = (l2[e] - h3) / 3, r[`cp2${e}`] = h3 + o2, r[`cp2${s}`] = d3 + o2 * t[c2]);
  }
}
function aa(i4, t = "x") {
  let e = Ks(t), s = i4.length, n2 = Array(s).fill(0), o2 = Array(s), a2, r, l2, c2 = Vt(i4, 0);
  for (a2 = 0; a2 < s; ++a2)
    if (r = l2, l2 = c2, c2 = Vt(i4, a2 + 1), !!l2) {
      if (c2) {
        let h3 = c2[t] - l2[t];
        n2[a2] = h3 !== 0 ? (c2[e] - l2[e]) / h3 : 0;
      }
      o2[a2] = r ? c2 ? st(n2[a2 - 1]) !== st(n2[a2]) ? 0 : (n2[a2 - 1] + n2[a2]) / 2 : n2[a2 - 1] : n2[a2];
    }
  na(i4, n2, o2), oa(i4, o2, t);
}
function ve(i4, t, e) {
  return Math.max(Math.min(i4, e), t);
}
function ra(i4, t) {
  let e, s, n2, o2, a2, r = at(i4[0], t);
  for (e = 0, s = i4.length; e < s; ++e)
    a2 = o2, o2 = r, r = e < s - 1 && at(i4[e + 1], t), o2 && (n2 = i4[e], a2 && (n2.cp1x = ve(n2.cp1x, t.left, t.right), n2.cp1y = ve(n2.cp1y, t.top, t.bottom)), r && (n2.cp2x = ve(n2.cp2x, t.left, t.right), n2.cp2y = ve(n2.cp2y, t.top, t.bottom)));
}
function qs(i4, t, e, s, n2) {
  let o2, a2, r, l2;
  if (t.spanGaps && (i4 = i4.filter((c2) => !c2.skip)), t.cubicInterpolationMode === "monotone")
    aa(i4, n2);
  else {
    let c2 = s ? i4[i4.length - 1] : i4[0];
    for (o2 = 0, a2 = i4.length; o2 < a2; ++o2)
      r = i4[o2], l2 = sa(c2, r, i4[Math.min(o2 + 1, a2 - (s ? 0 : 1)) % a2], t.tension), r.cp1x = l2.previous.x, r.cp1y = l2.previous.y, r.cp2x = l2.next.x, r.cp2y = l2.next.y, c2 = r;
  }
  t.capBezierPoints && ra(i4, e);
}
function Ie() {
  return typeof window < "u" && typeof document < "u";
}
function ze(i4) {
  let t = i4.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function Pe(i4, t, e) {
  let s;
  return typeof i4 == "string" ? (s = parseInt(i4, 10), i4.indexOf("%") !== -1 && (s = s / 100 * t.parentNode[e])) : s = i4, s;
}
function la(i4, t) {
  return Fe(i4).getPropertyValue(t);
}
function Ct(i4, t, e) {
  let s = {};
  e = e ? "-" + e : "";
  for (let n2 = 0; n2 < 4; n2++) {
    let o2 = ca[n2];
    s[o2] = parseFloat(i4[t + "-" + o2 + e]) || 0;
  }
  return s.width = s.left + s.right, s.height = s.top + s.bottom, s;
}
function da(i4, t) {
  let e = i4.touches, s = e && e.length ? e[0] : i4, { offsetX: n2, offsetY: o2 } = s, a2 = false, r, l2;
  if (ha(n2, o2, i4.target))
    r = n2, l2 = o2;
  else {
    let c2 = t.getBoundingClientRect();
    r = s.clientX - c2.left, l2 = s.clientY - c2.top, a2 = true;
  }
  return { x: r, y: l2, box: a2 };
}
function kt(i4, t) {
  if ("native" in i4)
    return i4;
  let { canvas: e, currentDevicePixelRatio: s } = t, n2 = Fe(e), o2 = n2.boxSizing === "border-box", a2 = Ct(n2, "padding"), r = Ct(n2, "border", "width"), { x: l2, y: c2, box: h3 } = da(i4, e), d3 = a2.left + (h3 && r.left), u = a2.top + (h3 && r.top), { width: f2, height: g2 } = t;
  return o2 && (f2 -= a2.width + r.width, g2 -= a2.height + r.height), { x: Math.round((l2 - d3) / f2 * e.width / s), y: Math.round((c2 - u) / g2 * e.height / s) };
}
function ua(i4, t, e) {
  let s, n2;
  if (t === void 0 || e === void 0) {
    let o2 = ze(i4);
    if (!o2)
      t = i4.clientWidth, e = i4.clientHeight;
    else {
      let a2 = o2.getBoundingClientRect(), r = Fe(o2), l2 = Ct(r, "border", "width"), c2 = Ct(r, "padding");
      t = a2.width - c2.width - l2.width, e = a2.height - c2.height - l2.height, s = Pe(r.maxWidth, o2, "clientWidth"), n2 = Pe(r.maxHeight, o2, "clientHeight");
    }
  }
  return { width: t, height: e, maxWidth: s || Se, maxHeight: n2 || Se };
}
function Gs(i4, t, e, s) {
  let n2 = Fe(i4), o2 = Ct(n2, "margin"), a2 = Pe(n2.maxWidth, i4, "clientWidth") || Se, r = Pe(n2.maxHeight, i4, "clientHeight") || Se, l2 = ua(i4, t, e), { width: c2, height: h3 } = l2;
  if (n2.boxSizing === "content-box") {
    let u = Ct(n2, "border", "width"), f2 = Ct(n2, "padding");
    c2 -= f2.width + u.width, h3 -= f2.height + u.height;
  }
  return c2 = Math.max(0, c2 - o2.width), h3 = Math.max(0, s ? c2 / s : h3 - o2.height), c2 = Me(Math.min(c2, a2, l2.maxWidth)), h3 = Me(Math.min(h3, r, l2.maxHeight)), c2 && !h3 && (h3 = Me(c2 / 2)), (t !== void 0 || e !== void 0) && s && l2.height && h3 > l2.height && (h3 = l2.height, c2 = Me(Math.floor(h3 * s))), { width: c2, height: h3 };
}
function Pi(i4, t, e) {
  let s = t || 1, n2 = Math.floor(i4.height * s), o2 = Math.floor(i4.width * s);
  i4.height = Math.floor(i4.height), i4.width = Math.floor(i4.width);
  let a2 = i4.canvas;
  return a2.style && (e || !a2.style.height && !a2.style.width) && (a2.style.height = `${i4.height}px`, a2.style.width = `${i4.width}px`), i4.currentDevicePixelRatio !== s || a2.height !== n2 || a2.width !== o2 ? (i4.currentDevicePixelRatio = s, a2.height = n2, a2.width = o2, i4.ctx.setTransform(s, 0, 0, s, 0, 0), true) : false;
}
function Di(i4, t) {
  let e = la(i4, t), s = e && e.match(/^(\d+)(\.\d+)?px$/);
  return s ? +s[1] : void 0;
}
function _t(i4, t, e, s) {
  return { x: i4.x + e * (t.x - i4.x), y: i4.y + e * (t.y - i4.y) };
}
function Qs(i4, t, e, s) {
  return { x: i4.x + e * (t.x - i4.x), y: s === "middle" ? e < 0.5 ? i4.y : t.y : s === "after" ? e < 1 ? i4.y : t.y : e > 0 ? t.y : i4.y };
}
function Zs(i4, t, e, s) {
  let n2 = { x: i4.cp2x, y: i4.cp2y }, o2 = { x: t.cp1x, y: t.cp1y }, a2 = _t(i4, n2, e), r = _t(n2, o2, e), l2 = _t(o2, t, e), c2 = _t(a2, r, e), h3 = _t(r, l2, e);
  return _t(c2, h3, e);
}
function Lt(i4, t, e) {
  return i4 ? fa(t, e) : ga();
}
function Ci(i4, t) {
  let e, s;
  (t === "ltr" || t === "rtl") && (e = i4.canvas.style, s = [e.getPropertyValue("direction"), e.getPropertyPriority("direction")], e.setProperty("direction", t, "important"), i4.prevTextDirection = s);
}
function Oi(i4, t) {
  t !== void 0 && (delete i4.prevTextDirection, i4.canvas.style.setProperty("direction", t[0], t[1]));
}
function tn(i4) {
  return i4 === "angle" ? { between: jt, compare: Lo, normalize: G3 } : { between: lt, compare: (t, e) => t - e, normalize: (t) => t };
}
function ks({ start: i4, end: t, count: e, loop: s, style: n2 }) {
  return { start: i4 % e, end: t % e, loop: s && (t - i4 + 1) % e === 0, style: n2 };
}
function pa(i4, t, e) {
  let { property: s, start: n2, end: o2 } = e, { between: a2, normalize: r } = tn(s), l2 = t.length, { start: c2, end: h3, loop: d3 } = i4, u, f2;
  if (d3) {
    for (c2 += l2, h3 += l2, u = 0, f2 = l2; u < f2 && a2(r(t[c2 % l2][s]), n2, o2); ++u)
      c2--, h3--;
    c2 %= l2, h3 %= l2;
  }
  return h3 < c2 && (h3 += l2), { start: c2, end: h3, loop: d3, style: i4.style };
}
function Ai(i4, t, e) {
  if (!e)
    return [i4];
  let { property: s, start: n2, end: o2 } = e, a2 = t.length, { compare: r, between: l2, normalize: c2 } = tn(s), { start: h3, end: d3, loop: u, style: f2 } = pa(i4, t, e), g2 = [], p3 = false, m3 = null, b3, _3, v3, y3 = () => l2(n2, v3, b3) && r(n2, v3) !== 0, x2 = () => r(o2, b3) === 0 || l2(o2, v3, b3), M3 = () => p3 || y3(), k3 = () => !p3 || x2();
  for (let S3 = h3, w2 = h3; S3 <= d3; ++S3)
    _3 = t[S3 % a2], !_3.skip && (b3 = c2(_3[s]), b3 !== v3 && (p3 = l2(b3, n2, o2), m3 === null && M3() && (m3 = r(b3, n2) === 0 ? S3 : w2), m3 !== null && k3() && (g2.push(ks({ start: m3, end: S3, loop: u, count: a2, style: f2 })), m3 = null), w2 = S3, v3 = b3));
  return m3 !== null && g2.push(ks({ start: m3, end: d3, loop: u, count: a2, style: f2 })), g2;
}
function Li(i4, t) {
  let e = [], s = i4.segments;
  for (let n2 = 0; n2 < s.length; n2++) {
    let o2 = Ai(s[n2], i4.points, t);
    o2.length && e.push(...o2);
  }
  return e;
}
function ma(i4, t, e, s) {
  let n2 = 0, o2 = t - 1;
  if (e && !s)
    for (; n2 < t && !i4[n2].skip; )
      n2++;
  for (; n2 < t && i4[n2].skip; )
    n2++;
  for (n2 %= t, e && (o2 += n2); o2 > n2 && i4[o2 % t].skip; )
    o2--;
  return o2 %= t, { start: n2, end: o2 };
}
function ba(i4, t, e, s) {
  let n2 = i4.length, o2 = [], a2 = t, r = i4[t], l2;
  for (l2 = t + 1; l2 <= e; ++l2) {
    let c2 = i4[l2 % n2];
    c2.skip || c2.stop ? r.skip || (s = false, o2.push({ start: t % n2, end: (l2 - 1) % n2, loop: s }), t = a2 = c2.stop ? l2 : null) : (a2 = l2, r.skip && (t = l2)), r = c2;
  }
  return a2 !== null && o2.push({ start: t % n2, end: a2 % n2, loop: s }), o2;
}
function en(i4, t) {
  let e = i4.points, s = i4.options.spanGaps, n2 = e.length;
  if (!n2)
    return [];
  let o2 = !!i4._loop, { start: a2, end: r } = ma(e, n2, o2, s);
  if (s === true)
    return Ss(i4, [{ start: a2, end: r, loop: o2 }], e, t);
  let l2 = r < a2 ? r + n2 : r, c2 = !!i4._fullLoop && a2 === 0 && r === n2 - 1;
  return Ss(i4, ba(e, a2, l2, c2), e, t);
}
function Ss(i4, t, e, s) {
  return !s || !s.setContext || !e ? t : _a(i4, t, e, s);
}
function _a(i4, t, e, s) {
  let n2 = i4._chart.getContext(), o2 = ws(i4.options), { _datasetIndex: a2, options: { spanGaps: r } } = i4, l2 = e.length, c2 = [], h3 = o2, d3 = t[0].start, u = d3;
  function f2(g2, p3, m3, b3) {
    let _3 = r ? -1 : 1;
    if (g2 !== p3) {
      for (g2 += l2; e[g2 % l2].skip; )
        g2 -= _3;
      for (; e[p3 % l2].skip; )
        p3 += _3;
      g2 % l2 !== p3 % l2 && (c2.push({ start: g2 % l2, end: p3 % l2, loop: m3, style: b3 }), h3 = b3, d3 = p3 % l2);
    }
  }
  for (let g2 of t) {
    d3 = r ? d3 : g2.start;
    let p3 = e[d3 % l2], m3;
    for (u = d3 + 1; u <= g2.end; u++) {
      let b3 = e[u % l2];
      m3 = ws(s.setContext(pt(n2, { type: "segment", p0: p3, p1: b3, p0DataIndex: (u - 1) % l2, p1DataIndex: u % l2, datasetIndex: a2 }))), xa(m3, h3) && f2(d3, u - 1, g2.loop, h3), p3 = b3, h3 = m3;
    }
    d3 < u - 1 && f2(d3, u - 1, g2.loop, h3);
  }
  return c2;
}
function ws(i4) {
  return { backgroundColor: i4.backgroundColor, borderCapStyle: i4.borderCapStyle, borderDash: i4.borderDash, borderDashOffset: i4.borderDashOffset, borderJoinStyle: i4.borderJoinStyle, borderWidth: i4.borderWidth, borderColor: i4.borderColor };
}
function xa(i4, t) {
  if (!t)
    return false;
  let e = [], s = function(n2, o2) {
    return bi(o2) ? (e.includes(o2) || e.push(o2), e.indexOf(o2)) : o2;
  };
  return JSON.stringify(i4, s) !== JSON.stringify(t, s);
}
function va(i4, t) {
  let e = [], s = Object.keys(t);
  for (let n2 = 0; n2 < s.length; n2++) {
    let o2 = i4[s[n2]];
    o2 && o2.active() && e.push(o2.wait());
  }
  return Promise.all(e);
}
function Ma(i4, t) {
  if (!t)
    return;
  let e = i4.options;
  if (!e) {
    i4.options = t;
    return;
  }
  return e.$shared && (i4.options = e = Object.assign({}, e, { $shared: false, $animations: {} })), e;
}
function nn(i4, t) {
  let e = i4 && i4.options || {}, s = e.reverse, n2 = e.min === void 0 ? t : 0, o2 = e.max === void 0 ? t : 0;
  return { start: s ? o2 : n2, end: s ? n2 : o2 };
}
function ka(i4, t, e) {
  if (e === false)
    return false;
  let s = nn(i4, e), n2 = nn(t, e);
  return { top: n2.end, right: s.end, bottom: n2.start, left: s.start };
}
function Sa(i4) {
  let t, e, s, n2;
  return O3(i4) ? (t = i4.top, e = i4.right, s = i4.bottom, n2 = i4.left) : t = e = s = n2 = i4, { top: t, right: e, bottom: s, left: n2, disabled: i4 === false };
}
function so(i4, t) {
  let e = [], s = i4._getSortedDatasetMetas(t), n2, o2;
  for (n2 = 0, o2 = s.length; n2 < o2; ++n2)
    e.push(s[n2].index);
  return e;
}
function on(i4, t, e, s = {}) {
  let n2 = i4.keys, o2 = s.mode === "single", a2, r, l2, c2;
  if (t !== null) {
    for (a2 = 0, r = n2.length; a2 < r; ++a2) {
      if (l2 = +n2[a2], l2 === e) {
        if (s.all)
          continue;
        break;
      }
      c2 = i4.values[l2], V3(c2) && (o2 || t === 0 || st(t) === st(c2)) && (t += c2);
    }
    return t;
  }
}
function wa(i4) {
  let t = Object.keys(i4), e = new Array(t.length), s, n2, o2;
  for (s = 0, n2 = t.length; s < n2; ++s)
    o2 = t[s], e[s] = { x: o2, y: i4[o2] };
  return e;
}
function an(i4, t) {
  let e = i4 && i4.options.stacked;
  return e || e === void 0 && t.stack !== void 0;
}
function Pa(i4, t, e) {
  return `${i4.id}.${t.id}.${e.stack || e.type}`;
}
function Da(i4) {
  let { min: t, max: e, minDefined: s, maxDefined: n2 } = i4.getUserBounds();
  return { min: s ? t : Number.NEGATIVE_INFINITY, max: n2 ? e : Number.POSITIVE_INFINITY };
}
function Ca(i4, t, e) {
  let s = i4[t] || (i4[t] = {});
  return s[e] || (s[e] = {});
}
function rn(i4, t, e, s) {
  for (let n2 of t.getMatchingVisibleMetas(s).reverse()) {
    let o2 = i4[n2.index];
    if (e && o2 > 0 || !e && o2 < 0)
      return n2.index;
  }
  return null;
}
function ln(i4, t) {
  let { chart: e, _cachedMeta: s } = i4, n2 = e._stacks || (e._stacks = {}), { iScale: o2, vScale: a2, index: r } = s, l2 = o2.axis, c2 = a2.axis, h3 = Pa(o2, a2, s), d3 = t.length, u;
  for (let f2 = 0; f2 < d3; ++f2) {
    let g2 = t[f2], { [l2]: p3, [c2]: m3 } = g2, b3 = g2._stacks || (g2._stacks = {});
    u = b3[c2] = Ca(n2, h3, p3), u[r] = m3, u._top = rn(u, a2, true, s.type), u._bottom = rn(u, a2, false, s.type);
    let _3 = u._visualValues || (u._visualValues = {});
    _3[r] = m3;
  }
}
function Ti(i4, t) {
  let e = i4.scales;
  return Object.keys(e).filter((s) => e[s].axis === t).shift();
}
function Oa(i4, t) {
  return pt(i4, { active: false, dataset: void 0, datasetIndex: t, index: t, mode: "default", type: "dataset" });
}
function Aa(i4, t, e) {
  return pt(i4, { active: false, dataIndex: t, parsed: void 0, raw: void 0, element: e, index: t, mode: "default", type: "data" });
}
function ae(i4, t) {
  let e = i4.controller.index, s = i4.vScale && i4.vScale.axis;
  if (s) {
    t = t || i4._parsed;
    for (let n2 of t) {
      let o2 = n2._stacks;
      if (!o2 || o2[s] === void 0 || o2[s][e] === void 0)
        return;
      delete o2[s][e], o2[s]._visualValues !== void 0 && o2[s]._visualValues[e] !== void 0 && delete o2[s]._visualValues[e];
    }
  }
}
function Ta(i4, t) {
  if (!i4._cache.$bar) {
    let e = i4.getMatchingVisibleMetas(t), s = [];
    for (let n2 = 0, o2 = e.length; n2 < o2; n2++)
      s = s.concat(e[n2].controller.getAllParsedValues(i4));
    i4._cache.$bar = ui(s.sort((n2, o2) => n2 - o2));
  }
  return i4._cache.$bar;
}
function Ra(i4) {
  let t = i4.iScale, e = Ta(t, i4.type), s = t._length, n2, o2, a2, r, l2 = () => {
    a2 === 32767 || a2 === -32768 || (Nt(r) && (s = Math.min(s, Math.abs(a2 - r) || s)), r = a2);
  };
  for (n2 = 0, o2 = e.length; n2 < o2; ++n2)
    a2 = t.getPixelForValue(e[n2]), l2();
  for (r = void 0, n2 = 0, o2 = t.ticks.length; n2 < o2; ++n2)
    a2 = t.getPixelForTick(n2), l2();
  return s;
}
function Ea(i4, t, e, s) {
  let n2 = e.barThickness, o2, a2;
  return L3(n2) ? (o2 = t.min * e.categoryPercentage, a2 = e.barPercentage) : (o2 = n2 * s, a2 = 1), { chunk: o2 / s, ratio: a2, start: t.pixels[i4] - o2 / 2 };
}
function Ia(i4, t, e, s) {
  let n2 = t.pixels, o2 = n2[i4], a2 = i4 > 0 ? n2[i4 - 1] : null, r = i4 < n2.length - 1 ? n2[i4 + 1] : null, l2 = e.categoryPercentage;
  a2 === null && (a2 = o2 - (r === null ? t.end - t.start : r - o2)), r === null && (r = o2 + o2 - a2);
  let c2 = o2 - (o2 - Math.min(a2, r)) / 2 * l2;
  return { chunk: Math.abs(r - a2) / 2 * l2 / s, ratio: e.barPercentage, start: c2 };
}
function za(i4, t, e, s) {
  let n2 = e.parse(i4[0], s), o2 = e.parse(i4[1], s), a2 = Math.min(n2, o2), r = Math.max(n2, o2), l2 = a2, c2 = r;
  Math.abs(a2) > Math.abs(r) && (l2 = r, c2 = a2), t[e.axis] = c2, t._custom = { barStart: l2, barEnd: c2, start: n2, end: o2, min: a2, max: r };
}
function no(i4, t, e, s) {
  return I3(i4) ? za(i4, t, e, s) : t[e.axis] = e.parse(i4, s), t;
}
function hn(i4, t, e, s) {
  let n2 = i4.iScale, o2 = i4.vScale, a2 = n2.getLabels(), r = n2 === o2, l2 = [], c2, h3, d3, u;
  for (c2 = e, h3 = e + s; c2 < h3; ++c2)
    u = t[c2], d3 = {}, d3[n2.axis] = r || n2.parse(a2[c2], c2), l2.push(no(u, d3, o2, c2));
  return l2;
}
function Ei(i4) {
  return i4 && i4.barStart !== void 0 && i4.barEnd !== void 0;
}
function Fa(i4, t, e) {
  return i4 !== 0 ? st(i4) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function Ba(i4) {
  let t, e, s, n2, o2;
  return i4.horizontal ? (t = i4.base > i4.x, e = "left", s = "right") : (t = i4.base < i4.y, e = "bottom", s = "top"), t ? (n2 = "end", o2 = "start") : (n2 = "start", o2 = "end"), { start: e, end: s, reverse: t, top: n2, bottom: o2 };
}
function Va(i4, t, e, s) {
  let n2 = t.borderSkipped, o2 = {};
  if (!n2) {
    i4.borderSkipped = o2;
    return;
  }
  if (n2 === true) {
    i4.borderSkipped = { top: true, right: true, bottom: true, left: true };
    return;
  }
  let { start: a2, end: r, reverse: l2, top: c2, bottom: h3 } = Ba(i4);
  n2 === "middle" && e && (i4.enableBorderRadius = true, (e._top || 0) === s ? n2 = c2 : (e._bottom || 0) === s ? n2 = h3 : (o2[dn(h3, a2, r, l2)] = true, n2 = c2)), o2[dn(n2, a2, r, l2)] = true, i4.borderSkipped = o2;
}
function dn(i4, t, e, s) {
  return s ? (i4 = Wa(i4, t, e), i4 = un(i4, e, t)) : i4 = un(i4, t, e), i4;
}
function Wa(i4, t, e) {
  return i4 === t ? e : i4 === e ? t : i4;
}
function un(i4, t, e) {
  return i4 === "start" ? t : i4 === "end" ? e : i4;
}
function Na(i4, { inflateAmount: t }, e) {
  i4.inflateAmount = t === "auto" ? e === 1 ? 0.33 : 0 : t;
}
function Ha(i4, t, e) {
  let s = 1, n2 = 1, o2 = 0, a2 = 0;
  if (t < F3) {
    let r = i4, l2 = r + t, c2 = Math.cos(r), h3 = Math.sin(r), d3 = Math.cos(l2), u = Math.sin(l2), f2 = (v3, y3, x2) => jt(v3, r, l2, true) ? 1 : Math.max(y3, y3 * e, x2, x2 * e), g2 = (v3, y3, x2) => jt(v3, r, l2, true) ? -1 : Math.min(y3, y3 * e, x2, x2 * e), p3 = f2(0, c2, d3), m3 = f2(N3, h3, u), b3 = g2(z2, c2, d3), _3 = g2(z2 + N3, h3, u);
    s = (p3 - b3) / 2, n2 = (m3 - _3) / 2, o2 = -(p3 + b3) / 2, a2 = -(m3 + _3) / 2;
  }
  return { ratioX: s, ratioY: n2, offsetX: o2, offsetY: a2 };
}
function Tt() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
function Ua(i4, t, e, s) {
  let { controller: n2, data: o2, _sorted: a2 } = i4, r = n2._cachedMeta.iScale;
  if (r && t === r.axis && t !== "r" && a2 && o2.length) {
    let l2 = r._reversePixels ? Es : ot;
    if (s) {
      if (n2._sharedOptions) {
        let c2 = o2[0], h3 = typeof c2.getRange == "function" && c2.getRange(t);
        if (h3) {
          let d3 = l2(o2, t, e - h3), u = l2(o2, t, e + h3);
          return { lo: d3.lo, hi: u.hi };
        }
      }
    } else
      return l2(o2, t, e);
  }
  return { lo: 0, hi: o2.length - 1 };
}
function _e(i4, t, e, s, n2) {
  let o2 = i4.getSortedVisibleDatasetMetas(), a2 = e[t];
  for (let r = 0, l2 = o2.length; r < l2; ++r) {
    let { index: c2, data: h3 } = o2[r], { lo: d3, hi: u } = Ua(o2[r], t, a2, n2);
    for (let f2 = d3; f2 <= u; ++f2) {
      let g2 = h3[f2];
      g2.skip || s(g2, c2, f2);
    }
  }
}
function Ya(i4) {
  let t = i4.indexOf("x") !== -1, e = i4.indexOf("y") !== -1;
  return function(s, n2) {
    let o2 = t ? Math.abs(s.x - n2.x) : 0, a2 = e ? Math.abs(s.y - n2.y) : 0;
    return Math.sqrt(Math.pow(o2, 2) + Math.pow(a2, 2));
  };
}
function Ii(i4, t, e, s, n2) {
  let o2 = [];
  return !n2 && !i4.isPointInArea(t) || _e(i4, e, t, function(r, l2, c2) {
    !n2 && !at(r, i4.chartArea, 0) || r.inRange(t.x, t.y, s) && o2.push({ element: r, datasetIndex: l2, index: c2 });
  }, true), o2;
}
function Xa(i4, t, e, s) {
  let n2 = [];
  function o2(a2, r, l2) {
    let { startAngle: c2, endAngle: h3 } = a2.getProps(["startAngle", "endAngle"], s), { angle: d3 } = hi(a2, { x: t.x, y: t.y });
    jt(d3, c2, h3) && n2.push({ element: a2, datasetIndex: r, index: l2 });
  }
  return _e(i4, e, t, o2), n2;
}
function Ka(i4, t, e, s, n2, o2) {
  let a2 = [], r = Ya(e), l2 = Number.POSITIVE_INFINITY;
  function c2(h3, d3, u) {
    let f2 = h3.inRange(t.x, t.y, n2);
    if (s && !f2)
      return;
    let g2 = h3.getCenterPoint(n2);
    if (!(!!o2 || i4.isPointInArea(g2)) && !f2)
      return;
    let m3 = r(t, g2);
    m3 < l2 ? (a2 = [{ element: h3, datasetIndex: d3, index: u }], l2 = m3) : m3 === l2 && a2.push({ element: h3, datasetIndex: d3, index: u });
  }
  return _e(i4, e, t, c2), a2;
}
function zi(i4, t, e, s, n2, o2) {
  return !o2 && !i4.isPointInArea(t) ? [] : e === "r" && !s ? Xa(i4, t, e, n2) : Ka(i4, t, e, s, n2, o2);
}
function fn(i4, t, e, s, n2) {
  let o2 = [], a2 = e === "x" ? "inXRange" : "inYRange", r = false;
  return _e(i4, e, t, (l2, c2, h3) => {
    l2[a2](t[e], n2) && (o2.push({ element: l2, datasetIndex: c2, index: h3 }), r = r || l2.inRange(t.x, t.y, n2));
  }), s && !r ? [] : o2;
}
function re(i4, t) {
  return i4.filter((e) => e.pos === t);
}
function gn(i4, t) {
  return i4.filter((e) => oo.indexOf(e.pos) === -1 && e.box.axis === t);
}
function le(i4, t) {
  return i4.sort((e, s) => {
    let n2 = t ? s : e, o2 = t ? e : s;
    return n2.weight === o2.weight ? n2.index - o2.index : n2.weight - o2.weight;
  });
}
function Ga(i4) {
  let t = [], e, s, n2, o2, a2, r;
  for (e = 0, s = (i4 || []).length; e < s; ++e)
    n2 = i4[e], { position: o2, options: { stack: a2, stackWeight: r = 1 } } = n2, t.push({ index: e, box: n2, pos: o2, horizontal: n2.isHorizontal(), weight: n2.weight, stack: a2 && o2 + a2, stackWeight: r });
  return t;
}
function Ja(i4) {
  let t = {};
  for (let e of i4) {
    let { stack: s, pos: n2, stackWeight: o2 } = e;
    if (!s || !oo.includes(n2))
      continue;
    let a2 = t[s] || (t[s] = { count: 0, placed: 0, weight: 0, size: 0 });
    a2.count++, a2.weight += o2;
  }
  return t;
}
function Qa(i4, t) {
  let e = Ja(i4), { vBoxMaxWidth: s, hBoxMaxHeight: n2 } = t, o2, a2, r;
  for (o2 = 0, a2 = i4.length; o2 < a2; ++o2) {
    r = i4[o2];
    let { fullSize: l2 } = r.box, c2 = e[r.stack], h3 = c2 && r.stackWeight / c2.weight;
    r.horizontal ? (r.width = h3 ? h3 * s : l2 && t.availableWidth, r.height = n2) : (r.width = s, r.height = h3 ? h3 * n2 : l2 && t.availableHeight);
  }
  return e;
}
function Za(i4) {
  let t = Ga(i4), e = le(t.filter((c2) => c2.box.fullSize), true), s = le(re(t, "left"), true), n2 = le(re(t, "right")), o2 = le(re(t, "top"), true), a2 = le(re(t, "bottom")), r = gn(t, "x"), l2 = gn(t, "y");
  return { fullSize: e, leftAndTop: s.concat(o2), rightAndBottom: n2.concat(l2).concat(a2).concat(r), chartArea: re(t, "chartArea"), vertical: s.concat(n2).concat(l2), horizontal: o2.concat(a2).concat(r) };
}
function pn(i4, t, e, s) {
  return Math.max(i4[e], t[e]) + Math.max(i4[s], t[s]);
}
function ao(i4, t) {
  i4.top = Math.max(i4.top, t.top), i4.left = Math.max(i4.left, t.left), i4.bottom = Math.max(i4.bottom, t.bottom), i4.right = Math.max(i4.right, t.right);
}
function tr(i4, t, e, s) {
  let { pos: n2, box: o2 } = e, a2 = i4.maxPadding;
  if (!O3(n2)) {
    e.size && (i4[n2] -= e.size);
    let d3 = s[e.stack] || { size: 0, count: 1 };
    d3.size = Math.max(d3.size, e.horizontal ? o2.height : o2.width), e.size = d3.size / d3.count, i4[n2] += e.size;
  }
  o2.getPadding && ao(a2, o2.getPadding());
  let r = Math.max(0, t.outerWidth - pn(a2, i4, "left", "right")), l2 = Math.max(0, t.outerHeight - pn(a2, i4, "top", "bottom")), c2 = r !== i4.w, h3 = l2 !== i4.h;
  return i4.w = r, i4.h = l2, e.horizontal ? { same: c2, other: h3 } : { same: h3, other: c2 };
}
function er(i4) {
  let t = i4.maxPadding;
  function e(s) {
    let n2 = Math.max(t[s] - i4[s], 0);
    return i4[s] += n2, n2;
  }
  i4.y += e("top"), i4.x += e("left"), e("right"), e("bottom");
}
function ir(i4, t) {
  let e = t.maxPadding;
  function s(n2) {
    let o2 = { left: 0, top: 0, right: 0, bottom: 0 };
    return n2.forEach((a2) => {
      o2[a2] = Math.max(t[a2], e[a2]);
    }), o2;
  }
  return s(i4 ? ["left", "right"] : ["top", "bottom"]);
}
function de(i4, t, e, s) {
  let n2 = [], o2, a2, r, l2, c2, h3;
  for (o2 = 0, a2 = i4.length, c2 = 0; o2 < a2; ++o2) {
    r = i4[o2], l2 = r.box, l2.update(r.width || t.w, r.height || t.h, ir(r.horizontal, t));
    let { same: d3, other: u } = tr(t, e, r, s);
    c2 |= d3 && n2.length, h3 = h3 || u, l2.fullSize || n2.push(r);
  }
  return c2 && de(n2, t, e, s) || h3;
}
function Be(i4, t, e, s, n2) {
  i4.top = e, i4.left = t, i4.right = t + s, i4.bottom = e + n2, i4.width = s, i4.height = n2;
}
function mn(i4, t, e, s) {
  let n2 = e.padding, { x: o2, y: a2 } = t;
  for (let r of i4) {
    let l2 = r.box, c2 = s[r.stack] || { count: 1, placed: 0, weight: 1 }, h3 = r.stackWeight / c2.weight || 1;
    if (r.horizontal) {
      let d3 = t.w * h3, u = c2.size || l2.height;
      Nt(c2.start) && (a2 = c2.start), l2.fullSize ? Be(l2, n2.left, a2, e.outerWidth - n2.right - n2.left, u) : Be(l2, t.left + c2.placed, a2, d3, u), c2.start = a2, c2.placed += d3, a2 = l2.bottom;
    } else {
      let d3 = t.h * h3, u = c2.size || l2.width;
      Nt(c2.start) && (o2 = c2.start), l2.fullSize ? Be(l2, o2, n2.top, u, e.outerHeight - n2.bottom - n2.top) : Be(l2, o2, t.top + c2.placed, u, d3), c2.start = o2, c2.placed += d3, o2 = l2.right;
    }
  }
  t.x = o2, t.y = a2;
}
function nr(i4, t) {
  let e = i4.style, s = i4.getAttribute("height"), n2 = i4.getAttribute("width");
  if (i4[Ue] = { initial: { height: s, width: n2, style: { display: e.display, height: e.height, width: e.width } } }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", bn(n2)) {
    let o2 = Di(i4, "width");
    o2 !== void 0 && (i4.width = o2);
  }
  if (bn(s))
    if (i4.style.height === "")
      i4.height = i4.width / (t || 2);
    else {
      let o2 = Di(i4, "height");
      o2 !== void 0 && (i4.height = o2);
    }
  return i4;
}
function or(i4, t, e) {
  i4 && i4.addEventListener(t, e, ro);
}
function ar(i4, t, e) {
  i4 && i4.canvas && i4.canvas.removeEventListener(t, e, ro);
}
function rr(i4, t) {
  let e = sr[i4.type] || i4.type, { x: s, y: n2 } = kt(i4, t);
  return { type: e, chart: t, native: i4, x: s !== void 0 ? s : null, y: n2 !== void 0 ? n2 : null };
}
function Ge(i4, t) {
  for (let e of i4)
    if (e === t || e.contains(t))
      return true;
}
function lr(i4, t, e) {
  let s = i4.canvas, n2 = new MutationObserver((o2) => {
    let a2 = false;
    for (let r of o2)
      a2 = a2 || Ge(r.addedNodes, s), a2 = a2 && !Ge(r.removedNodes, s);
    a2 && e();
  });
  return n2.observe(document, { childList: true, subtree: true }), n2;
}
function cr(i4, t, e) {
  let s = i4.canvas, n2 = new MutationObserver((o2) => {
    let a2 = false;
    for (let r of o2)
      a2 = a2 || Ge(r.removedNodes, s), a2 = a2 && !Ge(r.addedNodes, s);
    a2 && e();
  });
  return n2.observe(document, { childList: true, subtree: true }), n2;
}
function lo() {
  let i4 = window.devicePixelRatio;
  i4 !== _n && (_n = i4, ge.forEach((t, e) => {
    e.currentDevicePixelRatio !== i4 && t();
  }));
}
function hr(i4, t) {
  ge.size || window.addEventListener("resize", lo), ge.set(i4, t);
}
function dr(i4) {
  ge.delete(i4), ge.size || window.removeEventListener("resize", lo);
}
function ur(i4, t, e) {
  let s = i4.canvas, n2 = s && ze(s);
  if (!n2)
    return;
  let o2 = gi((r, l2) => {
    let c2 = n2.clientWidth;
    e(r, l2), c2 < n2.clientWidth && e();
  }, window), a2 = new ResizeObserver((r) => {
    let l2 = r[0], c2 = l2.contentRect.width, h3 = l2.contentRect.height;
    c2 === 0 && h3 === 0 || o2(c2, h3);
  });
  return a2.observe(n2), hr(i4, o2), a2;
}
function Fi(i4, t, e) {
  e && e.disconnect(), t === "resize" && dr(i4);
}
function fr(i4, t, e) {
  let s = i4.canvas, n2 = gi((o2) => {
    i4.ctx !== null && e(rr(o2, i4));
  }, i4);
  return or(s, t, n2), n2;
}
function gr(i4) {
  return !Ie() || typeof OffscreenCanvas < "u" && i4 instanceof OffscreenCanvas ? Gi : Ji;
}
function pr(i4, t) {
  let e = i4.options.ticks, s = mr(i4), n2 = Math.min(e.maxTicksLimit || s, s), o2 = e.major.enabled ? _r(t) : [], a2 = o2.length, r = o2[0], l2 = o2[a2 - 1], c2 = [];
  if (a2 > n2)
    return xr(t, c2, o2, a2 / n2), c2;
  let h3 = br(o2, t, n2);
  if (a2 > 0) {
    let d3, u, f2 = a2 > 1 ? Math.round((l2 - r) / (a2 - 1)) : null;
    for (Ve(t, c2, h3, L3(f2) ? 0 : r - f2, r), d3 = 0, u = a2 - 1; d3 < u; d3++)
      Ve(t, c2, h3, o2[d3], o2[d3 + 1]);
    return Ve(t, c2, h3, l2, L3(f2) ? t.length : l2 + f2), c2;
  }
  return Ve(t, c2, h3), c2;
}
function mr(i4) {
  let t = i4.options.offset, e = i4._tickSize(), s = i4._length / e + (t ? 0 : 1), n2 = i4._maxLength / e;
  return Math.floor(Math.min(s, n2));
}
function br(i4, t, e) {
  let s = yr(i4), n2 = t.length / e;
  if (!s)
    return Math.max(n2, 1);
  let o2 = Ls(s);
  for (let a2 = 0, r = o2.length - 1; a2 < r; a2++) {
    let l2 = o2[a2];
    if (l2 > n2)
      return l2;
  }
  return Math.max(n2, 1);
}
function _r(i4) {
  let t = [], e, s;
  for (e = 0, s = i4.length; e < s; e++)
    i4[e].major && t.push(e);
  return t;
}
function xr(i4, t, e, s) {
  let n2 = 0, o2 = e[0], a2;
  for (s = Math.ceil(s), a2 = 0; a2 < i4.length; a2++)
    a2 === o2 && (t.push(i4[a2]), n2++, o2 = e[n2 * s]);
}
function Ve(i4, t, e, s, n2) {
  let o2 = P3(s, 0), a2 = Math.min(P3(n2, i4.length), i4.length), r = 0, l2, c2, h3;
  for (e = Math.ceil(e), n2 && (l2 = n2 - s, e = l2 / Math.floor(l2 / e)), h3 = o2; h3 < 0; )
    r++, h3 = Math.round(o2 + r * e);
  for (c2 = Math.max(o2, 0); c2 < a2; c2++)
    c2 === h3 && (t.push(i4[c2]), r++, h3 = Math.round(o2 + r * e));
}
function yr(i4) {
  let t = i4.length, e, s;
  if (t < 2)
    return false;
  for (s = i4[0], e = 1; e < t; ++e)
    if (i4[e] - i4[e - 1] !== s)
      return false;
  return s;
}
function vn(i4, t) {
  let e = [], s = i4.length / t, n2 = i4.length, o2 = 0;
  for (; o2 < n2; o2 += s)
    e.push(i4[Math.floor(o2)]);
  return e;
}
function Mr(i4, t, e) {
  let s = i4.ticks.length, n2 = Math.min(t, s - 1), o2 = i4._startPixel, a2 = i4._endPixel, r = 1e-6, l2 = i4.getPixelForTick(n2), c2;
  if (!(e && (s === 1 ? c2 = Math.max(l2 - o2, a2 - l2) : t === 0 ? c2 = (i4.getPixelForTick(1) - l2) / 2 : c2 = (l2 - i4.getPixelForTick(n2 - 1)) / 2, l2 += n2 < t ? c2 : -c2, l2 < o2 - r || l2 > a2 + r)))
    return l2;
}
function kr(i4, t) {
  T3(i4, (e) => {
    let s = e.gc, n2 = s.length / 2, o2;
    if (n2 > t) {
      for (o2 = 0; o2 < n2; ++o2)
        delete e.data[s[o2]];
      s.splice(0, n2);
    }
  });
}
function ce(i4) {
  return i4.drawTicks ? i4.tickLength : 0;
}
function Mn(i4, t) {
  if (!i4.display)
    return 0;
  let e = j3(i4.font, t), s = X3(i4.padding);
  return (I3(i4.text) ? i4.text.length : 1) * e.lineHeight + s.height;
}
function Sr(i4, t) {
  return pt(i4, { scale: t, type: "scale" });
}
function wr(i4, t, e) {
  return pt(i4, { tick: e, index: t, type: "tick" });
}
function Pr(i4, t, e) {
  let s = Ae(i4);
  return (e && t !== "right" || !e && t === "right") && (s = vr(s)), s;
}
function Dr(i4, t, e, s) {
  let { top: n2, left: o2, bottom: a2, right: r, chart: l2 } = i4, { chartArea: c2, scales: h3 } = l2, d3 = 0, u, f2, g2, p3 = a2 - n2, m3 = r - o2;
  if (i4.isHorizontal()) {
    if (f2 = Y3(s, o2, r), O3(e)) {
      let b3 = Object.keys(e)[0], _3 = e[b3];
      g2 = h3[b3].getPixelForValue(_3) + p3 - t;
    } else
      e === "center" ? g2 = (c2.bottom + c2.top) / 2 + p3 - t : g2 = xn(i4, e, t);
    u = r - o2;
  } else {
    if (O3(e)) {
      let b3 = Object.keys(e)[0], _3 = e[b3];
      f2 = h3[b3].getPixelForValue(_3) - m3 + t;
    } else
      e === "center" ? f2 = (c2.left + c2.right) / 2 - m3 + t : f2 = xn(i4, e, t);
    g2 = Y3(s, a2, n2), d3 = e === "left" ? -N3 : N3;
  }
  return { titleX: f2, titleY: g2, maxWidth: u, rotation: d3 };
}
function Cr(i4, t, e) {
  let s = Bt(/* @__PURE__ */ Object.create(null), [e ? W3.get(e) : {}, W3.get(t), i4.defaults]);
  W3.set(t, s), i4.defaultRoutes && Or(t, i4.defaultRoutes), i4.descriptors && W3.describe(t, i4.descriptors);
}
function Or(i4, t) {
  Object.keys(t).forEach((e) => {
    let s = e.split("."), n2 = s.pop(), o2 = [i4].concat(s).join("."), a2 = t[e].split("."), r = a2.pop(), l2 = a2.join(".");
    W3.route(o2, n2, l2, r);
  });
}
function Ar(i4) {
  return "id" in i4 && "defaults" in i4;
}
function Lr(i4) {
  let t = {}, e = [], s = Object.keys(ht.plugins.items);
  for (let o2 = 0; o2 < s.length; o2++)
    e.push(ht.getPlugin(s[o2]));
  let n2 = i4.plugins || [];
  for (let o2 = 0; o2 < n2.length; o2++) {
    let a2 = n2[o2];
    e.indexOf(a2) === -1 && (e.push(a2), t[a2.id] = true);
  }
  return { plugins: e, localIds: t };
}
function Tr(i4, t) {
  return !t && i4 === false ? null : i4 === true ? {} : i4;
}
function Rr(i4, { plugins: t, localIds: e }, s, n2) {
  let o2 = [], a2 = i4.getContext();
  for (let r of t) {
    let l2 = r.id, c2 = Tr(s[l2], n2);
    c2 !== null && o2.push({ plugin: r, options: Er(i4.config, { plugin: r, local: e[l2] }, c2, a2) });
  }
  return o2;
}
function Er(i4, { plugin: t, local: e }, s, n2) {
  let o2 = i4.pluginScopeKeys(t), a2 = i4.getOptionScopes(s, o2);
  return e && t.defaults && a2.push(t.defaults), i4.createResolver(a2, n2, [""], { scriptable: false, indexable: false, allKeys: true });
}
function ts(i4, t) {
  let e = W3.datasets[i4] || {};
  return ((t.datasets || {})[i4] || {}).indexAxis || t.indexAxis || e.indexAxis || "x";
}
function Ir(i4, t) {
  let e = i4;
  return i4 === "_index_" ? e = t : i4 === "_value_" && (e = t === "x" ? "y" : "x"), e;
}
function zr(i4, t) {
  return i4 === t ? "_index_" : "_value_";
}
function kn(i4) {
  if (i4 === "x" || i4 === "y" || i4 === "r")
    return i4;
}
function Fr(i4) {
  if (i4 === "top" || i4 === "bottom")
    return "x";
  if (i4 === "left" || i4 === "right")
    return "y";
}
function es(i4, ...t) {
  if (kn(i4))
    return i4;
  for (let e of t) {
    let s = e.axis || Fr(e.position) || i4.length > 1 && kn(i4[0].toLowerCase());
    if (s)
      return s;
  }
  throw new Error(`Cannot determine type of '${i4}' axis. Please provide 'axis' or 'position' option.`);
}
function Sn(i4, t, e) {
  if (e[t + "AxisID"] === i4)
    return { axis: t };
}
function Br(i4, t) {
  if (t.data && t.data.datasets) {
    let e = t.data.datasets.filter((s) => s.xAxisID === i4 || s.yAxisID === i4);
    if (e.length)
      return Sn(i4, "x", e[0]) || Sn(i4, "y", e[0]);
  }
  return {};
}
function Vr(i4, t) {
  let e = xt[i4.type] || { scales: {} }, s = t.scales || {}, n2 = ts(i4.type, t), o2 = /* @__PURE__ */ Object.create(null);
  return Object.keys(s).forEach((a2) => {
    let r = s[a2];
    if (!O3(r))
      return console.error(`Invalid scale configuration for scale: ${a2}`);
    if (r._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${a2}`);
    let l2 = es(a2, r, Br(a2, i4), W3.scales[r.type]), c2 = zr(l2, n2), h3 = e.scales || {};
    o2[a2] = Wt(/* @__PURE__ */ Object.create(null), [{ axis: l2 }, r, h3[l2], h3[c2]]);
  }), i4.data.datasets.forEach((a2) => {
    let r = a2.type || i4.type, l2 = a2.indexAxis || ts(r, t), h3 = (xt[r] || {}).scales || {};
    Object.keys(h3).forEach((d3) => {
      let u = Ir(d3, l2), f2 = a2[u + "AxisID"] || u;
      o2[f2] = o2[f2] || /* @__PURE__ */ Object.create(null), Wt(o2[f2], [{ axis: u }, s[f2], h3[d3]]);
    });
  }), Object.keys(o2).forEach((a2) => {
    let r = o2[a2];
    Wt(r, [W3.scales[r.type], W3.scale]);
  }), o2;
}
function co(i4) {
  let t = i4.options || (i4.options = {});
  t.plugins = P3(t.plugins, {}), t.scales = Vr(i4, t);
}
function ho(i4) {
  return i4 = i4 || {}, i4.datasets = i4.datasets || [], i4.labels = i4.labels || [], i4;
}
function Wr(i4) {
  return i4 = i4 || {}, i4.data = ho(i4.data), co(i4), i4;
}
function We(i4, t) {
  let e = wn.get(i4);
  return e || (e = t(), wn.set(i4, e), uo.add(e)), e;
}
function Pn(i4, t, e) {
  let s = i4.get(t);
  s || (s = /* @__PURE__ */ new Map(), i4.set(t, s));
  let n2 = e.join(), o2 = s.get(n2);
  return o2 || (o2 = { resolver: Ee(t, e), subPrefixes: e.filter((r) => !r.toLowerCase().includes("hover")) }, s.set(n2, o2)), o2;
}
function Hr(i4, t) {
  let { isScriptable: e, isIndexable: s } = Mi(i4);
  for (let n2 of t) {
    let o2 = e(n2), a2 = s(n2), r = (a2 || o2) && i4[n2];
    if (o2 && (ut(r) || Nr(r)) || a2 && I3(r))
      return true;
  }
  return false;
}
function Dn(i4, t) {
  return i4 === "top" || i4 === "bottom" || $r.indexOf(i4) === -1 && t === "x";
}
function Cn(i4, t) {
  return function(e, s) {
    return e[i4] === s[i4] ? e[t] - s[t] : e[i4] - s[i4];
  };
}
function On(i4) {
  let t = i4.chart, e = t.options.animation;
  t.notifyPlugins("afterRender"), E2(e && e.onComplete, [i4], t);
}
function Ur(i4) {
  let t = i4.chart, e = t.options.animation;
  E2(e && e.onProgress, [i4], t);
}
function fo(i4) {
  return Ie() && typeof i4 == "string" ? i4 = document.getElementById(i4) : i4 && i4.length && (i4 = i4[0]), i4 && i4.canvas && (i4 = i4.canvas), i4;
}
function Yr(i4, t, e) {
  let s = Object.keys(i4);
  for (let n2 of s) {
    let o2 = +n2;
    if (o2 >= t) {
      let a2 = i4[n2];
      delete i4[n2], (e > 0 || o2 > t) && (i4[o2 + e] = a2);
    }
  }
}
function Xr(i4, t, e, s) {
  return !e || i4.type === "mouseout" ? null : s ? t : i4;
}
function Ne(i4, t, e) {
  return i4.options.clip ? i4[e] : t[e];
}
function Kr(i4, t) {
  let { xScale: e, yScale: s } = i4;
  return e && s ? { left: Ne(e, t, "left"), right: Ne(e, t, "right"), top: Ne(s, t, "top"), bottom: Ne(s, t, "bottom") } : t;
}
function Ln() {
  return T3(qt.instances, (i4) => i4._plugins.invalidate());
}
function qr(i4, t, e) {
  let { startAngle: s, pixelMargin: n2, x: o2, y: a2, outerRadius: r, innerRadius: l2 } = t, c2 = n2 / r;
  i4.beginPath(), i4.arc(o2, a2, r, s - c2, e + c2), l2 > n2 ? (c2 = n2 / l2, i4.arc(o2, a2, l2, e + c2, s - c2, true)) : i4.arc(o2, a2, n2, e + N3, s - N3), i4.closePath(), i4.clip();
}
function Gr(i4) {
  return Re(i4, ["outerStart", "outerEnd", "innerStart", "innerEnd"]);
}
function Jr(i4, t, e, s) {
  let n2 = Gr(i4.options.borderRadius), o2 = (e - t) / 2, a2 = Math.min(o2, s * t / 2), r = (l2) => {
    let c2 = (e - Math.min(o2, l2)) * s / 2;
    return $3(l2, 0, Math.min(o2, c2));
  };
  return { outerStart: r(n2.outerStart), outerEnd: r(n2.outerEnd), innerStart: $3(n2.innerStart, 0, a2), innerEnd: $3(n2.innerEnd, 0, a2) };
}
function Xt(i4, t, e, s) {
  return { x: e + i4 * Math.cos(t), y: s + i4 * Math.sin(t) };
}
function Je(i4, t, e, s, n2, o2) {
  let { x: a2, y: r, startAngle: l2, pixelMargin: c2, innerRadius: h3 } = t, d3 = Math.max(t.outerRadius + s + e - c2, 0), u = h3 > 0 ? h3 + s + e + c2 : 0, f2 = 0, g2 = n2 - l2;
  if (s) {
    let R2 = h3 > 0 ? h3 - s : 0, B3 = d3 > 0 ? d3 - s : 0, H3 = (R2 + B3) / 2, it = H3 !== 0 ? g2 * H3 / (H3 + s) : g2;
    f2 = (g2 - it) / 2;
  }
  let p3 = Math.max(1e-3, g2 * d3 - e / z2) / d3, m3 = (g2 - p3) / 2, b3 = l2 + m3 + f2, _3 = n2 - m3 - f2, { outerStart: v3, outerEnd: y3, innerStart: x2, innerEnd: M3 } = Jr(t, u, d3, _3 - b3), k3 = d3 - v3, S3 = d3 - y3, w2 = b3 + v3 / k3, D3 = _3 - y3 / S3, C3 = u + x2, A3 = u + M3, U3 = b3 + x2 / C3, tt = _3 - M3 / A3;
  if (i4.beginPath(), o2) {
    let R2 = (w2 + D3) / 2;
    if (i4.arc(a2, r, d3, w2, R2), i4.arc(a2, r, d3, R2, D3), y3 > 0) {
      let K3 = Xt(S3, D3, a2, r);
      i4.arc(K3.x, K3.y, y3, D3, _3 + N3);
    }
    let B3 = Xt(A3, _3, a2, r);
    if (i4.lineTo(B3.x, B3.y), M3 > 0) {
      let K3 = Xt(A3, tt, a2, r);
      i4.arc(K3.x, K3.y, M3, _3 + N3, tt + Math.PI);
    }
    let H3 = (_3 - M3 / u + (b3 + x2 / u)) / 2;
    if (i4.arc(a2, r, u, _3 - M3 / u, H3, true), i4.arc(a2, r, u, H3, b3 + x2 / u, true), x2 > 0) {
      let K3 = Xt(C3, U3, a2, r);
      i4.arc(K3.x, K3.y, x2, U3 + Math.PI, b3 - N3);
    }
    let it = Xt(k3, b3, a2, r);
    if (i4.lineTo(it.x, it.y), v3 > 0) {
      let K3 = Xt(k3, w2, a2, r);
      i4.arc(K3.x, K3.y, v3, b3 - N3, w2);
    }
  } else {
    i4.moveTo(a2, r);
    let R2 = Math.cos(w2) * d3 + a2, B3 = Math.sin(w2) * d3 + r;
    i4.lineTo(R2, B3);
    let H3 = Math.cos(D3) * d3 + a2, it = Math.sin(D3) * d3 + r;
    i4.lineTo(H3, it);
  }
  i4.closePath();
}
function Qr(i4, t, e, s, n2) {
  let { fullCircles: o2, startAngle: a2, circumference: r } = t, l2 = t.endAngle;
  if (o2) {
    Je(i4, t, e, s, l2, n2);
    for (let c2 = 0; c2 < o2; ++c2)
      i4.fill();
    isNaN(r) || (l2 = a2 + (r % F3 || F3));
  }
  return Je(i4, t, e, s, l2, n2), i4.fill(), l2;
}
function Zr(i4, t, e, s, n2) {
  let { fullCircles: o2, startAngle: a2, circumference: r, options: l2 } = t, { borderWidth: c2, borderJoinStyle: h3, borderDash: d3, borderDashOffset: u } = l2, f2 = l2.borderAlign === "inner";
  if (!c2)
    return;
  i4.setLineDash(d3 || []), i4.lineDashOffset = u, f2 ? (i4.lineWidth = c2 * 2, i4.lineJoin = h3 || "round") : (i4.lineWidth = c2, i4.lineJoin = h3 || "bevel");
  let g2 = t.endAngle;
  if (o2) {
    Je(i4, t, e, s, g2, n2);
    for (let p3 = 0; p3 < o2; ++p3)
      i4.stroke();
    isNaN(r) || (g2 = a2 + (r % F3 || F3));
  }
  f2 && qr(i4, t, g2), o2 || (Je(i4, t, e, s, g2, n2), i4.stroke());
}
function go(i4, t, e = t) {
  i4.lineCap = P3(e.borderCapStyle, t.borderCapStyle), i4.setLineDash(P3(e.borderDash, t.borderDash)), i4.lineDashOffset = P3(e.borderDashOffset, t.borderDashOffset), i4.lineJoin = P3(e.borderJoinStyle, t.borderJoinStyle), i4.lineWidth = P3(e.borderWidth, t.borderWidth), i4.strokeStyle = P3(e.borderColor, t.borderColor);
}
function tl(i4, t, e) {
  i4.lineTo(e.x, e.y);
}
function el(i4) {
  return i4.stepped ? Hs : i4.tension || i4.cubicInterpolationMode === "monotone" ? js : tl;
}
function po(i4, t, e = {}) {
  let s = i4.length, { start: n2 = 0, end: o2 = s - 1 } = e, { start: a2, end: r } = t, l2 = Math.max(n2, a2), c2 = Math.min(o2, r), h3 = n2 < a2 && o2 < a2 || n2 > r && o2 > r;
  return { count: s, start: l2, loop: t.loop, ilen: c2 < l2 && !h3 ? s + c2 - l2 : c2 - l2 };
}
function il(i4, t, e, s) {
  let { points: n2, options: o2 } = t, { count: a2, start: r, loop: l2, ilen: c2 } = po(n2, e, s), h3 = el(o2), { move: d3 = true, reverse: u } = s || {}, f2, g2, p3;
  for (f2 = 0; f2 <= c2; ++f2)
    g2 = n2[(r + (u ? c2 - f2 : f2)) % a2], !g2.skip && (d3 ? (i4.moveTo(g2.x, g2.y), d3 = false) : h3(i4, p3, g2, u, o2.stepped), p3 = g2);
  return l2 && (g2 = n2[(r + (u ? c2 : 0)) % a2], h3(i4, p3, g2, u, o2.stepped)), !!l2;
}
function sl(i4, t, e, s) {
  let n2 = t.points, { count: o2, start: a2, ilen: r } = po(n2, e, s), { move: l2 = true, reverse: c2 } = s || {}, h3 = 0, d3 = 0, u, f2, g2, p3, m3, b3, _3 = (y3) => (a2 + (c2 ? r - y3 : y3)) % o2, v3 = () => {
    p3 !== m3 && (i4.lineTo(h3, m3), i4.lineTo(h3, p3), i4.lineTo(h3, b3));
  };
  for (l2 && (f2 = n2[_3(0)], i4.moveTo(f2.x, f2.y)), u = 0; u <= r; ++u) {
    if (f2 = n2[_3(u)], f2.skip)
      continue;
    let y3 = f2.x, x2 = f2.y, M3 = y3 | 0;
    M3 === g2 ? (x2 < p3 ? p3 = x2 : x2 > m3 && (m3 = x2), h3 = (d3 * h3 + y3) / ++d3) : (v3(), i4.lineTo(y3, x2), g2 = M3, d3 = 0, p3 = m3 = x2), b3 = x2;
  }
  v3();
}
function ns(i4) {
  let t = i4.options, e = t.borderDash && t.borderDash.length;
  return !i4._decimated && !i4._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !e ? sl : il;
}
function nl(i4) {
  return i4.stepped ? Qs : i4.tension || i4.cubicInterpolationMode === "monotone" ? Zs : _t;
}
function ol(i4, t, e, s) {
  let n2 = t._path;
  n2 || (n2 = t._path = new Path2D(), t.path(n2, e, s) && n2.closePath()), go(i4, t.options), i4.stroke(n2);
}
function al(i4, t, e, s) {
  let { segments: n2, options: o2 } = t, a2 = ns(t);
  for (let r of n2)
    go(i4, o2, r.style), i4.beginPath(), a2(i4, t, r, { start: e, end: e + s - 1 }) && i4.closePath(), i4.stroke();
}
function ll(i4, t, e, s) {
  rl && !t.options.segment ? ol(i4, t, e, s) : al(i4, t, e, s);
}
function Tn(i4, t, e, s) {
  let n2 = i4.options, { [e]: o2 } = i4.getProps([e], s);
  return Math.abs(t - o2) < n2.radius + n2.hitRadius;
}
function mo(i4, t) {
  let { x: e, y: s, base: n2, width: o2, height: a2 } = i4.getProps(["x", "y", "base", "width", "height"], t), r, l2, c2, h3, d3;
  return i4.horizontal ? (d3 = a2 / 2, r = Math.min(e, n2), l2 = Math.max(e, n2), c2 = s - d3, h3 = s + d3) : (d3 = o2 / 2, r = e - d3, l2 = e + d3, c2 = Math.min(s, n2), h3 = Math.max(s, n2)), { left: r, top: c2, right: l2, bottom: h3 };
}
function St(i4, t, e, s) {
  return i4 ? 0 : $3(t, e, s);
}
function cl(i4, t, e) {
  let s = i4.options.borderWidth, n2 = i4.borderSkipped, o2 = vi(s);
  return { t: St(n2.top, o2.top, 0, e), r: St(n2.right, o2.right, 0, t), b: St(n2.bottom, o2.bottom, 0, e), l: St(n2.left, o2.left, 0, t) };
}
function hl(i4, t, e) {
  let { enableBorderRadius: s } = i4.getProps(["enableBorderRadius"]), n2 = i4.options.borderRadius, o2 = Mt(n2), a2 = Math.min(t, e), r = i4.borderSkipped, l2 = s || O3(n2);
  return { topLeft: St(!l2 || r.top || r.left, o2.topLeft, 0, a2), topRight: St(!l2 || r.top || r.right, o2.topRight, 0, a2), bottomLeft: St(!l2 || r.bottom || r.left, o2.bottomLeft, 0, a2), bottomRight: St(!l2 || r.bottom || r.right, o2.bottomRight, 0, a2) };
}
function dl(i4) {
  let t = mo(i4), e = t.right - t.left, s = t.bottom - t.top, n2 = cl(i4, e / 2, s / 2), o2 = hl(i4, e / 2, s / 2);
  return { outer: { x: t.left, y: t.top, w: e, h: s, radius: o2 }, inner: { x: t.left + n2.l, y: t.top + n2.t, w: e - n2.l - n2.r, h: s - n2.t - n2.b, radius: { topLeft: Math.max(0, o2.topLeft - Math.max(n2.t, n2.l)), topRight: Math.max(0, o2.topRight - Math.max(n2.t, n2.r)), bottomLeft: Math.max(0, o2.bottomLeft - Math.max(n2.b, n2.l)), bottomRight: Math.max(0, o2.bottomRight - Math.max(n2.b, n2.r)) } } };
}
function Bi(i4, t, e, s) {
  let n2 = t === null, o2 = e === null, r = i4 && !(n2 && o2) && mo(i4, s);
  return r && (n2 || lt(t, r.left, r.right)) && (o2 || lt(e, r.top, r.bottom));
}
function ul(i4) {
  return i4.topLeft || i4.topRight || i4.bottomLeft || i4.bottomRight;
}
function fl(i4, t) {
  i4.rect(t.x, t.y, t.w, t.h);
}
function Vi(i4, t, e = {}) {
  let s = i4.x !== e.x ? -t : 0, n2 = i4.y !== e.y ? -t : 0, o2 = (i4.x + i4.w !== e.x + e.w ? t : 0) - s, a2 = (i4.y + i4.h !== e.y + e.h ? t : 0) - n2;
  return { x: i4.x + s, y: i4.y + n2, w: i4.w + o2, h: i4.h + a2, radius: i4.radius };
}
function bo(i4) {
  return rs[i4 % rs.length];
}
function _o(i4) {
  return Rn[i4 % Rn.length];
}
function pl(i4, t) {
  return i4.borderColor = bo(t), i4.backgroundColor = _o(t), ++t;
}
function ml(i4, t) {
  return i4.backgroundColor = i4.data.map(() => bo(t++)), t;
}
function bl(i4, t) {
  return i4.backgroundColor = i4.data.map(() => _o(t++)), t;
}
function _l(i4) {
  let t = 0;
  return (e, s) => {
    let n2 = i4.getDatasetMeta(s).controller;
    n2 instanceof fe ? t = ml(e, t) : n2 instanceof Ke ? t = bl(e, t) : n2 && (t = pl(e, t));
  };
}
function En(i4) {
  let t;
  for (t in i4)
    if (i4[t].borderColor || i4[t].backgroundColor)
      return true;
  return false;
}
function xl(i4) {
  return i4 && (i4.borderColor || i4.backgroundColor);
}
function vl(i4, t, e, s, n2) {
  let o2 = n2.samples || s;
  if (o2 >= e)
    return i4.slice(t, t + e);
  let a2 = [], r = (e - 2) / (o2 - 2), l2 = 0, c2 = t + e - 1, h3 = t, d3, u, f2, g2, p3;
  for (a2[l2++] = i4[h3], d3 = 0; d3 < o2 - 2; d3++) {
    let m3 = 0, b3 = 0, _3, v3 = Math.floor((d3 + 1) * r) + 1 + t, y3 = Math.min(Math.floor((d3 + 2) * r) + 1, e) + t, x2 = y3 - v3;
    for (_3 = v3; _3 < y3; _3++)
      m3 += i4[_3].x, b3 += i4[_3].y;
    m3 /= x2, b3 /= x2;
    let M3 = Math.floor(d3 * r) + 1 + t, k3 = Math.min(Math.floor((d3 + 1) * r) + 1, e) + t, { x: S3, y: w2 } = i4[h3];
    for (f2 = g2 = -1, _3 = M3; _3 < k3; _3++)
      g2 = 0.5 * Math.abs((S3 - m3) * (i4[_3].y - w2) - (S3 - i4[_3].x) * (b3 - w2)), g2 > f2 && (f2 = g2, u = i4[_3], p3 = _3);
    a2[l2++] = u, h3 = p3;
  }
  return a2[l2++] = i4[c2], a2;
}
function Ml(i4, t, e, s) {
  let n2 = 0, o2 = 0, a2, r, l2, c2, h3, d3, u, f2, g2, p3, m3 = [], b3 = t + e - 1, _3 = i4[t].x, y3 = i4[b3].x - _3;
  for (a2 = t; a2 < t + e; ++a2) {
    r = i4[a2], l2 = (r.x - _3) / y3 * s, c2 = r.y;
    let x2 = l2 | 0;
    if (x2 === h3)
      c2 < g2 ? (g2 = c2, d3 = a2) : c2 > p3 && (p3 = c2, u = a2), n2 = (o2 * n2 + r.x) / ++o2;
    else {
      let M3 = a2 - 1;
      if (!L3(d3) && !L3(u)) {
        let k3 = Math.min(d3, u), S3 = Math.max(d3, u);
        k3 !== f2 && k3 !== M3 && m3.push({ ...i4[k3], x: n2 }), S3 !== f2 && S3 !== M3 && m3.push({ ...i4[S3], x: n2 });
      }
      a2 > 0 && M3 !== f2 && m3.push(i4[M3]), m3.push(r), h3 = x2, o2 = 0, g2 = p3 = c2, d3 = u = f2 = a2;
    }
  }
  return m3;
}
function xo(i4) {
  if (i4._decimated) {
    let t = i4._data;
    delete i4._decimated, delete i4._data, Object.defineProperty(i4, "data", { configurable: true, enumerable: true, writable: true, value: t });
  }
}
function In(i4) {
  i4.data.datasets.forEach((t) => {
    xo(t);
  });
}
function kl(i4, t) {
  let e = t.length, s = 0, n2, { iScale: o2 } = i4, { min: a2, max: r, minDefined: l2, maxDefined: c2 } = o2.getUserBounds();
  return l2 && (s = $3(ot(t, o2.axis, a2).lo, 0, e - 1)), c2 ? n2 = $3(ot(t, o2.axis, r).hi + 1, s, e) - s : n2 = e - s, { start: s, count: n2 };
}
function wl(i4, t, e) {
  let s = i4.segments, n2 = i4.points, o2 = t.points, a2 = [];
  for (let r of s) {
    let { start: l2, end: c2 } = r;
    c2 = ps(l2, c2, n2);
    let h3 = ls(e, n2[l2], n2[c2], r.loop);
    if (!t.segments) {
      a2.push({ source: r, target: h3, start: n2[l2], end: n2[c2] });
      continue;
    }
    let d3 = Li(t, h3);
    for (let u of d3) {
      let f2 = ls(e, o2[u.start], o2[u.end], u.loop), g2 = Ai(r, n2, f2);
      for (let p3 of g2)
        a2.push({ source: p3, target: u, start: { [e]: zn(h3, f2, "start", Math.max) }, end: { [e]: zn(h3, f2, "end", Math.min) } });
    }
  }
  return a2;
}
function ls(i4, t, e, s) {
  if (s)
    return;
  let n2 = t[i4], o2 = e[i4];
  return i4 === "angle" && (n2 = G3(n2), o2 = G3(o2)), { property: i4, start: n2, end: o2 };
}
function Pl(i4, t) {
  let { x: e = null, y: s = null } = i4 || {}, n2 = t.points, o2 = [];
  return t.segments.forEach(({ start: a2, end: r }) => {
    r = ps(a2, r, n2);
    let l2 = n2[a2], c2 = n2[r];
    s !== null ? (o2.push({ x: l2.x, y: s }), o2.push({ x: c2.x, y: s })) : e !== null && (o2.push({ x: e, y: l2.y }), o2.push({ x: e, y: c2.y }));
  }), o2;
}
function ps(i4, t, e) {
  for (; t > i4; t--) {
    let s = e[t];
    if (!isNaN(s.x) && !isNaN(s.y))
      break;
  }
  return t;
}
function zn(i4, t, e, s) {
  return i4 && t ? s(i4[e], t[e]) : i4 ? i4[e] : t ? t[e] : 0;
}
function yo(i4, t) {
  let e = [], s = false;
  return I3(i4) ? (s = true, e = i4) : e = Pl(i4, t), e.length ? new Gt({ points: e, options: { tension: 0 }, _loop: s, _fullLoop: s }) : null;
}
function Fn(i4) {
  return i4 && i4.fill !== false;
}
function Dl(i4, t, e) {
  let n2 = i4[t].fill, o2 = [t], a2;
  if (!e)
    return n2;
  for (; n2 !== false && o2.indexOf(n2) === -1; ) {
    if (!V3(n2))
      return n2;
    if (a2 = i4[n2], !a2)
      return false;
    if (a2.visible)
      return n2;
    o2.push(n2), n2 = a2.fill;
  }
  return false;
}
function Cl(i4, t, e) {
  let s = Tl(i4);
  if (O3(s))
    return isNaN(s.value) ? false : s;
  let n2 = parseFloat(s);
  return V3(n2) && Math.floor(n2) === n2 ? Ol(s[0], t, n2, e) : ["origin", "start", "end", "stack", "shape"].indexOf(s) >= 0 && s;
}
function Ol(i4, t, e, s) {
  return (i4 === "-" || i4 === "+") && (e = t + e), e === t || e < 0 || e >= s ? false : e;
}
function Al(i4, t) {
  let e = null;
  return i4 === "start" ? e = t.bottom : i4 === "end" ? e = t.top : O3(i4) ? e = t.getPixelForValue(i4.value) : t.getBasePixel && (e = t.getBasePixel()), e;
}
function Ll(i4, t, e) {
  let s;
  return i4 === "start" ? s = e : i4 === "end" ? s = t.options.reverse ? t.min : t.max : O3(i4) ? s = i4.value : s = t.getBaseValue(), s;
}
function Tl(i4) {
  let t = i4.options, e = t.fill, s = P3(e && e.target, e);
  return s === void 0 && (s = !!t.backgroundColor), s === false || s === null ? false : s === true ? "origin" : s;
}
function Rl(i4) {
  let { scale: t, index: e, line: s } = i4, n2 = [], o2 = s.segments, a2 = s.points, r = El(t, e);
  r.push(yo({ x: null, y: t.bottom }, s));
  for (let l2 = 0; l2 < o2.length; l2++) {
    let c2 = o2[l2];
    for (let h3 = c2.start; h3 <= c2.end; h3++)
      Il(n2, a2[h3], r);
  }
  return new Gt({ points: n2, options: {} });
}
function El(i4, t) {
  let e = [], s = i4.getMatchingVisibleMetas("line");
  for (let n2 = 0; n2 < s.length; n2++) {
    let o2 = s[n2];
    if (o2.index === t)
      break;
    o2.hidden || e.unshift(o2.dataset);
  }
  return e;
}
function Il(i4, t, e) {
  let s = [];
  for (let n2 = 0; n2 < e.length; n2++) {
    let o2 = e[n2], { first: a2, last: r, point: l2 } = zl(o2, t, "x");
    if (!(!l2 || a2 && r)) {
      if (a2)
        s.unshift(l2);
      else if (i4.push(l2), !r)
        break;
    }
  }
  i4.push(...s);
}
function zl(i4, t, e) {
  let s = i4.interpolate(t, e);
  if (!s)
    return {};
  let n2 = s[e], o2 = i4.segments, a2 = i4.points, r = false, l2 = false;
  for (let c2 = 0; c2 < o2.length; c2++) {
    let h3 = o2[c2], d3 = a2[h3.start][e], u = a2[h3.end][e];
    if (lt(n2, d3, u)) {
      r = n2 === d3, l2 = n2 === u;
      break;
    }
  }
  return { first: r, last: l2, point: s };
}
function Fl(i4) {
  let { chart: t, fill: e, line: s } = i4;
  if (V3(e))
    return Bl(t, e);
  if (e === "stack")
    return Rl(i4);
  if (e === "shape")
    return true;
  let n2 = Vl(i4);
  return n2 instanceof Qe ? n2 : yo(n2, s);
}
function Bl(i4, t) {
  let e = i4.getDatasetMeta(t);
  return e && i4.isDatasetVisible(t) ? e.dataset : null;
}
function Vl(i4) {
  return (i4.scale || {}).getPointPositionForValue ? Nl(i4) : Wl(i4);
}
function Wl(i4) {
  let { scale: t = {}, fill: e } = i4, s = Al(e, t);
  if (V3(s)) {
    let n2 = t.isHorizontal();
    return { x: n2 ? s : null, y: n2 ? null : s };
  }
  return null;
}
function Nl(i4) {
  let { scale: t, fill: e } = i4, s = t.options, n2 = t.getLabels().length, o2 = s.reverse ? t.max : t.min, a2 = Ll(e, t, o2), r = [];
  if (s.grid.circular) {
    let l2 = t.getPointPositionForValue(0, o2);
    return new Qe({ x: l2.x, y: l2.y, radius: t.getDistanceFromCenterForValue(a2) });
  }
  for (let l2 = 0; l2 < n2; ++l2)
    r.push(t.getPointPositionForValue(l2, a2));
  return r;
}
function Wi(i4, t, e) {
  let s = Fl(t), { line: n2, scale: o2, axis: a2 } = t, r = n2.options, l2 = r.fill, c2 = r.backgroundColor, { above: h3 = c2, below: d3 = c2 } = l2 || {};
  s && n2.points.length && (ne2(i4, e), Hl(i4, { line: n2, target: s, above: h3, below: d3, area: e, scale: o2, axis: a2 }), oe(i4));
}
function Hl(i4, t) {
  let { line: e, target: s, above: n2, below: o2, area: a2, scale: r } = t, l2 = e._loop ? "angle" : t.axis;
  i4.save(), l2 === "x" && o2 !== n2 && (Bn(i4, s, a2.top), Vn(i4, { line: e, target: s, color: n2, scale: r, property: l2 }), i4.restore(), i4.save(), Bn(i4, s, a2.bottom)), Vn(i4, { line: e, target: s, color: o2, scale: r, property: l2 }), i4.restore();
}
function Bn(i4, t, e) {
  let { segments: s, points: n2 } = t, o2 = true, a2 = false;
  i4.beginPath();
  for (let r of s) {
    let { start: l2, end: c2 } = r, h3 = n2[l2], d3 = n2[ps(l2, c2, n2)];
    o2 ? (i4.moveTo(h3.x, h3.y), o2 = false) : (i4.lineTo(h3.x, e), i4.lineTo(h3.x, h3.y)), a2 = !!t.pathSegment(i4, r, { move: a2 }), a2 ? i4.closePath() : i4.lineTo(d3.x, e);
  }
  i4.lineTo(t.first().x, e), i4.closePath(), i4.clip();
}
function Vn(i4, t) {
  let { line: e, target: s, property: n2, color: o2, scale: a2 } = t, r = wl(e, s, n2);
  for (let { source: l2, target: c2, start: h3, end: d3 } of r) {
    let { style: { backgroundColor: u = o2 } = {} } = l2, f2 = s !== true;
    i4.save(), i4.fillStyle = u, jl(i4, a2, f2 && ls(n2, h3, d3)), i4.beginPath();
    let g2 = !!e.pathSegment(i4, l2), p3;
    if (f2) {
      g2 ? i4.closePath() : Wn(i4, s, d3, n2);
      let m3 = !!s.pathSegment(i4, c2, { move: g2, reverse: true });
      p3 = g2 && m3, p3 || Wn(i4, s, h3, n2);
    }
    i4.closePath(), i4.fill(p3 ? "evenodd" : "nonzero"), i4.restore();
  }
}
function jl(i4, t, e) {
  let { top: s, bottom: n2 } = t.chart.chartArea, { property: o2, start: a2, end: r } = e || {};
  o2 === "x" && (i4.beginPath(), i4.rect(a2, s, r - a2, n2 - s), i4.clip());
}
function Wn(i4, t, e, s) {
  let n2 = t.interpolate(e, s);
  n2 && i4.lineTo(n2.x, n2.y);
}
function Yl(i4, t, e, s, n2) {
  let o2 = Xl(s, i4, t, e), a2 = Kl(n2, s, t.lineHeight);
  return { itemWidth: o2, itemHeight: a2 };
}
function Xl(i4, t, e, s) {
  let n2 = i4.text;
  return n2 && typeof n2 != "string" && (n2 = n2.reduce((o2, a2) => o2.length > a2.length ? o2 : a2)), t + e.size / 2 + s.measureText(n2).width;
}
function Kl(i4, t, e) {
  let s = i4;
  return typeof t.text != "string" && (s = vo(t, e)), s;
}
function vo(i4, t) {
  let e = i4.text ? i4.text.length : 0;
  return t * e;
}
function ql(i4, t) {
  return !!((i4 === "mousemove" || i4 === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (i4 === "click" || i4 === "mouseup"));
}
function Jl(i4, t) {
  let e = new pe({ ctx: i4.ctx, options: t, chart: i4 });
  q3.configure(i4, e, t), q3.addBox(i4, e), i4.titleBlock = e;
}
function ct(i4, t) {
  return t && (I3(t) ? Array.prototype.push.apply(i4, t) : i4.push(t)), i4;
}
function bt(i4) {
  return (typeof i4 == "string" || i4 instanceof String) && i4.indexOf(`
`) > -1 ? i4.split(`
`) : i4;
}
function tc(i4, t) {
  let { element: e, datasetIndex: s, index: n2 } = t, o2 = i4.getDatasetMeta(s).controller, { label: a2, value: r } = o2.getLabelAndValue(n2);
  return { chart: i4, label: a2, parsed: o2.getParsed(n2), raw: i4.data.datasets[s].data[n2], formattedValue: r, dataset: o2.getDataset(), dataIndex: n2, datasetIndex: s, element: e };
}
function Hn(i4, t) {
  let e = i4.chart.ctx, { body: s, footer: n2, title: o2 } = i4, { boxWidth: a2, boxHeight: r } = t, l2 = j3(t.bodyFont), c2 = j3(t.titleFont), h3 = j3(t.footerFont), d3 = o2.length, u = n2.length, f2 = s.length, g2 = X3(t.padding), p3 = g2.height, m3 = 0, b3 = s.reduce((y3, x2) => y3 + x2.before.length + x2.lines.length + x2.after.length, 0);
  if (b3 += i4.beforeBody.length + i4.afterBody.length, d3 && (p3 += d3 * c2.lineHeight + (d3 - 1) * t.titleSpacing + t.titleMarginBottom), b3) {
    let y3 = t.displayColors ? Math.max(r, l2.lineHeight) : l2.lineHeight;
    p3 += f2 * y3 + (b3 - f2) * l2.lineHeight + (b3 - 1) * t.bodySpacing;
  }
  u && (p3 += t.footerMarginTop + u * h3.lineHeight + (u - 1) * t.footerSpacing);
  let _3 = 0, v3 = function(y3) {
    m3 = Math.max(m3, e.measureText(y3).width + _3);
  };
  return e.save(), e.font = c2.string, T3(i4.title, v3), e.font = l2.string, T3(i4.beforeBody.concat(i4.afterBody), v3), _3 = t.displayColors ? a2 + 2 + t.boxPadding : 0, T3(s, (y3) => {
    T3(y3.before, v3), T3(y3.lines, v3), T3(y3.after, v3);
  }), _3 = 0, e.font = h3.string, T3(i4.footer, v3), e.restore(), m3 += g2.width, { width: m3, height: p3 };
}
function ec(i4, t) {
  let { y: e, height: s } = t;
  return e < s / 2 ? "top" : e > i4.height - s / 2 ? "bottom" : "center";
}
function ic(i4, t, e, s) {
  let { x: n2, width: o2 } = s, a2 = e.caretSize + e.caretPadding;
  if (i4 === "left" && n2 + o2 + a2 > t.width || i4 === "right" && n2 - o2 - a2 < 0)
    return true;
}
function sc(i4, t, e, s) {
  let { x: n2, width: o2 } = e, { width: a2, chartArea: { left: r, right: l2 } } = i4, c2 = "center";
  return s === "center" ? c2 = n2 <= (r + l2) / 2 ? "left" : "right" : n2 <= o2 / 2 ? c2 = "left" : n2 >= a2 - o2 / 2 && (c2 = "right"), ic(c2, i4, t, e) && (c2 = "center"), c2;
}
function jn(i4, t, e) {
  let s = e.yAlign || t.yAlign || ec(i4, e);
  return { xAlign: e.xAlign || t.xAlign || sc(i4, t, e, s), yAlign: s };
}
function nc(i4, t) {
  let { x: e, width: s } = i4;
  return t === "right" ? e -= s : t === "center" && (e -= s / 2), e;
}
function oc(i4, t, e) {
  let { y: s, height: n2 } = i4;
  return t === "top" ? s += e : t === "bottom" ? s -= n2 + e : s -= n2 / 2, s;
}
function $n(i4, t, e, s) {
  let { caretSize: n2, caretPadding: o2, cornerRadius: a2 } = i4, { xAlign: r, yAlign: l2 } = e, c2 = n2 + o2, { topLeft: h3, topRight: d3, bottomLeft: u, bottomRight: f2 } = Mt(a2), g2 = nc(t, r), p3 = oc(t, l2, c2);
  return l2 === "center" ? r === "left" ? g2 += c2 : r === "right" && (g2 -= c2) : r === "left" ? g2 -= Math.max(h3, u) + n2 : r === "right" && (g2 += Math.max(d3, f2) + n2), { x: $3(g2, 0, s.width - t.width), y: $3(p3, 0, s.height - t.height) };
}
function je(i4, t, e) {
  let s = X3(e.padding);
  return t === "center" ? i4.x + i4.width / 2 : t === "right" ? i4.x + i4.width - s.right : i4.x + s.left;
}
function Un(i4) {
  return ct([], bt(i4));
}
function ac(i4, t, e) {
  return pt(i4, { tooltip: t, tooltipItems: e, type: "tooltip" });
}
function Yn(i4, t) {
  let e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? i4.override(e) : i4;
}
function Q3(i4, t, e, s) {
  let n2 = i4[t].call(e, s);
  return typeof n2 > "u" ? Mo[t].call(e, s) : n2;
}
function hc(i4, t, e, s) {
  let n2 = i4.indexOf(t);
  if (n2 === -1)
    return cc(i4, t, e, s);
  let o2 = i4.lastIndexOf(t);
  return n2 !== o2 ? e : n2;
}
function Xn(i4) {
  let t = this.getLabels();
  return i4 >= 0 && i4 < t.length ? t[i4] : i4;
}
function uc(i4, t) {
  let e = [], { bounds: n2, step: o2, min: a2, max: r, precision: l2, count: c2, maxTicks: h3, maxDigits: d3, includeBounds: u } = i4, f2 = o2 || 1, g2 = h3 - 1, { min: p3, max: m3 } = t, b3 = !L3(a2), _3 = !L3(r), v3 = !L3(c2), y3 = (m3 - p3) / (d3 + 1), x2 = ri((m3 - p3) / g2 / f2) * f2, M3, k3, S3, w2;
  if (x2 < 1e-14 && !b3 && !_3)
    return [{ value: p3 }, { value: m3 }];
  w2 = Math.ceil(m3 / x2) - Math.floor(p3 / x2), w2 > g2 && (x2 = ri(w2 * x2 / g2 / f2) * f2), L3(l2) || (M3 = Math.pow(10, l2), x2 = Math.ceil(x2 * M3) / M3), n2 === "ticks" ? (k3 = Math.floor(p3 / x2) * x2, S3 = Math.ceil(m3 / x2) * x2) : (k3 = p3, S3 = m3), b3 && _3 && o2 && Ts((r - a2) / o2, x2 / 1e3) ? (w2 = Math.round(Math.min((r - a2) / x2, h3)), x2 = (r - a2) / w2, k3 = a2, S3 = r) : v3 ? (k3 = b3 ? a2 : k3, S3 = _3 ? r : S3, w2 = c2 - 1, x2 = (S3 - k3) / w2) : (w2 = (S3 - k3) / x2, Ht(w2, Math.round(w2), x2 / 1e3) ? w2 = Math.round(w2) : w2 = Math.ceil(w2));
  let D3 = Math.max(ci(x2), ci(k3));
  M3 = Math.pow(10, L3(l2) ? D3 : l2), k3 = Math.round(k3 * M3) / M3, S3 = Math.round(S3 * M3) / M3;
  let C3 = 0;
  for (b3 && (u && k3 !== a2 ? (e.push({ value: a2 }), k3 < a2 && C3++, Ht(Math.round((k3 + C3 * x2) * M3) / M3, a2, Kn(a2, y3, i4)) && C3++) : k3 < a2 && C3++); C3 < w2; ++C3) {
    let A3 = Math.round((k3 + C3 * x2) * M3) / M3;
    if (_3 && A3 > r)
      break;
    e.push({ value: A3 });
  }
  return _3 && u && S3 !== r ? e.length && Ht(e[e.length - 1].value, r, Kn(r, y3, i4)) ? e[e.length - 1].value = r : e.push({ value: r }) : (!_3 || S3 === r) && e.push({ value: S3 }), e;
}
function Kn(i4, t, { horizontal: e, minRotation: s }) {
  let n2 = et(s), o2 = (e ? Math.sin(n2) : Math.cos(n2)) || 1e-3, a2 = 0.75 * t * ("" + i4).length;
  return Math.min(t / o2, a2);
}
function qn(i4) {
  return i4 / Math.pow(10, me(i4)) === 1;
}
function Gn(i4, t, e) {
  let s = Math.pow(10, e), n2 = Math.floor(i4 / s);
  return Math.ceil(t / s) - n2;
}
function fc(i4, t) {
  let e = t - i4, s = me(e);
  for (; Gn(i4, t, s) > 10; )
    s++;
  for (; Gn(i4, t, s) < 10; )
    s--;
  return Math.min(s, me(i4));
}
function gc(i4, { min: t, max: e }) {
  t = J3(i4.min, t);
  let s = [], n2 = me(t), o2 = fc(t, e), a2 = o2 < 0 ? Math.pow(10, Math.abs(o2)) : 1, r = Math.pow(10, o2), l2 = n2 > o2 ? Math.pow(10, n2) : 0, c2 = Math.round((t - l2) * a2) / a2, h3 = Math.floor((t - l2) / r / 10) * r * 10, d3 = Math.floor((c2 - h3) / Math.pow(10, o2)), u = J3(i4.min, Math.round((l2 + h3 + d3 * Math.pow(10, o2)) * a2) / a2);
  for (; u < e; )
    s.push({ value: u, major: qn(u), significand: d3 }), d3 >= 10 ? d3 = d3 < 15 ? 15 : 20 : d3++, d3 >= 20 && (o2++, d3 = 2, a2 = o2 >= 0 ? 1 : a2), u = Math.round((l2 + h3 + d3 * Math.pow(10, o2)) * a2) / a2;
  let f2 = J3(i4.max, u);
  return s.push({ value: f2, major: qn(f2), significand: d3 }), s;
}
function us(i4) {
  let t = i4.ticks;
  if (t.display && i4.display) {
    let e = X3(t.backdropPadding);
    return P3(t.font && t.font.size, W3.font.size) + e.height;
  }
  return 0;
}
function pc(i4, t, e) {
  return e = I3(e) ? e : [e], { w: Ns(i4, t.string, e), h: e.length * t.lineHeight };
}
function Jn(i4, t, e, s, n2) {
  return i4 === s || i4 === n2 ? { start: t - e / 2, end: t + e / 2 } : i4 < s || i4 > n2 ? { start: t - e, end: t } : { start: t, end: t + e };
}
function mc(i4) {
  let t = { l: i4.left + i4._padding.left, r: i4.right - i4._padding.right, t: i4.top + i4._padding.top, b: i4.bottom - i4._padding.bottom }, e = Object.assign({}, t), s = [], n2 = [], o2 = i4._pointLabels.length, a2 = i4.options.pointLabels, r = a2.centerPointLabels ? z2 / o2 : 0;
  for (let l2 = 0; l2 < o2; l2++) {
    let c2 = a2.setContext(i4.getPointLabelContext(l2));
    n2[l2] = c2.padding;
    let h3 = i4.getPointPosition(l2, i4.drawingArea + n2[l2], r), d3 = j3(c2.font), u = pc(i4.ctx, d3, i4._pointLabels[l2]);
    s[l2] = u;
    let f2 = G3(i4.getIndexAngle(l2) + r), g2 = Math.round(Ce(f2)), p3 = Jn(g2, h3.x, u.w, 0, 180), m3 = Jn(g2, h3.y, u.h, 90, 270);
    bc(e, t, f2, p3, m3);
  }
  i4.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b), i4._pointLabelItems = yc(i4, s, n2);
}
function bc(i4, t, e, s, n2) {
  let o2 = Math.abs(Math.sin(e)), a2 = Math.abs(Math.cos(e)), r = 0, l2 = 0;
  s.start < t.l ? (r = (t.l - s.start) / o2, i4.l = Math.min(i4.l, t.l - r)) : s.end > t.r && (r = (s.end - t.r) / o2, i4.r = Math.max(i4.r, t.r + r)), n2.start < t.t ? (l2 = (t.t - n2.start) / a2, i4.t = Math.min(i4.t, t.t - l2)) : n2.end > t.b && (l2 = (n2.end - t.b) / a2, i4.b = Math.max(i4.b, t.b + l2));
}
function _c(i4, t, e) {
  let s = i4.drawingArea, { extra: n2, additionalAngle: o2, padding: a2, size: r } = e, l2 = i4.getPointPosition(t, s + n2 + a2, o2), c2 = Math.round(Ce(G3(l2.angle + N3))), h3 = kc(l2.y, r.h, c2), d3 = vc(c2), u = Mc(l2.x, r.w, d3);
  return { visible: true, x: l2.x, y: h3, textAlign: d3, left: u, top: h3, right: u + r.w, bottom: h3 + r.h };
}
function xc(i4, t) {
  if (!t)
    return true;
  let { left: e, top: s, right: n2, bottom: o2 } = i4;
  return !(at({ x: e, y: s }, t) || at({ x: e, y: o2 }, t) || at({ x: n2, y: s }, t) || at({ x: n2, y: o2 }, t));
}
function yc(i4, t, e) {
  let s = [], n2 = i4._pointLabels.length, o2 = i4.options, { centerPointLabels: a2, display: r } = o2.pointLabels, l2 = { extra: us(o2) / 2, additionalAngle: a2 ? z2 / n2 : 0 }, c2;
  for (let h3 = 0; h3 < n2; h3++) {
    l2.padding = e[h3], l2.size = t[h3];
    let d3 = _c(i4, h3, l2);
    s.push(d3), r === "auto" && (d3.visible = xc(d3, c2), d3.visible && (c2 = d3));
  }
  return s;
}
function vc(i4) {
  return i4 === 0 || i4 === 180 ? "center" : i4 < 180 ? "left" : "right";
}
function Mc(i4, t, e) {
  return e === "right" ? i4 -= t : e === "center" && (i4 -= t / 2), i4;
}
function kc(i4, t, e) {
  return e === 90 || e === 270 ? i4 -= t / 2 : (e > 270 || e < 90) && (i4 -= t), i4;
}
function Sc(i4, t, e) {
  let { left: s, top: n2, right: o2, bottom: a2 } = e, { backdropColor: r } = t;
  if (!L3(r)) {
    let l2 = Mt(t.borderRadius), c2 = X3(t.backdropPadding);
    i4.fillStyle = r;
    let h3 = s - c2.left, d3 = n2 - c2.top, u = o2 - s + c2.width, f2 = a2 - n2 + c2.height;
    Object.values(l2).some((g2) => g2 !== 0) ? (i4.beginPath(), Ut(i4, { x: h3, y: d3, w: u, h: f2, radius: l2 }), i4.fill()) : i4.fillRect(h3, d3, u, f2);
  }
}
function wc(i4, t) {
  let { ctx: e, options: { pointLabels: s } } = i4;
  for (let n2 = t - 1; n2 >= 0; n2--) {
    let o2 = i4._pointLabelItems[n2];
    if (!o2.visible)
      continue;
    let a2 = s.setContext(i4.getPointLabelContext(n2));
    Sc(e, a2, o2);
    let r = j3(a2.font), { x: l2, y: c2, textAlign: h3 } = o2;
    vt(e, i4._pointLabels[n2], l2, c2 + r.lineHeight / 2, r, { color: a2.color, textAlign: h3, textBaseline: "middle" });
  }
}
function ko(i4, t, e, s) {
  let { ctx: n2 } = i4;
  if (e)
    n2.arc(i4.xCenter, i4.yCenter, t, 0, F3);
  else {
    let o2 = i4.getPointPosition(0, t);
    n2.moveTo(o2.x, o2.y);
    for (let a2 = 1; a2 < s; a2++)
      o2 = i4.getPointPosition(a2, t), n2.lineTo(o2.x, o2.y);
  }
}
function Pc(i4, t, e, s, n2) {
  let o2 = i4.ctx, a2 = t.circular, { color: r, lineWidth: l2 } = t;
  !a2 && !s || !r || !l2 || e < 0 || (o2.save(), o2.strokeStyle = r, o2.lineWidth = l2, o2.setLineDash(n2.dash), o2.lineDashOffset = n2.dashOffset, o2.beginPath(), ko(i4, e, a2, s), o2.closePath(), o2.stroke(), o2.restore());
}
function Dc(i4, t, e) {
  return pt(i4, { label: e, index: t, type: "pointLabel" });
}
function Qn(i4, t) {
  return i4 - t;
}
function Zn(i4, t) {
  if (L3(t))
    return null;
  let e = i4._adapter, { parser: s, round: n2, isoWeekday: o2 } = i4._parseOpts, a2 = t;
  return typeof s == "function" && (a2 = s(a2)), V3(a2) || (a2 = typeof s == "string" ? e.parse(a2, s) : e.parse(a2)), a2 === null ? null : (n2 && (a2 = n2 === "week" && (At(o2) || o2 === true) ? e.startOf(a2, "isoWeek", o2) : e.startOf(a2, n2)), +a2);
}
function to(i4, t, e, s) {
  let n2 = Z3.length;
  for (let o2 = Z3.indexOf(i4); o2 < n2 - 1; ++o2) {
    let a2 = ei[Z3[o2]], r = a2.steps ? a2.steps : Number.MAX_SAFE_INTEGER;
    if (a2.common && Math.ceil((e - t) / (r * a2.size)) <= s)
      return Z3[o2];
  }
  return Z3[n2 - 1];
}
function Cc(i4, t, e, s, n2) {
  for (let o2 = Z3.length - 1; o2 >= Z3.indexOf(e); o2--) {
    let a2 = Z3[o2];
    if (ei[a2].common && i4._adapter.diff(n2, s, a2) >= t - 1)
      return a2;
  }
  return Z3[e ? Z3.indexOf(e) : 0];
}
function Oc(i4) {
  for (let t = Z3.indexOf(i4) + 1, e = Z3.length; t < e; ++t)
    if (ei[Z3[t]].common)
      return Z3[t];
}
function eo(i4, t, e) {
  if (!e)
    i4[t] = true;
  else if (e.length) {
    let { lo: s, hi: n2 } = Oe(e, t), o2 = e[s] >= t ? e[s] : e[n2];
    i4[o2] = true;
  }
}
function Ac(i4, t, e, s) {
  let n2 = i4._adapter, o2 = +n2.startOf(t[0].value, s), a2 = t[t.length - 1].value, r, l2;
  for (r = o2; r <= a2; r = +n2.add(r, 1, s))
    l2 = e[r], l2 >= 0 && (t[l2].major = true);
  return t;
}
function io(i4, t, e) {
  let s = [], n2 = {}, o2 = t.length, a2, r;
  for (a2 = 0; a2 < o2; ++a2)
    r = t[a2], n2[r] = a2, s.push({ value: r, major: false });
  return o2 === 0 || !e ? s : Ac(i4, s, n2, e);
}
function $e(i4, t, e) {
  let s = 0, n2 = i4.length - 1, o2, a2, r, l2;
  e ? (t >= i4[s].pos && t <= i4[n2].pos && ({ lo: s, hi: n2 } = ot(i4, "pos", t)), { pos: o2, time: r } = i4[s], { pos: a2, time: l2 } = i4[n2]) : (t >= i4[s].time && t <= i4[n2].time && ({ lo: s, hi: n2 } = ot(i4, "time", t)), { time: o2, pos: r } = i4[s], { time: a2, pos: l2 } = i4[n2]);
  let c2 = a2 - o2;
  return c2 ? r + (l2 - r) * (t - o2) / c2 : r;
}
var Ds, Cs, oi, ms, Nt, ut, ai, z2, F3, Oo, Se, Ao, N3, Dt, bs, ft, st, ot, Es, zs, fi, Ae, Y3, Vs, ye, _s, xs, Ft, To, Ro, ys, Ws, se, xt, Le, ni, W3, jo, $o, Yo, Xo, ki, Jo, ia, Vt, Ks, Fe, ca, ha, Me, Js, fa, ga, Ni, mt, sn, ya, Hi, Xe, Ri, cn, La, dt, ji, $i, fe, Ui, Ke, Yi, Xi, Ki, ja, qi, $a, qa, oo, q3, qe, Gi, Ue, sr, bn, ro, ge, _n, Ji, nt, vr, xn, yn, Et, Kt, Qi, ht, Zi, wn, uo, he, is, Nr, jr, $r, Ye, An, qt, ss, rl, Gt, os, as, gl, rs, Rn, yl, Sl, Qe, $l, Nn, Ul, Ze, Gl, pe, Ql, He, Zl, ue, Mo, ti, rc, lc, cc, dc, cs, Jt, hs, me, Rt, ds, fs, ei, Z3, be, gs, Lc, So, Bc;
var init_auto = __esm({
  "esbuild_serve:http-import:https://esm.sh/v135/chart.js@4.4.2/denonext/auto.js"() {
    init_polyfill();
    init_bug_reporter();
    init_mod();
    init_urlpattern_polyfill();
    init_main();
    init_popover_polyfill();
    init_color();
    init_color();
    Ds = /* @__PURE__ */ (() => {
      let i4 = 0;
      return () => i4++;
    })();
    Cs = (i4, t) => typeof i4 == "string" && i4.endsWith("%") ? parseFloat(i4) / 100 : +i4 / t;
    oi = (i4, t) => typeof i4 == "string" && i4.endsWith("%") ? parseFloat(i4) / 100 * t : +i4;
    ms = { "": (i4) => i4, x: (i4) => i4.x, y: (i4) => i4.y };
    Nt = (i4) => typeof i4 < "u";
    ut = (i4) => typeof i4 == "function";
    ai = (i4, t) => {
      if (i4.size !== t.size)
        return false;
      for (let e of i4)
        if (!t.has(e))
          return false;
      return true;
    };
    z2 = Math.PI;
    F3 = 2 * z2;
    Oo = F3 + z2;
    Se = Number.POSITIVE_INFINITY;
    Ao = z2 / 180;
    N3 = z2 / 2;
    Dt = z2 / 4;
    bs = z2 * 2 / 3;
    ft = Math.log10;
    st = Math.sign;
    ot = (i4, t, e, s) => Oe(i4, e, s ? (n2) => {
      let o2 = i4[n2][t];
      return o2 < e || o2 === e && i4[n2 + 1][t] === e;
    } : (n2) => i4[n2][t] < e);
    Es = (i4, t, e) => Oe(i4, e, (s) => i4[s][t] >= e);
    zs = ["push", "pop", "shift", "splice", "unshift"];
    fi = function() {
      return typeof window > "u" ? function(i4) {
        return i4();
      } : window.requestAnimationFrame;
    }();
    Ae = (i4) => i4 === "start" ? "left" : i4 === "end" ? "right" : "center";
    Y3 = (i4, t, e) => i4 === "start" ? t : i4 === "end" ? e : (t + e) / 2;
    Vs = (i4, t, e, s) => i4 === (s ? "left" : "right") ? e : i4 === "center" ? (t + e) / 2 : t;
    ye = (i4) => i4 === 0 || i4 === 1;
    _s = (i4, t, e) => -(Math.pow(2, 10 * (i4 -= 1)) * Math.sin((i4 - t) * F3 / e));
    xs = (i4, t, e) => Math.pow(2, -10 * i4) * Math.sin((i4 - t) * F3 / e) + 1;
    Ft = { linear: (i4) => i4, easeInQuad: (i4) => i4 * i4, easeOutQuad: (i4) => -i4 * (i4 - 2), easeInOutQuad: (i4) => (i4 /= 0.5) < 1 ? 0.5 * i4 * i4 : -0.5 * (--i4 * (i4 - 2) - 1), easeInCubic: (i4) => i4 * i4 * i4, easeOutCubic: (i4) => (i4 -= 1) * i4 * i4 + 1, easeInOutCubic: (i4) => (i4 /= 0.5) < 1 ? 0.5 * i4 * i4 * i4 : 0.5 * ((i4 -= 2) * i4 * i4 + 2), easeInQuart: (i4) => i4 * i4 * i4 * i4, easeOutQuart: (i4) => -((i4 -= 1) * i4 * i4 * i4 - 1), easeInOutQuart: (i4) => (i4 /= 0.5) < 1 ? 0.5 * i4 * i4 * i4 * i4 : -0.5 * ((i4 -= 2) * i4 * i4 * i4 - 2), easeInQuint: (i4) => i4 * i4 * i4 * i4 * i4, easeOutQuint: (i4) => (i4 -= 1) * i4 * i4 * i4 * i4 + 1, easeInOutQuint: (i4) => (i4 /= 0.5) < 1 ? 0.5 * i4 * i4 * i4 * i4 * i4 : 0.5 * ((i4 -= 2) * i4 * i4 * i4 * i4 + 2), easeInSine: (i4) => -Math.cos(i4 * N3) + 1, easeOutSine: (i4) => Math.sin(i4 * N3), easeInOutSine: (i4) => -0.5 * (Math.cos(z2 * i4) - 1), easeInExpo: (i4) => i4 === 0 ? 0 : Math.pow(2, 10 * (i4 - 1)), easeOutExpo: (i4) => i4 === 1 ? 1 : -Math.pow(2, -10 * i4) + 1, easeInOutExpo: (i4) => ye(i4) ? i4 : i4 < 0.5 ? 0.5 * Math.pow(2, 10 * (i4 * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (i4 * 2 - 1)) + 2), easeInCirc: (i4) => i4 >= 1 ? i4 : -(Math.sqrt(1 - i4 * i4) - 1), easeOutCirc: (i4) => Math.sqrt(1 - (i4 -= 1) * i4), easeInOutCirc: (i4) => (i4 /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - i4 * i4) - 1) : 0.5 * (Math.sqrt(1 - (i4 -= 2) * i4) + 1), easeInElastic: (i4) => ye(i4) ? i4 : _s(i4, 0.075, 0.3), easeOutElastic: (i4) => ye(i4) ? i4 : xs(i4, 0.075, 0.3), easeInOutElastic(i4) {
      return ye(i4) ? i4 : i4 < 0.5 ? 0.5 * _s(i4 * 2, 0.1125, 0.45) : 0.5 + 0.5 * xs(i4 * 2 - 1, 0.1125, 0.45);
    }, easeInBack(i4) {
      return i4 * i4 * ((1.70158 + 1) * i4 - 1.70158);
    }, easeOutBack(i4) {
      return (i4 -= 1) * i4 * ((1.70158 + 1) * i4 + 1.70158) + 1;
    }, easeInOutBack(i4) {
      let t = 1.70158;
      return (i4 /= 0.5) < 1 ? 0.5 * (i4 * i4 * (((t *= 1.525) + 1) * i4 - t)) : 0.5 * ((i4 -= 2) * i4 * (((t *= 1.525) + 1) * i4 + t) + 2);
    }, easeInBounce: (i4) => 1 - Ft.easeOutBounce(1 - i4), easeOutBounce(i4) {
      return i4 < 1 / 2.75 ? 7.5625 * i4 * i4 : i4 < 2 / 2.75 ? 7.5625 * (i4 -= 1.5 / 2.75) * i4 + 0.75 : i4 < 2.5 / 2.75 ? 7.5625 * (i4 -= 2.25 / 2.75) * i4 + 0.9375 : 7.5625 * (i4 -= 2.625 / 2.75) * i4 + 0.984375;
    }, easeInOutBounce: (i4) => i4 < 0.5 ? Ft.easeInBounce(i4 * 2) * 0.5 : Ft.easeOutBounce(i4 * 2 - 1) * 0.5 + 0.5 };
    To = ["x", "y", "borderWidth", "radius", "tension"];
    Ro = ["color", "borderColor", "backgroundColor"];
    ys = /* @__PURE__ */ new Map();
    Ws = { values(i4) {
      return I3(i4) ? i4 : "" + i4;
    }, numeric(i4, t, e) {
      if (i4 === 0)
        return "0";
      let s = this.chart.options.locale, n2, o2 = i4;
      if (e.length > 1) {
        let c2 = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
        (c2 < 1e-4 || c2 > 1e15) && (n2 = "scientific"), o2 = Fo(i4, e);
      }
      let a2 = ft(Math.abs(o2)), r = isNaN(a2) ? 1 : Math.max(Math.min(-1 * Math.floor(a2), 20), 0), l2 = { notation: n2, minimumFractionDigits: r, maximumFractionDigits: r };
      return Object.assign(l2, this.options.ticks.format), $t(i4, s, l2);
    }, logarithmic(i4, t, e) {
      if (i4 === 0)
        return "0";
      let s = e[t].significand || i4 / Math.pow(10, Math.floor(ft(i4)));
      return [1, 2, 3, 5, 10, 15].includes(s) || t > 0.8 * e.length ? Ws.numeric.call(this, i4, t, e) : "";
    } };
    se = { formatters: Ws };
    xt = /* @__PURE__ */ Object.create(null);
    Le = /* @__PURE__ */ Object.create(null);
    ni = class {
      constructor(t, e) {
        this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = (s) => s.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"], this.font = { family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", size: 12, style: "normal", lineHeight: 1.2, weight: null }, this.hover = {}, this.hoverBackgroundColor = (s, n2) => ii(n2.backgroundColor), this.hoverBorderColor = (s, n2) => ii(n2.borderColor), this.hoverColor = (s, n2) => ii(n2.color), this.indexAxis = "x", this.interaction = { mode: "nearest", intersect: true, includeInvisible: false }, this.maintainAspectRatio = true, this.onHover = null, this.onClick = null, this.parsing = true, this.plugins = {}, this.responsive = true, this.scale = void 0, this.scales = {}, this.showLine = true, this.drawActiveElementsOnTop = true, this.describe(t), this.apply(e);
      }
      set(t, e) {
        return si(this, t, e);
      }
      get(t) {
        return te(this, t);
      }
      describe(t, e) {
        return si(Le, t, e);
      }
      override(t, e) {
        return si(xt, t, e);
      }
      route(t, e, s, n2) {
        let o2 = te(this, t), a2 = te(this, s), r = "_" + e;
        Object.defineProperties(o2, { [r]: { value: o2[e], writable: true }, [e]: { enumerable: true, get() {
          let l2 = this[r], c2 = a2[n2];
          return O3(l2) ? Object.assign({}, c2, l2) : P3(l2, c2);
        }, set(l2) {
          this[r] = l2;
        } } });
      }
      apply(t) {
        t.forEach((e) => e(this));
      }
    };
    W3 = new ni({ _scriptable: (i4) => !i4.startsWith("on"), _indexable: (i4) => i4 !== "events", hover: { _fallback: "interaction" }, interaction: { _scriptable: false, _indexable: false } }, [Eo, Io, Bo]);
    jo = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/;
    $o = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
    Yo = (i4) => +i4 || 0;
    Xo = (i4, t) => i4 ? i4 + De(t) : t;
    ki = (i4, t) => O3(t) && i4 !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
    Jo = (i4, t) => i4 === true ? t : typeof i4 == "string" ? gt(t, i4) : void 0;
    ia = Number.EPSILON || 1e-14;
    Vt = (i4, t) => t < i4.length && !i4[t].skip && i4[t];
    Ks = (i4) => i4 === "x" ? "y" : "x";
    Fe = (i4) => i4.ownerDocument.defaultView.getComputedStyle(i4, null);
    ca = ["top", "right", "bottom", "left"];
    ha = (i4, t, e) => (i4 > 0 || t > 0) && (!e || !e.shadowRoot);
    Me = (i4) => Math.round(i4 * 10) / 10;
    Js = function() {
      let i4 = false;
      try {
        let t = { get passive() {
          return i4 = true, false;
        } };
        Ie() && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t));
      } catch {
      }
      return i4;
    }();
    fa = function(i4, t) {
      return { x(e) {
        return i4 + i4 + t - e;
      }, setWidth(e) {
        t = e;
      }, textAlign(e) {
        return e === "center" ? e : e === "right" ? "left" : "right";
      }, xPlus(e, s) {
        return e - s;
      }, leftForLtr(e, s) {
        return e - s;
      } };
    };
    ga = function() {
      return { x(i4) {
        return i4;
      }, setWidth(i4) {
      }, textAlign(i4) {
        return i4;
      }, xPlus(i4, t) {
        return i4 + t;
      }, leftForLtr(i4, t) {
        return i4;
      } };
    };
    Ni = class {
      constructor() {
        this._request = null, this._charts = /* @__PURE__ */ new Map(), this._running = false, this._lastDate = void 0;
      }
      _notify(t, e, s, n2) {
        let o2 = e.listeners[n2], a2 = e.duration;
        o2.forEach((r) => r({ chart: t, initial: e.initial, numSteps: a2, currentStep: Math.min(s - e.start, a2) }));
      }
      _refresh() {
        this._request || (this._running = true, this._request = fi.call(window, () => {
          this._update(), this._request = null, this._running && this._refresh();
        }));
      }
      _update(t = Date.now()) {
        let e = 0;
        this._charts.forEach((s, n2) => {
          if (!s.running || !s.items.length)
            return;
          let o2 = s.items, a2 = o2.length - 1, r = false, l2;
          for (; a2 >= 0; --a2)
            l2 = o2[a2], l2._active ? (l2._total > s.duration && (s.duration = l2._total), l2.tick(t), r = true) : (o2[a2] = o2[o2.length - 1], o2.pop());
          r && (n2.draw(), this._notify(n2, s, t, "progress")), o2.length || (s.running = false, this._notify(n2, s, t, "complete"), s.initial = false), e += o2.length;
        }), this._lastDate = t, e === 0 && (this._running = false);
      }
      _getAnims(t) {
        let e = this._charts, s = e.get(t);
        return s || (s = { running: false, initial: true, items: [], listeners: { complete: [], progress: [] } }, e.set(t, s)), s;
      }
      listen(t, e, s) {
        this._getAnims(t).listeners[e].push(s);
      }
      add(t, e) {
        !e || !e.length || this._getAnims(t).items.push(...e);
      }
      has(t) {
        return this._getAnims(t).items.length > 0;
      }
      start(t) {
        let e = this._charts.get(t);
        e && (e.running = true, e.start = Date.now(), e.duration = e.items.reduce((s, n2) => Math.max(s, n2._duration), 0), this._refresh());
      }
      running(t) {
        if (!this._running)
          return false;
        let e = this._charts.get(t);
        return !(!e || !e.running || !e.items.length);
      }
      stop(t) {
        let e = this._charts.get(t);
        if (!e || !e.items.length)
          return;
        let s = e.items, n2 = s.length - 1;
        for (; n2 >= 0; --n2)
          s[n2].cancel();
        e.items = [], this._notify(t, e, Date.now(), "complete");
      }
      remove(t) {
        return this._charts.delete(t);
      }
    };
    mt = new Ni();
    sn = "transparent";
    ya = { boolean(i4, t, e) {
      return e > 0.5 ? t : i4;
    }, color(i4, t, e) {
      let s = _i(i4 || sn), n2 = s.valid && _i(t || sn);
      return n2 && n2.valid ? n2.mix(s, e).hexString() : t;
    }, number(i4, t, e) {
      return i4 + (t - i4) * e;
    } };
    Hi = class {
      constructor(t, e, s, n2) {
        let o2 = e[s];
        n2 = Yt([t.to, n2, o2, t.from]);
        let a2 = Yt([t.from, o2, n2]);
        this._active = true, this._fn = t.fn || ya[t.type || typeof a2], this._easing = Ft[t.easing] || Ft.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = s, this._from = a2, this._to = n2, this._promises = void 0;
      }
      active() {
        return this._active;
      }
      update(t, e, s) {
        if (this._active) {
          this._notify(false);
          let n2 = this._target[this._prop], o2 = s - this._start, a2 = this._duration - o2;
          this._start = s, this._duration = Math.floor(Math.max(a2, t.duration)), this._total += o2, this._loop = !!t.loop, this._to = Yt([t.to, e, n2, t.from]), this._from = Yt([t.from, n2, e]);
        }
      }
      cancel() {
        this._active && (this.tick(Date.now()), this._active = false, this._notify(false));
      }
      tick(t) {
        let e = t - this._start, s = this._duration, n2 = this._prop, o2 = this._from, a2 = this._loop, r = this._to, l2;
        if (this._active = o2 !== r && (a2 || e < s), !this._active) {
          this._target[n2] = r, this._notify(true);
          return;
        }
        if (e < 0) {
          this._target[n2] = o2;
          return;
        }
        l2 = e / s % 2, l2 = a2 && l2 > 1 ? 2 - l2 : l2, l2 = this._easing(Math.min(1, Math.max(0, l2))), this._target[n2] = this._fn(o2, r, l2);
      }
      wait() {
        let t = this._promises || (this._promises = []);
        return new Promise((e, s) => {
          t.push({ res: e, rej: s });
        });
      }
      _notify(t) {
        let e = t ? "res" : "rej", s = this._promises || [];
        for (let n2 = 0; n2 < s.length; n2++)
          s[n2][e]();
      }
    };
    Xe = class {
      constructor(t, e) {
        this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(e);
      }
      configure(t) {
        if (!O3(t))
          return;
        let e = Object.keys(W3.animation), s = this._properties;
        Object.getOwnPropertyNames(t).forEach((n2) => {
          let o2 = t[n2];
          if (!O3(o2))
            return;
          let a2 = {};
          for (let r of e)
            a2[r] = o2[r];
          (I3(o2.properties) && o2.properties || [n2]).forEach((r) => {
            (r === n2 || !s.has(r)) && s.set(r, a2);
          });
        });
      }
      _animateOptions(t, e) {
        let s = e.options, n2 = Ma(t, s);
        if (!n2)
          return [];
        let o2 = this._createAnimations(n2, s);
        return s.$shared && va(t.options.$animations, s).then(() => {
          t.options = s;
        }, () => {
        }), o2;
      }
      _createAnimations(t, e) {
        let s = this._properties, n2 = [], o2 = t.$animations || (t.$animations = {}), a2 = Object.keys(e), r = Date.now(), l2;
        for (l2 = a2.length - 1; l2 >= 0; --l2) {
          let c2 = a2[l2];
          if (c2.charAt(0) === "$")
            continue;
          if (c2 === "options") {
            n2.push(...this._animateOptions(t, e));
            continue;
          }
          let h3 = e[c2], d3 = o2[c2], u = s.get(c2);
          if (d3)
            if (u && d3.active()) {
              d3.update(u, h3, r);
              continue;
            } else
              d3.cancel();
          if (!u || !u.duration) {
            t[c2] = h3;
            continue;
          }
          o2[c2] = d3 = new Hi(u, t, c2, h3), n2.push(d3);
        }
        return n2;
      }
      update(t, e) {
        if (this._properties.size === 0) {
          Object.assign(t, e);
          return;
        }
        let s = this._createAnimations(t, e);
        if (s.length)
          return mt.add(this._chart, s), true;
      }
    };
    Ri = (i4) => i4 === "reset" || i4 === "none";
    cn = (i4, t) => t ? i4 : Object.assign({}, i4);
    La = (i4, t, e) => i4 && !t.hidden && t._stacked && { keys: so(e, true), values: null };
    dt = class {
      static defaults = {};
      static datasetElementType = null;
      static dataElementType = null;
      constructor(t, e) {
        this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = false, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = false, this.supportsDecimation = false, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
      }
      initialize() {
        let t = this._cachedMeta;
        this.configure(), this.linkScales(), t._stacked = an(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
      }
      updateIndex(t) {
        this.index !== t && ae(this._cachedMeta), this.index = t;
      }
      linkScales() {
        let t = this.chart, e = this._cachedMeta, s = this.getDataset(), n2 = (d3, u, f2, g2) => d3 === "x" ? u : d3 === "r" ? g2 : f2, o2 = e.xAxisID = P3(s.xAxisID, Ti(t, "x")), a2 = e.yAxisID = P3(s.yAxisID, Ti(t, "y")), r = e.rAxisID = P3(s.rAxisID, Ti(t, "r")), l2 = e.indexAxis, c2 = e.iAxisID = n2(l2, o2, a2, r), h3 = e.vAxisID = n2(l2, a2, o2, r);
        e.xScale = this.getScaleForId(o2), e.yScale = this.getScaleForId(a2), e.rScale = this.getScaleForId(r), e.iScale = this.getScaleForId(c2), e.vScale = this.getScaleForId(h3);
      }
      getDataset() {
        return this.chart.data.datasets[this.index];
      }
      getMeta() {
        return this.chart.getDatasetMeta(this.index);
      }
      getScaleForId(t) {
        return this.chart.scales[t];
      }
      _getOtherScale(t) {
        let e = this._cachedMeta;
        return t === e.iScale ? e.vScale : e.iScale;
      }
      reset() {
        this._update("reset");
      }
      _destroy() {
        let t = this._cachedMeta;
        this._data && di(this._data, this), t._stacked && ae(t);
      }
      _dataCheck() {
        let t = this.getDataset(), e = t.data || (t.data = []), s = this._data;
        if (O3(e))
          this._data = wa(e);
        else if (s !== e) {
          if (s) {
            di(s, this);
            let n2 = this._cachedMeta;
            ae(n2), n2._parsed = [];
          }
          e && Object.isExtensible(e) && Fs(e, this), this._syncList = [], this._data = e;
        }
      }
      addElements() {
        let t = this._cachedMeta;
        this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
      }
      buildOrUpdateElements(t) {
        let e = this._cachedMeta, s = this.getDataset(), n2 = false;
        this._dataCheck();
        let o2 = e._stacked;
        e._stacked = an(e.vScale, e), e.stack !== s.stack && (n2 = true, ae(e), e.stack = s.stack), this._resyncElements(t), (n2 || o2 !== e._stacked) && ln(this, e._parsed);
      }
      configure() {
        let t = this.chart.config, e = t.datasetScopeKeys(this._type), s = t.getOptionScopes(this.getDataset(), e, true);
        this.options = t.createResolver(s, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
      }
      parse(t, e) {
        let { _cachedMeta: s, _data: n2 } = this, { iScale: o2, _stacked: a2 } = s, r = o2.axis, l2 = t === 0 && e === n2.length ? true : s._sorted, c2 = t > 0 && s._parsed[t - 1], h3, d3, u;
        if (this._parsing === false)
          s._parsed = n2, s._sorted = true, u = n2;
        else {
          I3(n2[t]) ? u = this.parseArrayData(s, n2, t, e) : O3(n2[t]) ? u = this.parseObjectData(s, n2, t, e) : u = this.parsePrimitiveData(s, n2, t, e);
          let f2 = () => d3[r] === null || c2 && d3[r] < c2[r];
          for (h3 = 0; h3 < e; ++h3)
            s._parsed[h3 + t] = d3 = u[h3], l2 && (f2() && (l2 = false), c2 = d3);
          s._sorted = l2;
        }
        a2 && ln(this, u);
      }
      parsePrimitiveData(t, e, s, n2) {
        let { iScale: o2, vScale: a2 } = t, r = o2.axis, l2 = a2.axis, c2 = o2.getLabels(), h3 = o2 === a2, d3 = new Array(n2), u, f2, g2;
        for (u = 0, f2 = n2; u < f2; ++u)
          g2 = u + s, d3[u] = { [r]: h3 || o2.parse(c2[g2], g2), [l2]: a2.parse(e[g2], g2) };
        return d3;
      }
      parseArrayData(t, e, s, n2) {
        let { xScale: o2, yScale: a2 } = t, r = new Array(n2), l2, c2, h3, d3;
        for (l2 = 0, c2 = n2; l2 < c2; ++l2)
          h3 = l2 + s, d3 = e[h3], r[l2] = { x: o2.parse(d3[0], h3), y: a2.parse(d3[1], h3) };
        return r;
      }
      parseObjectData(t, e, s, n2) {
        let { xScale: o2, yScale: a2 } = t, { xAxisKey: r = "x", yAxisKey: l2 = "y" } = this._parsing, c2 = new Array(n2), h3, d3, u, f2;
        for (h3 = 0, d3 = n2; h3 < d3; ++h3)
          u = h3 + s, f2 = e[u], c2[h3] = { x: o2.parse(gt(f2, r), u), y: a2.parse(gt(f2, l2), u) };
        return c2;
      }
      getParsed(t) {
        return this._cachedMeta._parsed[t];
      }
      getDataElement(t) {
        return this._cachedMeta.data[t];
      }
      applyStack(t, e, s) {
        let n2 = this.chart, o2 = this._cachedMeta, a2 = e[t.axis], r = { keys: so(n2, true), values: e._stacks[t.axis]._visualValues };
        return on(r, a2, o2.index, { mode: s });
      }
      updateRangeFromParsed(t, e, s, n2) {
        let o2 = s[e.axis], a2 = o2 === null ? NaN : o2, r = n2 && s._stacks[e.axis];
        n2 && r && (n2.values = r, a2 = on(n2, o2, this._cachedMeta.index)), t.min = Math.min(t.min, a2), t.max = Math.max(t.max, a2);
      }
      getMinMax(t, e) {
        let s = this._cachedMeta, n2 = s._parsed, o2 = s._sorted && t === s.iScale, a2 = n2.length, r = this._getOtherScale(t), l2 = La(e, s, this.chart), c2 = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY }, { min: h3, max: d3 } = Da(r), u, f2;
        function g2() {
          f2 = n2[u];
          let p3 = f2[r.axis];
          return !V3(f2[t.axis]) || h3 > p3 || d3 < p3;
        }
        for (u = 0; u < a2 && !(!g2() && (this.updateRangeFromParsed(c2, t, f2, l2), o2)); ++u)
          ;
        if (o2) {
          for (u = a2 - 1; u >= 0; --u)
            if (!g2()) {
              this.updateRangeFromParsed(c2, t, f2, l2);
              break;
            }
        }
        return c2;
      }
      getAllParsedValues(t) {
        let e = this._cachedMeta._parsed, s = [], n2, o2, a2;
        for (n2 = 0, o2 = e.length; n2 < o2; ++n2)
          a2 = e[n2][t.axis], V3(a2) && s.push(a2);
        return s;
      }
      getMaxOverflow() {
        return false;
      }
      getLabelAndValue(t) {
        let e = this._cachedMeta, s = e.iScale, n2 = e.vScale, o2 = this.getParsed(t);
        return { label: s ? "" + s.getLabelForValue(o2[s.axis]) : "", value: n2 ? "" + n2.getLabelForValue(o2[n2.axis]) : "" };
      }
      _update(t) {
        let e = this._cachedMeta;
        this.update(t || "default"), e._clip = Sa(P3(this.options.clip, ka(e.xScale, e.yScale, this.getMaxOverflow())));
      }
      update(t) {
      }
      draw() {
        let t = this._ctx, e = this.chart, s = this._cachedMeta, n2 = s.data || [], o2 = e.chartArea, a2 = [], r = this._drawStart || 0, l2 = this._drawCount || n2.length - r, c2 = this.options.drawActiveElementsOnTop, h3;
        for (s.dataset && s.dataset.draw(t, o2, r, l2), h3 = r; h3 < r + l2; ++h3) {
          let d3 = n2[h3];
          d3.hidden || (d3.active && c2 ? a2.push(d3) : d3.draw(t, o2));
        }
        for (h3 = 0; h3 < a2.length; ++h3)
          a2[h3].draw(t, o2);
      }
      getStyle(t, e) {
        let s = e ? "active" : "default";
        return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(s) : this.resolveDataElementOptions(t || 0, s);
      }
      getContext(t, e, s) {
        let n2 = this.getDataset(), o2;
        if (t >= 0 && t < this._cachedMeta.data.length) {
          let a2 = this._cachedMeta.data[t];
          o2 = a2.$context || (a2.$context = Aa(this.getContext(), t, a2)), o2.parsed = this.getParsed(t), o2.raw = n2.data[t], o2.index = o2.dataIndex = t;
        } else
          o2 = this.$context || (this.$context = Oa(this.chart.getContext(), this.index)), o2.dataset = n2, o2.index = o2.datasetIndex = this.index;
        return o2.active = !!e, o2.mode = s, o2;
      }
      resolveDatasetElementOptions(t) {
        return this._resolveElementOptions(this.datasetElementType.id, t);
      }
      resolveDataElementOptions(t, e) {
        return this._resolveElementOptions(this.dataElementType.id, e, t);
      }
      _resolveElementOptions(t, e = "default", s) {
        let n2 = e === "active", o2 = this._cachedDataOpts, a2 = t + "-" + e, r = o2[a2], l2 = this.enableOptionSharing && Nt(s);
        if (r)
          return cn(r, l2);
        let c2 = this.chart.config, h3 = c2.datasetElementScopeKeys(this._type, t), d3 = n2 ? [`${t}Hover`, "hover", t, ""] : [t, ""], u = c2.getOptionScopes(this.getDataset(), h3), f2 = Object.keys(W3.elements[t]), g2 = () => this.getContext(s, n2, e), p3 = c2.resolveNamedOptions(u, f2, g2, d3);
        return p3.$shared && (p3.$shared = l2, o2[a2] = Object.freeze(cn(p3, l2))), p3;
      }
      _resolveAnimations(t, e, s) {
        let n2 = this.chart, o2 = this._cachedDataOpts, a2 = `animation-${e}`, r = o2[a2];
        if (r)
          return r;
        let l2;
        if (n2.options.animation !== false) {
          let h3 = this.chart.config, d3 = h3.datasetAnimationScopeKeys(this._type, e), u = h3.getOptionScopes(this.getDataset(), d3);
          l2 = h3.createResolver(u, this.getContext(t, s, e));
        }
        let c2 = new Xe(n2, l2 && l2.animations);
        return l2 && l2._cacheable && (o2[a2] = Object.freeze(c2)), c2;
      }
      getSharedOptions(t) {
        if (t.$shared)
          return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
      }
      includeOptions(t, e) {
        return !e || Ri(t) || this.chart._animationsDisabled;
      }
      _getSharedOptions(t, e) {
        let s = this.resolveDataElementOptions(t, e), n2 = this._sharedOptions, o2 = this.getSharedOptions(s), a2 = this.includeOptions(e, o2) || o2 !== n2;
        return this.updateSharedOptions(o2, e, s), { sharedOptions: o2, includeOptions: a2 };
      }
      updateElement(t, e, s, n2) {
        Ri(n2) ? Object.assign(t, s) : this._resolveAnimations(e, n2).update(t, s);
      }
      updateSharedOptions(t, e, s) {
        t && !Ri(e) && this._resolveAnimations(void 0, e).update(t, s);
      }
      _setStyle(t, e, s, n2) {
        t.active = n2;
        let o2 = this.getStyle(e, n2);
        this._resolveAnimations(e, s, n2).update(t, { options: !n2 && this.getSharedOptions(o2) || o2 });
      }
      removeHoverStyle(t, e, s) {
        this._setStyle(t, s, "active", false);
      }
      setHoverStyle(t, e, s) {
        this._setStyle(t, s, "active", true);
      }
      _removeDatasetHoverStyle() {
        let t = this._cachedMeta.dataset;
        t && this._setStyle(t, void 0, "active", false);
      }
      _setDatasetHoverStyle() {
        let t = this._cachedMeta.dataset;
        t && this._setStyle(t, void 0, "active", true);
      }
      _resyncElements(t) {
        let e = this._data, s = this._cachedMeta.data;
        for (let [r, l2, c2] of this._syncList)
          this[r](l2, c2);
        this._syncList = [];
        let n2 = s.length, o2 = e.length, a2 = Math.min(o2, n2);
        a2 && this.parse(0, a2), o2 > n2 ? this._insertElements(n2, o2 - n2, t) : o2 < n2 && this._removeElements(o2, n2 - o2);
      }
      _insertElements(t, e, s = true) {
        let n2 = this._cachedMeta, o2 = n2.data, a2 = t + e, r, l2 = (c2) => {
          for (c2.length += e, r = c2.length - 1; r >= a2; r--)
            c2[r] = c2[r - e];
        };
        for (l2(o2), r = t; r < a2; ++r)
          o2[r] = new this.dataElementType();
        this._parsing && l2(n2._parsed), this.parse(t, e), s && this.updateElements(o2, t, e, "reset");
      }
      updateElements(t, e, s, n2) {
      }
      _removeElements(t, e) {
        let s = this._cachedMeta;
        if (this._parsing) {
          let n2 = s._parsed.splice(t, e);
          s._stacked && ae(s, n2);
        }
        s.data.splice(t, e);
      }
      _sync(t) {
        if (this._parsing)
          this._syncList.push(t);
        else {
          let [e, s, n2] = t;
          this[e](s, n2);
        }
        this.chart._dataChanges.push([this.index, ...t]);
      }
      _onDataPush() {
        let t = arguments.length;
        this._sync(["_insertElements", this.getDataset().data.length - t, t]);
      }
      _onDataPop() {
        this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
      }
      _onDataShift() {
        this._sync(["_removeElements", 0, 1]);
      }
      _onDataSplice(t, e) {
        e && this._sync(["_removeElements", t, e]);
        let s = arguments.length - 2;
        s && this._sync(["_insertElements", t, s]);
      }
      _onDataUnshift() {
        this._sync(["_insertElements", 0, arguments.length]);
      }
    };
    ji = class extends dt {
      static id = "bar";
      static defaults = { datasetElementType: false, dataElementType: "bar", categoryPercentage: 0.8, barPercentage: 0.9, grouped: true, animations: { numbers: { type: "number", properties: ["x", "y", "base", "width", "height"] } } };
      static overrides = { scales: { _index_: { type: "category", offset: true, grid: { offset: true } }, _value_: { type: "linear", beginAtZero: true } } };
      parsePrimitiveData(t, e, s, n2) {
        return hn(t, e, s, n2);
      }
      parseArrayData(t, e, s, n2) {
        return hn(t, e, s, n2);
      }
      parseObjectData(t, e, s, n2) {
        let { iScale: o2, vScale: a2 } = t, { xAxisKey: r = "x", yAxisKey: l2 = "y" } = this._parsing, c2 = o2.axis === "x" ? r : l2, h3 = a2.axis === "x" ? r : l2, d3 = [], u, f2, g2, p3;
        for (u = s, f2 = s + n2; u < f2; ++u)
          p3 = e[u], g2 = {}, g2[o2.axis] = o2.parse(gt(p3, c2), u), d3.push(no(gt(p3, h3), g2, a2, u));
        return d3;
      }
      updateRangeFromParsed(t, e, s, n2) {
        super.updateRangeFromParsed(t, e, s, n2);
        let o2 = s._custom;
        o2 && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, o2.min), t.max = Math.max(t.max, o2.max));
      }
      getMaxOverflow() {
        return 0;
      }
      getLabelAndValue(t) {
        let e = this._cachedMeta, { iScale: s, vScale: n2 } = e, o2 = this.getParsed(t), a2 = o2._custom, r = Ei(a2) ? "[" + a2.start + ", " + a2.end + "]" : "" + n2.getLabelForValue(o2[n2.axis]);
        return { label: "" + s.getLabelForValue(o2[s.axis]), value: r };
      }
      initialize() {
        this.enableOptionSharing = true, super.initialize();
        let t = this._cachedMeta;
        t.stack = this.getDataset().stack;
      }
      update(t) {
        let e = this._cachedMeta;
        this.updateElements(e.data, 0, e.data.length, t);
      }
      updateElements(t, e, s, n2) {
        let o2 = n2 === "reset", { index: a2, _cachedMeta: { vScale: r } } = this, l2 = r.getBasePixel(), c2 = r.isHorizontal(), h3 = this._getRuler(), { sharedOptions: d3, includeOptions: u } = this._getSharedOptions(e, n2);
        for (let f2 = e; f2 < e + s; f2++) {
          let g2 = this.getParsed(f2), p3 = o2 || L3(g2[r.axis]) ? { base: l2, head: l2 } : this._calculateBarValuePixels(f2), m3 = this._calculateBarIndexPixels(f2, h3), b3 = (g2._stacks || {})[r.axis], _3 = { horizontal: c2, base: p3.base, enableBorderRadius: !b3 || Ei(g2._custom) || a2 === b3._top || a2 === b3._bottom, x: c2 ? p3.head : m3.center, y: c2 ? m3.center : p3.head, height: c2 ? m3.size : Math.abs(p3.size), width: c2 ? Math.abs(p3.size) : m3.size };
          u && (_3.options = d3 || this.resolveDataElementOptions(f2, t[f2].active ? "active" : n2));
          let v3 = _3.options || t[f2].options;
          Va(_3, v3, b3, a2), Na(_3, v3, h3.ratio), this.updateElement(t[f2], f2, _3, n2);
        }
      }
      _getStacks(t, e) {
        let { iScale: s } = this._cachedMeta, n2 = s.getMatchingVisibleMetas(this._type).filter((l2) => l2.controller.options.grouped), o2 = s.options.stacked, a2 = [], r = (l2) => {
          let c2 = l2.controller.getParsed(e), h3 = c2 && c2[l2.vScale.axis];
          if (L3(h3) || isNaN(h3))
            return true;
        };
        for (let l2 of n2)
          if (!(e !== void 0 && r(l2)) && ((o2 === false || a2.indexOf(l2.stack) === -1 || o2 === void 0 && l2.stack === void 0) && a2.push(l2.stack), l2.index === t))
            break;
        return a2.length || a2.push(void 0), a2;
      }
      _getStackCount(t) {
        return this._getStacks(void 0, t).length;
      }
      _getStackIndex(t, e, s) {
        let n2 = this._getStacks(t, s), o2 = e !== void 0 ? n2.indexOf(e) : -1;
        return o2 === -1 ? n2.length - 1 : o2;
      }
      _getRuler() {
        let t = this.options, e = this._cachedMeta, s = e.iScale, n2 = [], o2, a2;
        for (o2 = 0, a2 = e.data.length; o2 < a2; ++o2)
          n2.push(s.getPixelForValue(this.getParsed(o2)[s.axis], o2));
        let r = t.barThickness;
        return { min: r || Ra(e), pixels: n2, start: s._startPixel, end: s._endPixel, stackCount: this._getStackCount(), scale: s, grouped: t.grouped, ratio: r ? 1 : t.categoryPercentage * t.barPercentage };
      }
      _calculateBarValuePixels(t) {
        let { _cachedMeta: { vScale: e, _stacked: s, index: n2 }, options: { base: o2, minBarLength: a2 } } = this, r = o2 || 0, l2 = this.getParsed(t), c2 = l2._custom, h3 = Ei(c2), d3 = l2[e.axis], u = 0, f2 = s ? this.applyStack(e, l2, s) : d3, g2, p3;
        f2 !== d3 && (u = f2 - d3, f2 = d3), h3 && (d3 = c2.barStart, f2 = c2.barEnd - c2.barStart, d3 !== 0 && st(d3) !== st(c2.barEnd) && (u = 0), u += d3);
        let m3 = !L3(o2) && !h3 ? o2 : u, b3 = e.getPixelForValue(m3);
        if (this.chart.getDataVisibility(t) ? g2 = e.getPixelForValue(u + f2) : g2 = b3, p3 = g2 - b3, Math.abs(p3) < a2) {
          p3 = Fa(p3, e, r) * a2, d3 === r && (b3 -= p3 / 2);
          let _3 = e.getPixelForDecimal(0), v3 = e.getPixelForDecimal(1), y3 = Math.min(_3, v3), x2 = Math.max(_3, v3);
          b3 = Math.max(Math.min(b3, x2), y3), g2 = b3 + p3, s && !h3 && (l2._stacks[e.axis]._visualValues[n2] = e.getValueForPixel(g2) - e.getValueForPixel(b3));
        }
        if (b3 === e.getPixelForValue(r)) {
          let _3 = st(p3) * e.getLineWidthForValue(r) / 2;
          b3 += _3, p3 -= _3;
        }
        return { size: p3, base: b3, head: g2, center: g2 + p3 / 2 };
      }
      _calculateBarIndexPixels(t, e) {
        let s = e.scale, n2 = this.options, o2 = n2.skipNull, a2 = P3(n2.maxBarThickness, 1 / 0), r, l2;
        if (e.grouped) {
          let c2 = o2 ? this._getStackCount(t) : e.stackCount, h3 = n2.barThickness === "flex" ? Ia(t, e, n2, c2) : Ea(t, e, n2, c2), d3 = this._getStackIndex(this.index, this._cachedMeta.stack, o2 ? t : void 0);
          r = h3.start + h3.chunk * d3 + h3.chunk / 2, l2 = Math.min(a2, h3.chunk * h3.ratio);
        } else
          r = s.getPixelForValue(this.getParsed(t)[s.axis], t), l2 = Math.min(a2, e.min * e.ratio);
        return { base: r - l2 / 2, head: r + l2 / 2, center: r, size: l2 };
      }
      draw() {
        let t = this._cachedMeta, e = t.vScale, s = t.data, n2 = s.length, o2 = 0;
        for (; o2 < n2; ++o2)
          this.getParsed(o2)[e.axis] !== null && s[o2].draw(this._ctx);
      }
    };
    $i = class extends dt {
      static id = "bubble";
      static defaults = { datasetElementType: false, dataElementType: "point", animations: { numbers: { type: "number", properties: ["x", "y", "borderWidth", "radius"] } } };
      static overrides = { scales: { x: { type: "linear" }, y: { type: "linear" } } };
      initialize() {
        this.enableOptionSharing = true, super.initialize();
      }
      parsePrimitiveData(t, e, s, n2) {
        let o2 = super.parsePrimitiveData(t, e, s, n2);
        for (let a2 = 0; a2 < o2.length; a2++)
          o2[a2]._custom = this.resolveDataElementOptions(a2 + s).radius;
        return o2;
      }
      parseArrayData(t, e, s, n2) {
        let o2 = super.parseArrayData(t, e, s, n2);
        for (let a2 = 0; a2 < o2.length; a2++) {
          let r = e[s + a2];
          o2[a2]._custom = P3(r[2], this.resolveDataElementOptions(a2 + s).radius);
        }
        return o2;
      }
      parseObjectData(t, e, s, n2) {
        let o2 = super.parseObjectData(t, e, s, n2);
        for (let a2 = 0; a2 < o2.length; a2++) {
          let r = e[s + a2];
          o2[a2]._custom = P3(r && r.r && +r.r, this.resolveDataElementOptions(a2 + s).radius);
        }
        return o2;
      }
      getMaxOverflow() {
        let t = this._cachedMeta.data, e = 0;
        for (let s = t.length - 1; s >= 0; --s)
          e = Math.max(e, t[s].size(this.resolveDataElementOptions(s)) / 2);
        return e > 0 && e;
      }
      getLabelAndValue(t) {
        let e = this._cachedMeta, s = this.chart.data.labels || [], { xScale: n2, yScale: o2 } = e, a2 = this.getParsed(t), r = n2.getLabelForValue(a2.x), l2 = o2.getLabelForValue(a2.y), c2 = a2._custom;
        return { label: s[t] || "", value: "(" + r + ", " + l2 + (c2 ? ", " + c2 : "") + ")" };
      }
      update(t) {
        let e = this._cachedMeta.data;
        this.updateElements(e, 0, e.length, t);
      }
      updateElements(t, e, s, n2) {
        let o2 = n2 === "reset", { iScale: a2, vScale: r } = this._cachedMeta, { sharedOptions: l2, includeOptions: c2 } = this._getSharedOptions(e, n2), h3 = a2.axis, d3 = r.axis;
        for (let u = e; u < e + s; u++) {
          let f2 = t[u], g2 = !o2 && this.getParsed(u), p3 = {}, m3 = p3[h3] = o2 ? a2.getPixelForDecimal(0.5) : a2.getPixelForValue(g2[h3]), b3 = p3[d3] = o2 ? r.getBasePixel() : r.getPixelForValue(g2[d3]);
          p3.skip = isNaN(m3) || isNaN(b3), c2 && (p3.options = l2 || this.resolveDataElementOptions(u, f2.active ? "active" : n2), o2 && (p3.options.radius = 0)), this.updateElement(f2, u, p3, n2);
        }
      }
      resolveDataElementOptions(t, e) {
        let s = this.getParsed(t), n2 = super.resolveDataElementOptions(t, e);
        n2.$shared && (n2 = Object.assign({}, n2, { $shared: false }));
        let o2 = n2.radius;
        return e !== "active" && (n2.radius = 0), n2.radius += P3(s && s._custom, o2), n2;
      }
    };
    fe = class extends dt {
      static id = "doughnut";
      static defaults = { datasetElementType: false, dataElementType: "arc", animation: { animateRotate: true, animateScale: false }, animations: { numbers: { type: "number", properties: ["circumference", "endAngle", "innerRadius", "outerRadius", "startAngle", "x", "y", "offset", "borderWidth", "spacing"] } }, cutout: "50%", rotation: 0, circumference: 360, radius: "100%", spacing: 0, indexAxis: "r" };
      static descriptors = { _scriptable: (t) => t !== "spacing", _indexable: (t) => t !== "spacing" && !t.startsWith("borderDash") && !t.startsWith("hoverBorderDash") };
      static overrides = { aspectRatio: 1, plugins: { legend: { labels: { generateLabels(t) {
        let e = t.data;
        if (e.labels.length && e.datasets.length) {
          let { labels: { pointStyle: s, color: n2 } } = t.legend.options;
          return e.labels.map((o2, a2) => {
            let l2 = t.getDatasetMeta(0).controller.getStyle(a2);
            return { text: o2, fillStyle: l2.backgroundColor, strokeStyle: l2.borderColor, fontColor: n2, lineWidth: l2.borderWidth, pointStyle: s, hidden: !t.getDataVisibility(a2), index: a2 };
          });
        }
        return [];
      } }, onClick(t, e, s) {
        s.chart.toggleDataVisibility(e.index), s.chart.update();
      } } } };
      constructor(t, e) {
        super(t, e), this.enableOptionSharing = true, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0;
      }
      linkScales() {
      }
      parse(t, e) {
        let s = this.getDataset().data, n2 = this._cachedMeta;
        if (this._parsing === false)
          n2._parsed = s;
        else {
          let o2 = (l2) => +s[l2];
          if (O3(s[t])) {
            let { key: l2 = "value" } = this._parsing;
            o2 = (c2) => +gt(s[c2], l2);
          }
          let a2, r;
          for (a2 = t, r = t + e; a2 < r; ++a2)
            n2._parsed[a2] = o2(a2);
        }
      }
      _getRotation() {
        return et(this.options.rotation - 90);
      }
      _getCircumference() {
        return et(this.options.circumference);
      }
      _getRotationExtents() {
        let t = F3, e = -F3;
        for (let s = 0; s < this.chart.data.datasets.length; ++s)
          if (this.chart.isDatasetVisible(s) && this.chart.getDatasetMeta(s).type === this._type) {
            let n2 = this.chart.getDatasetMeta(s).controller, o2 = n2._getRotation(), a2 = n2._getCircumference();
            t = Math.min(t, o2), e = Math.max(e, o2 + a2);
          }
        return { rotation: t, circumference: e - t };
      }
      update(t) {
        let e = this.chart, { chartArea: s } = e, n2 = this._cachedMeta, o2 = n2.data, a2 = this.getMaxBorderWidth() + this.getMaxOffset(o2) + this.options.spacing, r = Math.max((Math.min(s.width, s.height) - a2) / 2, 0), l2 = Math.min(Cs(this.options.cutout, r), 1), c2 = this._getRingWeight(this.index), { circumference: h3, rotation: d3 } = this._getRotationExtents(), { ratioX: u, ratioY: f2, offsetX: g2, offsetY: p3 } = Ha(d3, h3, l2), m3 = (s.width - a2) / u, b3 = (s.height - a2) / f2, _3 = Math.max(Math.min(m3, b3) / 2, 0), v3 = oi(this.options.radius, _3), y3 = Math.max(v3 * l2, 0), x2 = (v3 - y3) / this._getVisibleDatasetWeightTotal();
        this.offsetX = g2 * v3, this.offsetY = p3 * v3, n2.total = this.calculateTotal(), this.outerRadius = v3 - x2 * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - x2 * c2, 0), this.updateElements(o2, 0, o2.length, t);
      }
      _circumference(t, e) {
        let s = this.options, n2 = this._cachedMeta, o2 = this._getCircumference();
        return e && s.animation.animateRotate || !this.chart.getDataVisibility(t) || n2._parsed[t] === null || n2.data[t].hidden ? 0 : this.calculateCircumference(n2._parsed[t] * o2 / F3);
      }
      updateElements(t, e, s, n2) {
        let o2 = n2 === "reset", a2 = this.chart, r = a2.chartArea, c2 = a2.options.animation, h3 = (r.left + r.right) / 2, d3 = (r.top + r.bottom) / 2, u = o2 && c2.animateScale, f2 = u ? 0 : this.innerRadius, g2 = u ? 0 : this.outerRadius, { sharedOptions: p3, includeOptions: m3 } = this._getSharedOptions(e, n2), b3 = this._getRotation(), _3;
        for (_3 = 0; _3 < e; ++_3)
          b3 += this._circumference(_3, o2);
        for (_3 = e; _3 < e + s; ++_3) {
          let v3 = this._circumference(_3, o2), y3 = t[_3], x2 = { x: h3 + this.offsetX, y: d3 + this.offsetY, startAngle: b3, endAngle: b3 + v3, circumference: v3, outerRadius: g2, innerRadius: f2 };
          m3 && (x2.options = p3 || this.resolveDataElementOptions(_3, y3.active ? "active" : n2)), b3 += v3, this.updateElement(y3, _3, x2, n2);
        }
      }
      calculateTotal() {
        let t = this._cachedMeta, e = t.data, s = 0, n2;
        for (n2 = 0; n2 < e.length; n2++) {
          let o2 = t._parsed[n2];
          o2 !== null && !isNaN(o2) && this.chart.getDataVisibility(n2) && !e[n2].hidden && (s += Math.abs(o2));
        }
        return s;
      }
      calculateCircumference(t) {
        let e = this._cachedMeta.total;
        return e > 0 && !isNaN(t) ? F3 * (Math.abs(t) / e) : 0;
      }
      getLabelAndValue(t) {
        let e = this._cachedMeta, s = this.chart, n2 = s.data.labels || [], o2 = $t(e._parsed[t], s.options.locale);
        return { label: n2[t] || "", value: o2 };
      }
      getMaxBorderWidth(t) {
        let e = 0, s = this.chart, n2, o2, a2, r, l2;
        if (!t) {
          for (n2 = 0, o2 = s.data.datasets.length; n2 < o2; ++n2)
            if (s.isDatasetVisible(n2)) {
              a2 = s.getDatasetMeta(n2), t = a2.data, r = a2.controller;
              break;
            }
        }
        if (!t)
          return 0;
        for (n2 = 0, o2 = t.length; n2 < o2; ++n2)
          l2 = r.resolveDataElementOptions(n2), l2.borderAlign !== "inner" && (e = Math.max(e, l2.borderWidth || 0, l2.hoverBorderWidth || 0));
        return e;
      }
      getMaxOffset(t) {
        let e = 0;
        for (let s = 0, n2 = t.length; s < n2; ++s) {
          let o2 = this.resolveDataElementOptions(s);
          e = Math.max(e, o2.offset || 0, o2.hoverOffset || 0);
        }
        return e;
      }
      _getRingWeightOffset(t) {
        let e = 0;
        for (let s = 0; s < t; ++s)
          this.chart.isDatasetVisible(s) && (e += this._getRingWeight(s));
        return e;
      }
      _getRingWeight(t) {
        return Math.max(P3(this.chart.data.datasets[t].weight, 1), 0);
      }
      _getVisibleDatasetWeightTotal() {
        return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
      }
    };
    Ui = class extends dt {
      static id = "line";
      static defaults = { datasetElementType: "line", dataElementType: "point", showLine: true, spanGaps: false };
      static overrides = { scales: { _index_: { type: "category" }, _value_: { type: "linear" } } };
      initialize() {
        this.enableOptionSharing = true, this.supportsDecimation = true, super.initialize();
      }
      update(t) {
        let e = this._cachedMeta, { dataset: s, data: n2 = [], _dataset: o2 } = e, a2 = this.chart._animationsDisabled, { start: r, count: l2 } = pi(e, n2, a2);
        this._drawStart = r, this._drawCount = l2, mi(e) && (r = 0, l2 = n2.length), s._chart = this.chart, s._datasetIndex = this.index, s._decimated = !!o2._decimated, s.points = n2;
        let c2 = this.resolveDatasetElementOptions(t);
        this.options.showLine || (c2.borderWidth = 0), c2.segment = this.options.segment, this.updateElement(s, void 0, { animated: !a2, options: c2 }, t), this.updateElements(n2, r, l2, t);
      }
      updateElements(t, e, s, n2) {
        let o2 = n2 === "reset", { iScale: a2, vScale: r, _stacked: l2, _dataset: c2 } = this._cachedMeta, { sharedOptions: h3, includeOptions: d3 } = this._getSharedOptions(e, n2), u = a2.axis, f2 = r.axis, { spanGaps: g2, segment: p3 } = this.options, m3 = At(g2) ? g2 : Number.POSITIVE_INFINITY, b3 = this.chart._animationsDisabled || o2 || n2 === "none", _3 = e + s, v3 = t.length, y3 = e > 0 && this.getParsed(e - 1);
        for (let x2 = 0; x2 < v3; ++x2) {
          let M3 = t[x2], k3 = b3 ? M3 : {};
          if (x2 < e || x2 >= _3) {
            k3.skip = true;
            continue;
          }
          let S3 = this.getParsed(x2), w2 = L3(S3[f2]), D3 = k3[u] = a2.getPixelForValue(S3[u], x2), C3 = k3[f2] = o2 || w2 ? r.getBasePixel() : r.getPixelForValue(l2 ? this.applyStack(r, S3, l2) : S3[f2], x2);
          k3.skip = isNaN(D3) || isNaN(C3) || w2, k3.stop = x2 > 0 && Math.abs(S3[u] - y3[u]) > m3, p3 && (k3.parsed = S3, k3.raw = c2.data[x2]), d3 && (k3.options = h3 || this.resolveDataElementOptions(x2, M3.active ? "active" : n2)), b3 || this.updateElement(M3, x2, k3, n2), y3 = S3;
        }
      }
      getMaxOverflow() {
        let t = this._cachedMeta, e = t.dataset, s = e.options && e.options.borderWidth || 0, n2 = t.data || [];
        if (!n2.length)
          return s;
        let o2 = n2[0].size(this.resolveDataElementOptions(0)), a2 = n2[n2.length - 1].size(this.resolveDataElementOptions(n2.length - 1));
        return Math.max(s, o2, a2) / 2;
      }
      draw() {
        let t = this._cachedMeta;
        t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw();
      }
    };
    Ke = class extends dt {
      static id = "polarArea";
      static defaults = { dataElementType: "arc", animation: { animateRotate: true, animateScale: true }, animations: { numbers: { type: "number", properties: ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"] } }, indexAxis: "r", startAngle: 0 };
      static overrides = { aspectRatio: 1, plugins: { legend: { labels: { generateLabels(t) {
        let e = t.data;
        if (e.labels.length && e.datasets.length) {
          let { labels: { pointStyle: s, color: n2 } } = t.legend.options;
          return e.labels.map((o2, a2) => {
            let l2 = t.getDatasetMeta(0).controller.getStyle(a2);
            return { text: o2, fillStyle: l2.backgroundColor, strokeStyle: l2.borderColor, fontColor: n2, lineWidth: l2.borderWidth, pointStyle: s, hidden: !t.getDataVisibility(a2), index: a2 };
          });
        }
        return [];
      } }, onClick(t, e, s) {
        s.chart.toggleDataVisibility(e.index), s.chart.update();
      } } }, scales: { r: { type: "radialLinear", angleLines: { display: false }, beginAtZero: true, grid: { circular: true }, pointLabels: { display: false }, startAngle: 0 } } };
      constructor(t, e) {
        super(t, e), this.innerRadius = void 0, this.outerRadius = void 0;
      }
      getLabelAndValue(t) {
        let e = this._cachedMeta, s = this.chart, n2 = s.data.labels || [], o2 = $t(e._parsed[t].r, s.options.locale);
        return { label: n2[t] || "", value: o2 };
      }
      parseObjectData(t, e, s, n2) {
        return wi.bind(this)(t, e, s, n2);
      }
      update(t) {
        let e = this._cachedMeta.data;
        this._updateRadius(), this.updateElements(e, 0, e.length, t);
      }
      getMinMax() {
        let t = this._cachedMeta, e = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY };
        return t.data.forEach((s, n2) => {
          let o2 = this.getParsed(n2).r;
          !isNaN(o2) && this.chart.getDataVisibility(n2) && (o2 < e.min && (e.min = o2), o2 > e.max && (e.max = o2));
        }), e;
      }
      _updateRadius() {
        let t = this.chart, e = t.chartArea, s = t.options, n2 = Math.min(e.right - e.left, e.bottom - e.top), o2 = Math.max(n2 / 2, 0), a2 = Math.max(s.cutoutPercentage ? o2 / 100 * s.cutoutPercentage : 1, 0), r = (o2 - a2) / t.getVisibleDatasetCount();
        this.outerRadius = o2 - r * this.index, this.innerRadius = this.outerRadius - r;
      }
      updateElements(t, e, s, n2) {
        let o2 = n2 === "reset", a2 = this.chart, l2 = a2.options.animation, c2 = this._cachedMeta.rScale, h3 = c2.xCenter, d3 = c2.yCenter, u = c2.getIndexAngle(0) - 0.5 * z2, f2 = u, g2, p3 = 360 / this.countVisibleElements();
        for (g2 = 0; g2 < e; ++g2)
          f2 += this._computeAngle(g2, n2, p3);
        for (g2 = e; g2 < e + s; g2++) {
          let m3 = t[g2], b3 = f2, _3 = f2 + this._computeAngle(g2, n2, p3), v3 = a2.getDataVisibility(g2) ? c2.getDistanceFromCenterForValue(this.getParsed(g2).r) : 0;
          f2 = _3, o2 && (l2.animateScale && (v3 = 0), l2.animateRotate && (b3 = _3 = u));
          let y3 = { x: h3, y: d3, innerRadius: 0, outerRadius: v3, startAngle: b3, endAngle: _3, options: this.resolveDataElementOptions(g2, m3.active ? "active" : n2) };
          this.updateElement(m3, g2, y3, n2);
        }
      }
      countVisibleElements() {
        let t = this._cachedMeta, e = 0;
        return t.data.forEach((s, n2) => {
          !isNaN(this.getParsed(n2).r) && this.chart.getDataVisibility(n2) && e++;
        }), e;
      }
      _computeAngle(t, e, s) {
        return this.chart.getDataVisibility(t) ? et(this.resolveDataElementOptions(t, e).angle || s) : 0;
      }
    };
    Yi = class extends fe {
      static id = "pie";
      static defaults = { cutout: 0, rotation: 0, circumference: 360, radius: "100%" };
    };
    Xi = class extends dt {
      static id = "radar";
      static defaults = { datasetElementType: "line", dataElementType: "point", indexAxis: "r", showLine: true, elements: { line: { fill: "start" } } };
      static overrides = { aspectRatio: 1, scales: { r: { type: "radialLinear" } } };
      getLabelAndValue(t) {
        let e = this._cachedMeta.vScale, s = this.getParsed(t);
        return { label: e.getLabels()[t], value: "" + e.getLabelForValue(s[e.axis]) };
      }
      parseObjectData(t, e, s, n2) {
        return wi.bind(this)(t, e, s, n2);
      }
      update(t) {
        let e = this._cachedMeta, s = e.dataset, n2 = e.data || [], o2 = e.iScale.getLabels();
        if (s.points = n2, t !== "resize") {
          let a2 = this.resolveDatasetElementOptions(t);
          this.options.showLine || (a2.borderWidth = 0);
          let r = { _loop: true, _fullLoop: o2.length === n2.length, options: a2 };
          this.updateElement(s, void 0, r, t);
        }
        this.updateElements(n2, 0, n2.length, t);
      }
      updateElements(t, e, s, n2) {
        let o2 = this._cachedMeta.rScale, a2 = n2 === "reset";
        for (let r = e; r < e + s; r++) {
          let l2 = t[r], c2 = this.resolveDataElementOptions(r, l2.active ? "active" : n2), h3 = o2.getPointPositionForValue(r, this.getParsed(r).r), d3 = a2 ? o2.xCenter : h3.x, u = a2 ? o2.yCenter : h3.y, f2 = { x: d3, y: u, angle: h3.angle, skip: isNaN(d3) || isNaN(u), options: c2 };
          this.updateElement(l2, r, f2, n2);
        }
      }
    };
    Ki = class extends dt {
      static id = "scatter";
      static defaults = { datasetElementType: false, dataElementType: "point", showLine: false, fill: false };
      static overrides = { interaction: { mode: "point" }, scales: { x: { type: "linear" }, y: { type: "linear" } } };
      getLabelAndValue(t) {
        let e = this._cachedMeta, s = this.chart.data.labels || [], { xScale: n2, yScale: o2 } = e, a2 = this.getParsed(t), r = n2.getLabelForValue(a2.x), l2 = o2.getLabelForValue(a2.y);
        return { label: s[t] || "", value: "(" + r + ", " + l2 + ")" };
      }
      update(t) {
        let e = this._cachedMeta, { data: s = [] } = e, n2 = this.chart._animationsDisabled, { start: o2, count: a2 } = pi(e, s, n2);
        if (this._drawStart = o2, this._drawCount = a2, mi(e) && (o2 = 0, a2 = s.length), this.options.showLine) {
          this.datasetElementType || this.addElements();
          let { dataset: r, _dataset: l2 } = e;
          r._chart = this.chart, r._datasetIndex = this.index, r._decimated = !!l2._decimated, r.points = s;
          let c2 = this.resolveDatasetElementOptions(t);
          c2.segment = this.options.segment, this.updateElement(r, void 0, { animated: !n2, options: c2 }, t);
        } else
          this.datasetElementType && (delete e.dataset, this.datasetElementType = false);
        this.updateElements(s, o2, a2, t);
      }
      addElements() {
        let { showLine: t } = this.options;
        !this.datasetElementType && t && (this.datasetElementType = this.chart.registry.getElement("line")), super.addElements();
      }
      updateElements(t, e, s, n2) {
        let o2 = n2 === "reset", { iScale: a2, vScale: r, _stacked: l2, _dataset: c2 } = this._cachedMeta, h3 = this.resolveDataElementOptions(e, n2), d3 = this.getSharedOptions(h3), u = this.includeOptions(n2, d3), f2 = a2.axis, g2 = r.axis, { spanGaps: p3, segment: m3 } = this.options, b3 = At(p3) ? p3 : Number.POSITIVE_INFINITY, _3 = this.chart._animationsDisabled || o2 || n2 === "none", v3 = e > 0 && this.getParsed(e - 1);
        for (let y3 = e; y3 < e + s; ++y3) {
          let x2 = t[y3], M3 = this.getParsed(y3), k3 = _3 ? x2 : {}, S3 = L3(M3[g2]), w2 = k3[f2] = a2.getPixelForValue(M3[f2], y3), D3 = k3[g2] = o2 || S3 ? r.getBasePixel() : r.getPixelForValue(l2 ? this.applyStack(r, M3, l2) : M3[g2], y3);
          k3.skip = isNaN(w2) || isNaN(D3) || S3, k3.stop = y3 > 0 && Math.abs(M3[f2] - v3[f2]) > b3, m3 && (k3.parsed = M3, k3.raw = c2.data[y3]), u && (k3.options = d3 || this.resolveDataElementOptions(y3, x2.active ? "active" : n2)), _3 || this.updateElement(x2, y3, k3, n2), v3 = M3;
        }
        this.updateSharedOptions(d3, n2, h3);
      }
      getMaxOverflow() {
        let t = this._cachedMeta, e = t.data || [];
        if (!this.options.showLine) {
          let r = 0;
          for (let l2 = e.length - 1; l2 >= 0; --l2)
            r = Math.max(r, e[l2].size(this.resolveDataElementOptions(l2)) / 2);
          return r > 0 && r;
        }
        let s = t.dataset, n2 = s.options && s.options.borderWidth || 0;
        if (!e.length)
          return n2;
        let o2 = e[0].size(this.resolveDataElementOptions(0)), a2 = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
        return Math.max(n2, o2, a2) / 2;
      }
    };
    ja = Object.freeze({ __proto__: null, BarController: ji, BubbleController: $i, DoughnutController: fe, LineController: Ui, PieController: Yi, PolarAreaController: Ke, RadarController: Xi, ScatterController: Ki });
    qi = class i2 {
      static override(t) {
        Object.assign(i2.prototype, t);
      }
      options;
      constructor(t) {
        this.options = t || {};
      }
      init() {
      }
      formats() {
        return Tt();
      }
      parse() {
        return Tt();
      }
      format() {
        return Tt();
      }
      add() {
        return Tt();
      }
      diff() {
        return Tt();
      }
      startOf() {
        return Tt();
      }
      endOf() {
        return Tt();
      }
    };
    $a = { _date: qi };
    qa = { evaluateInteractionItems: _e, modes: { index(i4, t, e, s) {
      let n2 = kt(t, i4), o2 = e.axis || "x", a2 = e.includeInvisible || false, r = e.intersect ? Ii(i4, n2, o2, s, a2) : zi(i4, n2, o2, false, s, a2), l2 = [];
      return r.length ? (i4.getSortedVisibleDatasetMetas().forEach((c2) => {
        let h3 = r[0].index, d3 = c2.data[h3];
        d3 && !d3.skip && l2.push({ element: d3, datasetIndex: c2.index, index: h3 });
      }), l2) : [];
    }, dataset(i4, t, e, s) {
      let n2 = kt(t, i4), o2 = e.axis || "xy", a2 = e.includeInvisible || false, r = e.intersect ? Ii(i4, n2, o2, s, a2) : zi(i4, n2, o2, false, s, a2);
      if (r.length > 0) {
        let l2 = r[0].datasetIndex, c2 = i4.getDatasetMeta(l2).data;
        r = [];
        for (let h3 = 0; h3 < c2.length; ++h3)
          r.push({ element: c2[h3], datasetIndex: l2, index: h3 });
      }
      return r;
    }, point(i4, t, e, s) {
      let n2 = kt(t, i4), o2 = e.axis || "xy", a2 = e.includeInvisible || false;
      return Ii(i4, n2, o2, s, a2);
    }, nearest(i4, t, e, s) {
      let n2 = kt(t, i4), o2 = e.axis || "xy", a2 = e.includeInvisible || false;
      return zi(i4, n2, o2, e.intersect, s, a2);
    }, x(i4, t, e, s) {
      let n2 = kt(t, i4);
      return fn(i4, n2, "x", e.intersect, s);
    }, y(i4, t, e, s) {
      let n2 = kt(t, i4);
      return fn(i4, n2, "y", e.intersect, s);
    } } };
    oo = ["left", "top", "right", "bottom"];
    q3 = { addBox(i4, t) {
      i4.boxes || (i4.boxes = []), t.fullSize = t.fullSize || false, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() {
        return [{ z: 0, draw(e) {
          t.draw(e);
        } }];
      }, i4.boxes.push(t);
    }, removeBox(i4, t) {
      let e = i4.boxes ? i4.boxes.indexOf(t) : -1;
      e !== -1 && i4.boxes.splice(e, 1);
    }, configure(i4, t, e) {
      t.fullSize = e.fullSize, t.position = e.position, t.weight = e.weight;
    }, update(i4, t, e, s) {
      if (!i4)
        return;
      let n2 = X3(i4.options.layout.padding), o2 = Math.max(t - n2.width, 0), a2 = Math.max(e - n2.height, 0), r = Za(i4.boxes), l2 = r.vertical, c2 = r.horizontal;
      T3(i4.boxes, (p3) => {
        typeof p3.beforeLayout == "function" && p3.beforeLayout();
      });
      let h3 = l2.reduce((p3, m3) => m3.box.options && m3.box.options.display === false ? p3 : p3 + 1, 0) || 1, d3 = Object.freeze({ outerWidth: t, outerHeight: e, padding: n2, availableWidth: o2, availableHeight: a2, vBoxMaxWidth: o2 / 2 / h3, hBoxMaxHeight: a2 / 2 }), u = Object.assign({}, n2);
      ao(u, X3(s));
      let f2 = Object.assign({ maxPadding: u, w: o2, h: a2, x: n2.left, y: n2.top }, n2), g2 = Qa(l2.concat(c2), d3);
      de(r.fullSize, f2, d3, g2), de(l2, f2, d3, g2), de(c2, f2, d3, g2) && de(l2, f2, d3, g2), er(f2), mn(r.leftAndTop, f2, d3, g2), f2.x += f2.w, f2.y += f2.h, mn(r.rightAndBottom, f2, d3, g2), i4.chartArea = { left: f2.left, top: f2.top, right: f2.left + f2.w, bottom: f2.top + f2.h, height: f2.h, width: f2.w }, T3(r.chartArea, (p3) => {
        let m3 = p3.box;
        Object.assign(m3, i4.chartArea), m3.update(f2.w, f2.h, { left: 0, top: 0, right: 0, bottom: 0 });
      });
    } };
    qe = class {
      acquireContext(t, e) {
      }
      releaseContext(t) {
        return false;
      }
      addEventListener(t, e, s) {
      }
      removeEventListener(t, e, s) {
      }
      getDevicePixelRatio() {
        return 1;
      }
      getMaximumSize(t, e, s, n2) {
        return e = Math.max(0, e || t.width), s = s || t.height, { width: e, height: Math.max(0, n2 ? Math.floor(e / n2) : s) };
      }
      isAttached(t) {
        return true;
      }
      updateConfig(t) {
      }
    };
    Gi = class extends qe {
      acquireContext(t) {
        return t && t.getContext && t.getContext("2d") || null;
      }
      updateConfig(t) {
        t.options.animation = false;
      }
    };
    Ue = "$chartjs";
    sr = { touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup", pointerenter: "mouseenter", pointerdown: "mousedown", pointermove: "mousemove", pointerup: "mouseup", pointerleave: "mouseout", pointerout: "mouseout" };
    bn = (i4) => i4 === null || i4 === "";
    ro = Js ? { passive: true } : false;
    ge = /* @__PURE__ */ new Map();
    _n = 0;
    Ji = class extends qe {
      acquireContext(t, e) {
        let s = t && t.getContext && t.getContext("2d");
        return s && s.canvas === t ? (nr(t, e), s) : null;
      }
      releaseContext(t) {
        let e = t.canvas;
        if (!e[Ue])
          return false;
        let s = e[Ue].initial;
        ["height", "width"].forEach((o2) => {
          let a2 = s[o2];
          L3(a2) ? e.removeAttribute(o2) : e.setAttribute(o2, a2);
        });
        let n2 = s.style || {};
        return Object.keys(n2).forEach((o2) => {
          e.style[o2] = n2[o2];
        }), e.width = e.width, delete e[Ue], true;
      }
      addEventListener(t, e, s) {
        this.removeEventListener(t, e);
        let n2 = t.$proxies || (t.$proxies = {}), a2 = { attach: lr, detach: cr, resize: ur }[e] || fr;
        n2[e] = a2(t, e, s);
      }
      removeEventListener(t, e) {
        let s = t.$proxies || (t.$proxies = {}), n2 = s[e];
        if (!n2)
          return;
        ({ attach: Fi, detach: Fi, resize: Fi }[e] || ar)(t, e, n2), s[e] = void 0;
      }
      getDevicePixelRatio() {
        return window.devicePixelRatio;
      }
      getMaximumSize(t, e, s, n2) {
        return Gs(t, e, s, n2);
      }
      isAttached(t) {
        let e = ze(t);
        return !!(e && e.isConnected);
      }
    };
    nt = class {
      static defaults = {};
      static defaultRoutes = void 0;
      x;
      y;
      active = false;
      options;
      $animations;
      tooltipPosition(t) {
        let { x: e, y: s } = this.getProps(["x", "y"], t);
        return { x: e, y: s };
      }
      hasValue() {
        return At(this.x) && At(this.y);
      }
      getProps(t, e) {
        let s = this.$animations;
        if (!e || !s)
          return this;
        let n2 = {};
        return t.forEach((o2) => {
          n2[o2] = s[o2] && s[o2].active() ? s[o2]._to : this[o2];
        }), n2;
      }
    };
    vr = (i4) => i4 === "left" ? "right" : i4 === "right" ? "left" : i4;
    xn = (i4, t, e) => t === "top" || t === "left" ? i4[t] + e : i4[t] - e;
    yn = (i4, t) => Math.min(t || i4, i4);
    Et = class i3 extends nt {
      constructor(t) {
        super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = { left: 0, right: 0, top: 0, bottom: 0 }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = false, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = false, this.$context = void 0;
      }
      init(t) {
        this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax);
      }
      parse(t, e) {
        return t;
      }
      getUserBounds() {
        let { _userMin: t, _userMax: e, _suggestedMin: s, _suggestedMax: n2 } = this;
        return t = J3(t, Number.POSITIVE_INFINITY), e = J3(e, Number.NEGATIVE_INFINITY), s = J3(s, Number.POSITIVE_INFINITY), n2 = J3(n2, Number.NEGATIVE_INFINITY), { min: J3(t, s), max: J3(e, n2), minDefined: V3(t), maxDefined: V3(e) };
      }
      getMinMax(t) {
        let { min: e, max: s, minDefined: n2, maxDefined: o2 } = this.getUserBounds(), a2;
        if (n2 && o2)
          return { min: e, max: s };
        let r = this.getMatchingVisibleMetas();
        for (let l2 = 0, c2 = r.length; l2 < c2; ++l2)
          a2 = r[l2].controller.getMinMax(this, t), n2 || (e = Math.min(e, a2.min)), o2 || (s = Math.max(s, a2.max));
        return e = o2 && e > s ? s : e, s = n2 && e > s ? e : s, { min: J3(e, J3(s, e)), max: J3(s, J3(e, s)) };
      }
      getPadding() {
        return { left: this.paddingLeft || 0, top: this.paddingTop || 0, right: this.paddingRight || 0, bottom: this.paddingBottom || 0 };
      }
      getTicks() {
        return this.ticks;
      }
      getLabels() {
        let t = this.chart.data;
        return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
      }
      getLabelItems(t = this.chart.chartArea) {
        return this._labelItems || (this._labelItems = this._computeLabelItems(t));
      }
      beforeLayout() {
        this._cache = {}, this._dataLimitsCached = false;
      }
      beforeUpdate() {
        E2(this.options.beforeUpdate, [this]);
      }
      update(t, e, s) {
        let { beginAtZero: n2, grace: o2, ticks: a2 } = this.options, r = a2.sampleSize;
        this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = s = Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, s), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + s.left + s.right : this.height + s.top + s.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = $s(this, o2, n2), this._dataLimitsCached = true), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
        let l2 = r < this.ticks.length;
        this._convertTicksToLabels(l2 ? vn(this.ticks, r) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), a2.display && (a2.autoSkip || a2.source === "auto") && (this.ticks = pr(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l2 && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
      }
      configure() {
        let t = this.options.reverse, e, s;
        this.isHorizontal() ? (e = this.left, s = this.right) : (e = this.top, s = this.bottom, t = !t), this._startPixel = e, this._endPixel = s, this._reversePixels = t, this._length = s - e, this._alignToPixels = this.options.alignToPixels;
      }
      afterUpdate() {
        E2(this.options.afterUpdate, [this]);
      }
      beforeSetDimensions() {
        E2(this.options.beforeSetDimensions, [this]);
      }
      setDimensions() {
        this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
      }
      afterSetDimensions() {
        E2(this.options.afterSetDimensions, [this]);
      }
      _callHooks(t) {
        this.chart.notifyPlugins(t, this.getContext()), E2(this.options[t], [this]);
      }
      beforeDataLimits() {
        this._callHooks("beforeDataLimits");
      }
      determineDataLimits() {
      }
      afterDataLimits() {
        this._callHooks("afterDataLimits");
      }
      beforeBuildTicks() {
        this._callHooks("beforeBuildTicks");
      }
      buildTicks() {
        return [];
      }
      afterBuildTicks() {
        this._callHooks("afterBuildTicks");
      }
      beforeTickToLabelConversion() {
        E2(this.options.beforeTickToLabelConversion, [this]);
      }
      generateTickLabels(t) {
        let e = this.options.ticks, s, n2, o2;
        for (s = 0, n2 = t.length; s < n2; s++)
          o2 = t[s], o2.label = E2(e.callback, [o2.value, s, t], this);
      }
      afterTickToLabelConversion() {
        E2(this.options.afterTickToLabelConversion, [this]);
      }
      beforeCalculateLabelRotation() {
        E2(this.options.beforeCalculateLabelRotation, [this]);
      }
      calculateLabelRotation() {
        let t = this.options, e = t.ticks, s = yn(this.ticks.length, t.ticks.maxTicksLimit), n2 = e.minRotation || 0, o2 = e.maxRotation, a2 = n2, r, l2, c2;
        if (!this._isVisible() || !e.display || n2 >= o2 || s <= 1 || !this.isHorizontal()) {
          this.labelRotation = n2;
          return;
        }
        let h3 = this._getLabelSizes(), d3 = h3.widest.width, u = h3.highest.height, f2 = $3(this.chart.width - d3, 0, this.maxWidth);
        r = t.offset ? this.maxWidth / s : f2 / (s - 1), d3 + 6 > r && (r = f2 / (s - (t.offset ? 0.5 : 1)), l2 = this.maxHeight - ce(t.grid) - e.padding - Mn(t.title, this.chart.options.font), c2 = Math.sqrt(d3 * d3 + u * u), a2 = Ce(Math.min(Math.asin($3((h3.highest.height + 6) / r, -1, 1)), Math.asin($3(l2 / c2, -1, 1)) - Math.asin($3(u / c2, -1, 1)))), a2 = Math.max(n2, Math.min(o2, a2))), this.labelRotation = a2;
      }
      afterCalculateLabelRotation() {
        E2(this.options.afterCalculateLabelRotation, [this]);
      }
      afterAutoSkip() {
      }
      beforeFit() {
        E2(this.options.beforeFit, [this]);
      }
      fit() {
        let t = { width: 0, height: 0 }, { chart: e, options: { ticks: s, title: n2, grid: o2 } } = this, a2 = this._isVisible(), r = this.isHorizontal();
        if (a2) {
          let l2 = Mn(n2, e.options.font);
          if (r ? (t.width = this.maxWidth, t.height = ce(o2) + l2) : (t.height = this.maxHeight, t.width = ce(o2) + l2), s.display && this.ticks.length) {
            let { first: c2, last: h3, widest: d3, highest: u } = this._getLabelSizes(), f2 = s.padding * 2, g2 = et(this.labelRotation), p3 = Math.cos(g2), m3 = Math.sin(g2);
            if (r) {
              let b3 = s.mirror ? 0 : m3 * d3.width + p3 * u.height;
              t.height = Math.min(this.maxHeight, t.height + b3 + f2);
            } else {
              let b3 = s.mirror ? 0 : p3 * d3.width + m3 * u.height;
              t.width = Math.min(this.maxWidth, t.width + b3 + f2);
            }
            this._calculatePadding(c2, h3, m3, p3);
          }
        }
        this._handleMargins(), r ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom);
      }
      _calculatePadding(t, e, s, n2) {
        let { ticks: { align: o2, padding: a2 }, position: r } = this.options, l2 = this.labelRotation !== 0, c2 = r !== "top" && this.axis === "x";
        if (this.isHorizontal()) {
          let h3 = this.getPixelForTick(0) - this.left, d3 = this.right - this.getPixelForTick(this.ticks.length - 1), u = 0, f2 = 0;
          l2 ? c2 ? (u = n2 * t.width, f2 = s * e.height) : (u = s * t.height, f2 = n2 * e.width) : o2 === "start" ? f2 = e.width : o2 === "end" ? u = t.width : o2 !== "inner" && (u = t.width / 2, f2 = e.width / 2), this.paddingLeft = Math.max((u - h3 + a2) * this.width / (this.width - h3), 0), this.paddingRight = Math.max((f2 - d3 + a2) * this.width / (this.width - d3), 0);
        } else {
          let h3 = e.height / 2, d3 = t.height / 2;
          o2 === "start" ? (h3 = 0, d3 = t.height) : o2 === "end" && (h3 = e.height, d3 = 0), this.paddingTop = h3 + a2, this.paddingBottom = d3 + a2;
        }
      }
      _handleMargins() {
        this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
      }
      afterFit() {
        E2(this.options.afterFit, [this]);
      }
      isHorizontal() {
        let { axis: t, position: e } = this.options;
        return e === "top" || e === "bottom" || t === "x";
      }
      isFullSize() {
        return this.options.fullSize;
      }
      _convertTicksToLabels(t) {
        this.beforeTickToLabelConversion(), this.generateTickLabels(t);
        let e, s;
        for (e = 0, s = t.length; e < s; e++)
          L3(t[e].label) && (t.splice(e, 1), s--, e--);
        this.afterTickToLabelConversion();
      }
      _getLabelSizes() {
        let t = this._labelSizes;
        if (!t) {
          let e = this.options.ticks.sampleSize, s = this.ticks;
          e < s.length && (s = vn(s, e)), this._labelSizes = t = this._computeLabelSizes(s, s.length, this.options.ticks.maxTicksLimit);
        }
        return t;
      }
      _computeLabelSizes(t, e, s) {
        let { ctx: n2, _longestTextCache: o2 } = this, a2 = [], r = [], l2 = Math.floor(e / yn(e, s)), c2 = 0, h3 = 0, d3, u, f2, g2, p3, m3, b3, _3, v3, y3, x2;
        for (d3 = 0; d3 < e; d3 += l2) {
          if (g2 = t[d3].label, p3 = this._resolveTickFontOptions(d3), n2.font = m3 = p3.string, b3 = o2[m3] = o2[m3] || { data: {}, gc: [] }, _3 = p3.lineHeight, v3 = y3 = 0, !L3(g2) && !I3(g2))
            v3 = ee2(n2, b3.data, b3.gc, v3, g2), y3 = _3;
          else if (I3(g2))
            for (u = 0, f2 = g2.length; u < f2; ++u)
              x2 = g2[u], !L3(x2) && !I3(x2) && (v3 = ee2(n2, b3.data, b3.gc, v3, x2), y3 += _3);
          a2.push(v3), r.push(y3), c2 = Math.max(v3, c2), h3 = Math.max(y3, h3);
        }
        kr(o2, e);
        let M3 = a2.indexOf(c2), k3 = r.indexOf(h3), S3 = (w2) => ({ width: a2[w2] || 0, height: r[w2] || 0 });
        return { first: S3(0), last: S3(e - 1), widest: S3(M3), highest: S3(k3), widths: a2, heights: r };
      }
      getLabelForValue(t) {
        return t;
      }
      getPixelForValue(t, e) {
        return NaN;
      }
      getValueForPixel(t) {
      }
      getPixelForTick(t) {
        let e = this.ticks;
        return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
      }
      getPixelForDecimal(t) {
        this._reversePixels && (t = 1 - t);
        let e = this._startPixel + t * this._length;
        return Rs(this._alignToPixels ? yt(this.chart, e, 0) : e);
      }
      getDecimalForPixel(t) {
        let e = (t - this._startPixel) / this._length;
        return this._reversePixels ? 1 - e : e;
      }
      getBasePixel() {
        return this.getPixelForValue(this.getBaseValue());
      }
      getBaseValue() {
        let { min: t, max: e } = this;
        return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
      }
      getContext(t) {
        let e = this.ticks || [];
        if (t >= 0 && t < e.length) {
          let s = e[t];
          return s.$context || (s.$context = wr(this.getContext(), t, s));
        }
        return this.$context || (this.$context = Sr(this.chart.getContext(), this));
      }
      _tickSize() {
        let t = this.options.ticks, e = et(this.labelRotation), s = Math.abs(Math.cos(e)), n2 = Math.abs(Math.sin(e)), o2 = this._getLabelSizes(), a2 = t.autoSkipPadding || 0, r = o2 ? o2.widest.width + a2 : 0, l2 = o2 ? o2.highest.height + a2 : 0;
        return this.isHorizontal() ? l2 * s > r * n2 ? r / s : l2 / n2 : l2 * n2 < r * s ? l2 / s : r / n2;
      }
      _isVisible() {
        let t = this.options.display;
        return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
      }
      _computeGridLineItems(t) {
        let e = this.axis, s = this.chart, n2 = this.options, { grid: o2, position: a2, border: r } = n2, l2 = o2.offset, c2 = this.isHorizontal(), d3 = this.ticks.length + (l2 ? 1 : 0), u = ce(o2), f2 = [], g2 = r.setContext(this.getContext()), p3 = g2.display ? g2.width : 0, m3 = p3 / 2, b3 = function(B3) {
          return yt(s, B3, p3);
        }, _3, v3, y3, x2, M3, k3, S3, w2, D3, C3, A3, U3;
        if (a2 === "top")
          _3 = b3(this.bottom), k3 = this.bottom - u, w2 = _3 - m3, C3 = b3(t.top) + m3, U3 = t.bottom;
        else if (a2 === "bottom")
          _3 = b3(this.top), C3 = t.top, U3 = b3(t.bottom) - m3, k3 = _3 + m3, w2 = this.top + u;
        else if (a2 === "left")
          _3 = b3(this.right), M3 = this.right - u, S3 = _3 - m3, D3 = b3(t.left) + m3, A3 = t.right;
        else if (a2 === "right")
          _3 = b3(this.left), D3 = t.left, A3 = b3(t.right) - m3, M3 = _3 + m3, S3 = this.left + u;
        else if (e === "x") {
          if (a2 === "center")
            _3 = b3((t.top + t.bottom) / 2 + 0.5);
          else if (O3(a2)) {
            let B3 = Object.keys(a2)[0], H3 = a2[B3];
            _3 = b3(this.chart.scales[B3].getPixelForValue(H3));
          }
          C3 = t.top, U3 = t.bottom, k3 = _3 + m3, w2 = k3 + u;
        } else if (e === "y") {
          if (a2 === "center")
            _3 = b3((t.left + t.right) / 2);
          else if (O3(a2)) {
            let B3 = Object.keys(a2)[0], H3 = a2[B3];
            _3 = b3(this.chart.scales[B3].getPixelForValue(H3));
          }
          M3 = _3 - m3, S3 = M3 - u, D3 = t.left, A3 = t.right;
        }
        let tt = P3(n2.ticks.maxTicksLimit, d3), R2 = Math.max(1, Math.ceil(d3 / tt));
        for (v3 = 0; v3 < d3; v3 += R2) {
          let B3 = this.getContext(v3), H3 = o2.setContext(B3), it = r.setContext(B3), K3 = H3.lineWidth, It = H3.color, xe = it.dash || [], zt = it.dashOffset, Qt = H3.tickWidth, wt = H3.tickColor, Zt = H3.tickBorderDash || [], Pt = H3.tickBorderDashOffset;
          y3 = Mr(this, v3, l2), y3 !== void 0 && (x2 = yt(s, y3, K3), c2 ? M3 = S3 = D3 = A3 = x2 : k3 = w2 = C3 = U3 = x2, f2.push({ tx1: M3, ty1: k3, tx2: S3, ty2: w2, x1: D3, y1: C3, x2: A3, y2: U3, width: K3, color: It, borderDash: xe, borderDashOffset: zt, tickWidth: Qt, tickColor: wt, tickBorderDash: Zt, tickBorderDashOffset: Pt }));
        }
        return this._ticksLength = d3, this._borderValue = _3, f2;
      }
      _computeLabelItems(t) {
        let e = this.axis, s = this.options, { position: n2, ticks: o2 } = s, a2 = this.isHorizontal(), r = this.ticks, { align: l2, crossAlign: c2, padding: h3, mirror: d3 } = o2, u = ce(s.grid), f2 = u + h3, g2 = d3 ? -h3 : f2, p3 = -et(this.labelRotation), m3 = [], b3, _3, v3, y3, x2, M3, k3, S3, w2, D3, C3, A3, U3 = "middle";
        if (n2 === "top")
          M3 = this.bottom - g2, k3 = this._getXAxisLabelAlignment();
        else if (n2 === "bottom")
          M3 = this.top + g2, k3 = this._getXAxisLabelAlignment();
        else if (n2 === "left") {
          let R2 = this._getYAxisLabelAlignment(u);
          k3 = R2.textAlign, x2 = R2.x;
        } else if (n2 === "right") {
          let R2 = this._getYAxisLabelAlignment(u);
          k3 = R2.textAlign, x2 = R2.x;
        } else if (e === "x") {
          if (n2 === "center")
            M3 = (t.top + t.bottom) / 2 + f2;
          else if (O3(n2)) {
            let R2 = Object.keys(n2)[0], B3 = n2[R2];
            M3 = this.chart.scales[R2].getPixelForValue(B3) + f2;
          }
          k3 = this._getXAxisLabelAlignment();
        } else if (e === "y") {
          if (n2 === "center")
            x2 = (t.left + t.right) / 2 - f2;
          else if (O3(n2)) {
            let R2 = Object.keys(n2)[0], B3 = n2[R2];
            x2 = this.chart.scales[R2].getPixelForValue(B3);
          }
          k3 = this._getYAxisLabelAlignment(u).textAlign;
        }
        e === "y" && (l2 === "start" ? U3 = "top" : l2 === "end" && (U3 = "bottom"));
        let tt = this._getLabelSizes();
        for (b3 = 0, _3 = r.length; b3 < _3; ++b3) {
          v3 = r[b3], y3 = v3.label;
          let R2 = o2.setContext(this.getContext(b3));
          S3 = this.getPixelForTick(b3) + o2.labelOffset, w2 = this._resolveTickFontOptions(b3), D3 = w2.lineHeight, C3 = I3(y3) ? y3.length : 1;
          let B3 = C3 / 2, H3 = R2.color, it = R2.textStrokeColor, K3 = R2.textStrokeWidth, It = k3;
          a2 ? (x2 = S3, k3 === "inner" && (b3 === _3 - 1 ? It = this.options.reverse ? "left" : "right" : b3 === 0 ? It = this.options.reverse ? "right" : "left" : It = "center"), n2 === "top" ? c2 === "near" || p3 !== 0 ? A3 = -C3 * D3 + D3 / 2 : c2 === "center" ? A3 = -tt.highest.height / 2 - B3 * D3 + D3 : A3 = -tt.highest.height + D3 / 2 : c2 === "near" || p3 !== 0 ? A3 = D3 / 2 : c2 === "center" ? A3 = tt.highest.height / 2 - B3 * D3 : A3 = tt.highest.height - C3 * D3, d3 && (A3 *= -1), p3 !== 0 && !R2.showLabelBackdrop && (x2 += D3 / 2 * Math.sin(p3))) : (M3 = S3, A3 = (1 - C3) * D3 / 2);
          let xe;
          if (R2.showLabelBackdrop) {
            let zt = X3(R2.backdropPadding), Qt = tt.heights[b3], wt = tt.widths[b3], Zt = A3 - zt.top, Pt = 0 - zt.left;
            switch (U3) {
              case "middle":
                Zt -= Qt / 2;
                break;
              case "bottom":
                Zt -= Qt;
                break;
            }
            switch (k3) {
              case "center":
                Pt -= wt / 2;
                break;
              case "right":
                Pt -= wt;
                break;
              case "inner":
                b3 === _3 - 1 ? Pt -= wt : b3 > 0 && (Pt -= wt / 2);
                break;
            }
            xe = { left: Pt, top: Zt, width: wt + zt.width, height: Qt + zt.height, color: R2.backdropColor };
          }
          m3.push({ label: y3, font: w2, textOffset: A3, options: { rotation: p3, color: H3, strokeColor: it, strokeWidth: K3, textAlign: It, textBaseline: U3, translation: [x2, M3], backdrop: xe } });
        }
        return m3;
      }
      _getXAxisLabelAlignment() {
        let { position: t, ticks: e } = this.options;
        if (-et(this.labelRotation))
          return t === "top" ? "left" : "right";
        let n2 = "center";
        return e.align === "start" ? n2 = "left" : e.align === "end" ? n2 = "right" : e.align === "inner" && (n2 = "inner"), n2;
      }
      _getYAxisLabelAlignment(t) {
        let { position: e, ticks: { crossAlign: s, mirror: n2, padding: o2 } } = this.options, a2 = this._getLabelSizes(), r = t + o2, l2 = a2.widest.width, c2, h3;
        return e === "left" ? n2 ? (h3 = this.right + o2, s === "near" ? c2 = "left" : s === "center" ? (c2 = "center", h3 += l2 / 2) : (c2 = "right", h3 += l2)) : (h3 = this.right - r, s === "near" ? c2 = "right" : s === "center" ? (c2 = "center", h3 -= l2 / 2) : (c2 = "left", h3 = this.left)) : e === "right" ? n2 ? (h3 = this.left + o2, s === "near" ? c2 = "right" : s === "center" ? (c2 = "center", h3 -= l2 / 2) : (c2 = "left", h3 -= l2)) : (h3 = this.left + r, s === "near" ? c2 = "left" : s === "center" ? (c2 = "center", h3 += l2 / 2) : (c2 = "right", h3 = this.right)) : c2 = "right", { textAlign: c2, x: h3 };
      }
      _computeLabelArea() {
        if (this.options.ticks.mirror)
          return;
        let t = this.chart, e = this.options.position;
        if (e === "left" || e === "right")
          return { top: 0, left: this.left, bottom: t.height, right: this.right };
        if (e === "top" || e === "bottom")
          return { top: this.top, left: 0, bottom: this.bottom, right: t.width };
      }
      drawBackground() {
        let { ctx: t, options: { backgroundColor: e }, left: s, top: n2, width: o2, height: a2 } = this;
        e && (t.save(), t.fillStyle = e, t.fillRect(s, n2, o2, a2), t.restore());
      }
      getLineWidthForValue(t) {
        let e = this.options.grid;
        if (!this._isVisible() || !e.display)
          return 0;
        let n2 = this.ticks.findIndex((o2) => o2.value === t);
        return n2 >= 0 ? e.setContext(this.getContext(n2)).lineWidth : 0;
      }
      drawGrid(t) {
        let e = this.options.grid, s = this.ctx, n2 = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t)), o2, a2, r = (l2, c2, h3) => {
          !h3.width || !h3.color || (s.save(), s.lineWidth = h3.width, s.strokeStyle = h3.color, s.setLineDash(h3.borderDash || []), s.lineDashOffset = h3.borderDashOffset, s.beginPath(), s.moveTo(l2.x, l2.y), s.lineTo(c2.x, c2.y), s.stroke(), s.restore());
        };
        if (e.display)
          for (o2 = 0, a2 = n2.length; o2 < a2; ++o2) {
            let l2 = n2[o2];
            e.drawOnChartArea && r({ x: l2.x1, y: l2.y1 }, { x: l2.x2, y: l2.y2 }, l2), e.drawTicks && r({ x: l2.tx1, y: l2.ty1 }, { x: l2.tx2, y: l2.ty2 }, { color: l2.tickColor, width: l2.tickWidth, borderDash: l2.tickBorderDash, borderDashOffset: l2.tickBorderDashOffset });
          }
      }
      drawBorder() {
        let { chart: t, ctx: e, options: { border: s, grid: n2 } } = this, o2 = s.setContext(this.getContext()), a2 = s.display ? o2.width : 0;
        if (!a2)
          return;
        let r = n2.setContext(this.getContext(0)).lineWidth, l2 = this._borderValue, c2, h3, d3, u;
        this.isHorizontal() ? (c2 = yt(t, this.left, a2) - a2 / 2, h3 = yt(t, this.right, r) + r / 2, d3 = u = l2) : (d3 = yt(t, this.top, a2) - a2 / 2, u = yt(t, this.bottom, r) + r / 2, c2 = h3 = l2), e.save(), e.lineWidth = o2.width, e.strokeStyle = o2.color, e.beginPath(), e.moveTo(c2, d3), e.lineTo(h3, u), e.stroke(), e.restore();
      }
      drawLabels(t) {
        if (!this.options.ticks.display)
          return;
        let s = this.ctx, n2 = this._computeLabelArea();
        n2 && ne2(s, n2);
        let o2 = this.getLabelItems(t);
        for (let a2 of o2) {
          let r = a2.options, l2 = a2.font, c2 = a2.label, h3 = a2.textOffset;
          vt(s, c2, 0, h3, l2, r);
        }
        n2 && oe(s);
      }
      drawTitle() {
        let { ctx: t, options: { position: e, title: s, reverse: n2 } } = this;
        if (!s.display)
          return;
        let o2 = j3(s.font), a2 = X3(s.padding), r = s.align, l2 = o2.lineHeight / 2;
        e === "bottom" || e === "center" || O3(e) ? (l2 += a2.bottom, I3(s.text) && (l2 += o2.lineHeight * (s.text.length - 1))) : l2 += a2.top;
        let { titleX: c2, titleY: h3, maxWidth: d3, rotation: u } = Dr(this, l2, e, r);
        vt(t, s.text, 0, 0, o2, { color: s.color, maxWidth: d3, rotation: u, textAlign: Pr(r, e, n2), textBaseline: "middle", translation: [c2, h3] });
      }
      draw(t) {
        this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
      }
      _layers() {
        let t = this.options, e = t.ticks && t.ticks.z || 0, s = P3(t.grid && t.grid.z, -1), n2 = P3(t.border && t.border.z, 0);
        return !this._isVisible() || this.draw !== i3.prototype.draw ? [{ z: e, draw: (o2) => {
          this.draw(o2);
        } }] : [{ z: s, draw: (o2) => {
          this.drawBackground(), this.drawGrid(o2), this.drawTitle();
        } }, { z: n2, draw: () => {
          this.drawBorder();
        } }, { z: e, draw: (o2) => {
          this.drawLabels(o2);
        } }];
      }
      getMatchingVisibleMetas(t) {
        let e = this.chart.getSortedVisibleDatasetMetas(), s = this.axis + "AxisID", n2 = [], o2, a2;
        for (o2 = 0, a2 = e.length; o2 < a2; ++o2) {
          let r = e[o2];
          r[s] === this.id && (!t || r.type === t) && n2.push(r);
        }
        return n2;
      }
      _resolveTickFontOptions(t) {
        let e = this.options.ticks.setContext(this.getContext(t));
        return j3(e.font);
      }
      _maxDigits() {
        let t = this._resolveTickFontOptions(0).lineHeight;
        return (this.isHorizontal() ? this.width : this.height) / t;
      }
    };
    Kt = class {
      constructor(t, e, s) {
        this.type = t, this.scope = e, this.override = s, this.items = /* @__PURE__ */ Object.create(null);
      }
      isForType(t) {
        return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
      }
      register(t) {
        let e = Object.getPrototypeOf(t), s;
        Ar(e) && (s = this.register(e));
        let n2 = this.items, o2 = t.id, a2 = this.scope + "." + o2;
        if (!o2)
          throw new Error("class does not have id: " + t);
        return o2 in n2 || (n2[o2] = t, Cr(t, a2, s), this.override && W3.override(t.id, t.overrides)), a2;
      }
      get(t) {
        return this.items[t];
      }
      unregister(t) {
        let e = this.items, s = t.id, n2 = this.scope;
        s in e && delete e[s], n2 && s in W3[n2] && (delete W3[n2][s], this.override && delete xt[s]);
      }
    };
    Qi = class {
      constructor() {
        this.controllers = new Kt(dt, "datasets", true), this.elements = new Kt(nt, "elements"), this.plugins = new Kt(Object, "plugins"), this.scales = new Kt(Et, "scales"), this._typedRegistries = [this.controllers, this.scales, this.elements];
      }
      add(...t) {
        this._each("register", t);
      }
      remove(...t) {
        this._each("unregister", t);
      }
      addControllers(...t) {
        this._each("register", t, this.controllers);
      }
      addElements(...t) {
        this._each("register", t, this.elements);
      }
      addPlugins(...t) {
        this._each("register", t, this.plugins);
      }
      addScales(...t) {
        this._each("register", t, this.scales);
      }
      getController(t) {
        return this._get(t, this.controllers, "controller");
      }
      getElement(t) {
        return this._get(t, this.elements, "element");
      }
      getPlugin(t) {
        return this._get(t, this.plugins, "plugin");
      }
      getScale(t) {
        return this._get(t, this.scales, "scale");
      }
      removeControllers(...t) {
        this._each("unregister", t, this.controllers);
      }
      removeElements(...t) {
        this._each("unregister", t, this.elements);
      }
      removePlugins(...t) {
        this._each("unregister", t, this.plugins);
      }
      removeScales(...t) {
        this._each("unregister", t, this.scales);
      }
      _each(t, e, s) {
        [...e].forEach((n2) => {
          let o2 = s || this._getRegistryForType(n2);
          s || o2.isForType(n2) || o2 === this.plugins && n2.id ? this._exec(t, o2, n2) : T3(n2, (a2) => {
            let r = s || this._getRegistryForType(a2);
            this._exec(t, r, a2);
          });
        });
      }
      _exec(t, e, s) {
        let n2 = De(t);
        E2(s["before" + n2], [], s), e[t](s), E2(s["after" + n2], [], s);
      }
      _getRegistryForType(t) {
        for (let e = 0; e < this._typedRegistries.length; e++) {
          let s = this._typedRegistries[e];
          if (s.isForType(t))
            return s;
        }
        return this.plugins;
      }
      _get(t, e, s) {
        let n2 = e.get(t);
        if (n2 === void 0)
          throw new Error('"' + t + '" is not a registered ' + s + ".");
        return n2;
      }
    };
    ht = new Qi();
    Zi = class {
      constructor() {
        this._init = [];
      }
      notify(t, e, s, n2) {
        e === "beforeInit" && (this._init = this._createDescriptors(t, true), this._notify(this._init, t, "install"));
        let o2 = n2 ? this._descriptors(t).filter(n2) : this._descriptors(t), a2 = this._notify(o2, t, e, s);
        return e === "afterDestroy" && (this._notify(o2, t, "stop"), this._notify(this._init, t, "uninstall")), a2;
      }
      _notify(t, e, s, n2) {
        n2 = n2 || {};
        for (let o2 of t) {
          let a2 = o2.plugin, r = a2[s], l2 = [e, n2, o2.options];
          if (E2(r, l2, a2) === false && n2.cancelable)
            return false;
        }
        return true;
      }
      invalidate() {
        L3(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
      }
      _descriptors(t) {
        if (this._cache)
          return this._cache;
        let e = this._cache = this._createDescriptors(t);
        return this._notifyStateChanges(t), e;
      }
      _createDescriptors(t, e) {
        let s = t && t.config, n2 = P3(s.options && s.options.plugins, {}), o2 = Lr(s);
        return n2 === false && !e ? [] : Rr(t, o2, n2, e);
      }
      _notifyStateChanges(t) {
        let e = this._oldCache || [], s = this._cache, n2 = (o2, a2) => o2.filter((r) => !a2.some((l2) => r.plugin.id === l2.plugin.id));
        this._notify(n2(e, s), t, "stop"), this._notify(n2(s, e), t, "start");
      }
    };
    wn = /* @__PURE__ */ new Map();
    uo = /* @__PURE__ */ new Set();
    he = (i4, t, e) => {
      let s = gt(t, e);
      s !== void 0 && i4.add(s);
    };
    is = class {
      constructor(t) {
        this._config = Wr(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
      }
      get platform() {
        return this._config.platform;
      }
      get type() {
        return this._config.type;
      }
      set type(t) {
        this._config.type = t;
      }
      get data() {
        return this._config.data;
      }
      set data(t) {
        this._config.data = ho(t);
      }
      get options() {
        return this._config.options;
      }
      set options(t) {
        this._config.options = t;
      }
      get plugins() {
        return this._config.plugins;
      }
      update() {
        let t = this._config;
        this.clearCache(), co(t);
      }
      clearCache() {
        this._scopeCache.clear(), this._resolverCache.clear();
      }
      datasetScopeKeys(t) {
        return We(t, () => [[`datasets.${t}`, ""]]);
      }
      datasetAnimationScopeKeys(t, e) {
        return We(`${t}.transition.${e}`, () => [[`datasets.${t}.transitions.${e}`, `transitions.${e}`], [`datasets.${t}`, ""]]);
      }
      datasetElementScopeKeys(t, e) {
        return We(`${t}-${e}`, () => [[`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ""]]);
      }
      pluginScopeKeys(t) {
        let e = t.id, s = this.type;
        return We(`${s}-plugin-${e}`, () => [[`plugins.${e}`, ...t.additionalOptionScopes || []]]);
      }
      _cachedScopes(t, e) {
        let s = this._scopeCache, n2 = s.get(t);
        return (!n2 || e) && (n2 = /* @__PURE__ */ new Map(), s.set(t, n2)), n2;
      }
      getOptionScopes(t, e, s) {
        let { options: n2, type: o2 } = this, a2 = this._cachedScopes(t, s), r = a2.get(e);
        if (r)
          return r;
        let l2 = /* @__PURE__ */ new Set();
        e.forEach((h3) => {
          t && (l2.add(t), h3.forEach((d3) => he(l2, t, d3))), h3.forEach((d3) => he(l2, n2, d3)), h3.forEach((d3) => he(l2, xt[o2] || {}, d3)), h3.forEach((d3) => he(l2, W3, d3)), h3.forEach((d3) => he(l2, Le, d3));
        });
        let c2 = Array.from(l2);
        return c2.length === 0 && c2.push(/* @__PURE__ */ Object.create(null)), uo.has(e) && a2.set(e, c2), c2;
      }
      chartOptionScopes() {
        let { options: t, type: e } = this;
        return [t, xt[e] || {}, W3.datasets[e] || {}, { type: e }, W3, Le];
      }
      resolveNamedOptions(t, e, s, n2 = [""]) {
        let o2 = { $shared: true }, { resolver: a2, subPrefixes: r } = Pn(this._resolverCache, t, n2), l2 = a2;
        if (Hr(a2, e)) {
          o2.$shared = false, s = ut(s) ? s() : s;
          let c2 = this.createResolver(t, s, r);
          l2 = Ot(a2, s, c2);
        }
        for (let c2 of e)
          o2[c2] = l2[c2];
        return o2;
      }
      createResolver(t, e, s = [""], n2) {
        let { resolver: o2 } = Pn(this._resolverCache, t, s);
        return O3(e) ? Ot(o2, e, void 0, n2) : o2;
      }
    };
    Nr = (i4) => O3(i4) && Object.getOwnPropertyNames(i4).some((t) => ut(i4[t]));
    jr = "4.4.2";
    $r = ["top", "bottom", "left", "right", "chartArea"];
    Ye = {};
    An = (i4) => {
      let t = fo(i4);
      return Object.values(Ye).filter((e) => e.canvas === t).pop();
    };
    qt = class {
      static defaults = W3;
      static instances = Ye;
      static overrides = xt;
      static registry = ht;
      static version = jr;
      static getChart = An;
      static register(...t) {
        ht.add(...t), Ln();
      }
      static unregister(...t) {
        ht.remove(...t), Ln();
      }
      constructor(t, e) {
        let s = this.config = new is(e), n2 = fo(t), o2 = An(n2);
        if (o2)
          throw new Error("Canvas is already in use. Chart with ID '" + o2.id + "' must be destroyed before the canvas with ID '" + o2.canvas.id + "' can be reused.");
        let a2 = s.createResolver(s.chartOptionScopes(), this.getContext());
        this.platform = new (s.platform || gr(n2))(), this.platform.updateConfig(s);
        let r = this.platform.acquireContext(n2, a2.aspectRatio), l2 = r && r.canvas, c2 = l2 && l2.height, h3 = l2 && l2.width;
        if (this.id = Ds(), this.ctx = r, this.canvas = l2, this.width = h3, this.height = c2, this._options = a2, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new Zi(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = false, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = Bs((d3) => this.update(d3), a2.resizeDelay || 0), this._dataChanges = [], Ye[this.id] = this, !r || !l2) {
          console.error("Failed to create chart: can't acquire context from the given item");
          return;
        }
        mt.listen(this, "complete", On), mt.listen(this, "progress", Ur), this._initialize(), this.attached && this.update();
      }
      get aspectRatio() {
        let { options: { aspectRatio: t, maintainAspectRatio: e }, width: s, height: n2, _aspectRatio: o2 } = this;
        return L3(t) ? e && o2 ? o2 : n2 ? s / n2 : null : t;
      }
      get data() {
        return this.config.data;
      }
      set data(t) {
        this.config.data = t;
      }
      get options() {
        return this._options;
      }
      set options(t) {
        this.config.options = t;
      }
      get registry() {
        return ht;
      }
      _initialize() {
        return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Pi(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
      }
      clear() {
        return xi(this.canvas, this.ctx), this;
      }
      stop() {
        return mt.stop(this), this;
      }
      resize(t, e) {
        mt.running(this) ? this._resizeBeforeDraw = { width: t, height: e } : this._resize(t, e);
      }
      _resize(t, e) {
        let s = this.options, n2 = this.canvas, o2 = s.maintainAspectRatio && this.aspectRatio, a2 = this.platform.getMaximumSize(n2, t, e, o2), r = s.devicePixelRatio || this.platform.getDevicePixelRatio(), l2 = this.width ? "resize" : "attach";
        this.width = a2.width, this.height = a2.height, this._aspectRatio = this.aspectRatio, Pi(this, r, true) && (this.notifyPlugins("resize", { size: a2 }), E2(s.onResize, [this, a2], this), this.attached && this._doResize(l2) && this.render());
      }
      ensureScalesHaveIDs() {
        let e = this.options.scales || {};
        T3(e, (s, n2) => {
          s.id = n2;
        });
      }
      buildOrUpdateScales() {
        let t = this.options, e = t.scales, s = this.scales, n2 = Object.keys(s).reduce((a2, r) => (a2[r] = false, a2), {}), o2 = [];
        e && (o2 = o2.concat(Object.keys(e).map((a2) => {
          let r = e[a2], l2 = es(a2, r), c2 = l2 === "r", h3 = l2 === "x";
          return { options: r, dposition: c2 ? "chartArea" : h3 ? "bottom" : "left", dtype: c2 ? "radialLinear" : h3 ? "category" : "linear" };
        }))), T3(o2, (a2) => {
          let r = a2.options, l2 = r.id, c2 = es(l2, r), h3 = P3(r.type, a2.dtype);
          (r.position === void 0 || Dn(r.position, c2) !== Dn(a2.dposition)) && (r.position = a2.dposition), n2[l2] = true;
          let d3 = null;
          if (l2 in s && s[l2].type === h3)
            d3 = s[l2];
          else {
            let u = ht.getScale(h3);
            d3 = new u({ id: l2, type: h3, ctx: this.ctx, chart: this }), s[d3.id] = d3;
          }
          d3.init(r, t);
        }), T3(n2, (a2, r) => {
          a2 || delete s[r];
        }), T3(s, (a2) => {
          q3.configure(this, a2, a2.options), q3.addBox(this, a2);
        });
      }
      _updateMetasets() {
        let t = this._metasets, e = this.data.datasets.length, s = t.length;
        if (t.sort((n2, o2) => n2.index - o2.index), s > e) {
          for (let n2 = e; n2 < s; ++n2)
            this._destroyDatasetMeta(n2);
          t.splice(e, s - e);
        }
        this._sortedMetasets = t.slice(0).sort(Cn("order", "index"));
      }
      _removeUnreferencedMetasets() {
        let { _metasets: t, data: { datasets: e } } = this;
        t.length > e.length && delete this._stacks, t.forEach((s, n2) => {
          e.filter((o2) => o2 === s._dataset).length === 0 && this._destroyDatasetMeta(n2);
        });
      }
      buildOrUpdateControllers() {
        let t = [], e = this.data.datasets, s, n2;
        for (this._removeUnreferencedMetasets(), s = 0, n2 = e.length; s < n2; s++) {
          let o2 = e[s], a2 = this.getDatasetMeta(s), r = o2.type || this.config.type;
          if (a2.type && a2.type !== r && (this._destroyDatasetMeta(s), a2 = this.getDatasetMeta(s)), a2.type = r, a2.indexAxis = o2.indexAxis || ts(r, this.options), a2.order = o2.order || 0, a2.index = s, a2.label = "" + o2.label, a2.visible = this.isDatasetVisible(s), a2.controller)
            a2.controller.updateIndex(s), a2.controller.linkScales();
          else {
            let l2 = ht.getController(r), { datasetElementType: c2, dataElementType: h3 } = W3.datasets[r];
            Object.assign(l2, { dataElementType: ht.getElement(h3), datasetElementType: c2 && ht.getElement(c2) }), a2.controller = new l2(this, s), t.push(a2.controller);
          }
        }
        return this._updateMetasets(), t;
      }
      _resetElements() {
        T3(this.data.datasets, (t, e) => {
          this.getDatasetMeta(e).controller.reset();
        }, this);
      }
      reset() {
        this._resetElements(), this.notifyPlugins("reset");
      }
      update(t) {
        let e = this.config;
        e.update();
        let s = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()), n2 = this._animationsDisabled = !s.animation;
        if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", { mode: t, cancelable: true }) === false)
          return;
        let o2 = this.buildOrUpdateControllers();
        this.notifyPlugins("beforeElementsUpdate");
        let a2 = 0;
        for (let c2 = 0, h3 = this.data.datasets.length; c2 < h3; c2++) {
          let { controller: d3 } = this.getDatasetMeta(c2), u = !n2 && o2.indexOf(d3) === -1;
          d3.buildOrUpdateElements(u), a2 = Math.max(+d3.getMaxOverflow(), a2);
        }
        a2 = this._minPadding = s.layout.autoPadding ? a2 : 0, this._updateLayout(a2), n2 || T3(o2, (c2) => {
          c2.reset();
        }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", { mode: t }), this._layers.sort(Cn("z", "_idx"));
        let { _active: r, _lastEvent: l2 } = this;
        l2 ? this._eventHandler(l2, true) : r.length && this._updateHoverStyles(r, r, true), this.render();
      }
      _updateScales() {
        T3(this.scales, (t) => {
          q3.removeBox(this, t);
        }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
      }
      _checkEventBindings() {
        let t = this.options, e = new Set(Object.keys(this._listeners)), s = new Set(t.events);
        (!ai(e, s) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
      }
      _updateHiddenIndices() {
        let { _hiddenIndices: t } = this, e = this._getUniformDataChanges() || [];
        for (let { method: s, start: n2, count: o2 } of e) {
          let a2 = s === "_removeElements" ? -o2 : o2;
          Yr(t, n2, a2);
        }
      }
      _getUniformDataChanges() {
        let t = this._dataChanges;
        if (!t || !t.length)
          return;
        this._dataChanges = [];
        let e = this.data.datasets.length, s = (o2) => new Set(t.filter((a2) => a2[0] === o2).map((a2, r) => r + "," + a2.splice(1).join(","))), n2 = s(0);
        for (let o2 = 1; o2 < e; o2++)
          if (!ai(n2, s(o2)))
            return;
        return Array.from(n2).map((o2) => o2.split(",")).map((o2) => ({ method: o2[1], start: +o2[2], count: +o2[3] }));
      }
      _updateLayout(t) {
        if (this.notifyPlugins("beforeLayout", { cancelable: true }) === false)
          return;
        q3.update(this, this.width, this.height, t);
        let e = this.chartArea, s = e.width <= 0 || e.height <= 0;
        this._layers = [], T3(this.boxes, (n2) => {
          s && n2.position === "chartArea" || (n2.configure && n2.configure(), this._layers.push(...n2._layers()));
        }, this), this._layers.forEach((n2, o2) => {
          n2._idx = o2;
        }), this.notifyPlugins("afterLayout");
      }
      _updateDatasets(t) {
        if (this.notifyPlugins("beforeDatasetsUpdate", { mode: t, cancelable: true }) !== false) {
          for (let e = 0, s = this.data.datasets.length; e < s; ++e)
            this.getDatasetMeta(e).controller.configure();
          for (let e = 0, s = this.data.datasets.length; e < s; ++e)
            this._updateDataset(e, ut(t) ? t({ datasetIndex: e }) : t);
          this.notifyPlugins("afterDatasetsUpdate", { mode: t });
        }
      }
      _updateDataset(t, e) {
        let s = this.getDatasetMeta(t), n2 = { meta: s, index: t, mode: e, cancelable: true };
        this.notifyPlugins("beforeDatasetUpdate", n2) !== false && (s.controller._update(e), n2.cancelable = false, this.notifyPlugins("afterDatasetUpdate", n2));
      }
      render() {
        this.notifyPlugins("beforeRender", { cancelable: true }) !== false && (mt.has(this) ? this.attached && !mt.running(this) && mt.start(this) : (this.draw(), On({ chart: this })));
      }
      draw() {
        let t;
        if (this._resizeBeforeDraw) {
          let { width: s, height: n2 } = this._resizeBeforeDraw;
          this._resize(s, n2), this._resizeBeforeDraw = null;
        }
        if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", { cancelable: true }) === false)
          return;
        let e = this._layers;
        for (t = 0; t < e.length && e[t].z <= 0; ++t)
          e[t].draw(this.chartArea);
        for (this._drawDatasets(); t < e.length; ++t)
          e[t].draw(this.chartArea);
        this.notifyPlugins("afterDraw");
      }
      _getSortedDatasetMetas(t) {
        let e = this._sortedMetasets, s = [], n2, o2;
        for (n2 = 0, o2 = e.length; n2 < o2; ++n2) {
          let a2 = e[n2];
          (!t || a2.visible) && s.push(a2);
        }
        return s;
      }
      getSortedVisibleDatasetMetas() {
        return this._getSortedDatasetMetas(true);
      }
      _drawDatasets() {
        if (this.notifyPlugins("beforeDatasetsDraw", { cancelable: true }) === false)
          return;
        let t = this.getSortedVisibleDatasetMetas();
        for (let e = t.length - 1; e >= 0; --e)
          this._drawDataset(t[e]);
        this.notifyPlugins("afterDatasetsDraw");
      }
      _drawDataset(t) {
        let e = this.ctx, s = t._clip, n2 = !s.disabled, o2 = Kr(t, this.chartArea), a2 = { meta: t, index: t.index, cancelable: true };
        this.notifyPlugins("beforeDatasetDraw", a2) !== false && (n2 && ne2(e, { left: s.left === false ? 0 : o2.left - s.left, right: s.right === false ? this.width : o2.right + s.right, top: s.top === false ? 0 : o2.top - s.top, bottom: s.bottom === false ? this.height : o2.bottom + s.bottom }), t.controller.draw(), n2 && oe(e), a2.cancelable = false, this.notifyPlugins("afterDatasetDraw", a2));
      }
      isPointInArea(t) {
        return at(t, this.chartArea, this._minPadding);
      }
      getElementsAtEventForMode(t, e, s, n2) {
        let o2 = qa.modes[e];
        return typeof o2 == "function" ? o2(this, t, s, n2) : [];
      }
      getDatasetMeta(t) {
        let e = this.data.datasets[t], s = this._metasets, n2 = s.filter((o2) => o2 && o2._dataset === e).pop();
        return n2 || (n2 = { type: null, data: [], dataset: null, controller: null, hidden: null, xAxisID: null, yAxisID: null, order: e && e.order || 0, index: t, _dataset: e, _parsed: [], _sorted: false }, s.push(n2)), n2;
      }
      getContext() {
        return this.$context || (this.$context = pt(null, { chart: this, type: "chart" }));
      }
      getVisibleDatasetCount() {
        return this.getSortedVisibleDatasetMetas().length;
      }
      isDatasetVisible(t) {
        let e = this.data.datasets[t];
        if (!e)
          return false;
        let s = this.getDatasetMeta(t);
        return typeof s.hidden == "boolean" ? !s.hidden : !e.hidden;
      }
      setDatasetVisibility(t, e) {
        let s = this.getDatasetMeta(t);
        s.hidden = !e;
      }
      toggleDataVisibility(t) {
        this._hiddenIndices[t] = !this._hiddenIndices[t];
      }
      getDataVisibility(t) {
        return !this._hiddenIndices[t];
      }
      _updateVisibility(t, e, s) {
        let n2 = s ? "show" : "hide", o2 = this.getDatasetMeta(t), a2 = o2.controller._resolveAnimations(void 0, n2);
        Nt(e) ? (o2.data[e].hidden = !s, this.update()) : (this.setDatasetVisibility(t, s), a2.update(o2, { visible: s }), this.update((r) => r.datasetIndex === t ? n2 : void 0));
      }
      hide(t, e) {
        this._updateVisibility(t, e, false);
      }
      show(t, e) {
        this._updateVisibility(t, e, true);
      }
      _destroyDatasetMeta(t) {
        let e = this._metasets[t];
        e && e.controller && e.controller._destroy(), delete this._metasets[t];
      }
      _stop() {
        let t, e;
        for (this.stop(), mt.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
          this._destroyDatasetMeta(t);
      }
      destroy() {
        this.notifyPlugins("beforeDestroy");
        let { canvas: t, ctx: e } = this;
        this._stop(), this.config.clearCache(), t && (this.unbindEvents(), xi(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete Ye[this.id], this.notifyPlugins("afterDestroy");
      }
      toBase64Image(...t) {
        return this.canvas.toDataURL(...t);
      }
      bindEvents() {
        this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = true;
      }
      bindUserEvents() {
        let t = this._listeners, e = this.platform, s = (o2, a2) => {
          e.addEventListener(this, o2, a2), t[o2] = a2;
        }, n2 = (o2, a2, r) => {
          o2.offsetX = a2, o2.offsetY = r, this._eventHandler(o2);
        };
        T3(this.options.events, (o2) => s(o2, n2));
      }
      bindResponsiveEvents() {
        this._responsiveListeners || (this._responsiveListeners = {});
        let t = this._responsiveListeners, e = this.platform, s = (l2, c2) => {
          e.addEventListener(this, l2, c2), t[l2] = c2;
        }, n2 = (l2, c2) => {
          t[l2] && (e.removeEventListener(this, l2, c2), delete t[l2]);
        }, o2 = (l2, c2) => {
          this.canvas && this.resize(l2, c2);
        }, a2, r = () => {
          n2("attach", r), this.attached = true, this.resize(), s("resize", o2), s("detach", a2);
        };
        a2 = () => {
          this.attached = false, n2("resize", o2), this._stop(), this._resize(0, 0), s("attach", r);
        }, e.isAttached(this.canvas) ? r() : a2();
      }
      unbindEvents() {
        T3(this._listeners, (t, e) => {
          this.platform.removeEventListener(this, e, t);
        }), this._listeners = {}, T3(this._responsiveListeners, (t, e) => {
          this.platform.removeEventListener(this, e, t);
        }), this._responsiveListeners = void 0;
      }
      updateHoverStyle(t, e, s) {
        let n2 = s ? "set" : "remove", o2, a2, r, l2;
        for (e === "dataset" && (o2 = this.getDatasetMeta(t[0].datasetIndex), o2.controller["_" + n2 + "DatasetHoverStyle"]()), r = 0, l2 = t.length; r < l2; ++r) {
          a2 = t[r];
          let c2 = a2 && this.getDatasetMeta(a2.datasetIndex).controller;
          c2 && c2[n2 + "HoverStyle"](a2.element, a2.datasetIndex, a2.index);
        }
      }
      getActiveElements() {
        return this._active || [];
      }
      setActiveElements(t) {
        let e = this._active || [], s = t.map(({ datasetIndex: o2, index: a2 }) => {
          let r = this.getDatasetMeta(o2);
          if (!r)
            throw new Error("No dataset found at index " + o2);
          return { datasetIndex: o2, element: r.data[a2], index: a2 };
        });
        !ie(s, e) && (this._active = s, this._lastEvent = null, this._updateHoverStyles(s, e));
      }
      notifyPlugins(t, e, s) {
        return this._plugins.notify(this, t, e, s);
      }
      isPluginEnabled(t) {
        return this._plugins._cache.filter((e) => e.plugin.id === t).length === 1;
      }
      _updateHoverStyles(t, e, s) {
        let n2 = this.options.hover, o2 = (l2, c2) => l2.filter((h3) => !c2.some((d3) => h3.datasetIndex === d3.datasetIndex && h3.index === d3.index)), a2 = o2(e, t), r = s ? t : o2(t, e);
        a2.length && this.updateHoverStyle(a2, n2.mode, false), r.length && n2.mode && this.updateHoverStyle(r, n2.mode, true);
      }
      _eventHandler(t, e) {
        let s = { event: t, replay: e, cancelable: true, inChartArea: this.isPointInArea(t) }, n2 = (a2) => (a2.options.events || this.options.events).includes(t.native.type);
        if (this.notifyPlugins("beforeEvent", s, n2) === false)
          return;
        let o2 = this._handleEvent(t, e, s.inChartArea);
        return s.cancelable = false, this.notifyPlugins("afterEvent", s, n2), (o2 || s.changed) && this.render(), this;
      }
      _handleEvent(t, e, s) {
        let { _active: n2 = [], options: o2 } = this, a2 = e, r = this._getActiveElements(t, n2, s, a2), l2 = As(t), c2 = Xr(t, this._lastEvent, s, l2);
        s && (this._lastEvent = null, E2(o2.onHover, [t, r, this], this), l2 && E2(o2.onClick, [t, r, this], this));
        let h3 = !ie(r, n2);
        return (h3 || e) && (this._active = r, this._updateHoverStyles(r, n2, e)), this._lastEvent = c2, h3;
      }
      _getActiveElements(t, e, s, n2) {
        if (t.type === "mouseout")
          return [];
        if (!s)
          return e;
        let o2 = this.options.hover;
        return this.getElementsAtEventForMode(t, o2.mode, o2, n2);
      }
    };
    ss = class extends nt {
      static id = "arc";
      static defaults = { borderAlign: "center", borderColor: "#fff", borderDash: [], borderDashOffset: 0, borderJoinStyle: void 0, borderRadius: 0, borderWidth: 2, offset: 0, spacing: 0, angle: void 0, circular: true };
      static defaultRoutes = { backgroundColor: "backgroundColor" };
      static descriptors = { _scriptable: true, _indexable: (t) => t !== "borderDash" };
      circumference;
      endAngle;
      fullCircles;
      innerRadius;
      outerRadius;
      pixelMargin;
      startAngle;
      constructor(t) {
        super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, t && Object.assign(this, t);
      }
      inRange(t, e, s) {
        let n2 = this.getProps(["x", "y"], s), { angle: o2, distance: a2 } = hi(n2, { x: t, y: e }), { startAngle: r, endAngle: l2, innerRadius: c2, outerRadius: h3, circumference: d3 } = this.getProps(["startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], s), u = (this.options.spacing + this.options.borderWidth) / 2, g2 = P3(d3, l2 - r) >= F3 || jt(o2, r, l2), p3 = lt(a2, c2 + u, h3 + u);
        return g2 && p3;
      }
      getCenterPoint(t) {
        let { x: e, y: s, startAngle: n2, endAngle: o2, innerRadius: a2, outerRadius: r } = this.getProps(["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"], t), { offset: l2, spacing: c2 } = this.options, h3 = (n2 + o2) / 2, d3 = (a2 + r + c2 + l2) / 2;
        return { x: e + Math.cos(h3) * d3, y: s + Math.sin(h3) * d3 };
      }
      tooltipPosition(t) {
        return this.getCenterPoint(t);
      }
      draw(t) {
        let { options: e, circumference: s } = this, n2 = (e.offset || 0) / 4, o2 = (e.spacing || 0) / 2, a2 = e.circular;
        if (this.pixelMargin = e.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = s > F3 ? Math.floor(s / F3) : 0, s === 0 || this.innerRadius < 0 || this.outerRadius < 0)
          return;
        t.save();
        let r = (this.startAngle + this.endAngle) / 2;
        t.translate(Math.cos(r) * n2, Math.sin(r) * n2);
        let l2 = 1 - Math.sin(Math.min(z2, s || 0)), c2 = n2 * l2;
        t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor, Qr(t, this, c2, o2, a2), Zr(t, this, c2, o2, a2), t.restore();
      }
    };
    rl = typeof Path2D == "function";
    Gt = class extends nt {
      static id = "line";
      static defaults = { borderCapStyle: "butt", borderDash: [], borderDashOffset: 0, borderJoinStyle: "miter", borderWidth: 3, capBezierPoints: true, cubicInterpolationMode: "default", fill: false, spanGaps: false, stepped: false, tension: 0 };
      static defaultRoutes = { backgroundColor: "backgroundColor", borderColor: "borderColor" };
      static descriptors = { _scriptable: true, _indexable: (t) => t !== "borderDash" && t !== "fill" };
      constructor(t) {
        super(), this.animated = true, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = false, this._pointsUpdated = false, this._datasetIndex = void 0, t && Object.assign(this, t);
      }
      updateControlPoints(t, e) {
        let s = this.options;
        if ((s.tension || s.cubicInterpolationMode === "monotone") && !s.stepped && !this._pointsUpdated) {
          let n2 = s.spanGaps ? this._loop : this._fullLoop;
          qs(this._points, s, t, n2, e), this._pointsUpdated = true;
        }
      }
      set points(t) {
        this._points = t, delete this._segments, delete this._path, this._pointsUpdated = false;
      }
      get points() {
        return this._points;
      }
      get segments() {
        return this._segments || (this._segments = en(this, this.options.segment));
      }
      first() {
        let t = this.segments, e = this.points;
        return t.length && e[t[0].start];
      }
      last() {
        let t = this.segments, e = this.points, s = t.length;
        return s && e[t[s - 1].end];
      }
      interpolate(t, e) {
        let s = this.options, n2 = t[e], o2 = this.points, a2 = Li(this, { property: e, start: n2, end: n2 });
        if (!a2.length)
          return;
        let r = [], l2 = nl(s), c2, h3;
        for (c2 = 0, h3 = a2.length; c2 < h3; ++c2) {
          let { start: d3, end: u } = a2[c2], f2 = o2[d3], g2 = o2[u];
          if (f2 === g2) {
            r.push(f2);
            continue;
          }
          let p3 = Math.abs((n2 - f2[e]) / (g2[e] - f2[e])), m3 = l2(f2, g2, p3, s.stepped);
          m3[e] = t[e], r.push(m3);
        }
        return r.length === 1 ? r[0] : r;
      }
      pathSegment(t, e, s) {
        return ns(this)(t, this, e, s);
      }
      path(t, e, s) {
        let n2 = this.segments, o2 = ns(this), a2 = this._loop;
        e = e || 0, s = s || this.points.length - e;
        for (let r of n2)
          a2 &= o2(t, this, r, { start: e, end: e + s - 1 });
        return !!a2;
      }
      draw(t, e, s, n2) {
        let o2 = this.options || {};
        (this.points || []).length && o2.borderWidth && (t.save(), ll(t, this, s, n2), t.restore()), this.animated && (this._pointsUpdated = false, this._path = void 0);
      }
    };
    os = class extends nt {
      static id = "point";
      parsed;
      skip;
      stop;
      static defaults = { borderWidth: 1, hitRadius: 1, hoverBorderWidth: 1, hoverRadius: 4, pointStyle: "circle", radius: 3, rotation: 0 };
      static defaultRoutes = { backgroundColor: "backgroundColor", borderColor: "borderColor" };
      constructor(t) {
        super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, t && Object.assign(this, t);
      }
      inRange(t, e, s) {
        let n2 = this.options, { x: o2, y: a2 } = this.getProps(["x", "y"], s);
        return Math.pow(t - o2, 2) + Math.pow(e - a2, 2) < Math.pow(n2.hitRadius + n2.radius, 2);
      }
      inXRange(t, e) {
        return Tn(this, t, "x", e);
      }
      inYRange(t, e) {
        return Tn(this, t, "y", e);
      }
      getCenterPoint(t) {
        let { x: e, y: s } = this.getProps(["x", "y"], t);
        return { x: e, y: s };
      }
      size(t) {
        t = t || this.options || {};
        let e = t.radius || 0;
        e = Math.max(e, e && t.hoverRadius || 0);
        let s = e && t.borderWidth || 0;
        return (e + s) * 2;
      }
      draw(t, e) {
        let s = this.options;
        this.skip || s.radius < 0.1 || !at(this, e, this.size(s) / 2) || (t.strokeStyle = s.borderColor, t.lineWidth = s.borderWidth, t.fillStyle = s.backgroundColor, Te(t, s, this.x, this.y));
      }
      getRange() {
        let t = this.options || {};
        return t.radius + t.hitRadius;
      }
    };
    as = class extends nt {
      static id = "bar";
      static defaults = { borderSkipped: "start", borderWidth: 0, borderRadius: 0, inflateAmount: "auto", pointStyle: void 0 };
      static defaultRoutes = { backgroundColor: "backgroundColor", borderColor: "borderColor" };
      constructor(t) {
        super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t);
      }
      draw(t) {
        let { inflateAmount: e, options: { borderColor: s, backgroundColor: n2 } } = this, { inner: o2, outer: a2 } = dl(this), r = ul(a2.radius) ? Ut : fl;
        t.save(), (a2.w !== o2.w || a2.h !== o2.h) && (t.beginPath(), r(t, Vi(a2, e, o2)), t.clip(), r(t, Vi(o2, -e, a2)), t.fillStyle = s, t.fill("evenodd")), t.beginPath(), r(t, Vi(o2, e)), t.fillStyle = n2, t.fill(), t.restore();
      }
      inRange(t, e, s) {
        return Bi(this, t, e, s);
      }
      inXRange(t, e) {
        return Bi(this, t, null, e);
      }
      inYRange(t, e) {
        return Bi(this, null, t, e);
      }
      getCenterPoint(t) {
        let { x: e, y: s, base: n2, horizontal: o2 } = this.getProps(["x", "y", "base", "horizontal"], t);
        return { x: o2 ? (e + n2) / 2 : e, y: o2 ? s : (s + n2) / 2 };
      }
      getRange(t) {
        return t === "x" ? this.width / 2 : this.height / 2;
      }
    };
    gl = Object.freeze({ __proto__: null, ArcElement: ss, BarElement: as, LineElement: Gt, PointElement: os });
    rs = ["rgb(54, 162, 235)", "rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"];
    Rn = rs.map((i4) => i4.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
    yl = { id: "colors", defaults: { enabled: true, forceOverride: false }, beforeLayout(i4, t, e) {
      if (!e.enabled)
        return;
      let { data: { datasets: s }, options: n2 } = i4.config, { elements: o2 } = n2;
      if (!e.forceOverride && (En(s) || xl(n2) || o2 && En(o2)))
        return;
      let a2 = _l(i4);
      s.forEach(a2);
    } };
    Sl = { id: "decimation", defaults: { algorithm: "min-max", enabled: false }, beforeElementsUpdate: (i4, t, e) => {
      if (!e.enabled) {
        In(i4);
        return;
      }
      let s = i4.width;
      i4.data.datasets.forEach((n2, o2) => {
        let { _data: a2, indexAxis: r } = n2, l2 = i4.getDatasetMeta(o2), c2 = a2 || n2.data;
        if (Yt([r, i4.options.indexAxis]) === "y" || !l2.controller.supportsDecimation)
          return;
        let h3 = i4.scales[l2.xAxisID];
        if (h3.type !== "linear" && h3.type !== "time" || i4.options.parsing)
          return;
        let { start: d3, count: u } = kl(l2, c2), f2 = e.threshold || 4 * s;
        if (u <= f2) {
          xo(n2);
          return;
        }
        L3(a2) && (n2._data = c2, delete n2.data, Object.defineProperty(n2, "data", { configurable: true, enumerable: true, get: function() {
          return this._decimated;
        }, set: function(p3) {
          this._data = p3;
        } }));
        let g2;
        switch (e.algorithm) {
          case "lttb":
            g2 = vl(c2, d3, u, s, e);
            break;
          case "min-max":
            g2 = Ml(c2, d3, u, s);
            break;
          default:
            throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`);
        }
        n2._decimated = g2;
      });
    }, destroy(i4) {
      In(i4);
    } };
    Qe = class {
      constructor(t) {
        this.x = t.x, this.y = t.y, this.radius = t.radius;
      }
      pathSegment(t, e, s) {
        let { x: n2, y: o2, radius: a2 } = this;
        return e = e || { start: 0, end: F3 }, t.arc(n2, o2, a2, e.end, e.start, true), !s.bounds;
      }
      interpolate(t) {
        let { x: e, y: s, radius: n2 } = this, o2 = t.angle;
        return { x: e + Math.cos(o2) * n2, y: s + Math.sin(o2) * n2, angle: o2 };
      }
    };
    $l = { id: "filler", afterDatasetsUpdate(i4, t, e) {
      let s = (i4.data.datasets || []).length, n2 = [], o2, a2, r, l2;
      for (a2 = 0; a2 < s; ++a2)
        o2 = i4.getDatasetMeta(a2), r = o2.dataset, l2 = null, r && r.options && r instanceof Gt && (l2 = { visible: i4.isDatasetVisible(a2), index: a2, fill: Cl(r, a2, s), chart: i4, axis: o2.controller.options.indexAxis, scale: o2.vScale, line: r }), o2.$filler = l2, n2.push(l2);
      for (a2 = 0; a2 < s; ++a2)
        l2 = n2[a2], !(!l2 || l2.fill === false) && (l2.fill = Dl(n2, a2, e.propagate));
    }, beforeDraw(i4, t, e) {
      let s = e.drawTime === "beforeDraw", n2 = i4.getSortedVisibleDatasetMetas(), o2 = i4.chartArea;
      for (let a2 = n2.length - 1; a2 >= 0; --a2) {
        let r = n2[a2].$filler;
        r && (r.line.updateControlPoints(o2, r.axis), s && r.fill && Wi(i4.ctx, r, o2));
      }
    }, beforeDatasetsDraw(i4, t, e) {
      if (e.drawTime !== "beforeDatasetsDraw")
        return;
      let s = i4.getSortedVisibleDatasetMetas();
      for (let n2 = s.length - 1; n2 >= 0; --n2) {
        let o2 = s[n2].$filler;
        Fn(o2) && Wi(i4.ctx, o2, i4.chartArea);
      }
    }, beforeDatasetDraw(i4, t, e) {
      let s = t.meta.$filler;
      !Fn(s) || e.drawTime !== "beforeDatasetDraw" || Wi(i4.ctx, s, i4.chartArea);
    }, defaults: { propagate: true, drawTime: "beforeDatasetDraw" } };
    Nn = (i4, t) => {
      let { boxHeight: e = t, boxWidth: s = t } = i4;
      return i4.usePointStyle && (e = Math.min(e, t), s = i4.pointStyleWidth || Math.min(s, t)), { boxWidth: s, boxHeight: e, itemHeight: Math.max(t, e) };
    };
    Ul = (i4, t) => i4 !== null && t !== null && i4.datasetIndex === t.datasetIndex && i4.index === t.index;
    Ze = class extends nt {
      constructor(t) {
        super(), this._added = false, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = false, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
      }
      update(t, e, s) {
        this.maxWidth = t, this.maxHeight = e, this._margins = s, this.setDimensions(), this.buildLabels(), this.fit();
      }
      setDimensions() {
        this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
      }
      buildLabels() {
        let t = this.options.labels || {}, e = E2(t.generateLabels, [this.chart], this) || [];
        t.filter && (e = e.filter((s) => t.filter(s, this.chart.data))), t.sort && (e = e.sort((s, n2) => t.sort(s, n2, this.chart.data))), this.options.reverse && e.reverse(), this.legendItems = e;
      }
      fit() {
        let { options: t, ctx: e } = this;
        if (!t.display) {
          this.width = this.height = 0;
          return;
        }
        let s = t.labels, n2 = j3(s.font), o2 = n2.size, a2 = this._computeTitleHeight(), { boxWidth: r, itemHeight: l2 } = Nn(s, o2), c2, h3;
        e.font = n2.string, this.isHorizontal() ? (c2 = this.maxWidth, h3 = this._fitRows(a2, o2, r, l2) + 10) : (h3 = this.maxHeight, c2 = this._fitCols(a2, n2, r, l2) + 10), this.width = Math.min(c2, t.maxWidth || this.maxWidth), this.height = Math.min(h3, t.maxHeight || this.maxHeight);
      }
      _fitRows(t, e, s, n2) {
        let { ctx: o2, maxWidth: a2, options: { labels: { padding: r } } } = this, l2 = this.legendHitBoxes = [], c2 = this.lineWidths = [0], h3 = n2 + r, d3 = t;
        o2.textAlign = "left", o2.textBaseline = "middle";
        let u = -1, f2 = -h3;
        return this.legendItems.forEach((g2, p3) => {
          let m3 = s + e / 2 + o2.measureText(g2.text).width;
          (p3 === 0 || c2[c2.length - 1] + m3 + 2 * r > a2) && (d3 += h3, c2[c2.length - (p3 > 0 ? 0 : 1)] = 0, f2 += h3, u++), l2[p3] = { left: 0, top: f2, row: u, width: m3, height: n2 }, c2[c2.length - 1] += m3 + r;
        }), d3;
      }
      _fitCols(t, e, s, n2) {
        let { ctx: o2, maxHeight: a2, options: { labels: { padding: r } } } = this, l2 = this.legendHitBoxes = [], c2 = this.columnSizes = [], h3 = a2 - t, d3 = r, u = 0, f2 = 0, g2 = 0, p3 = 0;
        return this.legendItems.forEach((m3, b3) => {
          let { itemWidth: _3, itemHeight: v3 } = Yl(s, e, o2, m3, n2);
          b3 > 0 && f2 + v3 + 2 * r > h3 && (d3 += u + r, c2.push({ width: u, height: f2 }), g2 += u + r, p3++, u = f2 = 0), l2[b3] = { left: g2, top: f2, col: p3, width: _3, height: v3 }, u = Math.max(u, _3), f2 += v3 + r;
        }), d3 += u, c2.push({ width: u, height: f2 }), d3;
      }
      adjustHitBoxes() {
        if (!this.options.display)
          return;
        let t = this._computeTitleHeight(), { legendHitBoxes: e, options: { align: s, labels: { padding: n2 }, rtl: o2 } } = this, a2 = Lt(o2, this.left, this.width);
        if (this.isHorizontal()) {
          let r = 0, l2 = Y3(s, this.left + n2, this.right - this.lineWidths[r]);
          for (let c2 of e)
            r !== c2.row && (r = c2.row, l2 = Y3(s, this.left + n2, this.right - this.lineWidths[r])), c2.top += this.top + t + n2, c2.left = a2.leftForLtr(a2.x(l2), c2.width), l2 += c2.width + n2;
        } else {
          let r = 0, l2 = Y3(s, this.top + t + n2, this.bottom - this.columnSizes[r].height);
          for (let c2 of e)
            c2.col !== r && (r = c2.col, l2 = Y3(s, this.top + t + n2, this.bottom - this.columnSizes[r].height)), c2.top = l2, c2.left += this.left + n2, c2.left = a2.leftForLtr(a2.x(c2.left), c2.width), l2 += c2.height + n2;
        }
      }
      isHorizontal() {
        return this.options.position === "top" || this.options.position === "bottom";
      }
      draw() {
        if (this.options.display) {
          let t = this.ctx;
          ne2(t, this), this._draw(), oe(t);
        }
      }
      _draw() {
        let { options: t, columnSizes: e, lineWidths: s, ctx: n2 } = this, { align: o2, labels: a2 } = t, r = W3.color, l2 = Lt(t.rtl, this.left, this.width), c2 = j3(a2.font), { padding: h3 } = a2, d3 = c2.size, u = d3 / 2, f2;
        this.drawTitle(), n2.textAlign = l2.textAlign("left"), n2.textBaseline = "middle", n2.lineWidth = 0.5, n2.font = c2.string;
        let { boxWidth: g2, boxHeight: p3, itemHeight: m3 } = Nn(a2, d3), b3 = function(M3, k3, S3) {
          if (isNaN(g2) || g2 <= 0 || isNaN(p3) || p3 < 0)
            return;
          n2.save();
          let w2 = P3(S3.lineWidth, 1);
          if (n2.fillStyle = P3(S3.fillStyle, r), n2.lineCap = P3(S3.lineCap, "butt"), n2.lineDashOffset = P3(S3.lineDashOffset, 0), n2.lineJoin = P3(S3.lineJoin, "miter"), n2.lineWidth = w2, n2.strokeStyle = P3(S3.strokeStyle, r), n2.setLineDash(P3(S3.lineDash, [])), a2.usePointStyle) {
            let D3 = { radius: p3 * Math.SQRT2 / 2, pointStyle: S3.pointStyle, rotation: S3.rotation, borderWidth: w2 }, C3 = l2.xPlus(M3, g2 / 2), A3 = k3 + u;
            yi(n2, D3, C3, A3, a2.pointStyleWidth && g2);
          } else {
            let D3 = k3 + Math.max((d3 - p3) / 2, 0), C3 = l2.leftForLtr(M3, g2), A3 = Mt(S3.borderRadius);
            n2.beginPath(), Object.values(A3).some((U3) => U3 !== 0) ? Ut(n2, { x: C3, y: D3, w: g2, h: p3, radius: A3 }) : n2.rect(C3, D3, g2, p3), n2.fill(), w2 !== 0 && n2.stroke();
          }
          n2.restore();
        }, _3 = function(M3, k3, S3) {
          vt(n2, S3.text, M3, k3 + m3 / 2, c2, { strikethrough: S3.hidden, textAlign: l2.textAlign(S3.textAlign) });
        }, v3 = this.isHorizontal(), y3 = this._computeTitleHeight();
        v3 ? f2 = { x: Y3(o2, this.left + h3, this.right - s[0]), y: this.top + h3 + y3, line: 0 } : f2 = { x: this.left + h3, y: Y3(o2, this.top + y3 + h3, this.bottom - e[0].height), line: 0 }, Ci(this.ctx, t.textDirection);
        let x2 = m3 + h3;
        this.legendItems.forEach((M3, k3) => {
          n2.strokeStyle = M3.fontColor, n2.fillStyle = M3.fontColor;
          let S3 = n2.measureText(M3.text).width, w2 = l2.textAlign(M3.textAlign || (M3.textAlign = a2.textAlign)), D3 = g2 + u + S3, C3 = f2.x, A3 = f2.y;
          l2.setWidth(this.width), v3 ? k3 > 0 && C3 + D3 + h3 > this.right && (A3 = f2.y += x2, f2.line++, C3 = f2.x = Y3(o2, this.left + h3, this.right - s[f2.line])) : k3 > 0 && A3 + x2 > this.bottom && (C3 = f2.x = C3 + e[f2.line].width + h3, f2.line++, A3 = f2.y = Y3(o2, this.top + y3 + h3, this.bottom - e[f2.line].height));
          let U3 = l2.x(C3);
          if (b3(U3, A3, M3), C3 = Vs(w2, C3 + g2 + u, v3 ? C3 + D3 : this.right, t.rtl), _3(l2.x(C3), A3, M3), v3)
            f2.x += D3 + h3;
          else if (typeof M3.text != "string") {
            let tt = c2.lineHeight;
            f2.y += vo(M3, tt) + h3;
          } else
            f2.y += x2;
        }), Oi(this.ctx, t.textDirection);
      }
      drawTitle() {
        let t = this.options, e = t.title, s = j3(e.font), n2 = X3(e.padding);
        if (!e.display)
          return;
        let o2 = Lt(t.rtl, this.left, this.width), a2 = this.ctx, r = e.position, l2 = s.size / 2, c2 = n2.top + l2, h3, d3 = this.left, u = this.width;
        if (this.isHorizontal())
          u = Math.max(...this.lineWidths), h3 = this.top + c2, d3 = Y3(t.align, d3, this.right - u);
        else {
          let g2 = this.columnSizes.reduce((p3, m3) => Math.max(p3, m3.height), 0);
          h3 = c2 + Y3(t.align, this.top, this.bottom - g2 - t.labels.padding - this._computeTitleHeight());
        }
        let f2 = Y3(r, d3, d3 + u);
        a2.textAlign = o2.textAlign(Ae(r)), a2.textBaseline = "middle", a2.strokeStyle = e.color, a2.fillStyle = e.color, a2.font = s.string, vt(a2, e.text, f2, h3, s);
      }
      _computeTitleHeight() {
        let t = this.options.title, e = j3(t.font), s = X3(t.padding);
        return t.display ? e.lineHeight + s.height : 0;
      }
      _getLegendItemAt(t, e) {
        let s, n2, o2;
        if (lt(t, this.left, this.right) && lt(e, this.top, this.bottom)) {
          for (o2 = this.legendHitBoxes, s = 0; s < o2.length; ++s)
            if (n2 = o2[s], lt(t, n2.left, n2.left + n2.width) && lt(e, n2.top, n2.top + n2.height))
              return this.legendItems[s];
        }
        return null;
      }
      handleEvent(t) {
        let e = this.options;
        if (!ql(t.type, e))
          return;
        let s = this._getLegendItemAt(t.x, t.y);
        if (t.type === "mousemove" || t.type === "mouseout") {
          let n2 = this._hoveredItem, o2 = Ul(n2, s);
          n2 && !o2 && E2(e.onLeave, [t, n2, this], this), this._hoveredItem = s, s && !o2 && E2(e.onHover, [t, s, this], this);
        } else
          s && E2(e.onClick, [t, s, this], this);
      }
    };
    Gl = { id: "legend", _element: Ze, start(i4, t, e) {
      let s = i4.legend = new Ze({ ctx: i4.ctx, options: e, chart: i4 });
      q3.configure(i4, s, e), q3.addBox(i4, s);
    }, stop(i4) {
      q3.removeBox(i4, i4.legend), delete i4.legend;
    }, beforeUpdate(i4, t, e) {
      let s = i4.legend;
      q3.configure(i4, s, e), s.options = e;
    }, afterUpdate(i4) {
      let t = i4.legend;
      t.buildLabels(), t.adjustHitBoxes();
    }, afterEvent(i4, t) {
      t.replay || i4.legend.handleEvent(t.event);
    }, defaults: { display: true, position: "top", align: "center", fullSize: true, reverse: false, weight: 1e3, onClick(i4, t, e) {
      let s = t.datasetIndex, n2 = e.chart;
      n2.isDatasetVisible(s) ? (n2.hide(s), t.hidden = true) : (n2.show(s), t.hidden = false);
    }, onHover: null, onLeave: null, labels: { color: (i4) => i4.chart.options.color, boxWidth: 40, padding: 10, generateLabels(i4) {
      let t = i4.data.datasets, { labels: { usePointStyle: e, pointStyle: s, textAlign: n2, color: o2, useBorderRadius: a2, borderRadius: r } } = i4.legend.options;
      return i4._getSortedDatasetMetas().map((l2) => {
        let c2 = l2.controller.getStyle(e ? 0 : void 0), h3 = X3(c2.borderWidth);
        return { text: t[l2.index].label, fillStyle: c2.backgroundColor, fontColor: o2, hidden: !l2.visible, lineCap: c2.borderCapStyle, lineDash: c2.borderDash, lineDashOffset: c2.borderDashOffset, lineJoin: c2.borderJoinStyle, lineWidth: (h3.width + h3.height) / 4, strokeStyle: c2.borderColor, pointStyle: s || c2.pointStyle, rotation: c2.rotation, textAlign: n2 || c2.textAlign, borderRadius: a2 && (r || c2.borderRadius), datasetIndex: l2.index };
      }, this);
    } }, title: { color: (i4) => i4.chart.options.color, display: false, position: "center", text: "" } }, descriptors: { _scriptable: (i4) => !i4.startsWith("on"), labels: { _scriptable: (i4) => !["generateLabels", "filter", "sort"].includes(i4) } } };
    pe = class extends nt {
      constructor(t) {
        super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
      }
      update(t, e) {
        let s = this.options;
        if (this.left = 0, this.top = 0, !s.display) {
          this.width = this.height = this.right = this.bottom = 0;
          return;
        }
        this.width = this.right = t, this.height = this.bottom = e;
        let n2 = I3(s.text) ? s.text.length : 1;
        this._padding = X3(s.padding);
        let o2 = n2 * j3(s.font).lineHeight + this._padding.height;
        this.isHorizontal() ? this.height = o2 : this.width = o2;
      }
      isHorizontal() {
        let t = this.options.position;
        return t === "top" || t === "bottom";
      }
      _drawArgs(t) {
        let { top: e, left: s, bottom: n2, right: o2, options: a2 } = this, r = a2.align, l2 = 0, c2, h3, d3;
        return this.isHorizontal() ? (h3 = Y3(r, s, o2), d3 = e + t, c2 = o2 - s) : (a2.position === "left" ? (h3 = s + t, d3 = Y3(r, n2, e), l2 = z2 * -0.5) : (h3 = o2 - t, d3 = Y3(r, e, n2), l2 = z2 * 0.5), c2 = n2 - e), { titleX: h3, titleY: d3, maxWidth: c2, rotation: l2 };
      }
      draw() {
        let t = this.ctx, e = this.options;
        if (!e.display)
          return;
        let s = j3(e.font), o2 = s.lineHeight / 2 + this._padding.top, { titleX: a2, titleY: r, maxWidth: l2, rotation: c2 } = this._drawArgs(o2);
        vt(t, e.text, 0, 0, s, { color: e.color, maxWidth: l2, rotation: c2, textAlign: Ae(e.align), textBaseline: "middle", translation: [a2, r] });
      }
    };
    Ql = { id: "title", _element: pe, start(i4, t, e) {
      Jl(i4, e);
    }, stop(i4) {
      let t = i4.titleBlock;
      q3.removeBox(i4, t), delete i4.titleBlock;
    }, beforeUpdate(i4, t, e) {
      let s = i4.titleBlock;
      q3.configure(i4, s, e), s.options = e;
    }, defaults: { align: "center", display: false, font: { weight: "bold" }, fullSize: true, padding: 10, position: "top", text: "", weight: 2e3 }, defaultRoutes: { color: "color" }, descriptors: { _scriptable: true, _indexable: false } };
    He = /* @__PURE__ */ new WeakMap();
    Zl = { id: "subtitle", start(i4, t, e) {
      let s = new pe({ ctx: i4.ctx, options: e, chart: i4 });
      q3.configure(i4, s, e), q3.addBox(i4, s), He.set(i4, s);
    }, stop(i4) {
      q3.removeBox(i4, He.get(i4)), He.delete(i4);
    }, beforeUpdate(i4, t, e) {
      let s = He.get(i4);
      q3.configure(i4, s, e), s.options = e;
    }, defaults: { align: "center", display: false, font: { weight: "normal" }, fullSize: true, padding: 0, position: "top", text: "", weight: 1500 }, defaultRoutes: { color: "color" }, descriptors: { _scriptable: true, _indexable: false } };
    ue = { average(i4) {
      if (!i4.length)
        return false;
      let t, e, s = /* @__PURE__ */ new Set(), n2 = 0, o2 = 0;
      for (t = 0, e = i4.length; t < e; ++t) {
        let r = i4[t].element;
        if (r && r.hasValue()) {
          let l2 = r.tooltipPosition();
          s.add(l2.x), n2 += l2.y, ++o2;
        }
      }
      return { x: [...s].reduce((r, l2) => r + l2) / s.size, y: n2 / o2 };
    }, nearest(i4, t) {
      if (!i4.length)
        return false;
      let e = t.x, s = t.y, n2 = Number.POSITIVE_INFINITY, o2, a2, r;
      for (o2 = 0, a2 = i4.length; o2 < a2; ++o2) {
        let l2 = i4[o2].element;
        if (l2 && l2.hasValue()) {
          let c2 = l2.getCenterPoint(), h3 = we(t, c2);
          h3 < n2 && (n2 = h3, r = l2);
        }
      }
      if (r) {
        let l2 = r.tooltipPosition();
        e = l2.x, s = l2.y;
      }
      return { x: e, y: s };
    } };
    Mo = { beforeTitle: rt, title(i4) {
      if (i4.length > 0) {
        let t = i4[0], e = t.chart.data.labels, s = e ? e.length : 0;
        if (this && this.options && this.options.mode === "dataset")
          return t.dataset.label || "";
        if (t.label)
          return t.label;
        if (s > 0 && t.dataIndex < s)
          return e[t.dataIndex];
      }
      return "";
    }, afterTitle: rt, beforeBody: rt, beforeLabel: rt, label(i4) {
      if (this && this.options && this.options.mode === "dataset")
        return i4.label + ": " + i4.formattedValue || i4.formattedValue;
      let t = i4.dataset.label || "";
      t && (t += ": ");
      let e = i4.formattedValue;
      return L3(e) || (t += e), t;
    }, labelColor(i4) {
      let e = i4.chart.getDatasetMeta(i4.datasetIndex).controller.getStyle(i4.dataIndex);
      return { borderColor: e.borderColor, backgroundColor: e.backgroundColor, borderWidth: e.borderWidth, borderDash: e.borderDash, borderDashOffset: e.borderDashOffset, borderRadius: 0 };
    }, labelTextColor() {
      return this.options.bodyColor;
    }, labelPointStyle(i4) {
      let e = i4.chart.getDatasetMeta(i4.datasetIndex).controller.getStyle(i4.dataIndex);
      return { pointStyle: e.pointStyle, rotation: e.rotation };
    }, afterLabel: rt, afterBody: rt, beforeFooter: rt, footer: rt, afterFooter: rt };
    ti = class extends nt {
      static positioners = ue;
      constructor(t) {
        super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0;
      }
      initialize(t) {
        this.options = t, this._cachedAnimations = void 0, this.$context = void 0;
      }
      _resolveAnimations() {
        let t = this._cachedAnimations;
        if (t)
          return t;
        let e = this.chart, s = this.options.setContext(this.getContext()), n2 = s.enabled && e.options.animation && s.animations, o2 = new Xe(this.chart, n2);
        return n2._cacheable && (this._cachedAnimations = Object.freeze(o2)), o2;
      }
      getContext() {
        return this.$context || (this.$context = ac(this.chart.getContext(), this, this._tooltipItems));
      }
      getTitle(t, e) {
        let { callbacks: s } = e, n2 = Q3(s, "beforeTitle", this, t), o2 = Q3(s, "title", this, t), a2 = Q3(s, "afterTitle", this, t), r = [];
        return r = ct(r, bt(n2)), r = ct(r, bt(o2)), r = ct(r, bt(a2)), r;
      }
      getBeforeBody(t, e) {
        return Un(Q3(e.callbacks, "beforeBody", this, t));
      }
      getBody(t, e) {
        let { callbacks: s } = e, n2 = [];
        return T3(t, (o2) => {
          let a2 = { before: [], lines: [], after: [] }, r = Yn(s, o2);
          ct(a2.before, bt(Q3(r, "beforeLabel", this, o2))), ct(a2.lines, Q3(r, "label", this, o2)), ct(a2.after, bt(Q3(r, "afterLabel", this, o2))), n2.push(a2);
        }), n2;
      }
      getAfterBody(t, e) {
        return Un(Q3(e.callbacks, "afterBody", this, t));
      }
      getFooter(t, e) {
        let { callbacks: s } = e, n2 = Q3(s, "beforeFooter", this, t), o2 = Q3(s, "footer", this, t), a2 = Q3(s, "afterFooter", this, t), r = [];
        return r = ct(r, bt(n2)), r = ct(r, bt(o2)), r = ct(r, bt(a2)), r;
      }
      _createItems(t) {
        let e = this._active, s = this.chart.data, n2 = [], o2 = [], a2 = [], r = [], l2, c2;
        for (l2 = 0, c2 = e.length; l2 < c2; ++l2)
          r.push(tc(this.chart, e[l2]));
        return t.filter && (r = r.filter((h3, d3, u) => t.filter(h3, d3, u, s))), t.itemSort && (r = r.sort((h3, d3) => t.itemSort(h3, d3, s))), T3(r, (h3) => {
          let d3 = Yn(t.callbacks, h3);
          n2.push(Q3(d3, "labelColor", this, h3)), o2.push(Q3(d3, "labelPointStyle", this, h3)), a2.push(Q3(d3, "labelTextColor", this, h3));
        }), this.labelColors = n2, this.labelPointStyles = o2, this.labelTextColors = a2, this.dataPoints = r, r;
      }
      update(t, e) {
        let s = this.options.setContext(this.getContext()), n2 = this._active, o2, a2 = [];
        if (!n2.length)
          this.opacity !== 0 && (o2 = { opacity: 0 });
        else {
          let r = ue[s.position].call(this, n2, this._eventPosition);
          a2 = this._createItems(s), this.title = this.getTitle(a2, s), this.beforeBody = this.getBeforeBody(a2, s), this.body = this.getBody(a2, s), this.afterBody = this.getAfterBody(a2, s), this.footer = this.getFooter(a2, s);
          let l2 = this._size = Hn(this, s), c2 = Object.assign({}, r, l2), h3 = jn(this.chart, s, c2), d3 = $n(s, c2, h3, this.chart);
          this.xAlign = h3.xAlign, this.yAlign = h3.yAlign, o2 = { opacity: 1, x: d3.x, y: d3.y, width: l2.width, height: l2.height, caretX: r.x, caretY: r.y };
        }
        this._tooltipItems = a2, this.$context = void 0, o2 && this._resolveAnimations().update(this, o2), t && s.external && s.external.call(this, { chart: this.chart, tooltip: this, replay: e });
      }
      drawCaret(t, e, s, n2) {
        let o2 = this.getCaretPosition(t, s, n2);
        e.lineTo(o2.x1, o2.y1), e.lineTo(o2.x2, o2.y2), e.lineTo(o2.x3, o2.y3);
      }
      getCaretPosition(t, e, s) {
        let { xAlign: n2, yAlign: o2 } = this, { caretSize: a2, cornerRadius: r } = s, { topLeft: l2, topRight: c2, bottomLeft: h3, bottomRight: d3 } = Mt(r), { x: u, y: f2 } = t, { width: g2, height: p3 } = e, m3, b3, _3, v3, y3, x2;
        return o2 === "center" ? (y3 = f2 + p3 / 2, n2 === "left" ? (m3 = u, b3 = m3 - a2, v3 = y3 + a2, x2 = y3 - a2) : (m3 = u + g2, b3 = m3 + a2, v3 = y3 - a2, x2 = y3 + a2), _3 = m3) : (n2 === "left" ? b3 = u + Math.max(l2, h3) + a2 : n2 === "right" ? b3 = u + g2 - Math.max(c2, d3) - a2 : b3 = this.caretX, o2 === "top" ? (v3 = f2, y3 = v3 - a2, m3 = b3 - a2, _3 = b3 + a2) : (v3 = f2 + p3, y3 = v3 + a2, m3 = b3 + a2, _3 = b3 - a2), x2 = v3), { x1: m3, x2: b3, x3: _3, y1: v3, y2: y3, y3: x2 };
      }
      drawTitle(t, e, s) {
        let n2 = this.title, o2 = n2.length, a2, r, l2;
        if (o2) {
          let c2 = Lt(s.rtl, this.x, this.width);
          for (t.x = je(this, s.titleAlign, s), e.textAlign = c2.textAlign(s.titleAlign), e.textBaseline = "middle", a2 = j3(s.titleFont), r = s.titleSpacing, e.fillStyle = s.titleColor, e.font = a2.string, l2 = 0; l2 < o2; ++l2)
            e.fillText(n2[l2], c2.x(t.x), t.y + a2.lineHeight / 2), t.y += a2.lineHeight + r, l2 + 1 === o2 && (t.y += s.titleMarginBottom - r);
        }
      }
      _drawColorBox(t, e, s, n2, o2) {
        let a2 = this.labelColors[s], r = this.labelPointStyles[s], { boxHeight: l2, boxWidth: c2 } = o2, h3 = j3(o2.bodyFont), d3 = je(this, "left", o2), u = n2.x(d3), f2 = l2 < h3.lineHeight ? (h3.lineHeight - l2) / 2 : 0, g2 = e.y + f2;
        if (o2.usePointStyle) {
          let p3 = { radius: Math.min(c2, l2) / 2, pointStyle: r.pointStyle, rotation: r.rotation, borderWidth: 1 }, m3 = n2.leftForLtr(u, c2) + c2 / 2, b3 = g2 + l2 / 2;
          t.strokeStyle = o2.multiKeyBackground, t.fillStyle = o2.multiKeyBackground, Te(t, p3, m3, b3), t.strokeStyle = a2.borderColor, t.fillStyle = a2.backgroundColor, Te(t, p3, m3, b3);
        } else {
          t.lineWidth = O3(a2.borderWidth) ? Math.max(...Object.values(a2.borderWidth)) : a2.borderWidth || 1, t.strokeStyle = a2.borderColor, t.setLineDash(a2.borderDash || []), t.lineDashOffset = a2.borderDashOffset || 0;
          let p3 = n2.leftForLtr(u, c2), m3 = n2.leftForLtr(n2.xPlus(u, 1), c2 - 2), b3 = Mt(a2.borderRadius);
          Object.values(b3).some((_3) => _3 !== 0) ? (t.beginPath(), t.fillStyle = o2.multiKeyBackground, Ut(t, { x: p3, y: g2, w: c2, h: l2, radius: b3 }), t.fill(), t.stroke(), t.fillStyle = a2.backgroundColor, t.beginPath(), Ut(t, { x: m3, y: g2 + 1, w: c2 - 2, h: l2 - 2, radius: b3 }), t.fill()) : (t.fillStyle = o2.multiKeyBackground, t.fillRect(p3, g2, c2, l2), t.strokeRect(p3, g2, c2, l2), t.fillStyle = a2.backgroundColor, t.fillRect(m3, g2 + 1, c2 - 2, l2 - 2));
        }
        t.fillStyle = this.labelTextColors[s];
      }
      drawBody(t, e, s) {
        let { body: n2 } = this, { bodySpacing: o2, bodyAlign: a2, displayColors: r, boxHeight: l2, boxWidth: c2, boxPadding: h3 } = s, d3 = j3(s.bodyFont), u = d3.lineHeight, f2 = 0, g2 = Lt(s.rtl, this.x, this.width), p3 = function(S3) {
          e.fillText(S3, g2.x(t.x + f2), t.y + u / 2), t.y += u + o2;
        }, m3 = g2.textAlign(a2), b3, _3, v3, y3, x2, M3, k3;
        for (e.textAlign = a2, e.textBaseline = "middle", e.font = d3.string, t.x = je(this, m3, s), e.fillStyle = s.bodyColor, T3(this.beforeBody, p3), f2 = r && m3 !== "right" ? a2 === "center" ? c2 / 2 + h3 : c2 + 2 + h3 : 0, y3 = 0, M3 = n2.length; y3 < M3; ++y3) {
          for (b3 = n2[y3], _3 = this.labelTextColors[y3], e.fillStyle = _3, T3(b3.before, p3), v3 = b3.lines, r && v3.length && (this._drawColorBox(e, t, y3, g2, s), u = Math.max(d3.lineHeight, l2)), x2 = 0, k3 = v3.length; x2 < k3; ++x2)
            p3(v3[x2]), u = d3.lineHeight;
          T3(b3.after, p3);
        }
        f2 = 0, u = d3.lineHeight, T3(this.afterBody, p3), t.y -= o2;
      }
      drawFooter(t, e, s) {
        let n2 = this.footer, o2 = n2.length, a2, r;
        if (o2) {
          let l2 = Lt(s.rtl, this.x, this.width);
          for (t.x = je(this, s.footerAlign, s), t.y += s.footerMarginTop, e.textAlign = l2.textAlign(s.footerAlign), e.textBaseline = "middle", a2 = j3(s.footerFont), e.fillStyle = s.footerColor, e.font = a2.string, r = 0; r < o2; ++r)
            e.fillText(n2[r], l2.x(t.x), t.y + a2.lineHeight / 2), t.y += a2.lineHeight + s.footerSpacing;
        }
      }
      drawBackground(t, e, s, n2) {
        let { xAlign: o2, yAlign: a2 } = this, { x: r, y: l2 } = t, { width: c2, height: h3 } = s, { topLeft: d3, topRight: u, bottomLeft: f2, bottomRight: g2 } = Mt(n2.cornerRadius);
        e.fillStyle = n2.backgroundColor, e.strokeStyle = n2.borderColor, e.lineWidth = n2.borderWidth, e.beginPath(), e.moveTo(r + d3, l2), a2 === "top" && this.drawCaret(t, e, s, n2), e.lineTo(r + c2 - u, l2), e.quadraticCurveTo(r + c2, l2, r + c2, l2 + u), a2 === "center" && o2 === "right" && this.drawCaret(t, e, s, n2), e.lineTo(r + c2, l2 + h3 - g2), e.quadraticCurveTo(r + c2, l2 + h3, r + c2 - g2, l2 + h3), a2 === "bottom" && this.drawCaret(t, e, s, n2), e.lineTo(r + f2, l2 + h3), e.quadraticCurveTo(r, l2 + h3, r, l2 + h3 - f2), a2 === "center" && o2 === "left" && this.drawCaret(t, e, s, n2), e.lineTo(r, l2 + d3), e.quadraticCurveTo(r, l2, r + d3, l2), e.closePath(), e.fill(), n2.borderWidth > 0 && e.stroke();
      }
      _updateAnimationTarget(t) {
        let e = this.chart, s = this.$animations, n2 = s && s.x, o2 = s && s.y;
        if (n2 || o2) {
          let a2 = ue[t.position].call(this, this._active, this._eventPosition);
          if (!a2)
            return;
          let r = this._size = Hn(this, t), l2 = Object.assign({}, a2, this._size), c2 = jn(e, t, l2), h3 = $n(t, l2, c2, e);
          (n2._to !== h3.x || o2._to !== h3.y) && (this.xAlign = c2.xAlign, this.yAlign = c2.yAlign, this.width = r.width, this.height = r.height, this.caretX = a2.x, this.caretY = a2.y, this._resolveAnimations().update(this, h3));
        }
      }
      _willRender() {
        return !!this.opacity;
      }
      draw(t) {
        let e = this.options.setContext(this.getContext()), s = this.opacity;
        if (!s)
          return;
        this._updateAnimationTarget(e);
        let n2 = { width: this.width, height: this.height }, o2 = { x: this.x, y: this.y };
        s = Math.abs(s) < 1e-3 ? 0 : s;
        let a2 = X3(e.padding), r = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
        e.enabled && r && (t.save(), t.globalAlpha = s, this.drawBackground(o2, t, n2, e), Ci(t, e.textDirection), o2.y += a2.top, this.drawTitle(o2, t, e), this.drawBody(o2, t, e), this.drawFooter(o2, t, e), Oi(t, e.textDirection), t.restore());
      }
      getActiveElements() {
        return this._active || [];
      }
      setActiveElements(t, e) {
        let s = this._active, n2 = t.map(({ datasetIndex: r, index: l2 }) => {
          let c2 = this.chart.getDatasetMeta(r);
          if (!c2)
            throw new Error("Cannot find a dataset at index " + r);
          return { datasetIndex: r, element: c2.data[l2], index: l2 };
        }), o2 = !ie(s, n2), a2 = this._positionChanged(n2, e);
        (o2 || a2) && (this._active = n2, this._eventPosition = e, this._ignoreReplayEvents = true, this.update(true));
      }
      handleEvent(t, e, s = true) {
        if (e && this._ignoreReplayEvents)
          return false;
        this._ignoreReplayEvents = false;
        let n2 = this.options, o2 = this._active || [], a2 = this._getActiveElements(t, o2, e, s), r = this._positionChanged(a2, t), l2 = e || !ie(a2, o2) || r;
        return l2 && (this._active = a2, (n2.enabled || n2.external) && (this._eventPosition = { x: t.x, y: t.y }, this.update(true, e))), l2;
      }
      _getActiveElements(t, e, s, n2) {
        let o2 = this.options;
        if (t.type === "mouseout")
          return [];
        if (!n2)
          return e.filter((r) => this.chart.data.datasets[r.datasetIndex] && this.chart.getDatasetMeta(r.datasetIndex).controller.getParsed(r.index) !== void 0);
        let a2 = this.chart.getElementsAtEventForMode(t, o2.mode, o2, s);
        return o2.reverse && a2.reverse(), a2;
      }
      _positionChanged(t, e) {
        let { caretX: s, caretY: n2, options: o2 } = this, a2 = ue[o2.position].call(this, t, e);
        return a2 !== false && (s !== a2.x || n2 !== a2.y);
      }
    };
    rc = { id: "tooltip", _element: ti, positioners: ue, afterInit(i4, t, e) {
      e && (i4.tooltip = new ti({ chart: i4, options: e }));
    }, beforeUpdate(i4, t, e) {
      i4.tooltip && i4.tooltip.initialize(e);
    }, reset(i4, t, e) {
      i4.tooltip && i4.tooltip.initialize(e);
    }, afterDraw(i4) {
      let t = i4.tooltip;
      if (t && t._willRender()) {
        let e = { tooltip: t };
        if (i4.notifyPlugins("beforeTooltipDraw", { ...e, cancelable: true }) === false)
          return;
        t.draw(i4.ctx), i4.notifyPlugins("afterTooltipDraw", e);
      }
    }, afterEvent(i4, t) {
      if (i4.tooltip) {
        let e = t.replay;
        i4.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = true);
      }
    }, defaults: { enabled: true, external: null, position: "average", backgroundColor: "rgba(0,0,0,0.8)", titleColor: "#fff", titleFont: { weight: "bold" }, titleSpacing: 2, titleMarginBottom: 6, titleAlign: "left", bodyColor: "#fff", bodySpacing: 2, bodyFont: {}, bodyAlign: "left", footerColor: "#fff", footerSpacing: 2, footerMarginTop: 6, footerFont: { weight: "bold" }, footerAlign: "left", padding: 6, caretPadding: 2, caretSize: 5, cornerRadius: 6, boxHeight: (i4, t) => t.bodyFont.size, boxWidth: (i4, t) => t.bodyFont.size, multiKeyBackground: "#fff", displayColors: true, boxPadding: 0, borderColor: "rgba(0,0,0,0)", borderWidth: 0, animation: { duration: 400, easing: "easeOutQuart" }, animations: { numbers: { type: "number", properties: ["x", "y", "width", "height", "caretX", "caretY"] }, opacity: { easing: "linear", duration: 200 } }, callbacks: Mo }, defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" }, descriptors: { _scriptable: (i4) => i4 !== "filter" && i4 !== "itemSort" && i4 !== "external", _indexable: false, callbacks: { _scriptable: false, _indexable: false }, animation: { _fallback: false }, animations: { _fallback: "animation" } }, additionalOptionScopes: ["interaction"] };
    lc = Object.freeze({ __proto__: null, Colors: yl, Decimation: Sl, Filler: $l, Legend: Gl, SubTitle: Zl, Title: Ql, Tooltip: rc });
    cc = (i4, t, e, s) => (typeof t == "string" ? (e = i4.push(t) - 1, s.unshift({ index: e, label: t })) : isNaN(t) && (e = null), e);
    dc = (i4, t) => i4 === null ? null : $3(Math.round(i4), 0, t);
    cs = class extends Et {
      static id = "category";
      static defaults = { ticks: { callback: Xn } };
      constructor(t) {
        super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = [];
      }
      init(t) {
        let e = this._addedLabels;
        if (e.length) {
          let s = this.getLabels();
          for (let { index: n2, label: o2 } of e)
            s[n2] === o2 && s.splice(n2, 1);
          this._addedLabels = [];
        }
        super.init(t);
      }
      parse(t, e) {
        if (L3(t))
          return null;
        let s = this.getLabels();
        return e = isFinite(e) && s[e] === t ? e : hc(s, t, P3(e, t), this._addedLabels), dc(e, s.length - 1);
      }
      determineDataLimits() {
        let { minDefined: t, maxDefined: e } = this.getUserBounds(), { min: s, max: n2 } = this.getMinMax(true);
        this.options.bounds === "ticks" && (t || (s = 0), e || (n2 = this.getLabels().length - 1)), this.min = s, this.max = n2;
      }
      buildTicks() {
        let t = this.min, e = this.max, s = this.options.offset, n2 = [], o2 = this.getLabels();
        o2 = t === 0 && e === o2.length - 1 ? o2 : o2.slice(t, e + 1), this._valueRange = Math.max(o2.length - (s ? 0 : 1), 1), this._startValue = this.min - (s ? 0.5 : 0);
        for (let a2 = t; a2 <= e; a2++)
          n2.push({ value: a2 });
        return n2;
      }
      getLabelForValue(t) {
        return Xn.call(this, t);
      }
      configure() {
        super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
      }
      getPixelForValue(t) {
        return typeof t != "number" && (t = this.parse(t)), t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
      }
      getPixelForTick(t) {
        let e = this.ticks;
        return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
      }
      getValueForPixel(t) {
        return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
      }
      getBasePixel() {
        return this.bottom;
      }
    };
    Jt = class extends Et {
      constructor(t) {
        super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
      }
      parse(t, e) {
        return L3(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
      }
      handleTickRangeOptions() {
        let { beginAtZero: t } = this.options, { minDefined: e, maxDefined: s } = this.getUserBounds(), { min: n2, max: o2 } = this, a2 = (l2) => n2 = e ? n2 : l2, r = (l2) => o2 = s ? o2 : l2;
        if (t) {
          let l2 = st(n2), c2 = st(o2);
          l2 < 0 && c2 < 0 ? r(0) : l2 > 0 && c2 > 0 && a2(0);
        }
        if (n2 === o2) {
          let l2 = o2 === 0 ? 1 : Math.abs(o2 * 0.05);
          r(o2 + l2), t || a2(n2 - l2);
        }
        this.min = n2, this.max = o2;
      }
      getTickLimit() {
        let t = this.options.ticks, { maxTicksLimit: e, stepSize: s } = t, n2;
        return s ? (n2 = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1, n2 > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${n2} ticks. Limiting to 1000.`), n2 = 1e3)) : (n2 = this.computeTickLimit(), e = e || 11), e && (n2 = Math.min(e, n2)), n2;
      }
      computeTickLimit() {
        return Number.POSITIVE_INFINITY;
      }
      buildTicks() {
        let t = this.options, e = t.ticks, s = this.getTickLimit();
        s = Math.max(2, s);
        let n2 = { maxTicks: s, bounds: t.bounds, min: t.min, max: t.max, precision: e.precision, step: e.stepSize, count: e.count, maxDigits: this._maxDigits(), horizontal: this.isHorizontal(), minRotation: e.minRotation || 0, includeBounds: e.includeBounds !== false }, o2 = this._range || this, a2 = uc(n2, o2);
        return t.bounds === "ticks" && li(a2, this, "value"), t.reverse ? (a2.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), a2;
      }
      configure() {
        let t = this.ticks, e = this.min, s = this.max;
        if (super.configure(), this.options.offset && t.length) {
          let n2 = (s - e) / Math.max(t.length - 1, 1) / 2;
          e -= n2, s += n2;
        }
        this._startValue = e, this._endValue = s, this._valueRange = s - e;
      }
      getLabelForValue(t) {
        return $t(t, this.chart.options.locale, this.options.ticks.format);
      }
    };
    hs = class extends Jt {
      static id = "linear";
      static defaults = { ticks: { callback: se.formatters.numeric } };
      determineDataLimits() {
        let { min: t, max: e } = this.getMinMax(true);
        this.min = V3(t) ? t : 0, this.max = V3(e) ? e : 1, this.handleTickRangeOptions();
      }
      computeTickLimit() {
        let t = this.isHorizontal(), e = t ? this.width : this.height, s = et(this.options.ticks.minRotation), n2 = (t ? Math.sin(s) : Math.cos(s)) || 1e-3, o2 = this._resolveTickFontOptions(0);
        return Math.ceil(e / Math.min(40, o2.lineHeight / n2));
      }
      getPixelForValue(t) {
        return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
      }
      getValueForPixel(t) {
        return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
      }
    };
    me = (i4) => Math.floor(ft(i4));
    Rt = (i4, t) => Math.pow(10, me(i4) + t);
    ds = class extends Et {
      static id = "logarithmic";
      static defaults = { ticks: { callback: se.formatters.logarithmic, major: { enabled: true } } };
      constructor(t) {
        super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0;
      }
      parse(t, e) {
        let s = Jt.prototype.parse.apply(this, [t, e]);
        if (s === 0) {
          this._zero = true;
          return;
        }
        return V3(s) && s > 0 ? s : null;
      }
      determineDataLimits() {
        let { min: t, max: e } = this.getMinMax(true);
        this.min = V3(t) ? Math.max(0, t) : null, this.max = V3(e) ? Math.max(0, e) : null, this.options.beginAtZero && (this._zero = true), this._zero && this.min !== this._suggestedMin && !V3(this._userMin) && (this.min = t === Rt(this.min, 0) ? Rt(this.min, -1) : Rt(this.min, 0)), this.handleTickRangeOptions();
      }
      handleTickRangeOptions() {
        let { minDefined: t, maxDefined: e } = this.getUserBounds(), s = this.min, n2 = this.max, o2 = (r) => s = t ? s : r, a2 = (r) => n2 = e ? n2 : r;
        s === n2 && (s <= 0 ? (o2(1), a2(10)) : (o2(Rt(s, -1)), a2(Rt(n2, 1)))), s <= 0 && o2(Rt(n2, -1)), n2 <= 0 && a2(Rt(s, 1)), this.min = s, this.max = n2;
      }
      buildTicks() {
        let t = this.options, e = { min: this._userMin, max: this._userMax }, s = gc(e, this);
        return t.bounds === "ticks" && li(s, this, "value"), t.reverse ? (s.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), s;
      }
      getLabelForValue(t) {
        return t === void 0 ? "0" : $t(t, this.chart.options.locale, this.options.ticks.format);
      }
      configure() {
        let t = this.min;
        super.configure(), this._startValue = ft(t), this._valueRange = ft(this.max) - ft(t);
      }
      getPixelForValue(t) {
        return (t === void 0 || t === 0) && (t = this.min), t === null || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (ft(t) - this._startValue) / this._valueRange);
      }
      getValueForPixel(t) {
        let e = this.getDecimalForPixel(t);
        return Math.pow(10, this._startValue + e * this._valueRange);
      }
    };
    fs = class extends Jt {
      static id = "radialLinear";
      static defaults = { display: true, animate: true, position: "chartArea", angleLines: { display: true, lineWidth: 1, borderDash: [], borderDashOffset: 0 }, grid: { circular: false }, startAngle: 0, ticks: { showLabelBackdrop: true, callback: se.formatters.numeric }, pointLabels: { backdropColor: void 0, backdropPadding: 2, display: true, font: { size: 10 }, callback(t) {
        return t;
      }, padding: 5, centerPointLabels: false } };
      static defaultRoutes = { "angleLines.color": "borderColor", "pointLabels.color": "color", "ticks.color": "color" };
      static descriptors = { angleLines: { _fallback: "grid" } };
      constructor(t) {
        super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
      }
      setDimensions() {
        let t = this._padding = X3(us(this.options) / 2), e = this.width = this.maxWidth - t.width, s = this.height = this.maxHeight - t.height;
        this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + s / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, s) / 2);
      }
      determineDataLimits() {
        let { min: t, max: e } = this.getMinMax(false);
        this.min = V3(t) && !isNaN(t) ? t : 0, this.max = V3(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions();
      }
      computeTickLimit() {
        return Math.ceil(this.drawingArea / us(this.options));
      }
      generateTickLabels(t) {
        Jt.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((e, s) => {
          let n2 = E2(this.options.pointLabels.callback, [e, s], this);
          return n2 || n2 === 0 ? n2 : "";
        }).filter((e, s) => this.chart.getDataVisibility(s));
      }
      fit() {
        let t = this.options;
        t.display && t.pointLabels.display ? mc(this) : this.setCenterPoint(0, 0, 0, 0);
      }
      setCenterPoint(t, e, s, n2) {
        this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((s - n2) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, s, n2));
      }
      getIndexAngle(t) {
        let e = F3 / (this._pointLabels.length || 1), s = this.options.startAngle || 0;
        return G3(t * e + et(s));
      }
      getDistanceFromCenterForValue(t) {
        if (L3(t))
          return NaN;
        let e = this.drawingArea / (this.max - this.min);
        return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
      }
      getValueForDistanceFromCenter(t) {
        if (L3(t))
          return NaN;
        let e = t / (this.drawingArea / (this.max - this.min));
        return this.options.reverse ? this.max - e : this.min + e;
      }
      getPointLabelContext(t) {
        let e = this._pointLabels || [];
        if (t >= 0 && t < e.length) {
          let s = e[t];
          return Dc(this.getContext(), t, s);
        }
      }
      getPointPosition(t, e, s = 0) {
        let n2 = this.getIndexAngle(t) - N3 + s;
        return { x: Math.cos(n2) * e + this.xCenter, y: Math.sin(n2) * e + this.yCenter, angle: n2 };
      }
      getPointPositionForValue(t, e) {
        return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
      }
      getBasePosition(t) {
        return this.getPointPositionForValue(t || 0, this.getBaseValue());
      }
      getPointLabelPosition(t) {
        let { left: e, top: s, right: n2, bottom: o2 } = this._pointLabelItems[t];
        return { left: e, top: s, right: n2, bottom: o2 };
      }
      drawBackground() {
        let { backgroundColor: t, grid: { circular: e } } = this.options;
        if (t) {
          let s = this.ctx;
          s.save(), s.beginPath(), ko(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), s.closePath(), s.fillStyle = t, s.fill(), s.restore();
        }
      }
      drawGrid() {
        let t = this.ctx, e = this.options, { angleLines: s, grid: n2, border: o2 } = e, a2 = this._pointLabels.length, r, l2, c2;
        if (e.pointLabels.display && wc(this, a2), n2.display && this.ticks.forEach((h3, d3) => {
          if (d3 !== 0 || d3 === 0 && this.min < 0) {
            l2 = this.getDistanceFromCenterForValue(h3.value);
            let u = this.getContext(d3), f2 = n2.setContext(u), g2 = o2.setContext(u);
            Pc(this, f2, l2, a2, g2);
          }
        }), s.display) {
          for (t.save(), r = a2 - 1; r >= 0; r--) {
            let h3 = s.setContext(this.getPointLabelContext(r)), { color: d3, lineWidth: u } = h3;
            !u || !d3 || (t.lineWidth = u, t.strokeStyle = d3, t.setLineDash(h3.borderDash), t.lineDashOffset = h3.borderDashOffset, l2 = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max), c2 = this.getPointPosition(r, l2), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(c2.x, c2.y), t.stroke());
          }
          t.restore();
        }
      }
      drawBorder() {
      }
      drawLabels() {
        let t = this.ctx, e = this.options, s = e.ticks;
        if (!s.display)
          return;
        let n2 = this.getIndexAngle(0), o2, a2;
        t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(n2), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach((r, l2) => {
          if (l2 === 0 && this.min >= 0 && !e.reverse)
            return;
          let c2 = s.setContext(this.getContext(l2)), h3 = j3(c2.font);
          if (o2 = this.getDistanceFromCenterForValue(this.ticks[l2].value), c2.showLabelBackdrop) {
            t.font = h3.string, a2 = t.measureText(r.label).width, t.fillStyle = c2.backdropColor;
            let d3 = X3(c2.backdropPadding);
            t.fillRect(-a2 / 2 - d3.left, -o2 - h3.size / 2 - d3.top, a2 + d3.width, h3.size + d3.height);
          }
          vt(t, r.label, 0, -o2, h3, { color: c2.color, strokeColor: c2.textStrokeColor, strokeWidth: c2.textStrokeWidth });
        }), t.restore();
      }
      drawTitle() {
      }
    };
    ei = { millisecond: { common: true, size: 1, steps: 1e3 }, second: { common: true, size: 1e3, steps: 60 }, minute: { common: true, size: 6e4, steps: 60 }, hour: { common: true, size: 36e5, steps: 24 }, day: { common: true, size: 864e5, steps: 30 }, week: { common: false, size: 6048e5, steps: 4 }, month: { common: true, size: 2628e6, steps: 12 }, quarter: { common: false, size: 7884e6, steps: 4 }, year: { common: true, size: 3154e7 } };
    Z3 = Object.keys(ei);
    be = class extends Et {
      static id = "time";
      static defaults = { bounds: "data", adapters: {}, time: { parser: false, unit: false, round: false, isoWeekday: false, minUnit: "millisecond", displayFormats: {} }, ticks: { source: "auto", callback: false, major: { enabled: false } } };
      constructor(t) {
        super(t), this._cache = { data: [], labels: [], all: [] }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = false, this._parseOpts = void 0;
      }
      init(t, e = {}) {
        let s = t.time || (t.time = {}), n2 = this._adapter = new $a._date(t.adapters.date);
        n2.init(e), Wt(s.displayFormats, n2.formats()), this._parseOpts = { parser: s.parser, round: s.round, isoWeekday: s.isoWeekday }, super.init(t), this._normalized = e.normalized;
      }
      parse(t, e) {
        return t === void 0 ? null : Zn(this, t);
      }
      beforeLayout() {
        super.beforeLayout(), this._cache = { data: [], labels: [], all: [] };
      }
      determineDataLimits() {
        let t = this.options, e = this._adapter, s = t.time.unit || "day", { min: n2, max: o2, minDefined: a2, maxDefined: r } = this.getUserBounds();
        function l2(c2) {
          !a2 && !isNaN(c2.min) && (n2 = Math.min(n2, c2.min)), !r && !isNaN(c2.max) && (o2 = Math.max(o2, c2.max));
        }
        (!a2 || !r) && (l2(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l2(this.getMinMax(false))), n2 = V3(n2) && !isNaN(n2) ? n2 : +e.startOf(Date.now(), s), o2 = V3(o2) && !isNaN(o2) ? o2 : +e.endOf(Date.now(), s) + 1, this.min = Math.min(n2, o2 - 1), this.max = Math.max(n2 + 1, o2);
      }
      _getLabelBounds() {
        let t = this.getLabelTimestamps(), e = Number.POSITIVE_INFINITY, s = Number.NEGATIVE_INFINITY;
        return t.length && (e = t[0], s = t[t.length - 1]), { min: e, max: s };
      }
      buildTicks() {
        let t = this.options, e = t.time, s = t.ticks, n2 = s.source === "labels" ? this.getLabelTimestamps() : this._generate();
        t.bounds === "ticks" && n2.length && (this.min = this._userMin || n2[0], this.max = this._userMax || n2[n2.length - 1]);
        let o2 = this.min, a2 = this.max, r = Is(n2, o2, a2);
        return this._unit = e.unit || (s.autoSkip ? to(e.minUnit, this.min, this.max, this._getLabelCapacity(o2)) : Cc(this, r.length, e.minUnit, this.min, this.max)), this._majorUnit = !s.major.enabled || this._unit === "year" ? void 0 : Oc(this._unit), this.initOffsets(n2), t.reverse && r.reverse(), io(this, r, this._majorUnit);
      }
      afterAutoSkip() {
        this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
      }
      initOffsets(t = []) {
        let e = 0, s = 0, n2, o2;
        this.options.offset && t.length && (n2 = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - n2 : e = (this.getDecimalForValue(t[1]) - n2) / 2, o2 = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? s = o2 : s = (o2 - this.getDecimalForValue(t[t.length - 2])) / 2);
        let a2 = t.length < 3 ? 0.5 : 0.25;
        e = $3(e, 0, a2), s = $3(s, 0, a2), this._offsets = { start: e, end: s, factor: 1 / (e + 1 + s) };
      }
      _generate() {
        let t = this._adapter, e = this.min, s = this.max, n2 = this.options, o2 = n2.time, a2 = o2.unit || to(o2.minUnit, e, s, this._getLabelCapacity(e)), r = P3(n2.ticks.stepSize, 1), l2 = a2 === "week" ? o2.isoWeekday : false, c2 = At(l2) || l2 === true, h3 = {}, d3 = e, u, f2;
        if (c2 && (d3 = +t.startOf(d3, "isoWeek", l2)), d3 = +t.startOf(d3, c2 ? "day" : a2), t.diff(s, e, a2) > 1e5 * r)
          throw new Error(e + " and " + s + " are too far apart with stepSize of " + r + " " + a2);
        let g2 = n2.ticks.source === "data" && this.getDataTimestamps();
        for (u = d3, f2 = 0; u < s; u = +t.add(u, r, a2), f2++)
          eo(h3, u, g2);
        return (u === s || n2.bounds === "ticks" || f2 === 1) && eo(h3, u, g2), Object.keys(h3).sort(Qn).map((p3) => +p3);
      }
      getLabelForValue(t) {
        let e = this._adapter, s = this.options.time;
        return s.tooltipFormat ? e.format(t, s.tooltipFormat) : e.format(t, s.displayFormats.datetime);
      }
      format(t, e) {
        let n2 = this.options.time.displayFormats, o2 = this._unit, a2 = e || n2[o2];
        return this._adapter.format(t, a2);
      }
      _tickFormatFunction(t, e, s, n2) {
        let o2 = this.options, a2 = o2.ticks.callback;
        if (a2)
          return E2(a2, [t, e, s], this);
        let r = o2.time.displayFormats, l2 = this._unit, c2 = this._majorUnit, h3 = l2 && r[l2], d3 = c2 && r[c2], u = s[e], f2 = c2 && d3 && u && u.major;
        return this._adapter.format(t, n2 || (f2 ? d3 : h3));
      }
      generateTickLabels(t) {
        let e, s, n2;
        for (e = 0, s = t.length; e < s; ++e)
          n2 = t[e], n2.label = this._tickFormatFunction(n2.value, e, t);
      }
      getDecimalForValue(t) {
        return t === null ? NaN : (t - this.min) / (this.max - this.min);
      }
      getPixelForValue(t) {
        let e = this._offsets, s = this.getDecimalForValue(t);
        return this.getPixelForDecimal((e.start + s) * e.factor);
      }
      getValueForPixel(t) {
        let e = this._offsets, s = this.getDecimalForPixel(t) / e.factor - e.end;
        return this.min + s * (this.max - this.min);
      }
      _getLabelSize(t) {
        let e = this.options.ticks, s = this.ctx.measureText(t).width, n2 = et(this.isHorizontal() ? e.maxRotation : e.minRotation), o2 = Math.cos(n2), a2 = Math.sin(n2), r = this._resolveTickFontOptions(0).size;
        return { w: s * o2 + r * a2, h: s * a2 + r * o2 };
      }
      _getLabelCapacity(t) {
        let e = this.options.time, s = e.displayFormats, n2 = s[e.unit] || s.millisecond, o2 = this._tickFormatFunction(t, 0, io(this, [t], this._majorUnit), n2), a2 = this._getLabelSize(o2), r = Math.floor(this.isHorizontal() ? this.width / a2.w : this.height / a2.h) - 1;
        return r > 0 ? r : 1;
      }
      getDataTimestamps() {
        let t = this._cache.data || [], e, s;
        if (t.length)
          return t;
        let n2 = this.getMatchingVisibleMetas();
        if (this._normalized && n2.length)
          return this._cache.data = n2[0].controller.getAllParsedValues(this);
        for (e = 0, s = n2.length; e < s; ++e)
          t = t.concat(n2[e].controller.getAllParsedValues(this));
        return this._cache.data = this.normalize(t);
      }
      getLabelTimestamps() {
        let t = this._cache.labels || [], e, s;
        if (t.length)
          return t;
        let n2 = this.getLabels();
        for (e = 0, s = n2.length; e < s; ++e)
          t.push(Zn(this, n2[e]));
        return this._cache.labels = this._normalized ? t : this.normalize(t);
      }
      normalize(t) {
        return ui(t.sort(Qn));
      }
    };
    gs = class extends be {
      static id = "timeseries";
      static defaults = be.defaults;
      constructor(t) {
        super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
      }
      initOffsets() {
        let t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t);
        this._minPos = $e(e, this.min), this._tableRange = $e(e, this.max) - this._minPos, super.initOffsets(t);
      }
      buildLookupTable(t) {
        let { min: e, max: s } = this, n2 = [], o2 = [], a2, r, l2, c2, h3;
        for (a2 = 0, r = t.length; a2 < r; ++a2)
          c2 = t[a2], c2 >= e && c2 <= s && n2.push(c2);
        if (n2.length < 2)
          return [{ time: e, pos: 0 }, { time: s, pos: 1 }];
        for (a2 = 0, r = n2.length; a2 < r; ++a2)
          h3 = n2[a2 + 1], l2 = n2[a2 - 1], c2 = n2[a2], Math.round((h3 + l2) / 2) !== c2 && o2.push({ time: c2, pos: a2 / (r - 1) });
        return o2;
      }
      _generate() {
        let t = this.min, e = this.max, s = super.getDataTimestamps();
        return (!s.includes(t) || !s.length) && s.splice(0, 0, t), (!s.includes(e) || s.length === 1) && s.push(e), s.sort((n2, o2) => n2 - o2);
      }
      _getTimestampsForTable() {
        let t = this._cache.all || [];
        if (t.length)
          return t;
        let e = this.getDataTimestamps(), s = this.getLabelTimestamps();
        return e.length && s.length ? t = this.normalize(e.concat(s)) : t = e.length ? e : s, t = this._cache.all = t, t;
      }
      getDecimalForValue(t) {
        return ($e(this._table, t) - this._minPos) / this._tableRange;
      }
      getValueForPixel(t) {
        let e = this._offsets, s = this.getDecimalForPixel(t) / e.factor - e.end;
        return $e(this._table, s * this._tableRange + this._minPos, true);
      }
    };
    Lc = Object.freeze({ __proto__: null, CategoryScale: cs, LinearScale: hs, LogarithmicScale: ds, RadialLinearScale: fs, TimeScale: be, TimeSeriesScale: gs });
    So = [ja, gl, lc, Lc];
    qt.register(...So);
    Bc = qt;
  }
});

// esbuild_serve:http-import:https://esm.sh/chart.js/auto
var auto_exports = {};
__export(auto_exports, {
  Animation: () => Hi,
  Animations: () => Xe,
  ArcElement: () => ss,
  BarController: () => ji,
  BarElement: () => as,
  BasePlatform: () => qe,
  BasicPlatform: () => Gi,
  BubbleController: () => $i,
  CategoryScale: () => cs,
  Chart: () => qt,
  Colors: () => yl,
  DatasetController: () => dt,
  Decimation: () => Sl,
  DomPlatform: () => Ji,
  DoughnutController: () => fe,
  Element: () => nt,
  Filler: () => $l,
  Interaction: () => qa,
  Legend: () => Gl,
  LineController: () => Ui,
  LineElement: () => Gt,
  LinearScale: () => hs,
  LogarithmicScale: () => ds,
  PieController: () => Yi,
  PointElement: () => os,
  PolarAreaController: () => Ke,
  RadarController: () => Xi,
  RadialLinearScale: () => fs,
  Scale: () => Et,
  ScatterController: () => Ki,
  SubTitle: () => Zl,
  Ticks: () => se,
  TimeScale: () => be,
  TimeSeriesScale: () => gs,
  Title: () => Ql,
  Tooltip: () => rc,
  _adapters: () => $a,
  _detectPlatform: () => gr,
  animator: () => mt,
  controllers: () => ja,
  default: () => Bc,
  defaults: () => W3,
  elements: () => gl,
  layouts: () => q3,
  plugins: () => lc,
  registerables: () => So,
  registry: () => ht,
  scales: () => Lc
});
var init_auto2 = __esm({
  "esbuild_serve:http-import:https://esm.sh/chart.js/auto"() {
    init_polyfill();
    init_bug_reporter();
    init_mod();
    init_urlpattern_polyfill();
    init_main();
    init_popover_polyfill();
    init_color();
    init_auto();
    init_auto();
  }
});

// pages/user/settings.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// pages/shared/mod.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// pages/shared/Progress.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/mod.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/webgen.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/Style.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/Components.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
function css(data, ...expr) {
  const merge = data.map((x2, i4) => x2 + (expr[i4] || ""));
  const style = new CSSStyleSheet();
  style.replaceSync(merge.join(""));
  return style;
}
var createElement = (tagName, options) => window.document.createElement(tagName, options);

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/css/themes.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
var blur = {
  ["--background-color"]: "hsla(0, 0%, 4%, 1)",
  ["--on-background-text"]: "white",
  ["--background-card"]: "hsl(0deg 0% 8% / 68%)",
  ["--on-card-text"]: "#ffffff",
  ["--on-card-subtext"]: "#646464",
  ["--on-card-background"]: "rgb(41 41 41)",
  ["--text-red"]: "#f81919",
  ["--backdrop-filter"]: "blur(1rem)",
  ["--color-grayscaled-inline-font"]: "white"
};
var dark = {
  ["--box-shadow"]: "none",
  ["--background-color"]: "hsla(0, 0%, 4%, 1)",
  ["--on-background-text"]: "#dddddd",
  ["--background-card"]: "hsla(0, 0%, 9%, 1)",
  ["--on-card-text"]: "#ffffff",
  ["--on-card-subtext"]: "#646464",
  ["--on-card-background"]: "hsl(0deg 0% 14%)",
  ["--text-red"]: "#f81919",
  ["--color-grayscaled-inline-font"]: "white",
  ["--color-disabled-lightness"]: "14%",
  ["--color-disabled-font"]: "#5c5c5c"
};
var light = {
  ["--box-shadow"]: " 0px 4px 8px 0px rgb(0 0 0 / 15%)",
  ["--background-color"]: "hsl(0deg, 0%, 97.45%)",
  ["--on-background-text"]: "#2f363a",
  ["--background-card"]: " hsla(0, 0%, 100%, 1)",
  ["--on-card-text"]: "#2d2d2d",
  ["--on-card-subtext"]: "#646464",
  ["--on-card-background"]: " rgb(255, 255, 255)",
  ["--text-red"]: "#f81919",
  ["--color-grayscaled-lightness"]: "15%",
  ["--color-grayscaled-font"]: "#ffffff",
  ["--color-grayscaled-inline-font"]: "black"
};

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/Style.ts
var Style = class {
  theme;
  current = 1 /* gray */;
  mediaQuery = globalThis.matchMedia("(prefers-color-scheme: dark)");
  options;
  constructor(options) {
    const styleAppendTo = options.defaultElementToHookStylesIn ?? document.documentElement;
    this.options = options;
    this.theme = styleAppendTo;
    const data = (options.primaryColor ?? "hsl(200, 50%, 40%)")?.match(/hsl\((?<hue>\d+), (?<saturation>\d+%), .*%\)/);
    if (!(data && data.groups && data.groups.hue && data.groups.saturation))
      throw new Error("Bad Primary Color");
    document.adoptedStyleSheets.push(css`:root{ --webgen-primary-hue: ${data.groups.hue}; --webgen-primary-sat: ${data.groups.saturation};}`);
    this.mediaQuery.addEventListener("change", (e) => {
      if (this.current == 5 /* autoDark */ || this.current == 6 /* autoLight */)
        this.updateTheme(e.matches ? 5 /* autoDark */ : 6 /* autoLight */);
    });
  }
  getTheme = () => this.current;
  getColors = () => ({
    ["critical" /* Critical */]: [360, 86, 65, "#333333"],
    ["colored" /* Colored */]: [227, 85, 65, "#FFFFFF"],
    ["grayscaled" /* Grayscaled */]: [0, 0, 100, "#333333"],
    ["disabled" /* Disabled */]: [0, 0, 75, "#A0A0A0"]
  });
  overrideTheme(data) {
    const dataWithDefaults = {
      ...this.getMapping()[this.current],
      ...data
    };
    this.applyStyles(dataWithDefaults);
  }
  mapColorDef(data) {
    const object = {};
    Object.entries(data).forEach(([color, values]) => {
      const indexToName = ["hue", "saturation", "lightness", "font"];
      values.forEach((value, index) => {
        object[`--color-${color}-${indexToName[index]}`] = value.toString() + ["deg", "%", "%", ""][index];
      });
    });
    return object;
  }
  applyStyles(data) {
    const extendData = {
      ...this.mapColorDef(this.getColors()),
      ...data
    };
    Object.entries(extendData).forEach(([key, value]) => this.theme.style.setProperty(key, value));
  }
  updateTheme(theme) {
    this.options.events?.themeRefreshed?.(theme, this);
    if (theme === 4 /* auto */)
      this.updateTheme(this.mediaQuery.matches ? 5 /* autoDark */ : 6 /* autoLight */);
    else {
      if (this.current == theme)
        return;
      if (theme === 1 /* gray */)
        this.theme.removeAttribute("style");
      this.applyStyles(this.getMapping()[theme]);
      document.body.setAttribute("data-theme", theme == 0 /* light */ || theme == 6 /* autoLight */ ? "light" : "dark");
      this.current = theme;
      this.options.events?.themeChanged?.(theme, this);
    }
  }
  getMapping = () => ({
    [0 /* light */]: light,
    [1 /* gray */]: {},
    [2 /* dark */]: dark,
    [3 /* blur */]: blur,
    [6 /* autoLight */]: light,
    [5 /* autoDark */]: dark
  });
};

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/Body.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/components/Custom.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/Component.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/State.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/components/Empty.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/components/Box.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
function Box(...components) {
  const block = createElement("div");
  block.append(...components.map((x2) => x2.draw()));
  return Custom(block);
}

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/components/Empty.ts
var Empty = () => Box().removeFromLayout();

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/State.ts
function isState(obj) {
  return typeof obj === "object" && obj !== null && "$on" in obj && typeof obj.$on === "function";
}
function isRef(obj) {
  return typeof obj === "object" && obj !== null && "listen" in obj;
}
function asRef(value) {
  if (isRef(value))
    return value;
  let _val = value;
  const list = /* @__PURE__ */ new Set();
  return {
    setValue: (val) => {
      const oldval = _val;
      _val = val;
      if (oldval === _val)
        return;
      for (const iterator of list) {
        iterator(val, oldval);
      }
    },
    getValue: () => _val,
    map: (map) => {
      const Ref = asRef(map(_val));
      list.add((val) => {
        Ref.setValue(map(val));
      });
      return Ref;
    },
    listen: (callback) => {
      list.add(callback);
      callback(_val);
    },
    asRefComponent: () => {
      if (!(_val instanceof Component)) {
        throw new Error("asRefComponent called on a non component Ref.");
      }
      console.debug("asRefComponent got constructed");
      const wrapper = Empty().draw();
      wrapper.append(_val.draw());
      list.add((val) => {
        wrapper.textContent = "";
        wrapper.append(val.draw());
      });
      return Custom(wrapper);
    },
    addItem: (item) => {
      if (!Array.isArray(_val)) {
        throw new Error("addItem called on a non array Ref.");
      }
      _val.push(item);
      list.forEach((it) => it(_val));
    },
    removeItem: (item) => {
      if (!Array.isArray(_val)) {
        throw new Error("addItem called on a non array Ref.");
      }
      const index = _val.indexOf(item);
      if (index === -1)
        return;
      _val.splice(index, 1);
      list.forEach((it) => it(_val));
    }
  };
}
function refMerge(data) {
  const loadData = () => Object.fromEntries(Object.entries(data).map(([key, value]) => [key, value.getValue()]));
  const internalValue = asRef(loadData());
  for (const iterator of Object.values(data)) {
    let firstTime = true;
    iterator.listen(() => {
      if (firstTime)
        return firstTime = false;
      internalValue.setValue(loadData());
    });
  }
  return internalValue;
}
var dependencyCollector = /* @__PURE__ */ new Map();
function _state(data, state2 = {}) {
  if (isState(data) || typeof data !== "object")
    return data;
  const observers = state2.o || /* @__PURE__ */ new Map();
  const observerProperties = state2.op || /* @__PURE__ */ new Map();
  const isArray = Array.isArray(data);
  const children = [];
  const proxySource = isArray ? [] : Object.create(data, {});
  for (const property in data) {
    const entry = data[property];
    if ("HTMLElement" in globalThis && entry instanceof HTMLElement)
      throw new Error("Cannot set a HTMLElement in an State Object");
    if (typeof entry === "object" && entry !== null) {
      proxySource[property] = !isState(entry) ? _state(entry) : entry;
      children.push(property);
    } else {
      proxySource[property] = entry;
    }
  }
  const dep = (a2) => (p3, c2) => {
    let obs = observers.get(p3);
    let props = observerProperties.get(c2);
    if (!obs) {
      obs = /* @__PURE__ */ new Set();
      observers.set(p3, obs);
    }
    if (!props) {
      props = /* @__PURE__ */ new Set();
      observerProperties.set(c2, props);
    }
    obs[a2](c2);
    props[a2](p3);
  };
  const $on = dep("add");
  const $off = dep("delete");
  const _em = (property, newValue, oldValue) => {
    observers.has(property) && observers.get(property).forEach((c2) => c2(newValue, oldValue));
  };
  const _st = () => {
    return {
      o: observers,
      op: observerProperties,
      r: proxySource,
      p: proxy._p
    };
  };
  const depProps = {
    $on,
    // Listen to properties
    $off,
    // Stop listening to properties
    _em,
    // Emit a change event for a given property
    _st,
    _p: void 0
  };
  const proxy = new Proxy(proxySource, {
    has(target, key) {
      return key in depProps || key in target;
    },
    get(...args) {
      const [, p3] = args;
      if (Reflect.has(depProps, p3))
        return Reflect.get(depProps, p3);
      if (typeof p3 === "string" && p3.startsWith("$"))
        return {
          getValue: () => proxy[p3.replace("$", "")],
          setValue: (val) => {
            proxy[p3.replace("$", "")] = val;
          },
          map: (map) => {
            const key = p3.replace("$", "");
            const pointer = asRef(proxy[key]);
            const c2 = (newVal) => pointer.setValue(map(newVal));
            c2(proxy[key]);
            $on(key, (val, oldVal) => c2(val, oldVal));
            return pointer;
          },
          listen: (c2) => {
            const key = p3.replace("$", "");
            c2(proxy[key]);
            $on(p3.replace("$", ""), (val, oldVal) => c2(val, oldVal));
          },
          addItem: (item) => {
            if (!Array.isArray(proxy[p3.replace("$", "")])) {
              throw new Error("addItem called on a non array Ref.");
            }
            proxy[p3.replace("$", "")].push(item);
          },
          removeItem: (item) => {
            if (!Array.isArray(proxy[p3.replace("$", "")])) {
              throw new Error("addItem called on a non array Ref.");
            }
            const index = proxy[p3.replace("$", "")].indexOf(item);
            if (index === -1)
              return;
            proxy[p3.replace("$", "")].splice(index, 1);
          }
        };
      const value = Reflect.get(...args);
      addDep(proxy, p3);
      if (isArray && p3 in Array.prototype) {
        return arrayOperation(
          p3,
          proxySource,
          proxy,
          value
        );
      }
      return value;
    },
    set(...args) {
      const [target, property, value] = args;
      const old = Reflect.get(target, property);
      if (Reflect.has(depProps, property)) {
        return Reflect.set(depProps, property, value);
      }
      if (value && isState(old)) {
        const o2 = old;
        const oldState = o2._st();
        const newR = isState(value) ? reactiveMerge(value, o2) : _state(value, oldState);
        Reflect.set(
          target,
          property,
          // Create a new reactive object
          newR
        );
        _em(property, newR);
        oldState.o.forEach((_c2, property2) => {
          const oldValue = Reflect.get(old, property2);
          const newValue = Reflect.get(newR, property2);
          if (oldValue !== newValue) {
            o2._em(property2, newValue, oldValue);
          }
        });
        return true;
      }
      const didSet = Reflect.set(...args);
      if (didSet) {
        if (old !== value) {
          _em(property, value, old);
        }
        if (proxy._p) {
          proxy._p[1]._em(...proxy._p);
        }
      }
      return didSet;
    }
  });
  if (state2.p)
    proxy._p = state2.p;
  children.map((c2) => {
    proxy[c2]._p = [c2, proxy];
  });
  return proxy;
}
function addDep(proxy, property) {
  dependencyCollector.forEach((tracker) => {
    let properties = tracker.get(proxy);
    if (!properties) {
      properties = /* @__PURE__ */ new Set();
      tracker.set(proxy, properties);
    }
    properties.add(property);
  });
}
function arrayOperation(op, arr, proxy, native) {
  const synthetic = (...args) => {
    const retVal = Array.prototype[op].call(arr, ...args);
    arr.forEach((item, i4) => proxy._em(String(i4), item));
    if (proxy._p) {
      const [property, parent] = proxy._p;
      parent._em(property, proxy);
    }
    return retVal;
  };
  switch (op) {
    case "shift":
    case "pop":
    case "sort":
    case "reverse":
    case "copyWithin":
      return synthetic;
    case "unshift":
    case "push":
    case "fill":
      return (...args) => synthetic(...args.map((arg) => _state(arg)));
    case "splice":
      return (start, remove, ...inserts) => synthetic(start, remove, ...inserts.map((arg) => _state(arg)));
    default:
      return native;
  }
}
function reactiveMerge(reactiveTarget, reactiveSource) {
  const state2 = reactiveSource._st();
  if (state2.o) {
    state2.o.forEach((callbacks, property) => {
      callbacks.forEach((c2) => {
        reactiveTarget.$on(property, c2);
      });
    });
  }
  if (state2.p) {
    reactiveTarget._p = state2.p;
  }
  return reactiveTarget;
}
var asState = (data) => _state(data);
function listenOnInitalStateKeys(data) {
  const keys = Object.keys(data);
  return refMerge(Object.fromEntries(keys.map((key) => [key, data["$" + key]])));
}

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/Component.ts
var Component = class extends EventTarget {
  constructor(wrapper = createElement("div")) {
    super();
    this.wrapper = wrapper;
  }
  addClass(val, ...classes) {
    asRef(val).listen((val2, oldVal) => {
      if (oldVal)
        this.wrapper.classList.remove(oldVal);
      this.wrapper.classList.add(val2);
    });
    this.wrapper.classList.add(...classes);
    return this;
  }
  setAnchorName(name) {
    if (name == void 0) {
      this.wrapper.removeAttribute("anchor");
      return this;
    }
    this.setAttribute("anchor", name);
    return this;
  }
  setAttribute(key, value = "") {
    asRef(value).listen((val) => {
      if (val === void 0) {
        this.wrapper.removeAttribute(key);
        return;
      }
      this.wrapper.setAttribute(key, val);
    });
    return this;
  }
  setPadding(size) {
    this.wrapper.style.padding = size;
    return this;
  }
  addPrefix(component) {
    this.wrapper.prepend(component.draw());
    return this;
  }
  addSuffix(component) {
    this.wrapper.append(component.draw());
    return this;
  }
  setWidth(size) {
    this.wrapper.style.width = size;
    return this;
  }
  setHeight(size) {
    this.wrapper.style.height = size;
    return this;
  }
  setMargin(size) {
    this.wrapper.style.margin = size;
    return this;
  }
  setId(id) {
    this.wrapper.id = id;
    return this;
  }
  setGrow(value = 1) {
    this.wrapper.style.flexGrow = value.toString();
    return this;
  }
  setAlignItems(type) {
    this.wrapper.style.alignItems = type;
    return this;
  }
  setAlignContent(type) {
    this.wrapper.style.alignContent = type;
    return this;
  }
  setAlignSelf(type) {
    this.wrapper.style.alignSelf = type;
    return this;
  }
  setJustifyItems(type) {
    this.wrapper.style.justifyItems = type;
    return this;
  }
  setJustifyContent(type) {
    this.wrapper.style.justifyContent = type;
    return this;
  }
  setJustifySelf(type) {
    this.wrapper.style.justifySelf = type;
    return this;
  }
  setBorderRadius(value) {
    const map = {
      "tiny": "0.3rem",
      "mid": "0.5rem",
      "large": "0.8rem",
      "complete": "100rem"
    };
    this.wrapper.style.borderRadius = map[value] ?? value;
    return this;
  }
  setTextSize(size) {
    this.addClass(`text-${size}`);
    return this;
  }
  setFontWeight(weight) {
    this.addClass(`font-${weight}`);
    return this;
  }
  setDirection(type) {
    this.wrapper.style.flexDirection = type;
    return this;
  }
  draw() {
    return this.wrapper;
  }
  onRightClick(func) {
    this.wrapper.addEventListener("contextmenu", (e) => func(e));
    return this;
  }
  onClick(func) {
    this.wrapper.addEventListener("click", func);
    return this;
  }
  removeFromLayout() {
    this.wrapper.style.display = "contents";
    return this;
  }
};

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/components/Custom.ts
var CustomComponent = class extends Component {
  constructor(text) {
    super();
    this.wrapper = text;
  }
};
var Custom = (text) => new CustomComponent(text);

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/Body.ts
var Body = (component) => {
  const item = createElement("article");
  item.append(component.draw());
  document.body.append(item);
  return Custom(item);
};

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/components/Button.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/Accessibility.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
var accessibilityDisableTabOnDisabled = (color = "grayscaled" /* Grayscaled */) => color === "disabled" /* Disabled */ ? -1 : 0;

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/types.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
var ColoredComponent = class extends Component {
  color = asRef("grayscaled" /* Grayscaled */);
  constructor(wrapper = createElement("a")) {
    super(wrapper);
    this.color.listen((val) => {
      this.wrapper.tabIndex = accessibilityDisableTabOnDisabled(val);
    });
    this.addClass(this.color);
  }
  setColor(color) {
    asRef(color).listen((val) => this.color.setValue(val));
    return this;
  }
};

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/components/light-components/loadingWheel.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
var loadingWheel = () => {
  const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  icon.classList.add("loading-wheel");
  icon.setAttribute("viewBox", "0 0 73 73");
  icon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  icon.setAttribute("fill", "none");
  icon.innerHTML = `<circle cx="36.5" cy="36.5" r="35.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;
  return icon;
};

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/components/Button.ts
var speicalSyles = ["spinner" /* Spinner */, "progress" /* Progress */];
var enableTuple = (enabled, color = "grayscaled" /* Grayscaled */) => ["disabled" /* Disabled */, color][enabled ? "values" : "reverse"]();
var ButtonComponent = class extends ColoredComponent {
  prog = createElement("div");
  style = asRef("normal" /* Normal */);
  constructor(string, wrapper = createElement("button")) {
    super(wrapper);
    this.color.listen((val) => {
      this.wrapper.tabIndex = accessibilityDisableTabOnDisabled(val);
    });
    this.addClass(this.color);
    this.wrapper.classList.add("wbutton", "normal" /* Normal */);
    this.wrapper.tabIndex = speicalSyles.includes("normal" /* Normal */) ? -1 : accessibilityDisableTabOnDisabled();
    this.wrapper.append(loadingWheel());
    const element = createElement("div");
    this.wrapper.append(element);
    asRef(string).listen((val) => {
      element.replaceChildren(typeof val == "string" ? val : val.draw());
    });
    this.color.listen((color) => {
      this.wrapper.tabIndex = speicalSyles.includes(this.wrapper.classList[3]) ? -1 : accessibilityDisableTabOnDisabled(color);
    });
    this.addClass(this.style);
    this.addClass(this.style.map((it) => it == "spinner" /* Spinner */ ? "loading" : "non-loading"));
  }
  setEnabled = (enabled) => this.wrapper.classList.replace(...enableTuple(enabled));
  setStyle(style, progress) {
    asRef(style).listen((style2) => {
      this.wrapper.tabIndex = speicalSyles.includes(style2) ? -1 : accessibilityDisableTabOnDisabled();
      this.style.setValue(style2);
      if (progress !== void 0 && style2 === "progress" /* Progress */) {
        this.prog.classList.add("progress");
        asRef(progress).listen((progress2) => {
          this.prog.style.width = `${progress2.toString()}%`;
        });
        this.wrapper.append(this.prog);
      }
    });
    return this;
  }
  setAlignContent(type) {
    this.wrapper.style.alignContent = type;
    return this;
  }
  setJustifyContent(type) {
    this.wrapper.style.justifyContent = type;
    return this;
  }
  setGrow(value = 1) {
    this.wrapper.style.flexGrow = value.toString();
    return this;
  }
  onPromiseClick(func) {
    this.onClick(async (env, e) => {
      const styleBefore = this.style.getValue();
      this.setStyle("spinner" /* Spinner */);
      try {
        await func(env, e);
      } catch (error) {
        console.error(error);
      }
      this.setStyle(styleBefore);
    });
    return this;
  }
  onClick(func) {
    if (this.color.getValue() == "disabled" /* Disabled */)
      return this;
    this.wrapper.addEventListener("click", (e) => func(e, this));
    return this;
  }
};
var LinkButtonComponent = class extends ButtonComponent {
  constructor(title, url, target) {
    super(title, createElement("a"));
    if (this.wrapper instanceof HTMLAnchorElement) {
      this.wrapper.href = url;
      if (target)
        this.wrapper.target = target;
    }
  }
};
var Button = (string) => new ButtonComponent(string);
var LinkButton = (string, url, target) => new LinkButtonComponent(string, url, target);

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/Helper.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
var dropNullish = (...components) => components.filter((x2) => x2);
async function createFilePicker(accept) {
  const fileSignal = Promise.withResolvers();
  const input = createElement("input");
  input.type = "file";
  input.hidden = true;
  input.accept = accept;
  input.addEventListener("change", () => {
    fileSignal.resolve(Array.from(input.files ?? [])[0]);
  });
  input.showPicker();
  return await fileSignal.promise;
}

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/icons/MaterialIcons.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/lazyInit.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
var lazyInit = (fn2) => {
  let prom = void 0;
  return () => prom = prom || fn2();
};

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/icons/MaterialIcons.ts
var iconSet = {
  outlined: lazyInit(() => Promise.resolve().then(() => __toESM(require_outlined()))),
  filled: lazyInit(() => Promise.resolve().then(() => __toESM(require_filled()))),
  round: lazyInit(() => Promise.resolve().then(() => __toESM(require_round()))),
  sharp: lazyInit(() => Promise.resolve().then(() => __toESM(require_sharp()))),
  "two-tone": lazyInit(() => Promise.resolve().then(() => __toESM(require_two_tone())))
};
var MaterialIconComponent = class extends Component {
  constructor(name, type) {
    super();
    asRef(name).listen((val) => this.wrapper.innerText = val);
    asRef(type).listen((val) => iconSet[val]());
    this.addClass(asRef(type).map((it) => it == "filled" ? "material-icons" : "material-icons-" + it), "wicon");
  }
};
var MaterialIcon = (name, type = "round") => new MaterialIconComponent(name, type);
var MIcon = MaterialIcon;

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/components/FormInputs.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/components/Layer.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
var LayerComponent = class extends Component {
  level = 0;
  tintlayer = createElement("div");
  constructor(child, level = 0, surface = "shadow") {
    super();
    this.wrapper.append(this.tintlayer, child.draw());
    this.wrapper.classList.add("wlayer", "wlayer" + level, surface);
    this.tintlayer.classList.add("wlayer-inner");
  }
  setBorderRadius(value) {
    super.setBorderRadius(value);
    Custom(this.tintlayer).setBorderRadius(value);
    return this;
  }
};
var Layer = (child, level = 0, surface = "shadow") => new LayerComponent(child, level, surface);

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/components/Popover.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
var Popover = (content2) => new class extends Component {
  constructor() {
    super();
    this.addClass("wpopover");
    this.wrapper.append(content2.draw());
    this.setAttribute("popover");
    document.body.append(this.draw());
  }
  showPopover() {
    try {
      this.wrapper.showPopover();
    } catch {
    }
    return this;
  }
  hidePopover() {
    try {
      this.wrapper.hidePopover();
    } catch {
      console.log("Failed to hide popover");
    }
    return this;
  }
  togglePopover(force) {
    this.wrapper.togglePopover(force);
    return this;
  }
  isOpen() {
    return this.wrapper.matches(":popover-open");
  }
  clearAnchors(anchorName) {
    const anchors = document.querySelectorAll(`[anchor="${anchorName}"]`);
    anchors.forEach((anchor) => anchor.removeAttribute("anchor"));
    return this;
  }
  pullingAnchorPositioning(anchorName, positioning, interval = 20) {
    setInterval(() => {
      const anchor = document.querySelector(`[anchor="${anchorName}"]`);
      if (!anchor)
        return;
      const rect = anchor.getBoundingClientRect();
      positioning(rect, this.wrapper.style);
    }, interval);
    return this;
  }
}();

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/components/Stacks.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
var SpacerCompoent = class extends Component {
};
var AlignComponent = class extends Component {
  constructor(type, components) {
    super();
    this.wrapper.classList.add(type);
    this.wrapper.append(...dropNullish(...components).map((x2) => x2.draw()));
  }
  setMargin(margin) {
    this.wrapper.style.width = margin ? `calc(100% - ${margin} - ${margin})` : "";
    this.wrapper.style.margin = margin ?? "";
    return this;
  }
  setGap(gap = "var(--gap)") {
    this.wrapper.style.gap = gap;
    return this;
  }
};
var CenterV = (...list) => Vertical(Spacer(), ...list, Spacer());
var Spacer = () => new SpacerCompoent().addClass("spacer");
var Horizontal = (...components) => new AlignComponent("horizontal-stack", components.flat());
var Vertical = (...components) => new AlignComponent("vertical-stack", components.flat());
var GridComponent = class extends Component {
  constructor(components) {
    super();
    this.wrapper.classList.add("wggrid");
    this.wrapper.style.display = "grid";
    this.wrapper.append(...components.map((x2) => {
      if (Array.isArray(x2)) {
        const { width, height } = x2[0];
        const ele = x2[1].draw();
        if (width)
          ele.style.gridColumn = `${width} span`;
        if (height)
          ele.style.gridRow = `${height} span`;
        return ele;
      }
      return x2.draw();
    }));
  }
  setGap(gap = "var(--gap)") {
    this.wrapper.style.gap = gap;
    return this;
  }
  setRawColumns(template) {
    this.wrapper.style.gridTemplateColumns = template;
    return this;
  }
  setDynamicColumns(minSize = 6, max = "1fr") {
    this.wrapper.style.gridTemplateColumns = `repeat(auto-fit,minmax(${minSize}rem,${max}))`;
    return this;
  }
  setEvenColumns(count, size = "1fr") {
    this.wrapper.style.gridTemplateColumns = `${size} `.repeat(count);
    return this;
  }
  setAutoRow(row) {
    this.wrapper.style.gridAutoRows = row;
    return this;
  }
  setAutoColumn(column) {
    this.wrapper.style.gridAutoColumns = column;
    return this;
  }
  setDirection(type) {
    this.wrapper.style.gridAutoFlow = type;
    return this;
  }
};
var Grid = (...components) => new GridComponent(components);

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/components/FormInputs.ts
var speicalSyles2 = ["spinner" /* Spinner */, "progress" /* Progress */];
var InputForm = class extends ColoredComponent {
  data = null;
  key = null;
  valueRender = (data) => `${data}` || JSON.stringify(data);
  setValue(value) {
    if (isRef(value))
      value.listen((val) => this.dispatchEvent(new CustomEvent("update", { detail: val })));
    else
      this.dispatchEvent(new CustomEvent("update", { detail: asRef(value).getValue() }));
    return this;
  }
  sync(data, key) {
    this.data = data;
    this.key = key;
    this.addEventListener("update", (event) => data[key] = event.detail);
    if (Object.hasOwn(data, key))
      this.setValue(data[key]);
    data.$on(key, (value) => this.setValue(value));
    return this;
  }
  setRender(action) {
    this.valueRender = action;
    this.dispatchEvent(new CustomEvent("data", {}));
    return this;
  }
  onChange(action) {
    this.addEventListener("update", (data) => action(data.detail));
    return this;
  }
};
var content = asRef(Box());
var dropDownPopover = Popover(Layer(
  content.asRefComponent(),
  5
).setBorderRadius("mid").addClass("wdropdown-outer-layer")).pullingAnchorPositioning("--wdropdown-default", (rect, style) => {
  style.top = `max(-5px, ${rect.bottom}px)`;
  style.left = `${rect.left}px`;
  style.minWidth = `${rect.width}px`;
  style.bottom = "var(--gap)";
});

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/components/FormText.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/components/Label.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
var Label = (title, type = "span") => new class extends Component {
  wrapper = createElement(type);
  constructor() {
    super();
    this.addClass("wlabel");
    if (isRef(title))
      title.listen((val) => this.wrapper.textContent = val);
    else
      this.wrapper.textContent = title;
  }
  setTextAlign(type2) {
    this.wrapper.style.textAlign = type2;
    return this;
  }
  setBalanced() {
    if ("textWrap" in this.wrapper.style)
      this.wrapper.style.textWrap = "balance";
    return this;
  }
  removeWrap() {
    this.wrapper.style.whiteSpace = "nowrap";
    return this;
  }
}();

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/components/FormText.ts
var TextInputComponent = class extends InputForm {
  input = createElement("input");
  constructor(type, label, mode) {
    super();
    this.wrapper.classList.add("winput", "normal" /* Normal */);
    const placeholder = Label(label).draw();
    this.input.type = type;
    this.addEventListener("update", (event) => {
      const value = event.detail;
      if (value)
        this.wrapper.classList.add("has-value");
      this.input.value = value ?? "";
    });
    this.input.onfocus = () => {
      this.input.focus();
      this.wrapper.classList.add("has-value");
    };
    this.wrapper.onclick = () => {
      if (this.input.value === "") {
        this.wrapper.classList.add("has-value");
        this.input.focus();
      }
    };
    this.input.onblur = () => {
      if (this.input.value === "") {
        this.wrapper.classList.remove("has-value");
      }
    };
    if (mode == "live" || type == "date") {
      this.input.oninput = () => this.setValue(this.input.value);
    } else {
      this.input.onchange = () => {
        this.setValue(this.input.value);
      };
    }
    this.wrapper.append(placeholder, this.input);
    this.color.map((it) => it == "disabled" /* Disabled */).listen((val) => this.input.disabled = val);
    this.wrapper.tabIndex = -1;
  }
  setStyle(_style) {
    return this;
  }
  required() {
    this.input.required = true;
    return this;
  }
  setAutofill(text) {
    this.input.autocomplete = text;
    return this;
  }
};
var TextInput = (type, label, mode = "live") => new TextInputComponent(type, label, mode);

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/components/IconButton.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
var IconButtonComponent = class extends ColoredComponent {
  constructor(icon, label) {
    super();
    this.wrapper.classList.add("wiconbutton");
    this.wrapper.append(
      icon.draw()
    );
    this.wrapper.ariaLabel = label;
  }
  asLinkButton(url, target) {
    this.wrapper.href = url;
    if (target)
      this.wrapper.target = target;
    return this;
  }
  setStyle(_style) {
    throw new Error("Method not implemented.");
  }
};
var IconButton = (icon, label) => new IconButtonComponent(icon, label);

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/components/Image.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
var ImageComponent = class extends Component {
  alt;
  constructor(data, alt) {
    super();
    this.alt = alt;
    this.wrapper.classList.add("wimage");
    if (typeof data == "string") {
      this.wrapper.classList.add("loading");
      this.wrapper.append(this.renderLoading());
      this.wrapper.append(this.renderImage(data, true));
    } else if (data.type == "direct") {
      this.wrapper.classList.add("loading");
      this.wrapper.append(this.renderLoading());
      data.source().then((x2) => {
        this.wrapper.classList.remove("loading");
        this.wrapper.children[0].replaceWith(this.renderImage(URL.createObjectURL(x2), true));
      });
    } else if (data.type == "loading") {
      this.wrapper.classList.add("loading");
      this.wrapper.append(this.renderLoading());
    } else if (data.type == "uploading") {
      const background = this.renderImage(data.blobUrl);
      background.classList.add("background");
      const progress = Box(Custom(this.renderImage(data.blobUrl))).draw();
      progress.classList.add("progress");
      progress.style.height = `${data.percentage.toFixed(1)}%`;
      const overlay = Vertical(
        Spacer(),
        Label(data.text ?? "Uploading...").addClass("small"),
        Spacer(),
        Label(`${data.percentage.toFixed(1)}%`).addClass("big"),
        Spacer(),
        Label(data.filename).addClass("small"),
        Spacer()
      ).addClass("overlay").draw();
      const darkLayer = Box().addClass("dark-layer").draw();
      this.wrapper.append(background, progress, darkLayer, overlay);
    } else if (data.type == "waiting-upload") {
      const background = this.renderImage(data.blobUrl);
      background.classList.add("background");
      const progress = Box(Custom(this.renderImage(data.blobUrl))).draw();
      progress.classList.add("progress");
      progress.style.height = `100%`;
      const overlay = Vertical(
        Spacer(),
        Label(" ").addClass("small"),
        Spacer(),
        Label(data.text ?? "Finishing Upload...").addClass("mid"),
        Spacer(),
        Label(data.filename).addClass("small"),
        Spacer()
      ).addClass("overlay").draw();
      const darkLayer = Box().addClass("dark-layer").draw();
      this.wrapper.append(background, progress, darkLayer, overlay);
    }
  }
  renderLoading() {
    return loadingWheel();
  }
  renderImage(source, removeLoading = false) {
    const img = createElement("img");
    img.style.width = "100%";
    img.src = source;
    img.alt = this.alt;
    if (removeLoading)
      img.onload = () => {
        this.wrapper.classList.remove("loading");
        this.wrapper.querySelector(".loading-wheel")?.remove();
      };
    return img;
  }
  resizeToBox() {
    this.addClass("resize-to-box");
    return this;
  }
  setAspectRatio(ratio) {
    this.wrapper.style.aspectRatio = ratio;
    return this;
  }
};
var Image = (data, alt) => new ImageComponent(data, alt);

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/components/MediaQuery.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
function mediaQueryRef(matchString) {
  const query = matchMedia(matchString);
  const pointer = asRef(query.matches);
  query.addEventListener("change", ({ matches }) => pointer.setValue(matches), { passive: true });
  return pointer;
}

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/components/Sheet.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/mobileQuery.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
var isMobile = mediaQueryRef("(max-width: 750px)");

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/components/Sheet.ts
var SheetComponent = class extends Component {
  constructor(offset, kind) {
    super();
    this.offset = offset;
    this.kind = kind;
    this.addClass("wsheet");
    this.wrapper.append(kind.draw());
  }
  onClose = asRef(() => {
  });
  canClose = asRef(true);
  setWidth(size) {
    this.wrapper.style.setProperty("--sheet-desktop-width", size);
    return this;
  }
  setHeight(size) {
    this.wrapper.style.setProperty("--sheet-desktop-height", size);
    return this;
  }
  setOnClose(onClose) {
    this.onClose.setValue(onClose);
    return this;
  }
  setCanClose(canClose) {
    canClose.listen((it) => this.canClose.setValue(it));
    return this;
  }
};
var SheetsStackComponent = class extends Component {
  constructor(mobileTrigger) {
    super();
    this.mobileTrigger = mobileTrigger;
    this.onClick(() => {
      const sheet = this.sheets.getValue().at(-1);
      if (!sheet.canClose.getValue())
        return;
      sheet.onClose.getValue()();
      this.remove(sheet);
    });
    this.addClass("wstacking-sheets");
    this.addClass(mobileTrigger.map((it) => it ? "mobile-variant" : "desktop-variant"));
  }
  sheets = asRef([]);
  add(sheet) {
    this.sheets.addItem(sheet);
    const index = this.sheets.getValue().length - 1;
    const element = sheet.draw();
    element.style.zIndex = `${index + 10}`;
    const sheetVisible = this.sheets.map((it) => it.includes(sheet));
    const sheetOnTop = this.sheets.map((it) => it.at(-1) === sheet);
    sheet.addClass(sheetVisible.map((it) => it ? "shown" : "hidden"));
    sheet.addClass(sheetOnTop.map((it) => it ? "on-top" : "not-on-top"));
    sheet.addClass(this.sheets.map((sheets) => sheets.length - 1 > 0 ? "background" : "no-background"));
    this.mobileTrigger.map((mobile) => {
      element.style.setProperty("--sheet-index", `${index > 0 && !mobile ? index - 1 : index}`);
    });
    sheet.onClick((ev) => {
      ev.stopPropagation();
    });
    this.sheets.map((it) => it.length).listen((it) => {
      if (it && it > 0) {
        element.style.setProperty("--sheet-reverse-index", `${it - index - 1}`);
      } else
        element.style.setProperty("--sheet-reverse-index", `0`);
    });
    this.wrapper.append(element);
    return this;
  }
  setDefault(component) {
    this.add(new SheetComponent(asRef(0), component));
  }
  async remove(sheet) {
    const index = this.sheets.getValue().indexOf(sheet);
    const animationEnded = Promise.withResolvers();
    this.wrapper.children[index].addEventListener("animationend", () => animationEnded.resolve());
    this.sheets.setValue(this.sheets.getValue().filter((it) => it !== sheet));
    await animationEnded.promise;
    this.wrapper.children[index].remove();
    return this;
  }
  setSheetWidth(size) {
    this.wrapper.style.setProperty("--sheet-desktop-width", size);
    return this;
  }
  setSheetHeight(size) {
    this.wrapper.style.setProperty("--sheet-desktop-height", size);
    return this;
  }
};
var SheetsStack = (mobileTrigger = isMobile) => new SheetsStackComponent(mobileTrigger);

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/components/Taglist.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
var Taglist = (list, selected, icon = { forward: MIcon("arrow_back_ios_new"), backwards: MIcon("arrow_forward_ios") }) => new class extends Component {
  items = createElement("div");
  move = createElement("div");
  constructor() {
    super();
    const state2 = asState({
      left: false,
      right: false
    });
    this.wrapper.classList.add("wtags");
    this.items.classList.add("items");
    this.move.classList.add("move");
    this.wrapper.append(this.items, this.move);
    this.items.append(...list.map(
      (x2, i4) => Button(x2).setColor("colored" /* Colored */).onClick(() => selected.setValue(i4)).setStyle(selected.map((index) => index == i4 ? "normal" /* Normal */ : "secondary" /* Secondary */)).draw()
    ));
    this.move.append(
      IconButton(icon.forward, "go backwards in tag list").onClick(() => this.items.scrollBy({
        left: 0 - this.wrapper.clientWidth / 2,
        behavior: "smooth"
      })).addClass(state2.$left.map((val) => val ? "show" : "hidden")).draw(),
      IconButton(icon.backwards, "go forward in tag list").addClass(state2.$right.map((val) => val ? "show" : "hidden")).onClick(() => this.items.scrollBy({
        left: this.wrapper.clientWidth / 2,
        behavior: "smooth"
      })).draw()
    );
    this.items.addEventListener("scroll", () => {
      if (this.items.scrollLeft == 0)
        state2.left = false;
      else
        state2.left = true;
      if (this.items.scrollWidth - this.items.clientWidth - this.items.scrollLeft == 0)
        state2.right = false;
      else
        state2.right = true;
    }, { passive: true });
    new ResizeObserver(() => {
      state2.right = this.items.scrollWidth !== this.items.offsetWidth;
    }).observe(this.wrapper);
    setTimeout(() => {
      state2.right = this.items.scrollWidth !== this.items.offsetWidth;
    }, 1e3);
  }
}();

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/KeyValue.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
async function createKeyValue(collectionName) {
  const db = await new Promise((resolve, reject2) => {
    const request = indexedDB.open("webgen-keyval");
    request.onerror = () => {
      reject2(new Error("Failed to open IndexedDB"));
    };
    request.onsuccess = () => {
      resolve(request.result);
    };
    request.onupgradeneeded = function() {
      request.result.createObjectStore(collectionName);
    };
  });
  const set = (key, value) => {
    return new Promise((resolve, reject2) => {
      const transaction = db.transaction([collectionName], "readwrite");
      const store = transaction.objectStore(collectionName);
      transaction.onerror = () => {
        reject2(new Error("Error in IndexedDB transaction"));
      };
      transaction.oncomplete = () => {
        resolve();
      };
      store.put(value, key);
    });
  };
  const get = (key) => {
    return new Promise((resolve, reject2) => {
      const transaction = db.transaction([collectionName], "readonly");
      const store = transaction.objectStore(collectionName);
      const request = store.get(key);
      request.onerror = () => {
        reject2(new Error("Error retrieving value from IndexedDB"));
      };
      request.onsuccess = () => {
        resolve(request.result);
      };
    });
  };
  const has = (key) => {
    return new Promise((resolve, reject2) => {
      const transaction = db.transaction([collectionName], "readonly");
      const store = transaction.objectStore(collectionName);
      const request = store.get(key);
      request.onerror = () => {
        reject2(new Error("Error retrieving value from IndexedDB"));
      };
      request.onsuccess = () => {
        resolve(request.result !== void 0);
      };
    });
  };
  const clear = () => {
    return new Promise((resolve, reject2) => {
      const transaction = db.transaction([collectionName], "readwrite");
      const store = transaction.objectStore(collectionName);
      const request = store.clear();
      request.onerror = () => {
        reject2(new Error("Error clearing IndexedDB store"));
      };
      request.onsuccess = () => {
        resolve();
      };
    });
  };
  const remove = (key) => {
    return new Promise((resolve, reject2) => {
      const transaction = db.transaction([collectionName], "readwrite");
      const store = transaction.objectStore(collectionName);
      const request = store.delete(key);
      request.onerror = () => {
        reject2(new Error("Error deleting key from IndexedDB"));
      };
      request.onsuccess = () => {
        resolve();
      };
    });
  };
  return {
    set,
    get,
    has,
    clear,
    remove
  };
}

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/Validate.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
function getErrorMessage(state2) {
  const selc = state2.errors.find((x2) => x2.message != "Invalid input") ?? state2.errors.find((x2) => x2.message != "Required") ?? state2.errors[0];
  const path = selc.path.map((x2) => typeof x2 == "number" ? `[${x2}]` : x2.replace(/^./, (str) => str.toUpperCase())).join("");
  return `${path}: ${selc.message}`;
}
function Validate(data, validator) {
  const formState = listenOnInitalStateKeys(data);
  const error = asRef(void 0);
  formState.listen(() => error.setValue(void 0));
  return {
    data,
    error,
    errorMessage: error.map((error2) => error2 ? getErrorMessage(error2) : void 0),
    validate: () => {
      const response = validator.safeParse(data);
      if (!response.success) {
        error.setValue(response.error);
        return void 0;
      }
      return response.data;
    }
  };
}

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/components/Entry.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
var Entry = (content2) => new EntryComponent(content2);
var BasicLabel = (content2) => EntryComponent.basicContent(content2);
var EntryComponent = class extends Component {
  prefix = createElement("div");
  suffix = createElement("div");
  state = asState({
    isLoading: false
  });
  constructor(content2) {
    super();
    this.wrapper = Layer(
      content2 instanceof Component ? content2 : BasicLabel(content2),
      2,
      "shadow"
    ).addClass("wentry").setBorderRadius("large").draw();
    this.wrapper.setAttribute("aria-role", "button");
    this.prefix.classList.add("prefix");
    this.wrapper.prepend(this.prefix);
    this.suffix.classList.add("suffix");
    this.wrapper.append(this.suffix);
  }
  static basicContent(content2) {
    return Grid(
      ...content2.subtitle ? [
        Label(content2.title).addClass("title"),
        Label(content2.subtitle).addClass("subtitle")
      ] : [
        Label(content2.title).addClass("title")
      ]
    ).addClass("basic-text");
  }
  addSuffix(component) {
    this.suffix.append(component.draw());
    return this;
  }
  addPrefix(component) {
    this.prefix.append(component.draw());
    this.prefix.style.marginRight = "var(--gap)";
    return this;
  }
  onClick(func, icon = MIcon("arrow_forward_ios")) {
    this.onPromiseClick(async (e) => {
      await func(e);
    }, icon);
    return this;
  }
  onPromiseClick(func, icon = MIcon("arrow_forward_ios")) {
    this.wrapper.classList.add("action");
    const item = CenterV(icon).draw();
    const actionIcon = this.state.$isLoading.map(
      () => this.state.isLoading ? Box(Custom(loadingWheel())).addClass("loading") : Custom(item)
    ).asRefComponent().addClass("action-item");
    this.suffix.append(actionIcon.draw());
    this.wrapper.onclick = (ev) => {
      this.state.isLoading = true;
      func(ev).then(() => {
        this.state.isLoading = false;
      });
    };
    return this;
  }
};

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/webgen.ts
var WebGen = (options = {}) => {
  console.log("Loaded @lucsoft/webgen");
  const theme = new Style(options);
  if (options.updateThemeOnInit ?? true)
    theme.updateTheme(options.theme ?? 4 /* auto */);
  return {
    theme
  };
};

// pages/shared/cache.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
var fileCache = lazyInit(() => createKeyValue("file-cache"));

// pages/shared/components.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
var LoadingSpinner = () => Box(Custom(loadingWheel())).addClass("loading");
var lazyChart = lazyInit(() => Promise.resolve().then(() => (init_auto2(), auto_exports)));

// pages/shared/list.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
init_restSpec();
var HeavyList = (items, map) => new class extends Component {
  placeholder = Box();
  loadMore = async (_offset, _limit) => {
  };
  paging = asState({ enabled: false, limit: 30 });
  constructor() {
    super();
    console.debug("HeavyList got constructed");
    const list = asRef(items);
    list.listen((val) => {
      this.wrapper.textContent = "";
      if (val === "loading") {
        this.wrapper.append(
          LoadingSpinner().draw()
        );
      } else if ("status" in val) {
        if (val.status === "fulfilled") {
          this.wrapper.append(
            this.paging.$enabled.map(
              () => this.canLoadMore(val.value.length) ? Vertical(
                ...val.value.length == 0 ? [this.placeholder] : val.value.map((x2) => map(x2)).filter((_3, index) => index % this.paging.limit !== 1),
                Horizontal(
                  Button("Load More").onPromiseClick(() => this.loadMore(val.value.length, this.paging.limit))
                ).setMargin("0 0 var(--gap)")
              ).setGap() : Vertical(
                ...val.value.length == 0 ? [this.placeholder] : val.value.map((x2) => map(x2))
              ).setGap()
            ).asRefComponent().draw()
          );
        } else {
          this.wrapper.append(
            Horizontal(
              Vertical(
                MIcon("error"),
                Label(displayError(val.reason))
              ).setAlignItems("center").setGap("calc(var(--gap) * 0.25)").addClass("error-message")
            ).draw()
          );
        }
      } else {
        this.wrapper.append(
          Vertical(
            ...val.length == 0 ? [this.placeholder] : val.map((x2) => map(x2)),
            this.paging.$enabled.map(() => this.paging.enabled ? Button("Load More").setMargin("0 0 var(--gap)").onPromiseClick(() => this.loadMore(val.length - 2, this.paging.limit + 1)) : Empty()).asRefComponent().removeFromLayout()
          ).setGap().draw()
        );
      }
    });
  }
  canLoadMore(length) {
    return this.paging.enabled && length % this.paging.limit == 1;
  }
  enablePaging(loadMore, limit = 30) {
    this.paging.enabled = true;
    this.paging.limit = limit;
    this.loadMore = loadMore;
    return this;
  }
  setPlaceholder(val) {
    this.placeholder = val;
    return this;
  }
}();

// pages/shared/listCount.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// pages/shared/navigation.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// esbuild_serve:http-import:https://deno.land/std@0.221.0/assert/assert.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// esbuild_serve:http-import:https://deno.land/std@0.221.0/assert/assertion_error.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
var AssertionError = class extends Error {
  /** Constructs a new instance. */
  constructor(message) {
    super(message);
    this.name = "AssertionError";
  }
};

// esbuild_serve:http-import:https://deno.land/std@0.221.0/assert/assert.ts
function assert(expr, msg = "") {
  if (!expr) {
    throw new AssertionError(msg);
  }
}

// pages/shared/navigation.ts
function traverseToMenuNode(rootNode, path) {
  const pathSegments = path.split("/").filter(Boolean);
  let currentNode = rootNode;
  for (const segment of pathSegments) {
    if (currentNode?.children) {
      const childNode = asRef(currentNode.children).getValue().find(
        (child) => !(child instanceof Component) && child.id === segment
      );
      if (childNode) {
        currentNode = childNode;
        continue;
      }
    }
    return null;
  }
  return currentNode || null;
}
function resolvePathToNodes(rootNode, path) {
  const nodes = [];
  const pathSegments = path.split("/").filter(Boolean);
  let currentNode = rootNode;
  for (const segment of pathSegments) {
    if (currentNode?.children) {
      const childNode = asRef(currentNode.children).getValue().find(
        (child) => !(child instanceof Component) && child.id === segment
      );
      if (childNode) {
        currentNode = childNode;
        nodes.push(currentNode);
        continue;
      }
    }
    assert(segment, `Missing path segment ${segment} for ${path}`);
  }
  return nodes;
}
function getMenuNodeByPrefix(rootNode, rootId) {
  if (rootId == "-")
    return rootNode;
  assert(rootNode.categories);
  const categoryNode = rootNode.categories.find((category) => category.id === rootId);
  assert(categoryNode, "category not found");
  return categoryNode;
}
var MenuImpl = class extends Component {
  rootNode;
  path;
  displayed = asRef([]);
  #header = asRef(defaultHeader);
  #footer = asRef(defaultFooter);
  constructor(rootNode) {
    super();
    this.rootNode = rootNode;
    this.path = asRef(rootNode.categories?.at(0) ? `${rootNode.categories.at(0).id}/` : "-/");
    this.wrapper.append(
      Vertical(
        this.#header.map((it) => it(this)).asRefComponent().removeFromLayout(),
        HeavyList(this.displayed, (item) => {
          if (item instanceof Component) {
            return item;
          }
          if (asRef(item.hidden ?? false).getValue()) {
            return Empty();
          }
          const entry = Entry(item.replacement ? asRef(item.replacement).getValue() : item).addClass(isMobile.map((mobile) => mobile ? "small" : "desktop"));
          const click = this.createClickHandler(item);
          if (item.suffix) {
            entry.addSuffix(asRef(item.suffix).getValue());
          }
          if (click) {
            entry.onPromiseClick(async () => await click());
          }
          return entry;
        }),
        this.#footer.map((it) => it(this)).asRefComponent().removeFromLayout()
      ).setGap().draw()
    );
    this.path.listen((val) => {
      const [rootId] = val.split("/");
      const unprefixed = val.replace(rootId, "");
      const root = getMenuNodeByPrefix(rootNode, rootId);
      assert(root);
      const item = traverseToMenuNode(root, unprefixed);
      assert(item, "No Node found");
      if (isRef(item.children)) {
        item.children.listen((items) => {
          if (val == this.path.getValue()) {
            this.displayed.setValue(items);
          }
        });
      } else {
        this.displayed.setValue(item.children ?? []);
      }
    });
  }
  createClickHandler(menu) {
    if (menu.clickHandler) {
      return async () => {
        await menu.clickHandler?.(`${this.path.getValue() + menu.id}/`, menu);
        if (menu.children) {
          this.path.setValue(`${this.path.getValue() + menu.id}/`);
        }
      };
    }
    if (menu.children) {
      return () => {
        this.path.setValue(`${this.path.getValue() + menu.id}/`);
      };
    }
    return void 0;
  }
  setHeader(header) {
    this.#header.setValue(header);
    return this;
  }
  setFooter(footer) {
    this.#footer.setValue(footer);
  }
};
var Navigation = (rootNode) => new MenuImpl(rootNode);
function defaultHeader(menu) {
  return isMobile.map((mobile) => {
    const list = Vertical(
      createBreadcrumb(menu),
      createTagList(menu)
    ).setGap();
    if (!mobile) {
      return Grid(
        list,
        createActionList(menu)
      ).setRawColumns("auto max-content").setGap().setAlignItems("center");
    }
    return list;
  }).asRefComponent();
}
function defaultFooter(menu) {
  return isMobile.map((mobile) => mobile && menu.rootNode.actions ? Box(createActionList(menu)).addClass(asRef(menu.rootNode.actions).map((it) => it.length == 0 ? "remove-from-layout" : "normal"), "sticky-footer") : Empty()).asRefComponent().removeFromLayout();
}
function createActionList(menu) {
  return asRef(menu.rootNode.actions ?? []).map((it) => Grid(...it).addClass("action-list-bar")).asRefComponent().removeFromLayout();
}
function createTagList(menu) {
  if (!menu.rootNode.categories)
    return Empty();
  const index = asRef(0);
  index.listen((val, oldVal) => {
    if (oldVal != void 0) {
      const path = menu.rootNode.categories[val];
      if (path) {
        menu.path.setValue(`${path.id}/`);
      }
    }
  });
  menu.path.listen((path) => {
    index.setValue(menu.rootNode.categories.findIndex((it) => it.id == path.split("/").at(0)));
  });
  return menu.path.map((path) => {
    const [rootId] = path.split("/");
    const unprefixed = path.replace(rootId, "");
    const visible = unprefixed == "/";
    return visible && menu.rootNode.categories ? Taglist(menu.rootNode.categories.map((it) => it.title), index) : Empty();
  }).asRefComponent();
}
function createBreadcrumb(menu) {
  return isMobile.map((mobile) => {
    const history = menu.path.map((path) => {
      const [rootId] = path.split("/");
      const unprefixed = path.replace(rootId, "");
      const root = getMenuNodeByPrefix(menu.rootNode, rootId);
      const items = resolvePathToNodes(root, unprefixed) ?? [];
      return [root, ...items];
    });
    function moveToPath(index) {
      menu.path.setValue(`${history.getValue().filter((_3, i4) => index >= i4).map((it) => it.id ?? "-").join("/")}/`);
    }
    if (mobile) {
      return history.map((it) => {
        const last = it.at(-2);
        if (!last) {
          return Label(parseTitle(menu.rootNode, it.at(-1), it.length - 1)).addClass("label");
        }
        return Box(
          // TODO: Make this a bit smaller
          Grid(
            MIcon("arrow_back_ios_new"),
            Label(parseTitle(menu.rootNode, last, it.indexOf(last) + 1)).addClass("label")
          ).addClass("history-entry", "mobile").onClick(() => moveToPath(it.indexOf(last))),
          Label(parseTitle(menu.rootNode, it.at(-1), it.length - 1)).addClass("label")
        );
      }).asRefComponent().addClass("history-list").removeFromLayout();
    }
    return history.map(
      (it) => Grid(
        ...it.map(
          (entry, index) => Box(
            Label(entry.title).setFontWeight("bold").addClass("label"),
            MIcon("arrow_forward_ios")
          ).addClass("history-entry").onClick(() => moveToPath(index))
        ).filter((_3, i4) => i4 != it.length - 1),
        Label(parseTitle(menu.rootNode, it.at(-1), it.length - 1)).addClass("label").setFontWeight("bold")
      ).addClass("history-list")
    ).asRefComponent().removeFromLayout();
  }).asRefComponent().removeFromLayout();
}
function parseTitle(rootNode, node, index) {
  if (index === 0 && node.displayTextInHeader != "same")
    return rootNode.title;
  return node.title;
}

// pages/shared/mod.ts
init_restSpec();

// pages/shared/slider.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// pages/shared/table2.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// pages/shared/upload.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
function ProgressTracker(percentage, expectedSize) {
  let bytesUploaded = 0;
  return new TransformStream({
    transform(chunk, controller) {
      bytesUploaded += chunk.length;
      percentage.setValue(bytesUploaded / expectedSize * 100);
      controller.enqueue(chunk);
    }
  });
}
function StreamingUploadHandler(path, events, file2) {
  try {
    const ws2 = new WebSocket(`${API.BASE_URL.replace("https", "wss").replace("http", "ws")}${path}`);
    const progress = asRef(0);
    progress.listen((percentage) => {
      events.onUploadTick(percentage);
    });
    const stream = file2.stream().pipeThrough(ProgressTracker(progress, file2.size));
    ws2.onopen = () => {
      ws2.send(`JWT ${events.credentials()}`);
    };
    const reader = stream.getReader();
    ws2.onmessage = async ({ data }) => {
      if (data == "failed") {
        console.log("Looks like we failed.");
        events.failure();
      } else if (data == "file") {
        ws2.send(`file ${JSON.stringify({ filename: file2.name, type: file2.type })}`);
      } else if (data == "next") {
        const read = await reader.read();
        if (read.value) {
          ws2.send(read.value);
        }
        if (read.done) {
          ws2.send("end");
          events.uploadDone();
        }
      } else {
        reader.releaseLock();
        events.backendResponse(data);
      }
    };
  } catch (error) {
    console.error(error);
    alert("There was an error uploading your files...\n\nPlease try again later");
  }
}

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/zod.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// esbuild_serve:http-import:https://deno.land/x/zod@v3.22.4/index.ts
var zod_v3_22_exports = {};
__export(zod_v3_22_exports, {
  BRAND: () => BRAND,
  DIRTY: () => DIRTY,
  EMPTY_PATH: () => EMPTY_PATH,
  INVALID: () => INVALID,
  NEVER: () => NEVER,
  OK: () => OK,
  ParseStatus: () => ParseStatus,
  Schema: () => ZodType,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBigInt: () => ZodBigInt,
  ZodBoolean: () => ZodBoolean,
  ZodBranded: () => ZodBranded,
  ZodCatch: () => ZodCatch,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodEffects: () => ZodEffects,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNativeEnum: () => ZodNativeEnum,
  ZodNever: () => ZodNever,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodParsedType: () => ZodParsedType,
  ZodPipeline: () => ZodPipeline,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSchema: () => ZodType,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodSymbol: () => ZodSymbol,
  ZodTransformer: () => ZodEffects,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  addIssueToContext: () => addIssueToContext,
  any: () => anyType,
  array: () => arrayType,
  bigint: () => bigIntType,
  boolean: () => booleanType,
  coerce: () => coerce,
  custom: () => custom,
  date: () => dateType,
  default: () => zod_v3_22_default,
  defaultErrorMap: () => en_default,
  discriminatedUnion: () => discriminatedUnionType,
  effect: () => effectsType,
  enum: () => enumType,
  function: () => functionType,
  getErrorMap: () => getErrorMap,
  getParsedType: () => getParsedType,
  instanceof: () => instanceOfType,
  intersection: () => intersectionType,
  isAborted: () => isAborted,
  isAsync: () => isAsync,
  isDirty: () => isDirty,
  isValid: () => isValid,
  late: () => late,
  lazy: () => lazyType,
  literal: () => literalType,
  makeIssue: () => makeIssue,
  map: () => mapType,
  nan: () => nanType,
  nativeEnum: () => nativeEnumType,
  never: () => neverType,
  null: () => nullType,
  nullable: () => nullableType,
  number: () => numberType,
  object: () => objectType,
  objectUtil: () => objectUtil,
  oboolean: () => oboolean,
  onumber: () => onumber,
  optional: () => optionalType,
  ostring: () => ostring,
  pipeline: () => pipelineType,
  preprocess: () => preprocessType,
  promise: () => promiseType,
  quotelessJson: () => quotelessJson,
  record: () => recordType,
  set: () => setType,
  setErrorMap: () => setErrorMap,
  strictObject: () => strictObjectType,
  string: () => stringType,
  symbol: () => symbolType,
  transformer: () => effectsType,
  tuple: () => tupleType,
  undefined: () => undefinedType,
  union: () => unionType,
  unknown: () => unknownType,
  util: () => util,
  void: () => voidType,
  z: () => external_exports
});
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// esbuild_serve:http-import:https://deno.land/x/zod@v3.22.4/external.ts
var external_exports = {};
__export(external_exports, {
  BRAND: () => BRAND,
  DIRTY: () => DIRTY,
  EMPTY_PATH: () => EMPTY_PATH,
  INVALID: () => INVALID,
  NEVER: () => NEVER,
  OK: () => OK,
  ParseStatus: () => ParseStatus,
  Schema: () => ZodType,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBigInt: () => ZodBigInt,
  ZodBoolean: () => ZodBoolean,
  ZodBranded: () => ZodBranded,
  ZodCatch: () => ZodCatch,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodEffects: () => ZodEffects,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNativeEnum: () => ZodNativeEnum,
  ZodNever: () => ZodNever,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodParsedType: () => ZodParsedType,
  ZodPipeline: () => ZodPipeline,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSchema: () => ZodType,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodSymbol: () => ZodSymbol,
  ZodTransformer: () => ZodEffects,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  addIssueToContext: () => addIssueToContext,
  any: () => anyType,
  array: () => arrayType,
  bigint: () => bigIntType,
  boolean: () => booleanType,
  coerce: () => coerce,
  custom: () => custom,
  date: () => dateType,
  defaultErrorMap: () => en_default,
  discriminatedUnion: () => discriminatedUnionType,
  effect: () => effectsType,
  enum: () => enumType,
  function: () => functionType,
  getErrorMap: () => getErrorMap,
  getParsedType: () => getParsedType,
  instanceof: () => instanceOfType,
  intersection: () => intersectionType,
  isAborted: () => isAborted,
  isAsync: () => isAsync,
  isDirty: () => isDirty,
  isValid: () => isValid,
  late: () => late,
  lazy: () => lazyType,
  literal: () => literalType,
  makeIssue: () => makeIssue,
  map: () => mapType,
  nan: () => nanType,
  nativeEnum: () => nativeEnumType,
  never: () => neverType,
  null: () => nullType,
  nullable: () => nullableType,
  number: () => numberType,
  object: () => objectType,
  objectUtil: () => objectUtil,
  oboolean: () => oboolean,
  onumber: () => onumber,
  optional: () => optionalType,
  ostring: () => ostring,
  pipeline: () => pipelineType,
  preprocess: () => preprocessType,
  promise: () => promiseType,
  quotelessJson: () => quotelessJson,
  record: () => recordType,
  set: () => setType,
  setErrorMap: () => setErrorMap,
  strictObject: () => strictObjectType,
  string: () => stringType,
  symbol: () => symbolType,
  transformer: () => effectsType,
  tuple: () => tupleType,
  undefined: () => undefinedType,
  union: () => unionType,
  unknown: () => unknownType,
  util: () => util,
  void: () => voidType
});
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// esbuild_serve:http-import:https://deno.land/x/zod@v3.22.4/errors.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// esbuild_serve:http-import:https://deno.land/x/zod@v3.22.4/locales/en.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// esbuild_serve:http-import:https://deno.land/x/zod@v3.22.4/helpers/util.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
var util;
((util2) => {
  util2.assertEqual = (val) => val;
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = (0, util2.objectKeys)(obj).filter(
      (k3) => typeof obj[obj[k3]] !== "number"
    );
    const filtered = {};
    for (const k3 of validKeys) {
      filtered[k3] = obj[k3];
    }
    return (0, util2.objectValues)(filtered);
  };
  util2.objectValues = (obj) => {
    return (0, util2.objectKeys)(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_3, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
((objectUtil3) => {
  objectUtil3.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};

// esbuild_serve:http-import:https://deno.land/x/zod@v3.22.4/ZodError.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json2 = JSON.stringify(obj, null, 2);
  return json2.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class _ZodError extends Error {
  issues = [];
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i4 = 0;
          while (i4 < issue.path.length) {
            const el2 = issue.path[i4];
            const terminal = i4 === issue.path.length - 1;
            if (!terminal) {
              curr[el2] = curr[el2] || { _errors: [] };
            } else {
              curr[el2] = curr[el2] || { _errors: [] };
              curr[el2]._errors.push(mapper(issue));
            }
            curr = curr[el2];
            i4++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static create = (issues) => {
    const error = new _ZodError(issues);
    return error;
  };
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  addIssue = (sub) => {
    this.issues = [...this.issues, sub];
  };
  addIssues = (subs = []) => {
    this.issues = [...this.issues, ...subs];
  };
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
        fieldErrors[sub.path[0]].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};

// esbuild_serve:http-import:https://deno.land/x/zod@v3.22.4/locales/en.ts
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(
        issue.expected,
        util.jsonStringifyReplacer
      )}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(
        issue.keys,
        ", "
      )}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(
        issue.options
      )}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(
        issue.options
      )}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var en_default = errorMap;

// esbuild_serve:http-import:https://deno.land/x/zod@v3.22.4/errors.ts
var overrideErrorMap = en_default;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}

// esbuild_serve:http-import:https://deno.land/x/zod@v3.22.4/helpers/parseUtil.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  let errorMessage = "";
  const maps = errorMaps.filter((m3) => !!m3).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: issueData.message || errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      getErrorMap(),
      // then global override map
      en_default
      // then global default map
    ].filter((x2) => !!x2)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class _ParseStatus {
  value = "valid";
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      syncPairs.push({
        key: await pair.key,
        value: await pair.value
      });
    }
    return _ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x2) => x2.status === "aborted";
var isDirty = (x2) => x2.status === "dirty";
var isValid = (x2) => x2.status === "valid";
var isAsync = (x2) => typeof Promise !== "undefined" && x2 instanceof Promise;

// esbuild_serve:http-import:https://deno.land/x/zod@v3.22.4/types.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// esbuild_serve:http-import:https://deno.land/x/zod@v3.22.4/helpers/errorUtil.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
var errorUtil;
((errorUtil2) => {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));

// esbuild_serve:http-import:https://deno.land/x/zod@v3.22.4/types.ts
var ParseInputLazyPath = class {
  parent;
  data;
  _path;
  _key;
  _cachedPath = [];
  constructor(parent, value, path, key) {
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (this._key instanceof Array) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`
    );
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    if (typeof ctx.data === "undefined") {
      return { message: required_error ?? ctx.defaultError };
    }
    return { message: invalid_type_error ?? ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
var ZodType = class {
  _type;
  _output;
  _input;
  _def;
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    const ctx = {
      common: {
        issues: [],
        async: params?.async ?? false,
        contextualErrorMap: params?.errorMap
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params?.errorMap,
        async: true
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  /** Alias of safeParseAsync */
  spa = this.safeParseAsync;
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(
          typeof refinementData === "function" ? refinementData(val, ctx) : refinementData
        );
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: "ZodEffects" /* ZodEffects */,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this, this._def);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: "ZodEffects" /* ZodEffects */,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: "ZodDefault" /* ZodDefault */
    });
  }
  brand() {
    return new ZodBranded({
      typeName: "ZodBranded" /* ZodBranded */,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: "ZodCatch" /* ZodCatch */
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[a-z][a-z0-9]*$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/;
var ipv6Regex = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
var datetimeRegex = (args) => {
  if (args.precision) {
    if (args.offset) {
      return new RegExp(
        `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`
      );
    } else {
      return new RegExp(
        `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}Z$`
      );
    }
  } else if (args.precision === 0) {
    if (args.offset) {
      return new RegExp(
        `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$`
      );
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$`);
    }
  } else {
    if (args.offset) {
      return new RegExp(
        `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$`
      );
    } else {
      return new RegExp(
        `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$`
      );
    }
  }
};
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
var ZodString = class _ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(
        ctx2,
        {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.string,
          received: ctx2.parsedType
        }
        //
      );
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      offset: options?.offset ?? false,
      ...errorUtil.errToObj(options?.message)
    });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options?.position,
      ...errorUtil.errToObj(options?.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  static create = (params) => {
    return new _ZodString({
      checks: [],
      typeName: "ZodString" /* ZodString */,
      coerce: params?.coerce ?? false,
      ...processCreateParams(params)
    });
  };
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / Math.pow(10, decCount);
}
var ZodNumber = class _ZodNumber extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  static create = (params) => {
    return new _ZodNumber({
      checks: [],
      typeName: "ZodNumber" /* ZodNumber */,
      coerce: params?.coerce || false,
      ...processCreateParams(params)
    });
  };
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  min = this.gte;
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  max = this.lte;
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  step = this.multipleOf;
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find(
      (ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value)
    );
  }
  get isFinite() {
    let max = null, min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
var ZodBigInt = class _ZodBigInt extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = BigInt(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.bigint,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  static create = (params) => {
    return new _ZodBigInt({
      checks: [],
      typeName: "ZodBigInt" /* ZodBigInt */,
      coerce: params?.coerce ?? false,
      ...processCreateParams(params)
    });
  };
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  min = this.gte;
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  max = this.lte;
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
var ZodBoolean = class _ZodBoolean extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
  static create = (params) => {
    return new _ZodBoolean({
      typeName: "ZodBoolean" /* ZodBoolean */,
      coerce: params?.coerce || false,
      ...processCreateParams(params)
    });
  };
};
var ZodDate = class _ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new _ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
  static create = (params) => {
    return new _ZodDate({
      checks: [],
      coerce: params?.coerce || false,
      typeName: "ZodDate" /* ZodDate */,
      ...processCreateParams(params)
    });
  };
};
var ZodSymbol = class _ZodSymbol extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
  static create = (params) => {
    return new _ZodSymbol({
      typeName: "ZodSymbol" /* ZodSymbol */,
      ...processCreateParams(params)
    });
  };
};
var ZodUndefined = class _ZodUndefined extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
  params;
  static create = (params) => {
    return new _ZodUndefined({
      typeName: "ZodUndefined" /* ZodUndefined */,
      ...processCreateParams(params)
    });
  };
};
var ZodNull = class _ZodNull extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
  static create = (params) => {
    return new _ZodNull({
      typeName: "ZodNull" /* ZodNull */,
      ...processCreateParams(params)
    });
  };
};
var ZodAny = class _ZodAny extends ZodType {
  // to prevent instances of other classes from extending ZodAny. this causes issues with catchall in ZodObject.
  _any = true;
  _parse(input) {
    return OK(input.data);
  }
  static create = (params) => {
    return new _ZodAny({
      typeName: "ZodAny" /* ZodAny */,
      ...processCreateParams(params)
    });
  };
};
var ZodUnknown = class _ZodUnknown extends ZodType {
  // required
  _unknown = true;
  _parse(input) {
    return OK(input.data);
  }
  static create = (params) => {
    return new _ZodUnknown({
      typeName: "ZodUnknown" /* ZodUnknown */,
      ...processCreateParams(params)
    });
  };
};
var ZodNever = class _ZodNever extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
  static create = (params) => {
    return new _ZodNever({
      typeName: "ZodNever" /* ZodNever */,
      ...processCreateParams(params)
    });
  };
};
var ZodVoid = class _ZodVoid extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
  static create = (params) => {
    return new _ZodVoid({
      typeName: "ZodVoid" /* ZodVoid */,
      ...processCreateParams(params)
    });
  };
};
var ZodArray = class _ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all(
        [...ctx.data].map((item, i4) => {
          return def.type._parseAsync(
            new ParseInputLazyPath(ctx, item, ctx.path, i4)
          );
        })
      ).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i4) => {
      return def.type._parseSync(
        new ParseInputLazyPath(ctx, item, ctx.path, i4)
      );
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new _ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new _ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new _ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
  static create = (schema, params) => {
    return new _ZodArray({
      type: schema,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: "ZodArray" /* ZodArray */,
      ...processCreateParams(params)
    });
  };
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(
      schema.items.map((item) => deepPartialify(item))
    );
  } else {
    return schema;
  }
}
var ZodObject = class _ZodObject extends ZodType {
  _cached = null;
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    return this._cached = { shape, keys };
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(
          new ParseInputLazyPath(ctx, value, ctx.path, key)
        ),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") {
      } else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          syncPairs.push({
            key,
            value: await pair.value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          const defaultError2 = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: errorUtil.errToObj(message).message ?? defaultError2
            };
          return {
            message: defaultError2
          };
        }
      } : {}
    });
  }
  strip() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  /**
   * @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
   * If you want to pass through unknown properties, use `.passthrough()` instead.
   */
  nonstrict = this.passthrough;
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  // extend<
  //   Augmentation extends ZodRawShape,
  //   NewOutput extends util.flatten<{
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   }>,
  //   NewInput extends util.flatten<{
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }>
  // >(
  //   augmentation: Augmentation
  // ): ZodObject<
  //   extendShape<T, Augmentation>,
  //   UnknownKeys,
  //   Catchall,
  //   NewOutput,
  //   NewInput
  // > {
  //   return new ZodObject({
  //     ...this._def,
  //     shape: () => ({
  //       ...this._def.shape(),
  //       ...augmentation,
  //     }),
  //   }) as any;
  // }
  /**
   * @deprecated Use `.extend` instead
   *  */
  augment = this.extend;
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new _ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: "ZodObject" /* ZodObject */
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    util.objectKeys(mask).forEach((key) => {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    });
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    });
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(
      util.objectKeys(this.shape)
    );
  }
  static create = (shape, params) => {
    return new _ZodObject({
      shape: () => shape,
      unknownKeys: "strip",
      catchall: ZodNever.create(),
      typeName: "ZodObject" /* ZodObject */,
      ...processCreateParams(params)
    });
  };
  static strictCreate = (shape, params) => {
    return new _ZodObject({
      shape: () => shape,
      unknownKeys: "strict",
      catchall: ZodNever.create(),
      typeName: "ZodObject" /* ZodObject */,
      ...processCreateParams(params)
    });
  };
  static lazycreate = (shape, params) => {
    return new _ZodObject({
      shape,
      unknownKeys: "strip",
      catchall: ZodNever.create(),
      typeName: "ZodObject" /* ZodObject */,
      ...processCreateParams(params)
    });
  };
};
var ZodUnion = class _ZodUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map(
        (result) => new ZodError(result.ctx.common.issues)
      );
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(
        options.map(async (option) => {
          const childCtx = {
            ...ctx,
            common: {
              ...ctx.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await option._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: childCtx
            }),
            ctx: childCtx
          };
        })
      ).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
  static create = (types, params) => {
    return new _ZodUnion({
      options: types,
      typeName: "ZodUnion" /* ZodUnion */,
      ...processCreateParams(params)
    });
  };
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return Object.keys(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else {
    return null;
  }
};
var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues) {
        throw new Error(
          `A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`
        );
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(
            `Discriminator property ${String(
              discriminator
            )} has duplicate value ${String(value)}`
          );
        }
        optionsMap.set(value, type);
      }
    }
    return new _ZodDiscriminatedUnion({
      typeName: "ZodDiscriminatedUnion" /* ZodDiscriminatedUnion */,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a2, b3) {
  const aType = getParsedType(a2);
  const bType = getParsedType(b3);
  if (a2 === b3) {
    return { valid: true, data: a2 };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b3);
    const sharedKeys = util.objectKeys(a2).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a2, ...b3 };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a2[key], b3[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a2.length !== b3.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a2.length; index++) {
      const itemA = a2[index];
      const itemB = b3[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a2 === +b3) {
    return { valid: true, data: a2 };
  } else {
    return { valid: false };
  }
}
var ZodIntersection = class _ZodIntersection extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(
        this._def.left._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      );
    }
  }
  static create = (left, right, params) => {
    return new _ZodIntersection({
      left,
      right,
      typeName: "ZodIntersection" /* ZodIntersection */,
      ...processCreateParams(params)
    });
  };
};
var ZodTuple = class _ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(
        new ParseInputLazyPath(ctx, item, ctx.path, itemIndex)
      );
    }).filter((x2) => !!x2);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new _ZodTuple({
      ...this._def,
      rest
    });
  }
  static create = (schemas, params) => {
    if (!Array.isArray(schemas)) {
      throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    }
    return new _ZodTuple({
      items: schemas,
      typeName: "ZodTuple" /* ZodTuple */,
      rest: null,
      ...processCreateParams(params)
    });
  };
};
var ZodRecord = class _ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(
          new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)
        )
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new _ZodRecord({
        keyType: first,
        valueType: second,
        typeName: "ZodRecord" /* ZodRecord */,
        ...processCreateParams(third)
      });
    }
    return new _ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: "ZodRecord" /* ZodRecord */,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class _ZodMap extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(
      ([key, value], index) => {
        return {
          key: keyType._parse(
            new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])
          ),
          value: valueType._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"])
          )
        };
      }
    );
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
  static create = (keyType, valueType, params) => {
    return new _ZodMap({
      valueType,
      keyType,
      typeName: "ZodMap" /* ZodMap */,
      ...processCreateParams(params)
    });
  };
};
var ZodSet = class _ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map(
      (item, i4) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i4))
    );
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new _ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new _ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
  static create = (valueType, params) => {
    return new _ZodSet({
      valueType,
      minSize: null,
      maxSize: null,
      typeName: "ZodSet" /* ZodSet */,
      ...processCreateParams(params)
    });
  };
};
var ZodFunction = class _ZodFunction extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          en_default
        ].filter((x2) => !!x2),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          en_default
        ].filter((x2) => !!x2),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn2 = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me2 = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me2._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn2, this, parsedArgs);
        const parsedReturns = await me2._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me2 = this;
      return OK(function(...args) {
        const parsedArgs = me2._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn2, this, parsedArgs.data);
        const parsedReturns = me2._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new _ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new _ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  validate = this.implement;
  static create(args, returns, params) {
    return new _ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: "ZodFunction" /* ZodFunction */,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class _ZodLazy extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
  static create = (getter, params) => {
    return new _ZodLazy({
      getter,
      typeName: "ZodLazy" /* ZodLazy */,
      ...processCreateParams(params)
    });
  };
};
var ZodLiteral = class _ZodLiteral extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
  static create = (value, params) => {
    return new _ZodLiteral({
      value,
      typeName: "ZodLiteral" /* ZodLiteral */,
      ...processCreateParams(params)
    });
  };
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: "ZodEnum" /* ZodEnum */,
    ...processCreateParams(params)
  });
}
var ZodEnum = class _ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (this._def.values.indexOf(input.data) === -1) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values) {
    return _ZodEnum.create(values);
  }
  exclude(values) {
    return _ZodEnum.create(
      this.options.filter((opt) => !values.includes(opt))
    );
  }
  static create = createZodEnum;
};
var ZodNativeEnum = class _ZodNativeEnum extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (nativeEnumValues.indexOf(input.data) === -1) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
  static create = (values, params) => {
    return new _ZodNativeEnum({
      values,
      typeName: "ZodNativeEnum" /* ZodNativeEnum */,
      ...processCreateParams(params)
    });
  };
};
var ZodPromise = class _ZodPromise extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(
      promisified.then((data) => {
        return this._def.type.parseAsync(data, {
          path: ctx.path,
          errorMap: ctx.common.contextualErrorMap
        });
      })
    );
  }
  static create = (schema, params) => {
    return new _ZodPromise({
      type: schema,
      typeName: "ZodPromise" /* ZodPromise */,
      ...processCreateParams(params)
    });
  };
};
var ZodEffects = class _ZodEffects extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === "ZodEffects" /* ZodEffects */ ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.issues.length) {
        return {
          status: "dirty",
          value: ctx.data
        };
      }
      if (ctx.common.async) {
        return Promise.resolve(processed).then((processed2) => {
          return this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
        });
      } else {
        return this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead."
          );
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return base;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(
            `Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`
          );
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return base;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then(
            (result) => ({ status: status.value, value: result })
          );
        });
      }
    }
    util.assertNever(effect);
  }
  static create = (schema, effect, params) => {
    return new _ZodEffects({
      schema,
      typeName: "ZodEffects" /* ZodEffects */,
      effect,
      ...processCreateParams(params)
    });
  };
  static createWithPreprocess = (preprocess, schema, params) => {
    return new _ZodEffects({
      schema,
      effect: { type: "preprocess", transform: preprocess },
      typeName: "ZodEffects" /* ZodEffects */,
      ...processCreateParams(params)
    });
  };
};
var ZodOptional = class _ZodOptional extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
  static create = (type, params) => {
    return new _ZodOptional({
      innerType: type,
      typeName: "ZodOptional" /* ZodOptional */,
      ...processCreateParams(params)
    });
  };
};
var ZodNullable = class _ZodNullable extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
  static create = (type, params) => {
    return new _ZodNullable({
      innerType: type,
      typeName: "ZodNullable" /* ZodNullable */,
      ...processCreateParams(params)
    });
  };
};
var ZodDefault = class _ZodDefault extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
  static create = (type, params) => {
    return new _ZodDefault({
      innerType: type,
      typeName: "ZodDefault" /* ZodDefault */,
      defaultValue: typeof params.default === "function" ? params.default : () => params.default,
      ...processCreateParams(params)
    });
  };
};
var ZodCatch = class _ZodCatch extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
  static create = (type, params) => {
    return new _ZodCatch({
      innerType: type,
      typeName: "ZodCatch" /* ZodCatch */,
      catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
      ...processCreateParams(params)
    });
  };
};
var ZodNaN = class _ZodNaN extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  static create = (params) => {
    return new _ZodNaN({
      typeName: "ZodNaN" /* ZodNaN */,
      ...processCreateParams(params)
    });
  };
};
var BRAND = Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class _ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a2, b3) {
    return new _ZodPipeline({
      in: a2,
      out: b3,
      typeName: "ZodPipeline" /* ZodPipeline */
    });
  }
};
var ZodReadonly = class _ZodReadonly extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    if (isValid(result)) {
      result.value = Object.freeze(result.value);
    }
    return result;
  }
  static create = (type, params) => {
    return new _ZodReadonly({
      innerType: type,
      typeName: "ZodReadonly" /* ZodReadonly */,
      ...processCreateParams(params)
    });
  };
};
var custom = (check, params = {}, fatal) => {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      if (!check(data)) {
        const p3 = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
        const _fatal = p3.fatal ?? fatal ?? true;
        const p22 = typeof p3 === "string" ? { message: p3 } : p3;
        ctx.addIssue({ code: "custom", ...p22, fatal: _fatal });
      }
    });
  return ZodAny.create();
};
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind = /* @__PURE__ */ ((ZodFirstPartyTypeKind2) => {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
  return ZodFirstPartyTypeKind2;
})(ZodFirstPartyTypeKind || {});
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: (arg) => ZodString.create({ ...arg, coerce: true }),
  number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
  boolean: (arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  }),
  bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
  date: (arg) => ZodDate.create({ ...arg, coerce: true })
};
var NEVER = INVALID;

// esbuild_serve:http-import:https://deno.land/x/zod@v3.22.4/index.ts
var zod_v3_22_default = external_exports;

// components/nav.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// esbuild_serve:http-import:https://deno.land/std@0.221.0/async/delay.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
function delay(ms2, options = {}) {
  const { signal, persistent } = options;
  if (signal?.aborted)
    return Promise.reject(signal.reason);
  return new Promise((resolve, reject2) => {
    const abort = () => {
      clearTimeout(i4);
      reject2(signal?.reason);
    };
    const done = () => {
      signal?.removeEventListener("abort", abort);
      resolve();
    };
    const i4 = setTimeout(done, ms2);
    signal?.addEventListener("abort", abort, { once: true });
    if (persistent === false) {
      try {
        Deno.unrefTimer(i4);
      } catch (error) {
        if (!(error instanceof ReferenceError)) {
          throw error;
        }
        console.error("`persistent` option is only available in Deno");
      }
    }
  });
}

// pages/_legacy/helper.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// assets/imports.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// components/pages.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// assets/img/bbnHolding.svg
var bbnHolding_default = "./bbnHolding-Z7WOZPKW.svg";

// assets/img/bbnMusic.svg
var bbnMusic_default = "./bbnMusic-DRY3HEUI.svg";

// assets/img/bbnHosting.svg
var bbnHosting_default = "./bbnHosting-MFNJZPY7.svg";

// assets/img/bbnAdmin.svg
var bbnAdmin_default = "./bbnAdmin-WUYEKLQ5.svg";

// assets/img/bbnWallet.svg
var bbnWallet_default = "./bbnWallet-UEEJRE73.svg";

// components/pages.ts
var pages = [
  [bbnHolding_default, [], "/", 0],
  [bbnMusic_default, [], "/c/music", 1],
  [bbnMusic_default, [], "/music", 2],
  [bbnHosting_default, [], "/hosting", 0],
  [bbnWallet_default, [], "/wallet", 1],
  [bbnAdmin_default, ["/bbn/manage", "/hmsys/user"], "/admin", 1]
];
var loginRequired = [
  "/c/music",
  "/hosting",
  "/admin",
  "/oauth",
  "/wallet"
];
function activeTitle(type) {
  if (type == "Music") {
    return "KSPC Music";
  }
  if (type == "Hosting") {
    return "KSPC Hosting";
  }
  if (type == "Wallet") {
    return "KSPC Wallet";
  }
  if (type == "Admin") {
    return "KSPC Admin";
  }
  return "KSPC Holding";
}

// spec/music.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// esbuild_serve:http-import:https://deno.land/std@0.221.0/collections/mod.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// esbuild_serve:http-import:https://deno.land/std@0.221.0/collections/sum_of.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
function sumOf(array, selector) {
  let sum = 0;
  for (const i4 of array) {
    sum += selector(i4);
  }
  return sum;
}

// esbuild_serve:http-import:https://deno.land/std@0.221.0/collections/sort_by.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// spec/music.ts
var DATE_PATTERN = /\d\d\d\d-\d\d-\d\d/;
var userString = zod_v3_22_exports.string().min(1).transform((x2) => x2.trim());
var DropType = /* @__PURE__ */ ((DropType2) => {
  DropType2["Published"] = "PUBLISHED";
  DropType2["Publishing"] = "PUBLISHING";
  DropType2["Private"] = "PRIVATE";
  DropType2["UnderReview"] = "UNDER_REVIEW";
  DropType2["Unsubmitted"] = "UNSUBMITTED";
  DropType2["ReviewDeclined"] = "REVIEW_DECLINED";
  return DropType2;
})(DropType || {});
var ArtistTypes = /* @__PURE__ */ ((ArtistTypes2) => {
  ArtistTypes2["Primary"] = "PRIMARY";
  ArtistTypes2["Featuring"] = "FEATURING";
  ArtistTypes2["Songwriter"] = "SONGWRITER";
  ArtistTypes2["Producer"] = "PRODUCER";
  return ArtistTypes2;
})(ArtistTypes || {});
var artist = zod_v3_22_exports.tuple([
  userString,
  zod_v3_22_exports.string(),
  zod_v3_22_exports.nativeEnum(ArtistTypes)
]);
var song = zod_v3_22_exports.object({
  id: zod_v3_22_exports.string(),
  isrc: zod_v3_22_exports.string().optional(),
  title: userString,
  artists: artist.array().refine((x2) => x2.some(([, , type]) => type == "PRIMARY"), { message: "At least one primary artist is required" }),
  secondaryGenre: zod_v3_22_exports.string(),
  year: zod_v3_22_exports.number(),
  country: zod_v3_22_exports.string(),
  //TODO: Add in frontend mby
  language: zod_v3_22_exports.string().optional(),
  explicit: zod_v3_22_exports.boolean(),
  instrumental: zod_v3_22_exports.boolean(),
  file: zod_v3_22_exports.string({ required_error: "a Song is missing its file." }),
  progress: zod_v3_22_exports.number().optional().transform((x2) => void 0)
}).refine(({ instrumental, explicit }) => !(instrumental && explicit), "Can't have an explicit instrumental song");
var pureDrop = zod_v3_22_exports.object({
  upc: zod_v3_22_exports.string().trim().max(0).nullable().or(
    zod_v3_22_exports.string().trim().min(12, { message: "UPC/EAN: Invalid length" }).max(13, { message: "UPC/EAN: Invalid length" }).regex(/^\d+$/, { message: "UPC/EAN: Not a number" }).refine((gtin) => parseInt(gtin.slice(-1), 10) === (10 - sumOf(gtin.slice(0, -1).split("").map((digit, index) => parseInt(digit, 10) * ((16 - gtin.length + index) % 2 === 0 ? 3 : 1)), (x2) => x2) % 10) % 10, {
      message: "UPC/EAN: Invalid"
    })
  ),
  title: userString,
  artists: artist.array().refine((x2) => x2.some(([, , type]) => type == "PRIMARY"), { message: "At least one primary artist is required" }),
  release: zod_v3_22_exports.string().regex(DATE_PATTERN, { message: "Not a date" }),
  language: zod_v3_22_exports.string(),
  primaryGenre: zod_v3_22_exports.string(),
  secondaryGenre: zod_v3_22_exports.string(),
  compositionCopyright: userString,
  soundRecordingCopyright: userString,
  artwork: zod_v3_22_exports.string(),
  songs: song.array().min(1),
  comments: userString.optional()
});
var drop = pureDrop.merge(zod_v3_22_exports.object({
  _id: zod_v3_22_exports.string(),
  user: zod_v3_22_exports.string(),
  type: zod_v3_22_exports.nativeEnum(DropType)
}));
var pageOne = zod_v3_22_exports.object({
  upc: zod_v3_22_exports.string().trim().min(12, { message: "UPC/EAN: Invalid length" }).max(13, { message: "UPC/EAN: Invalid length" }).regex(/^\d+$/, { message: "UPC/EAN: Not a number" }).refine((gtin) => parseInt(gtin.slice(-1), 10) === (10 - sumOf(gtin.slice(0, -1).split("").map((digit, index) => parseInt(digit, 10) * ((16 - gtin.length + index) % 2 === 0 ? 3 : 1)), (x2) => x2) % 10) % 10, {
    message: "UPC/EAN: Invalid checksum"
  }).or(zod_v3_22_exports.string().trim().max(0, { message: "UPC/EAN: Invalid" }).nullable())
});
var pageTwo = zod_v3_22_exports.object({
  title: userString,
  artists: artist.array().refine((x2) => x2.some(([, , type]) => type == "PRIMARY"), { message: "At least one primary artist is required" }),
  release: zod_v3_22_exports.string().regex(DATE_PATTERN, { message: "Not a date" }),
  language: zod_v3_22_exports.string(),
  primaryGenre: zod_v3_22_exports.string(),
  secondaryGenre: zod_v3_22_exports.string()
});
var pageThree = zod_v3_22_exports.object({
  compositionCopyright: userString,
  soundRecordingCopyright: userString
});
var pageFour = zod_v3_22_exports.object({
  artwork: zod_v3_22_exports.string(),
  loading: zod_v3_22_exports.literal(false, { errorMap: () => ({ message: "Artwork is still uploading" }) }).transform(() => void 0)
});
var pageFive = zod_v3_22_exports.object({
  songs: song.array().min(1, { message: "At least one song is required" }),
  uploadingSongs: zod_v3_22_exports.array(zod_v3_22_exports.string()).max(0, { message: "Some uploads are still in progress" })
});
var payout = zod_v3_22_exports.object({
  _id: zod_v3_22_exports.string(),
  file: zod_v3_22_exports.string(),
  period: zod_v3_22_exports.string(),
  entries: zod_v3_22_exports.object({
    isrc: zod_v3_22_exports.string(),
    data: zod_v3_22_exports.array(
      zod_v3_22_exports.object({
        store: zod_v3_22_exports.string(),
        territory: zod_v3_22_exports.string(),
        quantity: zod_v3_22_exports.number(),
        revenue: zod_v3_22_exports.number()
      })
    )
  }).array(),
  user: zod_v3_22_exports.string()
});
var oauthapp = zod_v3_22_exports.object({
  _id: zod_v3_22_exports.string(),
  name: userString,
  redirect: zod_v3_22_exports.string().url().array(),
  secret: zod_v3_22_exports.string(),
  icon: zod_v3_22_exports.string()
});
var file = zod_v3_22_exports.object({
  _id: zod_v3_22_exports.string(),
  length: zod_v3_22_exports.number(),
  chunkSize: zod_v3_22_exports.number(),
  uploadDate: zod_v3_22_exports.string(),
  filename: zod_v3_22_exports.string(),
  metadata: zod_v3_22_exports.object({
    type: zod_v3_22_exports.string()
  })
});
var PaymentType = /* @__PURE__ */ ((PaymentType2) => {
  PaymentType2["Restrained"] = "RESTRAINED";
  PaymentType2["Unrestrained"] = "UNRESTRAINED";
  return PaymentType2;
})(PaymentType || {});
var wallet = zod_v3_22_exports.object({
  _id: zod_v3_22_exports.string(),
  transactions: zod_v3_22_exports.object({
    amount: zod_v3_22_exports.number(),
    // positive for incoming, negative for outgoing
    timestamp: zod_v3_22_exports.string(),
    type: zod_v3_22_exports.nativeEnum(PaymentType),
    description: zod_v3_22_exports.string(),
    counterParty: zod_v3_22_exports.string()
  }).array(),
  cut: zod_v3_22_exports.number(),
  user: zod_v3_22_exports.string(),
  userName: zod_v3_22_exports.string().optional(),
  email: zod_v3_22_exports.string().optional(),
  balance: zod_v3_22_exports.object({
    restrained: zod_v3_22_exports.number(),
    unrestrained: zod_v3_22_exports.number()
  }).optional(),
  stripeAccountId: zod_v3_22_exports.string().optional()
});
var limits = zod_v3_22_exports.object({
  memory: zod_v3_22_exports.number(),
  disk: zod_v3_22_exports.number(),
  cpu: zod_v3_22_exports.number()
});
var ServerTypes = /* @__PURE__ */ ((ServerTypes2) => {
  ServerTypes2["Vanilla"] = "/minecraft/vanilla/";
  ServerTypes2["Default"] = "/minecraft/default/";
  ServerTypes2["Fabric"] = "/minecraft/modded/fabric/";
  ServerTypes2["Forge"] = "/minecraft/modded/forge/";
  ServerTypes2["Bedrock"] = "/minecraft/bedrock/";
  ServerTypes2["PocketMine"] = "/minecraft/pocketmine/";
  return ServerTypes2;
})(ServerTypes || {});
var serverPowerState = zod_v3_22_exports.enum(["starting", "installing", "stopping", "running", "offline"]);
var serverPowerActions = zod_v3_22_exports.enum(["start", "stop", "kill"]);
var location2 = zod_v3_22_exports.enum(["bbn-fsn", "bbn-hel", "bbn-mum", "bbn-sgp"]);
var serverLabels = zod_v3_22_exports.enum([
  "suspended",
  "contact-support",
  "maintenance",
  "disabled"
]);
var server = zod_v3_22_exports.object({
  _id: zod_v3_22_exports.string(),
  name: zod_v3_22_exports.string().max(30),
  type: zod_v3_22_exports.nativeEnum(ServerTypes),
  location: location2,
  limits,
  state: serverPowerState,
  address: zod_v3_22_exports.string().optional(),
  ports: zod_v3_22_exports.number().array(),
  user: zod_v3_22_exports.string(),
  stateSince: zod_v3_22_exports.number().describe("unix timestamp"),
  labels: serverLabels.array(),
  version: zod_v3_22_exports.string()
});
var serverCreate = zod_v3_22_exports.object({
  name: zod_v3_22_exports.string().min(3).max(20),
  type: zod_v3_22_exports.nativeEnum(ServerTypes),
  location: location2,
  limits: zod_v3_22_exports.object({
    memory: limits.shape.memory.min(300, "Minimum memory is 300MB"),
    disk: limits.shape.disk.min(200, "Minimum disk is 200MB"),
    cpu: limits.shape.cpu.min(3, "Minimum cpu is 3% of a core")
  }),
  version: zod_v3_22_exports.string()
});
var metaLimit = limits.extend({
  slots: zod_v3_22_exports.number()
});
var storeItems = zod_v3_22_exports.enum(["memory", "disk", "cpu", "slots"]);
var meta = zod_v3_22_exports.object({
  _id: zod_v3_22_exports.string(),
  owner: zod_v3_22_exports.string(),
  coins: zod_v3_22_exports.number(),
  limits: metaLimit,
  used: metaLimit,
  pricing: zod_v3_22_exports.record(
    storeItems,
    zod_v3_22_exports.object({
      price: zod_v3_22_exports.number(),
      amount: zod_v3_22_exports.number()
    })
  )
});
var bugReport = zod_v3_22_exports.object({
  type: zod_v3_22_exports.literal("web-frontend"),
  error: zod_v3_22_exports.string(),
  errorStack: zod_v3_22_exports.string(),
  platform: zod_v3_22_exports.string().optional(),
  platformVersion: zod_v3_22_exports.string().optional(),
  browserVersion: zod_v3_22_exports.string().optional(),
  browser: zod_v3_22_exports.string().optional(),
  userId: zod_v3_22_exports.string().optional(),
  location: zod_v3_22_exports.string()
});
var transcript = zod_v3_22_exports.object({
  messages: zod_v3_22_exports.object({
    author: zod_v3_22_exports.string(),
    authorid: zod_v3_22_exports.string(),
    content: zod_v3_22_exports.string(),
    timestamp: zod_v3_22_exports.string(),
    avatar: zod_v3_22_exports.string(),
    attachments: zod_v3_22_exports.array(zod_v3_22_exports.string()).optional(),
    embeds: zod_v3_22_exports.array(zod_v3_22_exports.any()).optional()
  }).array(),
  closed: zod_v3_22_exports.string(),
  with: zod_v3_22_exports.string(),
  _id: zod_v3_22_exports.string()
});
var installedAddon = zod_v3_22_exports.object({
  projectId: zod_v3_22_exports.string(),
  versionId: zod_v3_22_exports.string()
});
var sidecarRequest = zod_v3_22_exports.discriminatedUnion("type", [
  zod_v3_22_exports.object({
    type: zod_v3_22_exports.literal("list"),
    path: zod_v3_22_exports.string()
  }),
  zod_v3_22_exports.object({
    type: zod_v3_22_exports.literal("read"),
    path: zod_v3_22_exports.string()
  }),
  zod_v3_22_exports.object({
    type: zod_v3_22_exports.literal("next-chunk"),
    path: zod_v3_22_exports.string()
  }),
  zod_v3_22_exports.object({
    type: zod_v3_22_exports.literal("install-addons"),
    addons: installedAddon.array()
  }),
  zod_v3_22_exports.object({
    type: zod_v3_22_exports.literal("installed-addons")
  }),
  zod_v3_22_exports.object({
    type: zod_v3_22_exports.literal("uninstall-addon"),
    projectId: zod_v3_22_exports.string()
  }),
  zod_v3_22_exports.object({
    type: zod_v3_22_exports.literal("write"),
    path: zod_v3_22_exports.string(),
    chunk: zod_v3_22_exports.string().optional()
  }),
  zod_v3_22_exports.object({
    type: zod_v3_22_exports.literal("command"),
    command: zod_v3_22_exports.string()
  }),
  zod_v3_22_exports.object({
    type: zod_v3_22_exports.literal("delete"),
    path: zod_v3_22_exports.string()
  }),
  zod_v3_22_exports.object({
    type: zod_v3_22_exports.literal("state"),
    state: serverPowerActions
  }),
  zod_v3_22_exports.object({
    type: zod_v3_22_exports.literal("tree"),
    path: zod_v3_22_exports.string()
  })
]);
var addon = zod_v3_22_exports.object({
  id: zod_v3_22_exports.string(),
  name: zod_v3_22_exports.string(),
  description: zod_v3_22_exports.string(),
  downloads: zod_v3_22_exports.number(),
  lastUpdated: zod_v3_22_exports.string(),
  icon: zod_v3_22_exports.string(),
  background: zod_v3_22_exports.string()
});
var sidecarFile = zod_v3_22_exports.object({
  name: zod_v3_22_exports.string(),
  canWrite: zod_v3_22_exports.boolean(),
  isFile: zod_v3_22_exports.boolean(),
  fileMimeType: zod_v3_22_exports.string().optional(),
  lastModified: zod_v3_22_exports.number().optional(),
  size: zod_v3_22_exports.number().optional()
});
var sidecarResponse = zod_v3_22_exports.discriminatedUnion("type", [
  zod_v3_22_exports.object({
    type: zod_v3_22_exports.literal("list"),
    path: zod_v3_22_exports.string(),
    canWrite: zod_v3_22_exports.boolean(),
    list: sidecarFile.array()
  }),
  zod_v3_22_exports.object({
    type: zod_v3_22_exports.literal("read"),
    path: zod_v3_22_exports.string(),
    chunk: zod_v3_22_exports.string().optional(),
    finish: zod_v3_22_exports.boolean().optional()
  }),
  zod_v3_22_exports.object({
    type: zod_v3_22_exports.literal("log"),
    chunk: zod_v3_22_exports.string(),
    backlog: zod_v3_22_exports.boolean().optional()
  }),
  zod_v3_22_exports.object({
    type: zod_v3_22_exports.literal("error"),
    error: zod_v3_22_exports.string(),
    path: zod_v3_22_exports.string().optional()
  }),
  zod_v3_22_exports.object({
    type: zod_v3_22_exports.literal("next-chunk"),
    path: zod_v3_22_exports.string()
  }),
  zod_v3_22_exports.object({
    type: zod_v3_22_exports.literal("state"),
    state: serverPowerState
  }),
  zod_v3_22_exports.object({
    type: zod_v3_22_exports.literal("stats"),
    stats: zod_v3_22_exports.object({
      cpu: zod_v3_22_exports.number(),
      memory: zod_v3_22_exports.number(),
      disk: zod_v3_22_exports.number()
    })
  }),
  zod_v3_22_exports.object({
    type: zod_v3_22_exports.literal("install-addons"),
    success: zod_v3_22_exports.boolean()
  }),
  zod_v3_22_exports.object({
    type: zod_v3_22_exports.literal("installed-addons"),
    addons: zod_v3_22_exports.object({
      addon: installedAddon,
      dependencies: installedAddon.array()
    }).array()
  }),
  zod_v3_22_exports.object({
    type: zod_v3_22_exports.literal("uninstall-addon"),
    success: zod_v3_22_exports.boolean()
  }),
  zod_v3_22_exports.object({
    type: zod_v3_22_exports.literal("tree"),
    path: zod_v3_22_exports.string(),
    canWrite: zod_v3_22_exports.boolean(),
    files: sidecarFile.array()
  })
]);
var requestPayoutResponse = zod_v3_22_exports.discriminatedUnion("type", [
  zod_v3_22_exports.object({
    type: zod_v3_22_exports.literal("createAccount"),
    url: zod_v3_22_exports.string()
  }),
  zod_v3_22_exports.object({
    type: zod_v3_22_exports.literal("needDetails"),
    missingDetails: zod_v3_22_exports.array(zod_v3_22_exports.string()),
    url: zod_v3_22_exports.string()
  }),
  zod_v3_22_exports.object({
    type: zod_v3_22_exports.literal("success")
  })
]);
var audit = zod_v3_22_exports.discriminatedUnion("action", [
  zod_v3_22_exports.object({
    action: zod_v3_22_exports.literal("store-purchase" /* StorePurchase */),
    user: zod_v3_22_exports.string(),
    type: zod_v3_22_exports.enum(["memory", "disk", "cpu", "slots"])
  }),
  zod_v3_22_exports.object({
    action: zod_v3_22_exports.literal("server-create" /* ServerCreate */),
    user: zod_v3_22_exports.string(),
    serverId: zod_v3_22_exports.string(),
    data: zod_v3_22_exports.any()
  }),
  zod_v3_22_exports.object({
    action: zod_v3_22_exports.literal("server-power-change" /* ServerPowerChange */),
    user: zod_v3_22_exports.string(),
    server: zod_v3_22_exports.string(),
    power: serverPowerActions
  }),
  zod_v3_22_exports.object({
    action: zod_v3_22_exports.literal("server-modify" /* ServerModify */),
    user: zod_v3_22_exports.string(),
    serverId: zod_v3_22_exports.string(),
    changes: zod_v3_22_exports.object({
      name: zod_v3_22_exports.string(),
      location: zod_v3_22_exports.string(),
      limits,
      state: serverPowerState,
      ports: zod_v3_22_exports.number().array(),
      labels: zod_v3_22_exports.enum(["suspended", "contact-support"]).array()
    }).partial()
  }),
  zod_v3_22_exports.object({
    action: zod_v3_22_exports.literal("server-delete" /* ServerDelete */),
    user: zod_v3_22_exports.string(),
    serverId: zod_v3_22_exports.string()
  }),
  zod_v3_22_exports.object({
    action: zod_v3_22_exports.literal("file-upload" /* FileUpload */),
    user: zod_v3_22_exports.string(),
    file: zod_v3_22_exports.string()
  }),
  zod_v3_22_exports.object({
    action: zod_v3_22_exports.literal("file-delete" /* FileDelete */),
    user: zod_v3_22_exports.string(),
    file: zod_v3_22_exports.string()
  }),
  zod_v3_22_exports.object({
    action: zod_v3_22_exports.literal("file-read" /* FileRead */),
    user: zod_v3_22_exports.string(),
    file: zod_v3_22_exports.string()
  }),
  zod_v3_22_exports.object({
    action: zod_v3_22_exports.literal("command-execute" /* CommandExecute */),
    user: zod_v3_22_exports.string(),
    server: zod_v3_22_exports.string(),
    command: zod_v3_22_exports.string()
  }),
  zod_v3_22_exports.object({
    action: zod_v3_22_exports.literal("reset-password" /* ResetPassword */)
  }),
  zod_v3_22_exports.object({
    action: zod_v3_22_exports.literal("drop-review" /* DropReview */),
    dropId: zod_v3_22_exports.string()
  }),
  zod_v3_22_exports.object({
    action: zod_v3_22_exports.literal("drop-type-change" /* DropTypeChange */),
    dropId: zod_v3_22_exports.string(),
    type: zod_v3_22_exports.nativeEnum(DropType)
  }),
  zod_v3_22_exports.object({
    action: zod_v3_22_exports.literal("drop-create" /* DropCreate */),
    dropId: zod_v3_22_exports.string()
  }),
  zod_v3_22_exports.object({
    action: zod_v3_22_exports.literal("oauth-validate" /* OAuthValidate */),
    appId: zod_v3_22_exports.string(),
    scopes: zod_v3_22_exports.array(zod_v3_22_exports.string())
  }),
  zod_v3_22_exports.object({
    action: zod_v3_22_exports.literal("oauth-authorize" /* OAuthAuthorize */),
    appId: zod_v3_22_exports.string(),
    scopes: zod_v3_22_exports.array(zod_v3_22_exports.string())
  }),
  zod_v3_22_exports.object({
    action: zod_v3_22_exports.literal("web-authn-sign-in" /* WebAuthNSignIn */)
  }),
  zod_v3_22_exports.object({
    action: zod_v3_22_exports.literal("web-authn-sign-up" /* WebAuthNSignUp */)
  }),
  zod_v3_22_exports.object({
    action: zod_v3_22_exports.literal("password-sign-in" /* PasswordSignIn */)
  }),
  zod_v3_22_exports.object({
    action: zod_v3_22_exports.literal("password-sign-up" /* PasswordSignUp */)
  }),
  zod_v3_22_exports.object({
    action: zod_v3_22_exports.literal("oauth-sign-in" /* OAuthSignIn */),
    provider: zod_v3_22_exports.string()
  }),
  zod_v3_22_exports.object({
    action: zod_v3_22_exports.literal("oauth-sign-up" /* OAuthSignUp */),
    provider: zod_v3_22_exports.string()
  })
]);
var serverAudit = zod_v3_22_exports.object({
  id: zod_v3_22_exports.string(),
  _id: zod_v3_22_exports.string().optional(),
  // Remove after some time
  meta: audit,
  user: zod_v3_22_exports.object({
    profile: zod_v3_22_exports.object({
      username: zod_v3_22_exports.string(),
      avatar: zod_v3_22_exports.string()
    })
  })
});
var group = zod_v3_22_exports.object({
  displayName: zod_v3_22_exports.string(),
  _id: zod_v3_22_exports.string(),
  // Replace with id
  permission: zod_v3_22_exports.string()
});

// pages/_legacy/helper.ts
var allowedImageFormats = ["image/png", "image/jpeg"];
function IsLoggedIn() {
  try {
    return localStorage["access-token"] ? JSON.parse(b64DecodeUnicode(localStorage["access-token"].split(".")[1])).user : null;
  } catch (_3) {
    resetTokens();
    return null;
  }
}
function b64DecodeUnicode(value) {
  return decodeURIComponent(atob(value).split("").map((c2) => `%${`00${c2.charCodeAt(0).toString(16)}`.slice(-2)}`).join(""));
}
function rawAccessToken() {
  return JSON.parse(b64DecodeUnicode(localStorage["access-token"].split(".")[1]));
}
var activeUser = asState({
  email: void 0,
  username: "--",
  avatar: void 0,
  permission: [],
  id: void 0
});
function permCheck(...per) {
  return API.isPermited(per, activeUser.permission);
}
function updateActiveUserData() {
  try {
    const user = IsLoggedIn();
    if (!user)
      return;
    activeUser.username = user.profile.username;
    activeUser.email = user.profile.email;
    activeUser.avatar = user.profile.avatar;
    activeUser.id = user._id;
    activeUser.permission = asState(user.permissions);
  } catch (_3) {
    logOut();
  }
}
function checkIfRefreshTokenIsValid() {
  const token = localStorage["refresh-token"];
  if (!token)
    return;
  const tokenData = JSON.parse(b64DecodeUnicode(token.split(".")[1]));
  if (isExpired(tokenData.exp)) {
    logOut();
    return;
  }
}
function logOut(goal) {
  if (location.pathname.startsWith("/signin"))
    return;
  resetTokens();
  location.href = "/signin";
  localStorage.goal = goal ?? "/c/music";
}
function resetTokens() {
  localStorage.removeItem("refresh-token");
  localStorage.removeItem("access-token");
  localStorage.removeItem("goal");
}
async function renewAccessTokenIfNeeded() {
  if (!localStorage.getItem("access-token"))
    return;
  const { exp } = rawAccessToken();
  if (!exp)
    return logOut();
  if (isExpired(exp)) {
    await forceRefreshToken();
  }
}
var tokens = asState({
  accessToken: localStorage["access-token"],
  refreshToken: localStorage["refresh-token"]
});
async function forceRefreshToken() {
  try {
    const access = await API.auth.refreshAccessToken.post(localStorage["refresh-token"]).then(stupidErrorAlert);
    localStorage["access-token"] = access.token;
    tokens.accessToken = access.token;
  } catch (_3) {
    location.href = "/";
  }
}
function isExpired(exp) {
  return exp * 1e3 < (/* @__PURE__ */ new Date()).getTime() + 0.5 * 60 * 1e3;
}
async function RegisterAuthRefresh() {
  if (!IsLoggedIn())
    return shouldLoginPage();
  try {
    updateActiveUserData();
    checkIfRefreshTokenIsValid();
    await renewAccessTokenIfNeeded();
    setInterval(() => renewAccessTokenIfNeeded(), 1e3);
  } catch (error) {
    console.error(error);
  }
}
function shouldLoginPage() {
  if (!loginRequired.find((x2) => location.pathname.startsWith(x2))) {
    return;
  }
  localStorage.goal = location.pathname + location.search;
  location.href = "/signin";
  throw "aborting javascript here";
}
var sheetStack = SheetsStack().setSheetWidth("auto").setSheetHeight("auto");
var a = document.createElement("a");
document.body.appendChild(a);
a.setAttribute("style", "display: none");
function stringToColor(str) {
  let hash = 0;
  for (let i4 = 0; i4 < str.length; i4++) {
    hash = str.charCodeAt(i4) + ((hash << 5) - hash);
  }
  let color = "#";
  for (let i4 = 0; i4 < 3; i4++) {
    const value = hash >> i4 * 8 & 255;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
}
function ProfilePicture(component, name) {
  const ele = component.draw();
  ele.style.backgroundColor = stringToColor(name);
  return Custom(ele).addClass("profile-picture");
}
function getNameInital(name) {
  if (name.includes(", ")) {
    return name.split(", ").map((x2) => x2.at(0)?.toUpperCase()).join("");
  }
  if (name.includes(",")) {
    return name.split(",").map((x2) => x2.at(0)?.toUpperCase()).join("");
  }
  if (name.includes(" ")) {
    return name.split(" ").map((x2) => x2.at(0)?.toUpperCase()).join("");
  }
  return name.at(0).toUpperCase();
}
function showProfilePicture(x2) {
  return ProfilePicture(
    x2.profile.avatar ? Image({
      type: "direct",
      source: async () => {
        const blob2 = new Blob();
        const data = await API.user.picture(x2._id);
        if (data.status == "fulfilled") {
          return data.value;
        }
        return blob2;
      }
    }, "Profile Picture") : Label(getNameInital(x2.profile.username)),
    x2.profile.username
  );
}

// components/nav.ts
var Nav = (component) => {
  const nav = createElement("nav");
  nav.append(component.draw());
  return Custom(nav);
};
var navMenuPopover = Popover(
  Box(
    activeUser.$permission.map(
      () => Vertical(
        Label("SWITCH TO").addClass("title"),
        pages.map(
          ([logo, permission, route, login]) => permCheck(...permission) && (!login || login == 1 && IsLoggedIn() || login == 2 && !IsLoggedIn()) ? Horizontal(
            Image(logo, "Logo"),
            Spacer(),
            MIcon("arrow_forward_ios")
          ).addClass("small-entry").onClick(() => location.pathname = route) : Empty()
        ),
        Horizontal(
          Label("Go to Settings"),
          Spacer(),
          MIcon("arrow_forward_ios")
        ).addClass("small-entry", "settings").onClick(() => location.href = "/settings")
      )
    ).asRefComponent()
  ).addClass("drop-over")
).pullingAnchorPositioning("--nav-menu-popover", (rect, style) => {
  style.top = `max(-5px, ${rect.bottom}px)`;
  style.left = `${rect.left}px`;
  style.minWidth = `${rect.width}px`;
  style.bottom = "var(--gap)";
  style.height = "min-content";
});
function DynaNavigation(type) {
  return Nav(
    Grid(
      Horizontal(
        Vertical(
          MIcon("apps"),
          Vertical(
            Label(activeTitle(type)).setFontWeight("bold").setTextSize("2xl").setMargin("2px 0 0")
          )
        ).setGap(".5rem").setDirection("row").setAlignItems("center").setJustifyContent("center").addClass("clickable").setAnchorName("--nav-menu-popover").onClick(() => {
          navMenuPopover.showPopover();
        }),
        Spacer(),
        activeUser.$email.map(
          (email) => email ? LinkButton(
            Grid(
              showProfilePicture(IsLoggedIn()),
              Label(activeUser.$username).setFontWeight("bold")
            ).setRawColumns("max-content max-content").setAlignItems("center").setGap(".7rem"),
            "/settings"
          ).addClass("profile-button").setStyle("inline" /* Inline */) : (type === "Home" || type === "Music") && !location.pathname.startsWith("/signin") ? LinkButton("Sign in", "/signin").addClass("login-button") : Box()
        ).asRefComponent() ?? null
      ),
      IsLoggedIn() && IsLoggedIn().profile.verified?.email != true ? Grid(
        BasicLabel({
          title: "Your Email is not verified. Please check your Inbox/Spam folder."
        }).addClass("label"),
        Button("Resend Verify Email").addClass("link").onPromiseClick(async () => {
          await API.user.mail.resendVerifyEmail.post();
          await delay(1e3);
        })
      ).addClass("email-banner", type.toLowerCase()) : Empty()
    ).setMargin("0.5rem auto").setGap("0.4rem")
  ).addClass(type.toLowerCase());
}

// pages/user/settings.personal.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// esbuild_serve:http-import:https://deno.land/std@0.221.0/async/mod.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// esbuild_serve:http-import:https://deno.land/std@0.221.0/async/debounce.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// pages/user/settings.personal.ts
function ChangePersonal() {
  const state2 = asState({
    email: activeUser.email,
    name: activeUser.username,
    loading: false,
    profilePicture: activeUser.avatar ? { type: "direct", source: async () => await API.user.picture(activeUser.id).then(stupidErrorAlert) } : { type: "loading" },
    validationState: void 0
  });
  return Vertical(
    Grid(
      state2.$profilePicture.map(
        (profilePicture) => Box(Image(profilePicture, "Your Avatarimage"), IconButton(MIcon("edit"), "edit-icon")).addClass("upload-image").onClick(async () => {
          const file2 = await createFilePicker(allowedImageFormats.join(","));
          const blobUrl = URL.createObjectURL(file2);
          profilePicture = { type: "uploading", filename: file2.name, blobUrl, percentage: 0 };
          state2.loading = true;
          setTimeout(() => {
            StreamingUploadHandler(`user/set-me/avatar/upload`, {
              failure: () => {
                state2.loading = false;
                state2.profilePicture = activeUser.avatar ? { type: "direct", source: async () => await API.user.picture(activeUser.id).then(stupidErrorAlert) } : { type: "loading" };
                alert("Your Upload has failed. Please try a different file or try again later");
              },
              uploadDone: () => {
                state2.profilePicture = { type: "waiting-upload", filename: file2.name, blobUrl };
              },
              backendResponse: () => {
                state2.loading = false;
                state2.profilePicture = { type: "direct", source: async () => await file2 };
              },
              credentials: () => API.getToken(),
              onUploadTick: async (percentage) => {
                state2.profilePicture = { type: "uploading", filename: file2.name, blobUrl, percentage };
                await delay(2);
              }
            }, file2);
          });
        })
      ).asRefComponent(),
      [
        { width: 2 },
        Vertical(
          TextInput("text", "Name").sync(state2, "name"),
          TextInput("email", "Email").sync(state2, "email")
        ).setGap("20px")
      ]
    ).setDynamicColumns(1, "12rem").setJustifyContent("center").setGap("15px"),
    Horizontal(
      Spacer(),
      Box(
        state2.$validationState.map(
          (error) => error ? CenterV(
            Label(getErrorMessage(error)).addClass("error-message").setMargin("0 0.5rem 0 0")
          ) : Empty()
        ).asRefComponent()
      ),
      Button("Save").onClick(async () => {
        const { error, validate } = Validate(
          state2,
          zod_v3_22_exports.object({
            name: zod_v3_22_exports.string().min(2),
            email: zod_v3_22_exports.string().email()
          })
        );
        const data = validate();
        if (error.getValue())
          return state2.validationState = error.getValue();
        if (data) {
          await API.user.setMe.post(state2).then(stupidErrorAlert);
        }
        await forceRefreshToken();
        location.reload();
        state2.validationState = void 0;
      })
    )
  ).setGap("20px").addClass("limited-width");
}

// pages/user/settings.ts
WebGen();
await RegisterAuthRefresh();
var state = asState({
  newPassword: void 0,
  verifyNewPassword: void 0,
  validationState: void 0
});
var settingsMenu = Navigation({
  title: "Settings",
  children: [
    {
      id: "personal",
      title: "Personal",
      subtitle: "Username, Email, Profile Picture...",
      children: [
        ChangePersonal()
      ]
    },
    {
      id: "change-password",
      title: "Change Password",
      children: [
        Vertical(
          Grid([
            { width: 2 },
            Vertical(
              TextInput("password", "New Password").sync(state, "newPassword"),
              TextInput("password", "Verify New Password").sync(state, "verifyNewPassword")
            ).setGap("20px")
          ]).setDynamicColumns(1, "12rem").setJustifyContent("center").setGap("15px"),
          Horizontal(
            Spacer(),
            Box(
              state.$validationState.map(
                (error) => error ? CenterV(
                  Label(getErrorMessage(error)).addClass("error-message").setMargin("0 0.5rem 0 0")
                ) : Empty()
              ).asRefComponent()
            ),
            Button("Save").onClick(async () => {
              const { error, validate } = Validate(
                state,
                zod_v3_22_exports.object({
                  newPassword: zod_v3_22_exports.string({ invalid_type_error: "New password is missing" }).min(4),
                  verifyNewPassword: zod_v3_22_exports.string({ invalid_type_error: "Verify New password is missing" }).min(4).refine((val) => val == state.newPassword, "Your new password didn't match")
                })
              );
              const data = validate();
              if (error.getValue())
                return state.validationState = error.getValue();
              if (data)
                await API.user.setMe.post({ password: data.newPassword });
              logOut();
              state.validationState = void 0;
            })
          )
        ).setGap("20px")
      ]
    },
    // {
    //     id: "passkeys",
    //     title: "Passkeys",
    //     children: [
    //         Vertical(
    //             Button("Create Passkey").onClick(async () => {
    //                 const publicKey = {
    //                     challenge: new Uint8Array([ 117, 61, 252, 231, 191, 241 ]),
    //                     rp: { id: "localhost", name: "BBN Holding" },
    //                     user: {
    //                         id: new TextEncoder().encode(activeUser.id ?? ""),
    //                         name: activeUser.email ?? "",
    //                         displayName: activeUser.username ?? ""
    //                     },
    //                     excludeCredentials: [
    //                         { id: new Uint8Array([ 79, 252, 83, 72, 214, 7, 89, 26 ]), type: "public-key" as PublicKeyCredentialType, transports: [ "usb", "nfc", "ble" ] as AuthenticatorTransport[] }
    //                     ],
    //                     pubKeyCredParams: [ { type: "public-key" as PublicKeyCredentialType, alg: -7 }, { type: "public-key" as PublicKeyCredentialType, alg: -257 } ]
    //                 };
    //                 const credential = await navigator.credentials.create({ publicKey }) as PublicKeyCredential;
    //                 console.log(credential);
    //                 const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
    //                 // Use a lookup table to find the index.
    //                 const lookup = new Uint8Array(256);
    //                 for (let i = 0; i < chars.length; i++) {
    //                     lookup[ chars.charCodeAt(i) ] = i;
    //                 }
    //                 const encode = (arraybuffer: ArrayBuffer): string => {
    //                     const bytes = new Uint8Array(arraybuffer);
    //                     const len = bytes.length;
    //                     let base64 = '';
    //                     for (let i = 0; i < len; i += 3) {
    //                         base64 += chars[ bytes[ i ] >> 2 ];
    //                         base64 += chars[ ((bytes[ i ] & 3) << 4) | (bytes[ i + 1 ] >> 4) ];
    //                         base64 += chars[ ((bytes[ i + 1 ] & 15) << 2) | (bytes[ i + 2 ] >> 6) ];
    //                         base64 += chars[ bytes[ i + 2 ] & 63 ];
    //                     }
    //                     if (len % 3 === 2) {
    //                         base64 = base64.substring(0, base64.length - 1);
    //                     } else if (len % 3 === 1) {
    //                         base64 = base64.substring(0, base64.length - 2);
    //                     }
    //                     return base64;
    //                 };
    //                 console.log(encode(credential.response.clientDataJSON));
    //                 console.log(encode((credential.response as AuthenticatorAttestationResponse).attestationObject));
    //                 console.log(credential.getClientExtensionResults());
    //             })
    //         ).setGap("20px"),
    //     ]
    // },
    {
      id: "logout",
      title: "Logout",
      clickHandler: () => logOut()
    }
  ]
}).addClass(
  isMobile.map((mobile) => mobile ? "mobile-navigation" : "navigation"),
  "limited-width"
);
Body(Vertical(
  DynaNavigation("Settings"),
  settingsMenu
));
/*!
 * Platform.js v1.3.6
 * Copyright 2014-2020 Benjamin Tan
 * Copyright 2011-2013 John-David Dalton
 * Available under MIT license
 */
/*! Bundled license information:

@kurkle/color/dist/color.esm.js:
  (*!
   * @kurkle/color v0.3.2
   * https://github.com/kurkle/color#readme
   * (c) 2023 Jukka Kurkela
   * Released under the MIT License
   *)
*/
/*! Bundled license information:

chart.js/dist/chunks/helpers.segment.js:
  (*!
   * Chart.js v4.4.2
   * https://www.chartjs.org
   * (c) 2024 Chart.js Contributors
   * Released under the MIT License
   *)

chart.js/dist/chart.js:
  (*!
   * Chart.js v4.4.2
   * https://www.chartjs.org
   * (c) 2024 Chart.js Contributors
   * Released under the MIT License
   *)
*/
