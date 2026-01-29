---
title: "Design Principles"
eleventyNavigation:
  key: "Design Principles"
  order: 1
---

Guidelines are not hardset rules but directions on which tracks mainteners can do their best to put this software on, knowing there gonna be exceptions.

## Keep it simple and consistent

Servers administration is a complexe subject, with potentially stressful outcomes. Having a graphical user interface is gonna be able to help even more the less tech savy people.

Consistency is one of the ways to limite the cognitive load needed to understand the a software.

It's a way to limit a codebase's complexity by having a set of elements and standardized ways to compose interfaces and user workflow with them.\
It's however still needs to be noted, it's better to prioritize *user* experience over *developer* experience.

- Decide what informations are the more important and don't display necessarily all the data at once. You can use components like [popovers](/containers/popovers) to disclose additional informations only if necessary.
- Limit the number of options in choices or controls lists and always offer a default one
- Keep labels, messages as short as possible

## Limit frictions

- Add confirmation patterns (modal or checkboxes unchecked by default) before applying destrutive operations
- Automate error correction if possible to make it transparent to users
- Make error messages link to elements its related to (visually and semantically)

## Use the platform

Make the use of the tools, elements and APIs made available by the web browsers if possible instead of reimplment custom components.
- Priorize the [basic form elements](/controls/form-elements) after other custom ones.
- Write semantic HTML (for example the [popovers](/controls/popovers) and [dialogs](/feedbacks/dialog) elements use the eponym HTML components)
