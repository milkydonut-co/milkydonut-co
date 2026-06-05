export default function FinancialStatement() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Financial Statement</h1>

      {/* 1. Expenses Report */}
      <section style={{ marginTop: "30px" }}>
        <h2>1. Expenses Report</h2>
        <div style={boxStyle}>💸 Expenses Table Placeholder</div>
        <p>Breakdown of all operational, marketing, and production expenses.</p>
      </section>

      {/* 2. Profit & Loss */}
      <section style={{ marginTop: "30px" }}>
        <h2>2. Profit & Loss Account (P&L)</h2>
        <div style={boxStyle}>📊 Profit & Loss Statement Placeholder</div>
        <p>Summary of revenue, cost, and net profit performance.</p>
      </section>

      {/* 3. Balance Sheet */}
      <section style={{ marginTop: "30px" }}>
        <h2>3. Balance Sheet</h2>
        <div style={boxStyle}>⚖️ Balance Sheet Placeholder</div>
        <p>Overview of assets, liabilities, and equity position.</p>
      </section>

      {/* 4. Cash Flow */}
      <section style={{ marginTop: "30px" }}>
        <h2>4. Cash Flow Statement</h2>
        <div style={boxStyle}>💰 Cash Flow Chart Placeholder</div>
        <p>Tracks inflow and outflow of cash in business operations.</p>
      </section>

      {/* 5. Overall Summary */}
      <section style={{ marginTop: "30px" }}>
        <h2>5. Overall Financial Summary</h2>
        <div style={boxStyle}>📈 Financial Summary Dashboard Placeholder</div>
        <p>
          Consolidated overview of financial health, profitability, and growth.
        </p>
      </section>
    </div>
  );
}

const boxStyle = {
  height: "250px",
  background: "#eee",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "10px",
};
