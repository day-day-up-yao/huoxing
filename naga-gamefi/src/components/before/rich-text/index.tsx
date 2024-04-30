import React from 'react';

import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('./editor'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
}) as any;

export default Editor;
