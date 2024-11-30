import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Switch } from "@/components/ui/switch";
import { Plus, Trash2 } from "lucide-react";
import { FormField } from "../types";
import ResponsiveSelect from "@/components/ui/responsive-select/ResponsiveSelect";
import { fieldTypes } from "../const";

interface IFormConfigration {
  field: FormField;
  onUpdate: (fieldId: string, updatedField: Partial<FormField>) => void;
}

export function FieldConfiguration({ field, onUpdate }: IFormConfigration) {
  return (
    <div className="space-y-4">
      <div className="grid gap-4">
        <div className="space-y-2">
          <Label>Field Type</Label>
          {/* <Select
            value={field.type}
            onValueChange={(value) => onUpdate(field.id, { type: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select field type" />
            </SelectTrigger>
            <SelectContent>
              {fieldTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  <div className="flex items-center gap-2">
                    <type.icon className="h-4 w-4" />
                    {type.label}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select> */}
          <ResponsiveSelect
            options={fieldTypes}
            value={field.type}
            onChangeSelect={(value) => onUpdate(field.id, { type: value })}
            labelKey="label"
            valueKey="value"
            title="Select field type"
          />
        </div>

        <div className="flex flex-wrap gap-4 items-center ">
          <div className=" flex-1">
            <Label>Placeholder</Label>
            <Input
              className="flex-1"
              placeholder="Placeholder text"
              value={field.placeholder}
              onChange={(e) =>
                onUpdate(field.id, { placeholder: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col items-start flex-shrink gap-1">
            <Label>Required</Label>
            <Switch
              checked={field.required}
              onCheckedChange={(checked) =>
                onUpdate(field.id, { required: checked })
              }
            />
          </div>
        </div>

        {/* Options management for radio, checkbox, and dropdown */}
        {(field.type === "radio" ||
          field.type === "checkbox" ||
          field.type === "select") && (
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">Options</label>
            <div className="space-y-2">
              {field.options?.map((option, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Input
                    value={option.label}
                    onChange={(e) => {
                      const newOptions = [...(field.options || [])];
                      newOptions[index] = {
                        ...option,
                        label: e.target.value,
                        value: e.target.value
                          .toLowerCase()
                          .replace(/\s+/g, "-"),
                      };
                      onUpdate(field.id, { options: newOptions });
                    }}
                    placeholder={`Option ${index + 1}`}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      const newOptions = field.options?.filter(
                        (_, i) => i !== index
                      );
                      onUpdate(field.id, { options: newOptions });
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const newOptions = [...(field.options || [])];
                  newOptions.push({
                    label: "Option " + (newOptions.length + 1),
                    value: "",
                  });
                  onUpdate(field.id, { options: newOptions });
                }}
              >
                <Plus className="h-4 w-4 mr-2" /> Add Option
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
