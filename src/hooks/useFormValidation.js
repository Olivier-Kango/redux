// import { Children, createContext, useContext, useMemo, useState } from "react";

// const Context = createContext();

// function FormProvider( { Children } ) {
//   const [isValid, setValid] = useState(false);
//   const validate = (fields) => {
//     let errors = [];
//     Object.entries((fields).map(([key, value]) => {
//       if (!value) {
//         errors.push(key);
//       }
//     }));
//     return setValid(!errors.length);
//   };

//   const value = useMemo(() => {
//     return {
//       validate,
//       isValid,
//     };
//   }, [isValid]);
//   return <Context.Provider value={value}>{Children}</Context.Provider>;
// }

// export function useFormValidation() {
//   return useContext(Context);
// }

// export default FormProvider;