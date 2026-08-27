document.addEventListener("DOMContentLoaded", () => {
  const nodes = document.querySelectorAll(".arch-node");
  const infoText = document.getElementById("infoText");

  const etlTelemetry = {
    hub: "MAREC Data Hub (Hybrid Core): Orchestrates multi-source Python/R ETL and ELT data pipelines strictly governed by read-only extraction protocols with zero modification risks.",
    crs: "CRS / Booking (Read-Only ETL): Ingests live room reservations and channel distributions via restricted read-only credentials, removing any fear of accidental booking overrides.",
    crm: "CRM (Read-Only ETL): Safely streams guest profile histories and stay frequencies using read-only database views to safeguard sensitive patron information.",
    powerbi: "Power BI / Tableau (Load Tier): Renders high-performance interactive executive dashboards tracking RevPAR, TreVPAR, and net yields without touching core software.",
    erp: "ERP (Read-Only ELT): Extracts procurement logs and supplier expenses through automated daily/weekly read-only exports for zero-friction analysis.",
    postgres: "PostgreSQL (ELT Cloud Storage): Encrypted cloud data warehouse staging raw read-only file exports before executing automated on-database SQL transformations.",
    pos: "POS (Read-Only ETL): Captures food, beverage, and retail revenue streams via automated read-only exports synchronized safely outside peak operating hours.",
    hris: "HRIS / Payroll (Read-Only ETL): Monitors labor hour allocations and workforce efficiency metrics strictly through read-only access to protect personnel records."
  };

  nodes.forEach(node => {
    const key = node.getAttribute("data-node");
    if (!key || !etlTelemetry[key]) return;

    node.addEventListener("mouseenter", () => {
      nodes.forEach(n => n.classList.remove("active"));
      node.classList.add("active");
      infoText.textContent = etlTelemetry[key];
    });

    node.addEventListener("click", () => {
      nodes.forEach(n => n.classList.remove("active"));
      node.classList.add("active");
      infoText.textContent = etlTelemetry[key];
    });
  });
});