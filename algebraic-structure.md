https://en.wikipedia.org/wiki/Magma_(algebra)

// more general to more specific following the laws the categories abide
// TODO
  // how to describe a Category being composed of a category
  // how to describe a Category being an instance of other categories

```graphviz
digraph G {
  node [shape="box"]
  compound="true"

  "set x binary operation" [shape="point"]

  subgraph cluster_set {
    label="set"
    href="https://en.wikipedia.org/wiki/Set_(mathematics)"
    "set"
    "set" [shape="none", label=""]
    "function"
  }

  "set" -> "set x binary operation"
  "binary operation" -> "set x binary operation"
  "set x binary operation" -> "magma"

  "magma" [href="https://en.wikipedia.org/wiki/Magma_(algebra)"]
  "free magma" [href="https://en.wikipedia.org/wiki/Magma_(algebra)#Free_magma"]
  "magma" -> "free magma"
  "semigroup" [href="https://en.wikipedia.org/wiki/Semigroup"]
  "magma" -> "semigroup" [label="associativity"]
  "quasigroup" [href="https://en.wikipedia.org/wiki/Quasigroup"]
  "magma" -> "quasigroup" [label="divisibility"]
  "loop" [href="https://en.wikipedia.org/wiki/Quasigroup#Loops"]
  "quasigroup" -> "loop" [label="identity"]
  "monoid" [href="https://en.wikipedia.org/wiki/Monoid"]
  "semigroup" -> "monoid" [label="identity"]
  "semilattice" [href="https://en.wikipedia.org/wiki/Semilattice"]
  "semilattice" -> "meet-semilattice"
  "semilattice" -> "join-semilattice"
  "lattice" [href="https://en.wikipedia.org/wiki/Lattice_(order)"]
  "distributive lattice" [href="https://en.wikipedia.org/wiki/Distributive_lattice"]
  "lattice" -> "distributive lattice"
  "join-semilattice x meet-semilattice" [shape="point"]
  "meet-semilattice" -> "join-semilattice x meet-semilattice"
  "join-semilattice" -> "join-semilattice x meet-semilattice"
  "join-semilattice x meet-semilattice" -> "lattice" [href="https://en.wikipedia.org/wiki/Semilattice#Examples"]
  "distributive lattice" -> "totally ordered set" [href="https://en.wikipedia.org/wiki/Semilattice#Examples"]
  
  "preordered set" [href="https://en.wikipedia.org/wiki/Preorder"]
  "set x preorder" [shape="point"]
  "set" -> "set x preorder"
  "set x preorder" -> "preordered set"
  "set" -> "graph" [href="https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)"]

  "partial order" -> "set x partial order"
  "set x partial order" [shape="point"]
  "set" -> "set x partial order"
  "set x partial order" -> "partially ordered set"

  "binary operation" [href="https://en.wikipedia.org/wiki/Binary_operation"]
  "binary operation" -> "+"
  "binary operation" -> "*"
  "+ x natural numbers x 0" [shape="point"]
  "+" -> "+ x natural numbers x 0" 
  "natural numbers" -> "+ x natural numbers x 0"
  "+ x natural numbers x 0" -> "(N0,+)"

  "cartesian product" [href="https://en.wikipedia.org/wiki/Cartesian_product"]
  "function x cartesian product" [shape="point"]
  "function" -> "function x cartesian product"
  "cartesian product" -> "function x cartesian product"
  "function x cartesian product" -> "binary operation" [href="https://en.wikipedia.org/wiki/Binary_operation#Terminology"]
  "cartesian product" -> "binary relation" [label="subset of the\ncartesian product X × Y", href="https://en.wikipedia.org/wiki/Binary_relation"]
  "binary relation" -> "preorder" [label="reflexive\ntransitive", href="https://en.wikipedia.org/wiki/Preorder"]
  "equivalence relation" [href="https://en.wikipedia.org/wiki/Equivalence_relation"]
  "preorder" [href="https://en.wikipedia.org/wiki/Preorder"]
  "partial order" [href="https://en.wikipedia.org/wiki/Partial_order"]
  "preorder" -> "equivalence relation" [label="symmetric", href="https://en.wikipedia.org/wiki/Equivalence_relation"]
  "preorder" -> "partial order" [label="antisymmetric", href="https://en.wikipedia.org/wiki/Partially_ordered_set#Formal_definition"]
  "total order" [href="https://en.wikipedia.org/wiki/Total_order"]
  "partial order" -> "total order" [label="connexity", href="https://en.wikipedia.org/wiki/Total_order"]
  "well-order" [href="https://en.wikipedia.org/wiki/Well-order"]
  "total order" -> "well-order" [label="every non-empty\nsubset of S\nhas a least element\nin this ordering", href="https://en.wikipedia.org/wiki/Well-order"]
  "binary relation" [href="https://en.wikipedia.org/wiki/Binary_relation"]
  "preorder" -> "set x preorder"
  "preordered set" -> "partially ordered set"
  "partially ordered set" [href="https://en.wikipedia.org/wiki/Partially_ordered_set"]
  "partially ordered set" -> "join-semilattice" [label="has a join\n(a least upper bound)\nfor any nonempty\nfinite subset", href="https://en.wikipedia.org/wiki/Semilattice"]
  "partially ordered set" -> "meet-semilattice" [label="has a meet\n(or greatest lower bound)\nfor any nonempty\nfinite subset", href="https://en.wikipedia.org/wiki/Semilattice"]
  "totally ordered set" [href="https://en.wikipedia.org/wiki/Total_order"]
  "set x well-order" [shape="point"]
  "set" -> "set x well-order"
  "well-order" -> "set x well-order"
  "set x well-order" -> "well-ordered set"
  "well-ordered set" [href="https://en.wikipedia.org/wiki/Well-order"]
  "set x total order" [shape="point"]
  "set" -> "set x total order"
  "total order" -> "set x total order"
  "set x total order" -> "totally ordered set"
  "totally ordered set" -> "well-ordered set" [label="every non-empty\nsubset of S has\na least element\nin this ordering", href="https://en.wikipedia.org/wiki/Well-order"]
  "well-ordered set" -> "natural numbers"
  "well-ordered set" -> "integers"
  "well-ordered set" -> "real numbers"
  "semigroup" -> "semilattice" [label="commutativity\nidempotence"]
  "semigroup" -> "inverse semigroup" [label="invertibility"]

  subgraph cluster_group {
    label="group"
    href="https://en.wikipedia.org/wiki/Group_(mathematics)"
    "group" [shape="none", label="", href="https://en.wikipedia.org/wiki/Group_(mathematics)"]
    "center" [shape="oval", href="https://en.wikipedia.org/wiki/Center_(group_theory)"]
    "group/normal-subgroup" [label="normal subgroup"]
    "group/normal-subgroup" [shape="oval", href="https://en.wikipedia.org/wiki/Normal_subgroup"]
    "group/normal-subgroup" -> "center"
    "group/normal-subgroup" -> "translational group"
    "group/normal-subgroup" -> "commutator subgroup"
    "commutator subgroup" [shape="oval", href="https://en.wikipedia.org/wiki/Commutator_subgroup"]
    "group/subgroup" [label="subgroup"]
    "group/subgroup" -> "group/normal-subgroup"
    "group/subgroup" [shape="oval"]
    "coset" [shape="oval"]
    "group representation"
  }

  "group" -> "cyclic group"
  "cyclic group" [href="https://en.wikipedia.org/wiki/Cyclic_group"]
  "nth roots of unity" [href="https://en.wikipedia.org/wiki/Root_of_unity#Group_of_nth_roots_of_unity"]
  "cyclic group" -> "nth roots of unity"
  "homology group" [href="https://en.wikipedia.org/wiki/Homology_(mathematics)"]
  "abelian group" -> "homology group"
  "finitely generated abelian group" [href="https://en.wikipedia.org/wiki/Finitely_generated_abelian_group"]
  "abelian group" -> "finitely generated abelian group"
  "abelian group" -> "free abelian group"
  "free group" -> "free abelian group"
  "free abelian group" -> "finitely generated free abelian group"
  "finitely generated free abelian group" -> "lattice" [href="https://en.wikipedia.org/wiki/Finitely_generated_abelian_group#Examples"]
  "finitely generated free abelian group" -> "integers" [href="https://en.wikipedia.org/wiki/Finitely_generated_abelian_group#Examples"]
  "finitely generated free abelian group" -> "integers modulo n" [href="https://en.wikipedia.org/wiki/Finitely_generated_abelian_group#Examples"]
  "finitely generated abelian group" -> "finitely generated free abelian group"
  "cohomology group" [href="https://en.wikipedia.org/wiki/Cohomology"]
  "abelian group" -> "cohomology group"
  "homotopy group" [href="https://en.wikipedia.org/wiki/Homotopy_group"]
  "group" -> "homotopy group"
  "fundamental group" [href="https://en.wikipedia.org/wiki/Fundamental_group"]
  "homotopy group" -> "fundamental group"
  "Étale fundamental group" [href="https://en.wikipedia.org/wiki/%C3%89tale_fundamental_group"]
  "Étale fundamental group" -> "Galois group" [href="https://en.wikipedia.org/wiki/%C3%89tale_fundamental_group#Examples_and_theorems"]
  "Étale fundamental group" -> "scheme" [dir="none"]
  "group" -> "Étale fundamental group"
  "loop" -> "group" [label="associativity"]
  "monoid" -> "group" [label="invertibility"]
  "monoid" -> "(N0,+)" [href="https://en.wikipedia.org/wiki/Free_monoid#Examples"]
  "monoid" -> "Kleene star" [href="https://en.wikipedia.org/wiki/Free_monoid#Examples"]
  "monoid" -> "commutative monoid" [label="commutativity"]
  "free monoid" [href="https://en.wikipedia.org/wiki/Free_monoid"]
  "monoid" -> "free monoid"

  "group" -> "abelian group" [label="commutativity"]
  "group" -> "free group" [label="free"]
  "group" -> "group x abelian variety x isogeny"
  "group" -> "algebraic group"
  "group" -> "symmetry group"
  "group" -> "Galois group"
  "abelian variety" -> "group x abelian variety x isogeny"
  "function" -> "morphism"
  "morphism x algebraic group" [shape="point"]
  "morphism" -> "morphism x algebraic group"
  "morphism" -> "module homomorphism"
  "module homomorphism" -> "linear map" [href="https://en.wikipedia.org/wiki/Linear_map"]
  "algebraic group" -> "morphism x algebraic group"
  "morphism x algebraic group" -> "algebraic group morphism"
  "algebraic group morphism" -> "isogeny" [label="surjective and\nhas a finite kernel", href="https://en.wikipedia.org/wiki/Isogeny"]
  "isogeny" [href="https://en.wikipedia.org/wiki/Isogeny"]
  "isogeny" -> "group x abelian variety x isogeny"
  "group x abelian variety x isogeny" [shape="point"]
  "group x abelian variety x isogeny" -> "Selmer group"
  "finite group" [href="https://en.wikipedia.org/wiki/Finite_group"]
  "algebraic group" -> "finite group"
  "algebraic group" -> "general linear group"
  "Lie group" [href="https://en.wikipedia.org/wiki/Lie_group"]
  "Lie group" -> "general linear group"
  "Lie group" -> "Lie group with dimension 1"
  "Lie group with dimension 1" -> "real numbers" [href="https://en.wikipedia.org/wiki/Lie_group#More_examples_of_Lie_groups"]
  "Lie group with dimension 1" -> "circle group" [href="https://en.wikipedia.org/wiki/Lie_group#More_examples_of_Lie_groups"]
  "Lie group with dimension 2" -> "special unitary group"
  "circle group" [href="https://en.wikipedia.org/wiki/Circle_group"]
  "metric space" -> "topological group"
  "topological group" -> "disconnected topological group"
  "disconnected topological group" -> "generalized dihedral group"
  "generalized dihedral group" [href="https://en.wikipedia.org/wiki/Generalized_dihedral_group"]
  "generalized dihedral group" -> "dihedral group"
  "generalized dihedral group" -> "orthogonal group"
  "dihedral group" [href="https://en.wikipedia.org/wiki/Dihedral_group"]
  "finite group" -> "dihedral group"
  "symmetry group" -> "dihedral group"
  "symmetry group" [href="https://en.wikipedia.org/wiki/Symmetry_group"]
  "Galois group" [href="https://en.wikipedia.org/wiki/Galois_group"]
  "Galois group" -> "field" [dir="none"]
  "topological group" [href="https://en.wikipedia.org/wiki/Topological_group"]
  "group" -> "topological group" [label="with a topology on G such that\nboth the group's binary operation\nand the function mapping group elements\nto their respective inverses\nare continuous\nfunctions with\nrespect to\nthe topology", href="https://en.wikipedia.org/wiki/Topological_group"]
  "topological group" -> "Lie group" [label="elements are\norganized continuously\nand smoothly", href="https://en.wikipedia.org/wiki/Lie_group"]
  "matrix group" [href="https://en.wikipedia.org/wiki/Matrix_group"]
  "automorphism group" [href="https://en.wikipedia.org/wiki/Automorphism_group"]
  "group" -> "automorphism group"
  "automorphism group" -> "general linear group" [label="all invertible\nn-by-n matrices\nwith real entries", href="https://en.wikipedia.org/wiki/Group_(mathematics)#Examples_and_applications"]
  "general linear group" -> "orthogonal group" [label="endomorphisms that\npreserve the Euclidean norm", href="https://en.wikipedia.org/wiki/Orthogonal_group"]
  "special linear group" -> "modular group" [label="quotient of the\n2-dimensional special\nlinear group SL(2, Z)\nover the integers\nby its center {I, −I}", href="https://en.wikipedia.org/wiki/Modular_group#Definition"]
  "modular group" [href="https://en.wikipedia.org/wiki/Modular_group"]

  subgraph cluster_orthogonalgroup {
    label="orthogonal group"
    "orthogonal group" [label="", shape="none", href="https://en.wikipedia.org/wiki/Orthogonal_group"]
    "special orthogonal group" [href="https://en.wikipedia.org/wiki/Orthogonal_group"]
  }

  subgraph cluster_generallineargroup {
    label="general linear group"
    "general linear group" [label="", shape="none", href="https://en.wikipedia.org/wiki/General_linear_group"]
    "matrix group" [href="https://en.wikipedia.org/wiki/Orthogonal_group"]
    "special linear group" [href="https://en.wikipedia.org/wiki/Special_linear_group"]
  }

  subgraph cluster_unitarygroup {
    label="unitary group"
    "unitary group" [label="", shape="none", href="https://en.wikipedia.org/wiki/Unitary_group"]
    <!-- "Lie group of\nn × n unitary matrices\nwith determinant 1" -->
    "special unitary group" [href="https://en.wikipedia.org/wiki/Special_unitary_group"]
  }

  "general linear group" -> "unitary group" [label="n × n unitary matrices", href="https://en.wikipedia.org/wiki/Unitary_group"]
  
  "translational group x orthogonal group" [shape="point"]
  "group" -> "translational group"
  "translational group" -> "translational group x orthogonal group"
  "orthogonal group" -> "translational group x orthogonal group"
  "translational group x orthogonal group" -> "Euclidean group"  [href="https://en.wikipedia.org/wiki/Euclidean_group"]
  "symmetry group" -> "Euclidean group"
  "Euclidean group" -> "Euclidean space" [dir="none", label="transformations of that space\nthat preserve the Euclidean distance\nbetween any two points", href="https://en.wikipedia.org/wiki/Euclidean_group"]


  "manifold" -> "Euclidean space" [dir="none", label="", href="https://en.wikipedia.org/wiki/Manifold"]

  subgraph cluster_euclideangroup {
    label="Euclidean group"
    "Euclidean group" [label="locally resembles\nEuclidean space\nnear each point", shape="none", href="https://en.wikipedia.org/wiki/Euclidean_group"]
    "normal subgroup" [shape="oval"]
    "normal subgroup" -> "translational group"
    "special Euclidean group" [href="https://en.wikipedia.org/wiki/Euclidean_group"]
  }

  "semigroup x monoid" [shape="point"]
  "semigroup" -> "semigroup x monoid" [label="+"]
  "monoid" -> "semigroup x monoid" [label="*"]
  "semigroup x monoid" -> "ringoid"
  "ringoid" [href="https://mathworld.wolfram.com/Ringoid.html"]
  "ringoid" -> "crooked semirng" [label="+ monoid\n* semigroup\n0*x = x*0 = 0", href="https://math.stackexchange.com/questions/2361889/graphically-organizing-the-interrelationships-of-basic-algebraic-structures"]
  "crooked semirng" -> "crooked semiring" [label="* monoid", href="https://math.stackexchange.com/questions/2361889/graphically-organizing-the-interrelationships-of-basic-algebraic-structures"]
  "crooked semiring" -> "near-ring" [label="+ group", href="https://math.stackexchange.com/questions/2361889/graphically-organizing-the-interrelationships-of-basic-algebraic-structures"]
  "near-ring" -> "ring" [label="+ commutative", href="https://math.stackexchange.com/questions/2361889/graphically-organizing-the-interrelationships-of-basic-algebraic-structures"]

  "rng" -> "ring" [label="* monoid", href="https://math.stackexchange.com/questions/2361889/graphically-organizing-the-interrelationships-of-basic-algebraic-structures"]
  "crooked semirng" -> "semirng" [label="+ commutative", href="https://math.stackexchange.com/questions/2361889/graphically-organizing-the-interrelationships-of-basic-algebraic-structures"]

  "semirng" -> "rng" [label="+ abelian group", href="https://math.stackexchange.com/questions/2361889/graphically-organizing-the-interrelationships-of-basic-algebraic-structures"]
  "semirng" -> "semiring" [label="* monoid", href="https://math.stackexchange.com/questions/2361889/graphically-organizing-the-interrelationships-of-basic-algebraic-structures"]
  "semiring" -> "ring" [label="+ abelian group", href="https://math.stackexchange.com/questions/2361889/graphically-organizing-the-interrelationships-of-basic-algebraic-structures"]

  "abelian group" -> "module" [label="(M, +)", href="https://en.wikipedia.org/wiki/Module_(mathematics)#Formal_definition"]

  subgraph cluster_module {
    label="module"
    href="https://en.wikipedia.org/wiki/Module_(mathematics)"

    "module" [shape="none", label=""]
    "module homomorphism"
  }

  "module" -> "vector space"

  "topological space" [href="https://en.wikipedia.org/wiki/Topological_space"]
  "separable space" [href="https://en.wikipedia.org/wiki/Separable_space"]
  "topological space" -> "separable space" [label="contains a countable,\ndense subset", href="https://en.wikipedia.org/wiki/Separable_space"]
  "separable space" -> "finite topological space"
  "separable space" -> "countably infinite topological space"
  "metric space" -> "compact metric space"
  "separable space" -> "compact metric space"
  "homotopy group" -> "topological space" [dir="none"]
  "topological manifold" [href="https://en.wikipedia.org/wiki/Topological_manifold"]
  "topological manifold" -> "manifold"
  "manifold" -> "line" [href="https://en.wikipedia.org/wiki/Manifold#Motivating_examples"]
  "manifold" -> "sphere" [href="https://en.wikipedia.org/wiki/Manifold#Motivating_examples"]
  "surface" -> "sphere" [href="https://en.wikipedia.org/wiki/Manifold#Motivating_examples"]
  "manifold" [href="https://en.wikipedia.org/wiki/Manifold"]
  "manifold" -> "differentiable manifold" [label="equipped with\na differential\nstructure", href="https://en.wikipedia.org/wiki/Topological_manifold"]
  "manifold" -> "compact manifold"
  "topological space" -> "manifold" [label="locally resembles\nEuclidean space\nnear each point", href="https://en.wikipedia.org/wiki/Manifold"]
  "metric space" -> "topological manifold" [label="locally resembles\nreal n-dimensional space", href="https://en.wikipedia.org/wiki/Hausdorff_space#Examples_and_non-examples"]
  "differentiable manifold" [href="https://en.wikipedia.org/wiki/Differentiable_manifold"]
  "differentiable manifold" -> "smooth manifold"
  "smooth manifold" [href="https://en.wikipedia.org/wiki/Differentiable_manifold#Definition"]
  "smooth manifold" -> "Lie group" [href="https://en.wikipedia.org/wiki/Representation_theory"]
  "Riemann surface" [label="one-dimensional\ncomplex manifold", href="https://en.wikipedia.org/wiki/Riemann_surface"]
  "modular curve" [href="https://en.wikipedia.org/wiki/Modular_curve"]
  "manifold" -> "complex manifold"
  "complex manifold" -> "Riemann surface" [href="https://en.wikipedia.org/wiki/Riemann_surface"]
  "Riemann surface" -> "modular curve" [href="https://en.wikipedia.org/wiki/Modular_curve"]
  "compact manifold" -> "compact 1-manifold"
  "compact manifold" -> "compact 2-manifold"
  "compact 2-manifold" -> "torus" [href="https://en.wikipedia.org/wiki/Topological_manifold#n-Manifolds"]
  "compact 2-manifold" -> "Klein bottle" [href="https://en.wikipedia.org/wiki/Topological_manifold#n-Manifolds"]
  "compact 1-manifold" -> "circle" [href="https://en.wikipedia.org/wiki/Topological_manifold#n-Manifolds"]
  "discrete space" [href="https://en.wikipedia.org/wiki/Discrete_space"]
  "manifold" -> "0-manifold"
  "0-manifold" -> "discrete space"
  "Kolmogorov space" [href="https://en.wikipedia.org/wiki/Kolmogorov_space"]
  "T1 space" [href="https://en.wikipedia.org/wiki/T1_space"]
  "Hausdorff space" [href="https://en.wikipedia.org/wiki/Hausdorff_space"]
  "Hausdorff space" -> "second countable Hausdorff space"
  "second countable Hausdorff space" -> "topological manifold" [href="https://en.wikipedia.org/wiki/Manifold#Motivating_examples"]
  "Urysohn space" [href="https://en.wikipedia.org/wiki/Urysohn_and_completely_Hausdorff_spaces"]
  "completely Hausdorff space" [href="https://en.wikipedia.org/wiki/Urysohn_and_completely_Hausdorff_spaces"]
  "regular space" [href="https://en.wikipedia.org/wiki/Regular_space"]
  "Tychonoff space" [href="https://en.wikipedia.org/wiki/Tychonoff_space"]
  "normal space" [href="https://en.wikipedia.org/wiki/Normal_space"]
  "completely normal Hausdorff space" [href="https://en.wikipedia.org/wiki/Normal_space"]
  "perfectly normal Hausdorff space" [href="https://en.wikipedia.org/wiki/Normal_space"]
  "metric space" [href="https://en.wikipedia.org/wiki/Metric_space"]
  "normed vector space" [href="https://en.wikipedia.org/wiki/Normed_vector_space"]
  "topological space x vector space" [shape="point"]
  "vector space" -> "topological space x vector space"

  subgraph cluster_vectorSpace {
    label="vector space"
    href="https://en.wikipedia.org/wiki/Vector_space"
    "vector space" [shape="none", label=""]
    "linear map"
  }

  "vector space" -> "graded vector space"
  "topological space" -> "topological space x vector space"
  "topological space x vector space" -> "topological vector space"
  "topological vector space" [href="https://en.wikipedia.org/wiki/Topological_vector_space"]
  "topological vector space" -> "normed vector space" [href="https://en.wikipedia.org/wiki/Topological_vector_space"]
  "binary relation" -> "function" [label="over two sets\nthat associates to\nevery element of the first set exactly\none element of the second set", href="https://en.wikipedia.org/wiki/Function_(mathematics)"]
  "function" [href="https://en.wikipedia.org/wiki/Function_(mathematics)"]
  "function" -> "injective function"
  "function" -> "surjective function"
  "j-invariant" [href="https://en.wikipedia.org/wiki/J-invariant"]
  "modular function" [href="https://en.wikipedia.org/wiki/Modular_function"]
  "function" -> "modular function"
  "modular function" -> "j-invariant" [label="modular function of\nweight zero for SL(2, Z)\ndefined on the upper half-plane\nof complex numbers", href="https://en.wikipedia.org/wiki/J-invariant"]
  "function" -> "L-function"
  "L-function" [href="https://en.wikipedia.org/wiki/L-function"]
  "Hasse–Weil zeta function" [href="https://en.wikipedia.org/wiki/Hasse%E2%80%93Weil_zeta_function"]
  "L-function" -> "Hasse–Weil zeta function" [href="https://en.wikipedia.org/wiki/Hasse%E2%80%93Weil_zeta_function"]
  "group representation" [href="https://en.wikipedia.org/wiki/Representation_theory#Definition"]
  "function x general linear group" [shape="point"]
  "function" -> "function x general linear group"
  "general linear group" -> "function x general linear group"
  "function x general linear group" -> "group representation" [label="G -> GL(V)", href="https://en.wikipedia.org/wiki/Representation_theory#Definition"]
  "Galois representation" [href="https://www.ams.org/notices/200706/tx070600718p.pdf"]
  "group representation" -> "Galois representation"
  "analytic function" [href="https://en.wikipedia.org/wiki/Analytic_function"]
  "function" -> "analytic function"
  "analytic function" -> "complex analytic function"
  "operator" [href="https://en.wikipedia.org/wiki/Operator_(mathematics)"]
  "function" -> "operator" [label="acts on elements\nof a space to\nproduce elements of\nanother space", href="https://en.wikipedia.org/wiki/Operator_(mathematics)"]
  "operator" -> "linear map"
  "differential operator" [href="https://en.wikipedia.org/wiki/Differential_operator"]
  "operator" -> "differential operator"
  "linear form" [href="https://en.wikipedia.org/wiki/Linear_form"]
  "linear map" [href="https://en.wikipedia.org/wiki/Linear_map"]
  "linear map" -> "linear form"
  "modular form" [href="https://en.wikipedia.org/wiki/Modular_form"]
  "eigenform" [href="https://en.wikipedia.org/wiki/Eigenform"]
  "modular form" -> "eigenform" [label="is an eigenvector\nfor all Hecke\noperators Tm", href="https://en.wikipedia.org/wiki/Eigenform"]
  "complex analytic function" -> "modular form" [label="on the upper half-plane\nsatisfying a certain kind of functional equation\nwith respect to the group action\nof the modular group,\nand also satisfying a growth condition", href="https://en.wikipedia.org/wiki/Modular_form"]

  "function" -> "multilinear map" [label="of several variables\nthat is linear\nseparately in\neach variable", href="https://en.wikipedia.org/wiki/Function_(mathematics)"]
  "multilinear map" [href="https://en.wikipedia.org/wiki/Multilinear_map"]
  "alternating multilinear map" [href="https://en.wikipedia.org/wiki/Alternating_multilinear_map"]
  "multilinear map" -> "alternating multilinear map" [label="all arguments\nbelonging to\nthe same space", href="https://en.wikipedia.org/wiki/Alternating_multilinear_map"]
  "alternating multilinear map" -> "Lie bracket"
  "alternating multilinear map" -> "determinant"
  "determinant" [href="https://en.wikipedia.org/wiki/Determinant"]
  "bilinear map" [href="https://en.wikipedia.org/wiki/Bilinear_map"]
  "multilinear map" -> "bilinear map"
  "inner product" [href="https://en.wikipedia.org/wiki/Inner_product"]
  "cross product" [href="https://en.wikipedia.org/wiki/Cross_product"]
  "bilinear map" -> "inner product"
  "bilinear map" -> "cross product"
  "Lie bracket" [href="https://en.wikipedia.org/wiki/Lie_algebra"]
  "lie algebra" [href="https://en.wikipedia.org/wiki/Lie_algebra"]
  "vector space x Lie bracket" [shape="point"]
  "vector space" -> "vector space x Lie bracket"
  "Lie bracket" -> "vector space x Lie bracket"
  "vector space x Lie bracket" -> "lie algebra" [href="https://en.wikipedia.org/wiki/Lie_algebra"]
  "Euclidean space" [href="https://en.wikipedia.org/wiki/Euclidean_space"]
  "affine space" [href="https://en.wikipedia.org/wiki/Affine_space"]
  "inner product space" [href="https://en.wikipedia.org/wiki/Inner_product_space"]
  "Banach space" [href="https://en.wikipedia.org/wiki/Banach_space"]
  "complete metric space" [href="https://en.wikipedia.org/wiki/Complete_metric_space"]
  "Sobolev space" [href="https://en.wikipedia.org/wiki/Sobolev_space"]
  "Hardy space" [href="https://en.wikipedia.org/wiki/Hardy_space"]

  "topological space" -> "Kolmogorov space" [label="for every pair of\ndistinct points of X,\nat least one of them\nhas a neighborhood\nnot containing the other", href="https://en.wikipedia.org/wiki/Kolmogorov_space"]
  "Kolmogorov space" -> "T1 space" [label="for every pair\nof distinct points,\neach has a neighborhood\nnot containing\nthe other point", href="https://en.wikipedia.org/wiki/T1_space"]
  "T1 space" -> "Hausdorff space" [label="for any two distinct points\nthere exist neighbourhoods of each\nwhich are disjoint from each other", href="https://en.wikipedia.org/wiki/Hausdorff_space"]
  "Hausdorff space" -> "Urysohn space" [label="any two distinct points\ncan be separated by\nclosed neighborhoods", href="https://en.wikipedia.org/wiki/Urysohn_and_completely_Hausdorff_spaces"]
  "Urysohn space" -> "completely Hausdorff space" [label="any two distinct points\ncan be separated by\na continuous function", href="https://en.wikipedia.org/wiki/Urysohn_and_completely_Hausdorff_spaces"]
  "completely Hausdorff space" -> "regular space" [label="every closed subset C of X\nand a point p not contained in C\nadmit non-overlapping open neighborhoods", href="https://en.wikipedia.org/wiki/Regular_space"]
  "regular space" -> "Tychonoff space" [label="can be separated\nfrom closed sets\nvia (bounded) continuous\nreal-valued functions", href="https://en.wikipedia.org/wiki/Tychonoff_space#Definitions"]
  "Tychonoff space" -> "normal space" [label="every two disjoint\nclosed sets of X\nhave disjoint open\nneighborhoods", href="https://en.wikipedia.org/wiki/Normal_space"]
  "normal space" -> "completely normal Hausdorff space" [label="completely\nnormal T1\nspace", href="https://en.wikipedia.org/wiki/Normal_space"]
  "completely normal Hausdorff space" -> "perfectly normal Hausdorff space" [label="every two disjoint closed sets E and F\ncan be precisely separated by\na continuous function f\nfrom X to the real line R", href="https://en.wikipedia.org/wiki/Normal_space"]
  "Hilbert space" [href="https://en.wikipedia.org/wiki/Hilbert_space"]

  "Hausdorff space" -> "metric space" [href="https://proofwiki.org/wiki/Metric_Space_is_Hausdorff"]
  "metric space" -> "complete metric space" [label="every Cauchy\nsequence in M\nconverges in M", href="https://en.wikipedia.org/wiki/Complete_metric_space"]
  "Banach space" -> "Euclidean space" [href="https://en.wikipedia.org/wiki/Hilbert_space"]
  "metric space" -> "normed vector space"
  "normed vector space" -> "inner product space"
  "complete metric space" -> "Banach space" [label="complete in the metric\ninduced by the norm", href="https://en.wikipedia.org/wiki/Banach_algebra"]
  "normed vector space" -> "Banach space" [label="complete in the metric\ninduced by the norm", href="https://en.wikipedia.org/wiki/Banach_algebra"]
  "Hilbert space" -> "Sobolev space" [href="https://en.wikipedia.org/wiki/Hilbert_space"]
  "Hilbert space" -> "Hardy space" [href="https://en.wikipedia.org/wiki/Hilbert_space"]
  "Euclidean space" -> "Hilbert space" [href="https://en.wikipedia.org/wiki/Hilbert_space"]
  "vector space" -> "affine space"
  "vector space" -> "finite dimensional vector space"
  "affine space" -> "Euclidean space"
  "inner product space" -> "real numbers" [href="https://en.wikipedia.org/wiki/Inner_product_space#Some_examples"]
  "inner product space" -> "Euclidean space" [href="https://en.wikipedia.org/wiki/Inner_product_space#Some_examples"]

  "module" -> "finitely generated module" [href="https://en.wikipedia.org/wiki/Module_(mathematics)#Types_of_modules"]
  "finitely generated module" [href="https://en.wikipedia.org/wiki/Finitely_generated_module"]
  "finitely generated module" -> "finitely generated module\nover the ring of integers"
  "finitely generated module\nover the ring of integers" -> "finitely generated abelian group" [dir="both", href="https://en.wikipedia.org/wiki/Finitely_generated_module#Examples"]
  "finitely generated module\nover a division ring" -> "finite dimensional vector space" [dir="both", href="https://en.wikipedia.org/wiki/Finitely_generated_module#Examples"]
  "finitely generated module" -> "cyclic module" [href="https://en.wikipedia.org/wiki/Finitely_generated_module#Examples"]
  "cyclic module" [href="https://en.wikipedia.org/wiki/Cyclic_module"]
  "cyclic module" -> "cyclic Z-module"
  "cyclic Z-module" -> "cyclic group" [href="https://en.wikipedia.org/wiki/Cyclic_module#Examples"]
  "free module" [href="https://en.wikipedia.org/wiki/Free_module"]
  "projective module" -> "free module" [href="https://en.wikipedia.org/wiki/Projective_module"]
  "projective module" [href="https://en.wikipedia.org/wiki/Projective_module"]
  "module" -> "projective module" [label="direct summands\nof free modules\nand share many of\ntheir desirable properties", href="https://en.wikipedia.org/wiki/Module_(mathematics)#Types_of_modules"]
  "injective module" [href="https://en.wikipedia.org/wiki/Injective_module"]
  "module" -> "injective module" [label="defined dually\nto projective\nmodules", href="https://en.wikipedia.org/wiki/Module_(mathematics)#Types_of_modules"]
  "flat module" [href="https://en.wikipedia.org/wiki/Flat_module"]
  "flat module" -> "torsion-free module" [href="https://en.wikipedia.org/wiki/Flat_module#Examples_and_relations_to_other_notions"]
  "module" -> "flat module" [label="if taking the\ntensor product of it\nwith any exact sequence\nof R-modules\npreserves exactness", href="https://en.wikipedia.org/wiki/Module_(mathematics)#Types_of_modules"]
  "torsionless module" [href="https://en.wikipedia.org/wiki/Torsionless_module"]
  "torsion-free module" [href="https://en.wikipedia.org/wiki/Torsion-free_module"]
  "torsion-free module" -> "torsionless module" [label="it embeds into\nits algebraic dual", href="https://en.wikipedia.org/wiki/Torsion-free_module#Examples_of_torsion-free_modules"]
  "module" -> "torsion-free module" [label="rm = 0 implies\nr = 0 or m = 0", href="https://en.wikipedia.org/wiki/Module_(mathematics)#Types_of_modules"]
  "simple module" [href="https://en.wikipedia.org/wiki/Simple_module"]
  "module" -> "simple module" [label="is not {0} and\nwhose only submodules\nare {0} and S", href="https://en.wikipedia.org/wiki/Module_(mathematics)#Types_of_modules"]
  "semisimple module" [href="https://en.wikipedia.org/wiki/Semisimple_module"]
  "module" -> "semisimple module" [label="direct sum\n(finite or not)\nof simple\nmodules", href="https://en.wikipedia.org/wiki/Module_(mathematics)#Types_of_modules"]
  "indecomposable module" [href="https://en.wikipedia.org/wiki/Indecomposable_module"]
  "module" -> "indecomposable module" [label="non-zero module that\ncannot be written as\na direct sum of\ntwo non-zero submodules", href="https://en.wikipedia.org/wiki/Module_(mathematics)#Types_of_modules"]
  "faithful module" [href="https://en.wikipedia.org/wiki/Faithful_module"]
  "module" -> "faithful module" [label="action of each\nr ≠ 0 in R on M\nis nontrivial\n<-> annihilator of M\nis the zero ideal", href="https://en.wikipedia.org/wiki/Module_(mathematics)#Types_of_modules"]
  "Noetherian module" [href="https://en.wikipedia.org/wiki/Noetherian_module"]
  "Noetherian module" -> "integers"
  "module" -> "Noetherian module" [label="satisfies the ascending\nchain condition on submodules\n<-> every submodule is\nfinitely generated", href="https://en.wikipedia.org/wiki/Module_(mathematics)#Types_of_modules"]
  "Noetherian module" -> "Noetherian ring"
  "Artinian module" [href="https://en.wikipedia.org/wiki/Artinian_module"]
  "module" -> "Artinian module" [label="satisfies the\ndescending chain\ncondition on submodules", href="https://en.wikipedia.org/wiki/Module_(mathematics)#Types_of_modules"]
  "graded module" [href="https://en.wikipedia.org/wiki/Graded_module"]
  "module" -> "graded module" [label="with a decomposition\nas a direct sum\nM = ⨁x Mx over a\ngraded ring R = ⨁x Rx\nsuch that RxMy ⊂ Mx+y\nfor all x and y", href="https://en.wikipedia.org/wiki/Module_(mathematics)#Types_of_modules"]
  "uniform module" [href="https://en.wikipedia.org/wiki/Uniform_module"]
  "uniserial module" [href="https://en.wikipedia.org/wiki/Uniserial_module"]
  "uniform module" -> "uniserial module" [href="https://en.wikipedia.org/wiki/Uniform_module"]
  "indecomposable module" -> "uniform module" [href="https://en.wikipedia.org/wiki/Uniform_module"]
  "module" -> "uniform module" [label="all pairs of nonzero\nsubmodules have\nnonzero intersection", href="https://en.wikipedia.org/wiki/Module_(mathematics)#Types_of_modules"]
  "module" -> "Z-module"
  "module" -> "ideal"
  "ideal" [href="https://en.wikipedia.org/wiki/Ideal_(ring_theory)"]
  "prime ideal" [href="https://en.wikipedia.org/wiki/Prime_ideal"]
  "ideal" -> "prime ideal" [href="https://en.wikipedia.org/wiki/Prime_ideal"]
  "maximal ideal" [href="https://en.wikipedia.org/wiki/Maximal_ideal"]
  "ideal" -> "maximal ideal" [label="I is a maximal\nideal of a ring R\nif there are no other\nideals contained between I and R", href="https://en.wikipedia.org/wiki/Maximal_ideal"]
  "principal ideal" [href="https://en.wikipedia.org/wiki/Principal_ideal"]
  "ideal" -> "principal ideal"
  "minimal ideal" [href="https://en.wikipedia.org/wiki/Minimal_ideal"]
  "ideal" -> "minimal ideal"
  "quotient ring" -> "ring / maximal ideal"
  "maximal ideal" -> "ring / maximal ideal"
  "ring / maximal ideal" -> "simple ring" [href="https://en.wikipedia.org/wiki/Maximal_ideal"]
  "prime ideal x principal ideal domain" [shape="point"]
  "principal ideal domain" -> "prime ideal x principal ideal domain"
  "prime ideal" -> "prime ideal x principal ideal domain"
  "prime ideal x principal ideal domain" -> "maximal ideal" [label="all nonzero prime\nideals are maximal\nin a principal ideal domain", href="https://en.wikipedia.org/wiki/Maximal_ideal"]
  "ideal" -> "Jacobson radical" [label="consisting of those\nelements in R\nthat annihilate all\nsimple right R-modules", href="https://en.wikipedia.org/wiki/Jacobson_radical"]

  "scheme" [href="https://en.wikipedia.org/wiki/Scheme"]
  "scheme" -> "abelian scheme"
  "scheme" -> "separated scheme"
  "scheme" -> "quotient scheme"
  "scheme" -> "smooth scheme"
  "scheme" -> "regular scheme" [label="local rings\nare regular\nlocal rings", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "scheme" -> "group scheme" [label="whose sets of\npoints have\nthe structures\nof a group", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "scheme" -> "integral scheme" -> "normal scheme" [label="local rings are\nintegrally closed domain", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "scheme" -> "projective scheme" [label="over a scheme S\nis an S-scheme that factors\nthrough some projective space\nP^N_S -> S as a closed subscheme", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "variety" [href="https://en.wikipedia.org/wiki/Algebraic_variety"]
  "variety" -> "abelian variety" [label="complete group variety", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "variety" -> "affine variety" [label="in affine space", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "variety" -> "flag variety" [label="parametrizes a flag\nof vector spaces", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]  
  "variety" -> "normal variety"
  "variety" -> "symmetric variety" [label="analog of a\nsymmetric space", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "variety" -> "surface" [label="variety\nof dimension two", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "variety" -> "normal G-variety"
  "variety" -> "secant variety" [label="to a projective variety V\nsubvariety of P^r is\nthe closure of the union of\nall secant lines to V in P^r", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "variety" -> "Schubert variety" [label="closure of a\nSchubert cell", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "abelian variety" -> "C^n/Z^2n" [href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "abelian variety" -> "elliptic curve"  [href="https://en.wikipedia.org/wiki/Elliptic_curve"]
  "elliptic curve"  [href="https://en.wikipedia.org/wiki/Elliptic_curve"]
  "elliptic curve" -> "semistable elliptic curve"
  "elliptic curve" -> "elliptic curve E over a finite field Fq"
  "elliptic curve E over a finite field Fq" [href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "abelian scheme" -> "abelian variety" [label="(flat) family\nof abelian\nvarieties", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "commutative ring" -> "affine scheme" [label="prime spectrum\nof some\ncommutative ring", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "x affine scheme" [shape="point"]
  "x affine scheme" -> "scheme"
  "affine scheme" -> "x affine scheme"
  "affine variety" -> "coordinate ring"
  "Noetherian ring" -> "coordinate ring" [label="Hilbert basis theorem", href="https://en.wikipedia.org/wiki/Noetherian_ring#Examples"]
  "variety" -> "algebraic group" [href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "variety" -> "algebraic curve" [label="dimension one", href="https://en.wikipedia.org/wiki/Algebraic_curve"]
  "algebraic group" [href="https://en.wikipedia.org/wiki/Algebraic_group"]
  "separated scheme" [href="https://planetmath.org/SeparatedScheme"]
  "separated scheme" -> "separated scheme of finite type"
  "separated scheme of finite type" -> "algebraic scheme" [label="over a field", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "algebraic scheme" -> "reduced irreducible algebraic scheme"
  "reduced irreducible algebraic scheme" -> "variety" [href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "separated scheme of finite type" -> "reduced separated scheme of finite type"
  "reduced separated scheme of finite type" -> "algebraic set" [label="over Spec(k)", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "algebraic set" -> "irreducible algebraic set"
  "irreducible algebraic set" -> "variety" [href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "equivalence relation" -> "étale equivalence relation"
  "étale equivalence relation" [href="https://en.wikipedia.org/wiki/%C3%89tale_equivalence_relation"]
  "étale equivalence relation" -> "scheme / étale equivalence relation"
  "group scheme" -> " finite flat group scheme"
  "group scheme" -> "group variety"
  "quotient scheme" -> "scheme / étale equivalence relation"
  "scheme / étale equivalence relation" -> "algebraic space"
  "separated scheme of finite type" -> "integral separated scheme of finite type"
  "integral separated scheme of finite type" -> "variety" [label="over Spec(k)", href="https://en.wikipedia.org/wiki/%C3%89tale_equivalence_relation"]
  "algebraic curve" [href="https://en.wikipedia.org/wiki/Algebraic_curve"]
  "algebraic curve" -> "projective curve"
  "projective curve" [href="https://en.wikipedia.org/wiki/Algebraic_curve#Projective_curves"]
  "projective curve" -> "smooth projective curve"
  "smooth projective curve" -> "elliptic curve" [label="genus one", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "smooth projective variety" -> "Fano variety" [label="X whose anticanonical\nsheaf omega _{X}^{-1}\nis ample", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "projective variety" -> "smooth projective variety"
  "projective variety" -> "projective curve"
  "toric variety" [href="https://en.wikipedia.org/wiki/Toric_variety"]
  "normal variety" -> "toric variety" [label="with the action of a torus\nsuch that the torus\nhas an open dense orbit", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "symmetric variety" [href="https://en.wikipedia.org/wiki/Symmetric_space"]
  "normal G-variety" -> "normal variety"
  "normal variety" -> "spherical variety" [label="(G connected reductive)\nwith an open dense orbit\nby a Borel subgroup of G", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "smooth scheme" [href="https://en.wikipedia.org/wiki/Smooth_scheme"]
  "smooth scheme" -> "smooth scheme over a field k" [label="X that is\ngeometrically smooth\n: X xk k^overline\nis smooth"]
  "smooth scheme" -> "smooth scheme over a perfect field k" [label="X that is of\nlocally of finite\ntype and regular\nover k", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "secant variety" [href="https://en.wikipedia.org/wiki/Secant_variety"]
  "Schubert variety" [href="https://en.wikipedia.org/wiki/Schubert_variety"]
  "ringed space" [href="https://en.wikipedia.org/wiki/Ringed_space"]
  "locally ringed space" [href="https://en.wikipedia.org/wiki/Ringed_space"]
  "sheaf x commutative ring" [shape="point"]
  "commutative ring" -> "sheaf x commutative ring"
  "functor" -> "presheaf"
  "presheaf" [href="https://en.wikipedia.org/wiki/Sheaf_(mathematics)#Presheaves"]
  "presheaf" -> "sheaf"
  "sheaf" -> "sheaf x commutative ring"
  "sheaf x commutative ring" -> "sheaf of rings"
  "topological space" -> "topological space x sheaf of rings"
  "sheaf of rings" -> "topological space x sheaf of rings"
  "topological space x sheaf of rings" [shape="point"]
  "topological space x sheaf of rings" -> "ringed space" [href="https://en.wikipedia.org/wiki/Ringed_space"]
  "ringed space" -> "locally ringed space" [label="analogy of\na germ of a function\nis valid", href="https://en.wikipedia.org/wiki/Ringed_space"]
  "locally ringed space" -> "scheme" [label="locally\na prime spectrum\nof a commutative ring", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "regular scheme" [href="https://en.wikipedia.org/wiki/Regular_scheme"]
  "ring" -> "reduced ring" [label="has no non-zero\nnilpotent elements", href="https://en.wikipedia.org/wiki/Reduced_ring"]
  "ring" -> "differential ring"
  "ring" -> "module" [label="⋅ : R × M → M", href="https://en.wikipedia.org/wiki/Module_(mathematics)#Formal_definition"]
  "ring" -> "ring x Galois group x finite field x local field"
  "ring" -> "Hecke ring"
  <!-- https://rip94550.wordpress.com/2012/07/02/introduction-to-rings/ -->
  "ring" -> "ring with identity" [label="* identity"]
  "ring x Galois group x finite field x local field" [shape="point"]
  "reduced ring" [href="https://en.wikipedia.org/wiki/Reduced_ring"]
  "reduced ring" -> "local ring" [href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "regular local ring" [href="https://en.wikipedia.org/wiki/Regular_local_ring"]
  "regular local ring" -> "field" [href="https://en.wikipedia.org/wiki/Regular_local_ring#Examples"]
  "regular local ring" -> "discrete valuation ring" [href="https://en.wikipedia.org/wiki/Regular_local_ring#Examples"]
  "local ring" -> "regular local ring"
  "local ring" -> "local ring / maximal ideal"
  "local ring / maximal ideal" -> "residue field" [dir="both", href="https://en.wikipedia.org/wiki/Residue_field#Definition"]
  "maximal ideal" -> "local ring / maximal ideal"
  "quotient ring" -> "local ring / maximal ideal"
  "field" -> "vector space"
  "field" -> "residue field"
  "field" -> "field of fractions"
  "cyclotomic field" [href="https://en.wikipedia.org/wiki/Cyclotomic_field"]
  "algebraic number field" -> "cyclotomic field"
  "Hilbert class field" [href="https://en.wikipedia.org/wiki/Hilbert_class_field"]
  "algebraic number field" -> "Hilbert class field" [dir="none"]
  "rational normal curve" [href="https://en.wikipedia.org/wiki/Rational_normal_curve"]
  "algebraic curve" -> "plane curve"
  "plane curve" [href="https://en.wikipedia.org/wiki/Algebraic_curve#Examples_of_curves"]
  "plane curve" -> "cubic plane curve"
  "plane curve" -> "rational plane curve"
  "cubic plane curve" -> "non-singular plane cubic curve"
  "non-singular plane cubic curve" -> "elliptic curve" [href="https://en.wikipedia.org/wiki/Cubic_plane_curve"]
  "algebraic curve" -> "rational curve"
  "rational curve" [href="https://en.wikipedia.org/wiki/Algebraic_curve#Rational_curves"]
  "rational curve" -> "rational plane curve"
  "rational plane curve" [href="https://en.wikipedia.org/wiki/Algebraic_curve#Rational_curves"]
  "projective variety" -> "rational normal curve" [href="https://en.wikipedia.org/wiki/Rational_normal_curve"]
  "normal scheme" [href="https://en.wikipedia.org/wiki/Normal_scheme"]
  "group scheme" [href="https://en.wikipedia.org/wiki/Group_scheme"]
  "algebraic group" -> "group variety" [label="smooth", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "group variety" -> "algebraic group"
  "elliptic curve" -> "hyperelliptic curve" [label="there is a\nlinear system of\ndimension 1\nand degree 2", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "variety" -> "Jacobian variety" [label="of a projective curve X\nis the degree zero part\nof the Picard variety", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "variety" -> "projective variety" [label="closed subvariety\nof a projective\nspace", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "variety" -> "quasi-projective variety" [label="locally\nclosed subvariety\nof a projective\nspace", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "variety" -> "rational variety" [label="birational to a\nprojective space", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "affine variety" -> "circle" [href="https://en.wikipedia.org/wiki/Affine_variety#Examples"]
  "projective scheme" [href="https://en.wikipedia.org/wiki/Projective_scheme"]
  
  subgraph cluster_projectiveVariety {
    label="projective variety"
    "projective variety" [href="https://en.wikipedia.org/wiki/Projective_variety"]
    "quasi-projective variety" [href="https://en.wikipedia.org/wiki/Quasi-projective_variety"]
  }

  "quot scheme" [href="https://en.wikipedia.org/wiki/Quot_scheme"]
  "scheme" -> "quot scheme" [label="parametrizes quotients\nof locally free sheaves\non a projective scheme", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]

  "differential ring" [href="https://en.wikipedia.org/wiki/Differential_algebra"]
  "Hecke ring" [href="https://en.wikipedia.org/wiki/Hecke_algebra"]
  "deformation ring" [href="https://en.wikipedia.org/wiki/Deformation_ring"]
  
  "Galois group" -> "ring x Galois group x finite field x local field"
  "finite field" -> "ring x Galois group x finite field x local field"
  "finite field" -> "integers modulo prime" [href="https://en.wikipedia.org/wiki/Modular_arithmetic#Integers_modulo_n"]
  "local field" -> "ring x Galois group x finite field x local field"
  "ring x Galois group x finite field x local field" -> "deformation ring" [label="controls liftings of a\nrepresentation of a Galois group\nfrom a finite field\nto a local field", href="https://en.wikipedia.org/wiki/Deformation_ring"]

  "ring with identity" -> "division ring" [label="* group", href="http://abstract.ups.edu/aata/section-rings-definitions.html"]

  "division ring" -> "field" [label="* commutative", href="http://abstract.ups.edu/aata/section-rings-definitions.html"]
  "division ring" -> "free algebra over division ring"
  "division ring" -> "noncommutative division ring"
  "noncommutative division ring" -> "quaternion"
  "free algebra" -> "free algebra over division ring"
  "free ideal ring" -> "free algebra over division ring" [href="https://en.wikipedia.org/wiki/Free_algebra"]
  
  "commutative ring" -> "integers" [href="https://en.wikipedia.org/wiki/Commutative_ring#First_examples"]

  subgraph cluster_commutativering {
    label="commutative ring"
    "commutative ring" [label="", shape="none", href="https://en.wikipedia.org/wiki/Commutative_ring"]
    "integral element" [shape="oval", href="https://en.wikipedia.org/wiki/Integral_element"]
  }

  "field" [href="https://en.wikipedia.org/wiki/Field_(mathematics)"]
  "field" -> "field extension"
  "field" -> "algebraic number field"
  "field" -> "differential field"
  "field" -> "complex numbers"
  "field" -> "real numbers"
  "field" -> "topological field"
  "field" -> "local field"
  "field" -> "rational numbers"
  "field" -> "rational function field"
  "rational function field" [href="https://en.wikipedia.org/wiki/Rational_function_field"]
  "ring" -> "commutative ring" [label="* commutative"]
  "ring" -> "endomorphism ring" [label="formed by the endomorphisms\nof an object with additive structure", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "ring" -> "filtered ring" [label="with a filtration", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "ring" -> "finitely generated ring" [label="finitely generated\nas Z-algebra", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "ring" -> "free ideal ring" [label="every right ideal is\na free module of fixed rank", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "ring" -> "semifir" [label=" every finitely\ngenerated right ideal\nis a free module\nof fixed rank", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "ring" -> "free ring" [label="free algebra\nover the integers", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "ring" -> "graded ring" [label="with a grading\nor a graduation", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "ring" -> "hereditary ring" [label="left ideals are\nall projective modules", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "ring" -> "Bézout ring"
  "ring" -> "Jacobson ring" [label=" each prime ideal\nis an intersection of\nprimitive ideals", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "ring" -> "semiperfect ring"
  "ring" -> "semi-local ring" [label="R/J(R) is a semisimple ring,\nwhere J(R) is the\nJacobson radical of R", href="https://en.wikipedia.org/wiki/Semi-local_ring"]
  "ring" -> "local ring" [label="with a unique\nmaximal left\nideal", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "ring" -> "generic matrix ring" [label="consisting of square\nmatrices with entries\nin formal variables", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "ring" -> "monoid ring" [href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "ring" -> "perfect ring" [label="satisfying the descending\nchain condition on\nright principal ideals", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "ring" -> "nonzero ring"
  "ring" -> "primitive ring" [label="has a faithful\nsimple left\nR-module", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "ring" -> "principal ideal ring" [label="every ideal\nis principal", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "ring" -> "self-injective ring"
  "ring" -> "quotient ring" [href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "ring" -> "self-injective" [label="if the module R\nis an injective module", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory"]
  "ring" -> "semiprimary ring" [label="for the\nJacobson radical J(R) of R,\n(1) R/J(R) is semisimple and\n(2) J(R) is a nilpotent ideal", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory"]
  "ring" -> "semiprime ring" [label="the only nilpotent ideal\nis the trivial ideal {0}", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "ring" -> "semiprimitive ring" [label="whose Jacobson\nradical\nis zero", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "endomorphism ring" [href="https://en.wikipedia.org/wiki/Endomorphism_ring"]
  "field extension" [href="https://en.wikipedia.org/wiki/Field_extension"]
  "Galois extension" [href="https://en.wikipedia.org/wiki/Galois_extension"]
  "normal extension" [href="https://en.wikipedia.org/wiki/Normal_extension"]
  "separable extension" [href="https://en.wikipedia.org/wiki/Separable_extension"]
  "field extension" -> "normal extension"
  "field extension" -> "separable extension"
  "field extension" -> "finite field extension"
  "finite field extension" [href="https://en.wikipedia.org/wiki/Finite_field_extension"]
  "finitely generated algebra" -> "finite field extension" [label="E is a finitely\ngenerated algebra\nover F", href="https://en.wikipedia.org/wiki/Finitely_generated_algebra#Examples"]
  "separable extension" -> "Galois extension"
  "normal extension" -> "Galois extension"
  "algebraic number field" [href="https://en.wikipedia.org/wiki/Algebraic_number_field"]
  "algebraic number field" -> "totally real number field"
  "totally real number field" [href="https://en.wikipedia.org/wiki/Totally_real_number_field#:~:text=In%20number%20theory%2C%20a%20number,lies%20inside%20the%20real%20numbers.&text=An%20abelian%20extension%20of%20Q,which%20it%20has%20degree%20two."]
  "differential field" [href="https://en.wikipedia.org/wiki/Differential_algebra"]
  "complex numbers" -> "algebraic integer" [label=" root of some\nmonic polynomial\nwith coefficients in ℤ", href="https://en.wikipedia.org/wiki/Algebraic_integer"]
  "topological field" [href="https://en.wikipedia.org/wiki/Topological_ring#Topological_fields"]
  "locally compact space" -> "locally compact topological field"
  "topological field" -> "locally compact topological field"
  "locally compact topological field" -> "local field" [href="https://en.wikipedia.org/wiki/Local_field"]
  "ring of integers" [href="https://en.wikipedia.org/wiki/Ring_of_integers"]
  "algebraic number field" -> "ring of integers" [label="integral elements\ncontained in K", href="https://en.wikipedia.org/wiki/Ring_of_integers"]
  "filtered ring" [href="https://en.wikipedia.org/wiki/Filtered_ring"]
  "finitely generated ring" [href="https://en.wikipedia.org/wiki/Finitely_generated_ring"]
  "free ideal ring" [href="https://en.wikipedia.org/wiki/Free_ideal_ring"]
  "free ring" [href="https://en.wikipedia.org/wiki/Free_ring"]
  "free algebra" -> "free ring"
  "integral domain" -> "graded integral domain"
  "graded ring" -> "graded integral domain" [href="https://en.wikipedia.org/wiki/Graded_ring#Basic_examples"]
  "graded ring" [href="https://en.wikipedia.org/wiki/Graded_ring"]
  "graded module" -> "graded ring" [label="graded module\nover itself", href="https://en.wikipedia.org/wiki/Graded_ring#Basic_examples"]
  "graded module" -> "graded vector space" [href="https://en.wikipedia.org/wiki/Graded_ring#Basic_examples"]
  "graded ring" -> "polynomial ring" [label="graded by degree", href="https://en.wikipedia.org/wiki/Graded_ring#Basic_examples"]
  "hereditary ring" [href="https://en.wikipedia.org/wiki/Hereditary_ring"]
  "Bézout ring" -> "principal ideal ring" [href="https://en.wikipedia.org/wiki/Principal_ideal_ring#General_properties"]
  "Jacobson ring" [href="https://en.wikipedia.org/wiki/Jacobson_ring"]
  "Jacobson ring" -> "field" [href="https://en.wikipedia.org/wiki/Jacobson_ring#Examples"]
  "principal ideal domain" -> "principal ideal domain\n with Jacobson radical zero"
  "Jacobson ring" -> "principal ideal domain\n with Jacobson radical zero" [href="https://en.wikipedia.org/wiki/Jacobson_ring#Examples"]
  "local ring" [href="https://en.wikipedia.org/wiki/Local_ring"]
  "semi-local ring" -> "local ring"
  "endomorphism ring" [href="https://en.wikipedia.org/wiki/Endomorphism_ring"]
  "semiperfect ring" [href="https://en.wikipedia.org/wiki/Semiperfect_ring"]
  "semi-local ring" [href="https://en.wikipedia.org/wiki/Semi-local_ring"]
  "semi-local ring" -> "Artinian ring" [href="https://en.wikipedia.org/wiki/Semi-local_ring"]
  "semi-local ring" -> "serial ring" [href="https://en.wikipedia.org/wiki/Semi-local_ring"]
  "semi-local ring" -> "semiperfect ring" [href="https://en.wikipedia.org/wiki/Semi-local_ring"]
  "generic matrix ring" -> "matrix ring" [label="elements are square\nmatrices of fixed size\nwith the entries in R", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "matrix ring" [href="https://en.wikipedia.org/wiki/Matrix_ring"]
  "generic matrix ring" [href="https://en.wikipedia.org/wiki/Ring_of_generic_matrices"]

  "monoid ring" [href="https://en.wikipedia.org/wiki/Monoid_ring"]
  "perfect ring" [href="https://en.wikipedia.org/wiki/Perfect_ring"]
  "perfect ring" -> "Artinian ring" [href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "polynomial ring" [href="https://en.wikipedia.org/wiki/Polynomial_ring"]
  "polynomial ring" -> "K[x1,...,xn]"
  "K[x1,...,xn]" -> "K[X]"
  "finitely generated algebra" -> "K[x1,...,xn]"
  "polynomial ring" -> "polynomial ring over commutative ring"
  "free module" -> "polynomial ring over commutative ring" [href="https://en.wikipedia.org/wiki/Free_module#Examples"]
  "commutative ring" -> "polynomial ring" [label="consisting of all\nthe polynomials in the\nspecified variables\nwith coefficients in R", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "prime ring" [href="https://en.wikipedia.org/wiki/Prime_ring"]
  "nonzero ring" -> "prime ring" [label="any two elements\na and b of R with aRb = 0,\nwe have either a = 0 or b = 0", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "simple algebra" -> "simple ring" [label="simple algebra over its center", href="https://en.wikipedia.org/wiki/Simple_ring"]
  "prime ring" -> "simple ring" [href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "prime ring" -> "domain" [href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "primitive ring" [href="https://en.wikipedia.org/wiki/Primitive_ring"]
  "primitive ring" -> "simple ring" [href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  
  subgraph cluster_principalIdealDomain {
    label="principal ideal ring"
    href="https://en.wikipedia.org/wiki/Principal_ideal_ring"
    "principal ideal"
    "principal ideal ring" [shape="none", label=""]
  }
  
  "quasi-Frobenius ring" [href="https://en.wikipedia.org/wiki/Quasi-Frobenius_ring"]
  "Artinian ring" -> "quasi-Frobenius ring" [href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "self-injective ring" [href="https://en.wikipedia.org/wiki/Self-injective_ring"]
  "self-injective ring" -> "quasi-Frobenius ring" [href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "quasi-Frobenius ring" -> "semisimple ring" [href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "quotient ring" [href="https://en.wikipedia.org/wiki/Quotient_ring"]
  "semiprimary ring" [href="https://en.wikipedia.org/wiki/Semiprimary_ring"]
  "semiprime ring" [href="https://en.wikipedia.org/wiki/Semiprime_ring"]
  "semiprimitive ring" [href="https://en.wikipedia.org/wiki/Semiprimitive_ring"]
  "semiprimitive ring" -> "Von Neumann regular ring" [href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "semiprimitive ring" -> "primitive ring" [href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  <!-- quasi-Frobenius rings and local rings are usually not semiprimitive -->
  "Artinian ring" -> "semisimple ring" [label="finite product of\nsimple Artinian rings", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory"]
  "simple ring" -> "simple Artinian ring"
  "simple ring" -> "Weyl algebra" [label="differential operators\nwith polynomial\ncoefficients", href="https://en.wikipedia.org/wiki/Weyl_algebra"]
  "simple ring" [href="https://en.wikipedia.org/wiki/Simple_ring"]
  "Weyl algebra" [href="https://en.wikipedia.org/wiki/Weyl_algebra"]
  "Artinian ring" -> "simple Artinian ring" [href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory"]
  "module" -> "semisimple R-module"
  "semisimple ring" [href="semisimple ring"]
  "semisimple R-module" -> "semisimple ring" [href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "serial ring" [href="https://en.wikipedia.org/wiki/Serial_ring"]
  "ring" -> "serial ring" [label="right serial\nmodule over itself", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "nonzero ring" -> "simple ring" [label="only has trivial\ntwo-sided ideals", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "Sylvester domain" [href="https://en.wikipedia.org/wiki/Sylvester_domain"]
  "ring" -> "Sylvester domain" [label="Sylvester's law\nof nullity holds", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "Sylvester domain" -> field" [href="https://en.wikipedia.org/wiki/Sylvester_domain"]
  "trivial ring" [href="https://en.wikipedia.org/wiki/Trivial_ring"]
  "ring" -> "trivial ring" [label="consisting of a\nsingle element 0 = 1", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "uniserial ring" [href="https://en.wikipedia.org/wiki/Uniserial_ring"]
  "ring" -> "uniserial ring" [label="right uniserial\nmodule over itself", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "serial ring" -> "uniserial ring" [href="https://en.wikipedia.org/wiki/Serial_module#Examples"]
  "uniserial ring" -> "valuation ring" [label="* commutative", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "discrete valuation ring" [href="https://en.wikipedia.org/wiki/Discrete_valuation_ring"]
  "valuation ring" [href="https://en.wikipedia.org/wiki/Valuation_ring"]
  "valuation ring" -> "discrete valuation ring"
  "principal ideal ring" -> "commutative principal ideal ring"
  "commutative principal ideal ring x integral domain" [shape="point"]
  "commutative principal ideal ring" -> "commutative principal ideal ring x integral domain"
  "integral domain" -> "commutative principal ideal ring x integral domain"
  "commutative principal ideal ring x integral domain" -> "principal ideal domain" [dir="both", href="https://en.wikipedia.org/wiki/Principal_ideal_ring"]
  "Von Neumann regular ring" [href="https://en.wikipedia.org/wiki/Von_Neumann_regular_ring"]
  "ring" -> "Von Neumann regular ring" [label="each element a\ncan be expressed\nas a = axa for another\nelement x in the ring", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "Von Neumann regular ring" -> "semisimple ring" [href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]

  "rng" [href="https://en.wikipedia.org/wiki/Rng_(algebra)"]
  "rng of square zero" [href="https://en.wikipedia.org/wiki/Rng_(algebra)#Rng_of_square_zero"]
  "rng" -> "rng of square zero" [label="xy = 0 for all x and y", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]

  subgraph cluster_ring {
    label="ring"
    "ring" [label="", shape="none", href="https://en.wikipedia.org/wiki/Ring_(mathematics)"]
    "ideal"
  }

  "ring" -> "domain" [label="0 ≠ 1", href="https://math.stackexchange.com/questions/2361889/graphically-organizing-the-interrelationships-of-basic-algebraic-structures"]

  subgraph cluster_integralDomain {
    label="integral domain"
    href="https://en.wikipedia.org/wiki/Integral_domain"
    "integral domain" [shape="none", label=""]
    "field of fractions" [href="https://en.wikipedia.org/wiki/Field_of_fractions"]
  }

  "domain" -> "integral domain" [label="* commutative", href="https://math.stackexchange.com/questions/2361889/graphically-organizing-the-interrelationships-of-basic-algebraic-structures"]
  "ring with identity" -> "integral domain"
  "commutative ring" -> "integral domain" [label="0 ≠ 1", href="https://math.stackexchange.com/questions/2361889/graphically-organizing-the-interrelationships-of-basic-algebraic-structures"]
  "Dedekind domain" [href="https://en.wikipedia.org/wiki/Dedekind_domain"]
  "Noetherian ring" -> "Dedekind domain" [label="every ideal\nis generated by\nat most two\nelements", href="https://en.wikipedia.org/wiki/Noetherian_ring#Examples"]
  "Noetherian ring" -> "principal ideal ring" [href="https://en.wikipedia.org/wiki/Principal_ideal_ring#General_properties"]
  "integral domain" -> "Dedekind domain" [label="every nonzero proper ideal\nfactors into a product of\nprime ideals", href="https://en.wikipedia.org/wiki/Dedekind_domain"]
  "Dedekind domain" -> "integers" [href="https://en.wikipedia.org/wiki/Noetherian_ring#Examples"]

  "boolean ring" [href="https://en.wikipedia.org/wiki/Boolean_ring"]
  "commutative ring" -> "boolean ring" [label="* idempotent"]
  "commutative ring" -> "field" [label="0 ≠ 1", href="https://math.stackexchange.com/questions/2361889/graphically-organizing-the-interrelationships-of-basic-algebraic-structures"]

  "coherent ring" [href="https://en.wikipedia.org/wiki/Coherent_ring"]
  "coherent ring" -> "Noetherian ring" [href="https://en.wikipedia.org/wiki/Coherent_ring"]
  "ring" -> "coherent ring" [label="every finitely\ngenerated left\nideal of it is\na finitely\npresented module", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  <!-- https://rip94550.wordpress.com/2012/07/16/integral-domains-and-the-failure-of-unique-factorization/ -->
  "integral domain" -> "unique factorization domain" [label="every non-zero\nelement x of R\ncan be written as\na product (an empty product\nif x is a unit) of\nirreducible elements pi of R\nand a unit u", href="https://en.wikipedia.org/wiki/Unique_factorization_domain#Definition"]

  "Bézout domain" -> "principal ideal domain" [href="https://en.wikipedia.org/wiki/B%C3%A9zout_domain#Examples"]
  "Bézout domain" -> "valuation ring" [href="https://en.wikipedia.org/wiki/B%C3%A9zout_domain#Examples"]
  "Dedekind domain" -> "principal ideal domain" [label="every ideal is principal,\ni.e., can be generated\nby a single\nelement", href="https://en.wikipedia.org/wiki/Dedekind_domain"]
  "integral domain" -> "integrally closed domain" [label="integral closure\nin its field\nof fractions\nis A itself", href="https://en.wikipedia.org/wiki/Integrally_closed_domain"]

  "GCD domain" [href="https://en.wikipedia.org/wiki/GCD_domain"]
  "integral domain" -> "GCD domain" [label="two elements\nhave a greatest\ncommon divisor (GCD);\ni.e., there is a unique\nminimal principal ideal\ncontaining the ideal\ngenerated by two\ngiven elements", href="https://en.wikipedia.org/wiki/GCD_domain"]
  "integrally closed domain" -> "GCD domain" [href="https://en.wikipedia.org/wiki/Unique_factorization_domain"]
  "GCD domain" -> "unique factorization domain" [href="https://en.wikipedia.org/wiki/Unique_factorization_domain"]
  "Bézout domain" [href="https://en.wikipedia.org/wiki/B%C3%A9zout_domain"]
  "GCD domain" -> "Bézout domain" [label="", href="https://en.wikipedia.org/wiki/GCD_domain"]

  "unique factorization domain" [href="https://en.wikipedia.org/wiki/Unique_factorization_domain"]
  "unique factorization domain" -> "principal ideal domain" [href="https://en.wikipedia.org/wiki/Unique_factorization_domain#Examples"]
  "unique factorization domain" -> "regular local ring" [href="https://en.wikipedia.org/wiki/Unique_factorization_domain#Examples"]
  "ring" -> "Noetherian ring" [label="satisfies the\nascending chain\ncondition\non left and\nright ideals", href="https://en.wikipedia.org/wiki/Noetherian_ring"]
  "Noetherian ring" -> "Noetherian local ring"
  "local ring" -> "Noetherian local ring"
  "Universally catenary ring" [href="https://en.wikipedia.org/wiki/Universally_catenary_ring"]
  "Cohen–Macaulay ring" [href="https://en.wikipedia.org/wiki/Cohen%E2%80%93Macaulay_ring"]
  "complete intersection ring" [href="https://en.wikipedia.org/wiki/Complete_intersection_ring"]
  "regular local ring" [href="https://en.wikipedia.org/wiki/Regular_local_ring"]
  "Noetherian local ring" -> "Universally catenary ring" [href="https://en.wikipedia.org/wiki/Gorenstein_ring"]
  "Universally catenary ring" -> "Cohen–Macaulay ring" [href="https://en.wikipedia.org/wiki/Gorenstein_ring"]
  "Cohen–Macaulay ring" -> "Gorenstein ring" [href="https://en.wikipedia.org/wiki/Gorenstein_ring"]
  "Gorenstein ring" -> "complete intersection ring" [href="https://en.wikipedia.org/wiki/Gorenstein_ring"]
  "complete intersection ring" -> "regular local ring" [href="https://en.wikipedia.org/wiki/Gorenstein_ring"]
  "Gorenstein ring" [href="https://en.wikipedia.org/wiki/Gorenstein_ring"]
  "Gorenstein ring" [href="https://en.wikipedia.org/wiki/Gorenstein_ring"]
  "Noetherian ring" [href="https://en.wikipedia.org/wiki/Noetherian_ring"]
  "Noetherian ring" -> "Artinian ring" [label="ring satisfying the\ndescending chain condition\nfor left ideals", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  <!-- "ring" -> "uniserial ring" [label="integral domain where every finitely generated ideal is principal", href=""] -->
  "Artinian ring" [href="https://en.wikipedia.org/wiki/Artinian_ring"]

  "principal ideal domain" [href="https://en.wikipedia.org/wiki/Principal_ideal_domain"]
  "principal ideal domain" -> "euclidean domain" [label="integral domain\nthat can be endowed\nwith a Euclidean\nfunction which\nallows a suitable\ngeneralization of\nthe Euclidean division\nof the integers", href="https://en.wikipedia.org/wiki/Euclidean_domain"]

  
  "Gaussian integers" [href="https://en.wikipedia.org/wiki/Gaussian_integer"]
  "Eisenstein integers" [href="https://en.wikipedia.org/wiki/Eisenstein_integer"]
  "euclidean domain" [href="https://en.wikipedia.org/wiki/Euclidean_domain"]
  "euclidean domain" -> "integers" [href="https://en.wikipedia.org/wiki/Unique_factorization_domain#Examples"]
  "euclidean domain" -> "Gaussian integers" [href="https://en.wikipedia.org/wiki/Unique_factorization_domain#Examples"]
  "euclidean domain" -> "Eisenstein integers" [href="https://en.wikipedia.org/wiki/Unique_factorization_domain#Examples"]
  "euclidean domain" -> "field"
  "euclidean domain" -> "K[X]" [href="https://en.wikipedia.org/wiki/Polynomial_ring#Properties_of_K[X]"]
  "euclidean domain" -> "formal power series ring over a field" [href="https://en.wikipedia.org/wiki/Euclidean_domain#Examples"]
  "formal power series ring over a field" -> "formal power series ring over a field in one variable"
  "discrete valuation ring" -> "formal power series ring over a field in one variable" [href="https://en.wikipedia.org/wiki/Discrete_valuation_ring#Examples"]

  "integrally closed domain" [href="https://en.wikipedia.org/wiki/Integrally_closed_domain"]
  <!-- "integral domain" -> "field" [label="* abelian group", href="https://math.stackexchange.com/questions/2361889/graphically-organizing-the-interrelationships-of-basic-algebraic-structures"] -->
  "domain" -> "finite field" [label="finite"]
  "field" -> "finite field" [label="finite", href="https://math.stackexchange.com/questions/2361889/graphically-organizing-the-interrelationships-of-basic-algebraic-structures"]

  "algebra over a ring" [href="https://en.wikipedia.org/wiki/Algebra_over_a_field#Generalization:_algebra_over_a_ring"]
  "algebra over a field" [href="https://en.wikipedia.org/wiki/Algebra_over_a_field"]
  "algebra over a field" -> "associative algebra"
  "associative algebra" -> "ring" [label="over the integers", href="https://en.wikipedia.org/wiki/Algebra_over_a_field#Generalization:_algebra_over_a_ring"]
  "abelian group" -> "associative algebra" [label="+", href="https://en.wikipedia.org/wiki/Associative_algebra"]
  "abelian group" -> "cyclic group" [href="https://en.wikipedia.org/wiki/Abelian_group#Examples"]
  "abelian group" -> "ring" [href="https://en.wikipedia.org/wiki/Abelian_group#Examples"]
  "abelian group" -> "Z-module" [href="https://en.wikipedia.org/wiki/Abelian_group#Examples"]
  "abelian group" -> "integers"
  "associative algebra" -> "algebra over a field"
  "algebra over a ring" -> "algebra over a field" [href="https://en.wikipedia.org/wiki/Algebra_over_a_field#Generalization:_algebra_over_a_ring"]
  "associative algebra" [href="https://en.wikipedia.org/wiki/Associative_algebra"]
  "associative algebra" -> "commutative algebra" [label="* commutative", href="https://en.wikipedia.org/wiki/Associative_algebra"]
  "associative algebra" -> "unital associative algebras" [label="have a multiplicative identity", href="https://en.wikipedia.org/wiki/Associative_algebra"]
  "associative algebra" -> "Z-algebra"
  "associative algebra" -> "commutative associative algebra"
  "commutative algebra" -> "commutative associative algebra"
  "commutative algebra" -> "commutative R-algebra"
  "commutative R-algebra" -> "polynomial ring" [href="https://en.wikipedia.org/wiki/Associative_algebra#Algebra"]
  "commutative associative algebra" -> "finitely generated algebra"
  "free algebra" [href="https://en.wikipedia.org/wiki/Free_algebra"]
  "algebra over a field" -> "free algebra"
  "Z-algebra" -> "ring" [href="https://en.wikipedia.org/wiki/Associative_algebra"]
  "ring" -> "ring of characteristic n"
  "associative algebra" -> "(Z/nZ)-algebra"
  "(Z/nZ)-algebra" -> "ring of characteristic n" [href="https://en.wikipedia.org/wiki/Associative_algebra#Algebra"]
  "Banach algebra" [href="https://en.wikipedia.org/wiki/Banach_algebra"]
  "associative algebra" -> "Banach algebra" [label="over the real\nor complex\nnumbers (or over\na non-Archimedean\ncomplete normed\nfield) that\nat the same time\nis also a\nBanach space", href="https://en.wikipedia.org/wiki/Banach_algebra"]
  "C*-algebra" [href="https://en.wikipedia.org/wiki/C*-algebra"]
  "Banach algebra" -> "C*-algebra" [label="with an involution\nsatisfying the\nproperties of\nthe adjoint", href="https://en.wikipedia.org/wiki/C*-algebra"]
  "Banach algebra" -> "real numbers" [label="norm given by\nthe absolute\nvalue", href="https://en.wikipedia.org/wiki/Banach_algebra#Examples"]
  "Banach algebra" -> "complex numbers" [label="norm given by\nthe absolute\nvalue", href="https://en.wikipedia.org/wiki/Banach_algebra#Examples"]
  "differential algebra" [href="https://en.wikipedia.org/wiki/Differential_algebra"]
  "associative algebra" -> "differential algebra"
  "simple algebra" [href="https://en.wikipedia.org/wiki/Simple_ring#Simple_algebra"]
  "associative algebra" -> "simple algebra" [label="contains no non-trivial\ntwo-sided ideals\nand the multiplication\noperation is not zero", href="https://en.wikipedia.org/wiki/Simple_ring#Simple_algebra"]
  "division algebra" [href="https://en.wikipedia.org/wiki/Division_algebra"]
  "simple algebra" -> "division algebra" [label="division,\nexcept by zero,\nis always possible", href="https://en.wikipedia.org/wiki/Division_algebra"]

  "octonion" [href="https://en.wikipedia.org/wiki/Octonion"]
  "quaternion" [href="https://en.wikipedia.org/wiki/Quaternion"]
  "complex numbers" [href="https://en.wikipedia.org/wiki/Complex_number"]
  "real numbers" [href="https://en.wikipedia.org/wiki/Real_number"]
  "rational numbers" [href="https://en.wikipedia.org/wiki/Rational_number"]
  "integers" [href="https://en.wikipedia.org/wiki/Integer"]
  "integers modulo n" [href="https://en.wikipedia.org/wiki/Modular_arithmetic#Integers_modulo_n"]
  "integers modulo prime" [href="https://en.wikipedia.org/wiki/Modular_arithmetic#Integers_modulo_n"]
  "integers modulo n" -> "integers modulo prime"
  "integers" -> "integers modulo n"
  "prime numbers" [href="https://en.wikipedia.org/wiki/Prime_number"]
  "natural numbers" [href="https://en.wikipedia.org/wiki/Natural_number"]
   "quaternion" -> "octonion"
   "complex numbers" -> "quaternion"
   "real numbers" -> "complex numbers"
   "rational numbers" -> "real numbers"
   "integers" -> "rational numbers"
   "natural numbers" -> "integers"
   "prime numbers" -> "natural numbers"

  "compact space" [href="https://en.wikipedia.org/wiki/Compact_space"]
  "topological space" -> "compact space"
  "topological space" [href="https://en.wikipedia.org/wiki/Topological_space"]
  "locally compact space" [href="https://en.wikipedia.org/wiki/Locally_compact_space"]
  "topological space" -> "locally compact space"
  "set" -> "topological space" [label="of points,\nalong with a set of\nneighbourhoods for each point,\nsatisfying a set of axioms\nrelating points\nand neighbourhoods", href="https://en.wikipedia.org/wiki/Topological_space"]

  <!-- tool for systematically tracking locally defined data attached to the open sets of a topological space -->
  "sheaf" [href="https://en.wikipedia.org/wiki/Sheaf_(mathematics)"]
  "sheaf" -> "quasi-coherent sheaf"
  "reflexive sheaf" [href="https://en.wikipedia.org/wiki/Reflexive_sheaf"]
  "quasi-coherent sheaf" -> "coherent sheaf" [label="finitely generated as OX-module", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "coherent sheaf" -> "reflexive sheaf" [label="canonical map to\nthe second dual\nis an isomorphism", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
}
```

https://math.stackexchange.com/questions/2361889/graphically-organizing-the-interrelationships-of-basic-algebraic-structures