import { useState, useEffect } from 'react';
import { mergeDeduplicateArrays } from 'src/utils/merge-deduplicate-arrays';

export function usePaginatedData<T extends Record<string, any>>(params?: { data?: T[] }) {
  const [list, setList] = useState<T[]>([]);
  useEffect(() => {
    if (!params?.data) return;
    setList((list) => mergeDeduplicateArrays<T>(list, params.data || [], 'uid'));
  }, [params?.data]);

  return list;
}
