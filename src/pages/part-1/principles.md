import Header from './Header.md';
<Header />

### Principles & Considerations

There are several principles that will guide our development process. These are roughly based on lessons our team has learned over the course of developing our component library. But keep in mind that your library may follow different guidelines and have different priorities (and that's great).

_Your library not only needs to fit the context of your application but also your team._

In [Design Systems](https://www.smashingmagazine.com/design-systems-book/), [Alla Kholmatova](https://twitter.com/craftui) talks about the parameters of a design system, which I think can be applied to component libraries. The spectrums presented below are from her book.

**RULES**

Strict ◉ ・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・ ◉ Loose

**PARTS**

Modular ◉ ・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・ ◉ Integrated

**ORGANIZATION**

Centralized ◉ ・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・ ◉ Decentralized

Where your team (and applications) fall along these lines will affect how you build your library. There's no right or wrong here, only tradeoffs.

And perhaps where your team is at, _it doesn't make sense_ to build a component library yet.

### Our Guidelines

Here's a rough outline of our library's guiding principles:

* bake in consistency
* remove opportunities for mistakes
* make the right choices easy

### Our BEM-Inspired Structure

When our team first started using styled-components, we found that while it prevented style collisions and helped with consistency, we had a lot of duplicated and one-off components. This left us with inconsistent colors, askew spacing, and unmanageable typography. Our styles were colocated with our components, _but it wasn't actually making our team more productive._

To address these issues, we decided to adopt a BEM-inspired structure. The Block, Element, Modifier structure has been a really effective pattern for our team, and it's what we'll be using today.

Here's a rough outline of our structure:

* Compositions: responsible for handling application data and logic
* Components: responsible for UI logic (but not styling)
* Blocks: responsible for styling themselves and their child elements (logic-less)
* Elements: responsible for styling themselves (logic-less)
* Modifiers: responsible for modifying Block and Element styles
* Foundations: responsible for providing styles for similar components (not intended for exporting)

For this workshop, we'll focus on Components, Blocks, Elements, and Modifiers. Below is a detailed description of Blocks, Elements, and Modifiers using a Card component as an example. This is pulled from [my article here](https://tech.decisiv.com/structuring-our-styled-components-part-i-2bf21fa64b28)

#### Blocks

Blocks are the highest level of abstraction in the Blocks, Elements, and Modifiers concept. They are responsible for providing the context for Elements, rendering Elements, and handling UI logic. They are not connected to application state, nor do they handle any business logic.

##### File Structure

```
├ src/
├── blocks/
| ├── Card/
| | ├── Header.js
| | ├── Image.js
| | ├── Text.js
| | ├── Title.js
| | └── index.js // <- Block
```

#### Elements

Elements are the smallest, indivisible parts of our UI. They are not responsible for application logic or UI logic, but they do handle their own Modifiers, which modify the Element’s style. While they generally exist within the context of a Block, they are not exclusively bound to them. At times an Element will stand alone. An example of a stand-alone Element would be an `A`, `Link`, `H3`, or `P`. These are universally applicable throughout our application and are not bound to a Block’s context.

##### File Structure

```
├ src/
├── blocks/
| ├── Card/
| | ├── Header.js // <- Element
| | ├── Image.js  // <- Element
| | ├── Text.js   // <- Element
| | ├── Title.js  // <- Element
| | └── index.js  // <- Block
├── elements/
| ├── A.js        // <- Element
| ├── H3.js       // <- Element
| ├── Link.js     // <- Element
| ├── P.js // <- Element
```

#### Modifiers

Modifiers are small functions that allow us to alter the CSS properties of Elements. They live in the Element file and are solely responsible for modifying styles. They are not concerned with UI logic. We have an internal lib, `styled-components-modifiers`, to help us predictably modify component styles. We open-sourced this a while back, and you can find it [here](https://github.com/Decisiv/styled-components-modifiers).

##### An Example

```js
const modifierConfig = {
  darkGreyText: ({ theme }) => `
    color: ${theme.colors.base.text};
  `,

  midGreyText: ({ theme }) => `
    color: ${theme.colors.base.textLight};
  `,

  uppercase: () => `
    text-transform: uppercase;
  `,
};
```
