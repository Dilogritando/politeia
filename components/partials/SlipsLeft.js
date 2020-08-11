import SlipButton from '../base/SlipButton'

import LogoNWSq from '../../public/brands-logos/Logo-NWSquare.png'
import LogoAPSq from '../../public/brands-logos/Logo-Animal-Politico-Pequeno.jpg'
import LogoAGSq from '../../public/brands-logos/Logo-Animal-Gourmet-Pequeno.jpg'

const slipsLeftContent = [
    {
        logo: LogoNWSq,
        alt: 'logo Newsweek pequeño',
        text: 'Newsweek',
        height:'30'
    },
    {
        logo: LogoAPSq,
        alt: 'logo Animal Político pequeño',
        text: 'Animal Político',
        height:'30'
    },
    {
        logo: LogoAGSq,
        alt: 'Logo Animal Gourmet pequeño',
        text: 'Animal Gourmet',
        height:'30'
    }
]

export default function SlipsLeft () {
    return (
        <div className="slipsLeftContainer">
            {slipsLeftContent.map(slip => (
                <SlipButton data={slip} classButton="slipButtonLeft"/>
            ))}
        </div>
    )
}
