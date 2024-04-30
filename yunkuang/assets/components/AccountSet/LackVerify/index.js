import React from 'react'
import { useTranslation } from 'react-i18next'

import TetPage from '../TextInfo'
import VerifyCon from '../VerifyCon'

export default (props) => {
    const { lacklist, onamend } = props
    const { t } = useTranslation()
    const desc = [t('public.lackdesc')]
    return <div className="lack-verify">
        <TetPage
            title={t('public.lacktype')}
            desclist={desc}
        />
        {lacklist.map((item, index) => {
            return <VerifyCon
                key={index}
                icons={item.icons}
                title={item.title}
                issure={item.issure}
                onLink={() => {
                    const obj = {
                        lack: false,
                        types: item.types,
                        ways: 1
                    }
                    onamend(obj)
                }}
            />
        })}
    </div>
}
