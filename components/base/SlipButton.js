export default function SlipButton ({data, classButton }) {
    if (classButton==='slipButtonRight'){
    return (
        <div className={classButton}>
            <img src={data.logo} alt={data.alt} height={data.height}/>
            <p>{data.text}</p>
        </div>
    )} else {
        return (
            <div className={classButton}>
                <p>{data.text}</p>
                <img src={data.logo} alt={data.alt} height={data.height}/>
            </div>
        )
    }
}
