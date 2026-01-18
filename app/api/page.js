const endpoints = [
  {
    name: "Basic Info",
    path: "/api/basic-info",
    description: "Returns or creates basic profile information",
  },
  {
    name: "Education",
    path: "/api/education",
    description: "Handles education history data",
  },
  {
    name: "Experience",
    path: "/api/experience",
    description: "Handles work experience data",
  },
  {
    name: "Projects",
    path: "/api/projects",
    description: "Handles project portfolio data",
  },
  {
    name: "Reviews",
    path: "/api/reviews",
    description: "Handles user reviews",
  },
];

const post_request_example = `
    fetch("base_url/api/basic-info", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                /* your data here */
                }),
    });
`;

const get_request_example = `fetch("base_url/api/basic-info")
    .then((response) => response.json())
    .then((data) => console.log(data));`;

export default function ApiDocumentation() {
  const baseUrl = "{base_url}";

  return (
    <div className="text-gray-200 bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">API Documentation</h1>
        <p className="mb-4">
            This API provides access to various resources including basic info, education, experience, projects, and reviews. Each endpoint supports GET and POST methods only. 

        </p>
        <p className="mb-8">
          Base URL:{" "}
          <code className="bg-gray-100 text-gray-600 px-2 py-1 rounded">
            {baseUrl}
          </code>
        </p>

        <div className="space-y-6 mb-6">
          {endpoints.map((api) => (
            <div
              key={api.path}
              className="border rounded-lg p-5 bg-gray-800 shadow-sm"
            >
              <h2 className="text-xl font-semibold mb-1">{api.name}</h2>
              <p className="text-gray-400 mb-3">{api.description}</p>

              <div className="mb-2">
                <span className="font-medium">Endpoint:</span>{" "}
                <code className="bg-gray-100 text-gray-600 px-2 py-1 rounded">
                  {baseUrl}
                  {api.path}
                </code>
              </div>

              <div className="mb-2">
                <span className="font-medium">Supported Methods:</span>{" "}
                <span className="text-green-600 font-semibold">GET</span>,{" "}
                <span className="text-blue-600 font-semibold">POST</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-sm text-gray-400 mb-5">
          <p>
            <strong>GET:</strong> Retrieve data
          </p>
          <p>
            <strong>POST:</strong> Create data (JSON body required)
          </p>
        </div>

        <div className="mb-5">
          <p className="font-semibold mb-2">POST Example:</p>
          <pre className="bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto">
            <code>{post_request_example}</code>
          </pre>
        </div>

        <div className="mt-10">
          <p className="font-semibold mb-2">POST Request Example:</p>
          <pre className="bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto">
            <code>{get_request_example}</code>
          </pre>
        </div>

      </div>
    </div>
  );
}
