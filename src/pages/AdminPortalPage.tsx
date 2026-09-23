import React, { useState, useEffect } from "react";
import { storageService, VisitorLead, ExhibitorBookingLead, ContactMessage } from "../services/storageService";

export const AdminPortalPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"visitors" | "exhibitors" | "messages">("visitors");
  const [visitors, setVisitors] = useState<VisitorLead[]>([]);
  const [exhibitors, setExhibitors] = useState<ExhibitorBookingLead[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const refreshData = () => {
    setVisitors(storageService.getVisitors());
    setExhibitors(storageService.getExhibitorBookings());
    setMessages(storageService.getContactMessages());
  };

  useEffect(() => {
    refreshData();
  }, []);

  const handleExportCSV = (type: "visitors" | "exhibitors") => {
    let csvContent = "data:text/csv;charset=utf-8,";
    if (type === "visitors") {
      csvContent += "ID,Name,Company,Designation,Email,Phone,City,Website,RegistrationDate\n";
      visitors.forEach((v) => {
        csvContent += `"${v.id}","${v.name}","${v.company}","${v.designation}","${v.email}","${v.phone}","${v.city}","${v.website || ""}","${v.createdAt || v.registeredAt || ""}"\n`;
      });
    } else {
      csvContent += "ID,Name,Company,Designation,Email,Phone,City,StallType,AreaSqm,OpenSides,TotalAmount,BookingDate\n";
      exhibitors.forEach((e) => {
        csvContent += `"${e.id}","${e.name}","${e.company}","${e.designation}","${e.email}","${e.phone}","${e.city}","${e.stallType}","${e.stallAreaSqm}","${e.openSides}","${e.totalEstimatedAmount}","${e.createdAt || e.bookedAt || ""}"\n`;
      });
    }

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `KIE_2027_${type}_leads.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const totalExhibitorPipeline = exhibitors.reduce((acc, curr) => acc + (curr.totalEstimatedAmount || 0), 0);

  return (
    <div className="font-sans">
      <div className="bg-[#153a6b] text-white py-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="text-xs font-extrabold text-[#f3701e] uppercase tracking-widest block mb-1">
              ORGANIZER DASHBOARD
            </span>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              KIE 2027 Dynamic Leads & Registrations Portal
            </h1>
            <p className="text-xs text-slate-300 mt-1">
              Manage visitor badges, exhibitor bookings & live inquiries without external cloud lock-in.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => handleExportCSV(activeTab === "exhibitors" ? "exhibitors" : "visitors")}
              className="bg-[#f3701e] hover:bg-[#d95e10] text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 shadow-sm"
            >
              <i className="bi bi-file-earmark-spreadsheet-fill"></i> Export CSV
            </button>
            <button
              onClick={refreshData}
              className="bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg text-xs font-bold transition-colors"
              title="Refresh Records"
            >
              <i className="bi bi-arrow-clockwise"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Total Visitor Badges Issued
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-[#153a6b] font-mono">{visitors.length}</span>
              <span className="text-xs text-green-600 font-bold">Live</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1">Pre-registered industrial trade delegates.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Stall Booking Applications
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-[#f3701e] font-mono">{exhibitors.length}</span>
              <span className="text-xs text-slate-400 font-bold">Applications</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1">Total stall applications submitted online.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Stall Pipeline Value
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-slate-900 font-mono">
                ₹{totalExhibitorPipeline.toLocaleString("en-IN")}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1">Estimated pro-forma revenue before allocation.</p>
          </div>
        </div>

        {/* Tab Navigation & Search Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
          <div className="flex gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab("visitors")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "visitors"
                  ? "bg-[#153a6b] text-white shadow-xs"
                  : "bg-white text-slate-700 hover:bg-slate-200"
              }`}
            >
              Visitor Badges ({visitors.length})
            </button>
            <button
              onClick={() => setActiveTab("exhibitors")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "exhibitors"
                  ? "bg-[#153a6b] text-white shadow-xs"
                  : "bg-white text-slate-700 hover:bg-slate-200"
              }`}
            >
              Stall Bookings ({exhibitors.length})
            </button>
            <button
              onClick={() => setActiveTab("messages")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "messages"
                  ? "bg-[#153a6b] text-white shadow-xs"
                  : "bg-white text-slate-700 hover:bg-slate-200"
              }`}
            >
              Contact Inquiries ({messages.length})
            </button>
          </div>

          <div className="relative w-full sm:w-72">
            <i className="bi bi-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
            <input
              type="text"
              placeholder="Search leads by name or company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-white rounded-lg border border-slate-300 text-xs font-medium text-slate-800 focus:outline-none focus:border-[#f3701e]"
            />
          </div>
        </div>

        {/* Dynamic Table Content */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          {activeTab === "visitors" && (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase text-[10px]">
                  <tr>
                    <th className="py-3 px-4">Badge ID</th>
                    <th className="py-3 px-4">Delegate Name</th>
                    <th className="py-3 px-4">Company & Designation</th>
                    <th className="py-3 px-4">Email & Phone</th>
                    <th className="py-3 px-4">City</th>
                    <th className="py-3 px-4">Date Registered</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {visitors
                    .filter(
                      (v) =>
                        v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        v.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        v.city.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((v) => (
                      <tr key={v.id} className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-mono font-bold text-[#f3701e]">{v.id}</td>
                        <td className="py-3 px-4 font-bold text-slate-900">{v.name}</td>
                        <td className="py-3 px-4">
                          <span className="font-semibold text-slate-900 block">{v.company}</span>
                          <span className="text-[11px] text-slate-400">{v.designation}</span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="block text-slate-700">{v.email}</span>
                          <span className="text-[11px] text-slate-400 font-mono">{v.phone}</span>
                        </td>
                        <td className="py-3 px-4">{v.city}</td>
                        <td className="py-3 px-4 text-slate-400 text-[11px]">
                          {v.createdAt || v.registeredAt}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "exhibitors" && (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase text-[10px]">
                  <tr>
                    <th className="py-3 px-4">Ref Code</th>
                    <th className="py-3 px-4">Company</th>
                    <th className="py-3 px-4">Contact Person</th>
                    <th className="py-3 px-4">Stall Specs</th>
                    <th className="py-3 px-4">Estimated Total</th>
                    <th className="py-3 px-4">City</th>
                    <th className="py-3 px-4">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {exhibitors
                    .filter(
                      (e) =>
                        e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        e.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        e.city.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((e) => (
                      <tr key={e.id} className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-mono font-bold text-[#153a6b]">{e.id}</td>
                        <td className="py-3 px-4 font-bold text-slate-900">{e.company}</td>
                        <td className="py-3 px-4">
                          <span className="font-semibold text-slate-900 block">{e.name}</span>
                          <span className="text-[11px] text-slate-400">{e.phone}</span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="font-bold text-slate-800 uppercase text-[11px] block">
                            {e.stallType === "shell" ? "Built-up Shell" : "Bare Space"} ({e.stallAreaSqm} sqm)
                          </span>
                          <span className="text-[10px] text-[#f3701e] font-semibold">{e.openSides}</span>
                        </td>
                        <td className="py-3 px-4 font-mono font-bold text-slate-900">
                          ₹{e.totalEstimatedAmount.toLocaleString("en-IN")}
                        </td>
                        <td className="py-3 px-4">{e.city}</td>
                        <td className="py-3 px-4 text-slate-400 text-[11px]">
                          {e.createdAt || e.bookedAt}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "messages" && (
            <div className="p-6 space-y-4">
              {messages.length === 0 ? (
                <div className="text-center py-8 text-slate-400 text-xs">No contact inquiries yet.</div>
              ) : (
                messages.map((m) => (
                  <div key={m.id} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                    <div className="flex justify-between items-center text-xs">
                      <strong className="text-[#153a6b]">{m.name}</strong>
                      <span className="text-[10px] text-slate-400">{m.createdAt || m.submittedAt}</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-800">{m.subject || "General Inquiry"}</p>
                    <p className="text-xs text-slate-600 bg-white p-3 rounded-lg border border-slate-100">{m.message}</p>
                    <div className="text-[11px] text-slate-400 flex gap-4 pt-1">
                      <span><i className="bi bi-envelope"></i> {m.email}</span>
                      <span><i className="bi bi-telephone"></i> {m.phone}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
