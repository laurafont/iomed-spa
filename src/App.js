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
    this.fetchMunicipios();
  }

  fetchMunicipios() {
    fetch('https://www.el-tiempo.net/api/json/v2/provincias/08/municipios')
      .then((response) => response.json())
      .then(data => {
        let municipios = data.municipios.map(municipio => {
          return {label: municipio.NOMBRE}
        });
        this.setState({
          municipios: municipios
        });
      }).catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {/* {this.state.municipios.map(municipio => <div>{municipio.label}</div>)} */}
       <Buscador municipios={this.state.municipios} />
      </div>
    );
  }
}

export default App;
