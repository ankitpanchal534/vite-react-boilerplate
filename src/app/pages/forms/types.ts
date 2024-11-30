export interface FormField {
  id: string;
  type: string;
  label: string;
  required: boolean;
  placeholder?: string;
  validation?: {
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
  };
  options?: { label: string; value: string }[];
  conditional?: {
    field: string;
    operator: "equals" | "notEquals" | "contains";
    value: string;
  };
}
