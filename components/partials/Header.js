import LogoCriterio from '../../public/logoCriterio.png'
import LogoNW from '../../public/Logo-NWEspanol.png'
import LogoPolitico from '../../public/APlogo.png'
import LogoGourmet from '../../public/animal-gourmet-logo.png'
import LogoAnimalMX from '../../public/logo_animalmx.png'
import LogoHidalgo from '../../public/Logo-hidalgo.png'
import LogoGRS from '../../public/Logo-GRS.jpg'
import Text from '../../components/base/Text'

export default function Header () {
    return (
        <header>
            <div className="mainLogo">
                <img src={LogoCriterio} alt="Logo Grupo Editorial Criterio" id="LogoCriterio" />
            </div>
            <div className="products">
                <img src={LogoNW} alt="Logo Newsweek" id="LogoNW" height="25" />
                <img src={LogoPolitico} alt="Logo Animal Político" id="LogoPolitico" height="40"/>
                <img src={LogoGourmet} alt="Logo Animal Gourmet" id="LogoGourmet" height="50"/>
                <img src={LogoAnimalMX} alt="Logo Animal MX" id="LogoAnimalMX" height="60"/>
                <img src={LogoHidalgo} alt="Logo Criterio Hidalgo" id="LogoHidalgo" height="80"/>
                <img src={LogoGRS} alt="Logo Gaceta Reivindicación Sindical" id="LogoGRS" height="70"/>
            </div>
            <div className="aboutContainer">
                <Text type="body1">
                Observamos a los actores y procesos políticos, fomentando la participación ciudadana y una mejor toma de decisiones.
                </Text>
            </div>
        </header>
    )
}
