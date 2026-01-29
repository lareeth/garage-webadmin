---
title: "Typography"
eleventyNavigation:
  key: "Typography"
  parent: "Primitives"
  order: 1
---

As one of the basic elements of the interface, using the default styles, size and colors help bring informations effectively and contribute at making a feeling of quality for the app.

- Avoid write all capitalized text as it can be harder to read and be considered as accronyms by assistive technologies
- Avoid abbreviations as it can non understand by non english-native users. And don't use `<abbr>` elements as it's [poorly accessible](https://adrianroselli.com/2024/01/using-abbr-element-with-title-attribute.html).
- Don't vary font weight depending of an actionable element's state (hover or focus) as it can produce unwanted text wrap and potentially even layout shift


---

## Examples

# Title Display
# Title 1
## Title 2
### Title 3

<p class="text-large">Text large</p>
<p>Text body size</p>
<p class="text-small">Text small</p>
<p class="text-tiny">Text tiny</p>
