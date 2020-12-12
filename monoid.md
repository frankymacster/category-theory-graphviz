

# Functor level

<!-- TODO monoid as F-algebra -->

# Category level

<!-- TODO monoid as category -->

```graphviz
digraph G {
  subgraph clusterMonoid {
    label="Monoid"
    
    "object"
  }

  "object" -> "object" [label="id"]
  "object" -> "object" [label="f"]
  "object" -> "object" [label="f ∘ f"]
  "object" -> "object" [label="f ∘ f ∘ f"]
  "object" -> "object" [label="...", shape="none"]
}
```

# Object level

<!-- TODO monoid as strict monoidal category -->

# Element level

<!-- TODO monoid as algebraic structure -->

