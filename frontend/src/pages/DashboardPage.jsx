export default function DashboardPage({ data }) {
  const cards = [
    { title: 'Active Projects', value: data.projects.length },
    { title: 'Quote Requests', value: data.quoteRequests.length },
    { title: 'Messages', value: data.messages.length },
    { title: 'Notifications', value: data.notifications.length }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Marketplace Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {cards.map((card) => (
          <div key={card.title} className="glass p-4">
            <p className="text-slate-400 text-sm">{card.title}</p>
            <p className="text-3xl font-bold text-blue-300">{card.value}</p>
          </div>
        ))}
      </div>
      <div className="glass p-4">
        <h3 className="font-semibold mb-2">Recent Notifications</h3>
        {data.notifications.map((note) => (
          <p key={note.id} className="text-sm text-slate-300 mb-1">• {note.message}</p>
        ))}
      </div>
    </div>
  );
}
