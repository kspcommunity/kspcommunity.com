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
      var a2, b4, c3 = new this(function(resolve, reject2) {
        a2 = resolve;
        b4 = reject2;
      });
      return { resolve: a2, reject: b4, promise: c3 };
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
  for (let l4 of p.get(e.ownerDocument) || [])
    t.set(l4, o2), o2 += 1;
  t.set(e, o2), o2 += 1;
  let r = null;
  function i4(l4) {
    let a2 = W(l4);
    if (a2 === null)
      return null;
    let w4 = t.get(a2);
    (r === null || t.get(r) < w4) && (r = a2);
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
    let l4 = t.querySelectorAll("slot");
    for (let a2 of l4) {
      let w4 = a2.assignedElements({ flatten: true });
      for (let n2 of w4) {
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
    let i4 = e.getAttribute("popover"), l4 = G(e) || t;
    if (T(l4, false, true), i4 !== e.getAttribute("popover") || !d(e, false))
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
  let i4 = null, l4 = false;
  for (let a2 of p.get(r) || [])
    if (a2 === e)
      l4 = true;
    else if (l4) {
      i4 = a2;
      break;
    }
  if (!l4)
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
    let l4 = A.get(o2) === i4;
    A.delete(o2), l4 && T(i4 || o2, false, true);
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
    let s2 = t.call(this, n2);
    return I(s2), s2;
  } } });
  let o2 = HTMLElement.prototype.attachInternals;
  o2 && Object.defineProperties(HTMLElement.prototype, { attachInternals: { enumerable: true, configurable: true, writable: true, value() {
    let n2 = o2.call(this);
    return n2.shadowRoot && I(n2.shadowRoot), n2;
  } } });
  let r = /* @__PURE__ */ new WeakMap();
  function i4(n2) {
    Object.defineProperties(n2.prototype, { popoverTargetElement: { enumerable: true, configurable: true, set(s2) {
      if (s2 === null)
        this.removeAttribute("popovertarget"), r.delete(this);
      else if (s2 instanceof Element)
        this.setAttribute("popovertarget", ""), r.set(this, s2);
      else
        throw new TypeError("popoverTargetElement must be an element or null");
    }, get() {
      if (this.localName !== "button" && this.localName !== "input" || this.localName === "input" && this.type !== "reset" && this.type !== "image" && this.type !== "button" || this.disabled || this.form && this.type === "submit")
        return null;
      let s2 = r.get(this);
      if (s2 && s2.isConnected)
        return s2;
      if (s2 && !s2.isConnected)
        return r.delete(this), null;
      let u2 = g(this), E5 = this.getAttribute("popovertarget");
      return (u2 instanceof Document || u2 instanceof C) && E5 && u2.getElementById(E5) || null;
    } }, popoverTargetAction: { enumerable: true, configurable: true, get() {
      let s2 = (this.getAttribute("popovertargetaction") || "").toLowerCase();
      return s2 === "show" || s2 === "hide" ? s2 : "toggle";
    }, set(s2) {
      this.setAttribute("popovertargetaction", s2);
    } } });
  }
  i4(HTMLButtonElement), i4(HTMLInputElement);
  let l4 = (n2) => {
    let s2 = n2.composedPath(), u2 = s2[0];
    if (!(u2 instanceof Element) || u2?.shadowRoot)
      return;
    let E5 = g(u2);
    if (!(E5 instanceof C || E5 instanceof Document))
      return;
    let R4 = s2.find((z4) => z4.matches?.("[popovertargetaction],[popovertarget]"));
    if (R4) {
      O(R4), n2.preventDefault();
      return;
    }
  }, a2 = (n2) => {
    let s2 = n2.key, u2 = n2.target;
    !n2.defaultPrevented && u2 && (s2 === "Escape" || s2 === "Esc") && T(u2.ownerDocument, true, true);
  };
  ((n2) => {
    n2.addEventListener("click", l4), n2.addEventListener("keydown", a2), n2.addEventListener("pointerdown", D), n2.addEventListener("pointerup", D);
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
        }).then((x4) => x4.json()),
        create: (data) => fetch(`${API.BASE_URL}hosting/servers`, {
          method: "POST",
          body: JSON.stringify(data),
          headers: headers(API.getToken())
        }).then(none()).catch(reject),
        meta: () => fetch(`${API.BASE_URL}hosting/meta`, {
          headers: headers(API.getToken())
        }).then((x4) => x4.json()),
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
    userId: localStorage["access-token"]?.split(".").filter((_4, i4) => i4 <= 1).map((x4) => JSON.parse(atob(x4))).filter((_4, i4) => i4 == 1).map((it) => it.userId).join(),
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
  var e = n2.length, f3;
  return n2[0] === "#" && (e === 4 || e === 5 ? f3 = { r: 255 & i[n2[1]] * 17, g: 255 & i[n2[2]] * 17, b: 255 & i[n2[3]] * 17, a: e === 5 ? i[n2[4]] * 17 : 255 } : (e === 7 || e === 9) && (f3 = { r: i[n2[1]] << 4 | i[n2[2]], g: i[n2[3]] << 4 | i[n2[4]], b: i[n2[5]] << 4 | i[n2[6]], a: e === 9 ? i[n2[7]] << 4 | i[n2[8]] : 255 })), f3;
}
function W2(n2) {
  var e = U2(n2) ? Z2 : A2;
  return n2 ? "#" + e(n2.r) + e(n2.g) + e(n2.b) + H2(n2.a, e) : void 0;
}
function $2(n2, e, f3) {
  let t = e * Math.min(f3, 1 - f3), r = (a2, s2 = (a2 + n2 / 30) % 12) => f3 - t * Math.max(Math.min(s2 - 3, 9 - s2, 1), -1);
  return [r(0), r(8), r(4)];
}
function L2(n2, e, f3) {
  let t = (r, a2 = (r + n2 / 60) % 6) => f3 - f3 * e * Math.max(Math.min(a2, 4 - a2, 1), 0);
  return [t(5), t(3), t(1)];
}
function j2(n2, e, f3) {
  let t = $2(n2, 1, 0.5), r;
  for (e + f3 > 1 && (r = 1 / (e + f3), e *= r, f3 *= r), r = 0; r < 3; r++)
    t[r] *= 1 - e - f3, t[r] += e;
  return t;
}
function N2(n2, e, f3, t, r) {
  return n2 === r ? (e - f3) / t + (e < f3 ? 6 : 0) : e === r ? (f3 - n2) / t + 2 : (n2 - e) / t + 4;
}
function _2(n2) {
  let f3 = n2.r / 255, t = n2.g / 255, r = n2.b / 255, a2 = Math.max(f3, t, r), s2 = Math.min(f3, t, r), c3 = (a2 + s2) / 2, g4, u2, x4;
  return a2 !== s2 && (x4 = a2 - s2, u2 = c3 > 0.5 ? x4 / (2 - a2 - s2) : x4 / (a2 + s2), g4 = N2(f3, t, r, x4, a2), g4 = g4 * 60 + 0.5), [g4 | 0, u2 || 0, c3];
}
function M2(n2, e, f3, t) {
  return (Array.isArray(e) ? n2(e[0], e[1], e[2]) : n2(e, f3, t)).map(d2);
}
function S2(n2, e, f3) {
  return M2($2, n2, e, f3);
}
function K2(n2, e, f3) {
  return M2(j2, n2, e, f3);
}
function B2(n2, e, f3) {
  return M2(L2, n2, e, f3);
}
function P2(n2) {
  return (n2 % 360 + 360) % 360;
}
function Q2(n2) {
  let e = q2.exec(n2), f3 = 255, t;
  if (!e)
    return;
  e[5] !== t && (f3 = e[6] ? m2(+e[5]) : d2(+e[5]));
  let r = P2(+e[2]), a2 = +e[3] / 100, s2 = +e[4] / 100;
  return e[1] === "hwb" ? t = K2(r, a2, s2) : e[1] === "hsv" ? t = B2(r, a2, s2) : t = S2(r, a2, s2), { r: t[0], g: t[1], b: t[2], a: f3 };
}
function C2(n2, e) {
  var f3 = _2(n2);
  f3[0] = P2(f3[0] + e), f3 = S2(f3), n2.r = f3[0], n2.g = f3[1], n2.b = f3[2];
}
function D2(n2) {
  if (!n2)
    return;
  let e = _2(n2), f3 = e[0], t = X2(e[1]), r = X2(e[2]);
  return n2.a < 255 ? `hsla(${f3}, ${t}%, ${r}%, ${o(n2.a)})` : `hsl(${f3}, ${t}%, ${r}%)`;
}
function v2() {
  let n2 = {}, e = Object.keys(E), f3 = Object.keys(O2), t, r, a2, s2, c3;
  for (t = 0; t < e.length; t++) {
    for (s2 = c3 = e[t], r = 0; r < f3.length; r++)
      a2 = f3[r], c3 = c3.replace(a2, O2[a2]);
    a2 = parseInt(E[s2], 16), n2[c3] = [a2 >> 16 & 255, a2 >> 8 & 255, a2 & 255];
  }
  return n2;
}
function G2(n2) {
  F2 || (F2 = v2(), F2.transparent = [0, 0, 0, 0]);
  let e = F2[n2.toLowerCase()];
  return e && { r: e[0], g: e[1], b: e[2], a: e.length === 4 ? e[3] : 255 };
}
function J2(n2) {
  let e = I2.exec(n2), f3 = 255, t, r, a2;
  if (e) {
    if (e[7] !== t) {
      let s2 = +e[7];
      f3 = e[8] ? m2(s2) : b2(s2 * 255, 0, 255);
    }
    return t = +e[1], r = +e[3], a2 = +e[5], t = 255 & (e[2] ? m2(t) : b2(t, 0, 255)), r = 255 & (e[4] ? m2(r) : b2(r, 0, 255)), a2 = 255 & (e[6] ? m2(a2) : b2(a2, 0, 255)), { r: t, g: r, b: a2, a: f3 };
  }
}
function z(n2) {
  return n2 && (n2.a < 255 ? `rgba(${n2.r}, ${n2.g}, ${n2.b}, ${o(n2.a)})` : `rgb(${n2.r}, ${n2.g}, ${n2.b})`);
}
function ee(n2, e, f3) {
  let t = h2(o(n2.r)), r = h2(o(n2.g)), a2 = h2(o(n2.b));
  return { r: d2(Y2(t + f3 * (h2(o(e.r)) - t))), g: d2(Y2(r + f3 * (h2(o(e.g)) - r))), b: d2(Y2(a2 + f3 * (h2(o(e.b)) - a2))), a: n2.a + f3 * (e.a - n2.a) };
}
function p2(n2, e, f3) {
  if (n2) {
    let t = _2(n2);
    t[e] = Math.max(0, Math.min(t[e] + t[e] * f3, e === 0 ? 360 : 1)), t = S2(t), n2.r = t[0], n2.g = t[1], n2.b = t[2];
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
    b2 = (n2, e, f3) => Math.max(Math.min(n2, f3), e);
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
        let f3 = typeof e, t;
        f3 === "object" ? t = R(e) : f3 === "string" && (t = V2(e) || G2(e) || ne(e)), this._rgb = t, this._valid = !!t;
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
      mix(e, f3) {
        if (e) {
          let t = this.rgb, r = e.rgb, a2, s2 = f3 === a2 ? 0.5 : f3, c3 = 2 * s2 - 1, g4 = t.a - r.a, u2 = ((c3 * g4 === -1 ? c3 : (c3 + g4) / (1 + c3 * g4)) + 1) / 2;
          a2 = 1 - u2, t.r = 255 & u2 * t.r + a2 * r.r + 0.5, t.g = 255 & u2 * t.g + a2 * r.g + 0.5, t.b = 255 & u2 * t.b + a2 * r.b + 0.5, t.a = s2 * t.a + (1 - s2) * r.a, this.rgb = t;
        }
        return this;
      }
      interpolate(e, f3) {
        return e && (this._rgb = ee(this._rgb, e._rgb, f3)), this;
      }
      clone() {
        return new n(this.rgb);
      }
      alpha(e) {
        return this._rgb.a = d2(e), this;
      }
      clearer(e) {
        let f3 = this._rgb;
        return f3.a *= 1 - e, this;
      }
      greyscale() {
        let e = this._rgb, f3 = l(e.r * 0.3 + e.g * 0.59 + e.b * 0.11);
        return e.r = e.g = e.b = f3, this;
      }
      opaquer(e) {
        let f3 = this._rgb;
        return f3.a *= 1 + e, this;
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
function T3(i4, t, e, s2) {
  let n2, o2, a2;
  if (I3(i4))
    if (o2 = i4.length, s2)
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
  let e, s2, n2, o2;
  if (!i4 || !t || i4.length !== t.length)
    return false;
  for (e = 0, s2 = i4.length; e < s2; ++e)
    if (n2 = i4[e], o2 = t[e], n2.datasetIndex !== o2.datasetIndex || n2.index !== o2.index)
      return false;
  return true;
}
function ke(i4) {
  if (I3(i4))
    return i4.map(ke);
  if (O3(i4)) {
    let t = /* @__PURE__ */ Object.create(null), e = Object.keys(i4), s2 = e.length, n2 = 0;
    for (; n2 < s2; ++n2)
      t[e[n2]] = ke(i4[e[n2]]);
    return t;
  }
  return i4;
}
function Os(i4) {
  return ["__proto__", "prototype", "constructor"].indexOf(i4) === -1;
}
function wo(i4, t, e, s2) {
  if (!Os(i4))
    return;
  let n2 = t[i4], o2 = e[i4];
  O3(n2) && O3(o2) ? Bt(n2, o2, s2) : t[i4] = ke(o2);
}
function Bt(i4, t, e) {
  let s2 = I3(t) ? t : [t], n2 = s2.length;
  if (!O3(i4))
    return i4;
  e = e || {};
  let o2 = e.merger || wo, a2;
  for (let r = 0; r < n2; ++r) {
    if (a2 = s2[r], !O3(a2))
      continue;
    let l4 = Object.keys(a2);
    for (let c3 = 0, h5 = l4.length; c3 < h5; ++c3)
      o2(l4[c3], i4, a2, e);
  }
  return i4;
}
function Wt(i4, t) {
  return Bt(i4, t, { merger: Po });
}
function Po(i4, t, e) {
  if (!Os(i4))
    return;
  let s2 = t[i4], n2 = e[i4];
  O3(s2) && O3(n2) ? Wt(s2, n2) : Object.prototype.hasOwnProperty.call(t, i4) || (t[i4] = ke(n2));
}
function Do(i4) {
  let t = i4.split("."), e = [], s2 = "";
  for (let n2 of t)
    s2 += n2, s2.endsWith("\\") ? s2 = s2.slice(0, -1) + "." : (e.push(s2), s2 = "");
  return e;
}
function Co(i4) {
  let t = Do(i4);
  return (e) => {
    for (let s2 of t) {
      if (s2 === "")
        break;
      e = e && e[s2];
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
  let e = Math.pow(10, Math.floor(ft(i4))), s2 = i4 / e;
  return (s2 <= 1 ? 1 : s2 <= 2 ? 2 : s2 <= 5 ? 5 : 10) * e;
}
function Ls(i4) {
  let t = [], e = Math.sqrt(i4), s2;
  for (s2 = 1; s2 < e; s2++)
    i4 % s2 === 0 && (t.push(s2), t.push(i4 / s2));
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
  let s2, n2, o2;
  for (s2 = 0, n2 = i4.length; s2 < n2; s2++)
    o2 = i4[s2][e], isNaN(o2) || (t.min = Math.min(t.min, o2), t.max = Math.max(t.max, o2));
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
  let e = t.x - i4.x, s2 = t.y - i4.y, n2 = Math.sqrt(e * e + s2 * s2), o2 = Math.atan2(s2, e);
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
function jt(i4, t, e, s2) {
  let n2 = G3(i4), o2 = G3(t), a2 = G3(e), r = G3(o2 - n2), l4 = G3(a2 - n2), c3 = G3(n2 - o2), h5 = G3(n2 - a2);
  return n2 === o2 || n2 === a2 || s2 && o2 === a2 || r > l4 && c3 < h5;
}
function $3(i4, t, e) {
  return Math.max(t, Math.min(e, i4));
}
function Rs(i4) {
  return $3(i4, -32768, 32767);
}
function lt(i4, t, e, s2 = 1e-6) {
  return i4 >= Math.min(t, e) - s2 && i4 <= Math.max(t, e) + s2;
}
function Oe(i4, t, e) {
  e = e || ((a2) => i4[a2] < t);
  let s2 = i4.length - 1, n2 = 0, o2;
  for (; s2 - n2 > 1; )
    o2 = n2 + s2 >> 1, e(o2) ? n2 = o2 : s2 = o2;
  return { lo: n2, hi: s2 };
}
function Is(i4, t, e) {
  let s2 = 0, n2 = i4.length;
  for (; s2 < n2 && i4[s2] < t; )
    s2++;
  for (; n2 > s2 && i4[n2 - 1] > e; )
    n2--;
  return s2 > 0 || n2 < i4.length ? i4.slice(s2, n2) : i4;
}
function Fs(i4, t) {
  if (i4._chartjs) {
    i4._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(i4, "_chartjs", { configurable: true, enumerable: false, value: { listeners: [t] } }), zs.forEach((e) => {
    let s2 = "_onData" + De(e), n2 = i4[e];
    Object.defineProperty(i4, e, { configurable: true, enumerable: false, value(...o2) {
      let a2 = n2.apply(this, o2);
      return i4._chartjs.listeners.forEach((r) => {
        typeof r[s2] == "function" && r[s2](...o2);
      }), a2;
    } });
  });
}
function di(i4, t) {
  let e = i4._chartjs;
  if (!e)
    return;
  let s2 = e.listeners, n2 = s2.indexOf(t);
  n2 !== -1 && s2.splice(n2, 1), !(s2.length > 0) && (zs.forEach((o2) => {
    delete i4[o2];
  }), delete i4._chartjs);
}
function ui(i4) {
  let t = new Set(i4);
  return t.size === i4.length ? i4 : Array.from(t);
}
function gi(i4, t) {
  let e = [], s2 = false;
  return function(...n2) {
    e = n2, s2 || (s2 = true, fi.call(window, () => {
      s2 = false, i4.apply(t, e);
    }));
  };
}
function Bs(i4, t) {
  let e;
  return function(...s2) {
    return t ? (clearTimeout(e), e = setTimeout(i4, t, s2)) : i4.apply(this, s2), t;
  };
}
function pi(i4, t, e) {
  let s2 = t.length, n2 = 0, o2 = s2;
  if (i4._sorted) {
    let { iScale: a2, _parsed: r } = i4, l4 = a2.axis, { min: c3, max: h5, minDefined: d4, maxDefined: u2 } = a2.getUserBounds();
    d4 && (n2 = $3(Math.min(ot(r, l4, c3).lo, e ? s2 : ot(t, l4, a2.getPixelForValue(c3)).lo), 0, s2 - 1)), u2 ? o2 = $3(Math.max(ot(r, a2.axis, h5, true).hi + 1, e ? 0 : ot(t, l4, a2.getPixelForValue(h5), true).hi + 1), n2, s2) - n2 : o2 = s2 - n2;
  }
  return { start: n2, count: o2 };
}
function mi(i4) {
  let { xScale: t, yScale: e, _scaleRanges: s2 } = i4, n2 = { xmin: t.min, xmax: t.max, ymin: e.min, ymax: e.max };
  if (!s2)
    return i4._scaleRanges = n2, true;
  let o2 = s2.xmin !== t.min || s2.xmax !== t.max || s2.ymin !== e.min || s2.ymax !== e.max;
  return Object.assign(s2, n2), o2;
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
  let e = i4 + JSON.stringify(t), s2 = ys.get(e);
  return s2 || (s2 = new Intl.NumberFormat(i4, t), ys.set(e, s2)), s2;
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
  for (let s2 = 0, n2 = e.length; s2 < n2; ++s2) {
    let o2 = e[s2];
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
function ee2(i4, t, e, s2, n2) {
  let o2 = t[n2];
  return o2 || (o2 = t[n2] = i4.measureText(n2).width, e.push(n2)), o2 > s2 && (s2 = o2), s2;
}
function Ns(i4, t, e, s2) {
  s2 = s2 || {};
  let n2 = s2.data = s2.data || {}, o2 = s2.garbageCollect = s2.garbageCollect || [];
  s2.font !== t && (n2 = s2.data = {}, o2 = s2.garbageCollect = [], s2.font = t), i4.save(), i4.font = t;
  let a2 = 0, r = e.length, l4, c3, h5, d4, u2;
  for (l4 = 0; l4 < r; l4++)
    if (d4 = e[l4], d4 != null && !I3(d4))
      a2 = ee2(i4, n2, o2, a2, d4);
    else if (I3(d4))
      for (c3 = 0, h5 = d4.length; c3 < h5; c3++)
        u2 = d4[c3], u2 != null && !I3(u2) && (a2 = ee2(i4, n2, o2, a2, u2));
  i4.restore();
  let f3 = o2.length / 2;
  if (f3 > e.length) {
    for (l4 = 0; l4 < f3; l4++)
      delete n2[o2[l4]];
    o2.splice(0, f3);
  }
  return a2;
}
function yt(i4, t, e) {
  let s2 = i4.currentDevicePixelRatio, n2 = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - n2) * s2) / s2 + n2;
}
function xi(i4, t) {
  t = t || i4.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, i4.width, i4.height), t.restore();
}
function Te(i4, t, e, s2) {
  yi(i4, t, e, s2, null);
}
function yi(i4, t, e, s2, n2) {
  let o2, a2, r, l4, c3, h5, d4, u2, f3 = t.pointStyle, g4 = t.rotation, p5 = t.radius, m5 = (g4 || 0) * Ao;
  if (f3 && typeof f3 == "object" && (o2 = f3.toString(), o2 === "[object HTMLImageElement]" || o2 === "[object HTMLCanvasElement]")) {
    i4.save(), i4.translate(e, s2), i4.rotate(m5), i4.drawImage(f3, -f3.width / 2, -f3.height / 2, f3.width, f3.height), i4.restore();
    return;
  }
  if (!(isNaN(p5) || p5 <= 0)) {
    switch (i4.beginPath(), f3) {
      default:
        n2 ? i4.ellipse(e, s2, n2 / 2, p5, 0, 0, F3) : i4.arc(e, s2, p5, 0, F3), i4.closePath();
        break;
      case "triangle":
        h5 = n2 ? n2 / 2 : p5, i4.moveTo(e + Math.sin(m5) * h5, s2 - Math.cos(m5) * p5), m5 += bs, i4.lineTo(e + Math.sin(m5) * h5, s2 - Math.cos(m5) * p5), m5 += bs, i4.lineTo(e + Math.sin(m5) * h5, s2 - Math.cos(m5) * p5), i4.closePath();
        break;
      case "rectRounded":
        c3 = p5 * 0.516, l4 = p5 - c3, a2 = Math.cos(m5 + Dt) * l4, d4 = Math.cos(m5 + Dt) * (n2 ? n2 / 2 - c3 : l4), r = Math.sin(m5 + Dt) * l4, u2 = Math.sin(m5 + Dt) * (n2 ? n2 / 2 - c3 : l4), i4.arc(e - d4, s2 - r, c3, m5 - z2, m5 - N3), i4.arc(e + u2, s2 - a2, c3, m5 - N3, m5), i4.arc(e + d4, s2 + r, c3, m5, m5 + N3), i4.arc(e - u2, s2 + a2, c3, m5 + N3, m5 + z2), i4.closePath();
        break;
      case "rect":
        if (!g4) {
          l4 = Math.SQRT1_2 * p5, h5 = n2 ? n2 / 2 : l4, i4.rect(e - h5, s2 - l4, 2 * h5, 2 * l4);
          break;
        }
        m5 += Dt;
      case "rectRot":
        d4 = Math.cos(m5) * (n2 ? n2 / 2 : p5), a2 = Math.cos(m5) * p5, r = Math.sin(m5) * p5, u2 = Math.sin(m5) * (n2 ? n2 / 2 : p5), i4.moveTo(e - d4, s2 - r), i4.lineTo(e + u2, s2 - a2), i4.lineTo(e + d4, s2 + r), i4.lineTo(e - u2, s2 + a2), i4.closePath();
        break;
      case "crossRot":
        m5 += Dt;
      case "cross":
        d4 = Math.cos(m5) * (n2 ? n2 / 2 : p5), a2 = Math.cos(m5) * p5, r = Math.sin(m5) * p5, u2 = Math.sin(m5) * (n2 ? n2 / 2 : p5), i4.moveTo(e - d4, s2 - r), i4.lineTo(e + d4, s2 + r), i4.moveTo(e + u2, s2 - a2), i4.lineTo(e - u2, s2 + a2);
        break;
      case "star":
        d4 = Math.cos(m5) * (n2 ? n2 / 2 : p5), a2 = Math.cos(m5) * p5, r = Math.sin(m5) * p5, u2 = Math.sin(m5) * (n2 ? n2 / 2 : p5), i4.moveTo(e - d4, s2 - r), i4.lineTo(e + d4, s2 + r), i4.moveTo(e + u2, s2 - a2), i4.lineTo(e - u2, s2 + a2), m5 += Dt, d4 = Math.cos(m5) * (n2 ? n2 / 2 : p5), a2 = Math.cos(m5) * p5, r = Math.sin(m5) * p5, u2 = Math.sin(m5) * (n2 ? n2 / 2 : p5), i4.moveTo(e - d4, s2 - r), i4.lineTo(e + d4, s2 + r), i4.moveTo(e + u2, s2 - a2), i4.lineTo(e - u2, s2 + a2);
        break;
      case "line":
        a2 = n2 ? n2 / 2 : Math.cos(m5) * p5, r = Math.sin(m5) * p5, i4.moveTo(e - a2, s2 - r), i4.lineTo(e + a2, s2 + r);
        break;
      case "dash":
        i4.moveTo(e, s2), i4.lineTo(e + Math.cos(m5) * (n2 ? n2 / 2 : p5), s2 + Math.sin(m5) * p5);
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
function Hs(i4, t, e, s2, n2) {
  if (!t)
    return i4.lineTo(e.x, e.y);
  if (n2 === "middle") {
    let o2 = (t.x + e.x) / 2;
    i4.lineTo(o2, t.y), i4.lineTo(o2, e.y);
  } else
    n2 === "after" != !!s2 ? i4.lineTo(t.x, e.y) : i4.lineTo(e.x, t.y);
  i4.lineTo(e.x, e.y);
}
function js(i4, t, e, s2) {
  if (!t)
    return i4.lineTo(e.x, e.y);
  i4.bezierCurveTo(s2 ? t.cp1x : t.cp2x, s2 ? t.cp1y : t.cp2y, s2 ? e.cp2x : e.cp1x, s2 ? e.cp2y : e.cp1y, e.x, e.y);
}
function Wo(i4, t) {
  t.translation && i4.translate(t.translation[0], t.translation[1]), L3(t.rotation) || i4.rotate(t.rotation), t.color && (i4.fillStyle = t.color), t.textAlign && (i4.textAlign = t.textAlign), t.textBaseline && (i4.textBaseline = t.textBaseline);
}
function No(i4, t, e, s2, n2) {
  if (n2.strikethrough || n2.underline) {
    let o2 = i4.measureText(s2), a2 = t - o2.actualBoundingBoxLeft, r = t + o2.actualBoundingBoxRight, l4 = e - o2.actualBoundingBoxAscent, c3 = e + o2.actualBoundingBoxDescent, h5 = n2.strikethrough ? (l4 + c3) / 2 : c3;
    i4.strokeStyle = i4.fillStyle, i4.beginPath(), i4.lineWidth = n2.decorationWidth || 2, i4.moveTo(a2, h5), i4.lineTo(r, h5), i4.stroke();
  }
}
function Ho(i4, t) {
  let e = i4.fillStyle;
  i4.fillStyle = t.color, i4.fillRect(t.left, t.top, t.width, t.height), i4.fillStyle = e;
}
function vt(i4, t, e, s2, n2, o2 = {}) {
  let a2 = I3(t) ? t : [t], r = o2.strokeWidth > 0 && o2.strokeColor !== "", l4, c3;
  for (i4.save(), i4.font = n2.string, Wo(i4, o2), l4 = 0; l4 < a2.length; ++l4)
    c3 = a2[l4], o2.backdrop && Ho(i4, o2.backdrop), r && (o2.strokeColor && (i4.strokeStyle = o2.strokeColor), L3(o2.strokeWidth) || (i4.lineWidth = o2.strokeWidth), i4.strokeText(c3, e, s2, o2.maxWidth)), i4.fillText(c3, e, s2, o2.maxWidth), No(i4, e, s2, c3, o2), s2 += Number(n2.lineHeight);
  i4.restore();
}
function Ut(i4, t) {
  let { x: e, y: s2, w: n2, h: o2, radius: a2 } = t;
  i4.arc(e + a2.topLeft, s2 + a2.topLeft, a2.topLeft, 1.5 * z2, z2, true), i4.lineTo(e, s2 + o2 - a2.bottomLeft), i4.arc(e + a2.bottomLeft, s2 + o2 - a2.bottomLeft, a2.bottomLeft, z2, N3, true), i4.lineTo(e + n2 - a2.bottomRight, s2 + o2), i4.arc(e + n2 - a2.bottomRight, s2 + o2 - a2.bottomRight, a2.bottomRight, N3, 0, true), i4.lineTo(e + n2, s2 + a2.topRight), i4.arc(e + n2 - a2.topRight, s2 + a2.topRight, a2.topRight, 0, -N3, true), i4.lineTo(e + a2.topLeft, s2);
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
  let e = {}, s2 = O3(t), n2 = s2 ? Object.keys(t) : t, o2 = O3(i4) ? s2 ? (a2) => P3(i4[a2], i4[t[a2]]) : (a2) => i4[a2] : () => i4;
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
  let s2 = P3(i4.style, t.style);
  s2 && !("" + s2).match($o) && (console.warn('Invalid font style specified: "' + s2 + '"'), s2 = void 0);
  let n2 = { family: P3(i4.family, t.family), lineHeight: Uo(P3(i4.lineHeight, t.lineHeight), e), size: e, style: s2, weight: P3(i4.weight, t.weight), string: "" };
  return n2.string = Vo(n2), n2;
}
function Yt(i4, t, e, s2) {
  let n2 = true, o2, a2, r;
  for (o2 = 0, a2 = i4.length; o2 < a2; ++o2)
    if (r = i4[o2], r !== void 0 && (t !== void 0 && typeof r == "function" && (r = r(t), n2 = false), e !== void 0 && I3(r) && (r = r[e % r.length], n2 = false), r !== void 0))
      return s2 && !n2 && (s2.cacheable = false), r;
}
function $s(i4, t, e) {
  let { min: s2, max: n2 } = i4, o2 = oi(t, (n2 - s2) / 2), a2 = (r, l4) => e && r === 0 ? 0 : r + l4;
  return { min: a2(s2, -Math.abs(o2)), max: a2(n2, o2) };
}
function pt(i4, t) {
  return Object.assign(Object.create(i4), t);
}
function Ee(i4, t = [""], e, s2, n2 = () => i4[0]) {
  let o2 = e || i4;
  typeof s2 > "u" && (s2 = Xs("_fallback", i4));
  let a2 = { [Symbol.toStringTag]: "Object", _cacheable: true, _scopes: i4, _rootScopes: o2, _fallback: s2, _getTarget: n2, override: (r) => Ee([r, ...i4], t, o2, s2) };
  return new Proxy(a2, { deleteProperty(r, l4) {
    return delete r[l4], delete r._keys, delete i4[0][l4], true;
  }, get(r, l4) {
    return Us(r, l4, () => ta(l4, t, i4, r));
  }, getOwnPropertyDescriptor(r, l4) {
    return Reflect.getOwnPropertyDescriptor(r._scopes[0], l4);
  }, getPrototypeOf() {
    return Reflect.getPrototypeOf(i4[0]);
  }, has(r, l4) {
    return Ms(r).includes(l4);
  }, ownKeys(r) {
    return Ms(r);
  }, set(r, l4, c3) {
    let h5 = r._storage || (r._storage = n2());
    return r[l4] = h5[l4] = c3, delete r._keys, true;
  } });
}
function Ot(i4, t, e, s2) {
  let n2 = { _cacheable: false, _proxy: i4, _context: t, _subProxy: e, _stack: /* @__PURE__ */ new Set(), _descriptors: Mi(i4, s2), setContext: (o2) => Ot(i4, o2, e, s2), override: (o2) => Ot(i4.override(o2), t, e, s2) };
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
  let { _scriptable: e = t.scriptable, _indexable: s2 = t.indexable, _allKeys: n2 = t.allKeys } = i4;
  return { allKeys: n2, scriptable: e, indexable: s2, isScriptable: ut(e) ? e : () => e, isIndexable: ut(s2) ? s2 : () => s2 };
}
function Us(i4, t, e) {
  if (Object.prototype.hasOwnProperty.call(i4, t))
    return i4[t];
  let s2 = e();
  return i4[t] = s2, s2;
}
function Ko(i4, t, e) {
  let { _proxy: s2, _context: n2, _subProxy: o2, _descriptors: a2 } = i4, r = s2[t];
  return ut(r) && a2.isScriptable(t) && (r = qo(t, r, i4, e)), I3(r) && r.length && (r = Go(t, r, i4, a2.isIndexable)), ki(t, r) && (r = Ot(r, n2, o2 && o2[t], a2)), r;
}
function qo(i4, t, e, s2) {
  let { _proxy: n2, _context: o2, _subProxy: a2, _stack: r } = e;
  if (r.has(i4))
    throw new Error("Recursion detected: " + Array.from(r).join("->") + "->" + i4);
  r.add(i4);
  let l4 = t(o2, a2 || s2);
  return r.delete(i4), ki(i4, l4) && (l4 = Si(n2._scopes, n2, i4, l4)), l4;
}
function Go(i4, t, e, s2) {
  let { _proxy: n2, _context: o2, _subProxy: a2, _descriptors: r } = e;
  if (typeof o2.index < "u" && s2(i4))
    return t[o2.index % t.length];
  if (O3(t[0])) {
    let l4 = t, c3 = n2._scopes.filter((h5) => h5 !== l4);
    t = [];
    for (let h5 of l4) {
      let d4 = Si(c3, n2, i4, h5);
      t.push(Ot(d4, o2, a2 && a2[i4], r));
    }
  }
  return t;
}
function Ys(i4, t, e) {
  return ut(i4) ? i4(t, e) : i4;
}
function Qo(i4, t, e, s2, n2) {
  for (let o2 of t) {
    let a2 = Jo(e, o2);
    if (a2) {
      i4.add(a2);
      let r = Ys(a2._fallback, e, n2);
      if (typeof r < "u" && r !== e && r !== s2)
        return r;
    } else if (a2 === false && typeof s2 < "u" && e !== s2)
      return null;
  }
  return false;
}
function Si(i4, t, e, s2) {
  let n2 = t._rootScopes, o2 = Ys(t._fallback, e, s2), a2 = [...i4, ...n2], r = /* @__PURE__ */ new Set();
  r.add(s2);
  let l4 = vs(r, a2, e, o2 || e, s2);
  return l4 === null || typeof o2 < "u" && o2 !== e && (l4 = vs(r, a2, o2, l4, s2), l4 === null) ? false : Ee(Array.from(r), [""], n2, o2, () => Zo(t, e, s2));
}
function vs(i4, t, e, s2, n2) {
  for (; e; )
    e = Qo(i4, t, e, s2, n2);
  return e;
}
function Zo(i4, t, e) {
  let s2 = i4._getTarget();
  t in s2 || (s2[t] = {});
  let n2 = s2[t];
  return I3(n2) && O3(e) ? e : n2 || {};
}
function ta(i4, t, e, s2) {
  let n2;
  for (let o2 of t)
    if (n2 = Xs(Xo(o2, i4), e), typeof n2 < "u")
      return ki(i4, n2) ? Si(e, s2, i4, n2) : n2;
}
function Xs(i4, t) {
  for (let e of t) {
    if (!e)
      continue;
    let s2 = e[i4];
    if (typeof s2 < "u")
      return s2;
  }
}
function Ms(i4) {
  let t = i4._keys;
  return t || (t = i4._keys = ea(i4._scopes)), t;
}
function ea(i4) {
  let t = /* @__PURE__ */ new Set();
  for (let e of i4)
    for (let s2 of Object.keys(e).filter((n2) => !n2.startsWith("_")))
      t.add(s2);
  return Array.from(t);
}
function wi(i4, t, e, s2) {
  let { iScale: n2 } = i4, { key: o2 = "r" } = this._parsing, a2 = new Array(s2), r, l4, c3, h5;
  for (r = 0, l4 = s2; r < l4; ++r)
    c3 = r + e, h5 = t[c3], a2[r] = { r: n2.parse(gt(h5, o2), c3) };
  return a2;
}
function sa(i4, t, e, s2) {
  let n2 = i4.skip ? t : i4, o2 = t, a2 = e.skip ? t : e, r = we(o2, n2), l4 = we(a2, o2), c3 = r / (r + l4), h5 = l4 / (r + l4);
  c3 = isNaN(c3) ? 0 : c3, h5 = isNaN(h5) ? 0 : h5;
  let d4 = s2 * c3, u2 = s2 * h5;
  return { previous: { x: o2.x - d4 * (a2.x - n2.x), y: o2.y - d4 * (a2.y - n2.y) }, next: { x: o2.x + u2 * (a2.x - n2.x), y: o2.y + u2 * (a2.y - n2.y) } };
}
function na(i4, t, e) {
  let s2 = i4.length, n2, o2, a2, r, l4, c3 = Vt(i4, 0);
  for (let h5 = 0; h5 < s2 - 1; ++h5)
    if (l4 = c3, c3 = Vt(i4, h5 + 1), !(!l4 || !c3)) {
      if (Ht(t[h5], 0, ia)) {
        e[h5] = e[h5 + 1] = 0;
        continue;
      }
      n2 = e[h5] / t[h5], o2 = e[h5 + 1] / t[h5], r = Math.pow(n2, 2) + Math.pow(o2, 2), !(r <= 9) && (a2 = 3 / Math.sqrt(r), e[h5] = n2 * a2 * t[h5], e[h5 + 1] = o2 * a2 * t[h5]);
    }
}
function oa(i4, t, e = "x") {
  let s2 = Ks(e), n2 = i4.length, o2, a2, r, l4 = Vt(i4, 0);
  for (let c3 = 0; c3 < n2; ++c3) {
    if (a2 = r, r = l4, l4 = Vt(i4, c3 + 1), !r)
      continue;
    let h5 = r[e], d4 = r[s2];
    a2 && (o2 = (h5 - a2[e]) / 3, r[`cp1${e}`] = h5 - o2, r[`cp1${s2}`] = d4 - o2 * t[c3]), l4 && (o2 = (l4[e] - h5) / 3, r[`cp2${e}`] = h5 + o2, r[`cp2${s2}`] = d4 + o2 * t[c3]);
  }
}
function aa(i4, t = "x") {
  let e = Ks(t), s2 = i4.length, n2 = Array(s2).fill(0), o2 = Array(s2), a2, r, l4, c3 = Vt(i4, 0);
  for (a2 = 0; a2 < s2; ++a2)
    if (r = l4, l4 = c3, c3 = Vt(i4, a2 + 1), !!l4) {
      if (c3) {
        let h5 = c3[t] - l4[t];
        n2[a2] = h5 !== 0 ? (c3[e] - l4[e]) / h5 : 0;
      }
      o2[a2] = r ? c3 ? st(n2[a2 - 1]) !== st(n2[a2]) ? 0 : (n2[a2 - 1] + n2[a2]) / 2 : n2[a2 - 1] : n2[a2];
    }
  na(i4, n2, o2), oa(i4, o2, t);
}
function ve(i4, t, e) {
  return Math.max(Math.min(i4, e), t);
}
function ra(i4, t) {
  let e, s2, n2, o2, a2, r = at(i4[0], t);
  for (e = 0, s2 = i4.length; e < s2; ++e)
    a2 = o2, o2 = r, r = e < s2 - 1 && at(i4[e + 1], t), o2 && (n2 = i4[e], a2 && (n2.cp1x = ve(n2.cp1x, t.left, t.right), n2.cp1y = ve(n2.cp1y, t.top, t.bottom)), r && (n2.cp2x = ve(n2.cp2x, t.left, t.right), n2.cp2y = ve(n2.cp2y, t.top, t.bottom)));
}
function qs(i4, t, e, s2, n2) {
  let o2, a2, r, l4;
  if (t.spanGaps && (i4 = i4.filter((c3) => !c3.skip)), t.cubicInterpolationMode === "monotone")
    aa(i4, n2);
  else {
    let c3 = s2 ? i4[i4.length - 1] : i4[0];
    for (o2 = 0, a2 = i4.length; o2 < a2; ++o2)
      r = i4[o2], l4 = sa(c3, r, i4[Math.min(o2 + 1, a2 - (s2 ? 0 : 1)) % a2], t.tension), r.cp1x = l4.previous.x, r.cp1y = l4.previous.y, r.cp2x = l4.next.x, r.cp2y = l4.next.y, c3 = r;
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
  let s2;
  return typeof i4 == "string" ? (s2 = parseInt(i4, 10), i4.indexOf("%") !== -1 && (s2 = s2 / 100 * t.parentNode[e])) : s2 = i4, s2;
}
function la(i4, t) {
  return Fe(i4).getPropertyValue(t);
}
function Ct(i4, t, e) {
  let s2 = {};
  e = e ? "-" + e : "";
  for (let n2 = 0; n2 < 4; n2++) {
    let o2 = ca[n2];
    s2[o2] = parseFloat(i4[t + "-" + o2 + e]) || 0;
  }
  return s2.width = s2.left + s2.right, s2.height = s2.top + s2.bottom, s2;
}
function da(i4, t) {
  let e = i4.touches, s2 = e && e.length ? e[0] : i4, { offsetX: n2, offsetY: o2 } = s2, a2 = false, r, l4;
  if (ha(n2, o2, i4.target))
    r = n2, l4 = o2;
  else {
    let c3 = t.getBoundingClientRect();
    r = s2.clientX - c3.left, l4 = s2.clientY - c3.top, a2 = true;
  }
  return { x: r, y: l4, box: a2 };
}
function kt(i4, t) {
  if ("native" in i4)
    return i4;
  let { canvas: e, currentDevicePixelRatio: s2 } = t, n2 = Fe(e), o2 = n2.boxSizing === "border-box", a2 = Ct(n2, "padding"), r = Ct(n2, "border", "width"), { x: l4, y: c3, box: h5 } = da(i4, e), d4 = a2.left + (h5 && r.left), u2 = a2.top + (h5 && r.top), { width: f3, height: g4 } = t;
  return o2 && (f3 -= a2.width + r.width, g4 -= a2.height + r.height), { x: Math.round((l4 - d4) / f3 * e.width / s2), y: Math.round((c3 - u2) / g4 * e.height / s2) };
}
function ua(i4, t, e) {
  let s2, n2;
  if (t === void 0 || e === void 0) {
    let o2 = ze(i4);
    if (!o2)
      t = i4.clientWidth, e = i4.clientHeight;
    else {
      let a2 = o2.getBoundingClientRect(), r = Fe(o2), l4 = Ct(r, "border", "width"), c3 = Ct(r, "padding");
      t = a2.width - c3.width - l4.width, e = a2.height - c3.height - l4.height, s2 = Pe(r.maxWidth, o2, "clientWidth"), n2 = Pe(r.maxHeight, o2, "clientHeight");
    }
  }
  return { width: t, height: e, maxWidth: s2 || Se, maxHeight: n2 || Se };
}
function Gs(i4, t, e, s2) {
  let n2 = Fe(i4), o2 = Ct(n2, "margin"), a2 = Pe(n2.maxWidth, i4, "clientWidth") || Se, r = Pe(n2.maxHeight, i4, "clientHeight") || Se, l4 = ua(i4, t, e), { width: c3, height: h5 } = l4;
  if (n2.boxSizing === "content-box") {
    let u2 = Ct(n2, "border", "width"), f3 = Ct(n2, "padding");
    c3 -= f3.width + u2.width, h5 -= f3.height + u2.height;
  }
  return c3 = Math.max(0, c3 - o2.width), h5 = Math.max(0, s2 ? c3 / s2 : h5 - o2.height), c3 = Me(Math.min(c3, a2, l4.maxWidth)), h5 = Me(Math.min(h5, r, l4.maxHeight)), c3 && !h5 && (h5 = Me(c3 / 2)), (t !== void 0 || e !== void 0) && s2 && l4.height && h5 > l4.height && (h5 = l4.height, c3 = Me(Math.floor(h5 * s2))), { width: c3, height: h5 };
}
function Pi(i4, t, e) {
  let s2 = t || 1, n2 = Math.floor(i4.height * s2), o2 = Math.floor(i4.width * s2);
  i4.height = Math.floor(i4.height), i4.width = Math.floor(i4.width);
  let a2 = i4.canvas;
  return a2.style && (e || !a2.style.height && !a2.style.width) && (a2.style.height = `${i4.height}px`, a2.style.width = `${i4.width}px`), i4.currentDevicePixelRatio !== s2 || a2.height !== n2 || a2.width !== o2 ? (i4.currentDevicePixelRatio = s2, a2.height = n2, a2.width = o2, i4.ctx.setTransform(s2, 0, 0, s2, 0, 0), true) : false;
}
function Di(i4, t) {
  let e = la(i4, t), s2 = e && e.match(/^(\d+)(\.\d+)?px$/);
  return s2 ? +s2[1] : void 0;
}
function _t(i4, t, e, s2) {
  return { x: i4.x + e * (t.x - i4.x), y: i4.y + e * (t.y - i4.y) };
}
function Qs(i4, t, e, s2) {
  return { x: i4.x + e * (t.x - i4.x), y: s2 === "middle" ? e < 0.5 ? i4.y : t.y : s2 === "after" ? e < 1 ? i4.y : t.y : e > 0 ? t.y : i4.y };
}
function Zs(i4, t, e, s2) {
  let n2 = { x: i4.cp2x, y: i4.cp2y }, o2 = { x: t.cp1x, y: t.cp1y }, a2 = _t(i4, n2, e), r = _t(n2, o2, e), l4 = _t(o2, t, e), c3 = _t(a2, r, e), h5 = _t(r, l4, e);
  return _t(c3, h5, e);
}
function Lt(i4, t, e) {
  return i4 ? fa(t, e) : ga();
}
function Ci(i4, t) {
  let e, s2;
  (t === "ltr" || t === "rtl") && (e = i4.canvas.style, s2 = [e.getPropertyValue("direction"), e.getPropertyPriority("direction")], e.setProperty("direction", t, "important"), i4.prevTextDirection = s2);
}
function Oi(i4, t) {
  t !== void 0 && (delete i4.prevTextDirection, i4.canvas.style.setProperty("direction", t[0], t[1]));
}
function tn(i4) {
  return i4 === "angle" ? { between: jt, compare: Lo, normalize: G3 } : { between: lt, compare: (t, e) => t - e, normalize: (t) => t };
}
function ks({ start: i4, end: t, count: e, loop: s2, style: n2 }) {
  return { start: i4 % e, end: t % e, loop: s2 && (t - i4 + 1) % e === 0, style: n2 };
}
function pa(i4, t, e) {
  let { property: s2, start: n2, end: o2 } = e, { between: a2, normalize: r } = tn(s2), l4 = t.length, { start: c3, end: h5, loop: d4 } = i4, u2, f3;
  if (d4) {
    for (c3 += l4, h5 += l4, u2 = 0, f3 = l4; u2 < f3 && a2(r(t[c3 % l4][s2]), n2, o2); ++u2)
      c3--, h5--;
    c3 %= l4, h5 %= l4;
  }
  return h5 < c3 && (h5 += l4), { start: c3, end: h5, loop: d4, style: i4.style };
}
function Ai(i4, t, e) {
  if (!e)
    return [i4];
  let { property: s2, start: n2, end: o2 } = e, a2 = t.length, { compare: r, between: l4, normalize: c3 } = tn(s2), { start: h5, end: d4, loop: u2, style: f3 } = pa(i4, t, e), g4 = [], p5 = false, m5 = null, b4, _4, v5, y5 = () => l4(n2, v5, b4) && r(n2, v5) !== 0, x4 = () => r(o2, b4) === 0 || l4(o2, v5, b4), M4 = () => p5 || y5(), k4 = () => !p5 || x4();
  for (let S5 = h5, w4 = h5; S5 <= d4; ++S5)
    _4 = t[S5 % a2], !_4.skip && (b4 = c3(_4[s2]), b4 !== v5 && (p5 = l4(b4, n2, o2), m5 === null && M4() && (m5 = r(b4, n2) === 0 ? S5 : w4), m5 !== null && k4() && (g4.push(ks({ start: m5, end: S5, loop: u2, count: a2, style: f3 })), m5 = null), w4 = S5, v5 = b4));
  return m5 !== null && g4.push(ks({ start: m5, end: d4, loop: u2, count: a2, style: f3 })), g4;
}
function Li(i4, t) {
  let e = [], s2 = i4.segments;
  for (let n2 = 0; n2 < s2.length; n2++) {
    let o2 = Ai(s2[n2], i4.points, t);
    o2.length && e.push(...o2);
  }
  return e;
}
function ma(i4, t, e, s2) {
  let n2 = 0, o2 = t - 1;
  if (e && !s2)
    for (; n2 < t && !i4[n2].skip; )
      n2++;
  for (; n2 < t && i4[n2].skip; )
    n2++;
  for (n2 %= t, e && (o2 += n2); o2 > n2 && i4[o2 % t].skip; )
    o2--;
  return o2 %= t, { start: n2, end: o2 };
}
function ba(i4, t, e, s2) {
  let n2 = i4.length, o2 = [], a2 = t, r = i4[t], l4;
  for (l4 = t + 1; l4 <= e; ++l4) {
    let c3 = i4[l4 % n2];
    c3.skip || c3.stop ? r.skip || (s2 = false, o2.push({ start: t % n2, end: (l4 - 1) % n2, loop: s2 }), t = a2 = c3.stop ? l4 : null) : (a2 = l4, r.skip && (t = l4)), r = c3;
  }
  return a2 !== null && o2.push({ start: t % n2, end: a2 % n2, loop: s2 }), o2;
}
function en(i4, t) {
  let e = i4.points, s2 = i4.options.spanGaps, n2 = e.length;
  if (!n2)
    return [];
  let o2 = !!i4._loop, { start: a2, end: r } = ma(e, n2, o2, s2);
  if (s2 === true)
    return Ss(i4, [{ start: a2, end: r, loop: o2 }], e, t);
  let l4 = r < a2 ? r + n2 : r, c3 = !!i4._fullLoop && a2 === 0 && r === n2 - 1;
  return Ss(i4, ba(e, a2, l4, c3), e, t);
}
function Ss(i4, t, e, s2) {
  return !s2 || !s2.setContext || !e ? t : _a(i4, t, e, s2);
}
function _a(i4, t, e, s2) {
  let n2 = i4._chart.getContext(), o2 = ws(i4.options), { _datasetIndex: a2, options: { spanGaps: r } } = i4, l4 = e.length, c3 = [], h5 = o2, d4 = t[0].start, u2 = d4;
  function f3(g4, p5, m5, b4) {
    let _4 = r ? -1 : 1;
    if (g4 !== p5) {
      for (g4 += l4; e[g4 % l4].skip; )
        g4 -= _4;
      for (; e[p5 % l4].skip; )
        p5 += _4;
      g4 % l4 !== p5 % l4 && (c3.push({ start: g4 % l4, end: p5 % l4, loop: m5, style: b4 }), h5 = b4, d4 = p5 % l4);
    }
  }
  for (let g4 of t) {
    d4 = r ? d4 : g4.start;
    let p5 = e[d4 % l4], m5;
    for (u2 = d4 + 1; u2 <= g4.end; u2++) {
      let b4 = e[u2 % l4];
      m5 = ws(s2.setContext(pt(n2, { type: "segment", p0: p5, p1: b4, p0DataIndex: (u2 - 1) % l4, p1DataIndex: u2 % l4, datasetIndex: a2 }))), xa(m5, h5) && f3(d4, u2 - 1, g4.loop, h5), p5 = b4, h5 = m5;
    }
    d4 < u2 - 1 && f3(d4, u2 - 1, g4.loop, h5);
  }
  return c3;
}
function ws(i4) {
  return { backgroundColor: i4.backgroundColor, borderCapStyle: i4.borderCapStyle, borderDash: i4.borderDash, borderDashOffset: i4.borderDashOffset, borderJoinStyle: i4.borderJoinStyle, borderWidth: i4.borderWidth, borderColor: i4.borderColor };
}
function xa(i4, t) {
  if (!t)
    return false;
  let e = [], s2 = function(n2, o2) {
    return bi(o2) ? (e.includes(o2) || e.push(o2), e.indexOf(o2)) : o2;
  };
  return JSON.stringify(i4, s2) !== JSON.stringify(t, s2);
}
function va(i4, t) {
  let e = [], s2 = Object.keys(t);
  for (let n2 = 0; n2 < s2.length; n2++) {
    let o2 = i4[s2[n2]];
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
  let e = i4 && i4.options || {}, s2 = e.reverse, n2 = e.min === void 0 ? t : 0, o2 = e.max === void 0 ? t : 0;
  return { start: s2 ? o2 : n2, end: s2 ? n2 : o2 };
}
function ka(i4, t, e) {
  if (e === false)
    return false;
  let s2 = nn(i4, e), n2 = nn(t, e);
  return { top: n2.end, right: s2.end, bottom: n2.start, left: s2.start };
}
function Sa(i4) {
  let t, e, s2, n2;
  return O3(i4) ? (t = i4.top, e = i4.right, s2 = i4.bottom, n2 = i4.left) : t = e = s2 = n2 = i4, { top: t, right: e, bottom: s2, left: n2, disabled: i4 === false };
}
function so(i4, t) {
  let e = [], s2 = i4._getSortedDatasetMetas(t), n2, o2;
  for (n2 = 0, o2 = s2.length; n2 < o2; ++n2)
    e.push(s2[n2].index);
  return e;
}
function on(i4, t, e, s2 = {}) {
  let n2 = i4.keys, o2 = s2.mode === "single", a2, r, l4, c3;
  if (t !== null) {
    for (a2 = 0, r = n2.length; a2 < r; ++a2) {
      if (l4 = +n2[a2], l4 === e) {
        if (s2.all)
          continue;
        break;
      }
      c3 = i4.values[l4], V3(c3) && (o2 || t === 0 || st(t) === st(c3)) && (t += c3);
    }
    return t;
  }
}
function wa(i4) {
  let t = Object.keys(i4), e = new Array(t.length), s2, n2, o2;
  for (s2 = 0, n2 = t.length; s2 < n2; ++s2)
    o2 = t[s2], e[s2] = { x: o2, y: i4[o2] };
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
  let { min: t, max: e, minDefined: s2, maxDefined: n2 } = i4.getUserBounds();
  return { min: s2 ? t : Number.NEGATIVE_INFINITY, max: n2 ? e : Number.POSITIVE_INFINITY };
}
function Ca(i4, t, e) {
  let s2 = i4[t] || (i4[t] = {});
  return s2[e] || (s2[e] = {});
}
function rn(i4, t, e, s2) {
  for (let n2 of t.getMatchingVisibleMetas(s2).reverse()) {
    let o2 = i4[n2.index];
    if (e && o2 > 0 || !e && o2 < 0)
      return n2.index;
  }
  return null;
}
function ln(i4, t) {
  let { chart: e, _cachedMeta: s2 } = i4, n2 = e._stacks || (e._stacks = {}), { iScale: o2, vScale: a2, index: r } = s2, l4 = o2.axis, c3 = a2.axis, h5 = Pa(o2, a2, s2), d4 = t.length, u2;
  for (let f3 = 0; f3 < d4; ++f3) {
    let g4 = t[f3], { [l4]: p5, [c3]: m5 } = g4, b4 = g4._stacks || (g4._stacks = {});
    u2 = b4[c3] = Ca(n2, h5, p5), u2[r] = m5, u2._top = rn(u2, a2, true, s2.type), u2._bottom = rn(u2, a2, false, s2.type);
    let _4 = u2._visualValues || (u2._visualValues = {});
    _4[r] = m5;
  }
}
function Ti(i4, t) {
  let e = i4.scales;
  return Object.keys(e).filter((s2) => e[s2].axis === t).shift();
}
function Oa(i4, t) {
  return pt(i4, { active: false, dataset: void 0, datasetIndex: t, index: t, mode: "default", type: "dataset" });
}
function Aa(i4, t, e) {
  return pt(i4, { active: false, dataIndex: t, parsed: void 0, raw: void 0, element: e, index: t, mode: "default", type: "data" });
}
function ae(i4, t) {
  let e = i4.controller.index, s2 = i4.vScale && i4.vScale.axis;
  if (s2) {
    t = t || i4._parsed;
    for (let n2 of t) {
      let o2 = n2._stacks;
      if (!o2 || o2[s2] === void 0 || o2[s2][e] === void 0)
        return;
      delete o2[s2][e], o2[s2]._visualValues !== void 0 && o2[s2]._visualValues[e] !== void 0 && delete o2[s2]._visualValues[e];
    }
  }
}
function Ta(i4, t) {
  if (!i4._cache.$bar) {
    let e = i4.getMatchingVisibleMetas(t), s2 = [];
    for (let n2 = 0, o2 = e.length; n2 < o2; n2++)
      s2 = s2.concat(e[n2].controller.getAllParsedValues(i4));
    i4._cache.$bar = ui(s2.sort((n2, o2) => n2 - o2));
  }
  return i4._cache.$bar;
}
function Ra(i4) {
  let t = i4.iScale, e = Ta(t, i4.type), s2 = t._length, n2, o2, a2, r, l4 = () => {
    a2 === 32767 || a2 === -32768 || (Nt(r) && (s2 = Math.min(s2, Math.abs(a2 - r) || s2)), r = a2);
  };
  for (n2 = 0, o2 = e.length; n2 < o2; ++n2)
    a2 = t.getPixelForValue(e[n2]), l4();
  for (r = void 0, n2 = 0, o2 = t.ticks.length; n2 < o2; ++n2)
    a2 = t.getPixelForTick(n2), l4();
  return s2;
}
function Ea(i4, t, e, s2) {
  let n2 = e.barThickness, o2, a2;
  return L3(n2) ? (o2 = t.min * e.categoryPercentage, a2 = e.barPercentage) : (o2 = n2 * s2, a2 = 1), { chunk: o2 / s2, ratio: a2, start: t.pixels[i4] - o2 / 2 };
}
function Ia(i4, t, e, s2) {
  let n2 = t.pixels, o2 = n2[i4], a2 = i4 > 0 ? n2[i4 - 1] : null, r = i4 < n2.length - 1 ? n2[i4 + 1] : null, l4 = e.categoryPercentage;
  a2 === null && (a2 = o2 - (r === null ? t.end - t.start : r - o2)), r === null && (r = o2 + o2 - a2);
  let c3 = o2 - (o2 - Math.min(a2, r)) / 2 * l4;
  return { chunk: Math.abs(r - a2) / 2 * l4 / s2, ratio: e.barPercentage, start: c3 };
}
function za(i4, t, e, s2) {
  let n2 = e.parse(i4[0], s2), o2 = e.parse(i4[1], s2), a2 = Math.min(n2, o2), r = Math.max(n2, o2), l4 = a2, c3 = r;
  Math.abs(a2) > Math.abs(r) && (l4 = r, c3 = a2), t[e.axis] = c3, t._custom = { barStart: l4, barEnd: c3, start: n2, end: o2, min: a2, max: r };
}
function no(i4, t, e, s2) {
  return I3(i4) ? za(i4, t, e, s2) : t[e.axis] = e.parse(i4, s2), t;
}
function hn(i4, t, e, s2) {
  let n2 = i4.iScale, o2 = i4.vScale, a2 = n2.getLabels(), r = n2 === o2, l4 = [], c3, h5, d4, u2;
  for (c3 = e, h5 = e + s2; c3 < h5; ++c3)
    u2 = t[c3], d4 = {}, d4[n2.axis] = r || n2.parse(a2[c3], c3), l4.push(no(u2, d4, o2, c3));
  return l4;
}
function Ei(i4) {
  return i4 && i4.barStart !== void 0 && i4.barEnd !== void 0;
}
function Fa(i4, t, e) {
  return i4 !== 0 ? st(i4) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function Ba(i4) {
  let t, e, s2, n2, o2;
  return i4.horizontal ? (t = i4.base > i4.x, e = "left", s2 = "right") : (t = i4.base < i4.y, e = "bottom", s2 = "top"), t ? (n2 = "end", o2 = "start") : (n2 = "start", o2 = "end"), { start: e, end: s2, reverse: t, top: n2, bottom: o2 };
}
function Va(i4, t, e, s2) {
  let n2 = t.borderSkipped, o2 = {};
  if (!n2) {
    i4.borderSkipped = o2;
    return;
  }
  if (n2 === true) {
    i4.borderSkipped = { top: true, right: true, bottom: true, left: true };
    return;
  }
  let { start: a2, end: r, reverse: l4, top: c3, bottom: h5 } = Ba(i4);
  n2 === "middle" && e && (i4.enableBorderRadius = true, (e._top || 0) === s2 ? n2 = c3 : (e._bottom || 0) === s2 ? n2 = h5 : (o2[dn(h5, a2, r, l4)] = true, n2 = c3)), o2[dn(n2, a2, r, l4)] = true, i4.borderSkipped = o2;
}
function dn(i4, t, e, s2) {
  return s2 ? (i4 = Wa(i4, t, e), i4 = un(i4, e, t)) : i4 = un(i4, t, e), i4;
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
  let s2 = 1, n2 = 1, o2 = 0, a2 = 0;
  if (t < F3) {
    let r = i4, l4 = r + t, c3 = Math.cos(r), h5 = Math.sin(r), d4 = Math.cos(l4), u2 = Math.sin(l4), f3 = (v5, y5, x4) => jt(v5, r, l4, true) ? 1 : Math.max(y5, y5 * e, x4, x4 * e), g4 = (v5, y5, x4) => jt(v5, r, l4, true) ? -1 : Math.min(y5, y5 * e, x4, x4 * e), p5 = f3(0, c3, d4), m5 = f3(N3, h5, u2), b4 = g4(z2, c3, d4), _4 = g4(z2 + N3, h5, u2);
    s2 = (p5 - b4) / 2, n2 = (m5 - _4) / 2, o2 = -(p5 + b4) / 2, a2 = -(m5 + _4) / 2;
  }
  return { ratioX: s2, ratioY: n2, offsetX: o2, offsetY: a2 };
}
function Tt() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
function Ua(i4, t, e, s2) {
  let { controller: n2, data: o2, _sorted: a2 } = i4, r = n2._cachedMeta.iScale;
  if (r && t === r.axis && t !== "r" && a2 && o2.length) {
    let l4 = r._reversePixels ? Es : ot;
    if (s2) {
      if (n2._sharedOptions) {
        let c3 = o2[0], h5 = typeof c3.getRange == "function" && c3.getRange(t);
        if (h5) {
          let d4 = l4(o2, t, e - h5), u2 = l4(o2, t, e + h5);
          return { lo: d4.lo, hi: u2.hi };
        }
      }
    } else
      return l4(o2, t, e);
  }
  return { lo: 0, hi: o2.length - 1 };
}
function _e(i4, t, e, s2, n2) {
  let o2 = i4.getSortedVisibleDatasetMetas(), a2 = e[t];
  for (let r = 0, l4 = o2.length; r < l4; ++r) {
    let { index: c3, data: h5 } = o2[r], { lo: d4, hi: u2 } = Ua(o2[r], t, a2, n2);
    for (let f3 = d4; f3 <= u2; ++f3) {
      let g4 = h5[f3];
      g4.skip || s2(g4, c3, f3);
    }
  }
}
function Ya(i4) {
  let t = i4.indexOf("x") !== -1, e = i4.indexOf("y") !== -1;
  return function(s2, n2) {
    let o2 = t ? Math.abs(s2.x - n2.x) : 0, a2 = e ? Math.abs(s2.y - n2.y) : 0;
    return Math.sqrt(Math.pow(o2, 2) + Math.pow(a2, 2));
  };
}
function Ii(i4, t, e, s2, n2) {
  let o2 = [];
  return !n2 && !i4.isPointInArea(t) || _e(i4, e, t, function(r, l4, c3) {
    !n2 && !at(r, i4.chartArea, 0) || r.inRange(t.x, t.y, s2) && o2.push({ element: r, datasetIndex: l4, index: c3 });
  }, true), o2;
}
function Xa(i4, t, e, s2) {
  let n2 = [];
  function o2(a2, r, l4) {
    let { startAngle: c3, endAngle: h5 } = a2.getProps(["startAngle", "endAngle"], s2), { angle: d4 } = hi(a2, { x: t.x, y: t.y });
    jt(d4, c3, h5) && n2.push({ element: a2, datasetIndex: r, index: l4 });
  }
  return _e(i4, e, t, o2), n2;
}
function Ka(i4, t, e, s2, n2, o2) {
  let a2 = [], r = Ya(e), l4 = Number.POSITIVE_INFINITY;
  function c3(h5, d4, u2) {
    let f3 = h5.inRange(t.x, t.y, n2);
    if (s2 && !f3)
      return;
    let g4 = h5.getCenterPoint(n2);
    if (!(!!o2 || i4.isPointInArea(g4)) && !f3)
      return;
    let m5 = r(t, g4);
    m5 < l4 ? (a2 = [{ element: h5, datasetIndex: d4, index: u2 }], l4 = m5) : m5 === l4 && a2.push({ element: h5, datasetIndex: d4, index: u2 });
  }
  return _e(i4, e, t, c3), a2;
}
function zi(i4, t, e, s2, n2, o2) {
  return !o2 && !i4.isPointInArea(t) ? [] : e === "r" && !s2 ? Xa(i4, t, e, n2) : Ka(i4, t, e, s2, n2, o2);
}
function fn(i4, t, e, s2, n2) {
  let o2 = [], a2 = e === "x" ? "inXRange" : "inYRange", r = false;
  return _e(i4, e, t, (l4, c3, h5) => {
    l4[a2](t[e], n2) && (o2.push({ element: l4, datasetIndex: c3, index: h5 }), r = r || l4.inRange(t.x, t.y, n2));
  }), s2 && !r ? [] : o2;
}
function re(i4, t) {
  return i4.filter((e) => e.pos === t);
}
function gn(i4, t) {
  return i4.filter((e) => oo.indexOf(e.pos) === -1 && e.box.axis === t);
}
function le(i4, t) {
  return i4.sort((e, s2) => {
    let n2 = t ? s2 : e, o2 = t ? e : s2;
    return n2.weight === o2.weight ? n2.index - o2.index : n2.weight - o2.weight;
  });
}
function Ga(i4) {
  let t = [], e, s2, n2, o2, a2, r;
  for (e = 0, s2 = (i4 || []).length; e < s2; ++e)
    n2 = i4[e], { position: o2, options: { stack: a2, stackWeight: r = 1 } } = n2, t.push({ index: e, box: n2, pos: o2, horizontal: n2.isHorizontal(), weight: n2.weight, stack: a2 && o2 + a2, stackWeight: r });
  return t;
}
function Ja(i4) {
  let t = {};
  for (let e of i4) {
    let { stack: s2, pos: n2, stackWeight: o2 } = e;
    if (!s2 || !oo.includes(n2))
      continue;
    let a2 = t[s2] || (t[s2] = { count: 0, placed: 0, weight: 0, size: 0 });
    a2.count++, a2.weight += o2;
  }
  return t;
}
function Qa(i4, t) {
  let e = Ja(i4), { vBoxMaxWidth: s2, hBoxMaxHeight: n2 } = t, o2, a2, r;
  for (o2 = 0, a2 = i4.length; o2 < a2; ++o2) {
    r = i4[o2];
    let { fullSize: l4 } = r.box, c3 = e[r.stack], h5 = c3 && r.stackWeight / c3.weight;
    r.horizontal ? (r.width = h5 ? h5 * s2 : l4 && t.availableWidth, r.height = n2) : (r.width = s2, r.height = h5 ? h5 * n2 : l4 && t.availableHeight);
  }
  return e;
}
function Za(i4) {
  let t = Ga(i4), e = le(t.filter((c3) => c3.box.fullSize), true), s2 = le(re(t, "left"), true), n2 = le(re(t, "right")), o2 = le(re(t, "top"), true), a2 = le(re(t, "bottom")), r = gn(t, "x"), l4 = gn(t, "y");
  return { fullSize: e, leftAndTop: s2.concat(o2), rightAndBottom: n2.concat(l4).concat(a2).concat(r), chartArea: re(t, "chartArea"), vertical: s2.concat(n2).concat(l4), horizontal: o2.concat(a2).concat(r) };
}
function pn(i4, t, e, s2) {
  return Math.max(i4[e], t[e]) + Math.max(i4[s2], t[s2]);
}
function ao(i4, t) {
  i4.top = Math.max(i4.top, t.top), i4.left = Math.max(i4.left, t.left), i4.bottom = Math.max(i4.bottom, t.bottom), i4.right = Math.max(i4.right, t.right);
}
function tr(i4, t, e, s2) {
  let { pos: n2, box: o2 } = e, a2 = i4.maxPadding;
  if (!O3(n2)) {
    e.size && (i4[n2] -= e.size);
    let d4 = s2[e.stack] || { size: 0, count: 1 };
    d4.size = Math.max(d4.size, e.horizontal ? o2.height : o2.width), e.size = d4.size / d4.count, i4[n2] += e.size;
  }
  o2.getPadding && ao(a2, o2.getPadding());
  let r = Math.max(0, t.outerWidth - pn(a2, i4, "left", "right")), l4 = Math.max(0, t.outerHeight - pn(a2, i4, "top", "bottom")), c3 = r !== i4.w, h5 = l4 !== i4.h;
  return i4.w = r, i4.h = l4, e.horizontal ? { same: c3, other: h5 } : { same: h5, other: c3 };
}
function er(i4) {
  let t = i4.maxPadding;
  function e(s2) {
    let n2 = Math.max(t[s2] - i4[s2], 0);
    return i4[s2] += n2, n2;
  }
  i4.y += e("top"), i4.x += e("left"), e("right"), e("bottom");
}
function ir(i4, t) {
  let e = t.maxPadding;
  function s2(n2) {
    let o2 = { left: 0, top: 0, right: 0, bottom: 0 };
    return n2.forEach((a2) => {
      o2[a2] = Math.max(t[a2], e[a2]);
    }), o2;
  }
  return s2(i4 ? ["left", "right"] : ["top", "bottom"]);
}
function de(i4, t, e, s2) {
  let n2 = [], o2, a2, r, l4, c3, h5;
  for (o2 = 0, a2 = i4.length, c3 = 0; o2 < a2; ++o2) {
    r = i4[o2], l4 = r.box, l4.update(r.width || t.w, r.height || t.h, ir(r.horizontal, t));
    let { same: d4, other: u2 } = tr(t, e, r, s2);
    c3 |= d4 && n2.length, h5 = h5 || u2, l4.fullSize || n2.push(r);
  }
  return c3 && de(n2, t, e, s2) || h5;
}
function Be(i4, t, e, s2, n2) {
  i4.top = e, i4.left = t, i4.right = t + s2, i4.bottom = e + n2, i4.width = s2, i4.height = n2;
}
function mn(i4, t, e, s2) {
  let n2 = e.padding, { x: o2, y: a2 } = t;
  for (let r of i4) {
    let l4 = r.box, c3 = s2[r.stack] || { count: 1, placed: 0, weight: 1 }, h5 = r.stackWeight / c3.weight || 1;
    if (r.horizontal) {
      let d4 = t.w * h5, u2 = c3.size || l4.height;
      Nt(c3.start) && (a2 = c3.start), l4.fullSize ? Be(l4, n2.left, a2, e.outerWidth - n2.right - n2.left, u2) : Be(l4, t.left + c3.placed, a2, d4, u2), c3.start = a2, c3.placed += d4, a2 = l4.bottom;
    } else {
      let d4 = t.h * h5, u2 = c3.size || l4.width;
      Nt(c3.start) && (o2 = c3.start), l4.fullSize ? Be(l4, o2, n2.top, u2, e.outerHeight - n2.bottom - n2.top) : Be(l4, o2, t.top + c3.placed, u2, d4), c3.start = o2, c3.placed += d4, o2 = l4.right;
    }
  }
  t.x = o2, t.y = a2;
}
function nr(i4, t) {
  let e = i4.style, s2 = i4.getAttribute("height"), n2 = i4.getAttribute("width");
  if (i4[Ue] = { initial: { height: s2, width: n2, style: { display: e.display, height: e.height, width: e.width } } }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", bn(n2)) {
    let o2 = Di(i4, "width");
    o2 !== void 0 && (i4.width = o2);
  }
  if (bn(s2))
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
  let e = sr[i4.type] || i4.type, { x: s2, y: n2 } = kt(i4, t);
  return { type: e, chart: t, native: i4, x: s2 !== void 0 ? s2 : null, y: n2 !== void 0 ? n2 : null };
}
function Ge(i4, t) {
  for (let e of i4)
    if (e === t || e.contains(t))
      return true;
}
function lr(i4, t, e) {
  let s2 = i4.canvas, n2 = new MutationObserver((o2) => {
    let a2 = false;
    for (let r of o2)
      a2 = a2 || Ge(r.addedNodes, s2), a2 = a2 && !Ge(r.removedNodes, s2);
    a2 && e();
  });
  return n2.observe(document, { childList: true, subtree: true }), n2;
}
function cr(i4, t, e) {
  let s2 = i4.canvas, n2 = new MutationObserver((o2) => {
    let a2 = false;
    for (let r of o2)
      a2 = a2 || Ge(r.removedNodes, s2), a2 = a2 && !Ge(r.addedNodes, s2);
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
  let s2 = i4.canvas, n2 = s2 && ze(s2);
  if (!n2)
    return;
  let o2 = gi((r, l4) => {
    let c3 = n2.clientWidth;
    e(r, l4), c3 < n2.clientWidth && e();
  }, window), a2 = new ResizeObserver((r) => {
    let l4 = r[0], c3 = l4.contentRect.width, h5 = l4.contentRect.height;
    c3 === 0 && h5 === 0 || o2(c3, h5);
  });
  return a2.observe(n2), hr(i4, o2), a2;
}
function Fi(i4, t, e) {
  e && e.disconnect(), t === "resize" && dr(i4);
}
function fr(i4, t, e) {
  let s2 = i4.canvas, n2 = gi((o2) => {
    i4.ctx !== null && e(rr(o2, i4));
  }, i4);
  return or(s2, t, n2), n2;
}
function gr(i4) {
  return !Ie() || typeof OffscreenCanvas < "u" && i4 instanceof OffscreenCanvas ? Gi : Ji;
}
function pr(i4, t) {
  let e = i4.options.ticks, s2 = mr(i4), n2 = Math.min(e.maxTicksLimit || s2, s2), o2 = e.major.enabled ? _r(t) : [], a2 = o2.length, r = o2[0], l4 = o2[a2 - 1], c3 = [];
  if (a2 > n2)
    return xr(t, c3, o2, a2 / n2), c3;
  let h5 = br(o2, t, n2);
  if (a2 > 0) {
    let d4, u2, f3 = a2 > 1 ? Math.round((l4 - r) / (a2 - 1)) : null;
    for (Ve(t, c3, h5, L3(f3) ? 0 : r - f3, r), d4 = 0, u2 = a2 - 1; d4 < u2; d4++)
      Ve(t, c3, h5, o2[d4], o2[d4 + 1]);
    return Ve(t, c3, h5, l4, L3(f3) ? t.length : l4 + f3), c3;
  }
  return Ve(t, c3, h5), c3;
}
function mr(i4) {
  let t = i4.options.offset, e = i4._tickSize(), s2 = i4._length / e + (t ? 0 : 1), n2 = i4._maxLength / e;
  return Math.floor(Math.min(s2, n2));
}
function br(i4, t, e) {
  let s2 = yr(i4), n2 = t.length / e;
  if (!s2)
    return Math.max(n2, 1);
  let o2 = Ls(s2);
  for (let a2 = 0, r = o2.length - 1; a2 < r; a2++) {
    let l4 = o2[a2];
    if (l4 > n2)
      return l4;
  }
  return Math.max(n2, 1);
}
function _r(i4) {
  let t = [], e, s2;
  for (e = 0, s2 = i4.length; e < s2; e++)
    i4[e].major && t.push(e);
  return t;
}
function xr(i4, t, e, s2) {
  let n2 = 0, o2 = e[0], a2;
  for (s2 = Math.ceil(s2), a2 = 0; a2 < i4.length; a2++)
    a2 === o2 && (t.push(i4[a2]), n2++, o2 = e[n2 * s2]);
}
function Ve(i4, t, e, s2, n2) {
  let o2 = P3(s2, 0), a2 = Math.min(P3(n2, i4.length), i4.length), r = 0, l4, c3, h5;
  for (e = Math.ceil(e), n2 && (l4 = n2 - s2, e = l4 / Math.floor(l4 / e)), h5 = o2; h5 < 0; )
    r++, h5 = Math.round(o2 + r * e);
  for (c3 = Math.max(o2, 0); c3 < a2; c3++)
    c3 === h5 && (t.push(i4[c3]), r++, h5 = Math.round(o2 + r * e));
}
function yr(i4) {
  let t = i4.length, e, s2;
  if (t < 2)
    return false;
  for (s2 = i4[0], e = 1; e < t; ++e)
    if (i4[e] - i4[e - 1] !== s2)
      return false;
  return s2;
}
function vn(i4, t) {
  let e = [], s2 = i4.length / t, n2 = i4.length, o2 = 0;
  for (; o2 < n2; o2 += s2)
    e.push(i4[Math.floor(o2)]);
  return e;
}
function Mr(i4, t, e) {
  let s2 = i4.ticks.length, n2 = Math.min(t, s2 - 1), o2 = i4._startPixel, a2 = i4._endPixel, r = 1e-6, l4 = i4.getPixelForTick(n2), c3;
  if (!(e && (s2 === 1 ? c3 = Math.max(l4 - o2, a2 - l4) : t === 0 ? c3 = (i4.getPixelForTick(1) - l4) / 2 : c3 = (l4 - i4.getPixelForTick(n2 - 1)) / 2, l4 += n2 < t ? c3 : -c3, l4 < o2 - r || l4 > a2 + r)))
    return l4;
}
function kr(i4, t) {
  T3(i4, (e) => {
    let s2 = e.gc, n2 = s2.length / 2, o2;
    if (n2 > t) {
      for (o2 = 0; o2 < n2; ++o2)
        delete e.data[s2[o2]];
      s2.splice(0, n2);
    }
  });
}
function ce(i4) {
  return i4.drawTicks ? i4.tickLength : 0;
}
function Mn(i4, t) {
  if (!i4.display)
    return 0;
  let e = j3(i4.font, t), s2 = X3(i4.padding);
  return (I3(i4.text) ? i4.text.length : 1) * e.lineHeight + s2.height;
}
function Sr(i4, t) {
  return pt(i4, { scale: t, type: "scale" });
}
function wr(i4, t, e) {
  return pt(i4, { tick: e, index: t, type: "tick" });
}
function Pr(i4, t, e) {
  let s2 = Ae(i4);
  return (e && t !== "right" || !e && t === "right") && (s2 = vr(s2)), s2;
}
function Dr(i4, t, e, s2) {
  let { top: n2, left: o2, bottom: a2, right: r, chart: l4 } = i4, { chartArea: c3, scales: h5 } = l4, d4 = 0, u2, f3, g4, p5 = a2 - n2, m5 = r - o2;
  if (i4.isHorizontal()) {
    if (f3 = Y3(s2, o2, r), O3(e)) {
      let b4 = Object.keys(e)[0], _4 = e[b4];
      g4 = h5[b4].getPixelForValue(_4) + p5 - t;
    } else
      e === "center" ? g4 = (c3.bottom + c3.top) / 2 + p5 - t : g4 = xn(i4, e, t);
    u2 = r - o2;
  } else {
    if (O3(e)) {
      let b4 = Object.keys(e)[0], _4 = e[b4];
      f3 = h5[b4].getPixelForValue(_4) - m5 + t;
    } else
      e === "center" ? f3 = (c3.left + c3.right) / 2 - m5 + t : f3 = xn(i4, e, t);
    g4 = Y3(s2, a2, n2), d4 = e === "left" ? -N3 : N3;
  }
  return { titleX: f3, titleY: g4, maxWidth: u2, rotation: d4 };
}
function Cr(i4, t, e) {
  let s2 = Bt(/* @__PURE__ */ Object.create(null), [e ? W3.get(e) : {}, W3.get(t), i4.defaults]);
  W3.set(t, s2), i4.defaultRoutes && Or(t, i4.defaultRoutes), i4.descriptors && W3.describe(t, i4.descriptors);
}
function Or(i4, t) {
  Object.keys(t).forEach((e) => {
    let s2 = e.split("."), n2 = s2.pop(), o2 = [i4].concat(s2).join("."), a2 = t[e].split("."), r = a2.pop(), l4 = a2.join(".");
    W3.route(o2, n2, l4, r);
  });
}
function Ar(i4) {
  return "id" in i4 && "defaults" in i4;
}
function Lr(i4) {
  let t = {}, e = [], s2 = Object.keys(ht.plugins.items);
  for (let o2 = 0; o2 < s2.length; o2++)
    e.push(ht.getPlugin(s2[o2]));
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
function Rr(i4, { plugins: t, localIds: e }, s2, n2) {
  let o2 = [], a2 = i4.getContext();
  for (let r of t) {
    let l4 = r.id, c3 = Tr(s2[l4], n2);
    c3 !== null && o2.push({ plugin: r, options: Er(i4.config, { plugin: r, local: e[l4] }, c3, a2) });
  }
  return o2;
}
function Er(i4, { plugin: t, local: e }, s2, n2) {
  let o2 = i4.pluginScopeKeys(t), a2 = i4.getOptionScopes(s2, o2);
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
    let s2 = e.axis || Fr(e.position) || i4.length > 1 && kn(i4[0].toLowerCase());
    if (s2)
      return s2;
  }
  throw new Error(`Cannot determine type of '${i4}' axis. Please provide 'axis' or 'position' option.`);
}
function Sn(i4, t, e) {
  if (e[t + "AxisID"] === i4)
    return { axis: t };
}
function Br(i4, t) {
  if (t.data && t.data.datasets) {
    let e = t.data.datasets.filter((s2) => s2.xAxisID === i4 || s2.yAxisID === i4);
    if (e.length)
      return Sn(i4, "x", e[0]) || Sn(i4, "y", e[0]);
  }
  return {};
}
function Vr(i4, t) {
  let e = xt[i4.type] || { scales: {} }, s2 = t.scales || {}, n2 = ts(i4.type, t), o2 = /* @__PURE__ */ Object.create(null);
  return Object.keys(s2).forEach((a2) => {
    let r = s2[a2];
    if (!O3(r))
      return console.error(`Invalid scale configuration for scale: ${a2}`);
    if (r._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${a2}`);
    let l4 = es(a2, r, Br(a2, i4), W3.scales[r.type]), c3 = zr(l4, n2), h5 = e.scales || {};
    o2[a2] = Wt(/* @__PURE__ */ Object.create(null), [{ axis: l4 }, r, h5[l4], h5[c3]]);
  }), i4.data.datasets.forEach((a2) => {
    let r = a2.type || i4.type, l4 = a2.indexAxis || ts(r, t), h5 = (xt[r] || {}).scales || {};
    Object.keys(h5).forEach((d4) => {
      let u2 = Ir(d4, l4), f3 = a2[u2 + "AxisID"] || u2;
      o2[f3] = o2[f3] || /* @__PURE__ */ Object.create(null), Wt(o2[f3], [{ axis: u2 }, s2[f3], h5[d4]]);
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
  let s2 = i4.get(t);
  s2 || (s2 = /* @__PURE__ */ new Map(), i4.set(t, s2));
  let n2 = e.join(), o2 = s2.get(n2);
  return o2 || (o2 = { resolver: Ee(t, e), subPrefixes: e.filter((r) => !r.toLowerCase().includes("hover")) }, s2.set(n2, o2)), o2;
}
function Hr(i4, t) {
  let { isScriptable: e, isIndexable: s2 } = Mi(i4);
  for (let n2 of t) {
    let o2 = e(n2), a2 = s2(n2), r = (a2 || o2) && i4[n2];
    if (o2 && (ut(r) || Nr(r)) || a2 && I3(r))
      return true;
  }
  return false;
}
function Dn(i4, t) {
  return i4 === "top" || i4 === "bottom" || $r.indexOf(i4) === -1 && t === "x";
}
function Cn(i4, t) {
  return function(e, s2) {
    return e[i4] === s2[i4] ? e[t] - s2[t] : e[i4] - s2[i4];
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
  let s2 = Object.keys(i4);
  for (let n2 of s2) {
    let o2 = +n2;
    if (o2 >= t) {
      let a2 = i4[n2];
      delete i4[n2], (e > 0 || o2 > t) && (i4[o2 + e] = a2);
    }
  }
}
function Xr(i4, t, e, s2) {
  return !e || i4.type === "mouseout" ? null : s2 ? t : i4;
}
function Ne(i4, t, e) {
  return i4.options.clip ? i4[e] : t[e];
}
function Kr(i4, t) {
  let { xScale: e, yScale: s2 } = i4;
  return e && s2 ? { left: Ne(e, t, "left"), right: Ne(e, t, "right"), top: Ne(s2, t, "top"), bottom: Ne(s2, t, "bottom") } : t;
}
function Ln() {
  return T3(qt.instances, (i4) => i4._plugins.invalidate());
}
function qr(i4, t, e) {
  let { startAngle: s2, pixelMargin: n2, x: o2, y: a2, outerRadius: r, innerRadius: l4 } = t, c3 = n2 / r;
  i4.beginPath(), i4.arc(o2, a2, r, s2 - c3, e + c3), l4 > n2 ? (c3 = n2 / l4, i4.arc(o2, a2, l4, e + c3, s2 - c3, true)) : i4.arc(o2, a2, n2, e + N3, s2 - N3), i4.closePath(), i4.clip();
}
function Gr(i4) {
  return Re(i4, ["outerStart", "outerEnd", "innerStart", "innerEnd"]);
}
function Jr(i4, t, e, s2) {
  let n2 = Gr(i4.options.borderRadius), o2 = (e - t) / 2, a2 = Math.min(o2, s2 * t / 2), r = (l4) => {
    let c3 = (e - Math.min(o2, l4)) * s2 / 2;
    return $3(l4, 0, Math.min(o2, c3));
  };
  return { outerStart: r(n2.outerStart), outerEnd: r(n2.outerEnd), innerStart: $3(n2.innerStart, 0, a2), innerEnd: $3(n2.innerEnd, 0, a2) };
}
function Xt(i4, t, e, s2) {
  return { x: e + i4 * Math.cos(t), y: s2 + i4 * Math.sin(t) };
}
function Je(i4, t, e, s2, n2, o2) {
  let { x: a2, y: r, startAngle: l4, pixelMargin: c3, innerRadius: h5 } = t, d4 = Math.max(t.outerRadius + s2 + e - c3, 0), u2 = h5 > 0 ? h5 + s2 + e + c3 : 0, f3 = 0, g4 = n2 - l4;
  if (s2) {
    let R4 = h5 > 0 ? h5 - s2 : 0, B4 = d4 > 0 ? d4 - s2 : 0, H4 = (R4 + B4) / 2, it = H4 !== 0 ? g4 * H4 / (H4 + s2) : g4;
    f3 = (g4 - it) / 2;
  }
  let p5 = Math.max(1e-3, g4 * d4 - e / z2) / d4, m5 = (g4 - p5) / 2, b4 = l4 + m5 + f3, _4 = n2 - m5 - f3, { outerStart: v5, outerEnd: y5, innerStart: x4, innerEnd: M4 } = Jr(t, u2, d4, _4 - b4), k4 = d4 - v5, S5 = d4 - y5, w4 = b4 + v5 / k4, D5 = _4 - y5 / S5, C5 = u2 + x4, A4 = u2 + M4, U4 = b4 + x4 / C5, tt = _4 - M4 / A4;
  if (i4.beginPath(), o2) {
    let R4 = (w4 + D5) / 2;
    if (i4.arc(a2, r, d4, w4, R4), i4.arc(a2, r, d4, R4, D5), y5 > 0) {
      let K3 = Xt(S5, D5, a2, r);
      i4.arc(K3.x, K3.y, y5, D5, _4 + N3);
    }
    let B4 = Xt(A4, _4, a2, r);
    if (i4.lineTo(B4.x, B4.y), M4 > 0) {
      let K3 = Xt(A4, tt, a2, r);
      i4.arc(K3.x, K3.y, M4, _4 + N3, tt + Math.PI);
    }
    let H4 = (_4 - M4 / u2 + (b4 + x4 / u2)) / 2;
    if (i4.arc(a2, r, u2, _4 - M4 / u2, H4, true), i4.arc(a2, r, u2, H4, b4 + x4 / u2, true), x4 > 0) {
      let K3 = Xt(C5, U4, a2, r);
      i4.arc(K3.x, K3.y, x4, U4 + Math.PI, b4 - N3);
    }
    let it = Xt(k4, b4, a2, r);
    if (i4.lineTo(it.x, it.y), v5 > 0) {
      let K3 = Xt(k4, w4, a2, r);
      i4.arc(K3.x, K3.y, v5, b4 - N3, w4);
    }
  } else {
    i4.moveTo(a2, r);
    let R4 = Math.cos(w4) * d4 + a2, B4 = Math.sin(w4) * d4 + r;
    i4.lineTo(R4, B4);
    let H4 = Math.cos(D5) * d4 + a2, it = Math.sin(D5) * d4 + r;
    i4.lineTo(H4, it);
  }
  i4.closePath();
}
function Qr(i4, t, e, s2, n2) {
  let { fullCircles: o2, startAngle: a2, circumference: r } = t, l4 = t.endAngle;
  if (o2) {
    Je(i4, t, e, s2, l4, n2);
    for (let c3 = 0; c3 < o2; ++c3)
      i4.fill();
    isNaN(r) || (l4 = a2 + (r % F3 || F3));
  }
  return Je(i4, t, e, s2, l4, n2), i4.fill(), l4;
}
function Zr(i4, t, e, s2, n2) {
  let { fullCircles: o2, startAngle: a2, circumference: r, options: l4 } = t, { borderWidth: c3, borderJoinStyle: h5, borderDash: d4, borderDashOffset: u2 } = l4, f3 = l4.borderAlign === "inner";
  if (!c3)
    return;
  i4.setLineDash(d4 || []), i4.lineDashOffset = u2, f3 ? (i4.lineWidth = c3 * 2, i4.lineJoin = h5 || "round") : (i4.lineWidth = c3, i4.lineJoin = h5 || "bevel");
  let g4 = t.endAngle;
  if (o2) {
    Je(i4, t, e, s2, g4, n2);
    for (let p5 = 0; p5 < o2; ++p5)
      i4.stroke();
    isNaN(r) || (g4 = a2 + (r % F3 || F3));
  }
  f3 && qr(i4, t, g4), o2 || (Je(i4, t, e, s2, g4, n2), i4.stroke());
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
  let s2 = i4.length, { start: n2 = 0, end: o2 = s2 - 1 } = e, { start: a2, end: r } = t, l4 = Math.max(n2, a2), c3 = Math.min(o2, r), h5 = n2 < a2 && o2 < a2 || n2 > r && o2 > r;
  return { count: s2, start: l4, loop: t.loop, ilen: c3 < l4 && !h5 ? s2 + c3 - l4 : c3 - l4 };
}
function il(i4, t, e, s2) {
  let { points: n2, options: o2 } = t, { count: a2, start: r, loop: l4, ilen: c3 } = po(n2, e, s2), h5 = el(o2), { move: d4 = true, reverse: u2 } = s2 || {}, f3, g4, p5;
  for (f3 = 0; f3 <= c3; ++f3)
    g4 = n2[(r + (u2 ? c3 - f3 : f3)) % a2], !g4.skip && (d4 ? (i4.moveTo(g4.x, g4.y), d4 = false) : h5(i4, p5, g4, u2, o2.stepped), p5 = g4);
  return l4 && (g4 = n2[(r + (u2 ? c3 : 0)) % a2], h5(i4, p5, g4, u2, o2.stepped)), !!l4;
}
function sl(i4, t, e, s2) {
  let n2 = t.points, { count: o2, start: a2, ilen: r } = po(n2, e, s2), { move: l4 = true, reverse: c3 } = s2 || {}, h5 = 0, d4 = 0, u2, f3, g4, p5, m5, b4, _4 = (y5) => (a2 + (c3 ? r - y5 : y5)) % o2, v5 = () => {
    p5 !== m5 && (i4.lineTo(h5, m5), i4.lineTo(h5, p5), i4.lineTo(h5, b4));
  };
  for (l4 && (f3 = n2[_4(0)], i4.moveTo(f3.x, f3.y)), u2 = 0; u2 <= r; ++u2) {
    if (f3 = n2[_4(u2)], f3.skip)
      continue;
    let y5 = f3.x, x4 = f3.y, M4 = y5 | 0;
    M4 === g4 ? (x4 < p5 ? p5 = x4 : x4 > m5 && (m5 = x4), h5 = (d4 * h5 + y5) / ++d4) : (v5(), i4.lineTo(y5, x4), g4 = M4, d4 = 0, p5 = m5 = x4), b4 = x4;
  }
  v5();
}
function ns(i4) {
  let t = i4.options, e = t.borderDash && t.borderDash.length;
  return !i4._decimated && !i4._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !e ? sl : il;
}
function nl(i4) {
  return i4.stepped ? Qs : i4.tension || i4.cubicInterpolationMode === "monotone" ? Zs : _t;
}
function ol(i4, t, e, s2) {
  let n2 = t._path;
  n2 || (n2 = t._path = new Path2D(), t.path(n2, e, s2) && n2.closePath()), go(i4, t.options), i4.stroke(n2);
}
function al(i4, t, e, s2) {
  let { segments: n2, options: o2 } = t, a2 = ns(t);
  for (let r of n2)
    go(i4, o2, r.style), i4.beginPath(), a2(i4, t, r, { start: e, end: e + s2 - 1 }) && i4.closePath(), i4.stroke();
}
function ll(i4, t, e, s2) {
  rl && !t.options.segment ? ol(i4, t, e, s2) : al(i4, t, e, s2);
}
function Tn(i4, t, e, s2) {
  let n2 = i4.options, { [e]: o2 } = i4.getProps([e], s2);
  return Math.abs(t - o2) < n2.radius + n2.hitRadius;
}
function mo(i4, t) {
  let { x: e, y: s2, base: n2, width: o2, height: a2 } = i4.getProps(["x", "y", "base", "width", "height"], t), r, l4, c3, h5, d4;
  return i4.horizontal ? (d4 = a2 / 2, r = Math.min(e, n2), l4 = Math.max(e, n2), c3 = s2 - d4, h5 = s2 + d4) : (d4 = o2 / 2, r = e - d4, l4 = e + d4, c3 = Math.min(s2, n2), h5 = Math.max(s2, n2)), { left: r, top: c3, right: l4, bottom: h5 };
}
function St(i4, t, e, s2) {
  return i4 ? 0 : $3(t, e, s2);
}
function cl(i4, t, e) {
  let s2 = i4.options.borderWidth, n2 = i4.borderSkipped, o2 = vi(s2);
  return { t: St(n2.top, o2.top, 0, e), r: St(n2.right, o2.right, 0, t), b: St(n2.bottom, o2.bottom, 0, e), l: St(n2.left, o2.left, 0, t) };
}
function hl(i4, t, e) {
  let { enableBorderRadius: s2 } = i4.getProps(["enableBorderRadius"]), n2 = i4.options.borderRadius, o2 = Mt(n2), a2 = Math.min(t, e), r = i4.borderSkipped, l4 = s2 || O3(n2);
  return { topLeft: St(!l4 || r.top || r.left, o2.topLeft, 0, a2), topRight: St(!l4 || r.top || r.right, o2.topRight, 0, a2), bottomLeft: St(!l4 || r.bottom || r.left, o2.bottomLeft, 0, a2), bottomRight: St(!l4 || r.bottom || r.right, o2.bottomRight, 0, a2) };
}
function dl(i4) {
  let t = mo(i4), e = t.right - t.left, s2 = t.bottom - t.top, n2 = cl(i4, e / 2, s2 / 2), o2 = hl(i4, e / 2, s2 / 2);
  return { outer: { x: t.left, y: t.top, w: e, h: s2, radius: o2 }, inner: { x: t.left + n2.l, y: t.top + n2.t, w: e - n2.l - n2.r, h: s2 - n2.t - n2.b, radius: { topLeft: Math.max(0, o2.topLeft - Math.max(n2.t, n2.l)), topRight: Math.max(0, o2.topRight - Math.max(n2.t, n2.r)), bottomLeft: Math.max(0, o2.bottomLeft - Math.max(n2.b, n2.l)), bottomRight: Math.max(0, o2.bottomRight - Math.max(n2.b, n2.r)) } } };
}
function Bi(i4, t, e, s2) {
  let n2 = t === null, o2 = e === null, r = i4 && !(n2 && o2) && mo(i4, s2);
  return r && (n2 || lt(t, r.left, r.right)) && (o2 || lt(e, r.top, r.bottom));
}
function ul(i4) {
  return i4.topLeft || i4.topRight || i4.bottomLeft || i4.bottomRight;
}
function fl(i4, t) {
  i4.rect(t.x, t.y, t.w, t.h);
}
function Vi(i4, t, e = {}) {
  let s2 = i4.x !== e.x ? -t : 0, n2 = i4.y !== e.y ? -t : 0, o2 = (i4.x + i4.w !== e.x + e.w ? t : 0) - s2, a2 = (i4.y + i4.h !== e.y + e.h ? t : 0) - n2;
  return { x: i4.x + s2, y: i4.y + n2, w: i4.w + o2, h: i4.h + a2, radius: i4.radius };
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
  return (e, s2) => {
    let n2 = i4.getDatasetMeta(s2).controller;
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
function vl(i4, t, e, s2, n2) {
  let o2 = n2.samples || s2;
  if (o2 >= e)
    return i4.slice(t, t + e);
  let a2 = [], r = (e - 2) / (o2 - 2), l4 = 0, c3 = t + e - 1, h5 = t, d4, u2, f3, g4, p5;
  for (a2[l4++] = i4[h5], d4 = 0; d4 < o2 - 2; d4++) {
    let m5 = 0, b4 = 0, _4, v5 = Math.floor((d4 + 1) * r) + 1 + t, y5 = Math.min(Math.floor((d4 + 2) * r) + 1, e) + t, x4 = y5 - v5;
    for (_4 = v5; _4 < y5; _4++)
      m5 += i4[_4].x, b4 += i4[_4].y;
    m5 /= x4, b4 /= x4;
    let M4 = Math.floor(d4 * r) + 1 + t, k4 = Math.min(Math.floor((d4 + 1) * r) + 1, e) + t, { x: S5, y: w4 } = i4[h5];
    for (f3 = g4 = -1, _4 = M4; _4 < k4; _4++)
      g4 = 0.5 * Math.abs((S5 - m5) * (i4[_4].y - w4) - (S5 - i4[_4].x) * (b4 - w4)), g4 > f3 && (f3 = g4, u2 = i4[_4], p5 = _4);
    a2[l4++] = u2, h5 = p5;
  }
  return a2[l4++] = i4[c3], a2;
}
function Ml(i4, t, e, s2) {
  let n2 = 0, o2 = 0, a2, r, l4, c3, h5, d4, u2, f3, g4, p5, m5 = [], b4 = t + e - 1, _4 = i4[t].x, y5 = i4[b4].x - _4;
  for (a2 = t; a2 < t + e; ++a2) {
    r = i4[a2], l4 = (r.x - _4) / y5 * s2, c3 = r.y;
    let x4 = l4 | 0;
    if (x4 === h5)
      c3 < g4 ? (g4 = c3, d4 = a2) : c3 > p5 && (p5 = c3, u2 = a2), n2 = (o2 * n2 + r.x) / ++o2;
    else {
      let M4 = a2 - 1;
      if (!L3(d4) && !L3(u2)) {
        let k4 = Math.min(d4, u2), S5 = Math.max(d4, u2);
        k4 !== f3 && k4 !== M4 && m5.push({ ...i4[k4], x: n2 }), S5 !== f3 && S5 !== M4 && m5.push({ ...i4[S5], x: n2 });
      }
      a2 > 0 && M4 !== f3 && m5.push(i4[M4]), m5.push(r), h5 = x4, o2 = 0, g4 = p5 = c3, d4 = u2 = f3 = a2;
    }
  }
  return m5;
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
  let e = t.length, s2 = 0, n2, { iScale: o2 } = i4, { min: a2, max: r, minDefined: l4, maxDefined: c3 } = o2.getUserBounds();
  return l4 && (s2 = $3(ot(t, o2.axis, a2).lo, 0, e - 1)), c3 ? n2 = $3(ot(t, o2.axis, r).hi + 1, s2, e) - s2 : n2 = e - s2, { start: s2, count: n2 };
}
function wl(i4, t, e) {
  let s2 = i4.segments, n2 = i4.points, o2 = t.points, a2 = [];
  for (let r of s2) {
    let { start: l4, end: c3 } = r;
    c3 = ps(l4, c3, n2);
    let h5 = ls(e, n2[l4], n2[c3], r.loop);
    if (!t.segments) {
      a2.push({ source: r, target: h5, start: n2[l4], end: n2[c3] });
      continue;
    }
    let d4 = Li(t, h5);
    for (let u2 of d4) {
      let f3 = ls(e, o2[u2.start], o2[u2.end], u2.loop), g4 = Ai(r, n2, f3);
      for (let p5 of g4)
        a2.push({ source: p5, target: u2, start: { [e]: zn(h5, f3, "start", Math.max) }, end: { [e]: zn(h5, f3, "end", Math.min) } });
    }
  }
  return a2;
}
function ls(i4, t, e, s2) {
  if (s2)
    return;
  let n2 = t[i4], o2 = e[i4];
  return i4 === "angle" && (n2 = G3(n2), o2 = G3(o2)), { property: i4, start: n2, end: o2 };
}
function Pl(i4, t) {
  let { x: e = null, y: s2 = null } = i4 || {}, n2 = t.points, o2 = [];
  return t.segments.forEach(({ start: a2, end: r }) => {
    r = ps(a2, r, n2);
    let l4 = n2[a2], c3 = n2[r];
    s2 !== null ? (o2.push({ x: l4.x, y: s2 }), o2.push({ x: c3.x, y: s2 })) : e !== null && (o2.push({ x: e, y: l4.y }), o2.push({ x: e, y: c3.y }));
  }), o2;
}
function ps(i4, t, e) {
  for (; t > i4; t--) {
    let s2 = e[t];
    if (!isNaN(s2.x) && !isNaN(s2.y))
      break;
  }
  return t;
}
function zn(i4, t, e, s2) {
  return i4 && t ? s2(i4[e], t[e]) : i4 ? i4[e] : t ? t[e] : 0;
}
function yo(i4, t) {
  let e = [], s2 = false;
  return I3(i4) ? (s2 = true, e = i4) : e = Pl(i4, t), e.length ? new Gt({ points: e, options: { tension: 0 }, _loop: s2, _fullLoop: s2 }) : null;
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
  let s2 = Tl(i4);
  if (O3(s2))
    return isNaN(s2.value) ? false : s2;
  let n2 = parseFloat(s2);
  return V3(n2) && Math.floor(n2) === n2 ? Ol(s2[0], t, n2, e) : ["origin", "start", "end", "stack", "shape"].indexOf(s2) >= 0 && s2;
}
function Ol(i4, t, e, s2) {
  return (i4 === "-" || i4 === "+") && (e = t + e), e === t || e < 0 || e >= s2 ? false : e;
}
function Al(i4, t) {
  let e = null;
  return i4 === "start" ? e = t.bottom : i4 === "end" ? e = t.top : O3(i4) ? e = t.getPixelForValue(i4.value) : t.getBasePixel && (e = t.getBasePixel()), e;
}
function Ll(i4, t, e) {
  let s2;
  return i4 === "start" ? s2 = e : i4 === "end" ? s2 = t.options.reverse ? t.min : t.max : O3(i4) ? s2 = i4.value : s2 = t.getBaseValue(), s2;
}
function Tl(i4) {
  let t = i4.options, e = t.fill, s2 = P3(e && e.target, e);
  return s2 === void 0 && (s2 = !!t.backgroundColor), s2 === false || s2 === null ? false : s2 === true ? "origin" : s2;
}
function Rl(i4) {
  let { scale: t, index: e, line: s2 } = i4, n2 = [], o2 = s2.segments, a2 = s2.points, r = El(t, e);
  r.push(yo({ x: null, y: t.bottom }, s2));
  for (let l4 = 0; l4 < o2.length; l4++) {
    let c3 = o2[l4];
    for (let h5 = c3.start; h5 <= c3.end; h5++)
      Il(n2, a2[h5], r);
  }
  return new Gt({ points: n2, options: {} });
}
function El(i4, t) {
  let e = [], s2 = i4.getMatchingVisibleMetas("line");
  for (let n2 = 0; n2 < s2.length; n2++) {
    let o2 = s2[n2];
    if (o2.index === t)
      break;
    o2.hidden || e.unshift(o2.dataset);
  }
  return e;
}
function Il(i4, t, e) {
  let s2 = [];
  for (let n2 = 0; n2 < e.length; n2++) {
    let o2 = e[n2], { first: a2, last: r, point: l4 } = zl(o2, t, "x");
    if (!(!l4 || a2 && r)) {
      if (a2)
        s2.unshift(l4);
      else if (i4.push(l4), !r)
        break;
    }
  }
  i4.push(...s2);
}
function zl(i4, t, e) {
  let s2 = i4.interpolate(t, e);
  if (!s2)
    return {};
  let n2 = s2[e], o2 = i4.segments, a2 = i4.points, r = false, l4 = false;
  for (let c3 = 0; c3 < o2.length; c3++) {
    let h5 = o2[c3], d4 = a2[h5.start][e], u2 = a2[h5.end][e];
    if (lt(n2, d4, u2)) {
      r = n2 === d4, l4 = n2 === u2;
      break;
    }
  }
  return { first: r, last: l4, point: s2 };
}
function Fl(i4) {
  let { chart: t, fill: e, line: s2 } = i4;
  if (V3(e))
    return Bl(t, e);
  if (e === "stack")
    return Rl(i4);
  if (e === "shape")
    return true;
  let n2 = Vl(i4);
  return n2 instanceof Qe ? n2 : yo(n2, s2);
}
function Bl(i4, t) {
  let e = i4.getDatasetMeta(t);
  return e && i4.isDatasetVisible(t) ? e.dataset : null;
}
function Vl(i4) {
  return (i4.scale || {}).getPointPositionForValue ? Nl(i4) : Wl(i4);
}
function Wl(i4) {
  let { scale: t = {}, fill: e } = i4, s2 = Al(e, t);
  if (V3(s2)) {
    let n2 = t.isHorizontal();
    return { x: n2 ? s2 : null, y: n2 ? null : s2 };
  }
  return null;
}
function Nl(i4) {
  let { scale: t, fill: e } = i4, s2 = t.options, n2 = t.getLabels().length, o2 = s2.reverse ? t.max : t.min, a2 = Ll(e, t, o2), r = [];
  if (s2.grid.circular) {
    let l4 = t.getPointPositionForValue(0, o2);
    return new Qe({ x: l4.x, y: l4.y, radius: t.getDistanceFromCenterForValue(a2) });
  }
  for (let l4 = 0; l4 < n2; ++l4)
    r.push(t.getPointPositionForValue(l4, a2));
  return r;
}
function Wi(i4, t, e) {
  let s2 = Fl(t), { line: n2, scale: o2, axis: a2 } = t, r = n2.options, l4 = r.fill, c3 = r.backgroundColor, { above: h5 = c3, below: d4 = c3 } = l4 || {};
  s2 && n2.points.length && (ne2(i4, e), Hl(i4, { line: n2, target: s2, above: h5, below: d4, area: e, scale: o2, axis: a2 }), oe(i4));
}
function Hl(i4, t) {
  let { line: e, target: s2, above: n2, below: o2, area: a2, scale: r } = t, l4 = e._loop ? "angle" : t.axis;
  i4.save(), l4 === "x" && o2 !== n2 && (Bn(i4, s2, a2.top), Vn(i4, { line: e, target: s2, color: n2, scale: r, property: l4 }), i4.restore(), i4.save(), Bn(i4, s2, a2.bottom)), Vn(i4, { line: e, target: s2, color: o2, scale: r, property: l4 }), i4.restore();
}
function Bn(i4, t, e) {
  let { segments: s2, points: n2 } = t, o2 = true, a2 = false;
  i4.beginPath();
  for (let r of s2) {
    let { start: l4, end: c3 } = r, h5 = n2[l4], d4 = n2[ps(l4, c3, n2)];
    o2 ? (i4.moveTo(h5.x, h5.y), o2 = false) : (i4.lineTo(h5.x, e), i4.lineTo(h5.x, h5.y)), a2 = !!t.pathSegment(i4, r, { move: a2 }), a2 ? i4.closePath() : i4.lineTo(d4.x, e);
  }
  i4.lineTo(t.first().x, e), i4.closePath(), i4.clip();
}
function Vn(i4, t) {
  let { line: e, target: s2, property: n2, color: o2, scale: a2 } = t, r = wl(e, s2, n2);
  for (let { source: l4, target: c3, start: h5, end: d4 } of r) {
    let { style: { backgroundColor: u2 = o2 } = {} } = l4, f3 = s2 !== true;
    i4.save(), i4.fillStyle = u2, jl(i4, a2, f3 && ls(n2, h5, d4)), i4.beginPath();
    let g4 = !!e.pathSegment(i4, l4), p5;
    if (f3) {
      g4 ? i4.closePath() : Wn(i4, s2, d4, n2);
      let m5 = !!s2.pathSegment(i4, c3, { move: g4, reverse: true });
      p5 = g4 && m5, p5 || Wn(i4, s2, h5, n2);
    }
    i4.closePath(), i4.fill(p5 ? "evenodd" : "nonzero"), i4.restore();
  }
}
function jl(i4, t, e) {
  let { top: s2, bottom: n2 } = t.chart.chartArea, { property: o2, start: a2, end: r } = e || {};
  o2 === "x" && (i4.beginPath(), i4.rect(a2, s2, r - a2, n2 - s2), i4.clip());
}
function Wn(i4, t, e, s2) {
  let n2 = t.interpolate(e, s2);
  n2 && i4.lineTo(n2.x, n2.y);
}
function Yl(i4, t, e, s2, n2) {
  let o2 = Xl(s2, i4, t, e), a2 = Kl(n2, s2, t.lineHeight);
  return { itemWidth: o2, itemHeight: a2 };
}
function Xl(i4, t, e, s2) {
  let n2 = i4.text;
  return n2 && typeof n2 != "string" && (n2 = n2.reduce((o2, a2) => o2.length > a2.length ? o2 : a2)), t + e.size / 2 + s2.measureText(n2).width;
}
function Kl(i4, t, e) {
  let s2 = i4;
  return typeof t.text != "string" && (s2 = vo(t, e)), s2;
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
  let { element: e, datasetIndex: s2, index: n2 } = t, o2 = i4.getDatasetMeta(s2).controller, { label: a2, value: r } = o2.getLabelAndValue(n2);
  return { chart: i4, label: a2, parsed: o2.getParsed(n2), raw: i4.data.datasets[s2].data[n2], formattedValue: r, dataset: o2.getDataset(), dataIndex: n2, datasetIndex: s2, element: e };
}
function Hn(i4, t) {
  let e = i4.chart.ctx, { body: s2, footer: n2, title: o2 } = i4, { boxWidth: a2, boxHeight: r } = t, l4 = j3(t.bodyFont), c3 = j3(t.titleFont), h5 = j3(t.footerFont), d4 = o2.length, u2 = n2.length, f3 = s2.length, g4 = X3(t.padding), p5 = g4.height, m5 = 0, b4 = s2.reduce((y5, x4) => y5 + x4.before.length + x4.lines.length + x4.after.length, 0);
  if (b4 += i4.beforeBody.length + i4.afterBody.length, d4 && (p5 += d4 * c3.lineHeight + (d4 - 1) * t.titleSpacing + t.titleMarginBottom), b4) {
    let y5 = t.displayColors ? Math.max(r, l4.lineHeight) : l4.lineHeight;
    p5 += f3 * y5 + (b4 - f3) * l4.lineHeight + (b4 - 1) * t.bodySpacing;
  }
  u2 && (p5 += t.footerMarginTop + u2 * h5.lineHeight + (u2 - 1) * t.footerSpacing);
  let _4 = 0, v5 = function(y5) {
    m5 = Math.max(m5, e.measureText(y5).width + _4);
  };
  return e.save(), e.font = c3.string, T3(i4.title, v5), e.font = l4.string, T3(i4.beforeBody.concat(i4.afterBody), v5), _4 = t.displayColors ? a2 + 2 + t.boxPadding : 0, T3(s2, (y5) => {
    T3(y5.before, v5), T3(y5.lines, v5), T3(y5.after, v5);
  }), _4 = 0, e.font = h5.string, T3(i4.footer, v5), e.restore(), m5 += g4.width, { width: m5, height: p5 };
}
function ec(i4, t) {
  let { y: e, height: s2 } = t;
  return e < s2 / 2 ? "top" : e > i4.height - s2 / 2 ? "bottom" : "center";
}
function ic(i4, t, e, s2) {
  let { x: n2, width: o2 } = s2, a2 = e.caretSize + e.caretPadding;
  if (i4 === "left" && n2 + o2 + a2 > t.width || i4 === "right" && n2 - o2 - a2 < 0)
    return true;
}
function sc(i4, t, e, s2) {
  let { x: n2, width: o2 } = e, { width: a2, chartArea: { left: r, right: l4 } } = i4, c3 = "center";
  return s2 === "center" ? c3 = n2 <= (r + l4) / 2 ? "left" : "right" : n2 <= o2 / 2 ? c3 = "left" : n2 >= a2 - o2 / 2 && (c3 = "right"), ic(c3, i4, t, e) && (c3 = "center"), c3;
}
function jn(i4, t, e) {
  let s2 = e.yAlign || t.yAlign || ec(i4, e);
  return { xAlign: e.xAlign || t.xAlign || sc(i4, t, e, s2), yAlign: s2 };
}
function nc(i4, t) {
  let { x: e, width: s2 } = i4;
  return t === "right" ? e -= s2 : t === "center" && (e -= s2 / 2), e;
}
function oc(i4, t, e) {
  let { y: s2, height: n2 } = i4;
  return t === "top" ? s2 += e : t === "bottom" ? s2 -= n2 + e : s2 -= n2 / 2, s2;
}
function $n(i4, t, e, s2) {
  let { caretSize: n2, caretPadding: o2, cornerRadius: a2 } = i4, { xAlign: r, yAlign: l4 } = e, c3 = n2 + o2, { topLeft: h5, topRight: d4, bottomLeft: u2, bottomRight: f3 } = Mt(a2), g4 = nc(t, r), p5 = oc(t, l4, c3);
  return l4 === "center" ? r === "left" ? g4 += c3 : r === "right" && (g4 -= c3) : r === "left" ? g4 -= Math.max(h5, u2) + n2 : r === "right" && (g4 += Math.max(d4, f3) + n2), { x: $3(g4, 0, s2.width - t.width), y: $3(p5, 0, s2.height - t.height) };
}
function je(i4, t, e) {
  let s2 = X3(e.padding);
  return t === "center" ? i4.x + i4.width / 2 : t === "right" ? i4.x + i4.width - s2.right : i4.x + s2.left;
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
function Q3(i4, t, e, s2) {
  let n2 = i4[t].call(e, s2);
  return typeof n2 > "u" ? Mo[t].call(e, s2) : n2;
}
function hc(i4, t, e, s2) {
  let n2 = i4.indexOf(t);
  if (n2 === -1)
    return cc(i4, t, e, s2);
  let o2 = i4.lastIndexOf(t);
  return n2 !== o2 ? e : n2;
}
function Xn(i4) {
  let t = this.getLabels();
  return i4 >= 0 && i4 < t.length ? t[i4] : i4;
}
function uc(i4, t) {
  let e = [], { bounds: n2, step: o2, min: a2, max: r, precision: l4, count: c3, maxTicks: h5, maxDigits: d4, includeBounds: u2 } = i4, f3 = o2 || 1, g4 = h5 - 1, { min: p5, max: m5 } = t, b4 = !L3(a2), _4 = !L3(r), v5 = !L3(c3), y5 = (m5 - p5) / (d4 + 1), x4 = ri((m5 - p5) / g4 / f3) * f3, M4, k4, S5, w4;
  if (x4 < 1e-14 && !b4 && !_4)
    return [{ value: p5 }, { value: m5 }];
  w4 = Math.ceil(m5 / x4) - Math.floor(p5 / x4), w4 > g4 && (x4 = ri(w4 * x4 / g4 / f3) * f3), L3(l4) || (M4 = Math.pow(10, l4), x4 = Math.ceil(x4 * M4) / M4), n2 === "ticks" ? (k4 = Math.floor(p5 / x4) * x4, S5 = Math.ceil(m5 / x4) * x4) : (k4 = p5, S5 = m5), b4 && _4 && o2 && Ts((r - a2) / o2, x4 / 1e3) ? (w4 = Math.round(Math.min((r - a2) / x4, h5)), x4 = (r - a2) / w4, k4 = a2, S5 = r) : v5 ? (k4 = b4 ? a2 : k4, S5 = _4 ? r : S5, w4 = c3 - 1, x4 = (S5 - k4) / w4) : (w4 = (S5 - k4) / x4, Ht(w4, Math.round(w4), x4 / 1e3) ? w4 = Math.round(w4) : w4 = Math.ceil(w4));
  let D5 = Math.max(ci(x4), ci(k4));
  M4 = Math.pow(10, L3(l4) ? D5 : l4), k4 = Math.round(k4 * M4) / M4, S5 = Math.round(S5 * M4) / M4;
  let C5 = 0;
  for (b4 && (u2 && k4 !== a2 ? (e.push({ value: a2 }), k4 < a2 && C5++, Ht(Math.round((k4 + C5 * x4) * M4) / M4, a2, Kn(a2, y5, i4)) && C5++) : k4 < a2 && C5++); C5 < w4; ++C5) {
    let A4 = Math.round((k4 + C5 * x4) * M4) / M4;
    if (_4 && A4 > r)
      break;
    e.push({ value: A4 });
  }
  return _4 && u2 && S5 !== r ? e.length && Ht(e[e.length - 1].value, r, Kn(r, y5, i4)) ? e[e.length - 1].value = r : e.push({ value: r }) : (!_4 || S5 === r) && e.push({ value: S5 }), e;
}
function Kn(i4, t, { horizontal: e, minRotation: s2 }) {
  let n2 = et(s2), o2 = (e ? Math.sin(n2) : Math.cos(n2)) || 1e-3, a2 = 0.75 * t * ("" + i4).length;
  return Math.min(t / o2, a2);
}
function qn(i4) {
  return i4 / Math.pow(10, me(i4)) === 1;
}
function Gn(i4, t, e) {
  let s2 = Math.pow(10, e), n2 = Math.floor(i4 / s2);
  return Math.ceil(t / s2) - n2;
}
function fc(i4, t) {
  let e = t - i4, s2 = me(e);
  for (; Gn(i4, t, s2) > 10; )
    s2++;
  for (; Gn(i4, t, s2) < 10; )
    s2--;
  return Math.min(s2, me(i4));
}
function gc(i4, { min: t, max: e }) {
  t = J3(i4.min, t);
  let s2 = [], n2 = me(t), o2 = fc(t, e), a2 = o2 < 0 ? Math.pow(10, Math.abs(o2)) : 1, r = Math.pow(10, o2), l4 = n2 > o2 ? Math.pow(10, n2) : 0, c3 = Math.round((t - l4) * a2) / a2, h5 = Math.floor((t - l4) / r / 10) * r * 10, d4 = Math.floor((c3 - h5) / Math.pow(10, o2)), u2 = J3(i4.min, Math.round((l4 + h5 + d4 * Math.pow(10, o2)) * a2) / a2);
  for (; u2 < e; )
    s2.push({ value: u2, major: qn(u2), significand: d4 }), d4 >= 10 ? d4 = d4 < 15 ? 15 : 20 : d4++, d4 >= 20 && (o2++, d4 = 2, a2 = o2 >= 0 ? 1 : a2), u2 = Math.round((l4 + h5 + d4 * Math.pow(10, o2)) * a2) / a2;
  let f3 = J3(i4.max, u2);
  return s2.push({ value: f3, major: qn(f3), significand: d4 }), s2;
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
function Jn(i4, t, e, s2, n2) {
  return i4 === s2 || i4 === n2 ? { start: t - e / 2, end: t + e / 2 } : i4 < s2 || i4 > n2 ? { start: t - e, end: t } : { start: t, end: t + e };
}
function mc(i4) {
  let t = { l: i4.left + i4._padding.left, r: i4.right - i4._padding.right, t: i4.top + i4._padding.top, b: i4.bottom - i4._padding.bottom }, e = Object.assign({}, t), s2 = [], n2 = [], o2 = i4._pointLabels.length, a2 = i4.options.pointLabels, r = a2.centerPointLabels ? z2 / o2 : 0;
  for (let l4 = 0; l4 < o2; l4++) {
    let c3 = a2.setContext(i4.getPointLabelContext(l4));
    n2[l4] = c3.padding;
    let h5 = i4.getPointPosition(l4, i4.drawingArea + n2[l4], r), d4 = j3(c3.font), u2 = pc(i4.ctx, d4, i4._pointLabels[l4]);
    s2[l4] = u2;
    let f3 = G3(i4.getIndexAngle(l4) + r), g4 = Math.round(Ce(f3)), p5 = Jn(g4, h5.x, u2.w, 0, 180), m5 = Jn(g4, h5.y, u2.h, 90, 270);
    bc(e, t, f3, p5, m5);
  }
  i4.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b), i4._pointLabelItems = yc(i4, s2, n2);
}
function bc(i4, t, e, s2, n2) {
  let o2 = Math.abs(Math.sin(e)), a2 = Math.abs(Math.cos(e)), r = 0, l4 = 0;
  s2.start < t.l ? (r = (t.l - s2.start) / o2, i4.l = Math.min(i4.l, t.l - r)) : s2.end > t.r && (r = (s2.end - t.r) / o2, i4.r = Math.max(i4.r, t.r + r)), n2.start < t.t ? (l4 = (t.t - n2.start) / a2, i4.t = Math.min(i4.t, t.t - l4)) : n2.end > t.b && (l4 = (n2.end - t.b) / a2, i4.b = Math.max(i4.b, t.b + l4));
}
function _c(i4, t, e) {
  let s2 = i4.drawingArea, { extra: n2, additionalAngle: o2, padding: a2, size: r } = e, l4 = i4.getPointPosition(t, s2 + n2 + a2, o2), c3 = Math.round(Ce(G3(l4.angle + N3))), h5 = kc(l4.y, r.h, c3), d4 = vc(c3), u2 = Mc(l4.x, r.w, d4);
  return { visible: true, x: l4.x, y: h5, textAlign: d4, left: u2, top: h5, right: u2 + r.w, bottom: h5 + r.h };
}
function xc(i4, t) {
  if (!t)
    return true;
  let { left: e, top: s2, right: n2, bottom: o2 } = i4;
  return !(at({ x: e, y: s2 }, t) || at({ x: e, y: o2 }, t) || at({ x: n2, y: s2 }, t) || at({ x: n2, y: o2 }, t));
}
function yc(i4, t, e) {
  let s2 = [], n2 = i4._pointLabels.length, o2 = i4.options, { centerPointLabels: a2, display: r } = o2.pointLabels, l4 = { extra: us(o2) / 2, additionalAngle: a2 ? z2 / n2 : 0 }, c3;
  for (let h5 = 0; h5 < n2; h5++) {
    l4.padding = e[h5], l4.size = t[h5];
    let d4 = _c(i4, h5, l4);
    s2.push(d4), r === "auto" && (d4.visible = xc(d4, c3), d4.visible && (c3 = d4));
  }
  return s2;
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
  let { left: s2, top: n2, right: o2, bottom: a2 } = e, { backdropColor: r } = t;
  if (!L3(r)) {
    let l4 = Mt(t.borderRadius), c3 = X3(t.backdropPadding);
    i4.fillStyle = r;
    let h5 = s2 - c3.left, d4 = n2 - c3.top, u2 = o2 - s2 + c3.width, f3 = a2 - n2 + c3.height;
    Object.values(l4).some((g4) => g4 !== 0) ? (i4.beginPath(), Ut(i4, { x: h5, y: d4, w: u2, h: f3, radius: l4 }), i4.fill()) : i4.fillRect(h5, d4, u2, f3);
  }
}
function wc(i4, t) {
  let { ctx: e, options: { pointLabels: s2 } } = i4;
  for (let n2 = t - 1; n2 >= 0; n2--) {
    let o2 = i4._pointLabelItems[n2];
    if (!o2.visible)
      continue;
    let a2 = s2.setContext(i4.getPointLabelContext(n2));
    Sc(e, a2, o2);
    let r = j3(a2.font), { x: l4, y: c3, textAlign: h5 } = o2;
    vt(e, i4._pointLabels[n2], l4, c3 + r.lineHeight / 2, r, { color: a2.color, textAlign: h5, textBaseline: "middle" });
  }
}
function ko(i4, t, e, s2) {
  let { ctx: n2 } = i4;
  if (e)
    n2.arc(i4.xCenter, i4.yCenter, t, 0, F3);
  else {
    let o2 = i4.getPointPosition(0, t);
    n2.moveTo(o2.x, o2.y);
    for (let a2 = 1; a2 < s2; a2++)
      o2 = i4.getPointPosition(a2, t), n2.lineTo(o2.x, o2.y);
  }
}
function Pc(i4, t, e, s2, n2) {
  let o2 = i4.ctx, a2 = t.circular, { color: r, lineWidth: l4 } = t;
  !a2 && !s2 || !r || !l4 || e < 0 || (o2.save(), o2.strokeStyle = r, o2.lineWidth = l4, o2.setLineDash(n2.dash), o2.lineDashOffset = n2.dashOffset, o2.beginPath(), ko(i4, e, a2, s2), o2.closePath(), o2.stroke(), o2.restore());
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
  let e = i4._adapter, { parser: s2, round: n2, isoWeekday: o2 } = i4._parseOpts, a2 = t;
  return typeof s2 == "function" && (a2 = s2(a2)), V3(a2) || (a2 = typeof s2 == "string" ? e.parse(a2, s2) : e.parse(a2)), a2 === null ? null : (n2 && (a2 = n2 === "week" && (At(o2) || o2 === true) ? e.startOf(a2, "isoWeek", o2) : e.startOf(a2, n2)), +a2);
}
function to(i4, t, e, s2) {
  let n2 = Z3.length;
  for (let o2 = Z3.indexOf(i4); o2 < n2 - 1; ++o2) {
    let a2 = ei[Z3[o2]], r = a2.steps ? a2.steps : Number.MAX_SAFE_INTEGER;
    if (a2.common && Math.ceil((e - t) / (r * a2.size)) <= s2)
      return Z3[o2];
  }
  return Z3[n2 - 1];
}
function Cc(i4, t, e, s2, n2) {
  for (let o2 = Z3.length - 1; o2 >= Z3.indexOf(e); o2--) {
    let a2 = Z3[o2];
    if (ei[a2].common && i4._adapter.diff(n2, s2, a2) >= t - 1)
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
    let { lo: s2, hi: n2 } = Oe(e, t), o2 = e[s2] >= t ? e[s2] : e[n2];
    i4[o2] = true;
  }
}
function Ac(i4, t, e, s2) {
  let n2 = i4._adapter, o2 = +n2.startOf(t[0].value, s2), a2 = t[t.length - 1].value, r, l4;
  for (r = o2; r <= a2; r = +n2.add(r, 1, s2))
    l4 = e[r], l4 >= 0 && (t[l4].major = true);
  return t;
}
function io(i4, t, e) {
  let s2 = [], n2 = {}, o2 = t.length, a2, r;
  for (a2 = 0; a2 < o2; ++a2)
    r = t[a2], n2[r] = a2, s2.push({ value: r, major: false });
  return o2 === 0 || !e ? s2 : Ac(i4, s2, n2, e);
}
function $e(i4, t, e) {
  let s2 = 0, n2 = i4.length - 1, o2, a2, r, l4;
  e ? (t >= i4[s2].pos && t <= i4[n2].pos && ({ lo: s2, hi: n2 } = ot(i4, "pos", t)), { pos: o2, time: r } = i4[s2], { pos: a2, time: l4 } = i4[n2]) : (t >= i4[s2].time && t <= i4[n2].time && ({ lo: s2, hi: n2 } = ot(i4, "time", t)), { time: o2, pos: r } = i4[s2], { time: a2, pos: l4 } = i4[n2]);
  let c3 = a2 - o2;
  return c3 ? r + (l4 - r) * (t - o2) / c3 : r;
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
    ot = (i4, t, e, s2) => Oe(i4, e, s2 ? (n2) => {
      let o2 = i4[n2][t];
      return o2 < e || o2 === e && i4[n2 + 1][t] === e;
    } : (n2) => i4[n2][t] < e);
    Es = (i4, t, e) => Oe(i4, e, (s2) => i4[s2][t] >= e);
    zs = ["push", "pop", "shift", "splice", "unshift"];
    fi = function() {
      return typeof window > "u" ? function(i4) {
        return i4();
      } : window.requestAnimationFrame;
    }();
    Ae = (i4) => i4 === "start" ? "left" : i4 === "end" ? "right" : "center";
    Y3 = (i4, t, e) => i4 === "start" ? t : i4 === "end" ? e : (t + e) / 2;
    Vs = (i4, t, e, s2) => i4 === (s2 ? "left" : "right") ? e : i4 === "center" ? (t + e) / 2 : t;
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
      let s2 = this.chart.options.locale, n2, o2 = i4;
      if (e.length > 1) {
        let c3 = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
        (c3 < 1e-4 || c3 > 1e15) && (n2 = "scientific"), o2 = Fo(i4, e);
      }
      let a2 = ft(Math.abs(o2)), r = isNaN(a2) ? 1 : Math.max(Math.min(-1 * Math.floor(a2), 20), 0), l4 = { notation: n2, minimumFractionDigits: r, maximumFractionDigits: r };
      return Object.assign(l4, this.options.ticks.format), $t(i4, s2, l4);
    }, logarithmic(i4, t, e) {
      if (i4 === 0)
        return "0";
      let s2 = e[t].significand || i4 / Math.pow(10, Math.floor(ft(i4)));
      return [1, 2, 3, 5, 10, 15].includes(s2) || t > 0.8 * e.length ? Ws.numeric.call(this, i4, t, e) : "";
    } };
    se = { formatters: Ws };
    xt = /* @__PURE__ */ Object.create(null);
    Le = /* @__PURE__ */ Object.create(null);
    ni = class {
      constructor(t, e) {
        this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = (s2) => s2.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"], this.font = { family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", size: 12, style: "normal", lineHeight: 1.2, weight: null }, this.hover = {}, this.hoverBackgroundColor = (s2, n2) => ii(n2.backgroundColor), this.hoverBorderColor = (s2, n2) => ii(n2.borderColor), this.hoverColor = (s2, n2) => ii(n2.color), this.indexAxis = "x", this.interaction = { mode: "nearest", intersect: true, includeInvisible: false }, this.maintainAspectRatio = true, this.onHover = null, this.onClick = null, this.parsing = true, this.plugins = {}, this.responsive = true, this.scale = void 0, this.scales = {}, this.showLine = true, this.drawActiveElementsOnTop = true, this.describe(t), this.apply(e);
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
      route(t, e, s2, n2) {
        let o2 = te(this, t), a2 = te(this, s2), r = "_" + e;
        Object.defineProperties(o2, { [r]: { value: o2[e], writable: true }, [e]: { enumerable: true, get() {
          let l4 = this[r], c3 = a2[n2];
          return O3(l4) ? Object.assign({}, c3, l4) : P3(l4, c3);
        }, set(l4) {
          this[r] = l4;
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
      }, xPlus(e, s2) {
        return e - s2;
      }, leftForLtr(e, s2) {
        return e - s2;
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
      _notify(t, e, s2, n2) {
        let o2 = e.listeners[n2], a2 = e.duration;
        o2.forEach((r) => r({ chart: t, initial: e.initial, numSteps: a2, currentStep: Math.min(s2 - e.start, a2) }));
      }
      _refresh() {
        this._request || (this._running = true, this._request = fi.call(window, () => {
          this._update(), this._request = null, this._running && this._refresh();
        }));
      }
      _update(t = Date.now()) {
        let e = 0;
        this._charts.forEach((s2, n2) => {
          if (!s2.running || !s2.items.length)
            return;
          let o2 = s2.items, a2 = o2.length - 1, r = false, l4;
          for (; a2 >= 0; --a2)
            l4 = o2[a2], l4._active ? (l4._total > s2.duration && (s2.duration = l4._total), l4.tick(t), r = true) : (o2[a2] = o2[o2.length - 1], o2.pop());
          r && (n2.draw(), this._notify(n2, s2, t, "progress")), o2.length || (s2.running = false, this._notify(n2, s2, t, "complete"), s2.initial = false), e += o2.length;
        }), this._lastDate = t, e === 0 && (this._running = false);
      }
      _getAnims(t) {
        let e = this._charts, s2 = e.get(t);
        return s2 || (s2 = { running: false, initial: true, items: [], listeners: { complete: [], progress: [] } }, e.set(t, s2)), s2;
      }
      listen(t, e, s2) {
        this._getAnims(t).listeners[e].push(s2);
      }
      add(t, e) {
        !e || !e.length || this._getAnims(t).items.push(...e);
      }
      has(t) {
        return this._getAnims(t).items.length > 0;
      }
      start(t) {
        let e = this._charts.get(t);
        e && (e.running = true, e.start = Date.now(), e.duration = e.items.reduce((s2, n2) => Math.max(s2, n2._duration), 0), this._refresh());
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
        let s2 = e.items, n2 = s2.length - 1;
        for (; n2 >= 0; --n2)
          s2[n2].cancel();
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
      let s2 = _i(i4 || sn), n2 = s2.valid && _i(t || sn);
      return n2 && n2.valid ? n2.mix(s2, e).hexString() : t;
    }, number(i4, t, e) {
      return i4 + (t - i4) * e;
    } };
    Hi = class {
      constructor(t, e, s2, n2) {
        let o2 = e[s2];
        n2 = Yt([t.to, n2, o2, t.from]);
        let a2 = Yt([t.from, o2, n2]);
        this._active = true, this._fn = t.fn || ya[t.type || typeof a2], this._easing = Ft[t.easing] || Ft.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = s2, this._from = a2, this._to = n2, this._promises = void 0;
      }
      active() {
        return this._active;
      }
      update(t, e, s2) {
        if (this._active) {
          this._notify(false);
          let n2 = this._target[this._prop], o2 = s2 - this._start, a2 = this._duration - o2;
          this._start = s2, this._duration = Math.floor(Math.max(a2, t.duration)), this._total += o2, this._loop = !!t.loop, this._to = Yt([t.to, e, n2, t.from]), this._from = Yt([t.from, n2, e]);
        }
      }
      cancel() {
        this._active && (this.tick(Date.now()), this._active = false, this._notify(false));
      }
      tick(t) {
        let e = t - this._start, s2 = this._duration, n2 = this._prop, o2 = this._from, a2 = this._loop, r = this._to, l4;
        if (this._active = o2 !== r && (a2 || e < s2), !this._active) {
          this._target[n2] = r, this._notify(true);
          return;
        }
        if (e < 0) {
          this._target[n2] = o2;
          return;
        }
        l4 = e / s2 % 2, l4 = a2 && l4 > 1 ? 2 - l4 : l4, l4 = this._easing(Math.min(1, Math.max(0, l4))), this._target[n2] = this._fn(o2, r, l4);
      }
      wait() {
        let t = this._promises || (this._promises = []);
        return new Promise((e, s2) => {
          t.push({ res: e, rej: s2 });
        });
      }
      _notify(t) {
        let e = t ? "res" : "rej", s2 = this._promises || [];
        for (let n2 = 0; n2 < s2.length; n2++)
          s2[n2][e]();
      }
    };
    Xe = class {
      constructor(t, e) {
        this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(e);
      }
      configure(t) {
        if (!O3(t))
          return;
        let e = Object.keys(W3.animation), s2 = this._properties;
        Object.getOwnPropertyNames(t).forEach((n2) => {
          let o2 = t[n2];
          if (!O3(o2))
            return;
          let a2 = {};
          for (let r of e)
            a2[r] = o2[r];
          (I3(o2.properties) && o2.properties || [n2]).forEach((r) => {
            (r === n2 || !s2.has(r)) && s2.set(r, a2);
          });
        });
      }
      _animateOptions(t, e) {
        let s2 = e.options, n2 = Ma(t, s2);
        if (!n2)
          return [];
        let o2 = this._createAnimations(n2, s2);
        return s2.$shared && va(t.options.$animations, s2).then(() => {
          t.options = s2;
        }, () => {
        }), o2;
      }
      _createAnimations(t, e) {
        let s2 = this._properties, n2 = [], o2 = t.$animations || (t.$animations = {}), a2 = Object.keys(e), r = Date.now(), l4;
        for (l4 = a2.length - 1; l4 >= 0; --l4) {
          let c3 = a2[l4];
          if (c3.charAt(0) === "$")
            continue;
          if (c3 === "options") {
            n2.push(...this._animateOptions(t, e));
            continue;
          }
          let h5 = e[c3], d4 = o2[c3], u2 = s2.get(c3);
          if (d4)
            if (u2 && d4.active()) {
              d4.update(u2, h5, r);
              continue;
            } else
              d4.cancel();
          if (!u2 || !u2.duration) {
            t[c3] = h5;
            continue;
          }
          o2[c3] = d4 = new Hi(u2, t, c3, h5), n2.push(d4);
        }
        return n2;
      }
      update(t, e) {
        if (this._properties.size === 0) {
          Object.assign(t, e);
          return;
        }
        let s2 = this._createAnimations(t, e);
        if (s2.length)
          return mt.add(this._chart, s2), true;
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
        let t = this.chart, e = this._cachedMeta, s2 = this.getDataset(), n2 = (d4, u2, f3, g4) => d4 === "x" ? u2 : d4 === "r" ? g4 : f3, o2 = e.xAxisID = P3(s2.xAxisID, Ti(t, "x")), a2 = e.yAxisID = P3(s2.yAxisID, Ti(t, "y")), r = e.rAxisID = P3(s2.rAxisID, Ti(t, "r")), l4 = e.indexAxis, c3 = e.iAxisID = n2(l4, o2, a2, r), h5 = e.vAxisID = n2(l4, a2, o2, r);
        e.xScale = this.getScaleForId(o2), e.yScale = this.getScaleForId(a2), e.rScale = this.getScaleForId(r), e.iScale = this.getScaleForId(c3), e.vScale = this.getScaleForId(h5);
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
        let t = this.getDataset(), e = t.data || (t.data = []), s2 = this._data;
        if (O3(e))
          this._data = wa(e);
        else if (s2 !== e) {
          if (s2) {
            di(s2, this);
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
        let e = this._cachedMeta, s2 = this.getDataset(), n2 = false;
        this._dataCheck();
        let o2 = e._stacked;
        e._stacked = an(e.vScale, e), e.stack !== s2.stack && (n2 = true, ae(e), e.stack = s2.stack), this._resyncElements(t), (n2 || o2 !== e._stacked) && ln(this, e._parsed);
      }
      configure() {
        let t = this.chart.config, e = t.datasetScopeKeys(this._type), s2 = t.getOptionScopes(this.getDataset(), e, true);
        this.options = t.createResolver(s2, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
      }
      parse(t, e) {
        let { _cachedMeta: s2, _data: n2 } = this, { iScale: o2, _stacked: a2 } = s2, r = o2.axis, l4 = t === 0 && e === n2.length ? true : s2._sorted, c3 = t > 0 && s2._parsed[t - 1], h5, d4, u2;
        if (this._parsing === false)
          s2._parsed = n2, s2._sorted = true, u2 = n2;
        else {
          I3(n2[t]) ? u2 = this.parseArrayData(s2, n2, t, e) : O3(n2[t]) ? u2 = this.parseObjectData(s2, n2, t, e) : u2 = this.parsePrimitiveData(s2, n2, t, e);
          let f3 = () => d4[r] === null || c3 && d4[r] < c3[r];
          for (h5 = 0; h5 < e; ++h5)
            s2._parsed[h5 + t] = d4 = u2[h5], l4 && (f3() && (l4 = false), c3 = d4);
          s2._sorted = l4;
        }
        a2 && ln(this, u2);
      }
      parsePrimitiveData(t, e, s2, n2) {
        let { iScale: o2, vScale: a2 } = t, r = o2.axis, l4 = a2.axis, c3 = o2.getLabels(), h5 = o2 === a2, d4 = new Array(n2), u2, f3, g4;
        for (u2 = 0, f3 = n2; u2 < f3; ++u2)
          g4 = u2 + s2, d4[u2] = { [r]: h5 || o2.parse(c3[g4], g4), [l4]: a2.parse(e[g4], g4) };
        return d4;
      }
      parseArrayData(t, e, s2, n2) {
        let { xScale: o2, yScale: a2 } = t, r = new Array(n2), l4, c3, h5, d4;
        for (l4 = 0, c3 = n2; l4 < c3; ++l4)
          h5 = l4 + s2, d4 = e[h5], r[l4] = { x: o2.parse(d4[0], h5), y: a2.parse(d4[1], h5) };
        return r;
      }
      parseObjectData(t, e, s2, n2) {
        let { xScale: o2, yScale: a2 } = t, { xAxisKey: r = "x", yAxisKey: l4 = "y" } = this._parsing, c3 = new Array(n2), h5, d4, u2, f3;
        for (h5 = 0, d4 = n2; h5 < d4; ++h5)
          u2 = h5 + s2, f3 = e[u2], c3[h5] = { x: o2.parse(gt(f3, r), u2), y: a2.parse(gt(f3, l4), u2) };
        return c3;
      }
      getParsed(t) {
        return this._cachedMeta._parsed[t];
      }
      getDataElement(t) {
        return this._cachedMeta.data[t];
      }
      applyStack(t, e, s2) {
        let n2 = this.chart, o2 = this._cachedMeta, a2 = e[t.axis], r = { keys: so(n2, true), values: e._stacks[t.axis]._visualValues };
        return on(r, a2, o2.index, { mode: s2 });
      }
      updateRangeFromParsed(t, e, s2, n2) {
        let o2 = s2[e.axis], a2 = o2 === null ? NaN : o2, r = n2 && s2._stacks[e.axis];
        n2 && r && (n2.values = r, a2 = on(n2, o2, this._cachedMeta.index)), t.min = Math.min(t.min, a2), t.max = Math.max(t.max, a2);
      }
      getMinMax(t, e) {
        let s2 = this._cachedMeta, n2 = s2._parsed, o2 = s2._sorted && t === s2.iScale, a2 = n2.length, r = this._getOtherScale(t), l4 = La(e, s2, this.chart), c3 = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY }, { min: h5, max: d4 } = Da(r), u2, f3;
        function g4() {
          f3 = n2[u2];
          let p5 = f3[r.axis];
          return !V3(f3[t.axis]) || h5 > p5 || d4 < p5;
        }
        for (u2 = 0; u2 < a2 && !(!g4() && (this.updateRangeFromParsed(c3, t, f3, l4), o2)); ++u2)
          ;
        if (o2) {
          for (u2 = a2 - 1; u2 >= 0; --u2)
            if (!g4()) {
              this.updateRangeFromParsed(c3, t, f3, l4);
              break;
            }
        }
        return c3;
      }
      getAllParsedValues(t) {
        let e = this._cachedMeta._parsed, s2 = [], n2, o2, a2;
        for (n2 = 0, o2 = e.length; n2 < o2; ++n2)
          a2 = e[n2][t.axis], V3(a2) && s2.push(a2);
        return s2;
      }
      getMaxOverflow() {
        return false;
      }
      getLabelAndValue(t) {
        let e = this._cachedMeta, s2 = e.iScale, n2 = e.vScale, o2 = this.getParsed(t);
        return { label: s2 ? "" + s2.getLabelForValue(o2[s2.axis]) : "", value: n2 ? "" + n2.getLabelForValue(o2[n2.axis]) : "" };
      }
      _update(t) {
        let e = this._cachedMeta;
        this.update(t || "default"), e._clip = Sa(P3(this.options.clip, ka(e.xScale, e.yScale, this.getMaxOverflow())));
      }
      update(t) {
      }
      draw() {
        let t = this._ctx, e = this.chart, s2 = this._cachedMeta, n2 = s2.data || [], o2 = e.chartArea, a2 = [], r = this._drawStart || 0, l4 = this._drawCount || n2.length - r, c3 = this.options.drawActiveElementsOnTop, h5;
        for (s2.dataset && s2.dataset.draw(t, o2, r, l4), h5 = r; h5 < r + l4; ++h5) {
          let d4 = n2[h5];
          d4.hidden || (d4.active && c3 ? a2.push(d4) : d4.draw(t, o2));
        }
        for (h5 = 0; h5 < a2.length; ++h5)
          a2[h5].draw(t, o2);
      }
      getStyle(t, e) {
        let s2 = e ? "active" : "default";
        return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(s2) : this.resolveDataElementOptions(t || 0, s2);
      }
      getContext(t, e, s2) {
        let n2 = this.getDataset(), o2;
        if (t >= 0 && t < this._cachedMeta.data.length) {
          let a2 = this._cachedMeta.data[t];
          o2 = a2.$context || (a2.$context = Aa(this.getContext(), t, a2)), o2.parsed = this.getParsed(t), o2.raw = n2.data[t], o2.index = o2.dataIndex = t;
        } else
          o2 = this.$context || (this.$context = Oa(this.chart.getContext(), this.index)), o2.dataset = n2, o2.index = o2.datasetIndex = this.index;
        return o2.active = !!e, o2.mode = s2, o2;
      }
      resolveDatasetElementOptions(t) {
        return this._resolveElementOptions(this.datasetElementType.id, t);
      }
      resolveDataElementOptions(t, e) {
        return this._resolveElementOptions(this.dataElementType.id, e, t);
      }
      _resolveElementOptions(t, e = "default", s2) {
        let n2 = e === "active", o2 = this._cachedDataOpts, a2 = t + "-" + e, r = o2[a2], l4 = this.enableOptionSharing && Nt(s2);
        if (r)
          return cn(r, l4);
        let c3 = this.chart.config, h5 = c3.datasetElementScopeKeys(this._type, t), d4 = n2 ? [`${t}Hover`, "hover", t, ""] : [t, ""], u2 = c3.getOptionScopes(this.getDataset(), h5), f3 = Object.keys(W3.elements[t]), g4 = () => this.getContext(s2, n2, e), p5 = c3.resolveNamedOptions(u2, f3, g4, d4);
        return p5.$shared && (p5.$shared = l4, o2[a2] = Object.freeze(cn(p5, l4))), p5;
      }
      _resolveAnimations(t, e, s2) {
        let n2 = this.chart, o2 = this._cachedDataOpts, a2 = `animation-${e}`, r = o2[a2];
        if (r)
          return r;
        let l4;
        if (n2.options.animation !== false) {
          let h5 = this.chart.config, d4 = h5.datasetAnimationScopeKeys(this._type, e), u2 = h5.getOptionScopes(this.getDataset(), d4);
          l4 = h5.createResolver(u2, this.getContext(t, s2, e));
        }
        let c3 = new Xe(n2, l4 && l4.animations);
        return l4 && l4._cacheable && (o2[a2] = Object.freeze(c3)), c3;
      }
      getSharedOptions(t) {
        if (t.$shared)
          return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
      }
      includeOptions(t, e) {
        return !e || Ri(t) || this.chart._animationsDisabled;
      }
      _getSharedOptions(t, e) {
        let s2 = this.resolveDataElementOptions(t, e), n2 = this._sharedOptions, o2 = this.getSharedOptions(s2), a2 = this.includeOptions(e, o2) || o2 !== n2;
        return this.updateSharedOptions(o2, e, s2), { sharedOptions: o2, includeOptions: a2 };
      }
      updateElement(t, e, s2, n2) {
        Ri(n2) ? Object.assign(t, s2) : this._resolveAnimations(e, n2).update(t, s2);
      }
      updateSharedOptions(t, e, s2) {
        t && !Ri(e) && this._resolveAnimations(void 0, e).update(t, s2);
      }
      _setStyle(t, e, s2, n2) {
        t.active = n2;
        let o2 = this.getStyle(e, n2);
        this._resolveAnimations(e, s2, n2).update(t, { options: !n2 && this.getSharedOptions(o2) || o2 });
      }
      removeHoverStyle(t, e, s2) {
        this._setStyle(t, s2, "active", false);
      }
      setHoverStyle(t, e, s2) {
        this._setStyle(t, s2, "active", true);
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
        let e = this._data, s2 = this._cachedMeta.data;
        for (let [r, l4, c3] of this._syncList)
          this[r](l4, c3);
        this._syncList = [];
        let n2 = s2.length, o2 = e.length, a2 = Math.min(o2, n2);
        a2 && this.parse(0, a2), o2 > n2 ? this._insertElements(n2, o2 - n2, t) : o2 < n2 && this._removeElements(o2, n2 - o2);
      }
      _insertElements(t, e, s2 = true) {
        let n2 = this._cachedMeta, o2 = n2.data, a2 = t + e, r, l4 = (c3) => {
          for (c3.length += e, r = c3.length - 1; r >= a2; r--)
            c3[r] = c3[r - e];
        };
        for (l4(o2), r = t; r < a2; ++r)
          o2[r] = new this.dataElementType();
        this._parsing && l4(n2._parsed), this.parse(t, e), s2 && this.updateElements(o2, t, e, "reset");
      }
      updateElements(t, e, s2, n2) {
      }
      _removeElements(t, e) {
        let s2 = this._cachedMeta;
        if (this._parsing) {
          let n2 = s2._parsed.splice(t, e);
          s2._stacked && ae(s2, n2);
        }
        s2.data.splice(t, e);
      }
      _sync(t) {
        if (this._parsing)
          this._syncList.push(t);
        else {
          let [e, s2, n2] = t;
          this[e](s2, n2);
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
        let s2 = arguments.length - 2;
        s2 && this._sync(["_insertElements", t, s2]);
      }
      _onDataUnshift() {
        this._sync(["_insertElements", 0, arguments.length]);
      }
    };
    ji = class extends dt {
      static id = "bar";
      static defaults = { datasetElementType: false, dataElementType: "bar", categoryPercentage: 0.8, barPercentage: 0.9, grouped: true, animations: { numbers: { type: "number", properties: ["x", "y", "base", "width", "height"] } } };
      static overrides = { scales: { _index_: { type: "category", offset: true, grid: { offset: true } }, _value_: { type: "linear", beginAtZero: true } } };
      parsePrimitiveData(t, e, s2, n2) {
        return hn(t, e, s2, n2);
      }
      parseArrayData(t, e, s2, n2) {
        return hn(t, e, s2, n2);
      }
      parseObjectData(t, e, s2, n2) {
        let { iScale: o2, vScale: a2 } = t, { xAxisKey: r = "x", yAxisKey: l4 = "y" } = this._parsing, c3 = o2.axis === "x" ? r : l4, h5 = a2.axis === "x" ? r : l4, d4 = [], u2, f3, g4, p5;
        for (u2 = s2, f3 = s2 + n2; u2 < f3; ++u2)
          p5 = e[u2], g4 = {}, g4[o2.axis] = o2.parse(gt(p5, c3), u2), d4.push(no(gt(p5, h5), g4, a2, u2));
        return d4;
      }
      updateRangeFromParsed(t, e, s2, n2) {
        super.updateRangeFromParsed(t, e, s2, n2);
        let o2 = s2._custom;
        o2 && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, o2.min), t.max = Math.max(t.max, o2.max));
      }
      getMaxOverflow() {
        return 0;
      }
      getLabelAndValue(t) {
        let e = this._cachedMeta, { iScale: s2, vScale: n2 } = e, o2 = this.getParsed(t), a2 = o2._custom, r = Ei(a2) ? "[" + a2.start + ", " + a2.end + "]" : "" + n2.getLabelForValue(o2[n2.axis]);
        return { label: "" + s2.getLabelForValue(o2[s2.axis]), value: r };
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
      updateElements(t, e, s2, n2) {
        let o2 = n2 === "reset", { index: a2, _cachedMeta: { vScale: r } } = this, l4 = r.getBasePixel(), c3 = r.isHorizontal(), h5 = this._getRuler(), { sharedOptions: d4, includeOptions: u2 } = this._getSharedOptions(e, n2);
        for (let f3 = e; f3 < e + s2; f3++) {
          let g4 = this.getParsed(f3), p5 = o2 || L3(g4[r.axis]) ? { base: l4, head: l4 } : this._calculateBarValuePixels(f3), m5 = this._calculateBarIndexPixels(f3, h5), b4 = (g4._stacks || {})[r.axis], _4 = { horizontal: c3, base: p5.base, enableBorderRadius: !b4 || Ei(g4._custom) || a2 === b4._top || a2 === b4._bottom, x: c3 ? p5.head : m5.center, y: c3 ? m5.center : p5.head, height: c3 ? m5.size : Math.abs(p5.size), width: c3 ? Math.abs(p5.size) : m5.size };
          u2 && (_4.options = d4 || this.resolveDataElementOptions(f3, t[f3].active ? "active" : n2));
          let v5 = _4.options || t[f3].options;
          Va(_4, v5, b4, a2), Na(_4, v5, h5.ratio), this.updateElement(t[f3], f3, _4, n2);
        }
      }
      _getStacks(t, e) {
        let { iScale: s2 } = this._cachedMeta, n2 = s2.getMatchingVisibleMetas(this._type).filter((l4) => l4.controller.options.grouped), o2 = s2.options.stacked, a2 = [], r = (l4) => {
          let c3 = l4.controller.getParsed(e), h5 = c3 && c3[l4.vScale.axis];
          if (L3(h5) || isNaN(h5))
            return true;
        };
        for (let l4 of n2)
          if (!(e !== void 0 && r(l4)) && ((o2 === false || a2.indexOf(l4.stack) === -1 || o2 === void 0 && l4.stack === void 0) && a2.push(l4.stack), l4.index === t))
            break;
        return a2.length || a2.push(void 0), a2;
      }
      _getStackCount(t) {
        return this._getStacks(void 0, t).length;
      }
      _getStackIndex(t, e, s2) {
        let n2 = this._getStacks(t, s2), o2 = e !== void 0 ? n2.indexOf(e) : -1;
        return o2 === -1 ? n2.length - 1 : o2;
      }
      _getRuler() {
        let t = this.options, e = this._cachedMeta, s2 = e.iScale, n2 = [], o2, a2;
        for (o2 = 0, a2 = e.data.length; o2 < a2; ++o2)
          n2.push(s2.getPixelForValue(this.getParsed(o2)[s2.axis], o2));
        let r = t.barThickness;
        return { min: r || Ra(e), pixels: n2, start: s2._startPixel, end: s2._endPixel, stackCount: this._getStackCount(), scale: s2, grouped: t.grouped, ratio: r ? 1 : t.categoryPercentage * t.barPercentage };
      }
      _calculateBarValuePixels(t) {
        let { _cachedMeta: { vScale: e, _stacked: s2, index: n2 }, options: { base: o2, minBarLength: a2 } } = this, r = o2 || 0, l4 = this.getParsed(t), c3 = l4._custom, h5 = Ei(c3), d4 = l4[e.axis], u2 = 0, f3 = s2 ? this.applyStack(e, l4, s2) : d4, g4, p5;
        f3 !== d4 && (u2 = f3 - d4, f3 = d4), h5 && (d4 = c3.barStart, f3 = c3.barEnd - c3.barStart, d4 !== 0 && st(d4) !== st(c3.barEnd) && (u2 = 0), u2 += d4);
        let m5 = !L3(o2) && !h5 ? o2 : u2, b4 = e.getPixelForValue(m5);
        if (this.chart.getDataVisibility(t) ? g4 = e.getPixelForValue(u2 + f3) : g4 = b4, p5 = g4 - b4, Math.abs(p5) < a2) {
          p5 = Fa(p5, e, r) * a2, d4 === r && (b4 -= p5 / 2);
          let _4 = e.getPixelForDecimal(0), v5 = e.getPixelForDecimal(1), y5 = Math.min(_4, v5), x4 = Math.max(_4, v5);
          b4 = Math.max(Math.min(b4, x4), y5), g4 = b4 + p5, s2 && !h5 && (l4._stacks[e.axis]._visualValues[n2] = e.getValueForPixel(g4) - e.getValueForPixel(b4));
        }
        if (b4 === e.getPixelForValue(r)) {
          let _4 = st(p5) * e.getLineWidthForValue(r) / 2;
          b4 += _4, p5 -= _4;
        }
        return { size: p5, base: b4, head: g4, center: g4 + p5 / 2 };
      }
      _calculateBarIndexPixels(t, e) {
        let s2 = e.scale, n2 = this.options, o2 = n2.skipNull, a2 = P3(n2.maxBarThickness, 1 / 0), r, l4;
        if (e.grouped) {
          let c3 = o2 ? this._getStackCount(t) : e.stackCount, h5 = n2.barThickness === "flex" ? Ia(t, e, n2, c3) : Ea(t, e, n2, c3), d4 = this._getStackIndex(this.index, this._cachedMeta.stack, o2 ? t : void 0);
          r = h5.start + h5.chunk * d4 + h5.chunk / 2, l4 = Math.min(a2, h5.chunk * h5.ratio);
        } else
          r = s2.getPixelForValue(this.getParsed(t)[s2.axis], t), l4 = Math.min(a2, e.min * e.ratio);
        return { base: r - l4 / 2, head: r + l4 / 2, center: r, size: l4 };
      }
      draw() {
        let t = this._cachedMeta, e = t.vScale, s2 = t.data, n2 = s2.length, o2 = 0;
        for (; o2 < n2; ++o2)
          this.getParsed(o2)[e.axis] !== null && s2[o2].draw(this._ctx);
      }
    };
    $i = class extends dt {
      static id = "bubble";
      static defaults = { datasetElementType: false, dataElementType: "point", animations: { numbers: { type: "number", properties: ["x", "y", "borderWidth", "radius"] } } };
      static overrides = { scales: { x: { type: "linear" }, y: { type: "linear" } } };
      initialize() {
        this.enableOptionSharing = true, super.initialize();
      }
      parsePrimitiveData(t, e, s2, n2) {
        let o2 = super.parsePrimitiveData(t, e, s2, n2);
        for (let a2 = 0; a2 < o2.length; a2++)
          o2[a2]._custom = this.resolveDataElementOptions(a2 + s2).radius;
        return o2;
      }
      parseArrayData(t, e, s2, n2) {
        let o2 = super.parseArrayData(t, e, s2, n2);
        for (let a2 = 0; a2 < o2.length; a2++) {
          let r = e[s2 + a2];
          o2[a2]._custom = P3(r[2], this.resolveDataElementOptions(a2 + s2).radius);
        }
        return o2;
      }
      parseObjectData(t, e, s2, n2) {
        let o2 = super.parseObjectData(t, e, s2, n2);
        for (let a2 = 0; a2 < o2.length; a2++) {
          let r = e[s2 + a2];
          o2[a2]._custom = P3(r && r.r && +r.r, this.resolveDataElementOptions(a2 + s2).radius);
        }
        return o2;
      }
      getMaxOverflow() {
        let t = this._cachedMeta.data, e = 0;
        for (let s2 = t.length - 1; s2 >= 0; --s2)
          e = Math.max(e, t[s2].size(this.resolveDataElementOptions(s2)) / 2);
        return e > 0 && e;
      }
      getLabelAndValue(t) {
        let e = this._cachedMeta, s2 = this.chart.data.labels || [], { xScale: n2, yScale: o2 } = e, a2 = this.getParsed(t), r = n2.getLabelForValue(a2.x), l4 = o2.getLabelForValue(a2.y), c3 = a2._custom;
        return { label: s2[t] || "", value: "(" + r + ", " + l4 + (c3 ? ", " + c3 : "") + ")" };
      }
      update(t) {
        let e = this._cachedMeta.data;
        this.updateElements(e, 0, e.length, t);
      }
      updateElements(t, e, s2, n2) {
        let o2 = n2 === "reset", { iScale: a2, vScale: r } = this._cachedMeta, { sharedOptions: l4, includeOptions: c3 } = this._getSharedOptions(e, n2), h5 = a2.axis, d4 = r.axis;
        for (let u2 = e; u2 < e + s2; u2++) {
          let f3 = t[u2], g4 = !o2 && this.getParsed(u2), p5 = {}, m5 = p5[h5] = o2 ? a2.getPixelForDecimal(0.5) : a2.getPixelForValue(g4[h5]), b4 = p5[d4] = o2 ? r.getBasePixel() : r.getPixelForValue(g4[d4]);
          p5.skip = isNaN(m5) || isNaN(b4), c3 && (p5.options = l4 || this.resolveDataElementOptions(u2, f3.active ? "active" : n2), o2 && (p5.options.radius = 0)), this.updateElement(f3, u2, p5, n2);
        }
      }
      resolveDataElementOptions(t, e) {
        let s2 = this.getParsed(t), n2 = super.resolveDataElementOptions(t, e);
        n2.$shared && (n2 = Object.assign({}, n2, { $shared: false }));
        let o2 = n2.radius;
        return e !== "active" && (n2.radius = 0), n2.radius += P3(s2 && s2._custom, o2), n2;
      }
    };
    fe = class extends dt {
      static id = "doughnut";
      static defaults = { datasetElementType: false, dataElementType: "arc", animation: { animateRotate: true, animateScale: false }, animations: { numbers: { type: "number", properties: ["circumference", "endAngle", "innerRadius", "outerRadius", "startAngle", "x", "y", "offset", "borderWidth", "spacing"] } }, cutout: "50%", rotation: 0, circumference: 360, radius: "100%", spacing: 0, indexAxis: "r" };
      static descriptors = { _scriptable: (t) => t !== "spacing", _indexable: (t) => t !== "spacing" && !t.startsWith("borderDash") && !t.startsWith("hoverBorderDash") };
      static overrides = { aspectRatio: 1, plugins: { legend: { labels: { generateLabels(t) {
        let e = t.data;
        if (e.labels.length && e.datasets.length) {
          let { labels: { pointStyle: s2, color: n2 } } = t.legend.options;
          return e.labels.map((o2, a2) => {
            let l4 = t.getDatasetMeta(0).controller.getStyle(a2);
            return { text: o2, fillStyle: l4.backgroundColor, strokeStyle: l4.borderColor, fontColor: n2, lineWidth: l4.borderWidth, pointStyle: s2, hidden: !t.getDataVisibility(a2), index: a2 };
          });
        }
        return [];
      } }, onClick(t, e, s2) {
        s2.chart.toggleDataVisibility(e.index), s2.chart.update();
      } } } };
      constructor(t, e) {
        super(t, e), this.enableOptionSharing = true, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0;
      }
      linkScales() {
      }
      parse(t, e) {
        let s2 = this.getDataset().data, n2 = this._cachedMeta;
        if (this._parsing === false)
          n2._parsed = s2;
        else {
          let o2 = (l4) => +s2[l4];
          if (O3(s2[t])) {
            let { key: l4 = "value" } = this._parsing;
            o2 = (c3) => +gt(s2[c3], l4);
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
        for (let s2 = 0; s2 < this.chart.data.datasets.length; ++s2)
          if (this.chart.isDatasetVisible(s2) && this.chart.getDatasetMeta(s2).type === this._type) {
            let n2 = this.chart.getDatasetMeta(s2).controller, o2 = n2._getRotation(), a2 = n2._getCircumference();
            t = Math.min(t, o2), e = Math.max(e, o2 + a2);
          }
        return { rotation: t, circumference: e - t };
      }
      update(t) {
        let e = this.chart, { chartArea: s2 } = e, n2 = this._cachedMeta, o2 = n2.data, a2 = this.getMaxBorderWidth() + this.getMaxOffset(o2) + this.options.spacing, r = Math.max((Math.min(s2.width, s2.height) - a2) / 2, 0), l4 = Math.min(Cs(this.options.cutout, r), 1), c3 = this._getRingWeight(this.index), { circumference: h5, rotation: d4 } = this._getRotationExtents(), { ratioX: u2, ratioY: f3, offsetX: g4, offsetY: p5 } = Ha(d4, h5, l4), m5 = (s2.width - a2) / u2, b4 = (s2.height - a2) / f3, _4 = Math.max(Math.min(m5, b4) / 2, 0), v5 = oi(this.options.radius, _4), y5 = Math.max(v5 * l4, 0), x4 = (v5 - y5) / this._getVisibleDatasetWeightTotal();
        this.offsetX = g4 * v5, this.offsetY = p5 * v5, n2.total = this.calculateTotal(), this.outerRadius = v5 - x4 * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - x4 * c3, 0), this.updateElements(o2, 0, o2.length, t);
      }
      _circumference(t, e) {
        let s2 = this.options, n2 = this._cachedMeta, o2 = this._getCircumference();
        return e && s2.animation.animateRotate || !this.chart.getDataVisibility(t) || n2._parsed[t] === null || n2.data[t].hidden ? 0 : this.calculateCircumference(n2._parsed[t] * o2 / F3);
      }
      updateElements(t, e, s2, n2) {
        let o2 = n2 === "reset", a2 = this.chart, r = a2.chartArea, c3 = a2.options.animation, h5 = (r.left + r.right) / 2, d4 = (r.top + r.bottom) / 2, u2 = o2 && c3.animateScale, f3 = u2 ? 0 : this.innerRadius, g4 = u2 ? 0 : this.outerRadius, { sharedOptions: p5, includeOptions: m5 } = this._getSharedOptions(e, n2), b4 = this._getRotation(), _4;
        for (_4 = 0; _4 < e; ++_4)
          b4 += this._circumference(_4, o2);
        for (_4 = e; _4 < e + s2; ++_4) {
          let v5 = this._circumference(_4, o2), y5 = t[_4], x4 = { x: h5 + this.offsetX, y: d4 + this.offsetY, startAngle: b4, endAngle: b4 + v5, circumference: v5, outerRadius: g4, innerRadius: f3 };
          m5 && (x4.options = p5 || this.resolveDataElementOptions(_4, y5.active ? "active" : n2)), b4 += v5, this.updateElement(y5, _4, x4, n2);
        }
      }
      calculateTotal() {
        let t = this._cachedMeta, e = t.data, s2 = 0, n2;
        for (n2 = 0; n2 < e.length; n2++) {
          let o2 = t._parsed[n2];
          o2 !== null && !isNaN(o2) && this.chart.getDataVisibility(n2) && !e[n2].hidden && (s2 += Math.abs(o2));
        }
        return s2;
      }
      calculateCircumference(t) {
        let e = this._cachedMeta.total;
        return e > 0 && !isNaN(t) ? F3 * (Math.abs(t) / e) : 0;
      }
      getLabelAndValue(t) {
        let e = this._cachedMeta, s2 = this.chart, n2 = s2.data.labels || [], o2 = $t(e._parsed[t], s2.options.locale);
        return { label: n2[t] || "", value: o2 };
      }
      getMaxBorderWidth(t) {
        let e = 0, s2 = this.chart, n2, o2, a2, r, l4;
        if (!t) {
          for (n2 = 0, o2 = s2.data.datasets.length; n2 < o2; ++n2)
            if (s2.isDatasetVisible(n2)) {
              a2 = s2.getDatasetMeta(n2), t = a2.data, r = a2.controller;
              break;
            }
        }
        if (!t)
          return 0;
        for (n2 = 0, o2 = t.length; n2 < o2; ++n2)
          l4 = r.resolveDataElementOptions(n2), l4.borderAlign !== "inner" && (e = Math.max(e, l4.borderWidth || 0, l4.hoverBorderWidth || 0));
        return e;
      }
      getMaxOffset(t) {
        let e = 0;
        for (let s2 = 0, n2 = t.length; s2 < n2; ++s2) {
          let o2 = this.resolveDataElementOptions(s2);
          e = Math.max(e, o2.offset || 0, o2.hoverOffset || 0);
        }
        return e;
      }
      _getRingWeightOffset(t) {
        let e = 0;
        for (let s2 = 0; s2 < t; ++s2)
          this.chart.isDatasetVisible(s2) && (e += this._getRingWeight(s2));
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
        let e = this._cachedMeta, { dataset: s2, data: n2 = [], _dataset: o2 } = e, a2 = this.chart._animationsDisabled, { start: r, count: l4 } = pi(e, n2, a2);
        this._drawStart = r, this._drawCount = l4, mi(e) && (r = 0, l4 = n2.length), s2._chart = this.chart, s2._datasetIndex = this.index, s2._decimated = !!o2._decimated, s2.points = n2;
        let c3 = this.resolveDatasetElementOptions(t);
        this.options.showLine || (c3.borderWidth = 0), c3.segment = this.options.segment, this.updateElement(s2, void 0, { animated: !a2, options: c3 }, t), this.updateElements(n2, r, l4, t);
      }
      updateElements(t, e, s2, n2) {
        let o2 = n2 === "reset", { iScale: a2, vScale: r, _stacked: l4, _dataset: c3 } = this._cachedMeta, { sharedOptions: h5, includeOptions: d4 } = this._getSharedOptions(e, n2), u2 = a2.axis, f3 = r.axis, { spanGaps: g4, segment: p5 } = this.options, m5 = At(g4) ? g4 : Number.POSITIVE_INFINITY, b4 = this.chart._animationsDisabled || o2 || n2 === "none", _4 = e + s2, v5 = t.length, y5 = e > 0 && this.getParsed(e - 1);
        for (let x4 = 0; x4 < v5; ++x4) {
          let M4 = t[x4], k4 = b4 ? M4 : {};
          if (x4 < e || x4 >= _4) {
            k4.skip = true;
            continue;
          }
          let S5 = this.getParsed(x4), w4 = L3(S5[f3]), D5 = k4[u2] = a2.getPixelForValue(S5[u2], x4), C5 = k4[f3] = o2 || w4 ? r.getBasePixel() : r.getPixelForValue(l4 ? this.applyStack(r, S5, l4) : S5[f3], x4);
          k4.skip = isNaN(D5) || isNaN(C5) || w4, k4.stop = x4 > 0 && Math.abs(S5[u2] - y5[u2]) > m5, p5 && (k4.parsed = S5, k4.raw = c3.data[x4]), d4 && (k4.options = h5 || this.resolveDataElementOptions(x4, M4.active ? "active" : n2)), b4 || this.updateElement(M4, x4, k4, n2), y5 = S5;
        }
      }
      getMaxOverflow() {
        let t = this._cachedMeta, e = t.dataset, s2 = e.options && e.options.borderWidth || 0, n2 = t.data || [];
        if (!n2.length)
          return s2;
        let o2 = n2[0].size(this.resolveDataElementOptions(0)), a2 = n2[n2.length - 1].size(this.resolveDataElementOptions(n2.length - 1));
        return Math.max(s2, o2, a2) / 2;
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
          let { labels: { pointStyle: s2, color: n2 } } = t.legend.options;
          return e.labels.map((o2, a2) => {
            let l4 = t.getDatasetMeta(0).controller.getStyle(a2);
            return { text: o2, fillStyle: l4.backgroundColor, strokeStyle: l4.borderColor, fontColor: n2, lineWidth: l4.borderWidth, pointStyle: s2, hidden: !t.getDataVisibility(a2), index: a2 };
          });
        }
        return [];
      } }, onClick(t, e, s2) {
        s2.chart.toggleDataVisibility(e.index), s2.chart.update();
      } } }, scales: { r: { type: "radialLinear", angleLines: { display: false }, beginAtZero: true, grid: { circular: true }, pointLabels: { display: false }, startAngle: 0 } } };
      constructor(t, e) {
        super(t, e), this.innerRadius = void 0, this.outerRadius = void 0;
      }
      getLabelAndValue(t) {
        let e = this._cachedMeta, s2 = this.chart, n2 = s2.data.labels || [], o2 = $t(e._parsed[t].r, s2.options.locale);
        return { label: n2[t] || "", value: o2 };
      }
      parseObjectData(t, e, s2, n2) {
        return wi.bind(this)(t, e, s2, n2);
      }
      update(t) {
        let e = this._cachedMeta.data;
        this._updateRadius(), this.updateElements(e, 0, e.length, t);
      }
      getMinMax() {
        let t = this._cachedMeta, e = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY };
        return t.data.forEach((s2, n2) => {
          let o2 = this.getParsed(n2).r;
          !isNaN(o2) && this.chart.getDataVisibility(n2) && (o2 < e.min && (e.min = o2), o2 > e.max && (e.max = o2));
        }), e;
      }
      _updateRadius() {
        let t = this.chart, e = t.chartArea, s2 = t.options, n2 = Math.min(e.right - e.left, e.bottom - e.top), o2 = Math.max(n2 / 2, 0), a2 = Math.max(s2.cutoutPercentage ? o2 / 100 * s2.cutoutPercentage : 1, 0), r = (o2 - a2) / t.getVisibleDatasetCount();
        this.outerRadius = o2 - r * this.index, this.innerRadius = this.outerRadius - r;
      }
      updateElements(t, e, s2, n2) {
        let o2 = n2 === "reset", a2 = this.chart, l4 = a2.options.animation, c3 = this._cachedMeta.rScale, h5 = c3.xCenter, d4 = c3.yCenter, u2 = c3.getIndexAngle(0) - 0.5 * z2, f3 = u2, g4, p5 = 360 / this.countVisibleElements();
        for (g4 = 0; g4 < e; ++g4)
          f3 += this._computeAngle(g4, n2, p5);
        for (g4 = e; g4 < e + s2; g4++) {
          let m5 = t[g4], b4 = f3, _4 = f3 + this._computeAngle(g4, n2, p5), v5 = a2.getDataVisibility(g4) ? c3.getDistanceFromCenterForValue(this.getParsed(g4).r) : 0;
          f3 = _4, o2 && (l4.animateScale && (v5 = 0), l4.animateRotate && (b4 = _4 = u2));
          let y5 = { x: h5, y: d4, innerRadius: 0, outerRadius: v5, startAngle: b4, endAngle: _4, options: this.resolveDataElementOptions(g4, m5.active ? "active" : n2) };
          this.updateElement(m5, g4, y5, n2);
        }
      }
      countVisibleElements() {
        let t = this._cachedMeta, e = 0;
        return t.data.forEach((s2, n2) => {
          !isNaN(this.getParsed(n2).r) && this.chart.getDataVisibility(n2) && e++;
        }), e;
      }
      _computeAngle(t, e, s2) {
        return this.chart.getDataVisibility(t) ? et(this.resolveDataElementOptions(t, e).angle || s2) : 0;
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
        let e = this._cachedMeta.vScale, s2 = this.getParsed(t);
        return { label: e.getLabels()[t], value: "" + e.getLabelForValue(s2[e.axis]) };
      }
      parseObjectData(t, e, s2, n2) {
        return wi.bind(this)(t, e, s2, n2);
      }
      update(t) {
        let e = this._cachedMeta, s2 = e.dataset, n2 = e.data || [], o2 = e.iScale.getLabels();
        if (s2.points = n2, t !== "resize") {
          let a2 = this.resolveDatasetElementOptions(t);
          this.options.showLine || (a2.borderWidth = 0);
          let r = { _loop: true, _fullLoop: o2.length === n2.length, options: a2 };
          this.updateElement(s2, void 0, r, t);
        }
        this.updateElements(n2, 0, n2.length, t);
      }
      updateElements(t, e, s2, n2) {
        let o2 = this._cachedMeta.rScale, a2 = n2 === "reset";
        for (let r = e; r < e + s2; r++) {
          let l4 = t[r], c3 = this.resolveDataElementOptions(r, l4.active ? "active" : n2), h5 = o2.getPointPositionForValue(r, this.getParsed(r).r), d4 = a2 ? o2.xCenter : h5.x, u2 = a2 ? o2.yCenter : h5.y, f3 = { x: d4, y: u2, angle: h5.angle, skip: isNaN(d4) || isNaN(u2), options: c3 };
          this.updateElement(l4, r, f3, n2);
        }
      }
    };
    Ki = class extends dt {
      static id = "scatter";
      static defaults = { datasetElementType: false, dataElementType: "point", showLine: false, fill: false };
      static overrides = { interaction: { mode: "point" }, scales: { x: { type: "linear" }, y: { type: "linear" } } };
      getLabelAndValue(t) {
        let e = this._cachedMeta, s2 = this.chart.data.labels || [], { xScale: n2, yScale: o2 } = e, a2 = this.getParsed(t), r = n2.getLabelForValue(a2.x), l4 = o2.getLabelForValue(a2.y);
        return { label: s2[t] || "", value: "(" + r + ", " + l4 + ")" };
      }
      update(t) {
        let e = this._cachedMeta, { data: s2 = [] } = e, n2 = this.chart._animationsDisabled, { start: o2, count: a2 } = pi(e, s2, n2);
        if (this._drawStart = o2, this._drawCount = a2, mi(e) && (o2 = 0, a2 = s2.length), this.options.showLine) {
          this.datasetElementType || this.addElements();
          let { dataset: r, _dataset: l4 } = e;
          r._chart = this.chart, r._datasetIndex = this.index, r._decimated = !!l4._decimated, r.points = s2;
          let c3 = this.resolveDatasetElementOptions(t);
          c3.segment = this.options.segment, this.updateElement(r, void 0, { animated: !n2, options: c3 }, t);
        } else
          this.datasetElementType && (delete e.dataset, this.datasetElementType = false);
        this.updateElements(s2, o2, a2, t);
      }
      addElements() {
        let { showLine: t } = this.options;
        !this.datasetElementType && t && (this.datasetElementType = this.chart.registry.getElement("line")), super.addElements();
      }
      updateElements(t, e, s2, n2) {
        let o2 = n2 === "reset", { iScale: a2, vScale: r, _stacked: l4, _dataset: c3 } = this._cachedMeta, h5 = this.resolveDataElementOptions(e, n2), d4 = this.getSharedOptions(h5), u2 = this.includeOptions(n2, d4), f3 = a2.axis, g4 = r.axis, { spanGaps: p5, segment: m5 } = this.options, b4 = At(p5) ? p5 : Number.POSITIVE_INFINITY, _4 = this.chart._animationsDisabled || o2 || n2 === "none", v5 = e > 0 && this.getParsed(e - 1);
        for (let y5 = e; y5 < e + s2; ++y5) {
          let x4 = t[y5], M4 = this.getParsed(y5), k4 = _4 ? x4 : {}, S5 = L3(M4[g4]), w4 = k4[f3] = a2.getPixelForValue(M4[f3], y5), D5 = k4[g4] = o2 || S5 ? r.getBasePixel() : r.getPixelForValue(l4 ? this.applyStack(r, M4, l4) : M4[g4], y5);
          k4.skip = isNaN(w4) || isNaN(D5) || S5, k4.stop = y5 > 0 && Math.abs(M4[f3] - v5[f3]) > b4, m5 && (k4.parsed = M4, k4.raw = c3.data[y5]), u2 && (k4.options = d4 || this.resolveDataElementOptions(y5, x4.active ? "active" : n2)), _4 || this.updateElement(x4, y5, k4, n2), v5 = M4;
        }
        this.updateSharedOptions(d4, n2, h5);
      }
      getMaxOverflow() {
        let t = this._cachedMeta, e = t.data || [];
        if (!this.options.showLine) {
          let r = 0;
          for (let l4 = e.length - 1; l4 >= 0; --l4)
            r = Math.max(r, e[l4].size(this.resolveDataElementOptions(l4)) / 2);
          return r > 0 && r;
        }
        let s2 = t.dataset, n2 = s2.options && s2.options.borderWidth || 0;
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
    qa = { evaluateInteractionItems: _e, modes: { index(i4, t, e, s2) {
      let n2 = kt(t, i4), o2 = e.axis || "x", a2 = e.includeInvisible || false, r = e.intersect ? Ii(i4, n2, o2, s2, a2) : zi(i4, n2, o2, false, s2, a2), l4 = [];
      return r.length ? (i4.getSortedVisibleDatasetMetas().forEach((c3) => {
        let h5 = r[0].index, d4 = c3.data[h5];
        d4 && !d4.skip && l4.push({ element: d4, datasetIndex: c3.index, index: h5 });
      }), l4) : [];
    }, dataset(i4, t, e, s2) {
      let n2 = kt(t, i4), o2 = e.axis || "xy", a2 = e.includeInvisible || false, r = e.intersect ? Ii(i4, n2, o2, s2, a2) : zi(i4, n2, o2, false, s2, a2);
      if (r.length > 0) {
        let l4 = r[0].datasetIndex, c3 = i4.getDatasetMeta(l4).data;
        r = [];
        for (let h5 = 0; h5 < c3.length; ++h5)
          r.push({ element: c3[h5], datasetIndex: l4, index: h5 });
      }
      return r;
    }, point(i4, t, e, s2) {
      let n2 = kt(t, i4), o2 = e.axis || "xy", a2 = e.includeInvisible || false;
      return Ii(i4, n2, o2, s2, a2);
    }, nearest(i4, t, e, s2) {
      let n2 = kt(t, i4), o2 = e.axis || "xy", a2 = e.includeInvisible || false;
      return zi(i4, n2, o2, e.intersect, s2, a2);
    }, x(i4, t, e, s2) {
      let n2 = kt(t, i4);
      return fn(i4, n2, "x", e.intersect, s2);
    }, y(i4, t, e, s2) {
      let n2 = kt(t, i4);
      return fn(i4, n2, "y", e.intersect, s2);
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
    }, update(i4, t, e, s2) {
      if (!i4)
        return;
      let n2 = X3(i4.options.layout.padding), o2 = Math.max(t - n2.width, 0), a2 = Math.max(e - n2.height, 0), r = Za(i4.boxes), l4 = r.vertical, c3 = r.horizontal;
      T3(i4.boxes, (p5) => {
        typeof p5.beforeLayout == "function" && p5.beforeLayout();
      });
      let h5 = l4.reduce((p5, m5) => m5.box.options && m5.box.options.display === false ? p5 : p5 + 1, 0) || 1, d4 = Object.freeze({ outerWidth: t, outerHeight: e, padding: n2, availableWidth: o2, availableHeight: a2, vBoxMaxWidth: o2 / 2 / h5, hBoxMaxHeight: a2 / 2 }), u2 = Object.assign({}, n2);
      ao(u2, X3(s2));
      let f3 = Object.assign({ maxPadding: u2, w: o2, h: a2, x: n2.left, y: n2.top }, n2), g4 = Qa(l4.concat(c3), d4);
      de(r.fullSize, f3, d4, g4), de(l4, f3, d4, g4), de(c3, f3, d4, g4) && de(l4, f3, d4, g4), er(f3), mn(r.leftAndTop, f3, d4, g4), f3.x += f3.w, f3.y += f3.h, mn(r.rightAndBottom, f3, d4, g4), i4.chartArea = { left: f3.left, top: f3.top, right: f3.left + f3.w, bottom: f3.top + f3.h, height: f3.h, width: f3.w }, T3(r.chartArea, (p5) => {
        let m5 = p5.box;
        Object.assign(m5, i4.chartArea), m5.update(f3.w, f3.h, { left: 0, top: 0, right: 0, bottom: 0 });
      });
    } };
    qe = class {
      acquireContext(t, e) {
      }
      releaseContext(t) {
        return false;
      }
      addEventListener(t, e, s2) {
      }
      removeEventListener(t, e, s2) {
      }
      getDevicePixelRatio() {
        return 1;
      }
      getMaximumSize(t, e, s2, n2) {
        return e = Math.max(0, e || t.width), s2 = s2 || t.height, { width: e, height: Math.max(0, n2 ? Math.floor(e / n2) : s2) };
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
        let s2 = t && t.getContext && t.getContext("2d");
        return s2 && s2.canvas === t ? (nr(t, e), s2) : null;
      }
      releaseContext(t) {
        let e = t.canvas;
        if (!e[Ue])
          return false;
        let s2 = e[Ue].initial;
        ["height", "width"].forEach((o2) => {
          let a2 = s2[o2];
          L3(a2) ? e.removeAttribute(o2) : e.setAttribute(o2, a2);
        });
        let n2 = s2.style || {};
        return Object.keys(n2).forEach((o2) => {
          e.style[o2] = n2[o2];
        }), e.width = e.width, delete e[Ue], true;
      }
      addEventListener(t, e, s2) {
        this.removeEventListener(t, e);
        let n2 = t.$proxies || (t.$proxies = {}), a2 = { attach: lr, detach: cr, resize: ur }[e] || fr;
        n2[e] = a2(t, e, s2);
      }
      removeEventListener(t, e) {
        let s2 = t.$proxies || (t.$proxies = {}), n2 = s2[e];
        if (!n2)
          return;
        ({ attach: Fi, detach: Fi, resize: Fi }[e] || ar)(t, e, n2), s2[e] = void 0;
      }
      getDevicePixelRatio() {
        return window.devicePixelRatio;
      }
      getMaximumSize(t, e, s2, n2) {
        return Gs(t, e, s2, n2);
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
        let { x: e, y: s2 } = this.getProps(["x", "y"], t);
        return { x: e, y: s2 };
      }
      hasValue() {
        return At(this.x) && At(this.y);
      }
      getProps(t, e) {
        let s2 = this.$animations;
        if (!e || !s2)
          return this;
        let n2 = {};
        return t.forEach((o2) => {
          n2[o2] = s2[o2] && s2[o2].active() ? s2[o2]._to : this[o2];
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
        let { _userMin: t, _userMax: e, _suggestedMin: s2, _suggestedMax: n2 } = this;
        return t = J3(t, Number.POSITIVE_INFINITY), e = J3(e, Number.NEGATIVE_INFINITY), s2 = J3(s2, Number.POSITIVE_INFINITY), n2 = J3(n2, Number.NEGATIVE_INFINITY), { min: J3(t, s2), max: J3(e, n2), minDefined: V3(t), maxDefined: V3(e) };
      }
      getMinMax(t) {
        let { min: e, max: s2, minDefined: n2, maxDefined: o2 } = this.getUserBounds(), a2;
        if (n2 && o2)
          return { min: e, max: s2 };
        let r = this.getMatchingVisibleMetas();
        for (let l4 = 0, c3 = r.length; l4 < c3; ++l4)
          a2 = r[l4].controller.getMinMax(this, t), n2 || (e = Math.min(e, a2.min)), o2 || (s2 = Math.max(s2, a2.max));
        return e = o2 && e > s2 ? s2 : e, s2 = n2 && e > s2 ? e : s2, { min: J3(e, J3(s2, e)), max: J3(s2, J3(e, s2)) };
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
      update(t, e, s2) {
        let { beginAtZero: n2, grace: o2, ticks: a2 } = this.options, r = a2.sampleSize;
        this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = s2 = Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, s2), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + s2.left + s2.right : this.height + s2.top + s2.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = $s(this, o2, n2), this._dataLimitsCached = true), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
        let l4 = r < this.ticks.length;
        this._convertTicksToLabels(l4 ? vn(this.ticks, r) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), a2.display && (a2.autoSkip || a2.source === "auto") && (this.ticks = pr(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l4 && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
      }
      configure() {
        let t = this.options.reverse, e, s2;
        this.isHorizontal() ? (e = this.left, s2 = this.right) : (e = this.top, s2 = this.bottom, t = !t), this._startPixel = e, this._endPixel = s2, this._reversePixels = t, this._length = s2 - e, this._alignToPixels = this.options.alignToPixels;
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
        let e = this.options.ticks, s2, n2, o2;
        for (s2 = 0, n2 = t.length; s2 < n2; s2++)
          o2 = t[s2], o2.label = E2(e.callback, [o2.value, s2, t], this);
      }
      afterTickToLabelConversion() {
        E2(this.options.afterTickToLabelConversion, [this]);
      }
      beforeCalculateLabelRotation() {
        E2(this.options.beforeCalculateLabelRotation, [this]);
      }
      calculateLabelRotation() {
        let t = this.options, e = t.ticks, s2 = yn(this.ticks.length, t.ticks.maxTicksLimit), n2 = e.minRotation || 0, o2 = e.maxRotation, a2 = n2, r, l4, c3;
        if (!this._isVisible() || !e.display || n2 >= o2 || s2 <= 1 || !this.isHorizontal()) {
          this.labelRotation = n2;
          return;
        }
        let h5 = this._getLabelSizes(), d4 = h5.widest.width, u2 = h5.highest.height, f3 = $3(this.chart.width - d4, 0, this.maxWidth);
        r = t.offset ? this.maxWidth / s2 : f3 / (s2 - 1), d4 + 6 > r && (r = f3 / (s2 - (t.offset ? 0.5 : 1)), l4 = this.maxHeight - ce(t.grid) - e.padding - Mn(t.title, this.chart.options.font), c3 = Math.sqrt(d4 * d4 + u2 * u2), a2 = Ce(Math.min(Math.asin($3((h5.highest.height + 6) / r, -1, 1)), Math.asin($3(l4 / c3, -1, 1)) - Math.asin($3(u2 / c3, -1, 1)))), a2 = Math.max(n2, Math.min(o2, a2))), this.labelRotation = a2;
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
        let t = { width: 0, height: 0 }, { chart: e, options: { ticks: s2, title: n2, grid: o2 } } = this, a2 = this._isVisible(), r = this.isHorizontal();
        if (a2) {
          let l4 = Mn(n2, e.options.font);
          if (r ? (t.width = this.maxWidth, t.height = ce(o2) + l4) : (t.height = this.maxHeight, t.width = ce(o2) + l4), s2.display && this.ticks.length) {
            let { first: c3, last: h5, widest: d4, highest: u2 } = this._getLabelSizes(), f3 = s2.padding * 2, g4 = et(this.labelRotation), p5 = Math.cos(g4), m5 = Math.sin(g4);
            if (r) {
              let b4 = s2.mirror ? 0 : m5 * d4.width + p5 * u2.height;
              t.height = Math.min(this.maxHeight, t.height + b4 + f3);
            } else {
              let b4 = s2.mirror ? 0 : p5 * d4.width + m5 * u2.height;
              t.width = Math.min(this.maxWidth, t.width + b4 + f3);
            }
            this._calculatePadding(c3, h5, m5, p5);
          }
        }
        this._handleMargins(), r ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom);
      }
      _calculatePadding(t, e, s2, n2) {
        let { ticks: { align: o2, padding: a2 }, position: r } = this.options, l4 = this.labelRotation !== 0, c3 = r !== "top" && this.axis === "x";
        if (this.isHorizontal()) {
          let h5 = this.getPixelForTick(0) - this.left, d4 = this.right - this.getPixelForTick(this.ticks.length - 1), u2 = 0, f3 = 0;
          l4 ? c3 ? (u2 = n2 * t.width, f3 = s2 * e.height) : (u2 = s2 * t.height, f3 = n2 * e.width) : o2 === "start" ? f3 = e.width : o2 === "end" ? u2 = t.width : o2 !== "inner" && (u2 = t.width / 2, f3 = e.width / 2), this.paddingLeft = Math.max((u2 - h5 + a2) * this.width / (this.width - h5), 0), this.paddingRight = Math.max((f3 - d4 + a2) * this.width / (this.width - d4), 0);
        } else {
          let h5 = e.height / 2, d4 = t.height / 2;
          o2 === "start" ? (h5 = 0, d4 = t.height) : o2 === "end" && (h5 = e.height, d4 = 0), this.paddingTop = h5 + a2, this.paddingBottom = d4 + a2;
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
        let e, s2;
        for (e = 0, s2 = t.length; e < s2; e++)
          L3(t[e].label) && (t.splice(e, 1), s2--, e--);
        this.afterTickToLabelConversion();
      }
      _getLabelSizes() {
        let t = this._labelSizes;
        if (!t) {
          let e = this.options.ticks.sampleSize, s2 = this.ticks;
          e < s2.length && (s2 = vn(s2, e)), this._labelSizes = t = this._computeLabelSizes(s2, s2.length, this.options.ticks.maxTicksLimit);
        }
        return t;
      }
      _computeLabelSizes(t, e, s2) {
        let { ctx: n2, _longestTextCache: o2 } = this, a2 = [], r = [], l4 = Math.floor(e / yn(e, s2)), c3 = 0, h5 = 0, d4, u2, f3, g4, p5, m5, b4, _4, v5, y5, x4;
        for (d4 = 0; d4 < e; d4 += l4) {
          if (g4 = t[d4].label, p5 = this._resolveTickFontOptions(d4), n2.font = m5 = p5.string, b4 = o2[m5] = o2[m5] || { data: {}, gc: [] }, _4 = p5.lineHeight, v5 = y5 = 0, !L3(g4) && !I3(g4))
            v5 = ee2(n2, b4.data, b4.gc, v5, g4), y5 = _4;
          else if (I3(g4))
            for (u2 = 0, f3 = g4.length; u2 < f3; ++u2)
              x4 = g4[u2], !L3(x4) && !I3(x4) && (v5 = ee2(n2, b4.data, b4.gc, v5, x4), y5 += _4);
          a2.push(v5), r.push(y5), c3 = Math.max(v5, c3), h5 = Math.max(y5, h5);
        }
        kr(o2, e);
        let M4 = a2.indexOf(c3), k4 = r.indexOf(h5), S5 = (w4) => ({ width: a2[w4] || 0, height: r[w4] || 0 });
        return { first: S5(0), last: S5(e - 1), widest: S5(M4), highest: S5(k4), widths: a2, heights: r };
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
          let s2 = e[t];
          return s2.$context || (s2.$context = wr(this.getContext(), t, s2));
        }
        return this.$context || (this.$context = Sr(this.chart.getContext(), this));
      }
      _tickSize() {
        let t = this.options.ticks, e = et(this.labelRotation), s2 = Math.abs(Math.cos(e)), n2 = Math.abs(Math.sin(e)), o2 = this._getLabelSizes(), a2 = t.autoSkipPadding || 0, r = o2 ? o2.widest.width + a2 : 0, l4 = o2 ? o2.highest.height + a2 : 0;
        return this.isHorizontal() ? l4 * s2 > r * n2 ? r / s2 : l4 / n2 : l4 * n2 < r * s2 ? l4 / s2 : r / n2;
      }
      _isVisible() {
        let t = this.options.display;
        return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
      }
      _computeGridLineItems(t) {
        let e = this.axis, s2 = this.chart, n2 = this.options, { grid: o2, position: a2, border: r } = n2, l4 = o2.offset, c3 = this.isHorizontal(), d4 = this.ticks.length + (l4 ? 1 : 0), u2 = ce(o2), f3 = [], g4 = r.setContext(this.getContext()), p5 = g4.display ? g4.width : 0, m5 = p5 / 2, b4 = function(B4) {
          return yt(s2, B4, p5);
        }, _4, v5, y5, x4, M4, k4, S5, w4, D5, C5, A4, U4;
        if (a2 === "top")
          _4 = b4(this.bottom), k4 = this.bottom - u2, w4 = _4 - m5, C5 = b4(t.top) + m5, U4 = t.bottom;
        else if (a2 === "bottom")
          _4 = b4(this.top), C5 = t.top, U4 = b4(t.bottom) - m5, k4 = _4 + m5, w4 = this.top + u2;
        else if (a2 === "left")
          _4 = b4(this.right), M4 = this.right - u2, S5 = _4 - m5, D5 = b4(t.left) + m5, A4 = t.right;
        else if (a2 === "right")
          _4 = b4(this.left), D5 = t.left, A4 = b4(t.right) - m5, M4 = _4 + m5, S5 = this.left + u2;
        else if (e === "x") {
          if (a2 === "center")
            _4 = b4((t.top + t.bottom) / 2 + 0.5);
          else if (O3(a2)) {
            let B4 = Object.keys(a2)[0], H4 = a2[B4];
            _4 = b4(this.chart.scales[B4].getPixelForValue(H4));
          }
          C5 = t.top, U4 = t.bottom, k4 = _4 + m5, w4 = k4 + u2;
        } else if (e === "y") {
          if (a2 === "center")
            _4 = b4((t.left + t.right) / 2);
          else if (O3(a2)) {
            let B4 = Object.keys(a2)[0], H4 = a2[B4];
            _4 = b4(this.chart.scales[B4].getPixelForValue(H4));
          }
          M4 = _4 - m5, S5 = M4 - u2, D5 = t.left, A4 = t.right;
        }
        let tt = P3(n2.ticks.maxTicksLimit, d4), R4 = Math.max(1, Math.ceil(d4 / tt));
        for (v5 = 0; v5 < d4; v5 += R4) {
          let B4 = this.getContext(v5), H4 = o2.setContext(B4), it = r.setContext(B4), K3 = H4.lineWidth, It = H4.color, xe = it.dash || [], zt = it.dashOffset, Qt = H4.tickWidth, wt = H4.tickColor, Zt = H4.tickBorderDash || [], Pt = H4.tickBorderDashOffset;
          y5 = Mr(this, v5, l4), y5 !== void 0 && (x4 = yt(s2, y5, K3), c3 ? M4 = S5 = D5 = A4 = x4 : k4 = w4 = C5 = U4 = x4, f3.push({ tx1: M4, ty1: k4, tx2: S5, ty2: w4, x1: D5, y1: C5, x2: A4, y2: U4, width: K3, color: It, borderDash: xe, borderDashOffset: zt, tickWidth: Qt, tickColor: wt, tickBorderDash: Zt, tickBorderDashOffset: Pt }));
        }
        return this._ticksLength = d4, this._borderValue = _4, f3;
      }
      _computeLabelItems(t) {
        let e = this.axis, s2 = this.options, { position: n2, ticks: o2 } = s2, a2 = this.isHorizontal(), r = this.ticks, { align: l4, crossAlign: c3, padding: h5, mirror: d4 } = o2, u2 = ce(s2.grid), f3 = u2 + h5, g4 = d4 ? -h5 : f3, p5 = -et(this.labelRotation), m5 = [], b4, _4, v5, y5, x4, M4, k4, S5, w4, D5, C5, A4, U4 = "middle";
        if (n2 === "top")
          M4 = this.bottom - g4, k4 = this._getXAxisLabelAlignment();
        else if (n2 === "bottom")
          M4 = this.top + g4, k4 = this._getXAxisLabelAlignment();
        else if (n2 === "left") {
          let R4 = this._getYAxisLabelAlignment(u2);
          k4 = R4.textAlign, x4 = R4.x;
        } else if (n2 === "right") {
          let R4 = this._getYAxisLabelAlignment(u2);
          k4 = R4.textAlign, x4 = R4.x;
        } else if (e === "x") {
          if (n2 === "center")
            M4 = (t.top + t.bottom) / 2 + f3;
          else if (O3(n2)) {
            let R4 = Object.keys(n2)[0], B4 = n2[R4];
            M4 = this.chart.scales[R4].getPixelForValue(B4) + f3;
          }
          k4 = this._getXAxisLabelAlignment();
        } else if (e === "y") {
          if (n2 === "center")
            x4 = (t.left + t.right) / 2 - f3;
          else if (O3(n2)) {
            let R4 = Object.keys(n2)[0], B4 = n2[R4];
            x4 = this.chart.scales[R4].getPixelForValue(B4);
          }
          k4 = this._getYAxisLabelAlignment(u2).textAlign;
        }
        e === "y" && (l4 === "start" ? U4 = "top" : l4 === "end" && (U4 = "bottom"));
        let tt = this._getLabelSizes();
        for (b4 = 0, _4 = r.length; b4 < _4; ++b4) {
          v5 = r[b4], y5 = v5.label;
          let R4 = o2.setContext(this.getContext(b4));
          S5 = this.getPixelForTick(b4) + o2.labelOffset, w4 = this._resolveTickFontOptions(b4), D5 = w4.lineHeight, C5 = I3(y5) ? y5.length : 1;
          let B4 = C5 / 2, H4 = R4.color, it = R4.textStrokeColor, K3 = R4.textStrokeWidth, It = k4;
          a2 ? (x4 = S5, k4 === "inner" && (b4 === _4 - 1 ? It = this.options.reverse ? "left" : "right" : b4 === 0 ? It = this.options.reverse ? "right" : "left" : It = "center"), n2 === "top" ? c3 === "near" || p5 !== 0 ? A4 = -C5 * D5 + D5 / 2 : c3 === "center" ? A4 = -tt.highest.height / 2 - B4 * D5 + D5 : A4 = -tt.highest.height + D5 / 2 : c3 === "near" || p5 !== 0 ? A4 = D5 / 2 : c3 === "center" ? A4 = tt.highest.height / 2 - B4 * D5 : A4 = tt.highest.height - C5 * D5, d4 && (A4 *= -1), p5 !== 0 && !R4.showLabelBackdrop && (x4 += D5 / 2 * Math.sin(p5))) : (M4 = S5, A4 = (1 - C5) * D5 / 2);
          let xe;
          if (R4.showLabelBackdrop) {
            let zt = X3(R4.backdropPadding), Qt = tt.heights[b4], wt = tt.widths[b4], Zt = A4 - zt.top, Pt = 0 - zt.left;
            switch (U4) {
              case "middle":
                Zt -= Qt / 2;
                break;
              case "bottom":
                Zt -= Qt;
                break;
            }
            switch (k4) {
              case "center":
                Pt -= wt / 2;
                break;
              case "right":
                Pt -= wt;
                break;
              case "inner":
                b4 === _4 - 1 ? Pt -= wt : b4 > 0 && (Pt -= wt / 2);
                break;
            }
            xe = { left: Pt, top: Zt, width: wt + zt.width, height: Qt + zt.height, color: R4.backdropColor };
          }
          m5.push({ label: y5, font: w4, textOffset: A4, options: { rotation: p5, color: H4, strokeColor: it, strokeWidth: K3, textAlign: It, textBaseline: U4, translation: [x4, M4], backdrop: xe } });
        }
        return m5;
      }
      _getXAxisLabelAlignment() {
        let { position: t, ticks: e } = this.options;
        if (-et(this.labelRotation))
          return t === "top" ? "left" : "right";
        let n2 = "center";
        return e.align === "start" ? n2 = "left" : e.align === "end" ? n2 = "right" : e.align === "inner" && (n2 = "inner"), n2;
      }
      _getYAxisLabelAlignment(t) {
        let { position: e, ticks: { crossAlign: s2, mirror: n2, padding: o2 } } = this.options, a2 = this._getLabelSizes(), r = t + o2, l4 = a2.widest.width, c3, h5;
        return e === "left" ? n2 ? (h5 = this.right + o2, s2 === "near" ? c3 = "left" : s2 === "center" ? (c3 = "center", h5 += l4 / 2) : (c3 = "right", h5 += l4)) : (h5 = this.right - r, s2 === "near" ? c3 = "right" : s2 === "center" ? (c3 = "center", h5 -= l4 / 2) : (c3 = "left", h5 = this.left)) : e === "right" ? n2 ? (h5 = this.left + o2, s2 === "near" ? c3 = "right" : s2 === "center" ? (c3 = "center", h5 -= l4 / 2) : (c3 = "left", h5 -= l4)) : (h5 = this.left + r, s2 === "near" ? c3 = "left" : s2 === "center" ? (c3 = "center", h5 += l4 / 2) : (c3 = "right", h5 = this.right)) : c3 = "right", { textAlign: c3, x: h5 };
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
        let { ctx: t, options: { backgroundColor: e }, left: s2, top: n2, width: o2, height: a2 } = this;
        e && (t.save(), t.fillStyle = e, t.fillRect(s2, n2, o2, a2), t.restore());
      }
      getLineWidthForValue(t) {
        let e = this.options.grid;
        if (!this._isVisible() || !e.display)
          return 0;
        let n2 = this.ticks.findIndex((o2) => o2.value === t);
        return n2 >= 0 ? e.setContext(this.getContext(n2)).lineWidth : 0;
      }
      drawGrid(t) {
        let e = this.options.grid, s2 = this.ctx, n2 = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t)), o2, a2, r = (l4, c3, h5) => {
          !h5.width || !h5.color || (s2.save(), s2.lineWidth = h5.width, s2.strokeStyle = h5.color, s2.setLineDash(h5.borderDash || []), s2.lineDashOffset = h5.borderDashOffset, s2.beginPath(), s2.moveTo(l4.x, l4.y), s2.lineTo(c3.x, c3.y), s2.stroke(), s2.restore());
        };
        if (e.display)
          for (o2 = 0, a2 = n2.length; o2 < a2; ++o2) {
            let l4 = n2[o2];
            e.drawOnChartArea && r({ x: l4.x1, y: l4.y1 }, { x: l4.x2, y: l4.y2 }, l4), e.drawTicks && r({ x: l4.tx1, y: l4.ty1 }, { x: l4.tx2, y: l4.ty2 }, { color: l4.tickColor, width: l4.tickWidth, borderDash: l4.tickBorderDash, borderDashOffset: l4.tickBorderDashOffset });
          }
      }
      drawBorder() {
        let { chart: t, ctx: e, options: { border: s2, grid: n2 } } = this, o2 = s2.setContext(this.getContext()), a2 = s2.display ? o2.width : 0;
        if (!a2)
          return;
        let r = n2.setContext(this.getContext(0)).lineWidth, l4 = this._borderValue, c3, h5, d4, u2;
        this.isHorizontal() ? (c3 = yt(t, this.left, a2) - a2 / 2, h5 = yt(t, this.right, r) + r / 2, d4 = u2 = l4) : (d4 = yt(t, this.top, a2) - a2 / 2, u2 = yt(t, this.bottom, r) + r / 2, c3 = h5 = l4), e.save(), e.lineWidth = o2.width, e.strokeStyle = o2.color, e.beginPath(), e.moveTo(c3, d4), e.lineTo(h5, u2), e.stroke(), e.restore();
      }
      drawLabels(t) {
        if (!this.options.ticks.display)
          return;
        let s2 = this.ctx, n2 = this._computeLabelArea();
        n2 && ne2(s2, n2);
        let o2 = this.getLabelItems(t);
        for (let a2 of o2) {
          let r = a2.options, l4 = a2.font, c3 = a2.label, h5 = a2.textOffset;
          vt(s2, c3, 0, h5, l4, r);
        }
        n2 && oe(s2);
      }
      drawTitle() {
        let { ctx: t, options: { position: e, title: s2, reverse: n2 } } = this;
        if (!s2.display)
          return;
        let o2 = j3(s2.font), a2 = X3(s2.padding), r = s2.align, l4 = o2.lineHeight / 2;
        e === "bottom" || e === "center" || O3(e) ? (l4 += a2.bottom, I3(s2.text) && (l4 += o2.lineHeight * (s2.text.length - 1))) : l4 += a2.top;
        let { titleX: c3, titleY: h5, maxWidth: d4, rotation: u2 } = Dr(this, l4, e, r);
        vt(t, s2.text, 0, 0, o2, { color: s2.color, maxWidth: d4, rotation: u2, textAlign: Pr(r, e, n2), textBaseline: "middle", translation: [c3, h5] });
      }
      draw(t) {
        this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
      }
      _layers() {
        let t = this.options, e = t.ticks && t.ticks.z || 0, s2 = P3(t.grid && t.grid.z, -1), n2 = P3(t.border && t.border.z, 0);
        return !this._isVisible() || this.draw !== i3.prototype.draw ? [{ z: e, draw: (o2) => {
          this.draw(o2);
        } }] : [{ z: s2, draw: (o2) => {
          this.drawBackground(), this.drawGrid(o2), this.drawTitle();
        } }, { z: n2, draw: () => {
          this.drawBorder();
        } }, { z: e, draw: (o2) => {
          this.drawLabels(o2);
        } }];
      }
      getMatchingVisibleMetas(t) {
        let e = this.chart.getSortedVisibleDatasetMetas(), s2 = this.axis + "AxisID", n2 = [], o2, a2;
        for (o2 = 0, a2 = e.length; o2 < a2; ++o2) {
          let r = e[o2];
          r[s2] === this.id && (!t || r.type === t) && n2.push(r);
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
      constructor(t, e, s2) {
        this.type = t, this.scope = e, this.override = s2, this.items = /* @__PURE__ */ Object.create(null);
      }
      isForType(t) {
        return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
      }
      register(t) {
        let e = Object.getPrototypeOf(t), s2;
        Ar(e) && (s2 = this.register(e));
        let n2 = this.items, o2 = t.id, a2 = this.scope + "." + o2;
        if (!o2)
          throw new Error("class does not have id: " + t);
        return o2 in n2 || (n2[o2] = t, Cr(t, a2, s2), this.override && W3.override(t.id, t.overrides)), a2;
      }
      get(t) {
        return this.items[t];
      }
      unregister(t) {
        let e = this.items, s2 = t.id, n2 = this.scope;
        s2 in e && delete e[s2], n2 && s2 in W3[n2] && (delete W3[n2][s2], this.override && delete xt[s2]);
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
      _each(t, e, s2) {
        [...e].forEach((n2) => {
          let o2 = s2 || this._getRegistryForType(n2);
          s2 || o2.isForType(n2) || o2 === this.plugins && n2.id ? this._exec(t, o2, n2) : T3(n2, (a2) => {
            let r = s2 || this._getRegistryForType(a2);
            this._exec(t, r, a2);
          });
        });
      }
      _exec(t, e, s2) {
        let n2 = De(t);
        E2(s2["before" + n2], [], s2), e[t](s2), E2(s2["after" + n2], [], s2);
      }
      _getRegistryForType(t) {
        for (let e = 0; e < this._typedRegistries.length; e++) {
          let s2 = this._typedRegistries[e];
          if (s2.isForType(t))
            return s2;
        }
        return this.plugins;
      }
      _get(t, e, s2) {
        let n2 = e.get(t);
        if (n2 === void 0)
          throw new Error('"' + t + '" is not a registered ' + s2 + ".");
        return n2;
      }
    };
    ht = new Qi();
    Zi = class {
      constructor() {
        this._init = [];
      }
      notify(t, e, s2, n2) {
        e === "beforeInit" && (this._init = this._createDescriptors(t, true), this._notify(this._init, t, "install"));
        let o2 = n2 ? this._descriptors(t).filter(n2) : this._descriptors(t), a2 = this._notify(o2, t, e, s2);
        return e === "afterDestroy" && (this._notify(o2, t, "stop"), this._notify(this._init, t, "uninstall")), a2;
      }
      _notify(t, e, s2, n2) {
        n2 = n2 || {};
        for (let o2 of t) {
          let a2 = o2.plugin, r = a2[s2], l4 = [e, n2, o2.options];
          if (E2(r, l4, a2) === false && n2.cancelable)
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
        let s2 = t && t.config, n2 = P3(s2.options && s2.options.plugins, {}), o2 = Lr(s2);
        return n2 === false && !e ? [] : Rr(t, o2, n2, e);
      }
      _notifyStateChanges(t) {
        let e = this._oldCache || [], s2 = this._cache, n2 = (o2, a2) => o2.filter((r) => !a2.some((l4) => r.plugin.id === l4.plugin.id));
        this._notify(n2(e, s2), t, "stop"), this._notify(n2(s2, e), t, "start");
      }
    };
    wn = /* @__PURE__ */ new Map();
    uo = /* @__PURE__ */ new Set();
    he = (i4, t, e) => {
      let s2 = gt(t, e);
      s2 !== void 0 && i4.add(s2);
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
        let e = t.id, s2 = this.type;
        return We(`${s2}-plugin-${e}`, () => [[`plugins.${e}`, ...t.additionalOptionScopes || []]]);
      }
      _cachedScopes(t, e) {
        let s2 = this._scopeCache, n2 = s2.get(t);
        return (!n2 || e) && (n2 = /* @__PURE__ */ new Map(), s2.set(t, n2)), n2;
      }
      getOptionScopes(t, e, s2) {
        let { options: n2, type: o2 } = this, a2 = this._cachedScopes(t, s2), r = a2.get(e);
        if (r)
          return r;
        let l4 = /* @__PURE__ */ new Set();
        e.forEach((h5) => {
          t && (l4.add(t), h5.forEach((d4) => he(l4, t, d4))), h5.forEach((d4) => he(l4, n2, d4)), h5.forEach((d4) => he(l4, xt[o2] || {}, d4)), h5.forEach((d4) => he(l4, W3, d4)), h5.forEach((d4) => he(l4, Le, d4));
        });
        let c3 = Array.from(l4);
        return c3.length === 0 && c3.push(/* @__PURE__ */ Object.create(null)), uo.has(e) && a2.set(e, c3), c3;
      }
      chartOptionScopes() {
        let { options: t, type: e } = this;
        return [t, xt[e] || {}, W3.datasets[e] || {}, { type: e }, W3, Le];
      }
      resolveNamedOptions(t, e, s2, n2 = [""]) {
        let o2 = { $shared: true }, { resolver: a2, subPrefixes: r } = Pn(this._resolverCache, t, n2), l4 = a2;
        if (Hr(a2, e)) {
          o2.$shared = false, s2 = ut(s2) ? s2() : s2;
          let c3 = this.createResolver(t, s2, r);
          l4 = Ot(a2, s2, c3);
        }
        for (let c3 of e)
          o2[c3] = l4[c3];
        return o2;
      }
      createResolver(t, e, s2 = [""], n2) {
        let { resolver: o2 } = Pn(this._resolverCache, t, s2);
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
        let s2 = this.config = new is(e), n2 = fo(t), o2 = An(n2);
        if (o2)
          throw new Error("Canvas is already in use. Chart with ID '" + o2.id + "' must be destroyed before the canvas with ID '" + o2.canvas.id + "' can be reused.");
        let a2 = s2.createResolver(s2.chartOptionScopes(), this.getContext());
        this.platform = new (s2.platform || gr(n2))(), this.platform.updateConfig(s2);
        let r = this.platform.acquireContext(n2, a2.aspectRatio), l4 = r && r.canvas, c3 = l4 && l4.height, h5 = l4 && l4.width;
        if (this.id = Ds(), this.ctx = r, this.canvas = l4, this.width = h5, this.height = c3, this._options = a2, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new Zi(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = false, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = Bs((d4) => this.update(d4), a2.resizeDelay || 0), this._dataChanges = [], Ye[this.id] = this, !r || !l4) {
          console.error("Failed to create chart: can't acquire context from the given item");
          return;
        }
        mt.listen(this, "complete", On), mt.listen(this, "progress", Ur), this._initialize(), this.attached && this.update();
      }
      get aspectRatio() {
        let { options: { aspectRatio: t, maintainAspectRatio: e }, width: s2, height: n2, _aspectRatio: o2 } = this;
        return L3(t) ? e && o2 ? o2 : n2 ? s2 / n2 : null : t;
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
        let s2 = this.options, n2 = this.canvas, o2 = s2.maintainAspectRatio && this.aspectRatio, a2 = this.platform.getMaximumSize(n2, t, e, o2), r = s2.devicePixelRatio || this.platform.getDevicePixelRatio(), l4 = this.width ? "resize" : "attach";
        this.width = a2.width, this.height = a2.height, this._aspectRatio = this.aspectRatio, Pi(this, r, true) && (this.notifyPlugins("resize", { size: a2 }), E2(s2.onResize, [this, a2], this), this.attached && this._doResize(l4) && this.render());
      }
      ensureScalesHaveIDs() {
        let e = this.options.scales || {};
        T3(e, (s2, n2) => {
          s2.id = n2;
        });
      }
      buildOrUpdateScales() {
        let t = this.options, e = t.scales, s2 = this.scales, n2 = Object.keys(s2).reduce((a2, r) => (a2[r] = false, a2), {}), o2 = [];
        e && (o2 = o2.concat(Object.keys(e).map((a2) => {
          let r = e[a2], l4 = es(a2, r), c3 = l4 === "r", h5 = l4 === "x";
          return { options: r, dposition: c3 ? "chartArea" : h5 ? "bottom" : "left", dtype: c3 ? "radialLinear" : h5 ? "category" : "linear" };
        }))), T3(o2, (a2) => {
          let r = a2.options, l4 = r.id, c3 = es(l4, r), h5 = P3(r.type, a2.dtype);
          (r.position === void 0 || Dn(r.position, c3) !== Dn(a2.dposition)) && (r.position = a2.dposition), n2[l4] = true;
          let d4 = null;
          if (l4 in s2 && s2[l4].type === h5)
            d4 = s2[l4];
          else {
            let u2 = ht.getScale(h5);
            d4 = new u2({ id: l4, type: h5, ctx: this.ctx, chart: this }), s2[d4.id] = d4;
          }
          d4.init(r, t);
        }), T3(n2, (a2, r) => {
          a2 || delete s2[r];
        }), T3(s2, (a2) => {
          q3.configure(this, a2, a2.options), q3.addBox(this, a2);
        });
      }
      _updateMetasets() {
        let t = this._metasets, e = this.data.datasets.length, s2 = t.length;
        if (t.sort((n2, o2) => n2.index - o2.index), s2 > e) {
          for (let n2 = e; n2 < s2; ++n2)
            this._destroyDatasetMeta(n2);
          t.splice(e, s2 - e);
        }
        this._sortedMetasets = t.slice(0).sort(Cn("order", "index"));
      }
      _removeUnreferencedMetasets() {
        let { _metasets: t, data: { datasets: e } } = this;
        t.length > e.length && delete this._stacks, t.forEach((s2, n2) => {
          e.filter((o2) => o2 === s2._dataset).length === 0 && this._destroyDatasetMeta(n2);
        });
      }
      buildOrUpdateControllers() {
        let t = [], e = this.data.datasets, s2, n2;
        for (this._removeUnreferencedMetasets(), s2 = 0, n2 = e.length; s2 < n2; s2++) {
          let o2 = e[s2], a2 = this.getDatasetMeta(s2), r = o2.type || this.config.type;
          if (a2.type && a2.type !== r && (this._destroyDatasetMeta(s2), a2 = this.getDatasetMeta(s2)), a2.type = r, a2.indexAxis = o2.indexAxis || ts(r, this.options), a2.order = o2.order || 0, a2.index = s2, a2.label = "" + o2.label, a2.visible = this.isDatasetVisible(s2), a2.controller)
            a2.controller.updateIndex(s2), a2.controller.linkScales();
          else {
            let l4 = ht.getController(r), { datasetElementType: c3, dataElementType: h5 } = W3.datasets[r];
            Object.assign(l4, { dataElementType: ht.getElement(h5), datasetElementType: c3 && ht.getElement(c3) }), a2.controller = new l4(this, s2), t.push(a2.controller);
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
        let s2 = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()), n2 = this._animationsDisabled = !s2.animation;
        if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", { mode: t, cancelable: true }) === false)
          return;
        let o2 = this.buildOrUpdateControllers();
        this.notifyPlugins("beforeElementsUpdate");
        let a2 = 0;
        for (let c3 = 0, h5 = this.data.datasets.length; c3 < h5; c3++) {
          let { controller: d4 } = this.getDatasetMeta(c3), u2 = !n2 && o2.indexOf(d4) === -1;
          d4.buildOrUpdateElements(u2), a2 = Math.max(+d4.getMaxOverflow(), a2);
        }
        a2 = this._minPadding = s2.layout.autoPadding ? a2 : 0, this._updateLayout(a2), n2 || T3(o2, (c3) => {
          c3.reset();
        }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", { mode: t }), this._layers.sort(Cn("z", "_idx"));
        let { _active: r, _lastEvent: l4 } = this;
        l4 ? this._eventHandler(l4, true) : r.length && this._updateHoverStyles(r, r, true), this.render();
      }
      _updateScales() {
        T3(this.scales, (t) => {
          q3.removeBox(this, t);
        }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
      }
      _checkEventBindings() {
        let t = this.options, e = new Set(Object.keys(this._listeners)), s2 = new Set(t.events);
        (!ai(e, s2) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
      }
      _updateHiddenIndices() {
        let { _hiddenIndices: t } = this, e = this._getUniformDataChanges() || [];
        for (let { method: s2, start: n2, count: o2 } of e) {
          let a2 = s2 === "_removeElements" ? -o2 : o2;
          Yr(t, n2, a2);
        }
      }
      _getUniformDataChanges() {
        let t = this._dataChanges;
        if (!t || !t.length)
          return;
        this._dataChanges = [];
        let e = this.data.datasets.length, s2 = (o2) => new Set(t.filter((a2) => a2[0] === o2).map((a2, r) => r + "," + a2.splice(1).join(","))), n2 = s2(0);
        for (let o2 = 1; o2 < e; o2++)
          if (!ai(n2, s2(o2)))
            return;
        return Array.from(n2).map((o2) => o2.split(",")).map((o2) => ({ method: o2[1], start: +o2[2], count: +o2[3] }));
      }
      _updateLayout(t) {
        if (this.notifyPlugins("beforeLayout", { cancelable: true }) === false)
          return;
        q3.update(this, this.width, this.height, t);
        let e = this.chartArea, s2 = e.width <= 0 || e.height <= 0;
        this._layers = [], T3(this.boxes, (n2) => {
          s2 && n2.position === "chartArea" || (n2.configure && n2.configure(), this._layers.push(...n2._layers()));
        }, this), this._layers.forEach((n2, o2) => {
          n2._idx = o2;
        }), this.notifyPlugins("afterLayout");
      }
      _updateDatasets(t) {
        if (this.notifyPlugins("beforeDatasetsUpdate", { mode: t, cancelable: true }) !== false) {
          for (let e = 0, s2 = this.data.datasets.length; e < s2; ++e)
            this.getDatasetMeta(e).controller.configure();
          for (let e = 0, s2 = this.data.datasets.length; e < s2; ++e)
            this._updateDataset(e, ut(t) ? t({ datasetIndex: e }) : t);
          this.notifyPlugins("afterDatasetsUpdate", { mode: t });
        }
      }
      _updateDataset(t, e) {
        let s2 = this.getDatasetMeta(t), n2 = { meta: s2, index: t, mode: e, cancelable: true };
        this.notifyPlugins("beforeDatasetUpdate", n2) !== false && (s2.controller._update(e), n2.cancelable = false, this.notifyPlugins("afterDatasetUpdate", n2));
      }
      render() {
        this.notifyPlugins("beforeRender", { cancelable: true }) !== false && (mt.has(this) ? this.attached && !mt.running(this) && mt.start(this) : (this.draw(), On({ chart: this })));
      }
      draw() {
        let t;
        if (this._resizeBeforeDraw) {
          let { width: s2, height: n2 } = this._resizeBeforeDraw;
          this._resize(s2, n2), this._resizeBeforeDraw = null;
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
        let e = this._sortedMetasets, s2 = [], n2, o2;
        for (n2 = 0, o2 = e.length; n2 < o2; ++n2) {
          let a2 = e[n2];
          (!t || a2.visible) && s2.push(a2);
        }
        return s2;
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
        let e = this.ctx, s2 = t._clip, n2 = !s2.disabled, o2 = Kr(t, this.chartArea), a2 = { meta: t, index: t.index, cancelable: true };
        this.notifyPlugins("beforeDatasetDraw", a2) !== false && (n2 && ne2(e, { left: s2.left === false ? 0 : o2.left - s2.left, right: s2.right === false ? this.width : o2.right + s2.right, top: s2.top === false ? 0 : o2.top - s2.top, bottom: s2.bottom === false ? this.height : o2.bottom + s2.bottom }), t.controller.draw(), n2 && oe(e), a2.cancelable = false, this.notifyPlugins("afterDatasetDraw", a2));
      }
      isPointInArea(t) {
        return at(t, this.chartArea, this._minPadding);
      }
      getElementsAtEventForMode(t, e, s2, n2) {
        let o2 = qa.modes[e];
        return typeof o2 == "function" ? o2(this, t, s2, n2) : [];
      }
      getDatasetMeta(t) {
        let e = this.data.datasets[t], s2 = this._metasets, n2 = s2.filter((o2) => o2 && o2._dataset === e).pop();
        return n2 || (n2 = { type: null, data: [], dataset: null, controller: null, hidden: null, xAxisID: null, yAxisID: null, order: e && e.order || 0, index: t, _dataset: e, _parsed: [], _sorted: false }, s2.push(n2)), n2;
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
        let s2 = this.getDatasetMeta(t);
        return typeof s2.hidden == "boolean" ? !s2.hidden : !e.hidden;
      }
      setDatasetVisibility(t, e) {
        let s2 = this.getDatasetMeta(t);
        s2.hidden = !e;
      }
      toggleDataVisibility(t) {
        this._hiddenIndices[t] = !this._hiddenIndices[t];
      }
      getDataVisibility(t) {
        return !this._hiddenIndices[t];
      }
      _updateVisibility(t, e, s2) {
        let n2 = s2 ? "show" : "hide", o2 = this.getDatasetMeta(t), a2 = o2.controller._resolveAnimations(void 0, n2);
        Nt(e) ? (o2.data[e].hidden = !s2, this.update()) : (this.setDatasetVisibility(t, s2), a2.update(o2, { visible: s2 }), this.update((r) => r.datasetIndex === t ? n2 : void 0));
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
        let t = this._listeners, e = this.platform, s2 = (o2, a2) => {
          e.addEventListener(this, o2, a2), t[o2] = a2;
        }, n2 = (o2, a2, r) => {
          o2.offsetX = a2, o2.offsetY = r, this._eventHandler(o2);
        };
        T3(this.options.events, (o2) => s2(o2, n2));
      }
      bindResponsiveEvents() {
        this._responsiveListeners || (this._responsiveListeners = {});
        let t = this._responsiveListeners, e = this.platform, s2 = (l4, c3) => {
          e.addEventListener(this, l4, c3), t[l4] = c3;
        }, n2 = (l4, c3) => {
          t[l4] && (e.removeEventListener(this, l4, c3), delete t[l4]);
        }, o2 = (l4, c3) => {
          this.canvas && this.resize(l4, c3);
        }, a2, r = () => {
          n2("attach", r), this.attached = true, this.resize(), s2("resize", o2), s2("detach", a2);
        };
        a2 = () => {
          this.attached = false, n2("resize", o2), this._stop(), this._resize(0, 0), s2("attach", r);
        }, e.isAttached(this.canvas) ? r() : a2();
      }
      unbindEvents() {
        T3(this._listeners, (t, e) => {
          this.platform.removeEventListener(this, e, t);
        }), this._listeners = {}, T3(this._responsiveListeners, (t, e) => {
          this.platform.removeEventListener(this, e, t);
        }), this._responsiveListeners = void 0;
      }
      updateHoverStyle(t, e, s2) {
        let n2 = s2 ? "set" : "remove", o2, a2, r, l4;
        for (e === "dataset" && (o2 = this.getDatasetMeta(t[0].datasetIndex), o2.controller["_" + n2 + "DatasetHoverStyle"]()), r = 0, l4 = t.length; r < l4; ++r) {
          a2 = t[r];
          let c3 = a2 && this.getDatasetMeta(a2.datasetIndex).controller;
          c3 && c3[n2 + "HoverStyle"](a2.element, a2.datasetIndex, a2.index);
        }
      }
      getActiveElements() {
        return this._active || [];
      }
      setActiveElements(t) {
        let e = this._active || [], s2 = t.map(({ datasetIndex: o2, index: a2 }) => {
          let r = this.getDatasetMeta(o2);
          if (!r)
            throw new Error("No dataset found at index " + o2);
          return { datasetIndex: o2, element: r.data[a2], index: a2 };
        });
        !ie(s2, e) && (this._active = s2, this._lastEvent = null, this._updateHoverStyles(s2, e));
      }
      notifyPlugins(t, e, s2) {
        return this._plugins.notify(this, t, e, s2);
      }
      isPluginEnabled(t) {
        return this._plugins._cache.filter((e) => e.plugin.id === t).length === 1;
      }
      _updateHoverStyles(t, e, s2) {
        let n2 = this.options.hover, o2 = (l4, c3) => l4.filter((h5) => !c3.some((d4) => h5.datasetIndex === d4.datasetIndex && h5.index === d4.index)), a2 = o2(e, t), r = s2 ? t : o2(t, e);
        a2.length && this.updateHoverStyle(a2, n2.mode, false), r.length && n2.mode && this.updateHoverStyle(r, n2.mode, true);
      }
      _eventHandler(t, e) {
        let s2 = { event: t, replay: e, cancelable: true, inChartArea: this.isPointInArea(t) }, n2 = (a2) => (a2.options.events || this.options.events).includes(t.native.type);
        if (this.notifyPlugins("beforeEvent", s2, n2) === false)
          return;
        let o2 = this._handleEvent(t, e, s2.inChartArea);
        return s2.cancelable = false, this.notifyPlugins("afterEvent", s2, n2), (o2 || s2.changed) && this.render(), this;
      }
      _handleEvent(t, e, s2) {
        let { _active: n2 = [], options: o2 } = this, a2 = e, r = this._getActiveElements(t, n2, s2, a2), l4 = As(t), c3 = Xr(t, this._lastEvent, s2, l4);
        s2 && (this._lastEvent = null, E2(o2.onHover, [t, r, this], this), l4 && E2(o2.onClick, [t, r, this], this));
        let h5 = !ie(r, n2);
        return (h5 || e) && (this._active = r, this._updateHoverStyles(r, n2, e)), this._lastEvent = c3, h5;
      }
      _getActiveElements(t, e, s2, n2) {
        if (t.type === "mouseout")
          return [];
        if (!s2)
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
      inRange(t, e, s2) {
        let n2 = this.getProps(["x", "y"], s2), { angle: o2, distance: a2 } = hi(n2, { x: t, y: e }), { startAngle: r, endAngle: l4, innerRadius: c3, outerRadius: h5, circumference: d4 } = this.getProps(["startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], s2), u2 = (this.options.spacing + this.options.borderWidth) / 2, g4 = P3(d4, l4 - r) >= F3 || jt(o2, r, l4), p5 = lt(a2, c3 + u2, h5 + u2);
        return g4 && p5;
      }
      getCenterPoint(t) {
        let { x: e, y: s2, startAngle: n2, endAngle: o2, innerRadius: a2, outerRadius: r } = this.getProps(["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"], t), { offset: l4, spacing: c3 } = this.options, h5 = (n2 + o2) / 2, d4 = (a2 + r + c3 + l4) / 2;
        return { x: e + Math.cos(h5) * d4, y: s2 + Math.sin(h5) * d4 };
      }
      tooltipPosition(t) {
        return this.getCenterPoint(t);
      }
      draw(t) {
        let { options: e, circumference: s2 } = this, n2 = (e.offset || 0) / 4, o2 = (e.spacing || 0) / 2, a2 = e.circular;
        if (this.pixelMargin = e.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = s2 > F3 ? Math.floor(s2 / F3) : 0, s2 === 0 || this.innerRadius < 0 || this.outerRadius < 0)
          return;
        t.save();
        let r = (this.startAngle + this.endAngle) / 2;
        t.translate(Math.cos(r) * n2, Math.sin(r) * n2);
        let l4 = 1 - Math.sin(Math.min(z2, s2 || 0)), c3 = n2 * l4;
        t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor, Qr(t, this, c3, o2, a2), Zr(t, this, c3, o2, a2), t.restore();
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
        let s2 = this.options;
        if ((s2.tension || s2.cubicInterpolationMode === "monotone") && !s2.stepped && !this._pointsUpdated) {
          let n2 = s2.spanGaps ? this._loop : this._fullLoop;
          qs(this._points, s2, t, n2, e), this._pointsUpdated = true;
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
        let t = this.segments, e = this.points, s2 = t.length;
        return s2 && e[t[s2 - 1].end];
      }
      interpolate(t, e) {
        let s2 = this.options, n2 = t[e], o2 = this.points, a2 = Li(this, { property: e, start: n2, end: n2 });
        if (!a2.length)
          return;
        let r = [], l4 = nl(s2), c3, h5;
        for (c3 = 0, h5 = a2.length; c3 < h5; ++c3) {
          let { start: d4, end: u2 } = a2[c3], f3 = o2[d4], g4 = o2[u2];
          if (f3 === g4) {
            r.push(f3);
            continue;
          }
          let p5 = Math.abs((n2 - f3[e]) / (g4[e] - f3[e])), m5 = l4(f3, g4, p5, s2.stepped);
          m5[e] = t[e], r.push(m5);
        }
        return r.length === 1 ? r[0] : r;
      }
      pathSegment(t, e, s2) {
        return ns(this)(t, this, e, s2);
      }
      path(t, e, s2) {
        let n2 = this.segments, o2 = ns(this), a2 = this._loop;
        e = e || 0, s2 = s2 || this.points.length - e;
        for (let r of n2)
          a2 &= o2(t, this, r, { start: e, end: e + s2 - 1 });
        return !!a2;
      }
      draw(t, e, s2, n2) {
        let o2 = this.options || {};
        (this.points || []).length && o2.borderWidth && (t.save(), ll(t, this, s2, n2), t.restore()), this.animated && (this._pointsUpdated = false, this._path = void 0);
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
      inRange(t, e, s2) {
        let n2 = this.options, { x: o2, y: a2 } = this.getProps(["x", "y"], s2);
        return Math.pow(t - o2, 2) + Math.pow(e - a2, 2) < Math.pow(n2.hitRadius + n2.radius, 2);
      }
      inXRange(t, e) {
        return Tn(this, t, "x", e);
      }
      inYRange(t, e) {
        return Tn(this, t, "y", e);
      }
      getCenterPoint(t) {
        let { x: e, y: s2 } = this.getProps(["x", "y"], t);
        return { x: e, y: s2 };
      }
      size(t) {
        t = t || this.options || {};
        let e = t.radius || 0;
        e = Math.max(e, e && t.hoverRadius || 0);
        let s2 = e && t.borderWidth || 0;
        return (e + s2) * 2;
      }
      draw(t, e) {
        let s2 = this.options;
        this.skip || s2.radius < 0.1 || !at(this, e, this.size(s2) / 2) || (t.strokeStyle = s2.borderColor, t.lineWidth = s2.borderWidth, t.fillStyle = s2.backgroundColor, Te(t, s2, this.x, this.y));
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
        let { inflateAmount: e, options: { borderColor: s2, backgroundColor: n2 } } = this, { inner: o2, outer: a2 } = dl(this), r = ul(a2.radius) ? Ut : fl;
        t.save(), (a2.w !== o2.w || a2.h !== o2.h) && (t.beginPath(), r(t, Vi(a2, e, o2)), t.clip(), r(t, Vi(o2, -e, a2)), t.fillStyle = s2, t.fill("evenodd")), t.beginPath(), r(t, Vi(o2, e)), t.fillStyle = n2, t.fill(), t.restore();
      }
      inRange(t, e, s2) {
        return Bi(this, t, e, s2);
      }
      inXRange(t, e) {
        return Bi(this, t, null, e);
      }
      inYRange(t, e) {
        return Bi(this, null, t, e);
      }
      getCenterPoint(t) {
        let { x: e, y: s2, base: n2, horizontal: o2 } = this.getProps(["x", "y", "base", "horizontal"], t);
        return { x: o2 ? (e + n2) / 2 : e, y: o2 ? s2 : (s2 + n2) / 2 };
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
      let { data: { datasets: s2 }, options: n2 } = i4.config, { elements: o2 } = n2;
      if (!e.forceOverride && (En(s2) || xl(n2) || o2 && En(o2)))
        return;
      let a2 = _l(i4);
      s2.forEach(a2);
    } };
    Sl = { id: "decimation", defaults: { algorithm: "min-max", enabled: false }, beforeElementsUpdate: (i4, t, e) => {
      if (!e.enabled) {
        In(i4);
        return;
      }
      let s2 = i4.width;
      i4.data.datasets.forEach((n2, o2) => {
        let { _data: a2, indexAxis: r } = n2, l4 = i4.getDatasetMeta(o2), c3 = a2 || n2.data;
        if (Yt([r, i4.options.indexAxis]) === "y" || !l4.controller.supportsDecimation)
          return;
        let h5 = i4.scales[l4.xAxisID];
        if (h5.type !== "linear" && h5.type !== "time" || i4.options.parsing)
          return;
        let { start: d4, count: u2 } = kl(l4, c3), f3 = e.threshold || 4 * s2;
        if (u2 <= f3) {
          xo(n2);
          return;
        }
        L3(a2) && (n2._data = c3, delete n2.data, Object.defineProperty(n2, "data", { configurable: true, enumerable: true, get: function() {
          return this._decimated;
        }, set: function(p5) {
          this._data = p5;
        } }));
        let g4;
        switch (e.algorithm) {
          case "lttb":
            g4 = vl(c3, d4, u2, s2, e);
            break;
          case "min-max":
            g4 = Ml(c3, d4, u2, s2);
            break;
          default:
            throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`);
        }
        n2._decimated = g4;
      });
    }, destroy(i4) {
      In(i4);
    } };
    Qe = class {
      constructor(t) {
        this.x = t.x, this.y = t.y, this.radius = t.radius;
      }
      pathSegment(t, e, s2) {
        let { x: n2, y: o2, radius: a2 } = this;
        return e = e || { start: 0, end: F3 }, t.arc(n2, o2, a2, e.end, e.start, true), !s2.bounds;
      }
      interpolate(t) {
        let { x: e, y: s2, radius: n2 } = this, o2 = t.angle;
        return { x: e + Math.cos(o2) * n2, y: s2 + Math.sin(o2) * n2, angle: o2 };
      }
    };
    $l = { id: "filler", afterDatasetsUpdate(i4, t, e) {
      let s2 = (i4.data.datasets || []).length, n2 = [], o2, a2, r, l4;
      for (a2 = 0; a2 < s2; ++a2)
        o2 = i4.getDatasetMeta(a2), r = o2.dataset, l4 = null, r && r.options && r instanceof Gt && (l4 = { visible: i4.isDatasetVisible(a2), index: a2, fill: Cl(r, a2, s2), chart: i4, axis: o2.controller.options.indexAxis, scale: o2.vScale, line: r }), o2.$filler = l4, n2.push(l4);
      for (a2 = 0; a2 < s2; ++a2)
        l4 = n2[a2], !(!l4 || l4.fill === false) && (l4.fill = Dl(n2, a2, e.propagate));
    }, beforeDraw(i4, t, e) {
      let s2 = e.drawTime === "beforeDraw", n2 = i4.getSortedVisibleDatasetMetas(), o2 = i4.chartArea;
      for (let a2 = n2.length - 1; a2 >= 0; --a2) {
        let r = n2[a2].$filler;
        r && (r.line.updateControlPoints(o2, r.axis), s2 && r.fill && Wi(i4.ctx, r, o2));
      }
    }, beforeDatasetsDraw(i4, t, e) {
      if (e.drawTime !== "beforeDatasetsDraw")
        return;
      let s2 = i4.getSortedVisibleDatasetMetas();
      for (let n2 = s2.length - 1; n2 >= 0; --n2) {
        let o2 = s2[n2].$filler;
        Fn(o2) && Wi(i4.ctx, o2, i4.chartArea);
      }
    }, beforeDatasetDraw(i4, t, e) {
      let s2 = t.meta.$filler;
      !Fn(s2) || e.drawTime !== "beforeDatasetDraw" || Wi(i4.ctx, s2, i4.chartArea);
    }, defaults: { propagate: true, drawTime: "beforeDatasetDraw" } };
    Nn = (i4, t) => {
      let { boxHeight: e = t, boxWidth: s2 = t } = i4;
      return i4.usePointStyle && (e = Math.min(e, t), s2 = i4.pointStyleWidth || Math.min(s2, t)), { boxWidth: s2, boxHeight: e, itemHeight: Math.max(t, e) };
    };
    Ul = (i4, t) => i4 !== null && t !== null && i4.datasetIndex === t.datasetIndex && i4.index === t.index;
    Ze = class extends nt {
      constructor(t) {
        super(), this._added = false, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = false, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
      }
      update(t, e, s2) {
        this.maxWidth = t, this.maxHeight = e, this._margins = s2, this.setDimensions(), this.buildLabels(), this.fit();
      }
      setDimensions() {
        this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
      }
      buildLabels() {
        let t = this.options.labels || {}, e = E2(t.generateLabels, [this.chart], this) || [];
        t.filter && (e = e.filter((s2) => t.filter(s2, this.chart.data))), t.sort && (e = e.sort((s2, n2) => t.sort(s2, n2, this.chart.data))), this.options.reverse && e.reverse(), this.legendItems = e;
      }
      fit() {
        let { options: t, ctx: e } = this;
        if (!t.display) {
          this.width = this.height = 0;
          return;
        }
        let s2 = t.labels, n2 = j3(s2.font), o2 = n2.size, a2 = this._computeTitleHeight(), { boxWidth: r, itemHeight: l4 } = Nn(s2, o2), c3, h5;
        e.font = n2.string, this.isHorizontal() ? (c3 = this.maxWidth, h5 = this._fitRows(a2, o2, r, l4) + 10) : (h5 = this.maxHeight, c3 = this._fitCols(a2, n2, r, l4) + 10), this.width = Math.min(c3, t.maxWidth || this.maxWidth), this.height = Math.min(h5, t.maxHeight || this.maxHeight);
      }
      _fitRows(t, e, s2, n2) {
        let { ctx: o2, maxWidth: a2, options: { labels: { padding: r } } } = this, l4 = this.legendHitBoxes = [], c3 = this.lineWidths = [0], h5 = n2 + r, d4 = t;
        o2.textAlign = "left", o2.textBaseline = "middle";
        let u2 = -1, f3 = -h5;
        return this.legendItems.forEach((g4, p5) => {
          let m5 = s2 + e / 2 + o2.measureText(g4.text).width;
          (p5 === 0 || c3[c3.length - 1] + m5 + 2 * r > a2) && (d4 += h5, c3[c3.length - (p5 > 0 ? 0 : 1)] = 0, f3 += h5, u2++), l4[p5] = { left: 0, top: f3, row: u2, width: m5, height: n2 }, c3[c3.length - 1] += m5 + r;
        }), d4;
      }
      _fitCols(t, e, s2, n2) {
        let { ctx: o2, maxHeight: a2, options: { labels: { padding: r } } } = this, l4 = this.legendHitBoxes = [], c3 = this.columnSizes = [], h5 = a2 - t, d4 = r, u2 = 0, f3 = 0, g4 = 0, p5 = 0;
        return this.legendItems.forEach((m5, b4) => {
          let { itemWidth: _4, itemHeight: v5 } = Yl(s2, e, o2, m5, n2);
          b4 > 0 && f3 + v5 + 2 * r > h5 && (d4 += u2 + r, c3.push({ width: u2, height: f3 }), g4 += u2 + r, p5++, u2 = f3 = 0), l4[b4] = { left: g4, top: f3, col: p5, width: _4, height: v5 }, u2 = Math.max(u2, _4), f3 += v5 + r;
        }), d4 += u2, c3.push({ width: u2, height: f3 }), d4;
      }
      adjustHitBoxes() {
        if (!this.options.display)
          return;
        let t = this._computeTitleHeight(), { legendHitBoxes: e, options: { align: s2, labels: { padding: n2 }, rtl: o2 } } = this, a2 = Lt(o2, this.left, this.width);
        if (this.isHorizontal()) {
          let r = 0, l4 = Y3(s2, this.left + n2, this.right - this.lineWidths[r]);
          for (let c3 of e)
            r !== c3.row && (r = c3.row, l4 = Y3(s2, this.left + n2, this.right - this.lineWidths[r])), c3.top += this.top + t + n2, c3.left = a2.leftForLtr(a2.x(l4), c3.width), l4 += c3.width + n2;
        } else {
          let r = 0, l4 = Y3(s2, this.top + t + n2, this.bottom - this.columnSizes[r].height);
          for (let c3 of e)
            c3.col !== r && (r = c3.col, l4 = Y3(s2, this.top + t + n2, this.bottom - this.columnSizes[r].height)), c3.top = l4, c3.left += this.left + n2, c3.left = a2.leftForLtr(a2.x(c3.left), c3.width), l4 += c3.height + n2;
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
        let { options: t, columnSizes: e, lineWidths: s2, ctx: n2 } = this, { align: o2, labels: a2 } = t, r = W3.color, l4 = Lt(t.rtl, this.left, this.width), c3 = j3(a2.font), { padding: h5 } = a2, d4 = c3.size, u2 = d4 / 2, f3;
        this.drawTitle(), n2.textAlign = l4.textAlign("left"), n2.textBaseline = "middle", n2.lineWidth = 0.5, n2.font = c3.string;
        let { boxWidth: g4, boxHeight: p5, itemHeight: m5 } = Nn(a2, d4), b4 = function(M4, k4, S5) {
          if (isNaN(g4) || g4 <= 0 || isNaN(p5) || p5 < 0)
            return;
          n2.save();
          let w4 = P3(S5.lineWidth, 1);
          if (n2.fillStyle = P3(S5.fillStyle, r), n2.lineCap = P3(S5.lineCap, "butt"), n2.lineDashOffset = P3(S5.lineDashOffset, 0), n2.lineJoin = P3(S5.lineJoin, "miter"), n2.lineWidth = w4, n2.strokeStyle = P3(S5.strokeStyle, r), n2.setLineDash(P3(S5.lineDash, [])), a2.usePointStyle) {
            let D5 = { radius: p5 * Math.SQRT2 / 2, pointStyle: S5.pointStyle, rotation: S5.rotation, borderWidth: w4 }, C5 = l4.xPlus(M4, g4 / 2), A4 = k4 + u2;
            yi(n2, D5, C5, A4, a2.pointStyleWidth && g4);
          } else {
            let D5 = k4 + Math.max((d4 - p5) / 2, 0), C5 = l4.leftForLtr(M4, g4), A4 = Mt(S5.borderRadius);
            n2.beginPath(), Object.values(A4).some((U4) => U4 !== 0) ? Ut(n2, { x: C5, y: D5, w: g4, h: p5, radius: A4 }) : n2.rect(C5, D5, g4, p5), n2.fill(), w4 !== 0 && n2.stroke();
          }
          n2.restore();
        }, _4 = function(M4, k4, S5) {
          vt(n2, S5.text, M4, k4 + m5 / 2, c3, { strikethrough: S5.hidden, textAlign: l4.textAlign(S5.textAlign) });
        }, v5 = this.isHorizontal(), y5 = this._computeTitleHeight();
        v5 ? f3 = { x: Y3(o2, this.left + h5, this.right - s2[0]), y: this.top + h5 + y5, line: 0 } : f3 = { x: this.left + h5, y: Y3(o2, this.top + y5 + h5, this.bottom - e[0].height), line: 0 }, Ci(this.ctx, t.textDirection);
        let x4 = m5 + h5;
        this.legendItems.forEach((M4, k4) => {
          n2.strokeStyle = M4.fontColor, n2.fillStyle = M4.fontColor;
          let S5 = n2.measureText(M4.text).width, w4 = l4.textAlign(M4.textAlign || (M4.textAlign = a2.textAlign)), D5 = g4 + u2 + S5, C5 = f3.x, A4 = f3.y;
          l4.setWidth(this.width), v5 ? k4 > 0 && C5 + D5 + h5 > this.right && (A4 = f3.y += x4, f3.line++, C5 = f3.x = Y3(o2, this.left + h5, this.right - s2[f3.line])) : k4 > 0 && A4 + x4 > this.bottom && (C5 = f3.x = C5 + e[f3.line].width + h5, f3.line++, A4 = f3.y = Y3(o2, this.top + y5 + h5, this.bottom - e[f3.line].height));
          let U4 = l4.x(C5);
          if (b4(U4, A4, M4), C5 = Vs(w4, C5 + g4 + u2, v5 ? C5 + D5 : this.right, t.rtl), _4(l4.x(C5), A4, M4), v5)
            f3.x += D5 + h5;
          else if (typeof M4.text != "string") {
            let tt = c3.lineHeight;
            f3.y += vo(M4, tt) + h5;
          } else
            f3.y += x4;
        }), Oi(this.ctx, t.textDirection);
      }
      drawTitle() {
        let t = this.options, e = t.title, s2 = j3(e.font), n2 = X3(e.padding);
        if (!e.display)
          return;
        let o2 = Lt(t.rtl, this.left, this.width), a2 = this.ctx, r = e.position, l4 = s2.size / 2, c3 = n2.top + l4, h5, d4 = this.left, u2 = this.width;
        if (this.isHorizontal())
          u2 = Math.max(...this.lineWidths), h5 = this.top + c3, d4 = Y3(t.align, d4, this.right - u2);
        else {
          let g4 = this.columnSizes.reduce((p5, m5) => Math.max(p5, m5.height), 0);
          h5 = c3 + Y3(t.align, this.top, this.bottom - g4 - t.labels.padding - this._computeTitleHeight());
        }
        let f3 = Y3(r, d4, d4 + u2);
        a2.textAlign = o2.textAlign(Ae(r)), a2.textBaseline = "middle", a2.strokeStyle = e.color, a2.fillStyle = e.color, a2.font = s2.string, vt(a2, e.text, f3, h5, s2);
      }
      _computeTitleHeight() {
        let t = this.options.title, e = j3(t.font), s2 = X3(t.padding);
        return t.display ? e.lineHeight + s2.height : 0;
      }
      _getLegendItemAt(t, e) {
        let s2, n2, o2;
        if (lt(t, this.left, this.right) && lt(e, this.top, this.bottom)) {
          for (o2 = this.legendHitBoxes, s2 = 0; s2 < o2.length; ++s2)
            if (n2 = o2[s2], lt(t, n2.left, n2.left + n2.width) && lt(e, n2.top, n2.top + n2.height))
              return this.legendItems[s2];
        }
        return null;
      }
      handleEvent(t) {
        let e = this.options;
        if (!ql(t.type, e))
          return;
        let s2 = this._getLegendItemAt(t.x, t.y);
        if (t.type === "mousemove" || t.type === "mouseout") {
          let n2 = this._hoveredItem, o2 = Ul(n2, s2);
          n2 && !o2 && E2(e.onLeave, [t, n2, this], this), this._hoveredItem = s2, s2 && !o2 && E2(e.onHover, [t, s2, this], this);
        } else
          s2 && E2(e.onClick, [t, s2, this], this);
      }
    };
    Gl = { id: "legend", _element: Ze, start(i4, t, e) {
      let s2 = i4.legend = new Ze({ ctx: i4.ctx, options: e, chart: i4 });
      q3.configure(i4, s2, e), q3.addBox(i4, s2);
    }, stop(i4) {
      q3.removeBox(i4, i4.legend), delete i4.legend;
    }, beforeUpdate(i4, t, e) {
      let s2 = i4.legend;
      q3.configure(i4, s2, e), s2.options = e;
    }, afterUpdate(i4) {
      let t = i4.legend;
      t.buildLabels(), t.adjustHitBoxes();
    }, afterEvent(i4, t) {
      t.replay || i4.legend.handleEvent(t.event);
    }, defaults: { display: true, position: "top", align: "center", fullSize: true, reverse: false, weight: 1e3, onClick(i4, t, e) {
      let s2 = t.datasetIndex, n2 = e.chart;
      n2.isDatasetVisible(s2) ? (n2.hide(s2), t.hidden = true) : (n2.show(s2), t.hidden = false);
    }, onHover: null, onLeave: null, labels: { color: (i4) => i4.chart.options.color, boxWidth: 40, padding: 10, generateLabels(i4) {
      let t = i4.data.datasets, { labels: { usePointStyle: e, pointStyle: s2, textAlign: n2, color: o2, useBorderRadius: a2, borderRadius: r } } = i4.legend.options;
      return i4._getSortedDatasetMetas().map((l4) => {
        let c3 = l4.controller.getStyle(e ? 0 : void 0), h5 = X3(c3.borderWidth);
        return { text: t[l4.index].label, fillStyle: c3.backgroundColor, fontColor: o2, hidden: !l4.visible, lineCap: c3.borderCapStyle, lineDash: c3.borderDash, lineDashOffset: c3.borderDashOffset, lineJoin: c3.borderJoinStyle, lineWidth: (h5.width + h5.height) / 4, strokeStyle: c3.borderColor, pointStyle: s2 || c3.pointStyle, rotation: c3.rotation, textAlign: n2 || c3.textAlign, borderRadius: a2 && (r || c3.borderRadius), datasetIndex: l4.index };
      }, this);
    } }, title: { color: (i4) => i4.chart.options.color, display: false, position: "center", text: "" } }, descriptors: { _scriptable: (i4) => !i4.startsWith("on"), labels: { _scriptable: (i4) => !["generateLabels", "filter", "sort"].includes(i4) } } };
    pe = class extends nt {
      constructor(t) {
        super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
      }
      update(t, e) {
        let s2 = this.options;
        if (this.left = 0, this.top = 0, !s2.display) {
          this.width = this.height = this.right = this.bottom = 0;
          return;
        }
        this.width = this.right = t, this.height = this.bottom = e;
        let n2 = I3(s2.text) ? s2.text.length : 1;
        this._padding = X3(s2.padding);
        let o2 = n2 * j3(s2.font).lineHeight + this._padding.height;
        this.isHorizontal() ? this.height = o2 : this.width = o2;
      }
      isHorizontal() {
        let t = this.options.position;
        return t === "top" || t === "bottom";
      }
      _drawArgs(t) {
        let { top: e, left: s2, bottom: n2, right: o2, options: a2 } = this, r = a2.align, l4 = 0, c3, h5, d4;
        return this.isHorizontal() ? (h5 = Y3(r, s2, o2), d4 = e + t, c3 = o2 - s2) : (a2.position === "left" ? (h5 = s2 + t, d4 = Y3(r, n2, e), l4 = z2 * -0.5) : (h5 = o2 - t, d4 = Y3(r, e, n2), l4 = z2 * 0.5), c3 = n2 - e), { titleX: h5, titleY: d4, maxWidth: c3, rotation: l4 };
      }
      draw() {
        let t = this.ctx, e = this.options;
        if (!e.display)
          return;
        let s2 = j3(e.font), o2 = s2.lineHeight / 2 + this._padding.top, { titleX: a2, titleY: r, maxWidth: l4, rotation: c3 } = this._drawArgs(o2);
        vt(t, e.text, 0, 0, s2, { color: e.color, maxWidth: l4, rotation: c3, textAlign: Ae(e.align), textBaseline: "middle", translation: [a2, r] });
      }
    };
    Ql = { id: "title", _element: pe, start(i4, t, e) {
      Jl(i4, e);
    }, stop(i4) {
      let t = i4.titleBlock;
      q3.removeBox(i4, t), delete i4.titleBlock;
    }, beforeUpdate(i4, t, e) {
      let s2 = i4.titleBlock;
      q3.configure(i4, s2, e), s2.options = e;
    }, defaults: { align: "center", display: false, font: { weight: "bold" }, fullSize: true, padding: 10, position: "top", text: "", weight: 2e3 }, defaultRoutes: { color: "color" }, descriptors: { _scriptable: true, _indexable: false } };
    He = /* @__PURE__ */ new WeakMap();
    Zl = { id: "subtitle", start(i4, t, e) {
      let s2 = new pe({ ctx: i4.ctx, options: e, chart: i4 });
      q3.configure(i4, s2, e), q3.addBox(i4, s2), He.set(i4, s2);
    }, stop(i4) {
      q3.removeBox(i4, He.get(i4)), He.delete(i4);
    }, beforeUpdate(i4, t, e) {
      let s2 = He.get(i4);
      q3.configure(i4, s2, e), s2.options = e;
    }, defaults: { align: "center", display: false, font: { weight: "normal" }, fullSize: true, padding: 0, position: "top", text: "", weight: 1500 }, defaultRoutes: { color: "color" }, descriptors: { _scriptable: true, _indexable: false } };
    ue = { average(i4) {
      if (!i4.length)
        return false;
      let t, e, s2 = /* @__PURE__ */ new Set(), n2 = 0, o2 = 0;
      for (t = 0, e = i4.length; t < e; ++t) {
        let r = i4[t].element;
        if (r && r.hasValue()) {
          let l4 = r.tooltipPosition();
          s2.add(l4.x), n2 += l4.y, ++o2;
        }
      }
      return { x: [...s2].reduce((r, l4) => r + l4) / s2.size, y: n2 / o2 };
    }, nearest(i4, t) {
      if (!i4.length)
        return false;
      let e = t.x, s2 = t.y, n2 = Number.POSITIVE_INFINITY, o2, a2, r;
      for (o2 = 0, a2 = i4.length; o2 < a2; ++o2) {
        let l4 = i4[o2].element;
        if (l4 && l4.hasValue()) {
          let c3 = l4.getCenterPoint(), h5 = we(t, c3);
          h5 < n2 && (n2 = h5, r = l4);
        }
      }
      if (r) {
        let l4 = r.tooltipPosition();
        e = l4.x, s2 = l4.y;
      }
      return { x: e, y: s2 };
    } };
    Mo = { beforeTitle: rt, title(i4) {
      if (i4.length > 0) {
        let t = i4[0], e = t.chart.data.labels, s2 = e ? e.length : 0;
        if (this && this.options && this.options.mode === "dataset")
          return t.dataset.label || "";
        if (t.label)
          return t.label;
        if (s2 > 0 && t.dataIndex < s2)
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
        let e = this.chart, s2 = this.options.setContext(this.getContext()), n2 = s2.enabled && e.options.animation && s2.animations, o2 = new Xe(this.chart, n2);
        return n2._cacheable && (this._cachedAnimations = Object.freeze(o2)), o2;
      }
      getContext() {
        return this.$context || (this.$context = ac(this.chart.getContext(), this, this._tooltipItems));
      }
      getTitle(t, e) {
        let { callbacks: s2 } = e, n2 = Q3(s2, "beforeTitle", this, t), o2 = Q3(s2, "title", this, t), a2 = Q3(s2, "afterTitle", this, t), r = [];
        return r = ct(r, bt(n2)), r = ct(r, bt(o2)), r = ct(r, bt(a2)), r;
      }
      getBeforeBody(t, e) {
        return Un(Q3(e.callbacks, "beforeBody", this, t));
      }
      getBody(t, e) {
        let { callbacks: s2 } = e, n2 = [];
        return T3(t, (o2) => {
          let a2 = { before: [], lines: [], after: [] }, r = Yn(s2, o2);
          ct(a2.before, bt(Q3(r, "beforeLabel", this, o2))), ct(a2.lines, Q3(r, "label", this, o2)), ct(a2.after, bt(Q3(r, "afterLabel", this, o2))), n2.push(a2);
        }), n2;
      }
      getAfterBody(t, e) {
        return Un(Q3(e.callbacks, "afterBody", this, t));
      }
      getFooter(t, e) {
        let { callbacks: s2 } = e, n2 = Q3(s2, "beforeFooter", this, t), o2 = Q3(s2, "footer", this, t), a2 = Q3(s2, "afterFooter", this, t), r = [];
        return r = ct(r, bt(n2)), r = ct(r, bt(o2)), r = ct(r, bt(a2)), r;
      }
      _createItems(t) {
        let e = this._active, s2 = this.chart.data, n2 = [], o2 = [], a2 = [], r = [], l4, c3;
        for (l4 = 0, c3 = e.length; l4 < c3; ++l4)
          r.push(tc(this.chart, e[l4]));
        return t.filter && (r = r.filter((h5, d4, u2) => t.filter(h5, d4, u2, s2))), t.itemSort && (r = r.sort((h5, d4) => t.itemSort(h5, d4, s2))), T3(r, (h5) => {
          let d4 = Yn(t.callbacks, h5);
          n2.push(Q3(d4, "labelColor", this, h5)), o2.push(Q3(d4, "labelPointStyle", this, h5)), a2.push(Q3(d4, "labelTextColor", this, h5));
        }), this.labelColors = n2, this.labelPointStyles = o2, this.labelTextColors = a2, this.dataPoints = r, r;
      }
      update(t, e) {
        let s2 = this.options.setContext(this.getContext()), n2 = this._active, o2, a2 = [];
        if (!n2.length)
          this.opacity !== 0 && (o2 = { opacity: 0 });
        else {
          let r = ue[s2.position].call(this, n2, this._eventPosition);
          a2 = this._createItems(s2), this.title = this.getTitle(a2, s2), this.beforeBody = this.getBeforeBody(a2, s2), this.body = this.getBody(a2, s2), this.afterBody = this.getAfterBody(a2, s2), this.footer = this.getFooter(a2, s2);
          let l4 = this._size = Hn(this, s2), c3 = Object.assign({}, r, l4), h5 = jn(this.chart, s2, c3), d4 = $n(s2, c3, h5, this.chart);
          this.xAlign = h5.xAlign, this.yAlign = h5.yAlign, o2 = { opacity: 1, x: d4.x, y: d4.y, width: l4.width, height: l4.height, caretX: r.x, caretY: r.y };
        }
        this._tooltipItems = a2, this.$context = void 0, o2 && this._resolveAnimations().update(this, o2), t && s2.external && s2.external.call(this, { chart: this.chart, tooltip: this, replay: e });
      }
      drawCaret(t, e, s2, n2) {
        let o2 = this.getCaretPosition(t, s2, n2);
        e.lineTo(o2.x1, o2.y1), e.lineTo(o2.x2, o2.y2), e.lineTo(o2.x3, o2.y3);
      }
      getCaretPosition(t, e, s2) {
        let { xAlign: n2, yAlign: o2 } = this, { caretSize: a2, cornerRadius: r } = s2, { topLeft: l4, topRight: c3, bottomLeft: h5, bottomRight: d4 } = Mt(r), { x: u2, y: f3 } = t, { width: g4, height: p5 } = e, m5, b4, _4, v5, y5, x4;
        return o2 === "center" ? (y5 = f3 + p5 / 2, n2 === "left" ? (m5 = u2, b4 = m5 - a2, v5 = y5 + a2, x4 = y5 - a2) : (m5 = u2 + g4, b4 = m5 + a2, v5 = y5 - a2, x4 = y5 + a2), _4 = m5) : (n2 === "left" ? b4 = u2 + Math.max(l4, h5) + a2 : n2 === "right" ? b4 = u2 + g4 - Math.max(c3, d4) - a2 : b4 = this.caretX, o2 === "top" ? (v5 = f3, y5 = v5 - a2, m5 = b4 - a2, _4 = b4 + a2) : (v5 = f3 + p5, y5 = v5 + a2, m5 = b4 + a2, _4 = b4 - a2), x4 = v5), { x1: m5, x2: b4, x3: _4, y1: v5, y2: y5, y3: x4 };
      }
      drawTitle(t, e, s2) {
        let n2 = this.title, o2 = n2.length, a2, r, l4;
        if (o2) {
          let c3 = Lt(s2.rtl, this.x, this.width);
          for (t.x = je(this, s2.titleAlign, s2), e.textAlign = c3.textAlign(s2.titleAlign), e.textBaseline = "middle", a2 = j3(s2.titleFont), r = s2.titleSpacing, e.fillStyle = s2.titleColor, e.font = a2.string, l4 = 0; l4 < o2; ++l4)
            e.fillText(n2[l4], c3.x(t.x), t.y + a2.lineHeight / 2), t.y += a2.lineHeight + r, l4 + 1 === o2 && (t.y += s2.titleMarginBottom - r);
        }
      }
      _drawColorBox(t, e, s2, n2, o2) {
        let a2 = this.labelColors[s2], r = this.labelPointStyles[s2], { boxHeight: l4, boxWidth: c3 } = o2, h5 = j3(o2.bodyFont), d4 = je(this, "left", o2), u2 = n2.x(d4), f3 = l4 < h5.lineHeight ? (h5.lineHeight - l4) / 2 : 0, g4 = e.y + f3;
        if (o2.usePointStyle) {
          let p5 = { radius: Math.min(c3, l4) / 2, pointStyle: r.pointStyle, rotation: r.rotation, borderWidth: 1 }, m5 = n2.leftForLtr(u2, c3) + c3 / 2, b4 = g4 + l4 / 2;
          t.strokeStyle = o2.multiKeyBackground, t.fillStyle = o2.multiKeyBackground, Te(t, p5, m5, b4), t.strokeStyle = a2.borderColor, t.fillStyle = a2.backgroundColor, Te(t, p5, m5, b4);
        } else {
          t.lineWidth = O3(a2.borderWidth) ? Math.max(...Object.values(a2.borderWidth)) : a2.borderWidth || 1, t.strokeStyle = a2.borderColor, t.setLineDash(a2.borderDash || []), t.lineDashOffset = a2.borderDashOffset || 0;
          let p5 = n2.leftForLtr(u2, c3), m5 = n2.leftForLtr(n2.xPlus(u2, 1), c3 - 2), b4 = Mt(a2.borderRadius);
          Object.values(b4).some((_4) => _4 !== 0) ? (t.beginPath(), t.fillStyle = o2.multiKeyBackground, Ut(t, { x: p5, y: g4, w: c3, h: l4, radius: b4 }), t.fill(), t.stroke(), t.fillStyle = a2.backgroundColor, t.beginPath(), Ut(t, { x: m5, y: g4 + 1, w: c3 - 2, h: l4 - 2, radius: b4 }), t.fill()) : (t.fillStyle = o2.multiKeyBackground, t.fillRect(p5, g4, c3, l4), t.strokeRect(p5, g4, c3, l4), t.fillStyle = a2.backgroundColor, t.fillRect(m5, g4 + 1, c3 - 2, l4 - 2));
        }
        t.fillStyle = this.labelTextColors[s2];
      }
      drawBody(t, e, s2) {
        let { body: n2 } = this, { bodySpacing: o2, bodyAlign: a2, displayColors: r, boxHeight: l4, boxWidth: c3, boxPadding: h5 } = s2, d4 = j3(s2.bodyFont), u2 = d4.lineHeight, f3 = 0, g4 = Lt(s2.rtl, this.x, this.width), p5 = function(S5) {
          e.fillText(S5, g4.x(t.x + f3), t.y + u2 / 2), t.y += u2 + o2;
        }, m5 = g4.textAlign(a2), b4, _4, v5, y5, x4, M4, k4;
        for (e.textAlign = a2, e.textBaseline = "middle", e.font = d4.string, t.x = je(this, m5, s2), e.fillStyle = s2.bodyColor, T3(this.beforeBody, p5), f3 = r && m5 !== "right" ? a2 === "center" ? c3 / 2 + h5 : c3 + 2 + h5 : 0, y5 = 0, M4 = n2.length; y5 < M4; ++y5) {
          for (b4 = n2[y5], _4 = this.labelTextColors[y5], e.fillStyle = _4, T3(b4.before, p5), v5 = b4.lines, r && v5.length && (this._drawColorBox(e, t, y5, g4, s2), u2 = Math.max(d4.lineHeight, l4)), x4 = 0, k4 = v5.length; x4 < k4; ++x4)
            p5(v5[x4]), u2 = d4.lineHeight;
          T3(b4.after, p5);
        }
        f3 = 0, u2 = d4.lineHeight, T3(this.afterBody, p5), t.y -= o2;
      }
      drawFooter(t, e, s2) {
        let n2 = this.footer, o2 = n2.length, a2, r;
        if (o2) {
          let l4 = Lt(s2.rtl, this.x, this.width);
          for (t.x = je(this, s2.footerAlign, s2), t.y += s2.footerMarginTop, e.textAlign = l4.textAlign(s2.footerAlign), e.textBaseline = "middle", a2 = j3(s2.footerFont), e.fillStyle = s2.footerColor, e.font = a2.string, r = 0; r < o2; ++r)
            e.fillText(n2[r], l4.x(t.x), t.y + a2.lineHeight / 2), t.y += a2.lineHeight + s2.footerSpacing;
        }
      }
      drawBackground(t, e, s2, n2) {
        let { xAlign: o2, yAlign: a2 } = this, { x: r, y: l4 } = t, { width: c3, height: h5 } = s2, { topLeft: d4, topRight: u2, bottomLeft: f3, bottomRight: g4 } = Mt(n2.cornerRadius);
        e.fillStyle = n2.backgroundColor, e.strokeStyle = n2.borderColor, e.lineWidth = n2.borderWidth, e.beginPath(), e.moveTo(r + d4, l4), a2 === "top" && this.drawCaret(t, e, s2, n2), e.lineTo(r + c3 - u2, l4), e.quadraticCurveTo(r + c3, l4, r + c3, l4 + u2), a2 === "center" && o2 === "right" && this.drawCaret(t, e, s2, n2), e.lineTo(r + c3, l4 + h5 - g4), e.quadraticCurveTo(r + c3, l4 + h5, r + c3 - g4, l4 + h5), a2 === "bottom" && this.drawCaret(t, e, s2, n2), e.lineTo(r + f3, l4 + h5), e.quadraticCurveTo(r, l4 + h5, r, l4 + h5 - f3), a2 === "center" && o2 === "left" && this.drawCaret(t, e, s2, n2), e.lineTo(r, l4 + d4), e.quadraticCurveTo(r, l4, r + d4, l4), e.closePath(), e.fill(), n2.borderWidth > 0 && e.stroke();
      }
      _updateAnimationTarget(t) {
        let e = this.chart, s2 = this.$animations, n2 = s2 && s2.x, o2 = s2 && s2.y;
        if (n2 || o2) {
          let a2 = ue[t.position].call(this, this._active, this._eventPosition);
          if (!a2)
            return;
          let r = this._size = Hn(this, t), l4 = Object.assign({}, a2, this._size), c3 = jn(e, t, l4), h5 = $n(t, l4, c3, e);
          (n2._to !== h5.x || o2._to !== h5.y) && (this.xAlign = c3.xAlign, this.yAlign = c3.yAlign, this.width = r.width, this.height = r.height, this.caretX = a2.x, this.caretY = a2.y, this._resolveAnimations().update(this, h5));
        }
      }
      _willRender() {
        return !!this.opacity;
      }
      draw(t) {
        let e = this.options.setContext(this.getContext()), s2 = this.opacity;
        if (!s2)
          return;
        this._updateAnimationTarget(e);
        let n2 = { width: this.width, height: this.height }, o2 = { x: this.x, y: this.y };
        s2 = Math.abs(s2) < 1e-3 ? 0 : s2;
        let a2 = X3(e.padding), r = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
        e.enabled && r && (t.save(), t.globalAlpha = s2, this.drawBackground(o2, t, n2, e), Ci(t, e.textDirection), o2.y += a2.top, this.drawTitle(o2, t, e), this.drawBody(o2, t, e), this.drawFooter(o2, t, e), Oi(t, e.textDirection), t.restore());
      }
      getActiveElements() {
        return this._active || [];
      }
      setActiveElements(t, e) {
        let s2 = this._active, n2 = t.map(({ datasetIndex: r, index: l4 }) => {
          let c3 = this.chart.getDatasetMeta(r);
          if (!c3)
            throw new Error("Cannot find a dataset at index " + r);
          return { datasetIndex: r, element: c3.data[l4], index: l4 };
        }), o2 = !ie(s2, n2), a2 = this._positionChanged(n2, e);
        (o2 || a2) && (this._active = n2, this._eventPosition = e, this._ignoreReplayEvents = true, this.update(true));
      }
      handleEvent(t, e, s2 = true) {
        if (e && this._ignoreReplayEvents)
          return false;
        this._ignoreReplayEvents = false;
        let n2 = this.options, o2 = this._active || [], a2 = this._getActiveElements(t, o2, e, s2), r = this._positionChanged(a2, t), l4 = e || !ie(a2, o2) || r;
        return l4 && (this._active = a2, (n2.enabled || n2.external) && (this._eventPosition = { x: t.x, y: t.y }, this.update(true, e))), l4;
      }
      _getActiveElements(t, e, s2, n2) {
        let o2 = this.options;
        if (t.type === "mouseout")
          return [];
        if (!n2)
          return e.filter((r) => this.chart.data.datasets[r.datasetIndex] && this.chart.getDatasetMeta(r.datasetIndex).controller.getParsed(r.index) !== void 0);
        let a2 = this.chart.getElementsAtEventForMode(t, o2.mode, o2, s2);
        return o2.reverse && a2.reverse(), a2;
      }
      _positionChanged(t, e) {
        let { caretX: s2, caretY: n2, options: o2 } = this, a2 = ue[o2.position].call(this, t, e);
        return a2 !== false && (s2 !== a2.x || n2 !== a2.y);
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
    cc = (i4, t, e, s2) => (typeof t == "string" ? (e = i4.push(t) - 1, s2.unshift({ index: e, label: t })) : isNaN(t) && (e = null), e);
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
          let s2 = this.getLabels();
          for (let { index: n2, label: o2 } of e)
            s2[n2] === o2 && s2.splice(n2, 1);
          this._addedLabels = [];
        }
        super.init(t);
      }
      parse(t, e) {
        if (L3(t))
          return null;
        let s2 = this.getLabels();
        return e = isFinite(e) && s2[e] === t ? e : hc(s2, t, P3(e, t), this._addedLabels), dc(e, s2.length - 1);
      }
      determineDataLimits() {
        let { minDefined: t, maxDefined: e } = this.getUserBounds(), { min: s2, max: n2 } = this.getMinMax(true);
        this.options.bounds === "ticks" && (t || (s2 = 0), e || (n2 = this.getLabels().length - 1)), this.min = s2, this.max = n2;
      }
      buildTicks() {
        let t = this.min, e = this.max, s2 = this.options.offset, n2 = [], o2 = this.getLabels();
        o2 = t === 0 && e === o2.length - 1 ? o2 : o2.slice(t, e + 1), this._valueRange = Math.max(o2.length - (s2 ? 0 : 1), 1), this._startValue = this.min - (s2 ? 0.5 : 0);
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
        let { beginAtZero: t } = this.options, { minDefined: e, maxDefined: s2 } = this.getUserBounds(), { min: n2, max: o2 } = this, a2 = (l4) => n2 = e ? n2 : l4, r = (l4) => o2 = s2 ? o2 : l4;
        if (t) {
          let l4 = st(n2), c3 = st(o2);
          l4 < 0 && c3 < 0 ? r(0) : l4 > 0 && c3 > 0 && a2(0);
        }
        if (n2 === o2) {
          let l4 = o2 === 0 ? 1 : Math.abs(o2 * 0.05);
          r(o2 + l4), t || a2(n2 - l4);
        }
        this.min = n2, this.max = o2;
      }
      getTickLimit() {
        let t = this.options.ticks, { maxTicksLimit: e, stepSize: s2 } = t, n2;
        return s2 ? (n2 = Math.ceil(this.max / s2) - Math.floor(this.min / s2) + 1, n2 > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${s2} would result generating up to ${n2} ticks. Limiting to 1000.`), n2 = 1e3)) : (n2 = this.computeTickLimit(), e = e || 11), e && (n2 = Math.min(e, n2)), n2;
      }
      computeTickLimit() {
        return Number.POSITIVE_INFINITY;
      }
      buildTicks() {
        let t = this.options, e = t.ticks, s2 = this.getTickLimit();
        s2 = Math.max(2, s2);
        let n2 = { maxTicks: s2, bounds: t.bounds, min: t.min, max: t.max, precision: e.precision, step: e.stepSize, count: e.count, maxDigits: this._maxDigits(), horizontal: this.isHorizontal(), minRotation: e.minRotation || 0, includeBounds: e.includeBounds !== false }, o2 = this._range || this, a2 = uc(n2, o2);
        return t.bounds === "ticks" && li(a2, this, "value"), t.reverse ? (a2.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), a2;
      }
      configure() {
        let t = this.ticks, e = this.min, s2 = this.max;
        if (super.configure(), this.options.offset && t.length) {
          let n2 = (s2 - e) / Math.max(t.length - 1, 1) / 2;
          e -= n2, s2 += n2;
        }
        this._startValue = e, this._endValue = s2, this._valueRange = s2 - e;
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
        let t = this.isHorizontal(), e = t ? this.width : this.height, s2 = et(this.options.ticks.minRotation), n2 = (t ? Math.sin(s2) : Math.cos(s2)) || 1e-3, o2 = this._resolveTickFontOptions(0);
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
        let s2 = Jt.prototype.parse.apply(this, [t, e]);
        if (s2 === 0) {
          this._zero = true;
          return;
        }
        return V3(s2) && s2 > 0 ? s2 : null;
      }
      determineDataLimits() {
        let { min: t, max: e } = this.getMinMax(true);
        this.min = V3(t) ? Math.max(0, t) : null, this.max = V3(e) ? Math.max(0, e) : null, this.options.beginAtZero && (this._zero = true), this._zero && this.min !== this._suggestedMin && !V3(this._userMin) && (this.min = t === Rt(this.min, 0) ? Rt(this.min, -1) : Rt(this.min, 0)), this.handleTickRangeOptions();
      }
      handleTickRangeOptions() {
        let { minDefined: t, maxDefined: e } = this.getUserBounds(), s2 = this.min, n2 = this.max, o2 = (r) => s2 = t ? s2 : r, a2 = (r) => n2 = e ? n2 : r;
        s2 === n2 && (s2 <= 0 ? (o2(1), a2(10)) : (o2(Rt(s2, -1)), a2(Rt(n2, 1)))), s2 <= 0 && o2(Rt(n2, -1)), n2 <= 0 && a2(Rt(s2, 1)), this.min = s2, this.max = n2;
      }
      buildTicks() {
        let t = this.options, e = { min: this._userMin, max: this._userMax }, s2 = gc(e, this);
        return t.bounds === "ticks" && li(s2, this, "value"), t.reverse ? (s2.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), s2;
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
        let t = this._padding = X3(us(this.options) / 2), e = this.width = this.maxWidth - t.width, s2 = this.height = this.maxHeight - t.height;
        this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + s2 / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, s2) / 2);
      }
      determineDataLimits() {
        let { min: t, max: e } = this.getMinMax(false);
        this.min = V3(t) && !isNaN(t) ? t : 0, this.max = V3(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions();
      }
      computeTickLimit() {
        return Math.ceil(this.drawingArea / us(this.options));
      }
      generateTickLabels(t) {
        Jt.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((e, s2) => {
          let n2 = E2(this.options.pointLabels.callback, [e, s2], this);
          return n2 || n2 === 0 ? n2 : "";
        }).filter((e, s2) => this.chart.getDataVisibility(s2));
      }
      fit() {
        let t = this.options;
        t.display && t.pointLabels.display ? mc(this) : this.setCenterPoint(0, 0, 0, 0);
      }
      setCenterPoint(t, e, s2, n2) {
        this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((s2 - n2) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, s2, n2));
      }
      getIndexAngle(t) {
        let e = F3 / (this._pointLabels.length || 1), s2 = this.options.startAngle || 0;
        return G3(t * e + et(s2));
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
          let s2 = e[t];
          return Dc(this.getContext(), t, s2);
        }
      }
      getPointPosition(t, e, s2 = 0) {
        let n2 = this.getIndexAngle(t) - N3 + s2;
        return { x: Math.cos(n2) * e + this.xCenter, y: Math.sin(n2) * e + this.yCenter, angle: n2 };
      }
      getPointPositionForValue(t, e) {
        return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
      }
      getBasePosition(t) {
        return this.getPointPositionForValue(t || 0, this.getBaseValue());
      }
      getPointLabelPosition(t) {
        let { left: e, top: s2, right: n2, bottom: o2 } = this._pointLabelItems[t];
        return { left: e, top: s2, right: n2, bottom: o2 };
      }
      drawBackground() {
        let { backgroundColor: t, grid: { circular: e } } = this.options;
        if (t) {
          let s2 = this.ctx;
          s2.save(), s2.beginPath(), ko(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), s2.closePath(), s2.fillStyle = t, s2.fill(), s2.restore();
        }
      }
      drawGrid() {
        let t = this.ctx, e = this.options, { angleLines: s2, grid: n2, border: o2 } = e, a2 = this._pointLabels.length, r, l4, c3;
        if (e.pointLabels.display && wc(this, a2), n2.display && this.ticks.forEach((h5, d4) => {
          if (d4 !== 0 || d4 === 0 && this.min < 0) {
            l4 = this.getDistanceFromCenterForValue(h5.value);
            let u2 = this.getContext(d4), f3 = n2.setContext(u2), g4 = o2.setContext(u2);
            Pc(this, f3, l4, a2, g4);
          }
        }), s2.display) {
          for (t.save(), r = a2 - 1; r >= 0; r--) {
            let h5 = s2.setContext(this.getPointLabelContext(r)), { color: d4, lineWidth: u2 } = h5;
            !u2 || !d4 || (t.lineWidth = u2, t.strokeStyle = d4, t.setLineDash(h5.borderDash), t.lineDashOffset = h5.borderDashOffset, l4 = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max), c3 = this.getPointPosition(r, l4), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(c3.x, c3.y), t.stroke());
          }
          t.restore();
        }
      }
      drawBorder() {
      }
      drawLabels() {
        let t = this.ctx, e = this.options, s2 = e.ticks;
        if (!s2.display)
          return;
        let n2 = this.getIndexAngle(0), o2, a2;
        t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(n2), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach((r, l4) => {
          if (l4 === 0 && this.min >= 0 && !e.reverse)
            return;
          let c3 = s2.setContext(this.getContext(l4)), h5 = j3(c3.font);
          if (o2 = this.getDistanceFromCenterForValue(this.ticks[l4].value), c3.showLabelBackdrop) {
            t.font = h5.string, a2 = t.measureText(r.label).width, t.fillStyle = c3.backdropColor;
            let d4 = X3(c3.backdropPadding);
            t.fillRect(-a2 / 2 - d4.left, -o2 - h5.size / 2 - d4.top, a2 + d4.width, h5.size + d4.height);
          }
          vt(t, r.label, 0, -o2, h5, { color: c3.color, strokeColor: c3.textStrokeColor, strokeWidth: c3.textStrokeWidth });
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
        let s2 = t.time || (t.time = {}), n2 = this._adapter = new $a._date(t.adapters.date);
        n2.init(e), Wt(s2.displayFormats, n2.formats()), this._parseOpts = { parser: s2.parser, round: s2.round, isoWeekday: s2.isoWeekday }, super.init(t), this._normalized = e.normalized;
      }
      parse(t, e) {
        return t === void 0 ? null : Zn(this, t);
      }
      beforeLayout() {
        super.beforeLayout(), this._cache = { data: [], labels: [], all: [] };
      }
      determineDataLimits() {
        let t = this.options, e = this._adapter, s2 = t.time.unit || "day", { min: n2, max: o2, minDefined: a2, maxDefined: r } = this.getUserBounds();
        function l4(c3) {
          !a2 && !isNaN(c3.min) && (n2 = Math.min(n2, c3.min)), !r && !isNaN(c3.max) && (o2 = Math.max(o2, c3.max));
        }
        (!a2 || !r) && (l4(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l4(this.getMinMax(false))), n2 = V3(n2) && !isNaN(n2) ? n2 : +e.startOf(Date.now(), s2), o2 = V3(o2) && !isNaN(o2) ? o2 : +e.endOf(Date.now(), s2) + 1, this.min = Math.min(n2, o2 - 1), this.max = Math.max(n2 + 1, o2);
      }
      _getLabelBounds() {
        let t = this.getLabelTimestamps(), e = Number.POSITIVE_INFINITY, s2 = Number.NEGATIVE_INFINITY;
        return t.length && (e = t[0], s2 = t[t.length - 1]), { min: e, max: s2 };
      }
      buildTicks() {
        let t = this.options, e = t.time, s2 = t.ticks, n2 = s2.source === "labels" ? this.getLabelTimestamps() : this._generate();
        t.bounds === "ticks" && n2.length && (this.min = this._userMin || n2[0], this.max = this._userMax || n2[n2.length - 1]);
        let o2 = this.min, a2 = this.max, r = Is(n2, o2, a2);
        return this._unit = e.unit || (s2.autoSkip ? to(e.minUnit, this.min, this.max, this._getLabelCapacity(o2)) : Cc(this, r.length, e.minUnit, this.min, this.max)), this._majorUnit = !s2.major.enabled || this._unit === "year" ? void 0 : Oc(this._unit), this.initOffsets(n2), t.reverse && r.reverse(), io(this, r, this._majorUnit);
      }
      afterAutoSkip() {
        this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
      }
      initOffsets(t = []) {
        let e = 0, s2 = 0, n2, o2;
        this.options.offset && t.length && (n2 = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - n2 : e = (this.getDecimalForValue(t[1]) - n2) / 2, o2 = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? s2 = o2 : s2 = (o2 - this.getDecimalForValue(t[t.length - 2])) / 2);
        let a2 = t.length < 3 ? 0.5 : 0.25;
        e = $3(e, 0, a2), s2 = $3(s2, 0, a2), this._offsets = { start: e, end: s2, factor: 1 / (e + 1 + s2) };
      }
      _generate() {
        let t = this._adapter, e = this.min, s2 = this.max, n2 = this.options, o2 = n2.time, a2 = o2.unit || to(o2.minUnit, e, s2, this._getLabelCapacity(e)), r = P3(n2.ticks.stepSize, 1), l4 = a2 === "week" ? o2.isoWeekday : false, c3 = At(l4) || l4 === true, h5 = {}, d4 = e, u2, f3;
        if (c3 && (d4 = +t.startOf(d4, "isoWeek", l4)), d4 = +t.startOf(d4, c3 ? "day" : a2), t.diff(s2, e, a2) > 1e5 * r)
          throw new Error(e + " and " + s2 + " are too far apart with stepSize of " + r + " " + a2);
        let g4 = n2.ticks.source === "data" && this.getDataTimestamps();
        for (u2 = d4, f3 = 0; u2 < s2; u2 = +t.add(u2, r, a2), f3++)
          eo(h5, u2, g4);
        return (u2 === s2 || n2.bounds === "ticks" || f3 === 1) && eo(h5, u2, g4), Object.keys(h5).sort(Qn).map((p5) => +p5);
      }
      getLabelForValue(t) {
        let e = this._adapter, s2 = this.options.time;
        return s2.tooltipFormat ? e.format(t, s2.tooltipFormat) : e.format(t, s2.displayFormats.datetime);
      }
      format(t, e) {
        let n2 = this.options.time.displayFormats, o2 = this._unit, a2 = e || n2[o2];
        return this._adapter.format(t, a2);
      }
      _tickFormatFunction(t, e, s2, n2) {
        let o2 = this.options, a2 = o2.ticks.callback;
        if (a2)
          return E2(a2, [t, e, s2], this);
        let r = o2.time.displayFormats, l4 = this._unit, c3 = this._majorUnit, h5 = l4 && r[l4], d4 = c3 && r[c3], u2 = s2[e], f3 = c3 && d4 && u2 && u2.major;
        return this._adapter.format(t, n2 || (f3 ? d4 : h5));
      }
      generateTickLabels(t) {
        let e, s2, n2;
        for (e = 0, s2 = t.length; e < s2; ++e)
          n2 = t[e], n2.label = this._tickFormatFunction(n2.value, e, t);
      }
      getDecimalForValue(t) {
        return t === null ? NaN : (t - this.min) / (this.max - this.min);
      }
      getPixelForValue(t) {
        let e = this._offsets, s2 = this.getDecimalForValue(t);
        return this.getPixelForDecimal((e.start + s2) * e.factor);
      }
      getValueForPixel(t) {
        let e = this._offsets, s2 = this.getDecimalForPixel(t) / e.factor - e.end;
        return this.min + s2 * (this.max - this.min);
      }
      _getLabelSize(t) {
        let e = this.options.ticks, s2 = this.ctx.measureText(t).width, n2 = et(this.isHorizontal() ? e.maxRotation : e.minRotation), o2 = Math.cos(n2), a2 = Math.sin(n2), r = this._resolveTickFontOptions(0).size;
        return { w: s2 * o2 + r * a2, h: s2 * a2 + r * o2 };
      }
      _getLabelCapacity(t) {
        let e = this.options.time, s2 = e.displayFormats, n2 = s2[e.unit] || s2.millisecond, o2 = this._tickFormatFunction(t, 0, io(this, [t], this._majorUnit), n2), a2 = this._getLabelSize(o2), r = Math.floor(this.isHorizontal() ? this.width / a2.w : this.height / a2.h) - 1;
        return r > 0 ? r : 1;
      }
      getDataTimestamps() {
        let t = this._cache.data || [], e, s2;
        if (t.length)
          return t;
        let n2 = this.getMatchingVisibleMetas();
        if (this._normalized && n2.length)
          return this._cache.data = n2[0].controller.getAllParsedValues(this);
        for (e = 0, s2 = n2.length; e < s2; ++e)
          t = t.concat(n2[e].controller.getAllParsedValues(this));
        return this._cache.data = this.normalize(t);
      }
      getLabelTimestamps() {
        let t = this._cache.labels || [], e, s2;
        if (t.length)
          return t;
        let n2 = this.getLabels();
        for (e = 0, s2 = n2.length; e < s2; ++e)
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
        let { min: e, max: s2 } = this, n2 = [], o2 = [], a2, r, l4, c3, h5;
        for (a2 = 0, r = t.length; a2 < r; ++a2)
          c3 = t[a2], c3 >= e && c3 <= s2 && n2.push(c3);
        if (n2.length < 2)
          return [{ time: e, pos: 0 }, { time: s2, pos: 1 }];
        for (a2 = 0, r = n2.length; a2 < r; ++a2)
          h5 = n2[a2 + 1], l4 = n2[a2 - 1], c3 = n2[a2], Math.round((h5 + l4) / 2) !== c3 && o2.push({ time: c3, pos: a2 / (r - 1) });
        return o2;
      }
      _generate() {
        let t = this.min, e = this.max, s2 = super.getDataTimestamps();
        return (!s2.includes(t) || !s2.length) && s2.splice(0, 0, t), (!s2.includes(e) || s2.length === 1) && s2.push(e), s2.sort((n2, o2) => n2 - o2);
      }
      _getTimestampsForTable() {
        let t = this._cache.all || [];
        if (t.length)
          return t;
        let e = this.getDataTimestamps(), s2 = this.getLabelTimestamps();
        return e.length && s2.length ? t = this.normalize(e.concat(s2)) : t = e.length ? e : s2, t = this._cache.all = t, t;
      }
      getDecimalForValue(t) {
        return ($e(this._table, t) - this._minPos) / this._tableRange;
      }
      getValueForPixel(t) {
        let e = this._offsets, s2 = this.getDecimalForPixel(t) / e.factor - e.end;
        return $e(this._table, s2 * this._tableRange + this._minPos, true);
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

// pages/admin/admin.ts
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
  const merge = data.map((x4, i4) => x4 + (expr[i4] || ""));
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
  block.append(...components.map((x4) => x4.draw()));
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
  const dep = (a2) => (p5, c3) => {
    let obs = observers.get(p5);
    let props = observerProperties.get(c3);
    if (!obs) {
      obs = /* @__PURE__ */ new Set();
      observers.set(p5, obs);
    }
    if (!props) {
      props = /* @__PURE__ */ new Set();
      observerProperties.set(c3, props);
    }
    obs[a2](c3);
    props[a2](p5);
  };
  const $on = dep("add");
  const $off = dep("delete");
  const _em = (property, newValue, oldValue) => {
    observers.has(property) && observers.get(property).forEach((c3) => c3(newValue, oldValue));
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
      const [, p5] = args;
      if (Reflect.has(depProps, p5))
        return Reflect.get(depProps, p5);
      if (typeof p5 === "string" && p5.startsWith("$"))
        return {
          getValue: () => proxy[p5.replace("$", "")],
          setValue: (val) => {
            proxy[p5.replace("$", "")] = val;
          },
          map: (map) => {
            const key = p5.replace("$", "");
            const pointer = asRef(proxy[key]);
            const c3 = (newVal) => pointer.setValue(map(newVal));
            c3(proxy[key]);
            $on(key, (val, oldVal) => c3(val, oldVal));
            return pointer;
          },
          listen: (c3) => {
            const key = p5.replace("$", "");
            c3(proxy[key]);
            $on(p5.replace("$", ""), (val, oldVal) => c3(val, oldVal));
          },
          addItem: (item) => {
            if (!Array.isArray(proxy[p5.replace("$", "")])) {
              throw new Error("addItem called on a non array Ref.");
            }
            proxy[p5.replace("$", "")].push(item);
          },
          removeItem: (item) => {
            if (!Array.isArray(proxy[p5.replace("$", "")])) {
              throw new Error("addItem called on a non array Ref.");
            }
            const index = proxy[p5.replace("$", "")].indexOf(item);
            if (index === -1)
              return;
            proxy[p5.replace("$", "")].splice(index, 1);
          }
        };
      const value = Reflect.get(...args);
      addDep(proxy, p5);
      if (isArray && p5 in Array.prototype) {
        return arrayOperation(
          p5,
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
  children.map((c3) => {
    proxy[c3]._p = [c3, proxy];
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
      callbacks.forEach((c3) => {
        reactiveTarget.$on(property, c3);
      });
    });
  }
  if (state2.p) {
    reactiveTarget._p = state2.p;
  }
  return reactiveTarget;
}
var asState = (data) => _state(data);
function ref(data, ...expr) {
  const empty = Symbol("empty");
  const merge = data.map((x4, i4) => [x4, expr[i4] ?? empty]).flat();
  const state2 = asState({
    val: ""
  });
  function update() {
    let list = "";
    for (const iterator of merge) {
      if (iterator === empty)
        continue;
      if (isRef(iterator))
        list += iterator.getValue();
      else
        list += iterator;
    }
    state2.val = list;
  }
  for (const iterator of merge) {
    if (isRef(iterator))
      iterator.listen(update);
  }
  update();
  return state2.$val;
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

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/components/Cache.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
var GLOBAL_CACHE = /* @__PURE__ */ new Map();
function Cache(cacheId, loader, render) {
  if (!GLOBAL_CACHE.has(cacheId)) {
    const shell = createElement("div");
    shell.style.display = "contents";
    GLOBAL_CACHE.set(cacheId, {
      render: Custom(shell)
    });
    shell.append(render("cache", void 0).draw());
    loader?.().then((x4) => render("loaded", x4)).then((x4) => x4.draw()).then((x4) => shell.children[0].replaceWith(x4));
  }
  const data = GLOBAL_CACHE.get(cacheId);
  return Box(data.render);
}

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/components/Card.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
var Card = (compoent) => {
  const card = createElement("card");
  card.append(compoent.draw());
  return Custom(card);
};

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/Helper.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
var dropNullish = (...components) => components.filter((x4) => x4);

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

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/components/List.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
function Items(list, renderFunc) {
  return list.map((list2) => Box(...list2.map(renderFunc)).removeFromLayout()).asRefComponent();
}

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
    this.wrapper.append(...dropNullish(...components).map((x4) => x4.draw()));
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
    this.wrapper.append(...components.map((x4) => {
      if (Array.isArray(x4)) {
        const { width, height } = x4[0];
        const ele = x4[1].draw();
        if (width)
          ele.style.gridColumn = `${width} span`;
        if (height)
          ele.style.gridRow = `${height} span`;
        return ele;
      }
      return x4.draw();
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
var DropDownInputComponent = class extends InputForm {
  prog = createElement("div");
  text = createElement("span");
  button;
  constructor(dropdown, label, icon = MIcon("keyboard_arrow_down")) {
    super();
    const text = asRef(label);
    this.button = Button(text).setWidth("100%").setJustifyContent("space-between").addSuffix(icon);
    this.wrapper.innerHTML = "";
    this.color.setValue("disabled" /* Disabled */);
    this.wrapper.append(this.button.draw());
    this.wrapper.classList.add("wdropdown");
    this.addEventListener("update", (event) => {
      const data = event.detail;
      text.setValue(data == void 0 ? asRef(label).getValue() : this.valueRender(data));
      dropDownPopover.hidePopover();
    });
    this.button.onClick(() => {
      if (dropDownPopover.isOpen()) {
        dropDownPopover.hidePopover();
        return;
      }
      dropDownPopover.clearAnchors("--wdropdown-default");
      this.button.setAnchorName("--wdropdown-default");
      dropDownPopover.showPopover();
      content.setValue(
        Grid(
          Items(
            asRef(dropdown),
            (item) => Button(this.valueRender(item)).setStyle("inline" /* Inline */).onClick(() => {
              this.setValue(item);
            })
          )
        ).addClass("wdropdown-content").setDirection("row").setGap("5px").setPadding("5px")
      );
    });
  }
  setStyle(style, progress) {
    this.button.setStyle(style, progress);
    return this;
  }
};
var DropDownInput = (label, list) => new DropDownInputComponent(list, label);
function UploadFilesDialog(onData, accept) {
  const upload2 = createElement("input");
  upload2.type = "file";
  upload2.accept = accept;
  upload2.click();
  upload2.onchange = async () => {
    const list = await Promise.all(Array.from(upload2.files ?? []).map(async (file2) => {
      const blob2 = new Blob([await file2.arrayBuffer()], { type: file2.type });
      return { blob: blob2, file: file2, url: URL.createObjectURL(blob2) };
    }));
    onData(list);
  };
}

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
    const placeholder2 = Label(label).draw();
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
    this.wrapper.append(placeholder2, this.input);
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
      data.source().then((x4) => {
        this.wrapper.classList.remove("loading");
        this.wrapper.children[0].replaceWith(this.renderImage(URL.createObjectURL(x4), true));
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
var Sheet = (content2) => new SheetComponent(asRef(0), content2);

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/components/SheetDialog.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
function SheetDialog(sheetRegistry, title, ...content2) {
  const isOpen = asRef(false);
  const sheet = Sheet(
    Grid(
      Grid(
        Label(title).addClass("wsheet-title").setTextSize("3xl").setFontWeight("bold")
      ).setAlignItems("end").setHeight("80px"),
      ...content2
    ).setGap().setMargin("15px").setAlignContent("start")
  );
  isOpen.listen((open, oldValue) => {
    if (open)
      sheetRegistry.add(sheet);
    else if (oldValue)
      sheetRegistry.remove(sheet);
  });
  sheet.setOnClose(() => {
    isOpen.setValue(false);
  });
  return {
    open: () => isOpen.setValue(true),
    close: () => isOpen.setValue(false),
    setId: (id) => sheet.setId(id),
    setOnClose: (onClose) => isOpen.listen(onClose),
    setCanClose: (pointer) => sheet.setCanClose(pointer)
  };
}

// esbuild_serve:http-import:https://raw.githubusercontent.com/lucsoft/WebGen/d389a5b/src/components/Table.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
var TableComponent = class extends Component {
  hasDelete = false;
  #columns;
  #data;
  constructor(_columns, data) {
    super();
    this.#columns = _columns;
    this.#data = data;
    this.refresh();
  }
  setDelete(action, icon = () => MIcon("delete")) {
    this.#columns.push([
      "",
      "max-content",
      (data, index) => icon().onClick(async () => {
        await action(data, index);
        this.refresh();
      })
    ]);
    this.refresh();
    return this;
  }
  refresh() {
    const data = Card(
      Grid(
        ...this.#columns.map(([id]) => Label(id.toString()).addClass("title")),
        ...this.#data.map((x4, index) => [
          ...this.#columns.map(([_id, _size, render]) => render(x4, index))
        ]).flat()
      ).setAlignItems("center").setGap("5px 13px").setWidth("100%").setRawColumns(`${this.#columns.map(([_4, data2 = "max-content"]) => data2).join(" ")}`)
    ).addClass("wtable").draw();
    this.wrapper = data;
  }
};
function Table(_columns, data) {
  return new TableComponent(_columns, data);
}

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
      (x4, i4) => Button(x4).setColor("colored" /* Colored */).onClick(() => selected.setValue(i4)).setStyle(selected.map((index) => index == i4 ? "normal" /* Normal */ : "secondary" /* Secondary */)).draw()
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

// components/nav.ts
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
                ...val.value.length == 0 ? [this.placeholder] : val.value.map((x4) => map(x4)).filter((_4, index) => index % this.paging.limit !== 1),
                Horizontal(
                  Button("Load More").onPromiseClick(() => this.loadMore(val.value.length, this.paging.limit))
                ).setMargin("0 0 var(--gap)")
              ).setGap() : Vertical(
                ...val.value.length == 0 ? [this.placeholder] : val.value.map((x4) => map(x4))
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
            ...val.length == 0 ? [this.placeholder] : val.map((x4) => map(x4)),
            this.paging.$enabled.map(() => this.paging.enabled ? Button("Load More").setMargin("0 0 var(--gap)").onPromiseClick(() => this.loadMore(val.length - 2, this.paging.limit + 1)) : Empty()).asRefComponent().removeFromLayout()
          ).setGap().draw()
        );
      }
    });
  }
  canLoadMore(length) {
    return this.paging.enabled && length % this.paging.limit == 1;
  }
  enablePaging(loadMore2, limit = 30) {
    this.paging.enabled = true;
    this.paging.limit = limit;
    this.loadMore = loadMore2;
    return this;
  }
  setPlaceholder(val) {
    this.placeholder = val;
    return this;
  }
}();
var placeholder = (title, subtitle) => CenterV(
  Label(title).setTextSize("4xl").setFontWeight("bold").addClass("list-title"),
  Label(subtitle).setTextSize("xl")
).setMargin("100px 0 0").setGap("1rem").setAttribute("align", "center");
async function loadMore(source, func) {
  const data = source.getValue();
  if (data !== "loading" && data.status !== "rejected") {
    const rsp = await func();
    if (rsp.status == "rejected") {
      source.setValue(rsp);
    } else {
      source.setValue({
        status: "fulfilled",
        value: [...data.value, ...rsp.value]
      });
    }
  }
}

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
      menu.path.setValue(`${history.getValue().filter((_4, i4) => index >= i4).map((it) => it.id ?? "-").join("/")}/`);
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
        ).filter((_4, i4) => i4 != it.length - 1),
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

// assets/img/template-artwork.png
var template_artwork_default = "./template-artwork-57BXUF2S.png";

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
      (k4) => typeof obj[obj[k4]] !== "number"
    );
    const filtered = {};
    for (const k4 of validKeys) {
      filtered[k4] = obj[k4];
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
  util2.jsonStringifyReplacer = (_4, value) => {
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
  const maps = errorMaps.filter((m5) => !!m5).slice().reverse();
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
    ].filter((x4) => !!x4)
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
    for (const s2 of results) {
      if (s2.status === "aborted")
        return INVALID;
      if (s2.status === "dirty")
        status.dirty();
      arrayValue.push(s2.value);
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
var isAborted = (x4) => x4.status === "aborted";
var isDirty = (x4) => x4.status === "dirty";
var isValid = (x4) => x4.status === "valid";
var isAsync = (x4) => typeof Promise !== "undefined" && x4 instanceof Promise;

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
function mergeValues(a2, b4) {
  const aType = getParsedType(a2);
  const bType = getParsedType(b4);
  if (a2 === b4) {
    return { valid: true, data: a2 };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b4);
    const sharedKeys = util.objectKeys(a2).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a2, ...b4 };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a2[key], b4[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a2.length !== b4.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a2.length; index++) {
      const itemA = a2[index];
      const itemB = b4[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a2 === +b4) {
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
    }).filter((x4) => !!x4);
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
        ].filter((x4) => !!x4),
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
        ].filter((x4) => !!x4),
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
  static create(a2, b4) {
    return new _ZodPipeline({
      in: a2,
      out: b4,
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
        const p5 = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
        const _fatal = p5.fatal ?? fatal ?? true;
        const p22 = typeof p5 === "string" ? { message: p5 } : p5;
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

// spec/music.ts
var DATE_PATTERN = /\d\d\d\d-\d\d-\d\d/;
var userString = zod_v3_22_exports.string().min(1).transform((x4) => x4.trim());
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
  artists: artist.array().refine((x4) => x4.some(([, , type]) => type == "PRIMARY"), { message: "At least one primary artist is required" }),
  secondaryGenre: zod_v3_22_exports.string(),
  year: zod_v3_22_exports.number(),
  country: zod_v3_22_exports.string(),
  //TODO: Add in frontend mby
  language: zod_v3_22_exports.string().optional(),
  explicit: zod_v3_22_exports.boolean(),
  instrumental: zod_v3_22_exports.boolean(),
  file: zod_v3_22_exports.string({ required_error: "a Song is missing its file." }),
  progress: zod_v3_22_exports.number().optional().transform((x4) => void 0)
}).refine(({ instrumental, explicit }) => !(instrumental && explicit), "Can't have an explicit instrumental song");
var pureDrop = zod_v3_22_exports.object({
  upc: zod_v3_22_exports.string().trim().max(0).nullable().or(
    zod_v3_22_exports.string().trim().min(12, { message: "UPC/EAN: Invalid length" }).max(13, { message: "UPC/EAN: Invalid length" }).regex(/^\d+$/, { message: "UPC/EAN: Not a number" }).refine((gtin) => parseInt(gtin.slice(-1), 10) === (10 - sumOf(gtin.slice(0, -1).split("").map((digit, index) => parseInt(digit, 10) * ((16 - gtin.length + index) % 2 === 0 ? 3 : 1)), (x4) => x4) % 10) % 10, {
      message: "UPC/EAN: Invalid"
    })
  ),
  title: userString,
  artists: artist.array().refine((x4) => x4.some(([, , type]) => type == "PRIMARY"), { message: "At least one primary artist is required" }),
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
  upc: zod_v3_22_exports.string().trim().min(12, { message: "UPC/EAN: Invalid length" }).max(13, { message: "UPC/EAN: Invalid length" }).regex(/^\d+$/, { message: "UPC/EAN: Not a number" }).refine((gtin) => parseInt(gtin.slice(-1), 10) === (10 - sumOf(gtin.slice(0, -1).split("").map((digit, index) => parseInt(digit, 10) * ((16 - gtin.length + index) % 2 === 0 ? 3 : 1)), (x4) => x4) % 10) % 10, {
    message: "UPC/EAN: Invalid checksum"
  }).or(zod_v3_22_exports.string().trim().max(0, { message: "UPC/EAN: Invalid" }).nullable())
});
var pageTwo = zod_v3_22_exports.object({
  title: userString,
  artists: artist.array().refine((x4) => x4.some(([, , type]) => type == "PRIMARY"), { message: "At least one primary artist is required" }),
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
function IsLoggedIn() {
  try {
    return localStorage["access-token"] ? JSON.parse(b64DecodeUnicode(localStorage["access-token"].split(".")[1])).user : null;
  } catch (_4) {
    resetTokens();
    return null;
  }
}
function changeThemeColor() {
  return (_data) => {
  };
}
function b64DecodeUnicode(value) {
  return decodeURIComponent(atob(value).split("").map((c3) => `%${`00${c3.charCodeAt(0).toString(16)}`.slice(-2)}`).join(""));
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
  } catch (_4) {
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
  } catch (_4) {
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
  if (!loginRequired.find((x4) => location.pathname.startsWith(x4))) {
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
function saveBlob(blob2, fileName) {
  const url = window.URL.createObjectURL(blob2);
  a.href = url;
  a.download = fileName;
  a.click();
  window.URL.revokeObjectURL(url);
}
function showPreviewImage(x4) {
  return x4.artwork ? Cache(`image-preview-${x4.artwork}`, () => Promise.resolve(), (type) => type == "loaded" ? Image({ type: "direct", source: () => loadImage(x4) }, "A Song Artwork") : Box()) : Image(template_artwork_default, "A Placeholder Artwork.");
}
async function loadImage(x4) {
  const cache = await fileCache();
  if (await cache.has(`image-preview-${x4.artwork}`)) {
    return await cache.get(`image-preview-${x4.artwork}`);
  }
  const blob2 = await API.music.id(x4._id).artwork().then(stupidErrorAlert);
  await cache.set(`image-preview-${x4.artwork}`, blob2);
  return blob2;
}
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
    return name.split(", ").map((x4) => x4.at(0)?.toUpperCase()).join("");
  }
  if (name.includes(",")) {
    return name.split(",").map((x4) => x4.at(0)?.toUpperCase()).join("");
  }
  if (name.includes(" ")) {
    return name.split(" ").map((x4) => x4.at(0)?.toUpperCase()).join("");
  }
  return name.at(0).toUpperCase();
}
function showProfilePicture(x4) {
  return ProfilePicture(
    x4.profile.avatar ? Image({
      type: "direct",
      source: async () => {
        const blob2 = new Blob();
        const data = await API.user.picture(x4._id);
        if (data.status == "fulfilled") {
          return data.value;
        }
        return blob2;
      }
    }, "Profile Picture") : Label(getNameInital(x4.profile.username)),
    x4.profile.username
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

// pages/admin/loading.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// pages/admin/state.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
var state = asState({
  drops: {
    reviews: "loading",
    publishing: "loading"
  },
  groups: "loading",
  payouts: "loading",
  oauth: "loading",
  files: "loading",
  wallets: "loading",
  search: []
});
var reviewState = asState({
  // deno-lint-ignore no-explicit-any
  drop: void 0,
  drops: void 0
});

// pages/admin/loading.ts
async function refreshState() {
  await Promise.all([
    (async () => state.drops.reviews = await API.admin.drops.list("UNDER_REVIEW" /* UnderReview */))(),
    (async () => state.drops.publishing = await API.admin.drops.list("PUBLISHING" /* Publishing */))(),
    (async () => state.groups = await API.admin.groups.list())(),
    (async () => state.payouts = await API.admin.payouts.list())(),
    (async () => state.files = await API.admin.files.list())(),
    (async () => state.wallets = await API.admin.wallets.list())(),
    (async () => state.oauth = await API.oauth.list())()
  ]);
}
var urls = {
  "manual": ["admin/payouts/upload", ".xlsx"],
  "oauth": ["oauth/applications/upload", "image/*"]
};
function upload(type) {
  const [url, extension] = urls[type];
  return new Promise((resolve) => {
    UploadFilesDialog((list) => {
      StreamingUploadHandler(url, {
        failure: () => alert("Your Upload has failed. Please try a different file or try again later"),
        uploadDone: () => console.log("Upload done"),
        credentials: () => API.getToken(),
        backendResponse: (id) => resolve(id),
        onUploadTick: async () => await delay(2)
      }, list[0].file);
    }, extension);
  });
}

// pages/admin/views/menu.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// esbuild_serve:http-import:https://deno.land/std@0.220.1/async/debounce.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
function debounce(fn2, wait) {
  let timeout = null;
  let flush = null;
  const debounced = (...args) => {
    debounced.clear();
    flush = () => {
      debounced.clear();
      fn2.call(debounced, ...args);
    };
    timeout = setTimeout(flush, wait);
  };
  debounced.clear = () => {
    if (typeof timeout === "number") {
      clearTimeout(timeout);
      timeout = null;
      flush = null;
    }
  };
  debounced.flush = () => {
    flush?.();
  };
  Object.defineProperty(debounced, "pending", {
    get: () => typeof timeout === "number"
  });
  return debounced;
}

// esbuild_serve:http-import:https://esm.sh/@monaco-editor/loader@1.4.0
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();

// esbuild_serve:http-import:https://esm.sh/v135/state-local@1.0.7/denonext/state-local.mjs
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
function O4(e, t, n2) {
  return t in e ? Object.defineProperty(e, t, { value: n2, enumerable: true, configurable: true, writable: true }) : e[t] = n2, e;
}
function g2(e, t) {
  var n2 = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i4) {
      return Object.getOwnPropertyDescriptor(e, i4).enumerable;
    })), n2.push.apply(n2, r);
  }
  return n2;
}
function v3(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n2 = arguments[t] != null ? arguments[t] : {};
    t % 2 ? g2(Object(n2), true).forEach(function(r) {
      O4(e, r, n2[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n2)) : g2(Object(n2)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n2, r));
    });
  }
  return e;
}
function y3() {
  for (var e = arguments.length, t = new Array(e), n2 = 0; n2 < e; n2++)
    t[n2] = arguments[n2];
  return function(r) {
    return t.reduceRight(function(i4, a2) {
      return a2(i4);
    }, r);
  };
}
function c2(e) {
  return function t() {
    for (var n2 = this, r = arguments.length, i4 = new Array(r), a2 = 0; a2 < r; a2++)
      i4[a2] = arguments[a2];
    return i4.length >= e.length ? e.apply(this, i4) : function() {
      for (var f3 = arguments.length, s2 = new Array(f3), o2 = 0; o2 < f3; o2++)
        s2[o2] = arguments[o2];
      return t.apply(n2, [].concat(i4, s2));
    };
  };
}
function h3(e) {
  return {}.toString.call(e).includes("Object");
}
function m3(e) {
  return !Object.keys(e).length;
}
function l2(e) {
  return typeof e == "function";
}
function j4(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function w2(e, t) {
  return h3(t) || u("changeType"), Object.keys(t).some(function(n2) {
    return !j4(e, n2);
  }) && u("changeField"), t;
}
function P4(e) {
  l2(e) || u("selectorType");
}
function T4(e) {
  l2(e) || h3(e) || u("handlerType"), h3(e) && Object.values(e).some(function(t) {
    return !l2(t);
  }) && u("handlersType");
}
function S3(e) {
  e || u("initialIsRequired"), h3(e) || u("initialType"), m3(e) && u("initialContent");
}
function E3(e, t) {
  throw new Error(e[t] || e.default);
}
var D3 = { initialIsRequired: "initial state is required", initialType: "initial state should be an object", initialContent: "initial state shouldn't be an empty object", handlerType: "handler should be an object or a function", handlersType: "all handlers should be a functions", selectorType: "selector should be a function", changeType: "provided value of changes should be an object", changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state', default: "an unknown error accured in `state-local` package" };
var u = c2(E3)(D3);
var p3 = { changes: w2, selector: P4, handler: T4, initial: S3 };
function q4(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  p3.initial(e), p3.handler(t);
  var n2 = { current: e }, r = c2(I4)(n2, t), i4 = c2(F4)(n2), a2 = c2(p3.changes)(e), f3 = c2(C3)(n2);
  function s2() {
    var d4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(b4) {
      return b4;
    };
    return p3.selector(d4), d4(n2.current);
  }
  function o2(d4) {
    y3(r, i4, a2, f3)(d4);
  }
  return [s2, o2];
}
function C3(e, t) {
  return l2(t) ? t(e.current) : t;
}
function F4(e, t) {
  return e.current = v3(v3({}, e.current), t), t;
}
function I4(e, t, n2) {
  return l2(t) ? t(e.current) : Object.keys(n2).forEach(function(r) {
    var i4;
    return (i4 = t[r]) === null || i4 === void 0 ? void 0 : i4.call(t, e.current[r]);
  }), n2;
}
var R2 = { create: q4 };
var x2 = R2;

// esbuild_serve:http-import:https://esm.sh/v135/@monaco-editor/loader@1.4.0/denonext/loader.mjs
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
function E4(r, e, t) {
  return e in r ? Object.defineProperty(r, e, { value: t, enumerable: true, configurable: true, writable: true }) : r[e] = t, r;
}
function d3(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n2 = Object.getOwnPropertySymbols(r);
    e && (n2 = n2.filter(function(o2) {
      return Object.getOwnPropertyDescriptor(r, o2).enumerable;
    })), t.push.apply(t, n2);
  }
  return t;
}
function p4(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? d3(Object(t), true).forEach(function(n2) {
      E4(r, n2, t[n2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : d3(Object(t)).forEach(function(n2) {
      Object.defineProperty(r, n2, Object.getOwnPropertyDescriptor(t, n2));
    });
  }
  return r;
}
function C4(r, e) {
  if (r == null)
    return {};
  var t = {}, n2 = Object.keys(r), o2, i4;
  for (i4 = 0; i4 < n2.length; i4++)
    o2 = n2[i4], !(e.indexOf(o2) >= 0) && (t[o2] = r[o2]);
  return t;
}
function v4(r, e) {
  if (r == null)
    return {};
  var t = C4(r, e), n2, o2;
  if (Object.getOwnPropertySymbols) {
    var i4 = Object.getOwnPropertySymbols(r);
    for (o2 = 0; o2 < i4.length; o2++)
      n2 = i4[o2], !(e.indexOf(n2) >= 0) && Object.prototype.propertyIsEnumerable.call(r, n2) && (t[n2] = r[n2]);
  }
  return t;
}
function b3(r, e) {
  return L4(r) || W4(r, e) || _3(r, e) || z3();
}
function L4(r) {
  if (Array.isArray(r))
    return r;
}
function W4(r, e) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(r)))) {
    var t = [], n2 = true, o2 = false, i4 = void 0;
    try {
      for (var a2 = r[Symbol.iterator](), u2; !(n2 = (u2 = a2.next()).done) && (t.push(u2.value), !(e && t.length === e)); n2 = true)
        ;
    } catch (c3) {
      o2 = true, i4 = c3;
    } finally {
      try {
        !n2 && a2.return != null && a2.return();
      } finally {
        if (o2)
          throw i4;
      }
    }
    return t;
  }
}
function _3(r, e) {
  if (r) {
    if (typeof r == "string")
      return g3(r, e);
    var t = Object.prototype.toString.call(r).slice(8, -1);
    if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set")
      return Array.from(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return g3(r, e);
  }
}
function g3(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, n2 = new Array(e); t < e; t++)
    n2[t] = r[t];
  return n2;
}
function z3() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var D4 = { paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs" } };
var y4 = D4;
function M3(r) {
  return function e() {
    for (var t = this, n2 = arguments.length, o2 = new Array(n2), i4 = 0; i4 < n2; i4++)
      o2[i4] = arguments[i4];
    return o2.length >= r.length ? r.apply(this, o2) : function() {
      for (var a2 = arguments.length, u2 = new Array(a2), c3 = 0; c3 < a2; c3++)
        u2[c3] = arguments[c3];
      return e.apply(t, [].concat(o2, u2));
    };
  };
}
var h4 = M3;
function q5(r) {
  return {}.toString.call(r).includes("Object");
}
var j5 = q5;
function R3(r) {
  return r || w3("configIsRequired"), j5(r) || w3("configType"), r.urls ? ($4(), { paths: { vs: r.urls.monacoBase } }) : r;
}
function $4() {
  console.warn(O5.deprecation);
}
function H3(r, e) {
  throw new Error(r[e] || r.default);
}
var O5 = { configIsRequired: "the configuration object is required", configType: "the configuration object should be an object", default: "an unknown error accured in `@monaco-editor/loader` package", deprecation: `Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  ` };
var w3 = h4(H3)(O5);
var B3 = { config: R3 };
var P5 = B3;
var N4 = function() {
  for (var e = arguments.length, t = new Array(e), n2 = 0; n2 < e; n2++)
    t[n2] = arguments[n2];
  return function(o2) {
    return t.reduceRight(function(i4, a2) {
      return a2(i4);
    }, o2);
  };
};
var A3 = N4;
function S4(r, e) {
  return Object.keys(e).forEach(function(t) {
    e[t] instanceof Object && r[t] && Object.assign(e[t], S4(r[t], e[t]));
  }), p4(p4({}, r), e);
}
var I5 = S4;
var F5 = { type: "cancelation", msg: "operation is manually canceled" };
function G4(r) {
  var e = false, t = new Promise(function(n2, o2) {
    r.then(function(i4) {
      return e ? o2(F5) : n2(i4);
    }), r.catch(o2);
  });
  return t.cancel = function() {
    return e = true;
  }, t;
}
var s = G4;
var U3 = x2.create({ config: y4, isInitialized: false, resolve: null, reject: null, monaco: null });
var T5 = b3(U3, 2);
var f2 = T5[0];
var l3 = T5[1];
function Y4(r) {
  var e = P5.config(r), t = e.monaco, n2 = v4(e, ["monaco"]);
  l3(function(o2) {
    return { config: I5(o2.config, n2), monaco: t };
  });
}
function J4() {
  var r = f2(function(e) {
    var t = e.monaco, n2 = e.isInitialized, o2 = e.resolve;
    return { monaco: t, isInitialized: n2, resolve: o2 };
  });
  if (!r.isInitialized) {
    if (l3({ isInitialized: true }), r.monaco)
      return r.resolve(r.monaco), s(m4);
    if (window.monaco && window.monaco.editor)
      return x3(window.monaco), r.resolve(window.monaco), s(m4);
    A3(Q4, X4)(Z4);
  }
  return s(m4);
}
function Q4(r) {
  return document.body.appendChild(r);
}
function V4(r) {
  var e = document.createElement("script");
  return r && (e.src = r), e;
}
function X4(r) {
  var e = f2(function(n2) {
    var o2 = n2.config, i4 = n2.reject;
    return { config: o2, reject: i4 };
  }), t = V4("".concat(e.config.paths.vs, "/loader.js"));
  return t.onload = function() {
    return r();
  }, t.onerror = e.reject, t;
}
function Z4() {
  var r = f2(function(t) {
    var n2 = t.config, o2 = t.resolve, i4 = t.reject;
    return { config: n2, resolve: o2, reject: i4 };
  }), e = window.require;
  e.config(r.config), e(["vs/editor/editor.main"], function(t) {
    x3(t), r.resolve(t);
  }, function(t) {
    r.reject(t);
  });
}
function x3(r) {
  f2().monaco || l3({ monaco: r });
}
function k3() {
  return f2(function(r) {
    var e = r.monaco;
    return e;
  });
}
var m4 = new Promise(function(r, e) {
  return l3({ resolve: r, reject: e });
});
var rr2 = { config: Y4, init: J4, __getMonacoInstance: k3 };
var er2 = rr2;

// pages/admin/views/entryReview.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
function ReviewEntry(x4) {
  return Entry({
    title: x4.title ?? "(no drop name)",
    subtitle: `release: ${x4.release ?? "(no release date)"} - user: ${x4.user} - upc: ${x4.upc ?? "(no upc number)"} - id: ${x4._id} - type: ${x4.type}`
  }).addClass("small").addSuffix(
    Button("Review").setStyle("inline" /* Inline */).setColor("colored" /* Colored */).addClass("tag").onClick(() => location.href = `/admin/review?id=${x4._id}`)
  ).addPrefix(showPreviewImage(x4).addClass("image-square"));
}
var changeState = asState({
  drop: void 0,
  type: void 0
});
var changeTypeDialog = SheetDialog(
  sheetStack,
  "Change Drop Type",
  Vertical(
    DropDownInput("Change Type", Object.values(DropType)).sync(changeState, "type"),
    Horizontal(
      Spacer(),
      Button("Change").onPromiseClick(async () => {
        await API.music.id(changeState.drop._id).type.post(changeState.type);
        changeTypeDialog.close();
      })
    )
  )
);

// pages/admin/views/entryUser.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
function GroupEntry(x4) {
  return Entry({
    title: x4.displayName,
    subtitle: `${x4._id} - ${x4.permission}`
  }).addClass("small");
}

// pages/admin/views/list.ts
init_polyfill();
init_bug_reporter();
init_mod();
init_urlpattern_polyfill();
init_main();
init_popover_polyfill();
function entryWallet(wallet2) {
  return Entry({
    title: ref`${wallet2.userName} - ${((wallet2.balance?.restrained ?? 0) + (wallet2.balance?.unrestrained ?? 0)).toFixed(2).toString()}`,
    subtitle: `${wallet2.email} - ${wallet2.user} - ${wallet2._id} - ${wallet2.cut}% - ${wallet2.balance?.restrained.toFixed(2)}/${wallet2.balance?.unrestrained.toFixed(2)}`
  }).addClass("small");
}
function entryOAuth(app) {
  return Entry({
    title: app.name,
    subtitle: app._id
  }).addPrefix(Cache(`appicon-${app._id}`, () => API.admin.files.download(app.icon), (type, val) => {
    const imageSource = type == "loaded" && app.icon !== "" && val && val.status == "fulfilled" ? Image({ type: "direct", source: () => Promise.resolve(val.value) }, "O-Auth Icon") : Image(template_artwork_default, "A Placeholder Artwork.");
    return Box(imageSource).addClass("image-square");
  })).addSuffix(
    IconButton(MIcon("delete"), "delete").setColor("critical" /* Critical */).onClick(() => {
      API.oauth.delete(app._id).then(async () => state.oauth = await API.oauth.list());
    })
  ).addSuffix(
    Button("View").onClick(() => {
      oAuthViewDialog(app).open();
    })
  ).addClass("small");
}
var oAuthViewDialog = (oauth) => SheetDialog(
  sheetStack,
  "OAuth App Details",
  Vertical(
    Grid(
      TextInput("text", "Name").setValue(oauth.name).setColor("disabled" /* Disabled */),
      TextInput("text", "Client ID").setValue(oauth._id).setColor("disabled" /* Disabled */),
      TextInput("text", "Client Secret").setValue(oauth.secret).setColor("disabled" /* Disabled */),
      TextInput("text", "Redirect URI").setValue(oauth.redirect.join(",")).setColor("disabled" /* Disabled */)
    ),
    Horizontal(
      Spacer(),
      Button("Close").onClick(() => {
        oAuthViewDialog(oauth).close();
      })
    )
  )
);
function entryFile(file2) {
  return Entry({
    title: file2.filename,
    subtitle: file2._id
  }).addPrefix(Cache(`file-icon-${file2._id}`, () => loadFilePreview(file2._id), (type, val) => {
    if (type == "cache") {
      return Image({ type: "loading" }, "Loading");
    }
    const imageSource = type == "loaded" && file2.metadata.type.startsWith("image/") && val ? Image({ type: "direct", source: () => Promise.resolve(val) }, "A Song Artwork") : Image(template_artwork_default, "A Placeholder Artwork.");
    return Box(imageSource).addClass("image-square");
  })).addSuffix(
    IconButton(MIcon("download"), "download").onClick(async () => {
      const blob2 = await API.admin.files.download(file2._id).then(stupidErrorAlert);
      saveBlob(blob2, file2.filename);
    })
  ).addSuffix(
    IconButton(MIcon("delete"), "delete").setColor("critical" /* Critical */).onClick(() => {
      API.admin.files.delete(file2._id);
    })
  );
}
async function loadFilePreview(id) {
  const cache = await fileCache();
  if (await cache.has(`file-icon-${id}`))
    return await cache.get(`file-icon-${id}`);
  const blob2 = await API.admin.files.download(id).then(stupidErrorAlert);
  cache.set(`file-icon-${id}`, blob2);
  return blob2;
}

// pages/admin/views/menu.ts
var lazyMonaco = lazyInit(() => er2.init());
var adminMenu = Navigation({
  title: ref`Hi ${activeUser.$username} 👋`,
  categories: [
    {
      id: "overview",
      title: `Overview`,
      children: state.$payouts.map(
        (it) => it === "loading" || it.status === "rejected" ? [
          HeavyList(state.$payouts, () => Box())
        ] : [
          {
            id: "streams",
            title: "Total Streams",
            subtitle: it ? `${sumOf(it.value, (payouts) => sumOf(payouts, (payout2) => sumOf(payout2.entries, (entry) => sumOf(entry.data, (data) => data.quantity)))).toLocaleString()} Streams` : "Loading..."
          },
          {
            id: "revenue",
            title: "Calculated Revenue",
            subtitle: it ? `\xA3 ${sumOf(it.value, (payouts) => sumOf(payouts, (payout2) => sumOf(payout2.entries, (entry) => sumOf(entry.data, (data) => data.revenue)))).toFixed(2)}` : "Loading..."
          },
          {
            id: "bbnmoney",
            title: "BBN Revenue",
            subtitle: state.$wallets.map((it2) => it2 == "loading" ? `---` : it2.status == "rejected" ? "(failed)" : `\xA3 ${sumOf(Object.values(it2.value.find((wallet2) => wallet2.user === "62ea6fa5321b3702e93ca21c")?.balance), (e) => e).toFixed(2)}` ?? 0)
          }
        ]
      )
    },
    {
      id: "search",
      title: ref`Search`,
      children: [
        TextInput("text", "Search").onChange(debounce(async (data) => {
          state.search = asState([{ type: "searching" }]);
          const results = await API.admin.search(data ?? "").then(stupidErrorAlert);
          if (results.length === 0) {
            results.push({ type: "none" });
          }
          state.search = asState(results);
        }, 1e3)),
        Items(state.$search.map((it) => it), (it) => {
          switch (it.type) {
            case "transcript":
              return Entry(
                {
                  title: it.val.with,
                  subtitle: it.type
                }
              );
            case "drop":
              return ReviewEntry(it.val);
            case "server":
              return Entry(
                {
                  title: it.val._id,
                  subtitle: it.type
                }
              );
            case "user":
              return Entry({
                title: it.val.profile.username,
                subtitle: `${it.val._id} - ${it.val.profile.email}`
              }).addClass("small").onPromiseClick(async () => {
                const monaco = await lazyMonaco();
                const box = document.createElement("div");
                monaco.editor.create(box, {
                  value: JSON.stringify(it.val, null, 2),
                  language: "json",
                  theme: "vs-dark",
                  automaticLayout: true
                });
                SheetDialog(sheetStack, "User", Custom(box).setHeight("800px").setWidth("1200px")).open();
              }).addPrefix(showProfilePicture(it.val));
            case "none":
              return placeholder("No Results", "Try searching for something else.");
            case "searching":
              return placeholder("Searching", "Please wait...");
          }
        })
      ]
    },
    {
      id: "drops",
      title: ref`Drops`,
      children: [
        {
          id: "reviews",
          title: ref`Reviews`,
          children: [
            HeavyList(state.drops.$reviews, (it) => ReviewEntry(it)).setPlaceholder(placeholder("No Servers", "Welcome! Create a server to get going. \u{1F916}\u{1F6E0}\uFE0F")).enablePaging((offset, limit) => loadMore(state.drops.$reviews, () => API.admin.drops.list("UNDER_REVIEW" /* UnderReview */, offset, limit)))
          ]
        },
        {
          id: "publishing",
          title: ref`Publishing`,
          children: [
            HeavyList(state.drops.$publishing, (it) => ReviewEntry(it)).enablePaging((offset, limit) => loadMore(state.drops.$publishing, () => API.admin.drops.list("PUBLISHING" /* Publishing */, offset, limit)))
          ]
        }
      ]
    },
    {
      id: "groups",
      title: ref`Groups`,
      children: [
        HeavyList(state.$groups, (val) => GroupEntry(val)).enablePaging((offset, limit) => loadMore(state.$groups, () => API.admin.groups.list(offset, limit)))
      ]
    },
    {
      id: "payouts",
      title: ref`Payout`,
      children: state.$payouts.map((payoutsdata) => [
        {
          title: "Upload Payout File (.xlsx)",
          id: "upload+manual",
          clickHandler: () => {
            upload("manual");
          }
        },
        {
          title: "Sync Mapping with internal Backend",
          id: "sync",
          clickHandler: async () => {
            await API.admin.drops.sync();
          }
        },
        ...payoutsdata === "loading" || payoutsdata.status === "rejected" ? [Box()] : payoutsdata.value.map((payouts) => ({
          title: payouts[0].period,
          id: `payouts${payouts[0].period}`,
          subtitle: `\xA3 ${sumOf(payouts, (payout2) => sumOf(payout2.entries, (entry) => sumOf(entry.data, (data) => data.revenue))).toFixed(2)}`,
          children: payouts.map((payout2) => ({
            title: payout2._id,
            subtitle: `\xA3 ${sumOf(payout2.entries, (entry) => sumOf(entry.data, (data) => data.revenue)).toFixed(2)}`,
            id: `payouts${payouts[0].period}${payout2._id}`,
            children: payout2.entries.map((entry) => ({
              title: entry.isrc,
              id: `payouts${payouts[0].period}${payout2._id}${entry.isrc}`,
              subtitle: `\xA3 ${sumOf(entry.data, (data) => data.revenue).toFixed(2)}`,
              children: entry.data.map((data) => ({
                title: data.store + " " + data.territory,
                subtitle: `\xA3 ${data.revenue.toFixed(2)}`
              }))
            }))
          }))
        }))
      ])
    },
    {
      id: "oauth",
      title: ref`OAuth`,
      children: state.$oauth.map(
        (it) => it === "loading" || it.status === "rejected" ? [HeavyList(state.$oauth, entryOAuth)] : [
          {
            title: "Create new OAuth Application",
            id: "add+oauth",
            clickHandler: () => {
              addOAuthDialog.open();
            }
          },
          HeavyList(state.$oauth, entryOAuth)
        ]
      )
    },
    {
      id: "files",
      title: ref`Files`,
      children: [HeavyList(state.$files, entryFile)]
    },
    {
      id: "wallets",
      title: ref`Wallets`,
      children: [
        HeavyList(state.$wallets, entryWallet).enablePaging((offset, limit) => loadMore(state.$wallets, () => API.admin.wallets.list(offset, limit)))
      ]
    }
  ]
}).addClass(
  isMobile.map((mobile) => mobile ? "mobile-navigation" : "navigation"),
  "limited-width"
);
var oAuthData = asState({
  name: "",
  redirectURI: [""],
  image: ""
});
var addOAuthDialog = SheetDialog(
  sheetStack,
  "Create new OAuth Application",
  Grid(
    Label("Create new OAuth Application"),
    TextInput("text", "Name").sync(oAuthData, "name"),
    oAuthData.$redirectURI.map(
      (x4) => Vertical(
        Table([
          ["URI", "auto", (_4, index) => TextInput("text", "URI", "blur").setValue(x4[index]).onChange((data) => {
            x4[index] = data ?? "";
          })]
        ], x4).setDelete((_4, index) => {
          oAuthData.redirectURI = asState(x4.filter((_5, i4) => i4 != index));
        }),
        Horizontal(
          Spacer(),
          Button("Add URI").onClick(() => {
            x4.push("");
          })
        ).setPadding("0 0 3rem 0")
      ).setGap().setWidth("clamp(0rem, 100vw, 60vw)").setMargin("0 -.6rem 0 0")
    ).asRefComponent(),
    Button("Upload Image").onPromiseClick(async () => {
      oAuthData.image = await upload("oauth");
    }),
    oAuthData.$image.map(
      (img) => Button("Submit").setColor(img === "" ? "disabled" /* Disabled */ : "grayscaled" /* Grayscaled */).onClick(() => {
        API.oauth.post(oAuthData.name, oAuthData.redirectURI, oAuthData.image).then(async () => {
          oAuthData.name = "";
          oAuthData.redirectURI = asState([""]);
          oAuthData.image = "";
          addOAuthDialog.close();
          state.oauth = await API.oauth.list();
        });
      })
    ).asRefComponent()
  ).setGap("10px")
);

// pages/admin/admin.ts
await RegisterAuthRefresh();
if (!permCheck(
  "/hmsys/user/manage",
  "/bbn/manage"
)) {
  location.href = "/";
}
WebGen({
  events: {
    themeChanged: changeThemeColor()
  }
});
sheetStack.setDefault(Vertical(DynaNavigation("Admin"), adminMenu));
Body(sheetStack);
renewAccessTokenIfNeeded().then(() => refreshState());
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
