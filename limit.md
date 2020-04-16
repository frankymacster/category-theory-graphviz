# [Definition](https://en.wikipedia.org/wiki/Limit_(category_theory)#Limits)

[./cone.md](cone.md)

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

    "Limit'"
    "Limit"
    "Diagram(X)"
    "Diagram(Y)"
  }

  "X" -> "Y" [label="f"]

  "X" -> "Diagram(X)" [label="Diagram"]
  "Y" -> "Diagram(Y)" [label="Diagram"]
  "Diagram(X)" -> "Diagram(Y)" [label="Diagram(f)"]

  "Limit'" -> "Diagram(X)" [label="limit'coneX"]
  "Limit'" -> "Diagram(Y)" [label="limit'coneY"]

  "Limit" -> "Diagram(X)" [label="limitConeX"]
  "Limit" -> "Diagram(Y)" [label="limitConeY"]

  "Limit'" -> "Limit" [label="unique", style="dashed"]
}
```

# [Definition](https://en.wikipedia.org/wiki/Limit_(category_theory)#Colimits)

[./cone.md](cone.md)

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

    "Colimit'"
    "Colimit"
    "Diagram(X)"
    "Diagram(Y)"
  }

  "X" -> "Y" [label="f"]

  "X" -> "Diagram(X)" [label="Diagram"]
  "Y" -> "Diagram(Y)" [label="Diagram"]
  "Diagram(X)" -> "Diagram(Y)" [label="Diagram(f)"]

  "Diagram(X)" -> "Colimit'" [label="colimit'coconeX"]
  "Diagram(Y)" -> "Colimit'" [label="colimit'coconeY"]

  "Diagram(X)" -> "Colimit" [label="colimitCoconeX"]
  "Diagram(Y)" -> "Colimit" [label="colimitCoconeY"]

  "Colimit" -> "Colimit'" [label="unique", style="dashed"]
}
```