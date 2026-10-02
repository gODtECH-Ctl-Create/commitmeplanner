import { LogOut, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

interface AppHeaderProps {
  title?: string;
  showAvatar?: boolean;
}

const AppHeader = ({ title = "commitme", showAvatar = true }: AppHeaderProps) => {
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    toast.success("Signed out successfully");
  };

  return (
    <header className="flex items-center justify-between px-5 pt-5 pb-3 md:px-0 md:pt-8">
      <div className="flex items-center gap-3">
        {showAvatar && (
          <div className="h-10 w-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
            <User size={19} className="text-primary" />
          </div>
        )}
        <div>
          <h1 className="font-display text-xl font-bold tracking-tight">
            <span className="text-foreground">commit</span><span className="text-primary">me</span>
          </h1>
          {title !== "commitme" && <p className="text-xs text-muted-foreground mt-0.5">{title}</p>}
        </div>
      </div>
      <button
        onClick={handleSignOut}
        aria-label="Sign out"
        title="Sign out"
        className="rounded-full p-2.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
      >
        <LogOut size={19} />
      </button>
    </header>
  );
};

export default AppHeader;