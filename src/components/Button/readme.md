
### Examples

Default button with a click event handler.

```jsx
<Button onClick={() => alert('Pressed!')}>Press Me</Button>
```

Small themed button

```jsx
<Button small={true} theme="danger">Delete</Button>
```

### Themes

Filled buttons for primary actions, such as submitting a form

```jsx
<Button theme="primary">Primary</Button>
<Button theme="secondary">Secondary</Button>
<Button theme="success">Success</Button>
<Button theme="info">Info</Button>
<Button theme="warning">Warning</Button>
<Button theme="danger">Danger</Button>
```

Outline buttons for secondary (less important / focused) actions, such as cancel buttons or delete

```jsx
<Button theme="outline-primary">Primary</Button>
<Button theme="outline-secondary">Secondary</Button>
<Button theme="outline-success">Success</Button>
<Button theme="outline-info">Info</Button>
<Button theme="outline-warning">Warning</Button>
<Button theme="outline-danger">Danger</Button>
```
