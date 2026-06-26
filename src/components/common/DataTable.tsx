import type { ReactNode } from 'react'

import { cn } from '@/lib/cn'

export type DataTableColumn<TData> = {
  key: string
  header: ReactNode
  cell: (row: TData, rowIndex: number) => ReactNode
  className?: string
}

export interface DataTableProps<TData> {
  data: TData[]
  columns: DataTableColumn<TData>[]
  emptyMessage?: string
  getRowKey: (row: TData, rowIndex: number) => string
  className?: string
}

export function DataTable<TData>({
  className,
  columns,
  data,
  emptyMessage = 'No data available.',
  getRowKey,
}: DataTableProps<TData>) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950',
        className,
      )}
    >
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-sm dark:divide-slate-800">
          <thead className="bg-slate-50 dark:bg-slate-900">
            <tr>
              {columns.map((column) => (
                <th
                  className={cn(
                    'px-4 py-3 text-left font-semibold text-slate-700 dark:text-slate-200',
                    column.className,
                  )}
                  key={column.key}
                  scope="col"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            {data.length > 0 ? (
              data.map((row, rowIndex) => (
                <tr
                  className="hover:bg-slate-50 dark:hover:bg-slate-900"
                  key={getRowKey(row, rowIndex)}
                >
                  {columns.map((column) => (
                    <td
                      className={cn(
                        'px-4 py-3 text-slate-700 dark:text-slate-300',
                        column.className,
                      )}
                      key={column.key}
                    >
                      {column.cell(row, rowIndex)}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  className="px-4 py-8 text-center text-slate-500"
                  colSpan={columns.length}
                >
                  {emptyMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

/*
Example:
<DataTable data={users} getRowKey={(user) => user.id} columns={[{ key: 'name', header: 'Name', cell: (user) => user.name }]} />
*/
