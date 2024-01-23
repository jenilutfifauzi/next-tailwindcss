import Ring from "./components/Ring";


export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-2/5">
          {/* Ring */}
          <Ring  />
        </div>
    </div>
  );
}
