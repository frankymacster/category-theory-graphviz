const getCone = () =>
`
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
`