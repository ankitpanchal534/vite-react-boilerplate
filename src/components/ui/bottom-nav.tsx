import { Book, Home, Search, Settings } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", href: "#" },
  { icon: Book, label: "Docs", href: "#" },
  { icon: Search, label: "Search", href: "#" },
  { icon: Settings, label: "Settings", href: "#" },
];

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t md:hidden">
      <ul className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="flex flex-col items-center px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <item.icon className="h-6 w-6" />
              <span className="mt-1">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
