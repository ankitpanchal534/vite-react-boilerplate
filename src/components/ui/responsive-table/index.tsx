import { motion } from "framer-motion";
import { MoreVertical } from "lucide-react";
import DropdownDrawer from "../drawers/DropdownDrawer";

interface TableProps {
  columns: {
    key: string;
    label: string;
    render?: (value: any, item: any) => React.ReactNode;
  }[];
  data: any[];
  onLoadMore?: () => void;
  loading?: boolean;
  hasMore?: boolean;
  lastItemRef?: (node: any) => void;
  actions?: Array<any>;
}

export function ResponsiveTable({
  columns,
  data,
  onLoadMore,
  loading,
  hasMore,
  lastItemRef,
  actions = [],
}: TableProps) {
  return (
    <>
      {/* Desktop View */}
      <div className="hidden lg:block bg-white rounded-xl border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full max-w-full">
            <thead className="bg-gray-50">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {column.label}
                  </th>
                ))}
                {actions.length > 0 && (
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((item, index) => (
                <motion.tr
                  key={item.id}
                  ref={index === data.length - 1 ? lastItemRef : null}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-gray-50"
                >
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className="px-6 py-4 whitespace-nowrap"
                    >
                      {column.render
                        ? column.render(item[column.key], item)
                        : item[column.key]}
                    </td>
                  ))}
                  {actions.length > 0 && (
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <ActionMenu actions={actions} />
                    </td>
                  )}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile/Tablet View */}
      <div className="lg:hidden space-y-4">
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            ref={index === data.length - 1 ? lastItemRef : null}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white p-4 rounded-xl border shadow-sm"
          >
            {actions.length > 0 && (
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <ActionMenu actions={actions} />
              </div>
            )}
            <div className="space-y-3">
              {columns.map((column) => (
                <div key={column.key} className="flex justify-between text-sm">
                  <span className="text-gray-500">{column.label}</span>
                  <span className="font-medium">
                    {column.render
                      ? column.render(item[column.key], item)
                      : item[column.key]}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {loading && (
        <div className="text-center py-4 text-gray-500">
          Loading more services...
        </div>
      )}

      {hasMore && (
        <div className="text-center pt-4 pb-8">
          <button
            onClick={onLoadMore}
            disabled={loading}
            className="bg-primary/10 text-primary hover:bg-primary/20 px-6 py-2 rounded-lg font-medium transition-colors"
          >
            {loading ? "Loading..." : "Load More Services"}
          </button>
        </div>
      )}
    </>
  );
}

function ActionMenu({ actions }: { actions: Array<any> }) {
  if (!actions) return;
  return (
    <DropdownDrawer
      options={actions}
      trigger={<MoreVertical className="h-4 w-4" />}
      drawerClassName=""
      title="Actions"
    />
  );
}
