# Context
    - 上下文 -> Provider -> 子组件们提供公共的属性或者方法。
    - 缓存的是什么？ -> 真实DOM。
    - 组件的视图渲染？ -> 一定建立在append 真实DOM上。
    - 缓存是怎么做的？ -> 一定是保存在一个对象。
        - id:{ nodes, ReactElement, status,  }

# 结构
    Provider => 方法 属性
     组件 => nodes => 设置缓存的方法
            => nodes => 组件的渲染

