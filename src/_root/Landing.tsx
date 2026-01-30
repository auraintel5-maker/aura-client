import AdCreativesCta from "@/components/shared/AdCreativesCta";
import DemoVideo from "@/components/shared/DemoVideo";
// import Features from "@/components/shared/Features";
import Hero from "@/components/shared/Hero";
import Masonary from "@/components/shared/Masonary";
import VideoMasonry from "@/components/shared/VideoMasonary";
import WebLayoutWrapper from "@/components/shared/WebLayoutWrapper";
import { product_demo_video } from "@/modelDataset";

const Home = () => {
  return (
    <WebLayoutWrapper>
      <Hero />
      <Masonary />
      <DemoVideo url={product_demo_video ?? ""} />
      <VideoMasonry />
      {/* <Features /> */}
      {/* <Showcase /> */}
      {/* <section className="py-4">
        <HighLights />
      </section> */}
      {/* <BeforeAndAfterSection /> */}
      <AdCreativesCta />
    </WebLayoutWrapper>
  );
};

export default Home;
