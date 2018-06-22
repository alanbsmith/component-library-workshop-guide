import { TextField } from '../../../components/demo/elements';
import { Container, Column, Row } from '../../../components/demo/blocks/Grid';


## TextField Element Specs

---

### Element Type

`input`

### Default Styles

```
border: none;
border-bottom: solid 2px textLight;
color: text;
flex: 1;
font-size: medium;
outline: none;
padding-bottom: 8px;
transition: all 200ms ease;

&::placeholder {
  color: chrome300;
}

&:hover,
&:focus {
  border-bottom-color: text;
}
```

### Modifiers

* border-bottom-color: status (warning)

### Example

<Container>
  <Row>
    <Column flex="1">
      <TextField type="text" id="email-field" placeholder="email" />
    </Column>
    <Column>
      <TextField modifiers={['warning']} type="text" id="phone-field" placeholder="phone number" />
    </Column>
  </Row>
</Container>

### API

```
<Container>
  <Row>
    <Column flex="1">
      <TextField type="text" id="email-field" placeholder="email" />
    </Column>
    <Column>
      <TextField modifiers={['warning']} type="text" id="phone-field" placeholder="phone number" />
    </Column>
  </Row>
</Container>
```
---
