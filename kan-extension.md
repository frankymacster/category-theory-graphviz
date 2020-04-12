# Right Kan Extension

## [Definition](https://en.wikipedia.org/wiki/Kan_extension#Definition)

### Category level

```graphviz
digraph G {
  "A" [shape="square"]
  "B" [shape="square"]
  "C" [shape="square"]

  "A" -> "C" [label="X"]
  "A" -> "B" [label="F"]

  "B" -> "C" [label="R", style="dashed"]
}
```

### Functor level

```graphviz
digraph G {
  "X" [shape="square", peripheries=2]
  "RF" [shape="square", peripheries=2]
  "MF" [shape="square", peripheries=2]

  "RF" -> "X" [label="Nat(RF, X)"]
  "MF" -> "X" [label="Nat(MF, X)"]
  "MF" -> "RF" [label="Nat(MF, RF)", style="dashed"]
}
```

### Object level

```graphviz
digraph G {
  subgraph clusterA {
    label="A"

    "a1"
    "a2"
  }

  subgraph clusterB {
    label="B"

    "F(a1)"
    "F(a2)"
  }

  subgraph clusterC {
    label="C"

    "R(F(a1))"
    "R(F(a2))"

    "X(a1)"
    "X(a2)"

    "M(F(a1))"
    "M(F(a2))"
  }

  "a1" -> "a1" [label="1"]
  "a2" -> "a2" [label="1"]
  "F(a1)" -> "F(a1)" [label="1"]
  "F(a2)" -> "F(a2)" [label="1"]
  "R(F(a1))" -> "R(F(a1))" [label="1"]
  "R(F(a2))" -> "R(F(a2))" [label="1"]
  "X(a1)" -> "X(a1)" [label="1"]
  "X(a2)" -> "X(a2)" [label="1"]
  "M(F(a1))" -> "M(F(a1))" [label="1"]
  "M(F(a2))" -> "M(F(a2))" [label="1"]

  "a1" -> "a2" [label="f"]
  "F(a1)" -> "F(a2)" [label="F(f)"]
  "R(F(a1))" -> "R(F(a2))" [label="R(F(f))"]

  "a1" -> "F(a1)" [label="F"]
  "a2" -> "F(a2)" [label="F"]

  "a1" -> "X(a1)" [label="X"]
  "a2" -> "X(a2)" [label="X"]

  "X(a1)" -> "X(a2)" [label="X(f)"]

  "F(a1)" -> "R(F(a1))" [label="R", style="dashed"]
  "F(a2)" -> "R(F(a2))" [label="R", style="dashed"]

  "R(F(a1))" -> "X(a1)" [label="Nat(RF, X)"]
  "R(F(a2))" -> "X(a2)" [label="Nat(RF, X)"]

  "M(F(a1))" -> "X(a1)" [label="Nat(MF, X)"]
  "M(F(a2))" -> "X(a2)" [label="Nat(MF, X)"]

  "M(F(a1))" -> "M(F(a2))" [label="M(F(f))"]

  "M(F(a1))" -> "R(F(a1))" [label="Nat(MF, RF)", style="dashed"]
  "M(F(a2))" -> "R(F(a2))" [label="Nat(MF, RF)", style="dashed"]
}
```

## Code

### [Haskell](https://hackage.haskell.org/package/kan-extensions-5.2/docs/src/Data.Functor.Kan.Ran.html#Ran)

```haskell
newtype Ran g h a =
  Ran {
    runRan ::
      forall b.
        (a -> g b) ->
          h b
  }
```

# Left Kan Extension

## [Definition](https://en.wikipedia.org/wiki/Kan_extension#Definition)

### Category level

```graphviz
digraph G {
  "A" [shape="square"]
  "B" [shape="square"]
  "C" [shape="square"]

  "A" -> "C" [label="X"]
  "A" -> "B" [label="F"]

  "B" -> "C" [label="L", style="dashed"]
}
```

### Functor level

```graphviz
digraph G {
  "X" [shape="square", peripheries=2]
  "LF" [shape="square", peripheries=2]
  "MF" [shape="square", peripheries=2]

  "X" -> "LF" [label="Nat(X, LF)"]
  "X" -> "MF" [label="Nat(X, MF)"]
  "LF" -> "MF" [label="Nat(LF, MF)", style="dashed"]
}
```

### Object level

```graphviz
digraph G {
  subgraph clusterA {
    label="A"

    "a1"
    "a2"
  }

  subgraph clusterB {
    label="B"

    "F(a1)"
    "F(a2)"
  }

  subgraph clusterC {
    label="C"

    "L(F(a1))"
    "L(F(a2))"

    "X(a1)"
    "X(a2)"

    "M(F(a1))"
    "M(F(a2))"
  }

  "a1" -> "a1" [label="1"]
  "a2" -> "a2" [label="1"]
  "F(a1)" -> "F(a1)" [label="1"]
  "F(a2)" -> "F(a2)" [label="1"]
  "L(F(a1))" -> "L(F(a1))" [label="1"]
  "L(F(a2))" -> "L(F(a2))" [label="1"]
  "X(a1)" -> "X(a1)" [label="1"]
  "X(a2)" -> "X(a2)" [label="1"]
  "M(F(a1))" -> "M(F(a1))" [label="1"]
  "M(F(a2))" -> "M(F(a2))" [label="1"]

  "a1" -> "a2" [label="f"]
  "F(a1)" -> "F(a2)" [label="F(f)"]
  "L(F(a1))" -> "L(F(a2))" [label="L(F(f))"]

  "a1" -> "F(a1)" [label="F"]
  "a2" -> "F(a2)" [label="F"]

  "a1" -> "X(a1)" [label="X"]
  "a2" -> "X(a2)" [label="X"]

  "X(a1)" -> "X(a2)" [label="X(f)"]

  "F(a1)" -> "L(F(a1))" [label="L", style="dashed"]
  "F(a2)" -> "L(F(a2))" [label="L", style="dashed"]


  "X(a1)" -> "L(F(a1))" [label="Nat(X, LF)"]
  "X(a2)" -> "L(F(a2))" [label="Nat(X, LF)"]

  "X(a1)" -> "M(F(a1))" [label="Nat(X, MF)"]
  "X(a2)" -> "M(F(a2))" [label="Nat(X, MF)"]

  "M(F(a1))" -> "M(F(a2))" [label="M(F(f))"]

  "L(F(a1))" -> "M(F(a1))" [label="Nat(LF, MF)", style="dashed"]
  "L(F(a2))" -> "M(F(a2))" [label="Nat(LF, MF)", style="dashed"]
}

## Code

### [Haskell](https://hackage.haskell.org/package/kan-extensions-5.2/docs/src/Data.Functor.Kan.Ran.html#Ran)

```haskell
data Lan g h a where
  Lan ::
    (g b -> a) ->
      h b ->
        Lan g h a
```