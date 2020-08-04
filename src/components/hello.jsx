class Hello extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      counter: 0
    };
    // this.handleClick = this.handleClick.bind(this)
  }
  handleClick = () => {
    this.setState(
    {
      clicked: !this.state.clicked,
      conter: this.state.counter +1})
  }
  render() {
    return (
      <div >
      <button className={this.state.clicked ? "clicked" : ""}
      onClick = {this.handleClick } >Hello {this.props.name} {this.state.counter}</button>

      </div>
      );
  }
}


const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="World" />, root);
}

