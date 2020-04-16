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

  "Index" -> "C" [label="Diagram"]
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
    "Diagram(X)"
    "Diagram(Y)"
  }

  "X" -> "Y" [label="f"]

  "X" -> "Diagram(X)" [label="Diagram"]
  "Y" -> "Diagram(Y)" [label="Diagram"]
  "Diagram(X)" -> "Diagram(Y)" [label="Diagram(f)"]

  "ConeApex" -> "Diagram(X)" [label="coneX"]
  "ConeApex" -> "Diagram(Y)" [label="coneY"]
}
```

# [Definition](https://en.wikipedia.org/wiki/Limit_(category_theory)#Colimits)


### Category level

```graphviz
digraph G {
  "Index" [shape="square"]
  "C" [shape="square"]

  "Index" -> "C" [label="Diagram"]
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
    "Diagram(X)"
    "Diagram(Y)"
  }

  "X" -> "Y" [label="f"]

  "X" -> "Diagram(X)" [label="Diagram"]
  "Y" -> "Diagram(Y)" [label="Diagram"]
  "Diagram(X)" -> "Diagram(Y)" [label="Diagram(f)"]

  "Diagram(X)" -> "CoconeApex" [label="coconeX"]
  "Diagram(Y)" -> "CoconeApex" [label="coconeY"]
}
```

