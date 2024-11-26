import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function SidebarComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-secondary">
        {/* <header className="flex h-16 shrink-0 items-center gap-2 border-b p-2 rounded-b-2xl bg-background mx-2">
          <SidebarTrigger className="-ml-1" />
          Welcome
        </header> */}
        {/* <Separator orientation="vertical" className="mr-2 h-4" /> */}
        <div className="flex flex-1 flex-col gap-4 p-0  sm:p-2 md:p-4 bg-secondary min-h-min h-screen">
          <div className="p-4 pt-8 sm:pt-4 flex-1 bg-background rounded-2xl">
            {children}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
