import { useState } from "react";
import {
  Search,
  MapPin,
  Briefcase,
  Clock,
  DollarSign,
  Star,
  ChevronRight,
  Bell,
  Settings,
  Users,
  TrendingUp,
  FileText,
  ArrowLeft,
  Building2,
  CheckCircle,
  Filter,
  LayoutDashboard,
  LogIn,
  UserPlus,
  Menu,
  X,
  ExternalLink,
} from "lucide-react";

type View = "landing" | "jobs" | "job-detail" | "talent" | "dashboard";

const jobs = [
  {
    id: 1,
    title: "UI/UX Designer",
    company: "Some Creative Agency",
    location: "London",
    salary: "£45,000 – £55,000",
    type: "Full Time",
    posted: "2 days ago",
    category: "Design",
    requirements: [
      "3+ years experience in UI/UX design",
      "Proficiency in Figma or Sketch",
      "Strong portfolio of digital products",
      "Experience with design systems",
      "Knowledge of HTML/CSS basics",
    ],
    description:
      "We are looking for a talented UI/UX Designer to join our creative team. You will be responsible for delivering the best online user experience, which makes your role extremely important for our success and overall customer satisfaction.",
    logo: "SC",
    color: "#6366f1",
  },
  {
    id: 2,
    title: "Digital Marketing Specialist",
    company: "BrandWorks",
    location: "Manchester",
    salary: "£35,000 – £42,000",
    type: "Full Time",
    posted: "1 day ago",
    category: "Marketing",
    requirements: [
      "Experience with Google Ads & Meta Ads",
      "SEO/SEM knowledge",
      "Analytics and reporting skills",
      "Content strategy experience",
    ],
    description:
      "Join our dynamic marketing team to drive digital campaigns across multiple channels and brands.",
    logo: "BW",
    color: "#f59e0b",
  },
  {
    id: 3,
    title: "Junior Developer",
    company: "TechStart Ltd",
    location: "Remote",
    salary: "£28,000 – £34,000",
    type: "Full Time",
    posted: "3 days ago",
    category: "Engineering",
    requirements: [
      "JavaScript / TypeScript fundamentals",
      "React or Vue experience",
      "Git version control",
      "Eagerness to learn",
    ],
    description:
      "An exciting opportunity for a junior developer to grow within a fast-paced startup environment.",
    logo: "TS",
    color: "#10b981",
  },
  {
    id: 4,
    title: "Content Creator",
    company: "MediaHouse",
    location: "Birmingham",
    salary: "£30,000 – £38,000",
    type: "Part Time",
    posted: "5 days ago",
    category: "Media",
    requirements: [
      "Video production skills",
      "Social media expertise",
      "Copywriting ability",
      "Adobe Creative Suite",
    ],
    description:
      "Create compelling content across video, social, and written channels for leading UK brands.",
    logo: "MH",
    color: "#ec4899",
  },
];

const typeColor: Record<string, string> = {
  "Full Time": "bg-blue-50 text-blue-700",
  "Part Time": "bg-violet-50 text-violet-700",
  Contract: "bg-amber-50 text-amber-700",
};

