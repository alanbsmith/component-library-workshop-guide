import InlineEditable from '../../../components/demo/components/InlineEditable';
import { Container, Column, Row } from '../../../components/demo/blocks/Grid';

## InlineEditable Component Specs

---

### Props

* id - string (required)
* onBlur - function
* onChange - function
* value - string


### Example
<Container>
  <Row>
    <Column flex="2">
      <InlineEditable id="email" value="tracy.triceratops@gmail.com">
        <InlineEditable.Label>Email</InlineEditable.Label>
        <InlineEditable.TextField />
      </InlineEditable>
    </Column>
    <Column flex="1">
      <InlineEditable id="phone-number">
        <InlineEditable.Label>Phone</InlineEditable.Label>
        <InlineEditable.TextField />
      </InlineEditable>
    </Column>
  </Row>
</Container>

### API

```
<Container>
  <Row>
    <Column flex="2">
      <InlineEditable id="email" value="tracy.triceratops@gmail.com">
        <InlineEditable.Label>Email</InlineEditable.Label>
        <InlineEditable.TextField />
      </InlineEditable>
    </Column>
    <Column flex="1">
      <InlineEditable id="phone-number" isValid={false}>
        <InlineEditable.Label>Phone</InlineEditable.Label>
        <InlineEditable.TextField />
      </InlineEditable>
    </Column>
  </Row>
</Container>
```
---
