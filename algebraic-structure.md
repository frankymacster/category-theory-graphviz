https://en.wikipedia.org/wiki/Magma_(algebra)

```graphviz
digraph G {
  "set" -> "magma"

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
  "set" [href="https://en.wikipedia.org/wiki/Set_(mathematics)"]
  "set" -> "partially ordered set" [label="set together with a binary relation indicating that, for certain pairs of elements in the set, one of the elements precedes the other in the ordering", href="https://en.wikipedia.org/wiki/Partially_ordered_set"]
  "partially ordered set" [href="https://en.wikipedia.org/wiki/Partially_ordered_set"]
  "partially ordered set" -> "semilattice" [label="has a join (a least upper bound) for any nonempty finite subset", href="https://en.wikipedia.org/wiki/Semilattice"]
  "partially ordered set" -> "totally ordered set" [href="https://en.wikipedia.org/wiki/Partially_ordered_set"]
  "semigroup" -> "semilattice" [label="commutativity, idempotence"]
  "semigroup" -> "inverse semigroup" [label="invertibility"]
  "group" [href="https://en.wikipedia.org/wiki/Group_(mathematics)"]
  "loop" -> "group" [label="associativity"]
  "monoid" -> "group" [label="invertibility"]
  "monoid" -> "(N0,+)" [href="https://en.wikipedia.org/wiki/Free_monoid#Examples"]
  "monoid" -> "Kleene star" [href="https://en.wikipedia.org/wiki/Free_monoid#Examples"]
  "monoid" -> "commutative monoid" [label="commutativity"]
  "free monoid" [href="https://en.wikipedia.org/wiki/Free_monoid"]
  "monoid" -> "free monoid"

  "group" -> "commutative group" [label="commutativity"]
  "group" -> "free group" [label="free"]
  "finite group" [href="https://en.wikipedia.org/wiki/Finite_group"]
  "group" -> "finite group"
  "dihedral group" [href="https://en.wikipedia.org/wiki/Dihedral_group"]
  "finite group" -> "dihedral group"
  "symmetry group" -> "dihedral group"
  "symmetry group" [href="https://en.wikipedia.org/wiki/Symmetry_group"]
  "group" -> "symmetry group"
  "Galois group" [href="https://en.wikipedia.org/wiki/Galois_group"]
  "group" -> "Galois group"
  "topological group" [href="https://en.wikipedia.org/wiki/Topological_group"]
  "Lie group" [href="https://en.wikipedia.org/wiki/Lie_group"]
  "group" -> "topological group" [label="with a topology on G such that\nboth the group's binary operation\nand the function mapping group elements to their respective inverses\nare continuous functions with respect to the topology", href="https://en.wikipedia.org/wiki/Topological_group"]
  "topological group" -> "Lie group" [label="elements are organized continuously and smoothly", href="https://en.wikipedia.org/wiki/Lie_group"]
  "matrix group" [href="https://en.wikipedia.org/wiki/Matrix_group"]
  "group" -> "matrix group"
  "matrix group" -> "general linear group" [label="all invertible n-by-n matrices with real entries", href="https://en.wikipedia.org/wiki/Group_(mathematics)#Examples_and_applications"]
  "orthogonal group" [href="https://en.wikipedia.org/wiki/Orthogonal_group"]
  "general linear group" [href="https://en.wikipedia.org/wiki/General_linear_group"]
  "general linear group" -> "orthogonal group" [label="endomorphisms that preserve the Euclidean norm", href="https://en.wikipedia.org/wiki/Orthogonal_group"]
  "special orthogonal group" [href="https://en.wikipedia.org/wiki/Orthogonal_group"]
  "orthogonal group" -> "special orthogonal group"
  "special linear group" [href="https://en.wikipedia.org/wiki/Special_linear_group"]
  "general linear group" -> "special linear group"
  "unitary group" [href="https://en.wikipedia.org/wiki/Unitary_group"]
  "general linear group" -> "unitary group" [label="n × n unitary matrices", href="https://en.wikipedia.org/wiki/Unitary_group"]
  "special unitary group" [href="https://en.wikipedia.org/wiki/Special_unitary_group"]
  "unitary group" -> "special unitary group" [label="Lie group of n × n unitary matrices with determinant 1", href="https://en.wikipedia.org/wiki/Special_unitary_group"]
  "Euclidean group" [href="https://en.wikipedia.org/wiki/Euclidean_group"]
  "Euclidean group" -> "translational group" [href="https://en.wikipedia.org/wiki/Euclidean_group"]
  "Euclidean group" -> "orthogonal group" [href="https://en.wikipedia.org/wiki/Euclidean_group"]

  "ringoid" [href="https://mathworld.wolfram.com/Ringoid.html"]
  "ringoid" -> "crooked semirng" [label="+ monoid\n* semigroup\n0*x = x*0 = 0", href="https://math.stackexchange.com/questions/2361889/graphically-organizing-the-interrelationships-of-basic-algebraic-structures"]
  "crooked semirng" -> "crooked semiring" [label="* monoid", href="https://math.stackexchange.com/questions/2361889/graphically-organizing-the-interrelationships-of-basic-algebraic-structures"]
  "crooked semiring" -> "near-ring" [label="+ group", href="https://math.stackexchange.com/questions/2361889/graphically-organizing-the-interrelationships-of-basic-algebraic-structures"]
  "near-ring" -> "ring" [label="+ commutative", href="https://math.stackexchange.com/questions/2361889/graphically-organizing-the-interrelationships-of-basic-algebraic-structures"]

  "rng" -> "ring" [label="* monoid", href="https://math.stackexchange.com/questions/2361889/graphically-organizing-the-interrelationships-of-basic-algebraic-structures"]
  "crooked semirng" -> "semirng" [label="+ commutative", href="https://math.stackexchange.com/questions/2361889/graphically-organizing-the-interrelationships-of-basic-algebraic-structures"]

  "semirng" -> "rng" [label="+ commutative group", href="https://math.stackexchange.com/questions/2361889/graphically-organizing-the-interrelationships-of-basic-algebraic-structures"]
  "semirng" -> "semiring" [label="* monoid", href="https://math.stackexchange.com/questions/2361889/graphically-organizing-the-interrelationships-of-basic-algebraic-structures"]
  "semiring" -> "ring" [label="+ commutative group", href="https://math.stackexchange.com/questions/2361889/graphically-organizing-the-interrelationships-of-basic-algebraic-structures"]

  "commutative group" -> "module" [label="(M, +)", href="https://en.wikipedia.org/wiki/Module_(mathematics)#Formal_definition"]
  "module" [href="https://en.wikipedia.org/wiki/Module_(mathematics)"]
  "module" -> "vector space" [label=""]

  "topological space" [href="https://en.wikipedia.org/wiki/Topological_space"]
  "Kolmogorov space" [href="https://en.wikipedia.org/wiki/Kolmogorov_space"]
  "T1 space" [href="https://en.wikipedia.org/wiki/T1_space"]
  "Hausdorff space" [href="https://en.wikipedia.org/wiki/Hausdorff_space"]
  "Urysohn space" [href="https://en.wikipedia.org/wiki/Urysohn_and_completely_Hausdorff_spaces"]
  "completely Hausdorff space" [href="https://en.wikipedia.org/wiki/Urysohn_and_completely_Hausdorff_spaces"]
  "regular space" [href="https://en.wikipedia.org/wiki/Regular_space"]
  "Tychonoff space" [href="https://en.wikipedia.org/wiki/Tychonoff_space"]
  "normal space" [href="https://en.wikipedia.org/wiki/Normal_space"]
  "completely normal Hausdorff space" [href="https://en.wikipedia.org/wiki/Normal_space"]
  "perfectly normal Hausdorff space" [href="https://en.wikipedia.org/wiki/Normal_space"]
  "metric space" [href="https://en.wikipedia.org/wiki/Metric_space"]
  "normed vector space" [href="https://en.wikipedia.org/wiki/Normed_vector_space"]
  "vector space" [href="https://en.wikipedia.org/wiki/Vector_space"]
  "Euclidean space" [href="https://en.wikipedia.org/wiki/Euclidean_space"]
  "affine space" [href="https://en.wikipedia.org/wiki/Affine_space"]
  "inner product space" [href="https://en.wikipedia.org/wiki/Inner_product_space"]
  "Banach space" [href="https://en.wikipedia.org/wiki/Banach_space"]
  "complete metric space" [href="https://en.wikipedia.org/wiki/Complete_metric_space"]
  "Sobolev space" [href="https://en.wikipedia.org/wiki/Sobolev_space"]
  "Hardy space" [href="https://en.wikipedia.org/wiki/Hardy_space"]

  "topological space" -> "Kolmogorov space" [label="for every pair of distinct points of X,\nat least one of them has a neighborhood not containing the other", href="https://en.wikipedia.org/wiki/Kolmogorov_space"]
  "Kolmogorov space" -> "T1 space" [label="for every pair of distinct points,\neach has a neighborhood not containing the other point", href="https://en.wikipedia.org/wiki/T1_space"]
  "Kolmogorov space" -> "Hausdorff space" [label="for any two distinct points\nthere exist neighbourhoods of each\nwhich are disjoint from each other", href="https://en.wikipedia.org/wiki/Hausdorff_space"]
  "Hausdorff space" -> "Urysohn space" [label="any two distinct points can be separated by closed neighborhoods", href="https://en.wikipedia.org/wiki/Urysohn_and_completely_Hausdorff_spaces"]
  "Urysohn space" -> "completely Hausdorff space" [label="any two distinct points can be separated by a continuous function", href="https://en.wikipedia.org/wiki/Urysohn_and_completely_Hausdorff_spaces"]
  "completely Hausdorff space" -> "regular space" [label="every closed subset C of X\nand a point p not contained in C\nadmit non-overlapping open neighborhoods", href="https://en.wikipedia.org/wiki/Regular_space"]
  "regular space" -> "Tychonoff space" [label="can be separated from closed sets\nvia (bounded) continuous real-valued functions", href="https://en.wikipedia.org/wiki/Tychonoff_space#Definitions"]
  "Tychonoff space" -> "normal space" [label="every two disjoint closed sets of X\nhave disjoint open neighborhoods", href="https://en.wikipedia.org/wiki/Normal_space"]
  "normal space" -> "completely normal Hausdorff space" [label="completely normal T1 space", href="https://en.wikipedia.org/wiki/Normal_space"]
  "completely normal Hausdorff space" -> "perfectly normal Hausdorff space" [label="every two disjoint closed sets E and F\ncan be precisely separated by a continuous function f from X to the real line R", href="https://en.wikipedia.org/wiki/Normal_space"]

  "topological space" -> "metric space"
  "metric space" -> "complete metric space" [label="every Cauchy sequence in M converges in M", href="https://en.wikipedia.org/wiki/Complete_metric_space"]
  "Banach space" -> "Hilbert space" [href="https://en.wikipedia.org/wiki/Hilbert_space"]
  "metric space" -> "normed vector space"
  "vector space" -> "normed vector space"
  "normed vector space" -> "inner product space"
  "complete metric space" -> "Banach space" [label="complete in the metric induced by the norm", href="https://en.wikipedia.org/wiki/Banach_algebra"]
  "normed vector space" -> "Banach space" [label="complete in the metric induced by the norm", href="https://en.wikipedia.org/wiki/Banach_algebra"]
  "Hilbert space" -> "Sobolev space" [href="https://en.wikipedia.org/wiki/Hilbert_space"]
  "Hilbert space" -> "Hardy space" [href="https://en.wikipedia.org/wiki/Hilbert_space"]
  "vector space" -> "affine space"
  "affine space" -> "Euclidean space"
  "inner product space" -> "Euclidean space"

  "finitely generated module" [href="https://en.wikipedia.org/wiki/Finitely_generated_module"]
  "module" -> "finitely generated module" [href="https://en.wikipedia.org/wiki/Module_(mathematics)#Types_of_modules"]
  "cyclic module" [href="https://en.wikipedia.org/wiki/Cyclic_module"]
  "module" -> "cyclic module" [href="https://en.wikipedia.org/wiki/Module_(mathematics)#Types_of_modules"]
  "free module" [href="https://en.wikipedia.org/wiki/Free_module"]
  "projective module" -> "free module" [href="https://en.wikipedia.org/wiki/Projective_module"]
  "projective module" [href="https://en.wikipedia.org/wiki/Projective_module"]
  "module" -> "projective module" [label="edirect summands of free modules and share many of their desirable properties", href="https://en.wikipedia.org/wiki/Module_(mathematics)#Types_of_modules"]
  "injective module" [href="https://en.wikipedia.org/wiki/Injective_module"]
  "module" -> "injective module" [label="defined dually to projective modules", href="https://en.wikipedia.org/wiki/Module_(mathematics)#Types_of_modules"]
  "flat module" [href="https://en.wikipedia.org/wiki/Flat_module"]
  "module" -> "flat module" [label="if taking the tensor product of it with any exact sequence of R-modules preserves exactness", href="https://en.wikipedia.org/wiki/Module_(mathematics)#Types_of_modules"]
  "torsionless module" [href="https://en.wikipedia.org/wiki/Torsionless_module"]
  "module" -> "torsionless module" [label="it embeds into its algebraic dual", href="https://en.wikipedia.org/wiki/Module_(mathematics)#Types_of_modules"]
  "torsion-free module" [href="https://en.wikipedia.org/wiki/Torsion-free_module"]
  "module" -> "torsion-free module" [label="rm = 0 implies r = 0 or m = 0", href="https://en.wikipedia.org/wiki/Module_(mathematics)#Types_of_modules"]
  "simple module" [href="https://en.wikipedia.org/wiki/Simple_module"]
  "module" -> "simple module" [label="is not {0} and whose only submodules are {0} and S", href="https://en.wikipedia.org/wiki/Module_(mathematics)#Types_of_modules"]
  "semisimple module" [href="https://en.wikipedia.org/wiki/Semisimple_module"]
  "module" -> "semisimple module" [label="direct sum (finite or not) of simple modules", href="https://en.wikipedia.org/wiki/Module_(mathematics)#Types_of_modules"]
  "indecomposable module" [href="https://en.wikipedia.org/wiki/Indecomposable_module"]
  "module" -> "indecomposable module" [label="non-zero module that cannot be written as a direct sum of two non-zero submodules", href="https://en.wikipedia.org/wiki/Module_(mathematics)#Types_of_modules"]
  "faithful module" [href="https://en.wikipedia.org/wiki/Faithful_module"]
  "module" -> "faithful module" [label="action of each r ≠ 0 in R on M is nontrivial\n<-> annihilator of M is the zero ideal", href="https://en.wikipedia.org/wiki/Module_(mathematics)#Types_of_modules"]
  "noetherian module" [href="https://en.wikipedia.org/wiki/Noetherian_module"]
  "module" -> "noetherian module" [label="satisfies the ascending chain condition on submodules\n<-> every submodule is finitely generated", href="https://en.wikipedia.org/wiki/Module_(mathematics)#Types_of_modules"]
  "artinian module" [href="https://en.wikipedia.org/wiki/Artinian_module"]
  "module" -> "artinian module" [label="satisfies the descending chain condition on submodules", href="https://en.wikipedia.org/wiki/Module_(mathematics)#Types_of_modules"]
  "graded module" [href="https://en.wikipedia.org/wiki/Graded_module"]
  "module" -> "graded module" [label="with a decomposition as a direct sum M = ⨁x Mx over a graded ring R = ⨁x Rx\nsuch that RxMy ⊂ Mx+y for all x and y", href="https://en.wikipedia.org/wiki/Module_(mathematics)#Types_of_modules"]
  "uniform module" [href="https://en.wikipedia.org/wiki/Uniform_module"]
  "module" -> "uniform module" [label="all pairs of nonzero submodules have nonzero intersection", href="https://en.wikipedia.org/wiki/Module_(mathematics)#Types_of_modules"]
  "module" -> "ideal"
  "ideal" [href="https://en.wikipedia.org/wiki/Ideal_(ring_theory)"]
  "prime ideal" [href="https://en.wikipedia.org/wiki/Prime_ideal"]
  "ideal" -> "prime ideal" [href="https://en.wikipedia.org/wiki/Prime_ideal"]
  "maximal ideal" [href="https://en.wikipedia.org/wiki/Maximal_ideal"]
  "ideal" -> "maximal ideal" [label="I is a maximal ideal of a ring R if there are no other ideals contained between I and R", href="https://en.wikipedia.org/wiki/Maximal_ideal"]
  "principal ideal" [href="https://en.wikipedia.org/wiki/Principal_ideal"]
  "ideal" -> "principal ideal"
  "minimal ideal" [href="https://en.wikipedia.org/wiki/Minimal_ideal"]
  "ideal" -> "minimal ideal"
  "quotient ring" -> "ring / maximal ideal"
  "maximal ideal" -> "ring / maximal ideal"
  "ring / maximal ideal" -> "simple ring" [href="https://en.wikipedia.org/wiki/Maximal_ideal"]
  "principal ideal domain" -> "prime ideal x principal ideal domain"
  "prime ideal" -> "prime ideal x principal ideal domain"
  "prime ideal x principal ideal domain" -> "maximal ideal" [label="all nonzero prime ideals are maximal in a principal ideal domain", href="https://en.wikipedia.org/wiki/Maximal_ideal"]
  "ideal" -> "Jacobson radical" [label="consisting of those elements in R that annihilate all simple right R-modules", href="https://en.wikipedia.org/wiki/Jacobson_radical"]

  "scheme" [href="https://en.wikipedia.org/wiki/Scheme"]
  "scheme" -> "variety"
  "variety" [href="https://en.wikipedia.org/wiki/Algebraic_variety"]
  "variety" -> "abelian variety" [label="complete group variety", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "abelian variety" -> "C^n/Z^2n" [href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "abelian variety" -> "elliptic curve E over a finite field Fq [href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "abelian scheme" -> "abelian variety" [label="(flat) family of abelian varieties", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "variety" -> "affine variety" [label="in affine space", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "commutative ring" -> "affine scheme" [label="is the prime spectrum of some commutative ring", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "scheme" -> "affine scheme" [label="is the prime spectrum of some commutative ring", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "variety" -> "algebraic variety"
  "affine variety" -> "coordinate ring"
  "noetherian ring" -> "coordinate ring" [label="Hilbert basis theorem", href="https://en.wikipedia.org/wiki/Noetherian_ring#Examples"]
  "algebraic variety" -> "variety" [label="synonym with \"algebraic variety\"", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "algebraic group" [href="https://en.wikipedia.org/wiki/Algebraic_group"]
  "algebraic variety" -> "algebraic group" [href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "separated scheme" [href="https://planetmath.org/SeparatedScheme"]
  "scheme" -> "separated scheme"
  "separated scheme" -> "separated scheme of finite type"
  "separated scheme of finite type" -> "algebraic scheme" [label="over a field", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "algebraic scheme" -> "reduced irreducible algebraic scheme"
  "reduced irreducible algebraic scheme" -> "algebraic variety" [href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "separated scheme of finite type" -> "reduced separated scheme of finite type"
  "reduced separated scheme of finite type" -> "algebraic set" [label="over Spec(k)", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "irreducible algebraic set" -> "algebraic variety" [href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "scheme" -> "scheme / étale equivalence relation"
  "étale equivalence relation" -> "scheme / étale equivalence relation"
  "quotient scheme" -> "scheme / étale equivalence relation"
  "étale equivalence relation" [href="https://en.wikipedia.org/wiki/%C3%89tale_equivalence_relation"]
  "scheme / étale equivalence relation" -> "algebraic space"
  "separated scheme of finite type" -> "integral separated scheme of finite type"
  "integral separated scheme of finite type" -> "algebraic variety" [label="over Spec(k)", href="https://en.wikipedia.org/wiki/%C3%89tale_equivalence_relation"]
  "algebraic variety" -> "algebraic curve" [label="dimension one", href="https://en.wikipedia.org/wiki/Algebraic_curve"]
  "algebraic curve" -> "projective curve"
  "projective curve" -> "smooth projective curve"
  "smooth projective curve" -> "elliptic curve" [label="genus one", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "smooth projective variety" -> "Fano variety" [label="X whose anticanonical sheaf omega _{X}^{-1} is ample", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "variety" -> "flag variety" [label="parametrizes a flag of vector spaces", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]  
  "variety" -> "normal variety"
  "toric variety" [href="https://en.wikipedia.org/wiki/Toric_variety"]
  "normal variety" -> "toric variety" [label="with the action of a torus such that the torus has an open dense orbit", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "symmetric variety" [href="https://en.wikipedia.org/wiki/Symmetric_space"]
  "variety" -> "symmetric variety" [label="analog of a symmetric space", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "variety" -> "surface" [label="algebraic variety of dimension two", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "normal G-variety" -> "normal variety"
  "normal variety" -> "spherical variety" [label="(G connected reductive) with an open dense orbit by a Borel subgroup of G", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "smooth scheme" [href="https://en.wikipedia.org/wiki/Smooth_scheme"]
  "smooth scheme" -> "smooth scheme over a field k" [label="X that is geometrically smooth: X xk k^overline is smooth"]
  "smooth scheme" -> "smooth scheme over a perfect field k" [label="X that is of locally of finite type and regular over k", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "secant variety" [href="https://en.wikipedia.org/wiki/Secant_variety"]
  "variety" -> "secant variety" [label="to a projective variety V subvariety of P^r is the closure of the union of all secant lines to V in P^r", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "Schubert variety" [href="https://en.wikipedia.org/wiki/Schubert_variety"]
  "variety" -> "Schubert variety" [label="closure of a Schubert cell", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "ringed space" [href="https://en.wikipedia.org/wiki/Ringed_space"]
  "locally ringed space" [href="https://en.wikipedia.org/wiki/Ringed_space"]
  "commutative ring" -> "sheaf of rings"
  "sheaf of rings" -> "ringed space" [label="topological space X together with a sheaf of rings OX on X", href="https://en.wikipedia.org/wiki/Ringed_space"]
  "topological space" -> "ringed space"
  "ringed space" -> "locally ringed space" [label="analogy of a germ of a function is valid", href="https://en.wikipedia.org/wiki/Ringed_space"]
  "locally ringed space" -> "scheme" [label="locally a prime spectrum of a commutative ring", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "regular scheme" [href="https://en.wikipedia.org/wiki/Regular_scheme"]
  "reduced ring" [href="https://en.wikipedia.org/wiki/Reduced_ring"]
  "reduced ring" -> "local ring" [href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "regular local ring" [href="https://en.wikipedia.org/wiki/Regular_local_ring"]
  "local ring" -> "regular local ring"
  "scheme" -> "regular scheme" [label="scheme where the local rings are regular local rings", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "rational normal curve" [href="https://en.wikipedia.org/wiki/Rational_normal_curve"]
  "rational curve" [href="https://en.wikipedia.org/wiki/Algebraic_curve#Rational_curves"]
  "projective variety" -> "rational normal curve" [href="https://en.wikipedia.org/wiki/Rational_normal_curve"]
  "normal scheme" [href="https://en.wikipedia.org/wiki/Normal_scheme"]
  "group scheme" [href="https://en.wikipedia.org/wiki/Group_scheme"]
  "scheme" -> "group scheme" [label="whose sets of points have the structures of a group", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  algebraic group -> "group variety" [label="smooth", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "algebraic curve" -> "hyperelliptic curve" [label="there is a linear system of dimension 1 and degree 2", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "variety" -> "Jacobian variety" [label="of a projective curve X is the degree zero part of the Picard variety", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "scheme" -> "integral scheme" -> "normal scheme" [label="local rings are integrally closed domains", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "projective variety" [href="https://en.wikipedia.org/wiki/Projective_variety"]
  "variety" -> "projective variety" [label="closed subvariety of a projective space", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "projective scheme" [href="https://en.wikipedia.org/wiki/Projective_scheme"]
  "scheme" -> "projective scheme" [label="over a scheme S is an S-scheme that factors through some projective space P^N_S -> S as a closed subscheme", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "quasi-projective variety" [href="https://en.wikipedia.org/wiki/Quasi-projective_variety"]
  "variety" -> "quasi-projective variety" [label="locally closed subvariety of a projective space", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "quot scheme" [href="https://en.wikipedia.org/wiki/Quot_scheme"]
  "scheme" -> "quot scheme" [label="parametrizes quotients of locally free sheaves on a projective scheme", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "variety" -> "rational variety" [label="birational to a projective space", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]

  "differential ring" [href="https://en.wikipedia.org/wiki/Differential_algebra"]
  "ring" -> "differential ring"
  "ring" -> "module" [label="⋅ : R × M → M", href="https://en.wikipedia.org/wiki/Module_(mathematics)#Formal_definition"]
  "field" -> "vector space"

  <!-- https://rip94550.wordpress.com/2012/07/02/introduction-to-rings/ -->
  "ring" -> "ring with identity" [label="* identity"]

  "ring with identity" -> "division ring" [label="* group", href="http://abstract.ups.edu/aata/section-rings-definitions.html"]

  "division ring" -> "field" [label="* commutative", href="http://abstract.ups.edu/aata/section-rings-definitions.html"]
  "commutative ring" [href="https://en.wikipedia.org/wiki/Commutative_ring"]
  "commutative ring" -> "integers" [href="https://en.wikipedia.org/wiki/Commutative_ring#First_examples"]
  "ring" -> "commutative ring" [label="* commutative"]
  "endomorphism ring" [href="https://en.wikipedia.org/wiki/Endomorphism_ring"]
  "ring" -> "endomorphism ring" [label="ring formed by the endomorphisms of an object with additive structure", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "field" [href="https://en.wikipedia.org/wiki/Field_(mathematics)"]
  "differential field" [href="https://en.wikipedia.org/wiki/Differential_algebra"]
  "field" -> "differential field"
  "field" -> "complex numbers"
  "field" -> "real numbers"
  "field" -> "rational numbers"
  "filtered ring" [href="https://en.wikipedia.org/wiki/Filtered_ring"]
  "ring" -> "filtered ring" [label="with a filtration", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "finitely generated ring" [href="https://en.wikipedia.org/wiki/Finitely_generated_ring"]
  "ring" -> "finitely generated ring" [label="is finitely generated as Z-algebra", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "free ideal ring (fir)" [href="https://en.wikipedia.org/wiki/Free_ideal_ring"]
  "ring" -> "free ideal ring (fir)" [label="in which every right ideal is a free module of fixed rank", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "ring" -> "semifir" [label=" which every finitely generated right ideal is a free module of fixed rank", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "free ring" [href="https://en.wikipedia.org/wiki/Free_ring"]
  "ring" -> "free ring" [label="is a free algebra over the integers", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "graded ring" [href="https://en.wikipedia.org/wiki/Graded_ring"]
  "ring" -> "graded ring" [label="with a grading or a graduation", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "(left) hereditary" [href="https://en.wikipedia.org/wiki/Hereditary_ring"]
  "ring" -> "(left) hereditary" [label="left ideals are all projective modules", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "Jacobson ring" [href="https://en.wikipedia.org/wiki/Jacobson_ring"]
  "ring" -> "Jacobson ring" [label=" which each prime ideal is an intersection of primitive ideals", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "local ring" [href="https://en.wikipedia.org/wiki/Local_ring"]
  "ring" -> "local ring" [label="with a unique maximal left ideal", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "ring" -> "matrix ring" [label="elements are square matrices of fixed size with the entries in R", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "matrix ring" [href="https://en.wikipedia.org/wiki/Matrix_ring"]
  "ring" -> "ring of generic matrices" [label="consisting of square matrices with entries in formal variables", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "ring of generic matrices" [href="https://en.wikipedia.org/wiki/Ring_of_generic_matrices"]

  "ring" -> "monoid ring" [href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "monoid ring" [href="https://en.wikipedia.org/wiki/Monoid_ring"]
  "ring" -> "(left) perfect ring" [label="satisfying the descending chain condition on right principal ideals", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "(left) perfect ring" [href="https://en.wikipedia.org/wiki/Perfect_ring"]
  "(left) perfect ring" -> "artinian ring" [href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "polynomial ring" [href="https://en.wikipedia.org/wiki/Polynomial_ring"]
  "commutative ring" -> "polynomial ring" [label="consisting of all the polynomials in the specified variables with coefficients in R", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "ring" -> "nonzero ring"
  "prime ring" [href="https://en.wikipedia.org/wiki/Prime_ring"]
  "nonzero ring" -> "prime ring" [label="any two elements a and b of R with aRb = 0, we have either a = 0 or b = 0", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "simple algebra" -> "simple ring" [label="simple algebra over its center", href="https://en.wikipedia.org/wiki/Simple_ring"]
  "prime ring" -> "simple ring" [href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "prime ring" -> "domain" [href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "ring" -> "(left) primitive ring" [label="has a faithful simple left R-module", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "(left) primitive ring" [href="https://en.wikipedia.org/wiki/Primitive_ring"]
  "(left) primitive ring" -> "simple ring" [href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "principal ideal ring" [href="https://en.wikipedia.org/wiki/Principal_ideal_ring"]
  "ring" -> "principal ideal ring" [label="every ideal is principal", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "quasi-Frobenius ring" [href="https://en.wikipedia.org/wiki/Quasi-Frobenius_ring"]
  "artinian ring" -> "quasi-Frobenius ring" [href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "self-injective ring" [href="https://en.wikipedia.org/wiki/Self-injective_ring"]
  "self-injective ring" -> "quasi-Frobenius ring" [href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "quasi-Frobenius ring" -> "semisimple ring" [href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "quotient ring" [href="https://en.wikipedia.org/wiki/Quotient_ring"]
  "ring" -> "quotient ring" [href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "ring" -> "if the module R is an injective module" [href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "semiprimary ring" [href="https://en.wikipedia.org/wiki/Semiprimary_ring"]
  "ring" -> "semiprimary ring" [label="for the Jacobson radical J(R) of R, (1) R/J(R) is semisimple and (2) J(R) is a nilpotent ideal", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "semiprime ring" [href="https://en.wikipedia.org/wiki/Semiprime_ring"]
  "ring" -> "semiprime ring" [label="the only nilpotent ideal is the trivial ideal {0}", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "semiprimitive ring" [href="https://en.wikipedia.org/wiki/Semiprimitive_ring"]
  "ring" -> "semiprimitive ring" [label="whose Jacobson radical is zero", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "semiprimitive ring" -> "Von Neumann regular ring" [href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "semiprimitive ring" -> "primitive ring" [href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  <!-- quasi-Frobenius rings and local rings are usually not semiprimitive -->
  "artinian ring" -> "semisimple ring" [label="finite product of simple Artinian rings", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "module" -> "semisimple left R-module"
  "semisimple ring" [href="semisimple ring"]
  "artinian ring" -> "semisimple ring" [href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "semisimple left R-module" -> "semisimple ring" [href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "(right) serial ring" [href="https://en.wikipedia.org/wiki/Serial_ring"]
  "ring" -> "(right) serial ring" [label="right serial module over itself", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "simple ring" [href="https://en.wikipedia.org/wiki/Simple_ring"]
  "nonzero ring" -> "simple ring" [label="only has trivial two-sided ideals", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "Sylvester domain" [href="https://en.wikipedia.org/wiki/Sylvester_domain"]
  "ring" -> "Sylvester domain" [label="Sylvester's law of nullity holds", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "trivial ring" [href="https://en.wikipedia.org/wiki/Trivial_ring"]
  "ring" -> "trivial ring" [label="consisting of a single element 0 = 1", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "(right) uniserial ring" [href="https://en.wikipedia.org/wiki/Uniserial_ring"]
  "ring" -> "(right) uniserial ring" [label="right uniserial module over itself", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "(right) uniserial ring" -> "valuation ring" [label="* commutative", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "von Neumann regular ring" [href="https://en.wikipedia.org/wiki/Von_Neumann_regular_ring"]
  "ring" -> "von Neumann regular ring" [label="each element a can be expressed as a = axa for another element x in the ring", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  "von Neumann regular ring" -> "semisimple ring" [href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]

  "rng of square zero" [href="https://en.wikipedia.org/wiki/Rng_(algebra)#Rng_of_square_zero"]
  "rng" -> "rng of square zero" [label="xy = 0 for all x and y", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]

  "ring" -> "domain" [label="0 ≠ 1", href="https://math.stackexchange.com/questions/2361889/graphically-organizing-the-interrelationships-of-basic-algebraic-structures"]
  "domain" -> "integral domain" [label="* commutative", href="https://math.stackexchange.com/questions/2361889/graphically-organizing-the-interrelationships-of-basic-algebraic-structures"]
  "ring with identity" -> "integral domain"
  "commutative ring" -> "integral domain" [label="0 ≠ 1", href="https://math.stackexchange.com/questions/2361889/graphically-organizing-the-interrelationships-of-basic-algebraic-structures"]
  "Dedekind domain" [href="https://en.wikipedia.org/wiki/Dedekind_domain"]
  "noetherian ring" -> "Dedekind domain" [label="every ideal is generated by at most two elements", href="https://en.wikipedia.org/wiki/Noetherian_ring#Examples"]
  "integral domain" -> "Dedekind domain" [label="every nonzero proper ideal\nfactors into a product of prime ideals", href="https://en.wikipedia.org/wiki/Dedekind_domain"]
  "Dedekind domain" -> "integers" [href="https://en.wikipedia.org/wiki/Noetherian_ring#Examples"]

  "boolean ring" [href="https://en.wikipedia.org/wiki/Boolean_ring"]
  "commutative ring" -> "boolean ring" [label="* idempotent"]
  "commutative ring" -> "field" [label="0 ≠ 1", href="https://math.stackexchange.com/questions/2361889/graphically-organizing-the-interrelationships-of-basic-algebraic-structures"]

  "(left) coherent ring" [href="https://en.wikipedia.org/wiki/Coherent_ring"]
  "ring" -> "(left) coherent ring" [label="ring such that every finitely generated left ideal of it is a finitely presented module", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  <!-- https://rip94550.wordpress.com/2012/07/16/integral-domains-and-the-failure-of-unique-factorization/ -->
  "integral domain" -> "unique factorization domain" [label="every non-zero element x of R\ncan be written as a product (an empty product if x is a unit) of\nirreducible elements pi of R\nand a unit u", href="https://en.wikipedia.org/wiki/Unique_factorization_domain#Definition"]

  "Dedekind domain" -> "principal ideal domain" [label="every ideal is principal,\ni.e., can be generated by a single element", href="https://en.wikipedia.org/wiki/Dedekind_domain"]
  "integral domain" -> "integrally closed domain" [label="integral closure in its field of fractions\nis A itself", href="https://en.wikipedia.org/wiki/Integrally_closed_domain"]

  "integral domain" -> "GCD domain" [label="two elements have a greatest common divisor (GCD);\ni.e., there is a unique minimal principal ideal\ncontaining the ideal generated by two given elements", href="https://en.wikipedia.org/wiki/GCD_domain"]
  "integrally closed domain" -> "GCD domain" [href="https://en.wikipedia.org/wiki/Unique_factorization_domain"]
  "GCD domain" -> "unique factorization domain" [href="https://en.wikipedia.org/wiki/Unique_factorization_domain"]

  "unique factorization domain" -> "principal ideal domain"
  "ring" -> "noetherian ring" [label="satisfies the ascending chain condition\non left and right ideals", href="https://en.wikipedia.org/wiki/Noetherian_ring"]
  "noetherian ring" [href="https://en.wikipedia.org/wiki/Noetherian_ring"]
  "noetherian ring" -> "artinian ring" [label="ring satisfying the descending chain condition for left ideals", href="https://en.wikipedia.org/wiki/Glossary_of_ring_theory#:~:text=Ring%20theory%20is%20the%20branch,see%20glossary%20of%20commutative%20algebra."]
  <!-- "ring" -> "uniserial ring" [label="", href=""] -->
  "artinian ring" [href="https://en.wikipedia.org/wiki/Artinian_ring"]

  "integral domain" -> "euclidean domain" [label="integral domain\nthat can be endowed with a Euclidean function\nwhich allows a suitable generalization of the Euclidean division of the integers", href="https://en.wikipedia.org/wiki/Euclidean_domain"]
  "principal ideal domain" -> "euclidean domain"
  "euclidean domain" -> "field"
  "euclidean domain" -> "Z" [href="https://en.wikipedia.org/wiki/Polynomial_ring#Properties_of_K[X]"]
  "euclidean domain" -> "K[X]" [href="https://en.wikipedia.org/wiki/Polynomial_ring#Properties_of_K[X]"]

  "integral domain" -> "field" [label="* commutative group", href="https://math.stackexchange.com/questions/2361889/graphically-organizing-the-interrelationships-of-basic-algebraic-structures"]
  "domain" -> "finite field" [label="finite"]
  "field" -> "finite field" [label="finite", href="https://math.stackexchange.com/questions/2361889/graphically-organizing-the-interrelationships-of-basic-algebraic-structures"]

  "algebra over a ring" [href="https://en.wikipedia.org/wiki/Algebra_over_a_field#Generalization:_algebra_over_a_ring"]
  "algebra over a field" [href="https://en.wikipedia.org/wiki/Algebra_over_a_field"]
  "algebra over a field" -> "associative algebra"
  "associative algebra" -> "algebra over a field"
  "algebra over a ring" -> "algebra over a field" [href="https://en.wikipedia.org/wiki/Algebra_over_a_field#Generalization:_algebra_over_a_ring"]
  "associative algebra" [href="https://en.wikipedia.org/wiki/Associative_algebra"]
  "associative algebra" -> "commutative algebra" [label="* commutative", href="https://en.wikipedia.org/wiki/Associative_algebra"]
  "associative algebra" -> "unital associative algebras" [label="have a multiplicative identity", href="https://en.wikipedia.org/wiki/Associative_algebra"]
  "associative algebra" -> "Z-algebra"
  "Z-algebra" -> "ring" [href="https://en.wikipedia.org/wiki/Associative_algebra"]
  "ring" -> "ring of characteristic n"
  "associative algebra" -> "(Z/nZ)-algebra"
  "(Z/nZ)-algebra" -> "ring of characteristic n" [href="https://en.wikipedia.org/wiki/Associative_algebra#Algebra"]
  "associative algebra" -> "commutative R-algebra"
  "commutative R-algebra" -> "polynomial ring" [href="https://en.wikipedia.org/wiki/Associative_algebra#Algebra"]
  "Banach algebra" [href="https://en.wikipedia.org/wiki/Banach_algebra"]
  "associative algebra" -> "Banach algebra" [label="over the real or complex numbers (or over a non-Archimedean complete normed field) that at the same time is also a Banach space", href="https://en.wikipedia.org/wiki/Banach_algebra"]
  "C*-algebra" [href="https://en.wikipedia.org/wiki/C*-algebra"]
  "Banach algebra" -> "C*-algebra" [label="with an involution satisfying the properties of the adjoint", href="https://en.wikipedia.org/wiki/C*-algebra"]
  "Banach algebra" -> "real numbers" [label="norm given by the absolute value", href="https://en.wikipedia.org/wiki/Banach_algebra#Examples"]
  "Banach algebra" -> "complex numbers" [label="norm given by the absolute value", href="https://en.wikipedia.org/wiki/Banach_algebra#Examples"]
  "differential algebra" [href="https://en.wikipedia.org/wiki/Differential_algebra"]
  "associative algebra" -> "differential algebra"
  "simple algebra" [href="https://en.wikipedia.org/wiki/Simple_ring#Simple_algebra"]
  "associative algebra" -> "simple algebra" [label="contains no non-trivial two-sided ideals\nand the multiplication operation is not zero", href="https://en.wikipedia.org/wiki/Simple_ring#Simple_algebra"]
  "division algebra" [href="https://en.wikipedia.org/wiki/Division_algebra"]
  "simple algebra" -> "division algebra" [label="division, except by zero, is always possible", href="https://en.wikipedia.org/wiki/Division_algebra"]

  "octonion" [href="https://en.wikipedia.org/wiki/Octonion"]
  "quaternion" [href="https://en.wikipedia.org/wiki/Quaternion"]
  "complex numbers" [href="https://en.wikipedia.org/wiki/Complex_number"]
  "real numbers" [href="https://en.wikipedia.org/wiki/Real_number"]
  "rational numbers" [href="https://en.wikipedia.org/wiki/Rational_number"]
  "integers" [href="https://en.wikipedia.org/wiki/Integer"]
  "prime numbers" [href="https://en.wikipedia.org/wiki/Prime_number"]
  "natural numbers" [href="https://en.wikipedia.org/wiki/Natural_number"]
  "octonion" -> "quaternion"
  "quaternion" -> "complex numbers"
  "complex numbers" -> "real numbers"
  "real numbers" -> "rational numbers"
  "rational numbers" -> "integers"
  "integers" -> "natural numbers"
  "natural numbers" -> "prime numbers"

  "topological space" [href="https://en.wikipedia.org/wiki/Topological_space"]
  "set" -> "topological space" [label="of points,\nalong with a set of neighbourhoods for each point,\nsatisfying a set of axioms relating points and neighbourhoods", href="https://en.wikipedia.org/wiki/Topological_space"]

  <!-- tool for systematically tracking locally defined data attached to the open sets of a topological space -->
  "sheaf" [href="https://en.wikipedia.org/wiki/Sheaf_(mathematics)"]
  "sheaf" -> "sheaf of rings"
  "sheaf" -> "quasi-coherent sheaf"
  "reflexive sheaf" [href="https://en.wikipedia.org/wiki/Reflexive_sheaf"]
  "quasi-coherent sheaf" -> "coherent sheaf" [label="finitely generated as OX-module", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
  "coherent sheaf" -> "reflexive sheaf" [label="canonical map to the second dual is an isomorphism", href="https://en.wikipedia.org/wiki/Glossary_of_algebraic_geometry"]
}
```

https://math.stackexchange.com/questions/2361889/graphically-organizing-the-interrelationships-of-basic-algebraic-structures