var Index = React.createClass({
  getInitialState: function () {
    return { benches: BenchStore.all() };
  },

  componentDidMount: function () {
    BenchStore.addChangeListener(this._onChange);
    ApiUtil.fetchBenches();
  },

  _onChange: function () {
    this.setState({benches: BenchStore.all()});
  },

  render: function () {

    return (
      <ul>
        {
          this.state.benches.map(function (bench) {
            return (
              <li key={bench.id}>
                <strong>{bench.description}</strong>  Coords: {bench.lat}, {bench.lng}
              </li>
            );
          })
        }
      </ul>
    );
  }
});
