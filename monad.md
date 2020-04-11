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