const getCategory = () =>
`
digraph G {
  subgraph clusterC {
    label="Category"

    subgraph clusterCInitial {
      label="Initial"
      style="rounded"

      "" [shape="plaintext"]
    }

    subgraph clusterCX {
      label="X"
      style="rounded"

      "x1" [shape="point"]
      "x2" [shape="point"]

      "x1" -> "x1" [label="1X"]
      "x2" -> "x2" [label="1X"]
      "x1" -> "x2" [label="1X"]
      "x2" -> "x1" [label="1X"]
    }

    subgraph clusterCTerminal {
      label="Terminal"
      style="rounded"

      "t" [shape="point"]

      "t" -> "t" [label="1Terminal"]
    }

    "" -> "x1" [label="initial"]
    "" -> "x2" [label="initial"]
    "" -> "t" [label="initial / terminal"]
    "" -> "" [label="1Initial"]

    "x1" -> "t" [label="terminal"]
    "x2" -> "t" [label="terminal"]
  }
}
`
