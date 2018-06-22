import { Icon } from '../../../components/demo/elements';
import { Container, Column, Row } from '../../../components/demo/blocks/Grid';

## Icon Element Specs

---

### Element Type

`styled(FontAwesome)`

### Default Styles

```
color: textLight;
display: inline-block;
font-size: medium;
```

### Modifiers

* colors - status
* font sizes

### Example

<Container>
  <Row>
    <Column>
      <Icon name="info-circle" modifiers={['statusColorInfo']} />
    </Column>
    <Column>
      <Icon name="check-circle" modifiers={['statusColorSuccess']} />
    </Column>
    <Column>
      <Icon name="exclamation-circle" modifiers={['statusColorWarning']} />
    </Column>
    <Column>
      <Icon name="times-circle" modifiers={['statusColorDanger']} />
    </Column>
    <Column>
      <Icon name="times" />
    </Column>
  </Row>
</Container>

### API

```
<Icon name="info-circle" modifiers={['statusColorInfo']} />
<Icon name="check-circle" modifiers={['statusColorSuccess']} />
<Icon name="exclamation-circle" modifiers={['statusColorWarning']} />
<Icon name="times-circle" modifiers={['statusColorDanger']} />
<Icon name="times" />
```
---
