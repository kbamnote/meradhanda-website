import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  ChevronRight
} from 'lucide-react';

type ModuleCard = {
  icon: string;
  title: string;
  description: string;
  tags: string[];
};

type TabData = {
  icon: string;
  label: string;
  modules: ModuleCard[];
};

const tabs: TabData[] = [
  {
    icon: '👥',
    label: 'HR & People',
    modules: [
      { icon: '📅', title: 'Attendance Management', description: 'GPS punch-in/out, selfie capture, shift tracking, regularization requests, bulk CSV import.', tags: ['GPS', 'Auto-sync'] },
      { icon: '🏖️', title: 'Leave Management', description: 'Multi-level approval workflows, balance tracking, team calendar, policy configuration per leave type.', tags: ['Workflows', 'Policy Engine'] },
      { icon: '💰', title: 'Payroll', description: 'CTC structure, auto deductions (PF, ESI, TDS), payslip PDF, bank transfer file export.', tags: ['GST Ready', 'Statutory'] },
      { icon: '👤', title: 'Staff Directory', description: 'Full employee profiles with documents, work history, attendance, leave balance, performance reviews.', tags: ['Documents', 'Timeline'] },
      { icon: '👥', title: 'HR Dashboard', description: 'Headcount, attrition, open positions, upcoming appraisals, recent HR actions.', tags: ['KPIs', 'Alerts'] },
      { icon: '🏢', title: 'Manage Departments', description: 'Department cards with HOD, staff count, org chart, quick reassignment.', tags: ['Org Chart', 'Tree View'] },
      { icon: '👔', title: 'Hierarchy', description: 'Interactive org tree, click nodes to view reporting lines, editable, PDF/PNG export.', tags: ['Interactive', 'PDF Export'] },
      { icon: '⭐', title: 'Productivity', description: 'Personal productivity score, task completion rate chart, time tracking per project, leaderboard, focus mode (Pomodoro).', tags: ['Leaderboard', 'Focus Mode'] },
    ],
  },
  {
    icon: '📞',
    label: 'Sales & CRM',
    modules: [
      { icon: '📞', title: 'Leads & CRM', description: 'Pipeline kanban/list toggle, lead cards with source/stage/score, full activity timeline, CSV/WhatsApp import.', tags: ['Kanban', 'Lead Scoring'] },
      { icon: '💼', title: 'Sales Overview', description: 'Pipeline value, stage-wise funnel, win rate %, avg deal size, rep performance table.', tags: ['Funnel', 'Analytics'] },
      { icon: '🎯', title: 'Sales Targets', description: 'Target setting by team/individual/product, progress gauge, leaderboard, gap analysis.', tags: ['Targets', 'Leaderboard'] },
      { icon: '📱', title: 'Cold Calling', description: 'Click-to-call dialer, call timer, in-call notes, disposition tags, call scripts panel, performance metrics.', tags: ['Dialer', 'Scripts'] },
      { icon: '💖', title: 'Customer Hub', description: 'Customer directory, profile with purchase timeline, segmentation by tier/location, quick actions.', tags: ['Segments', 'Profiles'] },
      { icon: '💳', title: 'Membership Cards', description: 'Visual card designer, QR codes, points & tier tracking, bulk issue, renewal reminders.', tags: ['QR Code', 'Tiers'] },
      { icon: '📢', title: 'Broadcast', description: 'Rich text composer, audience selector (All/Dept/Role/Custom), scheduled sends, read receipts, templates.', tags: ['WhatsApp', 'SMS', 'Email'] },
    ],
  },
  {
    icon: '🏭',
    label: 'Production',
    modules: [
      { icon: '📋', title: 'Job Cards', description: 'ID, product, assignee, deadline, priority, status, linked materials, checklists, time log.', tags: ['Kanban', 'Templates'] },
      { icon: '✅', title: 'Quality Check', description: 'QC checklist builder per product, pass/fail per parameter, photo upload, rework trigger, QC reports.', tags: ['Checklists', 'Rework'] },
      { icon: '🚚', title: 'Dispatch', description: 'Dispatch queue, courier partner, tracking number, label PDF, delivery confirmation with POD photo.', tags: ['Courier', 'POD'] },
      { icon: '📈', title: 'Production Intel', description: 'Units planned vs produced, efficiency %, waste %, batch tracking, bottleneck alerts, shift-wise summary.', tags: ['Batch', 'Efficiency'] },
      { icon: '🔧', title: 'Machines', description: 'Registry, maintenance schedule calendar, downtime tracker, utilization chart, maintenance due alerts.', tags: ['Maintenance', 'Alerts'] },
      { icon: '📦', title: 'Bulk Orders', description: 'Order pipeline from client to dispatch, line items, production link, progress tracker, Excel/PDF export.', tags: ['Bulk', 'Export'] },
      { icon: '⚙️', title: 'Job Setter', description: 'Job type templates, SLA rules, auto-assignment (round-robin/skill-based), job number format config.', tags: ['SLA', 'Auto-assign'] },
      { icon: '🏭', title: 'Production Floor', description: 'Active production orders, visual machine grid with status, worker assignment, input material allocation.', tags: ['Real-time', 'Floor View'] },
    ],
  },
  {
    icon: '💰',
    label: 'Finance',
    modules: [
      { icon: '💰', title: 'Advanced Accounting', description: 'Double-entry ledger, P&L, balance sheet, GST R1/R3B reports, journal entries, bank reconciliation, TDS.', tags: ['GST', 'Double-Entry'] },
      { icon: '💵', title: 'Accounting (Basic)', description: 'Income & expense tracker, category-wise pie chart, add transaction form, recurring entries, monthly summary.', tags: ['Simple', 'Recurring'] },
      { icon: '📊', title: 'Stock', description: 'Total/low/out-of-stock summary, stock table with min/max levels, movement log, adjust stock modal, auto-alert config.', tags: ['Alerts', 'Movement Log'] },
      { icon: '📦', title: 'Inventory Intel', description: 'AI-powered restock predictions, ABC analysis chart, slow-moving items, reorder suggestions, valuation (FIFO/LIFO).', tags: ['AI', 'FIFO/LIFO'] },
      { icon: '🛒', title: 'Procurement', description: 'Purchase requests, multi-level approval workflow, PO creation and PDF export, vendor comparison matrix, GRN on delivery.', tags: ['Approval', 'GRN'] },
      { icon: '🏭', title: 'Vendors', description: 'Vendor directory with rating, GST/PAN/bank details, purchase history, delivery performance scoring, linked to procurement.', tags: ['Ratings', 'History'] },
    ],
  },
  {
    icon: '⚙️',
    label: 'Operations',
    modules: [
      { icon: '📦', title: 'Products', description: 'Product catalog grid/table toggle, SKU, category, price, stock count, variants (size/color), bulk CSV import.', tags: ['Variants', 'CSV Import'] },
      { icon: '📋', title: 'Sample DM', description: 'WhatsApp/SMS template library by category (Sales/HR/Operations), variable highlighting {{name}}, test send, clone & edit.', tags: ['WhatsApp', 'Variables'] },
      { icon: '✅', title: 'Tasks', description: 'My/Team tasks, kanban board, side panel detail, subtasks, attachments, comments, time log, overdue filters.', tags: ['Kanban', 'Time Log'] },
      { icon: '🔐', title: 'Permissions', description: 'Role matrix (rows = modules, columns = roles, cells = toggles), custom role builder, user-role assignment with preview, audit log.', tags: ['Role Matrix', 'Audit Log'] },
      { icon: '🏢', title: 'Company Settings', description: 'Tabs: General, Branding, Localization, Integrations (WhatsApp, Tally, Razorpay), Security (2FA, IP whitelist, session log).', tags: ['Integrations', '2FA'] },
      { icon: '📋', title: 'Job Setter', description: 'Template library, SLA per job type, auto-assignment rules, numbering format.', tags: ['Templates', 'SLA'] },
    ],
  },
  {
    icon: '📊',
    label: 'Analytics & AI',
    modules: [
      { icon: '📊', title: 'Analytics', description: 'Modular pinnable dashboard, revenue trend, lead funnel, attendance heatmap, stock movement, date range picker, PDF/Excel/CSV export.', tags: ['Pinnable', 'Export'] },
      { icon: '🤖', title: 'AI Assistant', description: 'Full-screen or floating chat, data-card responses embedded in chat, suggested prompt chips, voice input, clear history.', tags: ['Voice', 'Data Cards'] },
      { icon: '⭐', title: 'Productivity', description: 'Team leaderboard, productivity scores, task completion rate over time, focus mode timer.', tags: ['Leaderboard', 'Insights'] },
      { icon: '📈', title: 'Production Intel', description: 'Batch-level traceability, efficiency trends, bottleneck identification, shift-wise production chart.', tags: ['Batch', 'Trends'] },
      { icon: '💖', title: 'Customer Hub', description: 'Customer segmentation, lifetime value, purchase frequency analysis, segment-based broadcast trigger.', tags: ['LTV', 'Segments'] },
    ],
  },
];

