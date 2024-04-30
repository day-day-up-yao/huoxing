import game1 from '../img/nagaimg/gime1.jpeg'
import game2 from '../img/nagaimg/game2.jpeg'
import game3 from '../img/nagaimg/game3.jpeg'
import game4 from '../img/nagaimg/gamen4.jpeg'
import game5 from '../img/nagaimg/gamen5.jpeg'
import game6 from '../img/nagaimg/gamen6.png'

import banner1 from '../img/nagaimg/Plasmaverse.png'
import banner2 from '../img/nagaimg/Keple.png'
import banner3 from '../img/nagaimg/GalaxyBlitz.jpeg'
import banner4 from '../img/nagaimg/banner4.jpeg'
import banner5 from '../img/nagaimg/bannern5.jpeg'
import banner6 from '../img/nagaimg/bannern6.jpeg'

export const gameList = [
    { name: 'Plasmaverse', icon: game1, bgimg: banner1, desc: 'Multi-Phase ARPG Game on Metaverse', type: 0, twitter: 'https://twitter.com/plasmaversexyz', website: 'https://www.plasmaverse.xyz' },
    { name: 'Keple', icon: game2, bgimg: banner2, desc: 'Kepler Gaming NFT takes you to take over the Kepler galaxy in a parallel universe', type: 1, twitter: 'https://twitter.com/KeplerHomes', website: 'https://kepler.homes' },
    { name: 'Galaxy Blitz', icon: game3, bgimg: banner3, desc: 'A PlayToEarn strategy NFT game where you lead the descendants of humanity to forge a new empire!', type: 2, twitter: 'https://twitter.com/GalaxyBlitzGame', website: 'https://www.galaxyblitz.world' },
    { name: 'CODM', icon: game4, bgimg: banner4, desc: 'CODM warriors building a gaming empire on @aptoslabs', type: 3, twitter: 'https://twitter.com/AptosCODM', website: '' },
    { name: 'Aptos Yoka', icon: game5, bgimg: banner5, desc: 'AptosYoka is a community-driven Web3 Social GameFi platform that empowers users by rewarding them for their engagement', type: 4, twitter: 'https://twitter.com/Aptos_Yoka', website: '' },
    { name: 'Sui Capys', icon: game6, bgimg: banner6, desc: 'A fun new prototype that serves as a dev preview (not an airdrop!) and demonstrates key capabilities of Sui', type: 5, twitter: 'https://twitter.com/SuiNetwork', website: '' }
]

export const nagaBannerlist = [
    { name: 'Plasmaverse', bgimg: banner1, type: 0 },
    { name: 'Keple', bgimg: banner2, type: 1 },
    { name: 'Galaxy Blitz', bgimg: banner3, type: 2 },
    { name: 'CODM', bgimg: banner4, type: 3 },
    { name: 'Aptos Yoka', bgimg: banner5, type: 4 }
]

export default {
    gameList,
    nagaBannerlist
}
