const getRewritingSystem = () =>
`
digraph G {
  subgraph clusterRewritingSystem {
    label="rewriting system"

    "abstraction0" -> "abstraction10" [label="call"]
    "abstraction0" -> "abstraction11" [label="call"]

    "abstraction10" -> "abstraction20" [label="call"]
    "abstraction10" -> "abstraction21" [label="call"]

    "abstraction11" -> "abstraction22" [label="call"]
    "abstraction11" -> "abstraction23" [label="call"]
  }
}
`