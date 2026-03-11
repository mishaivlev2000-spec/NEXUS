export default function CompaniesPage({ companies }) {
  return (
    <div className="glass p-4">
      <h2 className="text-xl font-semibold mb-3">Company Profiles</h2>
      <div className="grid md:grid-cols-2 gap-3">
        {companies.map((company) => (
          <div key={company.id} className="border border-slate-700 rounded-lg p-3">
            <p className="font-semibold">{company.name}</p>
            <p className="text-sm text-slate-300">{company.description}</p>
            <p className="text-xs text-blue-300 mt-1">{company.specialization} · {company.location}</p>
            <p className="text-xs text-slate-400">Brands: {company.supportedBrands?.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
