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


  <!-- "Kleisli(C)X" -> "Kleisli(C)X" [label="1Kleisli(C)"]
  "Kleisli(C)Y" -> "Kleisli(C)Y" [label="1Kleisli(C)"]
  "Kleisli(C)Z" -> "Kleisli(C)Z" [label="1Kleisli(C)"] -->

  "Kleisli(C)X" -> "Kleisli(C)Y" [label="f"]
  "Kleisli(C)Y" -> "Kleisli(C)Z" [label="g"]
  <!-- "Kleisli(C)Z" -> "Kleisli(C)X" [label="1C"] -->

  <!-- "Kleisli(C)X" -> "Kleisli(C)M(X)" [label="return"]
  "Kleisli(C)Y" -> "Kleisli(C)M(Y)" [label="return"]
  "Kleisli(C)Z" -> "Kleisli(C)M(Z)" [label="return"] -->

  <!-- "Kleisli(C)M(X)" -> "Kleisli(C)(M ∘ M)(X)" [label="M ∘ return"]
  "Kleisli(C)M(Y)" -> "Kleisli(C)(M ∘ M)(Y)" [label="M ∘ return"]
  "Kleisli(C)M(Z)" -> "Kleisli(C)(M ∘ M)(Z)" [label="M ∘ return"]
  "Kleisli(C)M(X)" -> "Kleisli(C)(M ∘ M)(X)" [label="return ∘ M"]
  "Kleisli(C)M(Y)" -> "Kleisli(C)(M ∘ M)(Y)" [label="return ∘ M"]
  "Kleisli(C)M(Z)" -> "Kleisli(C)(M ∘ M)(Z)" [label="return ∘ M"]

  "Kleisli(C)M(X)" -> "Kleisli(C)X" [label="joinX"]
  "Kleisli(C)M(Y)" -> "Kleisli(C)Y" [label="joinY"]
  "Kleisli(C)M(Z)" -> "Kleisli(C)Z" [label="joinZ"]
  "Kleisli(C)(M ∘ M)(X)" -> "Kleisli(C)M(X)" [label="joinX"]
  "Kleisli(C)(M ∘ M)(Y)" -> "Kleisli(C)M(Y)" [label="joinY"]
  "Kleisli(C)(M ∘ M)(Z)" -> "Kleisli(C)M(Z)" [label="joinZ"] -->


  "CX" -> "CM(Y)" [label="f"]
  "CY" -> "CM(Z)" [label="g"]
  "CM(Y)" -> "C(M ∘ M)(Z)" [label="M(g)"]
  "C(M ∘ M)(Z)" -> "CM(Z)" [label="joinZ"]

  <!-- "CY" -> "CM(Z)" [label="f2"]
  "CZ" -> "CM(X)" [label="g2"]
  "CM(Z)" -> "C(M ∘ M)(X)" [label="M(g2)"]
  "C(M ∘ M)(X)" -> "CM(X)" [label="joinX"]

  "CZ" -> "CM(X)" [label="f3"]
  "CX" -> "CM(Y)" [label="g3"]
  "CM(X)" -> "C(M ∘ M)(Y)" [label="M(g3)"]
  "C(M ∘ M)(Y)" -> "CM(Y)" [label="joinY"] -->
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
