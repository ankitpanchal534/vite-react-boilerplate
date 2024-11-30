import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { useDeviceType } from "@/hooks/use-device-type";
import usePopup, { IPopupReturn } from "@/hooks/use-popup";
import { cn } from "@/lib/utils";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import {
  ChevronDown,
  ChevronUp,
  GripVertical,
  Plus,
  Trash2,
  View,
} from "lucide-react";
import { useCallback, useState } from "react";
import { fieldTypes } from "../const";
import { useFormContext } from "../context/FormContext";
import { FieldConfiguration } from "./FieldConfigration";

interface IFormBuilder {
  previewPopup: IPopupReturn;
}
export function FormBuilder({ previewPopup }: IFormBuilder) {
  const { isDeskTop } = useDeviceType();
  const {
    form: formFields,
    updateField,
    removeField,
    addField,
    setForm: setFormFields,
    formMetadata,
    updateMetadata,
  } = useFormContext();
  const [expandedField, setExpandedField] = useState<string | null>(null);

  const handleDragEnd = useCallback(
    (result: any) => {
      if (!result.destination) return;
      const items = Array.from(formFields);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      setFormFields(items);
    },
    [formFields]
  );

  const questionPopup = usePopup();

  return (
    <div className="space-y-4">
      <Card className="p-4 pt-0 border-none shadow-none">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold mb-6">Build Form</h2>
          {!isDeskTop && (
            <Button
              variant={"outline"}
              size={"sm"}
              onClick={previewPopup.openPopup}
            >
              <View />
              Preview
            </Button>
          )}
        </div>
        {/* Form Metadata */}
        <div className="space-y-4 mb-8">
          <Input
            placeholder="Form Title"
            value={formMetadata.title}
            onChange={(e) => {
              updateMetadata({ title: e.target.value });
            }}
            className="text-xl font-semibold"
          />
          <Textarea
            placeholder="Form Description"
            value={formMetadata.description}
            onChange={(e) => {
              updateMetadata({
                description: e.target.value,
              });
            }}
          />
        </div>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="form-fields">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {formFields.map((field, index) => (
                  <Draggable
                    key={field.id}
                    draggableId={field.id}
                    index={index}
                  >
                    {(provided) => (
                      <Collapsible
                        open={expandedField === field.id}
                        onOpenChange={() =>
                          setExpandedField(
                            expandedField === field.id ? null : field.id
                          )
                        }
                      >
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className="mb-4"
                        >
                          <Card className="p-4 space-y-2">
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex items-center gap-4 w-full">
                                <div {...provided.dragHandleProps}>
                                  <GripVertical
                                    className={cn(
                                      "text-muted-foreground hover:bg-gray-100 p-2 px-1 box-content rounded-xl"
                                    )}
                                  />
                                </div>{" "}
                                <div className="w-full ">
                                  <Label>Question</Label>
                                  <div className="flex items-center gap-3  ">
                                    <Input
                                      value={field.label}
                                      onChange={(e) =>
                                        updateField(field.id, {
                                          label: e.target.value,
                                        })
                                      }
                                      className="flex-grow w-full min-w-72"
                                    />
                                    <CollapsibleTrigger className="w-fit ">
                                      {expandedField === field.id ? (
                                        <ChevronUp className="h-4 w-4" />
                                      ) : (
                                        <ChevronDown className="h-4 w-4" />
                                      )}
                                    </CollapsibleTrigger>
                                  </div>
                                </div>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => removeField(field.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>

                            <CollapsibleContent className="mt-4 space-y-4">
                              <FieldConfiguration
                                field={field}
                                onUpdate={updateField}
                              />
                            </CollapsibleContent>
                          </Card>
                        </div>
                      </Collapsible>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        <Popover
          open={questionPopup.open}
          onOpenChange={questionPopup.togglePopup}
        >
          <PopoverTrigger>
            <Button variant="outline" className="w-full mt-4">
              <Plus className="mr-2 h-4 w-4" /> Add Field
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full" align="start">
            <div className="grid grid-cols-2 gap-2 mt-4 ">
              {fieldTypes.map((type) => {
                return (
                  <Button
                    key={type.value}
                    variant="secondary"
                    className="justify-start flex items-center p-2 border-2 hover:border-primary"
                    onClick={() => {
                      questionPopup.closePopup();
                      addField(type.value);
                    }}
                  >
                    <type.icon className="mr-2" />
                    {type.label}
                  </Button>
                );
              })}
            </div>
          </PopoverContent>
        </Popover>
        {/* {showAddFields && (
              <div className="relative">
                
              </div>
            )} */}
      </Card>
    </div>
  );
}

export default FormBuilder;
