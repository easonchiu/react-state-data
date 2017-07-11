# react-state-data


### How to install
```
npm install react-state-data
// or
yarn add react-state-data
```

### How to use
```
import reactStateData from 'react-state-data'

@reactStateData
class View extends React.Component {
	constructor(props) {
		super(props)

		this.setData({
			count: 0
		})
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
```
import reactStateData from 'react-state-data'

class View extends React.Component {
	...
	...
	...
}

export default reactStateData(View)
```