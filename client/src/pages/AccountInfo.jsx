// src/components/AccountInfo.jsx
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export default function AccountInfo({ user, stats, onLogout }) {
  return (
    <Card className="space-y-4 p-4">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarFallback>
            {user.name?.[0] || user.email?.[0]}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-lg">{user.name || "User"}</p>
          <p className="text-sm text-muted-foreground">{user.email}</p>
        </div>
      </div>

      <div className="space-y-1">
        <p><strong>Joined:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
        <p><strong>Tasks:</strong> {stats.total} (✅ {stats.completed})</p>
      </div>

      <Button variant="outline" className="w-full mt-4" onClick={onLogout}>
        <LogOut className="w-4 h-4 mr-2" /> Logout
      </Button>
    </Card>
  );
}
