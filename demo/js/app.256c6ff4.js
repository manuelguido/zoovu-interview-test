(function (t) {
  function e(e) {
      for (var a, s, o = e[0], l = e[1], c = e[2], d = 0, f = []; d < o.length; d++) (s = o[d]), Object.prototype.hasOwnProperty.call(i, s) && i[s] && f.push(i[s][0]), (i[s] = 0);
      for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (t[a] = l[a]);
      u && u(e);
      while (f.length) f.shift()();
      return r.push.apply(r, c || []), n();
  }
  function n() {
      for (var t, e = 0; e < r.length; e++) {
          for (var n = r[e], a = !0, o = 1; o < n.length; o++) {
              var l = n[o];
              0 !== i[l] && (a = !1);
          }
          a && (r.splice(e--, 1), (t = s((s.s = n[0]))));
      }
      return t;
  }
  var a = {},
      i = { app: 0 },
      r = [];
  function s(e) {
      if (a[e]) return a[e].exports;
      var n = (a[e] = { i: e, l: !1, exports: {} });
      return t[e].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.m = t),
      (s.c = a),
      (s.d = function (t, e, n) {
          s.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
      }),
      (s.r = function (t) {
          "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (s.t = function (t, e) {
          if ((1 & e && (t = s(t)), 8 & e)) return t;
          if (4 & e && "object" === typeof t && t && t.__esModule) return t;
          var n = Object.create(null);
          if ((s.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
              for (var a in t)
                  s.d(
                      n,
                      a,
                      function (e) {
                          return t[e];
                      }.bind(null, a)
                  );
          return n;
      }),
      (s.n = function (t) {
          var e =
              t && t.__esModule
                  ? function () {
                        return t["default"];
                    }
                  : function () {
                        return t;
                    };
          return s.d(e, "a", e), e;
      }),
      (s.o = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (s.p = "");
  var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
      l = o.push.bind(o);
  (o.push = e), (o = o.slice());
  for (var c = 0; c < o.length; c++) e(o[c]);
  var u = l;
  r.push([0, "chunk-vendors"]), n();
})({
  0: function (t, e, n) {
      t.exports = n("56d7");
  },
  "034b": function (t, e, n) {},
  "034f": function (t, e, n) {
      "use strict";
      n("85ec");
  },
  "0c86": function (t, e, n) {},
  "16b4": function (t, e, n) {},
  1965: function (t, e, n) {
      t.exports = n.p + "img/zoovu-o.aeb5a26c.svg";
  },
  "1aa6": function (t, e, n) {},
  "2d26": function (t, e, n) {
      t.exports = n.p + "img/zoovu-z.7046cde9.svg";
  },
  "415b": function (t, e, n) {},
  "485e": function (t, e, n) {
      "use strict";
      n("8242");
  },
  "56b2": function (t, e, n) {
      "use strict";
      n("9c6f");
  },
  "56d7": function (t, e, n) {
      "use strict";
      n.r(e);
      n("e260"), n("e6cf"), n("cca6"), n("a79d");
      var a = n("2b0e"),
          i = function () {
              var t = this,
                  e = t.$createElement,
                  n = t._self._c || e;
              return n("div", { attrs: { id: "app" } }, [n("router-view")], 1);
          },
          r = [],
          s = { name: "App" },
          o = s,
          l = (n("034f"), n("2877")),
          c = Object(l["a"])(o, i, r, !1, null, null, null),
          u = c.exports,
          d = n("8c4f"),
          f = function () {
              var t = this,
                  e = t.$createElement,
                  n = t._self._c || e;
              return n(
                  "div",
                  { staticClass: "height-100 d-flex flex-column align-items-center justify-content-center" },
                  [
                      n("h1", { staticClass: "h2 uns mb-5" }, [t._v("Hello friend, tell me your name...")]),
                      n("name-input", {
                          model: {
                              value: t.username,
                              callback: function (e) {
                                  t.username = e;
                              },
                              expression: "username",
                          },
                      }),
                      n("submit-button", { attrs: { disabled: t.submitDisabled }, on: { submitData: t.submit } }),
                  ],
                  1
              );
          },
          m = [],
          h = function () {
              var t = this,
                  e = t.$createElement,
                  n = t._self._c || e;
              return n("span", [
                  n("input", {
                      staticClass: "name-input mb-5",
                      attrs: { type: "text", placeholder: t.placeholder },
                      domProps: { value: t.value },
                      on: {
                          input: function (e) {
                              return t.$emit("input", e.target.value);
                          },
                      },
                  }),
              ]);
          },
          p = [],
          g = {
              name: "NameInput",
              props: ["value"],
              data: function () {
                  return { placeholder: "Your name here" };
              },
          },
          v = g,
          b = (n("56b2"), Object(l["a"])(v, h, p, !1, null, "089bc443", null)),
          w = b.exports,
          C = function () {
              var t = this,
                  e = t.$createElement,
                  n = t._self._c || e;
              return n("span", [n("button", { class: ["submit-button", t.disabled ? "disabled" : ""], attrs: { type: "submit" }, on: { click: t.submit } }, [t._v(" Let's go "), n("i", { staticClass: "fas fa-arrow-right ml-3" })])]);
          },
          y = [],
          x = {
              name: "SubmitButton",
              props: { disabled: { type: Boolean, default: !1 } },
              data: function () {
                  return { placeholder: "Your name here" };
              },
              methods: {
                  submit: function () {
                      this.disabled || this.$emit("submitData", !0);
                  },
              },
          },
          _ = x,
          S = (n("779b"), Object(l["a"])(_, C, y, !1, null, "d03bb81e", null)),
          D = S.exports,
          T = {
              name: "HomePage",
              components: { NameInput: w, SubmitButton: D },
              data: function () {
                  return { username: "", submitDisabled: !0 };
              },
              created: function () {
                  localStorage.clear();
              },
              methods: {
                  submit: function () {
                      localStorage.setItem("username", JSON.stringify(this.username)), this.$router.push({ name: "Game" });
                  },
              },
              watch: {
                  username: function () {
                      this.submitDisabled = "" == this.username;
                  },
              },
          },
          A = T,
          P = Object(l["a"])(A, f, m, !1, null, null, null),
          I = P.exports,
          O = function () {
              var t = this,
                  e = t.$createElement,
                  n = t._self._c || e;
              return n("div", { staticClass: "height-100 pt-5" }, [
                  n(
                      "div",
                      { staticClass: "container pt-lg-4" },
                      [
                          n("game-header", { attrs: { username: t.username, seconds: t.timePassed } }),
                          t.userWon
                              ? n("div", [n("confetti", { attrs: { makeConfetti: t.userWon } }), n("winner-banner", { attrs: { username: t.username, userWon: t.userWon, score: t.timePassed, reloadTime: t.reloadTime } })], 1)
                              : t.loadingData
                              ? t._e()
                              : n("pickup-cards", { attrs: { cards: t.placedList }, on: { startGame: t.startGame, placeCardOnPickup: t.placeCardOnPickup } }),
                          n("droppable-area", { attrs: { slots: t.slots, cards: t.placedList }, on: { placeCard: t.placeCard, finishGame: t.finishGame } }),
                      ],
                      1
                  ),
              ]);
          },
          E = [],
          j =
              (n("4de4"),
              n("7db0"),
              n("4160"),
              n("159b"),
              function () {
                  var t = this,
                      e = t.$createElement,
                      n = t._self._c || e;
                  return n("div", { staticClass: "d-flex justify-content-between align-items-end mb-5" }, [
                      n("div", { staticClass: "d-flex align-items-start align-content-center flex-column" }, [n("main-title", { attrs: { text: t.mainTitle, classList: "mb-4" } }), n("sub-title", { attrs: { text: t.subTitleLeft } })], 1),
                      n("div", { staticClass: "d-flex align-items-end align-content-center flex-column" }, [n("time-title", { attrs: { seconds: t.seconds, classList: "mb-4" } }), n("sub-title", { attrs: { text: t.subTitleRight } })], 1),
                  ]);
              }),
          $ = [],
          k =
              (n("a9e3"),
              function () {
                  var t = this,
                      e = t.$createElement,
                      n = t._self._c || e;
                  return n("h2", { class: ["main-title h4", t.classList] }, [t._v(t._s(t.text))]);
              }),
          z = [],
          H = { name: "SubTitle", props: { text: { type: String, default: "" }, classList: { type: String, default: "" } } },
          L = H,
          M = (n("9fc4"), Object(l["a"])(L, k, z, !1, null, "745e373a", null)),
          G = M.exports,
          R = function () {
              var t = this,
                  e = t.$createElement,
                  n = t._self._c || e;
              return n("h2", { class: ["sub-title h6", t.classList] }, [t._v(t._s(t.text))]);
          },
          F = [],
          W = { name: "SubTitle", props: { text: { type: String, default: "" }, classList: { type: String, default: "" } } },
          q = W,
          N = (n("59fd"), Object(l["a"])(q, R, F, !1, null, "180297bc", null)),
          B = N.exports,
          J = function () {
              var t = this,
                  e = t.$createElement,
                  n = t._self._c || e;
              return n("h2", { class: ["time-title h4", t.classList] }, [t.icon ? n("i", { staticClass: "icon far fa-clock mr-1" }) : t._e(), t._v(" " + t._s("Your time: " + this.seconds + " seconds") + " ")]);
          },
          Y = [],
          K = { name: "SubTitle", props: { icon: { type: Boolean, default: !0 }, seconds: { type: Number, default: 0 }, classList: { type: String, default: "" } } },
          Q = K,
          U = (n("ce74"), Object(l["a"])(Q, J, Y, !1, null, "e5a26954", null)),
          V = U.exports,
          X = {
              name: "GameHeader",
              components: { MainTitle: G, SubTitle: B, TimeTitle: V },
              props: { seconds: { type: Number }, username: { type: String, default: JSON.parse(localStorage.getItem("username")) } },
              data: function () {
                  return { mainTitle: "Good luck, " + this.username + "!", subTitleLeft: "Pick up the right cards", subTitleRight: "The faster the better!" };
              },
          },
          Z = X,
          tt = Object(l["a"])(Z, j, $, !1, null, null, null),
          et = tt.exports,
          nt = function () {
              var t = this,
                  e = t.$createElement,
                  n = t._self._c || e;
              return n("div", { staticClass: "outer-cointainer" }, [
                  n(
                      "div",
                      {
                          ref: "row",
                          class: ["d-flex mb-5 drop-zone", t.className],
                          on: {
                              drop: function (e) {
                                  return t.onDrop(e);
                              },
                              dragover: function (t) {
                                  t.preventDefault();
                              },
                              dragenter: function (t) {
                                  t.preventDefault();
                              },
                          },
                      },
                      t._l(t.cards, function (e) {
                          return n("draggable-card", { key: e.id, attrs: { card: e }, on: { emitStart: t.emitStart } });
                      }),
                      1
                  ),
              ]);
          },
          at = [],
          it = function () {
              var t = this,
                  e = t.$createElement,
                  n = t._self._c || e;
              return n(
                  "div",
                  {
                      ref: "card",
                      class: ["card draggable-card", t.fullSize ? "full-size" : "medium-size"],
                      attrs: { draggable: "" },
                      on: {
                          click: t.emitStart,
                          drag: t.emitStart,
                          dragstart: function (e) {
                              return t.startDrag(e, t.card);
                          },
                      },
                  },
                  [n("card-image", { attrs: { image: t.card.image } })],
                  1
              );
          },
          rt = [],
          st = function () {
              var t = this,
                  e = t.$createElement,
                  n = t._self._c || e;
              return n("div", { staticClass: "card-body" }, [n("img", { staticClass: "image uns", attrs: { src: t.image } })]);
          },
          ot = [],
          lt = { name: "CardImage", props: { image: { type: String } } },
          ct = lt,
          ut = (n("485e"), Object(l["a"])(ct, st, ot, !1, null, "2b205e26", null)),
          dt = ut.exports,
          ft = {
              name: "DraggableCard",
              components: { CardImage: dt },
              props: { card: { type: Object }, fullSize: { type: Boolean, default: !1 } },
              created: function () {
                  window.addEventListener("resize", this.calcCardHeight);
              },
              mounted: function () {
                  this.calcCardHeight();
              },
              destroyed: function () {
                  window.removeEventListener("resize", this.calcCardHeight);
              },
              methods: {
                  calcCardHeight: function () {
                      if (!this.fullSize) {
                          var t = this.$refs.card.clientWidth;
                          this.$refs.card.style.height = t + "px";
                      }
                  },
                  emitStart: function () {
                      this.$emit("emitStart", !0);
                  },
                  startDrag: function (t, e) {
                      (t.dataTransfer.dropEffect = "move"), (t.dataTransfer.effectAllowed = "move"), t.dataTransfer.setData("cardId", e.id);
                  },
              },
          },
          mt = ft,
          ht = (n("c28d"), Object(l["a"])(mt, it, rt, !1, null, "dd9fd23a", null)),
          pt = ht.exports,
          gt = {
              name: "PickupCards",
              components: { DraggableCard: pt },
              props: { cards: { type: Array } },
              computed: {
                  className: function () {
                      return 5 == this.cards.length ? "justify-content-between" : "justify-content-around";
                  },
              },
              data: function () {
                  return { gameStarted: !1 };
              },
              created: function () {
                  window.addEventListener("resize", this.calcRowHeight);
              },
              mounted: function () {
                  this.calcRowHeight();
              },
              destroyed: function () {
                  window.removeEventListener("resize", this.calcRowHeight);
              },
              methods: {
                  calcRowHeight: function () {
                      var t = this.$refs.row.clientHeight;
                      this.$refs.row.style.height = t + "px";
                  },
                  emitStart: function () {
                      this.gameStarted || ((this.gameStarted = !0), this.$emit("startGame", !0));
                  },
                  onDrop: function (t) {
                      var e = t.dataTransfer.getData("cardId");
                      this.$emit("placeCardOnPickup", e);
                  },
              },
          },
          vt = gt,
          bt = (n("e6f8"), Object(l["a"])(vt, nt, at, !1, null, "28e710b7", null)),
          wt = bt.exports,
          Ct = function () {
              var t = this,
                  e = t.$createElement,
                  n = t._self._c || e;
              return n(
                  "div",
                  { staticClass: "text-left" },
                  [
                      n("sub-title", { attrs: { text: t.title, classList: "mb-5" } }),
                      n(
                          "div",
                          { staticClass: "d-flex justify-content-between mb-5" },
                          t._l(t.slots, function (e) {
                              return n("slot-card", { key: e.id, attrs: { slotData: e }, on: { placeCard: t.placeCard } });
                          }),
                          1
                      ),
                  ],
                  1
              );
          },
          yt = [],
          xt = function () {
              var t = this,
                  e = t.$createElement,
                  n = t._self._c || e;
              return n(
                  "div",
                  {
                      ref: "card",
                      staticClass: "card slot-card",
                      on: {
                          drop: function (e) {
                              return t.onDrop(e, t.slotData);
                          },
                          dragover: function (t) {
                              t.preventDefault();
                          },
                          dragenter: function (t) {
                              t.preventDefault();
                          },
                      },
                  },
                  [t.slotData.card && t.slotData.id == t.slotData.card.slot ? n("draggable-card", { attrs: { card: t.slotData.card, fullSize: "" } }) : t._e()],
                  1
              );
          },
          _t = [],
          St = {
              name: "SlotCard",
              components: { DraggableCard: pt },
              props: { slotData: { type: Object } },
              created: function () {
                  window.addEventListener("resize", this.calcCardHeight);
              },
              mounted: function () {
                  this.calcCardHeight();
              },
              destroyed: function () {
                  window.removeEventListener("resize", this.calcCardHeight);
              },
              methods: {
                  calcCardHeight: function () {
                      var t = this.$refs.card.clientWidth;
                      this.$refs.card.style.height = t + "px";
                  },
                  onDrop: function (t, e) {
                      var n = t.dataTransfer.getData("cardId");
                      e.card || this.$emit("placeCard", { cardId: n, slotId: e.id });
                  },
              },
          },
          Dt = St,
          Tt = (n("e2de"), Object(l["a"])(Dt, xt, _t, !1, null, "73c4129d", null)),
          At = Tt.exports,
          Pt = {
              name: "DroppableArea",
              components: { SlotCard: At, SubTitle: B },
              props: { cards: { type: Array }, slots: { type: Array } },
              data: function () {
                  return { title: "..and drop them here to make the logo great again!" };
              },
              methods: {
                  placeCard: function (t) {
                      this.$emit("placeCard", t);
                  },
              },
          },
          It = Pt,
          Ot = Object(l["a"])(It, Ct, yt, !1, null, null, null),
          Et = Ot.exports,
          jt = function () {
              var t = this,
                  e = t.$createElement,
                  n = t._self._c || e;
              return n("div");
          },
          $t = [],
          kt =
              (n("a434"),
              {
                  name: "Confetti",
                  props: { makeConfetti: { type: Boolean } },
                  data: function () {
                      return {
                          confetti: {
                              maxCount: 70,
                              speed: 2,
                              frameInterval: 15,
                              alpha: 0.9,
                              gradient: !0,
                              start: null,
                              stop: null,
                              toggle: null,
                              pause: null,
                              resume: null,
                              togglePause: null,
                              remove: null,
                              isPaused: null,
                              isRunning: null,
                          },
                          supportsAnimationFrame: window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame,
                          colors: [
                              "rgba(30,144,255,",
                              "rgba(107,142,35,",
                              "rgba(255,215,0,",
                              "rgba(255,192,203,",
                              "rgba(106,90,205,",
                              "rgba(173,216,230,",
                              "rgba(238,130,238,",
                              "rgba(152,251,152,",
                              "rgba(70,130,180,",
                              "rgba(244,164,96,",
                              "rgba(210,105,30,",
                              "rgba(220,20,60,",
                          ],
                          streamingConfetti: !1,
                          animationTimer: null,
                          pause: !1,
                          lastFrameTime: Date.now(),
                          particles: [],
                          waveAngle: 0,
                          context: null,
                      };
                  },
                  created: function () {
                      this.startConfetti();
                  },
                  beforeDestroy: function () {
                      this.stopConfetti();
                  },
                  methods: {
                      closeModal: function () {
                          this.displayModal = !1;
                      },
                      startConfetti: function (t, e, n) {
                          var a = window.innerWidth,
                              i = window.innerHeight;
                          window.requestAnimationFrame = (function () {
                              return (
                                  window.requestAnimationFrame ||
                                  window.webkitRequestAnimationFrame ||
                                  window.mozRequestAnimationFrame ||
                                  window.oRequestAnimationFrame ||
                                  window.msRequestAnimationFrame ||
                                  function (t) {
                                      return window.setTimeout(t, this.confetti.frameInterval);
                                  }
                              );
                          })();
                          var r = document.getElementById("confetti-canvas");
                          null === r
                              ? ((r = document.createElement("canvas")),
                                r.setAttribute("id", "confetti-canvas"),
                                r.setAttribute("style", "display:block;z-index:999999;pointer-events:none;position:fixed;top:0"),
                                document.body.prepend(r),
                                (r.width = a),
                                (r.height = i),
                                window.addEventListener(
                                    "resize",
                                    function () {
                                        (r.width = window.innerWidth), (r.height = window.innerHeight);
                                    },
                                    !0
                                ),
                                (this.context = r.getContext("2d")))
                              : null === this.context && (this.context = r.getContext("2d"));
                          var s = this.confetti.maxCount;
                          if (e)
                              if (n)
                                  if (e == n) s = this.particles.length + n;
                                  else {
                                      if (e > n) {
                                          var o = e;
                                          (e = n), (n = o);
                                      }
                                      s = this.particles.length + ((Math.random() * (n - e) + e) | 0);
                                  }
                              else s = this.particles.length + e;
                          else n && (s = this.particles.length + n);
                          while (this.particles.length < s) this.particles.push(this.resetParticle({}, a, i));
                          (this.streamingConfetti = !0), (this.pause = !1), this.runAnimation(), t && window.setTimeout(this.stopConfetti, t);
                      },
                      resetParticle: function (t, e, n) {
                          return (
                              (t.color = this.colors[(Math.random() * this.colors.length) | 0] + (this.confetti.alpha + ")")),
                              (t.color2 = this.colors[(Math.random() * this.colors.length) | 0] + (this.confetti.alpha + ")")),
                              (t.x = Math.random() * e),
                              (t.y = Math.random() * n - n),
                              (t.diameter = 10 * Math.random() + 5),
                              (t.tilt = 10 * Math.random() - 10),
                              (t.tiltAngleIncrement = 0.07 * Math.random() + 0.05),
                              (t.tiltAngle = Math.random() * Math.PI),
                              t
                          );
                      },
                      toggleConfettiPause: function () {
                          this.pause ? this.resumeConfetti() : this.pauseConfetti();
                      },
                      isConfettiPaused: function () {
                          return this.pause;
                      },
                      pauseConfetti: function () {
                          this.pause = !0;
                      },
                      resumeConfetti: function () {
                          (this.pause = !1), this.runAnimation();
                      },
                      runAnimation: function () {
                          if (!this.pause)
                              if (0 === this.particles.length) this.context.clearRect(0, 0, window.innerWidth, window.innerHeight), (this.animationTimer = null);
                              else {
                                  var t = Date.now(),
                                      e = t - this.lastFrameTime;
                                  (!this.supportsAnimationFrame || e > this.confetti.frameInterval) &&
                                      (this.context.clearRect(0, 0, window.innerWidth, window.innerHeight), this.updateParticles(), this.drawParticles(this.context), (this.lastFrameTime = t - (e % this.confetti.frameInterval))),
                                      (this.animationTimer = requestAnimationFrame(this.runAnimation));
                              }
                      },
                      stopConfetti: function () {
                          this.streamingConfetti = !1;
                      },
                      removeConfetti: function () {
                          stop(), (this.pause = !1), (this.particles = []);
                      },
                      toggleConfetti: function () {
                          this.streamingConfetti ? this.stopConfetti() : this.startConfetti();
                      },
                      isConfettiRunning: function () {
                          return this.streamingConfetti;
                      },
                      drawParticles: function (t) {
                          for (var e, n, a, i, r = 0; r < this.particles.length; r++) {
                              if (((e = this.particles[r]), t.beginPath(), (t.lineWidth = e.diameter), (a = e.x + e.tilt), (n = a + e.diameter / 2), (i = e.y + e.tilt + e.diameter / 2), this.confetti.gradient)) {
                                  var s = t.createLinearGradient(n, e.y, a, i);
                                  s.addColorStop("0", e.color), s.addColorStop("1.0", e.color2), (t.strokeStyle = s);
                              } else t.strokeStyle = e.color;
                              t.moveTo(n, e.y), t.lineTo(a, i), t.stroke();
                          }
                      },
                      updateParticles: function () {
                          var t,
                              e = window.innerWidth,
                              n = window.innerHeight;
                          this.waveAngle += 0.01;
                          for (var a = 0; a < this.particles.length; a++)
                              (t = this.particles[a]),
                                  !this.streamingConfetti && t.y < -15
                                      ? (t.y = n + 100)
                                      : ((t.tiltAngle += t.tiltAngleIncrement), (t.x += Math.sin(this.waveAngle) - 0.5), (t.y += 0.5 * (Math.cos(this.waveAngle) + t.diameter + this.confetti.speed)), (t.tilt = 15 * Math.sin(t.tiltAngle))),
                                  (t.x > e + 20 || t.x < -20 || t.y > n) && (this.streamingConfetti && this.particles.length <= this.confetti.maxCount ? this.resetParticle(t, e, n) : (this.particles.splice(a, 1), a--));
                      },
                  },
              }),
          zt = kt,
          Ht = Object(l["a"])(zt, jt, $t, !1, null, null, null),
          Lt = Ht.exports,
          Mt = function () {
              var t = this,
                  e = t.$createElement,
                  n = t._self._c || e;
              return n("div", { staticClass: "mb-5" }, [
                  n("h1", { staticClass: "h1 title mb-4" }, [t._v("¡Congatulations " + t._s(t.username) + "!")]),
                  n("h2", { staticClass: "h2 mb-4 sub-title" }, [t._v("You have won")]),
                  n("p", { staticClass: "h4 mb-4" }, [t._v("Your score is: " + t._s(t.score))]),
                  n("p", { staticClass: "h6" }, [t._v("Game will restart in " + t._s(t.reloadTime) + " seconds.")]),
              ]);
          },
          Gt = [],
          Rt = { name: "WinnerBanner", props: { username: { type: String }, score: { type: Number, default: 0 }, reloadTime: { type: Number, default: 0 } } },
          Ft = Rt,
          Wt = (n("c758"), Object(l["a"])(Ft, Mt, Gt, !1, null, "79b264c2", null)),
          qt = Wt.exports,
          Nt = {
              name: "GamePlayPage",
              components: { GameHeader: et, PickupCards: wt, DroppableArea: Et, Confetti: Lt, WinnerBanner: qt },
              data: function () {
                  return {
                      username: JSON.parse(localStorage.getItem("username")),
                      timePassed: 0,
                      reloadTime: 10,
                      timerInterval: 1e3,
                      gameInterval: null,
                      reloadInteval: null,
                      userWon: !1,
                      reloadGame: !1,
                      loadingData: !1,
                      cards: [],
                      originalData: [
                          { id: 1, value: "o", image: n("1965"), slot: 0 },
                          { id: 2, value: "z", image: n("2d26"), slot: 0 },
                          { id: 3, value: "v", image: n("a0a8"), slot: 0 },
                          { id: 4, value: "u", image: n("cef2"), slot: 0 },
                          { id: 5, value: "o", image: n("1965"), slot: 0 },
                      ],
                      slots: [
                          { id: 1, value: "z", card: null },
                          { id: 2, value: "o", card: null },
                          { id: 3, value: "o", card: null },
                          { id: 4, value: "v", card: null },
                          { id: 5, value: "u", card: null },
                      ],
                  };
              },
              created: function () {
                  this.initializeGameData(),
                      window.addEventListener("beforeunload", function () {
                          localStorage.clear();
                      });
              },
              computed: {
                  placedList: function () {
                      return this.cards.filter(function (t) {
                          return 0 === t.slot;
                      });
                  },
              },
              methods: {
                  saveOriginalData: function () {
                      var t = this;
                      this.cards.forEach(function (e) {
                          t.originalData.push(e);
                      });
                  },
                  initializeGameData: function () {
                      var t = this;
                      (this.loadingData = !0),
                          (this.timePassed = 0),
                          (this.cards = []),
                          this.originalData.forEach(function (e) {
                              (e.slot = 0), t.cards.push(e);
                          }),
                          this.slots.forEach(function (t) {
                              t.card = null;
                          });
                      for (var e = this.cards.length - 1; e > 0; e--) {
                          var n = Math.floor(Math.random() * (e + 1)),
                              a = this.cards[e];
                          (a.slot = 0), (this.cards[e] = this.cards[n]), (this.cards[n] = a);
                      }
                      this.loadingData = !1;
                  },
                  startGame: function () {
                      var t = this;
                      this.gameInterval = setInterval(function () {
                          return (t.timePassed += 1);
                      }, this.timerInterval);
                  },
                  setTimeoutRestart: function () {
                      var t = this;
                      this.reloadInteval = setInterval(function () {
                          return (t.reloadTime -= 1);
                      }, this.timerInterval);
                  },
                  finishGame: function () {
                      clearInterval(this.gameInterval), clearInterval(this.reloadInteval), (this.userWon = !0), (this.reloadTime = 10), this.setTimeoutRestart();
                  },
                  checkPlaceAsset: function (t) {
                      t.card.value != t.value && (this.timePassed += 10);
                  },
                  checkAsserts: function () {
                      var t = 0;
                      this.slots.forEach(function (e) {
                          e.card && e.value == e.card.value && (t += 1);
                      }),
                          5 == t && this.finishGame();
                  },
                  placeCardOnPickup: function (t) {
                      this.freeSlot(t);
                      var e = this.cards.find(function (e) {
                          return e.id == t;
                      });
                      e.slot = 0;
                  },
                  freeSlot: function (t) {
                      this.slots.forEach(function (e) {
                          e.card && e.card.id == t && (e.card = null);
                      });
                  },
                  placeCard: function (t) {
                      this.freeSlot(t.cardId);
                      var e = this.cards.find(function (e) {
                              return e.id == t.cardId;
                          }),
                          n = this.slots.find(function (e) {
                              return e.id == t.slotId;
                          });
                      (e.slot = t.slotId), this.$set(n, "card", e), this.checkPlaceAsset(n), this.checkAsserts();
                  },
              },
              watch: {
                  reloadTime: function () {
                      0 == this.reloadTime && ((this.userWon = !1), this.initializeGameData());
                  },
              },
          },
          Bt = Nt,
          Jt = Object(l["a"])(Bt, O, E, !1, null, null, null),
          Yt = Jt.exports;
      a["a"].use(d["a"]);
      var Kt = new d["a"]({
          routes: [
              { path: "/", name: "Home", component: I },
              {
                  path: "/game",
                  name: "Game",
                  component: Yt,
                  beforeEnter: function (t, e, n) {
                      localStorage.username ? n() : n({ name: "Home" });
                  },
              },
              { path: "*", name: "404", redirect: "/" },
          ],
      });
      n("16b4"), n("034b"), n("79a4");
      (a["a"].config.productionTip = !1),
          new a["a"]({
              render: function (t) {
                  return t(u);
              },
              router: Kt,
          }).$mount("#app");
  },
  "59fd": function (t, e, n) {
      "use strict";
      n("415b");
  },
  7010: function (t, e, n) {},
  "779b": function (t, e, n) {
      "use strict";
      n("7dd9");
  },
  "79a4": function (t, e, n) {},
  "7dd9": function (t, e, n) {},
  8242: function (t, e, n) {},
  "85ec": function (t, e, n) {},
  "9c6f": function (t, e, n) {},
  "9fc4": function (t, e, n) {
      "use strict";
      n("0c86");
  },
  a0a8: function (t, e, n) {
      t.exports = n.p + "img/zoovu-v.1f889f4d.svg";
  },
  a7d9: function (t, e, n) {},
  bf66: function (t, e, n) {},
  c28d: function (t, e, n) {
      "use strict";
      n("a7d9");
  },
  c758: function (t, e, n) {
      "use strict";
      n("bf66");
  },
  ce74: function (t, e, n) {
      "use strict";
      n("7010");
  },
  cef2: function (t, e, n) {
      t.exports = n.p + "img/zoovu-u.a773e755.svg";
  },
  e2de: function (t, e, n) {
      "use strict";
      n("e923");
  },
  e6f8: function (t, e, n) {
      "use strict";
      n("1aa6");
  },
  e923: function (t, e, n) {},
});
//# sourceMappingURL=app.256c6ff4.js.map
