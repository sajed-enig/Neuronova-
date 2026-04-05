import { Trophy, Flame, Target, Medal, PlayCircle, BookOpen } from "lucide-react";
import React from "react";

interface LearnerSidebarProps {
  name?: string;
  points?: number;
  streakDays?: number;
  goalsThisMonth?: number;
  rank?: number;
  inProgress?: number;
  completed?: number;
  weeklyWatchedHours?: number[];
}

export function LearnerSidebar({
  name = "Explorer",
  points = 876,
  streakDays = 12,
  goalsThisMonth = 4,
  rank = 2,
  inProgress = 3,
  completed = 17,
  weeklyWatchedHours = [2, 1, 0, 3, 2, 0, 1]
}: LearnerSidebarProps) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const todayIndex = new Date().getDay(); // 0 Sun ... 6 Sat
  const normalizedToday = todayIndex === 0 ? 6 : todayIndex - 1; // 0 Mon ... 6 Sun

  const maxWatch = Math.max(1, ...weeklyWatchedHours);

  return (
    <aside className="w-full lg:w-80 shrink-0">
      <div className="bg-card rounded-3xl p-6 border border-border sticky top-24 space-y-6">
        <button className="text-xs text-muted-foreground hover:text-foreground transition-colors font-bold">
          × Close Details
        </button>

        {/* Profile */}
        <div className="p-5 rounded-2xl bg-muted/40 border border-border">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-primary text-white font-bold flex items-center justify-center">
              {name?.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="font-bold text-lg">{name}</div>
              <div className="text-xs text-muted-foreground">Learner</div>
              <div className="mt-1 text-sm font-semibold"><span className="text-primary">●</span> {points} Points</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-5">
            <StatTile
              icon={<Flame className="w-4 h-4 text-orange-500" />}
              value={streakDays}
              label="Days Streak"
            />
            <StatTile
              icon={<Target className="w-4 h-4 text-pink-500" />}
              value={goalsThisMonth}
              label="Goals In Month"
            />
            <StatTile
              icon={<Medal className="w-4 h-4 text-amber-500" />}
              value={rank}
              label="Rank"
            />
          </div>
        </div>

        {/* Weekly Streak */}
        <div className="p-5 rounded-2xl bg-muted/30 border border-border">
          <div className="flex items-center justify-between mb-4">
            <div className="font-bold">Weekly Streak</div>
            <div className="text-xs text-muted-foreground">{new Date().toLocaleString(undefined, { month: 'short', year: 'numeric' })}</div>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {days.map((d, i) => {
              const active = i <= normalizedToday;
              return (
                <div key={d} className={`flex flex-col items-center gap-1 px-2 py-2 rounded-xl border text-xs ${active ? 'bg-background border-border text-foreground' : 'bg-background border-border text-muted-foreground'}`}>
                  <span className="font-bold">{d.substring(0, 1)}</span>
                  <div className={`w-2 h-2 rounded-full ${active ? 'bg-emerald-500' : 'bg-[#E2E8F0]'}`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Course Stats */}
        <div className="grid grid-cols-2 gap-4">
          <MiniCard
            icon={<BookOpen className="w-5 h-5 text-primary" />}
            title={`${inProgress} Courses`}
            subtitle="In Progress"
          />
          <MiniCard
            icon={<Trophy className="w-5 h-5 text-emerald-600" />}
            title={`${completed} Courses`}
            subtitle="Completed"
          />
        </div>

        {/* Watch time */}
        <div className="p-5 rounded-2xl bg-muted/30 border border-border">
          <div className="flex items-center justify-between mb-4">
            <div className="font-bold">Weekly Watch Time</div>
            <div className="text-xs text-muted-foreground">{new Date().toLocaleString(undefined, { month: 'short', year: 'numeric' })}</div>
          </div>
          <div className="flex items-end gap-2 h-24">
            {weeklyWatchedHours.map((h, i) => {
              const height = Math.max(8, (h / maxWatch) * 80);
              return (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div style={{ height }} className="w-6 bg-primary/70 rounded-md shadow-sm" />
                  <span className="text-[10px] text-muted-foreground">{["M", "T", "W", "T", "F", "S", "S"][i]}</span>
                </div>
              );
            })}
          </div>
          <div className="mt-3 flex items-center gap-2 text-sm font-semibold">
            <PlayCircle className="w-4 h-4 text-primary" />
            <span>Total: {weeklyWatchedHours.reduce((a, b) => a + b, 0)} hrs</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

function StatTile({ icon, value, label }: { icon: React.ReactNode; value: number; label: string }) {
  return (
    <div className="bg-background border border-border rounded-xl p-3 text-center">
      <div className="flex items-center justify-center gap-1 mb-1">
        {icon}
        <span className="text-base font-bold">{String(value).padStart(2, '0')}</span>
      </div>
      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{label}</div>
    </div>
  );
}

function MiniCard({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return (
    <div className="p-4 rounded-2xl bg-card border border-border shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center">
          {icon}
        </div>
        <div>
          <div className="font-bold">{title}</div>
          <div className="text-xs text-muted-foreground">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}
