import { Button } from '@/components/ui'
import { formatCurrency } from '@/utils/formatCurrency'

import { DashboardHero } from '../components/dashboard-hero'
import { useDashboardCounter } from '../hooks/use-dashboard-counter'

import './dashboard-page.css'

export function DashboardPage() {
  const counter = useDashboardCounter()

  return (
    <section className="dashboard-page">
      <div className="dashboard-copy">
        <p className="eyebrow">Feature-based TypeScript architecture</p>
        <h1>Scalable React + Vite starter</h1>
        <p>
          This dashboard lives inside <code>features/dashboard</code>. Auth,
          routing, providers, stores, UI primitives, and library wrappers are
          separated by responsibility.
        </p>
        <div className="dashboard-actions">
          <Button onClick={counter.increment}>Count is {counter.count}</Button>
          <span>{formatCurrency(128000)}</span>
        </div>
      </div>
      <DashboardHero />
    </section>
  )
}
