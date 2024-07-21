document.querySelector('#btn').addEventListener('click', () => {
    const elementType = document.querySelector('#elementType').value;
    const element = document.createElement(elementType);
    let ucolor = document.querySelector('#ucolor').value;
    let sizew = document.querySelector('#sizew').value;
    let sizeh = document.querySelector('#sizeh').value;
    let content = document.querySelector('#content').value;
    let fontSize = document.querySelector('#fontSize').value;
    let fontColor = document.querySelector('#fontColor').value;
    let frameThickness = document.querySelector('#frameThickness').value;
    let frameStyle = document.querySelector('#frameStyle').value;
    let frameColor = document.querySelector('#frameColor').value;
    let internalSpacing = document.querySelector('#internalSpacing').value;
    let externalSpacing = document.querySelector('#externalSpacing').value;
    let borderRadius = document.querySelector('#borderRadius').value;
    let shadowX = document.querySelector('#shadowX').value;
    let shadowY = document.querySelector('#shadowY').value;
    let shadowColor = document.querySelector('#shadowColor').value;

    element.style.border = frameThickness + 'px ' + frameStyle + ' ' + frameColor;
    element.style.backgroundColor = ucolor;
    element.style.width = sizew + 'px';
    element.style.height = sizeh + 'px';
    element.textContent = content;
    element.style.fontSize = fontSize + 'px';
    element.style.color = fontColor;
    element.style.padding = internalSpacing + 'px';
    element.style.margin = externalSpacing + 'px';
    element.style.borderRadius = borderRadius + 'px';
    element.style.boxShadow = shadowX + 'px ' + shadowY + 'px 5px ' + shadowColor;

    element.classList.add('element');
    const contentElement = document.createElement('div');
    contentElement.textContent = content;
    contentElement.classList.add('element-content');
    element.appendChild(contentElement);

    document.querySelector('.container').appendChild(element);
})