import React, { useState, useEffect, useCallback } from 'react';
import '@elastic/eui/dist/eui_theme_light.css';
import {
    EuiCard,
    EuiFlexGroup,
    EuiFlexItem,
  } from '@elastic/eui';

export default function Tarjeta (municipiosSelect) {

    const municipios = municipiosSelect;

    return (
        <div>
              {municipios ? 
                <EuiFlexGroup gutterSize="l">
                {municipios.municipiosSelect.map((municipio, index) => 
                    <EuiFlexItem key={index}>
                        <EuiCard
                        layout="horizontal"
                        title={municipio.label}
                        description={`La temperatura es ${municipio.label}  y la probabilidad de lluvia  ${municipio.label}.`}
                    />
                    </EuiFlexItem>
                )}
                </EuiFlexGroup>
             : null}
        </div>
    );
}