import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get("auth_user");

  if (!authCookie) {
    redirect("/login");
  }

  const user = JSON.parse(authCookie.value);

  return (
    <div className="min-h-screen bg-gray-950 text-white flex">

      {/* ================= Sidebar ================= */}
      <aside className="w-64 bg-gray-900 border-r border-white/10 p-6 flex flex-col">

        <div className="flex items-center gap-4 mb-10">
          <Image
            src="/profile.webp"
            alt="Profile"
            width={50}
            height={50}
            className="rounded-full border border-white/20"
          />
          <div>
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-white/60">{user.email}</p>
          </div>
        </div>

        <nav className="space-y-4 flex-1">
          <SidebarItem label="Dashboard" />
          <SidebarItem label="Analytics" />
          <SidebarItem label="Task List" />
          <SidebarItem label="Tracking" />
          <SidebarItem label="Settings" />
        </nav>

        <form action="/api/auth/logout" method="post">
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-pink-500 hover:bg-pink-600 transition font-semibold"
          >
            Logout
          </button>
        </form>
      </aside>


      {/* ================= Main Content ================= */}
      <main className="flex-1 p-8 space-y-8">
        <div className="flex justify-between items-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-64 px-4 py-2 rounded-lg bg-white/10 border border-white/20 outline-none"
          />

          <button className="px-5 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 transition font-semibold">
            + New Project
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="Tracked Time" value="5h 24m" />
          <StatCard title="Tasks Finished" value="12" />
          <StatCard title="Calendar Events" value="3" />
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Today's Tasks</h2>

          <ul className="list-[circle] pl-5 space-y-3 text-white/80">
            <li>Design dashboard UI</li>
            <li>Fix authentication flow</li>
            <li>Optimize images</li>
          </ul>

        </div>

      </main>
    </div>
  );
}

/* ================= Reusable Components ================= */

function SidebarItem({ label }) {
  return (
    <div className="px-3 py-2 rounded-lg hover:bg-white/10 cursor-pointer transition">
      {label}
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
      <p className="text-sm text-white/60">{title}</p>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}

