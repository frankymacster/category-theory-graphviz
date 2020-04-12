# [Definition](https://en.wikipedia.org/wiki/Limit_(category_theory)#Limits)

[./cone.md](cone.md)

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
    "L"
    "F(X)"
    "F(Y)"
  }

  "X" -> "Y" [label="f"]

  "X" -> "F(X)" [label="F"]
  "Y" -> "F(Y)" [label="F"]
  "F(X)" -> "F(Y)" [label="F(f)"]

  "N" -> "F(X)" [label="coneX"]
  "N" -> "F(Y)" [label="coneY"]

  "L" -> "F(X)" [label="limitConeX"]
  "L" -> "F(Y)" [label="limitConeY"]

  "N" -> "L" [label="unique", style="dashed"]
}
```

# [Definition](https://en.wikipedia.org/wiki/Limit_(category_theory)#Colimits)

[./cone.md](cone.md)

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
    "L"
    "F(X)"
    "F(Y)"
  }

  "X" -> "Y" [label="f"]

  "X" -> "F(X)" [label="F"]
  "Y" -> "F(Y)" [label="F"]
  "F(X)" -> "F(Y)" [label="F(f)"]

  "F(X)" -> "N" [label="coneX"]
  "F(Y)" -> "N" [label="coneY"]

  "F(X)" -> "L" [label="limitConeX"]
  "F(Y)" -> "L" [label="limitConeY"]

  "L" -> "N" [label="unique", style="dashed"]
}
```