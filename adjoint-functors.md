# Definitions

From highest level to lowest level of abstraction


## [Definition via counit–unit adjunction](https://en.wikipedia.org/wiki/Adjoint_functors#Definition_via_counit%E2%80%93unit_adjunction)

Functor level

```graphviz
digraph G {
  node [shape="square", peripheries=2]

  "Left ∘ Right" -> "1Lefthand" [label="counit"]
  "1Righthand" -> "Right ∘ Left" [label="unit"]
}
```


```graphviz
digraph G {
  node [shape="square", peripheries=2]

  "Left" -> "Left ∘ Right ∘ Left" [label="Left ∘ counit"]
  "Left ∘ Right ∘ Left" -> "Left" [label="unit ∘ Left"]

  "Right" -> "Right ∘ Left ∘ Right" [label="counit ∘ Right"]
  "Right ∘ Left ∘ Right" -> "Right" [label="Right ∘ unit"]
}
```


## [Definition via Hom-set adjunction](https://en.wikipedia.org/wiki/Adjoint_functors#Definition_via_Hom-set_adjunction)

Hom-set level

```graphviz
digraph G {
  subgraph clusterD {
    label="Righthand"
    node [peripheries=2]

    "hom(r, Right(l))"
  }

  subgraph clusterC {
    label="Lefthand"
    node [peripheries=2]

    "hom(Left(r), l)"
  }

  "hom(r, Right(l))" -> "hom(Left(r), l)" [label="philr"]
  "hom(Left(r), l)" -> "hom(r, Right(l))" [label="phirl"]
}
```

## [Definition via universal morphisms](https://en.wikipedia.org/wiki/Adjoint_functors#Definition_via_universal_morphisms)

### [Left adjoint](https://en.wikipedia.org/wiki/Adjoint_functors#Definition_via_universal_morphisms)

Object level

```
for each object X in C
 there exists a universal morphism from F to X
```
In more details:
```
for each object X in C
  there exists an object G(X) in D
    and a morphism counitX: F(G(X)) -> X
      such that
        for every object Y in D
          and every morphism f: F(Y) -> X
            there exists a unique morphism g: Y -> G(X)
              with counitX ∘ F(g) = f
```
`F` is called a left adjoint to `G`

```graphviz
digraph G {
  subgraph clusterD {
    label="Righthand"
    "Right(l)"
    "r"
  }

  subgraph clusterC {
    label="Lefthand"
    "l"
    "Left(Right(l))"
    "Left(r)"
  }

  "l" -> "Right(l)" [label="Right"]
  "r" -> "Left(r)" [label="Left"]

  "Right(l)" -> "Left(Right(l))" [label="Left"]
  "Left(Right(l))" -> "l" [label="counitl"]

  "Left(r)" -> "l" [label="forallLeft"]
  "r" -> "Right(l)" [label="uniqueRight"]

  "Left(r)" -> "Left(Right(l))" [label="Left(uniqueRight)", style="dashed"]
}
```

### [Right adjoint](https://en.wikipedia.org/wiki/Adjoint_functors#Definition_via_universal_morphisms)

```
for each object Y in D,
 there exists a universal morphism from Y to G
```
In more details:
```
for each object Y in D,
  there exists an object F(Y) in C
    and a morphism unitY: Y -> G(F(Y))
      such that
        for each object X in C,
          and every morphism g: Y -> G(X)
            there exists a unique morphism f: F(Y) -> X
              with G(f) ∘ unitY = g
```

`G` is called a right adjoint to `F`

```graphviz
digraph G {
  subgraph clusterD {
    label="Righthand"
    "r"
    "Right(l)"
    "Right(Left(r))"
  }

  subgraph clusterC {
    label="Lefthand"
    "l"
    "Left(r)"
  }

  "r" -> "Left(r)" [label="Left"]
  "l" -> "Right(l)" [label="Right"]

  <!-- for each -->
  "r" -> "Right(l)" [label="forallRight"]
  <!-- there exists -->
  "Left(r)" -> "l" [label="uniqueLeft"]

  "Left(r)" -> "Right(Left(r))" [label="Right"]
  "r" -> "Right(Left(r))" [label="unitr"]
  "Right(Left(r))" -> "Right(l)" [label="Right(uniqueLeft)", style="dashed"]
}
```

https://en.wikipedia.org/wiki/Adjoint_functors#Symmetry_of_optimization_problems

The notion that F is the most efficient solution to the problem posed by G is, in a certain rigorous sense, equivalent to the notion that G poses the most difficult problem that F solves.

# Code

## [Haskell](https://hackage.haskell.org/package/adjunction-0.0.0.0/docs/src/Data.Functor.Adjoint.html#Adjoint)

```haskell
class
  (Functor f, Functor g) =>
    Adjoint f g | f -> g, g -> f
      where
        -- defining unit and counit is sufficient
        unit ::
          a -> g (f a)
        counit ::
          f (g a) -> a
        -- but we can also define Adjoint using leftAdjunct and rightAdjunct instead
        leftAdjunct ::
          (f a -> b) -> a -> g b
        rightAdjunct ::
          (a -> g b) -> f a -> b
```