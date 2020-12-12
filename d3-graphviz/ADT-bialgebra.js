const getADTBialgebra = () =>
`
digraph G {
  subgraph clusterC {
    label="C"

    "A"
    "X"    

    "F(A)"
    "F(X)"

    "A" -> "A" [label="idA"]
    "X" -> "X" [label="idX"]

    "F(A)" -> "F(A)" [label="idF(A)"]
    "F(X)" -> "F(X)" [label="idF(X)"]

    "A" -> "X" [label="f"]

    "F(A)" -> "A" [label="a"]
    "F(X)" -> "X" [label="X"]

    "F(A)" -> "F(X)" [label="F(f)"]


    "G(A)"
    "G(X)"

    "A" -> "A" [label="idA"]
    "X" -> "X" [label="idX"]

    "G(A)" -> "G(A)" [label="idG(A)"]
    "G(X)" -> "G(X)" [label="idG(X)"]

    "A" -> "X" [label="G"]

    "A" -> "G(A)" [label="a"]
    "X" -> "G(X)" [label="x"]

    "G(A)" -> "G(X)" [label="G(g)"]
  }
}
`