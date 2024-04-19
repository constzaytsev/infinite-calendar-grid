import { watch as D, getCurrentScope as b, onScopeDispose as T, ref as w, onMounted as H, computed as S, nextTick as E, defineComponent as z, openBlock as k, createElementBlock as _, createElementVNode as v, toDisplayString as C, unref as y, Fragment as L, renderList as x, normalizeClass as W, normalizeStyle as $, renderSlot as B, normalizeProps as I, guardReactiveProps as A } from "vue";
import O from "dayjs";
const P = typeof window < "u" && typeof document < "u" ? window : void 0, U = (l, n) => {
  const o = new Date(Date.UTC(2017, 0, 2)), s = [];
  for (let i = 0; i < 7; i++)
    s.push(o.toLocaleDateString(l, { weekday: "short" })), o.setDate(o.getDate() + 1);
  return n || s.unshift(s.pop()), s;
};
function F(l, n, o) {
  let s = 0, i = !1, d = 0, m = null;
  const c = 10, f = 10;
  function g(e) {
    const u = -e.deltaY, h = Math.abs(u);
    h < f || e.timeStamp - d < 300 && i || (d = e.timeStamp, s < h && !i ? (u < -c ? n() : u > c && o(), p(h), m && clearTimeout(m), m = setTimeout(() => {
      s === h && a();
    }, 1e3)) : h < c && a());
  }
  function p(e) {
    s = e, i = !0;
  }
  function a() {
    s = c, i = !1;
  }
  const r = () => {
    l.value && l.value.removeEventListener("wheel", g);
  }, t = D(
    l,
    (e) => {
      r(), e && e.addEventListener("wheel", g);
    },
    { immediate: !0, flush: "post" }
  );
  b() && T(() => {
    r(), t();
  });
}
function G(l, n = { width: 0, height: 0 }) {
  const o = P;
  let s;
  const i = o && "ResizeObserver" in o, d = w(n.width), m = w(n.height), c = ([p]) => {
    const a = p.contentBoxSize;
    if (a) {
      const r = Array.isArray(a) ? a : [a];
      d.value = r.reduce(
        (t, { inlineSize: e }) => t + e,
        0
      ), m.value = r.reduce(
        (t, { blockSize: e }) => t + e,
        0
      );
    } else
      d.value = p.contentRect.width, m.value = p.contentRect.height;
  }, f = () => {
    s && (s.disconnect(), s = void 0);
  }, g = D(
    l,
    (p) => {
      f(), i && o && (s = new ResizeObserver(c), p && s.observe(p));
    },
    { immediate: !0, flush: "post" }
  );
  return H(() => {
    l.value && (d.value = "offsetWidth" in l.value ? l.value.offsetWidth : n.width, m.value = "offsetHeight" in l.value ? l.value.offsetHeight : n.height);
  }), b() && T(() => {
    f(), g();
  }), {
    width: d,
    height: m
  };
}
function N(l, n, o) {
  const s = w(1), i = w(!0), d = w(!0), { height: m } = G(l), c = S(() => m.value / 6), f = w(O()), g = S(() => {
    const e = f.value.startOf("M"), u = e.get("d") + -o, h = u < 0 ? 7 + u : u;
    return e.add(-(6 * 7 + h), "d");
  }), p = S(
    () => new Array(6 * 7 * 3).fill(null).map((e, u) => {
      const h = g.value.add(u, "d").toDate(), M = h.toLocaleDateString();
      return {
        localeDate: M,
        timestamp: h.getTime(),
        isWeekend: [0, 6].includes(h.getDay()),
        isCurrent: (/* @__PURE__ */ new Date()).toLocaleDateString() === M,
        isFirstDay: h.getDate() === 1,
        isCurrentMonth: h.getMonth() === f.value.get("M")
      };
    })
  );
  H(() => {
    n.value && (d.value = !1, n.value.style.transform = `translate3d(0px, ${-n.value.clientHeight}px, 0px)`);
  }), F(l, () => {
    i.value && s.value < 2 && s.value++;
  }, () => {
    i.value && s.value > 0 && s.value--;
  });
  const t = (e) => {
    if (n.value) {
      const u = n.value.querySelectorAll(
        ".icg-months-grid-day--first-day"
      )[e];
      u instanceof HTMLElement && (n.value.style.transform = `translate3d(0px, ${-u.offsetTop}px, 0px)`);
    }
  };
  return D(s, (e) => {
    e === 1 ? t(e) : n.value && (d.value = !0, i.value = !1, n.value.addEventListener(
      "transitionend",
      () => {
        d.value = !1, i.value = !0, f.value = f.value.add(
          e === 0 ? -1 : 1,
          "month"
        ), E(() => {
          s.value = 1;
        });
      },
      {
        once: !0
      }
    ), t(e));
  }), D(d, (e) => {
    n.value && (n.value.style.transitionProperty = e ? "transform" : "none");
  }), D(
    c,
    () => {
      t(1);
    },
    {
      flush: "post"
    }
  ), {
    cellHeight: c,
    activeMonth: f,
    daysInCalendar: p
  };
}
const j = { class: "icg" }, q = { class: "icg-header" }, V = { class: "icg-month" }, Y = { class: "icg-controls" }, J = /* @__PURE__ */ v("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: ".8rem",
  viewBox: "0 0 320 512"
}, [
  /* @__PURE__ */ v("path", { d: "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" })
], -1), K = [
  J
], Q = /* @__PURE__ */ v("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: ".8rem",
  viewBox: "0 0 320 512"
}, [
  /* @__PURE__ */ v("path", { d: "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" })
], -1), X = [
  Q
], Z = { class: "icg-weekdays" }, te = /* @__PURE__ */ z({
  __name: "InfiniteCalendarGrid",
  props: {
    firstDayOfWeek: { default: 0 },
    locale: { default: "en-US" },
    todayLabel: { default: "Today" },
    items: {},
    fieldWithDate: {}
  },
  emits: ["changeInterval"],
  setup(l, { emit: n }) {
    const o = l, s = n, i = w(null), d = w(null), { cellHeight: m, activeMonth: c, daysInCalendar: f } = N(i, d, o.firstDayOfWeek), g = U(o.locale, o.firstDayOfWeek), p = S(() => {
      const a = {};
      for (const r of o.items) {
        const t = r[o.fieldWithDate];
        if (typeof t == "string" || typeof t == "number") {
          const e = new Date(t);
          if (!isNaN(e.getTime())) {
            const u = e.toLocaleDateString();
            a[u] ? a[u].push(r) : a[u] = [r];
          }
        }
      }
      return a;
    });
    return D(f, (a) => {
      s("changeInterval", {
        start: a[0].timestamp,
        end: a[a.length - 1].timestamp
      });
    }, {
      immediate: !0,
      flush: "post"
    }), (a, r) => (k(), _("div", j, [
      v("div", q, [
        v("div", V, C(y(c).toDate().toLocaleDateString(o.locale, { year: "numeric", month: "long" }).replace("г.", "")), 1),
        v("div", Y, [
          v("button", {
            onClick: r[0] || (r[0] = (t) => c.value = y(c).add(-1, "M"))
          }, K),
          v("button", {
            onClick: r[1] || (r[1] = (t) => c.value = y(O)())
          }, C(o.todayLabel), 1),
          v("button", {
            onClick: r[2] || (r[2] = (t) => c.value = y(c).add(1, "M"))
          }, X)
        ])
      ]),
      v("div", Z, [
        (k(!0), _(L, null, x(y(g), (t, e) => (k(), _("div", {
          key: t,
          class: W(["icg-weekdays-cell", { "icg-weekdays-cell--weekend": e === (o.firstDayOfWeek ? 5 : 0) || e === 6 }])
        }, C(t), 3))), 128))
      ]),
      v("div", {
        ref_key: "wrapperRef",
        ref: i,
        class: "icg-wrapper"
      }, [
        v("div", {
          ref_key: "containerRef",
          ref: d,
          class: "icg-months-grid"
        }, [
          (k(!0), _(L, null, x(y(f), (t) => (k(), _("div", {
            key: t.timestamp,
            class: W(["icg-months-grid-day", {
              "icg-months-grid-day--active-month": t.isCurrentMonth,
              "icg-months-grid-day--first-day": t.isFirstDay,
              "icg-months-grid-day--weekend": t.isWeekend,
              "icg-months-grid-day--current": t.isCurrent
            }]),
            style: $({ height: `${y(m)}px` })
          }, [
            B(a.$slots, "default", I(A({ date: t, items: p.value[t.localeDate] })))
          ], 6))), 128))
        ], 512)
      ], 512)
    ]));
  }
});
export {
  te as InfiniteCalendarGrid
};
