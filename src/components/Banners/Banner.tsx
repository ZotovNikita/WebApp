import BannerStyle from './Banner.module.css';

function Banner(props: IBanner) {
    const { bannerTitle, bannerText, buttonLabel, bannerImage, isMain, isReversedLayout, isFeel } = props;
    return (
        <section className={BannerStyle.banner} style={isReversedLayout ? { flexDirection: 'row-reverse' } : {}}>
            <div>
                <div className={isMain ? BannerStyle.mainBannerTitle : BannerStyle.bannerTitle}>
                    {bannerTitle}
                </div>
                {!isMain && <div className={BannerStyle.bannerDivider} />}
                <div className={isMain ? BannerStyle.mainBannerText : BannerStyle.bannerText}>
                    {bannerText}
                </div>
                <button className={isFeel ? BannerStyle.fillButton : BannerStyle.outlinedButton}>
                    {buttonLabel}
                </button>
            </div>
            <img src={bannerImage} alt="banner-img" />
        </section>
    );
}

export default Banner;
