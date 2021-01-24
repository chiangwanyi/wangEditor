/**
 * @description 绑定点击事件
 * @author lichunlin
 */

import Editor from '../../../editor/index'
import bindTooltip from './tooltip-event'
import bindEventDomEvent from './dom-event'

/**
 * 绑定事件
 * @param editor 编辑器实例
 */
function bindEvent(editor: Editor): void {
    //Tooltip
    bindTooltip(editor)

    bindEventDomEvent(editor)
}

export default bindEvent
