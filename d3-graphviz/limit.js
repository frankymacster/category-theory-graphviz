const getLimit = () =>
`
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
`