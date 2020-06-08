import React, { useState, useEffect, useCallback } from 'react';
import '@elastic/eui/dist/eui_theme_light.css'

export default function Buscador () {
        
    const [municipioID, setMunicipioID] = useState();
    
    useEffect(() => {
        fetch('https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/' + municipioID)
        .then((response) => response.json())
        .then((response) => {
            setMunicipioID(response.municipios);
        });
    });
}