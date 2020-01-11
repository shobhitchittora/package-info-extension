let card = (function () {
  
    function createDomNode(type = 'div', options) {
        let className = '';
        let innerText = '';
        if (options) {
            className = options.className;
            innerText = options.innerText;
        }

        const element = document.createElement(type);
        if (className) {
            element.classList.add(className);
        }
        if (innerText) {
            element.innerText = innerText;
        }

        return element;
    }

    function cardHeader(heading, subHeading) {
        const headerContainer = createDomNode('div', { className: 'package-info-card-header' });

        headerContainer.appendChild(createDomNode('h1', { innerText: heading }));
        headerContainer.appendChild(createDomNode('h2', { innerText: subHeading }));

        return headerContainer;
    }

    function cardBody(text) {
        const bodyContainer = createDomNode('div', { className: 'package-info-card-body' });

        bodyContainer.appendChild(createDomNode('p', { innerText: text }));

        return bodyContainer;
    }

    function render() {
        if (document) {
            const container = createDomNode('div', { className: 'package-info-card-container' });

            container.appendChild(cardHeader('fb/React', 'Latest version: 16.x'));
            container.appendChild(cardBody('Front-end library on 🔥.'));
            return container;
        }

        return null;
    }


    function renderToString() {
        const renderTree = render();
        if (renderTree) {
            return renderTree.outerHTML;
        }
    }

    return {
        render,
        renderToString,
    };
})();

module.exports = card;