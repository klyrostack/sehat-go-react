interface EmptyStateProps {
  title?: string;
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({
  title = "No Clinics Listed Yet",
  message = "Be the first medical practitioner to register your private clinic on Sehat Go.",
  actionLabel = "Register Your Clinic Today",
  onAction,
}: EmptyStateProps) {
  return (
    <div
      className="empty-dashboard-card"
      style={{ margin: "2rem auto", maxWidth: "600px" }}
    >
      <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>🏥</div>
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: 700,
          color: "var(--text-main)",
          marginBottom: "0.5rem",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          color: "var(--text-muted)",
          fontSize: "0.9375rem",
          marginBottom: "1.5rem",
          lineHeight: 1.5,
        }}
      >
        {message}
      </p>
      {onAction && (
        <button className="btn btn-primary btn-sm" onClick={onAction}>
          {actionLabel}
        </button>
      )}
    </div>
  );
}
