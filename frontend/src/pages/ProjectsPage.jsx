import { useState } from 'react';

export default function ProjectsPage({ projects, onCreateProject }) {
  const [form, setForm] = useState({ title: '', budget: '', customer: '', details: '' });
  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <section className="glass p-4 space-y-3">
        <h2 className="text-xl font-semibold">Publish Infrastructure Project</h2>
        {Object.keys(form).map((key) => (
          <input key={key} className="w-full bg-slate-800 rounded p-2" placeholder={key} onChange={(e) => setForm({ ...form, [key]: e.target.value })} />
        ))}
        <button className="bg-blue-600 rounded px-4 py-2" onClick={() => onCreateProject(form)}>Publish Project</button>
      </section>
      <section className="glass p-4">
        <h3 className="font-semibold mb-3">Open Projects</h3>
        {projects.map((project) => (
          <div key={project.id} className="border border-slate-700 rounded p-3 mb-2">
            <p className="font-medium">{project.title}</p>
            <p className="text-sm text-slate-300">{project.details}</p>
            <p className="text-xs text-blue-300">{project.customer} · {project.budget} · {project.status}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
