const getTransitionSystemRewritingSystem = () =>
`
digraph G {
  subgraph clusterTransitionSystem {
    label="transition system"

    "state0"

    "state10"
    "state11"

    "state20"
    "state21"
    "state22"
    "state23"

    subgraph clusterRewritingSystemApplication10 {
      label="rewriting system application" 

      "abstraction10_0" -> "abstraction10_10" [label="call"]
      "abstraction10_0" -> "abstraction10_11" [label="call"]

      "abstraction10_10" -> "part10_20" [label="return"]
      "abstraction10_10" -> "part10_21" [label="return"]

      "abstraction10_11" -> "part10_22" [label="return"]
      "abstraction10_11" -> "part10_23" [label="return"]

      "part10_20" -> "solution10_1" [label="merge"]
      "part10_21" -> "solution10_1" [label="merge"]

      "part10_22" -> "solution10_2" [label="merge"]
      "part10_23" -> "solution10_2" [label="merge"]

      "solution10_1" -> "state10" [label="merge"]
      "solution10_2" -> "state10" [label="merge"]
    }

    subgraph clusterRewritingSystemApplication11 {
      label="rewriting system application" 

      "abstraction11_0" -> "abstraction11_10" [label="call", color="blue"]
      "abstraction11_0" -> "abstraction11_11" [label="call", color="blue"]

      "abstraction11_10" -> "part11_20" [label="return", color="blue"]
      "abstraction11_10" -> "part11_21" [label="return", color="blue"]

      "abstraction11_11" -> "part11_22" [label="return", color="blue"]
      "abstraction11_11" -> "part11_23" [label="return", color="blue"]

      "part11_20" -> "solution11_1" [label="merge", color="blue"]
      "part11_21" -> "solution11_1" [label="merge", color="blue"]

      "part11_22" -> "solution11_2" [label="merge", color="blue"]
      "part11_23" -> "solution11_2" [label="merge", color="blue"]

      "solution11_1" -> "state11" [label="merge", color="blue"]
      "solution11_2" -> "state11" [label="merge", color="blue"]
    }

    subgraph clusterRewritingSystemApplication20 {
      label="rewriting system application" 

      "abstraction20_0" -> "abstraction20_10" [label="call"]
      "abstraction20_0" -> "abstraction20_11" [label="call"]

      "abstraction20_10" -> "part20_20" [label="return"]
      "abstraction20_10" -> "part20_21" [label="return"]

      "abstraction20_11" -> "part20_22" [label="return"]
      "abstraction20_11" -> "part20_23" [label="return"]

      "part20_20" -> "solution20_1" [label="merge"]
      "part20_21" -> "solution20_1" [label="merge"]

      "part20_22" -> "solution20_2" [label="merge"]
      "part20_23" -> "solution20_2" [label="merge"]

      "solution20_1" -> "state20" [label="merge"]
      "solution20_2" -> "state20" [label="merge"]
    }

    subgraph clusterRewritingSystemApplication21 {
      label="rewriting system application" 

      "abstraction21_0" -> "abstraction21_10" [label="call"]
      "abstraction21_0" -> "abstraction21_11" [label="call"]

      "abstraction21_10" -> "part21_20" [label="return"]
      "abstraction21_10" -> "part21_21" [label="return"]

      "abstraction21_11" -> "part21_22" [label="return"]
      "abstraction21_11" -> "part21_23" [label="return"]

      "part21_20" -> "solution21_1" [label="merge"]
      "part21_21" -> "solution21_1" [label="merge"]

      "part21_22" -> "solution21_2" [label="merge"]
      "part21_23" -> "solution21_2" [label="merge"]

      "solution21_1" -> "state21" [label="merge"]
      "solution21_2" -> "state21" [label="merge"]
    }

    subgraph clusterRewritingSystemApplication22 {
      label="rewriting system application" 

      "abstraction22_0" -> "abstraction22_10" [label="call", color="blue"]
      "abstraction22_0" -> "abstraction22_11" [label="call", color="blue"]

      "abstraction22_10" -> "part22_20" [label="return", color="blue"]
      "abstraction22_10" -> "part22_21" [label="return", color="blue"]

      "abstraction22_11" -> "part22_22" [label="return", color="blue"]
      "abstraction22_11" -> "part22_23" [label="return", color="blue"]

      "part22_20" -> "solution22_1" [label="merge", color="blue"]
      "part22_21" -> "solution22_1" [label="merge", color="blue"]

      "part22_22" -> "solution22_2" [label="merge", color="blue"]
      "part22_23" -> "solution22_2" [label="merge", color="blue"]

      "solution22_1" -> "state22" [label="merge", color="blue"]
      "solution22_2" -> "state22" [label="merge", color="blue"]
    }

    subgraph clusterRewritingSystemApplication23 {
      label="rewriting system application" 

      "abstraction23_0" -> "abstraction23_10" [label="call"]
      "abstraction23_0" -> "abstraction23_11" [label="call"]

      "abstraction23_10" -> "part23_20" [label="return"]
      "abstraction23_10" -> "part23_21" [label="return"]

      "abstraction23_11" -> "part23_22" [label="return"]
      "abstraction23_11" -> "part23_23" [label="return"]

      "part23_20" -> "solution23_1" [label="merge"]
      "part23_21" -> "solution23_1" [label="merge"]

      "part23_22" -> "solution23_2" [label="merge"]
      "part23_23" -> "solution23_2" [label="merge"]

      "solution23_1" -> "state23" [label="merge"]
      "solution23_2" -> "state23" [label="merge"]
    }
  }

  "state0" -> "abstraction10_0" [label="action1"]
  "state0" -> "abstraction11_0" [label="action2", color="blue"]

  "state10" -> "abstraction20_0" [label="action1"]
  "state10" -> "abstraction21_0" [label="action2"]

  "state11" -> "abstraction22_0" [label="action1"]
  "state11" -> "abstraction23_0" [label="action2"]
}
`