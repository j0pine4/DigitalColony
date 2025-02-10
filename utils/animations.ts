import gsap from "gsap";

export class Animations {
    static hoverElements = new Set<Element>();

    constructor() {
        this.__SetAnimationClass();
    }

    private __AppendHoverElements(inputArray: Element[]) {
        inputArray.forEach(element => {
            Animations.hoverElements.add(element)
        })
    }

    private __AssignDocumentListener() {
        Animations.hoverElements.forEach(element => {
            element.addEventListener('mouseover', () => this.mouseEnter())
            element.addEventListener('mouseleave', () => this.mouseExit())
        })
    }

    private mouseEnter() {
        gsap.to('#cursor', {
            scale: 3,
            duration: 0.3
        })

        gsap.to('#cursorIcon', {
            opacity: 1,
            duration: 0.3
        })
    }

    private mouseExit() {
        gsap.to('#cursor', {
            scale: 1,
            duration: 0.3
        })

        gsap.to('#cursorIcon', {
            opacity: 0,
            duration: 0.3
        })
    }

    private __SetAnimationClass() {
        let hoverElements: Element[] = [...document.querySelectorAll('.hover-active')];
        this.__AppendHoverElements(hoverElements);
        this.__AssignDocumentListener();
    }


}