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

### Object level

```graphviz
digraph G {
  subgraph clusterC {
    label="C"
    "M" 

    "1 + M×M"

    "M" -> "M" [label="idM"]

    "1 + M×M" -> "M" [label="F"]

    "1 + M×M" -> "1 + M×M" [label="id(1 + M×M)"]
  }
}
```

<!-- F(M) = 1 + M×M -->

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

```haskell
type Nat = Fix Maybe
zero :: Nat
zero = Iso Nothing -- every 'Maybe a' has a term Nothing, and Iso maps it into a
successor :: Nat -> Nat
successor = Iso . Just -- Just maps a to 'Maybe a' and Iso maps back to a new term
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

    "A" -> "A" [label="idA"]
    "B" -> "B" [label="idB"]

    "F(A)" -> "F(A)" [label="idF(A)"]
    "F(B)" -> "F(B)" [label="idF(B)"]

    "A" -> "B" [label="f"]

    "A" -> "F(A)" [label="a"]
    "B" -> "F(B)" [label="b"]

    "F(B)" -> "F(A)" [label="F(f)"]
  }
}
```

F-coalgebra is (A, a)

<!-- TODO add coalgebra examples (transition systems, lambda calculus?) -->

finite state machine

```graphviz
digraph G {
  "{0}" -> "State" [label="initial"]
  "State" -> "{0, 1}" [label="final"]
  "State" -> "State^Action" [label="transition"]
}
```

embedded in a F-algebra, F-coalgebra
https://www.cs.mcgill.ca/~prakash/Pubs/BrzMin.pdf

```graphviz
digraph G {
  "{0}" -> "State" [label="initial"]
  "{0}" -> "words(Action)" [label="empty-word"]
  "words(Action)" -> "State" [label="reach", style="dashed"]
  "words(Action)" -> "word(Action)^Action" [label="a -> w -> wa"]
  "State" -> "{0, 1}^(words(Action)" [label="observe", style="dashed"]
  "State" -> "{0, 1}" [label="final"]
  "State" -> "State^Action" [label="transition"]

  "{0, 1}^(words(Action)" -> "({0, 1}^word(Action))^Action" [label="aw -> w"]
  "word(Action)^Action" -> "State^Action" [label="reach^Action"]
  "State^Action" -> "({0, 1}^word(Action))^Action" [label="observe^Action"]
}
```

<!-- TODO add terminal coalgebra -->

<!-- TODO add https://en.wikipedia.org/wiki/Anamorphism -->