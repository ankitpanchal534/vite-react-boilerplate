import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useState,
} from "react";
import { FormField } from "../types";

export interface IMetaData {
  title?: string;
  description?: string;
}
interface FormContextType {
  form: FormField[];
  addField: (fieldType: string) => void;
  updateField: (id: string, updatedField: Partial<FormField>) => void;
  removeField: (id: string) => void;
  setForm: Dispatch<FormField[]>;
  formMetadata: IMetaData;
  updateMetadata: (obj: Partial<Record<keyof IMetaData, string>>) => void;
}

const FormContext = createContext<FormContextType | null>(null);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [form, setForm] = useState<FormField[]>([]);
  const [formMetadata, setMetadata] = useState<IMetaData>({
    title: "",
    description: "",
  });

  //   const addField = (field: FormField) => {
  //     setForm((prev) => [...prev, field]);
  //   };
  const addField = (type: string) => {
    const newField: FormField = {
      id: crypto.randomUUID(),
      type,
      label: `Question ${form.length + 1}`,
      required: false,
      placeholder: `Enter answer...`,
      validation: {},
      options:
        type === "select" || type === "radio" || type === "checkbox"
          ? [{ label: "Option 1", value: "option1" }]
          : undefined,
    };
    setForm((prev) => [...prev, newField]);
    // setShowAddFields(false);
  };

  const updateField = (id: string, updatedField: Partial<FormField>) => {
    setForm((prev) =>
      prev.map((field) =>
        field.id === id ? { ...field, ...updatedField } : field
      )
    );
  };

  const removeField = (id: string) => {
    setForm((prev) => prev.filter((field) => field.id !== id));
  };

  const updateMetadata = (obj: Partial<Record<keyof IMetaData, string>>) => {
    setMetadata((prev) => ({ ...prev, ...obj }));
  };

  return (
    <FormContext.Provider
      value={{
        form,
        addField,
        updateField,
        removeField,
        setForm,
        formMetadata,
        updateMetadata,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
