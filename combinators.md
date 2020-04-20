
## Identity

https://en.wikipedia.org/wiki/Combinatory_logic#Examples_of_combinators
```
(I x) = x
```

https://gist.github.com/Avaq/1f0636ec5c8d6aed2e45
```js
const I = x => x;
```

```graphviz
digraph G {
  compound="true"

  subgraph cluster0 {
    "0x" [label="x"]

    subgraph cluster00 {
      "00x" [label="x"]
    }

    "0x" -> "00x" [lhead="cluster00", label="Identity"]
  }
}
```

## Constant

https://en.wikipedia.org/wiki/Combinatory_logic#Examples_of_combinators
```
(K x y) = x
```

https://gist.github.com/Avaq/1f0636ec5c8d6aed2e45
```js
const K = x => y => x;
```

```graphviz
digraph G {
  compound="true"

  subgraph cluster0 {
    "0x" [label="x"]

    subgraph cluster00 {
      "00y" [label="y"]

      subgraph cluster000 {
        "000x" [label="x"]
      }
    }

    "0x" -> "00y" [lhead="cluster00", label="Constant"]
    "00y" -> "000x" [lhead="cluster000", label="Constant(x)"]
  }
}
```

## Substitution

https://en.wikipedia.org/wiki/Combinatory_logic#Examples_of_combinators
```
(S x y z) = (x z (y z))
```

https://gist.github.com/Avaq/1f0636ec5c8d6aed2e45
```js
const S = f => g => x => f(x)(g(x));
```

```graphviz
digraph G {
  compound="true"

  subgraph cluster0 {
    "0x" [label="x"]

    subgraph cluster00 {
      "00y" [label="y"]

      subgraph cluster000 {
        "000z" [label="z"]

        subgraph cluster0000 {
          "0000z" [label="z"]
          "0000y(z)" [label="y(z)"]
          "0000x(z)" [label="x(z)"]
          "0000(x(z))(y(z))" [label="(x(z))(y(z))"]

          "0000z" -> "0000y(z)" [label="y"]
          "0000z" -> "0000x(z)" [label="x"]

          "0000y(z)" -> "0000x(z)" [dir="none"]
          "0000x(z)" -> "0000(x(z))(y(z))"
        }
      }
    }

    "0x" -> "00y" [lhead="cluster00", label="S"]
    "00y" -> "000z" [lhead="cluster000", label="S(x)"]
    "000z" -> "0000z" [lhead="cluster0000", label="S(x)(y)"]
  }
}
```

Given S and K, I itself is unnecessary, since it can be built from the other two
```
((S K K) x)
= (S K K x)
= (K x (K x))
= x
```

