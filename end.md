# [Definitions](https://en.wikipedia.org/wiki/End_(category_theory))

```
an end of a functor S: Cop x C -> X
  is a universal extranatural transformation from an object e of X to S
```

Category level

```graphviz
digraph G {
  "Cop x C" [shape="square"]
  "X" [shape="square"]

  "Cop x C" -> "X" [label="S"]
}
```

Object level

```graphviz
digraph G {
  subgraph clusterCopxC {
    label="Cop x C"
    "a1"
    "a2"
    "a1" -> "a2" [label="f"]
  }

  subgraph clusterX {
    label="X"
    "S(a1)"
    "S(a2)"
    "S(a1)" -> "S(a2)" [label="S(f)"]
    "end(S)"
    "x"
  }

  "a1" -> "S(a1)" [label="S"]
  "a2" -> "S(a2)" [label="S"]

  "end(S)" -> "S(a1)" [label="ExtraNat(end(S), S)"]
  "end(S)" -> "S(a2)" [label="ExtraNat(end(S), S)"]

  "x" -> "S(a1)" [label="ExtraNat(x, S) = ExtraNat(end(S), S) ∘ unique"]
  "x" -> "S(a2)" [label="ExtraNat(x, S) = ExtraNat(end(S), S) ∘ unique"]

  "x" -> "end(S)" [label="unique", style="dashed"]
}
```

# [Properties](https://en.wikipedia.org/wiki/End_(category_theory))

Characterization as limit: If X is complete and C is small, the end can be described as the equalizer in the diagram