function Navbar({ activeView, setView }: { activeView: View; setView: (v: View) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <button
          onClick={() => setView("landing")}
          className="flex items-center gap-2 font-bold text-xl text-primary"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-white text-sm font-black">M</span>
          </div>
          Mash IT
        </button>

        <div className="hidden md:flex items-center gap-6">
          {[
            { label: "Jobs", view: "jobs" as View },
            { label: "Talent", view: "talent" as View },
            { label: "For Employers", view: "dashboard" as View },
            { label: "About", view: "landing" as View },
          ].map(({ label, view }) => (
            <button
              key={label}
              onClick={() => setView(view)}
              className={`text-sm font-medium transition-colors ${
                activeView === view
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center gap-1.5">
            <LogIn size={15} /> Log In
          </button>
          <button className="bg-primary text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-1.5">
            <UserPlus size={15} /> Sign Up
          </button>
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border px-4 py-4 space-y-3">
          {["Jobs", "Talent", "For Employers", "About"].map((label) => (
            <button key={label} className="block text-sm font-medium text-foreground w-full text-left py-1">
              {label}
            </button>
          ))}
          <div className="flex gap-2 pt-2">
            <button className="flex-1 border border-border text-sm font-medium py-2 rounded-lg">Log In</button>
            <button className="flex-1 bg-primary text-white text-sm font-medium py-2 rounded-lg">Sign Up</button>
          </div>
        </div>
      )}
    </nav>
  );
}

function LandingPage({ setView }: { setView: (v: View) => void }) {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
              <TrendingUp size={12} /> 10,000+ opportunities live
            </span>
            <h1
              className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight mb-5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Find Talent.<br />
              <span className="text-primary">Find Opportunity.</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Connecting creative, digital, media and tech talent with the right opportunities across the UK.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setView("jobs")}
                className="bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-md shadow-blue-200"
              >
                Find a Job
              </button>
              <button
                onClick={() => setView("dashboard")}
                className="border-2 border-border text-foreground font-semibold px-6 py-3 rounded-xl hover:border-primary hover:text-primary transition-colors"
              >
                Hire Talent
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-full flex items-center justify-center">
                <div className="relative">
                  <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users size={56} className="text-primary/60" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-border">
                    <Search size={20} className="text-primary" />
                  </div>
                </div>
              </div>
              <div className="absolute top-6 -left-4 bg-white rounded-xl shadow-lg p-3 border border-border flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle size={16} className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">Hired!</p>
                  <p className="text-xs text-muted-foreground">UI/UX Designer</p>
                </div>
              </div>
              <div className="absolute bottom-8 -right-6 bg-white rounded-xl shadow-lg p-3 border border-border">
                <p className="text-xs font-bold text-foreground">450+</p>
                <p className="text-xs text-muted-foreground">Companies hiring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
          {[
            { n: "10k+", label: "Live Jobs" },
            { n: "450+", label: "Top Employers" },
            { n: "25k+", label: "Talent Profiles" },
            { n: "92%", label: "Placement Rate" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-extrabold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{s.n}</p>
              <p className="text-blue-200 text-sm mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Browse by Category</h2>
        <p className="text-muted-foreground mb-8">Explore opportunities in your field</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Design", count: "1,240 jobs", icon: "🎨", color: "bg-violet-50 border-violet-100" },
            { label: "Engineering", count: "3,850 jobs", icon: "💻", color: "bg-blue-50 border-blue-100" },
            { label: "Marketing", count: "980 jobs", icon: "📣", color: "bg-amber-50 border-amber-100" },
            { label: "Media", count: "670 jobs", icon: "🎬", color: "bg-pink-50 border-pink-100" },
          ].map((cat) => (
            <button
              key={cat.label}
              onClick={() => setView("jobs")}
              className={`${cat.color} border rounded-xl p-5 text-left hover:shadow-md transition-all group`}
            >
              <span className="text-3xl">{cat.icon}</span>
              <p className="font-semibold text-foreground mt-3 group-hover:text-primary transition-colors">{cat.label}</p>
              <p className="text-sm text-muted-foreground">{cat.count}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Jobs preview */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Featured Jobs</h2>
              <p className="text-muted-foreground mt-1">Handpicked roles from top employers</p>
            </div>
            <button
              onClick={() => setView("jobs")}
              className="text-primary font-medium text-sm flex items-center gap-1 hover:underline"
            >
              View all <ChevronRight size={16} />
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {jobs.slice(0, 2).map((job) => (
              <JobCard key={job.id} job={job} onClick={() => setView("job-detail")} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function JobCard({ job, onClick }: { job: typeof jobs[0]; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-white border border-border rounded-xl p-5 text-left hover:shadow-md hover:border-primary/30 transition-all w-full"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <div
            className="w-11 h-11 rounded-lg flex items-center justify-center text-white text-sm font-bold shrink-0"
            style={{ backgroundColor: job.color }}
          >
            {job.logo}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-foreground text-sm leading-snug">{job.title}</h3>
            <p className="text-muted-foreground text-xs mt-0.5 flex items-center gap-1">
              <Building2 size={11} /> {job.company}
            </p>
          </div>
        </div>
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ${typeColor[job.type] ?? "bg-gray-50 text-gray-600"}`}>
          {job.type}
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1"><MapPin size={11} /> {job.location}</span>
        <span className="flex items-center gap-1"><DollarSign size={11} /> {job.salary}</span>
        <span className="flex items-center gap-1"><Clock size={11} /> {job.posted}</span>
      </div>
    </button>
  );
}

function JobsPage({ setView, selectedJob, setSelectedJob }: {
  setView: (v: View) => void;
  selectedJob: typeof jobs[0] | null;
  setSelectedJob: (j: typeof jobs[0]) => void;
}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Design", "Engineering", "Marketing", "Media"];
  const filtered = jobs.filter((j) => {
    const matchCat = category === "All" || j.category === category;
    const matchSearch = j.title.toLowerCase().includes(search.toLowerCase()) ||
      j.company.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const displayJob = selectedJob ?? jobs[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        Find Your Next Role
      </h1>

      {/* Search */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Job title, company..."
            className="w-full pl-9 pr-4 py-2.5 border border-border rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>
        <div className="relative">
          <Filter size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="pl-8 pr-6 py-2.5 border border-border rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none"
          >
            {categories.map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 gap-5">
        {/* Job list */}
        <div className="lg:col-span-2 space-y-3">
          <p className="text-sm text-muted-foreground">{filtered.length} jobs found</p>
          {filtered.map((job) => (
            <button
              key={job.id}
              onClick={() => { setSelectedJob(job); setView("job-detail"); }}
              className={`w-full text-left border rounded-xl p-4 transition-all hover:shadow-md ${
                displayJob.id === job.id ? "border-primary bg-blue-50/50" : "border-border bg-white hover:border-primary/30"
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0"
                  style={{ backgroundColor: job.color }}
                >
                  {job.logo}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-sm text-foreground">{job.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{job.company} · {job.location}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${typeColor[job.type] ?? "bg-gray-50 text-gray-600"}`}>
                      {job.type}
                    </span>
                    <span className="text-xs text-muted-foreground">{job.salary}</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Job detail inline */}
        <div className="hidden lg:block lg:col-span-3 bg-white border border-border rounded-xl p-6">
          <JobDetailContent job={displayJob} />
        </div>
      </div>
    </div>
  );
}

function JobDetailContent({ job }: { job: typeof jobs[0] }) {
  const [applied, setApplied] = useState(false);
  return (
    <div>
      <div className="flex items-start gap-4 mb-6">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-lg shrink-0"
          style={{ backgroundColor: job.color }}
        >
          {job.logo}
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {job.title}
          </h2>
          <p className="text-muted-foreground text-sm mt-0.5">{job.company} · {job.location}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${typeColor[job.type]}`}>{job.type}</span>
            <span className="text-xs text-muted-foreground">{job.posted}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        {[
          { icon: <DollarSign size={14} />, label: "Salary", value: job.salary },
          { icon: <MapPin size={14} />, label: "Location", value: job.location },
          { icon: <Briefcase size={14} />, label: "Type", value: job.type },
          { icon: <Clock size={14} />, label: "Posted", value: job.posted },
        ].map((detail) => (
          <div key={detail.label} className="bg-muted rounded-lg p-3">
            <div className="flex items-center gap-1.5 text-muted-foreground mb-1">
              {detail.icon}
              <span className="text-xs">{detail.label}</span>
            </div>
            <p className="text-sm font-medium text-foreground">{detail.value}</p>
          </div>
        ))}
      </div>

      <h3 className="font-semibold text-foreground mb-2">About the Role</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-5">{job.description}</p>

      <h3 className="font-semibold text-foreground mb-3">Requirements</h3>
      <ul className="space-y-2 mb-7">
        {job.requirements.map((req) => (
          <li key={req} className="flex items-start gap-2 text-sm text-muted-foreground">
            <CheckCircle size={15} className="text-primary shrink-0 mt-0.5" />
            {req}
          </li>
        ))}
      </ul>

      <div className="flex gap-3">
        <button
          onClick={() => setApplied(true)}
          className={`flex-1 py-3 rounded-xl font-semibold text-sm transition-all ${
            applied
              ? "bg-green-500 text-white cursor-default"
              : "bg-primary text-white hover:bg-blue-700 shadow-md shadow-blue-200"
          }`}
        >
          {applied ? "✓ Application Sent" : "Apply Now"}
        </button>
        <button className="px-4 py-3 border-2 border-border rounded-xl hover:border-primary hover:text-primary transition-colors">
          <Star size={18} />
        </button>
        <button className="px-4 py-3 border-2 border-border rounded-xl hover:border-primary hover:text-primary transition-colors">
          <ExternalLink size={18} />
        </button>
      </div>
    </div>
  );
}

function JobDetailPage({ job, setView }: { job: typeof jobs[0]; setView: (v: View) => void }) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <button
        onClick={() => setView("jobs")}
        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6 group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
        Back to jobs
      </button>
      <div className="bg-white border border-border rounded-xl p-6 md:p-8">
        <JobDetailContent job={job} />
      </div>
    </div>
  );
}

const talent = {
  name: "Jordan Lee",
  title: "UX Designer",
  location: "London, UK",
  available: "Immediately",
  rate: "£450/day",
  bio: "Experienced UX Designer with a passion for creating intuitive, accessible digital products. I have 5+ years working with creative agencies, startups and in-house teams across fintech, media and e-commerce.",
  skills: ["Figma", "User Research", "Wireframing", "Prototyping", "Design Systems", "HTML/CSS", "Usability Testing"],
  experience: [
    { role: "Senior UX Designer", company: "Creative Digital Co.", period: "2021 – Present", desc: "Led UX for 3 major product launches, managed design system for 40+ components." },
    { role: "UX/UI Designer", company: "AgencyOne", period: "2019 – 2021", desc: "Delivered end-to-end design for e-commerce and media clients." },
    { role: "Junior Designer", company: "Startup Hub", period: "2017 – 2019", desc: "Contributed to MVP design across web and mobile platforms." },
  ],
};

function TalentPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Talent Network</h1>
      <p className="text-muted-foreground mb-8">Discover top creative, digital, media and tech professionals</p>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Talent Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-border rounded-xl p-6">
            <div className="flex flex-col items-center text-center mb-5">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-3">
                JL
              </div>
              <h2 className="font-bold text-lg text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {talent.name}
              </h2>
              <p className="text-muted-foreground text-sm">{talent.title}</p>
              <span className="mt-2 inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Available {talent.available}
              </span>
            </div>

            <div className="space-y-2.5 mb-5 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={14} /> {talent.location}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <DollarSign size={14} /> {talent.rate}
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-5">{talent.bio}</p>

            <div className="flex flex-wrap gap-2 mb-5">
              {talent.skills.map((skill) => (
                <span key={skill} className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>

            <button className="w-full bg-primary text-white font-semibold py-2.5 rounded-xl text-sm hover:bg-blue-700 transition-colors shadow-md shadow-blue-200">
              Contact Jordan
            </button>
          </div>
        </div>

        {/* Experience */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white border border-border rounded-xl p-6">
            <h3 className="font-semibold text-foreground mb-4">Experience</h3>
            <div className="space-y-5">
              {talent.experience.map((exp, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
                      <Briefcase size={14} className="text-primary" />
                    </div>
                    {i < talent.experience.length - 1 && (
                      <div className="w-px flex-1 bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-5">
                    <h4 className="font-semibold text-sm text-foreground">{exp.role}</h4>
                    <p className="text-xs text-muted-foreground">{exp.company} · {exp.period}</p>
                    <p className="text-sm text-muted-foreground mt-1">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* More talent cards */}
          <div className="bg-white border border-border rounded-xl p-5">
            <h3 className="font-semibold text-foreground mb-4">More Talent</h3>
            <div className="space-y-3">
              {[
                { name: "Alex Kim", title: "React Developer", avail: true, rate: "£500/day", init: "AK", color: "#10b981" },
                { name: "Sara Patel", title: "Brand Designer", avail: true, rate: "£380/day", init: "SP", color: "#f59e0b" },
                { name: "Marcus Webb", title: "Content Strategist", avail: false, rate: "£320/day", init: "MW", color: "#8b5cf6" },
              ].map((p) => (
                <div key={p.name} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: p.color }}>
                      {p.init}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{p.name}</p>
                      <p className="text-xs text-muted-foreground">{p.title}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-medium text-foreground">{p.rate}</p>
                    <span className={`text-xs ${p.avail ? "text-green-600" : "text-muted-foreground"}`}>
                      {p.avail ? "Available" : "Unavailable"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardPage() {
  const stats = [
    { label: "Active Jobs", value: 12, icon: <Briefcase size={18} />, color: "bg-blue-50 text-blue-700" },
    { label: "Applicants", value: 45, icon: <Users size={18} />, color: "bg-violet-50 text-violet-700" },
    { label: "Interviews", value: 8, icon: <CheckCircle size={18} />, color: "bg-green-50 text-green-700" },
  ];

  const applications = [
    { name: "Jordan Lee", role: "UI/UX Designer", status: "Interview", time: "2h ago", init: "JL", color: "#6366f1" },
    { name: "Alex Kim", role: "Junior Developer", status: "Reviewing", time: "5h ago", init: "AK", color: "#10b981" },
    { name: "Sara Patel", role: "Digital Marketing", status: "New", time: "1d ago", init: "SP", color: "#f59e0b" },
    { name: "Marcus Webb", role: "Content Creator", status: "Reviewing", time: "1d ago", init: "MW", color: "#8b5cf6" },
    { name: "Priya Shah", role: "UI/UX Designer", status: "New", time: "2d ago", init: "PS", color: "#ec4899" },
  ];

  const statusStyle: Record<string, string> = {
    New: "bg-blue-50 text-blue-700",
    Reviewing: "bg-amber-50 text-amber-700",
    Interview: "bg-green-50 text-green-700",
    Rejected: "bg-red-50 text-red-600",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Employer Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">Welcome back, Acme Creative</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg border border-border bg-white hover:bg-muted transition-colors">
            <Bell size={18} className="text-muted-foreground" />
          </button>
          <button className="p-2 rounded-lg border border-border bg-white hover:bg-muted transition-colors">
            <Settings size={18} className="text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="bg-white border border-border rounded-xl p-5">
            <div className={`w-10 h-10 ${s.color} rounded-lg flex items-center justify-center mb-3`}>
              {s.icon}
            </div>
            <p className="text-3xl font-extrabold text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {s.value}
            </p>
            <p className="text-sm text-muted-foreground mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Applications */}
        <div className="lg:col-span-2 bg-white border border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-semibold text-foreground">Recent Applications</h3>
            <button className="text-sm text-primary hover:underline">View all</button>
          </div>
          <div className="space-y-3">
            {applications.map((app) => (
              <div key={app.name} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                    style={{ backgroundColor: app.color }}
                  >
                    {app.init}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{app.name}</p>
                    <p className="text-xs text-muted-foreground">{app.role} · {app.time}</p>
                  </div>
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusStyle[app.status]}`}>
                  {app.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Overview sidebar */}
        <div className="space-y-4">
          <div className="bg-white border border-border rounded-xl p-5">
            <h3 className="font-semibold text-foreground mb-4">Overview</h3>
            <div className="space-y-3">
              {[
                { label: "Views this week", value: "1,240", icon: <TrendingUp size={14} /> },
                { label: "Total applicants", value: "45", icon: <Users size={14} /> },
                { label: "Active listings", value: "12", icon: <FileText size={14} /> },
                { label: "Avg. time to hire", value: "18 days", icon: <Clock size={14} /> },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <div className="flex items-center gap-2 text-muted-foreground text-xs">
                    {item.icon} {item.label}
                  </div>
                  <span className="text-sm font-semibold text-foreground">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary rounded-xl p-5 text-white">
            <h3 className="font-semibold mb-2">Post a New Job</h3>
            <p className="text-blue-200 text-sm mb-4">Reach thousands of qualified candidates in your sector.</p>
            <button className="w-full bg-white text-primary font-semibold py-2 rounded-lg text-sm hover:bg-blue-50 transition-colors">
              Create Job Listing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [view, setView] = useState<View>("landing");
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null);

  const handleSetView = (v: View) => setView(v);

  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar activeView={view} setView={handleSetView} />

      {view === "landing" && <LandingPage setView={handleSetView} />}
      {view === "jobs" && (
        <JobsPage
          setView={handleSetView}
          selectedJob={selectedJob}
          setSelectedJob={setSelectedJob}
        />
      )}
      {view === "job-detail" && (
        <JobDetailPage job={selectedJob ?? jobs[0]} setView={handleSetView} />
      )}
      {view === "talent" && <TalentPage />}
      {view === "dashboard" && <DashboardPage />}

      {/* Footer */}
      <footer className="border-t border-border bg-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-bold text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
              <span className="text-white text-xs font-black">M</span>
            </div>
            Mash IT
          </div>
          <p className="text-xs text-muted-foreground">© 2026 Mash IT. Connecting talent with opportunity.</p>
          <div className="flex gap-4">
            {["Privacy", "Terms", "Contact"].map((l) => (
              <a key={l} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
