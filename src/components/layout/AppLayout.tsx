type AppLayoutProps = {
  children: React.ReactNode;
};
export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="w-100% h-[100vh] flex-grow bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-500 flex flex-col mx-auto">
      <div className="flex flex-col mx-auto w-[90rem]">{children}</div>
    </div>
  );
}
