import React, { useState, useEffect, useCallback } from 'react';
import '@elastic/eui/dist/eui_theme_light.css';
import {
    EuiCard,
    EuiFlexGroup,
    EuiFlexItem,
    EuiButton
  } from '@elastic/eui';

class Tarjeta extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        municipios : []
      };
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
                <EuiFlexItem grow={false}>
                    <EuiButton size="s" onClick={municipios => this.getWeather(municipios)}>
                    Go
                    </EuiButton>
                </EuiFlexItem>
                <div>
                    {this.state.municipios ? 
                        <EuiFlexGroup gutterSize="l">
                        {this.state.municipios.map((municipio, index) => 
                            <EuiFlexItem key={index}>
                                <EuiCard
                                layout="horizontal"
                                title={municipio.municipio.NOMBRE}
                                description={`La temperatura es ${municipio.temperatura_actual} ºC y la probabilidad de lluvia es ${municipio.lluvia} %.`}
                            />
                            </EuiFlexItem>
                        )}
                        </EuiFlexGroup>
                    : null}
                </div>
            </div>
        );
    }
}

export default Tarjeta;