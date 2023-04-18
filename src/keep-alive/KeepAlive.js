//keep-alive 返回包裹组件内容
import {useCallback, useReducer} from "react";
import keepAliveReducer from './keepAliveReducer' //存储 node文件 格式如下注释
import {KeepAliveContext} from './KeepAliveContext' //保存Context，传递方法
import * as actionTypes from './actionTypes' //标识文件
function KeepAlive(props){
    /*
    * {
    *   home:{
    *       keepAliveId:'home',
    *       reactElement:reactElement,
    *       nodes:nodes,
    *       status:create|created
    *   }
    * }
    *
    * */
    const [keepAliveStates,dispatch] = useReducer(keepAliveReducer,{})
    const setKeepAliveState = useCallback(({keepAliveId,reactElement})=>{
        // 当当前keepAliveId不存在的时候 新增当前数据存储
        if(!keepAliveStates[keepAliveId]){
            dispatch({
                type:actionTypes.CREATING,
                payload:{
                    keepAliveId,
                    reactElement
                }
            })
        }
    },[keepAliveStates])
    return (
        <KeepAliveContext.Provider value={{
            setKeepAliveState,
            keepAliveStates,
            dispatch
        }}>
            {
                props.children
            }
            {
                Object.values(keepAliveStates).map(({keepAliveId,reactElement})=>(
                    <div key = {keepAliveId} ref={ (node)=>{
                        // node有值，并且在useReducer中声明的数据nodes为null
                        if((node&&!keepAliveStates[keepAliveId].nodes)){
                            //type 标志已经修改了
                            // keepAliveId
                            // nodes 拿到当前页面的页面内容
                            dispatch({
                                type:actionTypes.CREATED,
                                payload:{
                                    keepAliveId,
                                    nodes:[...node.childNodes]
                                }
                            })
                        }
                    }}>
                        {
                            reactElement
                        }
                    </div>
                ))
            }
        </KeepAliveContext.Provider>
    )

}

export default KeepAlive
