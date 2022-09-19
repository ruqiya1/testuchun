import React from "react";

class State extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Ruqiya',
            surname: 'Zohidova',
        }
    }
    render() {
        const onchangeName = (e) => {
            this.setState({ name: e.target.value })
        }
        const onchangeSurname = (e) => {
            this.setState({ surname: e.target.value })
        }
        return (
            <div>
                <h1>{this.state.name}</h1>
                <input onChange={onchangeName} type="text" placeholder="name input" />
                <h1>{this.state.surname}</h1>
                <input onChange={onchangeSurname} type="text" placeholder="surname input" />
            </div>
        )
    }
}

export default State;