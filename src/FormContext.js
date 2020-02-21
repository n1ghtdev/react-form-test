import React from 'react';

export const FormContext = React.createContext();

export function FormProvider({ children }) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const cache = localStorage.getItem('form-data');
    console.log(cache);

    if (cache) {
      setData(JSON.parse(cache));
    }
  }, []);

  React.useEffect(() => {
    try {
      if (data) {
        localStorage.setItem('form-data', JSON.stringify(data));
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }, [data]);

  function addPerson(person) {
    setData(prev => [...prev, person]);
  }

  return (
    <FormContext.Provider value={{ formData: data, addPerson }}>
      {children}
    </FormContext.Provider>
  );
}

export const useFormContext = () => React.useContext(FormContext);
