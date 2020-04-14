# [Definition](https://en.wikipedia.org/wiki/Functor#Definition)

```graphviz
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
```

# Code

## [Haskell](https://hackage.haskell.org/package/base-4.12.0.0/docs/src/GHC.Base.html#Functor)

```haskell
class  Functor f  where
    fmap  :: (a -> b) -> f a -> f b

    -- | Replace all locations in the input with the same value.
    -- The default definition is @'fmap' . 'const'@, but this may be
    -- overridden with a more efficient version.
    (<$) :: a -> f b -> f a
    (<$) =  fmap . const
```

Faithful functor
Full functor
Forgetful functor