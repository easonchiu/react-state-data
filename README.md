# react-state-data


### How to install
```
$ npm install react-state-data
```
##### Or
```
$ yarn add react-state-data
```

### How to use
```jsx
import reactStateData from 'react-state-data'

@reactStateData
class View extends React.Component {
  constructor(props) {
    super(props)

    this.setData({
      count: 0
    }, this.watch)
  }

  watch() {
    return {
      count(val, oval) {
        console.log(val, oval)
      }
    }
  }

  render() {
    return (
      <div>
        <p>{ this.data.count }</p>
        <button onClick={ e => this.data.count++ }>click me</button>
      </div>
    )
  }
}

export default View
```

### Don't like '@'? 
```jsx
import reactStateData from 'react-state-data'

class View extends React.Component {
  ...
  ...
  ...
}

export default reactStateData(View)
```