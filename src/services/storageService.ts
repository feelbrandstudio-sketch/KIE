export interface VisitorLead {
  id: string;
  badgeId: string;
  name: string;
  company: string;
  designation: string;
  email: string;
  phone: string;
  city: string;
  website?: string;
  interests?: string[];
  registeredAt: string;
  createdAt?: string;
}

export interface ExhibitorBookingLead {
  id: string;
  bookingRef: string;
  name: string;
  company: string;
  designation: string;
  email: string;
  phone: string;
  city: string;
  website?: string;
  stallType: "shell" | "raw";
  stallAreaSqm: number;
  openSides: "1-side" | "corner" | "3-sides" | "island";
  totalEstimatedAmount: number;
  status: "Pending" | "Confirmed" | "Followed Up";
  bookedAt: string;
  createdAt?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  company?: string;
  designation?: string;
  email: string;
  phone: string;
  city?: string;
  subject?: string;
  website?: string;
  message?: string;
  submittedAt: string;
  createdAt?: string;
}

const STORAGE_KEYS = {
  VISITORS: "kie_visitors_db",
  EXHIBITORS: "kie_exhibitor_bookings_db",
  CONTACTS: "kie_contacts_db",
  BOOKMARKS: "kie_bookmarked_exhibitors",
  DOWNLOAD_COUNTS: "kie_download_stats"
};

// Seed initial demo data if empty
const INITIAL_VISITORS: VisitorLead[] = [
  {
    id: "vis-1",
    badgeId: "KIE-VIS-8291",
    name: "Rajesh Shinde",
    company: "Menon & Menon Ltd.",
    designation: "General Manager - Sourcing",
    email: "rajesh.shinde@menon.in",
    phone: "+91 98220 12345",
    city: "Kolhapur",
    website: "https://menon.in",
    interests: ["Foundry, Casting & Metalworking", "Machine Tools & CNC"],
    registeredAt: "2026-09-15 10:24 AM"
  },
  {
    id: "vis-2",
    badgeId: "KIE-VIS-8292",
    name: "Suresh Patil",
    company: "Ghatge Patil Industries Ltd.",
    designation: "Head of Procurement",
    email: "spatil@gpi.co.in",
    phone: "+91 98231 67890",
    city: "Kolhapur",
    website: "https://gpi.co.in",
    interests: ["Auto Components & Precision Engineering", "Hydraulics"],
    registeredAt: "2026-09-16 02:40 PM"
  },
  {
    id: "vis-3",
    badgeId: "KIE-VIS-8293",
    name: "Anand Deshmukh",
    company: "Kirloskar Oil Engines Ltd.",
    designation: "Plant Head",
    email: "anand.d@kirloskar.com",
    phone: "+91 94220 54321",
    city: "Pune",
    website: "https://kirloskaroilengines.com",
    interests: ["Automation, Robotics & Smart Manufacturing", "Welding"],
    registeredAt: "2026-09-17 11:15 AM"
  }
];

const INITIAL_BOOKINGS: ExhibitorBookingLead[] = [
  {
    id: "exbk-1",
    bookingRef: "KIE-EX-1042",
    name: "Mahesh Kulkarni",
    company: "Aakar Mechanical Engineers",
    designation: "Managing Director",
    email: "info@aakarmech.com",
    phone: "+91 98225 99887",
    city: "Kolhapur",
    website: "https://aakarmech.com",
    stallType: "shell",
    stallAreaSqm: 18,
    openSides: "corner",
    totalEstimatedAmount: 221958, // (18 * 9500 = 171,000 + 10% = 188,100 + 18% GST)
    status: "Confirmed",
    bookedAt: "2026-09-14 04:15 PM"
  },
  {
    id: "exbk-2",
    bookingRef: "KIE-EX-1043",
    name: "Vikram Shah",
    company: "Acutecq Technologies",
    designation: "Director - Sales",
    email: "sales@acutecq.com",
    phone: "+91 99220 44332",
    city: "Pune",
    website: "https://acutecq.com",
    stallType: "raw",
    stallAreaSqm: 36,
    openSides: "3-sides",
    totalEstimatedAmount: 415242,
    status: "Pending",
    bookedAt: "2026-09-16 09:30 AM"
  }
];

