import React, { useEffect } from 'react'
import './index.scss'
import UseMemo from '../../public/hooks/useMemo'

export default ({
    children,
    show,
    close,
    closeIcon,
    closeClassName,
    wrapperClassName
}) => {
    // 显示时让弹出框在最上层
    // 按项目布局定--只需要layout-content在layout-header,layout-header-auto等外层布局上就好
    useEffect(() => {
        const layoutContent = document.querySelector('.layout-content')
        if (!layoutContent) return

        const zIndexStyle = '; z-index: 10'
        const removeZindex = () => {
            const defaultStyle = layoutContent.getAttribute('style')
            defaultStyle &&
                defaultStyle.indexOf(zIndexStyle) > -1 &&
                layoutContent.setAttribute('style', defaultStyle.replace(zIndexStyle, ''))
        }

        if (show) {
            const defaultStyle = layoutContent.getAttribute('style')
            defaultStyle &&
                defaultStyle.indexOf(zIndexStyle) === -1 &&
                layoutContent.setAttribute('style', defaultStyle + zIndexStyle)
        } else {
            removeZindex()
        }

        return () => {
            removeZindex()
        }
    }, [show])

    return <UseMemo deps={[children, show, close]}>
        {() => <div className={`popup-wrapper ${wrapperClassName || ''}`}
            style={{
                display: show ? 'flex' : 'none'
            }}>
            <div className="popup-content">
                <img className={`popup-close ${closeClassName || ''}`} src={closeIcon} onClick={close} />
                {children}
            </div>
            <div className="popup-mask" onClick={close}></div>
        </div>}
    </UseMemo>
}
