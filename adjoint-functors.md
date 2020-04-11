# Definitions

From highest level to lowest level of abstraction


## [Definition via counit–unit adjunction](https://en.wikipedia.org/wiki/Adjoint_functors#Definition_via_counit%E2%80%93unit_adjunction)

```graphviz
digraph G {
  "FG" -> "1_C" [label="counit"]
  "1_D" -> "GF" [label="unit"]

  "F" -> "FGF" [label="F(counit)"]
  "FGF" -> "F" [label="(unit)F"]

  "G" -> "GFG" [label="(counit)G"]
  "GFG" -> "G" [label="G(unit)"]
}
```


## [Definition via Hom-set adjunction](https://en.wikipedia.org/wiki/Adjoint_functors#Definition_via_Hom-set_adjunction)

```graphviz
digraph G {
  subgraph clusterD {
    label="D"
    "hom_D(Y, GX)"
  }

  subgraph clusterC {
    label="C"
    "hom_C(FY, X)"
  }

  "hom_D(Y, GX)" -> "hom_C(FY, X)" [label="phi_X,Y"]
  "hom_C(FY, X)" -> "hom_D(Y, GX)" [label="phi_Y,X"]
}
```

## [Definition via universal morphisms](https://en.wikipedia.org/wiki/Adjoint_functors#Definition_via_universal_morphisms)

### [Left adjoint](https://en.wikipedia.org/wiki/Adjoint_functors#Definition_via_universal_morphisms)

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
    label="D"
    "G(X)"
    "Y"
  }

  subgraph clusterC {
    label="C"
    "X"
    "F(G(X))"
    "F(Y)"
  }

  "X" -> "G(X)" [label="G"]
  "Y" -> "F(Y)" [label="F"]

  "G(X)" -> "F(G(X))" [label="F"]
  "F(G(X))" -> "X" [label="counitX"]

  "F(Y)" -> "X" [label="f"]
  "Y" -> "G(X)" [label="g"]

  "F(Y)" -> "F(G(X))" [label="F(g)", style="dashed"]
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
    label="D"
    "Y"
    "G(X)"
    "G(F(Y))"
  }

  subgraph clusterC {
    label="C"
    "X"
    "F(Y)"
  }

  "Y" -> "F(Y)" [label="F"]
  "X" -> "G(X)" [label="G"]

  <!-- for each -->
  "Y" -> "G(X)" [label="g"]
  <!-- there exists -->
  "F(Y)" -> "X" [label="f"]

  "F(Y)" -> "G(F(Y))" [label="G"]
  "Y" -> "G(F(Y))" [label="unitY"]
  "G(F(Y))" -> "G(X)" [label="G(f)", style="dashed"]
}
```

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