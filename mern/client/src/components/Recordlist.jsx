import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* ---------- Single Table Row ---------- */
const Record = ({ record, deleteRecord }) => (
  <tr className="border-b transition-colors hover:bg-muted/50">
    <td className="p-4 align-middle">
      {record.name}
    </td>

    <td className="p-4 align-middle">
      {record.region}
    </td>

    <td className="p-4 align-middle">
      {record.rating}
    </td>

    <td className="p-4 align-middle">
      ${record.fee}
    </td>

    <td className="p-4 align-middle">
      {record.sales}
    </td>

    <td className="p-4 align-middle">
      <div className="flex gap-2">
        <Link
          className="inline-flex items-center justify-center h-9 rounded-md px-3 border hover:bg-slate-100"
          to={`/edit/${record._id}`}
        >
          Edit
        </Link>

        <button
          className="inline-flex items-center justify-center h-9 rounded-md px-3 border hover:bg-slate-100"
          type="button"
          onClick={() => deleteRecord(record._id)}
        >
          Delete
        </button>
      </div>
    </td>
  </tr>
);

/* ---------- Record List ---------- */
export default function RecordList() {
  const [records, setRecords] = useState([]);

  // Fetch agents once on load
  useEffect(() => {
    async function getRecords() {
      try {
        const response = await fetch("http://localhost:5050/record");
        if (!response.ok) {
          throw new Error("Failed to fetch agents");
        }
        const data = await response.json();
        setRecords(data);
      } catch (error) {
        console.error(error);
      }
    }

    getRecords();
  }, []);

  // Delete agent
  async function deleteRecord(id) {
    await fetch(`http://localhost:5050/record/${id}`, {
      method: "DELETE",
    });

    setRecords((prev) => prev.filter((record) => record._id !== id));
  }

  return (
    <>
      <h3 className="text-lg font-semibold p-4">
        Rocket Elevators – Agents
      </h3>

      <div className="border rounded-lg overflow-hidden">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&_tr]:border-b">
              <tr>
                <th className="h-12 px-4 text-left">Name</th>
                <th className="h-12 px-4 text-left">Region</th>
                <th className="h-12 px-4 text-left">Rating</th>
                <th className="h-12 px-4 text-left">Fee</th>
                <th className="h-12 px-4 text-left">Sales</th>
                <th className="h-12 px-4 text-left">Actions</th>
              </tr>
            </thead>

            <tbody className="[&_tr:last-child]:border-0">
              {records.length > 0 ? (
                records.map((record) => (
                  <Record
                    key={record._id}
                    record={record}
                    deleteRecord={deleteRecord}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="p-4 text-center">
                    No agents found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
