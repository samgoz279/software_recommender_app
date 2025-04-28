export default function GridPage() {
  const requirements = [
    {
      requirement: "User Authentication with Roles",
      example: "OAuth2 login; Roles: Admin, Manager, Employee",
    },
    {
      requirement: "Customer Data Storage & Management",
      example: "PostgreSQL database with encryption at rest",
    },
    {
      requirement: "Sales Performance Reports & Analytics",
      example: "Dashboard with KPIs, monthly revenue trends",
    },
    {
      requirement: "Email Service Integration",
      example: "Connected to Gmail API and Outlook API",
    },
    {
      requirement: "API Access for Third-party Integrations",
      example: "RESTful API with OAuth2 authentication",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Example CRM Software Requirements
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Requirement</th>
              <th className="py-3 px-6 text-left">Example Implementation</th>
            </tr>
          </thead>
          <tbody>
            {requirements.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="py-4 px-6 font-medium text-gray-700">
                  {item.requirement}
                </td>
                <td className="py-4 px-6 text-gray-600">{item.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}