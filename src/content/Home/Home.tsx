import { appStrings } from '../strings';
import Banner from '../../components/Banners/Banner';
import HomeStyle from './Home.module.css';

function Home() {
    return(
      <>
        <div id={HomeStyle.newBanner1}>
          <Banner bannerTitle={appStrings.bannerTitle1} 
          bannerText={appStrings.bannerText1} 
          buttonLabel={appStrings.bannerButton1} 
          bannerImage='src/assets/images/banners/banner1.png' 
          isMain={true} 
          isReversedLayout={false} 
          isFeel={true}/>
        </div>
        <div id={HomeStyle.newBanner2}>
          <Banner bannerTitle={appStrings.bannerTitle2} 
          bannerText={appStrings.bannerText2} 
          buttonLabel={appStrings.bannerButton2} 
          bannerImage='src/assets/images/banners/banner2.png' 
          isMain={false} 
          isReversedLayout={true} 
          isFeel={false}/>
        </div>
        <div id={HomeStyle.newBanner3}>
          <Banner bannerTitle={appStrings.bannerTitle3} 
          bannerText={appStrings.bannerText3}
          buttonLabel={appStrings.bannerButton3} 
          bannerImage='src/assets/images/banners/banner3.png' 
          isMain={false} 
          isReversedLayout={false} 
          isFeel={false}/>
        </div>
      </>
    );
  }
  
  export default Home;
