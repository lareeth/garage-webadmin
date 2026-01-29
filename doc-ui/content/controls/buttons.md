---
title: "Buttons"
eleventyNavigation:
  key: "Buttons"
  parent: "Controls"
  order: 1
---

Well, buttons, probably heard of it right?! Actionable elements actioning other things, one of the basics in the user interfaces world

- Keep labels short
- Label should be in [Title Case](https://en.wikipedia.org/wiki/Title_case)
- Can't contains more than one icon
- Don't use different sizes when buttons are next to eachothers
- Disabled buttons should always have explanation about their state next to them
- Icon only buttons should be avoided and should still have a semantic label

{% demo "/demos/example.vue" %}

## Destructive action button

- Should trigger a [confirm dialog](/feedbacks/confirm-dialogs/) before performing its action

{% demo "/demos/example.vue" %}
