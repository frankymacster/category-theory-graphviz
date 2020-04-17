const getFunctor = () =>
`
digraph G {
  subgraph clusterC {
    label="C"
    "X"
    "Y"
    "Z"    

    "X" -> "Y" [label="f"]
    "Y" -> "Z" [label="g"]
    "X" -> "Z" [label="g ∘ f"]
  }

  subgraph clusterD {
    label="D"
    "F(X)"
    "F(Y)"
    "F(Z)"

    "F(X)" -> "F(Y)" [label="F(f)"]
    "F(Y)" -> "F(Z)" [label="F(g)"]
    "F(X)" -> "F(Z)" [label="F(g ∘ f)"]
  }

  "X" -> "F(X)" [label="F"]
  "Y" -> "F(Y)" [label="F"]
  "Z" -> "F(Z)" [label="F"]
}
`