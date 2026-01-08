// app/page.tsx
import { redirect } from 'next/navigation';

export default function RootPage() {
  // This happens on the server instantly
  redirect('/login');
  
  // Return null because this code is never reached
  return null;
}