import React from 'react';
import '@elastic/eui/dist/eui_theme_light.css'
import './App.css';
import Buscador from "./components/Buscador";
import Tarjeta from "./components/Tarjeta";
import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiTitle,
  EuiHorizontalRule
} from '@elastic/eui';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      municipios: [],
      municipiosSeleccionados: [],
      tarjeta: false
    };
  }

  componentDidMount() {
    fetch('https://www.el-tiempo.net/api/json/v2/provincias/08/municipios')
      .then((response) => response.json())
      .then(data => {
        let municipios = data.municipios.map(municipio => {
          return {label: municipio.NOMBRE, id: municipio.CODIGOINE}
        });
        this.setState({
          municipios: municipios
        });
      }).catch(error => {
        console.log(error);
      });
  }

  getSelected(municipiosSelect) {
    this.setState({
      municipiosSeleccionados: municipiosSelect,
      tarjeta: true
    });
  }


  render() {
    return (
      <div>
        <div>
          <EuiPage>
            <EuiPageBody component="div" className="App">
              <br/>
              <EuiPageContent verticalPosition="top" horizontalPosition="center">  
              <EuiPageContentHeader>
                <EuiPageContentHeaderSection>
                  <EuiTitle>
                    <h2>Previsión meteorológica para los municipios de Barcelona</h2>
                  </EuiTitle>
                </EuiPageContentHeaderSection>
                </EuiPageContentHeader>
              <EuiHorizontalRule/>
                  <Buscador municipios={this.state.municipios} getSelected={(municipiosSelect) => this.getSelected(municipiosSelect)}/>   
              </EuiPageContent> 
                {this.state.tarjeta ? <Tarjeta municipiosSelect={this.state.municipiosSeleccionados}/> : null }
            </EuiPageBody>
          </EuiPage>
         
        </div>
        <div>
          
        </div>
      </div>
    );
  } 
}

export default App;
