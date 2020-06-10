import React from 'react';
import '@elastic/eui/dist/eui_theme_light.css'
import './App.css';
import Buscador from "./components/Buscador";
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
          return {label: municipio.NOMBRE, id: municipio.CODIGOINE}
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
        <EuiPage>
          <EuiPageBody component="div" className="App">
            <EuiPageContent verticalPosition="center" horizontalPosition="center">
              <EuiPageContentHeader>
                <EuiPageContentHeaderSection>
                  <EuiTitle>
                    <h2>Previsión meteorológica</h2>
                  </EuiTitle>
                </EuiPageContentHeaderSection>
              </EuiPageContentHeader>
              <EuiHorizontalRule/>
              <EuiPageContentBody size="5">
                <Buscador municipios={this.state.municipios} />
              </EuiPageContentBody>  
            </EuiPageContent>
          </EuiPageBody>
        </EuiPage>
      </div>
    );
  }
}

export default App;
