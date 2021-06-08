(this.webpackJsonpexam = this.webpackJsonpexam || []).push([
  [0],
  {
    56: function (e, t, i) {},
    62: function (e, t, i) {},
    64: function (e, t, i) {
      "use strict";
      i.r(t);
      var n = i(0),
        c = i.n(n),
        a = i(5),
        s = i.n(a),
        o = (i(56), i(45)),
        r = i(92),
        l = i(95),
        d = i(97),
        h = i(43),
        j = i.n(h),
        x = i(96),
        b = i(90),
        p = i(3),
        m = Object(b.a)({
          menuH: { position: "absolute", top: "30px", right: "30px" },
          iconB: {
            width: "100px",
            height: "100px",
            color: "white",
            stroke: "white",
            backgroundColor: "black",
            "&:hover": {
              color: "black",
              stroke: "black",
              backgroundColor: "white",
              border: "2px solid black",
            },
            "@media (max-width: 1200px)": {
              width: "90px",
              height: "90px",
              border: "2px solid white",
            },
            "@media (max-width: 1000px)": { width: "80px", height: "80px" },
            "@media (max-width: 520px)": { width: "50px", height: "50px" },
          },
          icon: {
            fontSize: 65,
            "@media (max-width: 1200px)": { fontSize: 55 },
            "@media (max-width: 1000px)": { fontSize: 45 },
            "@media (max-width: 520px)": { fontSize: 35 },
          },
        }),
        u = ["Home", "News", "Login"];
      var O,
        g = function () {
          var e = m(),
            t = Object(n.useState)(null),
            i = Object(o.a)(t, 2),
            c = i[0],
            a = i[1],
            s = Boolean(c),
            h = function () {
              a(null);
            };
          return Object(p.jsxs)("div", {
            className: e.menuH,
            children: [
              Object(p.jsx)(r.a, {
                className: e.iconB,
                "aria-label": "more",
                "aria-controls": "long-menu",
                "aria-haspopup": "true",
                onClick: function (e) {
                  a(e.currentTarget);
                },
                children: Object(p.jsx)(j.a, { className: e.icon }),
              }),
              Object(p.jsx)(l.a, {
                id: "long-menu",
                anchorEl: c,
                keepMounted: !0,
                open: s,
                onClose: h,
                PaperProps: {
                  style: {
                    minWidth: "150px",
                    maxHeight: "150px",
                    color: "black",
                    backgroundColor: "white",
                  },
                },
                children: u.map(function (e) {
                  return Object(p.jsx)(
                    d.a,
                    { selected: "Pyxis" === e, onClick: h, children: e },
                    Object(x.a)()
                  );
                }),
              }),
            ],
          });
        },
        f = i(36),
        w = i(98),
        v = i(94),
        N = Object(w.a)(v.a)(
          ((O = {
            height: 48,
            color: "rgb(223, 163, 69)",
            margin: "-5px 30px",
            paddingRight: 30,
            fontWeight: "bold",
            fontStyle: '"Open Sans", sans-serif',
          }),
          Object(f.a)(O, "fontWeight", 700),
          Object(f.a)(O, "fontSize", "17px"),
          Object(f.a)(O, "letterSpacing", 4),
          O)
        );
      var k = function () {
          return Object(p.jsx)(N, { children: "READ MORE" });
        },
        S = i(44),
        y = i.n(S);
      i(62);
      var C = function () {
        return Object(p.jsxs)("div", {
          children: [
            Object(p.jsx)(g, {}),
            Object(p.jsx)("h1", { children: "MEDIA APPEARANCES" }),
            Object(p.jsxs)("div", {
              className: "container",
              children: [
                Object(p.jsxs)("div", {
                  className: "left-side",
                  children: [
                    Object(p.jsxs)("div", {
                      className: "text",
                      children: [
                        Object(p.jsx)("h3", { children: "Science Magazine" }),
                        Object(p.jsx)("h3", { children: "11. 12. 2018" }),
                        Object(p.jsx)("p", {
                          children:
                            "Want to master your professional and social networks to maximize recognition? Want to learn how to build productive teams that create lasting impact? In his new book, The formalula: The Universal Laws of Success, Albert-L\xe1szl\xf3 Barab\xe1si translates almost a decade of scholarly research on the science of success into a lively...",
                        }),
                      ],
                    }),
                    Object(p.jsx)(k, {}),
                  ],
                }),
                Object(p.jsxs)("div", {
                  className: "middle",
                  children: [
                    Object(p.jsxs)("div", {
                      className: "text",
                      children: [
                        Object(p.jsx)("h3", { children: "Nature" }),
                        Object(p.jsx)("h3", { children: "27. 11. 2018" }),
                        Object(p.jsx)("p", {
                          children:
                            "Originally printed by the National Acedemies of Sciences as a poster to accompany the publication of a research paper on how diseases connect, it was subsequently reproduced by the New York Times and included in the Mapping It out: Atlas of Contemporary Cartographies exhibition at the Serpentine Gallery in London....",
                        }),
                      ],
                    }),
                    Object(p.jsx)(k, {}),
                  ],
                }),
                Object(p.jsxs)("div", {
                  className: "right-side",
                  children: [
                    Object(p.jsxs)("div", {
                      className: "text",
                      children: [
                        Object(p.jsx)("div", {
                          className: "icon-con",
                          children: Object(p.jsx)(y.a, { className: "icon" }),
                        }),
                        Object(p.jsx)("h3", { children: "Lecture at NYU" }),
                      ],
                    }),
                    Object(p.jsx)(k, {}),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var z = function () {
          return Object(p.jsx)("div", {
            className: "app",
            children: Object(p.jsx)(C, {}),
          });
        },
        A = function (e) {
          e &&
            e instanceof Function &&
            i
              .e(3)
              .then(i.bind(null, 100))
              .then(function (t) {
                var i = t.getCLS,
                  n = t.getFID,
                  c = t.getFCP,
                  a = t.getLCP,
                  s = t.getTTFB;
                i(e), n(e), c(e), a(e), s(e);
              });
        };
      s.a.render(
        Object(p.jsx)(c.a.StrictMode, { children: Object(p.jsx)(z, {}) }),
        document.getElementById("root")
      ),
        A();
    },
  },
  [[64, 1, 2]],
]);
//# sourceMappingURL=main.f8966e26.chunk.js.map
