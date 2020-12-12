https://en.wikipedia.org/wiki/Outline_of_category_theory


https://en.wikipedia.org/wiki/Category_theory#Historical_notes
Eilenberg and Mac Lane later wrote that their goal was to understand natural transformations. That required defining functors, which required categories.

https://en.wikipedia.org/wiki/Category_theory#Historical_notes
Certain categories called topoi (singular topos) can even serve as an alternative to axiomatic set theory as a foundation of mathematics

category
functor: arrow between categories
https://ncatlab.org/nlab/show/full+subcategory
  some objects but all the morphisms between these objects
    This means at least that ι is a fully faithful functor

more general to more specific following the laws the categories abide
TODO
  how to describe a Category being composed of a Category -> use product?
  how to describe a Category being an instance of other categories
  how to describe an object that is a subobject from a different category? (e.g. ideal is subset of ring (not subring))


the arrows between "categories" here are inheritance arrows that can be seen as a functor from category to subcategory (there may be other arrows to represent non inheritent relations)
the arrows between objects in the categories are morphisms
an object is an instance of a category: the category is represented by a cluster and the object is a node in it or subcluster
  a node in the object subcluster is an element

// at top-level, category, functor, natural transformation, (binary relation -> order, function, (equivalence relation -> quotient object), binary operation -> algebraic structure), (collection of objects -> topology)

https://math.stackexchange.com/questions/2361889/graphically-organizing-the-interrelationships-of-basic-algebraic-structures


graphviz
https://www.graphviz.org/doc/info/attrs.html

Open in Chrome:

file:///Users/fss/Dropbox/Documents/category-theory-graphviz/algebraic-structure.svg

to make svg from dot file
```
dot -Tsvg algebraic-structure.dot > algebraic-structure.svg
```

once svg generated add highlights inside `<svg>`
https://gist.github.com/sverweij/93e324f67310f66a8f5da5c2abe94682?short_path=1afa5af
```html
  <style>
      /* the lines within the edges */
      .edge:active path,
      .edge:hover path {
        stroke: fuchsia;
        stroke-width: 3;
        stroke-opacity: 1;
      }
      /* arrows are typically drawn with a polygon */
      .edge:active polygon,
      .edge:hover polygon {
        stroke: fuchsia;
        stroke-width: 3;
        fill: fuchsia;
        stroke-opacity: 1;
        fill-opacity: 1;
      }
      /* If you happen to have text and want to color that as well... */
      .edge:active text,
      .edge:hover text {
        fill: fuchsia;
      }
  </style>
```

# REFERENCES

## class field theory
http://www-math.mit.edu/~poonen/papers/cft.pdf