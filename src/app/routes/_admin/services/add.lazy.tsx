import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_admin/services/add")({
  component: ServicesComponent,
});

import {
  serviceExamples,
  serviceTypes,
} from "@/app/__mock_data__/__services__";
import { ServiceForm } from "@/app/pages/services/ServiceForm";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

type IServiceTypes = "1-1-call" | "priority-dm" | "webinar" | "digital-product";
export function ServicesComponent() {
  const [selectedService, setSelectedService] = useState<IServiceTypes | null>(
    null
  );
  const [showExamples, setShowExamples] = useState(true);

  return (
    <div className="min-h-screen bg-background  sm:p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-5 ">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="heading text-foreground">Create New Service</h1>
          <p className="text-muted-foreground">
            Select a service type to get started
          </p>
        </motion.div>

        {/* Row 1: Service Types & Form */}
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 items-start ">
          {/* <div className="content-start "> */}
          {/* <p className="text-muted-foreground mb-4">
              Select a service type to get started
            </p> */}
          <div className="grid grid-cols-2 gap-4 ">
            {serviceTypes.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`${service.color} border ${service.borderColor} rounded-xl p-3 sm:p-6 cursor-pointer transition-all
                  ${selectedService === service.id ? "ring-2 ring-primary" : ""}`}
                onClick={() => setSelectedService(service.id as any)}
              >
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h2 className="text-base md:text-xl font-semibold">
                  {service.title}
                </h2>
                <p className="text-xs md:text-base text-muted-foreground mt-2">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
          {/* </div> */}

          {selectedService && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card border rounded-xl p-4 sm:p-6  "
            >
              <h2 className="text-xl sm:text-2xl font-semibold mb-6">
                {serviceTypes.find((s) => s.id === selectedService)?.title}{" "}
                Configuration
              </h2>
              <ServiceForm type={selectedService} />
              <div className="mt-8 flex justify-end space-x-4">
                <Button variant="outline">Save Draft</Button>
                <Button>Create Service</Button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Row 2: Examples with Toggle */}
        {selectedService && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: showExamples ? 1 : 0,
              height: showExamples ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
            className="border-t pt-8"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg sm:text-2xl font-semibold">
                Popular Examples
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviceExamples[selectedService]?.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-card border rounded-xl p-6 hover:border-primary transition-all"
                >
                  {example.highlight && (
                    <span className="absolute -top-3 right-4 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                      {example.highlight}
                    </span>
                  )}
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {example.title}
                      </h3>
                      <p className="text-muted-foreground mt-1">
                        {example.description}
                      </p>
                    </div>
                    <span className="text-lg font-bold">{example.price}</span>
                  </div>
                  <div className="mt-4 flex gap-4">
                    {"duration" in example && (
                      <span className="text-sm text-muted-foreground">
                        ⏱️ {example.duration}
                      </span>
                    )}
                    {"platform" in example && (
                      <span className="text-sm text-muted-foreground">
                        💻 {example.platform}
                      </span>
                    )}
                    {"type" in example && (
                      <span className="text-sm text-muted-foreground">
                        📚 {example.type}
                      </span>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    className="mt-4 -ml-4 w-fit justify-start text-primary hover:text-primary hover:bg-primary/10"
                  >
                    Use this template →
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