export const storageService = {
  getVisitors: (): VisitorLead[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.VISITORS);
      if (!data) {
        localStorage.setItem(STORAGE_KEYS.VISITORS, JSON.stringify(INITIAL_VISITORS));
        return INITIAL_VISITORS;
      }
      return JSON.parse(data);
    } catch {
      return INITIAL_VISITORS;
    }
  },

  saveVisitor: (lead: Omit<VisitorLead, "id" | "badgeId" | "registeredAt" | "createdAt">): VisitorLead => {
    const visitors = storageService.getVisitors();
    const badgeNum = 8300 + visitors.length + Math.floor(Math.random() * 50);
    const now = new Date().toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" });
    const newVisitor: VisitorLead = {
      ...lead,
      id: `vis-${Date.now()}`,
      badgeId: `KIE-VIS-${badgeNum}`,
      registeredAt: now,
      createdAt: now
    };
    const updated = [newVisitor, ...visitors];
    localStorage.setItem(STORAGE_KEYS.VISITORS, JSON.stringify(updated));
    return newVisitor;
  },

  getExhibitorBookings: (): ExhibitorBookingLead[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.EXHIBITORS);
      if (!data) {
        localStorage.setItem(STORAGE_KEYS.EXHIBITORS, JSON.stringify(INITIAL_BOOKINGS));
        return INITIAL_BOOKINGS;
      }
      return JSON.parse(data);
    } catch {
      return INITIAL_BOOKINGS;
    }
  },

  saveExhibitorBooking: (booking: Omit<ExhibitorBookingLead, "id" | "bookingRef" | "bookedAt" | "status" | "createdAt">): ExhibitorBookingLead => {
    const bookings = storageService.getExhibitorBookings();
    const refNum = 1050 + bookings.length + Math.floor(Math.random() * 20);
    const now = new Date().toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" });
    const newBooking: ExhibitorBookingLead = {
      ...booking,
      id: `exbk-${Date.now()}`,
      bookingRef: `KIE-EX-${refNum}`,
      status: "Pending",
      bookedAt: now,
      createdAt: now
    };
    const updated = [newBooking, ...bookings];
    localStorage.setItem(STORAGE_KEYS.EXHIBITORS, JSON.stringify(updated));
    return newBooking;
  },

  updateBookingStatus: (id: string, status: ExhibitorBookingLead["status"]) => {
    const bookings = storageService.getExhibitorBookings();
    const updated = bookings.map(b => b.id === id ? { ...b, status } : b);
    localStorage.setItem(STORAGE_KEYS.EXHIBITORS, JSON.stringify(updated));
  },

  getContacts: (): ContactMessage[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CONTACTS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  getContactMessages: (): ContactMessage[] => {
    return storageService.getContacts();
  },

  saveContact: (msg: Omit<ContactMessage, "id" | "submittedAt" | "createdAt">): ContactMessage => {
    const list = storageService.getContacts();
    const now = new Date().toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" });
    const newMsg: ContactMessage = {
      ...msg,
      id: `msg-${Date.now()}`,
      submittedAt: now,
      createdAt: now
    };
    const updated = [newMsg, ...list];
    localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(updated));
    return newMsg;
  },

  saveContactMessage: (msg: Omit<ContactMessage, "id" | "submittedAt" | "createdAt">): ContactMessage => {
    return storageService.saveContact(msg);
  },

  getDownloadStats: (): Record<string, number> => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.DOWNLOAD_COUNTS);
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  },

  incrementDownload: (downloadId: string): number => {
    const stats = storageService.getDownloadStats();
    const current = (stats[downloadId] || 0) + 1;
    stats[downloadId] = current;
    localStorage.setItem(STORAGE_KEYS.DOWNLOAD_COUNTS, JSON.stringify(stats));
    return current;
  },

  getBookmarks: (): string[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  toggleBookmark: (exhibitorName: string): boolean => {
    const bookmarks = storageService.getBookmarks();
    const exists = bookmarks.includes(exhibitorName);
    let updated: string[];
    if (exists) {
      updated = bookmarks.filter(n => n !== exhibitorName);
    } else {
      updated = [...bookmarks, exhibitorName];
    }
    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(updated));
    return !exists;
  },

  exportToCSV: (type: "visitors" | "exhibitors") => {
    if (type === "visitors") {
      const visitors = storageService.getVisitors();
      const headers = ["Badge ID", "Full Name", "Company", "Designation", "Email", "Phone", "City", "Website", "Registered At"];
      const rows = visitors.map(v => [
        v.badgeId,
        `"${v.name.replace(/"/g, '""')}"`,
        `"${v.company.replace(/"/g, '""')}"`,
        `"${v.designation.replace(/"/g, '""')}"`,
        v.email,
        v.phone,
        v.city,
        v.website || "",
        v.registeredAt
      ]);
      const csv = [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `KIE_2027_Visitors_${Date.now()}.csv`;
      a.click();
      URL.revokeObjectURL(url);
    } else {
      const bookings = storageService.getExhibitorBookings();
      const headers = ["Booking Ref", "Company", "Contact Person", "Designation", "Email", "Phone", "City", "Stall Type", "Area (sqm)", "Sides", "Est Total (INR)", "Status", "Booked At"];
      const rows = bookings.map(b => [
        b.bookingRef,
        `"${b.company.replace(/"/g, '""')}"`,
        `"${b.name.replace(/"/g, '""')}"`,
        `"${b.designation.replace(/"/g, '""')}"`,
        b.email,
        b.phone,
        b.city,
        b.stallType.toUpperCase(),
        b.stallAreaSqm,
        b.openSides,
        b.totalEstimatedAmount,
        b.status,
        b.bookedAt
      ]);
      const csv = [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `KIE_2027_Exhibitor_Bookings_${Date.now()}.csv`;
      a.click();
      URL.revokeObjectURL(url);
    }
  }
};
