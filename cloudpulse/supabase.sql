CREATE TABLE api_metrics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  api_name text NOT NULL,
  timestamp timestamptz NOT NULL,
  status_code int,
  latency_ms float,
  error text
);
