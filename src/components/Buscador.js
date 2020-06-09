import React, { useState, useEffect, useCallback } from 'react';
import '@elastic/eui/dist/eui_theme_light.css'
import { EuiComboBox } from '@elastic/eui';

export default function Buscador (municipios) {

  const options = municipios.municipios;

  const [selectedOptions, setSelected] = useState([]);

  const onChange = selectedOptions => {
    setSelected(selectedOptions);
  };

  return (
    <EuiComboBox
      placeholder="Selecciona un municipio"
      options={options}
      selectedOptions={selectedOptions}
      onChange={onChange}
    />
  );
}