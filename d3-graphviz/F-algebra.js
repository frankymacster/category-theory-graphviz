const getFAlgebra = () =>
`
digraph G {
  subgraph clusterC {
    label="C"
    "A"
    "B"    

    "F(A)"
    "F(B)"

    "A" -> "A" [label="idA"]
    "B" -> "B" [label="idB"]

    "F(A)" -> "F(A)" [label="idF(A)"]
    "F(B)" -> "F(B)" [label="idF(B)"]

    "A" -> "B" [label="f"]

    "F(A)" -> "A" [label="a"]
    "F(B)" -> "B" [label="b"]

    "F(A)" -> "F(B)" [label="F(f)"]
  }
}
`