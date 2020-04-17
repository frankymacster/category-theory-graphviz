const getProduct = () =>
`
digraph G {
  "X1"
  "X2"

  "X1 x X2"

  "X1 x' X2"

  "X1 x' X2" -> "X1" [label="projection1'"]
  "X1 x' X2" -> "X2" [label="projection2'"]

  "X1 x' X2" -> "X1 x X2" [label="unique", style="dashed"]

  "X1 x X2" -> "X1" [label="projection1"]
  "X1 x X2" -> "X2" [label="projection2"]
}
`