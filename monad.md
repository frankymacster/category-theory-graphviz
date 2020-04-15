# [Definition](https://en.wikipedia.org/wiki/Monad_(category_theory)#Formal_definition)

```graphviz
digraph G {
  node [shape="square"]

  "C" -> "C" [label="M"]
}
```

At functor level:

```graphviz
digraph G {
  node [shape="square", peripheries=2]

  "1C" -> "M" [label="return"]
  "M ∘ M" -> "M" [label="join"]

  "M ∘ M ∘ M" -> "M ∘ M" [label="M ∘ join"]
  "M ∘ M ∘ M" -> "M ∘ M" [label="join ∘ M"]

  "M" -> "M ∘ M" [label="return ∘ M"]
  "M" -> "M ∘ M" [label="M ∘ return"]
}
```

At object level:

```graphviz
digraph G {
  subgraph clusterC {
    label="C"
    "X"
    "Y"
    "Z"

    "X" -> "X" [label="1C"]
    "Y" -> "Y" [label="1C"]
    "Z" -> "Z" [label="1C"]

    "X" -> "Y" [label="f"]
    "Y" -> "Z" [label="g"]
    "X" -> "Z" [label="g ∘ f"]

    "M(X)"
    "M(Y)"
    "M(Z)"

    "M(X)" -> "M(X)" [label="1C"]
    "M(Y)" -> "M(Y)" [label="1C"]
    "M(Z)" -> "M(Z)" [label="1C"]

    "M(M(X))"
    "M(M(Y))"
    "M(M(Z))"

    "M(M(X))" -> "M(M(X))" [label="1C"]
    "M(M(Y))" -> "M(M(Y))" [label="1C"]
    "M(M(Z))" -> "M(M(Z))" [label="1C"]

    "M(M(M(X)))"
    "M(M(M(Y)))"
    "M(M(M(Z)))"

    "M(M(M(X)))" -> "M(M(M(X)))" [label="1C"]
    "M(M(M(Y)))" -> "M(M(M(Y)))" [label="1C"]
    "M(M(M(Z)))" -> "M(M(M(Z)))" [label="1C"]

    "M(X)" -> "M(Y)" [label="M(f)"]
    "M(Y)" -> "M(Z)" [label="M(g)"]
    "M(X)" -> "M(Z)" [label="M(g ∘ f)"]
  }

  "X" -> "M(X)" [label="M"]
  "Y" -> "M(Y)" [label="M"]
  "Z" -> "M(Z)" [label="M"]

  "X" -> "M(X)" [label="return"]
  "Y" -> "M(Y)" [label="return"]
  "Z" -> "M(Z)" [label="return"]

  "M(M(X))" -> "M(X)" [label="join"]
  "M(M(Y))" -> "M(Y)" [label="join"]
  "M(M(Z))" -> "M(Z)" [label="join"]

  "M(X)" -> "M(M(X))" [label="T(return)"]
  "M(Y)" -> "M(M(Y))" [label="T(return)"]
  "M(Z)" -> "M(M(Z))" [label="T(return)"]

  "M(X)" -> "M(M(X))" [label="return(T)"]
  "M(Y)" -> "M(M(Y))" [label="return(T)"]
  "M(Z)" -> "M(M(Z))" [label="return(T)"]

  "M(M(M(X)))" -> "M(M(X))" [label="T(join)"]
  "M(M(M(Y)))" -> "M(M(Y))" [label="T(join)"]
  "M(M(M(Z)))" -> "M(M(Z))" [label="T(join)"]

  "M(M(M(X)))" -> "M(M(X))" [label="join(T)"]
  "M(M(M(Y)))" -> "M(M(Y))" [label="join(T)"]
  "M(M(M(Z)))" -> "M(M(Z))" [label="join(T)"]
}
```


# Code

## [Haskell](https://www.haskell.org/tutorial/monads.html)

```haskell
infixl 1  >>, >>=

class  Monad m  where
    (>>=) ::
      m a -> (a -> m b) -> m b
    (>>) ::
      m a -> m b -> m b
    return ::
      a -> m a
```