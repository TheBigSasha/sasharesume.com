import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'

const LEDGER_URL =
  'https://fwd.gr/api/hook/2ab053f7-913f-48c3-a6da-1785c07ca4c4/list'
const STATUS_URL =
  'https://pst.rs.abhicracker.com/raw/uhaudit-2ab053f7913f08c3-v2'

type BridgeProps = {
  ledger: unknown
  ledgerError: string | null
  status: unknown
  statusError: string | null
  fetchedAt: string
}

async function fetchJsonOrText(url: string): Promise<unknown> {
  const response = await fetch(url, {
    headers: { Accept: 'application/json, text/plain;q=0.9, */*;q=0.8' },
    cache: 'no-store',
  })
  const text = await response.text()
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}: ${text.slice(0, 1000)}`)
  }
  try {
    return JSON.parse(text)
  } catch {
    return text
  }
}

export default function AuditBridgePage({
  ledger,
  ledgerError,
  status,
  statusError,
  fetchedAt,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main style={{ fontFamily: 'monospace', margin: '2rem', whiteSpace: 'pre-wrap' }}>
      <h1>Temporary audit transport bridge</h1>
      <p>Fetched at {fetchedAt}</p>
      <h2>Request ledger</h2>
      <p>
        <a href={LEDGER_URL}>Open request ledger directly</a>
      </p>
      <pre>{JSON.stringify(ledgerError ? { error: ledgerError } : ledger, null, 2)}</pre>
      <h2>Encrypted snapshot ledger</h2>
      <p>
        <a href={STATUS_URL}>Open encrypted snapshot ledger directly</a>
      </p>
      <pre>{JSON.stringify(statusError ? { error: statusError } : status, null, 2)}</pre>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps<BridgeProps> = async () => {
  const [ledgerResult, statusResult] = await Promise.allSettled([
    fetchJsonOrText(LEDGER_URL),
    fetchJsonOrText(STATUS_URL),
  ])

  return {
    props: {
      ledger: ledgerResult.status === 'fulfilled' ? ledgerResult.value : null,
      ledgerError:
        ledgerResult.status === 'rejected' ? String(ledgerResult.reason) : null,
      status: statusResult.status === 'fulfilled' ? statusResult.value : null,
      statusError:
        statusResult.status === 'rejected' ? String(statusResult.reason) : null,
      fetchedAt: new Date().toISOString(),
    },
  }
}
