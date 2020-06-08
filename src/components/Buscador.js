import React, { useState, useEffect, useCallback } from 'react';
import '@elastic/eui/dist/eui_theme_light.css'
import { EuiComboBox } from '@elastic/eui';
import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import { SearchProvider, Results, SearchBox } from "@elastic/react-search-ui";
import { Layout } from "@elastic/react-search-ui-views";

    export default function Buscador () {
        
        const [allOptions, setAllOptions] = useState([]);
        const [municipios, setMunicipios] = useState([]);
        
        useEffect(() => {
            fetch('https://www.el-tiempo.net/api/json/v2/provincias/08/municipios')
            .then((response) => response.json())
            .then((response) => {
                setMunicipios(response.municipios);
            });

        });
        
        const [selectedOptions, setSelected] = useState([]);
        const [isLoading, setLoading] = useState(false);
        const [options, setOptions] = useState([]);
        let searchTimeout;
        const onChange = selectedOptions => {
          setSelected(selectedOptions);
        };
      
        const onSearchChange = useCallback(searchValue => {
          setLoading(true);
          setOptions([]);
      
          clearTimeout(searchTimeout);
      
          // eslint-disable-next-line react-hooks/exhaustive-deps
          searchTimeout = setTimeout(() => {
            // Simulate a remotely-executed search.
            setLoading(false);
            setOptions(
              allOptions.filter(option =>
                option.label.toLowerCase().includes(searchValue.toLowerCase())
              )
            );
          }, 1200);
        }, []);
      
        const onCreateOption = (searchValue, flattenedOptions = []) => {
          const normalizedSearchValue = searchValue.trim().toLowerCase();
      
          if (!normalizedSearchValue) {
            return;
          }
      
          const newOption = {
            label: searchValue,
          };
      
          // Create the option if it doesn't exist.
          if (
            flattenedOptions.findIndex(
              option => option.value.trim().toLowerCase() === normalizedSearchValue
            ) === -1
          ) {
            // Simulate creating this option on the server.
            allOptions.push(newOption);
            setOptions([...options, newOption]);
          }
      
          // Select the option.
          setSelected([...selectedOptions, newOption]);
        };
      
        useEffect(() => {
          // Simulate initial load.
          onSearchChange('');
        }, [onSearchChange]);
      
        return (
          <EuiComboBox
            placeholder="Search asynchronously"
            async
            options={options}
            selectedOptions={selectedOptions}
            isLoading={isLoading}
            onChange={onChange}
            onSearchChange={onSearchChange}
            onCreateOption={onCreateOption}
          />
        );
    }