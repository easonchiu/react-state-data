import React from 'react'

const data = Comp => props => {
	Object.assign(Comp.prototype, {
		setData(res) {
			if (!this.state) {
				this.state = {
					...res
				}
			} else {
				Object.assign(this.state, res)
			}
			
			if (this.data) {
				console.warn('data must be null')
			}

			this.data = {}
			const th = this

			Object.keys(res).forEach(res => {
				Object.defineProperty(this.data, res, {
					set(val) {
						if (th.state[res] !== val) {
							th.setState({
								[res]: val
							})
						}
					},
					get() {
						return th.state[res]
					}
				})
			})
			
		}
	})
	return <Comp {...props} />
}

export default data