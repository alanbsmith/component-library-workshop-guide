import { Text } from '../../../components/demo/elements';
import { Container, Column, Row } from '../../../components/demo/blocks/Grid';

## Text Element Specs

---

### Element Type

`span`

### Default Styles

```
display: inline-block;
font-size: medium;
line-height: 1.2em;
```

### Modifiers

* colors - text, status
* font sizes
* font weights

### Example

<Container>
  <h4>Font Weights</h4>
  <Text modifiers={['light']}>The longest dinosaur was Argentinosaurus, which measured over 40 metres, as long as four fire engines.</Text>
  <Text modifiers={['normal']}>The longest dinosaur was Argentinosaurus, which measured over 40 metres, as long as four fire engines.</Text>
  <Text modifiers={['semiBold']}>The longest dinosaur was Argentinosaurus, which measured over 40 metres, as long as four fire engines.</Text>
  <Text modifiers={['bold']}>The longest dinosaur was Argentinosaurus, which measured over 40 metres, as long as four fire engines.</Text>

  <h4>Font Sizes</h4>
  <Text modifiers={['extraSmall']}>The longest dinosaur was Argentinosaurus, which measured over 40 metres, as long as four fire engines.</Text>
  <Text modifiers={['small']}>The longest dinosaur was Argentinosaurus, which measured over 40 metres, as long as four fire engines.</Text>
  <Text modifiers={['medium']}>The longest dinosaur was Argentinosaurus, which measured over 40 metres, as long as four fire engines.</Text>
  <Text modifiers={['large']}>The longest dinosaur was Argentinosaurus, which measured over 40 metres, as long as four fire engines.</Text>

  <h4>Font Colors</h4>
  <Text modifiers={['statusColorDanger']}>The longest dinosaur was Argentinosaurus, which measured over 40 metres, as long as four fire engines.</Text>
  <Text modifiers={['statusColorDefault']}>The longest dinosaur was Argentinosaurus, which measured over 40 metres, as long as four fire engines.</Text>
  <Text modifiers={['statusColorInfo']}>The longest dinosaur was Argentinosaurus, which measured over 40 metres, as long as four fire engines.</Text>
  <Text modifiers={['statusColorSuccess']}>The longest dinosaur was Argentinosaurus, which measured over 40 metres, as long as four fire engines.</Text>
  <Text modifiers={['statusColorWarning']}>The longest dinosaur was Argentinosaurus, which measured over 40 metres, as long as four fire engines.</Text>
  <Text modifiers={['text']}>The longest dinosaur was Argentinosaurus, which measured over 40 metres, as long as four fire engines.</Text>
  <Text modifiers={['textLight']}>The longest dinosaur was Argentinosaurus, which measured over 40 metres, as long as four fire engines.</Text>
</Container>

### API

```
  <Text modifiers={['light']}>example text</Text>
  <Text modifiers={['normal']}>example text</Text>
  <Text modifiers={['semiBold']}>example text</Text>
  <Text modifiers={['bold']}>example text</Text>

  <Text modifiers={['extraSmall']}>example text</Text>
  <Text modifiers={['small']}>example text</Text>
  <Text modifiers={['medium']}>example text</Text>
  <Text modifiers={['large']}>example text</Text>

  <Text modifiers={['statusColorDanger']}>example text</Text>
  <Text modifiers={['statusColorDefault']}>example text</Text>
  <Text modifiers={['statusColorInfo']}>example text</Text>
  <Text modifiers={['statusColorSuccess']}>example text</Text>
  <Text modifiers={['statusColorWarning']}>example text</Text>
  <Text modifiers={['text']}>example text</Text>
  <Text modifiers={['textLight']}>example text</Text>
```
---
