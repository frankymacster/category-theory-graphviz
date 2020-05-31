https://en.wikipedia.org/wiki/Equaliser_(mathematics)
```graphviz
digraph G {
  "E" -> "X" [label="eq"]

  "O" -> "X" [label="m"]
  "O" -> "E" [label="unique"]

  "X" -> "Y" [label="f"]
  "X" -> "Y" [label="g"]
}
```

https://en.wikipedia.org/wiki/Coequalizer
```graphviz
digraph G {
  "X" -> "Y" [label="f"]
  "X" -> "Y" [label="g"]

  "Y" -> "Q" [label="q"]
  "Y" -> "Q'" [label="q'"]

  "Q" -> "Q'" [label="unique"]
}
```