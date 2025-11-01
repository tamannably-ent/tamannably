import Carousel from "@/components/carousal";
import Header from "@/components/header";
import { HeaderContent } from "@/lib/homeContent";


export default function Home() {
  return (
    <div className="w-[90%] mx-auto">
      <main className="p-5 space-y-1">
        <h1></h1>
        <div className="my-10 py-5">
          <Header Props={HeaderContent} />
        </div>
        <div className="">
          <Carousel />
        </div>
      </main>
    </div>
  );
}
