import { Icon } from '../../../components/demo/elements';
import { IconButton } from '../../../components/demo/blocks';
import { Container, Column, Row } from '../../../components/demo/blocks/Grid';

## IconButton Block Specs

---

### Block Type

`button`

### Default Styles

```
align-items: center;
background: none;
border: none;
display: flex;
height: fontSizeLarge;
justify-content: center;
outline: none;
transition: all 200ms ease;
width: fontSizeLarge;

&:hover,
&:focus {
  transform: scale(1.2);

  span {
    color: statusDefault;
  }
}

```

### Modifiers

* hoverDanger
* hoverInfo
* hoverSuccess
* hoverWarning

### Example

<Container>
  <Row>
    <Column>
      <IconButton modifiers={['hoverInfo']} aria-label="example aria label: search by city or zipcode">
        <Icon name="pencil-alt" />
      </IconButton>
    </Column>
    <Column>
      <IconButton modifiers={['hoverSuccess']} aria-label="example aria label: input saved">
        <Icon name="check" />
      </IconButton>
    </Column>
    <Column>
      <IconButton modifiers={['hoverWarning']} aria-label="example aria label: invalid input warning">
        <Icon name="exclamation-triangle " />
      </IconButton>
    </Column>
    <Column>
      <IconButton modifiers={['hoverDanger']} aria-label="example aria label: form error">
        <Icon name="times" />
      </IconButton>
    </Column>
  </Row>
</Container>

### API

```
<Container>
  <Row>
    <Column>
      <IconButton modifiers={['hoverInfo']} aria-label="example aria label: search by city or zipcode">
        <Icon name="pencil-alt" />
      </IconButton>
    </Column>
    <Column>
      <IconButton modifiers={['hoverSuccess']} aria-label="example aria label: input saved">
        <Icon name="check" />
      </IconButton>
    </Column>
    <Column>
      <IconButton modifiers={['hoverWarning']} aria-label="example aria label: invalid input warning">
        <Icon name="exclamation-triangle " />
      </IconButton>
    </Column>
    <Column>
      <IconButton modifiers={['hoverDanger']} aria-label="example aria label: form error">
        <Icon name="times" />
      </IconButton>
    </Column>
  </Row>
</Container>
```

### Child Elements

* Icon

---
