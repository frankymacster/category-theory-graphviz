const getTransitionSystem = () =>
`
digraph G {
  subgraph clusterTransitionSystem {
     label="transition system"
 
    "state0" -> "state10" [label="action1"]
    "state0" -> "state11" [label="action2"]

    "state10" -> "state20" [label="action1"]
    "state10" -> "state21" [label="action2"]

    "state11" -> "state22" [label="action1"]
    "state11" -> "state23" [label="action2"]
  }
}
`