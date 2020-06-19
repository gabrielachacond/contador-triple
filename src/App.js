import React from "react";
import "./styles.scss";
class App extends React.Component {
  state = {
    contadores: [
      {
        name: "left",
        count: 0
      },
      {
        name: "center",
        count: 0
      },
      {
        name: "right",
        count: 0
      }
    ]
  };
  // center
  handleIncrement = name => () => {
    const contadoresActuales = this.state.contadores;
    const contadoresActualizados = contadoresActuales.map(obj => {
      if (obj.name === name) {
        return { ...obj, count: obj.count + 1 };
      }
      return obj;
    });
    this.setState({ contadores: contadoresActualizados });
  };
  handleDecrement = name => () => {
    const contadoresActuales = this.state.contadores;
    const contadoresActualizados = contadoresActuales.map(obj => {
      if (obj.name === name) {
        return { ...obj, count: obj.count - 1 };
      }
      return obj;
    });
    this.setState({ contadores: contadoresActualizados });
  };
  reset = name => () => {
    const contadoresActuales = this.state.contadores;
    const contadoresActualizados = contadoresActuales.map(obj => {
      if (name === obj.name) return { ...obj, count: 0 };
      return obj;
    });
    this.setState({ contadores: contadoresActualizados });
  };
  render() {
    const contadores = this.state.contadores.map(obj => (
      <Counter
        key={obj.name}
        name={obj.name}
        count={obj.count}
        onIncrement={this.handleIncrement(obj.name)}
        onDecrement={this.handleDecrement(obj.name)}
        onReset={this.reset(obj.name)}
      />
    ));
    const contadorGlobal = this.state.contadorGlobal;
    //agregar el contador global y que lo muestre, al igual con drecremet
    return (
      <div className="counter-ui">
        <h1> conteo global {} </h1>
        <div className="counters">{contadores}</div>
      </div>
    );
  }
}
const Counter = props => (
  <main className="Application">
    <section>
      <div className="counter">
        <p className="counter-name">{props.name}</p>
        <p className="count">{props.count}</p>
        <section className="controls">
          <button onClick={props.onIncrement}>Increment</button>
          <button onClick={props.onDecrement}>Decrement</button>
          <button onClick={props.onReset}>Reset</button>
        </section>
      </div>
    </section>
  </main>
);
export default App;
//agregar el conteo global
