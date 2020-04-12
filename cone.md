# [Definition](https://en.wikipedia.org/wiki/Cone_(category_theory)#Definition)

```
Let F : J → C be a diagram in C.
  Formally,
    a diagram is nothing more than a functor from J to C
```

### Category level

```graphviz
digraph G {
  "J" [shape="square"]
  "C" [shape="square"]

  "J" -> "C" [label="F"]
}
```

### Object level

```graphviz
digraph G {
  subgraph clusterJ {
    label="J"

    "X"
    "Y"
  }

  subgraph clusterC {
    label="C"

    "N"
    "F(X)"
    "F(Y)"
  }

  "X" -> "Y" [label="f"]

  "X" -> "F(X)" [label="F"]
  "Y" -> "F(Y)" [label="F"]
  "F(X)" -> "F(Y)" [label="F(f)"]

  "N" -> "F(X)" [label="coneX"]
  "N" -> "F(Y)" [label="coneY"]
}
```

# [Definition](https://en.wikipedia.org/wiki/Limit_(category_theory)#Colimits)


### Category level

```graphviz
digraph G {
  "J" [shape="square"]
  "C" [shape="square"]

  "J" -> "C" [label="F"]
}
```

### Object level

```graphviz
digraph G {
  subgraph clusterJ {
    label="J"

    "X"
    "Y"
  }

  subgraph clusterC {
    label="C"

    "N"
    "F(X)"
    "F(Y)"
  }

  "X" -> "Y" [label="f"]

  "X" -> "F(X)" [label="F"]
  "Y" -> "F(Y)" [label="F"]
  "F(X)" -> "F(Y)" [label="F(f)"]

  "F(X)" -> "N" [label="coneX"]
  "F(Y)" -> "N" [label="coneY"]
}
```

