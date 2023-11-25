import { Hero, Library,  } from "@/components";
import BackToTop from "@/components/BackToTop";

export default function Page() {
  return (
    <div className="w-full min-h-screen bg-slate-50 flex">
      <div className="w-full justify-center flex-col">
        {/* <Hero /> */}
        <div className="mb-14 container mx-auto max-w-7xl flex-col">
          <Library />
        </div>
      </div>
      <BackToTop />
    </div>
  );
}
