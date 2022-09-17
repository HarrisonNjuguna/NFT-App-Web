import { Download, Features, SectionWrapper } from "./components";
import styles from "./styles/Global";
import assets from "./assets";

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="Your local Kenya store of awesome NFTs. Start selling and growing."
        description="Buy, store, collect NFTs, exchange & earn crypto. Join over 2 million Kenyans using ProNef Marketplace."

        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />

      <SectionWrapper 
        title="Beautiful & Simple User Interface"
        description="NFT purchase made easier and simple. Smooth UI experience from ProNef Kenya Market place."
        mockupImg={assets.homeCards}
        reverse
      />

      <Features />

      <SectionWrapper 
        title="Deployment"
        description="ProNef Kenya is built using React Native and Expo CLI which runs natively on all user devices."
        mockupImg={assets.feature}
        reverse
      />

      <SectionWrapper 
        title="Creative, simple minimalistic UI"
        description="The app contains only two screens. The home screen contains the listing of the NFTs and details screen contains details of each NFT and the number of people bidding."
        mockupImg={assets.mockup}
        banner="banner02"
      />

      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Created by {" "}
        <span className="bold">Harry.dev 💻 </span>
        </p>
      </div>
    </>
  );
}

export default App;
