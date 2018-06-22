import InlineField from '../../../components/demo/blocks/InlineField';
import { Container, Column, Row } from '../../../components/demo/blocks/Grid';

## InlineField Block Specs

---

### Block Type

`Container.extend`

### Default Styles

```
border: solid 1px chrome100;
flex: 1;
padding: 12px;
transition: all 200ms ease;

&:hover {
  border-color: chrome300;
}

```

### Modifiers

* hoverDanger
* hoverInfo
* hoverSuccess
* hoverWarning

### Example

<InlineField>
  <Row>
    <Column flex="1">
      <InlineField.Label htmlFor="email">Email</InlineField.Label>
    </Column>
  </Row>
  <Row>
    <Column flex="1" position="relative">
      <InlineField.TextField
        id="email"
        type="text"
        placeholder="update your email address"
      />
    </Column>
    <Column>
      <InlineField.ActionButton modifiers={['hoverSuccess']}>
        <InlineField.ActionButton.Icon name="check" aria-label="example save input" />
      </InlineField.ActionButton>
    </Column>
    <Column>
      <InlineField.ActionButton modifiers={['hoverDanger']}>
        <InlineField.ActionButton.Icon name="times" />
      </InlineField.ActionButton>
    </Column>
  </Row>
  <InlineField.StatusMessage modifiers={['statusColorWarning']}>
    <InlineField.StatusMessage.Icon name="exclamation-circle" aria-label="example reset input" />
    <InlineField.StatusMessage.Text>
      Input is invalid
    </InlineField.StatusMessage.Text>
  </InlineField.StatusMessage>
</InlineField>

### API

```
<InlineField>
  <Row>
    <Column flex="1">
      <InlineField.Label htmlFor="email">Email</InlineField.Label>
    </Column>
  </Row>
  <Row>
    <Column flex="1" position="relative">
      <InlineField.TextField
        id="email"
        type="text"
        placeholder="update your email address"
      />
    </Column>
    <Column>
      <InlineField.ActionButton modifiers={['hoverSuccess']}>
        <InlineField.ActionButton.Icon name="check" aria-label="example save input" />
      </InlineField.ActionButton>
    </Column>
    <Column>
      <InlineField.ActionButton modifiers={['hoverDanger']}>
        <InlineField.ActionButton.Icon name="times" />
      </InlineField.ActionButton>
    </Column>
  </Row>
  <InlineField.StatusMessage modifiers={['statusColorWarning']}>
    <InlineField.StatusMessage.Icon name="exclamation-circle" aria-label="example reset input" />
    <InlineField.StatusMessage.Text>
      Input is invalid
    </InlineField.StatusMessage.Text>
  </InlineField.StatusMessage>
</InlineField>
```

### Child Elements

* Label
* StatusMessage
* TextField

* ActionButton (custom)

#### ActionButton

##### Element Type

`IconButton.extend`

##### Default Styles

```
display: flex;
align-self: center;
```

---
