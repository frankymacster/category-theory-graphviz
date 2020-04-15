# [Definition](https://en.wikipedia.org/wiki/F-algebra)

## F-algebra

### Category level

```graphviz
digraph G {
  "C" [shape="square"]
  "C" -> "C" [label="F"]
}
```
### Object level

```graphviz
digraph G {
  subgraph clusterC {
    label="C"
    "A"
    "B"    

    "F(A)"
    "F(B)"

    "A" -> "A" [label="idA"]
    "B" -> "B" [label="idB"]

    "F(A)" -> "F(A)" [label="idF(A)"]
    "F(B)" -> "F(B)" [label="idF(B)"]

    "A" -> "B" [label="f"]

    "F(A)" -> "A" [label="a"]
    "F(B)" -> "B" [label="b"]

    "F(A)" -> "F(B)" [label="F(f)"]
  }
}
```

F-algebra is (A, a)

<!-- TODO add https://en.wikipedia.org/wiki/F-algebra#Algebraic_structures -->

### [Initial Algebra](https://en.wikipedia.org/wiki/Initial_algebra) & [Catamorphism](https://en.wikipedia.org/wiki/Catamorphism)

#### FAlgebraCategory Object level

```graphviz
digraph G {
  subgraph clusterC {
    label="FAlgebraCategory"

    "(A, in)" [label="(A, in: F(A) -> A) := initial algebra"]
    "(X, f)" -> "(X, f)" [label="id(X, f)"]
    "(A, in)" -> "(A, in)" [label="id(A, in)"]

    "(A, in)" -> "(X, f)" [label="cata f"]
  }
}
```

#### C Object level

```graphviz
digraph G {
  subgraph clusterC {
    label="C"
    "A"
    "X"    

    "F(A)"
    "F(X)"

    "A" -> "A" [label="idA"]
    "X" -> "X" [label="idX"]

    "F(A)" -> "F(A)" [label="idF(A)"]
    "F(X)" -> "F(X)" [label="idF(X)"]

    "A" -> "X" [label="cata f"]

    "F(A)" -> "A" [label="in"]
    "F(X)" -> "X" [label="f"]

    "F(A)" -> "F(X)" [label="F(cata f)"]
  }
}
```

### Code

Strong type systems enable us to abstractly specify the initial algebra of a functor f as its fixed point a = f a

```haskell
type Algebra f a = f a -> a -- the generic f-algebras

newtype Fix f = Iso { invIso :: f (Fix f) } -- gives us the initial algebra for the functor f

cata :: Functor f => Algebra f a -> (Fix f -> a) -- catamorphism from Fix f to a
cata alg = alg . fmap (cata alg) . invIso -- note that invIso and alg map in opposite directions
```

## F-coalgebra

```graphviz
digraph G {
  subgraph clusterC {
    label="C"
    "A"
    "B"    

    "F(A)"
    "F(B)"

    "A" -> "B" [label="f"]

    "A" -> "F(A)" [label="a"]
    "B" -> "F(B)" [label="b"]

    "F(B)" -> "F(A)" [label="F(f)"]
  }
}
```

F-coalgebra is (A, a)

<!-- TODO add coalgebra examples (transition systems, lambda calculus?) -->

<!-- TODO add terminal coalgebra -->

<!-- TODO add https://en.wikipedia.org/wiki/Anamorphism -->