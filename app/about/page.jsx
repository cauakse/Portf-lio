'use client';

import dynamic from 'next/dynamic';

const ClientOnlyComponent = dynamic(() => import('./client/client.jsx'), { ssr: false });

export default function Page() {
  return (
    <div>
      <ClientOnlyComponent />
    </div>
  );
}

