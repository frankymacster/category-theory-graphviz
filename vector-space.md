```graphviz
digraph G {
  "Field" -> "F"
  "Vector space" -> "V"
  "Vector space" -> "V*"

  "V" -> "V x V*"
  "V*" -> "V x V*"
  "V*" -> "(a_1, a_2, ..., a_n) (covector | one-form | linear-functional | linear map)"
  "V x V*" -> "F" [label="natural pairing", href="https://en.wikipedia.org/wiki/Dual_space#Algebraic_dual_space"]

  "V" -> "(a_1, a_2, ..., a_n)"
}
```

```graphviz
digraph G {
  subgraph clusterX {
    label="X"

    "x1"
    "x2"
    "ker(f)"
  }
  subgraph clusterY {
    label="Y"

    subgraph clusterImf {
      label="im(f)"

      "y1"
      "y2"
      "0"
    }

    "coker(f) = Y / im(f)" [href="https://en.wikipedia.org/wiki/Cokernel"]
  }

  "ker(f)" -> "0" [label="f"]
  "x1" -> "y1" [label="f"]
  "x2" -> "y2" [label="f"]
}
```

```graphviz
digraph G {
  "Field" -> "F"

  "Matrix" -> "M" [label="rows.# = m\ncolumn.# = n\nrank = r"]

  "Linear map" -> "f"

  subgraph clusterV {
    label="V"

    "v1"
    "v2"
    "ker(f)" [label="ker(f) = M.null-space\nM.null-space.dim = n - r", href="https://en.wikipedia.org/wiki/Fundamental_theorem_of_linear_algebra"]
  }

  subgraph clusterW {
    label="W"

    subgraph clusterImf {
      label="im(f) = M.column-space\nM.column-space.dim = r"
      <!-- href="https://en.wikipedia.org/wiki/Fundamental_theorem_of_linear_algebra" -->

      "w1"
      "w2"
      "0W"
    }

    "coker(f)" [label="coker(f) = Y / im(f)\ncoker(f).dim = m - r", href="https://en.wikipedia.org/wiki/Fundamental_theorem_of_linear_algebra"]
  }

  "ker(f)" -> "0W" [label="f = M"]
  "v1" -> "w1" [label="f = M"]
  "v2" -> "w2" [label="f = M"]

  subgraph clusterWstar {
    label="W*"

    "w*1"
    "w*2"
    "ker(f*)" [label="ker(f*) = M^T.left-null-space\nM.left-null-space.dim = m - r", href="https://en.wikipedia.org/wiki/Fundamental_theorem_of_linear_algebra"]
  }

  subgraph clusterVstar {
    label="V*"

    subgraph clusterImfstar {
      label="im(f*) = M.column-space\nM^T.row-space.dim = r"
      <!-- href="https://en.wikipedia.org/wiki/Fundamental_theorem_of_linear_algebra" -->

      "v*1"
      "v*2"
      "0V*"
    }

    "coker(f*)" [label="coker(f*) = V* / im(f*)\ncoker(f*).dim = n - r", href="https://en.wikipedia.org/wiki/Fundamental_theorem_of_linear_algebra"]
  }

  "ker(f*)" -> "0V*" [label="f = M^T"]
  "w*1" -> "v*1" [label="f = M^T"]
  "w*2" -> "v*2" [label="f = M^T"]

  "v1" -> "v*1" [label="v -> [v, •]"]
  "v2" -> "v*2" [label="v -> [v, •]"]
  "w1" -> "w*1" [label="v -> [v, •]"]
  "w2" -> "w*2" [label="v -> [v, •]"]

  "V × V" -> "F" [label="bilinear map -> B = [•, •]\nB(u + v, w) = B(u, w) + B(v, w) and B(λu, v) = λB(u, v)\nB(u, v + w) = B(u, v) + B(u, w) and B(u, λv) = λB(u, v)", href="https://en.wikipedia.org/wiki/Bilinear_form"]
}
```

https://en.wikipedia.org/wiki/Cokernel#Intuition
The cokernel can be thought of as the space of constraints that an equation must satisfy, as the space of obstructions, just as the kernel is the space of solutions.

https://en.wikipedia.org/wiki/Cokernel
Cokernels are dual to the kernels of category theory, hence the name: the kernel is a subobject of the domain (it maps to the domain), while the cokernel is a quotient object of the codomain (it maps from the codomain).

https://en.wikipedia.org/wiki/Transpose_of_a_linear_mapthe
transpose of a linear map between two vector spaces, defined over the same field, is an induced map between the dual spaces of the two vector spaces. The transpose or algebraic adjoint of a linear map is often used to study the original linear map. This concept is generalised by adjoint functors

https://en.wikipedia.org/wiki/Transpose_of_a_linear_map#Representation_as_a_matrix
These points of view are related by the canonical inner product on Rn, which identifies the space of column vectors with the dual space of row vectors

https://en.wikipedia.org/wiki/Cokernel
the cokernel can be thought of as something that "detects" surjections in the same way that the kernel "detects" injections

A map is injective if and only if its kernel is trivial, and a map is surjective if and only if its cokernel is trivial, or in other words, if W = im(T)

https://en.wikipedia.org/wiki/Cokernel
Intuitively, given an equation f(x) = y that one is seeking to solve, the cokernel measures the constraints that y must satisfy for this equation to have a solution – the obstructions to a solution – while the kernel measures the degrees of freedom in a solution, if one exists

https://en.wikipedia.org/wiki/Linear_form
if vectors are represented as column vectors, then linear functionals are represented as row vectors, and their action on vectors is given by the matrix product with the row vector on the left and the column vector on the right

// from above, covectors turn out to be actions on vectors

https://en.wikipedia.org/wiki/Fundamental_theorem_of_linear_algebra

let f be a linear map between two finite-dimensional vector spaces, represented by a m×n matrix M of rank r, then:

r is the dimension of the column space of M, which represents the image of f;
n – r is the dimension of the null space of M, which represents the kernel of f;
m – r is the dimension of the cokernel of f.
The transpose MT of M is the matrix of the dual f* of f. It follows that one has also:

r is the dimension of the row space of M, which represents the image of f*;
m – r is the dimension of the left null space of M, which represents the kernel of f*;
n – r is the dimension of the cokernel of f*.
The two first assertions are also called the rank–nullity theorem.

```graphviz
digraph G {
  "metric space" [href="https://en.wikipedia.org/wiki/Metric_space"]
  "topological space" [href="https://en.wikipedia.org/wiki/Topological_space"]
  "normed vector space" [href="https://en.wikipedia.org/wiki/Normed_vector_space"]
  "vector space" [href="https://en.wikipedia.org/wiki/Vector_space"]
  "Euclidean space" [href="https://en.wikipedia.org/wiki/Euclidean_space"]
  "affine space" [href="https://en.wikipedia.org/wiki/Affine_space"]
  "inner product space" [href="https://en.wikipedia.org/wiki/Inner_product_space"]

  "topological space" -> "metric space"
  "metric space" -> "normed vector space"
  "vector space" -> "normed vector space"
  "normed vector space" -> "inner product space"
  "vector space" -> "affine space"
  "affine space" -> "Euclidean space"
  "inner product space" -> "Euclidean space"
}
```