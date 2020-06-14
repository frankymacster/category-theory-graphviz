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

    "(λu.u, λu.x)"
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

  "n" -> "(λu.u, λu.x)" [lhead="cluster0"]
  "f" -> "(λu.u, λu.x)" [lhead="cluster0"]
  "x0" -> "(λu.u, λu.x)" [lhead="cluster0"]

  "(λu.u, λu.x)" -> "(λg.λh.h (g f))((λu.x)(λu.u))" [label="λg.λh.h (g f)"]
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

TRUE := λx.λy.x

```graphviz
digraph G {
  compound="true"

  "x"

  subgraph cluster0 {
    "0y" [label="y"]

    subgraph cluster00 {
      "00x" [label="x"]
    }

    "0y" -> "00x" [lhead="cluster00"]
  }

  "x" -> "0y" [lhead="cluster0"]
}
```

FALSE := λx.λy.y

```graphviz
digraph G {
  compound="true"

  "x"

  subgraph cluster0 {
    "0y" [label="y"]

    subgraph cluster00 {
      "00y" [label="y"]
    }

    "0y" -> "00y" [lhead="cluster00"]
  }

  "x" -> "0y" [lhead="cluster0"]
}
```

(Note that FALSE is equivalent to the Church numeral zero defined above)
Then, with these two lambda terms, we can define some logic operators (these are just possible formulations; other expressions are equally correct):

AND := λp.λq.p q p

```graphviz
digraph G {
  subgraph cluster0 {
    label="p"

    subgraph cluster00 {
      label="q"

      "00p" [label="p"]
      "00q(p)" [label="q(p)"]
      "00p(q(p))" [label="p(q(p))"]

      "00p" -> "00q(p)" [label="q"]
      "00q(p)" -> "00p(q(p))" [label="p"]
    }
  }
}
```

OR := λp.λq.p p q

```graphviz
digraph G {
  subgraph cluster0 {
    label="p"

    subgraph cluster00 {
      label="q"

      "00q" [label="q"]
      "00p(q)" [label="p(q)"]
      "00p(p(q))" [label="p(p(q))"]

      "00q" -> "00p(q)" [label="p"]
      "00p(q)" -> "00p(p(q))" [label="p"]
    }
  }
}
```

NOT := λp.p FALSE TRUE

```graphviz
digraph G {
  subgraph cluster0 {
    label="p"

    "0TRUE" [label="TRUE"]
    "0FALSE(TRUE)" [label="FALSE(TRUE)"]
    "0p(FALSE(TRUE))" [label="p(FALSE(TRUE))"]

    "0TRUE" -> "0FALSE(TRUE)" [label="FALSE"]
    "0FALSE(TRUE)" -> "0p(FALSE(TRUE))" [label="p"]
  }
}
```

IFTHENELSE := λp.λa.λb.p a b

```graphviz
digraph G {
  subgraph cluster0 {
    label="p"

    subgraph cluster00 {
      label="a"

      subgraph cluster000 {
        label="b"

        "000b" [label="b"]
        "000a(b)" [label="a(b)"]
        "000p(a(b))" [label="p(a(b))"]

        "000b" -> "000a(b)" [label="a"]
        "000a(b)" -> "000p(a(b))" [label="p"]
      }
    }
  }
}
```

## Factorial

F(n) = 1, if n = 0; else n × F(n − 1).

G := λr. λn.(1, if n = 0; else n × (r r (n−1)))
with  r r x = F x = G r x  to hold, so  r = G  and
F := G G = (λx.x x) G

The self-application achieves replication here, passing the function's lambda expression on to the next invocation as an argument value, making it available to be referenced and called there.

This solves it but requires re-writing each recursive call as self-application. We would like to have a generic solution, without a need for any re-writes:

G := λr. λn.(1, if n = 0; else n × (r (n−1)))
with  r x = F x = G r x  to hold, so  r = G r =: FIX G  and
F := FIX G  where  FIX g := (r where r = g r) = g (FIX g)
so that  FIX G = G (FIX G) = (λn.(1, if n = 0; else n × ((FIX G) (n−1))))


## Y combinator

```graphviz
digraph G {
  compound="true"

  "f"

  subgraph cluster0 {
    "0x" [label="x"]

    subgraph cluster00 {
      "00x" [label="x"]
      "00x(x)" [label="x(x)"]
      "00f(x(x))" [label="f(x(x))"]

      "00x" -> "00x(x)" [label="x"]
      "00x(x)" -> "00f(x(x))" [label="f"]
    }

    "0x" -> "00x" [lhead="cluster00"]
  }

  "f" -> "0x" [lhead="cluster0"]

  "00f(x(x))" -> "0x" [lhead="cluster0"]
}
```