import React from 'react'

import './index.scss'

// import bigimg from '../../../public/img/itembg.png'

export default (props) => {
    const { isH5, itemtype } = props
    return <div className={`activity ${isH5 && 'little'}`}>
        {itemtype === 0 && <div>
            <p>Multi-Phase ARPG Game on Metaverse</p>
            <p>Because Earth is near extinction, scientists around the world were racing to find the most planet similar to Earth. Then they found it and named it Plasmaverse. They decided to send an expedition to settle a living there in Plasmaverse, containing nine heroes who brought several resources with them. The resources are animals, plants, seeds as well as human embryos. They prepared these resources to be ready by reaching Plasmaverse in twenty light years.</p>
        </div>}
        {itemtype === 1 && <div>
            <p>Kepler Gaming NFT takes you to take over the Kepler galaxy in a parallel universe.</p>
            <p>Welcome to the world of Kepler. Escaping from Earth and flying to outer space has become the last hope for human survival. Choose the game mode then team up with your comrades to explore the human habitable planet.</p>
            <p>Kepler's vision is to create a globally popular blockchain-based MMORPG which returns to the fun of the game itself and brings new players into NFTs to influence more game content creators. Facing an unknown future, Kepler is not limited to the RPG game itself, the world has infinite possibilities which we will explore together.</p>
        </div>}
        {itemtype === 2 && <div>
            <p>A #PlayToEarn strategy #NFT game where you lead the descendants of humanity to forge a new empire!</p>
            <p>Galaxy Blitz is our upcoming Play-To-Earn strategy NFT game where we combine the use of real-world, usable tokens with high-octane gameplay and extensive history and lore  for a unique player experience.</p>
            <p>The continued push for NFT gaming is incredibly important for a few different reasons. With more riveting gameplay, extensive adoption of crypto technology around the world will surely follow. Additionally, for gamers, NFT gaming gives the power back to them, as they can earn tokens from the time that they spend with their favorite game.</p>
            <p>Players will use MIT, our in-game governance token, to buy in-game tokens and NFTs that can be used in the game.</p>
        </div>}
        {itemtype === 3 && <div>
            <p>CODM warriors building a gaming empire on @aptoslabs</p>
            <p>AptosCODM is a community of gamers who’ve come together to form a gaming community on @AptosLabs</p>
            <p>#aptosecosystem #Aptos . Our goal is to utilize our common interests (Gaming) as a tool to impact the web3 space. Our discord link/roadmap is coming soon! Retweet</p>
        </div>}
        {itemtype === 4 && <div>
            <p>AptosYoka is a community-driven Web3 Social GameFi platform that empowers users by rewarding them for their engagement</p>
            <p>In AptosYoka, the community is everything. you can not only play games to gain profits, but also have in-depth exchanges with different players to build a web3 world that belongs to all GameFi users.</p>
        </div>}
        {itemtype === 5 && <div>
            <p>In this dApp, players can buy, trade, breed, & accessorize cartoon Capybaras. As programmable objects on Sui, Capys showcase principles such as: </p>
            <p>
                <span>🔹asset ownership</span><br/>
                <span>🔹transferability</span><br/>
                <span>🔹dynamic fields </span>
            </p>
            <p>Developing Sui Capys using Sui #Move required defining basic modules, creating types, and building a registry to record and verify them.</p>
            <p>A unique feature of this project is the ability to breed two Capys, creating a completely new Capy based on the breeding pair's characteristics.</p>
            <p>The breed function takes two parent Capys and computes genes for the “newborn.”</p>
        </div>}
        {/* <p>Lamdamoon is the moon of Lamda, the 3rd planet in L.A.M.D.A solar system. The name Lamda comes from Lonely Asteroid May Discover Anecdotes ( L.A.M.D.A ) which you can find more info about in story section.</p>
        <p>This is where you can build moonbase, spaceship, your army, even tele-portal powered by dark matter. All such things are stepping stones for you to explore, secure the land, mine resource, discover ancient alien technology blueprint, and fight with monster to earn Lamdanium reward on outlandish planets in a far-far away galaxy from earth.</p>
        <p>MITA token can be purchased as an In-App Purchase (IAP) using a debit or credit card from the Google Play Store or Apple Store. It can also be purchased from crypto exchanges and decentralized peer-to-peer platforms like Cryptolocally.com.</p>
        <p>The base price to purchase MITA tokens in the game will be $0.07 USD(subjected to change). If the average price per token on third-party exchanges increases above $0.07 (subjected to change) for an extended period of time, the price per MITA in the game will also increase to the new average price.</p>
        <p>In the event that a user decides to buy MITA via an IAP, they will be buying from our IAP reserve. Every 3 months, Gem Studios will buy MITA from the open market and keep this in the IAP pool, which will be sold to players buying MITA from the app stores.</p>
        <p>MITA tokens sold in the game will be 10%-15% premium than what it is on the open market or 3rd party exchanges to help cover the cost, fees, taxes on the various app stores.</p> */}
        {/* <div className="activity-img">
            <img src={bigimg} alt=""/>
        </div> */}
    </div>
}
