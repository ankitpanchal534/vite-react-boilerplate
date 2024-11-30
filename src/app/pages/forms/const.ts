import {
  TextCursorInput,
  MailCheck,
  Phone,
  GripVertical,
  ChevronDown,
  ChevronUp,
  UploadCloudIcon,
  Text,
} from "lucide-react";
import { IoMdCheckbox } from "react-icons/io";

export const fieldTypes = [
  { value: "text", label: "Short Text", icon: TextCursorInput },
  { value: "textarea", label: "Long Text", icon: Text },
  { value: "email", label: "Email", icon: MailCheck },
  { value: "tel", label: "Phone", icon: Phone },
  { value: "number", label: "Number", icon: GripVertical },
  { value: "select", label: "Dropdown", icon: ChevronDown },
  { value: "radio", label: "Radio Group", icon: ChevronUp },
  { value: "checkbox", label: "Checkbox Group", icon: IoMdCheckbox },
  { value: "file", label: "File Upload", icon: UploadCloudIcon },
];
