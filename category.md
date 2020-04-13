# [Definitions](https://en.m.wikipedia.org/wiki/Category_(mathematics))


## Object level

```graphviz
digraph G {
  subgraph clusterC {
    "A" -> "A" [label="1A"]
    "B" -> "B" [label="1B"]
    "C" -> "C" [label="1C"]
    
    "A" -> "B" [label="f"]
    "B" -> "C" [label="g"]
    "A" -> "C" [label="g ∘ f"]
  }
}
```

## Element level

https://en.wikipedia.org/wiki/Category_of_sets

In the mathematical field of category theory, the category of sets, denoted as Set, is the category whose objects are sets. The arrows or morphisms between sets A and B are the total functions from A to B, and the composition of morphisms is the composition of functions.

```graphviz
digraph G {
  subgraph clusterC {
    label="Category"

    subgraph clusterCInitial {
      label="Initial"
      style="rounded"

      "" [shape="plaintext"]
    }

    subgraph clusterCX {
      label="X"
      style="rounded"

      "x1" [shape="point"]
      "x2" [shape="point"]

      "x1" -> "x1" [label="1X"]
      "x2" -> "x2" [label="1X"]
      "x1" -> "x2" [label="1X"]
      "x2" -> "x1" [label="1X"]
    }

    subgraph clusterCTerminal {
      label="Terminal"
      style="rounded"

      "t" [shape="point"]

      "t" -> "t" [label="1Terminal"]
    }

    "" -> "x1" [label="initial"]
    "" -> "x2" [label="initial"]
    "" -> "t" [label="initial / terminal"]
    "" -> "" [label="1Initial"]

    "x1" -> "t" [label="terminal"]
    "x2" -> "t" [label="terminal"]
  }
}
```

# Code

## [Haskell](http://hackage.haskell.org/package/base-4.12.0.0/docs/src/Control.Category.html#Category)

```haskell
class Category cat where
    -- | the identity morphism
    id :: cat a a

    -- | morphism composition
    (.) :: cat b c -> cat a b -> cat a c

{-# RULES
"identity/left" forall p .
                id . p = p
"identity/right"        forall p .
                p . id = p
"association"   forall p q r .
                (p . q) . r = p . (q . r)
 #-}
```