# [Statement](https://en.wikipedia.org/wiki/Yoneda_lemma#Formal_statement)

```graphviz
digraph G {
  subgraph clusterC {
    label="C"
    "A"
    "X"
    "Y"
    "X" -> "Y" [label="f"]
  }

  subgraph clusterSet {
    label="Set"
    "F(A)"
    "F(X)"
    "F(Y)"
    "Hom(A,X)"
    "Hom(A,Y)"
    "F(X)" -> "F(Y)" [label="F(f)"]
    "Hom(A,X)" -> "F(X)" [label="Nat(Hom(A,-), F)"]
    "Hom(A,Y)" -> "F(Y)" [label="Nat(Hom(A,-), F)"]
    "Hom(A,X)" -> "Hom(A,Y)" [label="Hom(A,f)"]
  }

  "A" -> "F(A)" [label="F"]
  "X" -> "F(X)" [label="F"]
  "Y" -> "F(Y)" [label="F"]
  "X" -> "Hom(A,X)" [label="Hom(A,-)"]
  "Y" -> "Hom(A,Y)" [label="Hom(A,-)"]
}
```

# Code

## [Haskell](https://gist.github.com/jwiegley/5438178)

```haskell
data Yoneda functor a =
    Yoneda
    {
        runYoneda ::
            forall b.
                Functor functor =>
                    (a -> b) ->
                        functor b
    }

liftYoneda ::
    Functor functor =>
        functor a ->
            Yoneda functor a
liftYoneda functorA =
    Yoneda $ \function -> fmap function functorA
```

