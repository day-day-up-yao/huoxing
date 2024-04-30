import React from 'react'
import { useTranslation } from 'react-i18next'

import './index.scss'
export default () => {
    const { t } = useTranslation()
    return <div className="overdue">
        <p>{t('public.tokenfail')}</p>
    </div>
}
