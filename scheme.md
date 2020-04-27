https://en.wikipedia.org/wiki/Scheme_(mathematics)#Definition
An affine scheme
 is a locally ringed space
  isomorphic to the spectrum Spec(R) of a commutative ring R.
   A scheme is a locally ringed space X
    admitting a covering by open sets Ui,
     such that each Ui (as a locally ringed space) is an affine scheme.
      In particular,
       X comes with a sheaf OX,
        which assigns to every open subset U a commutative ring OX(U)
         called the ring of regular functions on U.
          One can think of a scheme
           as being covered by "coordinate charts" which are affine schemes.
            The definition means exactly
             that schemes are obtained by gluing together affine schemes
              using the Zariski topology.


https://www.dropbox.com/home/Documents/Books/Science/Mathematics/Geometry/Algebraic?preview=Robin+Hartshorne+-+Algebraic+Geometry.pdf#page=87
```graphviz
digraph G {
  compound="true"
  "scheme" -> "variety" [label="instance"]

  subgraph clusterAffineScheme {
    label="affine scheme"
    "ring A" -> "a" [label="A.ideal"]

    "U" -> "O(U) = {s: U -> ⨆(p in U, A_p), s(p) in A_p, s locally a quotient of elements of A}"

      subgraph clusterSpectrum {
        label="spectrum of A"

          "V(a) = {all prime ideals which contain a}"
         subgraph clusterRingedSpace {
           label="ringed space"

          "topological space" -> "U" [label="open set"]

         subgraph clusterSheafOrRings {
           label="sheaf of rings O"
           "O(U) = {s: U -> ⨆(p in U, A_p), s(p) in A_p, s locally a quotient of elements of A}"
         }
         }
      }

    "p" -> "O(U) = {s: U -> ⨆(p in U, A_p), s(p) in A_p, s locally a quotient of elements of A}"
    "A_p" -> "O(U) = {s: U -> ⨆(p in U, A_p), s(p) in A_p, s locally a quotient of elements of A}"

    "ring A" -> "topological space" [lhead="clusterSpectrum", label=""]

    "ring A" -> "p" [label="forall prime ideal"]
    "ring A" -> "A_p" [label="localization of A at p"]

    "a" -> "V(a) = {all prime ideals which contain a}"

    "V(a) = {all prime ideals which contain a}" -> "topological space" [label="closed subset"]
  }

  "scheme" -> "ring A" [lhead="clusterAffineScheme", label="locally looks like"]
}
```

Second version (following lambda calculus)

```graphviz
digraph G {
  compound="true"

  "Ring" -> "A"

  "A" -> "a" [label="ideal"]
  "A" -> "p" [label="prime ideal"]
  "A" -> "A_p" [label="localization of A at p"]

  "Sheaf of rings"
  "Topological space"
  "Locally ringed space"

  subgraph clusterSpecA {
    label="Spec A"

    "SpecAp" [label="p"]
    "V(a)" -> "SpecAX" [label="topologicalSpace(closedSubsets = V(a))"]
    "SpecAX" [label="X"]
    "SpecAA_p" [label="A_p"]
    "X x OX" [label="", shape="point"]
    "p x A_p" [label="", shape="point"]
    "SpecAoutput" [label="output"]

    "SpecAp" -> "p x A_p"
    "SpecAA_p" -> "p x A_p"
    "p x A_p" -> "OX" [label="sheaf of rings"]

    "OX" -> "X x OX"
    "SpecAX" -> "X x OX"
    "X x OX" -> "SpecAoutput" [label="locallyRingedSpace"]

    "SpecAX" -> "p x A_p"
  }

  "A_p" -> "SpecAA_p"
  "p" -> "SpecAp"
  "a" -> "V(a)"

  subgraph clusterLocallyRingedSpace {
    label="locally ringed space"

    "topologicalSpace" [label="X"]
    "sheafOfRings" [label="OX"]
    "locallyRingedSpaceoutput" [label="output"]
    "topologicalSpacexsheafOfRings" [label="", shape="point"]

    "topologicalSpace" -> "topologicalSpacexsheafOfRings"
    "sheafOfRings" -> "topologicalSpacexsheafOfRings"
    "topologicalSpacexsheafOfRings" -> "locallyRingedSpaceoutput"
  }

  "Sheaf of rings" -> "sheafOfRings"
  "Topological space" -> "topologicalSpace"

  subgraph clusterSheafOfRings {
    label="sheaf of rings"

    "sheafOfRingsU" [label="U"]
    "sheafOfRingsp" [label="p"]
    "sheafOfRingsA_p" [label="A_p"]
    "sheafOfRingsproduct" [label="", shape="point"]

    "sheafOfRingsp" -> "sheafOfRingsproduct"
    "sheafOfRingsA_p" -> "sheafOfRingsproduct"
    "sheafOfRingsU" -> "sheafOfRingsproduct"

    "sheafOfRingsproduct" -> "O(U) = {s: U -> ⨆(p in U, A_p), s(p) in A_p, s locally a quotient of elements of A}"

    "O(U) = {s: U -> ⨆(p in U, A_p), s(p) in A_p, s locally a quotient of elements of A}"
  }

  "A_p" -> "sheafOfRingsA_p"
  "p" -> "sheafOfRingsp"
  "Topological space" -> "sheafOfRingsU"

  subgraph clusterAffineScheme {
    label="affine scheme"

    "affineScheme(X, OX)" [label="(X, OX)"]
    "affineSchemeSpec A x (X, OX)" [label="", shape="point"]
    "affineSchemeoutput" [label="output"]
    "affineSchemeSpecA" [label="Spec A"]

    "affineSchemeSpecA" -> "affineSchemeSpec A x (X, OX)"
    "affineScheme(X, OX)" -> "affineSchemeSpec A x (X, OX)"
 

    "affineScheme(X, OX)" -> "affineSchemeoutput"

    "affineSchemeSpec A x (X, OX)" -> "TRUE" [label="isIsomorphic"]
  }

  "Locally ringed space" -> "affineScheme(X, OX)"
  "Spec A" -> "affineSchemeSpecA"

  subgraph clusterScheme {
    label="scheme"

    "schemeOX" [label="OX"]
    "schemeoutput" [label="output"]
    "schemeOXxU" [label="", shape="point"]
    "U x (U, OX|U)" [label="", shape="point"]

    "(X, OX)" -> "point" [label="getPoint"]
    "(X, OX)" -> "schemeOX" [label="getSheafOfRings"]
    "point" -> "U" [label="getNeighborhood"]

    "schemeOX" -> "schemeOXxU"
    "U" -> "schemeOXxU"
    
    "schemeOXxU" -> "OX|U" [label="restrict(OX, U)"]

    "U" -> "U x (U, OX|U)"
    "OX|U" -> "U x (U, OX|U)"
    "U x (U, OX|U)" -> "(U, OX|U)" [label="affineScheme"]
    "(X, OX)" -> "schemeoutput"
  }

  "Locally ringed space" -> "(X, OX)"
}
```