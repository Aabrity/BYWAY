import Sidebar from '@/Components/Sidebar/index'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>
    <Sidebar/>
    {children}
    </section>;
}