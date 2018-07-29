var EventUtil = {
    addEvent(el, type, handler) {
        if (el.addEventListener) {
            el.addEventListener(type, handler, false);
        } else if (el.attachEvent) {
            el.attachEvent('on' + type, handler);
        } else {
            el['on' + type] = handler
        }
    },
    removeEvent(el, type, handler) {
        if (el.removeEventListener) {
            el.removeEventListener(type, handler, false)
        } else if (el.detachEvent) {
            el.detachEvent('on' + type, handler);
        } else {
            el['on' + type] = null
        }
    },
    getEvent(event) {
        return event ? event : window.event;
    },
    getRelatedTarget(event) {
        return event.relatedTarget || event.toElement || event.fromElement || null
    },
    getTarget(event) {
        return event.target || event.srcElement
    },
    preventDefault(event) {
        event.preventDefault ? event.preventDefault() : event.returnValue = false
    },
    stopPropagation(event) {
        event.stopPropagation ? event.stopPropagation() : event.canceBubble = false
    }
};
function createEl(tagName,text,className){
    let el = document.createElement(tagName)
    className ? el.className=className : null
    text ? el.innerText=text : null
    return el
};
export {createEl,EventUtil}