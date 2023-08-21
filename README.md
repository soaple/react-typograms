# react-typograms
Unofficial React bindings for Typograms

## Installation

```bash
npm install --save react-typograms
```

## Usage

```jsx
import Typograms from 'react-typograms';

function MyComponent() {
    return (
        <Typograms
            content={`
+----+
|    |---> My first diagram!
+----+
    `}
        />
    );
}

export default MyComponent;
```

## License
This package releases under the Apache-2.0 License.