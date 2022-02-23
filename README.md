# Indesign-Find-Change-Extended-Opentype-Features
Indesign Find/Change Extended Opentype Features

This is script to find and change characters with opentype features that isn't in the Indesign UI.
This script only change the specific selected font, style, and character selected.
You can apply any registered opentype feature and the 2 exclusives for Indesign (Overlap Swash and Streched Alternate).
Remember this is Find and change and there are some escape characters "(. $ ? ^ * ( ) [] { } + |)".
To find and change the opentype features from this characters You need to put them between brackets or use the unicode value.
Ex.: "$" --> \x{0024}
Thare are some opentype features like "Character Variants", "Ornaments", ans "Stylistic Alternate" that have more them 1 variant in the same character.
You get them changing the number of the variant.
