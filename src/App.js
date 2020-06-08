import React from 'react';
import '@elastic/eui/dist/eui_theme_light.css'
import './App.css';
import Buscador from "./components/Buscador";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      municipios: []
    };
  }

  componentDidMount() {
    fetch('https://www.el-tiempo.net/api/json/v2/provincias/08/municipios')
    .then((response) => response.json())
    .then((response) => {
      this.setState({ municipios: response.municipios })
    });
  }

  render() {
    return (
      <div>
        <Buscador/>
        {/* {this.state.municipios.map((municipio, index) => {
          return (
            <div key={index}>{municipio.NOMBRE}</div>
          )}   
        )} */}
      </div>
    );
  }
}

export default App;
