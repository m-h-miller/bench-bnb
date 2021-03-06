var Index = React.createClass({
  getInitialState: function () {
    return { benches: BenchStore.all() };
  },

  componentDidMount: function () {
    BenchStore.addChangeListener(this._onChange);
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
                <strong>{bench.id}: {bench.description}</strong>
                <ul>
                  <li>Latitude: {bench.lat}</li>
                  <li>Longitude: {bench.lng}</li>
                </ul>
              </li>
            );
          })
        }
      </ul>
    );
  }
});
