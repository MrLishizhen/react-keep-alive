import {useRef, useContext, useEffect} from "react";
import {KeepAliveContext} from './KeepAliveContext'

function keepAliveTransfer(KeepaliveComponent, keepAliveId) {
    //高阶函数，根据当前keepAliveId 是第一次加载还是说 重复渲染
    return function (props) {
        const _ref = useRef(null)
        const {
            setKeepAliveState,
            keepAliveStates,
        } = useContext(KeepAliveContext)

        useEffect(() => {
            //获取当前 keepAliveStates中存储的数据
            const state = keepAliveStates[keepAliveId]
            if (state && state.nodes) {
                state.nodes.forEach(node=>_ref.current.appendChild(node))
            } else {
                setKeepAliveState({
                    reactElement:<KeepaliveComponent {...props}/>,
                    keepAliveId
                })
            }
        }, [keepAliveStates,setKeepAliveState,props])
        return (
            <div ref={_ref} />
        )
    }
}

export default keepAliveTransfer
