import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about/achievement')({
  component: Achievement,
})

function Achievement() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Achievement Dashboard</h1>

      {/* Revenue Chart */}
      <section style={{ marginTop: "30px" }}>
        <h2>Revenue Growth</h2>
        <div style={boxStyle}>
          📈 Revenue Chart Placeholder
        </div>
        <p>
          Steady increase in monthly revenue due to optimized marketing campaigns
          and improved product performance.
        </p>
      </section>

      {/* Product Performance */}
      <section style={{ marginTop: "30px" }}>
        <h2>Product Performance</h2>
        <div style={boxStyle}>
          📊 Product Performance Chart Placeholder
        </div>
        <p>
          Best-selling products show strong conversion rate and customer satisfaction.
        </p>
      </section>

      {/* Monthly Trend */}
      <section style={{ marginTop: "30px" }}>
        <h2>Monthly Sales Trend</h2>
        <div style={boxStyle}>
          📉 Monthly Sales Trend Chart Placeholder
        </div>
        <p>
          Sales trend shows consistent growth with peak performance during campaign periods.
        </p>
      </section>
    </div>
  )
}

const boxStyle = {
  height: "250px",
  background: "#eee",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "10px",
}
