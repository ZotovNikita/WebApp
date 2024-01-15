import { appStrings } from '../strings';
import Banner from '../../components/Banners/Banner';
import HomeStyle from './Home.module.css';
import ServiceCardStyle from '../../components/ServiceCards/ServiceCards';
import articles from '../../fake_data/Articles';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import Footer from '../../components/Footer/Footer';
import Slider from '../../components/Slider/Slider';

function Home() {
    return(
      <>
        <div id={HomeStyle.newBanner1}>
          <Banner bannerTitle={appStrings.bannerTitle1} 
          bannerText={appStrings.bannerText1} 
          buttonLabel={appStrings.bannerButton1} 
          bannerImage={appStrings.bannerImage1}  
          isMain={true} 
          isReversedLayout={false} 
          isFeel={true}/>
        </div>

        <div id={HomeStyle.servicesTitle}>
          <div className={HomeStyle.TitleContainer}>
              <div className={HomeStyle.Title}> 
                  {appStrings.SCTitle} 
              </div>
              <div className={HomeStyle.Rec}/>
          </div>
          </div>
          <div id={HomeStyle.servicesDescription}>
            {appStrings.SCDescription}
          </div>

        <div id={HomeStyle.servicesContainer}>
          <ServiceCardStyle title={appStrings.SCTitle1} 
          description={appStrings.SCDescription1} 
          icon={appStrings.SCIcon1}/>
          
          <ServiceCardStyle title={appStrings.SCTitle2} 
          description={appStrings.SCDescription2} 
          icon={appStrings.SCIcon2}/>

          <ServiceCardStyle title={appStrings.SCTitle3} 
          description={appStrings.SCDescription3} 
          icon={appStrings.SCIcon3}/>

          <ServiceCardStyle title={appStrings.SCTitle4} 
          description={appStrings.SCDescription4}
           icon={appStrings.SCIcon4}/>

          <ServiceCardStyle title={appStrings.SCTitle5} 
          description={appStrings.SCDescription5} 
          icon={appStrings.SCIcon5}/>

          <ServiceCardStyle title={appStrings.SCTitle6} 
          description={appStrings.SCDescription6} 
          icon={appStrings.SCIcon6}/>
        </div>

        <div id={HomeStyle.servicesButtonContainer}>
          <button className={HomeStyle.outlinedButton}>
            {appStrings.bannerButton2}
          </button>
        </div>

        <div id={HomeStyle.newBanner2}>
          <Banner bannerTitle={appStrings.bannerTitle2} 
          bannerText={appStrings.bannerText2} 
          buttonLabel={appStrings.bannerButton2} 
          bannerImage={appStrings.bannerImage3}  
          isMain={false} 
          isReversedLayout={true} 
          isFeel={false}/>
        </div>

        <div id={HomeStyle.newBanner3}>
          <Banner bannerTitle={appStrings.bannerTitle3} 
          bannerText={appStrings.bannerText3}
          buttonLabel={appStrings.bannerButton3} 
          bannerImage={appStrings.bannerImage3} 
          isMain={false} 
          isReversedLayout={false} 
          isFeel={false}/>
        </div>

        <Slider/>
     
        <div id={HomeStyle.servicesTitle}>
          <div className={HomeStyle.TitleContainer}>
              <div className={HomeStyle.Title}> 
                  {appStrings.articleTitle} 
              </div>
              <div className={HomeStyle.Rec}/>
          </div>
        </div>
        
        <section id={HomeStyle.articlesContainer}>
          {articles.map((item, _) => {
              return ArticleCard(item)
          })}
        </section>
        
        <div id={HomeStyle.servicesButtonContainer}>
        <button className={HomeStyle.outlinedButton}>
          {appStrings.viewAll}
        </button>
        </div>

        <Footer logoText='HealthCare'/>
      </>
    );
  }
  
  export default Home;
