# [Definition](https://en.wikipedia.org/wiki/Cone_(category_theory)#Definition)

```
Let F : J → C be a diagram in C.
  Formally,
    a diagram is nothing more than a functor from J to C
```

### Category level

```graphviz
digraph G {
  "Index" [shape="square"]
  "C" [shape="square"]

  "Index" -> "C" [label="F"]
}
```

### Object level

```graphviz
digraph G {
  subgraph clusterJ {
    label="Index"

    "X"
    "Y"
  }

  subgraph clusterC {
    label="C"

    "ConeApex"
    "F(X)"
    "F(Y)"
  }

  "X" -> "Y" [label="f"]

  "X" -> "F(X)" [label="F"]
  "Y" -> "F(Y)" [label="F"]
  "F(X)" -> "F(Y)" [label="F(f)"]

  "ConeApex" -> "F(X)" [label="coneX"]
  "ConeApex" -> "F(Y)" [label="coneY"]
}
```

# [Definition](https://en.wikipedia.org/wiki/Limit_(category_theory)#Colimits)


### Category level

```graphviz
digraph G {
  "Index" [shape="square"]
  "C" [shape="square"]

  "Index" -> "C" [label="F"]
}
```

### Object level

```graphviz
digraph G {
  subgraph clusterJ {
    label="Index"

    "X"
    "Y"
  }

  subgraph clusterC {
    label="C"

    "CoconeApex"
    "F(X)"
    "F(Y)"
  }

  "X" -> "Y" [label="f"]

  "X" -> "F(X)" [label="F"]
  "Y" -> "F(Y)" [label="F"]
  "F(X)" -> "F(Y)" [label="F(f)"]

  "F(X)" -> "CoconeApex" [label="coconeX"]
  "F(Y)" -> "CoconeApex" [label="coconeY"]
}
```

