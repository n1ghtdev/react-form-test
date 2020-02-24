import React from 'react';
import PropTypes from 'prop-types';
import { getRandomID } from '../utils/getRandomID';

export const FormContext = React.createContext();

export function FormProvider({ children }) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const cache = localStorage.getItem('form-data');

    if (cache) {
      setData(JSON.parse(cache));
    }
  }, []);

  React.useEffect(() => {
    try {
      localStorage.setItem('form-data', JSON.stringify(data));
    } catch (error) {
      console.error(error.message);
    }
  }, [data]);

  function addPerson(person) {
    setData(prev => [...prev, { ...person, id: getRandomID() }]);
  }

  function deletePerson(id) {
    const filteredData = data.filter(el => el.id !== id);
    setData(filteredData);
  }

  return (
    <FormContext.Provider value={{ formData: data, addPerson, deletePerson }}>
      {children}
    </FormContext.Provider>
  );
}

export const useFormContext = () => React.useContext(FormContext);

FormProvider.propTypes = {
  children: PropTypes.node,
};
