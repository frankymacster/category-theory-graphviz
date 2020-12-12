https://en.wikipedia.org/wiki/Sheaf_(mathematics)#Sheaves
For simplicity,
 consider first the case
  where the sheaf takes values in the category of sets.
   In fact,
    this definition applies more generally to the situation
     where the category is a concrete category
      whose underlying set [functor](functor.md) is conservative,
       meaning that
        if the underlying map of sets is a bijection,
         then the original morphism is an isomorphism
          A sheaf is a [presheaf](presheaf.md)
           with values in the [category](category.md) of sets
            that satisfies the following two axioms:
             (Locality)
              If (Ui) is an open [covering](cover.md) of an open set U,
               and if s, t ∈ F(U) are such that s|Ui = t|Ui for each set Ui of the covering,
                then s = t;
               and
             (Gluing)
              If (Ui) is an open covering of an open set U,
               and if for each i a section si ∈ F(Ui) is given
                such that for each pair Ui, Uj of the covering sets
                 the restrictions of si and sj agree on the overlaps:
                  si|Ui∩Uj = sj|Ui∩Uj,
                   then there is a section s ∈ F(U)
                    such that s|Ui = si for each i.