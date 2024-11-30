import { FormProvider } from "@/app/pages/forms/context/FormContext";
import { FormPreview } from "@/app/pages/forms/FormPreview";
import FormBuilder from "@/app/pages/forms/new/FormBuilder";
import { Button } from "@/components/ui/button";
import { ResponsivePanel } from "@/components/ui/responsive-panel";
import usePopup from "@/hooks/use-popup";
import { createLazyFileRoute } from "@tanstack/react-router";
import { ExternalLink, Share2 } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createLazyFileRoute("/_admin/forms/new")({
  component: AdvancedFormBuilder,
});
function AdvancedFormBuilder() {
  const previewPopup = usePopup();
  return (
    <FormProvider>
      <div className="p-0 sm:p-6">
        <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-row justify-between items-center gap-1 sm:gap-4"
          >
            <div className="w-1/2">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
                Create Form
              </h1>
              <p className="text-xs sm:text-base text-muted-foreground mt-2 hidden sm:block">
                Design and customize your form
              </p>
            </div>
            <div className="flex gap-2 items-center">
              {[
                { icon: <Share2 />, label: "Share", variant: "outline" },
                { icon: <ExternalLink />, label: "Live", variant: "outline" },
                { icon: null, label: "Save Form", variant: "default" },
              ].map((button, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Button variant={button.variant as any}>
                    {button.icon}
                    <span className="hidden lg:block">{button.label}</span>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <FormBuilder previewPopup={previewPopup} />
            <div className="flex-1 hidden lg:block">
              <FormPreview />
            </div>
          </motion.div>
        </div>

        {previewPopup.open && (
          <ResponsivePanel open onClose={previewPopup.closePopup}>
            <FormPreview />
          </ResponsivePanel>
        )}
      </div>
    </FormProvider>
  );
}
