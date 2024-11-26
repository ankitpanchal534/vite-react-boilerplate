import { temp_services } from "@/app/__mock_data__/__services__";
import { Button } from "@/components/ui/button";
import { ResponsiveTable } from "@/components/ui/responsive-table";
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Copy, Edit, Pencil, Trash } from "lucide-react";
import { useRef, useState } from "react";

export const Route = createLazyFileRoute("/_admin/services/")({
  component: ServicesIndexPage,
});

const actionMenuItems = [
  { icon: <Edit className="h-4 w-4" />, label: "Rename" },
  { icon: <Pencil className="h-4 w-4" />, label: "Edit" },
  { icon: <Copy className="h-4 w-4" />, label: "Duplicate" },
  {
    icon: <Trash className="h-4 w-4" />,
    label: "Delete",
    className: "text-red-600",
  },
];

function ServicesIndexPage() {
  const [services, setServices] = useState(temp_services);

  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const observer = useRef<IntersectionObserver | null>(null);

  const lastServiceRef = (node: HTMLDivElement | null) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        loadMore();
      }
    });

    if (node) observer.current.observe(node);
  };

  const loadMore = async () => {
    setLoading(true);
    try {
      // Simulated API call - replace with actual endpoint
      const response = await new Promise<{
        data: Array<{
          id: number;
          title: string;
          type: string;
          duration: string;
          price: number;
          status: string;
          createdAt: string;
        }>;
        hasMore: boolean;
      }>((resolve) =>
        setTimeout(
          () =>
            resolve({
              data: [
                {
                  id: page * 10 + 1,
                  title: "New Service " + (page * 10 + 1),
                  type: "Webinar",
                  duration: "60 mins",
                  price: 2000,
                  status: "active",
                  createdAt: "2024-01-18",
                },
              ],
              hasMore: page < 5,
            }),
          1000
        )
      );

      setServices((prev) => [...prev, ...response.data]);
      setHasMore(response.hasMore);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error loading services:", error);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { key: "title", label: "Service" },
    { key: "type", label: "Type" },
    {
      key: "duration",
      label: "Duration",
      render: (value: string) => value || "-",
    },
    {
      key: "price",
      label: "Price",
      render: (value: number) => `₹${value}`,
    },
    {
      key: "status",
      label: "Status",
      render: (value: string) => (
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
          ${value === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}
        >
          {value}
        </span>
      ),
    },
    { key: "createdAt", label: "Created" },
  ];

  return (
    <div className="p-0 sm:p-6">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Header */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex  flex-row justify-between items-center gap-1 sm:gap-4"
          >
            <div className="w-1/2">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
                Services
              </h1>
              <p className="text-xs sm:text-base text-muted-foreground mt-2 hidden sm:block">
                Manage and monitor your service offerings
              </p>
            </div>
            <Link
              to="/services/add"
              className="text-sm sm:text-base  sm:w-auto bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 w-fit"
            >
              Create Service
            </Link>
          </motion.div>
          <p className="text-xs sm:text-base text-muted-foreground mt-2 block sm:hidden">
            Manage and monitor your service offerings
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Total Services", value: "24", color: "bg-blue-50" },
            { label: "Active Services", value: "18", color: "bg-green-50" },
            { label: "Draft Services", value: "4", color: "bg-yellow-50" },
            { label: "Archived", value: "2", color: "bg-red-50" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`${stat.color} rounded-xl p-6 border`}
            >
              <p className="text-sm text-gray-600">{stat.label}</p>
              <p className="text-2xl font-bold mt-2">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Responsive Table */}
        <ResponsiveTable
          columns={columns}
          data={services}
          loading={loading}
          hasMore={hasMore}
          onLoadMore={loadMore}
          lastItemRef={lastServiceRef}
          actions={actionMenuItems}
        />
      </div>
    </div>
  );
}
