import Text from '../../components/base/Text'
import MainDefault from './MainDefault.js'
import SlipsLeft from './SlipsLeft.js'
import SlipsRight from './SlipsRight.js'

export default function Main () {
    return (
        <div className="mainContainer">
            <SlipsLeft />
            <MainDefault />
            <SlipsRight />
        </div>
    )
}
