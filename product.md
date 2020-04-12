# Product

## [Definition](https://en.wikipedia.org/wiki/Product_(category_theory)#Definition)

### Object level

```graphviz
digraph G {
  "X1"
  "X2"

  "X1 x X2"

  "Y"

  "Y" -> "X1" [label="f1"]
  "Y" -> "X2" [label="f2"]

  "Y" -> "X1 x X2" [label="f", style="dashed"]

  "X1 x X2" -> "X1" [label="projection1"]
  "X1 x X2" -> "X2" [label="projection2"]
}
```

The product is a special case of a limit. This may be seen by using a discrete category (a family of objects without any morphisms, other than their identity morphisms) as the diagram required for the definition of the limit. The discrete objects will serve as the index of the components and projections. If we regard this diagram as a functor, it is a functor from the index set I considered as a discrete category. The definition of the product then coincides with the definition of the limit, { f }i being a cone and projections being the limit (limiting cone).

# Coproduct

## [Definition](https://en.wikipedia.org/wiki/Coproduct#Definition)

### Object level

```graphviz
digraph G {
  "X1"
  "X2"

  "X1 ⨿ X2"

  "Y"

  "X1" -> "Y" [label="f1"]
  "X2" -> "Y" [label="f2"]

  "X1 ⨿ X2" -> "Y" [label="f", style="dashed"]

  "X1" -> "X1 ⨿ X2" [label="injection1"]
  "X2" -> "X1 ⨿ X2" [label="injection2"]
}
```