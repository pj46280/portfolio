const projects = [
    {
      title: "IoT Monitoring Platform",
      desc: "Built a platform to visualize sensor data using MQTT, Node-RED & Python with real-time dashboards.",
    },
    {
      title: "CI/CD Pipeline for ML API",
      desc: "Deployed ML model as API using Docker and automated deployment with GitHub Actions.",
    },
  ];
  
  export default function Projects() {
    return (
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-green-600 mb-2">{p.title}</h3>
              <p className="text-gray-700">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }