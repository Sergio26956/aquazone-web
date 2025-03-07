import dynamic from 'next/dynamic';

const LazyComponent = dynamic(
  () => import('./HeavyComponent'), 
  { loading: () => <div>Loading...</div> }
);

export default function LazyLoader() {
  return <LazyComponent />;
}
