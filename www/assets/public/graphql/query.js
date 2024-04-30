export const elebannerlist = `query BannerListV2($styleId: String, $dataType: String, $lang: BannerLanguageType, $version: Int, $site: BannerSite) {
    bannersV2(bannerInput: { styleId: $styleId, dataType: $dataType, lang: $lang, version: $version, site: $site }) {
        id
        bgImageUrl
        styleId
        dataType
        bannerIndex
        imageUrl
        title
        subTitle
        titleColor
        description
        expireTime
        listingTime
        dataUrl
        extraStatus
    }
}`

export const collectiondetail = `query CollectionBatch($collectionSlugs: [String!], $realtime: Boolean) {
    collectionBatch(collectionSlugs: $collectionSlugs) {
        name
        description
        featuredImageUrl
        bannerImageUrl
        isVerified
        slug
        imageUrl
        stats(realtime: $realtime) {
            ownerCount
            floorPrice
            totalVolume
        }
        owners {
            user {
                address
                userName
            }
            info {
                userName
            }
            identity {
                address
            }
        }
    }
}`
