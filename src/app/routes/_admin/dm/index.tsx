import { dm_stats, fake_dms, SingleDM } from "@/app/__mock_data__/__dms__";
import { Button } from "@/components/ui/button";
import { ConfirmationPopup } from "@/components/ui/confirmation/Confirmation";
import { ResponsivePanel } from "@/components/ui/responsive-panel";
import { useDeviceType } from "@/hooks/use-device-type";
import { useSearchParams } from "@/lib/router";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Search, Send } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const DMContent = ({
  selectedDM,
  // setSelectedDM,
}: {
  selectedDM: SingleDM;
  // setSelectedDM: Dispatch<DM>;
}) => {
  const [answer, setAnswer] = useState("");

  const handleSubmitAnswer = () => {
    if (selectedDM) {
      // setSelectedDM((prev) => ({ ...prev!, answer, status: "answered" }));
      setAnswer("");
    }
  };
  return (
    <div className="space-y-4 p-4 lg:p-0 pb-0">
      <div className="flex flex-col lg:flex-row justify-between items-start">
        <div>
          <h3 className="text-xl font-bold">{selectedDM.customerName}</h3>
          <p className="text-sm text-muted-foreground">{selectedDM.service}</p>
        </div>
        <span className="text-sm text-muted-foreground pt-2 lg:py-0 ">
          Received on : {selectedDM.timestamp}
        </span>
      </div>

      <div className="bg-accent/50 rounded-lg p-4">
        <h4 className="font-semibold mb-2">Question:</h4>
        <p>{selectedDM.question}</p>
      </div>

      {selectedDM.answer ? (
        <div className="bg-primary/10 rounded-lg p-4">
          <h4 className="font-semibold mb-2">Your Answer:</h4>
          <p>{selectedDM.answer}</p>
        </div>
      ) : (
        <div className="space-y-4">
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Type your answer..."
            className="w-full p-4 rounded-lg border min-h-[150px] focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <div className="flex items-center justify-between gap-2">
            <ConfirmationPopup
              btnProps={{
                variant: "outline",
                className: "text-red-500 border-red-500",
              }}
              title="Are you sure?"
              description="This action cannot be undone. This will permanently delete this DM."
              onConfirm={async () => {
                toast.error("This feature is not implemented yet.");
              }}
              onCancel={() => {}}
            >
              Reject query
            </ConfirmationPopup>
            <Button onClick={handleSubmitAnswer} className="w-full">
              <Send className="w-4 h-4 mr-2" />
              Submit Answer
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

function DMComponent() {
  const navigate = useNavigate();
  const { dmId, filter } = Route.useSearch() as {
    dmId?: number;
    filter?: string;
  };
  const { isMobile, isDeskTop } = useDeviceType();
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { setParams } = useSearchParams();

  const [selectedDM, setSelectedDM] = useState<SingleDM | null>(null);

  useEffect(() => {
    if (dmId) {
      const dm = fake_dms.find((d) => d.id === dmId);
      setSelectedDM(dm || null);
    }
  }, [dmId]);

  const filteredDMs = fake_dms.filter((dm) => {
    if (!filter || filter === "all") return true;
    return dm.status === filter;
  });

  const handleDMSelect = (dm: SingleDM) => {
    navigate({
      search: (prev) => ({ ...prev, dmId: dm.id }),
    });
  };

  const handleStatClick = (statFilter: string) => {
    navigate({
      search: (prev) => ({
        ...prev,
        filter: statFilter,
        dmId: undefined,
      }),
    });
    setSelectedDM(null);
  };

  return (
    <div className="p-0 sm:p-6 lg:pt-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between lg:items-center flex-col lg:flex-row gap-4 lg:gap-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            // className="mb-6 "
          >
            <h1 className="heading text-foreground">Priority DMs</h1>
            <p className="text-muted-foreground">
              Respond to your priority direct messages
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 mb-6">
            {dm_stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`${stat.color} rounded-xl p-4 border cursor-pointer
                ${filter === stat.filter ? "ring-2 ring-primary" : ""}
              `}
                onClick={() => handleStatClick(stat.filter)}
              >
                <div className="flex items-center gap-3">
                  <stat.icon className="w-5 h-5 hidden lg:block" />
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold mt-1">{stat.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div
          className={`flex  lg:min-h-[calc(99dvh-250px)]  ${!isDeskTop ? "flex-col" : "gap-6"}`}
        >
          <div
            className={`${!isDeskTop ? "w-full" : "w-1/3"} border rounded-lg overflow-hidden  flex flex-col justify-between `}
          >
            <div>
              <div className="p-4 border-b bg-card">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search DMs..."
                    className="w-full pl-9 pr-4 py-2 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                </div>
              </div>

              <div
                className={`overflow-y-auto   ${isMobile ? "max-h-none" : "max-h-[calc(99dvh-300px)]"}`}
              >
                {filteredDMs.map((dm) => (
                  <motion.div
                    key={dm.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`p-4 border-b cursor-pointer hover:bg-accent transition-colors
                    ${selectedDM?.id === dm.id ? "bg-accent" : ""}`}
                    onClick={() => handleDMSelect(dm)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold">{dm.customerName}</p>
                        <p className="text-sm text-muted-foreground truncate max-w-[200px]">
                          {dm.question}
                        </p>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          dm.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {dm.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
                {filteredDMs.length === 0 && (
                  <div className="p-4 text-center text-muted-foreground">
                    No messages found
                  </div>
                )}
              </div>
            </div>
            {filteredDMs.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="sticky bottom-0 bg-background/95 backdrop-blur-sm border-t p-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Page <strong>1</strong> of <strong>3</strong>
                  </span>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8"
                      disabled={page === 1}
                      onClick={() => setPage((prev) => prev - 1)}
                    >
                      Previous
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8"
                      disabled={!hasMore}
                      onClick={() => setPage((prev) => prev + 1)}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {!isDeskTop ? (
            <ResponsivePanel
              open={!!selectedDM}
              onClose={() => {
                setSelectedDM(null);
                setParams({
                  dmId: null,
                });
              }}
              title="Message Details"
            >
              {selectedDM && <DMContent selectedDM={selectedDM} />}
            </ResponsivePanel>
          ) : (
            <div className="flex-1">
              {selectedDM ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border rounded-lg p-6"
                >
                  <DMContent selectedDM={selectedDM} />
                </motion.div>
              ) : (
                <div className="h-full flex items-center justify-center text-muted-foreground">
                  Select a DM to view details
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export const Route = createFileRoute("/_admin/dm/")({
  component: DMComponent,
  validateSearch: (search: Record<string, string>) => ({
    dmId: search.dmId,
    filter: search.filter,
  }),
});
