import React from 'react'

export default function Preview({ webCodes }) {
    return (
        <div id={`Preview`} className={`mb-[10vh]`}>
            <iframe
            className={`w-full h-full overflow-scroll`}
            sandbox={`allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals`}
            srcDoc={webCodes}
            frameBorder="0"></iframe>
        </div>
    )
}