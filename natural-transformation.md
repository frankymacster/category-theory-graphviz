# [Definition](https://en.wikipedia.org/wiki/Natural_transformation#Definition)

```graphviz
digraph G {
  subgraph clusterC {
    label="C"

    "X"
    "Y"
  }

  subgraph clusterD {
    label="D"

    "F(X)"
    "F(Y)"

    "G(X)"
    "G(Y)"
  }

  <!-- functor -->
  "X" -> "Y" [label="f"]
  "F(X)" -> "F(Y)" [label="F(f)"]
  "G(X)" -> "G(Y)" [label="G(f)"]

  "X" -> "F(X)" [label="F"]
  "Y" -> "F(Y)" [label="F"]

  "X" -> "G(X)" [label="G"]
  "Y" -> "G(Y)" [label="G"]

  <!-- natural transformation -->
  "F(X)" -> "G(X)" [label="Nat(F, G)X"]
  "F(Y)" -> "G(Y)" [label="Nat(F, G)Y"]
}
```

# Code

## [Haskell](https://hackage.haskell.org/package/natural-transformation-0.4/docs/src/Control-Natural.html#%3A~%3E)

```haskell
infixr 0 ->

type f -> g = forall x. f x -> g x
```