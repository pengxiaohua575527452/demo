import React from "react"
import $style from "./index.module.scss"

// 根据options 和 values 返回衍生状态options
function getDerivedOptionsStateFromProps(options = [], values = []){
    return options.map(option => {
      let index = values.findIndex(v => v.id === option.id)
  
      return {
        ...option,
        selected: (!~index) ? false : true
      }
    })
  }

// 根据 options 和values 返回衍生的状态 values
function getDerivedValuesStateFromProps(options = [], values = []){
    return values.map(v => {
        let o = options.find(option => option.id === v.id)
        if(o){
        return {...o}
        }else{
        console.error('没有找到匹配的 value: ',v)
        return null
        }
    })
}
  

export default function Select(props){
    console.log('updateSelect: ', props.values)
    
    // 根据传递过来的选项对象和选中的值
    // 初始化 衍生options状态
    let [derivedOptionsState, setDerivedOptionsState] = React.useState( getDerivedOptionsStateFromProps(props.options, props.values))
    let [values, setValues]= React.useState(getDerivedValuesStateFromProps(props.options, props.values))
    let [isOpen, setIsOpen] = React.useState(false)
    let height = React.useMemo(() => {
      let maxSize
      if(props.options.length > props.maxSize){
        maxSize = props.maxSize
      }else{
        maxSize =  props.options.length
      }
  
      return  isOpen ? maxSize * 34 : 0
  
    }, [props.options, props.maxSize, isOpen])
  
    console.log("height: ", height)
   
    // 点击了事件处理器
    function onClick(e){
      let dataset = e.nativeEvent.target.dataset;
  
      if(dataset.selected === "-1"){
        add(props, dataset)
      }else{
        remove(props, dataset)
      }
    }
  
    // 添加
    function add(props, dataset){
      let t = [...props.values, {id: dataset.id}]
      updateValues(props, t)
    }
  
    // 删除
    function remove(props, dataset){
        // 状态时选中
        let t = props.values
        let index = t.findIndex(item => item.id === dataset.id)
        if(!~index){
          console.error('没有找到匹配的项')
        }else{
          t.splice(index, 1)
          updateValues(props, t)
          return 
        }
    }
  
    // 更新
    function updateValues(props, values){
      props.onChange(values)
      setDerivedOptionsState(getDerivedOptionsStateFromProps(props.options, values))
      setValues(getDerivedValuesStateFromProps(props.options, values))
    }
  
    // 带年纪 tag cancel 的事件处理器
    function onCancel(e){
      let dataset = e.nativeEvent.target.dataset;
      remove(props, dataset)
    }
  
    // 展开折叠操作
    function onToggle(){
      setIsOpen(isOpen => !isOpen)
    }
  
    // 获取select.icon 图标的样式
    function getIconClass(isOpen){
      let baseClassName = `${$style.iconArrow} ${$style.iconArrowTop}`
      console.log('isOpen: ', isOpen)
      
      return isOpen ? `${baseClassName} ${$style.iconArrowBottom}` : baseClassName
    }
  
    // 获取select 的样式
    function getSelectClass(isOpen){
      return isOpen ? `${$style.select} ${$style.selectFocus}` : `${$style.select}`
    }
  
    function getOptionContainerClass(isOpen){
      return isOpen ? `${$style.optionContainer}` : `${$style.optionContainer} ${$style.unvisible}`
    }
  
    // 获取选项列表 class
    function getUlCalss(isOpen){
      return isOpen ? `${$style.ul} ${$style.ulActive}` : `${$style.ul}`
    }
  
    return(
      <>
        {/* 选项框 */}
        <div 
          className={getSelectClass(isOpen)}
          onClick={onToggle}
        >
          <div className={$style.valueContainer} >
            {/* 当前选中项列表 */}
            {
              values.map(v => {
                return (
                  <span key={v.id} className={$style.tag} onClick={e => e.stopPropagation()}>
                    <span>{v.label}</span>
                    <span 
                      className={$style.iconCancel} 
                      onClick={onCancel}
                      data-id={v.id}  
                    ></span>  
                  </span>
                )
              })
            }
          </div>
          <div className={$style.iconContainer} >
            <div className={getIconClass(isOpen)}></div>
          </div>
  
          {/* 选项 */}
          <div className={getOptionContainerClass(isOpen)} onClick={e => e.stopPropagation()}>
            <div className={$style.arrowTop}></div>
            <ul 
              className={getUlCalss(isOpen)} 
              onClick={onClick}
              style={{height: `${height}px`}} 
            >
              {/* 列表最多显示 5 个 */}
              {
                derivedOptionsState.map(option => {
                  let className = `${$style.li} ${option.selected ? $style.liSelected : ""}`
                  return (
                    <li 
                      key={option.id} 
                      className={className} 
                      data-id={option.id}
                      data-selected={option.selected ? 1 : -1}
                    >{option.label}</li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </>
    )
  } 
  
  