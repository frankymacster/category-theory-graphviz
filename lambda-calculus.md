<!-- https://en.wikipedia.org/wiki/Lambda_calculus -->

// similar to monoid definition as category

0 := λf.λx.x

1 := λf.λx.f x

2 := λf.λx.f (f x)

3 := λf.λx.f (f (f x))

## 0

```graphviz
digraph G {
  compound="true"

  "f"
  "x0" [label="x"]

  subgraph cluster0 {
    label="state transition"

    "x1" [label="x"]
  }

  "f" -> "x1" [lhead="cluster0"]
  "x0" -> "x1" [lhead="cluster0"]
}
```

## 1

```graphviz
digraph G {
  compound=true
  "f"
  "x0" [label="x"]

  subgraph cluster0 {
    label="state transition"

    "x1" [label="x"]
    "f(x)"
    "x1" -> "f(x)" [label="f"]
  }

  "f" -> "x1" [lhead="cluster0"]
  "x0" -> "x1" [lhead="cluster0"]
}
```

## 2

```graphviz
digraph G {
  compound=true
  "f"
  "x0" [label="x"]

  subgraph cluster0 {
    label="state transition"

    "x1" [label="x"]
    "f(x)"
    "x1" -> "f(x)" [label="f"]
    "f(x)" -> "f(f(x))" [label="f"]
  }

  "f" -> "x1" [lhead="cluster0"]
  "x0" -> "x1" [lhead="cluster0"]
}
```

## SUCC

SUCC := λn.λf.λx.f (n f x)

```graphviz
digraph G {
  compound=true
  "f"
  "n"
  "x0" [label="x"]

  subgraph cluster0 {
    label="state transition"

    "x1" [label="x"]
    "x1" -> "(n(f))(x)" [label="n(f)"]
    "(n(f))(x)" -> "f((n(f))(x))" [label="f"]
  }

  "n" -> "x1" [lhead="cluster0"]
  "f" -> "x1" [lhead="cluster0"]
  "x0" -> "x1" [lhead="cluster0"]
}
```

## PLUS

PLUS := λm.λn.λf.λx.m f (n f x)

```graphviz
digraph G {
  compound=true
  "f"
  "m"
  "n"
  "x0" [label="x"]

  subgraph cluster0 {
    label="state transition"

    "x1" [label="x"]
    "x1" -> "(n(f))(x)" [label="n(f)"]
    "(n(f))(x)" -> "f((n(f))(x))" [label="f"]
    "f((n(f))(x))" -> "m(f((n(f))(x)))" [label="m"]
  }

  "m" -> "x1" [lhead="cluster0"]
  "n" -> "x1" [lhead="cluster0"]
  "f" -> "x1" [lhead="cluster0"]
  "x0" -> "x1" [lhead="cluster0"]
}
```

PLUS := λm.λn.m SUCC n

```graphviz
digraph G {
  compound="true"
  "m"
  "n0" [label="n"]

  subgraph cluster0 {
    label="state transition"

    "n1" [label="n"]
    "n1" -> "SUCC(n)" [label="SUCC"]
    "SUCC(n)" -> "m(SUCC(n))" [label="m"]
  }

  "m" -> "n1" [lhead="cluster0"]
  "n0" -> "n1" [lhead="cluster0"]
}
```

PRED := λn.λf.λx.n (λg.λh.h (g f)) (λu.x) (λu.u)

```graphviz
digraph G {
  compound="true"
  "n"
  "f"
  "x0" [label="x"]

  subgraph cluster0 {
    label="n (λg.λh.h (g f)) (λu.x) (λu.u)"

    "λu.u"
    "(λu.x)(λu.u)"
    "(λg.λh.h (g f))((λu.x)(λu.u))"
    "n((λg.λh.h (g f))((λu.x)(λu.u)))"

    subgraph cluster00 {
      compound="true"
      label="λg.λh.h (g f)"

      "00g" [label="g"]
      "00h" [label="h"]

      subgraph cluster000 {
        label="h (g f)"

        "000f" [label="f"]

        "000f" -> "g(f)" [label="g"]
        "g(f)" -> "h(g(f))" [label="h"]
      }

      "00g" -> "000f" [lhead="cluster000"]
      "00h" -> "000f" [lhead="cluster000"]
    }

    subgraph cluster01 {
      label="λu.x"

      "u0" [label="u"]

      subgraph cluster010 {
        label="x"

        "x"
      }

      "u0" -> "x" [lhead="cluster010"]
    }

    subgraph cluster10 {
      label="λu.u"

      "u1" [label="u"]

      subgraph cluster100 {
        label="u"

        "u2" [label="u"]
      }

      "u1" -> "u2" [lhead="cluster100"]
    }
  }

  "n" -> "λu.u" [lhead="cluster0"]
  "f" -> "λu.u" [lhead="cluster0"]
  "x0" -> "λu.u" [lhead="cluster0"]

  "λu.u" -> "(λu.x)(λu.u)" [label="λu.x"]
  "(λu.x)(λu.u)" -> "(λg.λh.h (g f))((λu.x)(λu.u))" [label="λg.λh.h (g f)"]
  "(λg.λh.h (g f))((λu.x)(λu.u))" -> "n((λg.λh.h (g f))((λu.x)(λu.u)))" [label="n"]
}
```

SUB := λm.λn.n PRED m

```graphviz
digraph G {
  compound="true"

  "m0" [label="m"]
  "n"

  subgraph cluster0 {
    label="state transition"

    "m1" [label="m"]
    "m1" -> "PRED(m)" [label="PRED"]
    "PRED(m)" -> "n(PRED(m))" [label="n"]
  }

  "n" -> "m1" [lhead="cluster0"]
  "m0" -> "m1" [lhead="cluster0"]
}
```