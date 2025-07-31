
export default function About() {
  const team = [
    {
      name: "Alex Mwangi",
      role: "Frontend Developer",
      bio: "Passionate about clean UI and user-focused design.",
    },
    {
      name: "Jane Wairimu",
      role: "Backend Developer",
      bio: "Loves working with Node.js and creating scalable APIs.",
    },
    {
      name: "Kevin Otieno",
      role: "DevOps Engineer",
      bio: "Ensures the app runs smoothly and deploys without hiccups.",
    },
	{
      name: "Iddy K. Chesire",
      role: "Application Security Engineer",
      bio: "Focuses on securing authentication flows, protecting sensitive routes, and ensuring data integrity throughout the Developer Task Manager app.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 py-12 flex flex-col items-center">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-10 mb-10">
        <h1 className="text-3xl font-extrabold mb-4 text-center text-orange-600 dark:text-orange-400">
          About Developer Task Manager
        </h1>
        <p className="text-lg text-2xl leading-relaxed mb-4">
          <strong>Developer Task Manager</strong> is a lightweight productivity tool designed for
          developers. It helps streamline your workflow by organizing tasks, tracking progress,
          and boosting efficiency all in a clean, developer-friendly interface.
        </p>
        <p className="text-lg text-2xl leading-relaxed mb-4">
          Built using modern web technologies like React and Node.js, this tool is perfect for
          solo developers or agile teams needing a simple, no-frills solution for staying organized.
        </p>
        <p className="text-lg text-2xl leading-relaxed">
          Whether you're managing side projects or client work, Developer Task Manager keeps you
          focused and productive.
        </p>
      </div>

      {/* Team Section */}
      <div className="max-w-5xl w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-orange-600 dark:text-orange-400">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center"
            >
              <img
                src={`https://api.dicebear.com/7.x/initials/svg?seed=${member.name}`}
                alt={member.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-orange-500">{member.role}</p>
              <p className="text-sm mt-2">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
