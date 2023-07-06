class VReact {
    constructor(targetSelector) {
        let target = document.querySelector(targetSelector);
        this.target = target;
    }

    target; // targetのDOM

    Render(Component) {
        this.target.innerHTML = Component;
    } // Render

    Components = class {
        constructor() {

        } // 変数定義

        Element;

        render() {
            // リテラル処理etc
            let CopyElement = this.Element;
            return CopyElement;
        }

        $V = {
            
        }
    }
}

export { VReact };