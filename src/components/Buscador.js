import React, { useState, useEffect, useCallback } from 'react';
import '@elastic/eui/dist/eui_theme_light.css'
import { EuiComboBox } from '@elastic/eui';
import Tarjeta from "./Tarjeta";

export default function Buscador (municipios) {

  const options = municipios.municipios;

  const [selectedOptions, setSelected] = useState([]);

  const onChange = selectedOptions => {
    setSelected(selectedOptions);
  };

  return (
    <div>
      <EuiComboBox
        placeholder="Selecciona un municipio"
        options={options}
        selectedOptions={selectedOptions}
        onChange={onChange}
      />
      <Tarjeta municipiosSelect={selectedOptions}/>
    </div>
  );
}