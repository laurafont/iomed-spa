import React, { useState, useEffect, useCallback } from 'react';
import '@elastic/eui/dist/eui_theme_light.css'
import {
  EuiComboBox,
  EuiFlexItem,
  EuiButton
  } from '@elastic/eui';

class Buscador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOptions: []
    };
  }

  onChange = selectedOptions => {
    this.setState({
      selectedOptions: selectedOptions
    });
  }

  getSelected() {
    this.props.getSelected(this.state.selectedOptions);
  }

  render() {
    return (
      <div>
        <div className="divs">
          <EuiComboBox
            placeholder="Selecciona un municipio"
            options={this.props.municipios}
            selectedOptions={this.state.selectedOptions}
            onChange={this.onChange}
          />
          </div>
          <div className="divs">
              <EuiButton size="s" onClick={() => this.getSelected()}>
                Buscar
              </EuiButton>
          </div>
      </div>
    );
  }
}

export default Buscador;