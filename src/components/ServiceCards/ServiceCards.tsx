import ServiceCardStyle from './ServiceCards.module.css';

function HCService(props: IServiceCard) {
    return <button className={ServiceCardStyle.serviceButton}>
        <div className={ServiceCardStyle.serviceImageContainer}>
            <img src={props.icon} className={ServiceCardStyle.serviceImage}/>
        </div>
        <div className={ServiceCardStyle.serviceTitle}>
            {props.title}
        </div>
        <div className={ServiceCardStyle.serviceDescription}>
            {props.description}
        </div>
    </button>
}

export default HCService;
