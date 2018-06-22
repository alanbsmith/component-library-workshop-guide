import StatusMessage from '../../../components/demo/blocks/StatusMessage';

## StatusMessage Block Specs

---

### Block Type

`Row.extend`

### Default Styles

```
align-items: center;
color: statusDefault;
```

### Modifiers

* statusColorDanger
* statusColorInfo
* statusColorSuccess
* statusColorWarning

### Example




### Child Elements

* Icon (custom)
* Text (custom)

#### Icon

##### Element Type

`IconButton.extend`

##### Default Styles

```
color: inherit;
padding: 4px;
```

#### Text

##### Element Type

`Text.extend`

##### Default Styles

```
color: inherit;
font-size: small;
padding: 4px;
```

### Example

<StatusMessage modifiers={['statusColorInfo']}>
  <StatusMessage.Icon name="info-circle" />
  <StatusMessage.Text>Search locations by name or coordinates</StatusMessage.Text>
</StatusMessage>

<StatusMessage modifiers={['statusColorSuccess']}>
  <StatusMessage.Icon name="check-circle" />
  <StatusMessage.Text>Progress updated</StatusMessage.Text>
</StatusMessage>

<StatusMessage modifiers={['statusColorWarning']}>
  <StatusMessage.Icon name="exclamation-circle" />
  <StatusMessage.Text>Input is invalid</StatusMessage.Text>
</StatusMessage>

<StatusMessage modifiers={['statusColorDanger']}>
  <StatusMessage.Icon name="times-circle" />
  <StatusMessage.Text>Failed to save</StatusMessage.Text>
</StatusMessage>

### API

```
<StatusMessage modifiers={['statusColorInfo']}>
  <StatusMessage.Icon name="info-circle" />
  <StatusMessage.Text>Search locations by name or coordinates</StatusMessage.Text>
</StatusMessage>

<StatusMessage modifiers={['statusColorSuccess']}>
  <StatusMessage.Icon name="check-circle" />
  <StatusMessage.Text>Progress updated</StatusMessage.Text>
</StatusMessage>

<StatusMessage modifiers={['statusColorWarning']}>
  <StatusMessage.Icon name="exclamation-circle" />
  <StatusMessage.Text>Input is invalid</StatusMessage.Text>
</StatusMessage>

<StatusMessage modifiers={['statusColorDanger']}>
  <StatusMessage.Icon name="times-circle" />
  <StatusMessage.Text>Failed to save</StatusMessage.Text>
</StatusMessage>
```

---
