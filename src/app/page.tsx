import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Body from "@/components/Body";

export default function Home() {
  return (
    <div className="h-screen flex flex-col relative">
      <div className="flex flex-1 overflow-y-hidden">
        <Menu />
        <Body />
      </div>
      <Footer />
    </div>
  );
}
