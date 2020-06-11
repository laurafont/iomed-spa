import React, { useState, useEffect, useCallback } from 'react';
import '@elastic/eui/dist/eui_theme_light.css';
import {
    EuiCard,
    EuiFlexItem,
    EuiFlexGrid
  } from '@elastic/eui';

class Tarjeta extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        municipios : []
      };
    }

    componentDidMount() {
        this.getWeather();
    }

    getWeather = () => {
        for(let i=0; i<this.props.municipiosSelect.length; i++) {
            let muniID = this.props.municipiosSelect[i].id;
            let newMuniID = muniID.substring(0, muniID.length - 6);
            fetch('https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/' + newMuniID)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                  municipios: [...this.state.municipios, data]
                });
            }).catch(error => {
                console.log(error);
            });
        }
      }

    render() {
        return (
            <div>
                <div className="divs">
                    {this.state.municipios ? 
                        <EuiFlexGrid columns={4}>
                            {this.state.municipios.map((municipio, index) => 
                                <EuiFlexItem key={index}>
                                    <EuiCard
                                    title={municipio.municipio.NOMBRE}
                                    description={`Temperatura: ${municipio.temperatura_actual} ºC ` + `Lluvia: ${municipio.lluvia} %`}
                                />
                                </EuiFlexItem>
                            )}
                        </EuiFlexGrid>
                    : null}
                </div>
            </div>
        );
    }
}

export default Tarjeta;