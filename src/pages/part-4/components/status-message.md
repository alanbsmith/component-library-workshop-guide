import StatusMessage from '../../../components/demo/components/StatusMessage';

## StatusMessage Component Specs

---

### Props

* status - string
  - danger
  - info
  - success
  - warning

### Example


  <StatusMessage status="info">
    Search locations by name or coordinates
  </StatusMessage>

  <StatusMessage status="success">
    Progress updated
  </StatusMessage>

  <StatusMessage status="warning">
    Input is invalid
  </StatusMessage>

  <StatusMessage status="danger">
    Failed to save
  </StatusMessage>

### API

```
  <StatusMessage status="info">
    Search locations by name or coordinates
  </StatusMessage>

  <StatusMessage status="success">
    Progress updated
  </StatusMessage>

  <StatusMessage status="warning">
    Input is invalid
  </StatusMessage>

  <StatusMessage status="danger">
    Failed to save
  </StatusMessage>
```

---
