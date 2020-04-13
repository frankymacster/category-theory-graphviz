# [Definitions](https://en.m.wikipedia.org/wiki/Category_(mathematics))


```graphviz
digraph G {
  subgraph clusterC {
    label="C"

    "CX" [label="X"]
    "CY" [label="Y"]
    "CZ" [label="Z"]
    "CM(X)" [label="M(X)"]
    "CM(Y)" [label="M(Y)"]
    "CM(Z)" [label="M(Z)"]
    "C(M ∘ M)(X)" [label="(M ∘ M)(X)"]
    "C(M ∘ M)(Y)" [label="(M ∘ M)(Y)"]
    "C(M ∘ M)(Z)" [label="(M ∘ M)(Z)"]
  }


  subgraph clusterKleisliC {
    label="Kleisli(C)"

    "Kleisli(C)X" [label="X"]
    "Kleisli(C)Y" [label="Y"]
    "Kleisli(C)Z" [label="Z"]
    "Kleisli(C)M(X)" [label="M(X)"]
    "Kleisli(C)M(Y)" [label="M(Y)"]
    "Kleisli(C)M(Z)" [label="M(Z)"]
    "Kleisli(C)(M ∘ M)(X)" [label="(M ∘ M)(X)"]
    "Kleisli(C)(M ∘ M)(Y)" [label="(M ∘ M)(Y)"]
    "Kleisli(C)(M ∘ M)(Z)" [label="(M ∘ M)(Z)"]
  }

  "CX" -> "CX" [label="1"]
  "CY" -> "CY" [label="1"]
  "CZ" -> "CZ" [label="1"]

  "CM(X)" -> "CM(X)" [label="1"]
  "CM(Y)" -> "CM(Y)" [label="1"]
  "CM(Z)" -> "CM(Z)" [label="1"]

  "C(M ∘ M)(X)" -> "C(M ∘ M)(X)" [label="1"]
  "C(M ∘ M)(Y)" -> "C(M ∘ M)(Y)" [label="1"]
  "C(M ∘ M)(Z)" -> "C(M ∘ M)(Z)" [label="1"]

  "Kleisli(C)X" -> "Kleisli(C)X" [label="1"]
  "Kleisli(C)Y" -> "Kleisli(C)Y" [label="1"]
  "Kleisli(C)Z" -> "Kleisli(C)Z" [label="1"]

  "Kleisli(C)M(X)" -> "Kleisli(C)M(X)" [label="1"]
  "Kleisli(C)M(Y)" -> "Kleisli(C)M(Y)" [label="1"]
  "Kleisli(C)M(Z)" -> "Kleisli(C)M(Z)" [label="1"]

  "Kleisli(C)(M ∘ M)(X)" -> "Kleisli(C)(M ∘ M)(X)" [label="1"]
  "Kleisli(C)(M ∘ M)(Y)" -> "Kleisli(C)(M ∘ M)(Y)" [label="1"]
  "Kleisli(C)(M ∘ M)(Z)" -> "Kleisli(C)(M ∘ M)(Z)" [label="1"]

  "Kleisli(C)X" -> "Kleisli(C)M(X)" [label="returnX"]
  "Kleisli(C)M(X)" -> "Kleisli(C)(M ∘ M)(X)" [label="M ∘ returnX"]
  "Kleisli(C)M(X)" -> "Kleisli(C)(M ∘ M)(X)" [label="returnX ∘ M"]
  "Kleisli(C)(M ∘ M)(X)" -> "Kleisli(C)M(X)" [label="joinX"]

  "Kleisli(C)Y" -> "Kleisli(C)M(Y)" [label="returnY"]
  "Kleisli(C)M(Y)" -> "Kleisli(C)(M ∘ M)(Y)" [label="M ∘ returnY"]
  "Kleisli(C)M(Y)" -> "Kleisli(C)(M ∘ M)(Y)" [label="returnY ∘ M"]
  "Kleisli(C)(M ∘ M)(Y)" -> "Kleisli(C)M(Y)" [label="joinY"]

  "Kleisli(C)Z" -> "Kleisli(C)M(Z)" [label="returnZ"]
  "Kleisli(C)M(Z)" -> "Kleisli(C)(M ∘ M)(Z)" [label="M ∘ returnZ"]
  "Kleisli(C)M(Z)" -> "Kleisli(C)(M ∘ M)(Z)" [label="returnZ ∘ M"]
  "Kleisli(C)(M ∘ M)(Z)" -> "Kleisli(C)M(Z)" [label="joinZ"]


  "Kleisli(C)X" -> "Kleisli(C)Y" [label="f", color="blue"]
  "Kleisli(C)Y" -> "Kleisli(C)Z" [label="g", color="blue"]

  "CX" -> "CM(X)" [label="returnX"]
  "CM(X)" -> "C(M ∘ M)(X)" [label="M ∘ returnX"]
  "CM(X)" -> "C(M ∘ M)(X)" [label="returnX ∘ M"]
  "C(M ∘ M)(X)" -> "CM(X)" [label="joinX"]

  "CY" -> "CM(Y)" [label="returnY"]
  "CM(Y)" -> "C(M ∘ M)(Y)" [label="M ∘ returnY"]
  "CM(Y)" -> "C(M ∘ M)(Y)" [label="returnY ∘ M"]
  "C(M ∘ M)(Y)" -> "CM(Y)" [label="joinY"]

  "CZ" -> "CM(Z)" [label="returnZ"]
  "CM(Z)" -> "C(M ∘ M)(Z)" [label="M ∘ returnZ"]
  "CM(Z)" -> "C(M ∘ M)(Z)" [label="returnZ ∘ M"]


  "CX" -> "CM(Y)" [label="f", color="blue"]
  "CY" -> "CM(Z)" [label="g", color="blue"]
  "CM(Y)" -> "C(M ∘ M)(Z)" [label="M(g)", color="blue"]
  "C(M ∘ M)(Z)" -> "CM(Z)" [label="joinZ", color="blue"]

}
```

# Code

## [Haskell](http://hackage.haskell.org/package/data-category-0.7.1/docs/src/Data.Category.Kleisli.html#Kleisli)

```haskell
data Kleisli m a b where
  Kleisli ::
    (Functor m, Dom m ~ k, Cod m ~ k) =>
      Monad m -> Obj k b -> k a (m :% b) -> Kleisli m a b

kleisliId ::
  (Functor m, Dom m ~ k, Cod m ~ k) =>
    Monad m -> Obj k a -> Kleisli m a a
kleisliId m a = Kleisli m a (unit m ! a)

-- | The category of Kleisli arrows.
instance Category (Kleisli m) where
  src (Kleisli m _ f) = kleisliId m (src f)
  tgt (Kleisli m b _) = kleisliId m b

  (Kleisli m c f) . (Kleisli _ _ g) = Kleisli m c ((multiply m ! c) . (monadFunctor m % f) . g)
```
