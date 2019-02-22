import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Example from "./components/example";
import CharacterSelection from "./menu/characterSelection";
import getData from "./components/data";

class App extends Component {
  state = {
    data: getData()
  };

  handleDelete = protocolo => {
    let array = this.state.data;
    let idx = array.findIndex(p => p.codigo === protocolo.codigo);
    array[idx] = {};
    this.setState({ data: array });
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        {/* <Example /> */}
        {/* <CharacterSelection /> */}
        {/* <div>-----------------------------------------------------</div> */}

        <table>
          <thead>
            <tr>
              <th>Protocolo</th>
              <th>Descricao</th>
              <th>Deletar</th>
            </tr>
          </thead>
          <tbody>
            {data.map(protocolo => {
              const { codigo, descricao } = protocolo;
              return (
                <tr key={codigo}>
                  <td>{codigo}</td>
                  <td>{descricao}</td>
                  <td>
                    <button onClick={() => this.handleDelete(protocolo)}>
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
