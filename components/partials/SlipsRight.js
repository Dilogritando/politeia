import ContactIcon from '../../public/icons/newsletter.svg'
import PublicitariosIcon from '../../public/icons/publicidad-impresos.svg'
import ComercialesIcon from '../../public/icons/nse.svg'

import SlipButton from '../base/SlipButton'

const slipsRightContent = [
    {
        logo: PublicitariosIcon,
        alt: 'Ícono de contenidos Publicitarios',
        text: 'Productos Publicitarios',
        height:'30'
    },
    {
        logo: ComercialesIcon,
        alt: 'Ícono de contenidos Comerciales',
        text: 'Contenidos Comerciales',
        height:'30'
    },
    {
        logo: ContactIcon,
        alt: 'Ícono de contáctenos',
        text: 'Contáctenos',
        height:'30'
    }
]

export default function SlipsRight () {
    return (
        <div className="slipsRighContainer">
            {slipsRightContent.map(slip => (
                <SlipButton data={slip} classButton="slipButtonRight"/>
            ))}
        </div>
    )
}
