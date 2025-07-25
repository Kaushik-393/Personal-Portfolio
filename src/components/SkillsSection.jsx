import { useState } from "react";
import {
  FileCode,
  Brain,
  MonitorCog,
  Database,
  Globe,
  FileText,
  FileCode2,
  Users,
  Timer,
  Settings,
  Lightbulb,
  Languages,
  RefreshCcw,
  PenTool,
  Code,
  Snowflake,
  Atom,
  Worm
} from "lucide-react";

export const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const technical = [
    { name: "C Programming", icon: <Code className="h-5 w-5 text-primary" /> },
    { name: "Data Structures & Algorithms", icon: <Brain className="h-5 w-5 text-primary" /> },
    { name: "Python Programming", icon: <Worm className="h-5 w-5 text-primary" /> },
    { name: "HyperText Markup Language", icon: <FileCode2 className="h-5 w-5 text-primary" /> },
    { name: "MySQL Database", icon: <Database className="h-5 w-5 text-primary" /> },
    { name: "Computer Networks", icon: <Globe className="h-5 w-5 text-primary" /> },
    { name: "Microsoft Office", icon: <FileText className="h-5 w-5 text-primary" /> },
    { name: "VS Code", icon:< Atom className="h-5 w-5 text-primary" /> },
  ];

  const softSkills = [
    { name: "Communication", icon: <Languages className="h-5 w-5 text-primary" /> },
    { name: "Problem Solving", icon: <Brain className="h-5 w-5 text-primary" /> },
    { name: "Time Management", icon: <Timer className="h-5 w-5 text-primary" /> },
    { name: "Adaptability", icon: <RefreshCcw className="h-5 w-5 text-primary" /> },
    { name: "Team Work", icon: <Users className="h-5 w-5 text-primary" /> },
    { name: "Creativity", icon: <PenTool className="h-5 w-5 text-primary" /> },
  ];

  const getSkillsToDisplay = () => {
    if (activeTab === "technical") return technical;
    if (activeTab === "soft") return softSkills;
    return [...technical, ...softSkills];
  };

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Toggle Tabs */}
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-6 py-2 rounded-full border font-semibold ${
              activeTab === "all"
                ? "bg-primary text-white"
                : "border-primary text-primary hover:bg-primary/10"
            } transition duration-300`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab("technical")}
            className={`px-6 py-2 rounded-full border font-semibold ${
              activeTab === "technical"
                ? "bg-primary text-white"
                : "border-primary text-primary hover:bg-primary/10"
            } transition duration-300`}
          >
            Technical
          </button>
          <button
            onClick={() => setActiveTab("soft")}
            className={`px-6 py-2 rounded-full border font-semibold ${
              activeTab === "soft"
                ? "bg-primary text-white"
                : "border-primary text-primary hover:bg-primary/10"
            } transition duration-300`}
          >
            Soft
          </button>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {getSkillsToDisplay().map((skill, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-4 text-center shadow hover:shadow-lg transition flex flex-col items-center gap-2"
            >
              {skill.icon}
              <span className="text-lg font-medium text-foreground">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
