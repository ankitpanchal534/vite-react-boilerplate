import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Copy, Edit, MoreVertical, Pencil, Trash } from "lucide-react";
import { useRef, useState } from "react";

export const Route = createLazyFileRoute("/_admin/services/")({
  component: ServicesIndexPage,
});

function ServicesIndexPage() {
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Career Consultation",
      type: "1:1 Call",
      duration: "30 mins",
      price: 1500,
      status: "active",
      createdAt: "2024-01-20",
    },
    {
      id: 2,
      title: "Premium Support",
      type: "Priority DM",
      price: 999,
      status: "active",
      createdAt: "2024-01-19",
    },
    // Add more initial data for testing
  ]);

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  const lastServiceRef = (node) => {
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
      const response = await new Promise((resolve) =>
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
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center"
        >
          <div>
            <h1 className="text-4xl font-bold text-foreground">Services</h1>
            <p className="text-muted-foreground mt-2">
              Manage and monitor your service offerings
            </p>
          </div>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90">
            Create Service
          </button>
        </motion.div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

        {/* Services List */}
        <div className="bg-white rounded-xl border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Service
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {services.map((service, index) => (
                  <motion.tr
                    key={service.id}
                    ref={index === services.length - 1 ? lastServiceRef : null}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      {service.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {service.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {service.duration || "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      ₹{service.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${service.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}
                      >
                        {service.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {service.createdAt}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger className="p-2 hover:bg-gray-100 rounded-md border-[0.5px]">
                          <MoreVertical className="h-4 w-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                          <DropdownMenuItem className="flex items-center gap-2">
                            <Edit className="h-4 w-4" />
                            <span>Rename</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center gap-2">
                            <Pencil className="h-4 w-4" />
                            <span>Edit</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center gap-2">
                            <Copy className="h-4 w-4" />
                            <span>Duplicate</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center gap-2 text-red-600">
                            <Trash className="h-4 w-4" />
                            <span>Delete</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          {loading && (
            <div className="text-center py-4 text-gray-500">
              Loading more services...
            </div>
          )}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center pt-4 pb-8">
            <button
              onClick={loadMore}
              disabled={loading}
              className="bg-primary/10 text-primary hover:bg-primary/20 px-6 py-2 rounded-lg font-medium transition-colors"
            >
              {loading ? "Loading..." : "Load More Services"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
