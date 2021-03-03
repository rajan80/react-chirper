import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      userinput: [],
    };

    this.state = {
      post: "",
      todo: [],
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      user: "",
      userinput: [...this.state.userinput, { id: 1, user: this.state.user }],
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      post: "",
      todo: [...this.state.todo, { id: 1, post: this.state.post }],
    });
  }

  render() {
    return (
      <main className="container">
        <section className="row justify-content-center mt-5">
          <div className="col-md-12">
            <form className=" form-group">
              <input
                placeholder="user"
                value={this.state.user}
                onChange={(e) => this.setState({ user: e.target.value })}
                className="from-control"
              />

              <input
                placeholder="Post"
                value={this.state.post}
                onChange={(e) => this.setState({ post: e.target.value })}
                className="from-control"
              />
              <button
                onClick={(e) => this.handleSubmit(e)}
                className="btn btn-primary mt"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
        <div class="card">
          <div class="card-body">
            {this.state.todo.map((userinput) => (
              <li key={`${userinput.id}`}>{userinput.user} </li>
            ))}
            {this.state.todo.map((todo) => (
              <li key={`todo-post-${todo.id}`}>{todo.post} </li>
            ))}
          </div>
        </div>
      </main>
    );
  }
}

export default App;
