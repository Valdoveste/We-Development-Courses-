class StatefulComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "N"
        }
    }


    render() {
        return (
            <div>
                <h1>{this.state.firstName}</h1>
            </div>
        );
    }
}