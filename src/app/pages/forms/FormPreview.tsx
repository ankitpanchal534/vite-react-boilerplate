import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { useFormContext } from "./context/FormContext";
import { FormField } from "./types";

export const FormPreview = () => {
  const { form: formFields, formMetadata } = useFormContext();
  return (
    <div className="">
      <h2 className="text-xl font-semibold mb-6">Form Preview</h2>
      <Card className="p-6 ">
        {formMetadata.title && (
          <h1 className="text-2xl font-bold">{formMetadata.title}</h1>
        )}
        {formMetadata.description && (
          <p className="text-muted-foreground mb-6 whitespace-pre-wrap text-sm line-clamp-5 leading-5">
            {formMetadata.description}
          </p>
        )}
        {formFields.length === 0 ? (
          <EmptyForm />
        ) : (
          <div className="space-y-6">
            {formFields.map((field) => (
              <div key={field.id} className="space-y-2">
                <label className="text-sm font-medium">
                  {field.label}
                  {field.required && (
                    <span className="text-red-500 ml-1">*</span>
                  )}
                </label>
                {renderPreviewField(field)}
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
};
const EmptyForm = () => {
  return (
    <>
      <div className="space-y-8">
        {Array.from({ length: 8 }).map((_, index) => {
          return (
            <div className=" text-gray-500 space-y-2" key={index}>
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-9 w-full" />
            </div>
          );
        })}
      </div>
    </>
  );
};

function renderPreviewField(field: FormField) {
  switch (field.type) {
    case "textarea":
      return <Textarea placeholder={field.placeholder} />;
    case "select":
      return (
        <Select>
          <option value="">Select an option</option>
          {field.options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      );
    case "radio":
      return (
        <div className="space-y-2">
          {field.options?.map((option) => (
            <div key={option.value} className="flex items-center gap-2">
              <input type="radio" name={field.id} value={option.value} />
              <label>{option.label}</label>
            </div>
          ))}
        </div>
      );
    case "checkbox":
      return (
        <div className="space-y-2">
          {field.options?.map((option) => (
            <div key={option.value} className="flex items-center gap-2">
              <input type="checkbox" value={option.value} />
              <label>{option.label}</label>
            </div>
          ))}
        </div>
      );
    default:
      return <Input type={field.type} placeholder={field.placeholder} />;
  }
}