const highlightCard = {
  eyebrow: 'Smart HR',
  title: 'Track attendance, leaves, and payroll — automatically.',
  description: 'Mera Dhanda HR module handles everything from punch-in to payslip, so you can focus on your people, not paperwork.',
  bullets: [
    'Geo-tagged punch-in with selfie verification',
    'Automatic payslip generation every month',
    'Leave balance syncs with payroll in real time',
    'Statutory reports — PF, ESI, TDS — always ready',
  ],
};

const mockTableData = [
  { name: 'Amit Kumar', status: 'Present', time: '09:02 AM', dept: 'Engineering' },
  { name: 'Sneha Roy', status: 'Present', time: '08:55 AM', dept: 'Design' },
  { name: 'Rahul Verma', status: 'Absent', time: '-', dept: 'Sales' },
  { name: 'Priya Singh', status: 'Present', time: '09:10 AM', dept: 'HR' },
  { name: 'Vikram Patel', status: 'Leave', time: '-', dept: 'Production' },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section
      id="services"
      className="w-full bg-[#E9E8E3] py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="services-header text-center mb-12"
        >
          <span className="text-xs font-bold tracking-[1.5px] uppercase text-[#2563EB]">
            All Modules
          </span>
          <h2 className="font-heading text-[38px] lg:text-[44px] font-extrabold leading-[1.1] tracking-[-1.5px] text-[#111827] mt-3 mb-4">
            One platform. Every department.
          </h2>
          <p className="text-[17px] text-[#4B5563] max-w-xl mx-auto leading-[1.7]">
            50+ modules designed to work together. Start with what you need, add more as you grow.
          </p>
        </motion.div>

        {/* Tab Bar */}
        <div className="tab-bar flex flex-wrap justify-center gap-2 mb-10 bg-[rgba(233,228,218,0.8)] rounded-2xl p-2 max-w-4xl mx-auto">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === i
                  ? 'bg-white text-[#2563EB] shadow-sm border border-[rgba(37,99,235,0.15)]'
                  : 'text-[#4B5563] hover:text-[#111827] hover:bg-[rgba(255,255,255,0.5)]'
              }`}
            >
              <span>{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Module Cards Grid */}
        <div className="relative min-h-[400px] mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {tabs[activeTab].modules.map((module, i) => (
                <motion.div
                  key={`${activeTab}-${i}`}
                  variants={itemVariants}
                  whileHover={{ y: -5, backgroundColor: '#ffffff' }}
                  className="bg-[#F0EEE8] rounded-xl border border-[rgba(17,24,39,0.08)] p-5 cursor-pointer transition-colors duration-200 hover:border-[rgba(37,99,235,0.2)] shadow-sm hover:shadow-md group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="text-[26px]">{module.icon}</div>
                    <ChevronRight size={16} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="text-sm font-bold text-[#111827] mb-2 group-hover:text-[#2563EB] transition-colors">
                    {module.title}
                  </h4>
                  <p className="text-[13px] text-[#4B5563] leading-[1.55] mb-4">
                    {module.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {module.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-2 py-0.5 bg-[rgba(37,99,235,0.08)] text-[#2563EB] text-[11px] font-semibold rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Highlight Card */}
        <div className="bg-white rounded-3xl border border-[rgba(17,24,39,0.08)] p-8 lg:p-12 grid lg:grid-cols-2 gap-10">
          {/* Left Column */}
          <div>
            <span className="text-xs font-bold tracking-[1.5px] uppercase text-[#2563EB]">
              {highlightCard.eyebrow}
            </span>
            <h3 className="font-heading text-[28px] lg:text-[32px] font-extrabold leading-[1.15] tracking-[-1px] text-[#111827] mt-3 mb-4">
              {highlightCard.title}
            </h3>
            <p className="text-[15px] text-[#4B5563] leading-[1.7] mb-6">
              {highlightCard.description}
            </p>
            <ul className="space-y-3">
              {highlightCard.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[rgba(37,99,235,0.1)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#2563EB]" />
                  </div>
                  <span className="text-sm text-[#4B5563] leading-[1.6]">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Mock Table */}
          <div className="bg-white rounded-xl border border-[rgba(17,24,39,0.08)] overflow-hidden">
            <div className="px-4 py-3 border-b border-[rgba(17,24,39,0.06)] bg-[#FAFAF8]">
              <p className="text-xs font-semibold text-[#4B5563]">
                Today's Attendance
              </p>
            </div>
            <table className="w-full">
              <thead>
                <tr className="text-[11px] text-[#888880] text-left">
                  <th className="px-4 py-2 font-medium">Name</th>
                  <th className="px-4 py-2 font-medium">Status</th>
                  <th className="px-4 py-2 font-medium">Clock-in</th>
                  <th className="px-4 py-2 font-medium">Department</th>
                </tr>
              </thead>
              <tbody>
                {mockTableData.map((row, i) => (
                  <tr
                    key={i}
                    className={`text-sm ${
                      i % 2 === 0 ? 'bg-[#FAFAF8]' : 'bg-white'
                    }`}
                  >
                    <td className="px-4 py-2.5 font-medium text-[#111827]">
                      {row.name}
                    </td>
                    <td className="px-4 py-2.5">
                      <span
                        className={`inline-flex px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                          row.status === 'Present'
                            ? 'bg-[rgba(22,163,74,0.1)] text-[#16A34A]'
                            : row.status === 'Absent'
                            ? 'bg-[rgba(220,38,38,0.1)] text-[#DC2626]'
                            : 'bg-[rgba(217,119,6,0.1)] text-[#D97706]'
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="px-4 py-2.5 text-[#4B5563]">{row.time}</td>
                    <td className="px-4 py-2.5 text-[#4B5563]">{row.dept}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
