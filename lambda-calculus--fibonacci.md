<!-- https://gist.github.com/alopatindev/4a4fddb983911c0a7c872e4720014eee
y := λf.(λx.f (x x)) (λx.f (x x))
fib := y (λf n.if n <= 2 then 1 else f(n - 1) + f(n - 2))

fib := y ( λf. λn. IFTHENELSE (n <= 2) 1 (ADD f(SUB n 1) f(SUB n 2)) )
-->
```graphviz
digraph G {
  compound="true"

  "f"

  subgraph cluster0 {
    "0n" [label="n"]

    subgraph cluster00 {
      "(n, 1)" -> "(SUB n 1)" [label="SUB"]
      "(SUB n 1)" -> "f(SUB n 1)" [label="f"]

      "(n, 2)" -> "(SUB n 2)" [label="SUB"]
      "(SUB n 2)" -> "f(SUB n 2)" [label="f"]

      "f(SUB n 1)" -> "ADD f(SUB n 1)" [label="ADD"]
      "ADD f(SUB n 1)" -> "f(SUB n 2)" [dir=none]
      "f(SUB n 2)" -> "ADD f(SUB n 1) f(SUB n 2)"

      "1"
      "n <= 2"
      "ADD f(SUB n 1) f(SUB n 2)"

      "n <= 2" -> "IFTHENELSE (n <= 2)" [label="IFTHENELSE"]
      "1" -> "IFTHENELSE (n <= 2)" [dir=none]
      "IFTHENELSE (n <= 2)" -> "IFTHENELSE (n <= 2) 1"
      "IFTHENELSE (n <= 2) 1" -> "ADD f(SUB n 1) f(SUB n 2)" [dir=none]
      "ADD f(SUB n 1) f(SUB n 2)" -> "IFTHENELSE (n <= 2) 1 (ADD f(SUB n 1) f(SUB n 2))"
    }

    "IFTHENELSE (n <= 2) 1 (ADD f(SUB n 1) f(SUB n 2))" -> "y (λf. λn. IFTHENELSE (n <= 2) 1 (ADD f(SUB n 1) f(SUB n 2)))" [label="y", ltail="cluster00"]
  }

  "f" -> "0n" [lhead="cluster0"]
  "0n" -> "(n, 1)" [lhead="cluster00"]
}
```

<!-- digraph g{
  n1 -> p1 [dir=none];
  p1 -> p2
  p1 [shape=none, width=0, height=0, label=""]
  {rank=same; n2 -> p1}
} -->